var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&n(e,s,t[s]);return e},c=(e,a)=>t(e,s(a));import{S as i,i as h,s as u,e as f,t as d,k as p,c as m,a as v,g,d as E,n as $,b as w,f as b,D as I,E as y,h as k,I as P,J as T,K as A,B as D,r as j,u as x,v as L,z as N,L as z,M as S,j as O,m as _,o as C,N as M,w as V,l as H,O as R,P as U,Q as W,R as q,T as F,x as G,A as Y,p as B,q as K}from"./vendor-34f00ee0.js";import{c as J}from"./doc-2fa28349.js";import{_ as Q}from"./preload-helper-9f12a5fd.js";import{w as X}from"./wordmark-0849a013.js";function Z(e){let t,s,a,l,r,n,o,c,i,h,u,k,P,T,A=J.hed+"",D=J.dek+"",j=J.details+"";return{c(){t=f("section"),s=f("div"),a=f("h1"),l=d(A),r=p(),n=f("p"),o=d(D),c=p(),i=f("details"),h=f("summary"),u=f("span"),k=d("New here? Learn about the experiment."),P=p(),T=f("span"),this.h()},l(e){t=m(e,"SECTION",{class:!0});var f=v(t);s=m(f,"DIV",{class:!0});var d=v(s);a=m(d,"H1",{class:!0});var p=v(a);l=g(p,A),p.forEach(E),r=$(d),n=m(d,"P",{class:!0});var w=v(n);o=g(w,D),w.forEach(E),c=$(d),i=m(d,"DETAILS",{class:!0});var b=v(i);h=m(b,"SUMMARY",{class:!0});var I=v(h);u=m(I,"SPAN",{class:!0});var y=v(u);k=g(y,"New here? Learn about the experiment."),y.forEach(E),I.forEach(E),P=$(b),T=m(b,"SPAN",{class:!0}),v(T).forEach(E),b.forEach(E),d.forEach(E),f.forEach(E),this.h()},h(){w(a,"class","svelte-14iz8mw"),w(n,"class","svelte-14iz8mw"),w(u,"class","svelte-14iz8mw"),w(h,"class","svelte-14iz8mw"),w(T,"class","svelte-14iz8mw"),w(i,"class","sm svelte-14iz8mw"),w(s,"class","col svelte-14iz8mw"),w(t,"class","svelte-14iz8mw")},m(e,f){b(e,t,f),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o),I(s,c),I(s,i),I(i,h),I(h,u),I(u,k),I(i,P),I(i,T),T.innerHTML=j},p:y,i:y,o:y,d(e){e&&E(t)}}}class ee extends i{constructor(e){super(),h(this,e,null,Z,u,{})}}function te(e,t,s){const a=e.slice();return a[12]=t[s],a}function se(e){let t,s;return{c(){t=f("div"),s=d(e[1]),this.h()},l(a){t=m(a,"DIV",{class:!0,id:!0});var l=v(t);s=g(l,e[1]),l.forEach(E),this.h()},h(){w(t,"class","legend svelte-qe9rr1"),w(t,"id","groupd-"+e[6])},m(e,a){b(e,t,a),I(t,s)},p(e,t){2&t&&k(s,e[1])},d(e){e&&E(t)}}}function ae(e){let t,s,a,l,r,n,o,c,i,h,u,y,T,A=(e[12].label||e[12].value)+"";return{c(){t=f("div"),s=f("input"),r=p(),n=f("label"),o=d(A),u=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var a=v(t);s=m(a,"INPUT",{type:!0,id:!0,name:!0,class:!0,value:!0,disabled:!0}),r=$(a),n=m(a,"LABEL",{class:!0,for:!0,"data-emoji":!0});var l=v(n);o=g(l,A),l.forEach(E),u=$(a),a.forEach(E),this.h()},h(){w(s,"type","radio"),w(s,"id",a=`${e[6]}-${e[12].slug}`),w(s,"name","name-"+e[6]),w(s,"class","sr-only svelte-qe9rr1"),s.__value=l=e[12].value,s.value=s.__value,s.disabled=e[3],e[10][0].push(s),w(n,"class",c="sm option "+e[2]+" svelte-qe9rr1"),w(n,"for",i=`${e[6]}-${e[12].slug}`),w(n,"data-emoji",h=e[12].emoji),w(t,"class","option svelte-qe9rr1")},m(a,l){b(a,t,l),I(t,s),s.checked=s.__value===e[0],I(t,r),I(t,n),I(n,o),I(t,u),y||(T=P(s,"change",e[9]),y=!0)},p(e,t){16&t&&a!==(a=`${e[6]}-${e[12].slug}`)&&w(s,"id",a),16&t&&l!==(l=e[12].value)&&(s.__value=l,s.value=s.__value),8&t&&(s.disabled=e[3]),1&t&&(s.checked=s.__value===e[0]),16&t&&A!==(A=(e[12].label||e[12].value)+"")&&k(o,A),4&t&&c!==(c="sm option "+e[2]+" svelte-qe9rr1")&&w(n,"class",c),16&t&&i!==(i=`${e[6]}-${e[12].slug}`)&&w(n,"for",i),16&t&&h!==(h=e[12].emoji)&&w(n,"data-emoji",h)},d(a){a&&E(t),e[10][0].splice(e[10][0].indexOf(s),1),y=!1,T()}}}function le(e){let t,s,a,l,r=e[1]&&se(e),n=e[4],o=[];for(let c=0;c<n.length;c+=1)o[c]=ae(te(e,n,c));return{c(){t=f("div"),s=f("div"),r&&r.c(),a=p(),l=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var n=v(t);s=m(n,"DIV",{id:!0,class:!0,role:!0,"aria-labelledby":!0});var c=v(s);r&&r.l(c),a=$(c),l=m(c,"DIV",{class:!0});var i=v(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach(E),c.forEach(E),n.forEach(E),this.h()},h(){w(l,"class","options svelte-qe9rr1"),w(s,"id",`group-${e[6]}`),w(s,"class","group svelte-qe9rr1"),w(s,"role","radiogroup"),w(s,"aria-labelledby",`label-${e[6]}`),T(s,"is-top",e[5]),w(t,"class","button-set svelte-qe9rr1")},m(e,n){b(e,t,n),I(t,s),r&&r.m(s,null),I(s,a),I(s,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(e[1]?r?r.p(e,t):(r=se(e),r.c(),r.m(s,a)):r&&(r.d(1),r=null),93&t){let s;for(n=e[4],s=0;s<n.length;s+=1){const a=te(e,n,s);o[s]?o[s].p(a,t):(o[s]=ae(a),o[s].c(),o[s].m(l,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}32&t&&T(s,"is-top",e[5])},i:y,o:y,d(e){e&&E(t),r&&r.d(),A(o,e)}}}function re(e,t,s){let a,l,{options:r=[]}=t,{legend:n=""}=t,{legendPosition:i="top"}=t,{labelClass:h=""}=t,{disabled:u=!1}=t,{value:f=""}=t;const d=`legend-${Math.floor(1e6*Math.random())}`,p=(e="")=>`${e}`.toLowerCase().replace(/\W/g,"");return e.$$set=e=>{"options"in e&&s(7,r=e.options),"legend"in e&&s(1,n=e.legend),"legendPosition"in e&&s(8,i=e.legendPosition),"labelClass"in e&&s(2,h=e.labelClass),"disabled"in e&&s(3,u=e.disabled),"value"in e&&s(0,f=e.value)},e.$$.update=()=>{128&e.$$.dirty&&s(4,a=r.map((e=>c(o({},e),{val:e.value,slug:p(e.value)})))),256&e.$$.dirty&&s(5,l="top"===i)},[f,n,h,u,a,l,d,r,i,function(){f=this.__value,s(0,f)},[[]]]}class ne extends i{constructor(e){super(),h(this,e,re,le,u,{options:7,legend:1,legendPosition:8,labelClass:2,disabled:3,value:0})}}function oe(e){let t,s,a,l;return{c(){t=f("div"),s=f("p"),a=d("Thanks for voting!"),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);s=m(l,"P",{});var r=v(s);a=g(r,"Thanks for voting!"),r.forEach(E),l.forEach(E),this.h()},h(){w(t,"class","thanks svelte-1n6kvsn")},m(e,l){b(e,t,l),I(t,s),I(s,a)},p:y,i(e){l||z((()=>{l=S(t,W,{}),l.start()}))},o:y,d(e){e&&E(t)}}}function ce(e){let t,s,a,l,r,n,o,c,i=e[1]+1+"",h=e[2].length+"",P=e[1],T=ie(e);return{c(){t=f("p"),s=d("Caption "),a=d(i),l=d(" of "),r=d(h),n=p(),T.c(),o=H(),this.h()},l(e){t=m(e,"P",{class:!0});var c=v(t);s=g(c,"Caption "),a=g(c,i),l=g(c," of "),r=g(c,h),c.forEach(E),n=$(e),T.l(e),o=H(),this.h()},h(){w(t,"class","counter sm svelte-1n6kvsn")},m(e,i){b(e,t,i),I(t,s),I(t,a),I(t,l),I(t,r),b(e,n,i),T.m(e,i),b(e,o,i),c=!0},p(e,t){(!c||2&t)&&i!==(i=e[1]+1+"")&&k(a,i),2&t&&u(P,P=e[1])?(D(),j(T,1,1,y),x(),T=ie(e),T.c(),L(T),T.m(o.parentNode,o)):T.p(e,t)},i(e){c||(L(T),c=!0)},o(e){j(T),c=!1},d(e){e&&E(t),e&&E(n),e&&E(o),T.d(e)}}}function ie(e){let t,s,a,l,r,n,o,c,i,h,u,y,P=e[2][e[1]].text+"";function T(t){e[5](t)}let A={options:[{value:0,label:"It stinks!",emoji:"😴"},{value:1,label:"It’s okay...",emoji:"😐"},{value:2,label:"It works!",emoji:"😂"}]};return void 0!==e[0]&&(A.value=e[0]),i=new ne({props:A}),R.push((()=>U(i,"value",T))),{c(){t=f("div"),s=f("p"),a=d(P),l=p(),r=f("p"),n=d("Is this AI-generated caption funny?"),o=p(),c=f("div"),O(i.$$.fragment),this.h()},l(e){t=m(e,"DIV",{});var h=v(t);s=m(h,"P",{class:!0});var u=v(s);a=g(u,P),u.forEach(E),l=$(h),r=m(h,"P",{class:!0});var f=v(r);n=g(f,"Is this AI-generated caption funny?"),f.forEach(E),o=$(h),c=m(h,"DIV",{class:!0});var d=v(c);_(i.$$.fragment,d),d.forEach(E),h.forEach(E),this.h()},h(){w(s,"class","caption svelte-1n6kvsn"),w(r,"class","prompt sm svelte-1n6kvsn"),w(c,"class","vote svelte-1n6kvsn")},m(e,h){b(e,t,h),I(t,s),I(s,a),I(t,l),I(t,r),I(r,n),I(t,o),I(t,c),C(i,c,null),y=!0},p(e,t){(!y||2&t)&&P!==(P=e[2][e[1]].text+"")&&k(a,P);const s={};!h&&1&t&&(h=!0,s.value=e[0],M((()=>h=!1))),i.$set(s)},i(e){y||(L(i.$$.fragment,e),u||z((()=>{u=S(t,W,{}),u.start()})),y=!0)},o(e){j(i.$$.fragment,e),y=!1},d(e){e&&E(t),V(i)}}}function he(e){let t,s,a,l;const r=[ce,oe],n=[];function o(e,t){return e[1]<e[2].length?0:1}return s=o(e),a=n[s]=r[s](e),{c(){t=f("div"),a.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var s=v(t);a.l(s),s.forEach(E),this.h()},h(){w(t,"class","wrapper svelte-1n6kvsn")},m(e,a){b(e,t,a),n[s].m(t,null),l=!0},p(e,[l]){let c=s;s=o(e),s===c?n[s].p(e,l):(D(),j(n[c],1,1,(()=>{n[c]=null})),x(),a=n[s],a?a.p(e,l):(a=n[s]=r[s](e),a.c()),L(a,1),a.m(t,null))},i(e){l||(L(a),l=!0)},o(e){j(a),l=!1},d(e){e&&E(t),n[s].d()}}}function ue(e,t,s){let a,{slug:l}=t,{data:r}=t,n=["unfunny","neutral","funny"],o=0;const c=r.map(((e,t)=>({text:e,id:t}))),i={apiKey:"AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",authDomain:"new-yorker-da6db.firebaseapp.com",projectId:"new-yorker-da6db"};let h,u,f;return N((async()=>{const e=await Q((()=>import("./index.esm-558ce47f.js")),["/projects/caption-contest/_app/chunks/index.esm-558ce47f.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]);h=e.default,await Q((()=>import("./index.esm-f9bc68b8.js")),["/projects/caption-contest/_app/chunks/index.esm-f9bc68b8.js","/projects/caption-contest/_app/chunks/index.esm-5ad0a3d2.js"]),h.apps.length||(u=h.initializeApp(i),f=h.firestore(u))})),e.$$set=e=>{"slug"in e&&s(3,l=e.slug),"data"in e&&s(4,r=e.data)},e.$$.update=()=>{1&e.$$.dirty&&"number"==typeof a&&(()=>{const{id:e}=c[o],t=f.collection(l).doc(`${e}`),r=n[a];t.update({[[r]]:h.firestore.FieldValue.increment(1)}),s(0,a=void 0),s(1,o+=1)})()},function(e){let t=0,s=e.length-(t=+t);for(;s;){const a=Math.random()*s--|0,l=e[s+t];e[s+t]=e[a+t],e[a+t]=l}}(c),[a,o,c,l,r,function(e){a=e,s(0,a)}]}class fe extends i{constructor(e){super(),h(this,e,ue,he,u,{slug:3,data:4})}}function de(e,t,s){const a=e.slice();return a[9]=t[s].type,a[10]=t[s].value,a}function pe(e){let t,s,a=e[10].replace("\\:",":")+"";return{c(){t=f("p"),s=p()},l(e){t=m(e,"P",{}),v(t).forEach(E),s=$(e)},m(e,l){b(e,t,l),t.innerHTML=a,b(e,s,l)},p(e,s){64&s&&a!==(a=e[10].replace("\\:",":")+"")&&(t.innerHTML=a)},d(e){e&&E(t),e&&E(s)}}}function me(e){let t,s;return t=new fe({props:{slug:e[0],data:e[8]}}),{c(){O(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.slug=e[0]),256&s&&(a.data=e[8]),t.$set(a)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function ve(e){let t,s,a,l,r,n,o,c,i,h,u,y,P,T,N,z,S,O,_,C,M,V,H,R,U,W,q,F,G,Y,B,K,J,Q,X,Z,ee,te,se,ae,le=e[6],re=[];for(let f=0;f<le.length;f+=1)re[f]=pe(de(e,le,f));let ne="IsThisFunny"===e[7]&&me(e);return{c(){t=f("section"),s=f("div"),a=f("div"),l=f("p"),r=p(),n=f("p"),o=p(),c=f("details"),i=f("summary"),h=f("span"),u=d("For the tech-nerds, here is how it works."),y=p(),P=f("span");for(let e=0;e<re.length;e+=1)re[e].c();T=p(),N=f("div"),z=f("h2"),S=d("Help the computer submit its best caption to this week’s contest."),O=p(),_=f("figure"),C=f("figcaption"),M=f("a"),V=d("#"),H=d(e[0]),R=d(": Here is the cartoon for\n          "),U=d(e[1]),W=d(" by "),q=d(e[5]),F=p(),G=f("img"),K=p(),ne&&ne.c(),J=p(),Q=f("div"),X=f("p"),Z=d("We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ee=p(),te=f("p"),se=d("Come back next week to vote on captions for a new cartoon and see how our approach evolves."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);s=m(d,"DIV",{class:!0});var p=v(s);a=m(p,"DIV",{class:!0});var w=v(a);l=m(w,"P",{}),v(l).forEach(E),r=$(w),n=m(w,"P",{class:!0}),v(n).forEach(E),o=$(w),c=m(w,"DETAILS",{class:!0});var b=v(c);i=m(b,"SUMMARY",{});var I=v(i);h=m(I,"SPAN",{});var k=v(h);u=g(k,"For the tech-nerds, here is how it works."),k.forEach(E),I.forEach(E),y=$(b),P=m(b,"SPAN",{});var A=v(P);for(let e=0;e<re.length;e+=1)re[e].l(A);A.forEach(E),b.forEach(E),w.forEach(E),T=$(p),N=m(p,"DIV",{class:!0});var D=v(N);z=m(D,"H2",{});var j=v(z);S=g(j,"Help the computer submit its best caption to this week’s contest."),j.forEach(E),O=$(D),_=m(D,"FIGURE",{class:!0});var x=v(_);C=m(x,"FIGCAPTION",{class:!0});var L=v(C);M=m(L,"A",{href:!0});var Y=v(M);V=g(Y,"#"),H=g(Y,e[0]),Y.forEach(E),R=g(L,": Here is the cartoon for\n          "),U=g(L,e[1]),W=g(L," by "),q=g(L,e[5]),L.forEach(E),F=$(x),G=m(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(E),K=$(D),ne&&ne.l(D),D.forEach(E),J=$(p),Q=m(p,"DIV",{class:!0});var B=v(Q);X=m(B,"P",{});var ae=v(X);Z=g(ae,"We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ae.forEach(E),ee=$(B),te=m(B,"P",{});var le=v(te);se=g(le,"Come back next week to vote on captions for a new cartoon and see how our approach evolves."),le.forEach(E),B.forEach(E),p.forEach(E),d.forEach(E),this.h()},h(){w(n,"class","sm"),w(c,"class","sm"),w(a,"class","info"),w(M,"href","https://www.newyorker.com/cartoons/contest"),w(C,"class","sm svelte-1gus91a"),G.src!==(Y=e[4])&&w(G,"src",Y),w(G,"alt",B="captionless cartoon by "+e[5]),w(G,"class","svelte-1gus91a"),w(_,"class","svelte-1gus91a"),w(N,"class","prompt svelte-1gus91a"),w(Q,"class","submit sm"),w(s,"class","col"),w(t,"class","svelte-1gus91a")},m(f,d){b(f,t,d),I(t,s),I(s,a),I(a,l),l.innerHTML=e[2],I(a,r),I(a,n),n.innerHTML=e[3],I(a,o),I(a,c),I(c,i),I(i,h),I(h,u),I(c,y),I(c,P);for(let e=0;e<re.length;e+=1)re[e].m(P,null);I(s,T),I(s,N),I(N,z),I(z,S),I(N,O),I(N,_),I(_,C),I(C,M),I(M,V),I(M,H),I(C,R),I(C,U),I(C,W),I(C,q),I(_,F),I(_,G),I(N,K),ne&&ne.m(N,null),I(s,J),I(s,Q),I(Q,X),I(X,Z),I(Q,ee),I(Q,te),I(te,se),ae=!0},p(e,[t]){if((!ae||4&t)&&(l.innerHTML=e[2]),(!ae||8&t)&&(n.innerHTML=e[3]),64&t){let s;for(le=e[6],s=0;s<le.length;s+=1){const a=de(e,le,s);re[s]?re[s].p(a,t):(re[s]=pe(a),re[s].c(),re[s].m(P,null))}for(;s<re.length;s+=1)re[s].d(1);re.length=le.length}(!ae||1&t)&&k(H,e[0]),(!ae||2&t)&&k(U,e[1]),(!ae||32&t)&&k(q,e[5]),(!ae||16&t&&G.src!==(Y=e[4]))&&w(G,"src",Y),(!ae||32&t&&B!==(B="captionless cartoon by "+e[5]))&&w(G,"alt",B),"IsThisFunny"===e[7]?ne?(ne.p(e,t),128&t&&L(ne,1)):(ne=me(e),ne.c(),L(ne,1),ne.m(N,null)):ne&&(D(),j(ne,1,1,(()=>{ne=null})),x())},i(e){ae||(L(ne),ae=!0)},o(e){j(ne),ae=!1},d(e){e&&E(t),A(re,e),ne&&ne.d()}}}function ge(e,t,s){let{slug:a}=t,{date:l}=t,{hed:r}=t,{dek:n}=t,{image:o}=t,{author:c}=t,{explanation:i}=t,{widgetName:h}=t,{widgetData:u}=t;return e.$$set=e=>{"slug"in e&&s(0,a=e.slug),"date"in e&&s(1,l=e.date),"hed"in e&&s(2,r=e.hed),"dek"in e&&s(3,n=e.dek),"image"in e&&s(4,o=e.image),"author"in e&&s(5,c=e.author),"explanation"in e&&s(6,i=e.explanation),"widgetName"in e&&s(7,h=e.widgetName),"widgetData"in e&&s(8,u=e.widgetData)},[a,l,r,n,o,c,i,h,u]}class Ee extends i{constructor(e){super(),h(this,e,ge,ve,u,{slug:0,date:1,hed:2,dek:3,image:4,author:5,explanation:6,widgetName:7,widgetData:8})}}function $e(e,t,s){const a=e.slice();return a[2]=t[s].slug,a[3]=t[s].title,a[4]=t[s].attempt,a[5]=t[s].date,a}function we(e){let t,s,a,l,r,n,o=e[0],c=[];for(let i=0;i<o.length;i+=1)c[i]=be($e(e,o,i));return{c(){t=f("section"),s=f("div"),a=f("h3"),l=d("Each week we try a new approach!"),r=p(),n=f("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=m(e,"SECTION",{id:!0,class:!0});var o=v(t);s=m(o,"DIV",{class:!0});var i=v(s);a=m(i,"H3",{});var h=v(a);l=g(h,"Each week we try a new approach!"),h.forEach(E),r=$(i),n=m(i,"UL",{});var u=v(n);for(let t=0;t<c.length;t+=1)c[t].l(u);u.forEach(E),i.forEach(E),o.forEach(E),this.h()},h(){w(s,"class","col"),w(t,"id","archive"),w(t,"class","svelte-ho7aeh")},m(e,o){b(e,t,o),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(e,t){if(3&t){let s;for(o=e[0],s=0;s<o.length;s+=1){const a=$e(e,o,s);c[s]?c[s].p(a,t):(c[s]=be(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=o.length}},d(e){e&&E(t),A(c,e)}}}function be(e){let t,s,a,l,r,n,o,c,i,h,u,y,P,T,A,D=e[4]+"",j=e[3]+"",x=e[5]+"",L=e[2]+"";return{c(){t=f("li"),s=f("a"),a=d("#"),l=d(D),r=d(": "),n=d(j),o=p(),c=f("span"),i=d(x),u=p(),y=f("a"),P=d(L),A=p(),this.h()},l(e){t=m(e,"LI",{style:!0,class:!0});var h=v(t);s=m(h,"A",{href:!0,class:!0});var f=v(s);a=g(f,"#"),l=g(f,D),r=g(f,": "),n=g(f,j),o=$(f),c=m(f,"SPAN",{class:!0});var d=v(c);i=g(d,x),d.forEach(E),f.forEach(E),u=$(h),y=m(h,"A",{class:!0,href:!0});var p=v(y);P=g(p,L),p.forEach(E),A=$(h),h.forEach(E),this.h()},h(){w(c,"class","sm"),w(s,"href",h="https://pudding.cool/projects/caption-contest/contest/"+e[2]),w(s,"class","svelte-ho7aeh"),w(y,"class","hide svelte-ho7aeh"),w(y,"href",T="contest/"+e[2]),q(t,"--theme","var(--theme-"+ +e[2]%e[1]+")"),w(t,"class","svelte-ho7aeh")},m(e,h){b(e,t,h),I(t,s),I(s,a),I(s,l),I(s,r),I(s,n),I(s,o),I(s,c),I(c,i),I(t,u),I(t,y),I(y,P),I(t,A)},p(e,a){1&a&&D!==(D=e[4]+"")&&k(l,D),1&a&&j!==(j=e[3]+"")&&k(n,j),1&a&&x!==(x=e[5]+"")&&k(i,x),1&a&&h!==(h="https://pudding.cool/projects/caption-contest/contest/"+e[2])&&w(s,"href",h),1&a&&L!==(L=e[2]+"")&&k(P,L),1&a&&T!==(T="contest/"+e[2])&&w(y,"href",T),1&a&&q(t,"--theme","var(--theme-"+ +e[2]%e[1]+")")},d(e){e&&E(t)}}}function Ie(e){let t,s=e[0].length&&we(e);return{c(){s&&s.c(),t=H()},l(e){s&&s.l(e),t=H()},m(e,a){s&&s.m(e,a),b(e,t,a)},p(e,[a]){e[0].length?s?s.p(e,a):(s=we(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:y,o:y,d(e){s&&s.d(e),e&&E(t)}}}function ye(e,t,s){let{data:a}=t;const{themeCount:l}=F("app");return e.$$set=e=>{"data"in e&&s(0,a=e.data)},[a,l]}class ke extends i{constructor(e){super(),h(this,e,ye,Ie,u,{data:0})}}function Pe(e,t,s){const a=e.slice();return a[3]=t[s].value,a}function Te(e){let t,s=e[3]+"";return{c(){t=f("p")},l(e){t=m(e,"P",{}),v(t).forEach(E)},m(e,a){b(e,t,a),t.innerHTML=s},p(e,a){2&a&&s!==(s=e[3]+"")&&(t.innerHTML=s)},d(e){e&&E(t)}}}function Ae(e){let t,s,a,l,r,n,o,c,i,h,u,P,T,D,j,x,L,N,z,S,O,_,C,M,V,H=e[1],R=[];for(let f=0;f<H.length;f+=1)R[f]=Te(Pe(e,H,f));return{c(){t=f("section"),s=f("div"),a=f("h3"),l=d("Why are we doing this?"),r=p(),n=f("p"),o=f("strong"),c=d("TLDR:"),i=p(),h=d(e[0]),u=p(),P=f("details"),T=f("summary"),D=d("And if you want, here’s the long version."),j=p(),x=f("span");for(let e=0;e<R.length;e+=1)R[e].c();L=p(),N=f("div"),z=f("p"),S=p(),O=f("p"),_=d("Want to see another experiment with GPT-3? Check out "),C=f("a"),M=d("Nothing Breaks Like A.I. Heart"),V=d("."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);s=m(d,"DIV",{class:!0});var p=v(s);a=m(p,"H3",{class:!0});var w=v(a);l=g(w,"Why are we doing this?"),w.forEach(E),r=$(p),n=m(p,"P",{class:!0});var b=v(n);o=m(b,"STRONG",{});var I=v(o);c=g(I,"TLDR:"),I.forEach(E),i=$(b),h=g(b,e[0]),b.forEach(E),u=$(p),P=m(p,"DETAILS",{class:!0});var y=v(P);T=m(y,"SUMMARY",{});var k=v(T);D=g(k,"And if you want, here’s the long version."),k.forEach(E),j=$(y),x=m(y,"SPAN",{});var A=v(x);for(let e=0;e<R.length;e+=1)R[e].l(A);A.forEach(E),y.forEach(E),L=$(p),N=m(p,"DIV",{class:!0});var H=v(N);z=m(H,"P",{class:!0}),v(z).forEach(E),S=$(H),O=m(H,"P",{class:!0});var U=v(O);_=g(U,"Want to see another experiment with GPT-3? Check out "),C=m(U,"A",{href:!0});var W=v(C);M=g(W,"Nothing Breaks Like A.I. Heart"),W.forEach(E),V=g(U,"."),U.forEach(E),H.forEach(E),p.forEach(E),d.forEach(E),this.h()},h(){w(a,"class","svelte-jhu76e"),w(n,"class","sm"),w(P,"class","sm"),w(z,"class","sm"),w(C,"href","https://pudding.cool/2021/03/love-and-ai/"),w(O,"class","sm"),w(N,"class","credits svelte-jhu76e"),w(s,"class","col"),w(t,"class","svelte-jhu76e")},m(f,d){b(f,t,d),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o),I(o,c),I(n,i),I(n,h),I(s,u),I(s,P),I(P,T),I(T,D),I(P,j),I(P,x);for(let e=0;e<R.length;e+=1)R[e].m(x,null);I(s,L),I(s,N),I(N,z),z.innerHTML=e[2],I(N,S),I(N,O),I(O,_),I(O,C),I(C,M),I(O,V)},p(e,[t]){if(1&t&&k(h,e[0]),2&t){let s;for(H=e[1],s=0;s<H.length;s+=1){const a=Pe(e,H,s);R[s]?R[s].p(a,t):(R[s]=Te(a),R[s].c(),R[s].m(x,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=H.length}4&t&&(z.innerHTML=e[2])},i:y,o:y,d(e){e&&E(t),A(R,e)}}}function De(e,t,s){let{tldr:a}=t,{full:l}=t,{credits:r}=t;return e.$$set=e=>{"tldr"in e&&s(0,a=e.tldr),"full"in e&&s(1,l=e.full),"credits"in e&&s(2,r=e.credits)},[a,l,r]}class je extends i{constructor(e){super(),h(this,e,De,Ae,u,{tldr:0,full:1,credits:2})}}function xe(e,t,s){const a=e.slice();return a[5]=t[s],a}function Le(e,t,s){const a=e.slice();return a[8]=t[s].hed,a[2]=t[s].url,a[9]=t[s].image,a}function Ne(e){let t,s,a,l,r,n,o,c,i,h=e[8]+"";return{c(){t=f("div"),s=f("a"),a=f("img"),r=p(),n=f("span"),o=d(h),i=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);s=m(l,"A",{href:!0,class:!0});var c=v(s);a=m(c,"IMG",{src:!0,alt:!0}),r=$(c),n=m(c,"SPAN",{class:!0});var u=v(n);o=g(u,h),u.forEach(E),c.forEach(E),i=$(l),l.forEach(E),this.h()},h(){a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(a,"src",l),w(a,"alt","thumbnail"),w(n,"class","svelte-v4z0gm"),w(s,"href",c="https://pudding.cool/"+e[2]),w(s,"class","svelte-v4z0gm"),w(t,"class","story svelte-v4z0gm")},m(e,l){b(e,t,l),I(t,s),I(s,a),I(s,r),I(s,n),I(n,o),I(t,i)},p(e,t){1&t&&a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(a,"src",l),1&t&&h!==(h=e[8]+"")&&k(o,h),1&t&&c!==(c="https://pudding.cool/"+e[2])&&w(s,"href",c)},d(e){e&&E(t)}}}function ze(e){let t,s,a,l,r,n=e[5].name.toUpperCase()+"";return{c(){t=f("li"),s=f("a"),a=f("span"),l=d(n),r=p(),this.h()},l(e){t=m(e,"LI",{class:!0});var o=v(t);s=m(o,"A",{href:!0,class:!0});var c=v(s);a=m(c,"SPAN",{class:!0});var i=v(a);l=g(i,n),i.forEach(E),c.forEach(E),r=$(o),o.forEach(E),this.h()},h(){w(a,"class","svelte-v4z0gm"),w(s,"href",e[5].url),w(s,"class","svelte-v4z0gm"),w(t,"class","svelte-v4z0gm")},m(e,n){b(e,t,n),I(t,s),I(s,a),I(a,l),I(t,r)},p:y,d(e){e&&E(t)}}}function Se(e){let t,s,a,l,r,n,o,c,i,h,u,k,P,T=e[0],D=[];for(let f=0;f<T.length;f+=1)D[f]=Ne(Le(e,T,f));let j=e[1],x=[];for(let f=0;f<j.length;f+=1)x[f]=ze(xe(e,j,f));return{c(){t=f("footer"),s=f("section");for(let e=0;e<D.length;e+=1)D[e].c();a=p(),l=f("section"),r=f("div"),n=p(),o=f("p"),c=f("a"),i=d("The Pudding"),h=d("\n      is a digital publication that explains ideas debated in culture with visual essays."),u=p(),k=f("section"),P=f("ul");for(let e=0;e<x.length;e+=1)x[e].c();this.h()},l(e){t=m(e,"FOOTER",{class:!0});var f=v(t);s=m(f,"SECTION",{class:!0});var d=v(s);for(let t=0;t<D.length;t+=1)D[t].l(d);d.forEach(E),a=$(f),l=m(f,"SECTION",{class:!0});var p=v(l);r=m(p,"DIV",{class:!0}),v(r).forEach(E),n=$(p),o=m(p,"P",{});var w=v(o);c=m(w,"A",{href:!0,class:!0});var b=v(c);i=g(b,"The Pudding"),b.forEach(E),h=g(w,"\n      is a digital publication that explains ideas debated in culture with visual essays."),w.forEach(E),p.forEach(E),u=$(f),k=m(f,"SECTION",{class:!0});var I=v(k);P=m(I,"UL",{class:!0});var y=v(P);for(let t=0;t<x.length;t+=1)x[t].l(y);y.forEach(E),I.forEach(E),f.forEach(E),this.h()},h(){w(s,"class","stories svelte-v4z0gm"),w(r,"class","wordmark svelte-v4z0gm"),w(c,"href","https://pudding.cool"),w(c,"class","svelte-v4z0gm"),w(l,"class","about svelte-v4z0gm"),w(P,"class","svelte-v4z0gm"),w(k,"class","links svelte-v4z0gm"),w(t,"class","svelte-v4z0gm")},m(e,f){b(e,t,f),I(t,s);for(let t=0;t<D.length;t+=1)D[t].m(s,null);I(t,a),I(t,l),I(l,r),r.innerHTML=X,I(l,n),I(l,o),I(o,c),I(c,i),I(o,h),I(t,u),I(t,k),I(k,P);for(let t=0;t<x.length;t+=1)x[t].m(P,null)},p(e,[t]){if(1&t){let a;for(T=e[0],a=0;a<T.length;a+=1){const l=Le(e,T,a);D[a]?D[a].p(l,t):(D[a]=Ne(l),D[a].c(),D[a].m(s,null))}for(;a<D.length;a+=1)D[a].d(1);D.length=T.length}if(2&t){let s;for(j=e[1],s=0;s<j.length;s+=1){const a=xe(e,j,s);x[s]?x[s].p(a,t):(x[s]=ze(a),x[s].c(),x[s].m(P,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=j.length}},i:y,o:y,d(e){e&&E(t),A(D,e),A(x,e)}}}function Oe(e,t,s){let a,l=[];const r=`https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;return N((async()=>{a=window.location.href;const e=await fetch(r),t=await e.json();s(0,l=t.filter((e=>e.url!==a)).slice(0,4))})),[l,[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}],r]}class _e extends i{constructor(e){super(),h(this,e,Oe,Se,u,{})}}function Ce(e){let t,s,a,l,r,n,o,c=J.readyMessage+"";return{c(){t=f("section"),s=f("div"),a=f("h2"),l=d("🚧 Work In Progress 🚧"),r=p(),n=f("p"),o=d(c),this.h()},l(e){t=m(e,"SECTION",{class:!0});var i=v(t);s=m(i,"DIV",{class:!0});var h=v(s);a=m(h,"H2",{});var u=v(a);l=g(u,"🚧 Work In Progress 🚧"),u.forEach(E),r=$(h),n=m(h,"P",{});var f=v(n);o=g(f,c),f.forEach(E),h.forEach(E),i.forEach(E),this.h()},h(){w(s,"class","col"),w(t,"class","wip svelte-1bs1k7")},m(e,c){b(e,t,c),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o)},p:y,i:y,o:y,d(e){e&&E(t)}}}function Me(e){let t,s;const a=[e[1],{prompt:J.prompt}];let l={};for(let r=0;r<a.length;r+=1)l=Y(l,a[r]);return t=new Ee({props:l}),{c(){O(t.$$.fragment)},l(e){_(t.$$.fragment,e)},m(e,a){C(t,e,a),s=!0},p(e,s){const l=2&s?B(a,[2&s&&K(e[1]),0&s&&{prompt:J.prompt}]):{};t.$set(l)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){j(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function Ve(e){let t,s,a,l,r,n,o,c,i,h,u,d;t=new ee({});const g=[Me,Ce],y=[];return l=1,r=y[1]=g[1](e),o=new ke({props:{data:e[0]}}),i=new je({props:{tldr:J.aboutTldr,full:J.about,credits:J.credits}}),u=new _e({}),{c(){O(t.$$.fragment),s=p(),a=f("div"),r.c(),n=p(),O(o.$$.fragment),c=p(),O(i.$$.fragment),h=p(),O(u.$$.fragment),this.h()},l(e){_(t.$$.fragment,e),s=$(e),a=m(e,"DIV",{class:!0,style:!0});var l=v(a);r.l(l),n=$(l),_(o.$$.fragment,l),c=$(l),_(i.$$.fragment,l),h=$(l),_(u.$$.fragment,l),l.forEach(E),this.h()},h(){w(a,"class","c svelte-1bs1k7"),q(a,"--theme","var(--theme-"+e[2]+")")},m(e,l){C(t,e,l),b(e,s,l),b(e,a,l),y[1].m(a,null),I(a,n),C(o,a,null),I(a,c),C(i,a,null),I(a,h),C(u,a,null),d=!0},p(e,[t]){r.p(e,t)},i(e){d||(L(t.$$.fragment,e),L(r),L(o.$$.fragment,e),L(i.$$.fragment,e),L(u.$$.fragment,e),d=!0)},o(e){j(t.$$.fragment,e),j(r),j(o.$$.fragment,e),j(i.$$.fragment,e),j(u.$$.fragment,e),d=!1},d(e){V(t,e),e&&E(s),e&&E(a),y[1].d(),V(o),V(i),V(u)}}}function He(e){G("app",{themeCount:4});const t=J.contest.map(((e,t)=>c(o({},e),{attempt:J.contest.length-t}))),s=t.slice(1).map((e=>({attempt:e.attempt,slug:e.slug,title:e.title,date:e.date}))),a=t[0];return[s,a,+a.slug%4]}class Re extends i{constructor(e){super(),h(this,e,He,Ve,u,{})}}export{Re as A};