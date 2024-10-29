---
title: 'install 工具安装'
sidebar_position: 0
hide_title: true
---

项目地址： [https://github.com/gogf/gf-cli](https://github.com/gogf/gf-cli)

使用方式： `./gf install`

该命令往往是在 `gf` 命令行工具下载到本地后执行（注意执行权限），用于将 `gf` 命令安装到系统环境变量默认支持的目录路径中，以便于在系统任何的地方直接可以使用 `gf` 工具。

部分系统需要管理员权限支持。

如果是 `MacOS` 下使用 `zsh` 的小伙伴可能会遇到别名冲突问题，可以通过 `alias gf=gf` 来解决，运行一次之后 `gf` 工具会自动修改 `profile` 中的别名设置，用户重新登录（或者重开终端）就好了。

使用示例：

```
$ gf install
I found some installable paths for you:
  Id | Writable | Installed | Path
   0 |     true |      true | /usr/local/bin
please choose one installation destination [default 0]:
gf binary is successfully installed to: /usr/local/bin
```