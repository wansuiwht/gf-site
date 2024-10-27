---
title: 'swagger API文档生成'
sidebar_position: 6
---

使用方式：

```
$ gf swagger -h
USAGE
    gf swagger [OPTION]

OPTION
    -s, --server  start a swagger server at specified address after swagger files
                  produced
    -o, --output  the output directory for storage parsed swagger files,
                  the default output directory is "./swagger"
    -/--pack      auto parses and packs swagger into packed/swagger.go.

EXAMPLES
    gf swagger
    gf swagger --pack
    gf swagger -s 8080
    gf swagger -s 127.0.0.1:8080
    gf swagger -o ./document/swagger

DESCRIPTION
    The "swagger" command parses the current project and produces swagger API description
    files, which can be used in swagger API server. If used with "-s/--server" option, it
    watches the changes of go files of current project and reproduces the swagger files,
    which is quite convenient for local API development.
    If it fails in command "swag", please firstly check your system PATH whether containing
    go binary path, or you can install the "swag" tool manually referring to:
    https://github.com/swaggo/swag
```

该命令内部使用的是 `swag` 工具，相关语法请参考： [https://github.com/swaggo/swag](https://github.com/swaggo/swag)

此外，推荐使用 `gf` 框架的 `swagger` 插件，仓库地址： [https://github.com/gogf/swagger](https://github.com/gogf/swagger)

使用示例：

```
$ gf swagger --pack
2020-12-31 00:42:10.345 producing swagger files...
2020-12-31 00:42:10.452 done!
2020-12-31 00:42:10.452 gf pack swagger packed/swagger.go -n packed
path 'packed/swagger.go' is not empty, files might be overwrote, continue? [y/n]: y
2020-12-31 00:42:13.954 done!
```