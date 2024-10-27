---
title: 'NoSQL Redis'
sidebar_position: 12
---

## 基本介绍

`Redis` 客户端由 `gredis` 组件实现，底层采用了链接池设计。

为了保证通用性和扩展性， `gredis` 组件采用了 **命令通道** 的方式执行 `Redis` 操作。当您不知道命令通道的参数如何传递时，可以参考终端命令行的参数传递。也就是说，所有的操作都和命令行的参数传递保持一致。

**使用方式**：

```
import "github.com/gogf/gf/v2/database/gredis"
```

**接口文档**：

[https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis](https://pkg.go.dev/github.com/gogf/gf/v2/database/gredis)

**简要介绍：**

`gredis` 使用了连接池来进行 `Redis` 连接管理，通过 `Config` 配置对象或者 `Set*` 方法可以对连接池的属性进行管理，通过 `Stats` 方法可以获取连接池的统计信息。我们最常用的是 `Do` 方法，执行同步指令，通过向 `Redis Server` 发送对应的 `Redis API` 命令，来使用 `Redis Server` 的服务。 `Do` 方法最大的特点是内部自行从连接池中获取连接对象，使用完毕后自动丢回连接池中，开发者无需手动调用 `Close` 方法，方便使用。

- `Redis` 中文手册请参考： [http://redisdoc.com/](http://redisdoc.com/)
- `Redis` 官方命令请参考： [https://redis.io/commands](https://redis.io/commands)

`gredis.Redis` 客户端对象提供了一个 `Close` 方法，该方法用于关闭 `Redis` 客户端（同时关闭客户端的连接池），而不是连接对象，开发者基本不会用到，非高级玩家请不要使用。

## 组件特性

`gredis` 具有以下显著特性：

- 使用简便，功能强大
- 统一配置组件进行配置
- 支持单实例及集群化操作
- 支持 `Redis` 服务所有特性
- 支持 `OpenTelemetry` 可观测性
- 支持单例对象、也支持动态创建对象
- 接口化设计，很高的灵活性和扩展性

## 相关文档

- [Redis-配置管理](output/goframe-v2.1-md/核心组件-重点/NoSQL%20Redis/Redis-配置管理)
- [Redis-基本使用](output/goframe-v2.1-md/核心组件-重点/NoSQL%20Redis/Redis-基本使用)
- [Redis-Conn对象](output/goframe-v2.1-md/核心组件-重点/NoSQL%20Redis/Redis-Conn对象)
- [Redis-结果处理](output/goframe-v2.1-md/核心组件-重点/NoSQL%20Redis/Redis-结果处理)
- [Redis-接口化设计](output/goframe-v2.1-md/核心组件-重点/NoSQL%20Redis/Redis-接口化设计)