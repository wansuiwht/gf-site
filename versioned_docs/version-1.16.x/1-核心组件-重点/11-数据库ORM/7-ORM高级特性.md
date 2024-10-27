---
title: 'ORM高级特性'
sidebar_position: 7
---

## 调试模式

为便于开发阶段调试， `gdb` 支持调试模式，可以通过 `Debug` 配置文件配置项或者 `SetDebug` 配置方式开启调试模式， 随后任何的数据库 `SQL` 操作语句都将会由内置的日志对象，以 `DEBUG` 级别输出到终端或者日志文件中。以下是一个开启了调试模式的配置示例：

```
[database]
    [database.default]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
        debug  = true
```

输入的日志内容请详见下面章节介绍。

## 日志输出

日志输出往往是打印一些调试或者 `SQL` 语句，日志对象可以通过 `SetLogger` 方法来设置，也可以通过配置文件来做简单配置，日志的配置请查看 `ORM` 的 [ORM使用配置](output/goframe-v1.16-md/核心组件-重点/数据库ORM/ORM使用配置) 章节。以下是一个开启了日志输出的配置示例：

```
[database]
    [database.logger]
        Path   = "/var/log/gf-app/sql"
        Level  = "all"
        Stdout = true
    [database.default]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
        debug  = true

```

`ORM` 组件输出的日志相当详尽，我们来看一个示例：

```
2021-05-22 21:12:10.776 [DEBU] [  4 ms] [default] [1] BEGIN
2021-05-22 21:12:10.776 [DEBU] [  0 ms] [default] [1] SAVEPOINT `transaction0`
2021-05-22 21:12:10.789 [DEBU] [ 13 ms] [default] [1] SHOW FULL COLUMNS FROM `user`
2021-05-22 21:12:10.790 [DEBU] [  1 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')
2021-05-22 21:12:10.791 [DEBU] [  1 ms] [default] [1] ROLLBACK TO SAVEPOINT `transaction0`
2021-05-22 21:12:10.791 [DEBU] [  0 ms] [default] [1] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')
2021-05-22 21:12:10.792 [DEBU] [  1 ms] [default] [1] COMMIT
```

可以看到，日志包含以下几部分信息：

1. 日期及时间，精确到毫秒。
2. 日志级别。因为 `SQL` 日志主要用于功能调试/问题排查，生产环境往往需要关闭掉，因此日志级别固定为 `DEBUG` 级别。
3. 当前 `SQL` 执行耗时。从客户端发起请求到接收到数据的时间，单位为毫秒。当执行时间不足 `1` 毫秒时，展示为 `0` 毫秒。
4. 当前 `SQL` 所处的数据库配置分组，默认为 `default`。关于配置分组的介绍具体请参考章节： [ORM使用配置](output/goframe-v1.16-md/核心组件-重点/数据库ORM/ORM使用配置)。
5. 当前 `SQL` 所属的 **事务ID**。如果当前 `SQL` 不属于事务操作时，不存在该字段。关于事务ID的介绍请参考章节： [ORM事务处理](output/goframe-v1.16-md/核心组件-重点/数据库ORM/ORM事务处理)。
6. 具体执行的 `SQL` 语句。需要注意的是，由于底层使用的是 `SQL` 预处理，这里的 `SQL` 语句是通过组件自动拼接的结果，仅供参考。

## 空跑特性

`ORM` 空跑可以通过 `DryRun` 配置项来启用，默认关闭。当 `ORM` 的空跑特性开启时，读取操作将会提交，而写入、更新、删除操作将会被忽略。该特性往往结合调试模式和日志输出一起使用，用于校验当前的程序（特别是脚本）执行的 `SQL` 是否符合预期。以下是一个开启了空跑特性的配置示例：

```
[database]
    [database.default]
        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"
        debug  = true
        dryRun = true
```

空跑特性也可以通过命令行参数或者环境变量全局修改：

1. 命令行启动参数 \- `gf.gdb.dryrun=true`。
2. 指定的环境变量 \- `GF_GDB_DRYRUN=true`。

