---
title: 'ORM查询-All/One/Array/Value/Count'
sidebar_position: 1
---

## `All/One/Array/Value/Count`

这五个方法是数据查询比较常用的方法，方法列表：

```
func (m *Model) All(where ...interface{} (Result, error)
func (m *Model) One(where ...interface{}) (Record, error)
func (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)
func (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) Count(where ...interface{}) (int, error)
func (m *Model) CountColumn(column string) (int, error)
```

简要说明：

1. `All` 用于查询并返回多条记录的列表/数组。
2. `One` 用于查询并返回单条记录。
3. `Array` 用于查询指定字段列的数据，返回数组。
4. `Value` 用于查询并返回一个字段值，往往需要结合 `Fields` 方法使用。
5. `Count` 用于查询并返回记录数。

此外，也可以看得到这四个方法定义中也支持条件参数的直接输入，参数类型与 `Where` 方法一致。但需要注意，其中 `Array` 和 `Value` 方法的参数中至少应该输入字段参数。

使用示例：

```
// SELECT * FROM `user` WHERE `score`>60
Model("user").Where("score>?", 60).All()

// SELECT * FROM `user` WHERE `score`>60 LIMIT 1
Model("user").Where("score>?", 60).One()

// SELECT `name` FROM `user` WHERE `score`>60
Model("user").Fields("name").Where("score>?", 60).Array()

// SELECT `name` FROM `user` WHERE `uid`=1 LIMIT 1
Model("user").Fields("name").Where("uid", 1).Value()

// SELECT COUNT(1) FROM `user` WHERE `status` IN(1,2,3)
Model("user").Where("status", g.Slice{1,2,3}).Count()
```

## `Find*` 支持主键条件的数据查询

提示

新版已不支持此方法

方法列表：

```
func (m *Model) FindAll(where ...interface{}) (Result, error)
func (m *Model) FindOne(where ...interface{}) (Record, error)
func (m *Model) FindArray(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) FindValue(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) FindCount(where ...interface{}) (int, error)
func (m *Model) FindScan(pointer interface{}, where ...interface{}) error
```

`Find*` 方法包含： `FindAll/FindOne/FineValue/FindCount/FindScan`，这些方法与 `All/One/Array/Value/Count/Scan` 方法的区别在于，当方法直接给定条件参数时，前者的效果与 `WherePri` 方法一致；而后者的效果与 `Where` 方法一致。也就是说 `Find*` 方法的条件参数支持智能主键识别特性。

使用示例：

```
// SELECT * FROM `scores` WHERE `id`=1
Model("scores").FindAll(1)

// SELECT * FROM `scores` WHERE `id`=1 LIMIT 1
Model("scores").FindOne(1)

// SELECT `name` FROM `scores` WHERE `id`=1
Model("scores").FindArray("name", 1)

// SELECT `name` FROM `scores` WHERE `id`=1 LIMIT 1
Model("user").FindValue("name", 1)

// SELECT COUNT(1) FROM `user`  WHERE `id`=1
Model("user").FindCount(1)
```

关于 `Scan/FindScan` 方法介绍，请查看后续章节。