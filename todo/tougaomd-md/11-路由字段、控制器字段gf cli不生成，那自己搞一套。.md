---
title: '路由字段、控制器字段gf cli不生成，那自己搞一套。'
sidebar_position: 11
---

由于目前 gf gen dao 命令不会生成 请求结构体和控制器里的结构，因此特意献出一份自己相关操作的稿子，如有更好的方式可在下方评论。

## **1\. 安装GF cli 工具包**

linux 安装

- 项目地址： `https://github.com/gogf/gf/tree/master/cmd/gf`
- 使用方式： `./gf install`

window 安装

- 打开链接 `https://github.com/gogf/gf-cli/releases`
- 下载 ` gf_windows_amd64.exe` 后安装

命令行下 `gf -version` 测试是否安装成功

## **2\. 热重启（可选）**

- 文章链接 自动编译-run

- gf run main.go 热重启，无需手动ctrl+c


## **3\. 安装GF自动生成代码（必要）**

复制以下配置到 manifest\\config\\config.yaml , 账号密码等配置需要手动修改

cli命令下输入 `gf gen dao ` 即可生成底层代码

```
# Database.
database:
  logger:
    level:   "all"
    stdout:  true

  default:
    link:   "mysql:root:123456@tcp(127.0.0.1:3306)/xx_database_name"
    debug:  true

gfcli:
  gen:
    dao:
      - link:     "mysql:root:123456@tcp(127.0.0.1:3306)/xx_database_name"
        tables:   "table_name1,table_name2"
```

```

```

详情请看 数据规范-gen dao(重点)

## **4\. 替换**

### **4.1 替换提示**

打开 `notepat++` `ctrl+f` 选择替换 选择正则表达式 再根据下面规则替换

### **4.2 生成 路由入口结构体（request结构体）**

复制 `model/entity` 层的结构体到Notepad++，字段前面不留任何空格 每个请求入口字段需要根据业务情况自己控制删减

双引号里面才是内容，替换时不需要复制双引号按照顺序执行即可

```
查找目标  “(`json:")(\S+)( +)(`)(//)(.*+)”
替换为 ：“\1\2\3dc:"\6"\4”

查找目标  “[ ]+"”
替换为 ：“"   ”

# 结果演示
#生成前
ProductsId        uint        `json:"productsId"        `// 产品ID
FlowStatus        uint        `json:"flowStatus"        `// 流程状态
SupplierId        uint        `json:"supplierId"        `// 供应商id

# 生成后
ProductsId           uint          `json:"ProductsId"          dc:" 产品ID " `
FlowStatus           uint          `json:"FlowStatus"          dc:" 流程状态 " `
SupplierId           uint          `json:"SupplierId"          dc:" 供应商id " `
```

完成后可添加请求规则

- `v:"required#请输入xxx"`
- `d:"admin" swagger默认值`
- 配置运行后可以在 [http://127.0.0.1:8000/swagger/#](http://127.0.0.1:8000/swagger/) 处理直接调试接口


* * *

### **4.3 生成 控制层调用service层时的代码**

**减少复制黏贴的繁琐**

字段前面不留任何空格 双引号里面才是内容，替换时不需要复制双引号

```
查找目标 ： “( .*)$”
替换为 ： 无

查找目标 ：“(.*)$”
替换为 ：  “\1 : req.\1”

# 结果演示
#生成前
ProductsId  uint  // 产品ID
FlowStatus  uint  // 流程状态

# 生成后
ProductsId : req.ProductsId
FlowStatus : req.FlowStatus
```

```

```