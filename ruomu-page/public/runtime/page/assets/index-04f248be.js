import{u as h}from"./useApp-0ca5d135.js";function O(e){for(var n=-1,t=e==null?0:e.length,o={};++n<t;){var u=e[n];o[u[0]]=u[1]}return o}const C=Object.prototype.hasOwnProperty,g=(e,n)=>C.call(e,n),$=e=>e!==null&&typeof e=="object",b="__epPropKey",w=e=>$(e)&&!!e[b],z=(e,n)=>{if(!$(e)||w(e))return e;const{values:t,required:o,default:u,type:r,validator:a}=e,p={type:r,required:!!o,validator:t||a?f=>{let l=!1,v=[];if(t&&(v=Array.from(t),g(e,"default")&&v.push(u),l||(l=v.includes(f))),a&&(l||(l=a(f))),!l&&v.length>0){const V=[...new Set(v)].map(y=>JSON.stringify(y)).join(", ");Vue.warn(`Invalid prop: validation failed${n?` for prop "${n}"`:""}. Expected one of [${V}], got value ${JSON.stringify(f)}.`)}return l}:void 0,[b]:!0};return g(e,"default")&&(p.default=u),p},S=e=>O(Object.entries(e).map(([n,t])=>[n,z(t,n)])),j=(e,n)=>{if(e.install=t=>{for(const o of[e,...Object.values(n!=null?n:{})])t.component(o.name,o)},n)for(const[t,o]of Object.entries(n))e[t]=o;return e},_=["","default","small","large"],x="el",N="is-",d=(e,n,t,o,u)=>{let r=`${e}-${n}`;return t&&(r+=`-${t}`),o&&(r+=`__${o}`),u&&(r+=`--${u}`),r},P=Symbol("namespaceContextKey"),I=e=>{const n=e||Vue.inject(P,Vue.ref(x));return Vue.computed(()=>Vue.unref(n)||x)},K=(e,n)=>{const t=I(n);return{namespace:t,b:(s="")=>d(t.value,e,s,"",""),e:s=>s?d(t.value,e,"",s,""):"",m:s=>s?d(t.value,e,"","",s):"",be:(s,c)=>s&&c?d(t.value,e,s,c,""):"",em:(s,c)=>s&&c?d(t.value,e,"",s,c):"",bm:(s,c)=>s&&c?d(t.value,e,s,"",c):"",bem:(s,c,i)=>s&&c&&i?d(t.value,e,s,c,i):"",is:(s,...c)=>{const i=c.length>=1?c[0]:!0;return s&&i?`${N}${s}`:""},cssVar:s=>{const c={};for(const i in s)s[i]&&(c[`--${t.value}-${i}`]=s[i]);return c},cssVarName:s=>`--${t.value}-${s}`,cssVarBlock:s=>{const c={};for(const i in s)s[i]&&(c[`--${t.value}-${e}-${i}`]=s[i]);return c},cssVarBlockName:s=>`--${t.value}-${e}-${s}`}},T=e=>{const n=Vue.getCurrentInstance();return Vue.computed(()=>{var t,o;return(o=((t=n.proxy)==null?void 0:t.$props)[e])!=null?o:void 0})};z({type:String,values:_,required:!1});const B=Symbol("size"),E=()=>{const e=Vue.inject(B,{});return Vue.computed(()=>Vue.unref(e.size)||"")};var q=(e,n)=>{const t=e.__vccOpts||e;for(const[o,u]of n)t[o]=u;return t};const D=Symbol("formContextKey"),J=Symbol("formItemContextKey"),A=(e,n={})=>{const t=Vue.ref(void 0),o=n.prop?t:T("size"),u=n.global?t:E(),r=n.form?{size:void 0}:Vue.inject(D,void 0),a=n.formItem?{size:void 0}:Vue.inject(J,void 0);return Vue.computed(()=>o.value||Vue.unref(e)||(a==null?void 0:a.size)||(r==null?void 0:r.size)||u.value||"")},G=S({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:_,default:""},truncated:{type:Boolean},tag:{type:String,default:"span"}}),R=Vue.defineComponent({name:"ElText"}),F=Vue.defineComponent({...R,props:G,setup(e){const n=e,t=A(),o=K("text"),u=Vue.computed(()=>[o.b(),o.m(n.type),o.m(t.value),o.is("truncated",n.truncated)]);return(r,a)=>(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(r.tag),{class:Vue.normalizeClass(Vue.unref(u))},{default:Vue.withCtx(()=>[Vue.renderSlot(r.$slots,"default")]),_:3},8,["class"]))}});var Y=q(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);const Z=j(Y);const L=Vue.defineComponent({__name:"index",props:{config:{type:Object,default:()=>({})},model:Object,vars:Object},setup(e){var u;const n=e;h(n);const t=(u=Vue.getCurrentInstance())==null?void 0:u.proxy,o=Vue.computed(()=>{var m;let r=((m=n.config)==null?void 0:m.text)||"";if(typeof r=="function")return r.bind(t)(t,{model:n.model});const{vars:a}=n;if(Object.prototype.toString.call(a)==="[object Object]"){let p=r;return Object.entries(a).forEach(([f,l])=>{p=p.replace(new RegExp(`{{${f}}}`,"g"),l)}),p}return r||""});return(r,a)=>{var m,p,f,l;return Vue.openBlock(),Vue.createBlock(Vue.unref(Z),{class:"ruomu-ui-text",type:(m=e.config)!=null&&m.showType?e.config.showType:"",size:(p=e.config)!=null&&p.size?e.config.size:"",tag:(f=e.config)==null?void 0:f.tag,truncated:(l=e.config)==null?void 0:l.truncated},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(o)),1)]),_:1},8,["type","size","tag","truncated"])}}});export{L as default};
//# sourceMappingURL=index-04f248be.js.map
