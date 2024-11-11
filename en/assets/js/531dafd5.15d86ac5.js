"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[50104],{313056:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u76d1\u63a7\u6307\u6807","title":"HTTPClient-\u76d1\u63a7\u6307\u6807","description":"HTTP\u5ba2\u6237\u7aef\u7684\u76d1\u63a7\u6307\u6807\u529f\u80fd\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5173\u95ed\u72b6\u6001\uff0c\u4ee5\u514d\u5f71\u54cd\u6027\u80fd\u3002\u5b83\u63d0\u4f9b\u4e86\u591a\u79cd\u6307\u6807\u4f9b\u7528\u6237\u53c2\u8003\uff0c\u5982\u8bf7\u6c42\u6267\u884c\u7684\u65f6\u95f4\u5f00\u9500\u3001\u8fde\u63a5\u521b\u5efa\u65f6\u95f4\u4ee5\u53ca\u8bf7\u6c42\u7684\u5b57\u8282\u603b\u5927\u5c0f\u7b49\uff0c\u53ea\u6709\u5728metric\u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u624d\u4f1a\u542f\u7528\u8fd9\u4e9b\u6307\u6807\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002","source":"@site/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u76d1\u63a7\u6307\u6807.md","sourceDirName":"docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient","slug":"/docs/web/http-client-metrics","permalink":"/en/docs/web/http-client-metrics","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/WEB\u670d\u52a1\u5f00\u53d1/HTTPClient/HTTPClient-\u76d1\u63a7\u6307\u6807.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":10,"frontMatter":{"slug":"/docs/web/http-client-metrics","title":"HTTPClient-\u76d1\u63a7\u6307\u6807","sidebar_position":10,"hide_title":true,"keywords":["HTTP\u5ba2\u6237\u7aef","\u76d1\u63a7\u6307\u6807","\u6027\u80fd\u4f18\u5316","\u8bf7\u6c42\u65f6\u95f4","GoFrame","\u8fde\u63a5\u65f6\u95f4","\u8bf7\u6c42\u603b\u6570","\u8bf7\u6c42\u5927\u5c0f","GoFrame\u6846\u67b6","\u8fd4\u56de\u5927\u5c0f"],"description":"HTTP\u5ba2\u6237\u7aef\u7684\u76d1\u63a7\u6307\u6807\u529f\u80fd\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5173\u95ed\u72b6\u6001\uff0c\u4ee5\u514d\u5f71\u54cd\u6027\u80fd\u3002\u5b83\u63d0\u4f9b\u4e86\u591a\u79cd\u6307\u6807\u4f9b\u7528\u6237\u53c2\u8003\uff0c\u5982\u8bf7\u6c42\u6267\u884c\u7684\u65f6\u95f4\u5f00\u9500\u3001\u8fde\u63a5\u521b\u5efa\u65f6\u95f4\u4ee5\u53ca\u8bf7\u6c42\u7684\u5b57\u8282\u603b\u5927\u5c0f\u7b49\uff0c\u53ea\u6709\u5728metric\u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u624d\u4f1a\u542f\u7528\u8fd9\u4e9b\u6307\u6807\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002"},"sidebar":"mainSidebar","previous":{"title":"HTTPClient-\u5e38\u89c1\u95ee\u9898","permalink":"/en/docs/web/http-client-faq"},"next":{"title":"\u5206\u9875\u7ba1\u7406","permalink":"/en/docs/web/paging"}}');var r=d(474848),n=d(28453);const c={slug:"/docs/web/http-client-metrics",title:"HTTPClient-\u76d1\u63a7\u6307\u6807",sidebar_position:10,hide_title:!0,keywords:["HTTP\u5ba2\u6237\u7aef","\u76d1\u63a7\u6307\u6807","\u6027\u80fd\u4f18\u5316","\u8bf7\u6c42\u65f6\u95f4","GoFrame","\u8fde\u63a5\u65f6\u95f4","\u8bf7\u6c42\u603b\u6570","\u8bf7\u6c42\u5927\u5c0f","GoFrame\u6846\u67b6","\u8fd4\u56de\u5927\u5c0f"],description:"HTTP\u5ba2\u6237\u7aef\u7684\u76d1\u63a7\u6307\u6807\u529f\u80fd\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5173\u95ed\u72b6\u6001\uff0c\u4ee5\u514d\u5f71\u54cd\u6027\u80fd\u3002\u5b83\u63d0\u4f9b\u4e86\u591a\u79cd\u6307\u6807\u4f9b\u7528\u6237\u53c2\u8003\uff0c\u5982\u8bf7\u6c42\u6267\u884c\u7684\u65f6\u95f4\u5f00\u9500\u3001\u8fde\u63a5\u521b\u5efa\u65f6\u95f4\u4ee5\u53ca\u8bf7\u6c42\u7684\u5b57\u8282\u603b\u5927\u5c0f\u7b49\uff0c\u53ea\u6709\u5728metric\u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u624d\u4f1a\u542f\u7528\u8fd9\u4e9b\u6307\u6807\uff0c\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u5730\u8fdb\u884c\u6027\u80fd\u5206\u6790\u3002"},i=void 0,l={},h=[{value:"\u6307\u6807\u5217\u8868",id:"\u6307\u6807\u5217\u8868",level:2},{value:"\u5c5e\u6027\u5217\u8868",id:"\u5c5e\u6027\u5217\u8868",level:2}];function o(e){const t={code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"HTTP"})," \u5ba2\u6237\u7aef\u652f\u6301\u76d1\u63a7\u6307\u6807\u80fd\u529b\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u4e0d\u5f71\u54cd\u6027\u80fd\uff0c\u53ea\u6709\u5728 ",(0,r.jsx)(t.code,{children:"metric"})," \u7279\u6027\u5168\u5c40\u5f00\u542f\u65f6\u8be5\u7ec4\u4ef6\u624d\u4f1a\u9ed8\u8ba4\u5f00\u542f\u76d1\u63a7\u6307\u6807\u8ba1\u7b97\u548c\u751f\u6210\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(t.h2,{id:"\u6307\u6807\u5217\u8868",children:"\u6307\u6807\u5217\u8868"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u540d\u79f0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u7c7b\u578b"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u5355\u4f4d"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"\u6307\u6807\u63cf\u8ff0"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.duration"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Histogram"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u5ba2\u6237\u7aef\u8bf7\u6c42\u6267\u884c\u7684\u65f6\u95f4\u5f00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.duration_total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u6bcf\u4e2a\u8bf7\u6c42\u4f7f\u7528\u7684\u603b\u65f6\u95f4\u5f00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.connection.duration"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Histogram"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ms"})}),(0,r.jsx)(t.td,{children:"\u521b\u5efa\u8fde\u63a5\u6240\u4f7f\u7528\u7684\u65f6\u95f4\u5f00\u9500\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.total"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u5df2\u7ecf\u6267\u884c\u5b8c\u6bd5\u7684\u8bf7\u6c42\u603b\u6570\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.active"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Gauge"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u8bf7\u6c42\u6570\u91cf\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.request.body_size"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bytes"})}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u7684\u5b57\u8282\u603b\u5927\u5c0f\u3002"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.client.response.body_size"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Counter"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bytes"})}),(0,r.jsx)(t.td,{children:"\u8fd4\u56de\u7684\u5b57\u8282\u603b\u5927\u5c0f\u3002"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u5c5e\u6027\u5217\u8868",children:"\u5c5e\u6027\u5217\u8868"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u540d\u79f0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u63cf\u8ff0"})}),(0,r.jsx)(t.th,{children:(0,r.jsx)(t.strong,{children:"Label\u793a\u4f8b"})})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"server.address"})}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807\u670d\u52a1\u5730\u5740\u3002\u53ef\u80fd\u662f\u57df\u540d\u3001IP\u5730\u5740\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"goframe.org"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"10.0.1.132"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"server.port"})}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u7684\u76ee\u6807\u670d\u52a1\u7aef\u53e3\u3002"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"8000"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.request.method"})}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u7684\u65b9\u6cd5\u540d\u79f0\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"GET"}),";\xa0",(0,r.jsx)(t.code,{children:"POST"}),";\xa0",(0,r.jsx)(t.code,{children:"DELETE"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"http.response.status_code"})}),(0,r.jsxs)(t.td,{children:["\u5904\u7406\u8fd4\u56de\u7684 ",(0,r.jsx)(t.code,{children:"HTTP"})," \u72b6\u6001\u7801\u3002"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"200"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"url.schema"})}),(0,r.jsx)(t.td,{children:"\u4f7f\u7528\u7684\u8bf7\u6c42\u534f\u8bae\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"http"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"https"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"network.protocol.version"})}),(0,r.jsx)(t.td,{children:"\u8bf7\u6c42\u534f\u8bae\u7248\u672c\u3002"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"1.0"}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"1.1"})]})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>c,x:()=>i});var s=d(296540);const r={},n=s.createContext(r);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);