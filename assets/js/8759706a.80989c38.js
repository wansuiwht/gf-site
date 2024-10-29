"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[24288],{27269:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var c=d(74848),r=d(28453);const s={title:"\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",sidebar_position:0},i=void 0,l={id:"\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",title:"\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",description:"\u5b9a\u65f6\u4efb\u52a1\u91c7\u7528\u4e86\u7c7b Linux Crontab \u7684\u8868\u8fbe\u683c\u5f0f\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u5feb\u901f\u7406\u89e3\u638c\u63e1\u5b9a\u65f6\u4efb\u52a1\u8868\u8fbe\u5f0f\u6280\u5de7\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757\u662f\u57fa\u4e8e\u4ee3\u7801\u5c42\u9762\u7684\u63a7\u5236\uff0c\u56e0\u6b64\u63a7\u5236\u7684\u7c92\u5ea6\u4f1a\u66f4\u7ec6\uff0c\u6700\u5c0f\u7c92\u5ea6\u5230 \u79d2\uff0c\u683c\u5f0f\u88ab\u5212\u5206\u4e3a\u4e86 6 \u6bb5\u3002\u800c Linux Crontab \u662f\u57fa\u4e8e\u7a0b\u5e8f\u5c42\u9762\u7684\u63a7\u5236\uff0c\u6700\u5c0f\u7c92\u5ea6\u5230 \u5206\uff0c\u683c\u5f0f\u88ab\u5212\u5206\u4e3a\u4e86 5 \u6bb5\u3002",source:"@site/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/7-\u5b9a\u65f6\u4efb\u52a1-gcron/0-\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/7-\u5b9a\u65f6\u4efb\u52a1-gcron",slug:"/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",draft:!1,unlisted:!1,editUrl:"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/5-\u7ec4\u4ef6\u5217\u8868/1-\u7cfb\u7edf\u76f8\u5173/7-\u5b9a\u65f6\u4efb\u52a1-gcron/0-\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f.md",tags:[],version:"2.7.x",lastUpdatedBy:"John",lastUpdatedAt:172999724e4,sidebarPosition:0,frontMatter:{title:"\u5b9a\u65f6\u4efb\u52a1-\u8868\u8fbe\u5f0f",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5b9a\u65f6\u4efb\u52a1-gcron",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/"},next:{title:"\u5b9a\u65f6\u4efb\u52a1-\u57fa\u672c\u4f7f\u7528",permalink:"/gf-site/docs/2.7.x/\u7ec4\u4ef6\u5217\u8868/\u7cfb\u7edf\u76f8\u5173/\u5b9a\u65f6\u4efb\u52a1-gcron/\u5b9a\u65f6\u4efb\u52a1-\u57fa\u672c\u4f7f\u7528"}},o={},h=[{value:"\u57fa\u672c\u4ecb\u7ecd",id:"\u57fa\u672c\u4ecb\u7ecd",level:2},{value:"\u7279\u6b8a\u5b57\u7b26",id:"\u7279\u6b8a\u5b57\u7b26",level:2},{value:"\u661f\u53f7\uff08 <code>*</code>\uff09",id:"\u661f\u53f7-",level:4},{value:"\u659c\u7ebf\uff08 <code>/</code>\uff09",id:"\u659c\u7ebf-",level:4},{value:"\u9017\u53f7\uff08 <code>,</code>\uff09",id:"\u9017\u53f7-",level:4},{value:"\u8fde\u5b57\u7b26\uff08 <code>-</code>\uff09",id:"\u8fde\u5b57\u7b26--",level:4},{value:"\u5ffd\u7565\u53f7\uff08 <code>\\#</code>\uff09",id:"\u5ffd\u7565\u53f7-",level:4},{value:"\u95ee\u53f7\uff08 <code>?</code>\uff09",id:"\u95ee\u53f7-",level:4},{value:"\u9884\u5b9a\u4e49\u683c\u5f0f",id:"\u9884\u5b9a\u4e49\u683c\u5f0f",level:4},{value:"\u95f4\u9694",id:"\u95f4\u9694",level:4},{value:"\u8868\u8fbe\u5f0f\u793a\u4f8b",id:"\u8868\u8fbe\u5f0f\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879\ud83d\udd25",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u5b9a\u65f6\u4efb\u52a1\u91c7\u7528\u4e86\u7c7b ",(0,c.jsx)(n.code,{children:"Linux Crontab"})," \u7684\u8868\u8fbe\u683c\u5f0f\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u5feb\u901f\u7406\u89e3\u638c\u63e1\u5b9a\u65f6\u4efb\u52a1\u8868\u8fbe\u5f0f\u6280\u5de7\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u5b9a\u65f6\u4efb\u52a1\u6a21\u5757\u662f\u57fa\u4e8e\u4ee3\u7801\u5c42\u9762\u7684\u63a7\u5236\uff0c\u56e0\u6b64\u63a7\u5236\u7684\u7c92\u5ea6\u4f1a\u66f4\u7ec6\uff0c\u6700\u5c0f\u7c92\u5ea6\u5230 ",(0,c.jsx)(n.code,{children:"\u79d2"}),"\uff0c\u683c\u5f0f\u88ab\u5212\u5206\u4e3a\u4e86 ",(0,c.jsx)(n.code,{children:"6"})," \u6bb5\u3002\u800c ",(0,c.jsx)(n.code,{children:"Linux Crontab"})," \u662f\u57fa\u4e8e\u7a0b\u5e8f\u5c42\u9762\u7684\u63a7\u5236\uff0c\u6700\u5c0f\u7c92\u5ea6\u5230 ",(0,c.jsx)(n.code,{children:"\u5206"}),"\uff0c\u683c\u5f0f\u88ab\u5212\u5206\u4e3a\u4e86 ",(0,c.jsx)(n.code,{children:"5"})," \u6bb5\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u57fa\u672c\u4ecb\u7ecd",children:"\u57fa\u672c\u4ecb\u7ecd"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"cron\u8868\u8fbe\u5f0f"})," \u8868\u793a\u4e00\u7ec4\u65f6\u95f4\uff0c\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"6"})," \u4e2a\u7a7a\u683c\u5206\u9694\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Seconds Minutes Hours Day Month Week\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5373 ",(0,c.jsx)(n.code,{children:"\u79d2 \u5206 \u65f6 \xa0\u65e5 \u6708 \u5468"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u6bcf\u4e2a\u5b57\u6bb5\u7684\u542b\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Field name    | Allowed values  | Allowed special characters\n----------    | --------------  | --------------------------\nSeconds       | 0-59            | * / , - #\nMinutes       | 0-59            | * / , -\nHours         | 0-23            | * / , -\nDay           | 1-31            | * / , - ?\nMonth         | 1-12 or JAN-DEC | * / , -\nWeek          | 0-6 or SUN-SAT  | * / , - ?\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6708\u4efd\u548c\u661f\u671f\u5b57\u6bb5\u503c\u82f1\u6587\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u3002 \u4f8b\u5982\u4f20\u9012 ",(0,c.jsx)(n.code,{children:"SUN"}),"\u3001 ",(0,c.jsx)(n.code,{children:"Sun"}),"\xa0\u548c ",(0,c.jsx)(n.code,{children:"sun"})," \u540c\u6837\u88ab\u63a5\u53d7\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7279\u6b8a\u5b57\u7b26",children:"\u7279\u6b8a\u5b57\u7b26"}),"\n",(0,c.jsxs)(n.h4,{id:"\u661f\u53f7-",children:["\u661f\u53f7\uff08 ",(0,c.jsx)(n.code,{children:"*"}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u661f\u53f7\u8868\u793a ",(0,c.jsx)(n.code,{children:"cron"})," \u8868\u8fbe\u5f0f\u5c06\u5339\u914d\u6240\u6709\u7684\u503c\u3002\u4f8b\u5982\uff0c\u5728\u7b2c\u4e94\u4e2a\u5b57\u6bb5( ",(0,c.jsx)(n.code,{children:"Month"}),")\u4e2d\u4f7f\u7528\u661f\u53f7\u8868\u793a\u6bcf\u4e2a\u6708\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u659c\u7ebf-",children:["\u659c\u7ebf\uff08 ",(0,c.jsx)(n.code,{children:"/"}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u659c\u6760\u7528\u4e8e\u63cf\u8ff0\u8303\u56f4\u7684\u589e\u91cf\u3002\u4f8b\u5982\uff1a\u7b2c\u4e8c\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"3-59/15"})," \u8868\u793a\u6bcf\u5c0f\u65f6\u7684\u7b2c ",(0,c.jsx)(n.code,{children:"3"})," \u5206\u949f\u5f00\u59cb\u5230\u7b2c ",(0,c.jsx)(n.code,{children:"59"})," \u5206\u949f\uff0c\u6bcf\u9694 ",(0,c.jsx)(n.code,{children:"15"})," \u5206\u949f\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u9017\u53f7-",children:["\u9017\u53f7\uff08 ",(0,c.jsx)(n.code,{children:","}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u9017\u53f7\u7528\u4e8e\u5206\u9694\u5217\u8868\u7684\u9879\u76ee\u3002\u4f8b\u5982\uff0c\u7b2c\u4e94\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"MON,WED,FRI"})," \u5c06\u6307\u6bcf\u5468\u4e00\uff0c\u5468\u4e09\u548c\u5468\u4e94\u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u8fde\u5b57\u7b26--",children:["\u8fde\u5b57\u7b26\uff08 ",(0,c.jsx)(n.code,{children:"-"}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fde\u5b57\u7b26\u7528\u4e8e\u5b9a\u4e49\u8303\u56f4\u3002\u4f8b\u5982\uff0c\u7b2c\u4e09\u4e2a\u5b57\u6bb5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"9-17"})," \u8868\u793a\u6bcf\u5929\u4e0a\u5348 ",(0,c.jsx)(n.code,{children:"9"})," \u70b9\u81f3\u4e0b\u5348 ",(0,c.jsx)(n.code,{children:"5"})," \u70b9\uff08\u542b\uff09\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u5ffd\u7565\u53f7-",children:["\u5ffd\u7565\u53f7\uff08 ",(0,c.jsx)(n.code,{children:"\\#"}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5ffd\u7565\u53f7\u8868\u793a ",(0,c.jsx)(n.code,{children:"cron"})," \u8868\u8fbe\u5f0f\u5c06\u5ffd\u7565\u8fd9\u4e2a\u5b57\u6bb5\u7684\u4f7f\u7528\uff0c\u76ee\u524d\u4ec5\u79d2\u5b57\u6bb5\u652f\u6301\u8be5\u7b26\u53f7\uff0c\u7528\u4e8e\u5c06 ",(0,c.jsx)(n.code,{children:"6"})," \u6bb5 ",(0,c.jsx)(n.code,{children:"cron pattern"})," \u65e0\u7f1d\u8f6c\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"5"})," \u6bb5 ",(0,c.jsx)(n.code,{children:"linux crontab pattern"}),"\u3002"]}),"\n",(0,c.jsxs)(n.h4,{id:"\u95ee\u53f7-",children:["\u95ee\u53f7\uff08 ",(0,c.jsx)(n.code,{children:"?"}),"\uff09"]}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"\u95ee\u53f7"})," \u800c\u4e0d\u662f ",(0,c.jsx)(n.code,{children:"*"})," \u6765\u8ba9 ",(0,c.jsx)(n.code,{children:"Day"})," \u6216 ",(0,c.jsx)(n.code,{children:"Week"})," \u5b57\u6bb5\u4e3a\u7a7a\u3002"]}),"\n",(0,c.jsx)(n.h4,{id:"\u9884\u5b9a\u4e49\u683c\u5f0f",children:"\u9884\u5b9a\u4e49\u683c\u5f0f"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4f7f\u7528\u51e0\u4e2a\u9884\u5b9a\u4e49\u7684\u65f6\u95f4\u6765\u4ee3\u66ff ",(0,c.jsx)(n.code,{children:"cron"})," \u8868\u8fbe\u5f0f\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"Entry                  | Description                                | Equivalent To\n-----                  | -----------                                | -------------\n@yearly (or @annually) | Run once a year, midnight, Jan. 1st        | 0 0 0 1 1 *\n@monthly               | Run once a month, midnight, first of month | 0 0 0 1 * *\n@weekly                | Run once a week, midnight between Sat/Sun  | 0 0 0 * * 0\n@daily (or @midnight)  | Run once a day, midnight                   | 0 0 0 * * *\n@hourly                | Run once an hour, beginning of hour        | 0 0 * * * *\n"})}),"\n",(0,c.jsx)(n.h4,{id:"\u95f4\u9694",children:"\u95f4\u9694"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u4efb\u52a1\u4ee5\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u6267\u884c\uff0c\u4ece\u6dfb\u52a0\u65f6\u5f00\u59cb\u8fd0\u884c\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u683c\u5f0f\u5316 ",(0,c.jsx)(n.code,{children:"cron"})," \u89c4\u8303\u6765\u652f\u6301\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"@every <duration>\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,c.jsx)(n.code,{children:"duration"})," \u662f ",(0,c.jsx)(n.code,{children:"time.ParseDuration"})," \u63a5\u53d7\u7684\u5b57\u7b26\u4e32 \uff08 ",(0,c.jsx)(n.a,{href:"http://golang.org/pkg/time/#ParseDuration",children:"http://golang.org/pkg/time/#ParseDuration"}),"\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c ",(0,c.jsx)(n.code,{children:"@every 1h30m10s"})," \u5c06\u8868\u793a\u6dfb\u52a0\u4efb\u52a1\u4e4b\u540e\u6bcf\u9694 ",(0,c.jsx)(n.code,{children:"1\u5c0f\u65f630\u520610\u79d2"})," \u6267\u884c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u95f4\u9694\u4e0d\u4f1a\u8003\u8651\u4efb\u52a1\u7684\u6267\u884c\u5f00\u9500\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4e00\u9879\u5de5\u4f5c\u9700\u8981 ",(0,c.jsx)(n.code,{children:"3"})," \u5206\u949f\u624d\u80fd\u6267\u884c\u5b8c\u6210\uff0c\u5e76\u4e14\u8ba1\u5212\u6bcf\u9694 ",(0,c.jsx)(n.code,{children:"5"})," \u5206\u949f\u8fd0\u884c\u4e00\u6b21\uff0c\u90a3\u4e48\u6bcf\u6b21\u4efb\u52a1\u4e4b\u95f4\u53ea\u6709 ",(0,c.jsx)(n.code,{children:"2"})," \u5206\u949f\u7684\u7a7a\u95f2\u65f6\u95f4\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8868\u8fbe\u5f0f\u793a\u4f8b",children:"\u8868\u8fbe\u5f0f\u793a\u4f8b"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u8868\u8fbe\u5f0f\u793a\u4f8b"}),(0,c.jsx)(n.th,{children:"\u8868\u8fbe\u5f0f\u8bf4\u660e"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"* * * * * *"})}),(0,c.jsx)(n.td,{children:"\u6bcf\u79d2\u6267\u884c"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"# * * * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf\u5206\u949f\u6267\u884c\uff0c\u6bcf\u4e00\u6b21\u6267\u884c\u81f3\u5c11\u95f4\u9694 ",(0,c.jsx)(n.code,{children:"60"})," \u79d2"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"2\xa0* * * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf\u5206\u949f\u7684\u7b2c ",(0,c.jsx)(n.code,{children:"2"})," \u79d2\u6267\u884c"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"*/5 * * * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf ",(0,c.jsx)(n.code,{children:"5"})," \u79d2\u6267\u884c\u4e00\u6b21"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"# */30 * * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf ",(0,c.jsx)(n.code,{children:"30"})," \u5206\u949f\u6267\u884c\u4e00\u6b21"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"# 0 2 * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf\u5929\u51cc\u6668 ",(0,c.jsx)(n.code,{children:"2"})," \u70b9\u6267\u884c"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"# */30 9-18 * * *"})}),(0,c.jsxs)(n.td,{children:["\u6bcf\u5929 ",(0,c.jsx)(n.code,{children:"9"})," \u70b9\u5230 ",(0,c.jsx)(n.code,{children:"18"})," \u70b9\uff0c\u6bcf\u9694 ",(0,c.jsx)(n.code,{children:"30"})," \u5206\u949f\u6267\u884c\u4e00\u6b21"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"# 0 9 * * MON,FRI"})}),(0,c.jsxs)(n.td,{children:["\u6bcf ",(0,c.jsx)(n.code,{children:"\u5468\u4e00"})," \u548c ",(0,c.jsx)(n.code,{children:"\u5468\u4e94"})," \u5728 ",(0,c.jsx)(n.code,{children:"9"})," \u70b9\u6267\u884c\u4e00\u6b21"]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879\ud83d\udd25"}),"\n",(0,c.jsxs)(n.p,{children:["\u6240\u6709\u5f00\u53d1\u8bed\u8a00\u7ea7\u522b ",(0,c.jsx)(n.code,{children:"6"})," \u6bb5\u5f0f\u7684 ",(0,c.jsx)(n.code,{children:"cron pattern"})," \u8bbe\u8ba1\u4ece\u5b9e\u8df5\u4e0a\u6765\u8bf4\uff0c\u7531\u4e8e\u5e95\u5c42\u5b9a\u65f6\u5668\u7684\u4e0d\u51c6\u786e\u6027\uff0c\u56e0\u6b64\u90fd\u662f\u6709\u4e00\u5b9a\u7684\u8bbe\u8ba1\u7f3a\u9677\u3002\u7531\u4e8e ",(0,c.jsx)(n.code,{children:"cron pattern"})," \u7cbe\u786e\u5230\u79d2\u7ea7\uff0c\u5f53\u5ef6 ",(0,c.jsx)(n.strong,{children:"\u8fdf\u8fbe\u5230\u4e86\u79d2\u7ea7"}),"\uff0c\u90a3\u4e48\u4efb\u52a1\u53ef\u80fd\u4f1a\u5b58\u5728\u4e22\u5931\u60c5\u51b5\u3002\u800c\u5f53 ",(0,c.jsx)(n.code,{children:"golang"})," \u5f15\u64ce\u8c03\u5ea6\u6bd4\u8f83\u6162\u7684\u65f6\u5019\uff0c\u90a3\u4e48\u5ef6\u8fdf\u5f88\u5bb9\u6613\u8fbe\u5230\u79d2\u7ea7\u5f15\u53d1\u7a0b\u5e8f\u903b\u8f91\u95ee\u9898\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8003\u8651\u5927\u90e8\u5206\u7684\u573a\u666f\u5176\u5b9e\u5e76\u4e0d\u9700\u8981\u5982\u6b64\u7cbe\u51c6\u7684\u5b9a\u65f6\u4efb\u52a1\u7c92\u5ea6\u63a7\u5236\uff0c\u56e0\u6b64\u4ece\u6846\u67b6 ",(0,c.jsx)(n.code,{children:"v2.7"})," \u7248\u672c\u5f00\u59cb\uff0c\u6211\u4eec\u5bf9\u79d2\u5b57\u6bb5\u63d0\u4f9b\u4e86\u5ffd\u7565\u7b26\u53f7 ",(0,c.jsx)(n.code,{children:"#"}),"\uff0c\u7528\u4e8e\u5c06 ",(0,c.jsx)(n.code,{children:"6"})," \u6bb5\u5f0f\u7684 ",(0,c.jsx)(n.code,{children:"cron pattern"})," \u8f6c\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"5"})," \u6bb5\u5f0f\u7684 ",(0,c.jsx)(n.code,{children:"linux crontab pattern"}),"\uff0c\u66f4\u52a0\u7a33\u5065\u3002\u5982\u679c\u662f\u79d2\u7ea7\u7c92\u5ea6\u7684\u5b9a\u65f6\u4efb\u52a1\u573a\u666f\uff0c\u8bf7\u8003\u8651\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"gtimer"})," \u5b9a\u65f6\u5668\uff0c\u4f46\u540c\u65f6\u4e5f\u9700\u8981\u6ce8\u610f\uff0c\u4efb\u4f55\u7684\u5b9a\u65f6\u5668\u90fd\u662f\u4e0d\u51c6\u786e\u7684\uff0c\u4e0d\u80fd\u5b8c\u5168\u4f9d\u8d56\u5e95\u5c42\u7684\u7cfb\u7edf\u65f6\u95f4\u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(t,{...e})}):t(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var c=d(96540);const r={},s=c.createContext(r);function i(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);