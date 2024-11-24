---
slug: '/docs/core/gdb-chaining-relation-with'
title: 'Model Association - Static Association - With Feature'
sidebar_position: 1
hide_title: true
keywords: [GoFrame, With Feature, ORM, Model Association, Data Query, Transaction Operation, Data Structure, Go Language, Database, SQL]
description: "The With feature in the GoFrame framework provides examples of how to use the With feature to achieve model association and data query, introducing aspects such as data structure definition, transaction operation, and data writing and querying, helping developers better understand and use the GoFrame framework for efficient development."
---

## 1. Design Background

We all know that usability and maintainability have been key focuses for `goframe`, setting it apart from other frameworks and components. Unlike other ORMs that use common model association designs like `BelongsTo`, `HasOne`, `HasMany`, and `ManyToMany`, `goframe` avoids these due to their complex maintenance, such as foreign key constraints and additional tag notes, which can burden developers. Thus, the framework prefers not to inject overly complex tag content, association attributes, or methods into model structs, continuously simplifying the design. The goal is to make model association queries as easy to understand and use as possible. Previously, we introduced the `ScanList` solution, and it is recommended to understand it before diving into the `With` feature [Dynamic Association - ScanList](Dynamic Association - ScanList.md).

After various project practices, we found that although `ScanList` maintained model association from a runtime business logic perspective, it still didn't meet our simplicity expectations. Therefore, we further improved and launched the `With` model association feature, which facilitates simple maintenance of association relationships through models. This feature remains dedicated to enhancing the framework's overall usability and maintainability. You can view `With` as a combination and improvement over `ScanList` and model association maintenance.

:::warning
The `With` feature is currently experimental.
:::

## 2. An Example

Let's start with a simple example to help everyone understand the `With` feature better. This example is a refined version from the previous `ScanList` section.

### 1. Data Structure

```sql
# User Table
CREATE TABLE `user` (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(45) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# User Detail
CREATE TABLE `user_detail` (
  uid  int(10) unsigned NOT NULL AUTO_INCREMENT,
  address varchar(45) NOT NULL,
  PRIMARY KEY (uid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# User Scores
CREATE TABLE `user_scores` (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  uid int(10) unsigned NOT NULL,
  score int(10) unsigned NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

### 2. Data Structure

From the table definitions, we know:

1. User table and user detail have a `1:1` relationship.
2. User table and user scores have a `1:N` relationship.
3. The `N:N` relationship is not demonstrated here because compared to the `1:N` query, it merely adds one more association or query, and the final handling is similar to `1:N`.

The Golang model can be defined as follows:

```go
// User Detail
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}
// User Scores
type UserScores struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}
// User Information
type User struct {
    g.Meta `orm:"table:user"`
    Id         int           `json:"id"`
    Name       string        `json:"name"`
    UserDetail *UserDetail   `orm:"with:uid=id"`
    UserScores []*UserScores `orm:"with:uid=id"`
}
```

### 3. Data Insertion

To simplify the example, we'll create 5 user records and use a transaction operation for insertion:

- User information, with `id` from `1-5`, and `name` from `name_1` to `name_5`.
- Simultaneously create 5 user detail records, with `address` data ranging from `address_1` to `address_5`.
- For each user, create 5 score records, ranging from `1-5`.

```go
g.DB().Transaction(ctx, func(ctx context.Context, tx gdb.TX) error {
    for i := 1; i <= 5; i++ {
        // User.
        user := User{
            Name: fmt.Sprintf(`name_%d`, i),
        }
        lastInsertId, err := g.Model(user).Data(user).OmitEmpty().InsertAndGetId()
        if err != nil {
            return err
        }
        // Detail.
        userDetail := UserDetail{
            Uid:     int(lastInsertId),
            Address: fmt.Sprintf(`address_%d`, lastInsertId),
        }
        _, err = g.Model(userDetail).Data(userDetail).OmitEmpty().Insert()
        if err != nil {
            return err
        }
        // Scores.
        for j := 1; j <= 5; j++ {
            userScore := UserScores{
                Uid:   int(lastInsertId),
                Score: j,
            }
            _, err = g.Model(userScore).Data(userScore).OmitEmpty().Insert()
            if err != nil {
                return err
            }
        }
    }
    return nil
})
```

Upon successful execution, the database data is as follows:

```text
mysql> show tables;
+----------------+
| Tables_in_test |
+----------------+
| user           |
| user_detail    |
| user_score     |
+----------------+
3 rows in set (0.01 sec)

