System.register(["./index-legacy-b131e9dd.js"],(function(e,t){"use strict";var n,o;return{setters:[e=>{n=e.t,o=e._}],execute:function(){const t=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){const t=Vue.getCurrentInstance()?.proxy,o=Vue.inject("app");return Vue.provide("hoc",t),{tagName:Vue.computed((()=>`ruomu-ui-${n(e.config.type)}`)),style:Vue.computed((()=>o?.transformStyle(e.config.style))),display:()=>{const t=e.config?.display;return"function"==typeof t?t(o):!1!==t}}}});e("C",o(t,[["render",function(e,t,n,o,c,u){return e.display()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tagName),{key:0,id:e.config.id,class:Vue.normalizeClass("ruomu-ui-component"+(e.config.className?` ${e.config.className}`:"")),style:Vue.normalizeStyle(e.style),config:e.config,model:e.model},null,8,["id","class","style","config","model"])):Vue.createCommentVNode("",!0)}]]))}}}));
//# sourceMappingURL=Component-legacy-9e319ef8.js.map
