import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname } from '@vuepress/utils'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import path from 'path'
import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: '组件库',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '组件库网页' }],
    ['meta', { name: 'description', content: '整理开发过程中的' }],
    ['meta', { name: 'robots', content: 'all' }],
  ],
  description: '基于vue3 + element plus的UI组件库',
  port: 3000,

  theme: defaultTheme({
    logo: '/logo.svg',

    // navbar
    navbar,
    // sidebar
    sidebar,

    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    // a11y
    openInNewWindow: '在新窗口打开',

    // toggleSidebar: '切换侧边栏',
    colorModeSwitch: false,
  }),
  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-active-header-links',
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      }, maxSuggestions: 5
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../../packages/components'),
      componentsPatterns: ['**/*.vue'], // 组件格式为.vue结尾的文件
      // 注册组件的名称，这里因人而异，我在注册组件时，都统一加了`base`前缀，
      getComponentName: (filename) => {
        let compName = filename.split('/')[0].toLowerCase()
        compName = compName.charAt(0).toUpperCase() + compName.slice(1)
        return `hh${compName}`
      }
    }),
    demoblockPlugin({
      customClass: 'demoblock-custom',
      // theme: 'github-light',
      cssPreprocessor: 'scss',
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        }
      ]
    })
  ]
})