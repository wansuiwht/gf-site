---
title: 'ORM使用配置'
sidebar_position: 0
hide_title: true
---

## 配置文件

我们推荐使用配置组件来管理数据库配置，并使用 `g` 对象管理模块中的 `g.DB("数据库分组名称")` 方法获取数据库操作对象，数据库对象将会自动读取配置组件中的相应配置项，并自动初始化该数据库操作的单例对象。数据库配置管理功能使用的是配置管理组件实现（配置组件采用接口化设计默认使用文件系统实现），同样支持多种数据格式如： `toml/yaml/json/xml/ini/properties`。默认并且推荐的配置文件数据格式为 `yaml`。

### 简单配置

一个简单的数据库配置如下：

```
database:
  default:
    type:  "mysql"
    link:  "root:12345678@tcp(127.0.0.1:3306)/test"
  user:
    type:  "mysql"
    link:  "root:12345678@tcp(127.0.0.1:3306)/user"
```

以上数据库配置示例中包含两个数据库分组 `default` 和 `user`，在代码中可以通过 `g.DB()` 和 `g.DB("user")` 获取对应的数据库连接对象。也可以将 `type` 数据库类型写到 `link` 配置项中，以上简化为：

```
database:
  default:
    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
  user:
    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
```

不同数据类型对应的 `link` 如下:

