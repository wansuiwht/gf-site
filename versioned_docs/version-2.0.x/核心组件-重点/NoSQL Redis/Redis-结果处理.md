---
title: 'Redis-结果处理'
sidebar_position: 3
hide_title: true
---

可以看到通过客户端方法 `Do/Receive` 获取可供方便转换的 `gvar.Var` 通用变量结果。通过 `gvar.Var` 的强大转换功能可以转换为任意的数据类型，如基本数据类型 `Int`, `String`, `Strings`，或者结构体 `Struct` 等等。

### `Do` 示例

```go
package main

import (
    "fmt"
    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/os/gctx"
)

func main() {
    var (
        ctx = gctx.New()
    )

    conn, _ := g.Redis().Conn(ctx)
    defer conn.Close(ctx)
    conn.Do(ctx, "SET", "k", "v")
    v, _ := conn.Do(ctx, "GET", "k")
    fmt.Println(v.String())
}
```

执行后，输出结果为：

```v
```

### `Receive` 示例

```go
package main

import (
    "fmt"
    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/os/gctx"
)

func main() {
    var (
        ctx = gctx.New()
    )

    conn, _ := g.Redis().Conn(ctx)
    defer conn.Close(ctx)
    _, err := conn.Do(ctx, "SUBSCRIBE", "channel")
    if err != nil {
        panic(err)
    }
    for {
        reply, err := conn.Receive(ctx)
        if err != nil {
            panic(err)
        }
        fmt.Println(reply.Strings())
    }
}
```

执行后，程序将阻塞等待获取数据。

另外打开一个终端通过 `redis-cli` 命令进入 `Redis Server`，发布一条消息：

```bash
$ redis-cli
127.0.0.1:6379> publish channel test
(integer) 1
127.0.0.1:6379>
```

随后程序终端立即打印出从 `Redis Server` 获取的数据：

```
[message channel test]
```

### `HashSet` 示例

`HashSet` 是我们比较常用的 `Redis` 数据结构，我们可以非常方便地将 `Redis` 中的 `HashSet` 获取并转换为 `Golang Map`。

```go
package main

import (
    "fmt"
    "github.com/gogf/gf/v2/container/gvar"
    "github.com/gogf/gf/v2/frame/g"
    "github.com/gogf/gf/v2/os/gctx"
)

func main() {
    var (
        ctx = gctx.New()
        err    error
        result *gvar.Var
        key    = "user"
    )

    _, err = g.Redis().Do(ctx,"HSET", key, "id", 10000)
    if err != nil {
        panic(err)
    }
    _, err = g.Redis().Do(ctx,"HSET", key, "name", "john")
    if err != nil {
        panic(err)
    }
    result, err = g.Redis().Do(ctx,"HGETALL", key)
    if err != nil {
        panic(err)
    }
    fmt.Println(result.Map())
}
```