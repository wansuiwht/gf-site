---
title: 'HTTPClient-常见问题'
sidebar_position: 8
hide_title: true
---

## `invalid semicolon separator in query`

**问题原因**：默认 **表单请求** 中带 `;` 字符是非法的（需要 `urlencode`）。

**错误示例**：

```bash
curl localhost:8000/Execute -d '{
	"Component": "mysql",
	"ResourceId": "cdb-gy6hm0ee",
	"Port": 6379,
	"SQL": "show databases;",
	"UserName": "root",
	"Password": ""
}'
```

**修复示例**：

提交请求的时候需要注明 `ContentType`，例如这里应当标明是 `JSON` 请求。

```bash
curl -X POST -H "Content-Type: application/json" localhost:8000/Execute -d '{
	"Component": "mysql",
	"ResourceId": "cdb-gy6hm0ee",
	"Port": 6379,
	"SQL": "show databases;",
	"UserName": "root",
	"Password": ""
}'
```