例如：

```
$ ./app --gf.gdb.dryrun=true
```

```
$ ./app --gf.gdb.dryrun true
```

## 字段映射

在对数据进行写入/更新时，使用 `Fields/Fields/Data` 方法时，如果给定的参数为 `map/struct` 类型，给定参数的键名/属性名称将会自动按照忽略大小写及特殊字符的方式与数据表的字段进行自动识别映射。例如：

``` html
Map键名     字段名称     是否匹配
nickname   nickname      match
NICKNAME   nickname      match
Nick-Name  nickname      match
nick_name  nickname      match
nick name  nickname      match
NickName   nickname      match
Nick-name  nickname      match
nick_name  nickname      match
nick name  nickname      match
```

我们来看一个例子，我们实现一个查询用户基本信息的一个接口，这个用户是一个医生。

1、我们有两张表，一张 `user` 表，大概有 `30` 个字段；一张 `doctor_user` 表，大概有 `80` 多个字段。

2、 `user` 是用户基础表，包含用户的最基础信息； `doctor_user` 是基于 `user` 表的业务扩展表，特定用户角色的表，与 `user` 表是一对一关系。

3、我们有一个 `GRPC` 的接口，接口定义是这样的（为方便演示，这里做了一些简化）：

1） `GetDoctorInfoRes`

```
// 查询接口返回数据结构
type GetDoctorInfoRes struct {
	UserInfo             *UserInfo   `protobuf:"bytes,1,opt,name=UserInfo,proto3" json:"UserInfo,omitempty"`
	DoctorInfo           *DoctorInfo `protobuf:"bytes,2,opt,name=DoctorInfo,proto3" json:"DoctorInfo,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}
