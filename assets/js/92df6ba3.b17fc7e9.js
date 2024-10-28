"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[51452],{634496:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(474848),c=t(28453);const o={title:"WebSocket\u670d\u52a1",sidebar_position:7},r=void 0,i={id:"WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/WebSocket\u670d\u52a1",title:"WebSocket\u670d\u52a1",description:"\u4f7f\u7528 goframe \u6846\u67b6\u8fdb\u884c websocket \u5f00\u53d1\u76f8\u5f53\u7b80\u5355\u3002\u6211\u4eec\u4ee5\u4e0b\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 echo\u670d\u52a1\u5668 \u6765\u6f14\u793a goframe \u6846\u67b6\u7684 websocket \u7684\u4f7f\u7528\uff08\u5ba2\u6237\u7aef\u4f7f\u7528HTML5\u5b9e\u73b0\uff09\u3002",source:"@site/versioned_docs/version-2.6.x/5-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027/7-WebSocket\u670d\u52a1.md",sourceDirName:"5-WEB\u670d\u52a1\u5f00\u53d1/11-\u9ad8\u7ea7\u7279\u6027",slug:"/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/WebSocket\u670d\u52a1",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/WebSocket\u670d\u52a1",draft:!1,unlisted:!1,tags:[],version:"2.6.x",sidebarPosition:7,frontMatter:{title:"WebSocket\u670d\u52a1",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"HOOK\u4e8b\u4ef6\u56de\u8c03",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/HOOK\u4e8b\u4ef6\u56de\u8c03"},next:{title:"\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406",permalink:"/docs/2.6.x/WEB\u670d\u52a1\u5f00\u53d1/\u9ad8\u7ea7\u7279\u6027/\u81ea\u5b9a\u4e49\u72b6\u6001\u7801\u5904\u7406"}},l={},d=[{value:"HTML5\u5ba2\u6237\u7aef",id:"html5\u5ba2\u6237\u7aef",level:2},{value:"WebSocket\u670d\u52a1\u7aef",id:"websocket\u670d\u52a1\u7aef",level:2},{value:"HTTPS\u7684WebSocket",id:"https\u7684websocket",level:2},{value:"\u793a\u4f8b\u7ed3\u679c\u5c55\u793a",id:"\u793a\u4f8b\u7ed3\u679c\u5c55\u793a",level:2},{value:"Websocket\u5b89\u5168\u6821\u9a8c",id:"websocket\u5b89\u5168\u6821\u9a8c",level:2},{value:"WebSocket Client \u5ba2\u6237\u7aef",id:"websocket-client-\u5ba2\u6237\u7aef",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"goframe"})," \u6846\u67b6\u8fdb\u884c ",(0,s.jsx)(n.code,{children:"websocket"})," \u5f00\u53d1\u76f8\u5f53\u7b80\u5355\u3002\u6211\u4eec\u4ee5\u4e0b\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"echo\u670d\u52a1\u5668"})," \u6765\u6f14\u793a ",(0,s.jsx)(n.code,{children:"goframe"})," \u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u4f7f\u7528\uff08\u5ba2\u6237\u7aef\u4f7f\u7528HTML5\u5b9e\u73b0\uff09\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"html5\u5ba2\u6237\u7aef",children:"HTML5\u5ba2\u6237\u7aef"}),"\n",(0,s.jsxs)(n.p,{children:["\u5148\u4e0a ",(0,s.jsx)(n.code,{children:"H5"})," \u5ba2\u6237\u7aef\u7684\u4ee3\u7801"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<!DOCTYPE html>\n<html lang="zh">\n<head>\n    <title>gf websocket echo server</title>\n \t<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>\n    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">\n    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"><\/script>\n</head>\n<body>\n<div class="container">\n    <div class="list-group" id="divShow"></div>\n    <div>\n        <div><input class="form-control" id="txtContent" autofocus placeholder="\u8bf7\u8f93\u5165\u53d1\u9001\u5185\u5bb9"></div>\n        <div><button class="btn btn-default" id="btnSend" style="margin-top:15px">\u53d1 \u9001</button></div>\n    </div>\n</div>\n</body>\n</html>\n\n<script type="application/javascript">\n    // \u663e\u793a\u63d0\u793a\u4fe1\u606f\n    function showInfo(content) {\n        $("<div class=\\"list-group-item list-group-item-info\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663e\u793a\u8b66\u544a\u4fe1\u606f\n    function showWaring(content) {\n        $("<div class=\\"list-group-item list-group-item-warning\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663e\u793a\u6210\u529f\u4fe1\u606f\n    function showSuccess(content) {\n        $("<div class=\\"list-group-item list-group-item-success\\">" + content + "</div>").appendTo("#divShow")\n    }\n    // \u663e\u793a\u9519\u8bef\u4fe1\u606f\n    function showError(content) {\n        $("<div class=\\"list-group-item list-group-item-danger\\">" + content + "</div>").appendTo("#divShow")\n    }\n\n    $(function () {\n        const url = "ws://127.0.0.1:8199/ws";\n        let ws  = new WebSocket(url);\n        try {\n            // ws\u8fde\u63a5\u6210\u529f\n            ws.onopen = function () {\n                showInfo("WebSocket Server [" + url +"] \u8fde\u63a5\u6210\u529f\uff01");\n            };\n            // ws\u8fde\u63a5\u5173\u95ed\n            ws.onclose = function () {\n                if (ws) {\n                    ws.close();\n                    ws = null;\n                }\n                showError("WebSocket Server [" + url +"] \u8fde\u63a5\u5173\u95ed\uff01");\n            };\n            // ws\u8fde\u63a5\u9519\u8bef\n            ws.onerror = function () {\n                if (ws) {\n                    ws.close();\n                    ws = null;\n                }\n                showError("WebSocket Server [" + url +"] \u8fde\u63a5\u5173\u95ed\uff01");\n            };\n            // ws\u6570\u636e\u8fd4\u56de\u5904\u7406\n            ws.onmessage = function (result) {\n                showWaring(" > " + result.data);\n            };\n        } catch (e) {\n            alert(e.message);\n        }\n\n        // \u6309\u94ae\u70b9\u51fb\u53d1\u9001\u6570\u636e\n        $("#btnSend").on("click", function () {\n            if (ws == null) {\n                showError("WebSocket Server [" + url +"] \u8fde\u63a5\u5931\u8d25\uff0c\u8bf7F5\u5237\u65b0\u9875\u9762!");\n                return;\n            }\n            const content = $.trim($("#txtContent").val()).replace("/[\\n]/g", "");\n            if (content.length <= 0) {\n                alert("\u8bf7\u8f93\u5165\u53d1\u9001\u5185\u5bb9!");\n                return;\n            }\n            $("#txtContent").val("")\n            showSuccess(content);\n            ws.send(content);\n        });\n\n        // \u56de\u8f66\u6309\u94ae\u89e6\u53d1\u53d1\u9001\u70b9\u51fb\u4e8b\u4ef6\n        $("#txtContent").on("keydown", function (event) {\n            if (event.keyCode === 13) {\n                $("#btnSend").trigger("click");\n            }\n        });\n    })\n\n<\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\u6211\u4eec\u8fd9\u91cc\u7684\u670d\u52a1\u7aef\u8fde\u63a5\u5730\u5740\u4e3a\uff1a ",(0,s.jsx)(n.code,{children:"ws://127.0.0.1:8199/ws"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u7684\u529f\u80fd\u5f88\u7b80\u5355\uff0c\u4e3b\u8981\u5b9e\u73b0\u4e86\u8fd9\u51e0\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u4e0e\u670d\u52a1\u7aef ",(0,s.jsx)(n.code,{children:"websocket"})," \u8fde\u63a5\u72b6\u6001\u4fdd\u6301\u53ca\u4fe1\u606f\u5c55\u793a\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u754c\u9762\u8f93\u5165\u5185\u5bb9\u5e76\u53d1\u9001\u4fe1\u606f\u5230 ",(0,s.jsx)(n.code,{children:"websocket"})," \u670d\u52a1\u7aef\uff1b"]}),"\n",(0,s.jsxs)(n.li,{children:["\u63a5\u6536\u5230 ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u8fd4\u56de\u4fe1\u606f\u540e\u56de\u663e\u5728\u754c\u9762\u4e0a\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocket\u670d\u52a1\u7aef",children:"WebSocket\u670d\u52a1\u7aef"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gfile"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\nvar ctx = gctx.New()\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/ws", func(r *ghttp.Request) {\n\t\tws, err := r.WebSocket()\n\t\tif err != nil {\n\t\t\tglog.Error(ctx, err)\n\t\t\tr.Exit()\n\t\t}\n\t\tfor {\n\t\t\tmsgType, msg, err := ws.ReadMessage()\n\t\t\tif err != nil {\n\t\t\t\treturn\n\t\t\t}\n\t\t\tif err = ws.WriteMessage(msgType, msg); err != nil {\n\t\t\t\treturn\n\t\t\t}\n\t\t}\n\t})\n\ts.SetServerRoot(gfile.MainPkgPath())\n\ts.SetPort(8199)\n\ts.Run()\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u770b\u5230\uff0c\u670d\u52a1\u7aef\u7684\u4ee3\u7801\u76f8\u5f53\u7b80\u5355\uff0c\u8fd9\u91cc\u9700\u8981\u7740\u91cd\u8bf4\u660e\u7684\u662f\u8fd9\u51e0\u4e2a\u5730\u65b9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"WebSocket\u65b9\u6cd5"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"websocket"})," \u670d\u52a1\u7aef\u7684\u8def\u7531\u6ce8\u518c\u65b9\u5f0f\u548c\u666e\u901a\u7684 ",(0,s.jsx)(n.code,{children:"http"})," \u56de\u8c03\u51fd\u6570\u6ce8\u518c\u65b9\u5f0f\u4e00\u6837\uff0c\u4f46\u662f\u5728\u63a5\u53e3\u5904\u7406\u4e2d\u6211\u4eec\u9700\u8981\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"ghttp.Request.WebSocket"})," \u65b9\u6cd5\uff08\u8fd9\u91cc\u76f4\u63a5\u4f7f\u7528\u6307\u9488\u5bf9\u8c61 ",(0,s.jsx)(n.code,{children:"r.WebSocket()"}),"\uff09\u5c06\u8bf7\u6c42\u8f6c\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"websocket"})," \u64cd\u4f5c\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"WebSocket\u5bf9\u8c61"}),"\uff0c\u8be5\u5bf9\u8c61\u7528\u4e8e\u540e\u7eed\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u901a\u4fe1\u64cd\u4f5c\u3002\u5f53\u7136\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u8bf7\u6c42\u5e76\u975e\u4e3a ",(0,s.jsx)(n.code,{children:"websocket"})," \u64cd\u4f5c\u65f6\uff0c\u8f6c\u6362\u5c06\u4f1a\u5931\u8d25\uff0c\u8be5\u65b9\u6cd5\u4f1a\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\uff0c\u4f7f\u7528\u65f6\u8bf7\u6ce8\u610f\u5224\u65ad\u65b9\u6cd5\u7684 ",(0,s.jsx)(n.code,{children:"error"})," \u8fd4\u56de\u503c\u3002"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"ReadMessage & WriteMessage"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8bfb\u53d6\u6d88\u606f\u4ee5\u53ca\u5199\u5165\u6d88\u606f\u5bf9\u5e94\u7684\u662f ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u6570\u636e\u8bfb\u53d6\u4ee5\u53ca\u5199\u5165\u64cd\u4f5c( ",(0,s.jsx)(n.code,{children:"ReadMessage & WriteMessage"}),")\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u90fd\u6709\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"msgType"})," \u7684\u53d8\u91cf\uff0c\u8868\u793a\u8bf7\u6c42\u8bfb\u53d6\u53ca\u5199\u5165\u6570\u636e\u7684\u7c7b\u578b\uff0c\u5e38\u89c1\u7684\u4e24\u79cd\u6570\u636e\u7c7b\u578b\u4e3a\uff1a\u5b57\u7b26\u4e32\u6570\u636e\u6216\u8005\u4e8c\u8fdb\u5236\u6570\u636e\u3002\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u7531\u4e8e\u63a5\u53e3\u53cc\u65b9\u90fd\u4f1a\u7ea6\u5b9a\u7edf\u4e00\u7684\u6570\u636e\u683c\u5f0f\uff0c\u56e0\u6b64\u8bfb\u53d6\u548c\u5199\u5165\u7684 ",(0,s.jsx)(n.code,{children:"msgType"})," \u51e0\u4e4e\u90fd\u662f\u4e00\u81f4\u7684\uff0c\u6240\u4ee5\u5728\u672c\u793a\u4f8b\u4e2d\u7684\u8fd4\u56de\u6d88\u606f\u65f6\uff0c\u6570\u636e\u7c7b\u578b\u53c2\u6570\u76f4\u63a5\u4f7f\u7528\u7684\u662f\u8bfb\u53d6\u5230\u7684 ",(0,s.jsx)(n.code,{children:"msgType"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"https\u7684websocket",children:"HTTPS\u7684WebSocket"}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u652f\u6301 ",(0,s.jsx)(n.code,{children:"HTTPS"})," \u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u670d\u52a1\uff0c\u53ea\u9700\u8981\u4f9d\u8d56\u7684 ",(0,s.jsx)(n.code,{children:"WebServer"})," \u652f\u6301 ",(0,s.jsx)(n.code,{children:"HTTPS"})," \u5373\u53ef\uff0c\u8bbf\u95ee\u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u5730\u5740\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"wss://"})," \u534f\u8bae\u8bbf\u95ee\u3002\u4ee5\u4e0a\u5ba2\u6237\u7aef ",(0,s.jsx)(n.code,{children:"HTML5"})," \u9875\u9762\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"WebSocket"})," \u8bbf\u95ee\u5730\u5740\u9700\u8981\u4fee\u6539\u4e3a\uff1a ",(0,s.jsx)(n.code,{children:"wss://127.0.0.1:8199/wss"}),"\u3002\u670d\u52a1\u7aef\u793a\u4f8b\u4ee3\u7801\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'package main\n\nimport (\n\t"github.com/gogf/gf/v2/frame/g"\n\t"github.com/gogf/gf/v2/net/ghttp"\n\t"github.com/gogf/gf/v2/os/gctx"\n\t"github.com/gogf/gf/v2/os/gfile"\n\t"github.com/gogf/gf/v2/os/glog"\n)\n\nvar ctx = gctx.New()\n\nfunc main() {\n\ts := g.Server()\n\ts.BindHandler("/wss", func(r *ghttp.Request) {\n\t\tws, err := r.WebSocket()\n\t\tif err != nil {\n\t\t\tglog.Error(ctx, err)\n\t\t\tr.Exit()\n\t\t}\n\t\tfor {\n\t\t\tmsgType, msg, err := ws.ReadMessage()\n\t\t\tif err != nil {\n\t\t\t\treturn\n\t\t\t}\n\t\t\tif err = ws.WriteMessage(msgType, msg); err != nil {\n\t\t\t\treturn\n\t\t\t}\n\t\t}\n\t})\n\ts.SetServerRoot(gfile.MainPkgPath())\n\ts.EnableHTTPS("../../https/server.crt", "../../https/server.key")\n\ts.SetPort(8199)\n\ts.Run()\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793a\u4f8b\u7ed3\u679c\u5c55\u793a",children:"\u793a\u4f8b\u7ed3\u679c\u5c55\u793a"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u9996\u5148\u6267\u884c\u793a\u4f8b\u4ee3\u7801 ",(0,s.jsx)(n.code,{children:"main.go"}),"\uff0c\u968f\u540e\u8bbf\u95ee\u9875\u9762 ",(0,s.jsx)(n.a,{href:"http://127.0.0.1:8199/",children:"http://127.0.0.1:8199/"}),"\uff0c\u968f\u610f\u8f93\u5165\u8bf7\u6c42\u5185\u5bb9\u5e76\u63d0\u4ea4\uff0c\u968f\u540e\u5728\u670d\u52a1\u7aef\u5173\u95ed\u7a0b\u5e8f\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u9875\u9762\u4f1a\u56de\u663e\u63d0\u4ea4\u7684\u5185\u5bb9\u4fe1\u606f\uff0c\u5e76\u4e14\u5373\u65f6\u5c55\u793a ",(0,s.jsx)(n.code,{children:"websocket"})," \u7684\u8fde\u63a5\u72b6\u6001\u7684\u6539\u53d8\uff0c\u5f53\u670d\u52a1\u7aef\u5173\u95ed\u65f6\uff0c\u5ba2\u6237\u7aef\u4e5f\u4f1a\u5373\u65f6\u5730\u6253\u5370\u51fa\u5173\u95ed\u4fe1\u606f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(501940).A+"",width:"1000",height:"394"})}),"\n",(0,s.jsx)(n.h2,{id:"websocket\u5b89\u5168\u6821\u9a8c",children:"Websocket\u5b89\u5168\u6821\u9a8c"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67b6\u7684 ",(0,s.jsx)(n.code,{children:"websocket"})," \u6a21\u5757\u5e76\u4e0d\u4f1a\u505a\u540c\u6e90\u68c0\u67e5( ",(0,s.jsx)(n.code,{children:"origin"}),")\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u8fd9\u79cd\u6761\u4ef6\u4e0b\u7684websocket\u5141\u8bb8\u5b8c\u5168\u8de8\u57df\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u5168\u7684\u6821\u9a8c\u9700\u8981\u7531\u4e1a\u52a1\u5c42\u6765\u5904\u7406\uff0c\u5b89\u5168\u6821\u9a8c\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"origin"})," \u7684\u6821\u9a8c: \u4e1a\u52a1\u5c42\u5728\u6267\u884c ",(0,s.jsx)(n.code,{children:"r.WebSocket()"})," \u4e4b\u524d\u9700\u8981\u8fdb\u884c ",(0,s.jsx)(n.code,{children:"origin"})," \u540c\u6e90\u8bf7\u6c42\u7684\u6821\u9a8c\uff1b\u6216\u8005\u6309\u7167\u81ea\u5b9a\u4e49\u7684\u5904\u7406\u5bf9\u8bf7\u6c42\u8fdb\u884c\u6821\u9a8c(\u5982\u679c\u8bf7\u6c42\u63d0\u4ea4\u53c2\u6570)\uff1b\u5982\u679c\u672a\u901a\u8fc7\u6821\u9a8c\uff0c\u90a3\u4e48\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"r.Exit()"})," \u7ec8\u6b62\u8bf7\u6c42\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"websocket"})," \u901a\u4fe1\u6570\u636e\u6821\u9a8c: \u6570\u636e\u901a\u4fe1\u5f80\u5f80\u90fd\u6709\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5728\u8fd9\u4e9b\u901a\u4fe1\u6570\u636e\u4e2d\u52a0\u4e0a\u9274\u6743\u5904\u7406\u903b\u8f91\uff1b"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"websocket-client-\u5ba2\u6237\u7aef",children:"WebSocket Client \u5ba2\u6237\u7aef"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:' package main\n\nimport (\n\t"crypto/tls"\n\t"fmt"\n\t"net/http"\n\t"time"\n\n\t"github.com/gogf/gf/v2/net/gclient"\n\t"github.com/gorilla/websocket"\n)\n\nfunc main() {\n\tclient := gclient.NewWebSocket()\n\tclient.HandshakeTimeout = time.Second    // \u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\n\tclient.Proxy = http.ProxyFromEnvironment // \u8bbe\u7f6e\u4ee3\u7406\n\tclient.TLSClientConfig = &tls.Config{}   // \u8bbe\u7f6e tls \u914d\u7f6e\n\n\tconn, _, err := client.Dial("ws://127.0.0.1:8199/ws", nil)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer conn.Close()\n\n\terr = conn.WriteMessage(websocket.TextMessage, []byte("hello word"))\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tmt, data, err := conn.ReadMessage()\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tfmt.Println(mt, string(data))\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},501940:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cf2432a5cefc4a4eba97ca63169bbf97-e0a3885c79a60e9d4898736add4ae5c6.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(296540);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);