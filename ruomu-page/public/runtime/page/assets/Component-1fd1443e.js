import{t as a,_ as c}from"./index-145ec67b.js";const i=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){var t;const u=(t=Vue.getCurrentInstance())==null?void 0:t.proxy,o=Vue.inject("app");return Vue.provide("hoc",u),{tagName:Vue.computed(()=>`ruomu-ui-${a(e.config.type)}`),style:Vue.computed(()=>o==null?void 0:o.transformStyle(e.config.style)),display:()=>{var s;const n=(s=e.config)==null?void 0:s.display;return typeof n=="function"?n(o):n!==!1}}}});function l(e,u,o,t,n,s){return e.display()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tagName),{key:0,id:e.config.id,class:Vue.normalizeClass(`ruomu-ui-component${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style),config:e.config,model:e.model},null,8,["id","class","style","config","model"])):Vue.createCommentVNode("",!0)}const m=c(i,[["render",l]]);export{m as C};
//# sourceMappingURL=Component-1fd1443e.js.map
