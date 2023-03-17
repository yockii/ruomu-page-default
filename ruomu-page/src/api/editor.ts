import { ComponentGroup } from "@tmagic/editor";

import fetch, { Res } from '@/util/request'

// 编辑器左侧组件的分类
export interface CompClassifyForEditor {
  title: string;
  items: CompInClassify[];
}

// 编辑器左侧组件列表
export interface CompInClassify {
  icon: string;
  id: number;
  renderType: number;
  reportType: string;
  text: string;
  type: string;
}

export default {
  getComponentList(): Promise<Res<ComponentGroup[]>> {
    return new Promise((resolve) => 
      resolve({
        code: 0,
        msg: '',
        data: [
          {
            title: '容器',
            items: [
              {
                icon: 'folder-opened',
                text: '组',
                type: 'container'
              }
            ]
          }, {
            title: '基础组件',
            items: [
              {
                icon: 'edit',
                text: '文本框',
                type: 'text'
              }, {
                text: '按钮',
                type: 'button'
              }
            ]
          }
        ]
      })
    )
  }
}