mysql> select * from `user`;
+----+--------+
| id | name   |
+----+--------+
|  1 | name_1 |
|  2 | name_2 |
|  3 | name_3 |
|  4 | name_4 |
|  5 | name_5 |
+----+--------+
5 rows in set (0.01 sec)

mysql> select * from `user_detail`;
+-----+-----------+
| uid | address   |
+-----+-----------+
|   1 | address_1 |
|   2 | address_2 |
|   3 | address_3 |
|   4 | address_4 |
|   5 | address_5 |
+-----+-----------+
5 rows in set (0.00 sec)

mysql> select * from `user_score`;
+----+-----+-------+
| id | uid | score |
+----+-----+-------+
|  1 |   1 |     1 |
|  2 |   1 |     2 |
|  3 |   1 |     3 |
|  4 |   1 |     4 |
|  5 |   1 |     5 |
|  6 |   2 |     1 |
|  7 |   2 |     2 |
|  8 |   2 |     3 |
|  9 |   2 |     4 |
| 10 |   2 |     5 |
| 11 |   3 |     1 |
| 12 |   3 |     2 |
| 13 |   3 |     3 |
| 14 |   3 |     4 |
| 15 |   3 |     5 |
| 16 |   4 |     1 |
| 17 |   4 |     2 |
| 18 |   4 |     3 |
| 19 |   4 |     4 |
| 20 |   4 |     5 |
| 21 |   5 |     1 |
| 22 |   5 |     2 |
| 23 |   5 |     3 |
| 24 |   5 |     4 |
| 25 |   5 |     5 |
+----+-----+-------+
25 rows in set (0.00 sec)
```

### 4. Data Query

Under the new `With` feature, data querying is quite convenient. For example, to query one record:

```go
// Declaration again for clarity
// User Detail
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}
// User Scores
type UserScores struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}
// User Information
type User struct {
    g.Meta `orm:"table:user"`
    Id         int           `json:"id"`
    Name       string        `json:"name"`
    UserDetail *UserDetail   `orm:"with:uid=id"`
    UserScores []*UserScores `orm:"with:uid=id"`
}

