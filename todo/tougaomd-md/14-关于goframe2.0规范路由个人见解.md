---
title: '关于goframe2.0规范路由个人见解'
sidebar_position: 14
---

## 开篇

goframe是一款模块化、高性能、企业级的Go基础开发框架。虽然goframe不像Gin那么出名，但goframe用下来的感受是非常舒服的。它有全中文的官方文档，开发团队与用户之间保持了良好沟通，对用户的信息及时反馈。goframe开发团队一直在积极地进行维护和更新，近期推出的goframe2.0版与之前1.16版有很大的提高与变动。

在此我打算跟大家分享一下我对goframe2.0标准路由的使用心得，如有不妥欢迎留言讨论。

## api请求结构体Meta

写标准路由首先要写请求结构体与响应结构体，对api请求与响应接口进行描述。先来看代码模板里的请求结构体：

```
type HelloReq struct {
	g.Meta `path:"/hello" tags:"Hello" method:"get" summary:"You first hello api"`
}
```

在这段代码中可以看到在请求结构体中有路由地址、请求方法、接口描述、标签分类等信息，内容如下：

### tags：接口分类标签(重要)

tags是标签分类信息，tags相同的api会合并在同一标签下展示。tags是对数据表的描述，是多个对同一张表进行不同操作的api共同使用的分类标签。

请看下图红色方框圈住的部分，通知管理tags下有4个api，分别是增删改查，4个api的共同特征是它们都是对Notice通知表进行操作，那么应该将这4个api的请求结构体tags都写成“通知管理”，这样这4个api会归在一起。

![在这里插入图片描述](https://img-blog.csdnimg.cn/6f6471ca607842e2bf1b79086f7093ae.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA55qb5b-D,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### summary：接口详情描述(重要)

summary是api执行的动作描述，说明api做了什么动作。

请看上图，通知管理下有4个api，分别是增删改查。

NoticeAdd函数做的工作是新增通知，那么它的summary推荐的写法是“新增”；

NoticePut函数做的工作是修改通知，那么它的summary推荐的写法是“修改”；

其他的以此类推，不再赘述。

### path：路由名(强烈不推荐)

path是api的路由名。但我极其不推荐在请求结构体里写path，具体原因有下面两条：

一是在请求结构体里写path很容易造成路由冲突。假设某个函数的请求结构体的路由是/get，另一个函数在路由表中也是/get，若它们在同一级路由下(假设都在/api下)就会造成路由冲突，造成项目启动失败。

二是path分散在不同的请求结构体中写，以后修改起来很麻烦，可维护性差。

### method：请求方法(不推荐)

method是请求方法，例如get、post、put等等。但我也不推荐在请求结构体中写method，因为在请求结构体里写没有代码提示，在路由表中函数中写有代码提示。

## api结构体数据描述

先看代码模板：

```
type HelloRes struct {
	g.Meta `mime:"text/html" example:"string"`
	ID      uint  `json:"id" in:"path" v:"min:1#请选择要修改的内容" dc:"内容id"`
}
```

在这段代码中可以看到数据描述部分有数据类型、json属性名、校验规则、数据描述等信息，内容如下：

### json：属性名(重要)

注意golang的代码规范是导出结构体属性名首字母必须大写，前端的代码规范是属性名首字母小写。所以在这里必须通过写json属性名描述来将golang的属性名转成前端使用的属性名。

千万注意前后端属性名大小写、下划线、小驼峰各种差异。

### dc：内容描述(重要)

请看下图红框部分，在dc中的内容会被展示在/swagger的数据属性栏中。请不要忽略该内容！

![在这里插入图片描述](https://img-blog.csdnimg.cn/7fae5279ffcb4172932e941fbbed8b33.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA55qb5b-D,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### v：数据校验(一般)

v的用处是用来描述校验规则，相关内容非常多，可以参考 [Goframe数据校验](https://goframe.org/pages/viewpage.action?pageId=1114678)。

我因为前后端一起写，数据校验都在前端写了，所以后端就没有使用v。如果发现前端数据校验做的不好，后端必须要做数据校验，那么可以认真看看官网里的数据校验相关内容，可以大大减少写数据校验规则的代码。

### **in：参数来源(重要)**

**该参数以下三种情况：**

- path，表示参数从utl获得，例如：localhost:8199/notice/get/1，对应描述如下：

```
type NoticeGetReq struct {
    g.Meta        `summary:"获取" tags:"通知管理"`
    NoticeId     uint   `json:"noticeId" in:"path" dc:"通知id"
    }
```

- query，表示参数是utl后面的?键值对获得，例如：localhost:8199/notice/get?noticeId=1，对应描述如下：

```
type NoticeGetReq struct {
    g.Meta        `summary:"获取" tags:"通知管理"`
    NoticeId     uint   `json:"noticeId" in:"query" dc:"通知id"
    }
```

- 不写，表示参数从body中获得，例如：localhost:8199/notice/get，对应描述如下：

```
type NoticeGetReq struct {
    g.Meta        `summary:"获取" tags:"通知管理"`
    NoticeId     uint   `json:"noticeId" dc:"通知id"
    }
```

#### 关于数据描述：

在请求结构体和响应结构体中有关数据描述的内容是完全一致的。

请求结构体中描述的是请求参数；响应结构体中描述的是返回参数。

## api响应结构体Meta

先看代码模板：

```
type HelloRes struct {
	g.Meta `mime:"text/html" example:"string"`
}
```

这部分是描述返回的数据类型，是html网页或者是json数据。我个人觉得这个完全可以不写，返回数据使用WriteJson、WriteTpl已经很清晰了，没必要再写响应结构体的Meta。