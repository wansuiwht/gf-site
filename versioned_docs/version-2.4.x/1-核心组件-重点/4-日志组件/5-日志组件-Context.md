---
title: '日志组件-Context'
sidebar_position: 5
---

从 `v2` 版本开始， `glog` 组件将 `ctx` 上下文变量作为日志打印的必需参数。

## 自定义 `CtxKeys`

日志组件支持自定义的键值打印，通过 `ctx` 上下文变量中读取。

### 使用配置

```
# 日志组件配置
logger:
  Path:    "/var/log/my-app"
  Level:   "all"
  Stdout:  false
  CtxKeys: ["RequestId"]
```

其中 `CtxKeys` 用于配置需要从 `context.Context` 接口对象中读取并输出的键名。

### 日志输出

使用上述配置，然后在输出日志的时候，通过 `Ctx` 链式操作方法指定输出的 `context.Context` 接口对象，例如：

```
ctx := context.WithValue(context.Background(), "RequestId", "123456789")
g.Log().Error(ctx,"runtime error")

// May Output:
// 2020-06-08 20:17:03.630 [ERRO] {123456789} runtime error
// Stack:
// ...
```

### 日志示例

![](/markdown/61b7affa0c57942b137eae14a1608b54.png)

## 传递给 `Handler`

如果开发者自定义了日志对象的 `Handler`，那么每个日志打印传递的 `ctx` 上下文变量将会传递给 `Handler` 中。关于日志 `Handler` 的介绍请参考章节： [日志组件-Handler](output/goframe-v2.4-md/核心组件-重点/日志组件/日志组件-Handler)

## 链路跟踪支持

`glog` 组件支持 `OpenTelemetry` 标准的链路跟踪特性，该支持是内置的，无需开发者做任何设置，具体请参考章节： [服务链路跟踪](output/goframe-v2.4-md/微服务开发/服务链路跟踪)

![](/markdown/a3481f6ce9cb61ebe597a8914d71de57.png)