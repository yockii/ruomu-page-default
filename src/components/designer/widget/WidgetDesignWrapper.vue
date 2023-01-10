<template>
  <div :ref="preview" :style="{opacity}" class="drag-box">
    <div v-if="widget.selected" :ref="drag" class="drag-handle">
      <SvgIcon icon="move"></SvgIcon>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { useDrag } from 'vue3-dnd'
import SvgIcon from '@/components/svg-icon/index.vue'
import { DesignConfig } from '../designConfig'
import { Widget } from './Widget'
const props = defineProps<{
  widget: Widget,
  designConfig: DesignConfig
}>()

// 拖拽相关代码 ///
const [collect, drag, preview] = useDrag(() => ({
  type: props.widget.group,
  collect: monitor => ({
    opacity: monitor.isDragging() ? 0.4 : 1
  })
}))
const { opacity } = collect
// 拖拽代码结束 ///

</script>
