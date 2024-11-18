"use strict";(self.webpackChunkgf_site=self.webpackChunkgf_site||[]).push([["48438"],{888650:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>g,assets:()=>o,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B","title":"\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B","description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684GRPC\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E3AGRPC\u5FAE\u670D\u52A1\u589E\u52A0\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u3002\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86\u5982\u4F55\u521D\u59CB\u5316Jaeger\uFF0C\u7528Redis\u9002\u914D\u5668\u5B9E\u73B0\u7F13\u5B58\uFF0C\u4EE5\u53CA\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u95F4\u8FDB\u884C\u94FE\u8DEF\u4FE1\u606F\u4F20\u9012\u3002","source":"@site/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B.md","sourceDirName":"docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A","slug":"/docs/obs/tracing-grpc-example","permalink":"/en/2.7.x/docs/obs/tracing-grpc-example","draft":false,"unlisted":false,"editUrl":"https://github.com/gogf/gf-site/blob/main/versioned_docs/version-2.7.x/docs/\u670D\u52A1\u53EF\u89C2\u6D4B\u6027/\u670D\u52A1\u94FE\u8DEF\u8DDF\u8E2A/\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B.md","tags":[],"version":"2.7.x","lastUpdatedBy":"John","lastUpdatedAt":1731504210000,"sidebarPosition":4,"frontMatter":{"slug":"/docs/obs/tracing-grpc-example","title":"\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B","sidebar_position":4,"hide_title":true,"keywords":["GoFrame","GRPC","\u94FE\u8DEF\u8DDF\u8E2A","\u5FAE\u670D\u52A1","\u5BA2\u6237\u7AEF","\u670D\u52A1\u7AEF","\u7F13\u5B58\u9002\u914D\u5668","\u6570\u636E\u5E93","Jaeger","protobuf"],"description":"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684GRPC\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E3AGRPC\u5FAE\u670D\u52A1\u589E\u52A0\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u3002\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86\u5982\u4F55\u521D\u59CB\u5316Jaeger\uFF0C\u7528Redis\u9002\u914D\u5668\u5B9E\u73B0\u7F13\u5B58\uFF0C\u4EE5\u53CA\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u95F4\u8FDB\u884C\u94FE\u8DEF\u4FE1\u606F\u4F20\u9012\u3002"},"sidebar":"mainSidebar","previous":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-HTTP\u793A\u4F8B-\u6570\u636E\u64CD\u4F5C","permalink":"/en/2.7.x/docs/obs/tracing-http-example-with-database"},"next":{"title":"\u94FE\u8DEF\u8DDF\u8E2A-TraceID\u6CE8\u5165\u548C\u83B7\u53D6","permalink":"/en/2.7.x/docs/obs/tracing-practice-inject-traceid"}}'),s=r("785893"),c=r("250065");let i={slug:"/docs/obs/tracing-grpc-example",title:"\u94FE\u8DEF\u8DDF\u8E2A-GRPC\u793A\u4F8B",sidebar_position:4,hide_title:!0,keywords:["GoFrame","GRPC","\u94FE\u8DEF\u8DDF\u8E2A","\u5FAE\u670D\u52A1","\u5BA2\u6237\u7AEF","\u670D\u52A1\u7AEF","\u7F13\u5B58\u9002\u914D\u5668","\u6570\u636E\u5E93","Jaeger","protobuf"],description:"\u4F7F\u7528GoFrame\u6846\u67B6\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684GRPC\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E3AGRPC\u5FAE\u670D\u52A1\u589E\u52A0\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u3002\u793A\u4F8B\u4EE3\u7801\u8BF4\u660E\u4E86\u5982\u4F55\u521D\u59CB\u5316Jaeger\uFF0C\u7528Redis\u9002\u914D\u5668\u5B9E\u73B0\u7F13\u5B58\uFF0C\u4EE5\u53CA\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u95F4\u8FDB\u884C\u94FE\u8DEF\u4FE1\u606F\u4F20\u9012\u3002"},d=void 0,o={},l=[{value:"\u76EE\u5F55\u7ED3\u6784",id:"\u76EE\u5F55\u7ED3\u6784",level:2},{value:"Protobuf",id:"protobuf",level:2},{value:"GRPC Server",id:"grpc-server",level:2},{value:"GRPC Client",id:"grpc-client",level:2},{value:"\u6548\u679C\u67E5\u770B",id:"\u6548\u679C\u67E5\u770B",level:2},{value:"GRPC Client",id:"grpc-client-1",level:3},{value:"Attributes",id:"attributes",level:4},{value:"Events/Logs",id:"eventslogs",level:4},{value:"GRPC Server",id:"grpc-server-1",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"Events",id:"events",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5728\u672C\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5C06\u4E4B\u524D\u4ECB\u7ECD ",(0,s.jsx)(n.code,{children:"HTTP Client&Server"})," \u7684\u793A\u4F8B\u4FEE\u6539\u4E3A ",(0,s.jsx)(n.code,{children:"GRPC"})," \u5FAE\u670D\u52A1\uFF0C\u5E76\u6F14\u793A\u5982\u4F55\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"GoFrame"})," \u6846\u67B6\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"GRPC"})," \u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E14\u4E3A ",(0,s.jsx)(n.code,{children:"GRPC"})," \u5FAE\u670D\u52A1\u589E\u52A0\u94FE\u8DEF\u8DDF\u8E2A\u7279\u6027\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u672C\u7AE0\u8282\u7684\u793A\u4F8B\u4EE3\u7801\u4F4D\u4E8E\uFF1A ",(0,s.jsx)(n.a,{href:"https://github.com/gogf/gf/tree/master/example/trace/grpc_with_db",children:"https://github.com/gogf/gf/tree/master/example/trace/grpc_with_db"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u76EE\u5F55\u7ED3\u6784",children:"\u76EE\u5F55\u7ED3\u6784"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(400639).Z+"",width:"786",height:"1178"})}),"\n",(0,s.jsx)(n.h2,{id:"protobuf",children:"Protobuf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'syntax = "proto3";\n\npackage user;\n\noption go_package = "protobuf/user";\n\n// User service for tracing demo.\nservice User {\n  rpc Insert(InsertReq) returns (InsertRes) {}\n  rpc Query(QueryReq) returns (QueryRes) {}\n  rpc Delete(DeleteReq) returns (DeleteRes) {}\n}\n\nmessage InsertReq {\n  string Name = 1; // v: required#Please input user name.\n}\nmessage InsertRes {\n  int32 Id = 1;\n}\n\nmessage QueryReq {\n  int32 Id = 1; // v: min:1#User id is required for querying.\n}\nmessage QueryRes {\n  int32  Id = 1;\n  string Name = 2;\n}\n\nmessage DeleteReq {\n  int32 Id = 1; // v:min:1#User id is required for deleting.\n}\nmessage DeleteRes {}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"gf gen pb"})," \u547D\u4EE4\u7F16\u8BD1\u8BE5 ",(0,s.jsx)(n.code,{children:"proto"})," \u6587\u4EF6\uFF0C\u5C06\u4F1A\u751F\u6210\u5BF9\u5E94\u7684 ",(0,s.jsx)(n.code,{children:"grpc"})," \u63A5\u53E3\u6587\u4EF6\u548C\u6570\u636E\u7ED3\u6784\u6587\u4EF6\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"grpc-server",children:"GRPC Server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    _ "github.com/gogf/gf/contrib/drivers/mysql/v2"\n    _ "github.com/gogf/gf/contrib/nosql/redis/v2"\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/example/trace/grpc_with_db/protobuf/user"\n\n    "context"\n    "fmt"\n    "time"\n\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/contrib/trace/otlpgrpc/v2"\n    "github.com/gogf/gf/v2/database/gdb"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/os/gcache"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\ntype Controller struct {\n    user.UnimplementedUserServer\n}\n\nconst (\n    serviceName = "otlp-grpc-server"\n    endpoint    = "tracing-analysis-dc-bj.aliyuncs.com:8090"\n    traceToken  = "******_******"\n)\n\nfunc main() {\n    grpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n    var ctx = gctx.New()\n    shutdown, err := otlpgrpc.Init(serviceName, endpoint, traceToken)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    // Set ORM cache adapter with redis.\n    g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n\n    s := grpcx.Server.New()\n    user.RegisterUserServer(s.Server, &Controller{})\n    s.Run()\n}\n\n// Insert is a route handler for inserting user info into database.\nfunc (s *Controller) Insert(ctx context.Context, req *user.InsertReq) (res *user.InsertRes, err error) {\n    result, err := g.Model("user").Ctx(ctx).Insert(g.Map{\n        "name": req.Name,\n    })\n    if err != nil {\n        return nil, err\n    }\n    id, _ := result.LastInsertId()\n    res = &user.InsertRes{\n        Id: int32(id),\n    }\n    return\n}\n\n// Query is a route handler for querying user info. It firstly retrieves the info from redis,\n// if there\'s nothing in the redis, it then does db select.\nfunc (s *Controller) Query(ctx context.Context, req *user.QueryReq) (res *user.QueryRes, err error) {\n    err = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: 5 * time.Second,\n        Name:     s.userCacheKey(req.Id),\n        Force:    false,\n    }).WherePri(req.Id).Scan(&res)\n    if err != nil {\n        return nil, err\n    }\n    return\n}\n\n// Delete is a route handler for deleting specified user info.\nfunc (s *Controller) Delete(ctx context.Context, req *user.DeleteReq) (res *user.DeleteRes, err error) {\n    err = g.Model("user").Ctx(ctx).Cache(gdb.CacheOption{\n        Duration: -1,\n        Name:     s.userCacheKey(req.Id),\n        Force:    false,\n    }).WherePri(req.Id).Scan(&res)\n    return\n}\n\nfunc (s *Controller) userCacheKey(id int32) string {\n    return fmt.Sprintf(`userInfo:%d`, id)\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u670D\u52A1\u7AEF\u4EE3\u7801\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uFF0C\u670D\u52A1\u7AEF\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"jaeger.Init"})," \u65B9\u6CD5\u521D\u59CB\u5316 ",(0,s.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"2\u3001\u53EF\u4EE5\u770B\u5230\uFF0C\u4E1A\u52A1\u903B\u8F91\u548C\u4E4B\u524DHTTP\u793A\u4F8B\u9879\u76EE\u5B8C\u5168\u4E00\u81F4\uFF0C\u53EA\u662F\u63A5\u5165\u5C42\u4FEE\u6539\u4E3A\u4E86GRPC\u534F\u8BAE\u3002"}),"\n",(0,s.jsx)(n.p,{children:"3\u3001\u6211\u4EEC\u4ECD\u7136\u901A\u8FC7\u7F13\u5B58\u9002\u914D\u5668\u7684\u65B9\u5F0F\u6CE8\u5165Redis\u7F13\u5B58\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"g.DB().GetCache().SetAdapter(gcache.NewAdapterRedis(g.Redis()))\n"})}),"\n",(0,s.jsxs)(n.p,{children:["5\u3001\u8FD9\u91CC\u4E5F\u662F\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"Cache"})," \u65B9\u6CD5\u542F\u7528 ",(0,s.jsx)(n.code,{children:"ORM"})," \u7684\u7F13\u5B58\u7279\u6027\uFF0C\u4E4B\u524D\u5DF2\u7ECF\u505A\u8FC7\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8D58\u8FF0\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"grpc-client",children:"GRPC Client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "github.com/gogf/gf/contrib/registry/etcd/v2"\n    "github.com/gogf/gf/contrib/rpc/grpcx/v2"\n    "github.com/gogf/gf/contrib/trace/otlpgrpc/v2"\n    "github.com/gogf/gf/example/trace/grpc_with_db/protobuf/user"\n    "github.com/gogf/gf/v2/frame/g"\n    "github.com/gogf/gf/v2/net/gtrace"\n    "github.com/gogf/gf/v2/os/gctx"\n)\n\nconst (\n     serviceName = "otlp-grpc-client"\n    endpoint    = "tracing-analysis-dc-bj.aliyuncs.com:8090"\n    traceToken  = "******_******"\n)\n\nfunc main() {\n    grpcx.Resolver.Register(etcd.New("127.0.0.1:2379"))\n\n    var ctx = gctx.New()\n    shutdown, err := otlpgrpc.Init(serviceName, endpoint, traceToken)\n    if err != nil {\n        g.Log().Fatal(ctx, err)\n    }\n    defer shutdown()\n\n    StartRequests()\n}\n\nfunc StartRequests() {\n    ctx, span := gtrace.NewSpan(gctx.New(), "StartRequests")\n    defer span.End()\n\n    client := user.NewUserClient(grpcx.Client.MustNewGrpcClientConn("demo"))\n\n    // Baggage.\n    ctx = gtrace.SetBaggageValue(ctx, "uid", 100)\n\n    // Insert.\n    insertRes, err := client.Insert(ctx, &user.InsertReq{\n        Name: "john",\n    })\n    if err != nil {\n        g.Log().Fatalf(ctx, `%+v`, err)\n    }\n    g.Log().Info(ctx, "insert id:", insertRes.Id)\n\n    // Query.\n    queryRes, err := client.Query(ctx, &user.QueryReq{\n        Id: insertRes.Id,\n    })\n    if err != nil {\n        g.Log().Errorf(ctx, `%+v`, err)\n        return\n    }\n    g.Log().Info(ctx, "query result:", queryRes)\n\n    // Delete.\n    _, err = client.Delete(ctx, &user.DeleteReq{\n        Id: insertRes.Id,\n    })\n    if err != nil {\n        g.Log().Errorf(ctx, `%+v`, err)\n        return\n    }\n    g.Log().Info(ctx, "delete id:", insertRes.Id)\n\n    // Delete with error.\n    _, err = client.Delete(ctx, &user.DeleteReq{\n        Id: -1,\n    })\n    if err != nil {\n        g.Log().Errorf(ctx, `%+v`, err)\n        return\n    }\n    g.Log().Info(ctx, "delete id:", -1)\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5BA2\u6237\u7AEF\u4EE3\u7801\u7B80\u8981\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.p,{children:["1\u3001\u9996\u5148\uFF0C\u5BA2\u6237\u7AEF\u4E5F\u662F\u9700\u8981\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"jaeger.Init"})," \u65B9\u6CD5\u521D\u59CB\u5316 ",(0,s.jsx)(n.code,{children:"Jaeger"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["2\u3001\u5BA2\u6237\u7AEF\u975E\u5E38\u7B80\u5355\uFF0C\u5185\u90E8\u521D\u59CB\u5316\u4EE5\u53CA\u9ED8\u8BA4\u62E6\u622A\u5668\u7684\u8BBE\u7F6E\u5DF2\u7ECF\u7531 ",(0,s.jsx)(n.code,{children:"Katyusha"})," \u6846\u67B6\u5C01\u88C5\u597D\u4E86\uFF0C\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u5FC3\u4E1A\u52A1\u903B\u8F91\u5B9E\u73B0\u5373\u53EF\uFF0C"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6548\u679C\u67E5\u770B",children:"\u6548\u679C\u67E5\u770B"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u542F\u52A8\u670D\u52A1\u7AEF\uFF1A"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(546007).Z+"",width:"2460",height:"332"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u542F\u52A8\u5BA2\u6237\u7AEF\uFF1A"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(765837).Z+"",width:"2606",height:"958"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD9\u91CC\u5BA2\u6237\u7AEF\u7684\u6267\u884C\u6700\u540E\u62A5\u4E86\u4E00\u4E2A\u9519\u8BEF\uFF0C\u90A3\u662F\u6211\u4EEC ",(0,s.jsx)(n.strong,{children:"\u6545\u610F\u4E3A\u4E4B"}),"\uFF0C\u76EE\u7684\u662F\u6F14\u793A ",(0,s.jsx)(n.code,{children:"GRPC"})," \u62A5\u9519\u65F6\u7684\u94FE\u8DEF\u4FE1\u606F\u5C55\u793A\u3002\u6211\u4EEC\u6253\u5F00 ",(0,s.jsx)(n.code,{children:"jaeger"})," \u67E5\u770B\u4E00\u4E0B\u94FE\u8DEF\u8DDF\u8E2A\u4FE1\u606F\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(518054).Z+"",width:"1914",height:"855"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53EF\u4EE5\u770B\u5230\u672C\u6B21\u8BF7\u6C42\u6D89\u53CA\u5230\u4E24\u4E2A\u670D\u52A1\uFF1A ",(0,s.jsx)(n.code,{children:"tracing-grpc-client"})," \u548C ",(0,s.jsx)(n.code,{children:"tracing-grpc-server"}),"\uFF0C\u5373\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u3002\u6574\u4E2A\u8BF7\u6C42\u94FE\u8DEF\u6D89\u53CA\u5230 ",(0,s.jsx)(n.code,{children:"17"})," \u4E2A ",(0,s.jsx)(n.code,{children:"span"}),"\uFF0C\u5BA2\u6237\u7AEF ",(0,s.jsx)(n.code,{children:"5"})," \u4E2A ",(0,s.jsx)(n.code,{children:"span"}),"\uFF0C\u670D\u52A1\u7AEF ",(0,s.jsx)(n.code,{children:"12"})," \u4E2A ",(0,s.jsx)(n.code,{children:"span"}),"\uFF0C\u5E76\u4E14\u4EA7\u751F\u4E86 ",(0,s.jsx)(n.code,{children:"2"})," \u4E2A\u9519\u8BEF\u3002\u6211\u4EEC\u70B9\u51FB\u67E5\u770B\u8BE6\u60C5\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(963339).Z+"",width:"1914",height:"744"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u70B9\u51FB\u67E5\u770B\u4E00\u4E0B\u6700\u540E\u63A5\u53E3\u8C03\u7528\u9519\u8BEF\u7684 ",(0,s.jsx)(n.code,{children:"span"})," \u60C5\u51B5\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(929134).Z+"",width:"1075",height:"784"})}),"\n",(0,s.jsxs)(n.p,{children:["\u770B\u8D77\u6765\u50CF\u4E2A\u53C2\u6570\u6821\u9A8C\u9519\u8BEF\uFF0C\u70B9\u51FB\u67E5\u770B ",(0,s.jsx)(n.code,{children:"Events/Logs"})," \u4E2D\u7684\u8BF7\u6C42\u53C2\u6570\uFF1A"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(190201).Z+"",width:"1295",height:"767"})}),"\n",(0,s.jsxs)(n.p,{children:["\u67E5\u770B ",(0,s.jsx)(n.code,{children:"Process"})," \u4E2D\u7684 ",(0,s.jsx)(n.code,{children:"Log"})," \u4FE1\u606F\u53EF\u4EE5\u770B\u5230\uFF0C\u662F\u7531\u4E8E\u4F20\u9012\u7684\u53C2\u6570\u4E3A ",(0,s.jsx)(n.code,{children:"-1"}),"\uFF0C\u4E0D\u6EE1\u8DB3\u6821\u9A8C\u89C4\u5219\uFF0C\u56E0\u6B64\u5728\u6570\u636E\u6821\u9A8C\u7684\u65F6\u5019\u62A5\u9519\u8FD4\u56DE\u4E86\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"grpc-client-1",children:"GRPC Client"}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4E8E ",(0,s.jsx)(n.code,{children:"orm"}),"\u3001 ",(0,s.jsx)(n.code,{children:"redis"}),"\u3001 ",(0,s.jsx)(n.code,{children:"logging"})," \u7EC4\u4EF6\u5728\u4E4B\u524D\u7684\u7AE0\u8282\u4E2D\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u94FE\u8DEF\u4FE1\u606F\uFF0C\u56E0\u6B64\u6211\u4EEC\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECD ",(0,s.jsx)(n.code,{children:"GRPC Client&Server"})," \u7684\u94FE\u8DEF\u4FE1\u606F\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(295598).Z+"",width:"1125",height:"785"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Attribute/Tag"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"net.peer.ip"})}),(0,s.jsx)(n.td,{children:"\u8BF7\u6C42\u7684\u76EE\u6807IP\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"net.peer.port"})}),(0,s.jsx)(n.td,{children:"\u8BF7\u6C42\u7684\u76EE\u6807\u7AEF\u53E3\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rpc.grpc.status_code"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"GRPC"})," \u7684\u5185\u90E8\u72B6\u6001\u7801\uFF0C ",(0,s.jsx)(n.code,{children:"0"})," \u8868\u793A\u6210\u529F\uFF0C ",(0,s.jsx)(n.code,{children:"\u975E0"})," \u8868\u793A\u5931\u8D25\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rpc.service"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"RPC"})," \u7684\u670D\u52A1\u540D\u79F0\uFF0C\u6CE8\u610F\u8FD9\u91CC\u662F ",(0,s.jsx)(n.code,{children:"RPC"})," \u800C\u4E0D\u662F ",(0,s.jsx)(n.code,{children:"GRPC"}),"\uFF0C\u56E0\u4E3A\u8FD9\u91CC\u662F\u901A\u7528\u5B9A\u4E49\uFF0C\u5BA2\u6237\u7AEF\u652F\u6301\u591A\u79CD ",(0,s.jsx)(n.code,{children:"RPC"})," \u901A\u4FE1\u534F\u8BAE\uFF0C ",(0,s.jsx)(n.code,{children:"GRPC"})," \u53EA\u662F\u5176\u4E2D\u4E00\u79CD\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rpc.method"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"RPC"})," \u7684\u65B9\u6CD5\u540D\u79F0\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"rpc.system"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"RPC"})," \u534F\u8BAE\u7C7B\u578B\uFF0C\u5982\uFF1A ",(0,s.jsx)(n.code,{children:"grpc"}),", ",(0,s.jsx)(n.code,{children:"thrift"})," \u7B49\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"eventslogs",children:"Events/Logs"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(496189).Z+"",width:"1279",height:"782"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Event/Log"}),(0,s.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"grpc.metadata.outgoing"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"GRPC"})," \u5BA2\u6237\u7AEF\u8BF7\u6C42\u63D0\u4EA4\u7684 ",(0,s.jsx)(n.code,{children:"Metadata"})," \u4FE1\u606F\uFF0C\u53EF\u80FD\u4F1A\u6BD4\u8F83\u5927\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"grpc.request.baggage"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"GRPC"})," \u5BA2\u6237\u7AEF\u8BF7\u6C42\u63D0\u4EA4\u7684 ",(0,s.jsx)(n.code,{children:"Baggage"})," \u4FE1\u606F\uFF0C\u7528\u4E8E\u670D\u52A1\u95F4\u94FE\u8DEF\u4FE1\u606F\u4F20\u9012\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"grpc.request.message"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"GRPC"})," \u5BA2\u6237\u7AEF\u8BF7\u6C42\u63D0\u4EA4\u7684 ",(0,s.jsx)(n.code,{children:"Message"})," \u6570\u636E\uFF0C\u53EF\u80FD\u4F1A\u6BD4\u8F83\u5927\uFF0C\u6700\u5927\u53EA\u8BB0\u5F55 ",(0,s.jsx)(n.code,{children:"512KB"}),"\uFF0C\u5982\u679C\u8D85\u8FC7\u8BE5\u5927\u5C0F\u5219\u5FFD\u7565\u3002\u4EC5\u5BF9 ",(0,s.jsx)(n.code,{children:"Unary"})," \u8BF7\u6C42\u7C7B\u578B\u6709\u6548\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"grpc.response.message"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"GRPC"})," \u5BA2\u6237\u7AEF\u8BF7\u6C42\u63A5\u6536\u8FD4\u56DE\u7684\u7684 ",(0,s.jsx)(n.code,{children:"Message"})," \u4FE1\u606F\uFF0C\u53EF\u80FD\u4F1A\u6BD4\u8F83\u5927\u3002\u4EC5\u5BF9 ",(0,s.jsx)(n.code,{children:"Unary"})," \u8BF7\u6C42\u7C7B\u578B\u6709\u6548\u3002"]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"grpc-server-1",children:"GRPC Server"}),"\n",(0,s.jsx)(n.h4,{id:"attributes-1",children:"Attributes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(790394).Z+"",width:"1080",height:"778"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GRPC Server"})," \u7AEF\u7684 ",(0,s.jsx)(n.code,{children:"Attributes"})," \u542B\u4E49\u540C ",(0,s.jsx)(n.code,{children:"GRPC Client"}),"\uFF0C\u5728\u540C\u4E00\u8BF7\u6C42\u4E2D\uFF0C\u6253\u5370\u7684\u6570\u636E\u57FA\u672C\u4E00\u81F4\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(886728).Z+"",width:"1277",height:"773"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"GRPC Server"})," \u7AEF\u7684 ",(0,s.jsx)(n.code,{children:"Events"})," \u4E0E ",(0,s.jsx)(n.code,{children:"GRPC Client"})," \u4E0D\u540C\u7684\u662F\uFF0C\u5728\u540C\u4E00\u8BF7\u6C42\u4E2D\uFF0C\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684 ",(0,s.jsx)(n.code,{children:"metadata"})," \u4E3A ",(0,s.jsx)(n.code,{children:"grpc.metadata.incoming"}),"\uFF0C\u5176\u4ED6\u540C ",(0,s.jsx)(n.code,{children:"GRPC Client"}),"\u3002"]})]})}function g(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},295598:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/273442cb521050b63863e94ac9334d68-4c3f28e0dfaeaf50358dae8777b037e3.png"},546007:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/3470e30ff88d5fdafcaaa175ed5d40a6-33622e5880bb89478194538ef8da3a98.png"},765837:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/3730fb2264d7e19a4990cdf8470c3998-97bdb6eacc37e73fd29679c606c39d33.png"},496189:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/3ee7778da75473938eb5acd4459304a5-b98e306c04a82995c39d0bdddb329ff1.png"},963339:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/4ebecd20a7894a222dfacffe33ccf262-7bbb6da2f414799be534866f9905c2ec.png"},886728:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/88e292828c1785d7e6bd1ba5af191414-22f82e3f5b019f8552a7006311b0dc90.png"},518054:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/933c5a2bda5208eaf0b92231923a8334-0669d745ca35550a4d569052dad20229.png"},190201:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/a9c5cdcd7e86c22f926fd20a141f3d68-ca14b58ed821a3be254208126eeb64bb.png"},790394:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/b6a1d35aebb050058c9305cfb49a4bff-05ed17d69d6196e4e57a1c553a0ed93a.png"},400639:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/e9fe7410038348854e83de6cb3e35e32-2ea6e8efc1c974ac5ce68f26b697c95a.png"},929134:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/f0e9b3892dbbb628757686a311e8bbf0-94fc8e15f0d06a9f6052f224b3ad1460.png"},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},c=t.createContext(s);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);