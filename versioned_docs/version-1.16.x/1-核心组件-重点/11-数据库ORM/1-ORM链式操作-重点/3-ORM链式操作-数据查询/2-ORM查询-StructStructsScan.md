---
title: 'ORM查询-Struct/Structs/Scan'
sidebar_position: 2
hide_title: true
---

## `Struct`

将查询结果转换为一个 `struct` 对象，查询结果应当是特定的一条记录，并且 `pointer` 参数应当为 `struct` 对象的指针地址（ `*struct` 或者 `**struct`），使用方式例如：

```
// 获取默认配置的数据库对象(配置名称为"default")
db := g.DB()

type User struct {
    Id         int
    Passport   string
    Password   string
    NickName   string
    CreateTime gtime.Time
}
user := new(User)
err  := db.Model("user").Where("id", 1).Struct(user)
```

或者

```
user := &User{}
err  := db.Model("user").Where("id", 1).Struct(user)
```

前两种方式都是预先初始化对象（提前分配内存），推荐的方式：

```
user := (*User)(nil)
err  := db.Model("user").Where("id", 1).Struct(&user)
```

这种方式只有在查询到数据的时候才会执行初始化及内存分配。注意在用法上的区别，特别是传递参数类型的差别（前两种方式传递的参数类型是 `*User`，这里传递的参数类型其实是 `**User`）。

## `Structs`

将多条查询结果集转换为一个 `[]struct/[]*struct` 数组，查询结果应当是多条记录组成的结果集，并且 `pointer` 应当为数组的指针地址，使用方式例如：

```
users := ([]User)(nil)
// 或者 var users []User
err := db.Model("user").Structs(&users)
```

或者

```
users := ([]*User)(nil)
// 或者 var user []*User
err := db.Model("user").Structs(&users)
```

## `Scan`

该方法会根据输入参数 `pointer` 的类型选择调用 `Struct` 还是 `Structs` 方法。如果结果是特定的一条记录，那么调用 `Struct` 方法；如果结果是 `slice` 类型则调用 `Structs` 方法。