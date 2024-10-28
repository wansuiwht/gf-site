"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[12032],{923160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>E,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var i=n(474848),o=n(28453);const s={title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",sidebar_position:3},E=void 0,r={id:"\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",description:"\u57fa\u672c\u4ecb\u7ecd",source:"@site/versioned_docs/version-2.3.x/3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b.md",sourceDirName:"3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",slug:"/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/",permalink:"/gf-site/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.3.x/3-\u5fae\u670d\u52a1\u5f00\u53d1/8-\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/3-\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b.md",tags:[],version:"2.3.x",lastUpdatedBy:"John",lastUpdatedAt:1730026931e3,sidebarPosition:3,frontMatter:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b",permalink:"/gf-site/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-\u57fa\u672c\u793a\u4f8b"},next:{title:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage",permalink:"/gf-site/docs/2.3.x/\u5fae\u670d\u52a1\u5f00\u53d1/\u670d\u52a1\u94fe\u8def\u8ddf\u8e2a/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b/\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage"}},d={},a=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,i.jsxs)(t.p,{children:["\u5728\u672c\u7ae0\u8282\u4e2d\uff0c\u6211\u4eec\u6f14\u793a\u4e24\u4e2a\u793a\u4f8b\uff0c\u4e00\u4e2a\u7528\u4e8e\u6f14\u793a ",(0,i.jsx)(t.code,{children:"baggage"})," \u670d\u52a1\u95f4\u4e0a\u4e0b\u6587\u6570\u636e\u4f20\u9012\uff1b\u4e00\u4e2a\u7528\u4e8e\u6f14\u793a\u8f83\u5b8c\u6574\u7684 ",(0,i.jsx)(t.code,{children:"HTTP+DB+Redis+Logging"})," \u7ec4\u4ef6\u7684\u94fe\u8def\u8ddf\u8e2a\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76f8\u5173\u6587\u6863",children:"\u76f8\u5173\u6587\u6863"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"output/goframe-v2.3-md/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA-HTTP%E7%A4%BA%E4%BE%8B/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA-HTTP%E7%A4%BA%E4%BE%8B-Baggage",children:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-Baggage"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"output/goframe-v2.3-md/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%BC%80%E5%8F%91/%E6%9C%8D%E5%8A%A1%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA-HTTP%E7%A4%BA%E4%BE%8B/%E9%93%BE%E8%B7%AF%E8%B7%9F%E8%B8%AA-HTTP%E7%A4%BA%E4%BE%8B-%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C",children:"\u94fe\u8def\u8ddf\u8e2a-HTTP\u793a\u4f8b-\u6570\u636e\u64cd\u4f5c"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>E,x:()=>r});var i=n(296540);const o={},s=i.createContext(o);function E(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:E(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);