var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,i=(t,e)=>{for(var a in e||(e={}))r.call(e,a)&&o(t,a,e[a]);if(s)for(var a of s(e))n.call(e,a)&&o(t,a,e[a]);return t};import{S as l,i as p,s as u,j as c,k as m,e as d,t as g,m as f,n as w,c as $,a as b,g as h,d as j,o as k,f as y,D as O,h as v,v as x,r as C,w as D}from"../../chunks/vendor-34f00ee0.js";import{c as P,M as R}from"../../chunks/doc-810a2196.js";function E(t){let e,a,s,r,n;return e=new R({props:{title:`New Yorker Cartoon Caption Contest Attempt #${t[2]}: ${t[1]}`}}),{c(){c(e.$$.fragment),a=m(),s=d("h1"),r=g(t[0])},l(n){f(e.$$.fragment,n),a=w(n),s=$(n,"H1",{});var o=b(s);r=h(o,t[0]),o.forEach(j)},m(t,o){k(e,t,o),y(t,a,o),y(t,s,o),O(s,r),n=!0},p(t,[a]){const s={};6&a&&(s.title=`New Yorker Cartoon Caption Contest Attempt #${t[2]}: ${t[1]}`),e.$set(s),(!n||1&a)&&v(r,t[0])},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){C(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&j(a),t&&j(s)}}}const A=!1;async function N({page:t,fetch:s,session:r,context:n}){P.contest.map(((t,s)=>{return r=i({},t),e(r,a({attempt:s+1}));var r}));const o={slug:"test"};return o?{props:i({},o)}:{status:404,error:new Error(`Could not load ${url}`)}}function S(t,e,a){let{slug:s}=e,{date:r}=e,{title:n="test"}=e,{dek:o}=e,{image:i}=e,{attempt:l="test"}=e,{author:p}=e,{explanation:u}=e,{submission:c}=e,{widgetData:m}=e,{widgetResult:d}=e;return t.$$set=t=>{"slug"in t&&a(0,s=t.slug),"date"in t&&a(3,r=t.date),"title"in t&&a(1,n=t.title),"dek"in t&&a(4,o=t.dek),"image"in t&&a(5,i=t.image),"attempt"in t&&a(2,l=t.attempt),"author"in t&&a(6,p=t.author),"explanation"in t&&a(7,u=t.explanation),"submission"in t&&a(8,c=t.submission),"widgetData"in t&&a(9,m=t.widgetData),"widgetResult"in t&&a(10,d=t.widgetResult)},[s,n,l,r,o,i,p,u,c,m,d]}export default class extends l{constructor(t){super(),p(this,t,S,E,u,{slug:0,date:3,title:1,dek:4,image:5,attempt:2,author:6,explanation:7,submission:8,widgetData:9,widgetResult:10})}}export{A as hydrate,N as load};
