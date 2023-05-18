
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defineUserConfig, defaultTheme } from 'vuepress'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'

import { getDirname, path } from '@vuepress/utils'
// @vuepress/back-to-top
import navbar from './config/navbar'
import sidebar from './config/sidebar'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'zh-CN',
  title: '组件库',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: '组件库网页' }],
    ['meta', { name: 'description', content: '整理开发过程中的' }],
    ['meta', { name: 'robots', content: 'all' }],
    // ['link', { rel: 'stylesheet', href: '/css/index.css' }], // 修改默认样式
    // ["link", { rel: "stylesheet", href: "/css/style.css" }],  //自定义样式,也可以使用styles/index.styl来设置
    // ["script", { charset: "utf-8", src: "/js/main.js" }],   //自定义js文件
  ],
  description: '基于vue3 + element plus的UI组件库',
  theme: defaultTheme({
    // 导航栏配置
    navbar,
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar,
    // 侧边栏数组
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
    toggleSidebar: '切换侧边栏',
  }),
  plugins: [
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
      componentsDir: path.resolve(__dirname, '../../packages/components'), // 需要自动引入的组件所在的文件夹
      componentsPatterns: ['**/*.vue'], // 组件格式为.vue结尾的文件
      // 注册组件的名称，这里因人而异，我在注册组件时，都统一加了`base`前缀，
      getComponentName: (filename) => {
        let compName = filename.split('/')[0].toLowerCase()
        compName = compName.charAt(0).toUpperCase() + compName.slice(1)
        return `hh${compName}`
      }
    }),
    // 源码查看
    demoblockPlugin({
      customClass: 'demoblock-custom',
      // theme: 'github-light',
      cssPreprocessor: 'less',
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        }
      ]
    })
  ]
})