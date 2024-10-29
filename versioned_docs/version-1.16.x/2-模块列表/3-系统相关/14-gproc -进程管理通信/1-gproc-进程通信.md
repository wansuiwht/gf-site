---
title: 'gproc-进程通信'
sidebar_position: 1
hide_title: true
---

目前gproc组件提供的进程通信特性属于实验性特性！

> 不要通过共享内存来通信，而应该通过通信来共享内存。

常见的进程通信方式有5种： `管道/信号量/共享内存/共享文件/Socket`。按照常见的并发架构的设计来讲，我们尽可能地少用 `锁机制`，包括共享内存/共享文件其实都是需要依靠锁机制才能保证数据流的正确性，因为锁机制带来的维护复杂度往往会比其带来的好处更多。信号量常用在 `*nix` 系统中，跨平台性比较差。管道虽然实现起来比较简单，但是在稳定性上并没有Socket机制好。因此， `gproc` 实现的进程通信采用的是Socket机制。 **但是需要注意的是，通信的两个进程都需要使用 `gproc` 模块来实现发送&接收数据**。

`gproc` 的进程通信API非常简便，只需通过以下两个方法实现：

```  go
func Send(pid int, data []byte) error
func Receive() *Msg

```

我们通过 `Send` 方法向指定的进程发送数据（每调用一次相当于发送一条消息），在指定的进程中可以通过 `Receive` 方法获得数据。其中， `Receive` 方法提供了类似消息队列的形式来收取其他进程传递的数据，当队列为空时，该方法将会 `阻塞` 等待。

我们来看一个进程间通信的基本使用示例：

```
package main

import (
	"fmt"
	"github.com/gogf/gf/os/gproc"
	"github.com/gogf/gf/os/gtime"
	"github.com/gogf/gf/os/gtimer"
	"os"
	"time"
)

func main() {
	fmt.Printf("%d: I am child? %v\n", gproc.Pid(), gproc.IsChild())
	if gproc.IsChild() {
		gtimer.SetInterval(time.Second, func() {
			gproc.Send(gproc.PPid(), []byte(gtime.Datetime()))
		})
		select {}
	} else {
		m := gproc.NewManager()
		p := m.NewProcess(os.Args[0], os.Args, os.Environ())
		p.Start()
		for {
			msg := gproc.Receive()
			fmt.Printf("receive from %d, data: %s\n", msg.SendPid, string(msg.Data))
		}
	}
}
```

该示例中，我们的主进程启动时创建了一个子进程，该子进程每隔1秒钟向主进程发送当前的时间，主进程收取到子进程发送的参数后输出到终端上。执行后，终端输出的内容如下：

```  shell
29978: I am child? false
29984: I am child? true
receive from 29984, data: 2018-05-18 15:01:00
receive from 29984, data: 2018-05-18 15:01:01
receive from 29984, data: 2018-05-18 15:01:02
receive from 29984, data: 2018-05-18 15:01:03
receive from 29984, data: 2018-05-18 15:01:04
...
```