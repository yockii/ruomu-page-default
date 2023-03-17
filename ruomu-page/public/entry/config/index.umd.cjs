(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetConfigs = factory());
})(this, (function () { 'use strict';

  const container = [
    {
      name: "layout",
      text: "容器布局",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "绝对定位" },
        { value: "relative", text: "流式布局" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    },
    {
      name: "bindModel",
      text: "绑定数据",
      type: "text"
    }
  ];

  const page = [
    {
      text: "页面标识",
      name: "name",
      disabled: true,
      extra: "在多页面的情况下用来指定要打开的页面"
    },
    {
      text: "页面标题",
      name: "title"
    },
    {
      name: "layout",
      text: "容器布局",
      type: "select",
      defaultValue: "absolute",
      options: [
        { value: "absolute", text: "绝对定位" },
        { value: "relative", text: "流式布局" }
      ],
      onChange: (formState, v, { model }) => {
        if (!model.style)
          return v;
        if (v === "relative") {
          model.style.height = "auto";
        } else {
          const el = formState.stage?.renderer?.contentWindow.document.getElementById(model.id);
          if (el) {
            model.style.height = el.getBoundingClientRect().height;
          }
        }
      }
    }
  ];

  const text = [
    {
      name: "text",
      text: "文本"
    },
    {
      name: "showType",
      text: "类型",
      type: "select",
      defaultValue: "default",
      options: [
        { value: "default", text: "默认" },
        { value: "primary", text: "主色调" },
        { value: "success", text: "成功" },
        { value: "info", text: "信息" },
        { value: "warning", text: "警告" },
        { value: "danger", text: "错误" }
      ]
    },
    {
      name: "size",
      text: "尺寸",
      type: "select",
      defaultValue: "default",
      options: [
        { value: "default", text: "默认" },
        { value: "small", text: "小" },
        { value: "large", text: "大" }
      ]
    },
    {
      name: "truncated",
      text: "显示省略号",
      type: "switch"
    },
    {
      name: "tag",
      text: "元素标签",
      type: "select",
      default: "span",
      options: [
        { value: "span", text: "默认" },
        { value: "b", text: "粗体" },
        { value: "i", text: "斜体" },
        { value: "sub", text: "上标" },
        { value: "sup", text: "下标" },
        { value: "ins", text: "下划线" },
        { value: "del", text: "删除线" },
        { value: "mark", text: "标记" }
      ]
    }
  ];

  const button = [
    {
      text: "文本",
      name: "text"
    }
  ];

  const configs = {
    "container": container,
    "page": page,
    "text": text,
    "button": button
  };

  return configs;

}));
//# sourceMappingURL=index.umd.cjs.map
