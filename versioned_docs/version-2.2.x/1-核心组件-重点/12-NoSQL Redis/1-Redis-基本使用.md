---
title: 'Redis-基本使用'
sidebar_position: 1
---

## `Do` 方法

我们最常用的是 `Do` 方法，执行同步指令，通过向 `Redis Server` 发送对应的 `Redis API` 命令，来使用 `Redis Server` 的服务。 `Do` 方法最大的特点是内部自行从连接池中获取连接对象，使用完毕后自动丢回连接池中，开发者无需手动调用 `Close` 方法，方便使用。

### 基本使用

```
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
	v, _ := g.Redis().Do(ctx, "SET", "k", "v")
	fmt.Println(v.String())
}
```

### `HSET/HGETALL` 操作

```
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/container/gvar"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

func main() {
	var (
		err    error
		result *gvar.Var
		key    = "user"
		ctx = gctx.New()
	)
	_, err = g.Redis().Do(ctx, "HSET", key, "id", 10000)
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

	// May Output:
	// map[id:10000 name:john]
}
```

### `HMSET/HMGET` 操作

我们可以通过 `map` 参数执行 `HMSET` 操作。

```
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gutil"
)

func main() {
	var (
		ctx = gctx.New()
		key  = "user_100"
		data = g.Map{
			"name":  "gf",
			"sex":   0,
			"score": 100,
		}
	)
	_, err := g.Redis().Do(ctx, "HMSET", append(g.Slice{key}, gutil.MapToSlice(data)...)...)
	if err != nil {
		g.Log().Fatal(ctx, err)
	}
	v, err := g.Redis().Do(ctx, "HMGET", key, "name")
	if err != nil {
		g.Log().Fatal(ctx, err)
	}
	fmt.Println(v.Slice())

	// May Output:
	// [gf]
}
```

我们可以通过 `

            struct

        ` 参数执行 `HMSET` 操作。

```
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/util/gutil"
)

func main() {
	type User struct {
		Name  string `json:"name"`
		Sex   int    `json:"sex"`
		Score int    `json:"score"`
	}
	var (
		ctx = gctx.New()
		key  = "user_100"
		data = &User{
			Name:  "gf",
			Sex:   0,
			Score: 100,
		}
	)
	_, err := g.Redis().Do(ctx,"HMSET", append(g.Slice{key}, gutil.StructToSlice(data)...)...)
	if err != nil {
		g.Log().Fatal(ctx, err)
	}
	v, err := g.Redis().Do(ctx,"HMGET", key, "name")
	if err != nil {
		g.Log().Fatal(ctx, err)
	}
	fmt.Println(v.Slice())

	// May Output:
	// [gf]
}
```

## 自动序列化/反序列化

当给定的参数为 `map`, `slice`, `struct` 时， `gredis` 内部支持自动对其使用 `json` 序列化，并且读取数据时可使用 `gvar.Var` 的转换功能实现反序列化。

### `map` 存取

```
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
		data   = g.Map{
			"id":   10000,
			"name": "john",
		}
	)
	_, err = g.Redis().Do(ctx, "SET", key, data)
	if err != nil {
		panic(err)
	}
	result, err = g.Redis().Do(ctx,"GET", key)
	if err != nil {
		panic(err)
	}
	fmt.Println(result.Map())
}
```

### `struct` 存取

```
package main

import (
	"fmt"
	"github.com/gogf/gf/v2/container/gvar"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
)

func main() {
	type User struct {
		Id   int
		Name string
	}

	var (
		ctx = gctx.New()
		err    error
		result *gvar.Var
		key    = "user"
		user   = g.Map{
			"id":   10000,
			"name": "john",
		}
	)

	_, err = g.Redis().Do(ctx, "SET", key, user)
	if err != nil {
		panic(err)
	}
	result, err = g.Redis().Do(ctx, "GET", key)
	if err != nil {
		panic(err)
	}

	var user2 *User
	if err = result.Struct(&user2); err != nil {
		panic(err)
	}
	fmt.Println(user2.Id, user2.Name)
}
```