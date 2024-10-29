---
title: 'Redis-Conn对象'
sidebar_position: 2
hide_title: true
---

使用 `Do` 方法已经能够满足绝大部分的场景需要，如果需要更复杂的 `Redis` 操作（例如订阅发布），那么我们可以使用 `Conn` 方法从连接池中获取一个连接对象，随后使用该连接对象进行操作。但需要注意的是，该连接对象不再使用时，应当显式调用 `Close` 方法进行关闭（丢回连接池）。

由于该 `Conn` 是个连接对象，注意该对象存在连接超时的限制，超时和服务端配置有关。

## 基本使用

```go
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gconv"
)

func main() {
	var (
		ctx = gctx.New()
	)
	conn, _ := g.Redis().Conn(ctx)
	defer conn.Close(ctx)
	conn.Do(ctx, "SET", "k", "v")
	v, _ := conn.Do(ctx,"GET", "k")
	fmt.Println(gconv.String(v))
}
```

执行后，输出结果为：

```v
```

## 订阅/发布

我们可以通过 `Redis` 的 `SUBSCRIBE/PUBLISH` 命令实现订阅/发布模式。

```go
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gconv"
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
		fmt.Println(gconv.Strings(reply))
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