---
title: 'gen dao(重点)'
sidebar_position: 0
hide_title: true
---

`dao` 命令用于生成 `dao` 数据访问对象文件，以及 `model` 数据结构定义文件。推荐使用配置文件来管理生成规则。

## 使用方式

进入项目根目录执行 `gf gen dao` 即可。以下为命令行帮助信息。

```bash
$ gf gen dao -h
USAGE
    gf gen dao [OPTION]

OPTION
    -/--path             directory path for generated files.
    -l, --link           database configuration, the same as the ORM configuration of GoFrame.
    -t, --tables         generate models only for given tables, multiple table names separated with ','
    -e, --tablesEx       generate models excluding given tables, multiple table names separated with ','
    -g, --group          specifying the configuration group name of database for generated ORM instance,
                         it's not necessary and the default value is "default"
    -p, --prefix         add prefix for all table of specified link/database tables.
    -r, --removePrefix   remove specified prefix of the table, multiple prefix separated with ','
    -m, --mod            module name for generated golang file imports.
    -j, --jsonCase       generated json tag case for model struct, cases are as follows:
                         | Case            | Example            |
                         |---------------- |--------------------|
                         | Camel           | AnyKindOfString    |
                         | CamelLower      | anyKindOfString    | default
                         | Snake           | any_kind_of_string |
                         | SnakeScreaming  | ANY_KIND_OF_STRING |
                         | SnakeFirstUpper | rgb_code_md5       |
                         | Kebab           | any-kind-of-string |
                         | KebabScreaming  | ANY-KIND-OF-STRING |
    -/--stdTime          use time.Time from stdlib instead of gtime.Time for generated time/date fields of tables.
    -/--gJsonSupport     use gJsonSupport to use *gjson.Json instead of string for generated json fields of tables.
    -/--modelFile        custom file name for storing generated model content.
    -/--tplDaoIndex      template content for Dao index files generating.
    -/--tplDaoInternal   template content for Dao internal files generating.
    -/--tplModelIndex    template content for Model index files generating.
    -/--tplModelStruct   template content for Model internal files generating.

CONFIGURATION SUPPORT
    Options are also supported by configuration file.
    It's suggested using configuration file instead of command line arguments making producing.
    The configuration node name is "gf.gen.dao", which also supports multiple databases, for example:
    [gfcli]
        [[gfcli.gen.dao]]
            link     = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
            tables   = "order,products"
            jsonCase = "CamelLower"
        [[gfcli.gen.dao]]
            link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"
            path   = "./my-app"
            prefix = "primary_"
            tables = "user, userDetail"

EXAMPLES
    gf gen dao
    gf gen dao -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
    gf gen dao -path ./model -c config.yaml -g user-center -t user,user_detail,user_login
    gf gen dao -r user_
```

## 配置示例

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

## 参数说明

| 名称 | 必须 | 默认值 | 含义 | 示例 |
| --- | --- | --- | --- | --- |
| `gfcli.gen.dao` | 是 |  | `dao` 代码生成配置项，可以有多个配置项构成数组，支持多个数据库生成。 | - |
| `link` | 是 |  | 分为两部分，第一部分表示你连接的数据库类型 `mysql`, `postgresql` 等, 第二部分就是连接数据库的 `dsn` 信息。具体请参考 [ORM使用配置](output/goframe-v1.16-md/核心组件-重点/数据库ORM/ORM使用配置) 章节。 | ```<br />mysql:root:12345678@tcp(127.0.0.1:3306)/user<br />``` |
| `group` | 否 | `default` | 在数据库配置中的数据库分组名称。只能配置一个名称。 | `default`<br />`order`<br />`user` |
| `tables` | 否 |  | 指定当前数据库中需要执行代码生成的数据表。如果为空，表示数据库的所有表都会生成。 | `user, userDetail` |
| `tablesEx` | 否 |  | 指定当前数据库中需要排除代码生成的数据表。 | `product, order` |
| `path` | 否 | `./app` | 生成 `dao` 和 `model` 文件的存储目录地址 | `./app` |
| `modelFile` | 否 | `model.go` | 自定义生成的模型文件名称。 | `entity.go` |
| `prefix` | 否 |  | 生成数据库对象及文件的前缀，以便区分不同数据库或者不同数据库中的相同表名，防止数据表同名覆盖。 | `order_`<br />`user_` |
| `removePrefix` | 否 |  | 删除数据表的指定前缀名称。 | `gf_` |
| `jsonCase` | 否 | `CamelLower` | 指定 `model` 中生成的数据实体对象中 `json` 标签名称规则，参数不区分大小写。参数可选为： `Camel`、 `CamelLower`、 `Snake`、 `SnakeScreaming`、 `SnakeFirstUpper`、 `Kebab`、 `KebabScreaming`。具体介绍请参考命名行帮助示例。 | `CamelLower` |
| `stdTime` | 否 |  | 当数据表字段类型为时间类型时，代码生成的属性类型使用标准库的 `time.Time` 而不是框架的 `*gtime.Time` 类型。 | `1` |
| `gJsonSupport` | 否 |  | 当数据表字段类型为 `JSON` 类型时，代码生成的属性类型使用 `*gjson.Json` 类型。 | `1` |
| `tplDaoIndex` | 否 | [gen\_dao\_template\_dao.go](https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go) | 生成 `Dao` 代码文件模板内容。 | 请查看代码源文件 |
| `tplDaoInternal` | 否 | [gen\_dao\_template\_dao.go](https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_dao.go) | 生成 `Dao Internal` 代码文件模板内容。 | 请查看代码源文件 |
| `tplModelIndex` | 否 | [gen\_dao\_template\_model.go](https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go) | 生成 `Model` 代码文件模板内容。 | 请查看代码源文件 |
| `tplModelStruct` | 否 | [gen\_dao\_template\_model.go](https://github.com/gogf/gf-cli/blob/master/command/gen/gen_dao_template_model.go) | 生成 `Model Struct` 代码模板内容。 | 请查看代码源文件 |
| `mod` | 否 |  | 用于生成 `go` 文件的 `import` 计算，默认情况下会自动读取当前项目根目录下的 `go.mod` 获取。 | `github.com/gogf/gf-demos` |

生成的代码结构示例：

![](https://goframe.org/download/attachments/1114168/image2020-12-24_17-39-44.png?version=1&modificationDate=1608802784148&api=v2)

其中：

1. `dao/internal` 以及 `model/internal` 下面的文件由工具生成，多次生成会被覆盖，因此不要手动修改。采用 `internal` 包名的目的是仅作为 `dao` 或 `model` 的内部包引用，不对外开放。
2. `dao` 目录下的文件 可以做一些数据库的定制化操作，通过工具多次生成不会覆盖，但是更多建议用户在自己的 `service` 中实现。
3. `model` 目录下的文件，可以做自定义的一些数据结构定义，通过工具多次生成不会覆盖。