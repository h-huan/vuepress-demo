<template>
  <h1> {{ msg }}</h1>
</template>

<script lang="ts">
export default {
  name: 'baseH1'
}
</script>

<script lang="ts" setup>

const props = defineProps<{
  msg: string
}>()

</script>