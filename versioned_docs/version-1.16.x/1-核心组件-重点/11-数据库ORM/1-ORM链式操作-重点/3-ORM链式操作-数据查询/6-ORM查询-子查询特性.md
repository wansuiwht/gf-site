---
title: 'ORM查询-子查询特性'
sidebar_position: 6
hide_title: true
---

从 `goframe v1.16` 版本开始， `ORM` 组件新增了便捷的子查询特性，目前支持常见的三种语法的子查询： `Where` 子查询、 `Having` 子查询及 `From` 子查询。

## `Where` 子查询

我们可以在 `Where` 条件中使用子查询语句，示例：

```go
// 获取默认配置的数据库对象(配置名称为"default")
db := g.DB()

db.Model("orders").Where("amount > ?", db.Model("orders").Fields("AVG(amount)")).Scan(&orders)
// SELECT * FROM "orders" WHERE amount > (SELECT AVG(amount) FROM "orders")
```

## `Having` 子查询

我们可以在 `Having` 条件中使用子查询语句，示例：

```go
subQuery := db.Model("users").Fields("AVG(age)").WhereLike("name", "name%")
db.Model("users").Fields("AVG(age) as avgage").Group("name").Having("AVG(age) > ?", subQuery).Scan(&results)
// SELECT AVG(age) as avgage FROM `users` GROUP BY `name` HAVING AVG(age) > (SELECT AVG(age) FROM `users` WHERE name LIKE "name%")
```

## `From` 子查询

我们可以在使用 `Model` 方法创建模型时使用子查询语句，示例：

```go
db.Model("? as u", db.Model("users").Fields("name", "age")).Where("age", 18).Scan(&users)
// SELECT * FROM (SELECT `name`,`age` FROM `users`) as u WHERE `age` = 18

subQuery1 := db.Model("users").Fields("name")
subQuery2 := db.Model("pets").Fields("name")
db.Model("? as u, ? as p", subQuery1, subQuery2).Scan(&users)
// SELECT * FROM (SELECT `name` FROM `users`) as u, (SELECT `name` FROM `pets`) as p
```