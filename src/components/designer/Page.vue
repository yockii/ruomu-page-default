<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="bg-white page-container designer" :ref="drop" @click="unselectWidget">
    <template v-for="item in designConfig.items" :key="item.id">
      <component :is="getContainer(item.type)" :widget="item" :design-config="designConfig"/>
    </template>
  </div>
</template>

<script lang="ts" setup>
import containers from '@/components/designer/widget/container/install'

import { toRefs } from 'vue'
import { useDrop } from 'vue3-dnd'
import { DesignConfig } from './designConfig'
import { Widget } from './widget/Widget'
const props = defineProps({
  designConfig: {
    type: DesignConfig,
    default: new DesignConfig()
  }
})

const getContainer = (name:string) => {
  return containers[name]
}

const unselectWidget = () => {
  props.designConfig.selectWidget()
}

const [collect, drop] = useDrop(() => ({
  accept: 'container',
  drop (_item: unknown, monitor) {
    const didDrop = monitor.didDrop()
    if (didDrop) {
      console.log(didDrop)
      return
    }
    console.log(_item)

    props.designConfig.addWidget(_item as Widget)
  },
  collect: monitor => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true })
  })
}))

// const { isOver, isOverCurrent } = toRefs(collect)

</script>

<style lang="scss" scoped>
.page-container {
  min-height: 300px;
  padding: 6px 3px;
}

.designer {

  :deep( .ruomu-widget) {
    padding: 3px;
    border: 1px dashed red;
    min-height: 20px;

    &.selected {
      border-color: #0CF;
    }
  }

  :deep(.drag-box) {
    position: relative;
  }
  :deep(.drag-handle) {
    position: absolute;
    padding: 3px;
    font-size: 12px;
    color: #fff;
    top: -5px;
    left: -5px;
    background-color: #0CF;
    cursor: move;
  }
}
</style>
