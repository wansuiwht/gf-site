"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[32577],{943261:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=e(474848),i=e(28453);const o={title:"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},c=void 0,l={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",title:"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/versioned_docs/version-2.6.x/3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/7-\u6811\u5f62\u7c7b\u578b-gtree/0-\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"3-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/7-\u6811\u5f62\u7c7b\u578b-gtree",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,tags:[],version:"2.6.x",sidebarPosition:0,frontMatter:{title:"\u6811\u5f62\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u6811\u5f62\u7c7b\u578b-gtree",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/"},next:{title:"\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/2.6.x/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u6811\u5f62\u7c7b\u578b-gtree/\u6811\u5f62\u7c7b\u578b-\u65b9\u6cd5\u4ecb\u7ecd"}},m={},s=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u524d\u5e8f/\u540e\u7eed\u904d\u5386",id:"\u524d\u5e8f\u540e\u7eed\u904d\u5386",level:2}];function a(n){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gtree"\n\t"github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n\tm := gtree.NewRedBlackTree(gutil.ComparatorInt)\n\n\t// \u8bbe\u7f6e\u952e\u503c\u5bf9\n\tfor i := 0; i < 10; i++ {\n\t\tm.Set(i, i*10)\n\t}\n\t// \u67e5\u8be2\u5927\u5c0f\n\tfmt.Println(m.Size())\n\t// \u6279\u91cf\u8bbe\u7f6e\u952e\u503c\u5bf9(\u4e0d\u540c\u7684\u6570\u636e\u7c7b\u578b\u5bf9\u8c61\u53c2\u6570\u4e0d\u540c)\n\tm.Sets(map[interface{}]interface{}{\n\t\t10: 10,\n\t\t11: 11,\n\t})\n\tfmt.Println(m.Size())\n\n\t// \u67e5\u8be2\u662f\u5426\u5b58\u5728\n\tfmt.Println(m.Contains(1))\n\n\t// \u67e5\u8be2\u952e\u503c\n\tfmt.Println(m.Get(1))\n\n\t// \u5220\u9664\u6570\u636e\u9879\n\tm.Remove(9)\n\tfmt.Println(m.Size())\n\n\t// \u6279\u91cf\u5220\u9664\n\tm.Removes([]interface{}{10, 11})\n\tfmt.Println(m.Size())\n\n\t// \u5f53\u524d\u952e\u540d\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n\tfmt.Println(m.Keys())\n\t// \u5f53\u524d\u952e\u503c\u5217\u8868(\u968f\u673a\u6392\u5e8f)\n\tfmt.Println(m.Values())\n\n\t// \u67e5\u8be2\u952e\u540d\uff0c\u5f53\u952e\u503c\u4e0d\u5b58\u5728\u65f6\uff0c\u5199\u5165\u7ed9\u5b9a\u7684\u9ed8\u8ba4\u503c\n\tfmt.Println(m.GetOrSet(100, 100))\n\n\t// \u5220\u9664\u952e\u503c\u5bf9\uff0c\u5e76\u8fd4\u56de\u5bf9\u5e94\u7684\u952e\u503c\n\tfmt.Println(m.Remove(100))\n\n\t// \u904d\u5386map\n\tm.IteratorAsc(func(k interface{}, v interface{}) bool {\n\t\tfmt.Printf("%v:%v ", k, v)\n\t\treturn true\n\t})\n\tfmt.Println()\n\n\t// \u6e05\u7a7amap\n\tm.Clear()\n\n\t// \u5224\u65admap\u662f\u5426\u4e3a\u7a7a\n\tfmt.Println(m.IsEmpty())\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"10\n12\ntrue\n10\n11\n9\n[0 1 2 3 4 5 6 7 8]\n[0 10 20 30 40 50 60 70 80]\n100\n100\n0:0 1:10 2:20 3:30 4:40 5:50 6:60 7:70 8:80\ntrue\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u524d\u5e8f\u540e\u7eed\u904d\u5386",children:"\u524d\u5e8f/\u540e\u7eed\u904d\u5386"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/gtree"\n\t"github.com/gogf/gf/v2/util/gutil"\n)\n\nfunc main() {\n\ttree := gtree.NewAVLTree(gutil.ComparatorInt)\n\tfor i := 0; i < 10; i++ {\n\t\ttree.Set(i, i*10)\n\t}\n\t// \u6253\u5370\u6811\u5f62\n\ttree.Print()\n\t// \u524d\u5e8f\u904d\u5386\n\tfmt.Println("ASC:")\n\ttree.IteratorAsc(func(key, value interface{}) bool {\n\t\tfmt.Println(key, value)\n\t\treturn true\n\t})\n\t// \u540e\u7eed\u904d\u5386\n\tfmt.Println("DESC:")\n\ttree.IteratorDesc(func(key, value interface{}) bool {\n\t\tfmt.Println(key, value)\n\t\treturn true\n\t})\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"AVLTree\n\u2502           \u250c\u2500\u2500 9\n\u2502       \u250c\u2500\u2500 8\n\u2502   \u250c\u2500\u2500 7\n\u2502   \u2502   \u2502   \u250c\u2500\u2500 6\n\u2502   \u2502   \u2514\u2500\u2500 5\n\u2502   \u2502       \u2514\u2500\u2500 4\n\u2514\u2500\u2500 3\n    \u2502   \u250c\u2500\u2500 2\n    \u2514\u2500\u2500 1\n        \u2514\u2500\u2500 0\n\nASC:\n0 0\n1 10\n2 20\n3 30\n4 40\n5 50\n6 60\n7 70\n8 80\n9 90\nDESC:\n9 90\n8 80\n7 70\n6 60\n5 50\n4 40\n3 30\n2 20\n1 10\n0 0\n"})})]})}function f(n={}){const{wrapper:t}={...(0,i.R)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>l});var r=e(296540);const i={},o=r.createContext(i);function c(n){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:t},n.children)}}}]);