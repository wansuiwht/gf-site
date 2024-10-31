---
title: 'ORM查询-LeftJoin/RightJoin/InnerJoin'
sidebar_position: 3
hide_title: true
---

## `LeftJoin/RightJoin/InnerJoin`

1. `LeftJoin` 左关联查询；
2. `RightJoin` 右关联查询；
3. `InnerJoin` 内关联查询；

其实我们并不推荐使用 `Join` 进行联表查询，特别是在数据量比较大、并发请求量比较高的场景中，容易产生性能问题，也容易提高维护的复杂度。建议您在确定有此必要的场景下使用。

使用示例：

```go
// 获取默认配置的数据库对象(配置名称为"default")
db := g.DB()

// 查询符合条件的单条记录(第一条)
// SELECT u.*,ud.site FROM user u LEFT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1
db.Model("user u").LeftJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.site").Where("u.uid", 1).One()

// 查询指定字段值
// SELECT ud.site FROM user u RIGHT JOIN user_detail ud ON u.uid=ud.uid WHERE u.uid=1 LIMIT 1
db.Model("user u").RightJoin("user_detail ud", "u.uid=ud.uid").Fields("ud.site").Where("u.uid", 1).Value()

// 分组及排序
// SELECT u.*,ud.city FROM user u INNER JOIN user_detail ud ON u.uid=ud.uid GROUP BY city ORDER BY register_time asc
db.Model("user u").InnerJoin("user_detail ud", "u.uid=ud.uid").Fields("u.*,ud.city").Group("city").Order("register_time asc").All()

// 不使用join的联表查询
// SELECT u.*,ud.city FROM user u,user_detail ud WHERE u.uid=ud.uid
db.Model("user u,user_detail ud").Where("u.uid=ud.uid").Fields("u.*,ud.city").All()
```

## 自定义数据表别名

```go
// SELECT * FROM `user` AS u LEFT JOIN `user_detail` as ud ON(ud.id=u.id) WHERE u.id=1 LIMIT 1
db.Model("user", "u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()
db.Model("user").As("u").LeftJoin("user_detail", "ud", "ud.id=u.id").Where("u.id", 1).One()
```