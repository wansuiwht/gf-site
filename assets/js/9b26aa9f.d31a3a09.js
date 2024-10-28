"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[86957],{13572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var c=s(474848),d=s(28453);const i={title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",sidebar_position:15},r=void 0,o={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",description:"\u60b2\u89c2\u9501\uff08Pessimistic Lock\uff09\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5f88\u60b2\u89c2\uff0c\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u8ba4\u4e3a\u522b\u4eba\u4f1a\u4fee\u6539\uff0c\u6240\u4ee5\u6bcf\u6b21\u5728\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u4f1a\u4e0a\u9501\uff0c\u8fd9\u6837\u522b\u4eba\u60f3\u62ff\u8fd9\u4e2a\u6570\u636e\u5c31\u4f1a\u963b\u585e\u76f4\u5230\u5b83\u62ff\u5230\u9501\u3002\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u91cc\u8fb9\u5c31\u7528\u5230\u4e86\u5f88\u591a\u8fd9\u79cd\u9501\u673a\u5236\uff0c\u6bd4\u5982\u884c\u9501\u3001\u8868\u9501\u3001\u8bfb\u9501\u3001\u5199\u9501\u7b49\uff0c\u90fd\u662f\u5728\u505a\u64cd\u4f5c\u4e4b\u524d\u5148\u4e0a\u9501\u3002",source:"@site/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/15-ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.2.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/1-ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/15-ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501.md",tags:[],version:"2.2.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:15,frontMatter:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-\u60b2\u89c2\u9501 & \u4e50\u89c2\u9501",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u94fe\u5f0f\u64cd\u4f5c-\u91cd\u70b9/ORM\u94fe\u5f0f\u64cd\u4f5c-Handler\u7279\u6027"},next:{title:"ORM\u65b9\u6cd5\u64cd\u4f5c(\u539f\u751f)",permalink:"/gf-site/docs/2.2.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u65b9\u6cd5\u64cd\u4f5c-\u539f\u751f"}},l={},t=[{value:"\u60b2\u89c2\u9501\u4f7f\u7528",id:"\u60b2\u89c2\u9501\u4f7f\u7528",level:3},{value:"\u4e50\u89c2\u9501\u4f7f\u7528",id:"\u4e50\u89c2\u9501\u4f7f\u7528",level:3},{value:"\u9501\u673a\u5236\u603b\u7ed3",id:"\u9501\u673a\u5236\u603b\u7ed3",level:3}];function a(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"\u60b2\u89c2\u9501\uff08Pessimistic Lock\uff09"}),"\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5f88\u60b2\u89c2\uff0c\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u8ba4\u4e3a\u522b\u4eba\u4f1a\u4fee\u6539\uff0c\u6240\u4ee5\u6bcf\u6b21\u5728\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u4f1a\u4e0a\u9501\uff0c\u8fd9\u6837\u522b\u4eba\u60f3\u62ff\u8fd9\u4e2a\u6570\u636e\u5c31\u4f1a\u963b\u585e\u76f4\u5230\u5b83\u62ff\u5230\u9501\u3002\u4f20\u7edf\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u91cc\u8fb9\u5c31\u7528\u5230\u4e86\u5f88\u591a\u8fd9\u79cd\u9501\u673a\u5236\uff0c\u6bd4\u5982\u884c\u9501\u3001\u8868\u9501\u3001\u8bfb\u9501\u3001\u5199\u9501\u7b49\uff0c\u90fd\u662f\u5728\u505a\u64cd\u4f5c\u4e4b\u524d\u5148\u4e0a\u9501\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"\u4e50\u89c2\u9501\uff08Optimistic Lock\uff09"}),"\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5f88\u4e50\u89c2\uff0c\u6bcf\u6b21\u53bb\u62ff\u6570\u636e\u7684\u65f6\u5019\u90fd\u8ba4\u4e3a\u522b\u4eba\u4e0d\u4f1a\u4fee\u6539\uff0c\u6240\u4ee5\u4e0d\u4f1a\u4e0a\u9501\uff0c\u4f46\u662f\u5728\u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u5224\u65ad\u4e00\u4e0b\u5728\u6b64\u671f\u95f4\u522b\u4eba\u6709\u6ca1\u6709\u53bb\u66f4\u65b0\u8fd9\u4e2a\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u53f7\u7b49\u673a\u5236\u5b9e\u73b0\u3002\u4e50\u89c2\u9501\u9002\u7528\u4e8e\u591a\u8bfb\u7684\u5e94\u7528\u7c7b\u578b\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8\u541e\u5410\u91cf\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u60b2\u89c2\u9501\u4f7f\u7528",children:"\u60b2\u89c2\u9501\u4f7f\u7528"}),"\n",(0,c.jsx)(n.p,{children:"\u76f8\u5173\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:"func (m *Model) LockUpdate() *Model\nfunc (m *Model) LockShared() *Model\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"gdb"})," \u6a21\u5757\u7684\u94fe\u5f0f\u64cd\u4f5c\u63d0\u4f9b\u4e86\u4e24\u4e2a\u65b9\u6cd5\u5e2e\u52a9\u60a8\u5728 ",(0,c.jsx)(n.code,{children:"SQL"})," \u8bed\u53e5\u4e2d\u5b9e\u73b0\u201c\u60b2\u89c2\u9501\u201d\u3002\u53ef\u4ee5\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"LockShared"})," \u65b9\u6cd5\u4ece\u800c\u5728\u8fd0\u884c\u8bed\u53e5\u65f6\u5e26\u4e00\u628a\u201d\u5171\u4eab\u9501\u201c\u3002\u5171\u4eab\u9501\u53ef\u4ee5\u907f\u514d\u88ab\u9009\u62e9\u7684\u884c\u88ab\u4fee\u6539\u76f4\u5230\u4e8b\u52a1\u63d0\u4ea4\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Model("users").Ctx(ctx).Where("votes>?", 100).LockShared().All();\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u8fd9\u4e2a\u67e5\u8be2\u7b49\u4ef7\u4e8e\u4e0b\u9762\u8fd9\u6761 SQL \u8bed\u53e5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `users` WHERE `votes` > 100 LOCK IN SHARE MODE\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6b64\u5916\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"LockUpdate"})," \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u7528\u4e8e\u521b\u5efa ",(0,c.jsx)(n.code,{children:"FOR UPDATE"})," \u9501\uff0c\u907f\u514d\u9009\u62e9\u884c\u88ab\u5176\u5b83\u5171\u4eab\u9501\u4fee\u6539\u6216\u5220\u9664\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-go",children:'g.Model("users").Ctx(ctx).Where("votes>?", 100).LockUpdate().All();\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4e0a\u9762\u8fd9\u4e2a\u67e5\u8be2\u7b49\u4ef7\u4e8e\u4e0b\u9762\u8fd9\u6761 SQL \u8bed\u53e5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM `users` WHERE `votes` > 100 FOR UPDATE\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"FOR UPDATE"})," \u4e0e ",(0,c.jsx)(n.code,{children:"LOCK IN SHARE MODE"})," \u90fd\u662f\u7528\u4e8e\u786e\u4fdd\u88ab\u9009\u4e2d\u7684\u8bb0\u5f55\u503c\u4e0d\u80fd\u88ab\u5176\u5b83\u4e8b\u52a1\u66f4\u65b0\uff08\u4e0a\u9501\uff09\uff0c\u4e24\u8005\u7684\u533a\u522b\u5728\u4e8e ",(0,c.jsx)(n.code,{children:"LOCK IN SHARE MODE"})," \u4e0d\u4f1a\u963b\u585e\u5176\u5b83\u4e8b\u52a1\u8bfb\u53d6\u88ab\u9501\u5b9a\u884c\u8bb0\u5f55\u7684\u503c\uff0c\u800c ",(0,c.jsx)(n.code,{children:"FOR UPDATE"})," \u4f1a\u963b\u585e\u5176\u4ed6\u9501\u5b9a\u6027\u8bfb\u5bf9\u9501\u5b9a\u884c\u7684\u8bfb\u53d6\uff08\u975e\u9501\u5b9a\u6027\u8bfb\u4ecd\u7136\u53ef\u4ee5\u8bfb\u53d6\u8fd9\u4e9b\u8bb0\u5f55\uff0c ",(0,c.jsx)(n.code,{children:"LOCK IN SHARE MODE"})," \u548c ",(0,c.jsx)(n.code,{children:"FOR UPDATE"})," \u90fd\u662f\u9501\u5b9a\u6027\u8bfb\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e48\u8bf4\u6bd4\u8f83\u62bd\u8c61\uff0c\u6211\u4eec\u4e3e\u4e2a\u8ba1\u6570\u5668\u7684\u4f8b\u5b50\uff1a\u5728\u4e00\u6761\u8bed\u53e5\u4e2d\u8bfb\u53d6\u4e00\u4e2a\u503c\uff0c\u7136\u540e\u5728\u53e6\u4e00\u6761\u8bed\u53e5\u4e2d\u66f4\u65b0\u8fd9\u4e2a\u503c\u3002\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"LOCK IN SHARE MODE"})," \u7684\u8bdd\u53ef\u4ee5\u5141\u8bb8\u4e24\u4e2a\u4e8b\u52a1\u8bfb\u53d6\u76f8\u540c\u7684\u521d\u59cb\u5316\u503c\uff0c\u6240\u4ee5\u6267\u884c\u4e24\u4e2a\u4e8b\u52a1\u4e4b\u540e\u6700\u7ec8\u8ba1\u6570\u5668\u7684\u503c ",(0,c.jsx)(n.code,{children:"+1"}),"\uff1b\u800c\u5982\u679c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"FOR UPDATE"})," \u7684\u8bdd\uff0c\u4f1a\u9501\u5b9a\u7b2c\u4e8c\u4e2a\u4e8b\u52a1\u5bf9\u8bb0\u5f55\u503c\u7684\u8bfb\u53d6\u76f4\u5230\u7b2c\u4e00\u4e2a\u4e8b\u52a1\u6267\u884c\u5b8c\u6210\uff0c\u8fd9\u6837\u8ba1\u6570\u5668\u7684\u6700\u7ec8\u7ed3\u679c\u5c31\u662f ",(0,c.jsx)(n.code,{children:"+2"})," \u4e86\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u4e50\u89c2\u9501\u4f7f\u7528",children:"\u4e50\u89c2\u9501\u4f7f\u7528"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e50\u89c2\u9501\uff0c\u5927\u591a\u662f\u57fa\u4e8e\u6570\u636e\u7248\u672c \uff08 ",(0,c.jsx)(n.code,{children:"Version"}),'\uff09\u8bb0\u5f55\u673a\u5236\u5b9e\u73b0\u3002\u4f55\u8c13\u6570\u636e\u7248\u672c\uff1f\u5373\u4e3a\u6570\u636e\u589e\u52a0\u4e00\u4e2a\u7248\u672c\u6807\u8bc6\uff0c\u5728\u57fa\u4e8e\u6570\u636e\u5e93\u8868\u7684\u7248\u672c\u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u4e00\u822c\u662f\u901a\u8fc7\u4e3a\u6570\u636e\u5e93\u8868\u589e\u52a0\u4e00\u4e2a " ',(0,c.jsx)(n.code,{children:"version"}),'" \u5b57\u6bb5\u6765\u5b9e\u73b0\u3002']}),"\n",(0,c.jsx)(n.p,{children:"\u8bfb\u53d6\u51fa\u6570\u636e\u65f6\uff0c\u5c06\u6b64\u7248\u672c\u53f7\u4e00\u540c\u8bfb\u51fa\uff0c\u4e4b\u540e\u66f4\u65b0\u65f6\uff0c\u5bf9\u6b64\u7248\u672c\u53f7\u52a0\u4e00\u3002\u6b64\u65f6\uff0c\u5c06\u63d0\u4ea4\u6570\u636e\u7684\u7248\u672c\u6570\u636e\u4e0e\u6570\u636e\u5e93\u8868\u5bf9\u5e94\u8bb0\u5f55\u7684\u5f53\u524d\u7248\u672c\u4fe1\u606f\u8fdb\u884c\u6bd4\u5bf9\uff0c\u5982\u679c\u63d0\u4ea4\u7684\u6570\u636e\u7248\u672c\u53f7\u5927\u4e8e\u6570\u636e\u5e93\u8868\u5f53\u524d\u7248\u672c\u53f7\uff0c\u5219\u4e88\u4ee5\u66f4\u65b0\uff0c\u5426\u5219\u8ba4\u4e3a\u662f\u8fc7\u671f\u6570\u636e\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u9501\u673a\u5236\u603b\u7ed3",children:"\u9501\u673a\u5236\u603b\u7ed3"}),"\n",(0,c.jsx)(n.p,{children:"\u4e24\u79cd\u9501\u5404\u6709\u4f18\u7f3a\u70b9\uff0c\u4e0d\u53ef\u8ba4\u4e3a\u4e00\u79cd\u597d\u4e8e\u53e6\u4e00\u79cd\uff0c\u50cf\u4e50\u89c2\u9501\u9002\u7528\u4e8e\u5199\u6bd4\u8f83\u5c11\u7684\u60c5\u51b5\u4e0b\uff0c\u5373\u51b2\u7a81\u771f\u7684\u5f88\u5c11\u53d1\u751f\u7684\u65f6\u5019\uff0c\u8fd9\u6837\u53ef\u4ee5\u7701\u53bb\u4e86\u9501\u7684\u5f00\u9500\uff0c\u52a0\u5927\u4e86\u7cfb\u7edf\u7684\u6574\u4e2a\u541e\u5410\u91cf\u3002\u4f46\u5982\u679c\u7ecf\u5e38\u4ea7\u751f\u51b2\u7a81\uff0c\u4e0a\u5c42\u5e94\u7528\u4f1a\u4e0d\u65ad\u7684\u8fdb\u884c\u91cd\u8bd5\uff0c\u8fd9\u6837\u53cd\u5012\u662f\u964d\u4f4e\u4e86\u6027\u80fd\uff0c\u6240\u4ee5\u8fd9\u79cd\u60c5\u51b5\u4e0b\u7528\u60b2\u89c2\u9501\u5c31\u6bd4\u8f83\u5408\u9002\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var c=s(296540);const d={},i=c.createContext(d);function r(e){const n=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),c.createElement(i.Provider,{value:n},e.children)}}}]);