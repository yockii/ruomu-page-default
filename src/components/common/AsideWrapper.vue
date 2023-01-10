<template>
  <!-- <div v-if="right" class="drag-bar" @mousedown="start" @mousemove="move" @mouseup="end"></div> -->
  <el-aside :width="width + 'px'">
    <slot />
  </el-aside>
  <!-- <div v-if="!right" class="drag-bar" @mousedown="start" @mousemove="move" @mouseup="end"></div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  right: Boolean,
  minWidth: {
    type: Number,
    default: 200
  },
  maxWidth: {
    type: Number,
    default: 500
  }
})
const width = ref(260)
// const initX = ref(0)
// const started = ref(false)
// const start = function (e: MouseEvent) {
//   initX.value = e.clientX
//   started.value = true
// }
// const move = function (e: MouseEvent) {
//   if (started.value) {
//     const end = e.clientX
//     const duration = end - initX.value
//     let newWidth = width.value + duration
//     if (props.right) {
//       newWidth = width.value - duration
//     }
//     if (newWidth < props.minWidth) {
//       newWidth = props.minWidth
//     } else if (newWidth > props.maxWidth) {
//       newWidth = props.maxWidth
//     }
//     width.value = newWidth
//   }
// }
// const end = function (e: MouseEvent) {
//   started.value = false
// }

</script>

<style scoped>
.drag-bar {
  width: 4px;
  background-color: #cccccc;
  cursor: e-resize;
}
</style>