```

2） `UserInfo`

```
// 用户基础信息
type UserInfo struct {
	Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Avatar               string   `protobuf:"bytes,2,opt,name=avatar,proto3" json:"avatar,omitempty"`
	Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Sex                  int32    `protobuf:"varint,4,opt,name=sex,proto3" json:"sex,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}
```

3） `DoctorInfo`

```
// 医生信息
type DoctorInfo struct {
	Id                   uint32   `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Hospital             string   `protobuf:"bytes,4,opt,name=hospital,proto3" json:"hospital,omitempty"`
	Section              string   `protobuf:"bytes,6,opt,name=section,proto3" json:"section,omitempty"`
	Title                string   `protobuf:"bytes,8,opt,name=title,proto3" json:"title,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}
```

4、查询接口实现代码

```
// 查询医生信息
func (s *Service) GetDoctorInfo(ctx context.Context, req *pb.GetDoctorInfoReq) (res *pb.GetDoctorInfoRes, err error) {
    // Protobuf返回数据结构
	res = &pb.GetDoctorInfoRes{}
	// 查询医生信息
    // SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=xxx
	err = dao.PrimaryDoctorUser.
		Ctx(ctx).
		Fields(res.DoctorInfo).
		Where(dao.PrimaryDoctorUser.Columns.UserId, req.Id).
		Scan(&res.DoctorInfo)
	if err != nil {
		return
	}
	// 查询基础用户信息
    // SELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=xxx
	err = dao.PrimaryUser.
		Ctx(ctx).
		Fields(res.DoctorInfo).
		Where(dao.PrimaryUser.Columns.Id, req.Id).
		Scan(&res.UserInfo)
	return res, err
}
```

当我们调用 `GetDoctorInfo` 执行查询时，将会向数据库发起两条 `SQL` 查询，例如：

```
SELECT `id`,`avatar`,`name`,`sex` FROM `user` WHERE `user_id`=1
SELECT `id`,`name`,`hospital`,`section`,`title` FROM `doctor_user` WHERE `id`=1
```

可以看到：

- 使用 `Fields` 方法时，参数类型为 `struct` 或者 `*struct`， `ORM` 将会自动将 `struct` 的属性名称与数据表的字段名称做自动映射匹配，当映射匹配成功时只会查询特定字段数据，而不存在的属性字段将会被自动过滤。
- 使用 `Scan` 方法时（也可以用 `Struct`/ `Structs`），参数类型为 `*struct` 或者 `**struct`，查询结果将会自动与 `struct` 的属性做自动映射匹配，当映射匹配成功时会自动做转换赋值，否则不会对参数的属性做任何处理。

## 类型识别

使用 `gdb` 查询数据时，返回的数据类型将会被自动识别映射到 `Go变量类型`。例如: 当字段类型为 `int(xx)` 时，查询到的字段值类型将会被识别会 `int` 类型；当字段类型为 `varchar(xxx)`/ `char(xxx)`/ `text` 等类型时将会被自动识别为 `string` 类型。以下以 `mysql` 类型为例，介绍数据库类型与Go变量类型的自动识别映射关系:

版本可能随时迭代更新，具体可查看源码 [https://github.com/gogf/gf/blob/master/database/gdb/gdb\_core\_structure.go](https://github.com/gogf/gf/blob/master/database/gdb/gdb_core_structure.go)

| 数据库类型 | Go变量类型 |
| --- | --- |
| `*char` | `string` |
| `*text` | `string` |
| `*binary` | `bytes` |
| `*blob` | `bytes` |
| `*int` | `int` |
| `*money` | `float64` |
| `bit` | `int` |
| `big_int` | `int64` |
| `float` | `float64` |
| `double` | `float64` |
| `decimal` | `float64` |
| `bool` | `bool` |
| `date` | `time.Time` |
| `datetime` | `time.Time` |
| `timestamp` | `time.Time` |
| `其他` | `string` |

这一特性对于需要将查询结果进行编码，并通过例如 `JSON` 方式直接返回给客户端来说将会非常友好。

## 类型转换

`gdb` 的数据记录结果（ `Value`）支持非常灵活的类型转换，并内置支持常用的数十种数据类型的转换。 `Result`/ `Record` 的类型转换请查看后续 [ORM高级特性](https://itician.org/database/gdb/senior) 章节。

> `Value` 类型是 `*gvar.Var` 类型的别名，因此可以使用 `gvar.Var` 数据类型的所有转换方法，具体请查看 [通用动态变量](https://itician.org/container/gvar/index) 章节

使用示例：

首先，数据表定义如下：

```  sql
# 商品表
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL COMMENT '商品名称',
  `price` decimal(10,2) NOT NULL COMMENT '商品价格',
  ...
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

```

其次，数据表中的数据如下：

``` html
id   title     price
1    IPhoneX   5999.99

```

最后，示例代码如下：

```  go
if r, err := db.Table("goods").FindOne(1); err == nil {
    fmt.Printf("goods    id: %d\n",   r["id"].Int())
    fmt.Printf("goods title: %s\n",   r["title"].String())
    fmt.Printf("goods proce: %.2f\n", r["price"].Float32())
} else {
    g.Log().Error(err)
}

```

执行后，输出结果为：

```  shell
goods    id: 1
goods title: IPhoneX
goods proce: 5999.99

```

## 内嵌结构支持

`gdb` 模块针对于 `struct` 内嵌结构提供了良好的支持，包括参数传递、结果处理。例如：

```  go
type Base struct {
    Uid        int         `orm:"uid"`
    CreateAt   *gtime.Time `orm:"create_at"`
    UpdateAt   *gtime.Time `orm:"update_at"`
    DeleteAt   *gtime.Time `orm:"delete_at"`
}
type User struct {
    Base
    Passport   string `orm:"passport"`
    Password   string `orm:"password"`
    Nickname   string `orm:"nickname"`
}

```

并且，无论多少层级的 `struct` 嵌套， `gdb` 的参数传递和结果处理都支持。

## 自定义类型转换

当我们需要将查询的结果转换到自定义的类型中，无论是作为直接转换的类型还是作为 `struct` 的属性，都可以通过实现特定的接口来实现。详细介绍请参考 [类型转换-UnmarshalValue](output/goframe-v1.16-md/核心组件-重点/类型转换/类型转换-UnmarshalValue) 章节。