---
title: 'build 交叉编译'
sidebar_position: 3
---

使用方式： `gf build FILE [OPTION]`

仅限于交叉编译使用到 `GF` 框架的项目，支持绝大部分常见系统的直接交叉编译。并且支持配置文件管理编译选项、嵌入编译时变量。使用 `gf build` 的项目将会默认嵌入以下变量（参考 `gf -v`）：

- 当前 `Go` 版本。
- 当前 `GF` 版本。
- 当前编译时间。
- 当前 `Git Commit`（如果存在）。

编译配置文件选项示例（默认读取 `config.toml`）：

```
[gfcli]
    [gfcli.build]
        name     = "gf"
        arch     = "all"
        system   = "all"
        mod      = "none"
        cgo      = 0
        mod      = "none"
        version  = "v1.0.0"
        output   = "./bin"
        extra    = ""
```

配置选项的释义同命令行同名选项。

> 编译时的内置变量可以在运行时通过 `gbuild` 包 [gbuild (构建信息获取)](output/goframe-v1.14-md/模块列表/系统相关/gbuild%20-构建信息获取) 获取。