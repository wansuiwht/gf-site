---
title: '工具安装-install'
sidebar_position: 0
hide_title: true
---

该命令仅针对于预编译二进制下载安装。如果通过 `go install` 命名安装的工具的话，不需要手动再使用 `install` 命令安装 `gf` 工具。

## 使用方式

项目地址： [https://github.com/gogf/gf/tree/master/cmd/gf](https://github.com/gogf/gf/tree/master/cmd/gf)

我们已经预编译了常见系统平台的二进制（根据自己的系统环境选择）： [https://github.com/gogf/gf/releases](https://github.com/gogf/gf/releases)

如果你的网络下载比较慢，可以使用加速下载： [https://toolwa.com/github/](https://toolwa.com/github/)

### 下载

#### 预编译

- Linux or MacOS 在终端执行： `wget -O gf https://github.com/gogf/gf/releases/latest/download/gf_$(go env GOOS)_$(go env GOARCH) && chmod +x gf && ./gf install -y && rm ./gf`
- Windows：到 [https://github.com/gogf/gf/releases](https://github.com/gogf/gf/releases) 自行下载

#### 自行编译

1. 下载源码 [https://github.com/gogf/gf](https://github.com/gogf/gf/tree/master/cmd/gf)
2. 根据自己的需要修改数据库依赖，文件/cmd/gf/internal/cmd/cmd\_gen\_dao.go的import。 `sqlite` 和 `oracle` 的驱动需要安装cgo环境
3. 进入到gf cli的源码目录 `/cmd/gf` 编译

### 安装到系统：

- Linux or MacOS ：下载时已包含安装步骤
- Windows： 直接双击打开按步骤操作

### 使用：

安装后可在命令行的任意目录中使用 `gf` 命令，执行 `gf -v` 测试是否安装成功

部分系统需要管理员权限支持。

如果是 `MacOS` 下使用 `zsh` 的小伙伴可能会遇到别名冲突问题，可以通过 `alias gf=gf` 来解决，运行一次之后 `gf` 工具会自动修改 `profile` 中的别名设置，用户重新登录（或者重开终端）就好了。

## 使用示例

### 安装

```
$ ./gf_darwin_amd64 install
I found some installable paths for you(from $PATH):
  Id | Writable | Installed | Path
   0 |     true |      true | /usr/local/bin
   1 |     true |     false | /Users/john/Workspace/Go/GOPATH/bin
   2 |     true |     false | /Users/john/.gvm/bin
   4 |     true |     false | /Users/john/.ft
please choose one installation destination [default 0]:
gf binary is successfully installed to: /usr/local/bin
```

### 使用

```
C:\Users\Administrator>gf -v
GoFrame CLI Tool v2.0.6, https://goframe.org
GoFrame Version: cannot find go.mod
CLI Installed At: C:\Users\Administrator\go\bin\gf.exe
CLI Built Detail:
  Go Version:  go1.17.7
  GF Version:  v2.0.6
  Git Commit:  2022-03-31 16:57:32 66803fd6641e31c60f0489180668243ea092b87b
  Build Time:  2022-03-31 16:55:38
```

搜索

复制

搜索

复制