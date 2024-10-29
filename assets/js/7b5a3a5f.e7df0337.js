"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[9083],{54110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(74848),l=t(28453);const o={title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",sidebar_position:1,hide_title:!0},s=void 0,r={id:"WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",description:"GoFrame \u652f\u6301\u975e\u5e38\u65b9\u4fbf\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\uff0c\u5e76\u4e14HTTP\u5ba2\u6237\u7aef\u5bf9\u4e0a\u4f20\u529f\u80fd\u8fdb\u884c\u4e86\u5fc5\u8981\u7684\u5c01\u88c5\u5e76\u6781\u5927\u7b80\u5316\u4e86\u4e0a\u4f20\u529f\u80fd\u8c03\u7528\u3002",source:"@site/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/1-HTTPClient-\u6587\u4ef6\u4e0a\u4f20.md",sourceDirName:"7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient",slug:"/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",permalink:"/gf-site/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u6587\u4ef6\u4e0a\u4f20",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/7-WEB\u670d\u52a1\u5f00\u53d1/9-HTTPClient/1-HTTPClient-\u6587\u4ef6\u4e0a\u4f20.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:1,frontMatter:{title:"HTTPClient-\u6587\u4ef6\u4e0a\u4f20",sidebar_position:1,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"HTTPClient-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u57fa\u672c\u4f7f\u7528"},next:{title:"HTTPClient-\u81ea\u5b9a\u4e49Cookie",permalink:"/gf-site/docs/2.7.x/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u81ea\u5b9a\u4e49Cookie"}},d={},c=[{value:"\u670d\u52a1\u7aef",id:"\u670d\u52a1\u7aef",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u5355\u6587\u4ef6\u4e0a\u4f20",id:"\u5355\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u591a\u6587\u4ef6\u4e0a\u4f20",id:"\u591a\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",level:2},{value:"\u89c4\u8303\u8def\u7531\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6",id:"\u89c4\u8303\u8def\u7531\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u652f\u6301\u975e\u5e38\u65b9\u4fbf\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\uff0c\u5e76\u4e14HTTP\u5ba2\u6237\u7aef\u5bf9\u4e0a\u4f20\u529f\u80fd\u8fdb\u884c\u4e86\u5fc5\u8981\u7684\u5c01\u88c5\u5e76\u6781\u5927\u7b80\u5316\u4e86\u4e0a\u4f20\u529f\u80fd\u8c03\u7528\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\u54e6\uff1a\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u53d7\u5230 ",(0,i.jsx)(n.code,{children:"ghttp.Server"})," \u7684 ",(0,i.jsx)(n.code,{children:"ClientMaxBodySize"})," \u914d\u7f6e\u5f71\u54cd\uff1a ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})," \u9ed8\u8ba4\u652f\u6301\u7684\u4e0a\u4f20\u6587\u4ef6\u5927\u5c0f\u4e3a ",(0,i.jsx)(n.code,{children:"8MB"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u670d\u52a1\u7aef",children:"\u670d\u52a1\u7aef"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u670d\u52a1\u7aef\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"Request"})," \u5bf9\u8c61\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n)\n\n// Upload uploads files to /tmp .\nfunc Upload(r *ghttp.Request) {\n\tfiles := r.GetUploadFiles("upload-file")\n    names, err := files.Save("/tmp/")\n    if err != nil {\n\t\tr.Response.WriteExit(err)\n\t}\n\tr.Response.WriteExit("upload successfully: ", names)\n}\n\n// UploadShow shows uploading simgle file page.\nfunc UploadShow(r *ghttp.Request) {\n\tr.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload File Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\n// UploadShowBatch shows uploading multiple files page.\nfunc UploadShowBatch(r *ghttp.Request) {\n\tr.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload Files Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\nfunc main() {\n\ts := g.Server()\n\ts.Group("/upload", func(group *ghttp.RouterGroup) {\n\t\tgroup.POST("/", Upload)\n\t\tgroup.ALL("/show", UploadShow)\n\t\tgroup.ALL("/batch", UploadShowBatch)\n\t})\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u670d\u52a1\u7aef\u63d0\u4f9b\u4e863\u4e2a\u63a5\u53e3\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u5730\u5740\u7528\u4e8e\u5c55\u793a\u5355\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684H5\u9875\u9762\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/batch",children:"http://127.0.0.1:8199/upload/batch"})," \u5730\u5740\u7528\u4e8e\u5c55\u793a\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\u7684H5\u9875\u9762\uff1b"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload",children:"http://127.0.0.1:8199/upload"})," \u63a5\u53e3\u7528\u4e8e\u771f\u5b9e\u7684\u8868\u5355\u6587\u4ef6\u4e0a\u4f20\uff0c\u8be5\u63a5\u53e3\u540c\u65f6\u652f\u6301\u5355\u4e2a\u6587\u4ef6\u6216\u8005\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u8fd9\u91cc\u8bbf\u95ee ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u9009\u62e9\u9700\u8981\u4e0a\u4f20\u7684\u5355\u4e2a\u6587\u4ef6\uff0c\u63d0\u4ea4\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u4e0a\u4f20\u6210\u529f\u5230\u670d\u52a1\u5668\u4e0a\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5173\u952e\u4ee3\u7801\u8bf4\u660e"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4eec\u5728\u670d\u52a1\u7aef\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"r.GetUploadFiles"})," \u65b9\u6cd5\u83b7\u5f97\u4e0a\u4f20\u7684\u6240\u6709\u6587\u4ef6\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"r.GetUploadFile"})," \u83b7\u53d6\u5355\u4e2a\u4e0a\u4f20\u7684\u6587\u4ef6\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 ",(0,i.jsx)(n.code,{children:'r.GetUploadFiles("upload-file")'})," \u4e2d\u7684\u53c2\u6570 ",(0,i.jsx)(n.code,{children:'"upload-file"'})," \u4e3a\u672c\u793a\u4f8b\u4e2d\u5ba2\u6237\u7aef\u4e0a\u4f20\u65f6\u7684\u8868\u5355\u6587\u4ef6\u57df\u540d\u79f0\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u524d\u540e\u7aef\u7ea6\u5b9a\u5728\u5ba2\u6237\u7aef\u4e2d\u5b9a\u4e49\uff0c\u4ee5\u65b9\u4fbf\u670d\u52a1\u7aef\u63a5\u6536\u8868\u5355\u6587\u4ef6\u57df\u53c2\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"files.Save"})," \u53ef\u4ee5\u5c06\u4e0a\u4f20\u7684\u591a\u4e2a\u6587\u4ef6\u65b9\u4fbf\u5730\u4fdd\u5b58\u5230\u6307\u5b9a\u7684\u76ee\u5f55\u4e0b\uff0c\u5e76\u8fd4\u56de\u4fdd\u5b58\u6210\u529f\u7684\u6587\u4ef6\u540d\u3002\u5982\u679c\u662f\u6279\u91cf\u4fdd\u5b58\uff0c\u53ea\u8981\u4efb\u610f\u4e00\u4e2a\u6587\u4ef6\u4fdd\u5b58\u5931\u8d25\uff0c\u90fd\u5c06\u4f1a\u7acb\u5373\u8fd4\u56de\u9519\u8bef\u3002\u6b64\u5916\uff0c ",(0,i.jsx)(n.code,{children:"Save"})," \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u652f\u6301\u968f\u673a\u81ea\u52a8\u547d\u540d\u4e0a\u4f20\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:'group.POST("/", Upload)'})," \u6ce8\u518c\u7684\u8def\u7531\u4ec5\u652f\u6301 ",(0,i.jsx)(n.code,{children:"POST"})," \u65b9\u5f0f\u8bbf\u95ee\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef",children:"\u5ba2\u6237\u7aef"}),"\n",(0,i.jsx)(n.h3,{id:"\u5355\u6587\u4ef6\u4e0a\u4f20",children:"\u5355\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n\tvar (\n\t\tctx  = gctx.New()\n\t\tpath = "/home/john/Workspace/Go/github.com/gogf/gf/v2/version.go"\n\t)\n\tresult, err := g.Client().Post(ctx, "http://127.0.0.1:8199/upload", "upload-file=@file:"+path)\n\tif err != nil {\n\t\tglog.Fatalf(ctx, `%+v`, err)\n\t}\n\tdefer result.Close()\n\tfmt.Println(result.ReadAllString())\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6ce8\u610f\u5230\u4e86\u5417\uff1f\u6587\u4ef6\u4e0a\u4f20\u53c2\u6570\u683c\u5f0f\u4f7f\u7528\u4e86 ",(0,i.jsx)(n.code,{children:"\u53c2\u6570\u540d=@file:\u6587\u4ef6\u8def\u5f84"})," \uff0cHTTP\u5ba2\u6237\u7aef\u5c06\u4f1a\u81ea\u52a8\u89e3\u6790 ",(0,i.jsx)(n.strong,{children:"\u6587\u4ef6\u8def\u5f84"})," \u5bf9\u5e94\u7684\u6587\u4ef6\u5185\u5bb9\u5e76\u8bfb\u53d6\u63d0\u4ea4\u7ed9\u670d\u52a1\u7aef\u3002\u539f\u672c\u590d\u6742\u7684\u6587\u4ef6\u4e0a\u4f20\u64cd\u4f5c\u88ab ",(0,i.jsx)(n.code,{children:"gf"})," \u8fdb\u884c\u4e86\u5c01\u88c5\u5904\u7406\uff0c\u7528\u6237\u53ea\u9700\u8981\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"@file:+\u6587\u4ef6\u8def\u5f84"})," \u6765\u6784\u6210\u53c2\u6570\u503c\u5373\u53ef\u3002\u5176\u4e2d\uff0c ",(0,i.jsx)(n.code,{children:"\u6587\u4ef6\u8def\u5f84"})," \u8bf7\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u8fd0\u884c\u670d\u52a1\u7aef\u7a0b\u5e8f\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u8fd0\u884c\u8fd9\u4e2a\u4e0a\u4f20\u5ba2\u6237\u7aef\uff08\u6ce8\u610f\u4fee\u6539\u4e0a\u4f20\u7684\u6587\u4ef6\u8def\u5f84\u4e3a\u672c\u5730\u771f\u5b9e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u6267\u884c\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u88ab\u6210\u529f\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u591a\u6587\u4ef6\u4e0a\u4f20",children:"\u591a\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'package main\n\nimport (\n\t"fmt"\n\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n\tvar (\n\t\tctx   = gctx.New()\n\t\tpath1 = "/Users/john/Pictures/logo1.png"\n\t\tpath2 = "/Users/john/Pictures/logo2.png"\n\t)\n\tresult, err := g.Client().Post(\n\t\tctx,\n\t\t"http://127.0.0.1:8199/upload",\n\t\tfmt.Sprintf(`upload-file=@file:%s&upload-file=@file:%s`, path1, path2),\n\t)\n\tif err != nil {\n\t\tglog.Fatalf(ctx, `%+v`, err)\n\t}\n\tdefer result.Close()\n\tfmt.Println(result.ReadAllString())\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u591a\u4e2a\u6587\u4ef6\u4e0a\u4f20\u63d0\u4ea4\u53c2\u6570\u683c\u5f0f\u4e3a ",(0,i.jsx)(n.code,{children:"\u53c2\u6570\u540d=@file:xxx&\u53c2\u6570\u540d=@file:xxx..."}),"\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"\u53c2\u6570\u540d[]=@file:xxx&\u53c2\u6570\u540d[]=@file:xxx..."})," \u7684\u5f62\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u8fd0\u884c\u670d\u52a1\u7aef\u7a0b\u5e8f\u4e4b\u540e\uff0c\u6211\u4eec\u518d\u8fd0\u884c\u8fd9\u4e2a\u4e0a\u4f20\u5ba2\u6237\u7aef\uff08\u6ce8\u610f\u4fee\u6539\u4e0a\u4f20\u7684\u6587\u4ef6\u8def\u5f84\u4e3a\u672c\u5730\u771f\u5b9e\u6587\u4ef6\u8def\u5f84\uff09\uff0c\u6267\u884c\u540e\u53ef\u4ee5\u770b\u5230\u6587\u4ef6\u88ab\u6210\u529f\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u7684\u6307\u5b9a\u8def\u5f84\u4e0b\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0",children:"\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d\u79f0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5f88\u7b80\u5355\uff0c\u4fee\u6539 ",(0,i.jsx)(n.code,{children:"FileName"})," \u5c5e\u6027\u5373\u53ef\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'s := g.Server()\ns.BindHandler("/upload", func(r *ghttp.Request) {\n    file := r.GetUploadFile("TestFile")\n    if file == nil {\n        r.Response.Write("empty file")\n        return\n    }\n    file.Filename = "MyCustomFileName.txt"\n    fileName, err := file.Save(gfile.TempDir())\n    if err != nil {\n        r.Response.Write(err)\n        return\n    }\n    r.Response.Write(fileName)\n})\ns.SetPort(8999)\ns.Run()\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u89c4\u8303\u8def\u7531\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6",children:"\u89c4\u8303\u8def\u7531\u63a5\u6536\u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u670d\u52a1\u7aef\u5982\u679c\u901a\u8fc7\u89c4\u8303\u8def\u7531\u65b9\u5f0f\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u7ed3\u6784\u5316\u7684\u53c2\u6570\u83b7\u53d6\u4e0a\u4f20\u6587\u4ef6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53c2\u6570\u63a5\u6536\u7684\u6570\u636e\u7c7b\u578b\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"*ghttp.UploadFile"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u9700\u8981\u63a5\u53e3\u6587\u6863\u4e5f\u652f\u6301\u6587\u4ef6\u7c7b\u578b\uff0c\u90a3\u4e48\u53c2\u6570\u7684\u6807\u7b7e\u4e2d\u8bbe\u7f6e ",(0,i.jsx)(n.code,{children:"type"})," \u4e3a ",(0,i.jsx)(n.code,{children:"file"})," \u7c7b\u578b"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(72771).A+"",width:"2452",height:"790"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(60904).A+"",width:"2764",height:"1400"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},72771:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/3146c1c8d37ca3745a3519f96361de6a-ccdfe2eb514f6d5688e20ec31cc76f1a.png"},60904:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/57f441f1e4666f73cc320a4e3d47f50b-409937098cfe6a9aa30a9a0d2031e81e.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const l={},o=i.createContext(l);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);