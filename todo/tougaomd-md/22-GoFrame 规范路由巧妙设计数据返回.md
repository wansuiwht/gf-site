---
title: 'GoFrame 规范路由巧妙设计数据返回'
sidebar_position: 22
---

我们来设想一个场景：一篇文章的查阅。一般来说，给用户看的文章一般要隐去某些字段，例如：文章是否发布、文章排序等，而给管理员看的文章则需要全部返回。在 GoFrame 中，我们每一个接口返回的数据是用结构体定义的。但文章标题、作者、简介、内容等这些都是共用的字段，这就势必带来一个问题：重复定义字段：

```
type ArticleAdmin struct {
	Id          uint        `json:"id"          description:""`
	Title       string      `json:"title"       description:"标题"`
	Author      string      `json:"author"      description:"作者"`
	Description string      `json:"description" description:"简介"`
	Content     string      `json:"content"     description:"内容"`
	Onshow      uint        `json:"onshow"      description:"是否显示/发布"`
	Order       int         `json:"order"       description:"排序，越大越靠前"`
}

type ArticleUser struct {
	Id          uint        `json:"id"          description:""`
	Title       string      `json:"title"       description:"标题"`
	Author      string      `json:"author"      description:"作者"`
	Description string      `json:"description" description:"简介"`
	Content     string      `json:"content"     description:"内容"`
}
```

怎么优雅的解决这个问题呢？请移步查看： [GoFrame 规范路由巧妙设计数据返回](https://oldme.net/article/30)