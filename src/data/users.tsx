
import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'adminui'
  | 'i18n'
  | 'micro'
  | 'cloudnative'

const Users: User[] = [
  {
    title: 'GFast',
    description: '基于GoFrame框架的后台管理系统。',
    preview: require('./showcase/gfast.png'),
    website: 'https://www.g-fast.cn/',
    source: 'https://github.com/tiger1103/gfast',
    tags: ['opensource','favorite','adminui'],
  },
  {
    title: 'Letga',
    description: '基于 GoFrame 和 AntDesign 的中后台管理系统。Letga 集成了通用的中后台基础功能组件，是一款规范化、易扩展、体验佳的企业级开源系统。',
    preview: require('./showcase/letga.png'),
    website: 'https://github.com/lgcgo/letga-server',
    source: 'https://github.com/lgcgo/letga-server',
    tags: ['opensource','adminui'],
  },
  {
    title: 'DMicro',
    description: 'DMicro是一个高效、可扩展且简单易用的微服务框架。包含drpc,dserver等组件。',
    preview: require('./showcase/dmicro.png'),
    website: 'https://dmicro.vprix.com/#/',
    source: 'https://github.com/osgochina/dmicro',
    tags: ['opensource','micro'],
  },
  {
    title: 'HotGo',
    description: 'HotGo是一个基于 vue 和 goframe2.0 开发的全栈前后端分离的开发基础平台和移动应用平台，集成jwt鉴权，动态路由，动态菜单，casbin鉴权，消息队列，定时任务等功能，提供多种常用场景文件，让您把更多时间专注在业务开发上。 ',
    preview: require('./showcase/hotgo.png'),
    website: 'https://hotgo.facms.cn/admin',
    source: 'https://github.com/bufanyun/hotgo',
    tags: ['opensource','favorite','adminui'],
  },
  {
    title: 'Bifrost',
    description: 'Bifrost ---- 面向生产环境的 MySQL,MariaDB,kafka 同步到Redis,MongoDB,ClickHouse,StarRocks,Doris,Kafka等服务的异构中间件。',
    preview: require('./showcase/bifrost.png'),
    website: 'https://www.xbifrost.com/',
    source: 'https://github.com/brokercap/Bifrost',
    tags: ['opensource'],
  },
  {
    title: 'DNSLog-GO',
    description: 'DNSLog-GO 是一款golang编写的监控 DNS 解析记录的工具，自带WEB界面。',
    preview: require('./showcase/dnslog-go.png'),
    website: 'https://github.com/lanyi1998/DNSlog-GO',
    source: 'https://github.com/lanyi1998/DNSlog-GO',
    tags: ['opensource'],
  },
  {
    title: 'Nemo',
    description: 'Nemo是用来进行自动化信息收集的一个简单平台，通过集成常用的信息收集工具和技术，实现对内网及互联网资产信息的自动收集，提高隐患排查和渗透测试的工作效率。',
    preview: require('./showcase/nemo.png'),
    website: 'https://github.com/hanc00l/nemo_go',
    source: 'https://github.com/hanc00l/nemo_go',
    tags: ['opensource','adminui'],
  },
  {
    title: 'OpenSCRM',
    description: 'OpenSCRM是一套基于Go和React的高质量企业微信私域流量管理系统 。遵守Apache2.0协议，全网唯一免费商用。企业微信、私域流量、SCRM。',
    preview: require('./showcase/openscrm.png'),
    website: 'https://github.com/openscrm/api-server',
    source: 'https://github.com/openscrm/api-server',
    tags: ['opensource','adminui'],
  },
  {
    title: 'Magma',
    description: 'Platform for building access networks and modular network services.',
    preview: require('./showcase/magma.png'),
    website: 'https://magmacore.org/',
    source: 'https://github.com/magma/magma',
    tags: ['opensource','adminui'],
  },
  {
    title: 'EventMesh',
    description: 'EventMesh is a new generation serverless event middleware for building distributed event-driven applications.',
    preview: require('./showcase/eventmesh.png'),
    website: 'https://eventmesh.apache.org/',
    source: 'https://github.com/apache/eventmesh',
    tags: ['opensource','cloudnative'],
  },
  {
    title: 'Hybridnet',
    description: 'Make underlay and overlay network can coexist, communicate, even be transformed purposefully.',
    preview: require('./showcase/hybridnet.png'),
    website: 'https://github.com/alibaba/hybridnet',
    source: 'https://github.com/alibaba/hybridnet',
    tags: ['opensource','cloudnative'],
  },
  {
    title: 'EasyGoAdmin',
    description: '是一款基于Golang、GoFrame、Vue、ElementUI、MySQL等技术栈开发平台框架，拥有完善的(RBAC)权限架构和基础核心管理模块，为了缩短研发周期，系统框架集成了代码生成器，内置平台自定义研发的模板引擎，可以一键CRUD生成整个模块的全部代码，本框架为一站式系统框架开发平台，可以帮助开发者提升开发效率、降低研发成本，同时便于后期的系统维护升级。',
    preview: require('./showcase/easy-go-admin.png'),
    website: 'https://www.easygoadmin.vip/',
    source: 'https://gitee.com/easygoadmin/EasyGoAdmin_GoFrame_EleVue',
    tags: ['opensource','favorite','adminui'],
  },
];

export type User = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: translate({message: 'Favorite'}),
    description: translate({
      message:
        '我们喜欢并推荐给大家的案例，感兴趣可以瞧瞧。',
      id: 'showcase.tag.favorite.description',
    }),
    color: '#e9669e',
  },

  opensource: {
    label: translate({message: 'OpenSource'}),
    description: translate({
      message: '开源项目案例，通常是开源站点或组件，可供大家参考的源码案例',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: '商业产品案例，该案例可能没有源码参考。',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
  adminui: {
    label: translate({message: 'AdminUI'}),
    description: translate({
      message:
        '带有管理后台的使用案例。',
      id: 'showcase.tag.admin.description',
    }),
    color: '#14cfc3',
  },
  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        '该案例支持不同语言的国际化。',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#5319E7',
  },
  micro: {
    label: translate({message: 'MicroService'}),
    description: translate({
      message:
        '该案例支持微服务开发架构。',
      id: 'showcase.tag.micro.description',
    }),
    color: '#006B75',
  },
  cloudnative: {
    label: translate({message: 'CloudNative'}),
    description: translate({
      message:
        '该案例支持云原生开发架构。',
      id: 'showcase.tag.cloudnative.description',
    }),
    color: '#C5DEF5',
  },
};

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
