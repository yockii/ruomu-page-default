<template>
  <DndProvider :backend="HTML5Backend">
    <el-container class="container full-width">
      <el-header></el-header>
      <el-container>
        <AsideWrapperVue>
          <el-tabs v-model="leftActiveTabName">
            <el-tab-pane label="组件库" name="widgets">
              <WidgetPanelVue :design-config="designConfig"></WidgetPanelVue>
            </el-tab-pane>
          </el-tabs>
        </AsideWrapperVue>
        <el-main>
          <el-scrollbar>
            <div class="bg-gray pa-5">
              <PageVue :design-config="designConfig"></PageVue>
            </div>
          </el-scrollbar>
        </el-main>
        <AsideWrapperVue right>
          <component :is="getPropertyComponent(designConfig.selected?.type || 'page')" :widget="designConfig.selected || designConfig"></component>
        </AsideWrapperVue>
      </el-container>
    </el-container>
  </DndProvider>
</template>

<script setup lang="ts">
import propertyComponents from '@/components/designer/property/install'

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AsideWrapperVue from '../common/AsideWrapper.vue'
import WidgetPanelVue from './widget/WidgetPanel.vue'
import PageVue from './Page.vue'
import { ref } from 'vue'
import { DesignConfig } from './designConfig'
// 设计配置实例
const designConfig = ref(new DesignConfig())

// 左侧 开始 ////////////////
const leftActiveTabName = ref('widgets')

// 左侧 结束 /////////////////

// 配置组件信息 //////////////
const getPropertyComponent = (name: string) => {
  if (!name) {
    name = 'page'
  }
  return propertyComponents[name]
}
// 配置组件结束
</script>

<style lang="scss" scoped>
.container{
  padding: 0 10px;
}
.full-width{
  width: 100%;
}

</style>
