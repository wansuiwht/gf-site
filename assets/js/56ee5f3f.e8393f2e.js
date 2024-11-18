"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["52030"],{527628:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>s,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>r});var l=JSON.parse('{"id":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20","title":"HTTPClient-\u6587\u4EF6\u4E0A\u4F20","description":"GoFrame \u652F\u6301\u975E\u5E38\u65B9\u4FBF\u7684\u8868\u5355\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\uFF0C\u5E76\u4E14HTTP\u5BA2\u6237\u7AEF\u5BF9\u4E0A\u4F20\u529F\u80FD\u8FDB\u884C\u4E86\u5FC5\u8981\u7684\u5C01\u88C5\u5E76\u6781\u5927\u7B80\u5316\u4E86\u4E0A\u4F20\u529F\u80FD\u8C03\u7528\u3002","source":"@site/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20.md","sourceDirName":"WEB\u670D\u52A1\u5F00\u53D1/HTTPClient","slug":"/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.0.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u6587\u4EF6\u4E0A\u4F20.md","tags":[],"version":"2.0.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":1,"frontMatter":{"title":"HTTPClient-\u6587\u4EF6\u4E0A\u4F20","sidebar_position":1,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"HTTPClient-\u57FA\u672C\u4F7F\u7528","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u57FA\u672C\u4F7F\u7528"},"next":{"title":"HTTPClient-\u81EA\u5B9A\u4E49Cookie","permalink":"/2.0.x/WEB\u670D\u52A1\u5F00\u53D1/HTTPClient/HTTPClient-\u81EA\u5B9A\u4E49Cookie"}}'),i=t("785893"),o=t("250065");let r={title:"HTTPClient-\u6587\u4EF6\u4E0A\u4F20",sidebar_position:1,hide_title:!0},s=void 0,d={},a=[{value:"\u670D\u52A1\u7AEF",id:"\u670D\u52A1\u7AEF",level:2},{value:"\u5BA2\u6237\u7AEF",id:"\u5BA2\u6237\u7AEF",level:2},{value:"\u5355\u6587\u4EF6\u4E0A\u4F20",id:"\u5355\u6587\u4EF6\u4E0A\u4F20",level:3},{value:"\u591A\u6587\u4EF6\u4E0A\u4F20",id:"\u591A\u6587\u4EF6\u4E0A\u4F20",level:3},{value:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0",id:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0",level:2},{value:"\u89C4\u8303\u8DEF\u7531\u63A5\u6536\u4E0A\u4F20\u6587\u4EF6",id:"\u89C4\u8303\u8DEF\u7531\u63A5\u6536\u4E0A\u4F20\u6587\u4EF6",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"GoFrame"})," \u652F\u6301\u975E\u5E38\u65B9\u4FBF\u7684\u8868\u5355\u6587\u4EF6\u4E0A\u4F20\u529F\u80FD\uFF0C\u5E76\u4E14HTTP\u5BA2\u6237\u7AEF\u5BF9\u4E0A\u4F20\u529F\u80FD\u8FDB\u884C\u4E86\u5FC5\u8981\u7684\u5C01\u88C5\u5E76\u6781\u5927\u7B80\u5316\u4E86\u4E0A\u4F20\u529F\u80FD\u8C03\u7528\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6CE8\u610F\u54E6\uFF1A\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u53D7\u5230 ",(0,i.jsx)(n.code,{children:"ghttp.Server"})," \u7684 ",(0,i.jsx)(n.code,{children:"ClientMaxBodySize"})," \u914D\u7F6E\u5F71\u54CD\uFF1A ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig",children:"https://pkg.go.dev/github.com/gogf/gf/v2/net/ghttp#ServerConfig"})," \u9ED8\u8BA4\u652F\u6301\u7684\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E3A ",(0,i.jsx)(n.code,{children:"8MB"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u670D\u52A1\u7AEF",children:"\u670D\u52A1\u7AEF"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u670D\u52A1\u7AEF\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"Request"})," \u5BF9\u8C61\u83B7\u53D6\u4E0A\u4F20\u6587\u4EF6\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\n// Upload uploads files to /tmp .\nfunc Upload(r *ghttp.Request) {\n    files := r.GetUploadFiles("upload-file")\n    names, err := files.Save("/tmp/")\n    if err != nil {\n        r.Response.WriteExit(err)\n    }\n    r.Response.WriteExit("upload successfully: ", names)\n}\n\n// UploadShow shows uploading simgle file page.\nfunc UploadShow(r *ghttp.Request) {\n    r.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload File Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\n// UploadShowBatch shows uploading multiple files page.\nfunc UploadShowBatch(r *ghttp.Request) {\n    r.Response.Write(`\n    <html>\n    <head>\n        <title>GF Upload Files Demo</title>\n    </head>\n        <body>\n            <form enctype="multipart/form-data" action="/upload" method="post">\n                <input type="file" name="upload-file" />\n                <input type="file" name="upload-file" />\n                <input type="submit" value="upload" />\n            </form>\n        </body>\n    </html>\n    `)\n}\n\nfunc main() {\n    s := g.Server()\n    s.Group("/upload", func(group *ghttp.RouterGroup) {\n        group.POST("/", Upload)\n        group.ALL("/show", UploadShow)\n        group.ALL("/batch", UploadShowBatch)\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u670D\u52A1\u7AEF\u63D0\u4F9B\u4E863\u4E2A\u63A5\u53E3\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u5730\u5740\u7528\u4E8E\u5C55\u793A\u5355\u4E2A\u6587\u4EF6\u4E0A\u4F20\u7684H5\u9875\u9762\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/batch",children:"http://127.0.0.1:8199/upload/batch"})," \u5730\u5740\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20\u7684H5\u9875\u9762\uFF1B"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload",children:"http://127.0.0.1:8199/upload"})," \u63A5\u53E3\u7528\u4E8E\u771F\u5B9E\u7684\u8868\u5355\u6587\u4EF6\u4E0A\u4F20\uFF0C\u8BE5\u63A5\u53E3\u540C\u65F6\u652F\u6301\u5355\u4E2A\u6587\u4EF6\u6216\u8005\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20\uFF1B"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4EEC\u8FD9\u91CC\u8BBF\u95EE ",(0,i.jsx)(n.a,{href:"http://127.0.0.1:8199/upload/show",children:"http://127.0.0.1:8199/upload/show"})," \u9009\u62E9\u9700\u8981\u4E0A\u4F20\u7684\u5355\u4E2A\u6587\u4EF6\uFF0C\u63D0\u4EA4\u4E4B\u540E\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u5230\u670D\u52A1\u5668\u4E0A\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5173\u952E\u4EE3\u7801\u8BF4\u660E"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6211\u4EEC\u5728\u670D\u52A1\u7AEF\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"r.GetUploadFiles"})," \u65B9\u6CD5\u83B7\u5F97\u4E0A\u4F20\u7684\u6240\u6709\u6587\u4EF6\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"r.GetUploadFile"})," \u83B7\u53D6\u5355\u4E2A\u4E0A\u4F20\u7684\u6587\u4EF6\u5BF9\u8C61\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 ",(0,i.jsx)(n.code,{children:'r.GetUploadFiles("upload-file")'})," \u4E2D\u7684\u53C2\u6570 ",(0,i.jsx)(n.code,{children:'"upload-file"'})," \u4E3A\u672C\u793A\u4F8B\u4E2D\u5BA2\u6237\u7AEF\u4E0A\u4F20\u65F6\u7684\u8868\u5355\u6587\u4EF6\u57DF\u540D\u79F0\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u6839\u636E\u524D\u540E\u7AEF\u7EA6\u5B9A\u5728\u5BA2\u6237\u7AEF\u4E2D\u5B9A\u4E49\uFF0C\u4EE5\u65B9\u4FBF\u670D\u52A1\u7AEF\u63A5\u6536\u8868\u5355\u6587\u4EF6\u57DF\u53C2\u6570\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"files.Save"})," \u53EF\u4EE5\u5C06\u4E0A\u4F20\u7684\u591A\u4E2A\u6587\u4EF6\u65B9\u4FBF\u5730\u4FDD\u5B58\u5230\u6307\u5B9A\u7684\u76EE\u5F55\u4E0B\uFF0C\u5E76\u8FD4\u56DE\u4FDD\u5B58\u6210\u529F\u7684\u6587\u4EF6\u540D\u3002\u5982\u679C\u662F\u6279\u91CF\u4FDD\u5B58\uFF0C\u53EA\u8981\u4EFB\u610F\u4E00\u4E2A\u6587\u4EF6\u4FDD\u5B58\u5931\u8D25\uFF0C\u90FD\u5C06\u4F1A\u7ACB\u5373\u8FD4\u56DE\u9519\u8BEF\u3002\u6B64\u5916\uFF0C ",(0,i.jsx)(n.code,{children:"Save"})," \u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u652F\u6301\u968F\u673A\u81EA\u52A8\u547D\u540D\u4E0A\u4F20\u6587\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:'group.POST("/", Upload)'})," \u6CE8\u518C\u7684\u8DEF\u7531\u4EC5\u652F\u6301 ",(0,i.jsx)(n.code,{children:"POST"})," \u65B9\u5F0F\u8BBF\u95EE\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5BA2\u6237\u7AEF",children:"\u5BA2\u6237\u7AEF"}),"\n",(0,i.jsx)(n.h3,{id:"\u5355\u6587\u4EF6\u4E0A\u4F20",children:"\u5355\u6587\u4EF6\u4E0A\u4F20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    var (\n        ctx  = gctx.New()\n        path = "/home/john/Workspace/Go/github.com/gogf/gf/v2/version.go"\n    )\n    result, err := g.Client().Post(ctx, "http://127.0.0.1:8199/upload", "upload-file=@file:"+path)\n    if err != nil {\n        glog.Fatalf(ctx, `%+v`, err)\n    }\n    defer result.Close()\n    fmt.Println(result.ReadAllString())\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6CE8\u610F\u5230\u4E86\u5417\uFF1F\u6587\u4EF6\u4E0A\u4F20\u53C2\u6570\u683C\u5F0F\u4F7F\u7528\u4E86 ",(0,i.jsx)(n.code,{children:"\u53C2\u6570\u540D=@file:\u6587\u4EF6\u8DEF\u5F84"})," \uFF0CHTTP\u5BA2\u6237\u7AEF\u5C06\u4F1A\u81EA\u52A8\u89E3\u6790 ",(0,i.jsx)(n.strong,{children:"\u6587\u4EF6\u8DEF\u5F84"})," \u5BF9\u5E94\u7684\u6587\u4EF6\u5185\u5BB9\u5E76\u8BFB\u53D6\u63D0\u4EA4\u7ED9\u670D\u52A1\u7AEF\u3002\u539F\u672C\u590D\u6742\u7684\u6587\u4EF6\u4E0A\u4F20\u64CD\u4F5C\u88AB ",(0,i.jsx)(n.code,{children:"gf"})," \u8FDB\u884C\u4E86\u5C01\u88C5\u5904\u7406\uFF0C\u7528\u6237\u53EA\u9700\u8981\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"@file:+\u6587\u4EF6\u8DEF\u5F84"})," \u6765\u6784\u6210\u53C2\u6570\u503C\u5373\u53EF\u3002\u5176\u4E2D\uFF0C ",(0,i.jsx)(n.code,{children:"\u6587\u4EF6\u8DEF\u5F84"})," \u8BF7\u4F7F\u7528\u672C\u5730\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u8FD0\u884C\u670D\u52A1\u7AEF\u7A0B\u5E8F\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u8FD0\u884C\u8FD9\u4E2A\u4E0A\u4F20\u5BA2\u6237\u7AEF\uFF08\u6CE8\u610F\u4FEE\u6539\u4E0A\u4F20\u7684\u6587\u4EF6\u8DEF\u5F84\u4E3A\u672C\u5730\u771F\u5B9E\u6587\u4EF6\u8DEF\u5F84\uFF09\uFF0C\u6267\u884C\u540E\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u88AB\u6210\u529F\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u7684\u6307\u5B9A\u8DEF\u5F84\u4E0B\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u591A\u6587\u4EF6\u4E0A\u4F20",children:"\u591A\u6587\u4EF6\u4E0A\u4F20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gctx"\n    "github.com/gogf/gf/v2/os/glog"\n)\n\nfunc main() {\n    var (\n        ctx   = gctx.New()\n        path1 = "/Users/john/Pictures/logo1.png"\n        path2 = "/Users/john/Pictures/logo2.png"\n    )\n    result, err := g.Client().Post(\n        ctx,\n        "http://127.0.0.1:8199/upload",\n        fmt.Sprintf(`upload-file=@file:%s&upload-file=@file:%s`, path1, path2),\n    )\n    if err != nil {\n        glog.Fatalf(ctx, `%+v`, err)\n    }\n    defer result.Close()\n    fmt.Println(result.ReadAllString())\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\uFF0C\u591A\u4E2A\u6587\u4EF6\u4E0A\u4F20\u63D0\u4EA4\u53C2\u6570\u683C\u5F0F\u4E3A ",(0,i.jsx)(n.code,{children:"\u53C2\u6570\u540D=@file:xxx&\u53C2\u6570\u540D=@file:xxx..."}),"\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"\u53C2\u6570\u540D[]=@file:xxx&\u53C2\u6570\u540D[]=@file:xxx..."})," \u7684\u5F62\u5F0F\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u8FD0\u884C\u670D\u52A1\u7AEF\u7A0B\u5E8F\u4E4B\u540E\uFF0C\u6211\u4EEC\u518D\u8FD0\u884C\u8FD9\u4E2A\u4E0A\u4F20\u5BA2\u6237\u7AEF\uFF08\u6CE8\u610F\u4FEE\u6539\u4E0A\u4F20\u7684\u6587\u4EF6\u8DEF\u5F84\u4E3A\u672C\u5730\u771F\u5B9E\u6587\u4EF6\u8DEF\u5F84\uFF09\uFF0C\u6267\u884C\u540E\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u88AB\u6210\u529F\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u7684\u6307\u5B9A\u8DEF\u5F84\u4E0B\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0",children:"\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F88\u7B80\u5355\uFF0C\u4FEE\u6539 ",(0,i.jsx)(n.code,{children:"FileName"})," \u5C5E\u6027\u5373\u53EF\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'s := g.Server()\ns.BindHandler("/upload", func(r *ghttp.Request) {\n    file := r.GetUploadFile("TestFile")\n    if file == nil {\n        r.Response.Write("empty file")\n        return\n    }\n    file.Filename = "MyCustomFileName.txt"\n    fileName, err := file.Save(gfile.TempDir())\n    if err != nil {\n        r.Response.Write(err)\n        return\n    }\n    r.Response.Write(fileName)\n})\ns.SetPort(8999)\ns.Run()\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u89C4\u8303\u8DEF\u7531\u63A5\u6536\u4E0A\u4F20\u6587\u4EF6",children:"\u89C4\u8303\u8DEF\u7531\u63A5\u6536\u4E0A\u4F20\u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u670D\u52A1\u7AEF\u5982\u679C\u901A\u8FC7\u89C4\u8303\u8DEF\u7531\u65B9\u5F0F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u7ED3\u6784\u5316\u7684\u53C2\u6570\u83B7\u53D6\u4E0A\u4F20\u6587\u4EF6\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53C2\u6570\u63A5\u6536\u7684\u6570\u636E\u7C7B\u578B\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"*ghttp.UploadFile"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u9700\u8981\u63A5\u53E3\u6587\u6863\u4E5F\u652F\u6301\u6587\u4EF6\u7C7B\u578B\uFF0C\u90A3\u4E48\u53C2\u6570\u7684\u6807\u7B7E\u4E2D\u8BBE\u7F6E ",(0,i.jsx)(n.code,{children:"type"})," \u4E3A ",(0,i.jsx)(n.code,{children:"file"})," \u7C7B\u578B"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(768384).Z+"",width:"2452",height:"790"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(688663).Z+"",width:"2764",height:"1400"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},688663:function(e,n,t){t.d(n,{Z:function(){return l}});let l=t.p+"assets/images/32569b33bc76af6274738402bd6e5d80-409937098cfe6a9aa30a9a0d2031e81e.png"},768384:function(e,n,t){t.d(n,{Z:function(){return l}});let l=t.p+"assets/images/c8d8bb14c349fb6a812a01d43111094d-ccdfe2eb514f6d5688e20ec31cc76f1a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var l=t(667294);let i={},o=l.createContext(i);function r(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);