| 类型 | link配置 | 更多参数 |
| --- | --- | --- |
| `mysql` | `mysql: 账号:密码@tcp(地址:端口)/数据库名称` | [mysql](https://github.com/go-sql-driver/mysql) |
| `mariadb` | `mariadb: 账号:密码@tcp(地址:端口)/数据库名称` | [mysql](https://github.com/go-sql-driver/mysql) |
| `tidb` | `mtidb: 账号:密码@tcp(地址:端口)/数据库名称` | [mysql](https://github.com/go-sql-driver/mysql) |
| `pgsql` | `pgsql: user=账号 password=密码 host=地址 port=端口 dbname=数据库名称` | [pq](https://github.com/lib/pq) |
| `mssql` | `mssql: user id=账号;password=密码;server=地址;port=端口;database=数据库名称;encrypt=disable` | [go-mssqldb](https://github.com/denisenkom/go-mssqldb) |
| `sqlite` | `sqlite: 文件绝对路径` (如: `/var/lib/db.sqlite3`) | [go-sqlite3](https://github.com/mattn/go-sqlite3) |
| `oracle` | `oracle://账号:密码@地址:端口/数据库名称` | [go-oci8](https://github.com/mattn/go-oci8) |

各数据库类型更详细的 `link` 参数信息请查看对应引擎官网，支持的数据库类型参考 [数据库ORM](output/goframe-v2.1-md/核心组件-重点/数据库ORM) 章节。

### 完整配置

完整的 `config.yaml` 数据库配置项的数据格式形如下：

```
database:
  分组名称:
    host:                  "地址"
    port:                  "端口"
    user:                  "账号"
    pass:                  "密码"
    name:                  "数据库名称"
    type:                  "数据库类型(mysql/pgsql/mssql/sqlite/oracle)"
    link:                  "(可选)自定义数据库链接信息，当该字段被设置值时，以上链接字段(Host,Port,User,Pass,Name)将失效，但是type必须有值"
    role:                  "(可选)数据库主从角色(master/slave)，不使用应用层的主从机制请均设置为master"
    debug:                 "(可选)开启调试模式"
    prefix:                "(可选)表名前缀"
    dryRun:                "(可选)ORM空跑(只读不写)"
    charset:               "(可选)数据库编码(如: utf8/gbk/gb2312)，一般设置为utf8"
    weight:                "(可选)负载均衡权重，用于负载均衡控制，不使用应用层的负载均衡机制请置空"
    timezone:              "(可选)时区配置，例如:local,Asia/Shanghai"
    maxIdle:               "(可选)连接池最大闲置的连接数"
    maxOpen:               "(可选)连接池最大打开的连接数"
    maxLifetime:           "(可选)连接对象可重复使用的时间长度"
    createdAt:             "(可选)自动创建时间字段名称"
    updatedAt:             "(可选)自动更新时间字段名称"
    deletedAt:             "(可选)软删除时间字段名称"
    timeMaintainDisabled:  "(可选)是否完全关闭时间更新特性，true时CreatedAt/UpdatedAt/DeletedAt都将失效"
```

完整的数据库配置项示例( `YAML`)：

```
database:
  default:
    host:          "127.0.0.1"
    port:          "3306"
    user:          "root"
    pass:          "12345678"
    name:          "test"
    type:          "mysql"
    role:          "master"
    debug:         "true"
    dryrun:        0
    weight:        "100"
    prefix:        "gf_"
    charset:       "utf8"
    timezone:      "local"
    maxIdle:       "10"
    maxOpen:       "100"
    maxLifetime:   "30s"
```

使用该配置方式时，为保证数据库安全，默认底层不支持多行 `SQL` 语句执行。为了得到更多配置项控制，请参考推荐的简化配置，同时建议您务必了解清楚简化配置项中每个连接参数的功能作用。

### 集群模式

`gdb` 的配置支持集群模式，数据库配置中每一项分组配置均可以是多个节点，支持负载均衡权重策略，例如：

```
database:
  default:
  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
    role: "master"
  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
    role: "slave"

  user:
  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
    role: "master"
  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
    role: "slave"
  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
    role: "slave"
```

以上数据库配置示例中包含两个数据库分组 `default` 和 `user`，其中 `default` 分组包含一主一从， `user` 分组包含一主两从。在代码中可以通过 `g.DB()` 和 `g.DB("user")` 获取对应的数据库连接对象。

### 日志配置

`gdb` 支持日志输出，内部使用的是 `glog.Logger` 对象实现日志管理，并且可以通过配置文件对日志对象进行配置。默认情况下 `gdb` 关闭了 `DEBUG` 日志输出，如果需要打开 `DEBUG` 信息需要将数据库的 `debug` 参数设置为 `true`。以下是为一个配置文件示例：

```
database:
  logger:
    path:    "/var/log/gf-app/sql"
    level:   "all"
    stdout:  true
  default:
    link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/user_center"
    debug:   true
```

其中 `database.logger` 即为 `gdb` 的日志配置，当该配置不存在时，将会使用日志组件的默认配置，具体请参考 [日志组件-配置管理](output/goframe-v2.1-md/核心组件-重点/日志组件/日志组件-配置管理) 章节。

需要注意哦：由于 `ORM` 底层都是采用安全的预处理执行方式，提交到底层的 `SQL` 与参数其实是分开的，因此日志中记录的完整 `SQL` 仅作参考方便人工阅读，并不是真正提交到底层的 `SQL` 语句。

## 原生配置(高阶，可选)

以下为数据库底层管理配置介绍，如果您对数据库的底层配置管理比较感兴趣，可继续阅读后续章节。

### 数据结构

`gdb` 数据库管理模块的内部配置管理数据结构如下：

`ConfigNode` 用于存储一个数据库节点信息； `ConfigGroup` 用于管理多个数据库节点组成的配置分组(一般一个分组对应一个业务数据库集群)； `Config` 用于管理多个 `ConfigGroup` 配置分组。

**配置管理特点：**

1. 支持多节点数据库集群管理；
2. 每个节点可以单独配置连接属性；
3. 采用单例模式管理数据库实例化对象；
4. 支持对数据库集群分组管理，按照分组名称获取实例化的数据库操作对象；
5. 支持多种关系型数据库管理，可通过 `ConfigNode.Type` 属性进行配置；
6. 支持 `Master-Slave` 读写分离，可通过 `ConfigNode.Role` 属性进行配置；
7. 支持客户端的负载均衡管理，可通过 `ConfigNode.Weight` 属性进行配置，值越大，优先级越高；

```go
type Config      map[string]ConfigGroup // 数据库配置对象
type ConfigGroup []ConfigNode           // 数据库分组配置
// 数据库配置项(一个分组配置对应多个配置项)
type ConfigNode  struct {
    Host             string        // 地址
    Port             string        // 端口
    User             string        // 账号
    Pass             string        // 密码
    Name             string        // 数据库名称
    Type             string        // 数据库类型：mysql, sqlite, mssql, pgsql, oracle
	Link             string        // (可选)自定义链接信息，当该字段被设置值时，以上链接字段(Host,Port,User,Pass,Name)将失效(该字段是一个扩展功能)     Role             string        // (可选，默认为master)数据库的角色，用于主从操作分离，至少需要有一个master，参数值：master, slave
    Debug            bool          // (可选)开启调试模式
    Charset          string        // (可选，默认为 utf8)编码，默认为 utf8
    Prefix           string        // (可选)表名前缀
    Weight           int           // (可选)用于负载均衡的权重计算，当集群中只有一个节点时，权重没有任何意义
    MaxIdleConnCount int           // (可选)连接池最大闲置的连接数
    MaxOpenConnCount int           // (可选)连接池最大打开的连接数
    MaxConnLifetime  time.Duration // (可选，单位秒)连接对象可重复使用的时间长度
}
```

特别说明， `gdb` 的配置管理最大的 **特点** 是，（同一进程中）所有的数据库集群信息都使用同一个配置管理模块进行统一维护， **不同业务的数据库集群配置使用不同的分组名称** 进行配置和获取。

### 配置方法

这是原生调用 `gdb` 模块来配置管理数据库。如果开发者想要自行控制数据库配置管理可以参考以下方法。若无需要可忽略该章节。

接口文档： [https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb](https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb)

```
// 添加一个数据库节点到指定的分组中
func AddConfigNode(group string, node ConfigNode)
// 添加一个配置分组到数据库配置管理中(同名覆盖)
func AddConfigGroup(group string, nodes ConfigGroup)

// 添加一个数据库节点到默认的分组中(默认为default，可修改)
func AddDefaultConfigNode(node ConfigNode)
// 添加一个配置分组到数据库配置管理中(默认分组为default，可修改)
func AddDefaultConfigGroup(nodes ConfigGroup)

// 设置默认的分组名称，获取默认数据库对象时将会自动读取该分组配置
func SetDefaultGroup(groupName string)

// 设置数据库配置为定义的配置信息，会将原有配置覆盖
func SetConfig(c Config)
```

默认分组表示，如果获取数据库对象时不指定配置分组名称，那么 `gdb` 默认读取的配置分组。例如： `gdb.NewByGroup()` 可获取一个默认分组的数据库对象。简单的做法，我们可以通过 `gdb` 包的 `SetConfig` 配置管理方法进行自定义的数据库全局配置，例如：

```
gdb.SetConfig(gdb.Config {
    "default" : gdb.ConfigGroup {
        gdb.ConfigNode {
            Host     : "192.168.1.100",
            Port     : "3306",
            User     : "root",
            Pass     : "123456",
            Name     : "test",
            Type     : "mysql",
            Role     : "master",
            Weight   : 100,
        },
        gdb.ConfigNode {
            Host     : "192.168.1.101",
            Port     : "3306",
            User     : "root",
            Pass     : "123456",
            Name     : "test",
            Type     : "mysql",
            Role     : "slave",
            Weight   : 100,
        },
    },
    "user-center" : gdb.ConfigGroup {
        gdb.ConfigNode {
            Host     : "192.168.1.110",
            Port     : "3306",
            User     : "root",
            Pass     : "123456",
            Name     : "test",
            Type     : "mysql",
            Role     : "master",
            Weight   : 100,
        },
    },
})
```

随后，我们可以使用 `gdb.NewByGroup("数据库分组名称")` 来获取一个数据库操作对象。该对象用于后续的数据库一系列方法/链式操作。