var user *User
// WithAll will query fields with with tag, in this example, it will query tables corresponding to UserDetail and UserScores structures
g.Model(tableUser).WithAll().Where("id", 3).Scan(&user)
```

The above statement queries information, details, and scores of the user with ID `3`. Internally, the following `SQL` statements will be executed in the database:

```text
2021-05-02 22:29:52.634 [DEBU] [  2 ms] [default] SHOW FULL COLUMNS FROM `user`
2021-05-02 22:29:52.635 [DEBU] [  1 ms] [default] SELECT * FROM `user` WHERE `id`=3 LIMIT 1
2021-05-02 22:29:52.636 [DEBU] [  1 ms] [default] SHOW FULL COLUMNS FROM `user_detail`
2021-05-02 22:29:52.637 [DEBU] [  1 ms] [default] SELECT `uid`,`address` FROM `user_detail` WHERE `uid`=3 LIMIT 1
2021-05-02 22:29:52.643 [DEBU] [  6 ms] [default] SHOW FULL COLUMNS FROM `user_score`
2021-05-02 22:29:52.644 [DEBU] [  0 ms] [default] SELECT `id`,`uid`,`score` FROM `user_score` WHERE `uid`=3
```

Upon execution, the user information printed with `g.Dump(user)` looks like this:

```js
{
    Id:         3,
    Name:       "name_3",
    UserDetail: {
        Uid:     3,
        Address: "address_3",
    },
    UserScores: [
        {
            Id:    11,
            Uid:   3,
            Score: 1,
        },
        {
            Id:    12,
            Uid:   3,
            Score: 2,
        },
        {
            Id:    13,
            Uid:   3,
            Score: 3,
        },
        {
            Id:    14,
            Uid:   3,
            Score: 4,
        },
        {
            Id:    15,
            Uid:   3,
            Score: 5,
        },
    ],
}
```

### 5. List Query

Here is an example of list querying through the `With` feature:

```go
var users []*User
// With(UserDetail{}) only queries the table corresponding to UserDetail in the User struct
g.Model(users).With(UserDetail{}).Where("id>?", 3).Scan(&users)
```

Upon execution, the user data printed with `g.Dump(users)` looks like this:

```js
[
    {
        Id:         4,
        Name:       "name_4",
        UserDetail: {
            Uid:     4,
            Address: "address_4",
        },
        UserScores: [],
    },
    {
        Id:         5,
        Name:       "name_5",
        UserDetail: {
            Uid:     5,
            Address: "address_5",
        },
        UserScores: [],
    },
]
```

### 6. Conditions and Sorting

When associating with the `With` feature, you can specify additional conditions for the association and specify sorting rules for multiple data results. For example:

```go
type User struct {
    g.Meta `orm:"table:user"`
    Id         int           `json:"id"`
    Name       string        `json:"name"`
    UserDetail *UserDetail   `orm:"with:uid=id, where:uid > 3"`
    UserScores []*UserScores `orm:"with:uid=id, where:score>1 and score<5, order:score desc"`
}
```

You can specify additional association conditions and sorting rules through the `where` and `order` sub-tags in the `orm` tag.

### 7. `unscoped` Tag
In the `with` struct tag, the `unscoped` feature is supported, for example:
```go
type User struct {
    g.Meta `orm:"table:user"`
    Id         int          `json:"id"`
    Name       string       `json:"name"`
    UserDetail *UserDetail  `orm:"with:uid=id, unscoped:true"`
    UserScores []*UserScore `orm:"with:uid=id, unscoped:true"`
}
```

## 3. Detailed Explanation

You might be curious about certain usages above, like the `gmeta` package, the `WithAll` method, the `with` statement in the `orm` tag, the `Model` method with struct parameter for table name recognition, etc. Well, let's dive into these details.

### 1. The `gmeta` Package

You can see the use of the `embed` method embedding a `g.Meta` struct in the above structure models, like:

```go
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}
```

In the `GoFrame` framework, there are many such component packages designed to implement specific convenient functions. The role of the `gmeta` package is mainly to embed into user-defined structs and label the `gmeta` package struct (here, `g.Meta`) through tags, retrieving these custom tag contents dynamically at runtime. For details, please refer to the chapter: [Metadata-gmeta](../../../../component_list/utilities/metadata-gmeta.md)

So, the purpose of embedding `g.Meta` here is to indicate the data table name associated with the struct.

### 2. Model Association Specification

In the following struct:

```go
type User struct {
    g.Meta `orm:"table:user"`
    Id         int          `json:"id"`
    Name       string       `json:"name"`
    UserDetail *UserDetail  `orm:"with:uid=id"`
    UserScores []*UserScore `orm:"with:uid=id"`
}
```

We associate specific struct attributes with `orm` tags and specify the relationship between the current struct (data table) and target struct (data table) through the `with` statement in the `orm` tag. The syntax of the `with` statement is as follows:

```text
with:current_attribute_table_association_field=current_struct_table_association_field
```

The field names are **case-insensitive and support special character matching**. Various forms of association relationships can be automatically recognized, such as:

```text
with:UID=ID
with:Uid=Id
with:U_ID=id
```

If both tables have the same association field name, one can simply be written, such as:

```text
with:uid
```

In this example, the data table corresponding to the `UserDetail` attribute is `user_detail`, and the one for `UserScores` is `user_score`. Both are associated with the current `User` struct table `user` using the `uid`, and the corresponding field in the target associated `user` table is `id`.

### 3. `With/WithAll`

#### 1) Basic Introduction

By default, even if the struct attributes have `orm` tags with `with` statements, the `ORM` component does not enable `With` feature association queries unless triggered with `With/WithAll` methods.

- `With`: Specifies which associated tables to enable for queries, specified with attribute objects.
- `WithAll`: Enables all associated model object attribute tables with `with` statements.

In our example, we used the `WithAll` method, which automatically enables model association queries for all attributes in the `User` table. As long as the attribute struct associates with a data table and the `orm` tag has a `with` statement, data will be automatically queried and bound based on model struct associations. If only partial associations need to be enabled, instead of all attribute model association queries, then `With` method can be used for precise control. The `With` method allows specifying multiple associated model automatic queries. In this example, `WithAll` is equivalent to:

```go
var user *User
g.Model(tableUser).With(UserDetail{}, UserScore{}).Where("id", 3).Scan(&user)
```

Or it can be like this:

```go
var user *User
g.Model(tableUser).With(User{}.UserDetail, User{}.UserScore).Where("id", 3).Scan(&user)
```

#### 2) Associate Only `UserDetail` Model

If you only need to query user details and not user scores, you can use the `With` method to enable the query for the data table associated with specific objects, like:

```go
var user *User
g.Model(tableUser).With(UserDetail{}).Where("id", 3).Scan(&user)
```

Or like this:

```go
var user *User
g.Model(tableUser).With(User{}.UserDetail).Where("id", 3).Scan(&user)
```

After execution, the user data printed with `g.Dump(user)` looks like this:

```js
{
        "id": 3,
        "name": "name_3",
        "UserDetail": {
                "uid": 3,
                "address": "address_3"
        },
        "UserScores": []
}
```

#### 3) Associate Only `UserScores` Model

You can also only associate query the user score information, like:

```go
var user *User
g.Model(tableUser).With(UserScore{}).Where("id", 3).Scan(&user)
```

Or like this:

```go
var user *User
g.Model(tableUser).With(User{}.UserScore).Where("id", 3).Scan(&user)
```

After execution, the user data printed with `g.Dump(user)` looks like this:

```js
{
        "id": 3,
        "name": "name_3",
        "UserDetail": null,
        "UserScores": [
                {
                        "id": 11,
                        "uid": 3,
                        "score": 1
                },
                {
                        "id": 12,
                        "uid": 3,
                        "score": 2
                },
                {
                        "id": 13,
                        "uid": 3,
                        "score": 3
                },
                {
                        "id": 14,
                        "uid": 3,
                        "score": 4
                },
                {
                        "id": 15,
                        "uid": 3,
                        "score": 5
                }
        ]
}
```

#### 4) No Associated Model Query

If no associated query is needed, it's simpler. For instance:

```go
var user *User
g.Model(tableUser).Where("id", 3).Scan(&user)
```

After execution, the user data printed with `g.Dump(user)` looks like this:

```js
{
        "id": 3,
        "name": "name_3",
        "UserDetail": null,
        "UserScores": []
}
```

## 4. Usage Restrictions

### 1. Field Query and Filtering

In our examples above, no specific query fields are set. Still, in the `SQL` logs, you can see that the query statement is not simple `SELECT *`, but specific field queries are executed. Under the `With` feature, queries automatically proceed based on the properties of associated model objects. The attribute names will automatically map to the data table fields, and fields that can't be automatically mapped will be filtered out of the query.

Therefore, under the `With` feature, you cannot only query and assign specific fields to properties. If you need to query and assign only specific fields, it's recommended to tailor your `model` data structure according to business scenarios, creating specific data structures that fit certain business requirements, rather than using a single data structure to satisfy different scenarios.

Let's better illustrate this with an example. Suppose we have an entity object data structure `Content`, a typical `CMS` system content model as follows. The model fields correspond one-to-one with the data table:

```go
type Content struct {
    Id             uint        `orm:"id,primary"       json:"id"`               // Incrementing ID
    Key            string      `orm:"key"              json:"key"`              // Unique key, used for hardcoding, typically not frequently used
    Type           string      `orm:"type"             json:"type"`             // Content model: topic, ask, article, etc., defined specifically by the program
    CategoryId     uint        `orm:"category_id"      json:"category_id"`      // Category ID
    UserId         uint        `orm:"user_id"          json:"user_id"`          // User ID
    Title          string      `orm:"title"            json:"title"`            // Title
    Content        string      `orm:"content"          json:"content"`          // Content
    Sort           uint        `orm:"sort"             json:"sort"`             // Sort order, lower numbers are prioritized, default is the timestamp when added, can be used for pinning
    Brief          string      `orm:"brief"            json:"brief"`            // Summary
    Thumb          string      `orm:"thumb"            json:"thumb"`            // Thumbnail
    Tags           string      `orm:"tags"             json:"tags"`             // Tag names list, stored in JSON
    Referer        string      `orm:"referer"          json:"referer"`          // Content source, like github/gitee
    Status         uint        `orm:"status"           json:"status"`           // Status 0: normal, 1: disabled
    ReplyCount     uint        `orm:"reply_count"      json:"reply_count"`      // Reply count
    ViewCount      uint        `orm:"view_count"       json:"view_count"`       // View count
    ZanCount       uint        `orm:"zan_count"        json:"zan_count"`        // Likes
    CaiCount       uint        `orm:"cai_count"        json:"cai_count"`        // Dislikes
    CreatedAt      *gtime.Time `orm:"created_at"       json:"created_at"`       // Creation time
    UpdatedAt      *gtime.Time `orm:"updated_at"       json:"updated_at"`       // Update time
}
```

The content list page doesn't need such detailed content, especially the `Content` field, which is very large. The list page only requires a few fields. Thus, you can define a separate structure for list returns (field trimming), instead of directly using the entity object data structure for the data table. For instance:

```go
type ContentListItem struct {
    Id         uint        `json:"id"`          // Incrementing ID
    CategoryId uint        `json:"category_id"` // Category ID
    UserId     uint        `json:"user_id"`     // User ID
    Title      string      `json:"title"`       // Title
    CreatedAt  *gtime.Time `json:"created_at"`  // Creation time
    UpdatedAt  *gtime.Time `json:"updated_at"`  // Update time
}
```

### 2. Associated Fields as Attributes

Since the `With` feature is achieved through recognizing data structure associations and handling multiple automatic SQL queries, the associated fields must also exist as attributes of the object to allow the automatic acquisition of these association field values. Simply put, the field in the `with` tag must exist in the associated object as an attribute.

## 5. Recursive Association

If the associated model attribute also contains the `with` tag, recursive association queries will execute. The `With` feature supports infinite levels of recursive association. Here's a reference example:

```go
// User Detail
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}

