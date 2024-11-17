
`GoFrame`官网源码。

## 本地运行

```shell
# 安装依赖
yarn

# 添加依赖（举例）
yarn add @docusaurus/theme-classic

# 运行
yarn start

# 构建
yarn build
```

## 教程贡献

Step1: 教程的markdown文件请提交到`docs/course`目录下，每个教程使用单独的目录管理。

Step2: 在`docusaurus.config.ts`配置文件中添加顶部菜单。

Step3: 在`sidebars.ts`配置文件中的`courseSidebar`配置项中添加侧边栏菜单，参考已有配置。

Step4: 本地执行`yarn start`查看效果，并调整样式，直到满意后提交`PR`。




## 多语言

```shell
# 多语言文档路径
https://docusaurus.io/docs/i18n/introduction#translation-files-location
https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#i18n

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
