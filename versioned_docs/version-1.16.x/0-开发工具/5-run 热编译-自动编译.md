---
title: 'run 热编译(自动编译)'
sidebar_position: 5
---

## 注意

由于 `Go` 是不支持热编译特性的，每一次代码变更后都要重新手动停止、编译、运行代码文件。 `run` 命令也不是实现热编译功能，而是提供了自动编译功能，当开发者修改了项目中的 `go` 文件时，该命令将会自动编译当前程序，并停止原有程序，运行新版的程序。

`run` 命令会递归监控 **当前运行目录** 的所有 `go` 文件变化来实现自动编译。

## 查看命令使用帮助

```
$ gf run -h
USAGE
    gf run FILE [OPTION]

ARGUMENT
    FILE    building file path.
    OPTION  the same options as "go run"/"go build" except some options as follows defined

OPTION
    -/--args     custom process arguments.
    -/--swagger  auto parse and pack swagger into packed/data-swagger.go before running.

EXAMPLES
    gf run main.go
    gf run main.go --swagger
    gf run main.go --args "server -p 8080"
    gf run main.go -mod=vendor

DESCRIPTION
    The "run" command is used for running go codes with hot-compiled-like feature,
    which compiles and runs the go codes asynchronously when codes change.
```

## 使用示例

一般**gf run main.go**即可

```
$ gf run main.go --swagger
2020-12-31 00:40:16.948 build: main.go
2020-12-31 00:40:16.994 producing swagger files...
2020-12-31 00:40:17.145 done!
2020-12-31 00:40:17.216 gf pack swagger packed/swagger.go -n packed -y
2020-12-31 00:40:17.279 done!
2020-12-31 00:40:17.282 go build -o bin/main  main.go
2020-12-31 00:40:18.696 go file changes: "/Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/packed/swagger.go": WRITE
2020-12-31 00:40:18.696 build: main.go
2020-12-31 00:40:18.775 producing swagger files...
2020-12-31 00:40:18.911 done!
2020-12-31 00:40:19.045 gf pack swagger packed/swagger.go -n packed -y
2020-12-31 00:40:19.136 done!
2020-12-31 00:40:19.144 go build -o bin/main  main.go
2020-12-31 00:40:21.367 bin/main
2020-12-31 00:40:21.372 build running pid: 40954
2020-12-31 00:40:21.437 [DEBU] [ghttp] SetServerRoot path: /Users/john/Workspace/Go/GOPATH/src/github.com/gogf/gf-demos/public
2020-12-31 00:40:21.440 40954: http server started listening on [:8199]
...
```

## 常见问题

[too many open files on macOS](https://github.com/fsnotify/fsnotify/issues/129)