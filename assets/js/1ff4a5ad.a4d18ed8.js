"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([[8161],{288748:(n,i,d)=>{d.r(i),d.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>e,toc:()=>t});const e=JSON.parse('{"id":"\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1","title":"build \u4ea4\u53c9\u7f16\u8bd1","description":"\u4f7f\u7528\u65b9\u5f0f\uff1a","source":"@site/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1.md","sourceDirName":"\u5f00\u53d1\u5de5\u5177","slug":"/\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-1.16.x/\u5f00\u53d1\u5de5\u5177/build \u4ea4\u53c9\u7f16\u8bd1.md","tags":[],"version":"1.16.x","lastUpdatedBy":"John","lastUpdatedAt":1730368238000,"sidebarPosition":3,"frontMatter":{"title":"build \u4ea4\u53c9\u7f16\u8bd1","sidebar_position":3,"hide_title":true},"sidebar":"tutorialSidebar","previous":{"title":"init \u9879\u76ee\u521b\u5efa","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/init \u9879\u76ee\u521b\u5efa"},"next":{"title":"gen \u4ee3\u7801\u751f\u6210","permalink":"/1.16.x/\u5f00\u53d1\u5de5\u5177/gen \u4ee3\u7801\u751f\u6210/"}}');var s=d(474848),l=d(28453);const r={title:"build \u4ea4\u53c9\u7f16\u8bd1",sidebar_position:3,hide_title:!0},o=void 0,c={},t=[];function a(n){const i={a:"a",code:"code",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:'$ gf build -h\nUSAGE\n    gf build FILE [OPTION]\n\nARGUMENT\n    FILE  building file path.\n\nOPTION\n    -n, --name       output binary name\n    -v, --version    output binary version\n    -a, --arch       output binary architecture, multiple arch separated with \',\'\n    -s, --system     output binary system, multiple os separated with \',\'\n    -o, --output     output binary path, used when building single binary file\n    -p, --path       output binary directory path, default is \'./bin\'\n    -e, --extra      extra custom "go build" options\n    -m, --mod        like "-mod" option of "go build", use "-m none" to disable go module\n    -c, --cgo        enable or disable cgo feature, it\'s disabled in default\n    --pack           pack specified folder into packed/data.go before building.\n    --swagger        auto parse and pack swagger into packed/swagger.go before building.\n\nEXAMPLES\n    gf build main.go\n    gf build main.go --swagger\n    gf build main.go --pack public,template\n    gf build main.go --cgo\n    gf build main.go -m none\n    gf build main.go -n my-app -a all -s all\n    gf build main.go -n my-app -a amd64,386 -s linux -p .\n    gf build main.go -n my-app -v 1.0 -a amd64,386 -s linux,windows,darwin -p ./docker/bin\n\nDESCRIPTION\n    The "build" command is most commonly used command, which is designed as a powerful wrapper for\n    "go build" command for convenience cross-compiling usage.\n    It provides much more features for building binary:\n    1. Cross-Compiling for many platforms and architectures.\n    2. Configuration file support for compiling.\n    3. Build-In Variables.\n\nPLATFORMS\n    darwin    amd64\n    freebsd   386,amd64,arm\n    linux     386,amd64,arm,arm64,ppc64,ppc64le,mips,mipsle,mips64,mips64le\n    netbsd    386,amd64,arm\n    openbsd   386,amd64,arm\n    windows   386,amd64\n'})}),"\n",(0,s.jsxs)(i.p,{children:["\u4ec5\u9650\u4e8e\u4ea4\u53c9\u7f16\u8bd1\u4f7f\u7528\u5230 ",(0,s.jsx)(i.code,{children:"GF"})," \u6846\u67b6\u7684\u9879\u76ee\uff0c\u652f\u6301\u7edd\u5927\u90e8\u5206\u5e38\u89c1\u7cfb\u7edf\u7684\u76f4\u63a5\u4ea4\u53c9\u7f16\u8bd1\u3002\u5e76\u4e14\u652f\u6301\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u7f16\u8bd1\u9009\u9879\u3001\u5d4c\u5165\u7f16\u8bd1\u65f6\u53d8\u91cf\u3002\u4f7f\u7528 ",(0,s.jsx)(i.code,{children:"gf build"})," \u7684\u9879\u76ee\u5c06\u4f1a\u9ed8\u8ba4\u5d4c\u5165\u4ee5\u4e0b\u53d8\u91cf\uff08\u53c2\u8003 ",(0,s.jsx)(i.code,{children:"gf -v"}),"\uff09\uff1a"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u5f53\u524d ",(0,s.jsx)(i.code,{children:"Go"})," \u7248\u672c\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:["\u5f53\u524d ",(0,s.jsx)(i.code,{children:"GF"})," \u7248\u672c\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u5f53\u524d\u7f16\u8bd1\u65f6\u95f4\u3002"}),"\n",(0,s.jsxs)(i.li,{children:["\u5f53\u524d ",(0,s.jsx)(i.code,{children:"Git Commit"}),"\uff08\u5982\u679c\u5b58\u5728\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u7f16\u8bd1\u914d\u7f6e\u6587\u4ef6\u9009\u9879\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(i.p,{children:["\u7f16\u8bd1\u7684\u914d\u7f6e\u9ed8\u8ba4\u8bfb\u53d6\u7684\u662f\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6 ",(0,s.jsx)(i.code,{children:"config.toml"}),"\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570 ",(0,s.jsx)(i.code,{children:"-gf.gcfg.file=build.toml"})," \u6765\u4fee\u6539\u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5173\u4e8e\u5982\u4f55\u4fee\u6539\u914d\u7f6e\u7ba1\u7406\u7ec4\u4ef6\u9ed8\u8ba4\u7684\u914d\u7f6e\u76ee\u5f55\u53ca\u6587\u4ef6\u8bf7\u53c2\u8003\u7ae0\u8282\uff1a ",(0,s.jsx)(i.a,{href:"/1.16.x/%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6-%E9%87%8D%E7%82%B9/%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86/",children:"\u914d\u7f6e\u7ba1\u7406"})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'[gfcli]\n    [gfcli.build]\n        name     = "gf"\n        arch     = "all"\n        system   = "all"\n        mod      = "none"\n        cgo      = 0\n        pack     = ""\n        version  = "v1.0.0"\n        output   = "./bin"\n        extra    = ""\n'})}),"\n",(0,s.jsx)(i.p,{children:"\u914d\u7f6e\u9009\u9879\u7684\u91ca\u4e49\u540c\u547d\u4ee4\u884c\u540c\u540d\u9009\u9879\u3002"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"\u540d\u79f0"}),(0,s.jsx)(i.th,{children:"\u5fc5\u987b"}),(0,s.jsx)(i.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(i.th,{children:"\u542b\u4e49"}),(0,s.jsx)(i.th,{children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"name"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{children:"\u4e0e\u7a0b\u5e8f\u5165\u53e3go\u6587\u4ef6\u540c\u540d"}),(0,s.jsxs)(i.td,{children:["\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u540d\u79f0\u3002\u5982\u679c\u662f ",(0,s.jsx)(i.code,{children:"windows"})," \u5e73\u53f0\uff0c\u90a3\u4e48\u9ed8\u8ba4\u4f1a\u52a0\u4e0a ",(0,s.jsx)(i.code,{children:".exe"})," \u540e\u7f00"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"gf"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"arch"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{children:"\u5f53\u524d\u7cfb\u7edf\u67b6\u6784"}),(0,s.jsxs)(i.td,{children:["\u7f16\u8bd1\u67b6\u6784\uff0c\u591a\u4e2a\u4ee5 ",(0,s.jsx)(i.code,{children:","})," \u53f7\u5206\u9694\uff0c\u5982\u679c\u662f ",(0,s.jsx)(i.code,{children:"all"})," \u8868\u793a\u7f16\u8bd1\u6240\u6709\u652f\u6301\u67b6\u6784"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"386,amd64,arm"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"system"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"\u5f53\u524d\u7cfb\u7edf\u5e73\u53f0"})}),(0,s.jsxs)(i.td,{children:["\u7f16\u8bd1\u5e73\u53f0\uff0c\u591a\u4e2a\u4ee5 ",(0,s.jsx)(i.code,{children:","})," \u53f7\u5206\u9694\uff0c\u5982\u679c\u662f ",(0,s.jsx)(i.code,{children:"all"})," \u8868\u793a\u7f16\u8bd1\u6240\u6709\u652f\u6301\u5e73\u53f0"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"linux,darwin,windows"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"path"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"./bin"})}),(0,s.jsx)(i.td,{children:"\u7f16\u8bd1\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u50a8\u7684\u76ee\u5f55\u5730\u5740"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"./bin"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"mod"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsxs)(i.td,{children:["\u540c ",(0,s.jsx)(i.code,{children:"go build -mod"})," \u7f16\u8bd1\u9009\u9879\uff0c\u4e0d\u5e38\u7528"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"none"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"cgo"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0"})}),(0,s.jsxs)(i.td,{children:["\u662f\u5426\u5f00\u542f ",(0,s.jsx)(i.code,{children:"CGO"}),"\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002\u5982\u679c\u5f00\u542f\uff0c\u90a3\u4e48\u4ea4\u53c9\u7f16\u8bd1\u53ef\u80fd\u4f1a\u6709\u95ee\u9898\u3002"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"0"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"pack"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsxs)(i.td,{children:["\u9700\u8981\u6253\u5305\u7684\u76ee\u5f55\uff0c\u591a\u4e2a\u4ee5 ",(0,s.jsx)(i.code,{children:","})," \u53f7\u5206\u9694\uff0c\u751f\u6210\u5230 ",(0,s.jsx)(i.code,{children:"packed/data.go"})]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"public,template"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"version"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"\u7a0b\u5e8f\u7248\u672c\uff0c\u5982\u679c\u6307\u5b9a\u7248\u672c\u4fe1\u606f\uff0c\u90a3\u4e48\u7a0b\u5e8f\u751f\u6210\u7684\u8def\u5f84\u4e2d\u4f1a\u591a\u4e00\u5c42\u4ee5\u7248\u672c\u540d\u79f0\u7684\u76ee\u5f55"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"v1.0.0"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"output"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsxs)(i.td,{children:["\u8f93\u51fa\u7684\u53ef\u6267\u884c\u6587\u4ef6\u8def\u5f84\uff0c\u5f53\u8be5\u53c2\u6570\u6307\u5b9a\u65f6\uff0c ",(0,s.jsx)(i.code,{children:"name"})," \u548c ",(0,s.jsx)(i.code,{children:"path"})," \u53c2\u6570\u5931\u6548\uff0c\u5e38\u7528\u4e8e\u7f16\u8bd1\u5355\u4e2a\u53ef\u6267\u884c\u6587\u4ef6"]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"./bin/gf.exe"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"extra"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsxs)(i.td,{children:["\u989d\u5916\u81ea\u5b9a\u4e49\u7684\u7f16\u8bd1\u53c2\u6570\uff0c\u4f1a\u76f4\u63a5\u4f20\u9012\u7ed9 ",(0,s.jsx)(i.code,{children:"go build"})," \u547d\u4ee4"]}),(0,s.jsx)(i.td,{})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"varmap"})}),(0,s.jsx)(i.td,{children:"\u5426"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"\u81ea\u5b9a\u4e49\u7684\u5185\u7f6e\u53d8\u91cf\u952e\u503c\u5bf9"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:'<br />[gfcli]<br />    [gfcli.build]<br />        name     = "gf"<br />        arch     = "all"<br />        system   = "all"<br />        mod      = "none"<br />        cgo      = 0<br />        [gfcli.build.varmap]<br />            k1 = "v1"<br />            k2 = "v2"<br />'})})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["\u7f16\u8bd1\u65f6\u7684\u5185\u7f6e\u53d8\u91cf\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u901a\u8fc7 ",(0,s.jsx)(i.code,{children:"gbuild"})," \u5305 ",(0,s.jsx)(i.a,{href:"/1.16.x/%E6%A8%A1%E5%9D%97%E5%88%97%E8%A1%A8/%E7%B3%BB%E7%BB%9F%E7%9B%B8%E5%85%B3/gbuild%20-%E6%9E%84%E5%BB%BA%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96",children:"gbuild (\u6784\u5efa\u4fe1\u606f\u83b7\u53d6)"})," \u83b7\u53d6\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"$ gf build\n2020-12-31 00:35:25.562 start building...\n2020-12-31 00:35:25.562 go build -o ./bin/darwin_amd64/gf main.go\n2020-12-31 00:35:28.381 go build -o ./bin/freebsd_386/gf main.go\n2020-12-31 00:35:30.650 go build -o ./bin/freebsd_amd64/gf main.go\n2020-12-31 00:35:32.957 go build -o ./bin/freebsd_arm/gf main.go\n2020-12-31 00:35:35.824 go build -o ./bin/linux_386/gf main.go\n2020-12-31 00:35:38.082 go build -o ./bin/linux_amd64/gf main.go\n2020-12-31 00:35:41.076 go build -o ./bin/linux_arm/gf main.go\n2020-12-31 00:35:44.369 go build -o ./bin/linux_arm64/gf main.go\n2020-12-31 00:35:47.352 go build -o ./bin/linux_ppc64/gf main.go\n2020-12-31 00:35:50.293 go build -o ./bin/linux_ppc64le/gf main.go\n2020-12-31 00:35:53.166 go build -o ./bin/linux_mips/gf main.go\n2020-12-31 00:35:55.840 go build -o ./bin/linux_mipsle/gf main.go\n2020-12-31 00:35:58.423 go build -o ./bin/linux_mips64/gf main.go\n2020-12-31 00:36:01.062 go build -o ./bin/linux_mips64le/gf main.go\n2020-12-31 00:36:03.502 go build -o ./bin/netbsd_386/gf main.go\n2020-12-31 00:36:06.280 go build -o ./bin/netbsd_amd64/gf main.go\n2020-12-31 00:36:09.332 go build -o ./bin/netbsd_arm/gf main.go\n2020-12-31 00:36:11.811 go build -o ./bin/openbsd_386/gf main.go\n2020-12-31 00:36:14.140 go build -o ./bin/openbsd_amd64/gf main.go\n2020-12-31 00:36:17.859 go build -o ./bin/openbsd_arm/gf main.go\n2020-12-31 00:36:20.327 go build -o ./bin/windows_386/gf.exe main.go\n2020-12-31 00:36:22.994 go build -o ./bin/windows_amd64/gf.exe main.go\n2020-12-31 00:36:25.795 done!\n"})})]})}function h(n={}){const{wrapper:i}={...(0,l.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,i,d)=>{d.d(i,{R:()=>r,x:()=>o});var e=d(296540);const s={},l=e.createContext(s);function r(n){const i=e.useContext(l);return e.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),e.createElement(l.Provider,{value:i},n.children)}}}]);