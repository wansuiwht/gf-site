import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'GoFrame',
  tagline: 'GoFrame',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://goframe.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/hailaz/gfdoc-md/blob/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // 搜索
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
        // language of your documentation, see next section
        language: 'zh',
      },
    ],
    // 快速开始
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'comeon',
        path: 'comeon',
        routeBasePath: 'comeon',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 常见问题
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 版本发布
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 技术交流
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'communication',
        path: 'communication',
        routeBasePath: 'communication',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
    // 支持我们
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'supportus',
        path: 'supportus',
        routeBasePath: 'supportus',
        sidebarPath: './sidebars.ts',
        // ... other options
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GoFrame',
      logo: {
        alt: 'GoFrame Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "docsPluginId": "comeon",
          "position": "left",
          "label": "快速开始"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "使用文档"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "docsPluginId": "faq",
          "position": "left",
          "label": "常见问题"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "docsPluginId": "changelog",
          "position": "left",
          "label": "版本发布"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "docsPluginId": "communication",
          "position": "right",
          "label": "技术交流"
        },
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "docsPluginId": "supportus",
          "position": "right",
          "label": "支持我们"
        },
        {
          "href": "https://github.com/gogf/gf/issues",
          "label": "问题反馈",
          "position": "right"
        },
        {
          "href": "https://github.com/gogf/gf",
          "label": "GitHub",
          "position": "right"
        }

        // {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    // toc目录层级显示设置
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     // {
    //     //   title: 'Docs',
    //     //   items: [
    //     //     {
    //     //       label: 'Doc',
    //     //       to: '/docs',
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   // copyright: `Copyright ©${new Date().getFullYear()}`,
    // },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'go',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
