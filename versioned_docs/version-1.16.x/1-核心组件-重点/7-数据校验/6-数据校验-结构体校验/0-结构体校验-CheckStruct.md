---
title: '结构体校验-CheckStruct'
sidebar_position: 0
hide_title: true
---

`CheckStruct` 的使用方式同 `CheckMap`，除了第一个参数为 `struct类型` 的结构体对象（也可以是对象指针）。

注意哟，大家常问到得一个问题。 `struct` 的属性会有 `默认值`，在某些情况下会引起 `required` 规则的失效，因此根据实际情况配合多种规则（例如 `min` 规则）一起校验会是一个比较严谨的做法。此外，也可以将属性改为指针类型，例如 `*int`、 `*float64` 等。

接口文档： [https://godoc.org/github.com/gogf/gf/util/gvalid](https://godoc.org/github.com/gogf/gf/util/gvalid)

```
func CheckStruct(ctx context.Context, object interface{}, rules interface{}, msgs ...CustomMsg) Error
```

校验方法也可以使用校验对象的链式操作方法来替代，包方法 `CheckStruct` 等同于以下链式操作方式：

```
g.Validator().Ctx(ctx).Rules(rules).Messages(customErrorMessages).CheckStruct(object)
```

## 使用 `map` 指定规则及提示信息

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/util/gvalid"
)

func main() {
	type User struct {
		Age  int
		Name string
	}
	rules := map[string]string{
		"Name": "required|length:6,16",
		"Age":  "between:18,30",
	}
	messages := map[string]interface{}{
		"Name": map[string]string{
			"required": "名称不能为空",
			"length":   "名称长度为:min到:max个字符",
		},
		"Age": "年龄为18到30周岁",
	}
	user := User{Name: "john"}
	err := gvalid.CheckStruct(context.TODO(), user, rules, messages)
	// 也可以使用链式操作
	// err := g.Validator().Rules(rules).Messages(messages).CheckStruct(user)
	if err != nil {
		g.Dump(err.Maps())
	}
}
```

在以上示例中， `Age` 属性由于默认值 `0` 的存在，因此会引起 `required` 规则的失效，因此这里没有使用 `required` 规则而是使用 `between` 规则来进行校验。示例代码执行后，终端输出：

```
{
	"Age": {
		"between": "年龄为18到30周岁"
	},
	"Name": {
		"length": "名称长度为6到16个字符"
	}
}
```

## 使用 `gvalid tag` 绑定规则及错误信息

使用 `gvalid tag` 设置的规则，其校验结果是顺序性的。

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/util/gvalid"
)

type User struct {
	Uid   int    `v:"uid      @integer|min:1#|请输入用户ID"`
	Name  string `v:"name     @required|length:6,30#请输入用户名称|用户名称长度非法"`
	Pass1 string `v:"password1@required|password3"`
	Pass2 string `v:"password2@required|password3|same:Pass2#|密码格式不合法|两次密码不一致，请重新输入"`
}

func main() {
	user := &User{
		Name:  "john",
		Pass1: "Abc123!@#",
		Pass2: "123",
	}

	// 使用结构体定义的校验规则和错误提示进行校验
	if e := gvalid.CheckStruct(context.TODO(), user, nil); e != nil {
		g.Dump(e.Items())
	}

	// 自定义校验规则和错误提示，对定义的特定校验规则和错误提示进行覆盖
	rules := map[string]string{
		"uid": "min:6",
	}
	messages := map[string]interface{}{
		"password2": map[string]string{
			"password3": "名称不能为空",
		},
	}
	err := gvalid.CheckStruct(context.TODO(), user, rules, messages)
	// 也可以使用链式操作
	// err := g.Validator().Rules(rules).Messages(messages).CheckStruct(user)
	if err != nil {
		g.Dump(err.Items())
	}
}
```

可以看到，我们可以对在 `struct` 定义时使用了 `gvalid` 的标签属性( `gvalid tag`)来绑定校验的规则及错误提示信息，规则如下：

``` html
[属性别名@]校验规则[#错误提示]

```

可以看到， `CheckStruct` 和 `CheckMap` 的 `gvalid tag` 规则是一样的，不过在字段的含义上有一点点小区别：

- `属性别名` 和 `错误提示` 为 **非必需字段**， `校验规则` 是 **必需字段。**
- `属性别名` 非必需字段，指定在校验中使用的对应 `struct` 属性的别名，同时校验成功后的 `map` 中的也将使用该别名返回，例如在处理请求表单时比较有用，因为表单的字段名称往往和 `struct` 的属性名称不一致。
- `错误提示` 非必需字段，表示自定义的错误提示信息，当规则校验时对默认的错误提示信息进行覆盖；

在此示例代码中， `same:password1` 规则同使用 `same:Pass2` 规则是一样的效果。也就是说，在数据校验中，可以同时使用原有的 `struct` 属性名称，也可以使用别名。但是，返回的结果中只会使用别名返回，这也是别名最大的用途。此外，在使用 `CheckStruct` 方法对 `struct` 对象进行校验时，也可以传递校验或者和错误提示参数，这个时候会覆盖 `struct` 在定义时绑定的对应参数。

以上示例执行后，输出结果为：

```
[
    {
        "uid": {
            "min": "请输入用户ID"
        }
    },
    {
        "name": {
            "length": "用户名称长度非法"
        }
    },
    {
        "password2": {
            "password3": "密码格式不合法"
        }
    }
] [
    {
        "name": {
            "length": "用户名称长度非法"
        }
    },
    {
        "password2": {
            "password3": "名称不能为空"
        }
    }
]
```

## 结构体 `embedded` 嵌套校验

`CheckStruct` 支持嵌套的（ `embedded`）结构体校验，即如果属性也是结构体，并且结构体的属性带有 `gvalid` 标签，无论多深的嵌套层级，这些属性都将被根据设定的规则进行校验。因为校验组件将嵌套结构体属性看做是结构体的一部分，校验时会将其进行打散，而不是看做一个独立的属性进行校验。

使用示例：

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/util/gvalid"
)

func main() {
	type Pass struct {
		Pass1 string `valid:"password1@required|same:password2#请输入您的密码|您两次输入的密码不一致"`
		Pass2 string `valid:"password2@required|same:password1#请再次输入您的密码|您两次输入的密码不一致"`
	}
	type User struct {
		Pass
		Id   int
		Name string `valid:"name@required#请输入您的姓名"`
	}
	user := &User{
		Name: "john",
		Pass: Pass{
			Pass1: "1",
			Pass2: "2",
		},
	}
	err := gvalid.CheckStruct(context.TODO(), user, nil)
	// 也可以使用链式操作
	// err := g.Validator().CheckStruct(user)
	g.Dump(err.Maps())
}
```

执行后，终端输出：

```
{
	"password1": {
		"same": "您两次输入的密码不一致"
	},
	"password2": {
		"same": "您两次输入的密码不一致"
	}
}
```

注意事项：

1. 非嵌套的结构体属性会被校验组件当做独立的属性进行校验，并且由于校验的属性值是结构体对象，因此往往需要自定义校验规则来实现校验。
2. 如果嵌套的结构体带有标签别名，那么该嵌套结构体也将被看做非嵌套的结构体属性执行校验。

例如以下结构体属性都将被看做独立的结构体属性执行校验：

```go
type MyStruct struct {
	Base `p:"base"`
}

type MyStruct struct {
	BaseStruct Base `p:"base"`
}
```