---
title: 'ORM上下文变量'
sidebar_position: 9
hide_title: true
---

`ORM` 支持传递自定义的 `context` 上下文变量，用于异步 `IO` 控制或者上下文信息传递，特别是链路跟踪信息的传递。

我们可以通过 `Ctx` 方法传递自定义的上下文变量给 `ORM` 对象， `Ctx` 方法其实是一个链式操作方法，该上下文传递进去后仅对当前 `DB` 接口对象有效，方法定义如下：

```
func Ctx(ctx context.Context) DB
```

## 示例1，请求超时控制

我们来看一个通过上下文变量控制请求超时时间的示例。

```
ctx, cancel := context.WithTimeout(context.Background(), time.Second)
defer cancel()
_, err := db.Ctx(ctx).Query("SELECT SLEEP(10)")
fmt.Println(err)
```

该示例中执行会 `sleep 10` 秒中，因此必定会引发请求的超时。执行后，输出结果为：

```
context deadline exceeded, SELECT SLEEP(10)
```

## 示例2，链路跟踪信息

上下文变量也可以传递链路跟踪信息，并且可以和日志组件结合，将链路信息打印到日志中（仅当 `ORM` 日志开启时）。

我们来看一个示例。

1、数据库配置示例：

```
[database]
    [database.logger]
        Path    = "/tmp/log/gf-app/sql"
        Level   = "all"
        Stdout  = true
        CtxKeys = ["Trace-Id"]
    [database.default]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
        debug  = true
```

其中，我们通过日志组件的 `CtxKeys` 配置来指定需要打印到日志中的上下文信息中的变量名称，因此当 `context` 上下文变量中存在键名为 `Trace-Id` 的变量时，将会被自动打印到日志中。关于日志组件的上下文特性介绍具体请参考 [日志组件-Context上下文](output/goframe-v1.15-md/核心组件/日志组件/日志组件-高级特性/日志组件-Context上下文) 章节。

同时，仅当数据库配置的 `debug` 打开时才会记录完整的sql执行日志，因此这里配置中的 `debug=true`。

2、 `Golang` 代码示例

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
)

func main() {
	ctx := context.WithValue(context.Background(), "Trace-Id", "123456789")
	_, err := g.DB().Ctx(ctx).Query("SELECT 1")
	if err != nil {
		panic(err)
	}
}
```

为简化示例，我们这里手动构造了一个 `ctx` 变量，并存放了一个 `Trace-Id` 的键值对，键值为 `123456789`。执行后，终端输出为：

```
2020-12-28 23:43:03.055 [DEBU] {Trace-Id: 123456789} [  3 ms] [default] SELECT 1
```

## 示例3，模型上下文操作

模型对象也支持上下文变量的传递，同样也是通过 `Ctx` 方法。我们来看一个简单的示例，我们将示例2的例子通过模型操作调整一下。

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
)

func main() {
	ctx := context.WithValue(context.Background(), "Trace-Id", "123456789")
	_, err := g.DB().Model("user").Ctx(ctx).All()
	if err != nil {
		panic(err)
	}
}
```

执行后，终端输出为：

```
2020-12-28 23:46:56.349 [DEBU] {Trace-Id: 123456789} [  5 ms] [default] SHOW FULL COLUMNS FROM `user`
2020-12-28 23:46:56.354 [DEBU] {Trace-Id: 123456789} [  5 ms] [default] SELECT * FROM `user`
```

其中 ``SHOW FULL COLUMNS FROM `user` `` 为 `ORM` 组件的数据表字段获取查询，每个表在执行操作之前仅会查询一次并缓存结果到内存中。