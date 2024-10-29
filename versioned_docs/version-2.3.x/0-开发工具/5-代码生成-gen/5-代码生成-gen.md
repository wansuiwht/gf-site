---
title: '代码生成-gen'
sidebar_position: 5
hide_title: true
---

最新的 `CLI` 工具版本功能会随着 `GoFrame` 框架的最新版本编译，引入如果本地的 `CLI` 工具自动化生成的代码与项目的 `GoFrame` 框架版本出现兼容性问题时，建议升级项目框架版本，或者自定义安装旧版本的 `CLI` 工具。旧版本CLI工具安装方式参考仓库首页介绍： [https://github.com/gogf/gf-cli](https://github.com/gogf/gf-cli)

## 使用方式

```
$ gf gen -h
USAGE
    gf gen COMMAND [OPTION]

COMMAND
    dao         automatically generate go files for dao/do/entity
    pb          parse proto files and generate protobuf go files
    pbentity    generate entity message files in protobuf3 format
    service     parse struct and associated functions from packages to generate service go file

DESCRIPTION
    The "gen" command is designed for multiple generating purposes.
    It's currently supporting generating go files for ORM models, protobuf and protobuf entity files.
    Please use "gf gen dao -h" for specified type help.
```

    