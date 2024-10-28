"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[66218],{239643:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(474848),o=n(28453);const s={title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10},i=void 0,c={id:"\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",title:"ORM\u6700\u4f73\u5b9e\u8df5",description:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca sql.ErrNoRows \u5224\u65ad",source:"@site/versioned_docs/version-2.1.x/1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM/10-ORM\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:"1-\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/11-\u6570\u636e\u5e93ORM",slug:"/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u6700\u4f73\u5b9e\u8df5",draft:!1,unlisted:!1,tags:[],version:"2.1.x",sidebarPosition:10,frontMatter:{title:"ORM\u6700\u4f73\u5b9e\u8df5",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"ORM\u4e0a\u4e0b\u6587\u53d8\u91cf",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/\u6570\u636e\u5e93ORM/ORM\u4e0a\u4e0b\u6587\u53d8\u91cf"},next:{title:"NoSQL Redis",permalink:"/docs/2.1.x/\u6838\u5fc3\u7ec4\u4ef6-\u91cd\u70b9/NoSQL Redis/"}},d={},l=[{value:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca <code>sql.ErrNoRows</code> \u5224\u65ad",id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h2,{id:"\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca-sqlerrnorows-\u5224\u65ad",children:["\u67e5\u8be2\u65f6\u907f\u514d\u8fd4\u56de\u5bf9\u8c61\u521d\u59cb\u5316\u53ca ",(0,t.jsx)(r.code,{children:"sql.ErrNoRows"})," \u5224\u65ad"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6267\u884cSQL\u67e5\u8be2\u65f6\uff0c\u8bf7\u907f\u514d\u63d0\u524d\u5c06\u67e5\u8be2\u7ed3\u679c\u521d\u59cb\u5316\uff0c\u4ee5\u907f\u514d\u7ed3\u6784\u5bf9\u8c61\u9ed8\u8ba4\u503c\u7684\u5f71\u54cd\uff0c\u907f\u514d\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u5bf9\u8c61\u5185\u5b58\u3002\u901a\u8fc7\u8fd4\u56de\u5bf9\u8c61\u6307\u9488 ",(0,t.jsx)(r.code,{children:"nil"})," \u5224\u65ad\u907f\u514d ",(0,t.jsx)(r.code,{children:"sql.ErrNoRows"})," \u4f7f\u7528\uff0c\u964d\u4f4e\u4ee3\u7801\u5bf9 ",(0,t.jsx)(r.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3001\u7edf\u4e00\u9879\u76ee\u4e2d\u5bf9\u7a7a\u67e5\u8be2\u7ed3\u679c\u5904\u7406\u903b\u8f91\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u4e2a\u53cd\u9762\u4f8b\u5b50\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n\tout = new(model.TaskDetail)\n\terr = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(out)\n\tif err != nil {\n\t\tif err == sql.ErrNoRows {\n\t\t\terr = gerror.Newf(`record not found for "%d"`, id)\n\t\t}\n\t\treturn\n\t}\n\treturn\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728\u8be5\u4f8b\u5b50\u4e2d\uff0c\u5b9e\u9645\u8fd4\u56de\u7684 ",(0,t.jsx)(r.code,{children:"out"})," \u5bf9\u8c61\u7531\u4e8e\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u7f18\u6545\u6709\u4e86\u9ed8\u8ba4\u503c\uff08\u65e0\u8bbaSQL\u662f\u5426\u67e5\u8be2\u5230\u6570\u636e\uff09\uff0c\u5e76\u4e14 ",(0,t.jsx)(r.code,{children:"sql.ErrNoRows"})," \u7684\u5224\u65ad\u589e\u52a0\u4e86\u4ee3\u7801\u903b\u8f91\u4e2d\u5bf9 ",(0,t.jsx)(r.code,{children:"error"})," \u5904\u7406\u7684\u590d\u6742\u5ea6\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"\u5efa\u8bae\u6539\u8fdb\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'func (s *sTask) GetOne(ctx context.Context, id uint64) (out *entity.ResourceTask, err error) {\n\terr = dao.ResourceTask.Ctx(ctx).WherePri(id).Scan(&out)\n\tif err != nil {\n\t\treturn\n\t}\n\tif out == nil {\n\t\terr = gerror.Newf(`record not found for "%d"`, id)\n\t}\n\treturn\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["\u6ce8\u610f\u4ee3\u7801\u4e2d ",(0,t.jsx)(r.code,{children:"&out"})," \u7684\u4f7f\u7528\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u66f4\u591a\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003\uff1a ",(0,t.jsx)(r.a,{href:"output/goframe-v2.1-md/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E6%95%B0%E6%8D%AE%E5%BA%93ORM/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86/ORM%E7%BB%93%E6%9E%9C%E5%A4%84%E7%90%86-%E4%B8%BA%E7%A9%BA%E5%88%A4%E6%96%AD",children:"ORM\u7ed3\u679c\u5904\u7406-\u4e3a\u7a7a\u5224\u65ad"})]})]})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(296540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);