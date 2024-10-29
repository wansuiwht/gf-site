"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[25522],{25149:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=d(74848),c=d(28453);const r={title:"\u73af\u5883\u53d8\u91cf-genv",sidebar_position:12,hide_title:!0},s=void 0,l={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u73af\u5883\u53d8\u91cf-genv",title:"\u73af\u5883\u53d8\u91cf-genv",description:"\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u7ec4\u4ef6\u3002",source:"@site/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/12-\u73af\u5883\u53d8\u91cf-genv.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u73af\u5883\u53d8\u91cf-genv",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u73af\u5883\u53d8\u91cf-genv",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/12-\u73af\u5883\u53d8\u91cf-genv.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:1730208097e3,sidebarPosition:12,frontMatter:{title:"\u73af\u5883\u53d8\u91cf-genv",sidebar_position:12,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u7ba1\u7406-gcfg",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u914d\u7f6e\u7ba1\u7406-gcfg"},next:{title:"\u6587\u4ef6\u76d1\u63a7-gfsnotify",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u6587\u4ef6\u76d1\u63a7-gfsnotify"}},t={},o=[{value:"<code>SetMap</code>",id:"setmap",level:2},{value:"<code>GetWithCmd</code>",id:"getwithcmd",level:2},{value:"<code>All</code>",id:"all",level:2},{value:"<code>Map</code>",id:"map",level:2},{value:"<code>Get</code>",id:"get",level:2},{value:"<code>Set</code>",id:"set",level:2},{value:"<code>SetMap</code>",id:"setmap-1",level:2},{value:"<code>Contains</code>",id:"contains",level:2},{value:"<code>Remove</code>",id:"remove",level:2},{value:"<code>Build</code>",id:"build",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u73af\u5883\u53d8\u91cf\u7ba1\u7406\u7ec4\u4ef6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'import "github.com/gogf/gf/v2/os/genv"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u63a5\u53e3\u6587\u6863"}),"\uff1a"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/os/genv",children:"https://pkg.go.dev/github.com/gogf/gf/v2/os/genv"})}),"\n",(0,i.jsx)(n.h2,{id:"setmap",children:(0,i.jsx)(n.code,{children:"SetMap"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func SetMap(m map[string]string) error\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u7528\u4e8e\u6279\u91cf\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u3002\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'genv.SetMap(g.MapStrStr{\n\t"APPID":     "order",\n\t"THREAD":    "16",\n\t"ENDPOINTS": "127.0.0.1:6379",\n})\n'})}),"\n",(0,i.jsx)(n.h2,{id:"getwithcmd",children:(0,i.jsx)(n.code,{children:"GetWithCmd"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func GetWithCmd(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u4e2d\u6307\u5b9a\u7684\u9009\u9879\u6570\u503c\uff0c\u5982\u679c\u8be5\u73af\u5883\u53d8\u91cf\u4e0d\u5b58\u5728\u65f6\uff0c\u5219\u4ece\u547d\u4ee4\u884c\u9009\u9879\u4e2d\u8bfb\u53d6\u3002\u4f46\u662f\u4e24\u8005\u7684\u540d\u79f0\u89c4\u5219\u4f1a\u4e0d\u4e00\u6837\u3002\u4f8b\u5982\uff1a ",(0,i.jsx)(n.code,{children:'genv.GetWithCmd("gf.debug")'})," \u5c06\u4f1a\u4f18\u5148\u53bb\u8bfb\u53d6 ",(0,i.jsx)(n.code,{children:"GF_DEBUG"})," \u73af\u5883\u53d8\u91cf\u7684\u503c\uff0c\u5f53\u4e0d\u5b58\u5728\u65f6\u5219\u53bb\u547d\u4ee4\u884c\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"gf.debug"})," \u9009\u9879\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u6ce8\u610f\u7684\u662f\u53c2\u6570\u547d\u540d\u8f6c\u6362\u89c4\u5219\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u73af\u5883\u53d8\u91cf\u4f1a\u5c06\u540d\u79f0\u8f6c\u6362\u4e3a\u5927\u5199\uff0c\u540d\u79f0\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"."})," \u5b57\u7b26\u8f6c\u6362\u4e3a ",(0,i.jsx)(n.code,{children:"_"})," \u5b57\u7b26\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u547d\u4ee4\u884c\u4e2d\u4f1a\u5c06\u540d\u79f0\u8f6c\u6362\u4e3a\u5c0f\u5199\uff0c\u540d\u79f0\u4e2d\u7684 ",(0,i.jsx)(n.code,{children:"_"})," \u5b57\u7b26\u8f6c\u6362\u4e3a ",(0,i.jsx)(n.code,{children:"."})," \u5b57\u7b26\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"all",children:(0,i.jsx)(n.code,{children:"All"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func All() []string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u8868\u793a\u8fd4\u56de\u73af\u5883\u53d8\u91cf\u4e2d\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u4ee5` ",(0,i.jsx)(n.code,{children:"key=value"})," `\u7684\u5f62\u5f0f\u8fd4\u56de\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"map",children:(0,i.jsx)(n.code,{children:"Map"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Map() map[string]string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u8868\u793a\u8fd4\u56de\u73af\u5883\u53d8\u91cf\u4e2d\u7684\u5b57\u7b26\u4e32\uff0c\u5e76\u4e14\u4ee5` ",(0,i.jsx)(n.code,{children:"map"})," `\u7684\u5f62\u5f0f\u8fd4\u56de\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"get",children:(0,i.jsx)(n.code,{children:"Get"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Get(key string, def ...interface{}) *gvar.Var\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u8fd4\u56de\u4e00\u4e2a\u6cdb\u578b\u7c7b\u578b\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u7ed9\u5b9a\u7684 ",(0,i.jsx)(n.code,{children:"key"})," \u4e0d\u5b58\u5728\u5219\u8fd4\u56de\u4e00\u4e2a\u9ed8\u8ba4\u7684\u6cdb\u578b\u7c7b\u578b\u7684\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"set",children:(0,i.jsx)(n.code,{children:"Set"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Set(key, value string) error\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u662f\u901a\u8fc7\u5b58\u653e ",(0,i.jsx)(n.code,{children:"key"})," \u548c ",(0,i.jsx)(n.code,{children:"value"})," \u7684\u73af\u5883\u53d8\u91cf\uff0c\u5982\u679c\u6709\u62a5\u9519\u5219\u8fd4\u56de\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"Error"})," \u7c7b\u578b\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"setmap-1",children:(0,i.jsx)(n.code,{children:"SetMap"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func SetMap(m map[string]string) error\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"map"})," \u7c7b\u578b\u7684\u53c2\u6570\u5b58\u653e\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"contains",children:(0,i.jsx)(n.code,{children:"Contains"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Contains(key string) bool\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u901a\u8fc7\u68c0\u67e5\u73af\u5883\u53d8\u91cf\u4e2d\u662f\u5426\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"key"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"remove",children:(0,i.jsx)(n.code,{children:"Remove"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Remove(key ...string) error\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5220\u9664\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"build",children:(0,i.jsx)(n.code,{children:"Build"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"func Build(m map[string]string) []string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u65b9\u6cd5\u5c06 ",(0,i.jsx)(n.code,{children:"map"})," \u7684\u53c2\u6570\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u6784\u5efa\u5e76\u4e14\u8fd4\u56de\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>l});var i=d(96540);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);