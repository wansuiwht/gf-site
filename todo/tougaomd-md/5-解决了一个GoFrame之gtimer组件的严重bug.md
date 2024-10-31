---
title: '解决了一个GoFrame之gtimer组件的严重bug'
sidebar_position: 5
---

## 问题反馈

来自QQ交流群的小伙伴反馈。

![](/markdown/26bfb04318774ed7c3a5fe85011953f7.png)

![](/markdown/94c79bd799a1251159dbaf22b807f5db.png)

![](/markdown/1b0b4f64565ee30153f00f7b96363dde.png)

![](/markdown/11f92fad76e4da8f7eabaa271b233b3e.png)

结果就是输掉了QQ钱包里所有的积蓄...￥5。

## 问题处理

花了数小时，两天的时间解决了 `gtimer` 的这个严重 `bug`。该 `bug` 会造成在超长间隔时间的定时任务无法触发！经过排查，解决的主要方法：

[https://github.com/gogf/gf/commit/93a648ba15c5cfa45c856f4b26316c44dcb59d34](https://github.com/gogf/gf/commit/93a648ba15c5cfa45c856f4b26316c44dcb59d34)

排查过程很痛苦，这也是我什么要做这个 `bug` 总结的缘故。这里就不详述过程。

1、时间轮最顶层任务丢失，添加即可

![](/markdown/29bd1d5a65f0ad4c4d8494a2ce6f35ce.png)

2、当任务只是被"滚动"，并未真正执行时，将其往后继续"滚动"，不能丢失现场信息

![](/markdown/7e36ffbb80c6ccfe3defd8cb0a21fcab.png)

主要是由于 `gtimer` 是多层时间轮的设计（具体请参考文档 [定时器-gtimer](https://goframe.org/pages/viewpage.action?pageId=1114363) ），当一个任务的间隔时间设置得太长，可能会造成这个任务的节点会被安插在最顶层的时间轮上，并且定时的长度过长可能会造成该层时间轮"滚动"好几圈才能轮到它执行。但是呢，由于一层的时间轮是按照 **SLOT+链表** 设计的，因此只要遍历到这个SLOT的链表时，总会把所有任务取出来计算之后再重新安排到新的SLOT上重新滚动执行。原来的设计上，当处于顶层的任务出现时间间隔"多圈"的情况时，那么该任务可能永远都不会执行，因为重新插入该任务时， `createMs` 和 `createTicks` 参数被重新计算，陷入了逻辑死循环。因此，这里增加一点判断即可解决。

单层时间轮比较简单，多层时间轮的话需要考虑的细节比较多，一点细节的差异可能都会影响整个组件的稳定性。并且由于 `gtimer` 定时器是框架底层比较核心的组件，因此该组件的代码质量都会更加严格要求。此外，在处理这个 `bug` 时，也暴露了一些组件设计上的问题，总结一下，与君共勉。

## 总结分析

### 问题1：可测试性不够，极端复杂的情况未覆盖进去

代码设计上应当尽可能实现可测试性！原有的代码对于当前时间的依赖太高，造成极端的时间参数无法覆盖到，因此该问题只有开发者使用出现了问题反馈才发现，造成了不太好的使用体验，也使得开发者对框架的信心受到一定打击。因此，本次修改除了修正了 `bug`，同时增加可该组件的可测试性，便于测试极端的定时场景。例如，我们将对于当前时间的依赖调整为了一个属性方法，这样在单元测试中可以自定义修改：

[https://github.com/gogf/gf/commit/93a648ba15c5cfa45c856f4b26316c44dcb59d34](https://github.com/gogf/gf/commit/93a648ba15c5cfa45c856f4b26316c44dcb59d34)

![](/markdown/3228ca34d31ce448c711c78749122a80.png)

单元测试如下：

```
// Copyright GoFrame Author(https://goframe.org). All Rights Reserved.
//
// This Source Code Form is subject to the terms of the MIT License.
// If a copy of the MIT was not distributed with this file,
// You can obtain one at https://github.com/gogf/gf.

package gtimer

import (
	"github.com/gogf/gf/container/gtype"
	"github.com/gogf/gf/test/gtest"
	"testing"
	"time"
)

func TestTimer_Proceed(t *testing.T) {
	gtest.C(t, func(t *gtest.T) {
		index := gtype.NewInt()
		slice := make([]int, 0)
		timer := doNewWithoutAutoStart(10, 60*time.Millisecond, 6)
		timer.nowFunc = func() time.Time {
			return time.Now().Add(time.Duration(index.Add(1)) * time.Millisecond * 60)
		}
		timer.AddOnce(2*time.Second, func() {
			slice = append(slice, 1)
		})
		timer.AddOnce(1*time.Minute, func() {
			slice = append(slice, 2)
		})
		timer.AddOnce(5*time.Minute, func() {
			slice = append(slice, 3)
		})
		timer.AddOnce(1*time.Hour, func() {
			slice = append(slice, 4)
		})
		timer.AddOnce(100*time.Minute, func() {
			slice = append(slice, 5)
		})
		timer.AddOnce(2*time.Hour, func() {
			slice = append(slice, 6)
		})
		timer.AddOnce(1000*time.Minute, func() {
			slice = append(slice, 7)
		})
		timer.AddOnce(1100*time.Minute, func() {
			slice = append(slice, 8)
		})
		timer.AddOnce(1200*time.Minute, func() {
			slice = append(slice, 9)
		})
		for i := 0; i < 2000000; i++ {
			timer.wheels[0].proceed()
			time.Sleep(10 * time.Microsecond)
		}
		time.Sleep(time.Second)
		t.Assert(slice, []int{1, 2, 3, 4, 5, 6, 7, 8, 9})
	})
}
```

可以看到，在单元测试中可以模拟长时间间隔的任务，以便提高组件对场景的覆盖率。理论上支持任意的时间间隔测试。

### 问题2：部分代码命名不够严谨，造成维护成本提高

开发人员每隔3个月便会唾弃自己的旧代码。

另一块需要总结的，就是这个 `bug` 的维护成本有点高，花了数小时才解决。 `gtimer` 设计上比较简单，虽然细节上比较多，但是这样的时间开销是不能接受的。其中开销比较大的一点是，过了几个月，我再回过头来看自己的代码时，很难记得清楚内部的一些实现细节。造成我后面自己亲自来维护这段代码的时候，还必须去梳理方法内部的细节才能搞得懂这个方法、变量到底干嘛的，主要在于变量的命名太过于随意。给大家看俩地方：

![](/markdown/49bd81a31f0fb3d2ba14f1e81db781c1.png)

在方法内部看到 `num、` `ticks`、 `create` 和 `interval` 的变量命名感觉莫名其妙，只有回到 `Entry` 的定义查看注释时，才搞懂干嘛的，还好自己善于写注释还算是个好习惯。

![](/markdown/9394356d2748e5756b0fc84e9bbb2833.png)

随后改成这个样子：

![](/markdown/5c5c5e51bb462b0e6d770dc9295ef91f.png)

## 吸取教训

1. 不要太注重单元测试覆盖率，而应该覆盖尽可能多的逻辑场景，保证充分的逻辑正确。
2. 保证变量、方法命名严谨，不在于精简，而在于见名知意、在于后期维护性。
3. 保证代码的可测试性，并尽量充分使用地使用CI自动化测试。