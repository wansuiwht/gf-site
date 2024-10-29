---
title: 'get 依赖包下载'
sidebar_position: 8
hide_title: true
---

使用方式：

```bash
$ gf get -h
USAGE
    gf get PACKAGE

ARGUMENT
    PACKAGE  remote golang package path, eg: github.com/gogf/gf

EXAMPLES
    gf get github.com/gogf/gf
    gf get github.com/gogf/gf@latest
    gf get github.com/gogf/gf@master
    gf get golang.org/x/sys
```

`gf get` 命令和 `go get` 命令类似，内部自动提供了代理设置功能，并智能识别并设置最快的下载代理地址。

使用示例：

```bash
$ gf get github.com/gogf/gf
go: github.com/gogf/gf master => v1.15.0
go: downloading github.com/gogf/gf v1.15.0
```