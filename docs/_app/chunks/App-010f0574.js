var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(s)for(var a of s(t))n.call(t,a)&&r(e,a,t[a]);return e},c=(e,s)=>t(e,a(s));import{S as i,i as h,s as u,e as f,t as d,k as p,c as m,a as v,g,d as E,n as $,b as w,f as b,D as y,E as k,h as I,I as x,J as P,K as T,B as A,r as D,u as j,v as L,z as N,L as _,M,j as O,m as S,o as V,N as C,w as H,l as R,O as U,P as F,Q as q,A as G,p as W,q as z}from"./vendor-b67f10d3.js";import{c as Y}from"./doc-02848fd5.js";import{_ as B}from"./preload-helper-9f12a5fd.js";import{w as K}from"./wordmark-0849a013.js";function J(e){let t,a,s,l,n,r,o,c,i,h,u,I,x,P,T=Y.hed+"",A=Y.dek+"",D=Y.details+"";return{c(){t=f("section"),a=f("div"),s=f("h1"),l=d(T),n=p(),r=f("p"),o=d(A),c=p(),i=f("details"),h=f("summary"),u=f("span"),I=d("New here? Learn about the experiment."),x=p(),P=f("span"),this.h()},l(e){t=m(e,"SECTION",{class:!0});var f=v(t);a=m(f,"DIV",{class:!0});var d=v(a);s=m(d,"H1",{class:!0});var p=v(s);l=g(p,T),p.forEach(E),n=$(d),r=m(d,"P",{});var w=v(r);o=g(w,A),w.forEach(E),c=$(d),i=m(d,"DETAILS",{class:!0});var b=v(i);h=m(b,"SUMMARY",{});var y=v(h);u=m(y,"SPAN",{});var k=v(u);I=g(k,"New here? Learn about the experiment."),k.forEach(E),y.forEach(E),x=$(b),P=m(b,"SPAN",{}),v(P).forEach(E),b.forEach(E),d.forEach(E),f.forEach(E),this.h()},h(){w(s,"class","svelte-j43njh"),w(i,"class","sm"),w(a,"class","col"),w(t,"class","svelte-j43njh")},m(e,f){b(e,t,f),y(t,a),y(a,s),y(s,l),y(a,n),y(a,r),y(r,o),y(a,c),y(a,i),y(i,h),y(h,u),y(u,I),y(i,x),y(i,P),P.innerHTML=D},p:k,i:k,o:k,d(e){e&&E(t)}}}class Q extends i{constructor(e){super(),h(this,e,null,J,u,{})}}function X(e,t,a){const s=e.slice();return s[12]=t[a],s}function Z(e){let t,a;return{c(){t=f("div"),a=d(e[1]),this.h()},l(s){t=m(s,"DIV",{class:!0,id:!0});var l=v(t);a=g(l,e[1]),l.forEach(E),this.h()},h(){w(t,"class","legend svelte-bahxhc"),w(t,"id","groupd-"+e[6])},m(e,s){b(e,t,s),y(t,a)},p(e,t){2&t&&I(a,e[1])},d(e){e&&E(t)}}}function ee(e){let t,a,s,l,n,r,o,c,i,h,u,k,P,T=(e[12].label||e[12].value)+"";return{c(){t=f("div"),a=f("input"),n=p(),r=f("label"),o=d(T),u=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var s=v(t);a=m(s,"INPUT",{type:!0,id:!0,name:!0,class:!0,value:!0,disabled:!0}),n=$(s),r=m(s,"LABEL",{class:!0,for:!0,"data-emoji":!0});var l=v(r);o=g(l,T),l.forEach(E),u=$(s),s.forEach(E),this.h()},h(){w(a,"type","radio"),w(a,"id",s=`${e[6]}-${e[12].slug}`),w(a,"name","name-"+e[6]),w(a,"class","sr-only svelte-bahxhc"),a.__value=l=e[12].value,a.value=a.__value,a.disabled=e[3],e[10][0].push(a),w(r,"class",c="sm option "+e[2]+" svelte-bahxhc"),w(r,"for",i=`${e[6]}-${e[12].slug}`),w(r,"data-emoji",h=e[12].emoji),w(t,"class","option svelte-bahxhc")},m(s,l){b(s,t,l),y(t,a),a.checked=a.__value===e[0],y(t,n),y(t,r),y(r,o),y(t,u),k||(P=x(a,"change",e[9]),k=!0)},p(e,t){16&t&&s!==(s=`${e[6]}-${e[12].slug}`)&&w(a,"id",s),16&t&&l!==(l=e[12].value)&&(a.__value=l,a.value=a.__value),8&t&&(a.disabled=e[3]),1&t&&(a.checked=a.__value===e[0]),16&t&&T!==(T=(e[12].label||e[12].value)+"")&&I(o,T),4&t&&c!==(c="sm option "+e[2]+" svelte-bahxhc")&&w(r,"class",c),16&t&&i!==(i=`${e[6]}-${e[12].slug}`)&&w(r,"for",i),16&t&&h!==(h=e[12].emoji)&&w(r,"data-emoji",h)},d(s){s&&E(t),e[10][0].splice(e[10][0].indexOf(a),1),k=!1,P()}}}function te(e){let t,a,s,l,n=e[1]&&Z(e),r=e[4],o=[];for(let c=0;c<r.length;c+=1)o[c]=ee(X(e,r,c));return{c(){t=f("div"),a=f("div"),n&&n.c(),s=p(),l=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var r=v(t);a=m(r,"DIV",{id:!0,class:!0,role:!0,"aria-labelledby":!0});var c=v(a);n&&n.l(c),s=$(c),l=m(c,"DIV",{class:!0});var i=v(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach(E),c.forEach(E),r.forEach(E),this.h()},h(){w(l,"class","options svelte-bahxhc"),w(a,"id",`group-${e[6]}`),w(a,"class","group svelte-bahxhc"),w(a,"role","radiogroup"),w(a,"aria-labelledby",`label-${e[6]}`),P(a,"is-top",e[5]),w(t,"class","button-set svelte-bahxhc")},m(e,r){b(e,t,r),y(t,a),n&&n.m(a,null),y(a,s),y(a,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(e[1]?n?n.p(e,t):(n=Z(e),n.c(),n.m(a,s)):n&&(n.d(1),n=null),93&t){let a;for(r=e[4],a=0;a<r.length;a+=1){const s=X(e,r,a);o[a]?o[a].p(s,t):(o[a]=ee(s),o[a].c(),o[a].m(l,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}32&t&&P(a,"is-top",e[5])},i:k,o:k,d(e){e&&E(t),n&&n.d(),T(o,e)}}}function ae(e,t,a){let s,l,{options:n=[]}=t,{legend:r=""}=t,{legendPosition:i="top"}=t,{labelClass:h=""}=t,{disabled:u=!1}=t,{value:f=""}=t;const d=`legend-${Math.floor(1e6*Math.random())}`,p=(e="")=>`${e}`.toLowerCase().replace(/\W/g,"");return e.$$set=e=>{"options"in e&&a(7,n=e.options),"legend"in e&&a(1,r=e.legend),"legendPosition"in e&&a(8,i=e.legendPosition),"labelClass"in e&&a(2,h=e.labelClass),"disabled"in e&&a(3,u=e.disabled),"value"in e&&a(0,f=e.value)},e.$$.update=()=>{128&e.$$.dirty&&a(4,s=n.map((e=>c(o({},e),{val:e.value,slug:p(e.value)})))),256&e.$$.dirty&&a(5,l="top"===i)},[f,r,h,u,s,l,d,n,i,function(){f=this.__value,a(0,f)},[[]]]}class se extends i{constructor(e){super(),h(this,e,ae,te,u,{options:7,legend:1,legendPosition:8,labelClass:2,disabled:3,value:0})}}function le(e){let t,a,s,l;return{c(){t=f("div"),a=f("p"),s=d("Thanks for voting!"),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);a=m(l,"P",{});var n=v(a);s=g(n,"Thanks for voting!"),n.forEach(E),l.forEach(E),this.h()},h(){w(t,"class","thanks svelte-4kqfk6")},m(e,l){b(e,t,l),y(t,a),y(a,s)},p:k,i(e){l||_((()=>{l=M(t,q,{}),l.start()}))},o:k,d(e){e&&E(t)}}}function ne(e){let t,a,s,l,n,r,o,c,i=e[1]+1+"",h=e[2].length+"",x=e[1],P=re(e);return{c(){t=f("p"),a=d("Caption "),s=d(i),l=d(" of "),n=d(h),r=p(),P.c(),o=R(),this.h()},l(e){t=m(e,"P",{class:!0});var c=v(t);a=g(c,"Caption "),s=g(c,i),l=g(c," of "),n=g(c,h),c.forEach(E),r=$(e),P.l(e),o=R(),this.h()},h(){w(t,"class","counter sm svelte-4kqfk6")},m(e,i){b(e,t,i),y(t,a),y(t,s),y(t,l),y(t,n),b(e,r,i),P.m(e,i),b(e,o,i),c=!0},p(e,t){(!c||2&t)&&i!==(i=e[1]+1+"")&&I(s,i),2&t&&u(x,x=e[1])?(A(),D(P,1,1,k),j(),P=re(e),P.c(),L(P),P.m(o.parentNode,o)):P.p(e,t)},i(e){c||(L(P),c=!0)},o(e){D(P),c=!1},d(e){e&&E(t),e&&E(r),e&&E(o),P.d(e)}}}function re(e){let t,a,s,l,n,r,o,c,i,h,u,k,x=e[2][e[1]].text+"";function P(t){e[5](t)}let T={options:[{value:0,label:"It stinks!",emoji:"😴"},{value:1,label:"It’s okay...",emoji:"😐"},{value:2,label:"It works!",emoji:"😂"}]};return void 0!==e[0]&&(T.value=e[0]),i=new se({props:T}),U.push((()=>F(i,"value",P))),{c(){t=f("div"),a=f("p"),s=d(x),l=p(),n=f("p"),r=d("Is this A.I.-generated caption funny?"),o=p(),c=f("div"),O(i.$$.fragment),this.h()},l(e){t=m(e,"DIV",{});var h=v(t);a=m(h,"P",{class:!0});var u=v(a);s=g(u,x),u.forEach(E),l=$(h),n=m(h,"P",{class:!0});var f=v(n);r=g(f,"Is this A.I.-generated caption funny?"),f.forEach(E),o=$(h),c=m(h,"DIV",{class:!0});var d=v(c);S(i.$$.fragment,d),d.forEach(E),h.forEach(E),this.h()},h(){w(a,"class","caption svelte-4kqfk6"),w(n,"class","prompt sm svelte-4kqfk6"),w(c,"class","vote svelte-4kqfk6")},m(e,h){b(e,t,h),y(t,a),y(a,s),y(t,l),y(t,n),y(n,r),y(t,o),y(t,c),V(i,c,null),k=!0},p(e,t){(!k||2&t)&&x!==(x=e[2][e[1]].text+"")&&I(s,x);const a={};!h&&1&t&&(h=!0,a.value=e[0],C((()=>h=!1))),i.$set(a)},i(e){k||(L(i.$$.fragment,e),u||_((()=>{u=M(t,q,{}),u.start()})),k=!0)},o(e){D(i.$$.fragment,e),k=!1},d(e){e&&E(t),H(i)}}}function oe(e){let t,a,s,l;const n=[ne,le],r=[];function o(e,t){return e[1]<e[2].length?0:1}return a=o(e),s=r[a]=n[a](e),{c(){t=f("div"),s.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var a=v(t);s.l(a),a.forEach(E),this.h()},h(){w(t,"class","wrapper svelte-4kqfk6")},m(e,s){b(e,t,s),r[a].m(t,null),l=!0},p(e,[l]){let c=a;a=o(e),a===c?r[a].p(e,l):(A(),D(r[c],1,1,(()=>{r[c]=null})),j(),s=r[a],s?s.p(e,l):(s=r[a]=n[a](e),s.c()),L(s,1),s.m(t,null))},i(e){l||(L(s),l=!0)},o(e){D(s),l=!1},d(e){e&&E(t),r[a].d()}}}function ce(e,t,a){let s,{slug:l}=t,{data:n}=t,r=["unfunny","neutral","funny"],o=0;const c=n.map(((e,t)=>({text:e,id:t}))),i={apiKey:"AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",authDomain:"new-yorker-da6db.firebaseapp.com",projectId:"new-yorker-da6db"};let h,u,f;return N((async()=>{const e=await B((()=>import("./index.esm-558ce47f.js")),["/projects/caption-contest/_app/chunks/index.esm-558ce47f.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]);h=e.default,await B((()=>import("./index.esm-f9bc68b8.js")),["/projects/caption-contest/_app/chunks/index.esm-f9bc68b8.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]),h.apps.length||(u=h.initializeApp(i),f=h.firestore(u))})),e.$$set=e=>{"slug"in e&&a(3,l=e.slug),"data"in e&&a(4,n=e.data)},e.$$.update=()=>{1&e.$$.dirty&&"number"==typeof s&&(()=>{const{id:e}=c[o],t=f.collection(l).doc(`${e}`),n=r[s];t.update({[[n]]:h.firestore.FieldValue.increment(1)}),a(0,s=void 0),a(1,o+=1)})()},function(e){let t=0,a=e.length-(t=+t);for(;a;){const s=Math.random()*a--|0,l=e[a+t];e[a+t]=e[s+t],e[s+t]=l}}(c),[s,o,c,l,n,function(e){s=e,a(0,s)}]}class ie extends i{constructor(e){super(),h(this,e,ce,oe,u,{slug:3,data:4})}}function he(e,t,a){const s=e.slice();return s[9]=t[a].type,s[10]=t[a].value,s}function ue(e){let t,a,s=e[10].replace("\\:",":")+"";return{c(){t=f("p"),a=p()},l(e){t=m(e,"P",{}),v(t).forEach(E),a=$(e)},m(e,l){b(e,t,l),t.innerHTML=s,b(e,a,l)},p(e,a){64&a&&s!==(s=e[10].replace("\\:",":")+"")&&(t.innerHTML=s)},d(e){e&&E(t),e&&E(a)}}}function fe(e){let t,a;return t=new ie({props:{slug:e[0],data:e[8]}}),{c(){O(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,s){V(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.slug=e[0]),256&a&&(s.data=e[8]),t.$set(s)},i(e){a||(L(t.$$.fragment,e),a=!0)},o(e){D(t.$$.fragment,e),a=!1},d(e){H(t,e)}}}function de(e){let t,a,s,l,n,r,o,c,i,h,u,k,x,P,N,_,M,O,S,V,C,H,R,U,F,q,G,W,z,Y,B,K,J,Q,X,Z,ee,te,ae,se,le=e[6],ne=[];for(let f=0;f<le.length;f+=1)ne[f]=ue(he(e,le,f));let re="IsThisFunny"===e[7]&&fe(e);return{c(){t=f("section"),a=f("div"),s=f("div"),l=f("p"),n=p(),r=f("p"),o=p(),c=f("details"),i=f("summary"),h=f("span"),u=d("For the tech-nerds, here is how it works."),k=p(),x=f("span");for(let e=0;e<ne.length;e+=1)ne[e].c();P=p(),N=f("div"),_=f("h2"),M=d("Help the computer submit its best caption to this week’s contest."),O=p(),S=f("figure"),V=f("figcaption"),C=f("a"),H=d("#"),R=d(e[0]),U=d(": Here is the cartoon for\n          "),F=d(e[1]),q=d(" by "),G=d(e[5]),W=p(),z=f("img"),K=p(),re&&re.c(),J=p(),Q=f("div"),X=f("p"),Z=d("We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ee=p(),te=f("p"),ae=d("Come back next week to vote on captions for a new cartoon and see how our approach evolves."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);a=m(d,"DIV",{class:!0});var p=v(a);s=m(p,"DIV",{class:!0});var w=v(s);l=m(w,"P",{}),v(l).forEach(E),n=$(w),r=m(w,"P",{class:!0}),v(r).forEach(E),o=$(w),c=m(w,"DETAILS",{class:!0});var b=v(c);i=m(b,"SUMMARY",{});var y=v(i);h=m(y,"SPAN",{});var I=v(h);u=g(I,"For the tech-nerds, here is how it works."),I.forEach(E),y.forEach(E),k=$(b),x=m(b,"SPAN",{});var T=v(x);for(let e=0;e<ne.length;e+=1)ne[e].l(T);T.forEach(E),b.forEach(E),w.forEach(E),P=$(p),N=m(p,"DIV",{class:!0});var A=v(N);_=m(A,"H2",{});var D=v(_);M=g(D,"Help the computer submit its best caption to this week’s contest."),D.forEach(E),O=$(A),S=m(A,"FIGURE",{class:!0});var j=v(S);V=m(j,"FIGCAPTION",{class:!0});var L=v(V);C=m(L,"A",{href:!0});var Y=v(C);H=g(Y,"#"),R=g(Y,e[0]),Y.forEach(E),U=g(L,": Here is the cartoon for\n          "),F=g(L,e[1]),q=g(L," by "),G=g(L,e[5]),L.forEach(E),W=$(j),z=m(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach(E),K=$(A),re&&re.l(A),A.forEach(E),J=$(p),Q=m(p,"DIV",{class:!0});var B=v(Q);X=m(B,"P",{});var se=v(X);Z=g(se,"We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),se.forEach(E),ee=$(B),te=m(B,"P",{});var le=v(te);ae=g(le,"Come back next week to vote on captions for a new cartoon and see how our approach evolves."),le.forEach(E),B.forEach(E),p.forEach(E),d.forEach(E),this.h()},h(){w(r,"class","sm"),w(c,"class","sm"),w(s,"class","info"),w(C,"href","https://www.newyorker.com/cartoons/contest"),w(V,"class","sm svelte-1vw6wl0"),z.src!==(Y=e[4])&&w(z,"src",Y),w(z,"alt",B="captionless cartoon by "+e[5]),w(z,"class","svelte-1vw6wl0"),w(S,"class","svelte-1vw6wl0"),w(N,"class","prompt svelte-1vw6wl0"),w(Q,"class","submit sm"),w(a,"class","col"),w(t,"class","svelte-1vw6wl0")},m(f,d){b(f,t,d),y(t,a),y(a,s),y(s,l),l.innerHTML=e[2],y(s,n),y(s,r),r.innerHTML=e[3],y(s,o),y(s,c),y(c,i),y(i,h),y(h,u),y(c,k),y(c,x);for(let e=0;e<ne.length;e+=1)ne[e].m(x,null);y(a,P),y(a,N),y(N,_),y(_,M),y(N,O),y(N,S),y(S,V),y(V,C),y(C,H),y(C,R),y(V,U),y(V,F),y(V,q),y(V,G),y(S,W),y(S,z),y(N,K),re&&re.m(N,null),y(a,J),y(a,Q),y(Q,X),y(X,Z),y(Q,ee),y(Q,te),y(te,ae),se=!0},p(e,[t]){if((!se||4&t)&&(l.innerHTML=e[2]),(!se||8&t)&&(r.innerHTML=e[3]),64&t){let a;for(le=e[6],a=0;a<le.length;a+=1){const s=he(e,le,a);ne[a]?ne[a].p(s,t):(ne[a]=ue(s),ne[a].c(),ne[a].m(x,null))}for(;a<ne.length;a+=1)ne[a].d(1);ne.length=le.length}(!se||1&t)&&I(R,e[0]),(!se||2&t)&&I(F,e[1]),(!se||32&t)&&I(G,e[5]),(!se||16&t&&z.src!==(Y=e[4]))&&w(z,"src",Y),(!se||32&t&&B!==(B="captionless cartoon by "+e[5]))&&w(z,"alt",B),"IsThisFunny"===e[7]?re?(re.p(e,t),128&t&&L(re,1)):(re=fe(e),re.c(),L(re,1),re.m(N,null)):re&&(A(),D(re,1,1,(()=>{re=null})),j())},i(e){se||(L(re),se=!0)},o(e){D(re),se=!1},d(e){e&&E(t),T(ne,e),re&&re.d()}}}function pe(e,t,a){let{slug:s}=t,{date:l}=t,{hed:n}=t,{dek:r}=t,{image:o}=t,{author:c}=t,{explanation:i}=t,{widgetName:h}=t,{widgetData:u}=t;return e.$$set=e=>{"slug"in e&&a(0,s=e.slug),"date"in e&&a(1,l=e.date),"hed"in e&&a(2,n=e.hed),"dek"in e&&a(3,r=e.dek),"image"in e&&a(4,o=e.image),"author"in e&&a(5,c=e.author),"explanation"in e&&a(6,i=e.explanation),"widgetName"in e&&a(7,h=e.widgetName),"widgetData"in e&&a(8,u=e.widgetData)},[s,l,n,r,o,c,i,h,u]}class me extends i{constructor(e){super(),h(this,e,pe,de,u,{slug:0,date:1,hed:2,dek:3,image:4,author:5,explanation:6,widgetName:7,widgetData:8})}}function ve(e,t,a){const s=e.slice();return s[1]=t[a].slug,s[2]=t[a].title,s}function ge(e){let t,a,s,l,n,r,o=e[0],c=[];for(let i=0;i<o.length;i+=1)c[i]=Ee(ve(e,o,i));return{c(){t=f("div"),a=f("div"),s=f("p"),l=d("Each week we try a new attempt!"),n=p(),r=f("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=m(e,"DIV",{id:!0});var o=v(t);a=m(o,"DIV",{class:!0});var i=v(a);s=m(i,"P",{});var h=v(s);l=g(h,"Each week we try a new attempt!"),h.forEach(E),n=$(i),r=m(i,"UL",{});var u=v(r);for(let t=0;t<c.length;t+=1)c[t].l(u);u.forEach(E),i.forEach(E),o.forEach(E),this.h()},h(){w(a,"class","col"),w(t,"id","archive")},m(e,o){b(e,t,o),y(t,a),y(a,s),y(s,l),y(a,n),y(a,r);for(let t=0;t<c.length;t+=1)c[t].m(r,null)},p(e,t){if(1&t){let a;for(o=e[0],a=0;a<o.length;a+=1){const s=ve(e,o,a);c[a]?c[a].p(s,t):(c[a]=Ee(s),c[a].c(),c[a].m(r,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=o.length}},d(e){e&&E(t),T(c,e)}}}function Ee(e){let t,a,s,l,n,r,o,c=e[1]+"",i=e[2]+"";return{c(){t=f("li"),a=f("a"),s=d("#"),l=d(c),n=d(": "),r=d(i),this.h()},l(e){t=m(e,"LI",{});var o=v(t);a=m(o,"A",{href:!0});var h=v(a);s=g(h,"#"),l=g(h,c),n=g(h,": "),r=g(h,i),h.forEach(E),o.forEach(E),this.h()},h(){w(a,"href",o="/contests/"+e[1])},m(e,o){b(e,t,o),y(t,a),y(a,s),y(a,l),y(a,n),y(a,r)},p(e,t){1&t&&c!==(c=e[1]+"")&&I(l,c),1&t&&i!==(i=e[2]+"")&&I(r,i),1&t&&o!==(o="/contests/"+e[1])&&w(a,"href",o)},d(e){e&&E(t)}}}function $e(e){let t,a=e[0].length&&ge(e);return{c(){a&&a.c(),t=R()},l(e){a&&a.l(e),t=R()},m(e,s){a&&a.m(e,s),b(e,t,s)},p(e,[s]){e[0].length?a?a.p(e,s):(a=ge(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:k,o:k,d(e){a&&a.d(e),e&&E(t)}}}function we(e,t,a){let{data:s}=t;return e.$$set=e=>{"data"in e&&a(0,s=e.data)},[s]}class be extends i{constructor(e){super(),h(this,e,we,$e,u,{data:0})}}function ye(e,t,a){const s=e.slice();return s[3]=t[a].value,s}function ke(e){let t,a=e[3]+"";return{c(){t=f("p")},l(e){t=m(e,"P",{}),v(t).forEach(E)},m(e,s){b(e,t,s),t.innerHTML=a},p(e,s){2&s&&a!==(a=e[3]+"")&&(t.innerHTML=a)},d(e){e&&E(t)}}}function Ie(e){let t,a,s,l,n,r,o,c,i,h,u,x,P,A,D,j,L,N,_,M,O,S,V,C,H=e[1],R=[];for(let f=0;f<H.length;f+=1)R[f]=ke(ye(e,H,f));return{c(){t=f("section"),a=f("div"),s=f("p"),l=d("Why are we doing this?"),n=p(),r=f("p"),o=f("strong"),c=d("TLDR:"),i=p(),h=d(e[0]),u=p(),x=f("details"),P=f("summary"),A=d("And if you want, here’s the long version."),D=p(),j=f("span");for(let e=0;e<R.length;e+=1)R[e].c();L=p(),N=f("p"),_=p(),M=f("p"),O=d("Want to see another experiment with GPT-3? Check out "),S=f("a"),V=d("Nothing Breaks Like A.I. Heart"),C=d("."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);a=m(d,"DIV",{class:!0});var p=v(a);s=m(p,"P",{});var w=v(s);l=g(w,"Why are we doing this?"),w.forEach(E),n=$(p),r=m(p,"P",{class:!0});var b=v(r);o=m(b,"STRONG",{});var y=v(o);c=g(y,"TLDR:"),y.forEach(E),i=$(b),h=g(b,e[0]),b.forEach(E),u=$(p),x=m(p,"DETAILS",{class:!0});var k=v(x);P=m(k,"SUMMARY",{});var I=v(P);A=g(I,"And if you want, here’s the long version."),I.forEach(E),D=$(k),j=m(k,"SPAN",{});var T=v(j);for(let e=0;e<R.length;e+=1)R[e].l(T);T.forEach(E),k.forEach(E),L=$(p),N=m(p,"P",{class:!0}),v(N).forEach(E),_=$(p),M=m(p,"P",{class:!0});var H=v(M);O=g(H,"Want to see another experiment with GPT-3? Check out "),S=m(H,"A",{href:!0});var U=v(S);V=g(U,"Nothing Breaks Like A.I. Heart"),U.forEach(E),C=g(H,"."),H.forEach(E),p.forEach(E),d.forEach(E),this.h()},h(){w(r,"class","sm"),w(x,"class","sm"),w(N,"class","sm"),w(S,"href","https://pudding.cool/2021/03/love-and-ai/"),w(M,"class","sm"),w(a,"class","col"),w(t,"class","svelte-bee32q")},m(f,d){b(f,t,d),y(t,a),y(a,s),y(s,l),y(a,n),y(a,r),y(r,o),y(o,c),y(r,i),y(r,h),y(a,u),y(a,x),y(x,P),y(P,A),y(x,D),y(x,j);for(let e=0;e<R.length;e+=1)R[e].m(j,null);y(a,L),y(a,N),N.innerHTML=e[2],y(a,_),y(a,M),y(M,O),y(M,S),y(S,V),y(M,C)},p(e,[t]){if(1&t&&I(h,e[0]),2&t){let a;for(H=e[1],a=0;a<H.length;a+=1){const s=ye(e,H,a);R[a]?R[a].p(s,t):(R[a]=ke(s),R[a].c(),R[a].m(j,null))}for(;a<R.length;a+=1)R[a].d(1);R.length=H.length}4&t&&(N.innerHTML=e[2])},i:k,o:k,d(e){e&&E(t),T(R,e)}}}function xe(e,t,a){let{tldr:s}=t,{full:l}=t,{credits:n}=t;return e.$$set=e=>{"tldr"in e&&a(0,s=e.tldr),"full"in e&&a(1,l=e.full),"credits"in e&&a(2,n=e.credits)},[s,l,n]}class Pe extends i{constructor(e){super(),h(this,e,xe,Ie,u,{tldr:0,full:1,credits:2})}}function Te(e,t,a){const s=e.slice();return s[5]=t[a],s}function Ae(e,t,a){const s=e.slice();return s[8]=t[a].hed,s[2]=t[a].url,s[9]=t[a].image,s}function De(e){let t,a,s,l,n,r,o,c,i,h=e[8]+"";return{c(){t=f("div"),a=f("a"),s=f("img"),n=p(),r=f("span"),o=d(h),i=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);a=m(l,"A",{href:!0,class:!0});var c=v(a);s=m(c,"IMG",{src:!0,alt:!0}),n=$(c),r=m(c,"SPAN",{class:!0});var u=v(r);o=g(u,h),u.forEach(E),c.forEach(E),i=$(l),l.forEach(E),this.h()},h(){s.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(s,"src",l),w(s,"alt","thumbnail"),w(r,"class","svelte-18aaux7"),w(a,"href",c="https://pudding.cool/"+e[2]),w(a,"class","svelte-18aaux7"),w(t,"class","story svelte-18aaux7")},m(e,l){b(e,t,l),y(t,a),y(a,s),y(a,n),y(a,r),y(r,o),y(t,i)},p(e,t){1&t&&s.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(s,"src",l),1&t&&h!==(h=e[8]+"")&&I(o,h),1&t&&c!==(c="https://pudding.cool/"+e[2])&&w(a,"href",c)},d(e){e&&E(t)}}}function je(e){let t,a,s,l,n,r=e[5].name.toUpperCase()+"";return{c(){t=f("li"),a=f("a"),s=f("span"),l=d(r),n=p(),this.h()},l(e){t=m(e,"LI",{class:!0});var o=v(t);a=m(o,"A",{href:!0,class:!0});var c=v(a);s=m(c,"SPAN",{class:!0});var i=v(s);l=g(i,r),i.forEach(E),c.forEach(E),n=$(o),o.forEach(E),this.h()},h(){w(s,"class","svelte-18aaux7"),w(a,"href",e[5].url),w(a,"class","svelte-18aaux7"),w(t,"class","svelte-18aaux7")},m(e,r){b(e,t,r),y(t,a),y(a,s),y(s,l),y(t,n)},p:k,d(e){e&&E(t)}}}function Le(e){let t,a,s,l,n,r,o,c,i,h,u,I,x,P=e[0],A=[];for(let f=0;f<P.length;f+=1)A[f]=De(Ae(e,P,f));let D=e[1],j=[];for(let f=0;f<D.length;f+=1)j[f]=je(Te(e,D,f));return{c(){t=f("footer"),a=f("section");for(let e=0;e<A.length;e+=1)A[e].c();s=p(),l=f("section"),n=f("div"),r=p(),o=f("p"),c=f("a"),i=d("The Pudding"),h=d("\n      is a digital publication that explains ideas debated in culture with visual essays."),u=p(),I=f("section"),x=f("ul");for(let e=0;e<j.length;e+=1)j[e].c();this.h()},l(e){t=m(e,"FOOTER",{class:!0});var f=v(t);a=m(f,"SECTION",{class:!0});var d=v(a);for(let t=0;t<A.length;t+=1)A[t].l(d);d.forEach(E),s=$(f),l=m(f,"SECTION",{class:!0});var p=v(l);n=m(p,"DIV",{class:!0}),v(n).forEach(E),r=$(p),o=m(p,"P",{});var w=v(o);c=m(w,"A",{href:!0,class:!0});var b=v(c);i=g(b,"The Pudding"),b.forEach(E),h=g(w,"\n      is a digital publication that explains ideas debated in culture with visual essays."),w.forEach(E),p.forEach(E),u=$(f),I=m(f,"SECTION",{class:!0});var y=v(I);x=m(y,"UL",{class:!0});var k=v(x);for(let t=0;t<j.length;t+=1)j[t].l(k);k.forEach(E),y.forEach(E),f.forEach(E),this.h()},h(){w(a,"class","stories svelte-18aaux7"),w(n,"class","wordmark svelte-18aaux7"),w(c,"href","https://pudding.cool"),w(c,"class","svelte-18aaux7"),w(l,"class","about svelte-18aaux7"),w(x,"class","svelte-18aaux7"),w(I,"class","links svelte-18aaux7"),w(t,"class","svelte-18aaux7")},m(e,f){b(e,t,f),y(t,a);for(let t=0;t<A.length;t+=1)A[t].m(a,null);y(t,s),y(t,l),y(l,n),n.innerHTML=K,y(l,r),y(l,o),y(o,c),y(c,i),y(o,h),y(t,u),y(t,I),y(I,x);for(let t=0;t<j.length;t+=1)j[t].m(x,null)},p(e,[t]){if(1&t){let s;for(P=e[0],s=0;s<P.length;s+=1){const l=Ae(e,P,s);A[s]?A[s].p(l,t):(A[s]=De(l),A[s].c(),A[s].m(a,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=P.length}if(2&t){let a;for(D=e[1],a=0;a<D.length;a+=1){const s=Te(e,D,a);j[a]?j[a].p(s,t):(j[a]=je(s),j[a].c(),j[a].m(x,null))}for(;a<j.length;a+=1)j[a].d(1);j.length=D.length}},i:k,o:k,d(e){e&&E(t),T(A,e),T(j,e)}}}function Ne(e,t,a){let s,l=[];const n=`https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;return N((async()=>{s=window.location.href;const e=await fetch(n),t=await e.json();a(0,l=t.filter((e=>e.url!==s)).slice(0,4))})),[l,[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}],n]}class _e extends i{constructor(e){super(),h(this,e,Ne,Le,u,{})}}function Me(e){let t,a,s,l,n,r,o,c,i,h;t=new Q({});const u=[e[0][0],{prompt:Y.prompt}];let f={};for(let d=0;d<u.length;d+=1)f=G(f,u[d]);return s=new me({props:f}),n=new be({props:{data:e[1]}}),o=new Pe({props:{tldr:Y.aboutTldr,full:Y.about,credits:Y.credits}}),i=new _e({}),{c(){O(t.$$.fragment),a=p(),O(s.$$.fragment),l=p(),O(n.$$.fragment),r=p(),O(o.$$.fragment),c=p(),O(i.$$.fragment)},l(e){S(t.$$.fragment,e),a=$(e),S(s.$$.fragment,e),l=$(e),S(n.$$.fragment,e),r=$(e),S(o.$$.fragment,e),c=$(e),S(i.$$.fragment,e)},m(e,u){V(t,e,u),b(e,a,u),V(s,e,u),b(e,l,u),V(n,e,u),b(e,r,u),V(o,e,u),b(e,c,u),V(i,e,u),h=!0},p(e,[t]){const a=1&t?W(u,[1&t&&z(e[0][0]),0&t&&{prompt:Y.prompt}]):{};s.$set(a)},i(e){h||(L(t.$$.fragment,e),L(s.$$.fragment,e),L(n.$$.fragment,e),L(o.$$.fragment,e),L(i.$$.fragment,e),h=!0)},o(e){D(t.$$.fragment,e),D(s.$$.fragment,e),D(n.$$.fragment,e),D(o.$$.fragment,e),D(i.$$.fragment,e),h=!1},d(e){H(t,e),e&&E(a),H(s,e),e&&E(l),H(n,e),e&&E(r),H(o,e),e&&E(c),H(i,e)}}}function Oe(e){const t=Y.contest.map(((e,t)=>c(o({},e),{attempt:t+1}))),a=t.slice(1).map((e=>({slug:e.slug,title:e.title})));return[t,a]}class Se extends i{constructor(e){super(),h(this,e,Oe,Me,u,{})}}export{Se as A};
