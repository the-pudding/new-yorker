function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,n,e,o,r,s,c){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(i){const r=a(n,e,o,c);t.p(r,i)}}const l="undefined"!=typeof window;let d=l?()=>window.performance.now():()=>Date.now(),h=l?t=>requestAnimationFrame(t):t;const p=new Set;function $(t){p.forEach((n=>{n.c(t)||(p.delete(n),n.f())})),0!==p.size&&h($)}function m(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function _(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(){return v(" ")}function w(){return v("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function C(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):b(n)}function S(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return v(n)}function j(t){return S(t," ")}function O(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function N(t,n){t.value=null==n?"":n}function P(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function R(t,n,e){t.classList[e?"add":"remove"](n)}function q(t,n=document.body){return Array.from(n.querySelectorAll(t))}const z=new Set;let L,T=0;function D(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),T-=r,T||h((()=>{T||(z.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),z.clear())})))}function F(t){L=t}function M(){if(!L)throw new Error("Function called outside component initialization");return L}function B(t){M().$$.on_mount.push(t)}function G(t){M().$$.after_update.push(t)}function H(t,n){M().$$.context.set(t,n)}function I(t){return M().$$.context.get(t)}const J=[],K=[],Q=[],U=[],V=Promise.resolve();let W=!1;function X(t){Q.push(t)}function Y(t){U.push(t)}let Z=!1;const tt=new Set;function nt(){if(!Z){Z=!0;do{for(let t=0;t<J.length;t+=1){const n=J[t];F(n),et(n.$$)}for(F(null),J.length=0;K.length;)K.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];tt.has(n)||(tt.add(n),n())}Q.length=0}while(J.length);for(;U.length;)U.pop()();W=!1,Z=!1,tt.clear()}}function et(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}let ot;function rt(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const st=new Set;let ct;function it(){ct={r:0,c:[],p:ct}}function ut(){ct.r||s(ct.c),ct=ct.p}function at(t,n){t&&t.i&&(st.delete(t),t.i(n))}function ft(t,n,e,o){if(t&&t.o){if(st.has(t))return;st.add(t),ct.c.push((()=>{st.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const lt={duration:0};function dt(e,o,r){let s,i,u=o(e,r),a=!1,f=0;function l(){s&&D(e,s)}function m(){const{delay:o=0,duration:r=300,easing:c=n,tick:m=t,css:g}=u||lt;g&&(s=function(t,n,e,o,r,s,c,i=0){const u=16.666/o;let a="{\n";for(let m=0;m<=1;m+=u){const t=n+(e-n)*s(m);a+=100*m+`%{${c(t,1-t)}}\n`}const f=a+`100% {${c(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${i}`,d=t.ownerDocument;z.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(b("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,h.insertRule(`@keyframes ${l} ${f}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${l} ${o}ms linear ${r}ms 1 both`,T+=1,l}(e,0,1,r,o,c,g,f++)),m(0,1);const y=d()+o,_=y+r;i&&i.abort(),a=!0,X((()=>rt(e,!0,"start"))),i=function(t){let n;return 0===p.size&&h($),{promise:new Promise((e=>{p.add(n={c:t,f:e})})),abort(){p.delete(n)}}}((t=>{if(a){if(t>=_)return m(1,0),rt(e,!0,"end"),l(),a=!1;if(t>=y){const n=c((t-y)/r);m(n,1-n)}}return a}))}let g=!1;return{start(){g||(D(e),c(u)?(u=u(),(ot||(ot=Promise.resolve(),ot.then((()=>{ot=null}))),ot).then(m)):m())},invalidate(){g=!1},end(){a&&(l(),a=!1)}}}function ht(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function pt(t){return"object"==typeof t&&null!==t?t:{}}function $t(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function mt(t){t&&t.c()}function gt(t,n){t&&t.l(n)}function yt(t,n,e,r){const{fragment:i,on_mount:u,on_destroy:a,after_update:f}=t.$$;i&&i.m(n,e),r||X((()=>{const n=u.map(o).filter(c);a?a.push(...n):s(n),t.$$.on_mount=[]})),f.forEach(X)}function _t(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function bt(t,n){-1===t.$$.dirty[0]&&(J.push(t),W||(W=!0,V.then(nt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function vt(n,e,o,c,i,u,a=[-1]){const f=L;F(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&bt(n,t)),e})):[],l.update(),d=!0,s(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=A(e.target);l.fragment&&l.fragment.l(t),t.forEach(y)}else l.fragment&&l.fragment.c();e.intro&&at(n.$$.fragment),yt(n,e.target,e.anchor,e.customElement),nt()}F(f)}class xt{$destroy(){_t(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const wt=[];function Et(n,e=t){let o;const r=[];function s(t){if(i(n,t)&&(n=t,o)){const t=!wt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),wt.push(t,n)}if(t){for(let t=0;t<wt.length;t+=2)wt[t][0](wt[t+1]);wt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const u=[c,i];return r.push(u),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function kt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*s}}export{e as A,it as B,Et as C,u as D,f as E,m as F,t as G,E as H,R as I,_ as J,P as K,X as L,dt as M,Y as N,K as O,$t as P,kt as Q,N as R,xt as S,s as T,I as U,q as V,A as a,k as b,C as c,y as d,b as e,g as f,S as g,O as h,vt as i,mt as j,x as k,w as l,gt as m,j as n,yt as o,ht as p,pt as q,ft as r,i as s,v as t,ut as u,at as v,_t as w,H as x,G as y,B as z};