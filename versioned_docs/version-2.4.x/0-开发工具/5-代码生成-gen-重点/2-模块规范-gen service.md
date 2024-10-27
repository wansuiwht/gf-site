---
title: '模块规范-gen service'
sidebar_position: 2
---

该功能特性从 `v2.1` 版本开始提供。

## 基本介绍

### 设计背景

在业务项目实践中，业务逻辑封装往往是最复杂的部分，同时，业务模块之间的依赖十分复杂、边界模糊，无法采用 `Golang` 包管理的形式。如何有效管理项目中的业务逻辑封装部分，对于每个采用 `Golang` 开发的项目都是必定会遇到的难题。

### 设计目标

1. 增加 `logic` 分类目录，将所有业务逻辑代码迁移到 `logic` 分类目录下，采用包管理形式来管理业务模块。
2. 业务模块之间的依赖通过接口化解耦，将原有的 `service` 分类调整为接口目录。这样每个业务模块将会各自维护、更加灵活。
3. 可以按照一定的项目规范，从 `logic` 业务逻辑代码生成 `service` 接口定义代码。同时，也允许人工维护这部分 `service` 接口。

## 命令使用

该命令通过分析给定的 `logic` 业务逻辑模块目录下的代码，自动生成 `service` 目录接口代码。

需要注意：

1. 由于该命令是根据业务模块生成 `service` 接口，因此只会解析二级目录下的 `go` 代码文件，并不会无限递归分析代码文件。以 `logic` 目录为例，该命令只会解析 `logic/xxx/*.go` 文件。因此，需要 `logic` 层代码结构满足一定规范。
2. 不同业务模块中定义的结构体名称在生成的 `service` 接口名称时可能会重复覆盖，因此需要在设计业务模块时保证名称不能冲突。

### 手动模式

如果是手动执行命令行，直接在项目根目录下执行 `gf gen service` 即可。

```
$ gf gen service -h
USAGE
    gf gen service [OPTION]

OPTION
    -s, --srcFolder         source folder path to be parsed. default: internal/logic
    -d, --dstFolder         destination folder path storing automatically generated go files. default: internal/service
    -f, --dstFileNameCase   destination file name storing automatically generated go files, cases are as follows:
                            | Case            | Example            |
                            |---------------- |--------------------|
                            | Lower           | anykindofstring    |
                            | Camel           | AnyKindOfString    |
                            | CamelLower      | anyKindOfString    |
                            | Snake           | any_kind_of_string | default
                            | SnakeScreaming  | ANY_KIND_OF_STRING |
                            | SnakeFirstUpper | rgb_code_md5       |
                            | Kebab           | any-kind-of-string |
                            | KebabScreaming  | ANY-KIND-OF-STRING |
    -w, --watchFile         used in file watcher, it re-generates all service go files only if given file is under
                            srcFolder
    -a, --stPattern         regular expression matching struct name for generating service. default: ^s([A-Z]\\w+)$
    -p, --packages          produce go files only for given source packages
    -i, --importPrefix      custom import prefix to calculate import path for generated importing go file of logic
    -l, --clear             delete all generated go files that are not used any further
    -h, --help              more information about this command

EXAMPLE
    gf gen service
    gf gen service -f Snake
```

如果使用框架推荐的项目工程脚手架，并且系统安装了 `make` 工具，也可以使用 `make service` 快捷指令。

参数说明：

| 名称 | 必须 | 默认值 | 含义 |
| --- | --- | --- | --- |
| `srcFolder` | 是 | `internal/logic` | 指向logic代码目录地址 |
| `dstFolder` | 是 | `internal/service` | 指向生成的接口文件存放目录 |
| `dstFileNameCase` | 否 | `Snake` | 生成的文件名名称格式 |
| `stPattern` | 否 | `s([A-A]\w+)` | 使用正则指定业务模块结构体定义格式，便于解析业务接口定义名称。在默认的正则下，所有小写 `s` 开头，大写字母随后的结构体都将被当做业务模块接口名称。例如：

| logic结构体名称 | service接口名称 |
| --- | --- |
| `sUser` | `User` |
| `sMetaData` | `MetaData` | |
| `watchFile` |  |  | 用在代码文件监听中，代表当前改变的代码文件路径 |
| `packages` |  |  | 仅生成指定包名的接口文件，给定字符串数组，通过命令行传参则给定 `JSON` 字符串，命令行组件自动转换数据类型 |
| `importPrefix` |  |  | 指定生成业务引用文件中的引用包名前缀 |
| `overwrite` |  | `true` | 生成代码文件时是否覆盖已有文件 |
| `clear` |  | `false` | 自动删除 `logic` 中不存在的接口文件（仅删除自动维护的文件） |

### 自动模式

如果您是使用的 `GolandIDE`，那么可以使用我们提供的配置文件： [watchers.xml](https://goframe.org/download/attachments/96878174/watchers.xml?version=1&modificationDate=1655298456643&api=v2)  自动监听代码文件修改时自动生成接口文件。使用方式，如下图：

![](/markdown/71768d67ae4bd4ca361cb4fe568daee3.png)

## 具体使用手摸手

### Step1：引入我们提供的配置

我们建议您在使用Goland IDE时，使用我们提供的配置文件： [watchers.xml](https://goframe.org/download/attachments/96878174/watchers.xml?version=1&modificationDate=1655298456643&api=v2)

### Step2：编写您的业务逻辑代码

![](/markdown/6e7e30522b745019381e1f8263f82aff.png)

### Step3：生成接口及服务注册文件

如果您已经按照Step1做好了配置，那么这一步可以忽略。因为在您编写代码的时候， `service` 便同时生成了接口定义文件。

否则，每一次在您开发/更新完成 `logic` 业务模块后，您需要手动执行一下 `gf gen service` 命令。

![](/markdown/c552efd877b3bb99c2cff0b378e91d2e.png)

### Step4：注意服务的实现注入部分（仅一次）

只有在生成完成接口文件后，您才能在每个业务模块中加上接口的具体实现注入。该方法每个业务模块加一次即可。

![](/markdown/98afd52157e6007e0fef3ca341491c78.png)

### Step5：在启动文件中引用接口实现注册（仅一次）

可以发现，该命令除了生成接口文件之外，还生成了一个接口实现注册文件。该文件用于在程序启动时，将接口的具体实现在启动时执行注册。

![](/markdown/d8b550df1f7cc91144eb45bde3001386.png)

该文件的引入需要在 `main` 包的最顶部引入，需要注意 `import` 的顺序，放到最顶部，后面加一个空行。如果同时存在 `packed` 包的引入，那么放到 `packed` 包后面。像这样：

![](/markdown/41196f7432f93eaa739270aa35b72a4b.png)

### Step6：Start&Enjoy

启动 `main.go` 即可。

## 常见问题FAQ

### 快速定位接口的具体实现

**项目业务模块采用接口化解耦后体验非常棒！但是我在开发和调试过程中，想要快速找到指定接口的具体实现有点困难，能给点指导思路吗？**

\> 这里我推荐使用 `Goland IDE`，有个很棒的接口实现定位功能，具体如图。找到接口定义后，点击左边的小图标可快速定位具体的实现。如果Goland不显示小图标，可以尝试升级使用最新版本的 `Goland` 哈。

![](/markdown/a263462cd44ad2e05e972d150acb6808.png)

或者在左侧没有小图标的时候，可以右键选择 `Go To → Implementation(s)`

![](/markdown/d8a7ca0ffa2c4a8b14842b3c1a4c2b27.png)