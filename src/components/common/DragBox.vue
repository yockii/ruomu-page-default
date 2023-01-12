<template>
  <div :ref="drag">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { Widget } from '../designer/widget/Widget'
import { toRefs } from 'vue'
import { useDrag } from 'vue3-dnd'

const props = defineProps<{
  widget: Widget,
}>()

const [collect, drag] = useDrag(() => ({
  type: props.widget.type,
  item: props.widget,
  collect: monitor => ({
    isDragging: monitor.isDragging()
  })
}))

// const { isDragging } = toRefs(collect)
</script>
