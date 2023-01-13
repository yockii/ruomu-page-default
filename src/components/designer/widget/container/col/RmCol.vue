<template>
  <el-col :span="widget.options.span" :offset="widget.options.offset" :push="widget.options.push" :pull="widget.options.pull" @click.stop="selected()">
    <div class="ruomu-widget" :class="{selected: widget.selected}" :ref="setRef" :style="{opacity}">
      <div v-if="widget.selected" :ref="drag" class="drag-handle">
        <SvgIcon icon="move"></SvgIcon>
      </div>
    </div>
  </el-col>
</template>
<script lang="ts" setup name="rmCol">
import SvgIcon from '@/components/svg-icon/index.vue'
import { toRefs } from '@vueuse/core'
import { computed, ref, unref } from 'vue'
import { useDrag, useDrop } from 'vue3-dnd'
import { DesignConfig } from '../../../designConfig'
import { Widget } from '../../Widget'
import { Container } from '../Container'

const props = defineProps<{
  widget: Widget,
  designConfig: DesignConfig
}>()

const selected = () => {
  props.designConfig.selectWidget(props.widget)
}

// 拖拽 //////////
const wrapper = ref<HTMLDivElement>()

const [, drop] = useDrop<Widget>({
  accept: props.widget.accept,
  hover (item: Widget, monitor) {
    if (item.type !== 'rmCol') {
      return // 对于非rmCol的类型，不参与排序，直接返回
    }
    if (!item.parent) {
      return // 没有parent的，不参与
    }

    const itemParent = item.parent as Container
    const myParent = props.widget.parent as Container

    const dragIndex = itemParent.children.findIndex(w => w.id === item.id)
    const hoverIndex = myParent.children.findIndex(w => w.id === props.widget.id)

    const sameParent = itemParent.id === myParent.id

    const rect = wrapper.value?.getBoundingClientRect()
    const step = (rect?.width || 0) / 2
    const left = rect?.left || 0
    const right = rect?.right || 0
    const sourceX = monitor.getClientOffset()?.x || 0

    if (sourceX < left + step) {
      if (sameParent && dragIndex < hoverIndex) {
        return
      }
      // 左侧插入
      props.designConfig.moveWidget(item, props.widget)
    } else if (sourceX > right - step) {
      if (sameParent && dragIndex > hoverIndex) {
        return
      }
      // 右侧插入
      props.designConfig.moveWidget(item, props.widget, true)
    } else {
      // 其他情况，hover不理会，嵌入使用drop
    }
  }
})

const [collect, drag, preview] = useDrag(() => ({
  type: props.widget.group,
  item: props.widget,
  collect: monitor => {
    return {
      isDragging: monitor.isDragging()
    }
  }
}))

const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0 : 1))

const setRef = (el: HTMLDivElement) => {
  wrapper.value = preview(drop(el)) as HTMLDivElement
}
// 拖拽结束 //////
</script>

<style lang="scss" scoped>
.ruomu-widget {
  position: relative;
}
</style>
