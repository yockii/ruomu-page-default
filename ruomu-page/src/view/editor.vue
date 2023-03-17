<template>
  <m-editor ref="editor" v-model="dsl" :menu="menu" :runtime-url="runtimeUrl" :component-group-list="componentListInGroup"
    :props-values="presetValues" :props-configs="presetConfigs" :event-method-list="presetEvents" :stage-rect="stageRect"
    autoScrollIntoView :moveable-options="moveableOptions">
    <template #workspace-content>
      <DeviceGroup v-model="stageRect"></DeviceGroup>
    </template>
  </m-editor>
</template>

<script setup lang="ts">
import 'element-plus/dist/index.css'
import '@tmagic/editor/dist/style.css'
import '@tmagic/form/dist/style.css'
import { Component, markRaw, reactive, ref, toRaw } from 'vue';
import DeviceGroup from '@/components/editor/DeviceGroup.vue';
import { ComponentGroup, MenuBarData, MoveableOptions, TMagicEditor } from '@tmagic/editor';
import { CustomizeMoveableOptionsCallbackConfig } from '@tmagic/stage'
import { Connection, Coin, Edit, FolderOpened, Tickets, SwitchButton } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus';
import { NodeType } from '@tmagic/schema';
import { asyncLoadJs } from '@tmagic/utils';
import editorApi from '@/api/editor';
const icons: Record<string, Component> = {
  'folder-opened': markRaw(FolderOpened),
  tickets: markRaw(Tickets),
  'switch-button': markRaw(SwitchButton),
}
const editor = ref<InstanceType<typeof TMagicEditor>>()

const componentListInGroup = ref<ComponentGroup[]>([])
const presetValues = ref<Record<string, any>>({})
const presetConfigs = ref<Record<string, any>>({})
const presetEvents = ref<Record<string, any>>({})
// 获取可用组件树
const getComponentListInGroup = async () => {
  const { data: list } = await editorApi.getComponentList()
  if (!list) return
  componentListInGroup.value = list.map(groupItem => ({
    ...groupItem,
    items: groupItem.items.map(item => ({
      ...item,
      icon: (typeof item.icon === 'string' ? icons[item.icon] : item.icon) || Edit
    }))
  }))
}

// 加载entry ////////////////////////
asyncLoadJs('./entry/config/index.umd.cjs').then(() => {
  presetConfigs.value = (window as any).magicPresetConfigs
})
asyncLoadJs('./entry/value/index.umd.cjs').then(() => {
  presetValues.value = (window as any).magicPresetValues
})
asyncLoadJs('./entry/event/index.umd.cjs').then(() => {
  presetEvents.value = (window as any).magicPresetEvents
})
/////////////////////////////////////

getComponentListInGroup()

const menu: MenuBarData = {
  left: [
    {
      type: 'text',
      text: '若木页面配置',
    }
  ],
  center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
  right: [
    {
      type: 'button',
      text: '预览',
      icon: Connection,
      handler: async (services) => {
        if (services?.editorService.get('modifiedNodeIds').size > 0) {
          try {
            await ElMessageBox.confirm('有修改尚未保存，是否先保存再进行预览?', '提示', {
              confirmButtonText: '保存并预览',
              cancelButtonText: '直接预览',
              type: 'warning',
            })
            save();
            ElMessage('保存成功');
          } catch (e) {
            console.error(e)
          }
        }
        alert(1)
      }
    },
    {
      type: 'button',
      text: '保存',
      icon: Coin,
      handler: () => {
        save()
        ElMessage('保存成功');
      }
    }
  ]
}

const save = () => {
  console.log(dsl)
  editor.value?.editorService.resetModifiedNodeId()
}

const dsl = reactive({
  type: 'app',
  id: 'app_1',
  items: []
})
const stageRect = ref({
  width: 375,
  height: 800,
})

// 控制组件是否可移动
const moveableOptions = (config?: CustomizeMoveableOptionsCallbackConfig): MoveableOptions => {
  const options: MoveableOptions = {}

  const id = config?.targetElId
  if (id && editor.value) {
    const node = editor.value.editorService.getNodeById(id)
    if (node) {
      const isPage = node.type === NodeType.PAGE
      options.draggable = !isPage
      options.resizable = !isPage
      options.rotatable = !isPage
    }
  }

  return options
}

const runtimeUrl = './runtime/designer/index.html'

</script>

<style>
body {
  margin: 0;
  padding: 0;
}

html,
body,
#app,
.m-editor {
  height: 100vh;
}
</style>