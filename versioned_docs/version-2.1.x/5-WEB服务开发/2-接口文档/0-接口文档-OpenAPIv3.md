---
title: '接口文档-OpenAPIv3'
sidebar_position: 0
---

## 一、 `OpenAPIv3`

详细的 `OpenAPIv3` 协议介绍请参考： [https://swagger.io/specification/](https://swagger.io/specification/)

## 二、 `g.Meta` 元数据

接口的元数据信息可以通过为输入结构体`embedded`方式嵌入`g.Meta`结构，并通过`g.Meta`的属性标签方式来实现。

关于元数据组件的介绍，详情请参考章节： [元数据-gmeta](output/goframe-v2.1-md/组件列表/实用工具/元数据-gmeta)

## 三、常用协议标签

输入输出结构体中的属性的标签完整支持 `OpenAPIv3` 协议，因此只要增加了对应的协议标签，那么生成的 `OpenAPIv3` 接口信息中将会自动包含该属性。

大部分的标签属性已经被 `Server` 组件自动生成，开发者需要手动设置的标签不多。常见的标签包括：

| 常见OpenAPIv3标签 | 说明 | 备注 |
| --- | --- | --- |
| `path` | 结合注册时的前缀共同构成接口URI路径 | 用于 `g.Meta` 标识接口元数据 |
| `tags` | 接口所属的标签，用于接口分类 | 用于 `g.Meta` 标识接口元数据 |
| `method` | 接口的请求方式： `GET/PUT/POST/DELETE...(不区分大小写)` | 用于 `g.Meta` 标识接口元数据 |
| `deprecated` | 标记该接口废弃 | 用于 `g.Meta` 标识接口元数据 |
| `summary` | 接口/参数概要描述 | 缩写 `sm` |
| `description` | 接口/参数详细描述 | 缩写 `dc` |
| `in` | 参数的提交方式 | `header/path/query/cookie` |
| `default` | 参数的默认值 | 缩写 `d` |
| `mime` | 接口的 `MIME` 类型，例如 `multipart/form-data` 一般是全局设置，默认为 `application/json`。 | 用于 `g.Meta` 标识接口元数据 |
| `type` | 参数的类型，一般不需要设置，特殊参数需要手动设置，例如 `file` | 仅用于参数属性 |

更多标签请参考标准的 `OpenAPIv3` 协议： [https://swagger.io/specification/](https://swagger.io/specification/)

## 四、扩展 `OpenAPIv3` 信息

核心的接口信息已经自动生成，如果开发者想要更进一步完善接口信息，可以通过 `s.GetOpenApi()` 接口获取到 `OpenAPIv3` 的结构体对象，并手动填充对应的属性内容即可。我们来看一个示例，在该示例中，我们将接口中的标签进行了自定义的排序，并且增加了对每个标签的详细描述：

![](/markdown/f536d9dccf3d0c93daa2f23cb6c345f4.png)

我们可以发现通过通用的 `OpenAPIv3` 对象我们可以自定义修改其内容，并且根据它生成其他各种自定义类型的接口文档。