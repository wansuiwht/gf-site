---
title: '关于gmap IteratorDescFrom内部无限循环问题'
sidebar_position: 13
---

在到index到199的时候会在IteratorDescFrom里面无限循环

下面是具体代码

```
    maps := gmap.NewTreeMap(func(v1, v2 interface{}) int {
		return int(v1.(int64) - v2.(int64))
	})
	ticker := time.NewTicker(time.Millisecond * 100).C
	var index int64 = 1
	var index1 int64 = 0
	var delIndex int64 = 0
	for {
		select {
		case <-ticker:
			index += 2
			index1 += 2
			maps.Set(index, index)
			maps.Set(index1, index1)
			g.Log().Debug("当前index", index)
			if maps.Size() > 100 {
				delIndex *= 2
			} else {
				delIndex += 1
			}
			tmpRemoveKey := make([]interface{}, 0)
			maps.IteratorDescFrom(delIndex, true, func(key, value interface{}) bool {
				if key.(int64) < delIndex {
					tmpRemoveKey = append(tmpRemoveKey, key)
				}
				return true
			})
			g.Log().Debug("删除长度", len(tmpRemoveKey))
			maps.Removes(tmpRemoveKey)
		}
	}
```