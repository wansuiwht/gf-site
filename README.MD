# gfdoc-md

https://www.hailaz.cn/gfdoc-md/

<https://docusaurus.io/zh-CN/docs>

## docs 文档下载方式

```shell
# 先安装工具
go install github.com/hailaz/doc2pdf/cmd/doc2pdf@latest
# 运行下载
doc2pdf gf -m=md
# 复制生成的文件到docs和static
cp -r -f output/goframe-latest-md/* docs/
cp -r -f output/goframe-latest-md-static/* static/

# windows
# xcopy /s /y A\* B\

```

## 本地运行

```shell
# 安装依赖
npm ci

# 运行
npm run start

# 构建
npm run build
```

## 代码块支持语言

https://prismjs.com/#supported-languages

https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks

## 建设

### 第一版：

1. 搞几个我截图上面的栏目 **(done)**
2. 把仓库独立出来使用 md 维护 **(done)**
3. 首页也独立出来 **(done)**
4. 改进下搜索，感觉使用 docusaurus.官方推荐的搜索组件比较好
   后面再优化自定义样式

单独的页面在[src\pages](src\pages\index.md)目录下维护

#### 拆分文档功能

1. 按渐进式和查阅式把栏目分离
- 【渐进式】
  - 【快速开始】
    - 【项目开发】等等
- 【查阅式】
  - 【常见问题】
  - 【开发文档】
    - 【模块文档】
    - 【开发工具】
    - 【WEB开发】等等
  - 【版本发布】
  - 【技术交流】
    - 【交流群】
    - 【框架设计】
    - 【常用资料】
    - 【使用案例】
  - 【支持我们】
    - 【来杯咖啡】
    - 【加入我们】