// User Scores - Core Courses
type UserScoresRequired struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}

// User Scores - Elective Courses
type UserScoresOptional struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}

// User Scores
type UserScores struct {
    g.Meta `orm:"table:user_scores"`
    Id         int                  `json:"id"`
    Uid        int                  `json:"uid"`
    Required   []UserScoresRequired `orm:"with:id, where:type=1"`
    Optional   []UserScoresOptional `orm:"with:id, where:type=2"`
}

// User Information
type User struct {
    g.Meta `orm:"table:user"`
    Id         int           `json:"id"`
    Name       string        `json:"name"`
    UserDetail *UserDetail   `orm:"with:uid=id"`
    UserScores []*UserScores `orm:"with:uid=id"`
}
```

## 6. Model Example

Given the current data tables, here are more model writing examples for your reference.

### 1. Nested Associated Models

```go
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}

type UserScores struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}

type User struct {
    g.Meta  `orm:"table:user"`
    *UserDetail `orm:"with:uid=id"`
    Id          int           `json:"id"`
    Name        string        `json:"name"`
    UserScores  []*UserScores `orm:"with:uid=id"`
}
```

Nested models with struct embeddings support automatic data assignment as well. For example:

```go
type UserDetail struct {
    Uid     int    `json:"uid"`
    Address string `json:"address"`
}

