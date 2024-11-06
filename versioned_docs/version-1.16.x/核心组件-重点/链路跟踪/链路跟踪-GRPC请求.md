---
title: '链路跟踪-GRPC请求'
sidebar_position: 2
hide_title: true
---

在本章节中，我们将之前介绍 `HTTP Client&Server` 的示例修改为 `GRPC` 微服务，并演示如何使用 `GoFrame` 框架开发一个简单的 `GRPC` 服务端和客户端，并且为 `GRPC` 微服务增加链路跟踪特性。 `OK, Let's 撸！`

本章节的示例代码位于： [https://github.com/gogf/gf-tracing/tree/master/examples/grpc\_db\_redis\_log](https://github.com/gogf/gf-tracing/tree/master/examples/grpc_db_redis_log)

## 目录结构

![](/markdown/5733cbf64c7e1f3300951eb4c9261de9.png)

## Protocol

```
syntax = "proto3";

package user;

option go_package = "protobuf/user";

import "github.com/gogo/protobuf/gogoproto/gogo.proto";

// User service for tracing demo.
service User {
  rpc Insert(InsertReq) returns (InsertRes) {}
  rpc Query(QueryReq) returns (QueryRes) {}
  rpc Delete(DeleteReq) returns (DeleteRes) {}
}

message InsertReq {
  string Name = 1 [(gogoproto.moretags) = 'v:"required#Please input user name."'];
}

message InsertRes {
  int32 Id = 1;
}

message QueryReq {
  int32 Id = 1 [(gogoproto.moretags) = 'v:"min:1#User id is required for querying."'];
}

message QueryRes {
  int32  Id = 1;
  string Name = 2;
}

message DeleteReq {
  int32 Id = 1 [(gogoproto.moretags) = 'v:"min:1#User id is required for deleting."'];
}

message DeleteRes {}
```

这里使用到了第三方的 [github.com/gogo/protobuf](http://github.com/gogo/protobuf) 开源项目，用于注入自定义的 `Golang struct` 标签。这里不详细介绍，感兴趣的小伙伴可以自行了解。未来 `Katyusha` 微服务框架的官网文档也会做对这块详细介绍，包括 `GRPC` 工程目录、开发规范、开发工具、拦截器、注册发现、负载均衡等设计话题。

## GRPC Server

```go
package main

import (
    "context"
    "fmt"
    "gftracing/examples/grpc+db+redis+log/protobuf/user"
    "gftracing/tracing"
    "github.com/gogf/gcache-adapter/adapter"
    "github.com/gogf/gf/frame/g"
    "github.com/gogf/katyusha/krpc"
    "google.golang.org/grpc"
    "net"
    "time"
)

type server struct{}

const (
    ServiceName       = "tracing-grpc-server"
    JaegerUdpEndpoint = "localhost:6831"
)

func main() {
    flush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)
    if err != nil {
        g.Log().Fatal(err)
    }
    defer flush()

    g.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))

    address := ":8000"
    listen, err := net.Listen("tcp", address)
    if err != nil {
        g.Log().Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer(
        grpc.ChainUnaryInterceptor(
            krpc.Server.UnaryError,
            krpc.Server.UnaryRecover,
            krpc.Server.UnaryTracing,
            krpc.Server.UnaryValidate,
        ),
    )
    user.RegisterUserServer(s, &server{})
    g.Log().Printf("grpc server starts listening on %s", address)
    if err := s.Serve(listen); err != nil {
        g.Log().Fatalf("failed to serve: %v", err)
    }
}

// Insert is a route handler for inserting user info into dtabase.
func (s *server) Insert(ctx context.Context, req *user.InsertReq) (*user.InsertRes, error) {
    res := user.InsertRes{}
    result, err := g.Table("user").Ctx(ctx).Insert(g.Map{
        "name": req.Name,
    })
    if err != nil {
        return nil, err
    }
    id, _ := result.LastInsertId()
    res.Id = int32(id)
    return &res, nil
}

// Query is a route handler for querying user info. It firstly retrieves the info from redis,
// if there's nothing in the redis, it then does db select.
func (s *server) Query(ctx context.Context, req *user.QueryReq) (*user.QueryRes, error) {
    res := user.QueryRes{}
    err := g.Table("user").
        Ctx(ctx).
        Cache(5*time.Second, s.userCacheKey(req.Id)).
        WherePri(req.Id).
        Scan(&res)
    if err != nil {
        return nil, err
    }
    return &res, nil
}

// Delete is a route handler for deleting specified user info.
func (s *server) Delete(ctx context.Context, req *user.DeleteReq) (*user.DeleteRes, error) {
    res := user.DeleteRes{}
    _, err := g.Table("user").
        Ctx(ctx).
        Cache(-1, s.userCacheKey(req.Id)).
        WherePri(req.Id).
        Delete()
    if err != nil {
        return nil, err
    }
    return &res, nil
}

func (s *server) userCacheKey(id int32) string {
    return fmt.Sprintf(`userInfo:%d`, id)
}
```

服务端代码简要说明：

1、首先，客户端也是需要通过 `initTracer` 方法初始化 `Jaeger`。

2、可以看到，业务逻辑和之前HTTP示例项目完全一致，只是接入层修改为了GRPC协议。

3、我们仍然通过缓存适配器的方式注入Redis缓存：

```go
g.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))
```

4、关键技术点来了，拦截器。这里我们添加了若干个拦截器，并且都由 `Katyusha` 微服务框架提供，由于这里使用的 `GRPC` 原生的服务端创建方式，因此只是复用了 `Katyusha` 的一些拦截器，所有拦截器便需要显式设置：

| Unary Interceptor | 说明 |
| --- | --- |
| `krpc.Server.UnaryError` | 错误处理，增加了对 `gerror` 组件的支持，支持业务方便地定义错误码。 |
| `krpc.Server.UnaryRecover` | 异常捕获，防止业务处理逻辑抛一个 `panic` 整个进程就崩溃。 |
| `krpc.Server.UnaryTracing` | 链路跟踪，通过该拦截器启用服务端的链路跟踪特性。 |
| `krpc.Server.UnaryValidate` | 数据校验，通过拦截器的形式自动对输入对象调用 `gvalid` 组件执行数据校验，校验失败直接返回。如果对象 `struct` 定义中不包含校验标签时，该拦截器什么都不会做，快速返回，不影响性能。 |

5、这里也是通过 `Cache` 方法启用 `ORM` 的缓存特性，之前已经做过介绍，这里不再赘述。

## GRPC Client

```go
package main

import (
    "context"
    "gftracing/examples/grpc+db+redis+log/protobuf/user"
    "gftracing/tracing"
    "github.com/gogf/gf/frame/g"
    "github.com/gogf/gf/net/gtrace"
    "github.com/gogf/katyusha/krpc"
    "google.golang.org/grpc"
)

const (
    ServiceName       = "tracing-grpc-client"
    JaegerUdpEndpoint = "localhost:6831"
)

func main() {
    flush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)
    if err != nil {
        g.Log().Fatal(err)
    }
    defer flush()

    StartRequests()
}

func StartRequests() {
    ctx, span := gtrace.NewSpan(context.Background(), "StartRequests")
    defer span.End()

    grpcClientOptions := make([]grpc.DialOption, 0)
    grpcClientOptions = append(
        grpcClientOptions,
        grpc.WithInsecure(),
        grpc.WithBlock(),
        grpc.WithChainUnaryInterceptor(
            krpc.Client.UnaryError,
            krpc.Client.UnaryTracing,
        ),
    )

    conn, err := grpc.Dial(":8000", grpcClientOptions...)
    if err != nil {
        g.Log().Fatalf("did not connect: %v", err)
    }
    defer conn.Close()

    client := user.NewUserClient(conn)

    // Baggage.
    ctx = gtrace.SetBaggageValue(ctx, "uid", 100)

    // Insert.
    insertRes, err := client.Insert(ctx, &user.InsertReq{
        Name: "john",
    })
    if err != nil {
        g.Log().Ctx(ctx).Fatalf(`%+v`, err)
    }
    g.Log().Ctx(ctx).Println("insert:", insertRes.Id)

    // Query.
    queryRes, err := client.Query(ctx, &user.QueryReq{
        Id: insertRes.Id,
    })
    if err != nil {
        g.Log().Ctx(ctx).Printf(`%+v`, err)
        return
    }
    g.Log().Ctx(ctx).Println("query:", queryRes)

    // Delete.
    _, err = client.Delete(ctx, &user.DeleteReq{
        Id: insertRes.Id,
    })
    if err != nil {
        g.Log().Ctx(ctx).Printf(`%+v`, err)
        return
    }
    g.Log().Ctx(ctx).Println("delete:", insertRes.Id)

    // Delete with error.
    _, err = client.Delete(ctx, &user.DeleteReq{
        Id: -1,
    })
    if err != nil {
        g.Log().Ctx(ctx).Printf(`%+v`, err)
        return
    }
    g.Log().Ctx(ctx).Println("delete:", -1)

}
```

客户端代码简要说明：

1、首先，客户端也是需要通过 `initTracer` 方法初始化 `Jaeger`。

2、主要的也是 `UnaryError` 和 `UnaryTracing` 两个拦截器的使用，作用同上服务端介绍。

## 效果查看

**启动服务端：**

![](/markdown/542a1bcc2240a7a03a20aefb5b06ebc7.png)

**启动客户端：**

![](/markdown/6eba27f51519498eb3aafc8b84dd8ef0.png)

这里客户端的执行最后报了一个错误，那是我们 **故意为之**，目的是演示 `GRPC` 报错时的链路信息展示。我们打开 `jaeger` 查看一下链路跟踪信息：

![](/markdown/d71c4f2f45fb4318f2720079f7900b55.png)

可以看到本次请求涉及到两个服务： `tracing-grpc-client` 和 `tracing-grpc-server`，即客户端和服务端。整个请求链路涉及到 `17` 个 `span`，客户端 `5` 个 `span`，服务端 `12` 个 `span`，并且产生了 `2` 个错误。我们点击查看详情：

![](/markdown/bb0c5f9d5c675ba3d12db7acdc2e75d3.png)

我们点击查看一下最后接口调用错误的 `span` 情况：

![](/markdown/02c11e5ec50620c71df070a94294354a.png)

看起来像个参数校验错误，点击查看 `Events/Logs` 中的请求参数：

![](/markdown/d5e2b3db44b0dd7499497f6a9a140c38.png)

查看 `Process` 中的 `Log` 信息可以看到，是由于传递的参数为 `-1`，不满足校验规则，因此在数据校验的时候报错返回了。

### GRPC Client

由于 `orm`、 `redis`、 `logging` 组件在之前的章节中已经介绍过链路信息，因此我们这里主要介绍 `GRPC Client&Server` 的链路信息。

#### Attributes

![](/markdown/dd6010b46a4fb66332269dc7cd1f5b08.png)

| Attribute/Tag | 说明 |
| --- | --- |
| `net.peer.ip` | 请求的目标IP。 |
| `net.peer.port` | 请求的目标端口。 |
| `rpc.grpc.status_code` | `GRPC` 的内部状态码， `0` 表示成功， `非0` 表示失败。 |
| `rpc.service` | `RPC` 的服务名称，注意这里是 `RPC` 而不是 `GRPC`，因为这里是通用定义，客户端支持多种 `RPC` 通信协议， `GRPC` 只是其中一种。 |
| `rpc.method` | `RPC` 的方法名称。 |
| `rpc.system` | `RPC` 协议类型，如： `grpc`, `thrift` 等。 |

#### Events/Logs

![](/markdown/dd199b9c43f5e108801f97e181f9efe1.png)

| Event/Log | 说明 |
| --- | --- |
| `grpc.metadata.outgoing` | `GRPC` 客户端请求提交的 `Metadata` 信息，可能会比较大。 |
| `grpc.request.baggage` | `GRPC` 客户端请求提交的 `Baggage` 信息，用于服务间链路信息传递。 |
| `grpc.request.message` | `GRPC` 客户端请求提交的 `Message` 数据，可能会比较大，最大只记录 `512KB`，如果超过该大小则忽略。仅对 `Unary` 请求类型有效。 |
| `grpc.response.message` | `GRPC` 客户端请求接收返回的的 `Message` 信息，可能会比较大。仅对 `Unary` 请求类型有效。 |

### GRPC Server

#### Attributes

![](/markdown/4a51d90aedfb537694974e9860eb0c9e.png)

`GRPC Server` 端的 `Attributes` 含义同 `GRPC Client`，在同一请求中，打印的数据基本一致。

#### Events

![](/markdown/66b354e5cc734e291cec8ef20faf5346.png)

`GRPC Server` 端的 `Events` 与 `GRPC Client` 不同的是，在同一请求中，服务端接收到的 `metadata` 为 `grpc.metadata.incoming`，其他同 `GRPC Client`。