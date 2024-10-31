---
title: 'Redis-Context'
sidebar_position: 3
hide_title: true
---

`gredis` 组件支持 `Context` 上下文变量的传递，主要用于请求控制、链路跟踪特性等场景。上下文变量传递可以通过 `Ctx` 链式操作方法实现，方法定义如下：

```go
// Ctx is a channing function which sets the context for next operation.
func (r *Redis) Ctx(ctx context.Context) *Redis
```

需要注意的是，由于 `gredis` 的上下文变量是通过链式操作来实现的，因此没有强制性的 `Context` 输入，大家使用在链路跟踪的时候可能需要注意一下。

关于链路跟踪以及使用示例，具体请参考章节： [链路跟踪](../链路跟踪/链路跟踪.md)