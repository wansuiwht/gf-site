---
slug: '/quick/scaffold-api-sql'
title: 'Step1 - 设计数据表'
hide_title: true
sidebar_position: 0
---


我们先定义一个数据表，以下是本章节示例会用到的数据表`SQL`文件：

```sql
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT 'user id',
  `name` varchar(45) DEFAULT NULL COMMENT 'user name',
  `status` tinyint DEFAULT NULL COMMENT 'user status',
  `age` tinyint unsigned DEFAULT NULL COMMENT 'user age',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

