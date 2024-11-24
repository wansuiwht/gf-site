---
slug: '/docs/components/container-gring'
title: 'Concurrent Safe Ring - gring'
sidebar_position: 9
hide_title: true
keywords: [GoFrame, GoFrame Framework, Concurrent Safety, Ring Structure, Ring, Circular Doubly Linked List, Buffer Control, Concurrent Lock, gring, Chained Operation]
description: "The usage of concurrent safe ring structure gring in the GoFrame framework. This data structure is suitable for scenarios requiring a fixed size, such as concurrent lock control and buffer control. The article provides a Introduction to Gring, its scenarios and usage, along with related interface documentation and links."
---

## Introduction

A ring structure supporting concurrent safety switch, circular doubly linked list.

**Usage Scenarios**:

The `ring` data structure is more commonly used in lower-level development, such as concurrent lock control and buffer control. The characteristic of a `ring` is that it must have a fixed size. When you continuously append data to the `ring`, if the data size exceeds the capacity, the new value will overwrite the old value.

**Usage**:

```go
import "github.com/gogf/gf/v2/container/gring"
```

**Interface Documentation**:

[https://pkg.go.dev/github.com/gogf/gf/v2/container/gring](https://pkg.go.dev/github.com/gogf/gf/v2/container/gring)

> `gring` supports chained operations.

## Related Documentation

import DocCardList from '@theme/DocCardList';

<DocCardList />