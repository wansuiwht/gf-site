---
title: 'genv (环境变量模块)'
sidebar_position: 12
hide_title: true
---

环境变量管理模块。

**使用方式**：

```go
import "github.com/gogf/gf/os/genv"

```

**接口文档**：

[https://godoc.org/github.com/gogf/gf/os/genv](https://godoc.org/github.com/gogf/gf/os/genv)

## `SetMap` 批量设置

```go
func SetMap(m map[string]string) error
```

该方法用于批量设置环境变量。使用示例：

```
genv.SetMap(g.MapStrStr{
	"APPID":     "order",
	"THREAD":    "16",
	"ENDPOINTS": "127.0.0.1:6379",
})
```

## `GetWithCmd` 特性

```go
func GetWithCmd(key string, def ...interface{}) *gvar.Var
```

该方法用于获取环境变量中指定的选项数值，如果该环境变量不存在时，则从命令行选项中读取。但是两者的名称规则会不一样。例如： `genv.GetWithCmd("gf.debug")` 将会优先去读取 `GF_DEBUG` 环境变量的值，当不存在时则去命令行中的 `gf.debug` 选项。

需要注意的是参数命名转换规则：

- 环境变量会将名称转换为大写，名称中的 `.` 字符传唤为 `_` 字符。
- 命令行中会将名称转换为小写，名称中的 `_` 字符传唤为 `.` 字符。