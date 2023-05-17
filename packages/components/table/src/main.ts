import { App } from 'vue'
// index.vue为核心组件
import Table from './index.vue'

Table.install = (app: App): void => {
  app.component(Table.name, Table)  //组件需要添加name属性
}

export default Table

