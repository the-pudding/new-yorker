var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,i=(t,e)=>{for(var r in e||(e={}))a.call(e,r)&&n(t,r,e[r]);if(s)for(var r of s(e))o.call(e,r)&&n(t,r,e[r]);return t};import{S as c,i as p,s as l,j as m,k as f,e as u,t as d,m as g,n as h,c as $,a as b,g as v,d as j,b as w,o as y,f as C,D as O,h as E,v as P,r as k,w as x}from"../../chunks/vendor-b67f10d3.js";import{c as A,M as D}from"../../chunks/doc-e64f87b6.js";function I(t){let e,r,s,a,o,n,i,c,p,l,A,I,M,N,S,V,Y,G,H,q,z,B;return e=new D({props:{title:`New Yorker Cartoon Caption Contest Attempt #${t[5]}: ${t[2]}`}}),{c(){m(e.$$.fragment),r=f(),s=u("div"),a=u("h2"),o=d("Attempt #"),n=d(t[5]),i=d(": "),c=d(t[2]),p=f(),l=u("p"),A=d("Contest #"),I=d(t[0]),M=d(", "),N=d(t[1]),S=f(),V=u("p"),Y=d(t[3]),G=f(),H=u("div"),q=u("img"),this.h()},l(m){g(e.$$.fragment,m),r=h(m),s=$(m,"DIV",{class:!0});var f=b(s);a=$(f,"H2",{});var u=b(a);o=v(u,"Attempt #"),n=v(u,t[5]),i=v(u,": "),c=v(u,t[2]),u.forEach(j),p=h(f),l=$(f,"P",{});var d=b(l);A=v(d,"Contest #"),I=v(d,t[0]),M=v(d,", "),N=v(d,t[1]),d.forEach(j),S=h(f),V=$(f,"P",{});var w=b(V);Y=v(w,t[3]),w.forEach(j),f.forEach(j),G=h(m),H=$(m,"DIV",{class:!0});var y=b(H);q=$(y,"IMG",{src:!0,alt:!0}),y.forEach(j),this.h()},h(){w(s,"class","info"),q.src!==(z=t[4])&&w(q,"src",z),w(q,"alt","captionless cartoon"),w(H,"class","prompt")},m(t,m){y(e,t,m),C(t,r,m),C(t,s,m),O(s,a),O(a,o),O(a,n),O(a,i),O(a,c),O(s,p),O(s,l),O(l,A),O(l,I),O(l,M),O(l,N),O(s,S),O(s,V),O(V,Y),C(t,G,m),C(t,H,m),O(H,q),B=!0},p(t,[r]){const s={};36&r&&(s.title=`New Yorker Cartoon Caption Contest Attempt #${t[5]}: ${t[2]}`),e.$set(s),(!B||32&r)&&E(n,t[5]),(!B||4&r)&&E(c,t[2]),(!B||1&r)&&E(I,t[0]),(!B||2&r)&&E(N,t[1]),(!B||8&r)&&E(Y,t[3]),(!B||16&r&&q.src!==(z=t[4]))&&w(q,"src",z)},i(t){B||(P(e.$$.fragment,t),B=!0)},o(t){k(e.$$.fragment,t),B=!1},d(t){x(e,t),t&&j(r),t&&j(s),t&&j(G),t&&j(H)}}}const M=!1;async function N({page:t,fetch:s,session:a,context:o}){const n=A.contest.map(((t,s)=>{return a=i({},t),e(a,r({attempt:s+1}));var a})).find((e=>e.slug===t.params.slug));return n?{props:i({},n)}:{status:404,error:new Error(`Could not load ${url}`)}}function S(t,e,r){let{slug:s}=e,{date:a}=e,{title:o}=e,{description:n}=e,{image:i}=e,{attempt:c}=e;return t.$$set=t=>{"slug"in t&&r(0,s=t.slug),"date"in t&&r(1,a=t.date),"title"in t&&r(2,o=t.title),"description"in t&&r(3,n=t.description),"image"in t&&r(4,i=t.image),"attempt"in t&&r(5,c=t.attempt)},[s,a,o,n,i,c]}export default class extends c{constructor(t){super(),p(this,t,S,I,l,{slug:0,date:1,title:2,description:3,image:4,attempt:5})}}export{M as hydrate,N as load};
