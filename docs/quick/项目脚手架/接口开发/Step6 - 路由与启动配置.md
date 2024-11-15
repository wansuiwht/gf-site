---
slug: '/quick/scaffold-api-route-registering'
title: 'Step6 - 添加路由注册'
hide_title: true
sidebar_position: 6
---



## 添加路由

添加我们新填写的`api`到路由非常简单，如下：

![goframe路由注册](QQ_1731680426319.png)

在分组路由的`group.Bind`方法中，通过`user.NewV1()`添加我们的路由对象即可。