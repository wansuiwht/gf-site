---
title: 'ORM链式操作-写入保存'
sidebar_position: 1
hide_title: true
---

## `Insert/Replace/Save`

这几个链式操作方法用于数据的写入，并且支持自动的单条或者批量的数据写入，区别如下：

1. `Insert`

使用 `INSERT INTO` 语句进行数据库写入，如果写入的数据中存在主键或者唯一索引时，返回失败，否则写入一条新数据；

2. `Replace`

使用 `REPLACE INTO` 语句进行数据库写入，如果写入的数据中存在主键或者唯一索引时，会删除原有的记录，必定会写入一条新记录；

3. `Save`

使用 `INSERT INTO` 语句进行数据库写入，如果写入的数据中存在主键或者唯一索引时，更新原有数据，否则写入一条新数据；


> 在部分数据库类型中，并不支持 `Replace/Save` 方法，具体请参考数据库类型介绍章节。

这几个方法往往需要结合 `Data` 方法使用，该方法用于传递数据参数，用于数据写入/更新等写操作，支持的参数为 `string/map/slice/struct/*struct`。例如，在进行 `Insert` 操作时，开发者可以传递任意的 `map` 类型，如: `map[string]string`/ `map[string]interface{}`/ `map[interface{}]interface{}` 等等，也可以传递任意的 `struct/*struct/[]struct/[]*struct` 类型。此外，这几个方法的参数列表也支持直接的 `data` 参数输入，该参数 `Data` 方法参数一致。

## `InsertIgnore`

从 `goframe v1.9.0` 版本开始， `goframe` 的 `ORM` 提供了一个常用写入方法 `InsertIgnore`，用于写入数据时如果写入的数据中存在主键或者唯一索引时，忽略错误继续执行写入。该方法定义如下：

```go
func (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)
```

## `InsertAndGetId`

从 `goframe v1.15.7` 版本开始， `goframe` 的 `ORM` 同时也提供了一个常用写入方法 `InsertAndGetId`，用于写入数据时并直接返回自增字段的 `ID`。该方法定义如下：

```go
func (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)
```

## 使用示例

### 示例1，基本使用

数据写入/保存方法往往需要结合 `Data` 方法使用：

```go
// INSERT INTO `user`(`name`) VALUES('john')
r, err := db.Table("user").Data(g.Map{"name": "john"}).Insert()
// INSERT IGNORE INTO `user`(`uid`,`name`) VALUES(10000,'john')
r, err := db.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).InsertIgnore()
// REPLACE INTO `user`(`uid`,`name`) VALUES(10000,'john')
r, err := db.Table("user").Data(g.Map{"uid": 10000, "name": "john"}).Replace()
// INSERT INTO `user`(`uid`,`name`) VALUES(10001,'john') ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)
r, err := db.Table("user").Data(g.Map{"uid": 10001, "name": "john"}).Save()

```

也可以不使用 `Data` 方法，而给写入/保存方法直接传递数据参数：

```go
r, err := db.Table("user").Insert(g.Map{"name": "john"})
r, err := db.Table("user").Replace(g.Map{"uid": 10000, "name": "john"})
r, err := db.Table("user").Save(g.Map{"uid": 10001, "name": "john"})

```

数据参数也常用 `struct` 类型，例如当表字段为 `uid/name/site` 时：

```go
type User struct {
    Uid  int    `orm:"uid"`
    Name string `orm:"name"`
    Site string `orm:"site"`
}
user := &User{
    Uid:  1,
    Name: "john",
    Site: "https://goframe.org",
}
// INSERT INTO `user`(`uid`,`name`,`site`) VALUES(1,'john','https://goframe.org')
r, err := g.DB().Table("user").Data(user).Insert()

```

### 示例2，数据批量写入

```go
// INSERT INTO `user`(`name`) VALUES('john_1'),('john_2'),('john_3')
r, err := db.Table("user").Data(g.List{
    {"name": "john_1"},
    {"name": "john_2"},
    {"name": "john_3"},
}).Insert()

```

可以通过 `Batch` 方法指定批量操作中分批写入条数数量（默认是 `10`），以下示例将会被拆分为两条写入请求：

```go
// INSERT INTO `user`(`name`) VALUES('john_1'),('john_2')
// INSERT INTO `user`(`name`) VALUES('john_3')
r, err := db.Table("user").Data(g.List{
    {"name": "john_1"},
    {"name": "john_2"},
    {"name": "john_3"},
}).Batch(2).Insert()

```

### 示例3，数据批量保存

批量保存操作与单条保存操作原理是一样的，当写入的数据中存在主键或者唯一索引时将会更新原有记录值，否则新写入一条记录。

```go
// INSERT INTO `user`(`uid`,`name`) VALUES(10000,'john_1'),(10001,'john_2'),(10002,'john_3')
// ON DUPLICATE KEY UPDATE `uid`=VALUES(`uid`),`name`=VALUES(`name`)
r, err := db.Table("user").Data(g.List{
    {"uid":10000, "name": "john_1"},
    {"uid":10001, "name": "john_2"},
    {"uid":10002, "name": "john_3"},
}).Save()

```

## `RawSQL` 语句嵌入

`gdb.Raw` 是字符串类型，该类型的参数将会直接作为 `SQL` 片段嵌入到提交到底层的 `SQL` 语句中，不会被自动转换为字符串参数类型、也不会被当做预处理参数。例如：

```go
// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES('id+2','john','123456','now()')
db.Model("user").Data(g.Map{
	"id":          "id+2",
	"passport":    "john",
	"password":    "123456",
	"nickname":    "JohnGuo",
	"create_time": "now()",
}).Insert()
// 执行报错：Error Code: 1136. Column count doesn't match value count at row 1
```

使用 `gdb.Raw` 改造后：

```go
// INSERT INTO `user`(`id`,`passport`,`password`,`nickname`,`create_time`) VALUES(id+2,'john','123456',now())
db.Model("user").Data(g.Map{
	"id":          gdb.Raw("id+2"),
	"passport":    "john",
	"password":    "123456",
	"nickname":    "JohnGuo",
	"create_time": gdb.Raw("now()"),
}).Insert()
```