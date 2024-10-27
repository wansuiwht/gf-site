---
title: 'gtimer (任务定时器)'
sidebar_position: 3
---

`gtimer` 是一个并发安全的高性能任务定时器，类似于 `Java` 的 `Timer`。 `gtimer` 组件旧版本采用的是分层时间轮（ `Hierarchical Timing Wheel`）设计，从 `goframe v1.16` 版本开始，采用了优先级队列（ `PriorityQueue`）实现。

**使用场景**：

任何定时任务场景，大批量定时任务/延迟任务的场景，超时控制/频率控制的业务场景，对于定时时间准确度要求不高的业务场景。

**注意事项**：

1. 任何的定时任务都是有误差的，在定时间隔比较大，或者并发量大，负载较高的系统中尤其明显，具体请参考： [https://github.com/golang/go/issues/14410](https://github.com/golang/go/issues/14410)
2. 定时间隔不会考虑任务的执行时间。例如，如果一项工作需要 `3` 分钟才能执行完成，并且计划每隔 `5` 分钟运行一次，那么每次任务之间只有 `2` 分钟的空闲时间。
3. 需要注意的是 **单例模式** 运行的定时任务，任务的执行时间会影响该任务下一次执行的 **开始时间**。例如：一个每间隔 `1` 秒执行的任务，运行耗时为 `1` 秒，那么在 **第1秒** 开始运行后，下一次任务将会在 **第3秒** 开始执行。因为中间有一次运行检查时发现有当前任务正在进行，因此退出等待下一次执行检查。

**使用方式：**

```
import "github.com/gogf/gf/os/gtimer"
```

**接口文档**：

[https://godoc.org/github.com/gogf/gf/os/gtimer](https://godoc.org/github.com/gogf/gf/os/gtimer)

**简要说明：**

01. `New` 方法用于创建自定义的任务定时器对象，并可在创建时通过 `interval` 的 `TimerOptions`参数指定定时器的最小 `tick` 时间间隔。
02. `Add` 方法用于添加定时任务，其中：
    - `interval` 参数用于指定方法的执行的时间间隔。
    - `job` 参数为需要执行的任务方法。
03. `AddEntry` 方法添加定时任务，支持更多参数的控制。
04. `AddSingleton` 方法用于添加 **单例** 定时任务，即同时只能有一个该任务正在运行。
05. `AddOnce` 方法用于添加只运行一次的定时任务，当运行一次数后该定时任务自动销毁。
06. `AddTimes` 方法用于添加运行指定次数的定时任务，当运行 `times` 次数后该定时任务自动销毁。
07. `Search` 方法用于根据名称进行定时任务搜索(返回定时任务 `*Entry` 对象指针)。
08. `Start` 方法用于启动定时器(使用 `New` 创建定时器时会自动启动)。
09. `Stop` 方法用于停止定时器。
10. `Close` 方法用于关闭定时器。

## 默认定时器

大部分的场景下使用默认的定时器即可。使用 `gtimer` 的默认定时器时，默认的间隔时间为 `100ms`，因此理论的时间间隔误差范围为 `0~100ms`。可以使用以下两种方式修改默认的定时器参数：

1. 使用启动参数
   - `gf.gtimer.interval=50`: 修改默认的时间刻度为 `50毫秒`
2. 使用环境变量
   - `GF_GTIMER_INTERVAL=50`

## 性能测试

```
goos: linux
goarch: amd64
pkg: github.com/gogf/gf/os/gtimer
Benchmark_Add-12                         4048776               291.9 ns/op           249 B/op          6 allocs/op
Benchmark_StartStop-12                  100000000              10.96 ns/op             0 B/op          0 allocs/op
PASS
ok      command-line-arguments    6.602s
```

## 使用示例

### 基本示例

```
package main

import (
	"fmt"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"time"
)

func main() {
	now := time.Now()
	gtimer.AddTimes(time.Second, 10, func() {
		fmt.Println(gtime.Now(), time.Duration(time.Now().UnixNano()-now.UnixNano()))
		now = time.Now()
	})

	select {}
}
```

执行后，输出结果为:

```
2021-05-27 13:28:19 1.004516s
2021-05-27 13:28:20 997.262ms
2021-05-27 13:28:21 999.972ms
2021-05-27 13:28:22 1.00112s
2021-05-27 13:28:23 998.773ms
2021-05-27 13:28:24 999.957ms
2021-05-27 13:28:25 1.002468s
2021-05-27 13:28:26 997.468ms
2021-05-27 13:28:27 999.981ms
2021-05-27 13:28:28 1.002504s
```

### 单例任务

```
package main

import (
    "github.com/gogf/gf/os/glog"
    "github.com/gogf/gf/os/gtimer"
    "time"
)

func main() {
    interval := time.Second
    gtimer.AddSingleton(interval, func() {
        glog.Println("doing")
        time.Sleep(5*time.Second)
    })

    select { }
}
```

执行后，输出结果为:

```
2019-01-23 17:04:18.892 doing
2019-01-23 17:04:24.890 doing
2019-01-23 17:04:29.892 doing
2019-01-23 17:04:35.891 doing
...
```

### 延迟任务

延迟任务是指在指定时间后生效的定时任务。我们可以通过 `DelayAdd*` 相关方法实现延迟任务的创建。

```
package main

import (
	"fmt"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"time"
)

func main() {
	fmt.Println("Start:", gtime.Now())
	gtimer.DelayAdd(time.Second, time.Second, func() {
		fmt.Println("Running:", gtime.Now())
	})
	select {}
}
```

执行后，终端输出：

```
Start: 2021-05-27 13:26:02
Running: 2021-05-27 13:26:04
Running: 2021-05-27 13:26:05
Running: 2021-05-27 13:26:06
Running: 2021-05-27 13:26:07
Running: 2021-05-27 13:26:08
Running: 2021-05-27 13:26:09
Running: 2021-05-27 13:26:10
Running: 2021-05-27 13:26:11
...
```

### `SetTimeout` 与 `SetInterval`

这两个方法来源于 `Javascript` 常用定时方法。其中 `SetTimeout` 用于创建只执行一次的定时任务，不过可以通过递归调用 `SetTimeout` 来实现无限间隔执行。 `SetIterval` 用于创建间隔执行不退出的定时任务。

```
package main

import (
	"fmt"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"time"
)

func main() {
	gtimer.SetTimeout(time.Second, func() {
		fmt.Println("SetTimeout:", gtime.Now())
	})
	gtimer.SetInterval(time.Second, func() {
		fmt.Println("SetInterval:", gtime.Now())
	})
	select {}
}
```

执行后，终端输出：

```
SetInterval: 2021-05-27 13:20:50
SetTimeout: 2021-05-27 13:20:50
SetInterval: 2021-05-27 13:20:51
SetInterval: 2021-05-27 13:20:52
SetInterval: 2021-05-27 13:20:53
SetInterval: 2021-05-27 13:20:54
SetInterval: 2021-05-27 13:20:55
SetInterval: 2021-05-27 13:20:56
SetInterval: 2021-05-27 13:20:57
SetInterval: 2021-05-27 13:20:58
...
```

### `Exit` 退出

我们可以在定时任务中通过 `Exit` 方法强制退出定时任务的继续执行，该定时任务将会被从定时器中移除。

```
package main

import (
	"fmt"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"time"
)

func main() {
	gtimer.SetInterval(time.Second, func() {
		fmt.Println("exit:", gtime.Now())
		gtimer.Exit()
	})
	select {}
}
```

执行后，终端输出：

```
exit: 2021-05-27 13:31:24
```

## `gtimer` 与 `gcron` 区别

`gtimer` 任务定时器与 `gcron` 定时任务模块区别:

- `gtimer` 属于高性能模块，是框架核心模块，构建任何定时任务的基础，任何方法操作耗时均在 `纳秒` 级别。
- `gtimer` 可适用于任何的定时任务场景中，例如: TCP通信、游戏开发等场景。
- `gcron` 支持经典的 `crontab` 形式的定时任务语法，最小时间设定间隔为 `秒`。
- `gcron` 底层实现基于 `gtimer`。