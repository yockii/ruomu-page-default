(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.magicPresetValues = factory());
})(this, (function () { 'use strict';

  const container = {
    items: [],
    style: {
      width: "375",
      height: "100"
    }
  };

  const page = {
    items: [],
    style: {
      width: "100%",
      height: "100%"
    }
  };

  const text = {
    type: "text",
    text: "请输入文本内容",
    showType: "default",
    size: "default",
    truncated: false,
    tag: "span",
    style: {
      width: "100",
      height: "auto"
    }
  };

  const button = {
    text: "请输入文本内容",
    multiple: true,
    style: {
      width: "270",
      height: "37.5",
      border: 0,
      backgroundColor: "#fb6f00"
    }
  };

  const values = {
    "container": container,
    "page": page,
    "text": text,
    "button": button
  };

  return values;

}));
//# sourceMappingURL=index.umd.cjs.map
