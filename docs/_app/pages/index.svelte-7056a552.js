var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&n(e,s,t[s]);return e},c=(e,a)=>t(e,s(a));import{S as i,i as h,s as u,e as f,t as d,k as p,c as m,a as v,g,d as $,n as E,b as w,f as b,D as I,E as k,h as y,H as P,I as T,J as D,B as x,r as A,u as j,v as L,z as N,K as z,L as S,j as M,m as O,o as _,M as C,w as V,l as H,N as R,O as U,P as W,Q as q,R as F,x as G,A as Y,p as B,q as K}from"../chunks/vendor-8e18d330.js";import{c as J,M as Q}from"../chunks/doc-c8744fcd.js";import{_ as X}from"../chunks/preload-helper-9f12a5fd.js";import{w as Z}from"../chunks/wordmark-0849a013.js";function ee(e){let t,s,a,l,r,n,o,c,i,h,u,y,P,T,D=J.hed+"",x=J.dek+"",A=J.details+"";return{c(){t=f("section"),s=f("div"),a=f("h1"),l=d(D),r=p(),n=f("p"),o=d(x),c=p(),i=f("details"),h=f("summary"),u=f("span"),y=d("New here? Learn about the experiment."),P=p(),T=f("span"),this.h()},l(e){t=m(e,"SECTION",{class:!0});var f=v(t);s=m(f,"DIV",{class:!0});var d=v(s);a=m(d,"H1",{class:!0});var p=v(a);l=g(p,D),p.forEach($),r=E(d),n=m(d,"P",{class:!0});var w=v(n);o=g(w,x),w.forEach($),c=E(d),i=m(d,"DETAILS",{class:!0});var b=v(i);h=m(b,"SUMMARY",{class:!0});var I=v(h);u=m(I,"SPAN",{class:!0});var k=v(u);y=g(k,"New here? Learn about the experiment."),k.forEach($),I.forEach($),P=E(b),T=m(b,"SPAN",{class:!0}),v(T).forEach($),b.forEach($),d.forEach($),f.forEach($),this.h()},h(){w(a,"class","svelte-14iz8mw"),w(n,"class","svelte-14iz8mw"),w(u,"class","svelte-14iz8mw"),w(h,"class","svelte-14iz8mw"),w(T,"class","svelte-14iz8mw"),w(i,"class","sm svelte-14iz8mw"),w(s,"class","col svelte-14iz8mw"),w(t,"class","svelte-14iz8mw")},m(e,f){b(e,t,f),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o),I(s,c),I(s,i),I(i,h),I(h,u),I(u,y),I(i,P),I(i,T),T.innerHTML=A},p:k,i:k,o:k,d(e){e&&$(t)}}}class te extends i{constructor(e){super(),h(this,e,null,ee,u,{})}}function se(e,t,s){const a=e.slice();return a[12]=t[s],a}function ae(e){let t,s;return{c(){t=f("div"),s=d(e[1]),this.h()},l(a){t=m(a,"DIV",{class:!0,id:!0});var l=v(t);s=g(l,e[1]),l.forEach($),this.h()},h(){w(t,"class","legend svelte-qe9rr1"),w(t,"id","groupd-"+e[6])},m(e,a){b(e,t,a),I(t,s)},p(e,t){2&t&&y(s,e[1])},d(e){e&&$(t)}}}function le(e){let t,s,a,l,r,n,o,c,i,h,u,k,T,D=(e[12].label||e[12].value)+"";return{c(){t=f("div"),s=f("input"),r=p(),n=f("label"),o=d(D),u=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var a=v(t);s=m(a,"INPUT",{type:!0,id:!0,name:!0,class:!0,value:!0,disabled:!0}),r=E(a),n=m(a,"LABEL",{class:!0,for:!0,"data-emoji":!0});var l=v(n);o=g(l,D),l.forEach($),u=E(a),a.forEach($),this.h()},h(){w(s,"type","radio"),w(s,"id",a=`${e[6]}-${e[12].slug}`),w(s,"name","name-"+e[6]),w(s,"class","sr-only svelte-qe9rr1"),s.__value=l=e[12].value,s.value=s.__value,s.disabled=e[3],e[10][0].push(s),w(n,"class",c="sm option "+e[2]+" svelte-qe9rr1"),w(n,"for",i=`${e[6]}-${e[12].slug}`),w(n,"data-emoji",h=e[12].emoji),w(t,"class","option svelte-qe9rr1")},m(a,l){b(a,t,l),I(t,s),s.checked=s.__value===e[0],I(t,r),I(t,n),I(n,o),I(t,u),k||(T=P(s,"change",e[9]),k=!0)},p(e,t){16&t&&a!==(a=`${e[6]}-${e[12].slug}`)&&w(s,"id",a),16&t&&l!==(l=e[12].value)&&(s.__value=l,s.value=s.__value),8&t&&(s.disabled=e[3]),1&t&&(s.checked=s.__value===e[0]),16&t&&D!==(D=(e[12].label||e[12].value)+"")&&y(o,D),4&t&&c!==(c="sm option "+e[2]+" svelte-qe9rr1")&&w(n,"class",c),16&t&&i!==(i=`${e[6]}-${e[12].slug}`)&&w(n,"for",i),16&t&&h!==(h=e[12].emoji)&&w(n,"data-emoji",h)},d(a){a&&$(t),e[10][0].splice(e[10][0].indexOf(s),1),k=!1,T()}}}function re(e){let t,s,a,l,r=e[1]&&ae(e),n=e[4],o=[];for(let c=0;c<n.length;c+=1)o[c]=le(se(e,n,c));return{c(){t=f("div"),s=f("div"),r&&r.c(),a=p(),l=f("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var n=v(t);s=m(n,"DIV",{id:!0,class:!0,role:!0,"aria-labelledby":!0});var c=v(s);r&&r.l(c),a=E(c),l=m(c,"DIV",{class:!0});var i=v(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach($),c.forEach($),n.forEach($),this.h()},h(){w(l,"class","options svelte-qe9rr1"),w(s,"id",`group-${e[6]}`),w(s,"class","group svelte-qe9rr1"),w(s,"role","radiogroup"),w(s,"aria-labelledby",`label-${e[6]}`),T(s,"is-top",e[5]),w(t,"class","button-set svelte-qe9rr1")},m(e,n){b(e,t,n),I(t,s),r&&r.m(s,null),I(s,a),I(s,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(e[1]?r?r.p(e,t):(r=ae(e),r.c(),r.m(s,a)):r&&(r.d(1),r=null),93&t){let s;for(n=e[4],s=0;s<n.length;s+=1){const a=se(e,n,s);o[s]?o[s].p(a,t):(o[s]=le(a),o[s].c(),o[s].m(l,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}32&t&&T(s,"is-top",e[5])},i:k,o:k,d(e){e&&$(t),r&&r.d(),D(o,e)}}}function ne(e,t,s){let a,l,{options:r=[]}=t,{legend:n=""}=t,{legendPosition:i="top"}=t,{labelClass:h=""}=t,{disabled:u=!1}=t,{value:f=""}=t;const d=`legend-${Math.floor(1e6*Math.random())}`,p=(e="")=>`${e}`.toLowerCase().replace(/\W/g,"");return e.$$set=e=>{"options"in e&&s(7,r=e.options),"legend"in e&&s(1,n=e.legend),"legendPosition"in e&&s(8,i=e.legendPosition),"labelClass"in e&&s(2,h=e.labelClass),"disabled"in e&&s(3,u=e.disabled),"value"in e&&s(0,f=e.value)},e.$$.update=()=>{128&e.$$.dirty&&s(4,a=r.map((e=>c(o({},e),{val:e.value,slug:p(e.value)})))),256&e.$$.dirty&&s(5,l="top"===i)},[f,n,h,u,a,l,d,r,i,function(){f=this.__value,s(0,f)},[[]]]}class oe extends i{constructor(e){super(),h(this,e,ne,re,u,{options:7,legend:1,legendPosition:8,labelClass:2,disabled:3,value:0})}}function ce(e){let t,s,a,l;return{c(){t=f("div"),s=f("p"),a=d("Thanks for voting!"),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);s=m(l,"P",{});var r=v(s);a=g(r,"Thanks for voting!"),r.forEach($),l.forEach($),this.h()},h(){w(t,"class","thanks svelte-1n6kvsn")},m(e,l){b(e,t,l),I(t,s),I(s,a)},p:k,i(e){l||z((()=>{l=S(t,W,{}),l.start()}))},o:k,d(e){e&&$(t)}}}function ie(e){let t,s,a,l,r,n,o,c,i=e[1]+1+"",h=e[2].length+"",P=e[1],T=he(e);return{c(){t=f("p"),s=d("Caption "),a=d(i),l=d(" of "),r=d(h),n=p(),T.c(),o=H(),this.h()},l(e){t=m(e,"P",{class:!0});var c=v(t);s=g(c,"Caption "),a=g(c,i),l=g(c," of "),r=g(c,h),c.forEach($),n=E(e),T.l(e),o=H(),this.h()},h(){w(t,"class","counter sm svelte-1n6kvsn")},m(e,i){b(e,t,i),I(t,s),I(t,a),I(t,l),I(t,r),b(e,n,i),T.m(e,i),b(e,o,i),c=!0},p(e,t){(!c||2&t)&&i!==(i=e[1]+1+"")&&y(a,i),2&t&&u(P,P=e[1])?(x(),A(T,1,1,k),j(),T=he(e),T.c(),L(T),T.m(o.parentNode,o)):T.p(e,t)},i(e){c||(L(T),c=!0)},o(e){A(T),c=!1},d(e){e&&$(t),e&&$(n),e&&$(o),T.d(e)}}}function he(e){let t,s,a,l,r,n,o,c,i,h,u,k,P=e[2][e[1]].text+"";function T(t){e[5](t)}let D={options:[{value:0,label:"It stinks!",emoji:"😴"},{value:1,label:"It’s okay...",emoji:"😐"},{value:2,label:"It works!",emoji:"😂"}]};return void 0!==e[0]&&(D.value=e[0]),i=new oe({props:D}),R.push((()=>U(i,"value",T))),{c(){t=f("div"),s=f("p"),a=d(P),l=p(),r=f("p"),n=d("Is this AI-generated caption funny?"),o=p(),c=f("div"),M(i.$$.fragment),this.h()},l(e){t=m(e,"DIV",{});var h=v(t);s=m(h,"P",{class:!0});var u=v(s);a=g(u,P),u.forEach($),l=E(h),r=m(h,"P",{class:!0});var f=v(r);n=g(f,"Is this AI-generated caption funny?"),f.forEach($),o=E(h),c=m(h,"DIV",{class:!0});var d=v(c);O(i.$$.fragment,d),d.forEach($),h.forEach($),this.h()},h(){w(s,"class","caption svelte-1n6kvsn"),w(r,"class","prompt sm svelte-1n6kvsn"),w(c,"class","vote svelte-1n6kvsn")},m(e,h){b(e,t,h),I(t,s),I(s,a),I(t,l),I(t,r),I(r,n),I(t,o),I(t,c),_(i,c,null),k=!0},p(e,t){(!k||2&t)&&P!==(P=e[2][e[1]].text+"")&&y(a,P);const s={};!h&&1&t&&(h=!0,s.value=e[0],C((()=>h=!1))),i.$set(s)},i(e){k||(L(i.$$.fragment,e),u||z((()=>{u=S(t,W,{}),u.start()})),k=!0)},o(e){A(i.$$.fragment,e),k=!1},d(e){e&&$(t),V(i)}}}function ue(e){let t,s,a,l;const r=[ie,ce],n=[];function o(e,t){return e[1]<e[2].length?0:1}return s=o(e),a=n[s]=r[s](e),{c(){t=f("div"),a.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var s=v(t);a.l(s),s.forEach($),this.h()},h(){w(t,"class","wrapper svelte-1n6kvsn")},m(e,a){b(e,t,a),n[s].m(t,null),l=!0},p(e,[l]){let c=s;s=o(e),s===c?n[s].p(e,l):(x(),A(n[c],1,1,(()=>{n[c]=null})),j(),a=n[s],a?a.p(e,l):(a=n[s]=r[s](e),a.c()),L(a,1),a.m(t,null))},i(e){l||(L(a),l=!0)},o(e){A(a),l=!1},d(e){e&&$(t),n[s].d()}}}function fe(e,t,s){let a,{slug:l}=t,{data:r}=t,n=["unfunny","neutral","funny"],o=0;const c=r.map(((e,t)=>({text:e,id:t}))),i={apiKey:"AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",authDomain:"new-yorker-da6db.firebaseapp.com",projectId:"new-yorker-da6db"};let h,u,f;return N((async()=>{const e=await X((()=>import("../chunks/index.esm-b808f8c7.js")),["/projects/caption-contest/_app/chunks/index.esm-b808f8c7.js","/projects/caption-contest/_app/chunks/index.esm-db6e4b98.js"]);h=e.default,await X((()=>import("../chunks/index.esm-b8505ceb.js")),["/projects/caption-contest/_app/chunks/index.esm-b8505ceb.js","/projects/caption-contest/_app/chunks/index.esm-db6e4b98.js"]),h.apps.length||(u=h.initializeApp(i),f=h.firestore(u))})),e.$$set=e=>{"slug"in e&&s(3,l=e.slug),"data"in e&&s(4,r=e.data)},e.$$.update=()=>{1&e.$$.dirty&&"number"==typeof a&&(()=>{const{id:e}=c[o],t=f.collection(l).doc(`${e}`),r=n[a];t.update({[[r]]:h.firestore.FieldValue.increment(1)}),s(0,a=void 0),s(1,o+=1)})()},function(e){let t=0,s=e.length-(t=+t);for(;s;){const a=Math.random()*s--|0,l=e[s+t];e[s+t]=e[a+t],e[a+t]=l}}(c),[a,o,c,l,r,function(e){a=e,s(0,a)}]}class de extends i{constructor(e){super(),h(this,e,fe,ue,u,{slug:3,data:4})}}function pe(e,t,s){const a=e.slice();return a[9]=t[s].type,a[10]=t[s].value,a}function me(e){let t,s,a=e[10].replace("\\:",":")+"";return{c(){t=f("p"),s=p()},l(e){t=m(e,"P",{}),v(t).forEach($),s=E(e)},m(e,l){b(e,t,l),t.innerHTML=a,b(e,s,l)},p(e,s){64&s&&a!==(a=e[10].replace("\\:",":")+"")&&(t.innerHTML=a)},d(e){e&&$(t),e&&$(s)}}}function ve(e){let t,s;return t=new de({props:{slug:e[0],data:e[8]}}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,a){_(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.slug=e[0]),256&s&&(a.data=e[8]),t.$set(a)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function ge(e){let t,s,a,l,r,n,o,c,i,h,u,k,P,T,N,z,S,M,O,_,C,V,H,R,U,W,q,F,G,Y,B,K,J,Q,X,Z,ee,te,se,ae,le=e[6],re=[];for(let f=0;f<le.length;f+=1)re[f]=me(pe(e,le,f));let ne="IsThisFunny"===e[7]&&ve(e);return{c(){t=f("section"),s=f("div"),a=f("div"),l=f("p"),r=p(),n=f("p"),o=p(),c=f("details"),i=f("summary"),h=f("span"),u=d("For the tech-nerds, here is how it works."),k=p(),P=f("span");for(let e=0;e<re.length;e+=1)re[e].c();T=p(),N=f("div"),z=f("h2"),S=d("Help the computer submit its best caption to this week’s contest."),M=p(),O=f("figure"),_=f("figcaption"),C=f("a"),V=d("#"),H=d(e[0]),R=d(": Here is the cartoon for\n          "),U=d(e[1]),W=d(" by "),q=d(e[5]),F=p(),G=f("img"),K=p(),ne&&ne.c(),J=p(),Q=f("div"),X=f("p"),Z=d("We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ee=p(),te=f("p"),se=d("Come back next week to vote on captions for a new cartoon and see how our approach evolves."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);s=m(d,"DIV",{class:!0});var p=v(s);a=m(p,"DIV",{class:!0});var w=v(a);l=m(w,"P",{}),v(l).forEach($),r=E(w),n=m(w,"P",{class:!0}),v(n).forEach($),o=E(w),c=m(w,"DETAILS",{class:!0});var b=v(c);i=m(b,"SUMMARY",{});var I=v(i);h=m(I,"SPAN",{});var y=v(h);u=g(y,"For the tech-nerds, here is how it works."),y.forEach($),I.forEach($),k=E(b),P=m(b,"SPAN",{});var D=v(P);for(let e=0;e<re.length;e+=1)re[e].l(D);D.forEach($),b.forEach($),w.forEach($),T=E(p),N=m(p,"DIV",{class:!0});var x=v(N);z=m(x,"H2",{});var A=v(z);S=g(A,"Help the computer submit its best caption to this week’s contest."),A.forEach($),M=E(x),O=m(x,"FIGURE",{class:!0});var j=v(O);_=m(j,"FIGCAPTION",{class:!0});var L=v(_);C=m(L,"A",{href:!0});var Y=v(C);V=g(Y,"#"),H=g(Y,e[0]),Y.forEach($),R=g(L,": Here is the cartoon for\n          "),U=g(L,e[1]),W=g(L," by "),q=g(L,e[5]),L.forEach($),F=E(j),G=m(j,"IMG",{src:!0,alt:!0,class:!0}),j.forEach($),K=E(x),ne&&ne.l(x),x.forEach($),J=E(p),Q=m(p,"DIV",{class:!0});var B=v(Q);X=m(B,"P",{});var ae=v(X);Z=g(ae,"We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ae.forEach($),ee=E(B),te=m(B,"P",{});var le=v(te);se=g(le,"Come back next week to vote on captions for a new cartoon and see how our approach evolves."),le.forEach($),B.forEach($),p.forEach($),d.forEach($),this.h()},h(){w(n,"class","sm"),w(c,"class","sm"),w(a,"class","info"),w(C,"href","https://www.newyorker.com/cartoons/contest"),w(_,"class","sm svelte-1gus91a"),G.src!==(Y=e[4])&&w(G,"src",Y),w(G,"alt",B="captionless cartoon by "+e[5]),w(G,"class","svelte-1gus91a"),w(O,"class","svelte-1gus91a"),w(N,"class","prompt svelte-1gus91a"),w(Q,"class","submit sm"),w(s,"class","col"),w(t,"class","svelte-1gus91a")},m(f,d){b(f,t,d),I(t,s),I(s,a),I(a,l),l.innerHTML=e[2],I(a,r),I(a,n),n.innerHTML=e[3],I(a,o),I(a,c),I(c,i),I(i,h),I(h,u),I(c,k),I(c,P);for(let e=0;e<re.length;e+=1)re[e].m(P,null);I(s,T),I(s,N),I(N,z),I(z,S),I(N,M),I(N,O),I(O,_),I(_,C),I(C,V),I(C,H),I(_,R),I(_,U),I(_,W),I(_,q),I(O,F),I(O,G),I(N,K),ne&&ne.m(N,null),I(s,J),I(s,Q),I(Q,X),I(X,Z),I(Q,ee),I(Q,te),I(te,se),ae=!0},p(e,[t]){if((!ae||4&t)&&(l.innerHTML=e[2]),(!ae||8&t)&&(n.innerHTML=e[3]),64&t){let s;for(le=e[6],s=0;s<le.length;s+=1){const a=pe(e,le,s);re[s]?re[s].p(a,t):(re[s]=me(a),re[s].c(),re[s].m(P,null))}for(;s<re.length;s+=1)re[s].d(1);re.length=le.length}(!ae||1&t)&&y(H,e[0]),(!ae||2&t)&&y(U,e[1]),(!ae||32&t)&&y(q,e[5]),(!ae||16&t&&G.src!==(Y=e[4]))&&w(G,"src",Y),(!ae||32&t&&B!==(B="captionless cartoon by "+e[5]))&&w(G,"alt",B),"IsThisFunny"===e[7]?ne?(ne.p(e,t),128&t&&L(ne,1)):(ne=ve(e),ne.c(),L(ne,1),ne.m(N,null)):ne&&(x(),A(ne,1,1,(()=>{ne=null})),j())},i(e){ae||(L(ne),ae=!0)},o(e){A(ne),ae=!1},d(e){e&&$(t),D(re,e),ne&&ne.d()}}}function $e(e,t,s){let{slug:a}=t,{date:l}=t,{hed:r}=t,{dek:n}=t,{image:o}=t,{author:c}=t,{explanation:i}=t,{widgetName:h}=t,{widgetData:u}=t;return e.$$set=e=>{"slug"in e&&s(0,a=e.slug),"date"in e&&s(1,l=e.date),"hed"in e&&s(2,r=e.hed),"dek"in e&&s(3,n=e.dek),"image"in e&&s(4,o=e.image),"author"in e&&s(5,c=e.author),"explanation"in e&&s(6,i=e.explanation),"widgetName"in e&&s(7,h=e.widgetName),"widgetData"in e&&s(8,u=e.widgetData)},[a,l,r,n,o,c,i,h,u]}class Ee extends i{constructor(e){super(),h(this,e,$e,ge,u,{slug:0,date:1,hed:2,dek:3,image:4,author:5,explanation:6,widgetName:7,widgetData:8})}}function we(e,t,s){const a=e.slice();return a[2]=t[s].slug,a[3]=t[s].title,a[4]=t[s].attempt,a[5]=t[s].date,a}function be(e){let t,s,a,l,r,n,o=e[0],c=[];for(let i=0;i<o.length;i+=1)c[i]=Ie(we(e,o,i));return{c(){t=f("section"),s=f("div"),a=f("h3"),l=d("Each week we try a new approach!"),r=p(),n=f("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=m(e,"SECTION",{id:!0,class:!0});var o=v(t);s=m(o,"DIV",{class:!0});var i=v(s);a=m(i,"H3",{});var h=v(a);l=g(h,"Each week we try a new approach!"),h.forEach($),r=E(i),n=m(i,"UL",{});var u=v(n);for(let t=0;t<c.length;t+=1)c[t].l(u);u.forEach($),i.forEach($),o.forEach($),this.h()},h(){w(s,"class","col"),w(t,"id","archive"),w(t,"class","svelte-ho7aeh")},m(e,o){b(e,t,o),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(e,t){if(3&t){let s;for(o=e[0],s=0;s<o.length;s+=1){const a=we(e,o,s);c[s]?c[s].p(a,t):(c[s]=Ie(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=o.length}},d(e){e&&$(t),D(c,e)}}}function Ie(e){let t,s,a,l,r,n,o,c,i,h,u,k=e[4]+"",P=e[3]+"",T=e[5]+"";return{c(){t=f("li"),s=f("a"),a=d("#"),l=d(k),r=d(": "),n=d(P),o=p(),c=f("span"),i=d(T),u=p(),this.h()},l(e){t=m(e,"LI",{style:!0,class:!0});var h=v(t);s=m(h,"A",{href:!0,class:!0});var f=v(s);a=g(f,"#"),l=g(f,k),r=g(f,": "),n=g(f,P),o=E(f),c=m(f,"SPAN",{class:!0});var d=v(c);i=g(d,T),d.forEach($),f.forEach($),u=E(h),h.forEach($),this.h()},h(){w(c,"class","sm"),w(s,"href",h="contest/"+e[2]),w(s,"class","svelte-ho7aeh"),q(t,"--theme","var(--theme-"+ +e[2]%e[1]+")"),w(t,"class","svelte-ho7aeh")},m(e,h){b(e,t,h),I(t,s),I(s,a),I(s,l),I(s,r),I(s,n),I(s,o),I(s,c),I(c,i),I(t,u)},p(e,a){1&a&&k!==(k=e[4]+"")&&y(l,k),1&a&&P!==(P=e[3]+"")&&y(n,P),1&a&&T!==(T=e[5]+"")&&y(i,T),1&a&&h!==(h="contest/"+e[2])&&w(s,"href",h),1&a&&q(t,"--theme","var(--theme-"+ +e[2]%e[1]+")")},d(e){e&&$(t)}}}function ke(e){let t,s=e[0].length&&be(e);return{c(){s&&s.c(),t=H()},l(e){s&&s.l(e),t=H()},m(e,a){s&&s.m(e,a),b(e,t,a)},p(e,[a]){e[0].length?s?s.p(e,a):(s=be(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:k,o:k,d(e){s&&s.d(e),e&&$(t)}}}function ye(e,t,s){let{data:a}=t;const{themeCount:l}=F("app");return e.$$set=e=>{"data"in e&&s(0,a=e.data)},[a,l]}class Pe extends i{constructor(e){super(),h(this,e,ye,ke,u,{data:0})}}function Te(e,t,s){const a=e.slice();return a[3]=t[s].value,a}function De(e){let t,s=e[3]+"";return{c(){t=f("p")},l(e){t=m(e,"P",{}),v(t).forEach($)},m(e,a){b(e,t,a),t.innerHTML=s},p(e,a){2&a&&s!==(s=e[3]+"")&&(t.innerHTML=s)},d(e){e&&$(t)}}}function xe(e){let t,s,a,l,r,n,o,c,i,h,u,P,T,x,A,j,L,N,z,S,M,O,_,C,V,H=e[1],R=[];for(let f=0;f<H.length;f+=1)R[f]=De(Te(e,H,f));return{c(){t=f("section"),s=f("div"),a=f("h3"),l=d("Why are we doing this?"),r=p(),n=f("p"),o=f("strong"),c=d("TLDR:"),i=p(),h=d(e[0]),u=p(),P=f("details"),T=f("summary"),x=d("And if you want, here’s the long version."),A=p(),j=f("span");for(let e=0;e<R.length;e+=1)R[e].c();L=p(),N=f("div"),z=f("p"),S=p(),M=f("p"),O=d("Want to see another experiment with GPT-3? Check out "),_=f("a"),C=d("Nothing Breaks Like A.I. Heart"),V=d("."),this.h()},l(f){t=m(f,"SECTION",{class:!0});var d=v(t);s=m(d,"DIV",{class:!0});var p=v(s);a=m(p,"H3",{class:!0});var w=v(a);l=g(w,"Why are we doing this?"),w.forEach($),r=E(p),n=m(p,"P",{class:!0});var b=v(n);o=m(b,"STRONG",{});var I=v(o);c=g(I,"TLDR:"),I.forEach($),i=E(b),h=g(b,e[0]),b.forEach($),u=E(p),P=m(p,"DETAILS",{class:!0});var k=v(P);T=m(k,"SUMMARY",{});var y=v(T);x=g(y,"And if you want, here’s the long version."),y.forEach($),A=E(k),j=m(k,"SPAN",{});var D=v(j);for(let e=0;e<R.length;e+=1)R[e].l(D);D.forEach($),k.forEach($),L=E(p),N=m(p,"DIV",{class:!0});var H=v(N);z=m(H,"P",{class:!0}),v(z).forEach($),S=E(H),M=m(H,"P",{class:!0});var U=v(M);O=g(U,"Want to see another experiment with GPT-3? Check out "),_=m(U,"A",{href:!0});var W=v(_);C=g(W,"Nothing Breaks Like A.I. Heart"),W.forEach($),V=g(U,"."),U.forEach($),H.forEach($),p.forEach($),d.forEach($),this.h()},h(){w(a,"class","svelte-jhu76e"),w(n,"class","sm"),w(P,"class","sm"),w(z,"class","sm"),w(_,"href","https://pudding.cool/2021/03/love-and-ai/"),w(M,"class","sm"),w(N,"class","credits svelte-jhu76e"),w(s,"class","col"),w(t,"class","svelte-jhu76e")},m(f,d){b(f,t,d),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o),I(o,c),I(n,i),I(n,h),I(s,u),I(s,P),I(P,T),I(T,x),I(P,A),I(P,j);for(let e=0;e<R.length;e+=1)R[e].m(j,null);I(s,L),I(s,N),I(N,z),z.innerHTML=e[2],I(N,S),I(N,M),I(M,O),I(M,_),I(_,C),I(M,V)},p(e,[t]){if(1&t&&y(h,e[0]),2&t){let s;for(H=e[1],s=0;s<H.length;s+=1){const a=Te(e,H,s);R[s]?R[s].p(a,t):(R[s]=De(a),R[s].c(),R[s].m(j,null))}for(;s<R.length;s+=1)R[s].d(1);R.length=H.length}4&t&&(z.innerHTML=e[2])},i:k,o:k,d(e){e&&$(t),D(R,e)}}}function Ae(e,t,s){let{tldr:a}=t,{full:l}=t,{credits:r}=t;return e.$$set=e=>{"tldr"in e&&s(0,a=e.tldr),"full"in e&&s(1,l=e.full),"credits"in e&&s(2,r=e.credits)},[a,l,r]}class je extends i{constructor(e){super(),h(this,e,Ae,xe,u,{tldr:0,full:1,credits:2})}}function Le(e,t,s){const a=e.slice();return a[5]=t[s],a}function Ne(e,t,s){const a=e.slice();return a[8]=t[s].hed,a[2]=t[s].url,a[9]=t[s].image,a}function ze(e){let t,s,a,l,r,n,o,c,i,h=e[8]+"";return{c(){t=f("div"),s=f("a"),a=f("img"),r=p(),n=f("span"),o=d(h),i=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);s=m(l,"A",{href:!0,class:!0});var c=v(s);a=m(c,"IMG",{src:!0,alt:!0}),r=E(c),n=m(c,"SPAN",{class:!0});var u=v(n);o=g(u,h),u.forEach($),c.forEach($),i=E(l),l.forEach($),this.h()},h(){a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(a,"src",l),w(a,"alt","thumbnail"),w(n,"class","svelte-v4z0gm"),w(s,"href",c="https://pudding.cool/"+e[2]),w(s,"class","svelte-v4z0gm"),w(t,"class","story svelte-v4z0gm")},m(e,l){b(e,t,l),I(t,s),I(s,a),I(s,r),I(s,n),I(n,o),I(t,i)},p(e,t){1&t&&a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&w(a,"src",l),1&t&&h!==(h=e[8]+"")&&y(o,h),1&t&&c!==(c="https://pudding.cool/"+e[2])&&w(s,"href",c)},d(e){e&&$(t)}}}function Se(e){let t,s,a,l,r,n=e[5].name.toUpperCase()+"";return{c(){t=f("li"),s=f("a"),a=f("span"),l=d(n),r=p(),this.h()},l(e){t=m(e,"LI",{class:!0});var o=v(t);s=m(o,"A",{href:!0,class:!0});var c=v(s);a=m(c,"SPAN",{class:!0});var i=v(a);l=g(i,n),i.forEach($),c.forEach($),r=E(o),o.forEach($),this.h()},h(){w(a,"class","svelte-v4z0gm"),w(s,"href",e[5].url),w(s,"class","svelte-v4z0gm"),w(t,"class","svelte-v4z0gm")},m(e,n){b(e,t,n),I(t,s),I(s,a),I(a,l),I(t,r)},p:k,d(e){e&&$(t)}}}function Me(e){let t,s,a,l,r,n,o,c,i,h,u,y,P,T=e[0],x=[];for(let f=0;f<T.length;f+=1)x[f]=ze(Ne(e,T,f));let A=e[1],j=[];for(let f=0;f<A.length;f+=1)j[f]=Se(Le(e,A,f));return{c(){t=f("footer"),s=f("section");for(let e=0;e<x.length;e+=1)x[e].c();a=p(),l=f("section"),r=f("div"),n=p(),o=f("p"),c=f("a"),i=d("The Pudding"),h=d("\n      is a digital publication that explains ideas debated in culture with visual essays."),u=p(),y=f("section"),P=f("ul");for(let e=0;e<j.length;e+=1)j[e].c();this.h()},l(e){t=m(e,"FOOTER",{class:!0});var f=v(t);s=m(f,"SECTION",{class:!0});var d=v(s);for(let t=0;t<x.length;t+=1)x[t].l(d);d.forEach($),a=E(f),l=m(f,"SECTION",{class:!0});var p=v(l);r=m(p,"DIV",{class:!0}),v(r).forEach($),n=E(p),o=m(p,"P",{});var w=v(o);c=m(w,"A",{href:!0,class:!0});var b=v(c);i=g(b,"The Pudding"),b.forEach($),h=g(w,"\n      is a digital publication that explains ideas debated in culture with visual essays."),w.forEach($),p.forEach($),u=E(f),y=m(f,"SECTION",{class:!0});var I=v(y);P=m(I,"UL",{class:!0});var k=v(P);for(let t=0;t<j.length;t+=1)j[t].l(k);k.forEach($),I.forEach($),f.forEach($),this.h()},h(){w(s,"class","stories svelte-v4z0gm"),w(r,"class","wordmark svelte-v4z0gm"),w(c,"href","https://pudding.cool"),w(c,"class","svelte-v4z0gm"),w(l,"class","about svelte-v4z0gm"),w(P,"class","svelte-v4z0gm"),w(y,"class","links svelte-v4z0gm"),w(t,"class","svelte-v4z0gm")},m(e,f){b(e,t,f),I(t,s);for(let t=0;t<x.length;t+=1)x[t].m(s,null);I(t,a),I(t,l),I(l,r),r.innerHTML=Z,I(l,n),I(l,o),I(o,c),I(c,i),I(o,h),I(t,u),I(t,y),I(y,P);for(let t=0;t<j.length;t+=1)j[t].m(P,null)},p(e,[t]){if(1&t){let a;for(T=e[0],a=0;a<T.length;a+=1){const l=Ne(e,T,a);x[a]?x[a].p(l,t):(x[a]=ze(l),x[a].c(),x[a].m(s,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=T.length}if(2&t){let s;for(A=e[1],s=0;s<A.length;s+=1){const a=Le(e,A,s);j[s]?j[s].p(a,t):(j[s]=Se(a),j[s].c(),j[s].m(P,null))}for(;s<j.length;s+=1)j[s].d(1);j.length=A.length}},i:k,o:k,d(e){e&&$(t),D(x,e),D(j,e)}}}function Oe(e,t,s){let a,l=[];const r=`https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;return N((async()=>{a=window.location.href;const e=await fetch(r),t=await e.json();s(0,l=t.filter((e=>e.url!==a)).slice(0,4))})),[l,[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}],r]}class _e extends i{constructor(e){super(),h(this,e,Oe,Me,u,{})}}function Ce(e){let t,s,a,l,r,n,o,c=J.readyMessage+"";return{c(){t=f("section"),s=f("div"),a=f("h2"),l=d("🚧 Work In Progress 🚧"),r=p(),n=f("p"),o=d(c),this.h()},l(e){t=m(e,"SECTION",{class:!0});var i=v(t);s=m(i,"DIV",{class:!0});var h=v(s);a=m(h,"H2",{});var u=v(a);l=g(u,"🚧 Work In Progress 🚧"),u.forEach($),r=E(h),n=m(h,"P",{});var f=v(n);o=g(f,c),f.forEach($),h.forEach($),i.forEach($),this.h()},h(){w(s,"class","col"),w(t,"class","wip svelte-1bs1k7")},m(e,c){b(e,t,c),I(t,s),I(s,a),I(a,l),I(s,r),I(s,n),I(n,o)},p:k,i:k,o:k,d(e){e&&$(t)}}}function Ve(e){let t,s;const a=[e[1],{prompt:J.prompt}];let l={};for(let r=0;r<a.length;r+=1)l=Y(l,a[r]);return t=new Ee({props:l}),{c(){M(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,a){_(t,e,a),s=!0},p(e,s){const l=2&s?B(a,[2&s&&K(e[1]),0&s&&{prompt:J.prompt}]):{};t.$set(l)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){A(t.$$.fragment,e),s=!1},d(e){V(t,e)}}}function He(e){let t,s,a,l,r,n,o,c,i,h,u,d;t=new te({});const g=[Ve,Ce],k=[];return l=0,r=k[0]=g[0](e),o=new Pe({props:{data:e[0]}}),i=new je({props:{tldr:J.aboutTldr,full:J.about,credits:J.credits}}),u=new _e({}),{c(){M(t.$$.fragment),s=p(),a=f("div"),r.c(),n=p(),M(o.$$.fragment),c=p(),M(i.$$.fragment),h=p(),M(u.$$.fragment),this.h()},l(e){O(t.$$.fragment,e),s=E(e),a=m(e,"DIV",{class:!0,style:!0});var l=v(a);r.l(l),n=E(l),O(o.$$.fragment,l),c=E(l),O(i.$$.fragment,l),h=E(l),O(u.$$.fragment,l),l.forEach($),this.h()},h(){w(a,"class","c svelte-1bs1k7"),q(a,"--theme","var(--theme-"+e[2]+")")},m(e,l){_(t,e,l),b(e,s,l),b(e,a,l),k[0].m(a,null),I(a,n),_(o,a,null),I(a,c),_(i,a,null),I(a,h),_(u,a,null),d=!0},p(e,[t]){r.p(e,t)},i(e){d||(L(t.$$.fragment,e),L(r),L(o.$$.fragment,e),L(i.$$.fragment,e),L(u.$$.fragment,e),d=!0)},o(e){A(t.$$.fragment,e),A(r),A(o.$$.fragment,e),A(i.$$.fragment,e),A(u.$$.fragment,e),d=!1},d(e){V(t,e),e&&$(s),e&&$(a),k[0].d(),V(o),V(i),V(u)}}}function Re(e){G("app",{themeCount:4});const t=J.contest.map(((e,t)=>c(o({},e),{attempt:J.contest.length-t}))),s=t.slice(1).map((e=>({attempt:e.attempt,slug:e.slug,title:e.title,date:e.date}))),a=t[0];return[s,a,+a.slug%4]}class Ue extends i{constructor(e){super(),h(this,e,Re,He,u,{})}}function We(e){let t,s,a,l;return t=new Q({props:{title:J.hed,description:J.dek,url:"https://pudding.cool/projects/caption-contest"}}),a=new Ue({}),{c(){M(t.$$.fragment),s=p(),M(a.$$.fragment)},l(e){O(t.$$.fragment,e),s=E(e),O(a.$$.fragment,e)},m(e,r){_(t,e,r),b(e,s,r),_(a,e,r),l=!0},p:k,i(e){l||(L(t.$$.fragment,e),L(a.$$.fragment,e),l=!0)},o(e){A(t.$$.fragment,e),A(a.$$.fragment,e),l=!1},d(e){V(t,e),e&&$(s),V(a,e)}}}const qe=!0;export default class extends i{constructor(e){super(),h(this,e,null,We,u,{})}}export{qe as prerender};
