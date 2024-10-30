---
title: 'ORM事务操作'
sidebar_position: 3
hide_title: true
---

使用 `goframe` 的 `ORM` 组件进行事务操作比较简便，可以通过两种操作方式来实现。

1. 一种是开启事务之后会返回一个事务操作对象 `*gdb.TX`，随后可以使用该对象进行如之前章节介绍的方法操作和链式操作。
2. 一种是以闭包的形式来操作事务，所有的事务逻辑在闭包中实现。

接口文档： [https://godoc.org/github.com/gogf/gf/database/gdb#TX](https://godoc.org/github.com/gogf/gf/database/gdb#TX)

## `Begin/Commit/Rollback`

开启事务操作可以通过执行 `db.Begin` 方法，该方法返回事务的操作对象，类型为 `*gdb.Tx`，通过该对象执行后续的数据库操作，并可通过 `tx.Commit` 提交修改，或者通过 `tx.Rollback` 回滚修改。

常见问题注意：开启事务操作后，请务必在不需要使用该事务对象时，通过 `Commit`/ `Rollback` 操作关闭掉该事务，建议充分利用好 `defer` 方法。如果事务使用后不关闭，在应用侧会引起 `goroutine` 不断激增泄露，在数据库侧会引起事务线程数量被打满，以至于后续的事务请求执行超时。此外，建议尽可能使用后续介绍的 `Transaction` 闭包方法来安全实现事务操作。

### 1\. 开启事务操作

```go
if tx, err := db.Begin(); err == nil {
    fmt.Println("开启事务操作")
}

```

事务操作对象可以执行所有 `db` 对象的方法，具体请参考 [API文档](https://godoc.org/github.com/gogf/gf/database/gdb)。

### 2\. 事务回滚操作

```go
if tx, err := db.Begin(); err == nil {
    r, err := tx.Save("user", gdb.Map{
        "id"   :  1,
        "name" : "john",
    })
    tx.Rollback()
    fmt.Println(r, err)
}

```

### 3\. 事务提交操作

```go
if tx, err := db.Begin(); err == nil {
    r, err := tx.Save("user", gdb.Map{
        "id"   :  1,
        "name" : "john",
    })
    tx.Commit()
    fmt.Println(r, err)
}

```

### 4\. 事务链式操作

事务操作对象仍然可以通过 `tx.Table` 或者 `tx.From` 方法返回一个链式操作的对象，该对象与 `db.Table` 或者 `db.From` 方法返回值相同，只不过数据库操作在事务上执行，可提交或回滚。

```go
if tx, err := db.Begin(); err == nil {
    r, err := tx.Table("user").Data(gdb.Map{"id":1, "name": "john_1"}).Save()
    tx.Commit()
    fmt.Println(r, err)
}

```

其他链式操作请参考 [ORM链式操作(重点)](1-ORM链式操作-重点/1-ORM链式操作-重点.md) 章节。

## `Transaction` 闭包操作

为方便安全执行事务操作， `gdb` 提供了事务的闭包操作，通过 `Transaction` 方法实现，该方法定义如下：

```go
func (db DB) Transaction(f func(tx *TX) error) (err error)

```

当给定的闭包方法返回的 `error` 为 `nil` 时，那么闭包执行结束后当前事务自动执行 `Commit` 提交操作；否则自动执行 `Rollback` 回滚操作。

如果闭包内部操作产生 `panic` 中断，该事务也将进行回滚。

使用示例：

```go
db.Transaction(func(tx *gdb.TX) error {
    // user
    result, err := tx.Insert("user", g.Map{
        "passport": "john",
        "password": "12345678",
        "nickname": "JohnGuo",
    })
    if err != nil {
        return err
    }
    // user_detail
    id, err := result.LastInsertId()
    if err != nil {
        return err
    }
    _, err = tx.Insert("user_detail", g.Map{
        "uid":       id,
        "site":      "https://johng.cn",
        "true_name": "GuoQiang",
    })
    if err != nil {
        return err
    }
    return nil
})

```

## 嵌套事务操作

从 `GoFrame` 版本 `v1.15.7` 开始，提供了对数据库嵌套事务的支持。需要注意的是，数据库服务往往并不支持嵌套事务，而是依靠 `ORM` 组件层通过 `Transaction Save Point` 特性实现的。相关方法：

```go
// Begin starts a nested transaction procedure.
func (tx *TX) Begin() error

// Commit commits current transaction.
// Note that it releases previous saved transaction point if it's in a nested transaction procedure,
// or else it commits the hole transaction.
func (tx *TX) Commit() error

// Rollback aborts current transaction.
// Note that it aborts current transaction if it's in a nested transaction procedure,
// or else it aborts the hole transaction.
func (tx *TX) Rollback() error

// SavePoint performs `SAVEPOINT xxx` SQL statement that saves transaction at current point.
// The parameter `point` specifies the point name that will be saved to server.
func (tx *TX) SavePoint(point string) error

// RollbackTo performs `ROLLBACK TO SAVEPOINT xxx` SQL statement that rollbacks to specified saved transaction.
// The parameter `point` specifies the point name that was saved previously.
func (tx *TX) RollbackTo(point string) error

// Transaction wraps the transaction logic using function `f`.
// It rollbacks the transaction and returns the error from function `f` if
// it returns non-nil error. It commits the transaction and returns nil if
// function `f` returns nil.
//
// Note that, you should not Commit or Rollback the transaction in function `f`
// as it is automatically handled by this function.
func (tx *TX) Transaction(f func(tx *TX) error) (err error)
```

### 1. 基本操作

一个简单的示例 `SQL`，包含两个字段 `id` 和 `name`：

```sql
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL COMMENT '用户ID',
  `name` varchar(45) NOT NULL COMMENT '用户名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

示例程序代码：

```go
tx, err := db.Begin()
if err != nil {
    panic(err)
}
if err = tx.Begin(); err != nil {
    panic(err)
}
_, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()
if err = tx.Rollback(); err != nil {
    panic(err)
}
_, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()
if err = tx.Commit(); err != nil {
    panic(err)
}
```

#### `db.Begin` 与 `tx.Begin`

可以看到，在我们的嵌套事务中出现了 `db.Begin` 和 `tx.Begin` 两种事务开启方式，两者有什么区别呢？ `db.Begin` 是在数据库服务上真正开启一个事务操作，并返回一个事务操作对象 `tx`，随后所有的事务操作都是通过该 `tx` 事务对象来操作管理。 `tx.Begin` 表示在当前事务操作中开启嵌套事务，默认情况下会对嵌套事务的 `SavePoint` 采用自动命名，命名格式为 `transactionN`，其中的 `N` 表示嵌套的层级数量，如果您看到日志中出现 ``SAVEPOINT `transaction1` `` 表示当前嵌套层级为 `2`（从 `0` 开始计算）。

#### 更详细的日志

`goframe` 的 `ORM` 拥有相当完善的日志记录机制，如果您打开 `SQL` 日志，那么将会看到以下日志信息，展示了整个数据库请求的详细执行流程：

```html
2021-05-02 13:40:15.483 [DEBU] [  0 ms] [default] SAVEPOINT `transaction0`
2021-05-02 13:40:15.485 [DEBU] [  2 ms] [default] SHOW FULL COLUMNS FROM `user`
2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')
2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `transaction0`
2021-05-02 13:40:15.486 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')
2021-05-02 13:40:15.487 [DEBU] [  1 ms] [default] COMMIT
```

执行后查询数据库结果：

```
mysql> select * from `user`;
+----+-------+
| id | name  |
+----+-------+
|  2 | smith |
+----+-------+
1 row in set (0.00 sec)
```

可以看到第一个操作被成功回滚，只有第二个操作执行并提交成功。

### 2\. 闭包操作

我们也可以通过闭包操作来实现嵌套事务，同样也是通过 `Transaction` 方法实现。

`Transaction` 方式可以实现对嵌套事务操作的无限层级嵌套，但是不推荐层级过深的嵌套事务，否则业务逻辑上可能不太好维护。本示例演示的是只有一个层级的事务嵌套操作。

```
if err = db.Transaction(func(tx *gdb.TX) error {
    // Nested transaction 1.
    if err = tx.Transaction(func(tx *gdb.TX) error {
        _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert()
        return err
    }); err != nil {
        return err
    }
    // Nested transaction 2, panic.
    if err = tx.Transaction(func(tx *gdb.TX) error {
        _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert()
        // Create a panic that can make this transaction rollback automatically.
        panic("error")
    }); err != nil {
        return err
    }
    return nil
}); err != nil {
    panic(err)
}
```

这个示例中，最后的事务执行失败之后，所有的操作都将会回滚。执行后，什么数据都不会写入。如果您打开 `SQL` 日志，那么将会看到以下日志信息，展示了整个数据库请求的详细执行流程：

```html
2021-05-02 13:42:01.935 [DEBU] [  1 ms] [default] SAVEPOINT `transaction0`
2021-05-02 13:42:01.939 [DEBU] [  4 ms] [default] SHOW FULL COLUMNS FROM `user`
2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(1,'john')
2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] RELEASE SAVEPOINT `transaction0`
2021-05-02 13:42:01.940 [DEBU] [  0 ms] [default] SAVEPOINT `transaction0`
2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')
2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `transaction0`
2021-05-02 13:42:01.941 [DEBU] [  0 ms] [default] ROLLBACK
```

### 3\. `SavePoint/RollbackTo`

开发者也可以灵活使用 `Transaction Save Point` 特性，并实现自定义的 `SavePoint` 命名以及指定 `Point` 回滚操作。

```go
tx, err := db.Begin()
if err != nil {
    panic(err)
}
defer func() {
    if err := recover(); err != nil {
        _ = tx.Rollback()
    }
}()
if _, err = tx.Model(table).Data(g.Map{"id": 1, "name": "john"}).Insert(); err != nil {
    panic(err)
}
if err = tx.SavePoint("MyPoint"); err != nil {
    panic(err)
}
if _, err = tx.Model(table).Data(g.Map{"id": 2, "name": "smith"}).Insert(); err != nil {
    panic(err)
}
if _, err = tx.Model(table).Data(g.Map{"id": 3, "name": "green"}).Insert(); err != nil {
    panic(err)
}
if err = tx.RollbackTo("MyPoint"); err != nil {
    panic(err)
}
if err = tx.Commit(); err != nil {
    panic(err)
}
```

如果您打开 `SQL` 日志，那么将会看到以下日志信息，展示了整个数据库请求的详细执行流程：

```html
2021-05-02 13:59:36.788 [DEBU] [  3 ms] [default] SHOW FULL COLUMNS FROM `user`
2021-05-02 13:59:36.788 [DEBU] [  0 ms] [default] INSERT INTO `user`(`name`,`id`) VALUES('john',1)
2021-05-02 13:59:36.789 [DEBU] [  1 ms] [default] SAVEPOINT `MyPoint`
2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] INSERT INTO `user`(`id`,`name`) VALUES(2,'smith')
2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] INSERT INTO `user`(`name`,`id`) VALUES('green',3)
2021-05-02 13:59:36.789 [DEBU] [  0 ms] [default] ROLLBACK TO SAVEPOINT `MyPoint`
2021-05-02 13:59:36.791 [DEBU] [  2 ms] [default] COMMIT
```

执行后查询数据库结果：

```
mysql> select * from `user`;
+----+------+
| id | name |
+----+------+
|  1 | john |
+----+------+
1 row in set (0.00 sec)
```

可以看到，通过在第一个 `Insert` 操作后保存了一个 `SavePoint` 名称 `MyPoint`，随后的几次操作都通过 `RollbackTo` 方法被回滚掉了，因此只有第一次 `Insert` 操作被成功提交执行。