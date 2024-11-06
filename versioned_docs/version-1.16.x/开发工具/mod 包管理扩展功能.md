---
title: 'mod 包管理扩展功能'
sidebar_position: 10
hide_title: true
---

使用方式：

```bash
$ gf mod -h
USAGE
    gf mod ARGUMENT

ARGUMENT
    path  copy all packages with its latest version in Go modules, which does not exist
          in GOPATH, to GOPATH. This enables your project using GOPATH building, but you
          should have GOPATH environment variable configured.

EXAMPLES
    gf mod path

```

该命令用于将当前 `go modules` 包拷贝到 `GOPATH` 中，以便使用原始的 `GOPATH` 方式开发，往往为了方便调试本地开发的依赖包。