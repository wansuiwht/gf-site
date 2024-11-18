"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["41007"],{246825:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>a,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E","title":"ORM\u4F7F\u7528\u914D\u7F6E","description":"\u914D\u7F6E\u6587\u4EF6","source":"@site/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E.md","sourceDirName":"\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM","slug":"/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u4F7F\u7528\u914D\u7F6E.md","tags":[],"version":"2.5.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u4F7F\u7528\u914D\u7F6E","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636E\u5E93ORM","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/"},"next":{"title":"ORM\u94FE\u5F0F\u64CD\u4F5C(\uD83D\uDD25\u91CD\u70B9\uD83D\uDD25)","permalink":"/2.5.x/\u6838\u5FC3\u7EC4\u4EF6/\u6570\u636E\u5E93ORM/ORM\u94FE\u5F0F\u64CD\u4F5C/"}}'),d=s("785893"),i=s("250065");let l={title:"ORM\u4F7F\u7528\u914D\u7F6E",sidebar_position:0,hide_title:!0},t=void 0,c={},o=[{value:"\u914D\u7F6E\u6587\u4EF6",id:"\u914D\u7F6E\u6587\u4EF6",level:2},{value:"\u7B80\u5355\u914D\u7F6E",id:"\u7B80\u5355\u914D\u7F6E",level:3},{value:"\u5B8C\u6574\u914D\u7F6E",id:"\u5B8C\u6574\u914D\u7F6E",level:3},{value:"\u96C6\u7FA4\u6A21\u5F0F",id:"\u96C6\u7FA4\u6A21\u5F0F",level:3},{value:"\u65E5\u5FD7\u914D\u7F6E",id:"\u65E5\u5FD7\u914D\u7F6E",level:3},{value:"\u539F\u751F\u914D\u7F6E(\u9AD8\u9636\uFF0C\u53EF\u9009)",id:"\u539F\u751F\u914D\u7F6E\u9AD8\u9636\u53EF\u9009",level:2},{value:"\u6570\u636E\u7ED3\u6784",id:"\u6570\u636E\u7ED3\u6784",level:3},{value:"\u914D\u7F6E\u65B9\u6CD5",id:"\u914D\u7F6E\u65B9\u6CD5",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2},{value:"\u5982\u4F55\u5B9E\u73B0\u6570\u636E\u5E93\u8D26\u53F7\u5BC6\u7801\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6",id:"\u5982\u4F55\u5B9E\u73B0\u6570\u636E\u5E93\u8D26\u53F7\u5BC6\u7801\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6",level:3}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"\u914D\u7F6E\u6587\u4EF6",children:"\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,d.jsxs)(n.p,{children:["\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u7EC4\u4EF6\u6765\u7BA1\u7406\u6570\u636E\u5E93\u914D\u7F6E\uFF0C\u5E76\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"g"})," \u5BF9\u8C61\u7BA1\u7406\u6A21\u5757\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:'g.DB("\u6570\u636E\u5E93\u5206\u7EC4\u540D\u79F0")'})," \u65B9\u6CD5\u83B7\u53D6\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u6570\u636E\u5E93\u5BF9\u8C61\u5C06\u4F1A\u81EA\u52A8\u8BFB\u53D6\u914D\u7F6E\u7EC4\u4EF6\u4E2D\u7684\u76F8\u5E94\u914D\u7F6E\u9879\uFF0C\u5E76\u81EA\u52A8\u521D\u59CB\u5316\u8BE5\u6570\u636E\u5E93\u64CD\u4F5C\u7684\u5355\u4F8B\u5BF9\u8C61\u3002\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\u4F7F\u7528\u7684\u662F\u914D\u7F6E\u7BA1\u7406\u7EC4\u4EF6\u5B9E\u73B0\uFF08\u914D\u7F6E\u7EC4\u4EF6\u91C7\u7528\u63A5\u53E3\u5316\u8BBE\u8BA1\u9ED8\u8BA4\u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u5B9E\u73B0\uFF09\uFF0C\u540C\u6837\u652F\u6301\u591A\u79CD\u6570\u636E\u683C\u5F0F\u5982\uFF1A ",(0,d.jsx)(n.code,{children:"toml/yaml/json/xml/ini/properties"}),"\u3002\u9ED8\u8BA4\u5E76\u4E14\u63A8\u8350\u7684\u914D\u7F6E\u6587\u4EF6\u6570\u636E\u683C\u5F0F\u4E3A ",(0,d.jsx)(n.code,{children:"yaml"}),"\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u7B80\u5355\u914D\u7F6E",children:"\u7B80\u5355\u914D\u7F6E"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ECE ",(0,d.jsx)(n.code,{children:"v2.2.0"})," \u7248\u672C\u5F00\u59CB\uFF0C\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:"link"})," \u8FDB\u884C\u6570\u636E\u5E93\u914D\u7F6E\u65F6\uFF0C\u6570\u636E\u5E93\u7EC4\u4EF6\u7EDF\u4E00\u4E86\u4E0D\u540C\u6570\u636E\u5E93\u7C7B\u578B\u7684\u914D\u7F6E\u683C\u5F0F\uFF0C\u4EE5\u7B80\u5316\u914D\u7F6E\u7BA1\u7406\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u7B80\u5316\u914D\u7F6E\u901A\u8FC7\u914D\u7F6E\u9879 ",(0,d.jsx)(n.code,{children:"link"})," \u6307\u5B9A\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"type:username:password@protocol(address)[/dbname][?param1=value1&...&paramN=valueN]\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5373\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:"\u7C7B\u578B:\u8D26\u53F7:\u5BC6\u7801@\u534F\u8BAE(\u5730\u5740)/\u6570\u636E\u5E93\u540D\u79F0?\u7279\u6027\u914D\u7F6E\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5176\u4E2D\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u6570\u636E\u5E93\u540D\u79F0"})," \u53CA ",(0,d.jsx)(n.strong,{children:"\u7279\u6027\u914D\u7F6E"})," \u4E3A\u975E\u5FC5\u987B\u53C2\u6570\uFF0C\u5176\u4ED6\u53C2\u6570\u4E3A\u5FC5\u987B\u53C2\u6570\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u534F\u8BAE"})," \u53EF\u9009\u914D\u7F6E\u4E3A\uFF1A ",(0,d.jsx)(n.code,{children:"tcp/udp/file"}),"\uFF0C\u5E38\u89C1\u914D\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"tcp"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7279\u6027\u914D\u7F6E"})," \u6839\u636E\u4E0D\u540C\u7684\u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u7531\u5176\u5E95\u5C42\u5B9E\u73B0\u7684\u7B2C\u4E09\u65B9\u9A71\u52A8\u5B9A\u4E49\uFF0C\u5177\u4F53\u9700\u8981\u53C2\u8003\u7B2C\u4E09\u65B9\u9A71\u52A8\u5B98\u7F51\u3002\u4F8B\u5982\uFF0C\u9488\u5BF9 ",(0,d.jsx)(n.code,{children:"mysql"})," \u9A71\u52A8\u800C\u8A00\uFF0C\u4F7F\u7528\u7684\u7B2C\u4E09\u65B9\u9A71\u52A8\u4E3A\uFF1A ",(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"https://github.com/go-sql-driver/mysql"}),"\xa0\u652F\u6301\u7684\u7279\u6027\u914D\u7F6E\u5982 ",(0,d.jsx)(n.code,{children:"multiStatements"})," \u548C ",(0,d.jsx)(n.code,{children:"loc"})," \u7B49\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:'database:\n  default:\n    link:  "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n  user:\n    link:  "sqlite::@file(/var/data/db.sqlite3)"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u5BF9\u5E94\u7684 ",(0,d.jsx)(n.code,{children:"link"})," \u793A\u4F8B\u5982\u4E0B:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u7C7B\u578B"}),(0,d.jsx)(n.th,{children:"link\u793A\u4F8B"}),(0,d.jsx)(n.th,{children:"extra\u53C2\u6570"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mysql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mysql:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mariadb"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mariadb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"tidb"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"tidb:root:12345678@tcp(127.0.0.1:3306)/test?loc=Local&parseTime=true"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"pgsql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"pgsql:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/lib/pq",children:"pq"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mssql"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mssql:root:12345678@tcp(127.0.0.1:1433)/test?encrypt=disable"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/denisenkom/go-mssqldb",children:"go-mssqldb"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sqlite"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sqlite::@file(/var/data/db.sqlite3)\xa0 (\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5982: db.sqlite3)"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/mattn/go-sqlite3",children:"go-sqlite3"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oracle"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"oracle:root:12345678@tcp(127.0.0.1:5432)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/mattn/go-oci8",children:"go-oci8"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"clickhouse"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"clickhouse:root:12345678@tcp(127.0.0.1:9000)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-go",children:"clickhouse-go"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dm"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"dm:root:12345678@tcp(127.0.0.1:5236)/test"})}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://gitee.com/chunanyong/dm",children:"dm"})})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["\u6846\u67B6\u652F\u6301\u7684\u6570\u636E\u5E93\u7C7B\u578B\u8BF7\u53C2\u8003\uFF1A ",(0,d.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/contrib/drivers",children:"https://github.com/gogf/gf/tree/master/contrib/drivers"})]}),"\n",(0,d.jsx)(n.h3,{id:"\u5B8C\u6574\u914D\u7F6E",children:"\u5B8C\u6574\u914D\u7F6E"}),"\n",(0,d.jsxs)(n.p,{children:["\u5B8C\u6574\u7684 ",(0,d.jsx)(n.code,{children:"config.yaml"})," \u6570\u636E\u5E93\u914D\u7F6E\u9879\u7684\u6570\u636E\u683C\u5F0F\u5F62\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:'database:\n  \u5206\u7EC4\u540D\u79F0:\n    host:                  "\u5730\u5740"\n    port:                  "\u7AEF\u53E3"\n    user:                  "\u8D26\u53F7"\n    pass:                  "\u5BC6\u7801"\n    name:                  "\u6570\u636E\u5E93\u540D\u79F0"\n    type:                  "\u6570\u636E\u5E93\u7C7B\u578B(\u5982\uFF1Amariadb/tidb/mysql/pgsql/mssql/sqlite/oracle/clickhouse/dm)"\n    link:                  "(\u53EF\u9009)\u81EA\u5B9A\u4E49\u6570\u636E\u5E93\u94FE\u63A5\u4FE1\u606F\uFF0C\u5F53\u8BE5\u5B57\u6BB5\u88AB\u8BBE\u7F6E\u503C\u65F6\uFF0C\u4EE5\u4E0A\u94FE\u63A5\u5B57\u6BB5(Host,Port,User,Pass,Name)\u5C06\u5931\u6548\uFF0C\u4F46\u662Ftype\u5FC5\u987B\u6709\u503C"\n    extra:                 "(\u53EF\u9009)\u4E0D\u540C\u6570\u636E\u5E93\u7684\u989D\u5916\u7279\u6027\u914D\u7F6E\uFF0C\u7531\u5E95\u5C42\u6570\u636E\u5E93driver\u5B9A\u4E49"\n    role:                  "(\u53EF\u9009)\u6570\u636E\u5E93\u4E3B\u4ECE\u89D2\u8272(master/slave)\uFF0C\u4E0D\u4F7F\u7528\u5E94\u7528\u5C42\u7684\u4E3B\u4ECE\u673A\u5236\u8BF7\u5747\u8BBE\u7F6E\u4E3Amaster"\n    debug:                 "(\u53EF\u9009)\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F"\n    prefix:                "(\u53EF\u9009)\u8868\u540D\u524D\u7F00"\n    dryRun:                "(\u53EF\u9009)ORM\u7A7A\u8DD1(\u53EA\u8BFB\u4E0D\u5199)"\n    charset:               "(\u53EF\u9009)\u6570\u636E\u5E93\u7F16\u7801(\u5982: utf8/gbk/gb2312)\uFF0C\u4E00\u822C\u8BBE\u7F6E\u4E3Autf8"\n    protocol:              "(\u53EF\u9009)\u6570\u636E\u5E93\u8FDE\u63A5\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3ATCP"\n    weight:                "(\u53EF\u9009)\u8D1F\u8F7D\u5747\u8861\u6743\u91CD\uFF0C\u7528\u4E8E\u8D1F\u8F7D\u5747\u8861\u63A7\u5236\uFF0C\u4E0D\u4F7F\u7528\u5E94\u7528\u5C42\u7684\u8D1F\u8F7D\u5747\u8861\u673A\u5236\u8BF7\u7F6E\u7A7A"\n    timezone:              "(\u53EF\u9009)\u65F6\u533A\u914D\u7F6E\uFF0C\u4F8B\u5982:local"\n    namespace:             "(\u53EF\u9009)\u7528\u4EE5\u652F\u6301\u4E2A\u522B\u6570\u636E\u5E93\u670D\u52A1Catalog&Schema\u533A\u5206\u7684\u95EE\u9898\uFF0C\u539F\u6709\u7684Schema\u4EE3\u8868\u6570\u636E\u5E93\u540D\u79F0\uFF0C\u800CNameSpace\u4EE3\u8868\u4E2A\u522B\u6570\u636E\u5E93\u670D\u52A1\u7684Schema"\n    maxIdle:               "(\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u95F2\u7F6E\u7684\u8FDE\u63A5\u6570"\n    maxOpen:               "(\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u6253\u5F00\u7684\u8FDE\u63A5\u6570"\n    maxLifetime:           "(\u53EF\u9009)\u8FDE\u63A5\u5BF9\u8C61\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u65F6\u95F4\u957F\u5EA6"\n    queryTimeout:          "(\u53EF\u9009)\u67E5\u8BE2\u8BED\u53E5\u8D85\u65F6\u65F6\u957F"\n    execTimeout:           "(\u53EF\u9009)\u5199\u5165\u8BED\u53E5\u8D85\u65F6\u65F6\u957F"\n    tranTimeout:           "(\u53EF\u9009)\u4E8B\u52A1\u5904\u7406\u8D85\u65F6\u65F6\u957F"\n    prepareTimeout:        "(\u53EF\u9009)\u9884\u51C6\u5907SQL\u8BED\u53E5\u6267\u884C\u8D85\u65F6\u65F6\u957F"\n    createdAt:             "(\u53EF\u9009)\u81EA\u52A8\u521B\u5EFA\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0"\n    updatedAt:             "(\u53EF\u9009)\u81EA\u52A8\u66F4\u65B0\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0"\n    deletedAt:             "(\u53EF\u9009)\u8F6F\u5220\u9664\u65F6\u95F4\u5B57\u6BB5\u540D\u79F0"\n    timeMaintainDisabled:  "(\u53EF\u9009)\u662F\u5426\u5B8C\u5168\u5173\u95ED\u65F6\u95F4\u66F4\u65B0\u7279\u6027\uFF0Ctrue\u65F6CreatedAt/UpdatedAt/DeletedAt\u90FD\u5C06\u5931\u6548"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5B8C\u6574\u7684\u6570\u636E\u5E93\u914D\u7F6E\u9879\u793A\u4F8B( ",(0,d.jsx)(n.code,{children:"YAML"}),")\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:'database:\n  default:\n    host:          "127.0.0.1"\n    port:          "3306"\n    user:          "root"\n    pass:          "12345678"\n    name:          "test"\n    type:          "mysql"\n    extra:         "local=Local&parseTime=true"\n    role:          "master"\n    debug:         "true"\n    dryrun:        0\n    weight:        "100"\n    prefix:        "gf_"\n    charset:       "utf8"\n    timezone:      "local"\n    maxIdle:       "10"\n    maxOpen:       "100"\n    maxLifetime:   "30s"\n     protocol\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F7F\u7528\u8BE5\u914D\u7F6E\u65B9\u5F0F\u65F6\uFF0C\u4E3A\u4FDD\u8BC1\u6570\u636E\u5E93\u5B89\u5168\uFF0C\u9ED8\u8BA4\u5E95\u5C42\u4E0D\u652F\u6301\u591A\u884C ",(0,d.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u6267\u884C\u3002\u4E3A\u4E86\u5F97\u5230\u66F4\u591A\u914D\u7F6E\u9879\u63A7\u5236\uFF0C\u8BF7\u53C2\u8003\u63A8\u8350\u7684\u7B80\u5316\u914D\u7F6E\uFF0C\u540C\u65F6\u5EFA\u8BAE\u60A8\u52A1\u5FC5\u4E86\u89E3\u6E05\u695A\u7B80\u5316\u914D\u7F6E\u9879\u4E2D\u6BCF\u4E2A\u8FDE\u63A5\u53C2\u6570\u7684\u529F\u80FD\u4F5C\u7528\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u96C6\u7FA4\u6A21\u5F0F",children:"\u96C6\u7FA4\u6A21\u5F0F"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u914D\u7F6E\u652F\u6301\u96C6\u7FA4\u6A21\u5F0F\uFF0C\u6570\u636E\u5E93\u914D\u7F6E\u4E2D\u6BCF\u4E00\u9879\u5206\u7EC4\u914D\u7F6E\u5747\u53EF\u4EE5\u662F\u591A\u4E2A\u8282\u70B9\uFF0C\u652F\u6301\u8D1F\u8F7D\u5747\u8861\u6743\u91CD\u7B56\u7565\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:'database:\n  default:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    role: "slave"\n\n  user:\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "master"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n  - link: "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n    role: "slave"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4EE5\u4E0A\u6570\u636E\u5E93\u914D\u7F6E\u793A\u4F8B\u4E2D\u5305\u542B\u4E24\u4E2A\u6570\u636E\u5E93\u5206\u7EC4 ",(0,d.jsx)(n.code,{children:"default"})," \u548C ",(0,d.jsx)(n.code,{children:"user"}),"\uFF0C\u5176\u4E2D ",(0,d.jsx)(n.code,{children:"default"})," \u5206\u7EC4\u5305\u542B\u4E00\u4E3B\u4E00\u4ECE\uFF0C ",(0,d.jsx)(n.code,{children:"user"})," \u5206\u7EC4\u5305\u542B\u4E00\u4E3B\u4E24\u4ECE\u3002\u5728\u4EE3\u7801\u4E2D\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"g.DB()"})," \u548C ",(0,d.jsx)(n.code,{children:'g.DB("user")'})," \u83B7\u53D6\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u5BF9\u8C61\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u65E5\u5FD7\u914D\u7F6E",children:"\u65E5\u5FD7\u914D\u7F6E"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u652F\u6301\u65E5\u5FD7\u8F93\u51FA\uFF0C\u5185\u90E8\u4F7F\u7528\u7684\u662F ",(0,d.jsx)(n.code,{children:"glog.Logger"})," \u5BF9\u8C61\u5B9E\u73B0\u65E5\u5FD7\u7BA1\u7406\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u5BF9\u65E5\u5FD7\u5BF9\u8C61\u8FDB\u884C\u914D\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B ",(0,d.jsx)(n.code,{children:"gdb"})," \u5173\u95ED\u4E86 ",(0,d.jsx)(n.code,{children:"DEBUG"})," \u65E5\u5FD7\u8F93\u51FA\uFF0C\u5982\u679C\u9700\u8981\u6253\u5F00 ",(0,d.jsx)(n.code,{children:"DEBUG"})," \u4FE1\u606F\u9700\u8981\u5C06\u6570\u636E\u5E93\u7684 ",(0,d.jsx)(n.code,{children:"debug"})," \u53C2\u6570\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002\u4EE5\u4E0B\u662F\u4E3A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-yaml",children:'database:\n  logger:\n    path:    "/var/log/gf-app/sql"\n    level:   "all"\n    stdout:  true\n  default:\n    link:    "mysql:root:12345678@tcp(127.0.0.1:3306)/user_center"\n    debug:   true\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,d.jsx)(n.code,{children:"database.logger"})," \u5373\u4E3A ",(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u65E5\u5FD7\u914D\u7F6E\uFF0C\u5F53\u8BE5\u914D\u7F6E\u4E0D\u5B58\u5728\u65F6\uFF0C\u5C06\u4F1A\u4F7F\u7528\u65E5\u5FD7\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6-%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86",children:"\u65E5\u5FD7\u7EC4\u4EF6-\u914D\u7F6E\u7BA1\u7406"})," \u7AE0\u8282\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u54E6\uFF1A\u7531\u4E8E ",(0,d.jsx)(n.code,{children:"ORM"})," \u5E95\u5C42\u90FD\u662F\u91C7\u7528\u5B89\u5168\u7684\u9884\u5904\u7406\u6267\u884C\u65B9\u5F0F\uFF0C\u63D0\u4EA4\u5230\u5E95\u5C42\u7684 ",(0,d.jsx)(n.code,{children:"SQL"})," \u4E0E\u53C2\u6570\u5176\u5B9E\u662F\u5206\u5F00\u7684\uFF0C\u56E0\u6B64\u65E5\u5FD7\u4E2D\u8BB0\u5F55\u7684\u5B8C\u6574 ",(0,d.jsx)(n.code,{children:"SQL"})," \u4EC5\u4F5C\u53C2\u8003\u65B9\u4FBF\u4EBA\u5DE5\u9605\u8BFB\uFF0C\u5E76\u4E0D\u662F\u771F\u6B63\u63D0\u4EA4\u5230\u5E95\u5C42\u7684 ",(0,d.jsx)(n.code,{children:"SQL"})," \u8BED\u53E5\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u539F\u751F\u914D\u7F6E\u9AD8\u9636\u53EF\u9009",children:"\u539F\u751F\u914D\u7F6E(\u9AD8\u9636\uFF0C\u53EF\u9009)"}),"\n",(0,d.jsx)(n.p,{children:"\u4EE5\u4E0B\u4E3A\u6570\u636E\u5E93\u5E95\u5C42\u7BA1\u7406\u914D\u7F6E\u4ECB\u7ECD\uFF0C\u5982\u679C\u60A8\u5BF9\u6570\u636E\u5E93\u7684\u5E95\u5C42\u914D\u7F6E\u7BA1\u7406\u6BD4\u8F83\u611F\u5174\u8DA3\uFF0C\u53EF\u7EE7\u7EED\u9605\u8BFB\u540E\u7EED\u7AE0\u8282\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u6570\u636E\u7ED3\u6784",children:"\u6570\u636E\u7ED3\u6784"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"gdb"})," \u6570\u636E\u5E93\u7BA1\u7406\u6A21\u5757\u7684\u5185\u90E8\u914D\u7F6E\u7BA1\u7406\u6570\u636E\u7ED3\u6784\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ConfigNode"})," \u7528\u4E8E\u5B58\u50A8\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u4FE1\u606F\uFF1B ",(0,d.jsx)(n.code,{children:"ConfigGroup"})," \u7528\u4E8E\u7BA1\u7406\u591A\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u7EC4\u6210\u7684\u914D\u7F6E\u5206\u7EC4(\u4E00\u822C\u4E00\u4E2A\u5206\u7EC4\u5BF9\u5E94\u4E00\u4E2A\u4E1A\u52A1\u6570\u636E\u5E93\u96C6\u7FA4)\uFF1B ",(0,d.jsx)(n.code,{children:"Config"})," \u7528\u4E8E\u7BA1\u7406\u591A\u4E2A ",(0,d.jsx)(n.code,{children:"ConfigGroup"})," \u914D\u7F6E\u5206\u7EC4\u3002"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u914D\u7F6E\u7BA1\u7406\u7279\u70B9\uFF1A"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"\u652F\u6301\u591A\u8282\u70B9\u6570\u636E\u5E93\u96C6\u7FA4\u7BA1\u7406\uFF1B"}),"\n",(0,d.jsx)(n.li,{children:"\u6BCF\u4E2A\u8282\u70B9\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u8FDE\u63A5\u5C5E\u6027\uFF1B"}),"\n",(0,d.jsx)(n.li,{children:"\u91C7\u7528\u5355\u4F8B\u6A21\u5F0F\u7BA1\u7406\u6570\u636E\u5E93\u5B9E\u4F8B\u5316\u5BF9\u8C61\uFF1B"}),"\n",(0,d.jsx)(n.li,{children:"\u652F\u6301\u5BF9\u6570\u636E\u5E93\u96C6\u7FA4\u5206\u7EC4\u7BA1\u7406\uFF0C\u6309\u7167\u5206\u7EC4\u540D\u79F0\u83B7\u53D6\u5B9E\u4F8B\u5316\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\uFF1B"}),"\n",(0,d.jsxs)(n.li,{children:["\u652F\u6301\u591A\u79CD\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7BA1\u7406\uFF0C\u53EF\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Type"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF1B"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652F\u6301 ",(0,d.jsx)(n.code,{children:"Master-Slave"})," \u8BFB\u5199\u5206\u79BB\uFF0C\u53EF\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Role"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF1B"]}),"\n",(0,d.jsxs)(n.li,{children:["\u652F\u6301\u5BA2\u6237\u7AEF\u7684\u8D1F\u8F7D\u5747\u8861\u7BA1\u7406\uFF0C\u53EF\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"ConfigNode.Weight"})," \u5C5E\u6027\u8FDB\u884C\u914D\u7F6E\uFF0C\u503C\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF1B"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"type Config      map[string]ConfigGroup // \u6570\u636E\u5E93\u914D\u7F6E\u5BF9\u8C61\ntype ConfigGroup []ConfigNode           // \u6570\u636E\u5E93\u5206\u7EC4\u914D\u7F6E\n// \u6570\u636E\u5E93\u914D\u7F6E\u9879(\u4E00\u4E2A\u5206\u7EC4\u914D\u7F6E\u5BF9\u5E94\u591A\u4E2A\u914D\u7F6E\u9879)\ntype ConfigNode  struct {\n    Host             string        // \u5730\u5740\n    Port             string        // \u7AEF\u53E3\n    User             string        // \u8D26\u53F7\n    Pass             string        // \u5BC6\u7801\n    Name             string        // \u6570\u636E\u5E93\u540D\u79F0\n    Type             string        // \u6570\u636E\u5E93\u7C7B\u578B\uFF1Amysql, sqlite, mssql, pgsql, oracle\n    Link             string        // (\u53EF\u9009)\u81EA\u5B9A\u4E49\u94FE\u63A5\u4FE1\u606F\uFF0C\u5F53\u8BE5\u5B57\u6BB5\u88AB\u8BBE\u7F6E\u503C\u65F6\uFF0C\u4EE5\u4E0A\u94FE\u63A5\u5B57\u6BB5(Host,Port,User,Pass,Name)\u5C06\u5931\u6548(\u8BE5\u5B57\u6BB5\u662F\u4E00\u4E2A\u6269\u5C55\u529F\u80FD)\n    Extra            string        // (\u53EF\u9009)\u4E0D\u540C\u6570\u636E\u5E93\u7684\u989D\u5916\u7279\u6027\u914D\u7F6E\uFF0C\u7531\u5E95\u5C42\u6570\u636E\u5E93driver\u5B9A\u4E49\n    Role             string        // (\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3Amaster)\u6570\u636E\u5E93\u7684\u89D2\u8272\uFF0C\u7528\u4E8E\u4E3B\u4ECE\u64CD\u4F5C\u5206\u79BB\uFF0C\u81F3\u5C11\u9700\u8981\u6709\u4E00\u4E2Amaster\uFF0C\u53C2\u6570\u503C\uFF1Amaster, slave\n    Debug            bool          // (\u53EF\u9009)\u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F\n    Charset          string        // (\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A utf8)\u7F16\u7801\uFF0C\u9ED8\u8BA4\u4E3A utf8\n    Prefix           string        // (\u53EF\u9009)\u8868\u540D\u524D\u7F00\n    Weight           int           // (\u53EF\u9009)\u7528\u4E8E\u8D1F\u8F7D\u5747\u8861\u7684\u6743\u91CD\u8BA1\u7B97\uFF0C\u5F53\u96C6\u7FA4\u4E2D\u53EA\u6709\u4E00\u4E2A\u8282\u70B9\u65F6\uFF0C\u6743\u91CD\u6CA1\u6709\u4EFB\u4F55\u610F\u4E49\n    MaxIdleConnCount int           // (\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u95F2\u7F6E\u7684\u8FDE\u63A5\u6570\n    MaxOpenConnCount int           // (\u53EF\u9009)\u8FDE\u63A5\u6C60\u6700\u5927\u6253\u5F00\u7684\u8FDE\u63A5\u6570\n    MaxConnLifetime  time.Duration // (\u53EF\u9009\uFF0C\u5355\u4F4D\u79D2)\u8FDE\u63A5\u5BF9\u8C61\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u65F6\u95F4\u957F\u5EA6\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u7279\u522B\u8BF4\u660E\uFF0C ",(0,d.jsx)(n.code,{children:"gdb"})," \u7684\u914D\u7F6E\u7BA1\u7406\u6700\u5927\u7684 ",(0,d.jsx)(n.strong,{children:"\u7279\u70B9"})," \u662F\uFF0C\uFF08\u540C\u4E00\u8FDB\u7A0B\u4E2D\uFF09\u6240\u6709\u7684\u6570\u636E\u5E93\u96C6\u7FA4\u4FE1\u606F\u90FD\u4F7F\u7528\u540C\u4E00\u4E2A\u914D\u7F6E\u7BA1\u7406\u6A21\u5757\u8FDB\u884C\u7EDF\u4E00\u7EF4\u62A4\uFF0C ",(0,d.jsx)(n.strong,{children:"\u4E0D\u540C\u4E1A\u52A1\u7684\u6570\u636E\u5E93\u96C6\u7FA4\u914D\u7F6E\u4F7F\u7528\u4E0D\u540C\u7684\u5206\u7EC4\u540D\u79F0"})," \u8FDB\u884C\u914D\u7F6E\u548C\u83B7\u53D6\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u914D\u7F6E\u65B9\u6CD5",children:"\u914D\u7F6E\u65B9\u6CD5"}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u662F\u539F\u751F\u8C03\u7528 ",(0,d.jsx)(n.code,{children:"gdb"})," \u6A21\u5757\u6765\u914D\u7F6E\u7BA1\u7406\u6570\u636E\u5E93\u3002\u5982\u679C\u5F00\u53D1\u8005\u60F3\u8981\u81EA\u884C\u63A7\u5236\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u65B9\u6CD5\u3002\u82E5\u65E0\u9700\u8981\u53EF\u5FFD\u7565\u8BE5\u7AE0\u8282\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u63A5\u53E3\u6587\u6863\uFF1A ",(0,d.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb",children:"https://pkg.go.dev/github.com/gogf/gf/v2/database/gdb"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:"// \u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u5230\u6307\u5B9A\u7684\u5206\u7EC4\u4E2D\nfunc AddConfigNode(group string, node ConfigNode)\n// \u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u5206\u7EC4\u5230\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u4E2D(\u540C\u540D\u8986\u76D6)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// \u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\u5E93\u8282\u70B9\u5230\u9ED8\u8BA4\u7684\u5206\u7EC4\u4E2D(\u9ED8\u8BA4\u4E3Adefault\uFF0C\u53EF\u4FEE\u6539)\nfunc AddDefaultConfigNode(node ConfigNode)\n// \u6DFB\u52A0\u4E00\u4E2A\u914D\u7F6E\u5206\u7EC4\u5230\u6570\u636E\u5E93\u914D\u7F6E\u7BA1\u7406\u4E2D(\u9ED8\u8BA4\u5206\u7EC4\u4E3Adefault\uFF0C\u53EF\u4FEE\u6539)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u5206\u7EC4\u540D\u79F0\uFF0C\u83B7\u53D6\u9ED8\u8BA4\u6570\u636E\u5E93\u5BF9\u8C61\u65F6\u5C06\u4F1A\u81EA\u52A8\u8BFB\u53D6\u8BE5\u5206\u7EC4\u914D\u7F6E\nfunc SetDefaultGroup(groupName string)\n\n// \u8BBE\u7F6E\u6570\u636E\u5E93\u914D\u7F6E\u4E3A\u5B9A\u4E49\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u4F1A\u5C06\u539F\u6709\u914D\u7F6E\u8986\u76D6\nfunc SetConfig(c Config)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u9ED8\u8BA4\u5206\u7EC4\u8868\u793A\uFF0C\u5982\u679C\u83B7\u53D6\u6570\u636E\u5E93\u5BF9\u8C61\u65F6\u4E0D\u6307\u5B9A\u914D\u7F6E\u5206\u7EC4\u540D\u79F0\uFF0C\u90A3\u4E48 ",(0,d.jsx)(n.code,{children:"gdb"})," \u9ED8\u8BA4\u8BFB\u53D6\u7684\u914D\u7F6E\u5206\u7EC4\u3002\u4F8B\u5982\uFF1A ",(0,d.jsx)(n.code,{children:"gdb.NewByGroup()"})," \u53EF\u83B7\u53D6\u4E00\u4E2A\u9ED8\u8BA4\u5206\u7EC4\u7684\u6570\u636E\u5E93\u5BF9\u8C61\u3002\u7B80\u5355\u7684\u505A\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"gdb"})," \u5305\u7684 ",(0,d.jsx)(n.code,{children:"SetConfig"})," \u914D\u7F6E\u7BA1\u7406\u65B9\u6CD5\u8FDB\u884C\u81EA\u5B9A\u4E49\u7684\u6570\u636E\u5E93\u5168\u5C40\u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u968F\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 ",(0,d.jsx)(n.code,{children:'gdb.NewByGroup("\u6570\u636E\u5E93\u5206\u7EC4\u540D\u79F0")'})," \u6765\u83B7\u53D6\u4E00\u4E2A\u6570\u636E\u5E93\u64CD\u4F5C\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u7528\u4E8E\u540E\u7EED\u7684\u6570\u636E\u5E93\u4E00\u7CFB\u5217\u65B9\u6CD5/\u94FE\u5F0F\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,d.jsx)(n.h3,{id:"\u5982\u4F55\u5B9E\u73B0\u6570\u636E\u5E93\u8D26\u53F7\u5BC6\u7801\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6",children:"\u5982\u4F55\u5B9E\u73B0\u6570\u636E\u5E93\u8D26\u53F7\u5BC6\u7801\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u7684\u8D26\u53F7\u5BC6\u7801\u65E0\u6CD5\u660E\u6587\u914D\u7F6E\u5230\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u9700\u8981\u8FDB\u884C\u4E00\u5B9A\u7684\u52A0\u5BC6\u3002\u5728\u8FDE\u63A5\u6570\u636E\u5E93\u7684\u65F6\u5019\uFF0C\u518D\u5BF9\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u5BC6\u7684\u5B57\u6BB5\u8FDB\u884C\u89E3\u5BC6\u5904\u7406\u3002\u8FD9\u79CD\u9700\u6C42\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 ",(0,d.jsx)(n.code,{children:"Driver"})," \u6765\u5B9E\u73B0\uFF08\u5173\u4E8E ",(0,d.jsx)(n.code,{children:"Driver"})," \u7684\u8BE6\u7EC6\u4ECB\u7ECD\u8BF7\u53C2\u8003\u7AE0\u8282\uFF1A ",(0,d.jsx)(n.a,{href:"/2.5.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E6%8E%A5%E5%8F%A3%E5%BC%80%E5%8F%91/",children:"ORM\u63A5\u53E3\u5F00\u53D1"}),"\uFF09\u3002\u4EE5 ",(0,d.jsx)(n.code,{children:"mysql"})," \u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u7F16\u5199\u4E00\u4E2A ",(0,d.jsx)(n.code,{children:"Driver"}),"\uFF0C\u5305\u88F9\u6846\u67B6\u793E\u533A\u7EC4\u4EF6\u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"mysql driver"}),"\uFF0C\u5E76\u4E14\u8986\u76D6\u5B83\u7684 ",(0,d.jsx)(n.code,{children:"Open"})," \u65B9\u6CD5\u5373\u53EF\u3002\u4EE3\u7801\u793A\u4F8B\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-go",children:'import (\n    "database/sql"\n\n    "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n)\n\ntype MyBizDriver struct {\n    mysql.Driver\n}\n\n// Open creates and returns an underlying sql.DB object for mysql.\n// Note that it converts time.Time argument to local timezone in default.\nfunc (d *MyBizDriver) Open(config *gdb.ConfigNode) (db *sql.DB, err error) {\n    config.User = d.decode(config.User)\n    config.Pass = d.decode(config.Pass)\n    return d.Driver.Open(config)\n}\n\nfunc (d *MyBizDriver) decode(s string) string {\n    // \u6267\u884C\u5B57\u6BB5\u89E3\u5BC6\u5904\u7406\u903B\u8F91\n    // ...\n    return s\n}\n'})})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return l}});var r=s(667294);let d={},i=r.createContext(d);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);