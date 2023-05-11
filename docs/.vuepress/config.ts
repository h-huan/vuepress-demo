/*
 * @Author: h-huan
 * @Date: 2023-05-11 14:03:47
 * @LastEditors: h-huan
 * @LastEditTime: 2023-05-11 17:45:43
 * @Description: 
 */

import { defineUserConfig, defaultTheme } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { demoblockPlugin } from 'vuepress-plugin-demoblock-plus'
import { getDirname, path } from '@vuepress/utils'
import navbar from './config/navbar'
import sidebar from './config/sidebar'


const __dirname = getDirname(import.meta.url)
console.log(__dirname, path);

export default defineUserConfig({
  lang: 'zh-CN',
  title: '组件库',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    // ['link', { rel: 'stylesheet', href: '/css/index.css' }], // 修改默认样式
  ],
  description: '基于vue3 + element plus的UI组件库',
  theme: defaultTheme({
    // 导航栏配置
    navbar,
    // sidebar
    sidebar,
    // 侧边栏数组
    // editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
  plugins: [
    // 自动注册组件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../../src/components'), // 需要自动引入的组件所在的文件夹
      componentsPatterns: ['**/*.vue'], // 组件格式为.vue结尾的文件
      // getComponentName: (filename) => {
      //   let compName = filename.split('/')[0].toLowerCase()
      //   compName = compName.charAt(0).toUpperCase() + compName.slice(1)
      //   return `${compName}`
      // }
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