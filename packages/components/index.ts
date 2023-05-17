// packages/index.ts
import { App } from 'vue'
// 引入支持按需引入的组件
import hhH1 from './h1/src/main'

const components = [
  hhH1
]
const install = (app: App): void => {
  // 注册全局组件
  components.forEach(item => {
    app.component(item.name, item)
  })
}

export {
  hhH1
}

export default {
  version: '0.0.7-alph',
  hhH1,
  install
}
