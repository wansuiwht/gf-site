---
title: 'build 交叉编译'
sidebar_position: 3
hide_title: true
---

使用方式：

```
$ gf build -h
USAGE
    gf build FILE [OPTION]

ARGUMENT
    FILE  building file path.

OPTION
    -n, --name       output binary name
    -v, --version    output binary version
    -a, --arch       output binary architecture, multiple arch separated with ','
    -s, --system     output binary system, multiple os separated with ','
    -o, --output     output binary path, used when building single binary file
    -p, --path       output binary directory path, default is './bin'
    -e, --extra      extra custom "go build" options
    -m, --mod        like "-mod" option of "go build", use "-m none" to disable go module
    -c, --cgo        enable or disable cgo feature, it's disabled in default
    --pack           pack specified folder into packed/data.go before building.
    --swagger        auto parse and pack swagger into packed/swagger.go before building.

EXAMPLES
    gf build main.go
    gf build main.go --swagger
    gf build main.go --pack public,template
    gf build main.go --cgo
    gf build main.go -m none
    gf build main.go -n my-app -a all -s all
    gf build main.go -n my-app -a amd64,386 -s linux -p .
    gf build main.go -n my-app -v 1.0 -a amd64,386 -s linux,windows,darwin -p ./docker/bin

DESCRIPTION
    The "build" command is most commonly used command, which is designed as a powerful wrapper for
    "go build" command for convenience cross-compiling usage.
    It provides much more features for building binary:
    1. Cross-Compiling for many platforms and architectures.
    2. Configuration file support for compiling.
    3. Build-In Variables.

PLATFORMS
    darwin    amd64
    freebsd   386,amd64,arm
    linux     386,amd64,arm,arm64,ppc64,ppc64le,mips,mipsle,mips64,mips64le
    netbsd    386,amd64,arm
    openbsd   386,amd64,arm
    windows   386,amd64
```

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
        pack     = ""
        version  = "v1.0.0"
        output   = "./bin"
        extra    = ""
```

配置选项的释义同命令行同名选项。

| 名称 | 必须 | 默认值 | 含义 | 示例 |
| --- | --- | --- | --- | --- |
| `name` | 否 | 与程序入口go文件同名 | 生成的可执行文件名称。如果是 `windows` 平台，那么默认会加上 `.exe` 后缀 | `gf` |
| `arch` | 否 | 当前系统架构 | 编译架构，多个以 `,` 号分隔，如果是 `all` 表示编译所有支持架构 | `386,amd64,arm` |
| `system` | 否 | `当前系统平台` | 编译平台，多个以 `,` 号分隔，如果是 `all` 表示编译所有支持平台 | `linux,darwin,windows` |
| `path` | 否 | `./bin` | 编译可执行文件存储的目录地址 | `./bin` |
| `mod` | 否 |  | 同 `go build -mod` 编译选项，不常用 | `none` |
| `cgo` | 否 | `0` | 是否开启 `CGO`，默认是关闭的。如果开启，那么交叉编译可能会有问题。 | `0` |
| `pack` | 否 |  | 需要打包的目录，多个以 `,` 号分隔，生成到 `packed/data.go` | `public,template` |
| `version` | 否 |  | 程序版本，如果指定版本信息，那么程序生成的路径中会多一层以版本名称的目录 | `v1.0.0` |
| `output` | 否 |  | 输出的可执行文件路径，当该参数指定时， `name` 和 `path` 参数失效，常用于编译单个可执行文件 | `./bin/gf.exe` |
| `extra` | 否 |  | 额外自定义的编译参数，会直接传递给 `go build` 命令 |  |
| `varmap` | 否 |  | 自定义的内置变量键值对 | ```<br />[gfcli]<br />    [gfcli.build]<br />        name     = "gf"<br />        arch     = "all"<br />        system   = "all"<br />        mod      = "none"<br />        cgo      = 0<br />        [gfcli.build.varmap]<br />            k1 = "v1"<br />            k2 = "v2"<br />``` |

编译时的内置变量可以在运行时通过 `gbuild` 包 [gbuild (构建信息获取)](output/goframe-v1.15-md/模块列表/系统相关/gbuild%20-构建信息获取) 获取。

使用示例：

```
$ gf build
2020-12-31 00:35:25.562 start building...
2020-12-31 00:35:25.562 go build -o ./bin/darwin_amd64/gf main.go
2020-12-31 00:35:28.381 go build -o ./bin/freebsd_386/gf main.go
2020-12-31 00:35:30.650 go build -o ./bin/freebsd_amd64/gf main.go
2020-12-31 00:35:32.957 go build -o ./bin/freebsd_arm/gf main.go
2020-12-31 00:35:35.824 go build -o ./bin/linux_386/gf main.go
2020-12-31 00:35:38.082 go build -o ./bin/linux_amd64/gf main.go
2020-12-31 00:35:41.076 go build -o ./bin/linux_arm/gf main.go
2020-12-31 00:35:44.369 go build -o ./bin/linux_arm64/gf main.go
2020-12-31 00:35:47.352 go build -o ./bin/linux_ppc64/gf main.go
2020-12-31 00:35:50.293 go build -o ./bin/linux_ppc64le/gf main.go
2020-12-31 00:35:53.166 go build -o ./bin/linux_mips/gf main.go
2020-12-31 00:35:55.840 go build -o ./bin/linux_mipsle/gf main.go
2020-12-31 00:35:58.423 go build -o ./bin/linux_mips64/gf main.go
2020-12-31 00:36:01.062 go build -o ./bin/linux_mips64le/gf main.go
2020-12-31 00:36:03.502 go build -o ./bin/netbsd_386/gf main.go
2020-12-31 00:36:06.280 go build -o ./bin/netbsd_amd64/gf main.go
2020-12-31 00:36:09.332 go build -o ./bin/netbsd_arm/gf main.go
2020-12-31 00:36:11.811 go build -o ./bin/openbsd_386/gf main.go
2020-12-31 00:36:14.140 go build -o ./bin/openbsd_amd64/gf main.go
2020-12-31 00:36:17.859 go build -o ./bin/openbsd_arm/gf main.go
2020-12-31 00:36:20.327 go build -o ./bin/windows_386/gf.exe main.go
2020-12-31 00:36:22.994 go build -o ./bin/windows_amd64/gf.exe main.go
2020-12-31 00:36:25.795 done!
```