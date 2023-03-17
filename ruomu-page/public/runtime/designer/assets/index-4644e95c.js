var ut=Object.defineProperty;var ct=(e,n,t)=>n in e?ut(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var b=(e,n,t)=>(ct(e,typeof n!="symbol"?n+"":n,t),t);function Lr(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ft="modulepreload",lt=function(e){return"/runtime/designer/"+e},Oe={},Te=function(n,t,r){if(!t||t.length===0)return n();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=lt(s),s in Oe)return;Oe[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let y=i.length-1;y>=0;y--){const $=i[y];if($.href===s&&(!o||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":ft,o||(h.as="script",h.crossOrigin=""),h.href=s,document.head.appendChild(h),o)return new Promise((y,$)=>{h.addEventListener("load",y),h.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())};var Be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee={},dt={get exports(){return ee},set exports(e){ee=e}},K=typeof Reflect=="object"?Reflect:null,Ee=K&&typeof K.apply=="function"?K.apply:function(n,t,r){return Function.prototype.apply.call(n,t,r)},ae;K&&typeof K.ownKeys=="function"?ae=K.ownKeys:Object.getOwnPropertySymbols?ae=function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:ae=function(n){return Object.getOwnPropertyNames(n)};function ht(e){console&&console.warn&&console.warn(e)}var He=Number.isNaN||function(n){return n!==n};function O(){O.init.call(this)}dt.exports=O;ee.once=vt;O.EventEmitter=O;O.prototype._events=void 0;O.prototype._eventsCount=0;O.prototype._maxListeners=void 0;var Me=10;function ce(e){if(typeof e!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(O,"defaultMaxListeners",{enumerable:!0,get:function(){return Me},set:function(e){if(typeof e!="number"||e<0||He(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");Me=e}});O.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};O.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||He(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this};function Ue(e){return e._maxListeners===void 0?O.defaultMaxListeners:e._maxListeners}O.prototype.getMaxListeners=function(){return Ue(this)};O.prototype.emit=function(n){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i=n==="error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var l=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw l.context=o,l}var a=s[n];if(a===void 0)return!1;if(typeof a=="function")Ee(a,this,t);else for(var h=a.length,y=Ke(a,h),r=0;r<h;++r)Ee(y[r],this,t);return!0};function Fe(e,n,t,r){var i,s,o;if(ce(t),s=e._events,s===void 0?(s=e._events=Object.create(null),e._eventsCount=0):(s.newListener!==void 0&&(e.emit("newListener",n,t.listener?t.listener:t),s=e._events),o=s[n]),o===void 0)o=s[n]=t,++e._eventsCount;else if(typeof o=="function"?o=s[n]=r?[t,o]:[o,t]:r?o.unshift(t):o.push(t),i=Ue(e),i>0&&o.length>i&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(n)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=n,l.count=o.length,ht(l)}return e}O.prototype.addListener=function(n,t){return Fe(this,n,t,!1)};O.prototype.on=O.prototype.addListener;O.prototype.prependListener=function(n,t){return Fe(this,n,t,!0)};function pt(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Ye(e,n,t){var r={fired:!1,wrapFn:void 0,target:e,type:n,listener:t},i=pt.bind(r);return i.listener=t,r.wrapFn=i,i}O.prototype.once=function(n,t){return ce(t),this.on(n,Ye(this,n,t)),this};O.prototype.prependOnceListener=function(n,t){return ce(t),this.prependListener(n,Ye(this,n,t)),this};O.prototype.removeListener=function(n,t){var r,i,s,o,l;if(ce(t),i=this._events,i===void 0)return this;if(r=i[n],r===void 0)return this;if(r===t||r.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[n],i.removeListener&&this.emit("removeListener",n,r.listener||t));else if(typeof r!="function"){for(s=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){l=r[o].listener,s=o;break}if(s<0)return this;s===0?r.shift():gt(r,s),r.length===1&&(i[n]=r[0]),i.removeListener!==void 0&&this.emit("removeListener",n,l||t)}return this};O.prototype.off=O.prototype.removeListener;O.prototype.removeAllListeners=function(n){var t,r,i;if(r=this._events,r===void 0)return this;if(r.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):r[n]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete r[n]),this;if(arguments.length===0){var s=Object.keys(r),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=r[n],typeof t=="function")this.removeListener(n,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(n,t[i]);return this};function ze(e,n,t){var r=e._events;if(r===void 0)return[];var i=r[n];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?mt(i):Ke(i,i.length)}O.prototype.listeners=function(n){return ze(this,n,!0)};O.prototype.rawListeners=function(n){return ze(this,n,!1)};O.listenerCount=function(e,n){return typeof e.listenerCount=="function"?e.listenerCount(n):qe.call(e,n)};O.prototype.listenerCount=qe;function qe(e){var n=this._events;if(n!==void 0){var t=n[e];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}O.prototype.eventNames=function(){return this._eventsCount>0?ae(this._events):[]};function Ke(e,n){for(var t=new Array(n),r=0;r<n;++r)t[r]=e[r];return t}function gt(e,n){for(;n+1<e.length;n++)e[n]=e[n+1];e.pop()}function mt(e){for(var n=new Array(e.length),t=0;t<n.length;++t)n[t]=e[t].listener||e[t];return n}function vt(e,n){return new Promise(function(t,r){function i(o){e.removeListener(n,s),r(o)}function s(){typeof e.removeListener=="function"&&e.removeListener("error",i),t([].slice.call(arguments))}Qe(e,n,s,{once:!0}),n!=="error"&&yt(e,i,{once:!0})})}function yt(e,n,t){typeof e.on=="function"&&Qe(e,"error",n,t)}function Qe(e,n,t,r){if(typeof e.on=="function")r.once?e.once(n,t):e.on(n,t);else if(typeof e.addEventListener=="function")e.addEventListener(n,function i(s){r.once&&e.removeEventListener(n,i),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}var $t=typeof global=="object"&&global&&global.Object===Object&&global;const Ge=$t;var bt=typeof self=="object"&&self&&self.Object===Object&&self,wt=Ge||bt||Function("return this")();const V=wt;var Ot=V.Symbol;const ue=Ot;var Je=Object.prototype,Tt=Je.hasOwnProperty,Et=Je.toString,J=ue?ue.toStringTag:void 0;function Mt(e){var n=Tt.call(e,J),t=e[J];try{e[J]=void 0;var r=!0}catch(s){}var i=Et.call(e);return r&&(n?e[J]=t:delete e[J]),i}var jt=Object.prototype,_t=jt.toString;function St(e){return _t.call(e)}var Lt="[object Null]",Ct="[object Undefined]",je=ue?ue.toStringTag:void 0;function te(e){return e==null?e===void 0?Ct:Lt:je&&je in Object(e)?Mt(e):St(e)}function be(e){return e!=null&&typeof e=="object"}var xt=Array.isArray;const Dt=xt;function Ze(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var At="[object AsyncFunction]",Pt="[object Function]",It="[object GeneratorFunction]",Nt="[object Proxy]";function Xe(e){if(!Ze(e))return!1;var n=te(e);return n==Pt||n==It||n==At||n==Nt}var Wt=V["__core-js_shared__"];const le=Wt;var _e=function(){var e=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function kt(e){return!!_e&&_e in e}var Rt=Function.prototype,Vt=Rt.toString;function Y(e){if(e!=null){try{return Vt.call(e)}catch(n){}try{return e+""}catch(n){}}return""}var Bt=/[\\^$.*+?()[\]{}|]/g,Ht=/^\[object .+?Constructor\]$/,Ut=Function.prototype,Ft=Object.prototype,Yt=Ut.toString,zt=Ft.hasOwnProperty,qt=RegExp("^"+Yt.call(zt).replace(Bt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Kt(e){if(!Ze(e)||kt(e))return!1;var n=Xe(e)?qt:Ht;return n.test(Y(e))}function Qt(e,n){return e==null?void 0:e[n]}function ne(e,n){var t=Qt(e,n);return Kt(t)?t:void 0}var Gt=ne(V,"WeakMap");const he=Gt;var Jt=9007199254740991;function et(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Jt}function Zt(e){return e!=null&&et(e.length)&&!Xe(e)}var Xt=Object.prototype;function tt(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||Xt;return e===t}var en="[object Arguments]";function Se(e){return be(e)&&te(e)==en}var nt=Object.prototype,tn=nt.hasOwnProperty,nn=nt.propertyIsEnumerable,rn=Se(function(){return arguments}())?Se:function(e){return be(e)&&tn.call(e,"callee")&&!nn.call(e,"callee")};const sn=rn;function on(){return!1}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Le=rt&&typeof module=="object"&&module&&!module.nodeType&&module,an=Le&&Le.exports===rt,Ce=an?V.Buffer:void 0,un=Ce?Ce.isBuffer:void 0,cn=un||on;const fn=cn;var ln="[object Arguments]",dn="[object Array]",hn="[object Boolean]",pn="[object Date]",gn="[object Error]",mn="[object Function]",vn="[object Map]",yn="[object Number]",$n="[object Object]",bn="[object RegExp]",wn="[object Set]",On="[object String]",Tn="[object WeakMap]",En="[object ArrayBuffer]",Mn="[object DataView]",jn="[object Float32Array]",_n="[object Float64Array]",Sn="[object Int8Array]",Ln="[object Int16Array]",Cn="[object Int32Array]",xn="[object Uint8Array]",Dn="[object Uint8ClampedArray]",An="[object Uint16Array]",Pn="[object Uint32Array]",E={};E[jn]=E[_n]=E[Sn]=E[Ln]=E[Cn]=E[xn]=E[Dn]=E[An]=E[Pn]=!0;E[ln]=E[dn]=E[En]=E[hn]=E[Mn]=E[pn]=E[gn]=E[mn]=E[vn]=E[yn]=E[$n]=E[bn]=E[wn]=E[On]=E[Tn]=!1;function In(e){return be(e)&&et(e.length)&&!!E[te(e)]}function Nn(e){return function(n){return e(n)}}var it=typeof exports=="object"&&exports&&!exports.nodeType&&exports,X=it&&typeof module=="object"&&module&&!module.nodeType&&module,Wn=X&&X.exports===it,de=Wn&&Ge.process,kn=function(){try{var e=X&&X.require&&X.require("util").types;return e||de&&de.binding&&de.binding("util")}catch(n){}}();const xe=kn;var De=xe&&xe.isTypedArray,Rn=De?Nn(De):In;const Vn=Rn;function Bn(e,n){return function(t){return e(n(t))}}var Hn=Bn(Object.keys,Object);const Un=Hn;var Fn=Object.prototype,Yn=Fn.hasOwnProperty;function zn(e){if(!tt(e))return Un(e);var n=[];for(var t in Object(e))Yn.call(e,t)&&t!="constructor"&&n.push(t);return n}var qn=ne(V,"Map");const pe=qn;var Kn=ne(V,"DataView");const ge=Kn;var Qn=ne(V,"Promise");const me=Qn;var Gn=ne(V,"Set");const ve=Gn;var Ae="[object Map]",Jn="[object Object]",Pe="[object Promise]",Ie="[object Set]",Ne="[object WeakMap]",We="[object DataView]",Zn=Y(ge),Xn=Y(pe),er=Y(me),tr=Y(ve),nr=Y(he),F=te;(ge&&F(new ge(new ArrayBuffer(1)))!=We||pe&&F(new pe)!=Ae||me&&F(me.resolve())!=Pe||ve&&F(new ve)!=Ie||he&&F(new he)!=Ne)&&(F=function(e){var n=te(e),t=n==Jn?e.constructor:void 0,r=t?Y(t):"";if(r)switch(r){case Zn:return We;case Xn:return Ae;case er:return Pe;case tr:return Ie;case nr:return Ne}return n});const rr=F;var ir="[object Map]",sr="[object Set]",or=Object.prototype,ar=or.hasOwnProperty;function ur(e){if(e==null)return!0;if(Zt(e)&&(Dt(e)||typeof e=="string"||typeof e.splice=="function"||fn(e)||Vn(e)||sn(e)))return!e.length;var n=rr(e);if(n==ir||n==sr)return!e.size;if(tt(e))return!zn(e).length;for(var t in e)if(ar.call(e,t))return!1;return!0}var st=(e=>(e.CODE="code",e))(st||{});class cr{constructor(n=globalThis.navigator.userAgent,t={}){b(this,"isIos",!1);b(this,"isIphone",!1);b(this,"isIpad",!1);b(this,"isAndroid",!1);b(this,"isAndroidPad",!1);b(this,"isMac",!1);b(this,"isWin",!1);b(this,"isMqq",!1);b(this,"isWechat",!1);b(this,"isWeb",!1);this.isIphone=n.indexOf("iPhone")>=0,this.isIpad=/(iPad).*OS\s([\d_]+)/.test(n),this.isIos=this.isIphone||this.isIpad,this.isAndroid=n.indexOf("Android")>=0,this.isAndroidPad=this.isAndroid&&n.indexOf("Mobile")<0,this.isMac=n.indexOf("Macintosh")>=0,this.isWin=n.indexOf("Windows")>=0,this.isMqq=/QQ\/([\d.]+)/.test(n),this.isWechat=n.indexOf("MicroMessenger")>=0&&n.indexOf("wxwork")<0,this.isWeb=!this.isIos&&!this.isAndroid&&!/(WebOS|BlackBerry)/.test(n),Object.entries(t).forEach(([r,i])=>{this[r]=i})}}const ke="magic:common:events:",ot="magic:common:actions:",oe={SHOW:"show",HIDE:"hide",SCROLL_TO_VIEW:"scrollIntoView",SCROLL_TO_TOP:"scrollToTop"},fr=e=>e.startsWith(ke)?e:`${ke}${e}`,lr=e=>e.startsWith(ot),at=(e,n)=>{var r;if(!e)return!1;if(!e.id)return at(e.parentElement,n);const t=(r=n.page)==null?void 0:r.getNode(e.id);return t||!1},Re=(e,n,t)=>{const r=at(t.target,e);r&&e.emit(fr(n),r)},dr=e=>{window.document.body.addEventListener("click",n=>{Re(e,"click",n)}),window.document.body.addEventListener("click",n=>{Re(e,"click:capture",n)},!0)},hr=(e,n)=>{const{instance:t}=n;switch(e.replace(ot,"")){case oe.SHOW:t.show();break;case oe.HIDE:t.hide();break;case oe.SCROLL_TO_VIEW:t.$el.scrollIntoView({behavior:"smooth"});break;case oe.SCROLL_TO_TOP:window.scrollTo({top:0,behavior:"smooth"});break}};class pr{constructor(){b(this,"data",{})}set(n,t){this.data[n]=t}get(n){return this.data[n]}}class Ve extends ee.EventEmitter{constructor(t){super();b(this,"data");b(this,"style");b(this,"events");b(this,"instance");b(this,"page");b(this,"parent");b(this,"app");b(this,"store",new pr);this.page=t.page,this.parent=t.parent,this.app=t.app;const{events:r}=t.config;this.data=t.config,this.events=r,this.listenLifeSafe(),this.once("destroy",()=>{this.instance=null,typeof this.data.destroy=="function"&&this.data.destroy(this),this.listenLifeSafe()})}listenLifeSafe(){this.once("created",async t=>{this.instance=t,await this.runCodeBlock("created")}),this.once("mounted",async t=>{this.instance=t;const r=this.app.eventQueueMap[t.config.id]||[];for(let i=r.shift();i;i=r.shift())this.app.eventHandler(i.eventConfig,i.fromCpt,i.args);await this.runCodeBlock("mounted")})}async runCodeBlock(t){var r,i,s,o;if(typeof this.data[t]=="function"){await this.data[t](this);return}if(!(((r=this.data[t])==null?void 0:r.hookType)!==st.CODE||!this.app.codeDsl||ur((i=this.app)==null?void 0:i.codeDsl)))for(const l of this.data[t].hookData){const{codeId:a,params:h={}}=l;this.app.codeDsl[a]&&typeof((o=(s=this.app)==null?void 0:s.codeDsl[a])==null?void 0:o.content)=="function"&&await this.app.codeDsl[a].content({app:this.app,params:h})}}}class gr extends Ve{constructor(t){super(t);b(this,"nodes",new Map);this.setNode(t.config.id,this),this.initNode(t.config,this)}initNode(t,r){var s;const i=new Ve({config:t,parent:r,page:this,app:this.app});this.setNode(t.id,i),(s=t.items)==null||s.forEach(o=>{this.initNode(o,i)})}getNode(t){return this.nodes.get(t)}setNode(t,r){this.nodes.set(t,r)}deleteNode(t){this.nodes.delete(t)}}const mr=e=>{if(typeof e!="string")return e;const n={};return e.split(";").forEach(t=>{if(!t)return;const r=t.split(":");let i=r.shift(),s=r.join(":");i&&(i=i.replace(/^\s*/,"").replace(/\s*$/,""),s=s.replace(/^\s*/,"").replace(/\s*$/,""),i=i.split("-").map((o,l)=>l>0?`${o[0].toUpperCase()}${o.substr(1)}`:o).join(""),n[i]=s)}),n},vr=e=>e&&!/^url/.test(e)&&!/^linear-gradient/.test(e)?`url(${e})`:e,yr=e=>/^(-?\d+)(\.\d+)?$/.test(e);let $r=class extends ee.EventEmitter{constructor(t){var r;super();b(this,"env");b(this,"codeDsl");b(this,"pages",new Map);b(this,"page");b(this,"platform","mobile");b(this,"jsEngine","browser");b(this,"designWidth",375);b(this,"components",new Map);b(this,"eventQueueMap",{});if(this.env=new cr(t.ua),this.codeDsl=(r=t.config)==null?void 0:r.codeBlocks,t.platform&&(this.platform=t.platform),t.jsEngine&&(this.jsEngine=t.jsEngine),t.designWidth&&(this.designWidth=t.designWidth),this.platform==="mobile"||this.platform==="editor"){const i=()=>{const{width:s}=document.documentElement.getBoundingClientRect(),o=s/(this.designWidth/100);document.documentElement.style.fontSize=`${o}px`};i(),document.body.style.fontSize="14px",globalThis.addEventListener("resize",i)}t.transformStyle&&(this.transformStyle=t.transformStyle),t.config&&this.setConfig(t.config,t.curPage),dr(this)}transformStyle(t){if(!t)return{};let r={};const i={};typeof t=="string"?r=mr(t):r={...t};const s=["zIndex","opacity","fontWeight"];return Object.entries(r).forEach(([o,l])=>{if(o==="backgroundImage")l&&(i[o]=vr(l));else if(o==="transform"&&typeof l!="string"){const a=Object.entries(l).map(([h,y])=>y.trim()?(h==="rotate"&&yr(y)&&(y=`${y}deg`),`${h}(${y})`):"").join(" ");i[o]=a.trim()?a:"none"}else!s.includes(o)&&l&&/^[-]?[0-9]*[.]?[0-9]*$/.test(l)?i[o]=`${l/100}rem`:i[o]=l}),i}setConfig(t,r){var i,s,o;this.codeDsl=t.codeBlocks,this.pages=new Map,(i=t.items)==null||i.forEach(l=>{this.pages.set(l.id,new gr({config:l,app:this}))}),this.setPage(r||((o=(s=this.page)==null?void 0:s.data)==null?void 0:o.id))}setPage(t){let r;t&&(r=this.pages.get(t)),r||(r=this.pages.get(this.pages.keys().next().value)),this.page=r,this.platform!=="magic"&&this.bindEvents()}registerComponent(t,r){this.components.set(t,r)}unregisterComponent(t){this.components.delete(t)}resolveComponent(t){return this.components.get(t)}bindEvents(){var t;if(this.page){this.removeAllListeners();for(const[,r]of this.page.nodes)(t=r.events)==null||t.forEach(i=>this.bindEvent(i,`${r.data.id}`))}}bindEvent(t,r){const{name:i}=t;this.on(`${i}_${r}`,(s,...o)=>{this.eventHandler(t,s,o)})}emit(t,r,...i){var s;return(s=r==null?void 0:r.data)!=null&&s.id?super.emit(`${String(t)}_${r.data.id}`,r,...i):super.emit(t,r,...i)}eventHandler(t,r,i){if(!this.page)throw new Error("当前没有页面");const{method:s,to:o}=t,l=this.page.getNode(o);if(!l)throw`ID为${o}的组件不存在`;if(lr(s))return hr(s,l);l.instance?typeof l.instance[s]=="function"&&l.instance[s](r,...i):this.addEventToMap({eventConfig:t,fromCpt:r,args:i})}destroy(){this.removeAllListeners(),this.pages.clear()}addEventToMap(t){this.eventQueueMap[t.eventConfig.to]?this.eventQueueMap[t.eventConfig.to].push(t):this.eventQueueMap[t.eventConfig.to]=[t]}};var ye={},br={get exports(){return ye},set exports(e){ye=e}};(function(e,n){(function(t,r){e.exports=r()})(Be,function(){var t=1e3,r=6e4,i=36e5,s="millisecond",o="second",l="minute",a="hour",h="day",y="week",$="month",D="quarter",S="year",C="date",d="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,H={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(p){var f=["th","st","nd","rd"],u=p%100;return"["+p+(f[(u-20)%10]||f[u]||f[0])+"]"}},P=function(p,f,u){var g=String(p);return!g||g.length>=f?p:""+Array(f+1-g.length).join(u)+p},re={s:P,z:function(p){var f=-p.utcOffset(),u=Math.abs(f),g=Math.floor(u/60),c=u%60;return(f<=0?"+":"-")+P(g,2,"0")+":"+P(c,2,"0")},m:function p(f,u){if(f.date()<u.date())return-p(u,f);var g=12*(u.year()-f.year())+(u.month()-f.month()),c=f.clone().add(g,$),v=u-c<0,m=f.clone().add(g+(v?-1:1),$);return+(-(g+(u-c)/(v?c-m:m-c))||0)},a:function(p){return p<0?Math.ceil(p)||0:Math.floor(p)},p:function(p){return{M:$,y:S,w:y,d:h,D:C,h:a,m:l,s:o,ms:s,Q:D}[p]||String(p||"").toLowerCase().replace(/s$/,"")},u:function(p){return p===void 0}},N="en",I={};I[N]=H;var U=function(p){return p instanceof ie},z=function p(f,u,g){var c;if(!f)return N;if(typeof f=="string"){var v=f.toLowerCase();I[v]&&(c=v),u&&(I[v]=u,c=v);var m=f.split("-");if(!c&&m.length>1)return p(m[0])}else{var w=f.name;I[w]=f,c=w}return!g&&c&&(N=c),c||!g&&N},M=function(p,f){if(U(p))return p.clone();var u=typeof f=="object"?f:{};return u.date=p,u.args=arguments,new ie(u)},T=re;T.l=z,T.i=U,T.w=function(p,f){return M(p,{locale:f.$L,utc:f.$u,x:f.$x,$offset:f.$offset})};var ie=function(){function p(u){this.$L=z(u.locale,null,!0),this.parse(u)}var f=p.prototype;return f.parse=function(u){this.$d=function(g){var c=g.date,v=g.utc;if(c===null)return new Date(NaN);if(T.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var m=c.match(A);if(m){var w=m[2]-1||0,_=(m[7]||"0").substring(0,3);return v?new Date(Date.UTC(m[1],w,m[3]||1,m[4]||0,m[5]||0,m[6]||0,_)):new Date(m[1],w,m[3]||1,m[4]||0,m[5]||0,m[6]||0,_)}}return new Date(c)}(u),this.$x=u.x||{},this.init()},f.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},f.$utils=function(){return T},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(u,g){var c=M(u);return this.startOf(g)<=c&&c<=this.endOf(g)},f.isAfter=function(u,g){return M(u)<this.startOf(g)},f.isBefore=function(u,g){return this.endOf(g)<M(u)},f.$g=function(u,g,c){return T.u(u)?this[g]:this.set(c,u)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(u,g){var c=this,v=!!T.u(g)||g,m=T.p(u),w=function(q,x){var R=T.w(c.$u?Date.UTC(c.$y,x,q):new Date(c.$y,x,q),c);return v?R:R.endOf(h)},_=function(q,x){return T.w(c.toDate()[q].apply(c.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(x)),c)},j=this.$W,L=this.$M,k=this.$D,W="set"+(this.$u?"UTC":"");switch(m){case S:return v?w(1,0):w(31,11);case $:return v?w(1,L):w(0,L+1);case y:var Q=this.$locale().weekStart||0,G=(j<Q?j+7:j)-Q;return w(v?k-G:k+(6-G),L);case h:case C:return _(W+"Hours",0);case a:return _(W+"Minutes",1);case l:return _(W+"Seconds",2);case o:return _(W+"Milliseconds",3);default:return this.clone()}},f.endOf=function(u){return this.startOf(u,!1)},f.$set=function(u,g){var c,v=T.p(u),m="set"+(this.$u?"UTC":""),w=(c={},c[h]=m+"Date",c[C]=m+"Date",c[$]=m+"Month",c[S]=m+"FullYear",c[a]=m+"Hours",c[l]=m+"Minutes",c[o]=m+"Seconds",c[s]=m+"Milliseconds",c)[v],_=v===h?this.$D+(g-this.$W):g;if(v===$||v===S){var j=this.clone().set(C,1);j.$d[w](_),j.init(),this.$d=j.set(C,Math.min(this.$D,j.daysInMonth())).$d}else w&&this.$d[w](_);return this.init(),this},f.set=function(u,g){return this.clone().$set(u,g)},f.get=function(u){return this[T.p(u)]()},f.add=function(u,g){var c,v=this;u=Number(u);var m=T.p(g),w=function(L){var k=M(v);return T.w(k.date(k.date()+Math.round(L*u)),v)};if(m===$)return this.set($,this.$M+u);if(m===S)return this.set(S,this.$y+u);if(m===h)return w(1);if(m===y)return w(7);var _=(c={},c[l]=r,c[a]=i,c[o]=t,c)[m]||1,j=this.$d.getTime()+u*_;return T.w(j,this)},f.subtract=function(u,g){return this.add(-1*u,g)},f.format=function(u){var g=this,c=this.$locale();if(!this.isValid())return c.invalidDate||d;var v=u||"YYYY-MM-DDTHH:mm:ssZ",m=T.z(this),w=this.$H,_=this.$m,j=this.$M,L=c.weekdays,k=c.months,W=function(x,R,fe,se){return x&&(x[R]||x(g,v))||fe[R].slice(0,se)},Q=function(x){return T.s(w%12||12,x,"0")},G=c.meridiem||function(x,R,fe){var se=x<12?"AM":"PM";return fe?se.toLowerCase():se},q={YY:String(this.$y).slice(-2),YYYY:this.$y,M:j+1,MM:T.s(j+1,2,"0"),MMM:W(c.monthsShort,j,k,3),MMMM:W(k,j),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:W(c.weekdaysMin,this.$W,L,2),ddd:W(c.weekdaysShort,this.$W,L,3),dddd:L[this.$W],H:String(w),HH:T.s(w,2,"0"),h:Q(1),hh:Q(2),a:G(w,_,!0),A:G(w,_,!1),m:String(_),mm:T.s(_,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:m};return v.replace(B,function(x,R){return R||q[x]||m.replace(":","")})},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(u,g,c){var v,m=T.p(g),w=M(u),_=(w.utcOffset()-this.utcOffset())*r,j=this-w,L=T.m(this,w);return L=(v={},v[S]=L/12,v[$]=L,v[D]=L/3,v[y]=(j-_)/6048e5,v[h]=(j-_)/864e5,v[a]=j/i,v[l]=j/r,v[o]=j/t,v)[m]||j,c?L:T.a(L)},f.daysInMonth=function(){return this.endOf($).$D},f.$locale=function(){return I[this.$L]},f.locale=function(u,g){if(!u)return this.$L;var c=this.clone(),v=z(u,g,!0);return v&&(c.$L=v),c},f.clone=function(){return T.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},p}(),we=ie.prototype;return M.prototype=we,[["$ms",s],["$s",o],["$m",l],["$H",a],["$W",h],["$M",$],["$y",S],["$D",C]].forEach(function(p){we[p[1]]=function(f){return this.$g(f,p[0],p[1])}}),M.extend=function(p,f){return p.$i||(p(f,ie,M),p.$i=!0),M},M.locale=z,M.isDayjs=U,M.unix=function(p){return M(1e3*p)},M.en=I[N],M.Ls=I,M.p={},M})})(br);const wr=ye;var $e={},Or={get exports(){return $e},set exports(e){$e=e}};(function(e,n){(function(t,r){e.exports=r()})(Be,function(){var t="minute",r=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(s,o,l){var a=o.prototype;l.utc=function(d){var A={date:d,utc:!0,args:arguments};return new o(A)},a.utc=function(d){var A=l(this.toDate(),{locale:this.$L,utc:!0});return d?A.add(this.utcOffset(),t):A},a.local=function(){return l(this.toDate(),{locale:this.$L,utc:!1})};var h=a.parse;a.parse=function(d){d.utc&&(this.$u=!0),this.$utils().u(d.$offset)||(this.$offset=d.$offset),h.call(this,d)};var y=a.init;a.init=function(){if(this.$u){var d=this.$d;this.$y=d.getUTCFullYear(),this.$M=d.getUTCMonth(),this.$D=d.getUTCDate(),this.$W=d.getUTCDay(),this.$H=d.getUTCHours(),this.$m=d.getUTCMinutes(),this.$s=d.getUTCSeconds(),this.$ms=d.getUTCMilliseconds()}else y.call(this)};var $=a.utcOffset;a.utcOffset=function(d,A){var B=this.$utils().u;if(B(d))return this.$u?0:B(this.$offset)?$.call(this):this.$offset;if(typeof d=="string"&&(d=function(N){N===void 0&&(N="");var I=N.match(r);if(!I)return null;var U=(""+I[0]).match(i)||["-",0,0],z=U[0],M=60*+U[1]+ +U[2];return M===0?0:z==="+"?M:-M}(d),d===null))return this;var H=Math.abs(d)<=16?60*d:d,P=this;if(A)return P.$offset=H,P.$u=d===0,P;if(d!==0){var re=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(P=this.local().add(H+re,t)).$offset=H,P.$x.$localOffset=re}else P=this.utc();return P};var D=a.format;a.format=function(d){var A=d||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return D.call(this,A)},a.valueOf=function(){var d=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*d},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var S=a.toDate;a.toDate=function(d){return d==="s"&&this.$offset?l(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():S.call(this)};var C=a.diff;a.diff=function(d,A,B){if(d&&this.$u===d.$u)return C.call(this,d,A,B);var H=this.local(),P=l(d).local();return C.call(H,P,A,B)}}})})(Or);const Tr=$e;wr.extend(Tr);const xr=(e="")=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),Z=(e,n=[])=>{const t=[],r=function(i,s){if(!Array.isArray(s))return null;for(let o=0,l=s.length;o<l;o++){const a=s[o];if(t.push(a),`${a.id}`==`${i}`)return a;if(a.items){const h=r(i,a.items);if(h)return h}t.pop()}return null};return r(e,n),t},Er=Vue.defineComponent({setup(){var l;const e=Vue.ref(),n=Vue.ref(),t=Vue.ref(),r=Vue.computed(()=>{var a,h,y,$;return((h=(a=e.value)==null?void 0:a.items)==null?void 0:h.find(D=>D.id===n.value))||(($=(y=e.value)==null?void 0:y.items)==null?void 0:$[0])}),i=document.documentElement.getBoundingClientRect().width,s=new $r({designWidth:i,config:e.value,platform:"editor"});globalThis.appInstance=s,Vue.provide("app",s),Vue.watch(r,async()=>{await Vue.nextTick();const a=document.querySelector(".ruomu-ui-page");a&&window.magic.onPageElUpdate(a)}),(l=window.magic)==null||l.onRuntimeReady({getApp(){return s},updateRootConfig(a){console.log("update config",a),e.value=a,s==null||s.setConfig(a,n.value)},updatePageId(a){console.log("update page id",a),n.value=a,s==null||s.setPage(a)},select(a){console.log("select config",a),t.value=a;const h=document.getElementById(`${a}`);return h||Vue.nextTick().then(()=>document.getElementById(`${a}`))},add({config:a,parentId:h}){var $,D,S;if(console.log("add config",a),!e.value)throw new Error("error");if(!t.value)throw new Error("error");if(!h)throw new Error("error");const y=Z(h,[e.value]).pop();if(!y)throw new Error("未找到父节点");if(y.id!==t.value){const C=($=y.items)==null?void 0:$.findIndex(d=>d.id===t.value);(D=y.items)==null||D.splice(C+1,0,a)}else(S=y.items)==null||S.push(a)},update({config:a,parentId:h}){var S;if(console.log("update config",a),!e.value)throw new Error("error");const y=Z(a.id,[e.value]).pop();if(!h)throw new Error("error");const $=Z(h,[e.value]).pop();if(!y)throw new Error("未找到目标节点");if(!$)throw new Error("未找到父节点");const D=(S=$.items)==null?void 0:S.findIndex(C=>C.id===y.id);$.items.splice(D,1,Vue.reactive(a))},remove({id:a,parentId:h}){var S;if(!e.value)throw new Error("error");const y=Z(a,[e.value]).pop();if(!y)throw new Error("未找到目标元素");const $=Z(h,[e.value]).pop();if(!$)throw new Error("未找到父元素");const D=(S=$.items)==null?void 0:S.findIndex(C=>C.id===y.id);$.items.splice(D,1)}});const o=Vue.reactive({});return{pageConfig:r,data:o}}}),Mr=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t};function jr(e,n,t,r,i,s){const o=Vue.resolveComponent("ruomu-ui-page");return e.pageConfig?(Vue.openBlock(),Vue.createBlock(o,{key:0,config:e.pageConfig,data:e.data},null,8,["config","data"])):Vue.createCommentVNode("",!0)}const _r=Mr(Er,[["render",jr]]);Promise.all([Te(()=>import("./comp-entry-4422c910.js"),["assets/comp-entry-4422c910.js","assets/comp-entry-b40b15d0.css"]),Te(()=>import("./plugin-entry-024afdea.js"),[])]).then(([e,n])=>{const t=Vue.createApp(_r);Object.entries(e.default).forEach(([r,i])=>{t.component(`ruomu-ui-${r}`,i)}),Object.values(n.default).forEach(r=>{t.use(r)}),t.mount("#app")});export{Mr as _,Lr as __vite_legacy_guard,xr as t};
//# sourceMappingURL=index-4644e95c.js.map