---
title: 'ORM方法操作'
sidebar_position: 2
---

## 方法操作

`gdb` 方法操作相对链式操作更偏底层操作一些，在项目开发中常用链式操作，因为链式操作更简单灵活，但链式操作执行不了太过于复杂的SQL操作，可以交给方法操作来处理。

**接口文档：** [https://godoc.org/github.com/gogf/gf/database/gdb](https://godoc.org/github.com/gogf/gf/database/gdb)

**常用方法：**

本文档的方法列表可能滞后于于代码，详细的方法列表请查看接口文档，以下方法仅供参考。

```
// SQL操作方法，返回原生的标准库sql对象
Query(query string, args ...interface{}) (*sql.Rows, error)
Exec(query string, args ...interface{}) (sql.Result, error)
Prepare(query string) (*sql.Stmt, error)

// 数据表记录查询：
// 查询单条记录、查询多条记录、获取记录对象、查询单个字段值(链式操作同理)
GetAll(sql string, args ...interface{}) (Result, error)
GetOne(sql string, args ...interface{}) (Record, error)
GetValue(sql string, args ...interface{}) (Value, error)
GetArray(sql string, args ...interface{}) ([]Value, error)
GetCount(sql string, args ...interface{}) (int, error)
GetStruct(objPointer interface{}, sql string, args ...interface{}) error
GetStructs(objPointerSlice interface{}, sql string, args ...interface{}) error
GetScan(objPointer interface{}, sql string, args ...interface{}) error

// 数据单条操作
Insert(table string, data interface{}, batch...int) (sql.Result, error)
Replace(table string, data interface{}, batch...int) (sql.Result, error)
Save(table string, data interface{}, batch...int) (sql.Result, error)

// 数据批量操作
BatchInsert(table string, list interface{}, batch...int) (sql.Result, error)
BatchReplace(table string, list interface{}, batch...int) (sql.Result, error)
BatchSave(table string, list interface{}, batch...int) (sql.Result, error)

// 数据修改/删除
Update(table string, data interface{}, condition interface{}, args ...interface{}) (sql.Result, error)
Delete(table string, condition interface{}, args ...interface{}) (sql.Result, error)
```

**简要说明：**

1. `Query` 返回的是原生的标准库的结果集对象，需要自行解析；
2.  在执行数据查询时推荐使用 `Get*` 系列查询方法；
3. `Insert`/ `Replace`/ `Save` 方法中的 `data` 参数支持的数据类型为： `string/map/slice/struct/*struct`，当传递为 `slice` 类型时，自动识别为批量操作，此时 `batch` 参数有效；
4. `Batch*` 方法中的 `list` 参数类型支持任意的 `slice` 类型；

## 操作示例

### 1\. `ORM` 对象

```  go
// 获取默认配置的数据库对象(配置名称为"default")
db := g.DB()

// 获取配置分组名称为"user-center"的数据库对象
db := g.DB("user-center")

// 使用原生New方法创建数据库对象
db, err := gdb.New()
db, err := gdb.New("user-center")

// 使用原生单例管理方法获取数据库对象单例
db, err := gdb.Instance()
db, err := gdb.Instance("user-center")

// 注意不用的时候不需要使用Close方法关闭数据库连接(并且gdb也没有提供Close方法)，
// 数据库引擎底层采用了链接池设计，当链接不再使用时会自动关闭

```

### 2\. 数据写入

```  go
r, err := db.Insert("user", gdb.Map {
    "name": "john",
})

```

### 3\. 数据查询(列表)

```  go
list, err := db.GetAll("select * from user limit 2")
list, err := db.GetAll("select * from user where age > ? and name like ?", g.Slice{18, "%john%"})
list, err := db.GetAll("select * from user where status=?", g.Slice{1})

```

### 4\. 数据查询(单条)

```  go
one, err := db.GetOne("select * from user limit 2")
one, err := db.GetOne("select * from user where uid=1000")
one, err := db.GetOne("select * from user where uid=?", 1000)
one, err := db.GetOne("select * from user where uid=?", g.Slice{1000})

```

### 5\. 数据保存

```  go
r, err := db.Save("user", gdb.Map {
    "uid"  :  1,
    "name" : "john",
})

```

### 6\. 批量操作

其中 `batch` 参数用于指定批量操作中分批写入条数数量（默认是 `10`）。

```  go
// BatchInsert/BatchReplace/BatchSave 同理
_, err := db.BatchInsert("user", gdb.List {
    {"name": "john_1"},
    {"name": "john_2"},
    {"name": "john_3"},
    {"name": "john_4"},
}, 10)

```

### 7\. 数据更新/删除

```  go
// db.Update/db.Delete 同理
// UPDATE `user` SET `name`='john' WHERE `uid`=10000
r, err := db.Update("user", gdb.Map {"name": "john"}, "uid=?", 10000)
// UPDATE `user` SET `name`='john' WHERE `uid`=10000
r, err := db.Update("user", "name='john'", "uid=10000")
// UPDATE `user` SET `name`='john' WHERE `uid`=10000
r, err := db.Update("user", "name=?", "uid=?", "john", 10000)

```

注意，参数域支持并建议使用预处理模式（使用 `?` 占位符）进行输入，避免 `SQL` 注入风险。