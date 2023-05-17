<template>
  <h1> {{ msg }}</h1>
</template>

<script lang="ts">
export default {
  name: 'hhH1'
}
</script>

<script lang="ts" setup>

const props = defineProps<{
  msg: string
}>()

</script>

<style module lang="scss"></style>