## 介绍

- 高性能 VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

- 用来搭建静态页面

## 运行

- yarn 
- yarn dev

## 其他说明
1. 测试npm包
  - 在组件库项目中执行yarn link
  - 在目标项目中执行 yarn link xxx-ui
  - 注意：在反复测试时，每次link前都需要先执行npm unlink xxx-ui以解除链接，然后再重新link
  - 使用，在

``` vue 
<template>
  <base-h1 msg="hello world">
  </base-h1>
</template>
<script lang="ts" setup>
import {hhH1} from 'xxx-ui' 
</script>
```
  
  
2. 发布npm
  - 发布前需要修改 `package.json` 的 `version`值,为发布版本号；name为包名
  - 切回npm镜像:  npm config set registry https://registry.npmjs.org/
  - 发布npm:  npm adduser


3. 在其他项目中安装依赖进行引用时，样式丢失的问题
  参考链接：https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%89%8B%E5%8A%A8%E5%AF%BC%E5%85%A5  
  需要手动安装 unplugin-element-plus并进行配置  

```
npm config set registry https://registry.npmjs.org/
```

```
import { ElTable,ElTableColumn} from 'element-plus'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'

```
