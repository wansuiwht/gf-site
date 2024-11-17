
import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'admin'
  | 'i18n'

const Users: User[] = [
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource','favorite'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
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
    label: translate({message: 'Open-Source'}),
    description: translate({
      message: '开源项目案例，通常是开源站点或组件，可供大家参考的源码案例',
      id: 'showcase.tag.opensource.description',
    }),
    color: '#39ca30',
  },

  product: {
    label: translate({message: 'Product'}),
    description: translate({
      message: '商业产品案例，该案例可能没有源码参考',
      id: 'showcase.tag.product.description',
    }),
    color: '#dfd545',
  },
  admin: {
    label: translate({message: 'AdminUI'}),
    description: translate({
      message:
        '带有管理后台的使用案例',
      id: 'showcase.tag.personal.description',
    }),
    color: '#14cfc3',
  },
  i18n: {
    label: translate({message: 'I18n'}),
    description: translate({
      message:
        '该案例支持不同语言的国际化',
      id: 'showcase.tag.i18n.description',
    }),
    color: '#127f82',
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
