var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(s)for(var a of s(t))r.call(t,a)&&n(e,a,t[a]);return e},c=(e,s)=>t(e,a(s));import{S as i,i as h,s as u,e as f,t as d,k as p,c as m,a as v,g,d as $,n as E,b as w,f as b,D as y,E as I,h as k,I as j,J as P,K as x,B as D,r as T,u as A,v as L,z as _,L as N,M as O,j as S,m as V,o as M,N as C,w as H,l as R,O as U,P as F,Q as q,A as z,p as G,q as W}from"./vendor-b67f10d3.js";import{c as Y}from"./doc-27125222.js";import{_ as K}from"./preload-helper-9f12a5fd.js";import{w as B}from"./wordmark-0849a013.js";function J(e){let t,a,s,l,r,n,o,c,i,h,u,k,j,P,x=Y.hed+"",D=Y.dek+"",T=Y.details+"";return{c(){t=f("section"),a=f("div"),s=f("h1"),l=d(x),r=p(),n=f("p"),o=d(D),c=p(),i=f("details"),h=f("summary"),u=f("span"),k=d("New here? Learn about the experiment."),j=p(),P=f("span"),this.h()},l(e){t=m(e,"SECTION",{class:!0});var f=v(t);a=m(f,"DIV",{class:!0});var d=v(a);s=m(d,"H1",{class:!0});var p=v(s);l=g(p,x),p.forEach($),r=E(d),n=m(d,"P",{});var w=v(n);o=g(w,D),w.forEach($),c=E(d),i=m(d,"DETAILS",{class:!0});var b=v(i);h=m(b,"SUMMARY",{});var y=v(h);u=m(y,"SPAN",{});var I=v(u);k=g(I,"New here? Learn about the experiment."),I.forEach($),y.forEach($),j=E(b),P=m(b,"SPAN",{}),v(P).forEach($),b.forEach($),d.forEach($),f.forEach($),this.h()},h(){w(s,"class","svelte-j43njh"),w(i,"class","sm"),w(a,"class","col"),w(t,"class","svelte-j43njh")},m(e,f){b(e,t,f),y(t,a),y(a,s),y(s,l),y(a,r),y(a,n),y(n,o),y(a,c),y(a,i),y(i,h),y(h,u),y(u,k),y(i,j),y(i,P),P.innerHTML=T},p:I,i:I,o:I,d(e){e&&$(t)}}}class Q extends i{constructor(e){super(),h(this,e,null,J,u,{})}}function X(e,t,a){const s=e.slice();return s[12]=t[a],s}function Z(e){let t,a;return{c(){t=f("div"),a=d(e[1]),this.h()},l(s){t=m(s,"DIV",{class:!0,id:!0});var l=v(t);a=g(l,e[1]),l.forEach($),this.h()},h(){w(t,"class","legend svelte-1j76an4"),w(t,"id","label-"+e[6])},m(e,s){b(e,t,s),y(t,a)},p(e,t){2&t&&k(a,e[1])},d(e){e&&$(t)}}}function ee(e){let t,a,s,l,r,n,o,c,i,h,u,I,P,x=(e[12].label||e[12].value)+"";return{c(){t=f("div"),a=f("input"),r=p(),n=f("label"),o=d(x),u=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var s=v(t);a=m(s,"INPUT",{type:!0,id:!0,name:!0,class:!0,value:!0,disabled:!0}),r=E(s),n=m(s,"LABEL",{class:!0,for:!0,"data-emoji":!0});var l=v(n);o=g(l,x),l.forEach($),u=E(s),s.forEach($),this.h()},h(){w(a,"type","radio"),w(a,"id",s=`${e[6]}-${e[12].slug}`),w(a,"name","name-"+e[6]),w(a,"class","sr-only svelte-1j76an4"),a.__value=l=e[12].value,a.value=a.__value,a.disabled=e[3],e[10][0].push(a),w(n,"class",c="sm option "+e[2]+" svelte-1j76an4"),w(n,"for",i=`${e[6]}-${e[12].slug}`),w(n,"data-emoji",h=e[12].emoji),w(t,"class","option svelte-1j76an4")},m(s,l){b(s,t,l),y(t,a),a.checked=a.__value===e[0],y(t,r),y(t,n),y(n,o),y(t,u),I||(P=j(a,"change",e[9]),I=!0)},p(e,t){16&t&&s!==(s=`${e[6]}-${e[12].slug}`)&&w(a,"id",s),16&t&&l!==(l=e[12].value)&&(a.__value=l,a.value=a.__value),8&t&&(a.disabled=e[3]),1&t&&(a.checked=a.__value===e[0]),16&t&&x!==(x=(e[12].label||e[12].value)+"")&&k(o,x),4&t&&c!==(c="sm option "+e[2]+" svelte-1j76an4")&&w(n,"class",c),16&t&&i!==(i=`${e[6]}-${e[12].slug}`)&&w(n,"for",i),16&t&&h!==(h=e[12].emoji)&&w(n,"data-emoji",h)},d(s){s&&$(t),e[10][0].splice(e[10][0].indexOf(a),1),I=!1,P()}}}function te(e){let t,a,s,l,r=e[1]&&Z(e),n=e[4],o=[];for(let c=0;c<n.length;c+=1)o[c]=ee(X(e,n,c));return{c(){t=f("div"),a=f("div"),r&&r.c(),s=p(),l=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var n=v(t);a=m(n,"DIV",{id:!0,class:!0,role:!0,"aria-labelledby":!0});var c=v(a);r&&r.l(c),s=E(c),l=m(c,"DIV",{class:!0});var i=v(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach($),c.forEach($),n.forEach($),this.h()},h(){w(l,"class","options svelte-1j76an4"),w(a,"id",`group-${e[6]}`),w(a,"class","group svelte-1j76an4"),w(a,"role","radiogroup"),w(a,"aria-labelledby",`label-${e[6]}`),P(a,"is-top",e[5]),w(t,"class","button-set svelte-1j76an4")},m(e,n){b(e,t,n),y(t,a),r&&r.m(a,null),y(a,s),y(a,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(e[1]?r?r.p(e,t):(r=Z(e),r.c(),r.m(a,s)):r&&(r.d(1),r=null),93&t){let a;for(n=e[4],a=0;a<n.length;a+=1){const s=X(e,n,a);o[a]?o[a].p(s,t):(o[a]=ee(s),o[a].c(),o[a].m(l,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}32&t&&P(a,"is-top",e[5])},i:I,o:I,d(e){e&&$(t),r&&r.d(),x(o,e)}}}function ae(e,t,a){let s,l,{options:r=[]}=t,{legend:n=""}=t,{legendPosition:i="top"}=t,{labelClass:h=""}=t,{disabled:u=!1}=t,{value:f=""}=t;const d=`legend-${Math.floor(1e6*Math.random())}`,p=(e="")=>`${e}`.toLowerCase().replace(/\W/g,"");return e.$$set=e=>{"options"in e&&a(7,r=e.options),"legend"in e&&a(1,n=e.legend),"legendPosition"in e&&a(8,i=e.legendPosition),"labelClass"in e&&a(2,h=e.labelClass),"disabled"in e&&a(3,u=e.disabled),"value"in e&&a(0,f=e.value)},e.$$.update=()=>{128&e.$$.dirty&&a(4,s=r.map((e=>c(o({},e),{val:e.value,slug:p(e.value)})))),256&e.$$.dirty&&a(5,l="top"===i)},[f,n,h,u,s,l,d,r,i,function(){f=this.__value,a(0,f)},[[]]]}class se extends i{constructor(e){super(),h(this,e,ae,te,u,{options:7,legend:1,legendPosition:8,labelClass:2,disabled:3,value:0})}}function le(e){let t,a,s,l;return{c(){t=f("div"),a=f("p"),s=d("Thanks for voting!"),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);a=m(l,"P",{});var r=v(a);s=g(r,"Thanks for voting!"),r.forEach($),l.forEach($),this.h()},h(){w(t,"class","thanks svelte-4kqfk6")},m(e,l){b(e,t,l),y(t,a),y(a,s)},p:I,i(e){l||N((()=>{l=O(t,q,{}),l.start()}))},o:I,d(e){e&&$(t)}}}function re(e){let t,a,s,l,r,n,o,c,i,h,j=e[1]+1+"",P=e[2].length+"",x=e[1],_=ne(e);return{c(){t=f("p"),a=d(j),s=d(" of "),l=d(P),r=p(),n=f("p"),o=d("Is this A.I.-generated caption funny?"),c=p(),_.c(),i=R(),this.h()},l(e){t=m(e,"P",{class:!0});var h=v(t);a=g(h,j),s=g(h," of "),l=g(h,P),h.forEach($),r=E(e),n=m(e,"P",{class:!0});var u=v(n);o=g(u,"Is this A.I.-generated caption funny?"),u.forEach($),c=E(e),_.l(e),i=R(),this.h()},h(){w(t,"class","counter sm svelte-4kqfk6"),w(n,"class","prompt sm svelte-4kqfk6")},m(e,u){b(e,t,u),y(t,a),y(t,s),y(t,l),b(e,r,u),b(e,n,u),y(n,o),b(e,c,u),_.m(e,u),b(e,i,u),h=!0},p(e,t){(!h||2&t)&&j!==(j=e[1]+1+"")&&k(a,j),2&t&&u(x,x=e[1])?(D(),T(_,1,1,I),A(),_=ne(e),_.c(),L(_),_.m(i.parentNode,i)):_.p(e,t)},i(e){h||(L(_),h=!0)},o(e){T(_),h=!1},d(e){e&&$(t),e&&$(r),e&&$(n),e&&$(c),e&&$(i),_.d(e)}}}function ne(e){let t,a,s,l,r,n,o,c,i,h=e[2][e[1]].text+"";function u(t){e[5](t)}let I={options:[{value:0,label:"It stinks!",emoji:"😴"},{value:1,label:"It’s OK...",emoji:"😐"},{value:2,label:"It works!",emoji:"😂"}]};return void 0!==e[0]&&(I.value=e[0]),n=new se({props:I}),U.push((()=>F(n,"value",u))),{c(){t=f("div"),a=f("p"),s=d(h),l=p(),r=f("div"),S(n.$$.fragment),this.h()},l(e){t=m(e,"DIV",{});var o=v(t);a=m(o,"P",{class:!0});var c=v(a);s=g(c,h),c.forEach($),l=E(o),r=m(o,"DIV",{class:!0});var i=v(r);V(n.$$.fragment,i),i.forEach($),o.forEach($),this.h()},h(){w(a,"class","caption svelte-4kqfk6"),w(r,"class","vote svelte-4kqfk6")},m(e,o){b(e,t,o),y(t,a),y(a,s),y(t,l),y(t,r),M(n,r,null),i=!0},p(e,t){(!i||2&t)&&h!==(h=e[2][e[1]].text+"")&&k(s,h);const a={};!o&&1&t&&(o=!0,a.value=e[0],C((()=>o=!1))),n.$set(a)},i(e){i||(L(n.$$.fragment,e),c||N((()=>{c=O(t,q,{}),c.start()})),i=!0)},o(e){T(n.$$.fragment,e),i=!1},d(e){e&&$(t),H(n)}}}function oe(e){let t,a,s,l;const r=[re,le],n=[];function o(e,t){return e[1]<e[2].length?0:1}return a=o(e),s=n[a]=r[a](e),{c(){t=f("div"),s.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var a=v(t);s.l(a),a.forEach($),this.h()},h(){w(t,"class","wrapper svelte-4kqfk6")},m(e,s){b(e,t,s),n[a].m(t,null),l=!0},p(e,[l]){let c=a;a=o(e),a===c?n[a].p(e,l):(D(),T(n[c],1,1,(()=>{n[c]=null})),A(),s=n[a],s?s.p(e,l):(s=n[a]=r[a](e),s.c()),L(s,1),s.m(t,null))},i(e){l||(L(s),l=!0)},o(e){T(s),l=!1},d(e){e&&$(t),n[a].d()}}}function ce(e,t,a){let s,{slug:l}=t,{data:r}=t,n=["unfunny","neutral","funny"],o=0;const c=r.map(((e,t)=>({text:e,id:t}))),i={apiKey:"AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",authDomain:"new-yorker-da6db.firebaseapp.com",projectId:"new-yorker-da6db"};let h,u,f;return _((async()=>{const e=await K((()=>import("./index.esm-558ce47f.js")),["/projects/caption-contest/_app/chunks/index.esm-558ce47f.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]);h=e.default,await K((()=>import("./index.esm-f9bc68b8.js")),["/projects/caption-contest/_app/chunks/index.esm-f9bc68b8.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]),h.apps.length||(u=h.initializeApp(i),f=h.firestore(u))})),e.$$set=e=>{"slug"in e&&a(3,l=e.slug),"data"in e&&a(4,r=e.data)},e.$$.update=()=>{1&e.$$.dirty&&"number"==typeof s&&(()=>{const{id:e}=c[o],t=f.collection(l).doc(`${e}`),r=n[s];t.update({[[r]]:h.firestore.FieldValue.increment(1)}),a(0,s=void 0),a(1,o+=1)})()},function(e){let t=0,a=e.length-(t=+t);for(;a;){const s=Math.random()*a--|0,l=e[a+t];e[a+t]=e[s+t],e[s+t]=l}}(c),[s,o,c,l,r,function(e){s=e,a(0,s)}]}class ie extends i{constructor(e){super(),h(this,e,ce,oe,u,{slug:3,data:4})}}function he(e){let t,a;return t=new ie({props:{slug:e[0],data:e[7]}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,s){M(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.slug=e[0]),128&a&&(s.data=e[7]),t.$set(s)},i(e){a||(L(t.$$.fragment,e),a=!0)},o(e){T(t.$$.fragment,e),a=!1},d(e){H(t,e)}}}function ue(e){let t,a,s,l,r,n,o,c,i,h,u,I,j,P,x,_,N,O,S,V,M,C,H,R,U,F,q,z,G,W,Y,K,B,J,Q,X,Z,ee,te,ae,se,le="IsThisFunny"===e[6]&&he(e);return{c(){t=f("section"),a=f("div"),s=f("div"),l=f("p"),r=p(),n=f("p"),o=p(),c=f("details"),i=f("summary"),h=f("span"),u=d("For the tech-nerds, here is how it works."),I=p(),j=f("span"),P=d("test"),x=p(),_=f("div"),N=f("h2"),O=d("Help the computer submit its best caption to this week’s contest."),S=p(),V=f("figure"),M=f("figcaption"),C=f("a"),H=d("#"),R=d(e[0]),U=d(": Here is the cartoon for\n          the week of "),F=d(e[1]),q=d(" by "),z=d(e[5]),G=p(),W=f("img"),B=p(),le&&le.c(),J=p(),Q=f("div"),X=f("p"),Z=d("We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ee=p(),te=f("p"),ae=d("Come back next week to vote on captions for a new cartoon and see how our approach evolves."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);a=m(d,"DIV",{class:!0});var p=v(a);s=m(p,"DIV",{class:!0});var w=v(s);l=m(w,"P",{}),v(l).forEach($),r=E(w),n=m(w,"P",{class:!0}),v(n).forEach($),o=E(w),c=m(w,"DETAILS",{class:!0});var b=v(c);i=m(b,"SUMMARY",{});var y=v(i);h=m(y,"SPAN",{});var k=v(h);u=g(k,"For the tech-nerds, here is how it works."),k.forEach($),y.forEach($),I=E(b),j=m(b,"SPAN",{});var D=v(j);P=g(D,"test"),D.forEach($),b.forEach($),w.forEach($),x=E(p),_=m(p,"DIV",{class:!0});var T=v(_);N=m(T,"H2",{});var A=v(N);O=g(A,"Help the computer submit its best caption to this week’s contest."),A.forEach($),S=E(T),V=m(T,"FIGURE",{});var L=v(V);M=m(L,"FIGCAPTION",{class:!0});var Y=v(M);C=m(Y,"A",{href:!0});var K=v(C);H=g(K,"#"),R=g(K,e[0]),K.forEach($),U=g(Y,": Here is the cartoon for\n          the week of "),F=g(Y,e[1]),q=g(Y," by "),z=g(Y,e[5]),Y.forEach($),G=E(L),W=m(L,"IMG",{src:!0,alt:!0}),L.forEach($),B=E(T),le&&le.l(T),T.forEach($),J=E(p),Q=m(p,"DIV",{class:!0});var se=v(Q);X=m(se,"P",{});var re=v(X);Z=g(re,"We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),re.forEach($),ee=E(se),te=m(se,"P",{});var ne=v(te);ae=g(ne,"Come back next week to vote on captions for a new cartoon and see how our approach evolves."),ne.forEach($),se.forEach($),p.forEach($),d.forEach($),this.h()},h(){w(n,"class","sm"),w(c,"class","sm"),w(s,"class","info"),w(C,"href","https://www.newyorker.com/cartoons/contest"),w(M,"class","sm svelte-168vpd2"),W.src!==(Y=e[4])&&w(W,"src",Y),w(W,"alt",K="captionless cartoon by "+e[5]),w(_,"class","prompt svelte-168vpd2"),w(Q,"class","submit sm"),w(a,"class","col"),w(t,"class","svelte-168vpd2")},m(f,d){b(f,t,d),y(t,a),y(a,s),y(s,l),l.innerHTML=e[2],y(s,r),y(s,n),n.innerHTML=e[3],y(s,o),y(s,c),y(c,i),y(i,h),y(h,u),y(c,I),y(c,j),y(j,P),y(a,x),y(a,_),y(_,N),y(N,O),y(_,S),y(_,V),y(V,M),y(M,C),y(C,H),y(C,R),y(M,U),y(M,F),y(M,q),y(M,z),y(V,G),y(V,W),y(_,B),le&&le.m(_,null),y(a,J),y(a,Q),y(Q,X),y(X,Z),y(Q,ee),y(Q,te),y(te,ae),se=!0},p(e,[t]){(!se||4&t)&&(l.innerHTML=e[2]),(!se||8&t)&&(n.innerHTML=e[3]),(!se||1&t)&&k(R,e[0]),(!se||2&t)&&k(F,e[1]),(!se||32&t)&&k(z,e[5]),(!se||16&t&&W.src!==(Y=e[4]))&&w(W,"src",Y),(!se||32&t&&K!==(K="captionless cartoon by "+e[5]))&&w(W,"alt",K),"IsThisFunny"===e[6]?le?(le.p(e,t),64&t&&L(le,1)):(le=he(e),le.c(),L(le,1),le.m(_,null)):le&&(D(),T(le,1,1,(()=>{le=null})),A())},i(e){se||(L(le),se=!0)},o(e){T(le),se=!1},d(e){e&&$(t),le&&le.d()}}}function fe(e,t,a){let{slug:s}=t,{date:l}=t,{hed:r}=t,{dek:n}=t,{image:o}=t,{author:c}=t,{widgetName:i}=t,{widgetData:h}=t;return e.$$set=e=>{"slug"in e&&a(0,s=e.slug),"date"in e&&a(1,l=e.date),"hed"in e&&a(2,r=e.hed),"dek"in e&&a(3,n=e.dek),"image"in e&&a(4,o=e.image),"author"in e&&a(5,c=e.author),"widgetName"in e&&a(6,i=e.widgetName),"widgetData"in e&&a(7,h=e.widgetData)},[s,l,r,n,o,c,i,h]}class de extends i{constructor(e){super(),h(this,e,fe,ue,u,{slug:0,date:1,hed:2,dek:3,image:4,author:5,widgetName:6,widgetData:7})}}function pe(e,t,a){const s=e.slice();return s[1]=t[a].slug,s[2]=t[a].title,s}function me(e){let t,a,s,l,r,n,o=e[0],c=[];for(let i=0;i<o.length;i+=1)c[i]=ve(pe(e,o,i));return{c(){t=f("div"),a=f("div"),s=f("p"),l=d("Each week we try a new attempt!"),r=p(),n=f("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=m(e,"DIV",{id:!0});var o=v(t);a=m(o,"DIV",{class:!0});var i=v(a);s=m(i,"P",{});var h=v(s);l=g(h,"Each week we try a new attempt!"),h.forEach($),r=E(i),n=m(i,"UL",{});var u=v(n);for(let t=0;t<c.length;t+=1)c[t].l(u);u.forEach($),i.forEach($),o.forEach($),this.h()},h(){w(a,"class","col"),w(t,"id","archive")},m(e,o){b(e,t,o),y(t,a),y(a,s),y(s,l),y(a,r),y(a,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(e,t){if(1&t){let a;for(o=e[0],a=0;a<o.length;a+=1){const s=pe(e,o,a);c[a]?c[a].p(s,t):(c[a]=ve(s),c[a].c(),c[a].m(n,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=o.length}},d(e){e&&$(t),x(c,e)}}}function ve(e){let t,a,s,l,r,n,o,c=e[1]+"",i=e[2]+"";return{c(){t=f("li"),a=f("a"),s=d("#"),l=d(c),r=d(": "),n=d(i),this.h()},l(e){t=m(e,"LI",{});var o=v(t);a=m(o,"A",{href:!0});var h=v(a);s=g(h,"#"),l=g(h,c),r=g(h,": "),n=g(h,i),h.forEach($),o.forEach($),this.h()},h(){w(a,"href",o="/contests/"+e[1])},m(e,o){b(e,t,o),y(t,a),y(a,s),y(a,l),y(a,r),y(a,n)},p(e,t){1&t&&c!==(c=e[1]+"")&&k(l,c),1&t&&i!==(i=e[2]+"")&&k(n,i),1&t&&o!==(o="/contests/"+e[1])&&w(a,"href",o)},d(e){e&&$(t)}}}function ge(e){let t,a=e[0].length&&me(e);return{c(){a&&a.c(),t=R()},l(e){a&&a.l(e),t=R()},m(e,s){a&&a.m(e,s),b(e,t,s)},p(e,[s]){e[0].length?a?a.p(e,s):(a=me(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:I,o:I,d(e){a&&a.d(e),e&&$(t)}}}function $e(e,t,a){let{data:s}=t;return e.$$set=e=>{"data"in e&&a(0,s=e.data)},[s]}class Ee extends i{constructor(e){super(),h(this,e,$e,ge,u,{data:0})}}function we(e,t,a){const s=e.slice();return s[3]=t[a].value,s}function be(e){let t,a=e[3]+"";return{c(){t=f("p")},l(e){t=m(e,"P",{}),v(t).forEach($)},m(e,s){b(e,t,s),t.innerHTML=a},p(e,s){2&s&&a!==(a=e[3]+"")&&(t.innerHTML=a)},d(e){e&&$(t)}}}function ye(e){let t,a,s,l,r,n,o,c,i,h,u,j,P,D,T,A,L,_,N=e[1],O=[];for(let f=0;f<N.length;f+=1)O[f]=be(we(e,N,f));return{c(){t=f("section"),a=f("div"),s=f("p"),l=d("Why are we doing this?"),r=p(),n=f("p"),o=f("strong"),c=d("TLDR:"),i=p(),h=d(e[0]),u=p(),j=f("details"),P=f("summary"),D=d("And if you want, here’s the long version."),T=p(),A=f("span");for(let e=0;e<O.length;e+=1)O[e].c();L=p(),_=f("p"),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);a=m(d,"DIV",{class:!0});var p=v(a);s=m(p,"P",{});var w=v(s);l=g(w,"Why are we doing this?"),w.forEach($),r=E(p),n=m(p,"P",{class:!0});var b=v(n);o=m(b,"STRONG",{});var y=v(o);c=g(y,"TLDR:"),y.forEach($),i=E(b),h=g(b,e[0]),b.forEach($),u=E(p),j=m(p,"DETAILS",{class:!0});var I=v(j);P=m(I,"SUMMARY",{});var k=v(P);D=g(k,"And if you want, here’s the long version."),k.forEach($),T=E(I),A=m(I,"SPAN",{});var x=v(A);for(let e=0;e<O.length;e+=1)O[e].l(x);x.forEach($),I.forEach($),L=E(p),_=m(p,"P",{class:!0}),v(_).forEach($),p.forEach($),d.forEach($),this.h()},h(){w(n,"class","sm"),w(j,"class","sm"),w(_,"class","sm"),w(a,"class","col"),w(t,"class","svelte-bee32q")},m(f,d){b(f,t,d),y(t,a),y(a,s),y(s,l),y(a,r),y(a,n),y(n,o),y(o,c),y(n,i),y(n,h),y(a,u),y(a,j),y(j,P),y(P,D),y(j,T),y(j,A);for(let e=0;e<O.length;e+=1)O[e].m(A,null);y(a,L),y(a,_),_.innerHTML=e[2]},p(e,[t]){if(1&t&&k(h,e[0]),2&t){let a;for(N=e[1],a=0;a<N.length;a+=1){const s=we(e,N,a);O[a]?O[a].p(s,t):(O[a]=be(s),O[a].c(),O[a].m(A,null))}for(;a<O.length;a+=1)O[a].d(1);O.length=N.length}4&t&&(_.innerHTML=e[2])},i:I,o:I,d(e){e&&$(t),x(O,e)}}}function Ie(e,t,a){let{tldr:s}=t,{full:l}=t,{credits:r}=t;return e.$$set=e=>{"tldr"in e&&a(0,s=e.tldr),"full"in e&&a(1,l=e.full),"credits"in e&&a(2,r=e.credits)},[s,l,r]}class ke extends i{constructor(e){super(),h(this,e,Ie,ye,u,{tldr:0,full:1,credits:2})}}function je(e,t,a){const s=e.slice();return s[5]=t[a],s}function Pe(e,t,a){const s=e.slice();return s[8]=t[a].hed,s[2]=t[a].url,s[9]=t[a].image,s}function xe(e){let t,a,s,l,r,n,o,c,i,h=e[8]+"";return{c(){t=f("div"),a=f("a"),s=f("img"),r=p(),n=f("span"),o=d(h),i=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);a=m(l,"A",{href:!0,class:!0});var c=v(a);s=m(c,"IMG",{src:!0,alt:!0}),r=E(c),n=m(c,"SPAN",{class:!0});var u=v(n);o=g(u,h),u.forEach($),c.forEach($),i=E(l),l.forEach($),this.h()},h(){s.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(s,"src",l),w(s,"alt","thumbnail"),w(n,"class","svelte-18aaux7"),w(a,"href",c="https://pudding.cool/"+e[2]),w(a,"class","svelte-18aaux7"),w(t,"class","story svelte-18aaux7")},m(e,l){b(e,t,l),y(t,a),y(a,s),y(a,r),y(a,n),y(n,o),y(t,i)},p(e,t){1&t&&s.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(s,"src",l),1&t&&h!==(h=e[8]+"")&&k(o,h),1&t&&c!==(c="https://pudding.cool/"+e[2])&&w(a,"href",c)},d(e){e&&$(t)}}}function De(e){let t,a,s,l,r,n=e[5].name.toUpperCase()+"";return{c(){t=f("li"),a=f("a"),s=f("span"),l=d(n),r=p(),this.h()},l(e){t=m(e,"LI",{class:!0});var o=v(t);a=m(o,"A",{href:!0,class:!0});var c=v(a);s=m(c,"SPAN",{class:!0});var i=v(s);l=g(i,n),i.forEach($),c.forEach($),r=E(o),o.forEach($),this.h()},h(){w(s,"class","svelte-18aaux7"),w(a,"href",e[5].url),w(a,"class","svelte-18aaux7"),w(t,"class","svelte-18aaux7")},m(e,n){b(e,t,n),y(t,a),y(a,s),y(s,l),y(t,r)},p:I,d(e){e&&$(t)}}}function Te(e){let t,a,s,l,r,n,o,c,i,h,u,k,j,P=e[0],D=[];for(let f=0;f<P.length;f+=1)D[f]=xe(Pe(e,P,f));let T=e[1],A=[];for(let f=0;f<T.length;f+=1)A[f]=De(je(e,T,f));return{c(){t=f("footer"),a=f("section");for(let e=0;e<D.length;e+=1)D[e].c();s=p(),l=f("section"),r=f("div"),n=p(),o=f("p"),c=f("a"),i=d("The Pudding"),h=d("\n      is a digital publication that explains ideas debated in culture with visual essays."),u=p(),k=f("section"),j=f("ul");for(let e=0;e<A.length;e+=1)A[e].c();this.h()},l(e){t=m(e,"FOOTER",{class:!0});var f=v(t);a=m(f,"SECTION",{class:!0});var d=v(a);for(let t=0;t<D.length;t+=1)D[t].l(d);d.forEach($),s=E(f),l=m(f,"SECTION",{class:!0});var p=v(l);r=m(p,"DIV",{class:!0}),v(r).forEach($),n=E(p),o=m(p,"P",{});var w=v(o);c=m(w,"A",{href:!0,class:!0});var b=v(c);i=g(b,"The Pudding"),b.forEach($),h=g(w,"\n      is a digital publication that explains ideas debated in culture with visual essays."),w.forEach($),p.forEach($),u=E(f),k=m(f,"SECTION",{class:!0});var y=v(k);j=m(y,"UL",{class:!0});var I=v(j);for(let t=0;t<A.length;t+=1)A[t].l(I);I.forEach($),y.forEach($),f.forEach($),this.h()},h(){w(a,"class","stories svelte-18aaux7"),w(r,"class","wordmark svelte-18aaux7"),w(c,"href","https://pudding.cool"),w(c,"class","svelte-18aaux7"),w(l,"class","about svelte-18aaux7"),w(j,"class","svelte-18aaux7"),w(k,"class","links svelte-18aaux7"),w(t,"class","svelte-18aaux7")},m(e,f){b(e,t,f),y(t,a);for(let t=0;t<D.length;t+=1)D[t].m(a,null);y(t,s),y(t,l),y(l,r),r.innerHTML=B,y(l,n),y(l,o),y(o,c),y(c,i),y(o,h),y(t,u),y(t,k),y(k,j);for(let t=0;t<A.length;t+=1)A[t].m(j,null)},p(e,[t]){if(1&t){let s;for(P=e[0],s=0;s<P.length;s+=1){const l=Pe(e,P,s);D[s]?D[s].p(l,t):(D[s]=xe(l),D[s].c(),D[s].m(a,null))}for(;s<D.length;s+=1)D[s].d(1);D.length=P.length}if(2&t){let a;for(T=e[1],a=0;a<T.length;a+=1){const s=je(e,T,a);A[a]?A[a].p(s,t):(A[a]=De(s),A[a].c(),A[a].m(j,null))}for(;a<A.length;a+=1)A[a].d(1);A.length=T.length}},i:I,o:I,d(e){e&&$(t),x(D,e),x(A,e)}}}function Ae(e,t,a){let s,l=[];const r=`https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;return _((async()=>{s=window.location.href;const e=await fetch(r),t=await e.json();a(0,l=t.filter((e=>e.url!==s)).slice(0,4))})),[l,[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}],r]}class Le extends i{constructor(e){super(),h(this,e,Ae,Te,u,{})}}function _e(e){let t,a,s,l,r,n,o,c,i,h;t=new Q({});const u=[e[0][0],{prompt:Y.prompt}];let f={};for(let d=0;d<u.length;d+=1)f=z(f,u[d]);return s=new de({props:f}),r=new Ee({props:{data:e[1]}}),o=new ke({props:{tldr:Y.aboutTldr,full:Y.about,credits:Y.credits}}),i=new Le({}),{c(){S(t.$$.fragment),a=p(),S(s.$$.fragment),l=p(),S(r.$$.fragment),n=p(),S(o.$$.fragment),c=p(),S(i.$$.fragment)},l(e){V(t.$$.fragment,e),a=E(e),V(s.$$.fragment,e),l=E(e),V(r.$$.fragment,e),n=E(e),V(o.$$.fragment,e),c=E(e),V(i.$$.fragment,e)},m(e,u){M(t,e,u),b(e,a,u),M(s,e,u),b(e,l,u),M(r,e,u),b(e,n,u),M(o,e,u),b(e,c,u),M(i,e,u),h=!0},p(e,[t]){const a=1&t?G(u,[1&t&&W(e[0][0]),0&t&&{prompt:Y.prompt}]):{};s.$set(a)},i(e){h||(L(t.$$.fragment,e),L(s.$$.fragment,e),L(r.$$.fragment,e),L(o.$$.fragment,e),L(i.$$.fragment,e),h=!0)},o(e){T(t.$$.fragment,e),T(s.$$.fragment,e),T(r.$$.fragment,e),T(o.$$.fragment,e),T(i.$$.fragment,e),h=!1},d(e){H(t,e),e&&$(a),H(s,e),e&&$(l),H(r,e),e&&$(n),H(o,e),e&&$(c),H(i,e)}}}function Ne(e){const t=Y.contest.map(((e,t)=>c(o({},e),{attempt:t+1}))),a=t.slice(1).map((e=>({slug:e.slug,title:e.title})));return[t,a]}class Oe extends i{constructor(e){super(),h(this,e,Ne,_e,u,{})}}export{Oe as A};
