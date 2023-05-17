import { App } from 'vue'
// index.vue为核心组件
import H1 from './index.vue'

H1.install = (app: App): void => {
  app.component(H1.name, H1)  //组件需要添加name属性
}

export default H1
