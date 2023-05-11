/*
 * @Author: h-huan
 * @Date: 2023-05-11 14:12:59
 * @LastEditors: h-huan
 * @LastEditTime: 2023-05-11 17:42:19
 * @Description: 
 */
import { defineClientConfig } from '@vuepress/client'
// 全量引入element-plus
import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import './styles/element/index.scss'

// 手动引入自己封装好的组件
// import BaseTable from '../../packages/table/src/index.vue'
// import './styles/index.less'

import Button from '../../src/components/Button.vue'
import '../../src/styles/index.css'

// import './styles/app.scss'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    // 注册组件
    app.component(Button.name, Button)
  },
  setup() { },
  rootComponents: [],
})