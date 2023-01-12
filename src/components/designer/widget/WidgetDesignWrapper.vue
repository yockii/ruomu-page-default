<template>
  <div :ref="setRef" class="drag-box" :style="{opacity}">
    <div v-if="widget.selected" :ref="drag" class="drag-handle">
      <SvgIcon icon="move"></SvgIcon>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from '@vueuse/core'
import { DragSourceMonitor, useDrag, useDrop } from 'vue3-dnd'
import SvgIcon from '@/components/svg-icon/index.vue'
import { DesignConfig } from '../designConfig'
import { Widget } from './Widget'
import { unref, computed, ref } from 'vue'
import type { XYCoord, Identifier } from 'dnd-core'
import { Container } from './container/Container'
const props = defineProps<{
  accept: string[],
  widget: Widget,
  designConfig: DesignConfig
}>()

// 拖拽相关代码 ///
const wrapper = ref<HTMLDivElement>()

const [, drop] = useDrop<Widget>({
  accept: props.accept,
  hover (item: Widget, monitor) {
    if (item.id === props.widget.id) {
      return
    }
    if (item.type === 'rmCol') {
      return
    }

    const dragIndex = item.parent ? ((item.parent as Container).children.findIndex(w => w.id === item.id)) : props.designConfig.items.findIndex(w => w.id === item.id)
    const hoverIndex = props.widget.parent ? ((props.widget.parent as Container).children.findIndex(w => w.id === props.widget.id)) : props.designConfig.items.findIndex(w => w.id === props.widget.id)

    const sameParent = (item.parent === null && props.widget.parent === null) || (item.parent?.id === props.widget.parent?.id)

    if (sameParent && dragIndex === hoverIndex) {
      return
    }

    const rect = wrapper.value?.getBoundingClientRect()
    const step = (rect?.height || 0) / 3
    const top = rect?.top || 0
    const bottom = rect?.bottom || 0
    const sourceY = monitor.getClientOffset()?.y || 0
    if (sourceY < top + step) {
      if (dragIndex < hoverIndex) {
        return
      }

      // 在当前组件之前插入
      props.designConfig.moveWidget(item, props.widget)
    } else if (sourceY > bottom - step) {
      if (dragIndex > hoverIndex) {
        return
      }
      // 在当前组件之后插入
      props.designConfig.moveWidget(item, props.widget, true)
    } else {
      // console.log('嵌入')
    }
  }
})

const [collect, drag, preview] = useDrag(() => ({
  type: props.widget.type,
  item: props.widget,
  collect: monitor => {
    const result = {
      isDragging: monitor.isDragging()
    }
    return result
  }
}))

const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0 : 1))

const setRef = (el: HTMLDivElement) => {
  wrapper.value = preview(drop(el)) as HTMLDivElement
}
// 拖拽代码结束 ///

</script>