type UserDetailEmbedded struct {
    UserDetail
}

type UserScores struct {
    Id    int `json:"id"`
    Uid   int `json:"uid"`
    Score int `json:"score"`
}

type User struct {
    *UserDetailEmbedded `orm:"with:uid=id"`
    Id                  int           `json:"id"`
    Name                string        `json:"name"`
    UserScores          []*UserScores `orm:"with:uid=id"`
}
```

### 2. Embedded Base Model

```go
type UserDetail struct {
    g.Meta `orm:"table:user_detail"`
    Uid        int    `json:"uid"`
    Address    string `json:"address"`
}

type UserScores struct {
    g.Meta `orm:"table:user_scores"`
    Id         int `json:"id"`
    Uid        int `json:"uid"`
    Score      int `json:"score"`
}

type UserEmbedded struct {
    Id   int    `json:"id"`
    Name string `json:"name"`
}

type User struct {
    g.Meta `orm:"table:user"`
    UserEmbedded
    *UserDetail `orm:"with:uid=id"`
    UserScores  []*UserScores `orm:"with:uid=id"`
}
```

### 3. Model without `meta` Information

The critical part of the `meta` structure in models is specifying the data table name. When there's no `meta` information, the query will automatically use the `CaseSnake` name of the struct. For instance, `UserDetail` will automatically use the data table name `user_detail`, and `UserScores` will use `user_scores`.

```go
type UserDetail struct {
    Uid     int    `json:"uid"`
    Address string `json:"address"`
}

type UserScores struct {
    Id    int `json:"id"`
    Uid   int `json:"uid"`
    Score int `json:"score"`
}

type User struct {
    *UserDetail `orm:"with:uid=id"`
    Id          int           `json:"id"`
    Name        string        `json:"name"`
    UserScores  []*UserScores `orm:"with:uid=id"`
}
```

## 7. Future Improvements

- Currently, the `With` feature has only been implemented for query operations and does not support write or update operations.