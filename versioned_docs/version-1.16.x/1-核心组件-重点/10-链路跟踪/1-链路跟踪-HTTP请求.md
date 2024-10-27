---
title: '链路跟踪-HTTP请求'
sidebar_position: 1
---

在本章节中，我们演示两个示例，一个用于演示 `baggage` 服务间上下文数据传递；一个用于演示较完整的 `HTTP+DB+Redis+Logging` 组件的链路跟踪。

## `baggage` 服务间链路数据传递

示例代码地址： [https://github.com/gogf/gf-tracing/tree/master/examples/http](https://github.com/gogf/gf-tracing/tree/master/examples/http)

### 客户端

```
package main

import (
	"context"
	"gftracing/tracing"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/gogf/gf/net/gtrace"
)

const (
	ServiceName       = "tracing-http-client"
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

	ctx = gtrace.SetBaggageValue(ctx, "name", "john")

	client := g.Client().Use(ghttp.MiddlewareClientTracing)

	content := client.Ctx(ctx).GetContent("http://127.0.0.1:8199/hello")
	g.Log().Ctx(ctx).Print(content)
}
```

客户端代码简要说明：

1. 首先，客户端也是需要通过 `initTracer` 方法初始化 `Jaeger`。
2. 随后，这里通过 `gtrace.SetBaggageValue(ctx, "name", "john")` 方法设置了一个 `baggage`，该 `baggage` 将会在该请求的所有链路中传递。不过我们该示例也有两个节点，因此该 `baggage` 数据只会传递到服务端。该方法会返回一个新的 `context.Context` 上下文变量，在随后的调用链中我们将需要传递这个新的上下文变量。
3. 其中，这里通过 `g.Client().Use(ghttp.MiddlewareClientTracing)` 创建一个HTTP客户端请求对象，并通过 `Use` 方法设置客户端请求的拦截器。随后该客户端对象所有的的请求都将会通过拦截器处理后再发出。这里的注册拦截器 `ghttp.MiddlewareClientTracing` 主要用于启用链路跟踪特性，否则客户端请求中不会自动增加链路信息。
4. 最后，这里使用了 `g.Log().Ctx(ctx).Print(content)` 方法打印服务端的返回内容，其中的 `Ctx(ctx)` 便是将链路信息传递给日志组件，如果 `ctx` 上下文对象中存在链路信息时，日志组件会同时自动将 `TraceId` 输出到日志内容中。

### 服务端

```
package main

import (
	"gftracing/tracing"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/gogf/gf/net/gtrace"
)

const (
	ServiceName       = "tracing-http-server"
	JaegerUdpEndpoint = "localhost:6831"
)

func main() {
	flush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)
	if err != nil {
		g.Log().Fatal(err)
	}
	defer flush()

	s := g.Server()
	s.Group("/", func(group *ghttp.RouterGroup) {
		group.Middleware(ghttp.MiddlewareServerTracing)
		group.GET("/hello", HelloHandler)
	})
	s.SetPort(8199)
	s.Run()
}

func HelloHandler(r *ghttp.Request) {
	ctx, span := gtrace.NewSpan(r.Context(), "HelloHandler")
	defer span.End()

	value := gtrace.GetBaggageVar(ctx, "name").String()

	r.Response.Write("hello:", value)
}
```

服务端代码简要说明：

1. 当然，服务端也是需要通过 `initTracer` 方法初始化 `Jaeger`。
2. 服务端通过 `group.Middleware(ghttp.MiddlewareServerTracing)` 注册一个分组路由中间件，该中间件的作用是启用链路跟踪特性，所有该分组路由下的请求都将会经过中间件的处理后再将请求转交给路由方法。我们在项目中也可以注册 **全局中间件** 的形式来启用链路跟踪特性，关于中间件的介绍请查看 [路由管理-中间件/拦截器](output/goframe-v1.16-md/WEB服务开发/路由管理/路由管理-中间件拦截器) 章节。
3. 服务端通过 `gtrace.GetBaggageVar(ctx, "name").String()` 方法获取客户端提交的 `baggage` 信息，并转换为字符串返回。

### 效果查看

**启动服务端：**

![](/markdown/519174fb3d7095aa8af18b076232278e.png)

**启动客户端：**

![](/markdown/14ef8158b6c02fe628fd75d71280aa31.png)

可以看到，客户端提交的 `baggage` 已经被服务端成功接收到并打印返回。并且客户端在输出日志内容的时候也同时输出的 `TraceId` 信息。 `TraceId` 是一条链路的唯一ID，可以通过该ID检索该链路的所有日志信息，并且也可以通过该 `TraceId` 在 `Jaeger` 系统上查询该调用链路详情。

在 `Jaeger` 上查看链路信息：

![](/markdown/99bbc018635f6a1a715cc94233cc5b18.png)

可以看到在这里出现了两个服务名称： `tracing-http-client` 和 `tracing-http-server`，表示我们这次请求涉及到两个服务，分别是HTTP请求的客户端和服务端，并且每个服务中分别涉及到 `2` 个 `span` 链路节点。

我们点击这个 `trace` 的详情，可以看得到调用链的层级关系。并且可以看得到客户端请求的地址、服务端接收的路由以及服务端路由函数名称。我们这里来介绍一下客户端的 `Atttributes` 信息和 `Events` 信息，也就是 `Jaeger` 中展示的 `Tags` 信息和 `Process` 信息。

#### HTTP Client Attributes

![](/markdown/03fb20fca84fd76b1c9dffe527864120.png)

| Attribute/Tag | 说明 |
| --- | --- |
| `otel.instrumentation_library.name` | 当前仪表器名称，往往是当前 `span` 操作的组件名称 |
| `otel.instrumentation_library.version` | 当前仪表器组件版本 |
| `span.kind` | 当前 `span` 的类型，一般由组件自动写入。常见 `span` 类型为：

| 类型 | 说明 |
| --- | --- |
| `client ` | 客户端 |
| `server` | 服务端 |
| `producer` | 生产者，常用于MQ |
| `consumer` | 消费者，常用于MQ |
| `internal` | 内部方法，一般业务使用 |
| `undefined` | 未定义，较少使用 | |
| `status.code` | 当前 `span` 状态， `0` 为正常， `非0` 表示失败 |
| `status.message` | 当前 `span` 状态信息，往往在失败时会带有错误信息 |
| `hostname` | 当前节点的主机名称 |
| `ip.intranet` | 当前节点的主机内网地址列表 |
| `http.address.local` | HTTP通信的本地地址和端口 |
| `http.address.remote` | HTTP通信的目标地址和端口 |
| `http.dns.start` | 当请求的目标地址带有域名时，开始解析的域名地址 |
| `http.dns.done` | 当请求的目标地址带有域名时，解析结束之后的IP地址 |
| `http.connect.start` | 开始创建连接的类型和地址 |
| `http.connect.done` | 创建连接成功后的类型和地址 |

#### HTTP Client Events

![](/markdown/3facee1892eeb6c8882f48b4b7d1559b.png)

| Event/Log | 说明 |
| --- | --- |
| `http.request.headers` | HTTP客户端请求提交的 `Header` 信息，可能会比较大。 |
| `http.request.baggage` | HTTP客户端请求提交的 `Baggage` 信息，用于服务间链路信息传递。 |
| `http.request.body` | HTTP客户端请求提交的 `Body` 数据，可能会比较大，最大只记录 `512KB`，如果超过该大小则忽略。 |
| `http.response.headers` | HTTP客户端请求接收返回的的 `Header` 信息，可能会比较大。 |
| `http.response.body` | HTTP客户端请求接收返回的 `Body` 数据，可能会比较大，最大只记录 `512KB`，如果超过该大小则忽略。 |

#### HTTP Server Attributes

![](/markdown/9b2ae9368316d389d53034408f734fa5.png)

`HTTP Server` 端的 `Attributes` 含义同 `HTTP Client`，在同一请求中，打印的数据基本一致。

#### HTTP Server Events

![](/markdown/2848ee42d97c698b7279daaba5a23648.png)

`HTTP Server` 端的 `Events` 含义同 `HTTP Client`，在同一请求中，打印的数据基本一致。

## `HTTP+DB+Redis+Logging`

我们再来看一个相对完整一点的例子，包含几个常用核心组件的链路跟踪示例，示例代码地址： [https://github.com/gogf/gf-tracing/tree/master/examples/http\_db\_redis\_log](https://github.com/gogf/gf-tracing/tree/master/examples/http_db_redis_log)

### 客户端

```
package main

import (
	"context"
	"gftracing/tracing"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"github.com/gogf/gf/net/gtrace"
)

const (
	ServiceName       = "tracing-http-client"
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

	client := g.Client().Use(ghttp.MiddlewareClientTracing)
	// Add user info.
	idStr := client.Ctx(ctx).PostContent(
		"http://127.0.0.1:8199/user/insert",
		g.Map{
			"name": "john",
		},
	)
	if idStr == "" {
		g.Log().Ctx(ctx).Print("retrieve empty id string")
		return
	}
	g.Log().Ctx(ctx).Print("insert:", idStr)

	// Query user info.
	userJson := client.Ctx(ctx).GetContent(
		"http://127.0.0.1:8199/user/query",
		g.Map{
			"id": idStr,
		},
	)
	g.Log().Ctx(ctx).Print("query:", idStr, userJson)

	// Delete user info.
	deleteResult := client.Ctx(ctx).PostContent(
		"http://127.0.0.1:8199/user/delete",
		g.Map{
			"id": idStr,
		},
	)
	g.Log().Ctx(ctx).Print("delete:", idStr, deleteResult)
}
```

客户端代码简要说明：

1. 首先，客户端也是需要通过 `initTracer` 方法初始化 `Jaeger`。
2. 在本示例中，我们通过HTTP客户端向服务端发起了 `3` 次请求：
1. `/user/insert` 用于新增一个用户信息，成功后返回用户的ID。
2. `/user/query` 用于查询用户，使用前一个接口返回的用户ID。
3. `/user/delete` 用于删除用户，使用之前接口返回的用户ID。

### 服务端

```
package main

import (
	"fmt"
	"gftracing/tracing"
	"github.com/gogf/gcache-adapter/adapter"
	"github.com/gogf/gf/errors/gerror"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/net/ghttp"
	"time"
)

type tracingApi struct{}

const (
	ServiceName       = "tracing-http-server"
	JaegerUdpEndpoint = "localhost:6831"
)

func main() {
	flush, err := tracing.InitJaeger(ServiceName, JaegerUdpEndpoint)
	if err != nil {
		g.Log().Fatal(err)
	}
	defer flush()

	g.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))

	s := g.Server()
	s.Group("/", func(group *ghttp.RouterGroup) {
		group.Middleware(ghttp.MiddlewareServerTracing)
		group.ALL("/user", new(tracingApi))
	})
	s.SetPort(8199)
	s.Run()
}

type userApiInsert struct {
	Name string `v:"required#Please input user name."`
}

// Insert is a route handler for inserting user info into dtabase.
func (api *tracingApi) Insert(r *ghttp.Request) {
	var (
		dataReq *userApiInsert
	)
	if err := r.Parse(&dataReq); err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	result, err := g.Table("user").Ctx(r.Context()).Insert(g.Map{
		"name": dataReq.Name,
	})
	if err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	id, _ := result.LastInsertId()
	r.Response.Write(id)
}

type userApiQuery struct {
	Id int `v:"min:1#User id is required for querying."`
}

// Query is a route handler for querying user info. It firstly retrieves the info from redis,
// if there's nothing in the redis, it then does db select.
func (api *tracingApi) Query(r *ghttp.Request) {
	var (
		dataReq *userApiQuery
	)
	if err := r.Parse(&dataReq); err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	one, err := g.Table("user").
		Ctx(r.Context()).
		Cache(5*time.Second, api.userCacheKey(dataReq.Id)).
		FindOne(dataReq.Id)
	if err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	r.Response.WriteJson(one)
}

type userApiDelete struct {
	Id int `v:"min:1#User id is required for deleting."`
}

// Delete is a route handler for deleting specified user info.
func (api *tracingApi) Delete(r *ghttp.Request) {
	var (
		dataReq *userApiDelete
	)
	if err := r.Parse(&dataReq); err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	_, err := g.Table("user").
		Ctx(r.Context()).
		Cache(-1, api.userCacheKey(dataReq.Id)).
		WherePri(dataReq.Id).
		Delete()
	if err != nil {
		r.Response.WriteExit(gerror.Current(err))
	}
	r.Response.Write("ok")
}

func (api *tracingApi) userCacheKey(id int) string {
	return fmt.Sprintf(`userInfo:%d`, id)
}
```

服务端代码简要说明：

1. 首先，客户端也是需要通过 `initTracer` 方法初始化 `Jaeger`。
2. 在本示例中，我们使用到了数据库和数据库缓存功能，以便于同时演示 `orm` 和 `redis` 的链路跟踪记录。
3. 我们在程序启动时通过 `g.DB().GetCache().SetAdapter(adapter.NewRedis(g.Redis()))` 设置当前数据库缓存管理的适配器为 `redis`。关于缓存适配器的介绍感兴趣可以参考 [缓存管理-缓存适配](output/goframe-v1.16-md/核心组件-重点/缓存管理/缓存管理-缓存适配) 章节。
4. 在 `orm` 的操作中，需要通过 `Ctx` 方法将上下文变量传递到组件中， `orm` 组件会自动识别当前上下文中是否包含Tracing链路信息，如果包含则自动启用链路跟踪特性。
5. 在 `orm` 的操作中，这里使用 `Cache` 方法缓存查询结果到 `redis` 中，并在删除操作中也使用 `Cache` 方法清除 `redis` 中的缓存结果。关于 `orm` 的缓存管理介绍请参考 [ORM链式操作-查询缓存](output/goframe-v1.16-md/核心组件-重点/数据库ORM/ORM链式操作-重点/ORM链式操作-查询缓存) 章节。在 `orm` 的内部实现中，也是会将该 `context.Context` 上下文变量传递给 `redis` 链式操作中， `redis` 组件也有一个 `Ctx` 链式操作方法，这样 `redis` 组件也会自动识别链路信息并做自动开启。

### 效果查看

**启动服务端：**

![](/markdown/f71f9a01a85e090c2a346dfd385f8ff8.png)

**启动客户端：**

![](/markdown/54be33a8be944c0486bf8711eb6258b8.png)

在 `Jaeger` 上查看链路信息：

![](/markdown/e07811d35b7e3b4593d3e7d02292935f.png)

可以看到，这次请求总共产生了 `14` 个 `span`，其中客户端有 `4` 个 `span`，服务端有 `10` 个 `span`，每一个 `span` 代表一个链路节点。不过，我们注意到，这里产生了 `3` 个 `errors`。我们点击详情查看什么原因呢。

![](/markdown/c0aaecccad81f373076e1ab788af5393.png)

我们看到好像所有的 `redis` 操作都报错了，随便点击一个 `redis` 的相关 `span`，查看一下详情呢：

![](/markdown/324956a82cf8d51927b77cd04ce36f2a.png)

原来是 `redis` 连接不上报错了，这样的话所有的 `orm` 缓存功能都失效了，但是可以看到并没有影响接口逻辑，只是所有的查询都走了数据库。这个报错是因为我本地忘了打开 `redis server`，我赶紧启动一下本地的 `redis server`，再看看效果：

![](/markdown/684a6d5f223cf31cff312edaac32ac52.png)

再把上面的客户端运行一下，查看 `jaeger`：

![](/markdown/2b21a80dda5e090734aead42388a217f.png)

![](/markdown/78f1dbe74b2659ac5c7b4a5fb602c7a9.png)

现在就没有报错了。

`HTTP Client&Server`、 `Logging` 组件在之前已经介绍过，因此这里我们主要关注 `orm` 和 `redis` 组件的链路跟踪信息。

#### ORM链路信息

##### Attributes/Tags

我们随便点开一个 `ORM` 链路 `Span`，看看 `Attributes/Tags` 信息：

![](/markdown/fd51a1d374588863fdd64df1b4ab5dd0.png)

可以看到这里的 `span.kind` 是 `internal`，也就是之前介绍过的方法内部 `span` 类型。这里很多 `Tags` 在之前已经介绍过，因此这里主要介绍关于数据库相关的 `Tags`：

| Attribute/Tag | 说明 |
| --- | --- |
| `<br />                db.type<br />              ` | 数据库连接类型。如 `mysql`, `mssql`, `pgsql` 等等。 |
| `db.link` | 数据库连接信息。其中密码字段被自动隐藏。 |
| `db.group` | 在配置文件中的数据库分组名称。 |

##### Events/Process

![](/markdown/196295489b33fdf76b45d5db269a0101.png)

| Event/Log | 说明 |
| --- | --- |
| `db.execution.sql` | 执行的具体 `SQL` 语句。由于ORM底层是预处理，该语句为方便查看自动拼接而成，仅供参考。 |
| `db.execution.type` | 执行的 `SQL` 语句类型。常见为 `DB.ExecContext` 和 `DB.QueryContext`，分别代表写操作和读操作。 |
| `db.execution.cost` | 当前 `SQL` 语句执行耗时，单位为 `ms` 毫秒。 |

#### Redis链路信息

##### Attributes/Tags

![](/markdown/271638938b94424626e9bc58a3e09ab5.png)

| Attribute/Tag | 说明 |
| --- | --- |
| `<br />                redis.host<br />              ` | `Redis` 连接地址。 |
| `redis.port` | `Redis` 连接端口。 |
| `redis.db` | `Redis` 操作 `db`。 |

##### Events/Process

![](/markdown/d7ee3f4e593f184ae999906df7b6eb9c.png)

| Event/Log | 说明 |
| --- | --- |
| `redis.execution.command` | `Redis` 执行指令。 |
| `redis.execution.arguments` | `Redis` 执行指令参数。 |
| `redis.execution.cost` | `Redis` 执行指令执行耗时，单位为 `ms` 毫秒。 |