---
title: '缓存管理-Redis缓存'
sidebar_position: 2
hide_title: true
---

## 基本介绍

缓存组件同时提供了 `gcache` 的 `Redis` 缓存适配实现。 `Redis` 缓存在多节点保证缓存的数据一致性时非常有用，特别是 `Session` 共享、数据库查询缓存等场景中。

## 使用示例

```go
func ExampleCache_SetAdapter() {
    var (
        err         error
        ctx         = gctx.New()
        cache       = gcache.New()
        redisConfig = &gredis.Config{
            Address: "127.0.0.1:6379",
            Db:      9,
        }
        cacheKey   = `key`
        cacheValue = `value`
    )
    // Create redis client object.
    redis, err := gredis.New(redisConfig)
    if err != nil {
        panic(err)
    }
    // Create redis cache adapter and set it to cache object.
    cache.SetAdapter(gcache.NewAdapterRedis(redis))

    // Set and Get using cache object.
    err = cache.Set(ctx, cacheKey, cacheValue, time.Second)
    if err != nil {
        panic(err)
    }
    fmt.Println(cache.MustGet(ctx, cacheKey).String())

    // Get using redis client.
    fmt.Println(redis.MustDo(ctx, "GET", cacheKey).String())

    // Output:
    // value
    // value
}
```