"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[73906],{82057:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var i=e(74848),l=e(28453);const r={title:"\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},o=void 0,s={id:"\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",title:"\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",description:"\u57fa\u7840\u4f7f\u7528",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/3-\u94fe\u8868\u7c7b\u578b-glist/0-\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/3-\u94fe\u8868\u7c7b\u578b-glist",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/docs/5-\u7ec4\u4ef6\u5217\u8868/0-\u6570\u636e\u7ed3\u6784/3-\u94fe\u8868\u7c7b\u578b-glist/0-\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528.md",tags:[],version:"current",lastUpdatedBy:"John",lastUpdatedAt:1730214664e3,sidebarPosition:0,frontMatter:{title:"\u94fe\u8868\u7c7b\u578b-\u57fa\u672c\u4f7f\u7528",sidebar_position:0,hide_title:!0},sidebar:"hiddenSidebar",previous:{title:"\u94fe\u8868\u7c7b\u578b-glist",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/"},next:{title:"\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5",permalink:"/gf-site/docs/\u7ec4\u4ef6\u5217\u8868/\u6570\u636e\u7ed3\u6784/\u94fe\u8868\u7c7b\u578b-glist/\u94fe\u8868\u7c7b\u578b-\u6027\u80fd\u6d4b\u8bd5"}},c={},a=[{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3},{value:"\u94fe\u8868\u904d\u5386",id:"\u94fe\u8868\u904d\u5386",level:3},{value:"<code>Push*</code> \u5143\u7d20\u9879\u5165\u6808",id:"push-\u5143\u7d20\u9879\u5165\u6808",level:3},{value:"<code>Pop*</code> \u5143\u7d20\u9879\u51fa\u6808",id:"pop-\u5143\u7d20\u9879\u51fa\u6808",level:3},{value:"<code>Move*/Insert*</code> \u5143\u7d20\u9879\u79fb\u52a8\u3001\u63d2\u5165",id:"moveinsert-\u5143\u7d20\u9879\u79fb\u52a8\u63d2\u5165",level:3},{value:"<code>Join</code> \u5143\u7d20\u9879\u4e32\u8fde",id:"join-\u5143\u7d20\u9879\u4e32\u8fde",level:3},{value:"<code>Remove*</code> \u5143\u7d20\u9879\u79fb\u9664",id:"remove-\u5143\u7d20\u9879\u79fb\u9664",level:3},{value:"<code>JSON</code> \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217",id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",level:3}];function g(n){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"\u57fa\u7840\u4f7f\u7528",children:"\u57fa\u7840\u4f7f\u7528"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n)\n\nfunc main() {\n\t// Not concurrent-safe in default.\n\tl := glist.New()\n\n    // Push\n\tl.PushBack(1) //\u4ece\u540e\u9762\u63d2\u5165\u503c\n    l.PushBack(2) //\u4ece\u540e\u9762\u63d2\u5165\u503c\n    e := l.PushFront(0) //\u4ece\u524d\u9762\u63d2\u5165\u503c\n\n    // Insert\n\tl.InsertBefore(e, -1) //\u4ece0\u7684\u524d\u9762\u63d2\u5165\u503c\n    l.InsertAfter(e, "a") //\u4ece0\u7684\u540e\u9762\u63d2\u5165\u503c\n\tfmt.Println(l)\n\n\t// Pop Pop \u51fa\u6808\u540e\uff0c\u4ecelist\u91cc\u79fb\u9664\n    fmt.Println(l.PopFront()) // \u4ece\u524d\u9762\u51fa\u6808\uff0c\u8fd4\u56de\u51fa\u6808\u7684\u503c\n    fmt.Println(l.PopBack()) //\u4ece\u540e\u9762\u51fa\u6808\n    fmt.Println(l)\n\n\t// All\n\tfmt.Println(l.FrontAll()) //\u6b63\u5e8f\u8fd4\u56de\u4e00\u4e2a\u590d\u672c\n    fmt.Println(l.BackAll())  //\u9006\u5e8f\u8fd4\u56de\u4e00\u4e2a\u590d\u672c\n\n    // Output:\n\t// [-1,0,"a",1,2]\n\t// -1\n\t// 2\n\t// [0,"a",1]\n\t// [0 "a" 1]\n\t// [1 "a" 0]\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"\u94fe\u8868\u904d\u5386",children:"\u94fe\u8868\u904d\u5386"}),"\n",(0,i.jsxs)(t.p,{children:["\u8be5\u793a\u4f8b\u4e2d\u6211\u4eec\u5c06\u901a\u8fc7\u8bfb\u9501\u548c\u5199\u9501\u904d\u5386\u4e00\u4e2a\u5e76\u53d1\u5b89\u5168\u7684\u94fe\u8868\uff0c\u5206\u522b\u901a\u8fc7 ",(0,i.jsx)(t.code,{children:"RLockFunc"})," \u548c ",(0,i.jsx)(t.code,{children:"LockFunc"})," \u5b9e\u73b0\u3002\u6267\u884c\u540e\uff0c\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"container/list"\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/garray"\n\t"github.com/gogf/gf/v2/container/glist"\n)\n\nfunc main() {\n\t// concurrent-safe list.\n\tl := glist.NewFrom(garray.NewArrayRange(1, 9, 1).Slice(), true)\n    fmt.Println(l)\n\t// iterate reading from head.\n\tl.RLockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n\t\t\t\tfmt.Print(e.Value)\n\t\t\t}\n\t\t}\n\t})\n\tfmt.Println()\n\t// iterate reading from tail.\n\tl.RLockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Back(); i < length; i, e = i+1, e.Prev() {\n\t\t\t\tfmt.Print(e.Value)\n\t\t\t}\n\t\t}\n\t})\n\n    fmt.Println()\n\n    // iterate reading from head using IteratorAsc.\n\tl.IteratorAsc(func(e *glist.Element) bool {\n\t\tfmt.Print(e.Value)\n\t\treturn true\n\t})\n\tfmt.Println()\n\t// iterate reading from tail using IteratorDesc.\n\tl.IteratorDesc(func(e *glist.Element) bool {\n\t\tfmt.Print(e.Value)\n\t\treturn true\n\t})\n\n\tfmt.Println()\n\n\t// iterate writing from head.\n\tl.LockFunc(func(list *list.List) {\n\t\tlength := list.Len()\n\t\tif length > 0 {\n\t\t\tfor i, e := 0, list.Front(); i < length; i, e = i+1, e.Next() {\n\t\t\t\tif e.Value == 6 {\n\t\t\t\t\te.Value = "M"\n\t\t\t\t\tbreak\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t})\n\tfmt.Println(l)\n\n    // Output:\n\t// [1,2,3,4,5,6,7,8,9]\n\t// 123456789\n\t// 987654321\n\t// 123456789\n\t// 987654321\n\t// [1,2,3,4,5,M,7,8,9]\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"push-\u5143\u7d20\u9879\u5165\u6808",children:[(0,i.jsx)(t.code,{children:"Push*"})," \u5143\u7d20\u9879\u5165\u6808"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tl := glist.NewFrom(g.Slice{1, 2, 3, 4, 5})\n\n\tl.PushBack(6)\n\tfmt.Println(l)\n\n\tl.PushFront(0)\n\tfmt.Println(l)\n\n    // \u6b63\u6570\u4ece\u53f3\u8fb9\u5165\u6808\n\tl.PushBacks(g.Slice{7, 8})\n\tfmt.Println(l)\n\n    // \u8d1f\u6570\u4ece\u5de6\u8fb9\u5165\u6808\n\tl.PushFronts(g.Slice{-1, -2})\n\tfmt.Println(l)\n\n\tl.PushFrontList(glist.NewFrom(g.Slice{"a", "b", "c"}))\n\tl.PushBackList(glist.NewFrom(g.Slice{"d", "e", "f"}))\n\tfmt.Println(l)\n\n\t// Output:\n\t// [1,2,3,4,5,6]\n\t// [0,1,2,3,4,5,6]\n\t// [0,1,2,3,4,5,6,7,8]\n\t// [-2,-1,0,1,2,3,4,5,6,7,8]\n\t// ["a","b","c",-2,-1,0,1,2,3,4,5,6,7,8,"d","e","f"]\n\n}\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"pop-\u5143\u7d20\u9879\u51fa\u6808",children:[(0,i.jsx)(t.code,{children:"Pop*"})," \u5143\u7d20\u9879\u51fa\u6808"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tl := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n\tfmt.Println(l.PopBack())\n\tfmt.Println(l.PopBacks(2))\n\tfmt.Println(l.PopFront())\n\tfmt.Println(l.PopFronts(2))\n\n\tfmt.Println(glist.NewFrom(g.Slice{"a", "b", "c", "d"}).PopFrontAll())\n\tfmt.Println(glist.NewFrom(g.Slice{"a", "b", "c", "d"}).PopBackAll())\n\n\t// Output:\n\t// 9\n\t// [8 7]\n\t// 1\n\t// [2 3]\n    // [4,5,6]\n\t// [a b c d]\n\t// [d c b a]\n}\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"moveinsert-\u5143\u7d20\u9879\u79fb\u52a8\u63d2\u5165",children:[(0,i.jsx)(t.code,{children:"Move*/Insert*"})," \u5143\u7d20\u9879\u79fb\u52a8\u3001\u63d2\u5165"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tl := glist.NewFrom(g.Slice{1, 2, 3, 4, 5, 6, 7, 8, 9})\n\n\tl.MoveToBack(l.Front()) //\u5c06\u7b2c\u4e00\u4e2a\u5143\u7d20(1)\u79fb\u52a8\u6700\u53f3\u8fb9  [2,3,4,5,6,7,8,9,1]\n    l.MoveToFront(l.Back().Prev()) //\u5c06\u6700\u540e\u4e00\u9879\u7684\u524d\u4e00\u4e2a\u5143\u7d20(9)\u79fb\u52a8\u6700\u5de6\u8fb9  [9,2,3,4,5,6,7,8,1]\n    fmt.Println(l)\n\n\t// \u5c062\u5230\u6808\u9996\u5143\u7d20\u7684\u524d\u9762\n\tl.MoveBefore(l.Front().Next(), l.Front())\n\t// \u5c068\u5230\u6808\u5c3e\u5143\u7d20\u7684\u540e\u9762\n\tl.MoveAfter(l.Back().Prev(), l.Back())\n\tfmt.Println(l)\n\n\t// \u5728\u6808\u5c3e\u5143\u7d20\u524d\u63d2\u5165\u65b0\u5143\u7d20\n\tl.InsertBefore(l.Back(), "a")\n\t// \u5728\u6808\u9996\u5143\u7d20\u540e\u63d2\u5165\u65b0\u5143\u7d20\n\tl.InsertAfter(l.Front(), "b")\n\n\t// Output:\n\t// [9,2,3,4,5,6,7,8,1]\n\t// [2,9,3,4,5,6,7,1,8]\n\t// [2,"b",9,3,4,5,6,7,1,"a",8]\n}\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"join-\u5143\u7d20\u9879\u4e32\u8fde",children:[(0,i.jsx)(t.code,{children:"Join"})," \u5143\u7d20\u9879\u4e32\u8fde"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n\tvar l glist.List\n\tl.PushBacks(g.Slice{"a", "b", "c", "d"})\n\n\tfmt.Println(l.Join(","))\n\n\t// Output:\n\t// a,b,c,d\n}\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"remove-\u5143\u7d20\u9879\u79fb\u9664",children:[(0,i.jsx)(t.code,{children:"Remove*"})," \u5143\u7d20\u9879\u79fb\u9664"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"github.com/gogf/gf/v2/container/glist"\n\t"github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n    l := glist.NewFrom(g.Slice{0, 1, 2, 3, 4, 5, 6, 7, 8, 9})\n\tfmt.Println(l)\n\n\tfmt.Println(l.Remove(l.Front()))\n\tfmt.Println(l)\n\n\tl.Removes([]*glist.Element{l.Front(), l.Front().Next()})\n\tfmt.Println(l)\n\n\tl.RemoveAll()\n\tfmt.Println(l)\n\n\t// Output:\n\t// [0,1,2,3,4,5,6,7,8,9]\n\t// 0\n\t// [1,2,3,4,5,6,7,8,9]\n\t// [3,4,5,6,7,8,9]\n\t// [] }\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"json-\u5e8f\u5217\u5316\u53cd\u5e8f\u5217",children:[(0,i.jsx)(t.code,{children:"JSON"})," \u5e8f\u5217\u5316/\u53cd\u5e8f\u5217"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"glist"})," \u5bb9\u5668\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93 ",(0,i.jsx)(t.code,{children:"json"})," \u6570\u636e\u683c\u5f0f\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u63a5\u53e3\u3002"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Marshal"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n      "encoding/json"\n      "fmt"\n      "github.com/gogf/gf/v2/container/glist"\n      "github.com/gogf/gf/v2/frame/g"\n)\n\nfunc main() {\n      type Student struct {\n          Id     int\n          Name   string\n          Scores *glist.List\n      }\n      s := Student{\n          Id:     1,\n          Name:   "john",\n          Scores: glist.NewFrom(g.Slice{100, 99, 98}),\n      }\n      b, _ := json.Marshal(s)\n      fmt.Println(string(b))\n\n  \t// Output:\n  \t// {"Id":1,"Name":"john","Scores":[100,99,98]}\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"Unmarshal"})}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'package main\n\n\nimport (\n      "encoding/json"\n      "fmt"\n      "github.com/gogf/gf/v2/container/glist"\n)\n\n\nfunc main() {\n      b := []byte(`{"Id":1,"Name":"john","Scores":[100,99,98]}`)\n      type Student struct {\n          Id     int\n          Name   string\n          Scores *glist.List\n      }\n      s := Student{}\n      json.Unmarshal(b, &s)\n      fmt.Println(s)\n\n  \t// Output:\n  \t// {1 john [100,99,98]}\n}\n'})})]})}function d(n={}){const{wrapper:t}={...(0,l.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>s});var i=e(96540);const l={},r=i.createContext(l);function o(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);