import{C as i}from"./Component-1fd1443e.js";import{u as s}from"./useApp-0ca5d135.js";import{_ as r}from"./index-145ec67b.js";const m=e=>({show:()=>{e.config.style.display="initial"},hide:()=>{e.config.style.display="none"}}),c=Vue.defineComponent({components:{"ruomu-ui-component":i},props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){const o=s(e);return{style:Vue.computed(()=>o==null?void 0:o.transformStyle(e.config.style||{})),display:()=>{var t;const n=(t=e.config)==null?void 0:t.display;return typeof n=="function"?n(o):n!==!1},...m(e)}}}),d=["id","model"];function a(e,o,n,t,f,p){const u=Vue.resolveComponent("ruomu-ui-component");return e.display()?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${e.config.id||""}`,class:Vue.normalizeClass(`ruomu-ui-container ruomu-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style),model:e.model},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,l=>(Vue.openBlock(),Vue.createBlock(u,{key:l.id,config:l,model:e.config.bindModel?e.model[e.config.bindModel]:e.model},null,8,["config","model"]))),128))],14,d)):Vue.createCommentVNode("",!0)}const C=r(c,[["render",a]]);export{C as default};
//# sourceMappingURL=Container-b1b3d6c9.js.map
