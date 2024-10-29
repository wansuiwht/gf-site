---
title: '日志组件-Debug特性'
sidebar_position: 5
hide_title: true
---

`Debug/Debugf` 是非常有用的几个方法，用于调试信息的记录，常用于开发/测试环境中，当应用上线之后可以方便地使用 `SetDebug` 或者配置文件进行开启/关闭。

```
package main

import (
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"time"
)

func main() {
	gtimer.SetTimeout(3*time.Second, func() {
		g.Log().SetDebug(false)
	})
	for {
		g.Log().Debug(gtime.Datetime())
		time.Sleep(time.Second)
	}
}
```

该示例中使用 `glog.Debug` 方法输出调试信息，3秒后关闭调试信息的输出。执行后，输出结果如下，可以看到只输出了3条日志信息，后续的调试日志信息由于通过 `SetDebug` 方法关闭后，便不再输出。

``` html
2018-07-22 12:20:11.100 [DEBU] 2018-07-22 12:20:11
2018-07-22 12:20:12.101 [DEBU] 2018-07-22 12:20:12
2018-07-22 12:20:13.101 [DEBU] 2018-07-22 12:20:13

```

> 我们还可以通过命令行参数或者系统环境变量参数的方式关闭掉调试信息。
>
> 1. 修改命令行启动参数 \- `gf.glog.debug=false`；
> 2. 修改指定的环境变量 \- `GF_GLOG_DEBUG=false`；