---
title: 'GoFrame 优化接口的错误码和异常的思路'
sidebar_position: 25
---

原文链接： [https://oldme.net/article/47](https://oldme.net/article/47)

### 前言

你是否想在使用 GoFrame 的过程中，拥有一个能打印异常堆栈，能自定义响应状态码，能统一处理响应数据的接口。如果你回答是，那么，请耐心看完本文，或许会对你有所启发。若文中由表达不当之处，恳请不吝赐教。

#### 异常都需要错误堆栈吗

为什么会问这个问题呢，所有的接口错误都会向日志中抛出堆栈信息，这不是好事吗？答案是否定的。

业务开发中，通常有 **业务异常** 和 **系统异常** 两种 `err`，我这里暂且这么称呼，也有的称为业务异常为"错误"，系统异常为"异常"。业务异常是由用户输入不当引起的，比如说账号密码错误，这种 `err` 通常只返回给用户即可， **不需要打印堆栈信息**。而系统异常是由系统内部自发引起的，比如说 `SQL` 语句不当，这种错误需要打印堆栈信息，且不能把 `err` 返回到用户那里，不然会暴露代码结构，严重的可能会暴露数据库结构。

在 `GoFrame` 中，因为有着强大的 `gerror` 组件，所以只要接收了任何组件方法中的 `err`，不论 **业务异常** 和 **系统异常**，都会打印堆栈信息，这与我们的设计目标不符合，需要解决它。

#### 状态码

此处的状态码区别与 HTTP 状态码，它是我们自定义的一套业务码，比如这样：

```
{
	"code": 10001,
	"message": "用户名密码错误",
	"data": null
}

{
	"code": 10002,
	"message": "用户不存在",
	"data": null
}
```

它们的 HTTP 状态码都是 200，代表响应成功，但是业务状态码不同，用以区分不同的业务异常。

### 一个例子

我们来编写一个完整的示例：

接口文件：/api/exception/v1/exception.go：

```
// 模拟业务异常
type BusinessReq struct {
	g.Meta `path:"/business" method:"get"`
}

type BusinessRes struct {
	Name string
	Age  int
}

// 模拟系统异常
type SystemReq struct {
	g.Meta `path:"/system" method:"get"`
}

type SystemRes struct {
	Name string
	Age  int
}
```

控制器文件：/internal/controller/exception/exception\_v1\_\*.go：

```
func (c *ControllerV1) Business(ctx context.Context, req *v1.BusinessReq) (res *v1.BusinessRes, err error) {
	err = service.Exception().Business()
	if err != nil {
		return nil, err
	}
	return &v1.BusinessRes{
		Name: "business",
		Age:  1,
	}, nil
}

func (c *ControllerV1) System(ctx context.Context, req *v1.SystemReq) (res *v1.SystemRes, err error) {
	err = service.Exception().System()
	if err != nil {
		return nil, err
	}
	return &v1.SystemRes{
		Name: "system",
		Age:  1,
	}, nil
}
```

服务文件：/internal/logic/exception/exception.go：

```
func (s *sException) Business() error {
	return gerror.New("用户名密码错误")
}

// System 这里我们对 gjson.Decode() 传入错误数据，用来模拟组件内部抛出err
func (s *sException) System() error {
	_, err := gjson.Decode("")
	if err != nil {
		return err
	}
	return nil
}
```

这个例子模拟了一个完整的接口，从 `api` 到 `controller` 到 `logic`，然后我们请求它们，分别从响应信息和控制台两个角度看看它们的结果。

#### 业务异常 Business

`curl http://127.0.0.1:8000/business`

控制台：

![](https://api.oldme.net/static/rich/202403/czsgkogoexaop500rc.png)

接口响应：

```
{
	"code": 50,
	"message": "用户名密码错误",
	"data": null
}
```

#### 系统异常 System

`curl http://127.0.0.1:8000/system`

控制台：

![](https://api.oldme.net/static/rich/202403/czsgktb8we0sojkfj2.png)

接口响应：

```
{
	"code": 50,
	"message": "json Decode failed: EOF",
	"data": null
}
```

### 优化方案

此时，我们的接口中有三个不足：

1. 业务异常不应该抛出堆栈，因为用户名或密码错误的堆栈没有意义；
2. 系统异常的响应信息中， `message` 不应该抛出 "json Decode failed: EOF"，应该使用 `未知错误` 或者 `系统错误` 这类字眼；
3. 业务异常和系统异常的业务码，也就是响应信息中的 `code`，不应该都使用 50，应当做以区分。

#### 设计统一 err

在 GoFrame 的工程目录中，有一个包 `/internal/utility`，我们可以在此处编写我们自己的 `err` 处理，后面的代码可以做为参考，也可以直接复制过去用：

`/internal/utility/err.go：`

```
type pErr struct {
	maps map[int]string
}

var Err = &pErr{
	maps: map[int]string{
		0:     "请求成功",
		10001: "用户名或密码错误",
		10002: "用户不存在",
		99999: "未知错误",
	},
}

// GetMsg 获取code码对应的msg
func (c *pErr) GetMsg(code int) string {
	return c.maps[code]
}

// Skip 抛出一个业务级别的错误，不会打印错误堆栈信息
func (c *pErr) Skip(code int, msg ...string) (err error) {
	var msgStr string
	if len(msg) == 0 {
		msgStr = c.GetMsg(code)
	} else {
		msg = append([]string{c.GetMsg(code)}, msg...)
		msgStr = strings.Join(msg, ", ")
	}
	// NewWithOption 在低版本的 gf 上不存在，请改用 NewOption
	return gerror.NewWithOption(gerror.Option{
		Stack: false,
		Text:  msgStr,
		Code:  gcode.New(code, "", nil),
	})
}

// Sys 抛出一个系统级别的错误，使用特殊的code码：99999
// !!! 使用该方法时，它会打印错误堆栈信息到日志，但是一定不要把任何错误信息抛出到客户端，防止泄露系统信息
// !!! 推荐做法是在后置中间件中捕获 code 99999 的错误，然后返回给客户端一个统一的错误提示
func (c *pErr) Sys(err error) error {
	return gerror.NewCode(gcode.New(CodeErrSys, "", nil), err.Error())
}
```

#### 统一响应数据中间件

设计统一响应数据的中间件，并且注入到 HTTP 请求流程中：

`/internal/logic/middleware/response.go`

```
type sMiddleware struct {
}

func init() {
	service.RegisterMiddleware(New())
}

func New() *sMiddleware {
	return &sMiddleware{}
}

type Response struct {
	Code    int         `json:"code"    dc:"业务码"`
	Message string      `json:"message" dc:"业务码说明"`
	Data    interface{} `json:"data"    dc:"返回的数据"`
}

func (s *sMiddleware) Response(r *ghttp.Request) {
	r.Middleware.Next()

	if r.Response.BufferLength() > 0 {
		return
	}

	// 先过滤掉服务器内部错误
	if r.Response.Status >= http.StatusInternalServerError {
		// 清除掉缓存区，防止服务器信息泄露到客户端
		r.Response.ClearBuffer()
		r.Response.Writeln("服务器打盹了，请稍后再来找他！")
	}

    var (
		res     = r.GetHandlerResponse()
		err     = r.GetError()
		code    = gerror.Code(err)
		codeInt = code.Code()
		msg     string
	)

	if err != nil {
		// 如果是系统错误，不要把错误信息抛出到客户端，防止泄露系统信息
		if codeInt == utility.CodeErrSys {
			msg = utility.Err.GetSysMsg()
		} else {
			msg = err.Error()
		}
	} else {
		code = gcode.CodeOK
		msg = utility.Err.GetMsg(code.Code())
	}

	r.Response.WriteJson(Response{
		Code:    code.Code(),
		Message: msg,
		Data:    res,
	})
}
```

`/internal/cmd/cmd.go`

```
s.Group("/", func(group *ghttp.RouterGroup) {
	group.Middleware(service.Middleware().Response)
	group.Bind(
		exception.NewV1(),
	)
})
```

#### 结果

然后在服务文件中调用 `utility/err`

`/internal/logic/exception/exception.go：`

```
func (s *sException) Business() error {
	return utility.Err.Skip(10001)
}

// System 这里我们对 gjson.Decode() 传入错误数据，用来模拟组件内部抛出err
func (s *sException) System() error {
	_, err := gjson.Decode("")
	if err != nil {
		return utility.Err.Sys(err)
	}
	return nil
}
```

结果展示：

```
Business
{
	"code": 10001,
	"message": "用户名或密码错误",
	"data": null
}

System
{
	"code": 99999,
	"message": "未知错误",
	"data": null
}
```

用户名或密码错误的业务异常也不会再抛出堆栈异常了：

![](https://api.oldme.net/static/rich/202403/czsh0yaxyglarlmeyp.png)

### 尾声

上述的代码例子已经开源在： [Github](https://github.com/oldme-git/gf-api-example)

本博客源码使用的也是这种 `err` 设计，想要了解更多可以查看： [Github/oldme-api](https://github.com/oldme-git/oldme-api)