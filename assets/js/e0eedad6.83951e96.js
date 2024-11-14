"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[57189],{686931:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e","title":"ORM\u4f7f\u7528\u914d\u7f6e","description":"\u914d\u7f6e\u6587\u4ef6","source":"@site/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e.md","sourceDirName":"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM","slug":"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4f7f\u7528\u914d\u7f6e.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":0,"frontMatter":{"title":"ORM\u4f7f\u7528\u914d\u7f6e","sidebar_position":0,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u636e\u5e93ORM","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/"},"next":{"title":"ORM\u94fe\u5f0f\u64cd\u4f5c(\u91cd\u70b9)","permalink":"/1.16.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/"}}');var r=s(474848),t=s(28453);const l={title:"ORM\u4f7f\u7528\u914d\u7f6e",sidebar_position:0,hide_title:!0},i=void 0,o={},c=[{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u5b8c\u6574\u914d\u7f6e",id:"\u5b8c\u6574\u914d\u7f6e",level:3},{value:"\u7b80\u5316\u914d\u7f6e(\u63a8\u8350)",id:"\u7b80\u5316\u914d\u7f6e\u63a8\u8350",level:3},{value:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e",id:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e",level:3},{value:"\u539f\u751f\u914d\u7f6e(\u9ad8\u9636\uff0c\u53ef\u9009)",id:"\u539f\u751f\u914d\u7f6e\u9ad8\u9636\u53ef\u9009",level:2},{value:"\u6570\u636e\u7ed3\u6784",id:"\u6570\u636e\u7ed3\u6784",level:3},{value:"\u914d\u7f6e\u65b9\u6cd5",id:"\u914d\u7f6e\u65b9\u6cd5",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u63a8\u8350\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u53ca\u5355\u4f8b\u5bf9\u8c61\u6765\u7ba1\u7406\u548c\u4f7f\u7528\u6570\u636e\u5e93\u64cd\u4f5c\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"g"})," \u5bf9\u8c61\u7ba1\u7406\u6a21\u5757\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:'g.DB("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u65b9\u6cd5\u83b7\u53d6\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff0c\u6570\u636e\u5e93\u5bf9\u8c61\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6 ",(0,r.jsx)(n.code,{children:"config.toml"})," \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u76f8\u5e94\u914d\u7f6e\u9879\uff08\u901a\u8fc7\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\uff09\uff0c\u5e76\u81ea\u52a8\u521d\u59cb\u5316\u8be5\u6570\u636e\u5e93\u64cd\u4f5c\u7684\u5355\u4f8b\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u529f\u80fd\u4f7f\u7528\u7684\u662f\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u5b9e\u73b0\uff0c\u56e0\u6b64\u540c\u6837\u652f\u6301\u591a\u79cd\u6570\u636e\u683c\u5f0f\u5982\uff1a ",(0,r.jsx)(n.code,{children:"toml"}),", ",(0,r.jsx)(n.code,{children:"yaml"}),", ",(0,r.jsx)(n.code,{children:"json"}),", ",(0,r.jsx)(n.code,{children:"xml"}),"\u3002\u9ed8\u8ba4\u5e76\u4e14\u63a8\u8350\u7684\u914d\u7f6e\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u4e3a ",(0,r.jsx)(n.code,{children:"toml"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7bc7\u5e45\u6709\u9650\uff0c\u8fd9\u91cc\u4ec5\u5c55\u793a\u4e86\u63a8\u8350\u7684 ",(0,r.jsx)(n.code,{children:"toml"})," \u683c\u5f0f\u7684\u6587\u4ef6\u793a\u4f8b\u683c\u5f0f\uff0c\u5176\u4ed6\u914d\u7f6e\u6587\u4ef6\u7684\u6570\u636e\u683c\u5f0f\u8bf7\u81ea\u884c\u7814\u7a76\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b8c\u6574\u914d\u7f6e",children:"\u5b8c\u6574\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b8c\u6574\u7684 ",(0,r.jsx)(n.code,{children:"config.toml"})," \u6570\u636e\u5e93\u914d\u7f6e\u9879\u7684\u6570\u636e\u683c\u5f0f\u5f62\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[database]\n    [[database.\u5206\u7ec4\u540d\u79f0]]\n        host                 = "\u5730\u5740"\n        port                 = "\u7aef\u53e3"\n        user                 = "\u8d26\u53f7"\n        pass                 = "\u5bc6\u7801"\n        name                 = "\u6570\u636e\u5e93\u540d\u79f0"\n        type                 = "\u6570\u636e\u5e93\u7c7b\u578b(mysql/pgsql/mssql/sqlite/oracle)"\n        link                 = "(\u53ef\u9009)\u81ea\u5b9a\u4e49\u6570\u636e\u5e93\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548\uff0c\u4f46\u662ftype\u5fc5\u987b\u6709\u503c"         role                 = "(\u53ef\u9009)\u6570\u636e\u5e93\u4e3b\u4ece\u89d2\u8272(master/slave)\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u4e3b\u4ece\u673a\u5236\u8bf7\u5747\u8bbe\u7f6e\u4e3amaster"\n        debug                = "(\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f"\n        prefix               = "(\u53ef\u9009)\u8868\u540d\u524d\u7f00"\n        dryRun               = "(\u53ef\u9009)ORM\u7a7a\u8dd1(\u53ea\u8bfb\u4e0d\u5199)"\n        charset              = "(\u53ef\u9009)\u6570\u636e\u5e93\u7f16\u7801(\u5982: utf8/gbk/gb2312)\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3autf8"\n        weight               = "(\u53ef\u9009)\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\uff0c\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u63a7\u5236\uff0c\u4e0d\u4f7f\u7528\u5e94\u7528\u5c42\u7684\u8d1f\u8f7d\u5747\u8861\u673a\u5236\u8bf7\u7f6e\u7a7a"\n        maxIdle              = "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570"\n        maxOpen              = "(\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570"\n        maxLifetime          = "(\u53ef\u9009)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6"\n        createdAt            = "(\u53ef\u9009)\u81ea\u52a8\u521b\u5efa\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n        updatedAt            = "(\u53ef\u9009)\u81ea\u52a8\u66f4\u65b0\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n        deletedAt            = "(\u53ef\u9009)\u8f6f\u5220\u9664\u65f6\u95f4\u5b57\u6bb5\u540d\u79f0"\n        timeMaintainDisabled = "(\u53ef\u9009)\u662f\u5426\u5b8c\u5168\u5173\u95ed\u65f6\u95f4\u66f4\u65b0\u7279\u6027\uff0ctrue\u65f6CreatedAt/UpdatedAt/DeletedAt\u90fd\u5c06\u5931\u6548"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5b8c\u6574\u7684\u6570\u636e\u5e93\u914d\u7f6e\u9879\u793a\u4f8b( ",(0,r.jsx)(n.code,{children:"TOML"}),")\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    [[database.default]]\n        host         = "127.0.0.1"\n        port         = "3306"\n        user         = "root"\n        pass         = "12345678"\n        name         = "test"\n        type         = "mysql"\n        role         = "master"\n        debug        = "true"\n        dryrun       = 1\n        weight       = "100"\n        prefix       = "gf_"\n        charset      = "utf8"\n        maxIdle      = "10"\n        maxOpen      = "100"\n        maxLifetime  = "30s"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u8be5\u914d\u7f6e\u65b9\u5f0f\u65f6\uff0c\u4e3a\u4fdd\u8bc1\u6570\u636e\u5e93\u5b89\u5168\uff0c\u9ed8\u8ba4\u5e95\u5c42\u4e0d\u652f\u6301\u591a\u884c ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u6267\u884c\u3002\u4e3a\u4e86\u5f97\u5230\u66f4\u591a\u914d\u7f6e\u9879\u63a7\u5236\uff0c\u8bf7\u53c2\u8003\u63a8\u8350\u7684\u7b80\u5316\u914d\u7f6e\uff0c\u540c\u65f6\u5efa\u8bae\u60a8\u52a1\u5fc5\u4e86\u89e3\u6e05\u695a\u7b80\u5316\u914d\u7f6e\u9879\u4e2d\u6bcf\u4e2a\u8fde\u63a5\u53c2\u6570\u7684\u529f\u80fd\u4f5c\u7528\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7b80\u5316\u914d\u7f6e\u63a8\u8350",children:"\u7b80\u5316\u914d\u7f6e(\u63a8\u8350)"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u517c\u5bb9\u4e0d\u540c\u7684\u6570\u636e\u5e93\u7c7b\u578b\uff0c ",(0,r.jsx)(n.code,{children:"gdb"})," \u5c06\u6570\u636e\u5e93\u7684\u5404\u4e2a\u5b57\u6bb5\u62c6\u5206\u51fa\u6765\u5355\u72ec\u914d\u7f6e\uff0c\u8fd9\u6837\u5bf9\u4e8e\u5404\u79cd\u6570\u636e\u5e93\u7684\u5bf9\u63a5\u6765\u8bf4\u517c\u5bb9\u6027\u4f1a\u5f88\u597d\u3002\u4f46\u662f\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u770b\u8d77\u6765\u914d\u7f6e\u6bd4\u8f83\u591a\u3002\u9488\u5bf9\u4e8e\u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u5df2\u786e\u5b9a\u7684\u6570\u636e\u5e93\u7c7b\u578b\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"link"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\u3002\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    [[database.default]]\n        type = "mysql"\n        link = "root:12345678@tcp(127.0.0.1:3306)/test"\n    [[database.user]]\n        type = "mysql"\n        link = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    [[database.default]]\n        link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    [[database.user]]\n        link = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8\u610f\u4ee5\u4e0a\u6bcf\u4e00\u9879\u5206\u7ec4\u914d\u7f6e\u5747\u53ef\u4ee5\u662f\u591a\u4e2a\u8282\u70b9\uff0c\u652f\u6301\u8d1f\u8f7d\u5747\u8861\u6743\u91cd\u7b56\u7565\u3002\u5982\u679c\u4e0d\u4f7f\u7528\u591a\u8282\u70b9\u8d1f\u8f7d\u5747\u8861\u7279\u6027\uff0c\u4ec5\u4f7f\u7528\u914d\u7f6e\u5206\u7ec4\u7279\u6027\uff0c\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\u5982\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    [database.default]\n        link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n    [database.user]\n        link = "mysql:root:12345678@tcp(127.0.0.1:3306)/user"\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4ec5\u4ec5\u662f\u5355\u6570\u636e\u5e93\u8282\u70b9\uff0c\u4e0d\u4f7f\u7528\u914d\u7f6e\u5206\u7ec4\u7279\u6027\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u7b80\u5316\u4e3a\u5982\u4e0b\u683c\u5f0f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    link = "mysql:root:12345678@tcp(127.0.0.1:3306)/test"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"database"})," \u8282\u70b9\u4e2d\u7684\u914d\u7f6e\u9879\u4f7f\u7528\u6570\u7ec4\u7c7b\u578b\u6216\u952e\u503c\u5bf9\u7c7b\u578b\u90fd\u662f\u80fd\u88ab ",(0,r.jsx)(n.code,{children:"ORM"})," \u7ec4\u4ef6\u81ea\u52a8\u8bc6\u522b\u652f\u6301\u7684\u3002\u5927\u90e8\u5206\u573a\u666f\u4e2d\uff0c\u4e0d\u4f7f\u7528\u5ba2\u6237\u7aef\u5c42\u9762\u7684\u8d1f\u8f7d\u5747\u8861\u548c\u8bfb\u5199\u5206\u79bb\u7b49\u96c6\u7fa4\u7279\u6027\uff0c\u90a3\u4e48\u90fd\u53ef\u4ee5\u4f7f\u7528\u952e\u503c\u5bf9\u914d\u7f6e\uff0c\u6bcf\u4e2a\u6570\u636e\u5e93\u5206\u7ec4\u53ea\u6709\u4e00\u9879\u6570\u636e\u5e93\u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u5bf9\u5e94\u7684 ",(0,r.jsx)(n.code,{children:"link"})," \u5982\u4e0b:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"link\u914d\u7f6e"}),(0,r.jsx)(n.th,{children:"\u66f4\u591a\u53c2\u6570"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mysql"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mysql: \u8d26\u53f7:\u5bc6\u7801@tcp(\u5730\u5740:\u7aef\u53e3)/\u6570\u636e\u5e93\u540d\u79f0"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/go-sql-driver/mysql",children:"mysql"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pgsql"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pgsql: user=\u8d26\u53f7 password=\u5bc6\u7801 host=\u5730\u5740 port=\u7aef\u53e3 dbname=\u6570\u636e\u5e93\u540d\u79f0"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/lib/pq",children:"pq"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mssql"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"mssql: user id=\u8d26\u53f7;password=\u5bc6\u7801;server=\u5730\u5740;port=\u7aef\u53e3;database=\u6570\u636e\u5e93\u540d\u79f0;encrypt=disable"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/denisenkom/go-mssqldb",children:"go-mssqldb"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sqlite"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"sqlite: \u6587\u4ef6\u7edd\u5bf9\u8def\u5f84"})," (\u5982: ",(0,r.jsx)(n.code,{children:"/var/lib/db.sqlite3"}),")"]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/mattn/go-sqlite3",children:"go-sqlite3"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"oracle"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"oracle: \u8d26\u53f7/\u5bc6\u7801@\u5730\u5740:\u7aef\u53e3/\u6570\u636e\u5e93\u540d\u79f0"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/mattn/go-oci8",children:"go-oci8"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5404\u6570\u636e\u5e93\u7c7b\u578b\u66f4\u8be6\u7ec6\u7684 ",(0,r.jsx)(n.code,{children:"link"})," \u53c2\u6570\u4fe1\u606f\u8bf7\u67e5\u770b\u5bf9\u5e94\u5f15\u64ce\u5b98\u7f51\uff0c\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/",children:"\u6570\u636e\u5e93ORM"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e",children:"\u65e5\u5fd7\u8f93\u51fa\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u652f\u6301\u65e5\u5fd7\u8f93\u51fa\uff0c\u5185\u90e8\u4f7f\u7528\u7684\u662f ",(0,r.jsx)(n.code,{children:"glog.Logger"})," \u5bf9\u8c61\u5b9e\u73b0\u65e5\u5fd7\u7ba1\u7406\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u5bf9\u65e5\u5fd7\u5bf9\u8c61\u8fdb\u884c\u914d\u7f6e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b ",(0,r.jsx)(n.code,{children:"gdb"})," \u5173\u95ed\u4e86 ",(0,r.jsx)(n.code,{children:"DEBUG"})," \u65e5\u5fd7\u8f93\u51fa\uff0c\u5982\u679c\u9700\u8981\u6253\u5f00 ",(0,r.jsx)(n.code,{children:"DEBUG"})," \u4fe1\u606f\u9700\u8981\u5c06\u6570\u636e\u5e93\u7684 ",(0,r.jsx)(n.code,{children:"debug"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"true"}),"\u3002\u4ee5\u4e0b\u662f\u4e3a\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'[database]\n    [database.logger]\n        path   = "/var/log/gf-app/sql"\n        level  = "all"\n        stdout = true\n    [database.primary]\n        link   = "mysql:root:12345678@tcp(127.0.0.1:3306)/user_center"\n        debug  = true\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"database.logger"})," \u5373\u4e3a ",(0,r.jsx)(n.code,{children:"gdb"})," \u7684\u65e5\u5fd7\u914d\u7f6e\uff0c\u5f53\u8be5\u914d\u7f6e\u4e0d\u5b58\u5728\u65f6\uff0c\u5c06\u4f1a\u4f7f\u7528\u65e5\u5fd7\u7ec4\u4ef6\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%97%A5%E5%BF%97%E7%BB%84%E4%BB%B6/",children:"\u65e5\u5fd7\u7ec4\u4ef6"})," \u7ae0\u8282\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u54e6\uff1a\u7531\u4e8e ",(0,r.jsx)(n.code,{children:"ORM"})," \u5e95\u5c42\u90fd\u662f\u91c7\u7528\u5b89\u5168\u7684\u9884\u5904\u7406\u6267\u884c\u65b9\u5f0f\uff0c\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u4e0e\u53c2\u6570\u5176\u5b9e\u662f\u5206\u5f00\u7684\uff0c\u56e0\u6b64\u65e5\u5fd7\u4e2d\u8bb0\u5f55\u7684\u5b8c\u6574 ",(0,r.jsx)(n.code,{children:"SQL"})," \u4ec5\u4f5c\u53c2\u8003\u65b9\u4fbf\u4eba\u5de5\u9605\u8bfb\uff0c\u5e76\u4e0d\u662f\u771f\u6b63\u63d0\u4ea4\u5230\u5e95\u5c42\u7684 ",(0,r.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u539f\u751f\u914d\u7f6e\u9ad8\u9636\u53ef\u9009",children:"\u539f\u751f\u914d\u7f6e(\u9ad8\u9636\uff0c\u53ef\u9009)"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a\u6570\u636e\u5e93\u5e95\u5c42\u7ba1\u7406\u914d\u7f6e\u4ecb\u7ecd\uff0c\u5982\u679c\u60a8\u5bf9\u6570\u636e\u5e93\u7684\u5e95\u5c42\u914d\u7f6e\u7ba1\u7406\u6bd4\u8f83\u611f\u5174\u8da3\uff0c\u53ef\u7ee7\u7eed\u9605\u8bfb\u540e\u7eed\u7ae0\u8282\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"gdb"})," \u6570\u636e\u5e93\u7ba1\u7406\u6a21\u5757\u7684\u5185\u90e8\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type Config      map[string]ConfigGroup // \u6570\u636e\u5e93\u914d\u7f6e\u5bf9\u8c61\ntype ConfigGroup []ConfigNode           // \u6570\u636e\u5e93\u5206\u7ec4\u914d\u7f6e\n// \u6570\u636e\u5e93\u914d\u7f6e\u9879(\u4e00\u4e2a\u5206\u7ec4\u914d\u7f6e\u5bf9\u5e94\u591a\u4e2a\u914d\u7f6e\u9879)\ntype ConfigNode  struct {\n    Host             string        // \u5730\u5740\n    Port             string        // \u7aef\u53e3\n    User             string        // \u8d26\u53f7\n    Pass             string        // \u5bc6\u7801\n    Name             string        // \u6570\u636e\u5e93\u540d\u79f0\n    Type             string        // \u6570\u636e\u5e93\u7c7b\u578b\uff1amysql, sqlite, mssql, pgsql, oracle    Link             string        // (\u53ef\u9009)\u81ea\u5b9a\u4e49\u94fe\u63a5\u4fe1\u606f\uff0c\u5f53\u8be5\u5b57\u6bb5\u88ab\u8bbe\u7f6e\u503c\u65f6\uff0c\u4ee5\u4e0a\u94fe\u63a5\u5b57\u6bb5(Host,Port,User,Pass,Name)\u5c06\u5931\u6548(\u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a\u6269\u5c55\u529f\u80fd)     Role             string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3amaster)\u6570\u636e\u5e93\u7684\u89d2\u8272\uff0c\u7528\u4e8e\u4e3b\u4ece\u64cd\u4f5c\u5206\u79bb\uff0c\u81f3\u5c11\u9700\u8981\u6709\u4e00\u4e2amaster\uff0c\u53c2\u6570\u503c\uff1amaster, slave\n    Debug            bool          // (\u53ef\u9009)\u5f00\u542f\u8c03\u8bd5\u6a21\u5f0f\n    Charset          string        // (\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a utf8)\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a utf8\n    Prefix           string        // (\u53ef\u9009)\u8868\u540d\u524d\u7f00\n    Weight           int           // (\u53ef\u9009)\u7528\u4e8e\u8d1f\u8f7d\u5747\u8861\u7684\u6743\u91cd\u8ba1\u7b97\uff0c\u5f53\u96c6\u7fa4\u4e2d\u53ea\u6709\u4e00\u4e2a\u8282\u70b9\u65f6\uff0c\u6743\u91cd\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\n    MaxIdleConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u95f2\u7f6e\u7684\u8fde\u63a5\u6570\n    MaxOpenConnCount int           // (\u53ef\u9009)\u8fde\u63a5\u6c60\u6700\u5927\u6253\u5f00\u7684\u8fde\u63a5\u6570\n    MaxConnLifetime  time.Duration // (\u53ef\u9009\uff0c\u5355\u4f4d\u79d2)\u8fde\u63a5\u5bf9\u8c61\u53ef\u91cd\u590d\u4f7f\u7528\u7684\u65f6\u95f4\u957f\u5ea6\n}\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ConfigNode"})," \u7528\u4e8e\u5b58\u50a8\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u4fe1\u606f\uff1b ",(0,r.jsx)(n.code,{children:"ConfigGroup"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u7ec4\u6210\u7684\u914d\u7f6e\u5206\u7ec4(\u4e00\u822c\u4e00\u4e2a\u5206\u7ec4\u5bf9\u5e94\u4e00\u4e2a\u4e1a\u52a1\u6570\u636e\u5e93\u96c6\u7fa4)\uff1b ",(0,r.jsx)(n.code,{children:"Config"})," \u7528\u4e8e\u7ba1\u7406\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"ConfigGroup"})," \u914d\u7f6e\u5206\u7ec4\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u914d\u7f6e\u7ba1\u7406\u7279\u70b9\uff1a"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u591a\u8282\u70b9\u6570\u636e\u5e93\u96c6\u7fa4\u7ba1\u7406\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u4e2a\u8282\u70b9\u53ef\u4ee5\u5355\u72ec\u914d\u7f6e\u8fde\u63a5\u5c5e\u6027\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\u7ba1\u7406\u6570\u636e\u5e93\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5bf9\u6570\u636e\u5e93\u96c6\u7fa4\u5206\u7ec4\u7ba1\u7406\uff0c\u6309\u7167\u5206\u7ec4\u540d\u79f0\u83b7\u53d6\u5b9e\u4f8b\u5316\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\uff1b"}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u591a\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ConfigNode.Type"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301 ",(0,r.jsx)(n.code,{children:"Master-Slave"})," \u8bfb\u5199\u5206\u79bb\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ConfigNode.Role"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u652f\u6301\u5ba2\u6237\u7aef\u7684\u8d1f\u8f7d\u5747\u8861\u7ba1\u7406\uff0c\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ConfigNode.Weight"})," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u503c\u8d8a\u5927\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8\uff1b"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7279\u522b\u8bf4\u660e\uff0c ",(0,r.jsx)(n.code,{children:"gdb"})," \u7684\u914d\u7f6e\u7ba1\u7406\u6700\u5927\u7684 ",(0,r.jsx)(n.strong,{children:"\u7279\u70b9"})," \u662f\uff0c\uff08\u540c\u4e00\u8fdb\u7a0b\u4e2d\uff09\u6240\u6709\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u4fe1\u606f\u90fd\u4f7f\u7528\u540c\u4e00\u4e2a\u914d\u7f6e\u7ba1\u7406\u6a21\u5757\u8fdb\u884c\u7edf\u4e00\u7ef4\u62a4\uff0c ",(0,r.jsx)(n.strong,{children:"\u4e0d\u540c\u4e1a\u52a1\u7684\u6570\u636e\u5e93\u96c6\u7fa4\u914d\u7f6e\u4f7f\u7528\u4e0d\u540c\u7684\u5206\u7ec4\u540d\u79f0"})," \u8fdb\u884c\u914d\u7f6e\u548c\u83b7\u53d6\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e\u65b9\u6cd5",children:"\u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u662f\u539f\u751f\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u6765\u914d\u7f6e\u7ba1\u7406\u6570\u636e\u5e93\u3002\u5982\u679c\u5f00\u53d1\u8005\u60f3\u8981\u81ea\u884c\u63a7\u5236\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u65b9\u6cd5\u3002\u82e5\u65e0\u9700\u8981\u53ef\u5ffd\u7565\u8be5\u7ae0\u8282\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u63a5\u53e3\u6587\u6863\uff1a ",(0,r.jsx)(n.a,{href:"https://godoc.org/github.com/gogf/gf/database/gdb",children:"https://godoc.org/github.com/gogf/gf/database/gdb"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u6307\u5b9a\u7684\u5206\u7ec4\u4e2d\nfunc AddConfigNode(group string, node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u540c\u540d\u8986\u76d6)\nfunc AddConfigGroup(group string, nodes ConfigGroup)\n\n// \u6dfb\u52a0\u4e00\u4e2a\u6570\u636e\u5e93\u8282\u70b9\u5230\u9ed8\u8ba4\u7684\u5206\u7ec4\u4e2d(\u9ed8\u8ba4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigNode(node ConfigNode)\n// \u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\u5206\u7ec4\u5230\u6570\u636e\u5e93\u914d\u7f6e\u7ba1\u7406\u4e2d(\u9ed8\u8ba4\u5206\u7ec4\u4e3adefault\uff0c\u53ef\u4fee\u6539)\nfunc AddDefaultConfigGroup(nodes ConfigGroup)\n\n// \u8bbe\u7f6e\u9ed8\u8ba4\u7684\u5206\u7ec4\u540d\u79f0\uff0c\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u5c06\u4f1a\u81ea\u52a8\u8bfb\u53d6\u8be5\u5206\u7ec4\u914d\u7f6e\nfunc SetDefaultGroup(groupName string)\n\n// \u8bbe\u7f6e\u6570\u636e\u5e93\u914d\u7f6e\u4e3a\u5b9a\u4e49\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u4f1a\u5c06\u539f\u6709\u914d\u7f6e\u8986\u76d6\nfunc SetConfig(c Config)\n\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u5206\u7ec4\u8868\u793a\uff0c\u5982\u679c\u83b7\u53d6\u6570\u636e\u5e93\u5bf9\u8c61\u65f6\u4e0d\u6307\u5b9a\u914d\u7f6e\u5206\u7ec4\u540d\u79f0\uff0c\u90a3\u4e48 ",(0,r.jsx)(n.code,{children:"gdb"})," \u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e\u5206\u7ec4\u3002\u4f8b\u5982\uff1a ",(0,r.jsx)(n.code,{children:"gdb.New()"})," \u53ef\u83b7\u53d6\u4e00\u4e2a\u9ed8\u8ba4\u5206\u7ec4\u7684\u6570\u636e\u5e93\u5bf9\u8c61\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7b80\u5355\u7684\u505a\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"gdb"})," \u5305\u7684 ",(0,r.jsx)(n.code,{children:"SetConfig"})," \u914d\u7f6e\u7ba1\u7406\u65b9\u6cd5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u5e93\u5168\u5c40\u914d\u7f6e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'gdb.SetConfig(gdb.Config {\n    "default" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.100",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n        gdb.ConfigNode {\n            Host     : "192.168.1.101",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "slave",\n            Weight   : 100,\n        },\n    },\n    "user-center" : gdb.ConfigGroup {\n        gdb.ConfigNode {\n            Host     : "192.168.1.110",\n            Port     : "3306",\n            User     : "root",\n            Pass     : "123456",\n            Name     : "test",\n            Type     : "mysql",\n            Role     : "master",\n            Weight   : 100,\n        },\n    },\n})\n\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u968f\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:'gdb.New("\u6570\u636e\u5e93\u5206\u7ec4\u540d\u79f0")'})," \u6765\u83b7\u53d6\u4e00\u4e2a\u6570\u636e\u5e93\u64cd\u4f5c\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u7528\u4e8e\u540e\u7eed\u7684\u6570\u636e\u5e93\u4e00\u7cfb\u5217\u65b9\u6cd5/\u94fe\u5f0f\u64cd\u4f5c\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var d=s(296540);const r={},t=d.createContext(r);function l(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);