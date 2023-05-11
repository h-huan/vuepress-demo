<!--
 * @Author: h-huan
 * @Date: 2023-05-11 17:02:51
 * @LastEditors: h-huan
 * @LastEditTime: 2023-05-11 17:02:55
 * @Description: 
-->
<template>
  <button :class="['xl-button', type ? 'xl-button--' + type : '']">
    <slot />
  </button>
</template>

<script>
export default {
  name: "XlButton",
  props: {
    type: { type: String, default: 'default' }
  }
}
</script>

<style scoped></style>
