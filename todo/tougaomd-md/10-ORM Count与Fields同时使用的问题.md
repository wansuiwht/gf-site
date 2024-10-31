---
title: 'ORM Count与Fields同时使用的问题'
sidebar_position: 10
---

[Sookie Justin](https://goframe.org/display/~sookie "") 来源评论： [ORM链式操作-模型创建](https://goframe.org/pages/viewpage.action?pageId=17203716)

## 一、发现问题

### 1、示例代码

```
func (u *userApi) Test(r *ghttp.Request) {
   model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
   // 总数
   total, err := model.Count()
   if err != nil {
      tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
   }
   // 列表
   result, err := model.Offset(0).Limit(10).All()
   if err != nil {
      return
   }
   tresponse.Json(r, tresponse.WithData(g.Map{
      "list": result.List(),
      "total": total,
   }))
}
```

### 2、错误信息

```
Error 1064: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'nickname,status) FROM `user` WHERE id \u003e ?' at line 1, SELECT COUNT(id,nickname,status) FROM `user` WHERE id \u003e 1\n
```

### 3、排查的必要性

    日常工作中根据用户提交数据来拼接sql的场景特别多，涉及到计数或者分页查询都会调用Count()方法。

## 二、排除问题

### 1、去掉Fields中的指定字段，表现正常，无异常产生

```
func (u *userApi) Test(r *ghttp.Request) {
   model := dao.User.Ctx(r.Context()).Where("id > ?", 1)
   // 总数
   total, err := model.Count()
   if err != nil {
      tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
   }
   // 列表
   result, err := model.Offset(0).Limit(10).All()
   if err != nil {
      return
   }
   tresponse.Json(r, tresponse.WithData(g.Map{
      "list": result.List(),
      "total": total,
   }))
}
```

### 2、追溯Count源码

```
// Count does "SELECT COUNT(x) FROM ..." statement for the model.
// The optional parameter `where` is the same as the parameter of Model.Where function,
// see Model.Where.
func (m *Model) Count(where ...interface{}) (int, error) {
	//m.fields = ""
	if len(where) > 0 {
		return m.Where(where[0], where[1:]...).Count()
	}
	var (
		sqlWithHolder, holderArgs = m.getFormattedSqlAndArgs(queryTypeCount, false)  // 得到执行的sql
		list, err                 = m.doGetAllBySql(sqlWithHolder, holderArgs...)
	)
	if err != nil {
		return 0, err
	}
	if len(list) > 0 {
		for _, v := range list[0] {
			return v.Int(), nil
		}
	}
	return 0, nil
}
```

原因就出在这里，当fields有值的时候会count所有字段

```
func (m *Model) getFormattedSqlAndArgs(queryType int, limit1 bool) (sqlWithHolder string, holderArgs []interface{}) {
	switch queryType {
	case queryTypeCount:
		countFields := "COUNT(1)"
		if m.fields != "" && m.fields != "*" {
			// DO NOT quote the m.fields here, in case of fields like:
			// DISTINCT t.user_id uid
			countFields = fmt.Sprintf(`COUNT(%s%s)`, m.distinct, m.fields)
		}
		// Raw SQL Model.
		if m.rawSql != "" {
			sqlWithHolder = fmt.Sprintf("SELECT %s FROM (%s) AS T", countFields, m.rawSql)
			return sqlWithHolder, nil
		}
		conditionWhere, conditionExtra, conditionArgs := m.formatCondition(false, true)
		sqlWithHolder = fmt.Sprintf("SELECT %s FROM %s%s", countFields, m.tables, conditionWhere+conditionExtra)
		if len(m.groupBy) > 0 {
			sqlWithHolder = fmt.Sprintf("SELECT COUNT(1) FROM (%s) count_alias", sqlWithHolder)
		}
		return sqlWithHolder, conditionArgs

	default:
		conditionWhere, conditionExtra, conditionArgs := m.formatCondition(limit1, false)
		// Raw SQL Model, especially for UNION/UNION ALL featured SQL.
		if m.rawSql != "" {
			sqlWithHolder = fmt.Sprintf(
				"%s%s",
				m.rawSql,
				conditionWhere+conditionExtra,
			)
			return sqlWithHolder, conditionArgs
		}
		// DO NOT quote the m.fields where, in case of fields like:
		// DISTINCT t.user_id uid
		sqlWithHolder = fmt.Sprintf(
			"SELECT %s%s FROM %s%s",
			m.distinct,
			m.getFieldsFiltered(),
			m.tables,
			conditionWhere+conditionExtra,
		)
		return sqlWithHolder, conditionArgs
	}
```

## 三、尝试解决问题

### 思路：通过克隆对象，重置Fields解决

```
func (u *userApi) Test(r *ghttp.Request) {
   model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
   // 总数
   countModel := model.Clone()
   countModel = countModel.Fields("*")
   total, err := countModel.Count()
   if err != nil {
      tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
   }
   // 列表
   result, err := model.Offset(0).Limit(10).All()
   if err != nil {
      return
   }
   tresponse.Json(r, tresponse.WithData(g.Map{
      "list": result.List(),
      "total": total,
   }))
}
```

依旧报错，不但没有将字段重置还追加了count添加的字段

```
Error 1064: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'nickname,status,*) FROM `user` WHERE id \u003e ?' at line 1, SELECT COUNT(id,nickname,status,*) FROM `user` WHERE id \u003e 1\n
```

追溯Fields()源码：

```
// Fields appends `fieldNamesOrMapStruct` to the operation fields of the model, multiple fields joined using char ','.
// The parameter `fieldNamesOrMapStruct` can be type of string/map/*map/struct/*struct.
func (m *Model) Fields(fieldNamesOrMapStruct ...interface{}) *Model {
	length := len(fieldNamesOrMapStruct)
	if length == 0 {
		return m
	}
	switch {
	// String slice.
	case length >= 2:
		return m.appendFieldsByStr(gstr.Join(
			m.mappingAndFilterToTableFields(gconv.Strings(fieldNamesOrMapStruct), true),
			",",
		))
	// It needs type asserting.
	case length == 1:
		switch r := fieldNamesOrMapStruct[0].(type) {
		case string:
			return m.appendFieldsByStr(gstr.Join(
				m.mappingAndFilterToTableFields([]string{r}, false), ",",
			))
		case []string:
			return m.appendFieldsByStr(gstr.Join(
				m.mappingAndFilterToTableFields(r, true), ",",
			))
		default:
			return m.appendFieldsByStr(gstr.Join(
				m.mappingAndFilterToTableFields(gutil.Keys(r), true), ",",
			))
		}
	}
	return m
}
```

调用Fields()方法都是append字段，无法重置

```
// mappingAndFilterToTableFields mappings and changes given field name to really table field name.
// Eg:
// ID        -> id
// NICK_Name -> nickname
func (m *Model) mappingAndFilterToTableFields(fields []string, filter bool) []string {
	// 查询数据表字段  SHOW FULL COLUMNS FROM `table`
	fieldsMap, err := m.TableFields(m.tablesInit)
	if err != nil || len(fieldsMap) == 0 {
		return fields
	}
	var (
		inputFieldsArray  = gstr.SplitAndTrim(gstr.Join(fields, ","), ",")
		outputFieldsArray = make([]string, 0, len(inputFieldsArray))
	)
	fieldsKeyMap := make(map[string]interface{}, len(fieldsMap))
	for k, _ := range fieldsMap {
		fieldsKeyMap[k] = nil
	}
	for _, field := range inputFieldsArray {
		if _, ok := fieldsKeyMap[field]; !ok {  // 字段是否在数据表字段中
			if !gregex.IsMatchString(regularFieldNameWithoutDotRegPattern, field) {  // 匹配是否加了表名或别名
				// Eg: user.id, user.name
				outputFieldsArray = append(outputFieldsArray, field)  // append字段
				continue
			} else {
				// Eg: id, name
				if foundKey, _ := gutil.MapPossibleItemByKey(fieldsKeyMap, field); foundKey != "" {
					outputFieldsArray = append(outputFieldsArray, foundKey) // append字段
				} else if !filter {
					outputFieldsArray = append(outputFieldsArray, field)
				}
			}
		} else {
			outputFieldsArray = append(outputFieldsArray, field)
		}
	}
	return outputFieldsArray
}
```

通过查看源码也没有发现暴露的重置Model.fields的方法，故根据自己的思路通过修改源码可以解决该问题。

## 四、解决问题

### 方案1：修改Count()源码，将Model.fields赋值为空

优点：修改简单

缺点：只能解决Count()方法能正常使用，但是其他聚合方法，如Sum(), Avg()也要做同样的修改才行，对源码侵入太大

```
// Count does "SELECT COUNT(x) FROM ..." statement for the model.
// The optional parameter `where` is the same as the parameter of Model.Where function,
// see Model.Where.
func (m *Model) Count(where ...interface{}) (int, error) {
	m.fields = ""
	if len(where) > 0 {
		return m.Where(where[0], where[1:]...).Count()
	}
	var (
		sqlWithHolder, holderArgs = m.getFormattedSqlAndArgs(queryTypeCount, false)  // 得到执行的sql
		list, err                 = m.doGetAllBySql(sqlWithHolder, holderArgs...)
	)
	if err != nil {
		return 0, err
	}
	if len(list) > 0 {
		for _, v := range list[0] {
			return v.Int(), nil
		}
	}
	return 0, nil
}
```

用法1：按照思路克隆一个新对象然后调用Count()

```
func (u *userApiForDao) Test(r *ghttp.Request) {
	model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
	// 总数
	countModel := model.Clone()
	total, err := countModel.Count()
	if err != nil {
		tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
	}
	// 列表
	result, err := model.Offset(0).Limit(10).All()
	if err != nil {
		return
	}
	tresponse.Json(r, tresponse.WithData(g.Map{
		"list": result.List(),
		"total": total,
	}))
}
```

用法二：其实也可以不用显式的调用Clone，前提条件是Model是链式安全的，因为每次调用都会放回一个新对象，所以只有再调用一下Fields()就可以了，调用会放回一个新对象，也不影响原来的对象。

```
func (u *userApiForDao) Test(r *ghttp.Request) {
	model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
	// 总数
	//countModel := model.Clone()
	//total, err := countModel.Count()
	total, err := model.Fields("*").Count()

	if err != nil {
		tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
	}
	// 列表
	result, err := model.Offset(0).Limit(10).All()
	if err != nil {
		return
	}
	tresponse.Json(r, tresponse.WithData(g.Map{
		"list": result.List(),
		"total": total,
	}))
}
```

### 方案2：跟方案一原理差不多，都是围绕重置Model.fields属性展开，具体做法是暴露一个可以重置model.fields属性的方法。

优点：更加通用，满足所有计数场景的使用，对源码侵入也比较小，个人推荐使用这种方法

**修改gdb\_model\_fields.go源码，添加方法FieldsReset**

```
// FieldsReset Reset the model fields property
func (m *Model) FieldsReset(fieldNamesOrMapStruct ...interface{}) *Model {
   model := m.getModel()
   model.fields = ""
   return model.Fields(fieldNamesOrMapStruct...)
}
```

用法1：非链式安全

```
func (u *userApiForDao) Test(r *ghttp.Request) {
	model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
	// 总数
	countModel := model.Clone()
	total, err := countModel.FieldsReset("id").Count()
	if err != nil {
		tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
	}
	// 列表
	result, err := model.Offset(0).Limit(10).All()
	if err != nil {
		return
	}
	tresponse.Json(r, tresponse.WithData(g.Map{
		"list": result.List(),
		"total": total,
	}))
}
```

用法2：链式安全

```
func (u *userApiForDao) Test(r *ghttp.Request) {
	model := dao.User.Ctx(r.Context()).Fields("id, nickname, status").Where("id > ?", 1)
	// 总数
	total, err := model.FieldsReset("").CountColumn("id")
	if err != nil {
		tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
	}
	// 列表
	result, err := model.Offset(0).Limit(10).All()
	if err != nil {
		return
	}
	tresponse.Json(r, tresponse.WithData(g.Map{
		"list": result.List(),
		"total": total,
	}))
}
```

### 方案3：通过业务来解决，先将fields临时保存，执行All()方法时再为fields属性赋值。但是这种方法对于有基于框架的orm再进行封装就比较不友好了。

优点：对源码无侵入

缺点：灵活性差

```
func (u *userApiForDao) Test(r *ghttp.Request) {
	fields := "id, nickname, status"
	model := dao.User.Ctx(r.Context()).Where("id > ?", 1)
	// 总数
	total, err := model.Count()
	if err != nil {
		tresponse.Json(r, tresponse.WithCode(500), tresponse.WithMessage(err.Error()), tresponse.WithExit())
	}
	// 列表
	result, err := model.Fields(fields).Offset(0).Limit(10).All()
	if err != nil {
		return
	}
	tresponse.Json(r, tresponse.WithData(g.Map{
		"list": result.List(),
		"total": total,
	}))
}
```

[郭强](https://goframe.org/display/~john "") 强哥  还要更好的解决办法么？