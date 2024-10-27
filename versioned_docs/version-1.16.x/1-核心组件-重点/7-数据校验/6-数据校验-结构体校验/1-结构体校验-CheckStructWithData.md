---
title: '结构体校验-CheckStructWithData'
sidebar_position: 1
---

为了避免结构体默认值带来的困惑，从 `goframe v1.16` 版本开始，我们增加了一个新的结构体校验方法 `CheckStructWithData`，用于结构体校验时严格按照给定的 `map` 参数而不是按照结构体的属性值，而校验规则同样会自动读取结构体中的 `gvalid tag`。我们来看一个示例，我们将之前的示例进行简单的修改：

```
package main

import (
	"context"
	"github.com/gogf/gf/frame/g"
	"github.com/gogf/gf/util/gconv"
	"github.com/gogf/gf/util/gvalid"
)

func main() {
	type User struct {
		Name string `v:"required#请输入用户姓名"`
		Type int    `v:"required#请选择用户类型"`
	}
	data := g.Map{
		"name": "john",
	}
	user := User{}
	if err := gconv.Scan(data, &user); err != nil {
		panic(err)
	}
	err := gvalid.CheckStructWithData(context.TODO(), user, data, nil)
	// 也可以使用链式操作
	// err := g.Validator().Data(data).CheckStruct(user)
	if err != nil {
		g.Dump(err.Items())
	}
}
```

执行后，终端输出：

```
[
    {
        "Type": {
            "required": "请选择用户类型"
        }
    }
]
```

可以看到，结构体中的属性 `Type` 校验规则 `required` 并没有受到默认值的影响，仍旧被执行了预期的校验检查。