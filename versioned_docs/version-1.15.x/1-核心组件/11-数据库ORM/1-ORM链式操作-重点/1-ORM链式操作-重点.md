---
title: 'ORM链式操作(重点)'
sidebar_position: 1
---

`gdb` 链式操作使用方式简单灵活，是 `GF` 框架官方推荐的数据库操作方式。链式操作可以通过数据库对象的 `db.Table`/ `db.Model` 方法或者事务对象的 `tx.Table`/ `tx.Model` 方法，基于指定的数据表返回一个链式操作对象 `*Model`，该对象可以执行以下方法。

当前方法列表可能滞后于源代码，详细的方法列表请参考接口文档： [https://godoc.org/github.com/gogf/gf/database/gdb#Model](https://godoc.org/github.com/gogf/gf/database/gdb#Model)

```
// 写入/更新/删除基本操作
func (m *Model) Insert(data ...interface{}) (result sql.Result, err error)
func (m *Model) InsertAndGetId(data ...interface{}) (lastInsertId int64, err error)
func (m *Model) InsertIgnore(data ...interface{}) (result sql.Result, err error)
func (m *Model) Replace(data ...interface{}) (result sql.Result, err error)
func (m *Model) Save(data ...interface{}) (result sql.Result, err error)
func (m *Model) Update(dataAndWhere ...interface{}) (result sql.Result, err error)
func (m *Model) Delete(where ...interface{}) (result sql.Result, err error)

// 基本查询操作
func (m *Model) All(where ...interface{} (Result, error)
func (m *Model) One(where ...interface{}) (Record, error)
func (m *Model) Array(fieldsAndWhere ...interface{}) ([]Value, error)
func (m *Model) Value(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) Count(where ...interface{}) (int, error)
func (m *Model) CountColumn(column string) (int, error)

// 常用基本统计
func (m *Model) Min(column string) (float64, error)
func (m *Model) Max(column string) (float64, error)
func (m *Model) Avg(column string) (float64, error)
func (m *Model) Sum(column string) (float64, error)

// 字段自增/自减
func (m *Model) Increment(column string, amount float64) (sql.Result, error)
func (m *Model) Decrement(column string, amount float64) (sql.Result, error)

// 主键查询操作
func (m *Model) FindAll(where ...interface{}) (Result, error)
func (m *Model) FindOne(where ...interface{}) (Record, error)
func (m *Model) FindArray(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) FindValue(fieldsAndWhere ...interface{}) (Value, error)
func (m *Model) FindCount(where ...interface{}) (int, error)
func (m *Model) FindScan(pointer interface{}, where ...interface{}) error

// 查询转换操作
func (m *Model) Struct(pointer interface{}) error
func (m *Model) Structs(pointer interface{}) error
func (m *Model) Scan(pointer interface{}) error
func (m *Model) ScanList(listPointer interface{}, attributeName string, relation ...string) (err error)

// 联表查询方法
func (m *Model) LeftJoin(table ...string) *Model
func (m *Model) RightJoin(table ...string) *Model
func (m *Model) InnerJoin(table ...string) *Model

// With关联查询
func (m *Model) With(object interface{}) *Model
func (m *Model) WithAll() *Model

// 条件查询方法
func (m *Model) Where(where interface{}, args...interface{}) *Model
func (m *Model) WherePri(where interface{}, args ...interface{}) *Model
func (m *Model) WhereBetween(column string, min, max interface{}) *Model
func (m *Model) WhereLike(column string, like interface{}) *Model
func (m *Model) WhereIn(column string, in interface{}) *Model
func (m *Model) WhereNull(columns ...string) *Model
func (m *Model) WhereNotBetween(column string, min, max interface{}) *Model
func (m *Model) WhereNotLike(column string, like interface{}) *Model
func (m *Model) WhereNotIn(column string, in interface{}) *Model
func (m *Model) WhereNotNull(columns ...string) *Model
func (m *Model) WhereOr(where interface{}, args ...interface{}) *Model
func (m *Model) WhereOrBetween(column string, min, max interface{}) *Model
func (m *Model) WhereOrLike(column string, like interface{}) *Model
func (m *Model) WhereOrIn(column string, in interface{}) *Model
func (m *Model) WhereOrNull(columns ...string) *Model
func (m *Model) WhereOrNotBetween(column string, min, max interface{}) *Model
func (m *Model) WhereOrNotLike(column string, like interface{}) *Model
func (m *Model) WhereOrNotIn(column string, in interface{}) *Model
func (m *Model) WhereOrNotNull(columns ...string) *Model

// 分组排序方法
func (m *Model) Group(group string) *Model
func (m *Model) Order(order string) *Model
func (m *Model) OrderAsc(column string) *Model
func (m *Model) OrderDesc(column string) *Model
func (m *Model) OrderRandom() *Model

// 条件过滤方法
func (m *Model) Fields(fields string) *Model
func (m *Model) FieldsEx(fields string) *Model
func (m *Model) Data(data...interface{}) *Model
func (m *Model) Batch(batch int) *Model
func (m *Model) Filter() *Model
func (m *Model) Safe(safe...bool) *Model
func (m *Model) Having(having interface{}, args ...interface{}) *Model
func (m *Model) Offset(offset int) *Model
func (m *Model) Limit(start int, limit int) *Model
func (m *Model) OmitEmpty() *Model
func (m *Model) Page(page, limit int) (*Model)
func (m *Model) Distinct() *Model

// 数据库/事务切换
func (m *Model) DB(db DB) *Model
func (m *Model) TX(tx *TX) *Model

// 主从自定义切换
func (m *Model) Master() *Model
func (m *Model) Slave() *Model

// 数据互斥锁操作
func (m *Model) LockUpdate() *Model
func (m *Model) LockShared() *Model

// 常用工具方法
func (m *Model) Ctx(ctx context.Context) *Model
func (m *Model) Clone() *Model
func (m *Model) Cache(duration time.Duration, name ...string) *Model
func (m *Model) As(as string) *Model
func (m *Model) Chunk(limit int, callback func(result Result, err error) bool)
func (m *Model) Schema(schema string) *Model
func (m *Model) Option(option int) *Model
func (m *Model) Args(args ...interface{}) *Model
func (m *Model) Unscoped() *Model
func (m *Model) HasField(field string) (bool, error)
func (m *Model) GetFieldsStr(prefix ...string) string
func (m *Model) GetFieldsExStr(fields string, prefix ...string) string
```