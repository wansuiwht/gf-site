---
title: 'ORM结果处理'
sidebar_position: 4
hide_title: true
---

## 一、数据结构

查询结果的数据结构如下：

```go
type Value  = *gvar.Var              // 返回数据表记录值
type Record   map[string]Value       // 返回数据表记录键值对
type Result   []Record               // 返回数据表记录列表

```

1. `Value/Record/Result` 用于ORM操作的结果数据类型。
2. `Result` 表示数据表记录列表， `Record` 表示一条数据表记录， `Value` 表示记录中的一条键值数据。
3. `Value` 是 `*gvar.Var` 类型的别名类型，方便于后续的数据类型转换。

## 二、 `Record` 数据记录

接口文档： [https://godoc.org/github.com/gogf/gf/database/gdb](https://godoc.org/github.com/gogf/gf/database/gdb)

`gdb` 为数据表记录操作提供了极高的灵活性和简便性，除了支持以 `map` 的形式访问/操作数据表记录以外，也支持将数据表记录转换为 `struct` 进行处理。我们以下使用一个简单的示例来演示该特性。

首先，我们的用户表结构是这样的（简单设计的示例表）：

```sql
CREATE TABLE `user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '昵称',
  `site` varchar(255) NOT NULL DEFAULT '' COMMENT '主页',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

```

其次，我们的表数据如下：

```html
uid  name   site
1    john   https://goframe.org

```

最后，我们的示例程序如下：

```go
package main

import (
    "database/sql"
    "github.com/gogf/gf/frame/g"
)

type User struct {
    Uid  int
    Name string
}

func main() {
    var user *User
    err := g.DB().Table("user").Where("uid", 1).Scan(&user)
    if err != nil {
        g.Log().Header(false).Fatal(err)
    }
    if user != nil {
        g.Log().Header(false).Println(user)
    }
}

```

执行后，输出结果为：

```json
{"Uid":1,"Name":"john"}

```

这里，我们自定义了一个 `struct`，里面只包含了 `Uid` 和 `Name` 属性，可以看到它的属性并不和数据表的字段一致，这也是 `ORM` 灵活的特性之一：支持指定属性获取。

通过 `gdb.Model.Scan` 方法可以将查询到的数据记录转换为 `struct` 对象或者 `struct` 对象数组。由于这里传递的参数为 `&user` 即 `**User` 类型，那么将会转换为一个 `struct` 对象，如果传递为 `[]*User` 类型的参数，将会转换为数组结果，请查看后续示例。具体方法介绍请查看链式操作章节。

**属性字段映射规则：**

需要注意的是， `map` 中的键名为 `uid,name,site`，而 `struct` 中的属性为 `Uid,Name`，那么他们之间是如何执行映射的呢？主要是以下几点简单的规则：

1. `struct` 中需要匹配的属性必须为 `公开属性`(首字母大写)；
2. 记录结果中键名会自动按照 **`不区分大小写`** 且 **忽略 `-/_/空格` 符号** 的形式与 `struct` 属性进行匹配；
3. 如果匹配成功，那么将键值赋值给属性，如果无法匹配，那么忽略该键值；

以下是几个匹配的示例：

```html
记录键名    struct属性     是否匹配
name       Name           match
Email      Email          match
nickname   NickName       match
NICKNAME   NickName       match
Nick-Name  NickName       match
nick_name  NickName       match
nick_name  Nick_Name      match
NickName   Nick_Name      match
Nick-Name  Nick_Name      match

```

由于数据库结果集转 `struct` 的底层是依靠 `gconv.Struct` 方法实现的，因此如果想要实现 **自定义的属性转换**，以及更详细的映射规则说明，请参考 [类型转换-Struct转换](../类型转换/类型转换-Struct转换.md) 章节。

## 三、 `Result` 数据集合

`Result/Record` 数据类型根据数据结果集操作的需要，往往需要根据记录中 **特定的字段** 作为键名进行数据检索，因此它包含多个用于转换 `Map/List` 的方法，同时也包含了常用数据结构 `JSON/XML` 的转换方法。

接口文档： [https://godoc.org/github.com/gogf/gf/database/gdb](https://godoc.org/github.com/gogf/gf/database/gdb)

由于方法比较简单，这里便不再举例说明。需要注意的是两个方法 `Record.Map` 及 `Result.List`，这两个方法也是使用比较频繁的方法，用以将 `ORM` 查询结果信息转换为可做展示的数据类型。由于结果集字段值底层为 `[]byte` 类型，虽然使用了新的 `Value` 类型做了封装，并且也提供了数十种常见的类型转换方法（具体请阅读 [gvar (通用变量)](../../模块列表/数据结构/gvar%20-通用变量.md) 章节），但是大多数时候需要直接将结果 `Result` 或者 `Record` 直接作为 `json` 或者 `xml` 数据结构返回，就需要做转换才行。

使用示例：

```go
package main

import (
    "database/sql"
    "github.com/gogf/gf/frame/g"
)

type User struct {
    Uid  int
    Name string
    Site string
}

func main() {
    var user []*User
    err := g.DB().Table("user").Where("uid", 1).Scan(&user)
    if err != nil && err != sql.ErrNoRows {
        g.Log().Header(false).Fatal(err)
    }
    if user != nil {
        g.Log().Header(false).Println(user)
    }
}

```

执行后，输出结果为：

```json
[{"Uid":1,"Name":"john","Site":"https://goframe.org"}]

```

## 四、结果为空判断

使用 `gf ORM` 对返回结果为空判断非常简便，大部分场景下直接判断返回的数据是否为 `nil` 或者长度为 `0`，或者使用 `IsEmpty/IsNil` 方法。

### 数据集合

```go
// All/FindAll
r, err := g.Table("order").Where("status", 1).All()
if err != nil {
    return err
}
if len(r) == 0 {
    // 结果为空
}
```

也可以使用 `IsEmpty` 方法：

```go
// All/FindAll
r, err := g.Table("order").Where("status", 1).All()
if err != nil {
    return err
}
if r.IsEmpty() {
    // 结果为空
}
```

### 数据记录

```go
// One/FindOne
r, err := g.Table("order").Where("status", 1).One()
if err != nil {
    return err
}
if len(r) == 0 {
    // 结果为空
}
```

也可以使用 `IsEmpty` 方法：

```go
// One/FindOne
r, err := g.Table("order").Where("status", 1).One()
if err != nil {
    return err
}
if r.IsEmpty() {
    // 结果为空
}
```

### 数据字段值

返回的是一个"泛型"变量，这个只能使用 `IsEmpty` 来判断是否为空了。

```go
// Value/FindValue
r, err := g.Table("order").Where("status", 1).Value()
if err != nil {
    return err
}
if r.IsEmpty() {
    // 结果为空
}
```

### 字段值数组

查询返回字段值数组本身类型为 `[]gdb.Value` 类型，因此直接判断长度是否为 `0` 即可。

```go
// Array/FindArray
r, err := g.Table("order").Fields("id").Where("status", 1).Array()
if err != nil {
    return err
}
if len(r) == 0 {
    // 结果为空
}
```

### `struct` 对象

部分特性需要 `v1.15.2` 版本后支持。

关于 `Struct` 转换对象来说会有一点不一样，我们直接看例子吧。

当传递的对象本身就是一个空指针时，如果查询到数据，那么会在内部自动创建这个对象；如果没有查询到数据，那么这个空指针仍旧是一个空指针，内部并不会做任何处理。

```go
// Struct/GetStruct/Scan
var user *User
err := g.Table("order").Where("status", 1).Struct(&user)
if err != nil {
    return err
}
if user == nil {
    // 结果为空
}
```

当传递的对象本身已经是一个初始化的对象，如果查询到数据，那么会在内部将数据赋值给这个对象；如果没有查询到数据，那么此时就没办法将对象做 `nil` 判断空结果。因此 `ORM` 会返回一个 `sql.ErrNoRows` 错误，提醒开发者没有查询到任何数据并且对象没有做任何赋值，对象的所有属性还是给定的初始化数值，以便开发者可以做进一步的空结果判断。

```go
// Struct/GetStruct/Scan
var user = new(User)
// 或者
// var user = &User{}
err := g.Table("order").Where("status", 1).Struct(&user)
if err != nil && err != sql.ErrNoRows {
    return err
}
if err == sql.ErrNoRows {
    // 结果为空
}
```

所以我们推荐开发者不要传递一个初始化过后的对象给 `ORM`，而是直接传递一个对象的指针的指针类型（ `**struct` 类型）， `ORM` 内部会根据查询结果智能地做自动初始化。

### `struct` 数组

当传递的对象数组本身是一个空数组（长度为 `0`），如果查询到数据，那么会在内部自动赋值给数组；如果没有查询到数据，那么这个空数组仍旧是一个空数组，内部并不会做任何处理。

```go
// Structs/GetStructs/Scan
var users []*User
// 或者
// var users []User
err := g.Table("order").Where("status", 1).Structs(&users)
if err != nil {
    return err
}
if len(users) == 0 {
    // 结果为空
}
```

当传递的对象数组本身不是空数组，如果查询到数据，那么会在内部自动从索引 `0` 位置覆盖到数组上；如果没有查询到数据，那么此时就没办法将数组做长度为 `0` 判断空结果。因此 `ORM` 会返回一个 `sql.ErrNoRows` 错误，提醒开发者没有查询到任何数据并且数组没有做任何赋值，以便开发者可以做进一步的空结果判断。

```go
// Structs/GetStructs/Scan
var users = make([]*User, 100)
// 或者
// var users = make([]User, 100)
err := g.Table("order").Where("status", 1).Structs(&users)
if err != nil {
    return err
}
if err == sql.ErrNoRows {
    // 结果为空
}
```

由于 `struct` 转换利用了 `Golang` 反射特性，执行性能会有一定的损耗。如果您涉及到大量查询结果数据的 `struct` 数组对象转换，并且需要提高转换性能，请参考自定义实现对应 `struct` 的 `UnmarshalValue` 方法： [类型转换-UnmarshalValue](../类型转换/类型转换-UnmarshalValue.md)