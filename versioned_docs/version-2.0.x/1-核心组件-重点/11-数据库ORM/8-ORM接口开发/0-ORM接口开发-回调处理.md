---
title: 'ORM接口开发-回调处理'
sidebar_position: 0
hide_title: true
---

自定义回调处理是最常见的接口开发实现，开发中只需要对接口中的部分方法进行替换与修改，在驱动默认实现逻辑中注入自定义逻辑。所有的 `SQL` 语句执行必定会通过 `DoQuery` 或者 `DoExec` 或者 `DoFilter` 接口，根据需求在自定义的驱动中实现并覆盖相关接口方法实现所需功能即可。

我们来看一个自定义回调处理的示例，现需要将所有执行的 `SQL` 语句记录到 `monitor` 表中，以方便于进行 `SQL` 审计。为简化示例编写，以下代码实现了一个自定义的 `MySQL` 驱动，该驱动继承于 `drivers` 下 `mysql` 模块内已经实现的 `DriverMysql`。

自2.1.0版本之后,ORM驱动模块独立，需要开发者手动引入至项目内。

以mysql为例，需引入 [github.com/gogf/gf/contrib/drivers/mysql/v2](http://github.com/gogf/gf/contrib/drivers/mysql/v2) 至go.mod，并导入到项目中使用。

其它驱动详细请至 [https://github.com/gogf/gf/tree/master/contrib/drivers](https://github.com/gogf/gf/tree/master/contrib/drivers) 查看。

```
package driver

import (
	"context"
	"database/sql"
	"github.com/gogf/gf/contrib/drivers/mysql/v2"
	"github.com/gogf/gf/v2/database/gdb"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
	"strconv"
)

// MyDriver is a custom database driver, which is used for testing only.
// For simplifying the unit testing case purpose, MyDriver struct inherits the mysql driver
// gdb.DriverMysql and overwrites its functions DoQuery and DoExec.
// So if there's any sql execution, it goes through MyDriver.DoQuery/MyDriver.DoExec firstly
// and then gdb.DriverMysql.DoQuery/gdb.DriverMysql.DoExec.
// You can call it sql "HOOK" or "HiJack" as your will.
type MyDriver struct {
	*mysql.DriverMysql
}

var (
	// customDriverName is my driver name, which is used for registering.
	customDriverName = "MyDriver"
)

func init() {
	// It here registers my custom driver in package initialization function "init".
	// You can later use this type in the database configuration.
	if err := gdb.Register(customDriverName, &MyDriver{}); err != nil {
		panic(err)
	}
}

// New creates and returns a database object for mysql.
// It implements the interface of gdb.Driver for extra database driver installation.
func (d *MyDriver) New(core *gdb.Core, node *gdb.ConfigNode) (gdb.DB, error) {
	return &MyDriver{
		&mysql.DriverMysql{
			Core: core,
		},
	}, nil
}

// DoQuery commits the sql string and its arguments to underlying driver
// through given link object and returns the execution result.
func (d *MyDriver) DoQuery(ctx context.Context, link gdb.Link, sql string, args ...interface{}) (rows gdb.Result, err error) {
	tsMilli := gtime.TimestampMilli()
	rows, err = d.DriverMysql.DoQuery(ctx, link, sql, args...)
	_, _ = link.ExecContext(ctx,
		"INSERT INTO `monitor`(`sql`,`cost`,`time`,`error`) VALUES(?,?,?,?)",
		gdb.FormatSqlWithArgs(sql, args),
		gtime.TimestampMilli()-tsMilli,
		gtime.Now(),
		err,
	)
	return
}

// DoExec commits the query string and its arguments to underlying driver
// through given link object and returns the execution result.
func (d *MyDriver) DoExec(ctx context.Context, link gdb.Link, sql string, args ...interface{}) (result sql.Result, err error) {
	tsMilli := gtime.TimestampMilli()
	result, err = d.DriverMysql.DoExec(ctx, link, sql, args...)
	_, _ = link.ExecContext(ctx,
		"INSERT INTO `monitor`(`sql`,`cost`,`time`,`error`) VALUES(?,?,?,?)",
		gdb.FormatSqlWithArgs(sql, args),
		gtime.TimestampMilli()-tsMilli,
		gtime.Now(),
		err,
	)
	return
}

// DoFilter is a hook function, which filters the sql and its arguments before it's committed to underlying driver.
// The parameter `link` specifies the current database connection operation object. You can modify the sql
// string `sql` and its arguments `args` as you wish before they're committed to driver.
func (d *MyDriver) DoFilter(ctx context.Context, link gdb.Link, sql string, args []interface{}) (newSql string, newArgs []interface{}, err error) {
	//Filter sql Step1
	sql_new := gstr.Replace(sql, "\n", "")

	//Filter sql Step2
	sql_new = gstr.Replace(sql_new, "\t", "")
	//... Filter what you want ...

	//Filter args Step1
	for _, v := range args {
		switch v.(type) {
		case gdb.Map:
			//Do it what you wan
		case string:
			//Do it what you wan
		}
	}
	return sql_new, args, nil
}

// ConvertDataForRecord is a very important function, which does converting for any data that
// will be inserted into table/collection as a record.
//
// The parameter `value` should be type of *map/map/*struct/struct.
// It supports embedded struct definition for struct.
func (d *MyDriver) ConvertDataForRecord(ctx context.Context, data interface{}) (map[string]interface{}, error) {
	//this hook is convert data to map[string]interface{}
	result := make(map[string]interface{}, 0)

	//like this
	switch data.(type) {
	case gdb.Map:
		result = gconv.Map(data)
	case gdb.List:
		for k, v := range data.(gdb.List) {
			result[strconv.Itoa(k)] = gconv.Map(v)
		}
		//case other type,do it what you want
	}
	return result, nil
}

```

我们看到，这里在包初始化方法 `init` 中使用了 `gdb.Register("MyDriver", &MyDriver{})` 来注册了了一个自定义名称的驱动。我们也可以通过 `gdb.Register("mysql", &MyDriver{})` 来覆盖已有的框架 `mysql` 驱动为自己的驱动。

驱动名称 `mysql` 为框架默认的 `DriverMysql` 驱动的名称。

由于这里我们使用了一个新的驱动名称 `MyDriver`，因此在 `gdb` 配置中的 `type` 数据库类型时，需要填写该驱动名称。以下是一个使用配置的示例：

```
database:
  default:
  - link: "MyDriver:root:12345678@tcp(127.0.0.1:3306)/user"
```