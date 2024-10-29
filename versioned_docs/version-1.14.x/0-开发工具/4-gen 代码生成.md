---
title: 'gen 代码生成'
sidebar_position: 4
hide_title: true
---

使用方式： `gf gen TYPE [OPTION]`

## 1、 `dao` 代码生成（推荐）

`dao` 命令用于生成 `dao` 数据访问对象文件，以及 `model` 数据结构定义文件。推荐使用配置文件来管理生成规则。

配置文件示例：

```
[gfcli]
    [[gfcli.gen.dao]]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/order"
        group  = "order"
        prefix = "order_"
        tables = ""
    [[gfcli.gen.dao]]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
        group  = "user"
        prefix = "user_"
        tables = "user,userDetail,userScore"
```

配置参数说明：

| 名称 | 必须 | 默认值 | 含义 | 示例 |
| --- | --- | --- | --- | --- |
| `gfcli.gen.dao` | 是 |  | `dao` 代码生成配置项，可以有多个配置项构成数组，支持多个数据库生成。 | - |
| `link` | 是 |  | 分为两部分，第一部分表示你连接的数据库类型 `mysql`, `postgresql` 等, 第二部分就是连接数据库的 `dsn` 信息。具体请参考 [ORM使用配置](output/goframe-v1.14-md/核心组件/数据库ORM/ORM使用配置) 章节。 | ```<br />mysql:root:12345678@tcp(127.0.0.1:3306)/user<br />``` |
| `mod` | 否 |  | 用于生成 `go` 文件的 `import` 计算，默认情况下会自动读取当前项目根目录下的 `go.mod` 获取。 | `github.com/gogf/gf-demos` |
| `group` | 否 | `default` | 在数据库配置中的数据库分组名称。 | `default`<br />`order`<br />`user` |
| `prefix` | 否 |  | 生成数据库对象及文件的前缀，以便区分不同数据库或者不同数据库中的相同表名，防止数据表同名覆盖。 | `order_`<br />`user_` |
| `tables` | 否 |  | 指定当前数据库中需要执行代码生成的数据表。如果为空，表示数据库的所有表都会生成。 | `user, userDetail` |
| `path` | 否 | `./app` | 生成 `dao` 和 `model` 文件的存储目录地址 | `./app` |
| `remove-prefix` | 否 |  | 删除数据表的指定前缀名称。 | `gf_` |

生成的代码结构示例：

![](https://goframe.org/download/attachments/1114168/image2020-12-24_17-39-44.png?version=1&modificationDate=1608802784148&api=v2)

其中：

1. `dao/internal` 以及 `model/internal` 下面的文件由工具生成，多次生成会被覆盖，因此不要手动修改。采用 `internal` 包名的目的是仅作为 `dao` 或 `model` 的内部包引用，不对外开放。
2. `dao` 目录下的文件 可以做一些数据库的定制化操作，通过工具多次生成不会覆盖，但是更多建议用户在自己的 `service` 中实现。
3. `model` 目录下的文件，可以做自定义的一些数据结构定义，通过工具多次生成不会覆盖。

## 2、 `model` 代码生成（不再推荐）

`gen` 命令用以自动化从数据库直接生成采用了 `Active Record` 设计模式的模型文件。该命令将会根据数据表名生成对应的目录，该目录名称即数据表包名。目录下自动生成3个文件：

1. `数据表名.go` 自定义文件，开发者可以自由定义填充的代码文件，仅会生成一次，每一次模型生成不会覆盖。
2. `数据表名_entity.go` 表结构文件，根据数据表结构生成的结构体定义文件，包含字段注释。数据表在外部变更后，可使用 `gen` 命令重复生成更新该文件。
3. `数据表名_model.go` 表模型文件，为数据表提供了许多便捷的 `CURD` 操作方法，并可直接查询返回该表的结构体对象。数据表在外部变更后，可使用 `gen` 命令重复生成更新该文件。

> 数据表模型生成支持的数据库类型为： `MySQL/MariaDB`、 `PostgreSQL`、 `SQLite`、 `SQLServer`。目前暂不支持 `Oracle`，若有需求请联系作者。