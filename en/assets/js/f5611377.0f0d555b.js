"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[18273],{620021:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210","title":"ORM\u6a21\u578b\u751f\u6210","description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u4e86\u7b80\u5355\u7684ORM\u6570\u636e\u8868\u6a21\u578b\u81ea\u52a8\u751f\u6210\u529f\u80fd\uff0c\u901a\u8fc7gf gen dao/model\u547d\u4ee4\u5b9e\u73b0\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u8005\u5feb\u901f\u751f\u6210\u6570\u636e\u5e93\u6a21\u578b\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003\u76f8\u5173\u5f00\u53d1\u5de5\u5177\u7ae0\u8282\uff0c\u4f18\u5316\u5f00\u53d1\u6548\u7387\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210.md","sourceDirName":"docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM","slug":"/docs/core/gdb-model-generating","permalink":"/en/2.7.x/docs/core/gdb-model-generating","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u6838\u5fc3\u7ec4\u4ef6/\u6570\u636e\u5e93ORM/ORM\u6a21\u578b\u751f\u6210.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":6,"frontMatter":{"slug":"/docs/core/gdb-model-generating","title":"ORM\u6a21\u578b\u751f\u6210","sidebar_position":6,"hide_title":true,"keywords":["GoFrame","GoFrame\u6846\u67b6","ORM","\u6a21\u578b\u751f\u6210","\u6570\u636e\u8868","gf\u5de5\u5177\u94fe","gen dao","\u5f00\u53d1\u5de5\u5177","\u81ea\u52a8\u751f\u6210","\u6570\u636e\u5e93"],"description":"GoFrame\u6846\u67b6\u63d0\u4f9b\u4e86\u7b80\u5355\u7684ORM\u6570\u636e\u8868\u6a21\u578b\u81ea\u52a8\u751f\u6210\u529f\u80fd\uff0c\u901a\u8fc7gf gen dao/model\u547d\u4ee4\u5b9e\u73b0\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u8005\u5feb\u901f\u751f\u6210\u6570\u636e\u5e93\u6a21\u578b\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003\u76f8\u5173\u5f00\u53d1\u5de5\u5177\u7ae0\u8282\uff0c\u4f18\u5316\u5f00\u53d1\u6548\u7387\u3002"},"sidebar":"mainSidebar","previous":{"title":"ORM\u65f6\u533a\u5904\u7406","permalink":"/en/2.7.x/docs/core/gdb-timezone"},"next":{"title":"ORM\u9ad8\u7ea7\u7279\u6027","permalink":"/en/2.7.x/docs/core/gdb-senior"}}');var s=n(474848),r=n(28453);const d={slug:"/docs/core/gdb-model-generating",title:"ORM\u6a21\u578b\u751f\u6210",sidebar_position:6,hide_title:!0,keywords:["GoFrame","GoFrame\u6846\u67b6","ORM","\u6a21\u578b\u751f\u6210","\u6570\u636e\u8868","gf\u5de5\u5177\u94fe","gen dao","\u5f00\u53d1\u5de5\u5177","\u81ea\u52a8\u751f\u6210","\u6570\u636e\u5e93"],description:"GoFrame\u6846\u67b6\u63d0\u4f9b\u4e86\u7b80\u5355\u7684ORM\u6570\u636e\u8868\u6a21\u578b\u81ea\u52a8\u751f\u6210\u529f\u80fd\uff0c\u901a\u8fc7gf gen dao/model\u547d\u4ee4\u5b9e\u73b0\uff0c\u9002\u7528\u4e8e\u5f00\u53d1\u8005\u5feb\u901f\u751f\u6210\u6570\u636e\u5e93\u6a21\u578b\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u53c2\u8003\u76f8\u5173\u5f00\u53d1\u5de5\u5177\u7ae0\u8282\uff0c\u4f18\u5316\u5f00\u53d1\u6548\u7387\u3002"},i=void 0,c={},a=[{value:"\u6a21\u578b\u81ea\u52a8\u751f\u6210",id:"\u6a21\u578b\u81ea\u52a8\u751f\u6210",level:2}];function l(e){const o={a:"a",code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"\u6a21\u578b\u81ea\u52a8\u751f\u6210",children:"\u6a21\u578b\u81ea\u52a8\u751f\u6210"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"GoFrame"})," \u6846\u67b6\u652f\u6301\u975e\u5e38\u4fbf\u6377\u7684\u6570\u636e\u8868\u6a21\u578b\u751f\u6210\u529f\u80fd\uff0c\u901a\u8fc7 ",(0,s.jsx)(o.code,{children:"gf gen dao/model"})," \u5de5\u5177\u94fe\u547d\u4ee4\u5b9e\u73b0\uff0c\u5177\u4f53\u8bf7\u53c2\u8003 ",(0,s.jsx)(o.a,{href:"/en/2.7.x/docs/cli",children:"\u5f00\u53d1\u5de5\u5177"})," \u7ae0\u8282\u3002"]})]})}function g(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>d,x:()=>i});var t=n(296540);const s={},r=t.createContext(s);function d(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);