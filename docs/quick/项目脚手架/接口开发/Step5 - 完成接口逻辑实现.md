---
slug: '/quick/scaffold-api-implements'
title: 'Step5 - 完成接口逻辑实现'
hide_title: true
sidebar_position: 5
---


可以看到，通过项目脚手架工具，很多与项目业务逻辑无关的代码都已经预先生成好，我们只需要关注业务逻辑实现即可。我们接下来看看如何实现`CURD`逻辑吧。

## 驱动加载

在实现数据库操作的`CURD`接口前，我们需要先把数据库驱动引入进来，否则咱们在运行时无法连接数据，会报错的。我们在`main.go`中加上`_ "github.com/gogf/gf/contrib/drivers/mysql/v2"`即可。

```go title="main.go"
package main

import (
    _ "demo/internal/packed"

    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"

    "github.com/gogf/gf/v2/os/gctx"

    "demo/internal/cmd"
)

func main() {
    cmd.Main.Run(gctx.GetInitCtx())
}
```

更多关于数据库驱动的详细介绍，请参考章节 [数据库ORM](../../../docs/核心组件/数据库ORM/数据库ORM.md)。

## 创建接口

### 创建逻辑实现
```go title="internal/controller/user/user_v1_create.go"
package user

import (
    "context"

    "demo/api/user/v1"
    "demo/internal/dao"
    "demo/internal/model/do"
)

func (c *ControllerV1) Create(ctx context.Context, req *v1.CreateReq) (res *v1.CreateRes, err error) {
    insertId, err := dao.User.Ctx(ctx).Data(do.User{
        Name:   req.Name,
        Status: v1.StatusOK,
        Age:    req.Age,
    }).InsertAndGetId()
    if err != nil {
        return nil, err
    }
    res = &v1.CreateRes{
        Id: insertId,
    }
    return
}
```

- 我们这里通过`dao.User`通过`dao`组件操作`user`表。
- 每个`dao`操作都需要传递`ctx`参数，因此我们通过`Ctx(ctx)`方法创建一个`gdb.Model`对象，该对象是框架的模型对象，用于操作特定的数据表。
- 通过`Data`传递需要写入数据表的数据，我们这里使用`do`转换模型对象输入我们的数据。`do`转换模型会自动过滤`nil`数据，并在底层自动转换为对应的数据表字段类型。绝大部分时候，我们都使用`do`转换模型来给数据库操作对象传递写入/更新参数、查询条件等参数。
- 通过`InsertAndGetId`方法将`Data`的参数写入数据库，并返回新创建的记录主键`id`。

### 参数校验实现

等等，大家可能会问，为什么这里没有校验逻辑呢？因为校验逻辑都已经配置到`CreateReq`上了。还记得前面介绍的`v`标签吗？我们再来看看这个请求参数对象：
```go title="api/user/v1/user.go"
type CreateReq struct {
    g.Meta `path:"/user" method:"put" tags:"User" summary:"Create user"`
    Name   string `v:"required|length:3,10" dc:"user name"`
    Age    uint   `v:"required|between:18,200" dc:"user age"`
}
type CreateRes struct {
    Id int64 `json:"id" dc:"user id"`
}
```
这里的`required/length/between`校验规则在调用路由函数`Create`之前就已经由`GoFrame`框架的`Server`自动执行了。
如果请求参数校验失败，会立即返回错误，不会进入到路由函数。`GoFrame`框架的这种机制极大地简便了开发流程，
开发者在这个路由函数中，仅需要关注业务逻辑实现即可。

当然，如果有一些额外的、定制化的业务逻辑校验，也是需要放到路由函数中去实现的。

## 删除接口

```go title="internal/controller/user/user_v1_delete.go"
package user

import (
    "context"

    "demo/api/user/v1"
    "demo/internal/dao"
)

func (c *ControllerV1) Delete(ctx context.Context, req *v1.DeleteReq) (res *v1.DeleteRes, err error) {
    _, err = dao.User.Ctx(ctx).WherePri(req.Id).Delete()
    return
}
```
删除逻辑比较简单，我们这里用到一个`WherePri`方法，该方法会将给定的参数`req.Id`作为主键进行`Where`条件限制，仅在数据表主键只有一项的场景下适用。


## 更新接口

```go title="internal/controller/user/user_v1_update.go"
package user

import (
    "context"

    "demo/api/user/v1"
    "demo/internal/dao"
    "demo/internal/model/do"
)

func (c *ControllerV1) Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error) {
    _, err = dao.User.Ctx(ctx).Data(do.User{
        Name:   req.Name,
        Status: req.Status,
        Age:    req.Age,
    }).WherePri(req.Id).Update()
    return
}
```
更新接口也比较简单，除了已经介绍过的`WherePri`方法，在更新数据时也需要通过`Data`方法传递更新的数据。


## 查询接口（单个）

```go title="internal/controller/user/user_v1_get_one.go"
package user

import (
    "context"

    "demo/api/user/v1"
    "demo/internal/dao"
)

func (c *ControllerV1) GetOne(ctx context.Context, req *v1.GetOneReq) (res *v1.GetOneRes, err error) {
    res = &v1.GetOneRes{}
    err = dao.User.Ctx(ctx).WherePri(req.Id).Scan(&res.User)
    return
}
```
数据查询接口中，我们使用了`Scan`方法，该方法可以将查询到的单条数据表记录智能地映射到结构体对象上。大家需要注意这里的`&res.User`中的`User`属性对象其实是没有初始化的，其值为`nil`。如果查询到了数据，`Scan`方法会对其做初始化并赋值，如果查询不到数据，那么`Scan`方法什么都不会做，其值还是`nil`。


## 查询接口（列表）

```go title="internal/controller/user/user_v1_get_list.go"
package user

import (
    "context"

    "demo/api/user/v1"
    "demo/internal/dao"
    "demo/internal/model/do"
)

func (c *ControllerV1) GetList(ctx context.Context, req *v1.GetListReq) (res *v1.GetListRes, err error) {
    res = &v1.GetListRes{}
    err = dao.User.Ctx(ctx).Where(do.User{
        Age:    req.Age,
        Status: req.Status,
    }).Scan(&res.List)
    return
}
```
查询列表数据我们同样使用到了`Scan`方法，这个方法是非常强大的。通查询单条数据的逻辑一样，它仅会在查询的数据时才会初始化这里的`&res.List`。






