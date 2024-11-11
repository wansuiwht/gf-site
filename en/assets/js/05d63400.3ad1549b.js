"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[10181],{879606:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML","title":"\u6570\u636e\u8fd4\u56de-JSON/XML","description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Response\u5bf9\u8c61\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u529f\u80fd\uff0c\u652f\u6301JSON\u548cXML\u683c\u5f0f\u8f93\u51fa\u3002\u901a\u8fc7WriteJson\u3001WriteXml\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u5185\u5bb9\u8f93\u51fa\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6784\u5efaHTTP\u670d\u52a1\u5668\uff0c\u5e76\u63d0\u4f9b\u652f\u6301JSONP\u534f\u8bae\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de","slug":"/docs/web/response-json-xml","permalink":"/en/docs/web/response-json-xml","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/\u6570\u636e\u8fd4\u56de/\u6570\u636e\u8fd4\u56de-JSONXML.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":1,"frontMatter":{"slug":"/docs/web/response-json-xml","title":"\u6570\u636e\u8fd4\u56de-JSON/XML","sidebar_position":1,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","JSON","XML","\u6570\u636e\u8fd4\u56de","JSONP","Response","WriteJson","WriteXml","HTTP\u670d\u52a1\u5668"],"description":"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Response\u5bf9\u8c61\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u529f\u80fd\uff0c\u652f\u6301JSON\u548cXML\u683c\u5f0f\u8f93\u51fa\u3002\u901a\u8fc7WriteJson\u3001WriteXml\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u5185\u5bb9\u8f93\u51fa\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6784\u5efaHTTP\u670d\u52a1\u5668\uff0c\u5e76\u63d0\u4f9b\u652f\u6301JSONP\u534f\u8bae\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u6570\u636e\u8fd4\u56de-\u7f13\u51b2\u63a7\u5236","permalink":"/en/docs/web/response-buffering"},"next":{"title":"\u6570\u636e\u8fd4\u56de-Redirect","permalink":"/en/docs/web/response-redirect"}}');var s=o(474848),t=o(28453);const c={slug:"/docs/web/response-json-xml",title:"\u6570\u636e\u8fd4\u56de-JSON/XML",sidebar_position:1,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","JSON","XML","\u6570\u636e\u8fd4\u56de","JSONP","Response","WriteJson","WriteXml","HTTP\u670d\u52a1\u5668"],description:"\u4f7f\u7528GoFrame\u6846\u67b6\u7684Response\u5bf9\u8c61\u5b9e\u73b0\u6570\u636e\u8fd4\u56de\u529f\u80fd\uff0c\u652f\u6301JSON\u548cXML\u683c\u5f0f\u8f93\u51fa\u3002\u901a\u8fc7WriteJson\u3001WriteXml\u7b49\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8f7b\u677e\u5b9e\u73b0\u5185\u5bb9\u8f93\u51fa\u3002\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528GoFrame\u6784\u5efaHTTP\u670d\u52a1\u5668\uff0c\u5e76\u63d0\u4f9b\u652f\u6301JSONP\u534f\u8bae\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002"},i=void 0,d={},l=[{value:"<code>JSON</code>",id:"json",level:2},{value:"<code>JSONP</code>",id:"jsonp",level:2},{value:"<code>XML</code>",id:"xml",level:2}];function a(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func (r *Response) WriteJson(content interface{}) error\nfunc (r *Response) WriteJsonExit(content interface{}) error\nfunc (r *Response) WriteJsonP(content interface{}) error\nfunc (r *Response) WriteJsonPExit(content interface{}) error\nfunc (r *Response) WriteXml(content interface{}, rootTag ...string) error\nfunc (r *Response) WriteXmlExit(content interface{}, rootTag ...string) error\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Response"})," \u63d0\u4f9b\u4e86\u5bf9 ",(0,s.jsx)(n.code,{children:"JSON/XML"})," \u6570\u636e\u683c\u5f0f\u8f93\u51fa\u7684\u539f\u751f\u652f\u6301\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteJson*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,s.jsx)(n.code,{children:"string"}),"\u3001 ",(0,s.jsx)(n.code,{children:"map"}),"\u3001 ",(0,s.jsx)(n.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,s.jsx)(n.code,{children:"Content-Type"})," \u4e3a ",(0,s.jsx)(n.code,{children:"application/json"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"WriteXml*"})," \u65b9\u6cd5\u7528\u4e8e\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"XML"})," \u6570\u636e\u683c\u5f0f\uff0c\u53c2\u6570\u4e3a\u4efb\u610f\u7c7b\u578b\uff0c\u53ef\u4ee5\u4e3a ",(0,s.jsx)(n.code,{children:"string"}),"\u3001 ",(0,s.jsx)(n.code,{children:"map"}),"\u3001 ",(0,s.jsx)(n.code,{children:"struct"})," \u7b49\u7b49\u3002\u8fd4\u56de\u7684 ",(0,s.jsx)(n.code,{children:"Content-Type"})," \u4e3a ",(0,s.jsx)(n.code,{children:"application/xml"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5bf9 ",(0,s.jsx)(n.code,{children:"JSON"})," \u6570\u636e\u683c\u5f0f\u652f\u6301\u7684\u540c\u65f6\uff0c\u540c\u65f6\u4e5f\u652f\u6301 ",(0,s.jsx)(n.code,{children:"JSONP"})," \u534f\u8bae\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"json",children:(0,s.jsx)(n.code,{children:"JSON"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/json", func(r *ghttp.Request) {\n            r.Response.WriteJson(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ curl -i http://127.0.0.1:8199/json\nHTTP/1.1 200 OK\nContent-Type: application/json\nServer: GoFrame HTTP Server\nDate: Sun, 05 Jan 2020 02:49:31 GMT\nContent-Length: 22\n\n{"id":1,"name":"john"}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"jsonp",children:(0,s.jsx)(n.code,{children:"JSONP"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6ce8\u610f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"JSONP"})," \u534f\u8bae\u65f6\u5fc5\u987b\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Query"})," \u65b9\u5f0f\u63d0\u4f9b ",(0,s.jsx)(n.code,{children:"callback"})," \u53c2\u6570\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/jsonp", func(r *ghttp.Request) {\n            r.Response.WriteJsonP(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ curl -i "http://127.0.0.1:8199/jsonp?callback=MyCallback"\nHTTP/1.1 200 OK\nServer: GoFrame HTTP Server\nDate: Sun, 05 Jan 2020 02:50:42 GMT\nContent-Length: 34\nContent-Type: text/plain; charset=utf-8\n\nMyCallback({"id":1,"name":"john"})\n'})}),"\n",(0,s.jsx)(n.h2,{id:"xml",children:(0,s.jsx)(n.code,{children:"XML"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/ghttp"\n)\n\nfunc main() {\n    s := g.Server()\n    s.Group("/", func(group *ghttp.RouterGroup) {\n        group.ALL("/xml", func(r *ghttp.Request) {\n            r.Response.Write(`<?xml version="1.0" encoding="UTF-8"?>`)\n            r.Response.WriteXml(g.Map{\n                "id":   1,\n                "name": "john",\n            })\n        })\n    })\n    s.SetPort(8199)\n    s.Run()\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c\u540e\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"curl"})," \u5de5\u5177\u6d4b\u8bd5\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ curl -i http://127.0.0.1:8199/xml\nHTTP/1.1 200 OK\nContent-Type: application/xml\nServer: GoFrame HTTP Server\nDate: Sun, 05 Jan 2020 03:00:55 GMT\nContent-Length: 76\n\n<?xml version="1.0" encoding="UTF-8"?><doc><id>1</id><name>john</name></doc>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var r=o(296540);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);