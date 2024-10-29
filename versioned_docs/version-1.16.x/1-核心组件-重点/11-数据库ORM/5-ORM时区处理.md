---
title: 'ORM时区处理'
sidebar_position: 5
hide_title: true
---

## 基本介绍

这个问题由于大家问得比较多，因此单独开了一个章节详细介绍一下 `ORM` 中的时区处理是怎么一回事。我们这里以 `MySQL` 数据库为基础来介绍时区转换的事情，本地时区我们设定为 `+8` 时区，数据库时区也是 `+8` 时区。

`MySQL` 数据库驱动用得最多的是这个第三方包： [https://github.com/go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) ，在这个第三方包中有这么一个参数:

![](/markdown/253cc347dc18fa7b94a71fe899aaa477.png)

大概的意思是，当你提交的时间参数为 `time.Time` 时，该参数用来转换参数时区的。当你在连接数据库时，该参数传递 `loc=Local`，那么该 `driver` 将会自动将你提交的 `time.Time` 参数转换为本地程序设置的时区，没有手动设置时，那么该时区为 `UTC` 时区。那么我们来看两个例子。

## 转换示例

### 示例1，设置 `loc=Local`

**配置文件**

```
[database]
    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local"
```

**代码示例**

```
t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")
t2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")
db.Model("user").Where("create_time>? and create_time<?", t1, t2).One()
// SELECT * FROM `user` WHERE create_time>'2020-10-27 18:00:00' AND create_time<'2020-10-27 19:00:00'
```

这里由于通过 `time.Parse` 创建的 `time.Time` 时间对象是 `UTC` 时区，那么提交到数据库执行时将会被底层的 `driver` 修改为 `+8` 时区。

```
t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)
t2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)
db.Model("user").Where("create_time>? and create_time<?", t1, t2).One()
// SELECT * FROM `user` WHERE create_time>'2020-10-27 10:00:00' AND create_time<'2020-10-27 11:00:00'
```

这里由于通过 `time.ParseInLocation` 创建的 `time.Time` 时间对象是 `+8` 时区，和 `loc=Local` 的时区一致，那么提交到数据库执行时不会被底层的 `driver` 修改。

注意在写入数据中包含 `time.Time` 参数时，也需要注意时区转换的问题。

### 示例2，不设置 `loc` 参数

**配置文件**

```
[database]
    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"
```

**代码示例**

```
t1, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 10:00:00")
t2, _ := time.Parse("2006-01-02 15:04:05", "2020-10-27 11:00:00")
db.Model("user").Where("create_time>? and create_time<?", t1, t2).One()
// SELECT * FROM `user` WHERE create_time>'2020-10-27 10:00:00' AND create_time<'2020-10-27 11:00:00'
```

这里由于通过 `time.Parse` 创建的 `time.Time` 时间对象是 `UTC` 时区，那么提交到数据库执行时将不会被底层的 `driver` 修改。

```
t1, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 10:00:00", time.Local)
t2, _ := time.ParseInLocation("2006-01-02 15:04:05", "2020-10-27 11:00:00", time.Local)
db.Model("user").Where("create_time>? and create_time<?", t1, t2).One()
// SELECT * FROM `user` WHERE create_time>'2020-10-27 02:00:00' AND create_time<'2020-10-27 03:00:00'
```

这里由于通过 `time.ParseInLocation` 创建的 `time.Time` 时间对象是 `+8` 时区，那么提交到数据库执行时会被底层的 `driver` 修改为 `UTC` 时区。

注意在写入数据中包含 `time.Time` 参数时，也需要注意时区转换的问题。

## 改进方案

也就是说，当你使用 `time.Time` 对象作为时间参数时，无论如何你都会需要注意时区自动转换的问题。因此，为了避免这样的心智负担，防止大家踩坑，在保留对 `time.Time` 参数支持的同时， `ORM` 增加了对 `gtime.Time` 类型参数的支持，该类型不会涉及到时区转换困惑的问题。例如：

```
t1 := gtime.New("2020-10-27 10:00:00")
t2 := gtime.New("2020-10-27 11:00:00")
db.Model("user").Where("create_time>? and create_time<?", t1, t2).One()
// SELECT * FROM `user` WHERE create_time>'2020-10-27 10:00:00' AND create_time<'2020-10-27 11:00:00'
```

即，你传递什么时间参数，那么提交到数据库执行的也是同样的时间参数，不会执行任何的时区转换，免去了心智负担。

这也是为什么 `gf` 框架 `cli` 开发工具自动生成的 `model` 代码文件中涉及到时间类型的属性均使用了 `*gtime.Time` 类型而不是 `time.Time` 的缘故。

此外，还需要说明的是， `gf` 框架的 `ORM` 默认情况下没有设置 `loc` 参数。