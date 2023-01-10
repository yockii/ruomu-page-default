<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item name="container" title="容器">
      <ul>
        <template v-for="item in containerList" :key="item.type + '-' + item.name">
          <drag-box :widget="item">
            <li :title="item.displayName">
              <svg-icon :icon="item.icon" class-name="icon"/>
              <span>{{ item.displayName }}</span>
            </li>
          </drag-box>
        </template>
      </ul>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from '@/components/svg-icon/index.vue'
import allContainers from './container/list'
import { DesignConfig } from '../designConfig'
import DragBox from '@/components/common/DragBox.vue'

const props = defineProps({
  designConfig: {
    type: DesignConfig
  }
})

const activeNames = ref(['container'])

// 容器组件 ///////////////
const containerList = ref(allContainers)

// 容器组件结束 ///////////

// 拖拽部分 /////////////////

// 拖拽方法结束 //////////////
</script>

<style lang="scss" scoped>
ul {
  padding-left: 5px;
  margin: 0;

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    list-style: none;
    height: 28px;
    line-height: 28px;
    width: 120px;
    float: left;
    margin: 3px 5px 5px 0;
    background: #ececec;
    cursor: move;
    .icon {
      font-size: 14px;
      line-height: 28px;
      margin-right: 3px;
    }
  }
}
</style>
