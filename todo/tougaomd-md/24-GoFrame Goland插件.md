---
title: 'GoFrame Goland插件'
sidebar_position: 24
---

## 基本介绍

`GoFrame Helper` 是一款适用于`Goland/IntelliJ IDEA Ultimate`插件，它为 `GoFrame` 提供 `ORM, Config, OpenApi` 结构体标签代码辅助； `Api, Controller, Service` 代码模板；监听 `Api, Logic` 自动生成对应的 `Controller` 和 `Service`。

## 安装方式

在插件市场中直接搜索 `Goframe Helper ` 点击安装，或者直接去 [Jetbrains Marketplace](https://plugins.jetbrains.com/plugin/23324-goframe-helper) 官网获取。源码仓库地址： [https://github.com/oldme-git/GoFrame-Helper](https://github.com/oldme-git/GoFrame-Helper)，欢迎 `Star, Issue, PR`。

## 代码辅助完成

### ORM

当使用 [数据规范-gen dao](https://goframe.org/pages/viewpage.action?pageId=3673173) 时，会读取表的字段，在链式调用中，提供合适的代码辅助：

![](/markdown/ecb539a79d3cc70a33c7fba8bbc9f18f.gif)

### Config

为 [gcfg](https://goframe.org/pages/viewpage.action?pageId=1114668) 组件提供 `yaml` 格式的代码辅助：

![](/markdown/f7aa253dea7a1211b5c7c104570fa90b.gif)

### OpenApi

为规范路由提供 OpanAPIv3 提供一些标签代码辅助：

![](/markdown/f19621c85ac4d0d4f3575be971098c0f.gif)

## 代码模板

提供 Api, Controller, Service 代码模板，在 `.go` 文件中输入 `gf` 即可使用：

![](/markdown/e02f47d1d33e52ef59e85229d7baa76c.gif)

## 自动监听

当更改 `api` 和 `logic` 时可以自动执行 `gf gen api` 和 `gf gen service`，也就是它们的 [自动模式](https://goframe.org/pages/viewpage.action?pageId=93880327#id-%E6%8E%A5%E5%8F%A3%E8%A7%84%E8%8C%83genctrl-%E8%87%AA%E5%8A%A8%E6%A8%A1%E5%BC%8F%EF%BC%88%E6%8E%A8%E8%8D%90%EF%BC%89)，启动后，可以直接关闭原有的自动模式。如果不想自动监听，可以在工具窗口中关闭它们。

## 工具窗口

在 `Goland/IntelliJ IDEA Ultimate` 的设置 \- 工具 ( `Settings -  Tools`) 中找到 `GoFrame Helper`, 它可以自定义一些目录与功能：

![](/markdown/b4defdd69500152333bfcc0296fbd43c.png)