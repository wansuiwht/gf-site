"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["839"],{832825:function(e,d,n){n.r(d),n.d(d,{metadata:()=>s,contentTitle:()=>t,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u89C4\u8303-gen dao","title":"\u6570\u636E\u89C4\u8303-gen dao","description":"GoFrame\u6846\u67B6\u4E2Dgen dao\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E\u53C2\u6570\u914D\u7F6E\u3002gen dao\u547D\u4EE4\u662F\u751F\u6210\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u3001\u6570\u636E\u8F6C\u5316\u6A21\u578B\u53CA\u5B9E\u4F53\u6570\u636E\u6A21\u578B\u7684\u5173\u952E\u5DE5\u5177\uFF0C\u652F\u6301\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u548C\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u914D\u7F6E\uFF0C\u9002\u7528\u4E8E\u591A\u79CD\u6570\u636E\u5E93\u7C7B\u578B\u3002\u901A\u8FC7\u5BF9\u547D\u4EE4\u9009\u9879\u7684\u7075\u6D3B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u9879\u76EE\u7684\u4EE3\u7801\u751F\u6210\u9700\u6C42\uFF0C\u786E\u4FDD\u5DE5\u7A0B\u8BBE\u8BA1\u89C4\u8303\u7684\u843D\u5730\u6267\u884C\u3002","source":"@site/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u89C4\u8303-gen dao.md","sourceDirName":"docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen","slug":"/docs/cli/gen-dao","permalink":"/docs/cli/gen-dao","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u5F00\u53D1\u5DE5\u5177/\u4EE3\u7801\u751F\u6210-gen/\u6570\u636E\u89C4\u8303-gen dao.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731680613000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/cli/gen-dao","title":"\u6570\u636E\u89C4\u8303-gen dao","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","gen dao","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","\u6570\u636E\u8F6C\u5316\u6A21\u578B","Go\u4EE3\u7801\u751F\u6210","\u914D\u7F6E\u6587\u4EF6\u7BA1\u7406","\u547D\u4EE4\u884C\u5DE5\u5177","\u6570\u636E\u5E93\u8FDE\u63A5","ORM\u914D\u7F6E","\u9879\u76EE\u5DE5\u7A0B\u89C4\u8303"],"description":"GoFrame\u6846\u67B6\u4E2Dgen dao\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E\u53C2\u6570\u914D\u7F6E\u3002gen dao\u547D\u4EE4\u662F\u751F\u6210\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u3001\u6570\u636E\u8F6C\u5316\u6A21\u578B\u53CA\u5B9E\u4F53\u6570\u636E\u6A21\u578B\u7684\u5173\u952E\u5DE5\u5177\uFF0C\u652F\u6301\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u548C\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u914D\u7F6E\uFF0C\u9002\u7528\u4E8E\u591A\u79CD\u6570\u636E\u5E93\u7C7B\u578B\u3002\u901A\u8FC7\u5BF9\u547D\u4EE4\u9009\u9879\u7684\u7075\u6D3B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u9879\u76EE\u7684\u4EE3\u7801\u751F\u6210\u9700\u6C42\uFF0C\u786E\u4FDD\u5DE5\u7A0B\u8BBE\u8BA1\u89C4\u8303\u7684\u843D\u5730\u6267\u884C\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u63A5\u53E3\u89C4\u8303-gen ctrl","permalink":"/docs/cli/gen-ctrl"},"next":{"title":"\u6A21\u5757\u89C4\u8303-gen service","permalink":"/docs/cli/gen-service"}}'),i=n("785893"),r=n("250065");let c={slug:"/docs/cli/gen-dao",title:"\u6570\u636E\u89C4\u8303-gen dao",sidebar_position:1,hide_title:!0,keywords:["GoFrame","gen dao","\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61","\u6570\u636E\u8F6C\u5316\u6A21\u578B","Go\u4EE3\u7801\u751F\u6210","\u914D\u7F6E\u6587\u4EF6\u7BA1\u7406","\u547D\u4EE4\u884C\u5DE5\u5177","\u6570\u636E\u5E93\u8FDE\u63A5","ORM\u914D\u7F6E","\u9879\u76EE\u5DE5\u7A0B\u89C4\u8303"],description:"GoFrame\u6846\u67B6\u4E2Dgen dao\u547D\u4EE4\u7684\u4F7F\u7528\u65B9\u6CD5\u4E0E\u53C2\u6570\u914D\u7F6E\u3002gen dao\u547D\u4EE4\u662F\u751F\u6210\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u3001\u6570\u636E\u8F6C\u5316\u6A21\u578B\u53CA\u5B9E\u4F53\u6570\u636E\u6A21\u578B\u7684\u5173\u952E\u5DE5\u5177\uFF0C\u652F\u6301\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u548C\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u914D\u7F6E\uFF0C\u9002\u7528\u4E8E\u591A\u79CD\u6570\u636E\u5E93\u7C7B\u578B\u3002\u901A\u8FC7\u5BF9\u547D\u4EE4\u9009\u9879\u7684\u7075\u6D3B\u4F7F\u7528\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u9879\u76EE\u7684\u4EE3\u7801\u751F\u6210\u9700\u6C42\uFF0C\u786E\u4FDD\u5DE5\u7A0B\u8BBE\u8BA1\u89C4\u8303\u7684\u843D\u5730\u6267\u884C\u3002"},t=void 0,l={},o=[{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"\u914D\u7F6E\u793A\u4F8B",id:"\u914D\u7F6E\u793A\u4F8B",level:2},{value:"\u53C2\u6570\u8BF4\u660E",id:"\u53C2\u6570\u8BF4\u660E",level:2},{value:"\u53C2\u6570\uFF1A<code>typeMapping</code>",id:"\u53C2\u6570typemapping",level:3},{value:"\u53C2\u6570\uFF1A<code>fieldMapping</code>",id:"\u53C2\u6570fieldmapping",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u7684\u6570\u636E\u5E93\u7C7B\u578B",id:"\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u7684\u6570\u636E\u5E93\u7C7B\u578B",level:3},{value:"\u5173\u4E8E <code>bool</code> \u7C7B\u578B\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5",id:"\u5173\u4E8E-bool-\u7C7B\u578B\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5",level:3}];function a(e){let d={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gen dao"})," \u547D\u4EE4\u662F ",(0,i.jsx)(d.code,{children:"CLI"})," \u4E2D\u6700\u9891\u7E41\u4F7F\u7528\u3001\u4E5F\u662F\u6846\u67B6\u8BBE\u8BA1\u7684\u5DE5\u7A0B\u89C4\u8303\u80FD\u5426\u51C6\u786E\u843D\u5730\u7684\u5173\u952E\u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u7528\u4E8E\u751F\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u3001 ",(0,i.jsx)(d.code,{children:"do"})," \u6570\u636E\u8F6C\u5316\u6A21\u578B\u53CA ",(0,i.jsx)(d.code,{children:"entity"})," \u5B9E\u4F8B\u6570\u636E\u6A21\u578B ",(0,i.jsx)(d.code,{children:"Go"})," \u4EE3\u7801\u6587\u4EF6\u3002\u7531\u4E8E\u8BE5\u547D\u4EE4\u7684\u53C2\u6570\u3001\u9009\u9879\u8F83\u591A\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u6765\u7BA1\u7406\u751F\u6210\u89C4\u5219\u3002"]}),"\n",(0,i.jsx)(d.admonition,{type:"tip",children:(0,i.jsxs)(d.p,{children:["\u5173\u4E8E\u6846\u67B6\u9879\u76EE\u5DE5\u7A0B\u89C4\u8303\u4ECB\u7ECD\u8BF7\u67E5\u770B ",(0,i.jsx)(d.a,{href:"/docs/design/project-layer",children:"\u4EE3\u7801\u5206\u5C42\u8BBE\u8BA1"})," \u7AE0\u8282\u3002"]})}),"\n",(0,i.jsx)(d.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,i.jsxs)(d.p,{children:["\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u8FDB\u5165\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C ",(0,i.jsx)(d.code,{children:"gf gen dao"})," \u5373\u53EF\u3002\u4EE5\u4E0B\u4E3A\u547D\u4EE4\u884C\u5E2E\u52A9\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-text",children:'$ gf gen dao -h\nUSAGE\n    gf gen dao [OPTION]\n\nOPTION\n    -p, --path                  directory path for generated files\n    -l, --link                  database configuration, the same as the ORM configuration of GoFrame\n    -t, --tables                generate models only for given tables, multiple table names separated with \',\'\n    -x, --tablesEx              generate models excluding given tables, multiple table names separated with \',\'\n    -g, --group                 specifying the configuration group name of database for generated ORM instance,\n                                it\'s not necessary and the default value is "default"\n    -f, --prefix                add prefix for all table of specified link/database tables\n    -r, --removePrefix          remove specified prefix of the table, multiple prefix separated with \',\'\n    -rf, --removeFieldPrefix    remove specified prefix of the field, multiple prefix separated with \',\'\n    -j, --jsonCase              generated json tag case for model struct, cases are as follows:\n                                | Case            | Example            |\n                                |---------------- |--------------------|\n                                | Camel           | AnyKindOfString    |\n                                | CamelLower      | anyKindOfString    | default\n                                | Snake           | any_kind_of_string |\n                                | SnakeScreaming  | ANY_KIND_OF_STRING |\n                                | SnakeFirstUpper | rgb_code_md5       |\n                                | Kebab           | any-kind-of-string |\n                                | KebabScreaming  | ANY-KIND-OF-STRING |\n    -i, --importPrefix          custom import prefix for generated go files\n    -d, --daoPath               directory path for storing generated dao files under path\n    -o, --doPath                directory path for storing generated do files under path\n    -e, --entityPath            directory path for storing generated entity files under path\n    -t1, --tplDaoIndexPath      template file path for dao index file\n    -t2, --tplDaoInternalPath   template file path for dao internal file\n    -t3, --tplDaoDoPath         template file path for dao do file\n    -t4, --tplDaoEntityPath     template file path for dao entity file\n    -s, --stdTime               use time.Time from stdlib instead of gtime.Time for generated time/date fields of tables\n    -w, --withTime              add created time for auto produced go files\n    -n, --gJsonSupport          use gJsonSupport to use *gjson.Json instead of string for generated json fields of\n                                tables\n    -v, --overwriteDao          overwrite all dao files both inside/outside internal folder\n    -c, --descriptionTag        add comment to description tag for each field\n    -k, --noJsonTag             no json tag will be added for each field\n    -m, --noModelComment        no model comment will be added for each field\n    -a, --clear                 delete all generated go files that do not exist in database\n    -y, --typeMapping           custom local type mapping for generated struct attributes relevant to fields of table\n    -fm, --fieldMapping         custom local type mapping for generated struct attributes relevant to specific fields of\n                                table\n    -/--genItems                \n    -h, --help                  more information about this command\n\nEXAMPLE\n    gf gen dao\n    gf gen dao -l "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    gf gen dao -p ./model -g user-center -t user,user_detail,user_login\n    gf gen dao -r user_\n\nCONFIGURATION SUPPORT\n    Options are also supported by configuration file.\n    It\'s suggested using configuration file instead of command line arguments making producing.\n    The configuration node name is "gfcli.gen.dao", which also supports multiple databases, for example(config.yaml):\n    gfcli:\n      gen:\n        dao:\n        - link:     "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n          tables:   "order,products"\n          jsonCase: "CamelLower"\n        - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n          path:   "./my-app"\n          prefix: "primary_"\n          tables: "user, userDetail"\n          typeMapping:\n            decimal:\n              type:   decimal.Decimal\n              import: github.com/shopspring/decimal\n            numeric:\n              type: string\n          fieldMapping:\n            table_name.field_name:\n              type:   decimal.Decimal\n              import: github.com/shopspring/decimal\n'})}),"\n",(0,i.jsx)(d.admonition,{type:"tip",children:(0,i.jsxs)(d.p,{children:["\u5982\u679C\u4F7F\u7528\u6846\u67B6\u63A8\u8350\u7684\u9879\u76EE\u5DE5\u7A0B\u811A\u624B\u67B6\uFF0C\u5E76\u4E14\u7CFB\u7EDF\u5B89\u88C5\u4E86 ",(0,i.jsx)(d.code,{children:"make"})," \u5DE5\u5177\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"make dao"})," \u5FEB\u6377\u6307\u4EE4\u3002"]})}),"\n",(0,i.jsx)(d.h2,{id:"\u914D\u7F6E\u793A\u4F8B",children:"\u914D\u7F6E\u793A\u4F8B"}),"\n",(0,i.jsx)(d.p,{children:"\u6587\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-yaml",metastring:'title="hack/config.yaml"',children:'gfcli:\n  gen:\n    dao:\n    - link:     "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n      tables:   "order,products"\n      jsonCase: "CamelLower"\n\n    - link:   "mysql:root:12345678@tcp(127.0.0.1:3306)/primary"\n      path:   "./my-app"\n      prefix: "primary_"\n      tables: "user, userDetail"\n\n    # sqlite\u9700\u8981\u81EA\u884C\u7F16\u8BD1\u5E26sqlite\u9A71\u52A8\u7684gf\uFF0C\u4E0B\u8F7D\u5E93\u4EE3\u7801\u540E\u4FEE\u6539\u8DEF\u5F84\u6587\u4EF6\uFF08gf\\cmd\\gf\\internal\\cmd\\cmd_gen_dao.go\uFF09\u7684import\u5305\uFF0C\u53D6\u6D88\u6CE8\u91CA\u5373\u53EF\u3002sqlite\u9A71\u52A8\u4F9D\u8D56\u4E86gcc\n    - link: "sqlite:./file.db"\n'})}),"\n",(0,i.jsx)(d.h2,{id:"\u53C2\u6570\u8BF4\u660E",children:"\u53C2\u6570\u8BF4\u660E"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u540D\u79F0"}),(0,i.jsx)(d.th,{children:"\u9ED8\u8BA4\u503C"}),(0,i.jsx)(d.th,{children:"\u542B\u4E49"}),(0,i.jsx)(d.th,{children:"\u793A\u4F8B"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gfcli.gen.dao"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"dao"})," \u4EE3\u7801\u751F\u6210\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\u914D\u7F6E\u9879\u6784\u6210\u6570\u7EC4\uFF0C\u652F\u6301\u591A\u4E2A\u6570\u636E\u5E93\u751F\u6210\u3002\u4E0D\u540C\u7684\u6570\u636E\u5E93\u53EF\u4EE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u751F\u6210\u89C4\u5219\uFF0C\u4F8B\u5982\u53EF\u4EE5\u751F\u6210\u5230\u4E0D\u540C\u7684\u4F4D\u7F6E\u6216\u8005\u6587\u4EF6\u3002"]}),(0,i.jsx)(d.td,{children:"-"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"link"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.strong,{children:"\u5FC5\u987B\u53C2\u6570"}),"\u3002\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u8868\u793A\u4F60\u8FDE\u63A5\u7684\u6570\u636E\u5E93\u7C7B\u578B ",(0,i.jsx)(d.code,{children:"mysql"}),", ",(0,i.jsx)(d.code,{children:"postgresql"})," \u7B49, \u7B2C\u4E8C\u90E8\u5206\u5C31\u662F\u8FDE\u63A5\u6570\u636E\u5E93\u7684 ",(0,i.jsx)(d.code,{children:"dsn"})," \u4FE1\u606F\u3002\u5177\u4F53\u8BF7\u53C2\u8003 ",(0,i.jsx)(d.a,{href:"/docs/core/gdb-config",children:"ORM\u4F7F\u7528\u914D\u7F6E"})," \u7AE0\u8282\u3002"]}),(0,i.jsx)(d.td,{children:"-"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"path"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"internal"})}),(0,i.jsxs)(d.td,{children:["\u751F\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u548C ",(0,i.jsx)(d.code,{children:"model"})," \u6587\u4EF6\u7684\u5B58\u50A8 ",(0,i.jsx)(d.strong,{children:"\u76EE\u5F55"})," \u5730\u5740\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"./app"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"group"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default"})}),(0,i.jsx)(d.td,{children:"\u5728\u6570\u636E\u5E93\u914D\u7F6E\u4E2D\u7684\u6570\u636E\u5E93\u5206\u7EC4\u540D\u79F0\u3002\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u540D\u79F0\u3002\u6570\u636E\u5E93\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5206\u7EC4\u540D\u79F0\u5F80\u5F80\u786E\u5B9A\u4E4B\u540E\u4FBF\u4E0D\u518D\u4FEE\u6539\u3002"}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"default"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"order"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"user"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"prefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u751F\u6210\u6570\u636E\u5E93\u5BF9\u8C61\u53CA\u6587\u4EF6\u7684\u524D\u7F00\uFF0C\u4EE5\u4FBF\u533A\u5206\u4E0D\u540C\u6570\u636E\u5E93\u6216\u8005\u4E0D\u540C\u6570\u636E\u5E93\u4E2D\u7684\u76F8\u540C\u8868\u540D\uFF0C\u9632\u6B62\u6570\u636E\u8868\u540C\u540D\u8986\u76D6\u3002"}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"order_"}),(0,i.jsx)("br",{}),(0,i.jsx)(d.code,{children:"user_"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"removePrefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u5220\u9664\u6570\u636E\u8868\u7684\u6307\u5B9A\u524D\u7F00\u540D\u79F0\u3002\u591A\u4E2A\u524D\u7F00\u4EE5 ",(0,i.jsx)(d.code,{children:","})," \u53F7\u5206\u9694\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gf_"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"removeFieldPrefix"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u5220\u9664\u5B57\u6BB5\u540D\u79F0\u7684\u6307\u5B9A\u524D\u7F00\u540D\u79F0\u3002\u591A\u4E2A\u524D\u7F00\u4EE5 ",(0,i.jsx)(d.code,{children:","})," \u53F7\u5206\u9694\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"f_"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tables"})}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u9700\u8981\u6267\u884C\u4EE3\u7801\u751F\u6210\u7684\u6570\u636E\u8868\u3002\u5982\u679C\u4E3A\u7A7A\uFF0C\u8868\u793A\u6570\u636E\u5E93\u7684\u6240\u6709\u8868\u90FD\u4F1A\u751F\u6210\u3002"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"user, user_detail"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tablesEx"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"Tables Excluding"}),"\uFF0C\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u9700\u8981\u6392\u9664\u4EE3\u7801\u751F\u6210\u7684\u6570\u636E\u8868\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"product, order"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"jsonCase"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"CamelLower"})}),(0,i.jsxs)(d.td,{children:["\u6307\u5B9A ",(0,i.jsx)(d.code,{children:"model"})," \u4E2D\u751F\u6210\u7684\u6570\u636E\u5B9E\u4F53\u5BF9\u8C61\u4E2D ",(0,i.jsx)(d.code,{children:"json"})," \u6807\u7B7E\u540D\u79F0\u89C4\u5219\uFF0C\u53C2\u6570\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u3002\u53C2\u6570\u53EF\u9009\u4E3A\uFF1A ",(0,i.jsx)(d.code,{children:"Camel"}),"\u3001 ",(0,i.jsx)(d.code,{children:"CamelLower"}),"\u3001 ",(0,i.jsx)(d.code,{children:"Snake"}),"\u3001 ",(0,i.jsx)(d.code,{children:"SnakeScreaming"}),"\u3001 ",(0,i.jsx)(d.code,{children:"SnakeFirstUpper"}),"\u3001 ",(0,i.jsx)(d.code,{children:"Kebab"}),"\u3001 ",(0,i.jsx)(d.code,{children:"KebabScreaming"}),"\u3002\u5177\u4F53\u4ECB\u7ECD\u8BF7\u53C2\u8003\u547D\u540D\u884C\u5E2E\u52A9\u793A\u4F8B\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Snake"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"stdTime"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u5F53\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u4E3A\u65F6\u95F4\u7C7B\u578B\u65F6\uFF0C\u4EE3\u7801\u751F\u6210\u7684\u5C5E\u6027\u7C7B\u578B\u4F7F\u7528\u6807\u51C6\u5E93\u7684 ",(0,i.jsx)(d.code,{children:"time.Time"})," \u800C\u4E0D\u662F\u6846\u67B6\u7684 ",(0,i.jsx)(d.code,{children:"*gtime.Time"})," \u7C7B\u578B\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"withTime"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u4E3A\u6BCF\u4E2A\u81EA\u52A8\u751F\u6210\u7684\u4EE3\u7801\u6587\u4EF6\u589E\u52A0\u751F\u6210\u65F6\u95F4\u6CE8\u91CA"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"gJsonSupport"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u5F53\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u4E3A ",(0,i.jsx)(d.code,{children:"JSON"})," \u7C7B\u578B\u65F6\uFF0C\u4EE3\u7801\u751F\u6210\u7684\u5C5E\u6027\u7C7B\u578B\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"*gjson.Json"})," \u7C7B\u578B\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"overwriteDao"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u6BCF\u6B21\u751F\u6210 ",(0,i.jsx)(d.code,{children:"dao"})," \u4EE3\u7801\u65F6\u662F\u5426\u91CD\u65B0\u751F\u6210\u8986\u76D6 ",(0,i.jsx)(d.code,{children:"dao/internal"})," \u76EE\u5F55\u5916\u5C42\u7684\u6587\u4EF6\u3002\u6CE8\u610F ",(0,i.jsx)(d.code,{children:"dao/internal"})," \u76EE\u5F55\u5916\u5C42\u7684\u6587\u4EF6\u53EF\u80FD\u7531\u5F00\u53D1\u8005\u81EA\u5B9A\u4E49\u6269\u5C55\u4E86\u529F\u80FD\uFF0C\u8986\u76D6\u53EF\u80FD\u4F1A\u4EA7\u751F\u98CE\u9669\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"importPrefix"})}),(0,i.jsxs)(d.td,{children:["\u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"go.mod"})," \u81EA\u52A8\u68C0\u6D4B"]}),(0,i.jsxs)(d.td,{children:["\u7528\u4E8E\u6307\u5B9A\u751F\u6210 ",(0,i.jsx)(d.code,{children:"Go"})," \u6587\u4EF6\u7684 ",(0,i.jsx)(d.code,{children:"import"})," \u8DEF\u5F84\u524D\u7F00\u3002\u7279\u522B\u662F\u9488\u5BF9\u4E8E\u4E0D\u662F\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"gen dao"})," \u547D\u4EE4\uFF0C\u6216\u8005\u60F3\u8981\u5C06\u4EE3\u7801\u6587\u4EF6\u751F\u6210\u5230\u81EA\u5B9A\u4E49\u7684\u5176\u4ED6\u76EE\u5F55\uFF0C\u8FD9\u4E2A\u65F6\u5019\u914D\u7F6E\u8BE5\u53C2\u6570\u5341\u5206\u5FC5\u8981\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"github.com/gogf/gf"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"descriptionTag"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u4E3A\u6570\u636E\u6A21\u578B\u7ED3\u6784\u4F53\u5C5E\u6027\u589E\u52A0 ",(0,i.jsx)(d.code,{children:"desription"})," \u7684\u6807\u7B7E\uFF0C\u5185\u5BB9\u4E3A\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5\u6CE8\u91CA\u3002"]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"noJsonTag"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u751F\u6210\u7684\u6570\u636E\u6A21\u578B\u4E2D\uFF0C\u5B57\u6BB5\u4E0D\u5E26\u6709json\u6807\u7B7E"}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"noModelComment"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsx)(d.td,{children:"\u7528\u4E8E\u6307\u5B9A\u662F\u5426\u5173\u95ED\u6570\u636E\u6A21\u578B\u7ED3\u6784\u4F53\u5C5E\u6027\u7684\u6CE8\u91CA\u81EA\u52A8\u751F\u6210\uFF0C\u5185\u5BB9\u4E3A\u6570\u636E\u8868\u5BF9\u5E94\u5B57\u6BB5\u7684\u6CE8\u91CA\u3002"}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"clear"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})}),(0,i.jsxs)(d.td,{children:["\u81EA\u52A8\u5220\u9664\u6570\u636E\u5E93\u4E2D\u4E0D\u5B58\u5728\u5BF9\u5E94\u6570\u636E\u8868\u7684\u672C\u5730 ",(0,i.jsx)(d.code,{children:"dao/do/entity"})," \u4EE3\u7801\u6587\u4EF6\u3002\u8BF7\u8C28\u614E\u4F7F\u7528\u8BE5\u53C2\u6570\uFF01"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"daoPath"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"dao"})}),(0,i.jsxs)(d.td,{children:["\u4EE3\u7801\u751F\u6210\u7684 ",(0,i.jsx)(d.code,{children:"DAO"})," \u6587\u4EF6\u5B58\u653E\u76EE\u5F55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"doPath"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"model/do"})}),(0,i.jsxs)(d.td,{children:["\u4EE3\u7801\u751F\u6210 ",(0,i.jsx)(d.code,{children:"DO"})," \u6587\u4EF6\u5B58\u653E\u76EE\u5F55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"entityPath"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"model/entity"})}),(0,i.jsxs)(d.td,{children:["\u4EE3\u7801\u751F\u6210\u7684 ",(0,i.jsx)(d.code,{children:"Entity"})," \u6587\u4EF6\u5B58\u653E\u76EE\u5F55"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoIndexPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81EA\u5B9A\u4E49 ",(0,i.jsx)(d.code,{children:"DAO Index"})," \u4EE3\u7801\u751F\u6210\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528\u8BE5\u53C2\u6570\u8BF7\u53C2\u8003\u6E90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoInternalPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81EA\u5B9A\u4E49 ",(0,i.jsx)(d.code,{children:"DAO Internal"})," \u4EE3\u7801\u751F\u6210\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528\u8BE5\u53C2\u6570\u8BF7\u53C2\u8003\u6E90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoDoPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81EA\u5B9A\u4E49 ",(0,i.jsx)(d.code,{children:"DO"})," \u4EE3\u7801\u751F\u6210\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528\u8BE5\u53C2\u6570\u8BF7\u53C2\u8003\u6E90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"tplDaoEntityPath"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:["\u81EA\u5B9A\u4E49 ",(0,i.jsx)(d.code,{children:"Entity"})," \u4EE3\u7801\u751F\u6210\u6A21\u677F\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4F7F\u7528\u8BE5\u53C2\u6570\u8BF7\u53C2\u8003\u6E90\u7801"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"typeMapping"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.strong,{children:"\u4ECE\u7248\u672Cv2.5\u5F00\u59CB\u652F\u6301"}),"\u3002\u7528\u4E8E\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\u5230\u751F\u6210\u7684Go\u6587\u4EF6\u4E2D\u5BF9\u5E94\u5C5E\u6027\u7C7B\u578B\u6620\u5C04\u3002"]}),(0,i.jsx)(d.td,{})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"fieldMapping"})}),(0,i.jsx)(d.td,{}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.strong,{children:"\u4ECE\u7248\u672Cv2.8\u5F00\u59CB\u652F\u6301"}),"\u3002\u7528\u4E8E\u81EA\u5B9A\u4E49\u6570\u636E\u8868\u5177\u4F53\u5B57\u6BB5\u5230\u751F\u6210\u7684Go\u6587\u4EF6\u4E2D\u5BF9\u5E94\u5C5E\u6027\u7C7B\u578B\u6620\u5C04\u3002"]}),(0,i.jsx)(d.td,{})]})]})]}),"\n",(0,i.jsxs)(d.h3,{id:"\u53C2\u6570typemapping",children:["\u53C2\u6570\uFF1A",(0,i.jsx)(d.code,{children:"typeMapping"})]}),"\n",(0,i.jsxs)(d.p,{children:["\u53C2\u6570",(0,i.jsx)(d.code,{children:"typeMapping"}),"\u652F\u6301\u6309\u7167\u6570\u636E\u5E93\u5B57\u6BB5\u7C7B\u578B\u81EA\u5B9A\u4E49\u751F\u6210Go\u4EE3\u7801\u4E2D\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A\uFF1A"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-yaml",children:"decimal:\n  type: float64\nmoney:\n  type: float64\nnumeric:\n  type: float64\nsmallmoney:\n  type: float64\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u8BE5\u914D\u7F6E\u652F\u6301\u901A\u8FC7",(0,i.jsx)(d.code,{children:"import"}),"\u914D\u7F6E\u9879\u5F15\u5165\u7B2C\u4E09\u65B9\u5305\uFF0C\u4F8B\u5982\uFF1A"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-yaml",children:"decimal:\n  type:   decimal.Decimal\n  import: github.com/shopspring/decimal\n"})}),"\n",(0,i.jsxs)(d.h3,{id:"\u53C2\u6570fieldmapping",children:["\u53C2\u6570\uFF1A",(0,i.jsx)(d.code,{children:"fieldMapping"})]}),"\n",(0,i.jsxs)(d.p,{children:["\u53C2\u6570",(0,i.jsx)(d.code,{children:"fieldMapping"}),"\u63D0\u4F9B\u66F4\u9AD8\u7075\u6D3B\u5EA6\u7684\u5B57\u6BB5\u7C7B\u578B\u6620\u5C04\u914D\u7F6E\uFF0C\u652F\u6301\u6309\u7167\u6570\u636E\u5E93\u5B57\u6BB5\u540D\u79F0\u81EA\u5B9A\u4E49\u751F\u6210Go\u4EE3\u7801\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u3002\u9664\u4E86\u914D\u7F6E\u540D\u79F0\u4E0D\u4E00\u6837\u5916\uFF0C\u914D\u7F6E\u5185\u5BB9\u4E0E",(0,i.jsx)(d.code,{children:"typeMapping"}),"\u4E00\u81F4\u3002\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-yaml",children:"paid_orders.amount:\n  type:   decimal.Decimal\n  import: github.com/shopspring/decimal\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u793A\u4F8B\u4E2D\uFF0C",(0,i.jsx)(d.code,{children:"paid_orders"}),"\u4E3A\u8868\u540D\u79F0\uFF0C",(0,i.jsx)(d.code,{children:"amount"}),"\u4E3A\u5B57\u6BB5\u540D\u79F0\uFF0C",(0,i.jsx)(d.code,{children:"type"}),"\u8868\u793A\u751F\u6210\u7684",(0,i.jsx)(d.code,{children:"Go"}),"\u4EE3\u7801\u4E2D\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\u540D\u79F0\uFF0C",(0,i.jsx)(d.code,{children:"import"}),"\u8868\u793A\u751F\u6210\u7684\u4EE3\u7801\u4E2D\u9700\u8981\u5F15\u5165\u7B2C\u4E09\u65B9\u5305\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsxs)(d.p,{children:["\u4ED3\u5E93\u5730\u5740\uFF1A ",(0,i.jsx)(d.a,{href:"https://github.com/gogf/focus-single",children:"https://github.com/gogf/focus-single"})]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(425231).Z+"",width:"3584",height:"2074"})}),"\n",(0,i.jsxs)(d.p,{children:["1\u3001\u4EE5\u4E0B ",(0,i.jsx)(d.code,{children:"3"})," \u4E2A\u76EE\u5F55\u7684\u6587\u4EF6\u7531 ",(0,i.jsx)(d.code,{children:"dao"})," \u547D\u4EE4\u751F\u6210\uFF1A"]}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u8DEF\u5F84"}),(0,i.jsx)(d.th,{children:"\u8BF4\u660E"}),(0,i.jsx)(d.th,{children:"\u8BE6\u7EC6\u4ECB\u7ECD"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/dao"})}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u64CD\u4F5C\u5BF9\u8C61"}),(0,i.jsxs)(d.td,{children:["\u901A\u8FC7\u5BF9\u8C61\u65B9\u5F0F\u8BBF\u95EE\u5E95\u5C42\u6570\u636E\u6E90\uFF0C\u5E95\u5C42\u57FA\u4E8E ",(0,i.jsx)(d.code,{children:"ORM"})," \u7EC4\u4EF6\u5B9E\u73B0\u3002\u5F80\u5F80\u9700\u8981\u7ED3\u5408 ",(0,i.jsx)(d.code,{children:"entity"})," \u548C ",(0,i.jsx)(d.code,{children:"do"})," \u5171\u540C\u4F7F\u7528\u3002\u8BE5\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5F00\u53D1\u8005\u53EF\u6269\u5C55\u4FEE\u6539\u3002"]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/model/do"})}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u8F6C\u6362\u6A21\u578B"}),(0,i.jsxs)(d.td,{children:["\u6570\u636E\u8F6C\u6362\u6A21\u578B\u7528\u4E8E\u4E1A\u52A1\u6A21\u578B\u5230\u6570\u636E\u6A21\u578B\u7684\u8F6C\u6362\uFF0C\u7531\u5DE5\u5177\u7EF4\u62A4\uFF0C\u7528\u6237\u4E0D\u80FD\u4FEE\u6539\u3002\u5DE5\u5177\u6BCF\u6B21\u751F\u6210\u4EE3\u7801\u6587\u4EF6\u5C06\u4F1A\u8986\u76D6\u8BE5\u76EE\u5F55\u3002\u5173\u4E8E ",(0,i.jsx)(d.code,{children:"do"})," \u6587\u4EF6\u7684\u4ECB\u7ECD\u8BF7\u53C2\u8003\uFF1A",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(d.a,{href:"/docs/design/project-models",children:"\u6570\u636E\u6A21\u578B\u4E0E\u4E1A\u52A1\u6A21\u578B"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(d.a,{href:"/docs/design/project-dao-improvement",children:"DAO-\u5DE5\u7A0B\u75DB\u70B9\u53CA\u6539\u8FDB"}),(0,i.jsx)("br",{}),"- ",(0,i.jsx)(d.a,{href:"/docs/core/gdb-practice-using-pointer-and-do-for-update-api",children:"\u5229\u7528\u6307\u9488\u5C5E\u6027\u548Cdo\u5BF9\u8C61\u5B9E\u73B0\u7075\u6D3B\u7684\u4FEE\u6539\u63A5\u53E3"})]})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"/internal/model/entity"})}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u6A21\u578B"}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u6A21\u578B\u7531\u5DE5\u5177\u7EF4\u62A4\uFF0C\u7528\u6237\u4E0D\u80FD\u4FEE\u6539\u3002\u5DE5\u5177\u6BCF\u6B21\u751F\u6210\u4EE3\u7801\u6587\u4EF6\u5C06\u4F1A\u8986\u76D6\u8BE5\u76EE\u5F55\u3002"})]})]})]}),"\n",(0,i.jsxs)(d.p,{children:["2\u3001 ",(0,i.jsx)(d.code,{children:"model"})," \u4E2D\u7684\u6A21\u578B\u5206\u4E3A\u4E24\u7C7B\uFF1A ",(0,i.jsx)(d.strong,{children:"\u6570\u636E\u6A21\u578B"})," \u548C ",(0,i.jsx)(d.strong,{children:"\u4E1A\u52A1\u6A21\u578B"}),"\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.strong,{children:"\u6570\u636E\u6A21\u578B\uFF1A"})," \u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5DE5\u5177\u81EA\u52A8\u751F\u6210 ",(0,i.jsx)(d.code,{children:"model/entity"}),"\xa0\u76EE\u5F55\u6587\u4EF6\uFF0C\u6570\u636E\u5E93\u7684\u6570\u636E\u8868\u90FD\u4F1A\u751F\u6210\u5230\u8BE5\u76EE\u5F55\u4E0B\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u5BF9\u5E94\u7684\u6A21\u578B\u4E3A\u6570\u636E\u6A21\u578B\u3002\u6570\u636E\u6A21\u578B\u5373\u4E0E\u6570\u636E\u8868\u4E00\u4E00\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u5F00\u53D1\u8005\u5F80\u5F80\u4E0D\u9700\u8981\u53BB\u4FEE\u6539\u5E76\u4E14\u4E5F\u4E0D\u5E94\u8BE5\u53BB\u4FEE\u6539\uFF0C\u6570\u636E\u6A21\u578B\u53EA\u6709\u5728\u6570\u636E\u8868\u7ED3\u6784\u53D8\u66F4\u65F6\u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5DE5\u5177\u81EA\u52A8\u66F4\u65B0\u3002\u6570\u636E\u6A21\u578B\u7531 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5DE5\u5177\u751F\u6210\u53CA\u7EDF\u4E00\u7EF4\u62A4\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.strong,{children:"\u4E1A\u52A1\u6A21\u578B\uFF1A"})," \u4E1A\u52A1\u6A21\u578B\u5373\u662F\u4E0E\u4E1A\u52A1\u76F8\u5173\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6309\u9700\u5B9A\u4E49\uFF0C\u4F8B\u5982 ",(0,i.jsx)(d.code,{children:"service"})," \u7684\u8F93\u5165\u8F93\u51FA\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u3001\u5185\u90E8\u7684\u4E00\u4E9B\u6570\u636E\u7ED3\u6784\u5B9A\u4E49\u7B49\u3002\u4E1A\u52A1\u6A21\u578B\u7531\u5F00\u53D1\u8005\u6839\u636E\u4E1A\u52A1\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u7EF4\u62A4\uFF0C\u5B9A\u4E49\u5230 ",(0,i.jsx)(d.code,{children:"model"})," \u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["3\u3001 ",(0,i.jsx)(d.code,{children:"dao"})," \u4E2D\u7684\u6587\u4EF6\u6309\u7167\u6570\u636E\u8868\u540D\u79F0\u8FDB\u884C\u547D\u540D\uFF0C\u4E00\u4E2A\u6570\u636E\u8868\u4E00\u4E2A\u6587\u4EF6\u53CA\u5176\u4E00\u4E2A\u5BF9\u5E94\u7684 ",(0,i.jsx)(d.code,{children:"DAO"})," \u5BF9\u8C61\u3002\u64CD\u4F5C\u6570\u636E\u8868\u5373\u662F\u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"DAO"})," \u5BF9\u8C61\u4EE5\u53CA\u76F8\u5173\u64CD\u4F5C\u65B9\u6CD5\u5B9E\u73B0\u3002 ",(0,i.jsx)(d.code,{children:"dao"})," \u64CD\u4F5C\u91C7\u7528\u89C4\u8303\u5316\u8BBE\u8BA1\uFF0C\u5FC5\u987B\u4F20\u9012 ",(0,i.jsx)(d.code,{children:"ctx"})," \u53C2\u6570\uFF0C\u5E76\u5728\u751F\u6210\u7684\u4EE3\u7801\u4E2D\u5FC5\u987B\u901A\u8FC7 ",(0,i.jsx)(d.code,{children:"Ctx"})," \u6216\u8005 ",(0,i.jsx)(d.code,{children:"Transaction"})," \u65B9\u6CD5\u521B\u5EFA\u5BF9\u8C61\u6765\u94FE\u5F0F\u64CD\u4F5C\u6570\u636E\u8868\u3002"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(714549).Z+"",width:"2478",height:"544"})}),"\n",(0,i.jsx)(d.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsx)(d.h3,{id:"\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u7684\u6570\u636E\u5E93\u7C7B\u578B",children:"\u9700\u8981\u624B\u52A8\u7F16\u8BD1\u7684\u6570\u636E\u5E93\u7C7B\u578B"}),"\n",(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gen dao"})," \u547D\u4EE4\u6D89\u53CA\u5230\u6570\u636E\u8BBF\u95EE\u76F8\u5173\u4EE3\u7801\u751F\u6210\u65F6\uFF0C\u9ED8\u8BA4\u652F\u6301\u5E38\u7528\u7684\u82E5\u5E72\u7C7B\u578B\u6570\u636E\u5E93\u3002\u5982\u679C\u9700\u8981 ",(0,i.jsx)(d.code,{children:"Oracle"})," \u6570\u636E\u5E93\u7C7B\u578B\u652F\u6301\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u4FEE\u6539\u6E90\u7801\u6587\u4EF6\u540E\u81EA\u884C\u672C\u5730\u624B\u52A8\u7F16\u8BD1\u751F\u6210 ",(0,i.jsx)(d.code,{children:"CLI"})," \u5DE5\u5177\u968F\u540E\u5B89\u88C5\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u4E2A\u6570\u636E\u5E93\u7684\u9A71\u52A8\u9700\u8981 ",(0,i.jsx)(d.code,{children:"CGO"})," \u652F\u6301\uFF0C\u65E0\u6CD5\u9884\u7F16\u8BD1\u751F\u6210\u7ED9\u5927\u5BB6\u76F4\u63A5\u4F7F\u7528\u3002"]}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(307237).Z+"",width:"3072",height:"1738"})}),"\n",(0,i.jsxs)(d.h3,{id:"\u5173\u4E8E-bool-\u7C7B\u578B\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5",children:["\u5173\u4E8E ",(0,i.jsx)(d.code,{children:"bool"})," \u7C7B\u578B\u5BF9\u5E94\u7684\u6570\u636E\u8868\u5B57\u6BB5"]}),"\n",(0,i.jsxs)(d.p,{children:["\u7531\u4E8E\u5927\u90E8\u5206\u6570\u636E\u5E93\u7C7B\u578B\u90FD\u6CA1\u6709 ",(0,i.jsx)(d.code,{children:"bool"})," \u7C7B\u578B\u7684\u6570\u636E\u8868\u5B57\u6BB5\u7C7B\u578B\uFF0C\n\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 ",(0,i.jsx)(d.code,{children:"bit(1)/tinyint(1)"})," \u6765\u4EE3\u66FF",(0,i.jsx)(d.code,{children:"bool"}),"\u7C7B\u578B\u3002\n",(0,i.jsx)(d.code,{children:"gen dao"})," \u547D\u4EE4\u4F1A\u81EA\u52A8\u8BC6\u522B",(0,i.jsx)(d.strong,{children:"\u6574\u578B\u5B57\u6BB5"}),"\u5982\u679C\u957F\u5EA6\u4E3A",(0,i.jsx)(d.code,{children:"1"}),"\u4F4D\uFF0C\u5219\u5C06\u5176\u751F\u6210\u4E3A",(0,i.jsx)(d.code,{children:"bool"}),"\u7C7B\u578B\u7684\u5C5E\u6027\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"\u4F8B\u5982\uFF0C\u8868\u5B57\u6BB5\uFF1A"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(569731).Z+"",width:"1222",height:"280"})}),"\n",(0,i.jsx)(d.p,{children:"\u751F\u6210\u7684\u5C5E\u6027\uFF1A"}),"\n",(0,i.jsx)(d.p,{children:(0,i.jsx)(d.img,{src:n(775417).Z+"",width:"1504",height:"322"})})]})}function h(e={}){let{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},775417:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/4bb766d64e607a33c1a6fbf20c742924-d90407ea70256208403dc60ab2768c5f.png"},569731:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/50992d00a792555d2946d294975e9ec4-6366abf1cc1ea82c8737534f40362376.png"},307237:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/7f849959c13d224393b93d6b371e8ae0-1fd5a64ec9e2a0638a6ca6c28e5e4ef6.png"},425231:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/a02af38b70bb31224361565570e40789-c0d60822529f8a0ba75c447235ec9abb.png"},714549:function(e,d,n){n.d(d,{Z:function(){return s}});let s=n.p+"assets/images/f0da330685c6cfd82ba1c0254dfdbe39-70012abfeb13124da0173d20015e15e1.png"},250065:function(e,d,n){n.d(d,{Z:function(){return t},a:function(){return c}});var s=n(667294);let i={},r=s.createContext(i);function c(e){let d=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);