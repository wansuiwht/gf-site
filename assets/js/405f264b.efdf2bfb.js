"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["73343"],{537421:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"course/starbook/\u7B2C\u56DB\u7AE0-\u5355\u8BCD\u7BA1\u7406/4.4.\u7F16\u8F91\u5355\u8BCD","title":"4.4.\u7F16\u8F91\u5355\u8BCD","description":"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684REST API\u6765\u66F4\u65B0\u5355\u8BCD\u4FE1\u606F\uFF0C\u5305\u62EC\u5355\u8BCD\u7684\u5B9A\u4E49\u3001\u4F8B\u53E5\u3001\u4E2D\u6587\u7FFB\u8BD1\u53CA\u53D1\u97F3\u7B49\u3002\u5F3A\u8C03\u4E86\u5728\u7F16\u8F91\u64CD\u4F5C\u4E2D\u7684\u552F\u4E00\u6027\u68C0\u67E5\u548C\u6743\u9650\u9A8C\u8BC1\u903B\u8F91\uFF0C\u5E76\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5E93\u8FDB\u884C\u6570\u636E\u66F4\u65B0\u53CA\u9519\u8BEF\u5904\u7406\u3002","source":"@site/docs/course/starbook/\u7B2C\u56DB\u7AE0-\u5355\u8BCD\u7BA1\u7406/4.4.\u7F16\u8F91\u5355\u8BCD.md","sourceDirName":"course/starbook/\u7B2C\u56DB\u7AE0-\u5355\u8BCD\u7BA1\u7406","slug":"/course/starbook/word-update","permalink":"/course/starbook/word-update","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/docs/course/starbook/\u7B2C\u56DB\u7AE0-\u5355\u8BCD\u7BA1\u7406/4.4.\u7F16\u8F91\u5355\u8BCD.md","tags":[],"version":"current","lastUpdatedBy":"John","lastUpdatedAt":1731815164000,"frontMatter":{"hide_title":true,"slug":"/course/starbook/word-update","keywords":["GoFrame","\u5355\u8BCD\u66F4\u65B0","REST API","PUT\u8BF7\u6C42","\u5355\u8BCD\u5B9A\u4E49","\u552F\u4E00\u6027\u68C0\u67E5","\u66F4\u65B0\u903B\u8F91","\u6743\u9650\u9A8C\u8BC1","\u6570\u636E\u5E93\u64CD\u4F5C","\u9519\u8BEF\u5904\u7406"],"description":"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684REST API\u6765\u66F4\u65B0\u5355\u8BCD\u4FE1\u606F\uFF0C\u5305\u62EC\u5355\u8BCD\u7684\u5B9A\u4E49\u3001\u4F8B\u53E5\u3001\u4E2D\u6587\u7FFB\u8BD1\u53CA\u53D1\u97F3\u7B49\u3002\u5F3A\u8C03\u4E86\u5728\u7F16\u8F91\u64CD\u4F5C\u4E2D\u7684\u552F\u4E00\u6027\u68C0\u67E5\u548C\u6743\u9650\u9A8C\u8BC1\u903B\u8F91\uFF0C\u5E76\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5E93\u8FDB\u884C\u6570\u636E\u66F4\u65B0\u53CA\u9519\u8BEF\u5904\u7406\u3002"},"sidebar":"courseStarBookSidebar","previous":{"title":"4.3.\u65B0\u589E\u5355\u8BCD","permalink":"/course/starbook/word-create"},"next":{"title":"4.5.\u5355\u8BCD\u5206\u9875\u5217\u8868","permalink":"/course/starbook/word-list"}}'),t=r("785893"),d=r("250065");let o={hide_title:!0,slug:"/course/starbook/word-update",keywords:["GoFrame","\u5355\u8BCD\u66F4\u65B0","REST API","PUT\u8BF7\u6C42","\u5355\u8BCD\u5B9A\u4E49","\u552F\u4E00\u6027\u68C0\u67E5","\u66F4\u65B0\u903B\u8F91","\u6743\u9650\u9A8C\u8BC1","\u6570\u636E\u5E93\u64CD\u4F5C","\u9519\u8BEF\u5904\u7406"],description:"\u5229\u7528GoFrame\u6846\u67B6\u4E2D\u7684REST API\u6765\u66F4\u65B0\u5355\u8BCD\u4FE1\u606F\uFF0C\u5305\u62EC\u5355\u8BCD\u7684\u5B9A\u4E49\u3001\u4F8B\u53E5\u3001\u4E2D\u6587\u7FFB\u8BD1\u53CA\u53D1\u97F3\u7B49\u3002\u5F3A\u8C03\u4E86\u5728\u7F16\u8F91\u64CD\u4F5C\u4E2D\u7684\u552F\u4E00\u6027\u68C0\u67E5\u548C\u6743\u9650\u9A8C\u8BC1\u903B\u8F91\uFF0C\u5E76\u901A\u8FC7\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5E93\u8FDB\u884C\u6570\u636E\u66F4\u65B0\u53CA\u9519\u8BEF\u5904\u7406\u3002"},c=void 0,s={},l=[{value:"\u6DFB\u52A0 Api",id:"\u6DFB\u52A0-api",level:2},{value:"\u7F16\u5199Logic",id:"\u7F16\u5199logic",level:2},{value:"Controller\u8C03\u7528Logic",id:"controller\u8C03\u7528logic",level:2},{value:"\u63A5\u53E3\u6D4B\u8BD5",id:"\u63A5\u53E3\u6D4B\u8BD5",level:2}];function a(e){let n={code:"code",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u7F16\u8F91\u5355\u8BCD\u4F7F\u7528",(0,t.jsx)(n.code,{children:"PUT"}),"\u65B9\u5F0F\uFF0C\u4EE3\u8868\u66F4\u65B0\u8D44\u6E90\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6DFB\u52A0-api",children:"\u6DFB\u52A0 Api"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"api/words/v1/words.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type UpdateReq struct {  \n    g.Meta             `path:"words/{id}" method:"put" sm:"\u66F4\u65B0" tags:"\u5355\u8BCD"`  \n    Id                 uint   `json:"id" v:"required"`  \n    Word               string `json:"word" v:"required|length:1,100" dc:"\u5355\u8BCD"`  \n    Definition         string `json:"definition" v:"required|length:1,300" dc:"\u5355\u8BCD\u5B9A\u4E49"`  \n    ExampleSentence    string `json:"example_sentence" v:"required|length:1,300" dc:"\u4F8B\u53E5"`  \n    ChineseTranslation string `json:"chinese_translation" v:"required|length:1,300" dc:"\u4E2D\u6587\u7FFB\u8BD1"`  \n    Pronunciation      string `json:"pronunciation" v:"required|length:1,100" dc:"\u53D1\u97F3"`  \n    ProficiencyLevel   uint   `json:"proficiency_level" v:"required|between:1,5" dc:"\u719F\u7EC3\u5EA6\uFF0C1\u6700\u4F4E\uFF0C5\u6700\u9AD8"`  \n}  \n  \ntype UpdateRes struct {  \n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u7F16\u5199logic",children:"\u7F16\u5199Logic"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u7F16\u8F91\u65F6\uFF0C\u6211\u4EEC\u4E5F\u9700\u8981\u68C0\u67E5",(0,t.jsx)(n.code,{children:"word"}),"\u662F\u5426\u552F\u4E00\u3002\u73B0\u6709\u7684",(0,t.jsx)(n.code,{children:"checkWord"}),"\u51FD\u6570\u4E0D\u80FD\u6EE1\u8DB3\u9700\u8981\uFF0C\u7F16\u8F91\u65F6\u4F1A\u8FDE\u540C\u81EA\u5DF1\u4E00\u8D77\u5224\u65AD\uFF0C\u6240\u4EE5\u8981\u6539\u8FDB\u4E00\u4E0B\uFF1A"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u52A0\u4E0A",(0,t.jsx)(n.code,{children:"id"}),"\u5B57\u6BB5\uFF0C\u4E0D\u4E3A",(0,t.jsx)(n.code,{children:"0"}),"\u65F6\u4F7F\u7528",(0,t.jsx)(n.code,{children:"id"}),"\u548C",(0,t.jsx)(n.code,{children:"word"}),"\u8054\u5408\u5224\u65AD\uFF1B"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),"\u4E3A",(0,t.jsx)(n.code,{children:"0"}),"\u65F6\u4EE3\u8868\u65B0\u589E\uFF0C\u4EC5\u4F7F\u7528",(0,t.jsx)(n.code,{children:"word"}),"\u5224\u65AD\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"internal/logic/words/words.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package words\n\n...\n\nfunc Create(ctx context.Context, in *model.WordInput) error {  \n    if err := checkWord(ctx, 0, in); err != nil {  \n       return err  \n    }\n    ...\n}\n\n// checkWord \u5728\u66F4\u65B0\u65F6\u4E0D\u68C0\u67E5\u81EA\u8EAB  \nfunc checkWord(ctx context.Context, id uint, in *model.WordInput) error {  \n    db := dao.Words.Ctx(ctx).Where("uid", in.Uid).Where("word", in.Word)  \n    if id > 0 {  \n       db = db.WhereNot("id", id)  \n    }  \n    count, err := db.Count()  \n    if err != nil {  \n       return err  \n    }  \n    if count > 0 {  \n       return gerror.New("\u5355\u8BCD\u5DF2\u5B58\u5728")  \n    }  \n    return nil  \n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u52A0\u4E0A\u66F4\u65B0\u903B\u8F91\uFF1A"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"internal/logic/words/words.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package words  \n\n...\n\nfunc Update(ctx context.Context, id uint, in *model.WordInput) error {  \n    if err := checkWord(ctx, id, in); err != nil {  \n       return err  \n    }  \n      \n    db := dao.Words.Ctx(ctx).Where("uid", in.Uid).Data(do.Words{  \n       Word:               in.Word,  \n       Definition:         in.Definition,  \n       ExampleSentence:    in.ExampleSentence,  \n       ChineseTranslation: in.ChineseTranslation,  \n       Pronunciation:      in.Pronunciation,  \n       ProficiencyLevel:   in.ProficiencyLevel,  \n    }).Where("id", id)  \n    if in.Uid > 0 {  \n       db = db.Where("uid", in.Uid)  \n    }  \n  \n    _, err := db.Update()  \n    if err != nil {  \n       return err  \n    }  \n    return nil  \n}\n\n...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728",(0,t.jsx)(n.code,{children:"Uid"}),"\u5927\u4E8E\u96F6\u7684\u60C5\u51B5\u4E0B\uFF0C\u5219\u5FC5\u987B\u5728",(0,t.jsx)(n.code,{children:"ORM"}),"\u94FE\u5F0F\u4E2D\u52A0\u4E0A",(0,t.jsx)(n.code,{children:"Uid"}),"\u5224\u65AD\u6761\u4EF6\uFF0C\u4EE5\u9632\u6B62\u8D8A\u6743\uFF0C\u540E\u7EED\u7684\u67E5\u8BE2\uFF0C\u5220\u9664\u52A8\u4F5C\u540C\u6837\u5982\u6B64\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"controller\u8C03\u7528logic",children:"Controller\u8C03\u7528Logic"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"internal/controller/words/words_v1_update.go"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'package words  \n  \nimport (  \n    "context"  \n  \n    "star/internal/logic/users"\n    "star/internal/logic/words"\n    "star/internal/model"  \n    "star/api/words/v1"\n)  \n  \nfunc (c *ControllerV1) Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error) {  \n    uid, err := users.GetUid(ctx)  \n    if err != nil {  \n       return nil, err  \n    }  \n    err = words.Update(ctx, req.Id, &model.WordInput{  \n       Uid:                uid,  \n       Word:               req.Word,  \n       Definition:         req.Definition,  \n       ExampleSentence:    req.ExampleSentence,  \n       ChineseTranslation: req.ChineseTranslation,  \n       Pronunciation:      req.Pronunciation,  \n       ProficiencyLevel:   model.ProficiencyLevel(req.ProficiencyLevel),  \n    })  \n    return nil, err  \n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u63A5\u53E3\u6D4B\u8BD5",children:"\u63A5\u53E3\u6D4B\u8BD5"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl -X PUT http://127.0.0.1:8000/v1/words/1 \\\n     -H "Authorization: eyJhbGci...5U" \\\n     -H "Content-Type: application/json" \\\n     -d \'{\n           "word": "example_update",\n           "definition": "A representative form or pattern.",\n           "example_sentence": "This is an example sentence.",\n           "chinese_translation": "\u4F8B\u5B50",\n           "pronunciation": "\u026A\u0261\u02C8z\u0251\u02D0mp(\u0259)l",\n           "proficiency_level": 3\n         }\'\n\n{\n\xa0 \xa0 "code": 0,\n\xa0 \xa0 "message": "",\n\xa0 \xa0 "data": null\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884C\u547D\u4EE4\uFF0C\u67E5\u8BE2\u6570\u636E\u662F\u5426\u6B63\u5E38\u66F4\u65B0\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"$ SELECT * FROM words;\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"id"}),(0,t.jsx)(n.th,{children:"uid"}),(0,t.jsx)(n.th,{children:"word"}),(0,t.jsx)(n.th,{children:"definition"}),(0,t.jsx)(n.th,{children:"example_sentence"}),(0,t.jsx)(n.th,{children:"chinese_translation"}),(0,t.jsx)(n.th,{children:"pronunciation"}),(0,t.jsx)(n.th,{children:"proficiency_level"}),(0,t.jsx)(n.th,{children:"created_at"}),(0,t.jsx)(n.th,{children:"updated_at"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"example_update"}),(0,t.jsx)(n.td,{children:"A representative form or pattern."}),(0,t.jsx)(n.td,{children:"This is an example sentence."}),(0,t.jsx)(n.td,{children:"\u4F8B\u5B50"}),(0,t.jsx)(n.td,{children:"\u026A\u0261\u02C8z\u0251\u02D0mp(\u0259)l"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"2024/11/12 15:38:50"}),(0,t.jsx)(n.td,{children:"2024/11/12 15:38:50"})]})})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return o}});var i=r(667294);let t={},d=i.createContext(t);function o(e){let n=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);