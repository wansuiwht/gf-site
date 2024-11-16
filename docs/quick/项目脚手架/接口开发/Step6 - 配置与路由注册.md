---
slug: '/quick/scaffold-api-config-and-route-registering'
title: 'Step6 - 配置与路由注册'
hide_title: true
sidebar_position: 6
---


## 引入数据库驱动

`GoFrame`的数据库组件使用了接口化设计，接口与实现是分离的，这样能提供更好的抽象和扩展性。我们这里使用了`mysql`数据库，那么需要引入具体的`mysql`驱动实现。我们在`main.go`中加上`_ "github.com/gogf/gf/contrib/drivers/mysql/v2"`即可。

```go title="main.go"
package main

import (
    _ "demo/internal/packed"

    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"

    "github.com/gogf/gf/v2/os/gctx"

    "demo/internal/cmd"
)

func main() {
    cmd.Main.Run(gctx.GetInitCtx())
}
```
数据库的驱动，项目只需要引入这一次即可，后续都不需要做调整。
更多关于数据库驱动的支持以及详细介绍，请参考章节 [数据库ORM](../../../docs/核心组件/数据库ORM/数据库ORM.md)。


## 添加数据库配置

在脚手架项目模板中主要有两个配置：
- `hack/config.yaml`：工具配置，在前面的章节我们已经有过介绍。这个配置文件主要是本地开发时候使用，当`cli`脚手架工具执行时会自动读取其中的配置内容。
- `manifest/config/config.yaml`：业务配置，主要维护业务项目的组件配置信息、业务模块配置，完全由开发者自行维护。在服务二进制文件启动时会读取该配置文件。该业务

默认的脚手架项目模板提供的业务配置如下：
```yaml title="manifest/config/config.yaml"
# https://goframe.org/docs/web/server-config-file-template
server:
  address:     ":8000"
  openapiPath: "/api.json"
  swaggerPath: "/swagger"

# https://goframe.org/docs/core/glog-config
logger:
  level : "all"
  stdout: true

# https://goframe.org/docs/core/gdb-config-file
database:
  default:
    link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
```

默认提供了`3`项组件的配置，分别为：
- `server`：Web Server的配置。
- `logger`：默认日志组件的配置。
- `database`：数据库组件的配置。

每一项组件配置的注释上提供了官网文档的配置参考链接。我们这里需要修改数据库配置中的链接信息，为我们真实可用的链接信息。关于数据库的配置，请参考章节：[ORM使用配置-配置文件](../../../docs/核心组件/数据库ORM/ORM使用配置/ORM使用配置-配置文件.md)


## 添加路由注册

添加我们新填写的`api`到路由非常简单，如下：

![goframe路由注册](QQ_1731680426319.png)

在分组路由的`group.Bind`方法中，通过`user.NewV1()`添加我们的路由对象即可。
