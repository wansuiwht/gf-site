---
title: 'gen 代码生成'
sidebar_position: 4
---

最新的 `CLI` 工具版本功能会随着 `GoFrame` 框架的最新版本编译，引入如果本地的 `CLI` 工具自动化生成的代码与项目的 `GoFrame` 框架版本出现兼容性问题时，建议升级项目框架版本，或者自定义安装旧版本的 `CLI` 工具。旧版本CLI工具安装方式参考仓库首页介绍： [https://github.com/gogf/gf-cli](https://github.com/gogf/gf-cli)

## 使用方式

```
$ gf gen -h
USAGE
    gf gen TYPE [OPTION]

TYPE
    dao     generate dao and model files.
    model   generate model files, note that these generated model files are different from model files
            of command "gf gen dao".

DESCRIPTION
    The "gen" command is designed for multiple generating purposes.
    It's currently supporting generating go files for ORM models.
    Please use "gf gen dao -h" or "gf gen model -h" for specified type help.
```

## 注意事项

`gen ` 命令涉及到数据访问相关代码生成时，默认支持的数据库类型为： `MySQL/MariaDB`、 `PostgreSQL`、 `SQLServer`。

如果需要 `SQLite` 或 `Oracle` 数据库类型支持，需要开发者自己修改源码文件后自行本地手动编译生成 `CLI` 工具随后安装，因为这两个数据库的驱动需要 `CGO` 支持，无法预编译生成给大家直接使用。

![](/markdown/080bc4b472533c169e4ef11836faa0ac.png)