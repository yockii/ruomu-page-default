/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2023 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    name: 'text',
    text: '文本',
  },
  {
    name: 'showType',
    text: '类型',
    type: 'select',
    defaultValue: 'default',
    options: [
      {value: 'default', text: '默认'},
      {value: 'primary', text: '主色调'},
      {value: 'success', text: '成功'},
      {value: 'info', text: '信息'},
      {value: 'warning', text: '警告'},
      {value: 'danger', text: '错误'},
    ]
  },
  {
    name: 'size',
    text: '尺寸',
    type: 'select',
    defaultValue: 'default',
    options: [
      {value: 'default', text: '默认'},
      {value: 'small', text: '小'},
      {value: 'large', text: '大'},
    ]
  },
  {
    name: 'truncated',
    text: '显示省略号',
    type: 'switch'
  },
  {
    name: 'tag',
    text: '元素标签',
    type: 'select',
    default: 'span',
    options: [
      {value: 'span', text: '默认'},
      {value: 'b', text: '粗体'},
      {value: 'i', text: '斜体'},
      {value: 'sub', text: '上标'},
      {value: 'sup', text: '下标'},
      {value: 'ins', text: '下划线'},
      {value: 'del', text: '删除线'},
      {value: 'mark', text: '标记'},
    ]
  }
];
