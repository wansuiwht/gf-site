---
title: 'init 项目创建'
sidebar_position: 2
---

使用方式：

```
$ gf init -h
USAGE
    gf init NAME

ARGUMENT
    NAME  name for the project. It will create a folder with NAME in current directory.
          The NAME will also be the module name for the project.

EXAMPLES
    gf init my-app
    gf init my-project-name
```

我们可以使用 `init` 命令在当前目录生成一个示例的 `GF` 空框架项目，并可给定项目名称参数。生成的项目目录结构仅供参考，根据业务项目具体情况可自行调整。生成的目录结构请参考 新建项目 章节。

`GF` 框架开发推荐统一使用官方的 `go module` 特性进行依赖包管理，因此空项目根目录下也有一个 `go.mod` 文件。

使用示例：

1、在当前目录下初始化项目

```
$ gf init .
initializing...
initialization done!
you can now run 'gf run main.go' to start your journey, enjoy!
```

2、在当前目录下创建一个名称为 `myapp` 的项目

```
$ gf init myapp
initializing...
initialization done!
you can now run 'gf run main.go' to start your journey, enjoy!
```