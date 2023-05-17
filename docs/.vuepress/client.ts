import { defineClientConfig } from '@vuepress/client'
// 全量引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 手动引入自己封装好的组件
// import BaseTable from '../../packages/table/src/index.vue'
// import './styles/index.less'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    // 注册组件
    // app.component(Button.name, Button)
  },
  setup() { },
  rootComponents: [],
})