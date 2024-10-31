---
title: 'Golang框架选型比较: goframe, beego, iris和gin'
sidebar_position: 3
---

![](/markdown/be752ee42eff912b8cf7418d39084454.jpeg)

Solve problems? Bring problems?

由于工作需要，这些年来也接触了不少的开发框架，Golang的开发框架比较多，不过基本都是Web"框架"为主。这里稍微打了个引号，因为大部分"框架"从设计和功能定位上来讲，充其量都只能算是一个组件，需要项目使用的话得自己四处再去找找其他的组件，或者自己造轮子。如果用于Web开发，这些"框架"的Web开发能力均已完备，无太大差别，且均是自标准库net/http.Server的二次封装。由于框架众多，这里笔者只选择了几个曾做过技术选型评估、较为熟悉，且目前比较流行和典型的Golang"框架"，从适用于业务项目开发框架的角度，做一个简单的横向比较，以便大家在项目框架选型时做个参考。

## 评估指标

| 指标 | 说明 |
| --- | --- |
| **基本介绍** | 来源各自官网。 |
| **模块化设计** | 是否支持模块化插拔设计、模块之间低耦合设计，是否可以独立使用其中某部分组件。 |
| **模块完善度** | 框架提供的功能模块是否丰富。模块能否能覆盖日常普遍的开发需求。 |
| **使用易用性** | 易用性不仅仅是值框架好不好用，更多是团队能否在低成本下快速接入，长期来看能否低成本维护。 |
| **文档完善性** | 参考官网提供的介绍资料，包括但不限于：文档、视频、示例、案例资料。同时，本地中文文档支持也是参考项。 |
| **工程化完备** | 是否能够快速接入项目开发，是否提供项目接入规范、设计模式、开发工具链，文档是否完善、源码是否易读、是否便于长期维护。 |
| **开发模式** | 框架适用的开发模式，或者官方推荐的开发模式。 |
| **工程规范** | 项目接入时的开发规范，如目录规范、设计规范、编码规范、命名规范等。 |
| **社区活跃** | 官方与社区沟通是否便捷，问题是否能够快速解答，BUG是否能够快速响应处理。 |
| **开发工具链** | 项目开发时使用到的CLI开发工具，如初始化项目、交叉编译、代码生成、swagger、热编译能力等等。 |
| **Web: 性能测试** | 来源第三方评测 [https://github.com/the-benchmarker/web-frameworks](https://github.com/the-benchmarker/web-frameworks) 。 |
| **Web: 路由冲突处理** | 存在路由注册冲突时有无良好的解决方案，在业务项目开发中比较常见。 |
| **Web: 域名支持** | Web路由是否支持域名绑定，甚至多域名的绑定。 |
| **Web: 文件服务** | Web服务是否提供静态资源的访问能力。 |
| **Web: 优雅重启/关闭** | Web服务在重启时不会影响请求执行，关闭时会等待正在执行的请求处理完，新请求不再接入。 |
| **ORM** | 框架是否自带ORM组件，ORM组件是业务项目的核心组件。无论是自研还是通过第三方组件引入。 |
| **Session** | 框架是否提供会话管理组件，无论是通用型Session组件，还是仅针对于Web服务的Session组件。 |
| **I18N支持** | 国际化组件支持（常用但非核心组件）。 |
| **配置管理** | 配置管理也是框架需要完备的核心组件能力。 |
| **日志组件** | 日志组件也是框架需要完备的核心组件能力。 |
| **数据校验** | 数据校验也是框架需要完备的核心组件能力。 |
| **缓存管理** | 缓存管理也是框架需要完备的核心组件能力。无论是内存还是Redis，无论是自研还是通过第三方组件引入。 |
| **资源打包** | 支持将依赖的文件资源例如静态资源、配置文件等固定文件编译到可执行文件中。框架组件自动支持资源检索。 |
| **链路跟踪** | 框架是否具备分布式链路跟踪能力，分布式跟踪在微服务架构中是必不可少的能力。 |
| **测试框架** | 框架是否支持单元测试接入，提供单元测试接入规范。无论是使用标准库还是第三方测试框架。 |
| **突出优点** | 比较明显的几点优点。 |
| **突出缺点** | 比较明显的几点缺点。 |

## 横向比较

- 以下部分对比参数涉及评分的部分，满分总共按照10分为标准。
- 如果标记为"-"的部分，表示不支持或者需要引入第三方插件支持。
- 以下特性如果官网提供文档则直接提供文档地址，找不到文档但是笔者知道有就会简单标注。
- 各个"框架"功能特性实现不同，在文档、功能、易用性上存在较大差异，各位朋友可自行查阅链接。

|  | GoFrame | Beego | Iris | Gin |
| --- | --- | --- | --- | --- |
| **比较版本** | v1.15.2 | v1.12.3 | v12.0.2 | v1.6.3 |
| **项目类型** | 开源（国内） | 开源（国内） | 开源（海外） | 开源（海外） |
| **开源协议** | MIT | Apache-2 | BSD-3-Clause | MIT |
| **框架类型** | 模块化框架 | Web框架 | Web"框架" | Web"框架" |
| **基本介绍** | 工程完备、简单易用，模块化、高质量、高性能、企业级开发框架。 | 最简单易用的企业级Go应用开发框架。 | 目前发展最快的Go Web框架。提供完整的MVC功能并且面向未来。 | 一个Go语言写的HTTP Web框架。它提供了Martini风格的API并有更好的性能。 |
| **项目地址** | [github.com/gogf/gf](https://github.com/gogf/gf) | [github.com/beego/beego](https://github.com/beego/beego) | [github.com/kataras/iris](https://github.com/kataras/iris) | [github.com/gin-gonic/gin](https://github.com/gin-gonic/gin) |
| **官网地址** | [goframe.org](https://goframe.org) | [beego.me](https://beego.me/) | [iris-go.com](https://iris-go.com/) | [gin-gonic.com](https://gin-gonic.com/) |
| **模块化设计** | 是 | - | - | - |
| **模块完善度** | 10 | 6 | 4 | 2 |
| **使用易用性** | 9 | 9 | 9 | 10 |
| **文档完善度** | 10 | 8 | 6 | 4 |
| **工程化完备** | 10 | 8 | 5 | 1 |
| **社区活跃** | 9 | 10 | 9 | 10 |
| **开发模式** | [模块引入](https://goframe.org/pages/viewpage.action?pageId=1114411)、 [三层架构](https://goframe.org//pages/viewpage.action?pageId=3672442)、MVC | [MVC](https://beego.me/docs/mvc/) | [MVC](https://www.iris-go.com/docs/#/?id=quick-start) | - |
| **工程规范** | [分层设计](https://goframe.org/pages/viewpage.action?pageId=3672442)、 [对象设计](https://goframe.org/pages/viewpage.action?pageId=3672526) | [项目结构](https://beego.me/docs/intro/#beego-%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84) | - | - |
| **开发工具链** | [gf工具链](https://goframe.org/pages/viewpage.action?pageId=1114260) | [bee工具链](https://beego.me/docs/install/bee.md) | - | - |
| **Web: 性能测试** | 8 | 8 | 8 | 9 |
| **Web: HTTPS** | [HTTPS & TLS](https://goframe.org/pages/viewpage.action?pageId=1114278) | 支持 | [CustomHttpConfiguration](https://www.iris-go.com/docs/#/?id=custom-http-configuration) | 支持 |
| **Web: HTTP2** | - | - | 支持 | 支持 |
| **Web: WebSocket** | [WebSocket服务](https://goframe.org/pages/viewpage.action?pageId=1114298) | 有 | 有 | - |
| **Web: 分组路由** | [路由注册-分组路由](https://goframe.org/pages/viewpage.action?pageId=1114517) | [Namespace](https://beego.me/docs/mvc/controller/router.md#namespace) | [GroupingRoutes](https://www.iris-go.com/docs/#/?id=grouping-routes) | 有 |
| **Web: 路由冲突处理** | 有 | - | 有 | - |
| **Web: 域名支持** | [域名绑定](https://goframe.org/pages/viewpage.action?pageId=1114155#id-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-%E5%9F%9F%E5%90%8D%E7%BB%91%E5%AE%9A) | - | - | - |
| **Web: 文件服务** | [静态文件服务](https://goframe.org/pages/viewpage.action?pageId=1114172) | [静态文件处理](https://beego.me/docs/quickstart/static.md) | [ServingStaticFiles](https://www.iris-go.com/docs/#/?id=serving-static-files) | 有 |
| **Web: 多端口/实例** | [多端口监听](https://goframe.org/pages/viewpage.action?pageId=1114155#id-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-%E5%A4%9A%E7%AB%AF%E5%8F%A3%E7%9B%91%E5%90%AC)、 [多实例监听](https://goframe.org/pages/viewpage.action?pageId=1114155#id-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-%E5%A4%9A%E5%AE%9E%E4%BE%8B%E6%94%AF%E6%8C%81) | - | [RunMultipleServiceUsingIris](https://www.iris-go.com/docs/#/?id=run-multiple-service-using-iris) | - |
| **Web: 优雅重启/关闭** | [平滑重启特性](https://goframe.org/pages/viewpage.action?pageId=1114220) | [热升级](https://beego.me/docs/module/grace.md) | [GracefulShutdownOrRestart](https://www.iris-go.com/docs/#/?id=graceful-shutdown-or-restart) | [GracefulRestartOrStop](https://gin-gonic.com/docs/examples/graceful-restart-or-stop/) |
| **ORM** | [ORM文档](https://goframe.org/pages/viewpage.action?pageId=1114686) | [ORM文档](https://beego.me/docs/mvc/model/overview.md) | - | - |
| **Session** | [Session](https://goframe.org/display/gf/Session) | [Session](https://beego.me/docs/mvc/controller/session.md) | 有 | - |
| **I18N支持** | [I18N](https://goframe.org/pages/viewpage.action?pageId=1114191) | [I18N](https://beego.me/docs/module/i18n.md) | [Localization](https://www.iris-go.com/docs/#/?id=localization) | - |
| **模板引擎** | [模板引擎](https://goframe.org/pages/viewpage.action?pageId=1114680) | [View设计](https://beego.me/docs/mvc/view/tutorial.md) | [TemplateRendering](https://www.iris-go.com/docs/#/?id=template-rendering) | [HtmlRendering](https://gin-gonic.com/docs/examples/html-rendering/) |
| **配置管理** | [配置管理](https://goframe.org/pages/viewpage.action?pageId=1114668) | [参数配置](https://beego.me/docs/mvc/controller/config.md) | - | [CustomHttpConfig](https://gin-gonic.com/docs/examples/custom-http-config/) |
| **日志组件** | [日志组件](https://goframe.org/pages/viewpage.action?pageId=1114673) | [Logging](https://beego.me/docs/mvc/controller/logs.md) | - | - |
| **数据校验** | [数据校验](https://goframe.org/pages/viewpage.action?pageId=1114678) | [表单数据验证](https://beego.me/docs/mvc/controller/validation.md) | - | [CustomValidators](https://gin-gonic.com/docs/examples/custom-validators/) |
| **缓存管理** | [缓存管理](https://goframe.org/pages/viewpage.action?pageId=1114679) | [Cache](https://beego.me/docs/module/cache.md) | - | - |
| **资源打包** | [资源管理](https://goframe.org/pages/viewpage.action?pageId=1114671) | [bee工具bale命令](https://beego.me/docs/install/bee.md) | - | - |
| **链路跟踪** | [服务链路跟踪](https://goframe.org/pages/viewpage.action?pageId=3673684) | - | - | - |
| **测试框架** | [单元测试](https://goframe.org/pages/viewpage.action?pageId=1114153) | - | [Testing](https://www.iris-go.com/docs/#/?id=testing) | [Testing](https://gin-gonic.com/docs/testing/) |
| **突出优点** | goframe主要以工程化和企业级方向为主，特别是模块化设计和工程化设计思想非常棒。针对业务项目而言，提供了开发规范、项目规范、命名规范、设计模式、开发工具链、丰富的模块、高质量代码和文档，社区活跃。作者也是资深的PHP开发者，PHP转Go的小伙伴会倍感亲切。 | beego开源的比较早，最早的一款功能比较全面的Golang开发框架，一直在Golang领域有着比较大的影响力，作者谢大多年组织着国内影响力比较大GopherCN活动。beego有着比较丰富的开发模块、开箱即用，提供了基于MVC设计模式的项目结构、开发工具链，主要定位为Web开发，当然也可以用于非Web项目开发。 | iris主要侧重于Web开发，提供了Web开发的一系列功能组件，基于MVC开发模式。iris这一年发展比较快，从一个Web Server的组件，也慢慢朝着beego的设计方向努力。 | gin专注于轻量级的Web Server，比较简单，易于理解，路由和中间件设计不错，可以看做替代标准库net/http.Server的路由加强版web server。献给爱造轮子的朋友们。 |
| **突出缺点** | 开源时间较晚，推广过于佛系，目前主要面向国内用户，未推广海外。 | 起步较早，自谢大创业后，近几年发展较慢。非模块化设计，对第三方重量级模块依赖较多。 | 号称性能最强，结果平平。非模块化设计。最近两年开始朝beego方向发展，但整体框架能力还不完备，需要加油。 | 功能简单易用，既是优点，也是缺点。 |

## 经验分享

不同的需求场景，存在不同的选择。选择适合的工具，解决适合的问题。

开源不存在孰好孰坏之分，开源作者能够本着开源精神给大家分享技术成果用以学习和使用，这本身就是一件非常不易并且值得称道的事情。

最后，笔者在这里跟大家分享一下自己所在团队的情况，以及在 `Golang` 技术栈转型过程中所走的弯路，希望能在框架选型这一环节，能给大家作一定参考。

### 团队最初痛点

团队转型 `Golang` 技术栈的一些背景。主要几点：

1. 团队后端最初的主要技术栈为 `PHP`，由于业务发展需要，进行微服务改造。第一版微服务采用了 `PHP` + `JsonRpc` 的通信方式。
2. 随着项目增多，公司也组件了自己的 `DevOps` 团队，底层部署转向了 `Docker` + `Kubernetes` 容器架构，并且引入了 `Golang` 技术栈。
3. 由于一些痛点，通过一段时间对 `PHP` 和 `Golang` 的比较，团队决定快速转型 `Golang` 技术栈，主要痛点如下：
   1. `PHP` 项目在业务复杂后、项目中后期的开发和维护成本整体偏高。主要原因还是其过高的灵活性，非结构化的变量设计，参差不齐的开发人员素质。
   2. 上云容器化部署后， `PHP` 的 `DevOps` 效率太低。复杂的 `Composer` 版本管理，超大的 `Docker` 镜像大小，都影响着 `DevOps` 的效率。相比较而言， `Golang` 效率极其高效。
   3. `JsonRpc` 通信协议设计下，接口的扩展性和灵活性很高，但服务之间很难快速确定接口的输入与输出定义，只能根据文档和示例进行对接和维护。由于代码和文档分离，大部分场景下接口文档维护往往滞后于接口变化。随着服务的不断增加，非结构化的通信协议管理使得服务接口的开发和维护成本进一步提高。
   4. `JsonRpc` 的通信协议本质基于 `HTTP1.x` + `Json`，执行效率过低，算不上真正的微服务通信协议，很难对接上主流的服务治理框架。相比较基于 `HTTP2.x` 的 `gRPC` 协议有着成熟微服务开发框架和服务治理解决方案。
   5. 业务梳理的考量， `PHP` 到 `Golang` 技术栈的迁移，其实也是一次技术重构的契机，在技术重构的过程中也重新梳理业务系统设计，偿还技术债务。

### 进一步的痛点

`Golang` 确实足够简单，相比较其他的解释类开发语言，没有过多的语法糖和语言特性，因此团队上手很快，并快速完成了一部分业务系统的技术重构。但随之而来的是更加严重的痛点。主要几点：

1. **轮子过多：** `Golang` 实在太简单了，以至于我们的团队成员爆发了压抑许久的闷骚劲，充分发挥"造后不管"的造轮精神，开发/封装了许多大大小小的轮子。这些轮子均能满足最基本的功能，例如：日志、配置、缓存等等。但轮子并不是实现一个基础功能的半成品就了事，需要保证功能性、稳定性、扩展性和可维护性，要能结合更多生产实践验证，更需要能够长期维护、持续进行迭代改进。否则，就是一堆大小不一的成人玩具。造轮一时爽，维护火葬场。直到现在，我们还在为分散在 `100` 多个 `Golang` 项目中的数十个成人玩具做大统一的事情痛苦不已。当然，这个问题也跟组织架构和团队管理也有很大关系。
2. **不成体系：**
   1. 我们坚信一个 `package` 只做一件事情，并且特地使用 **单仓库包** 的形式进行包管理，相当于每个 `package` 都是独立维护的 `git` 仓库。其实 **单仓库包** 和 `package` 设计并不存在必要性，反而独立的单仓库包提高了组件和框架的维护成本。
   2. 这种单仓库包设计难以形成技术体系，在团队技术管理上，难以形成统一的技术框架。单仓包显得很孤立，而一个技术体系的建立除了需要制定规范和标准，更需要技术框架来准确落地。一个成体系的、统一的技术框架，至少涉及到数十个基础技术组件，不可能完全孤立设计。每一个 `package` 的基础功能实现都很简单，但是如何能够统一组织在一起却不是一件简单的事情，这需要团队的技术管理者需要有一定的技术底蕴、格局和前瞻性，而不是和普通开发者那样眼界只能局限于 `package` 本身。
   3. 这种孤立的单仓库包设计，对于业务项目的规范化约束不强，每一个组件都可以独立替换，也至于痛点1的问题越发严重（连日志组件都好几套，虽然都满足基本的日志规范设计）。最终，我们最初引以为傲的单仓库包设计，最终变成了一堆散沙。例如，就连需要增加标准化的链路跟踪功能，由于单仓库包过于散乱和不统一，使得推进改进成本极其高昂。
   4. 除了使得技术体系难以建立，技术规范难以准确落地之外，每个组件的易用性也设计得较差。举个简单例子，我们的日志组件、缓存组件、数据库组件、HTTP/gRPC Server组件都需要对接配置管理功能，单仓包需要保证低耦合设计，因此开发者在使用的时候需要先手动读取配置、并转换为目标配置对象、并注入到对应的组件初始化方法中，随后才能将该对象运用到业务逻辑中，若干个业务项目均是重复此步骤。其实 `goframe` 在这块的易用性设计就挺不错，每个包当然是独立设计的，在统一的技术框架体系下，再独立提供一个耦合的单例模块将常用的对象进行单例化封装，自动实现配置读取、配置对象转换、配置对象注入及组件对象初始化，开发者仅需要调用一个单例方法即可。而这个常用单例模块，成为了我们技术框架体系的一部分，极大地提高了业务项目的开发和维护效率。
3. **版本不一致：** 在业务项目不断增多之后，轮子版本不一致性也越来越明显。什么是版本不一致？举个例子。我们有个轮子叫做 `httpClient`，总共发布了 `10` 来个版本；我们总共有 `100` 多个 `Golang` 项目，几乎每个版本都在使用。我们提交了一个 `bug fix`，却难以让所有项目都能更新。对其他的轮子也是类似的情况，况且我们也有数十个各种轮子，被各个项目独立使用中。

经过反思总结，总结了以下几点：

1. 团队需要一个统一的技术框架，而不是东拼西凑的一堆单仓库包。
2. 我们只需要维护一个框架的版本，而不是维护数十个单仓库包的版本。
3. 框架的组件必须模块化、低耦合设计，保证内部组件也可以独立引用。
4. 核心组件严格禁止单仓库包设计，并且必须由框架统一维护。

### 最终的抉择

走过这么多弯路之后，我们决心建立一套成体系的 `Golang` 开发框架。除了要求团队能够快速学习，维护成本低，并且我们最主要的诉求，是核心组件不能是半成品，框架必须是上过大规模生产验证的，稳定和成熟的。随着，我们重新对行业中流行的技术框架做了技术评估，包括上面说的那些框架。原本的初衷是想将内部的各个轮子统一做一个成体系的框架，在开源项目中找一些有价值的参考。

后来找到了 `goframe`，仔细评估和学习了框架设计，发现框架设计思想和我们的经验总结如出一则！

这里不得不提一件尴尬的事情。其实最开始转 `Golang` 之前（2019年中旬）也做过一些调研，那时 `goframe` 版本还不高，并且我们负责评估的团队成员有一种先入为主的思想，看到模块和文档这么多，感觉应该挺复杂，性能应该不高，于是没怎么看就PASS。后来选择一些看起来简单的开源轮子自己做了些二次封装。

这次经过一段时间的仔细调研和源码学习，得出一个结论， `goframe` 框架的框架架构、模块化和工程化设计思想非常棒，执行效率很高，模块不仅丰富，而且质量之高，令人惊叹至极！相比较我们之前写的那些半成品轮子，简直就是小巫见大巫。 **团队踩了一年多的坑，才发现团队确实需要一个统一的技术框架而不是一堆不成体系的轮子，其实人家早已给了一条明光大道，并且一直在前面默默努力。**

经过团队内部的调研和讨论，我们决定使用 `goframe` 逐步重构我们的业务项目。由于 `goframe` 是模块化设计的，因此我们也可以对一些模块做必要的替换。重构过程比较顺利，基础技术框架的重构并不会对业务逻辑造成什么影响，反而通过 `goframe` 的工程化思想和很棒的开发工具链，在统一技术框架后，极大地提高了项目的开发和维护效率，使得团队可以专心于业务开发，部门也陆续有了更多的产出。目前我们已经有大部门业务项目专向了 `goframe`。平台每日流量千万级别。

最后，感谢开源作者们的默默贡献！我们也在努力推动团队秉着来源社区，回馈社区的思想，未来也会更多参与社区贡献。