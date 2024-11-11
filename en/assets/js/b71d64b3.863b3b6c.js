"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[2746],{373425:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b","title":"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b","description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b\uff0c\u5305\u62ecMySQL\u3001Redis\u7b49\u6570\u636e\u5e93\u7684\u6570\u636e\u6a21\u578b\uff0c\u4ee5\u53ca\u7528\u4e8e\u63a5\u53e3\u4ea4\u4e92\u7684\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u3002\u8be6\u7ec6\u8bb2\u8ff0\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u7684\u5b9a\u4e49\u548c\u4f7f\u7528\uff0c\u7279\u522b\u4ecb\u7ecd\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578bDO\u4e0eORM\u7ec4\u4ef6\u96c6\u6210\uff0c\u7b80\u5316DAO\u6570\u636e\u8bbf\u95ee\u64cd\u4f5c\u3002","source":"@site/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b.md","sourceDirName":"docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1","slug":"/docs/design/project-models","permalink":"/en/docs/design/project-models","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/docs/\u6846\u67b6\u8bbe\u8ba1/\u5de5\u7a0b\u5f00\u53d1\u8bbe\u8ba1/\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731320041000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/design/project-models","title":"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","\u6570\u636e\u6a21\u578b","\u4e1a\u52a1\u6a21\u578b","\u63a5\u53e3\u8f93\u5165\u8f93\u51fa\u6a21\u578b","\u4e1a\u52a1\u8f93\u5165\u8f93\u51fa\u6a21\u578b","ORM\u7ec4\u4ef6","DAO\u64cd\u4f5c","CLI\u5de5\u5177","\u5b9e\u4f53\u6a21\u578b","\u6a21\u5757\u8c03\u7528"],"description":"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b\uff0c\u5305\u62ecMySQL\u3001Redis\u7b49\u6570\u636e\u5e93\u7684\u6570\u636e\u6a21\u578b\uff0c\u4ee5\u53ca\u7528\u4e8e\u63a5\u53e3\u4ea4\u4e92\u7684\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u3002\u8be6\u7ec6\u8bb2\u8ff0\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u7684\u5b9a\u4e49\u548c\u4f7f\u7528\uff0c\u7279\u522b\u4ecb\u7ecd\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578bDO\u4e0eORM\u7ec4\u4ef6\u96c6\u6210\uff0c\u7b80\u5316DAO\u6570\u636e\u8bbf\u95ee\u64cd\u4f5c\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u7ed3\u6784\u5316\u7f16\u7a0b\u8bbe\u8ba1","permalink":"/en/docs/design/project-struct-parameter"},"next":{"title":"\u5fae\u670d\u52a1\u5927\u4ed3\u7ba1\u7406\u6a21\u5f0f","permalink":"/en/docs/design/project-mono-repo"}}');var c=s(474848),i=s(28453);const r={slug:"/docs/design/project-models",title:"\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b",sidebar_position:4,hide_title:!0,keywords:["GoFrame","\u6570\u636e\u6a21\u578b","\u4e1a\u52a1\u6a21\u578b","\u63a5\u53e3\u8f93\u5165\u8f93\u51fa\u6a21\u578b","\u4e1a\u52a1\u8f93\u5165\u8f93\u51fa\u6a21\u578b","ORM\u7ec4\u4ef6","DAO\u64cd\u4f5c","CLI\u5de5\u5177","\u5b9e\u4f53\u6a21\u578b","\u6a21\u5757\u8c03\u7528"],description:"GoFrame\u6846\u67b6\u4e2d\u7684\u6570\u636e\u6a21\u578b\u4e0e\u4e1a\u52a1\u6a21\u578b\uff0c\u5305\u62ecMySQL\u3001Redis\u7b49\u6570\u636e\u5e93\u7684\u6570\u636e\u6a21\u578b\uff0c\u4ee5\u53ca\u7528\u4e8e\u63a5\u53e3\u4ea4\u4e92\u7684\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u3002\u8be6\u7ec6\u8bb2\u8ff0\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u7684\u5b9a\u4e49\u548c\u4f7f\u7528\uff0c\u7279\u522b\u4ecb\u7ecd\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578bDO\u4e0eORM\u7ec4\u4ef6\u96c6\u6210\uff0c\u7b80\u5316DAO\u6570\u636e\u8bbf\u95ee\u64cd\u4f5c\u3002"},o=void 0,t={},l=[{value:"\u4e00\u3001\u6570\u636e\u6a21\u578b",id:"\u4e00\u6570\u636e\u6a21\u578b",level:2},{value:"\u4e8c\u3001\u4e1a\u52a1\u6a21\u578b",id:"\u4e8c\u4e1a\u52a1\u6a21\u578b",level:2},{value:"\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u6a21\u578b",id:"\u63a5\u53e3\u8f93\u5165\u8f93\u51fa\u6a21\u578b",level:3},{value:"\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b",id:"\u4e1a\u52a1\u8f93\u5165\u8f93\u51fa\u6a21\u578b",level:3},{value:"\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578b <code>DO</code>",id:"\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578b-do",level:3},{value:"\u4e09\u3001\u5176\u4ed6\u6a21\u578b",id:"\u4e09\u5176\u4ed6\u6a21\u578b",level:2}];function h(e){const d={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(d.p,{children:["\u5728\u4e4b\u524d\u7684\u7ae0\u8282 ",(0,c.jsx)(d.a,{href:"/en/docs/design/project-layer",children:"\u4ee3\u7801\u5206\u5c42\u8bbe\u8ba1"}),' \u6709\u63d0\u53ca\u5230" ',(0,c.jsx)(d.strong,{children:"\u6a21\u578b"}),'"\u7684\u6982\u5ff5\u3002']}),"\n",(0,c.jsxs)(d.p,{children:["\u8fd9\u4e00\u7ae0\u8282\uff0c\u6211\u4eec\u96c6\u4e2d\u4ecb\u7ecd\u4e00\u4e0b\u5728 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u4e2d\u5173\u4e8e\u6a21\u578b\u7684\u5b9a\u4e49\u4ee5\u53ca\u5bf9\u5e94\u7684\u7ba1\u7406\u3002"]}),"\n",(0,c.jsx)(d.h2,{id:"\u4e00\u6570\u636e\u6a21\u578b",children:"\u4e00\u3001\u6570\u636e\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.strong,{children:"\u6570\u636e\u6a21\u578b"})," \u53c8\u53eb\u505a ",(0,c.jsx)(d.strong,{children:"\u5b9e\u4f53\u6a21\u578b"}),"\uff0c\u4e3b\u8981\u662f\u6765\u81ea\u4e8e\u5e95\u5c42\u6301\u4e45\u5316\u6570\u636e\u5e93\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4f8b\u5982\uff1a ",(0,c.jsx)(d.code,{children:"MySQL"}),"\u3001 ",(0,c.jsx)(d.code,{children:"Redis"}),"\u3001 ",(0,c.jsx)(d.code,{children:"MongoDB"}),"\u3001 ",(0,c.jsx)(d.code,{children:"Kafka"})," \u7b49\u7b49\u3002\u8fd9\u90e8\u5206\u6570\u636e\u7ed3\u6784\u662f\u7531\u7b2c\u4e09\u65b9\u7cfb\u7edf\u7ef4\u62a4\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u5de5\u5177\u5bf9\u5176\u96c6\u5408\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u8bc6\u522b\uff0c\u5e76\u81ea\u52a8\u751f\u5316\u6210\u5bf9\u5e94\u7684\u7a0b\u5e8f\u6570\u636e\u6a21\u578b\u4ee3\u7801\u3002\u8fd9\u90e8\u5206\u6570\u636e\u6a21\u578b\u7684\u4ee3\u7801\u4f4d\u4e8e ",(0,c.jsx)(d.code,{children:"/internal/model/entity"})," \u76ee\u5f55\u4e0b\u3002\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u624b\u52a8\u5728\u7a0b\u5e8f\u4e2d\u7ef4\u62a4\u6570\u636e\u6a21\u578b\uff0c\u5728 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u6846\u67b6\u89c4\u8303\u4e2d\uff0c\u6570\u636e\u6a21\u578b\u7edf\u4e00\u4f7f\u7528 ",(0,c.jsx)(d.code,{children:"CLI"})," \u5de5\u5177\u7edf\u4e00\u7ef4\u62a4\uff0c\u4ee3\u7801\u81ea\u52a8\u751f\u6210\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(683379).A+"",width:"3584",height:"2058"})}),"\n",(0,c.jsx)(d.p,{children:"\u6570\u636e\u6a21\u578b\u793a\u4f8b"}),"\n",(0,c.jsx)(d.h2,{id:"\u4e8c\u4e1a\u52a1\u6a21\u578b",children:"\u4e8c\u3001\u4e1a\u52a1\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:["\u4e1a\u52a1\u6a21\u578b\u4e3b\u8981\u5305\u542b\u4e24\u7c7b\uff1a ",(0,c.jsx)(d.strong,{children:"\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u6a21\u578b"})," \u4e0e ",(0,c.jsx)(d.strong,{children:"\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b"}),"\u3002"]}),"\n",(0,c.jsx)(d.h3,{id:"\u63a5\u53e3\u8f93\u5165\u8f93\u51fa\u6a21\u578b",children:"\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:["\u63a5\u53e3\u8f93\u5165/\u8f93\u51fa\u6a21\u578b\u7528\u4e8e\u7cfb\u7edf/\u670d\u52a1\u95f4\u7684\u63a5\u53e3\u4ea4\u4e92\uff0c\u5b9a\u4e49\u5728 ",(0,c.jsx)(d.code,{children:"api"})," \u63a5\u53e3\u5c42\u4e2d\uff0c\u4f9b\u5de5\u7a0b\u9879\u76ee\u6240\u6709\u7684\u5c42\u7ea7\u8c03\u7528\uff0c\u4f8b\u5982 ",(0,c.jsx)(d.code,{children:"controller, logic, model"})," \u4e2d\u5747\u53ef\u4ee5\u8c03\u7528 ",(0,c.jsx)(d.code,{children:"api"})," \u5c42\u7684\u8f93\u5165\u8f93\u51fa\u6a21\u578b\uff0c\u4f46\u662f ",(0,c.jsx)(d.code,{children:"api"})," \u5c42\u4ec5\u7528\u4e8e\u4e0e\u5916\u90e8\u670d\u52a1\u7684\u63a5\u53e3\u4ea4\u4e92\uff0c\u8be5\u6a21\u578b\u4e2d\u4e0d\u80fd\u8c03\u7528\u6216\u8005\u5f15\u7528\u5185\u90e8\u7684\u6a21\u578b\u5982 ",(0,c.jsx)(d.code,{children:"model"})," \u6a21\u578b\u3002\u5728 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u6846\u67b6\u89c4\u8303\u4e2d\uff0c\u8fd9\u90e8\u5206\u8f93\u51fa\u8f93\u51fa\u6a21\u578b\u540d\u79f0\u4ee5 ",(0,c.jsx)(d.code,{children:"XxxReq"})," \u548c ",(0,c.jsx)(d.code,{children:"XxxRes"})," \u683c\u5f0f\u547d\u540d\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(170745).A+"",width:"3584",height:"2058"})}),"\n",(0,c.jsx)(d.p,{children:"\u63a5\u53e3\u8f93\u5165\u6a21\u578b\u793a\u4f8b"}),"\n",(0,c.jsx)(d.h3,{id:"\u4e1a\u52a1\u8f93\u5165\u8f93\u51fa\u6a21\u578b",children:"\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:[(0,c.jsx)(d.strong,{children:"\u4e1a\u52a1\u8f93\u5165/\u8f93\u51fa\u6a21\u578b"})," \u7528\u4e8e\u670d\u52a1 ",(0,c.jsx)(d.strong,{children:"\u5185\u90e8"})," \u6a21\u5757/\u7ec4\u4ef6\u4e4b\u95f4\u7684\u65b9\u6cd5\u8c03\u7528\u4ea4\u4e92\uff0c\u7279\u522b\u662f ",(0,c.jsx)(d.code,{children:"controller->service"})," \u6216\u8005 ",(0,c.jsx)(d.code,{children:"service->service"})," \u4e4b\u95f4\u7684\u8c03\u7528\u3002\u8fd9\u90e8\u5206\u6a21\u578b\u5b9a\u4e49\u5728 ",(0,c.jsx)(d.code,{children:"model"})," \u6a21\u578b\u5c42\u4e2d\u3002\u5728 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u6846\u67b6\u89c4\u8303\u4e2d\uff0c\u8fd9\u90e8\u5206\u8f93\u5165\u8f93\u51fa\u6a21\u578b\u540d\u79f0\u901a\u5e38\u4ee5 ",(0,c.jsx)(d.code,{children:"XxxInput"})," \u548c ",(0,c.jsx)(d.code,{children:"XxxOutput"})," \u683c\u5f0f\u547d\u540d\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(142914).A+"",width:"3584",height:"2058"})}),"\n",(0,c.jsx)(d.p,{children:"\u4e1a\u52a1\u8f93\u5165\u6a21\u578b\u4e0e\u4e1a\u52a1\u8f93\u51fa\u6a21\u578b\u793a\u4f8b"}),"\n",(0,c.jsxs)(d.h3,{id:"\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578b-do",children:["\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578b ",(0,c.jsx)(d.code,{children:"DO"})]}),"\n",(0,c.jsxs)(d.p,{children:["\u5728 ",(0,c.jsx)(d.code,{children:"GoFrame"})," \u6709\u4e00\u7c7b\u7279\u6b8a\u7684\u4e1a\u52a1\u6a21\u578b ",(0,c.jsx)(d.code,{children:"DO"}),"\uff0c\u4ecb\u4e8e\u4e1a\u52a1\u6a21\u578b\u4e0e\u6570\u636e\u6a21\u578b\u4e4b\u95f4\uff0c\u4e3b\u8981\u7528\u4e8e\u7ed3\u5408\u6846\u67b6\u5f3a\u5927\u7684 ",(0,c.jsx)(d.code,{children:"ORM"})," \u7ec4\u4ef6\u5927\u5927\u7b80\u4fbf ",(0,c.jsx)(d.code,{children:"DAO"})," \u6570\u636e\u8bbf\u95ee\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsx)(d.p,{children:(0,c.jsx)(d.img,{src:s(739930).A+"",width:"3584",height:"2058"})}),"\n",(0,c.jsx)(d.p,{children:"DO\u4e3b\u8981\u7528\u4e8eDAO\u6570\u636e\u8bbf\u95ee\u64cd\u4f5c"}),"\n",(0,c.jsx)(d.h2,{id:"\u4e09\u5176\u4ed6\u6a21\u578b",children:"\u4e09\u3001\u5176\u4ed6\u6a21\u578b"}),"\n",(0,c.jsxs)(d.p,{children:["\u8fd8\u6709\u5185\u90e8\u79c1\u6709\u7684\u6a21\u578b\uff0c\u7528\u4e8e\u6a21\u5757\u5185\u90e8\u8c03\u7528\uff0c\u4f8b\u5982\u5728 ",(0,c.jsx)(d.code,{children:"logic"})," \u5404\u4e2a\u4e1a\u52a1\u6a21\u5757\u5185\u90e8\u5b9a\u4e49\u7684\u6a21\u578b\uff0c\u7528\u4e8e\u5185\u90e8\u903b\u8f91\uff0c\u4e0d\u5bf9\u5916\u516c\u5f00\u3002"]})]})}function a(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,c.jsx)(d,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},683379:(e,d,s)=>{s.d(d,{A:()=>n});const n=s.p+"assets/images/0126798ec8cb70d798fc2260afb2f9a9-fb358fcf07a381134bb16ff3f59c1eed.png"},170745:(e,d,s)=>{s.d(d,{A:()=>n});const n=s.p+"assets/images/8c037d2e08ddf5b8cb758cefd706b5ea-17ea063841b9063658042f80f39692c0.png"},142914:(e,d,s)=>{s.d(d,{A:()=>n});const n=s.p+"assets/images/b23a0dab9a4f4ac63c51c166248d9779-c0a32249bd64130f529badbd69513b1f.png"},739930:(e,d,s)=>{s.d(d,{A:()=>n});const n=s.p+"assets/images/d08e7808de1c18c306e05157dd899992-050a5df489b3f5ea3be8be21211c4afa.png"},28453:(e,d,s)=>{s.d(d,{R:()=>r,x:()=>o});var n=s(296540);const c={},i=n.createContext(c);function r(e){const d=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(i.Provider,{value:d},e.children)}}}]);