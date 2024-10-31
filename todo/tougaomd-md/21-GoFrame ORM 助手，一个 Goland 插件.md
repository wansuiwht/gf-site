---
title: 'GoFrame ORM 助手，一个 Goland 插件'
sidebar_position: 21
---

一个为了让你在 GoLand 上写 GoFrame ORM 能自动补全数据库字段、Tag、生成Struct 的插件。

> 灵感来源[Laravel Idea](https://plugins.jetbrains.com/plugin/13441-laravel-idea)&[PhpStorm metadata](https://www.jetbrains.com/help/phpstorm/ide-advanced-metadata.html)。 本人使用 Go 的 ORM 包时， 一些 ORM 函数的参数是字符串，并且ide不支持代码补全，在字段贼多的情况下，记不清楚，写起来就会很不方便。以前本人写php的时候，就用到前面的插件， 感觉非常爽，所以就有了这个插件~~

- ORM 代码补全
  - @Model 注解辅助补全
  - @Table 注解辅助补全
  - 自定义 SQL 辅助不全🚧\[WIP\]
- SQL 转 Struct [支持明细](https://github.com/maiqingqiang/go-orm-helper/blob/main/SUPPORTED.md#supported-sql-to-struct-conversion)
- Go ORM Tag 实时模版 [支持明细](https://github.com/maiqingqiang/go-orm-helper/blob/main/SUPPORTED.md#supported-orm-tags-live-template)
- 更多等你去发现与改进...

地址： [https://github.com/maiqingqiang/go-orm-helper](https://github.com/maiqingqiang/go-orm-helper) (喜欢的话，点个⭐️支持一下吧)

![](/markdown/d989db0ef7ffe2d24adf03d90e44e1a5.png)

![](/markdown/38a0bad28d1be73587527b0c94fd58d3.gif)