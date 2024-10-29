---
title: 'ORM事务处理-闭包操作'
sidebar_position: 1
hide_title: true
---

可以看到，通过常规的事务方法来管理事务有很多重复性的操作，并且存在遗忘提交/回滚操作来关闭事务的风险，因此为方便安全执行事务操作， `ORM` 组件同样提供了事务的闭包操作，通过 `Transaction` 方法实现，该方法定义如下：

```
func (db DB) Transaction(ctx context.Context, f func(ctx context.Context, tx TX) error) (err error)
```

当给定的闭包方法返回的 `error` 为 `nil` 时，那么闭包执行结束后当前事务自动执行 `Commit` 提交操作；否则自动执行 `Rollback` 回滚操作。闭包中的 `context.Context` 参数为 `goframe v1.16` 版本后新增的上下文变量，主要用于链路跟踪传递以及嵌套事务管理。由于上下文变量是嵌套事务管理的重要参数，因此上下文变量通过显示的参数传递定义。

如果闭包内部操作产生 `panic` 中断，该事务也将自动进行回滚，以保证操作安全。

使用示例：

```
g.DB().Transaction(context.TODO(), func(ctx context.Context, tx gdb.TX) error {
	// user
	result, err := tx.Ctx(ctx).Insert("user", g.Map{
		"passport": "john",
		"password": "12345678",
		"nickname": "JohnGuo",
	})
	if err != nil {
		return err
	}
	// user_detail
	id, err := result.LastInsertId()
	if err != nil {
		return err
	}
	_, err = tx.Ctx(ctx).Insert("user_detail", g.Map{
		"uid":       id,
		"site":      "https://johng.cn",
		"true_name": "GuoQiang",
	})
	if err != nil {
		return err
	}
	return nil
})
```