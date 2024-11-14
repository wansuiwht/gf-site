"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[87997],{167672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack","title":"\u8d44\u6e90\u6253\u5305-pack","description":"\u4f7f\u7528\u65b9\u5f0f","source":"@site/versioned_docs/version-2.6.x/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177","slug":"/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.6.x/\u5f00\u53d1\u5de5\u5177/\u8d44\u6e90\u6253\u5305-pack.md","tags":[],"version":"2.6.x","lastUpdatedBy":"John","lastUpdatedAt":1730365530000,"sidebarPosition":7,"frontMatter":{"title":"\u8d44\u6e90\u6253\u5305-pack","sidebar_position":7,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"\u81ea\u52a8\u7f16\u8bd1-run","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u81ea\u52a8\u7f16\u8bd1-run"},"next":{"title":"\u955c\u50cf\u7f16\u8bd1-docker","permalink":"/2.6.x/\u5f00\u53d1\u5de5\u5177/\u955c\u50cf\u7f16\u8bd1-docker"}}');var i=t(474848),c=t(28453);const o={title:"\u8d44\u6e90\u6253\u5305-pack",sidebar_position:7,hide_title:!0},s=void 0,r={},l=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5ef6\u4f38\u9605\u8bfb",id:"\u5ef6\u4f38\u9605\u8bfb",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u5f0f",children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ gf pack -h\nUSAGE\n    gf pack SRC DST\n\nARGUMENT\n    SRC    source path for packing, which can be multiple source paths.\n    DST    destination file path for packed file. if extension of the filename is ".go" and "-n" option is given,\n           it enables packing SRC to go file, or else it packs SRC into a binary file.\n\nOPTION\n    -n, --name       package name for output go file, it\'s set as its directory name if no name passed\n    -p, --prefix     prefix for each file packed into the resource file\n    -k, --keepPath   keep the source path from system to resource file, usually for relative path\n    -h, --help       more information about this command\n\nEXAMPLE\n    gf pack public data.bin\n    gf pack public,template data.bin\n    gf pack public,template packed/data.go\n    gf pack public,template,config packed/data.go\n    gf pack public,template,config packed/data.go -n=packed -p=/var/www/my-app\n    gf pack /var/www/public packed/data.go -n=packed\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u7528\u4ee5\u5c06\u4efb\u610f\u7684\u6587\u4ef6\u6253\u5305\u4e3a\u8d44\u6e90\u6587\u4ef6\u6216\u8005 ",(0,i.jsx)(n.code,{children:"Go"})," \u4ee3\u7801\u6587\u4ef6\uff0c\u53ef\u5c06\u4efb\u610f\u6587\u4ef6\u6253\u5305\u540e\u968f\u7740\u53ef\u6267\u884c\u6587\u4ef6\u4e00\u540c\u53d1\u5e03\u3002\u6b64\u5916\uff0c\u5728 ",(0,i.jsx)(n.code,{children:"build"})," \u547d\u4ee4\u4e2d\u652f\u6301\u6253\u5305+\u7f16\u8bd1\u4e00\u6b65\u8fdb\u884c\uff0c\u5177\u4f53\u8bf7\u67e5\u770b ",(0,i.jsx)(n.code,{children:"build"})," \u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\u3002\u5173\u4e8e\u8d44\u6e90\u7ba1\u7406\u7684\u4ecb\u7ecd\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86/",children:"\u8d44\u6e90\u7ba1\u7406"})," \u7ae0\u8282\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ gf pack public,template packed/data.go\ndone!\n$ ll packed\ntotal 184\n-rw-r--r--  1 john  staff    89K Dec 31 00:44 data.go\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5ef6\u4f38\u9605\u8bfb",children:"\u5ef6\u4f38\u9605\u8bfb"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/2.6.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86/%E8%B5%84%E6%BA%90%E7%AE%A1%E7%90%86-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5",children:"\u8d44\u6e90\u7ba1\u7406-\u6700\u4f73\u5b9e\u8df5"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(296540);const i={},c=a.createContext(i);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);