# gf-site

## 本地运行

```shell
# 安装依赖
yarn

# 添加依赖（举例）
yarn add @docusaurus/theme-classic

# 运行
yarn run start

# 构建
yarn run build
```

## 多语言

```shell
# 多语言文档路径
https://docusaurus.io/docs/i18n/introduction#translation-files-location
https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#i18n

mkdir -p i18n/en/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/en/docusaurus-plugin-content-docs/current

mkdir -p i18n/en/docusaurus-plugin-content-docs-quick/current
cp -r quick/** i18n/en/docusaurus-plugin-content-docs-quick/current

# 创建多语言元数据
yarn run write-translations --locale en

# 指定i18n语言运行
yarn run start --locale en

```


## 多版本

创建新版本
```bash
yarn run docusaurus docs:version v2.7.x
```


## 评论设置

文档 https://rikublock.dev/docs/tutorials/giscus-integration/

```shell
# 因为插入的位置不同，我们使用 swizzle DocItem/Paginator来修改
yarn run swizzle @docusaurus/theme-classic DocItem/Paginator --wrap --typescript
```
