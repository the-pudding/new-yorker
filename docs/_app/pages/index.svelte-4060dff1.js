var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&n(e,s,t[s]);if(a)for(var s of a(t))r.call(t,s)&&n(e,s,t[s]);return e},c=(e,a)=>t(e,s(a));import{S as i,i as h,s as u,e as d,t as f,k as p,c as m,a as v,g,d as $,n as E,b,f as w,D as y,E as I,h as k,H as x,I as P,J as D,K as T,B as A,r as V,u as _,v as L,z as N,j,m as S,o as M,L as z,M as O,w as C,N as H,l as U,O as R,P as q,Q as F,R as W,x as G,A as Y,p as B,q as K}from"../chunks/vendor-eafccbb7.js";import{c as J,M as Q}from"../chunks/doc-8e7e98b6.js";import{_ as X}from"../chunks/preload-helper-9f12a5fd.js";import{w as Z}from"../chunks/wordmark-0849a013.js";function ee(e){let t,s,a,l,r,n,o,c,i,h,u,k,x,P,D=J.hed+"",T=J.dek+"",A=J.details+"";return{c(){t=d("section"),s=d("div"),a=d("h1"),l=f(D),r=p(),n=d("p"),o=f(T),c=p(),i=d("details"),h=d("summary"),u=d("span"),k=f("New here? Learn about the experiment."),x=p(),P=d("span"),this.h()},l(e){t=m(e,"SECTION",{class:!0});var d=v(t);s=m(d,"DIV",{class:!0});var f=v(s);a=m(f,"H1",{class:!0});var p=v(a);l=g(p,D),p.forEach($),r=E(f),n=m(f,"P",{class:!0});var b=v(n);o=g(b,T),b.forEach($),c=E(f),i=m(f,"DETAILS",{class:!0});var w=v(i);h=m(w,"SUMMARY",{class:!0});var y=v(h);u=m(y,"SPAN",{class:!0});var I=v(u);k=g(I,"New here? Learn about the experiment."),I.forEach($),y.forEach($),x=E(w),P=m(w,"SPAN",{class:!0}),v(P).forEach($),w.forEach($),f.forEach($),d.forEach($),this.h()},h(){b(a,"class","svelte-14iz8mw"),b(n,"class","svelte-14iz8mw"),b(u,"class","svelte-14iz8mw"),b(h,"class","svelte-14iz8mw"),b(P,"class","svelte-14iz8mw"),b(i,"class","sm svelte-14iz8mw"),b(s,"class","col svelte-14iz8mw"),b(t,"class","svelte-14iz8mw")},m(e,d){w(e,t,d),y(t,s),y(s,a),y(a,l),y(s,r),y(s,n),y(n,o),y(s,c),y(s,i),y(i,h),y(h,u),y(u,k),y(i,x),y(i,P),P.innerHTML=A},p:I,i:I,o:I,d(e){e&&$(t)}}}class te extends i{constructor(e){super(),h(this,e,null,ee,u,{})}}function se(e,t,s){const a=e.slice();return a[12]=t[s],a}function ae(e){let t,s;return{c(){t=d("div"),s=f(e[1]),this.h()},l(a){t=m(a,"DIV",{class:!0,id:!0});var l=v(t);s=g(l,e[1]),l.forEach($),this.h()},h(){b(t,"class","legend svelte-qe9rr1"),b(t,"id","groupd-"+e[6])},m(e,a){w(e,t,a),y(t,s)},p(e,t){2&t&&k(s,e[1])},d(e){e&&$(t)}}}function le(e){let t,s,a,l,r,n,o,c,i,h,u,I,P,D=(e[12].label||e[12].value)+"";return{c(){t=d("div"),s=d("input"),r=p(),n=d("label"),o=f(D),u=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var a=v(t);s=m(a,"INPUT",{type:!0,id:!0,name:!0,class:!0,value:!0,disabled:!0}),r=E(a),n=m(a,"LABEL",{class:!0,for:!0,"data-emoji":!0});var l=v(n);o=g(l,D),l.forEach($),u=E(a),a.forEach($),this.h()},h(){b(s,"type","radio"),b(s,"id",a=`${e[6]}-${e[12].slug}`),b(s,"name","name-"+e[6]),b(s,"class","sr-only svelte-qe9rr1"),s.__value=l=e[12].value,s.value=s.__value,s.disabled=e[3],e[10][0].push(s),b(n,"class",c="sm option "+e[2]+" svelte-qe9rr1"),b(n,"for",i=`${e[6]}-${e[12].slug}`),b(n,"data-emoji",h=e[12].emoji),b(t,"class","option svelte-qe9rr1")},m(a,l){w(a,t,l),y(t,s),s.checked=s.__value===e[0],y(t,r),y(t,n),y(n,o),y(t,u),I||(P=x(s,"change",e[9]),I=!0)},p(e,t){16&t&&a!==(a=`${e[6]}-${e[12].slug}`)&&b(s,"id",a),16&t&&l!==(l=e[12].value)&&(s.__value=l,s.value=s.__value),8&t&&(s.disabled=e[3]),1&t&&(s.checked=s.__value===e[0]),16&t&&D!==(D=(e[12].label||e[12].value)+"")&&k(o,D),4&t&&c!==(c="sm option "+e[2]+" svelte-qe9rr1")&&b(n,"class",c),16&t&&i!==(i=`${e[6]}-${e[12].slug}`)&&b(n,"for",i),16&t&&h!==(h=e[12].emoji)&&b(n,"data-emoji",h)},d(a){a&&$(t),e[10][0].splice(e[10][0].indexOf(s),1),I=!1,P()}}}function re(e){let t,s,a,l,r=e[1]&&ae(e),n=e[4],o=[];for(let c=0;c<n.length;c+=1)o[c]=le(se(e,n,c));return{c(){t=d("div"),s=d("div"),r&&r.c(),a=p(),l=d("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){t=m(e,"DIV",{class:!0});var n=v(t);s=m(n,"DIV",{id:!0,class:!0,role:!0,"aria-labelledby":!0});var c=v(s);r&&r.l(c),a=E(c),l=m(c,"DIV",{class:!0});var i=v(l);for(let t=0;t<o.length;t+=1)o[t].l(i);i.forEach($),c.forEach($),n.forEach($),this.h()},h(){b(l,"class","options svelte-qe9rr1"),b(s,"id",`group-${e[6]}`),b(s,"class","group svelte-qe9rr1"),b(s,"role","radiogroup"),b(s,"aria-labelledby",`label-${e[6]}`),P(s,"is-top",e[5]),b(t,"class","button-set svelte-qe9rr1")},m(e,n){w(e,t,n),y(t,s),r&&r.m(s,null),y(s,a),y(s,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(e,[t]){if(e[1]?r?r.p(e,t):(r=ae(e),r.c(),r.m(s,a)):r&&(r.d(1),r=null),93&t){let s;for(n=e[4],s=0;s<n.length;s+=1){const a=se(e,n,s);o[s]?o[s].p(a,t):(o[s]=le(a),o[s].c(),o[s].m(l,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}32&t&&P(s,"is-top",e[5])},i:I,o:I,d(e){e&&$(t),r&&r.d(),D(o,e)}}}function ne(e,t,s){let a,l,{options:r=[]}=t,{legend:n=""}=t,{legendPosition:i="top"}=t,{labelClass:h=""}=t,{disabled:u=!1}=t,{value:d=""}=t;const f=`legend-${Math.floor(1e6*Math.random())}`,p=(e="")=>`${e}`.toLowerCase().replace(/\W/g,"");return e.$$set=e=>{"options"in e&&s(7,r=e.options),"legend"in e&&s(1,n=e.legend),"legendPosition"in e&&s(8,i=e.legendPosition),"labelClass"in e&&s(2,h=e.labelClass),"disabled"in e&&s(3,u=e.disabled),"value"in e&&s(0,d=e.value)},e.$$.update=()=>{128&e.$$.dirty&&s(4,a=r.map((e=>c(o({},e),{val:e.value,slug:p(e.value)})))),256&e.$$.dirty&&s(5,l="top"===i)},[d,n,h,u,a,l,f,r,i,function(){d=this.__value,s(0,d)},[[]]]}class oe extends i{constructor(e){super(),h(this,e,ne,re,u,{options:7,legend:1,legendPosition:8,labelClass:2,disabled:3,value:0})}}function ce(e){let t,s,a,l,r,n,o,c,i,h,u,f,g,k,x,P;return{c(){t=d("div"),s=d("form"),a=d("div"),l=d("div"),r=d("input"),n=p(),o=d("div"),c=d("div"),i=p(),h=d("div"),u=p(),f=d("div"),g=d("input"),k=p(),x=d("div"),P=d("input"),this.h()},l(e){t=m(e,"DIV",{id:!0});var d=v(t);s=m(d,"FORM",{action:!0,method:!0,id:!0,name:!0,class:!0,target:!0,novalidate:!0});var p=v(s);a=m(p,"DIV",{id:!0,class:!0});var b=v(a);l=m(b,"DIV",{class:!0});var w=v(l);r=m(w,"INPUT",{type:!0,value:!0,name:!0,class:!0,id:!0,placeholder:!0}),w.forEach($),n=E(b),o=m(b,"DIV",{id:!0,class:!0});var y=v(o);c=m(y,"DIV",{class:!0,id:!0,style:!0}),v(c).forEach($),i=E(y),h=m(y,"DIV",{class:!0,id:!0,style:!0}),v(h).forEach($),y.forEach($),u=E(b),f=m(b,"DIV",{style:!0,"aria-hidden":!0});var I=v(f);g=m(I,"INPUT",{type:!0,name:!0,tabindex:!0,value:!0,class:!0}),I.forEach($),k=E(b),x=m(b,"DIV",{class:!0});var D=v(x);P=m(D,"INPUT",{type:!0,value:!0,name:!0,id:!0,class:!0}),D.forEach($),b.forEach($),p.forEach($),d.forEach($),this.h()},h(){b(r,"type","email"),r.value="",b(r,"name","EMAIL"),b(r,"class","required email svelte-1c3pr2f"),b(r,"id","mce-EMAIL"),b(r,"placeholder","you@example.com"),b(l,"class","mc-field-group"),b(c,"class","response"),b(c,"id","mce-error-response"),T(c,"display","none"),b(h,"class","response"),b(h,"id","mce-success-response"),T(h,"display","none"),b(o,"id","mce-responses"),b(o,"class","clear"),b(g,"type","text"),b(g,"name","b_c70d3c0e372cde433143ffeab_905092958a"),b(g,"tabindex","-1"),g.value="",b(g,"class","svelte-1c3pr2f"),T(f,"position","absolute"),T(f,"left","-5000px"),b(f,"aria-hidden","true"),b(P,"type","submit"),P.value="Subscribe",b(P,"name","subscribe"),b(P,"id","mc-embedded-subscribe"),b(P,"class","svelte-1c3pr2f"),b(x,"class","clear"),b(a,"id","mc_embed_signup_scroll"),b(a,"class","svelte-1c3pr2f"),b(s,"action","https://gmail.us11.list-manage.com/subscribe/post?u=c70d3c0e372cde433143ffeab&id=905092958a"),b(s,"method","post"),b(s,"id","mc-embedded-subscribe-form"),b(s,"name","mc-embedded-subscribe-form"),b(s,"class","validate"),b(s,"target","_blank"),s.noValidate=!0,b(t,"id","mc_embed_signup")},m(e,d){w(e,t,d),y(t,s),y(s,a),y(a,l),y(l,r),y(a,n),y(a,o),y(o,c),y(o,i),y(o,h),y(a,u),y(a,f),y(f,g),y(a,k),y(a,x),y(x,P)},p:I,i:I,o:I,d(e){e&&$(t)}}}class ie extends i{constructor(e){super(),h(this,e,null,ce,u,{})}}function he(e){let t,s,a,l,r,n,o,c,i,h;return c=new ie({}),{c(){t=d("div"),s=d("h3"),a=f("Thanks for voting!"),l=p(),r=d("p"),n=f("Stay updated: get notified when we have a new approach and captions to rate (weekly-ish)."),o=p(),j(c.$$.fragment),this.h()},l(e){t=m(e,"DIV",{class:!0});var i=v(t);s=m(i,"H3",{class:!0});var h=v(s);a=g(h,"Thanks for voting!"),h.forEach($),l=E(i),r=m(i,"P",{class:!0});var u=v(r);n=g(u,"Stay updated: get notified when we have a new approach and captions to rate (weekly-ish)."),u.forEach($),o=E(i),S(c.$$.fragment,i),i.forEach($),this.h()},h(){b(s,"class","svelte-o0xdxm"),b(r,"class","sm"),b(t,"class","thanks svelte-o0xdxm")},m(e,i){w(e,t,i),y(t,s),y(s,a),y(t,l),y(t,r),y(r,n),y(t,o),M(c,t,null),h=!0},p:I,i(e){h||(L(c.$$.fragment,e),i||z((()=>{i=O(t,F,{}),i.start()})),h=!0)},o(e){V(c.$$.fragment,e),h=!1},d(e){e&&$(t),C(c)}}}function ue(e){let t,s,a,l,r,n,o,c,i=e[1]+1+"",h=e[2].length+"",x=e[1],P=de(e);return{c(){t=d("p"),s=f("Caption "),a=f(i),l=f(" of "),r=f(h),n=p(),P.c(),o=U(),this.h()},l(e){t=m(e,"P",{class:!0});var c=v(t);s=g(c,"Caption "),a=g(c,i),l=g(c," of "),r=g(c,h),c.forEach($),n=E(e),P.l(e),o=U(),this.h()},h(){b(t,"class","counter sm svelte-o0xdxm")},m(e,i){w(e,t,i),y(t,s),y(t,a),y(t,l),y(t,r),w(e,n,i),P.m(e,i),w(e,o,i),c=!0},p(e,t){(!c||2&t)&&i!==(i=e[1]+1+"")&&k(a,i),2&t&&u(x,x=e[1])?(A(),V(P,1,1,I),_(),P=de(e),P.c(),L(P),P.m(o.parentNode,o)):P.p(e,t)},i(e){c||(L(P),c=!0)},o(e){V(P),c=!1},d(e){e&&$(t),e&&$(n),e&&$(o),P.d(e)}}}function de(e){let t,s,a,l,r,n,o,c,i,h,u,I,x=e[2][e[1]].text+"";function P(t){e[5](t)}let D={options:[{value:0,label:"It stinks!",emoji:"😴"},{value:1,label:"It’s okay...",emoji:"😐"},{value:2,label:"It works!",emoji:"😂"}]};return void 0!==e[0]&&(D.value=e[0]),i=new oe({props:D}),R.push((()=>q(i,"value",P))),{c(){t=d("div"),s=d("p"),a=f(x),l=p(),r=d("p"),n=f("Is this AI-generated caption funny?"),o=p(),c=d("div"),j(i.$$.fragment),this.h()},l(e){t=m(e,"DIV",{});var h=v(t);s=m(h,"P",{class:!0});var u=v(s);a=g(u,x),u.forEach($),l=E(h),r=m(h,"P",{class:!0});var d=v(r);n=g(d,"Is this AI-generated caption funny?"),d.forEach($),o=E(h),c=m(h,"DIV",{class:!0});var f=v(c);S(i.$$.fragment,f),f.forEach($),h.forEach($),this.h()},h(){b(s,"class","caption svelte-o0xdxm"),b(r,"class","prompt sm svelte-o0xdxm"),b(c,"class","vote svelte-o0xdxm")},m(e,h){w(e,t,h),y(t,s),y(s,a),y(t,l),y(t,r),y(r,n),y(t,o),y(t,c),M(i,c,null),I=!0},p(e,t){(!I||2&t)&&x!==(x=e[2][e[1]].text+"")&&k(a,x);const s={};!h&&1&t&&(h=!0,s.value=e[0],H((()=>h=!1))),i.$set(s)},i(e){I||(L(i.$$.fragment,e),u||z((()=>{u=O(t,F,{}),u.start()})),I=!0)},o(e){V(i.$$.fragment,e),I=!1},d(e){e&&$(t),C(i)}}}function fe(e){let t,s,a,l;const r=[ue,he],n=[];function o(e,t){return e[1]<e[2].length?0:1}return s=o(e),a=n[s]=r[s](e),{c(){t=d("div"),a.c(),this.h()},l(e){t=m(e,"DIV",{class:!0});var s=v(t);a.l(s),s.forEach($),this.h()},h(){b(t,"class","wrapper svelte-o0xdxm")},m(e,a){w(e,t,a),n[s].m(t,null),l=!0},p(e,[l]){let c=s;s=o(e),s===c?n[s].p(e,l):(A(),V(n[c],1,1,(()=>{n[c]=null})),_(),a=n[s],a?a.p(e,l):(a=n[s]=r[s](e),a.c()),L(a,1),a.m(t,null))},i(e){l||(L(a),l=!0)},o(e){V(a),l=!1},d(e){e&&$(t),n[s].d()}}}function pe(e,t,s){let a,{slug:l}=t,{data:r}=t,n=["unfunny","neutral","funny"],o=0;const c=r.map(((e,t)=>({text:e,id:t}))),i={apiKey:"AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",authDomain:"new-yorker-da6db.firebaseapp.com",projectId:"new-yorker-da6db"};let h,u,d;return N((async()=>{const e=await X((()=>import("../chunks/index.esm-b808f8c7.js")),["/projects/caption-contest/_app/chunks/index.esm-b808f8c7.js","/projects/caption-contest/_app/chunks/index.esm-db6e4b98.js"]);h=e.default,await X((()=>import("../chunks/index.esm-b8505ceb.js")),["/projects/caption-contest/_app/chunks/index.esm-b8505ceb.js","/projects/caption-contest/_app/chunks/index.esm-db6e4b98.js"]),h.apps.length||(u=h.initializeApp(i),d=h.firestore(u))})),e.$$set=e=>{"slug"in e&&s(3,l=e.slug),"data"in e&&s(4,r=e.data)},e.$$.update=()=>{1&e.$$.dirty&&"number"==typeof a&&(()=>{const{id:e}=c[o],t=d.collection(l).doc(`${e}`),r=n[a];t.update({[[r]]:h.firestore.FieldValue.increment(1)}),s(0,a=void 0),s(1,o+=1)})()},function(e){let t=0,s=e.length-(t=+t);for(;s;){const a=Math.random()*s--|0,l=e[s+t];e[s+t]=e[a+t],e[a+t]=l}}(c),[a,o,c,l,r,function(e){a=e,s(0,a)}]}class me extends i{constructor(e){super(),h(this,e,pe,fe,u,{slug:3,data:4})}}function ve(e,t,s){const a=e.slice();return a[9]=t[s].type,a[10]=t[s].value,a}function ge(e){let t,s,a=e[10].replace("\\:",":")+"";return{c(){t=d("p"),s=p()},l(e){t=m(e,"P",{}),v(t).forEach($),s=E(e)},m(e,l){w(e,t,l),t.innerHTML=a,w(e,s,l)},p(e,s){64&s&&a!==(a=e[10].replace("\\:",":")+"")&&(t.innerHTML=a)},d(e){e&&$(t),e&&$(s)}}}function $e(e){let t,s;return t=new me({props:{slug:e[0],data:e[8]}}),{c(){j(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){M(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.slug=e[0]),256&s&&(a.data=e[8]),t.$set(a)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){V(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function Ee(e){let t,s,a,l,r,n,o,c,i,h,u,I,x,P,T,N,j,S,M,z,O,C,H,U,R,q,F,W,G,Y,B,K,J,Q,X,Z,ee,te,se,ae,le=e[6],re=[];for(let d=0;d<le.length;d+=1)re[d]=ge(ve(e,le,d));let ne="IsThisFunny"===e[7]&&$e(e);return{c(){t=d("section"),s=d("div"),a=d("div"),l=d("p"),r=p(),n=d("p"),o=p(),c=d("details"),i=d("summary"),h=d("span"),u=f("For the tech-nerds, here is how it works."),I=p(),x=d("span");for(let e=0;e<re.length;e+=1)re[e].c();P=p(),T=d("div"),N=d("h2"),j=f("Help the computer submit its best caption to this week’s contest."),S=p(),M=d("figure"),z=d("figcaption"),O=d("a"),C=f("#"),H=f(e[0]),U=f(": Here is the cartoon for\n          "),R=f(e[1]),q=f(" by "),F=f(e[5]),W=p(),G=d("img"),K=p(),ne&&ne.c(),J=p(),Q=d("div"),X=d("p"),Z=f("We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ee=p(),te=d("p"),se=f("Come back next week to vote on captions for a new cartoon and see how our approach evolves."),this.h()},l(d){t=m(d,"SECTION",{class:!0});var f=v(t);s=m(f,"DIV",{class:!0});var p=v(s);a=m(p,"DIV",{class:!0});var b=v(a);l=m(b,"P",{}),v(l).forEach($),r=E(b),n=m(b,"P",{class:!0}),v(n).forEach($),o=E(b),c=m(b,"DETAILS",{class:!0});var w=v(c);i=m(w,"SUMMARY",{});var y=v(i);h=m(y,"SPAN",{});var k=v(h);u=g(k,"For the tech-nerds, here is how it works."),k.forEach($),y.forEach($),I=E(w),x=m(w,"SPAN",{});var D=v(x);for(let e=0;e<re.length;e+=1)re[e].l(D);D.forEach($),w.forEach($),b.forEach($),P=E(p),T=m(p,"DIV",{class:!0});var A=v(T);N=m(A,"H2",{});var V=v(N);j=g(V,"Help the computer submit its best caption to this week’s contest."),V.forEach($),S=E(A),M=m(A,"FIGURE",{class:!0});var _=v(M);z=m(_,"FIGCAPTION",{class:!0});var L=v(z);O=m(L,"A",{href:!0});var Y=v(O);C=g(Y,"#"),H=g(Y,e[0]),Y.forEach($),U=g(L,": Here is the cartoon for\n          "),R=g(L,e[1]),q=g(L," by "),F=g(L,e[5]),L.forEach($),W=E(_),G=m(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach($),K=E(A),ne&&ne.l(A),A.forEach($),J=E(p),Q=m(p,"DIV",{class:!0});var B=v(Q);X=m(B,"P",{});var ae=v(X);Z=g(ae,"We’ll submit the funniest caption. Your votes will also inform next week’s approach to\n        generating captions; our version of a comedian testing out new material in comedy clubs."),ae.forEach($),ee=E(B),te=m(B,"P",{});var le=v(te);se=g(le,"Come back next week to vote on captions for a new cartoon and see how our approach evolves."),le.forEach($),B.forEach($),p.forEach($),f.forEach($),this.h()},h(){b(n,"class","sm"),b(c,"class","sm"),b(a,"class","info"),b(O,"href","https://www.newyorker.com/cartoons/contest"),b(z,"class","sm svelte-1gus91a"),G.src!==(Y=e[4])&&b(G,"src",Y),b(G,"alt",B="captionless cartoon by "+e[5]),b(G,"class","svelte-1gus91a"),b(M,"class","svelte-1gus91a"),b(T,"class","prompt svelte-1gus91a"),b(Q,"class","submit sm"),b(s,"class","col"),b(t,"class","svelte-1gus91a")},m(d,f){w(d,t,f),y(t,s),y(s,a),y(a,l),l.innerHTML=e[2],y(a,r),y(a,n),n.innerHTML=e[3],y(a,o),y(a,c),y(c,i),y(i,h),y(h,u),y(c,I),y(c,x);for(let e=0;e<re.length;e+=1)re[e].m(x,null);y(s,P),y(s,T),y(T,N),y(N,j),y(T,S),y(T,M),y(M,z),y(z,O),y(O,C),y(O,H),y(z,U),y(z,R),y(z,q),y(z,F),y(M,W),y(M,G),y(T,K),ne&&ne.m(T,null),y(s,J),y(s,Q),y(Q,X),y(X,Z),y(Q,ee),y(Q,te),y(te,se),ae=!0},p(e,[t]){if((!ae||4&t)&&(l.innerHTML=e[2]),(!ae||8&t)&&(n.innerHTML=e[3]),64&t){let s;for(le=e[6],s=0;s<le.length;s+=1){const a=ve(e,le,s);re[s]?re[s].p(a,t):(re[s]=ge(a),re[s].c(),re[s].m(x,null))}for(;s<re.length;s+=1)re[s].d(1);re.length=le.length}(!ae||1&t)&&k(H,e[0]),(!ae||2&t)&&k(R,e[1]),(!ae||32&t)&&k(F,e[5]),(!ae||16&t&&G.src!==(Y=e[4]))&&b(G,"src",Y),(!ae||32&t&&B!==(B="captionless cartoon by "+e[5]))&&b(G,"alt",B),"IsThisFunny"===e[7]?ne?(ne.p(e,t),128&t&&L(ne,1)):(ne=$e(e),ne.c(),L(ne,1),ne.m(T,null)):ne&&(A(),V(ne,1,1,(()=>{ne=null})),_())},i(e){ae||(L(ne),ae=!0)},o(e){V(ne),ae=!1},d(e){e&&$(t),D(re,e),ne&&ne.d()}}}function be(e,t,s){let{slug:a}=t,{date:l}=t,{hed:r}=t,{dek:n}=t,{image:o}=t,{author:c}=t,{explanation:i}=t,{widgetName:h}=t,{widgetData:u}=t;return e.$$set=e=>{"slug"in e&&s(0,a=e.slug),"date"in e&&s(1,l=e.date),"hed"in e&&s(2,r=e.hed),"dek"in e&&s(3,n=e.dek),"image"in e&&s(4,o=e.image),"author"in e&&s(5,c=e.author),"explanation"in e&&s(6,i=e.explanation),"widgetName"in e&&s(7,h=e.widgetName),"widgetData"in e&&s(8,u=e.widgetData)},[a,l,r,n,o,c,i,h,u]}class we extends i{constructor(e){super(),h(this,e,be,Ee,u,{slug:0,date:1,hed:2,dek:3,image:4,author:5,explanation:6,widgetName:7,widgetData:8})}}function ye(e,t,s){const a=e.slice();return a[2]=t[s].slug,a[3]=t[s].title,a[4]=t[s].attempt,a[5]=t[s].date,a}function Ie(e){let t,s,a,l,r,n,o=e[0],c=[];for(let i=0;i<o.length;i+=1)c[i]=ke(ye(e,o,i));return{c(){t=d("section"),s=d("div"),a=d("h3"),l=f("Each week we try a new approach!"),r=p(),n=d("ul");for(let e=0;e<c.length;e+=1)c[e].c();this.h()},l(e){t=m(e,"SECTION",{id:!0,class:!0});var o=v(t);s=m(o,"DIV",{class:!0});var i=v(s);a=m(i,"H3",{});var h=v(a);l=g(h,"Each week we try a new approach!"),h.forEach($),r=E(i),n=m(i,"UL",{});var u=v(n);for(let t=0;t<c.length;t+=1)c[t].l(u);u.forEach($),i.forEach($),o.forEach($),this.h()},h(){b(s,"class","col"),b(t,"id","archive"),b(t,"class","svelte-ho7aeh")},m(e,o){w(e,t,o),y(t,s),y(s,a),y(a,l),y(s,r),y(s,n);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(e,t){if(3&t){let s;for(o=e[0],s=0;s<o.length;s+=1){const a=ye(e,o,s);c[s]?c[s].p(a,t):(c[s]=ke(a),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=o.length}},d(e){e&&$(t),D(c,e)}}}function ke(e){let t,s,a,l,r,n,o,c,i,h,u,I=e[4]+"",x=e[3]+"",P=e[5]+"";return{c(){t=d("li"),s=d("a"),a=f("#"),l=f(I),r=f(": "),n=f(x),o=p(),c=d("span"),i=f(P),u=p(),this.h()},l(e){t=m(e,"LI",{style:!0,class:!0});var h=v(t);s=m(h,"A",{href:!0,class:!0});var d=v(s);a=g(d,"#"),l=g(d,I),r=g(d,": "),n=g(d,x),o=E(d),c=m(d,"SPAN",{class:!0});var f=v(c);i=g(f,P),f.forEach($),d.forEach($),u=E(h),h.forEach($),this.h()},h(){b(c,"class","sm"),b(s,"href",h="contest/"+e[2]),b(s,"class","svelte-ho7aeh"),T(t,"--theme","var(--theme-"+ +e[2]%e[1]+")"),b(t,"class","svelte-ho7aeh")},m(e,h){w(e,t,h),y(t,s),y(s,a),y(s,l),y(s,r),y(s,n),y(s,o),y(s,c),y(c,i),y(t,u)},p(e,a){1&a&&I!==(I=e[4]+"")&&k(l,I),1&a&&x!==(x=e[3]+"")&&k(n,x),1&a&&P!==(P=e[5]+"")&&k(i,P),1&a&&h!==(h="contest/"+e[2])&&b(s,"href",h),1&a&&T(t,"--theme","var(--theme-"+ +e[2]%e[1]+")")},d(e){e&&$(t)}}}function xe(e){let t,s=e[0].length&&Ie(e);return{c(){s&&s.c(),t=U()},l(e){s&&s.l(e),t=U()},m(e,a){s&&s.m(e,a),w(e,t,a)},p(e,[a]){e[0].length?s?s.p(e,a):(s=Ie(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:I,o:I,d(e){s&&s.d(e),e&&$(t)}}}function Pe(e,t,s){let{data:a}=t;const{themeCount:l}=W("app");return e.$$set=e=>{"data"in e&&s(0,a=e.data)},[a,l]}class De extends i{constructor(e){super(),h(this,e,Pe,xe,u,{data:0})}}function Te(e,t,s){const a=e.slice();return a[3]=t[s].value,a}function Ae(e){let t,s=e[3]+"";return{c(){t=d("p")},l(e){t=m(e,"P",{}),v(t).forEach($)},m(e,a){w(e,t,a),t.innerHTML=s},p(e,a){2&a&&s!==(s=e[3]+"")&&(t.innerHTML=s)},d(e){e&&$(t)}}}function Ve(e){let t,s,a,l,r,n,o,c,i,h,u,x,P,T,A,V,_,L,N,j,S,M,z,O,C,H=e[1],U=[];for(let d=0;d<H.length;d+=1)U[d]=Ae(Te(e,H,d));return{c(){t=d("section"),s=d("div"),a=d("h3"),l=f("Why are we doing this?"),r=p(),n=d("p"),o=d("strong"),c=f("TLDR:"),i=p(),h=f(e[0]),u=p(),x=d("details"),P=d("summary"),T=f("And if you want, here’s the long version."),A=p(),V=d("span");for(let e=0;e<U.length;e+=1)U[e].c();_=p(),L=d("div"),N=d("p"),j=p(),S=d("p"),M=f("Want to see another experiment with GPT-3? Check out "),z=d("a"),O=f("Nothing Breaks Like A.I. Heart"),C=f("."),this.h()},l(d){t=m(d,"SECTION",{class:!0});var f=v(t);s=m(f,"DIV",{class:!0});var p=v(s);a=m(p,"H3",{class:!0});var b=v(a);l=g(b,"Why are we doing this?"),b.forEach($),r=E(p),n=m(p,"P",{class:!0});var w=v(n);o=m(w,"STRONG",{});var y=v(o);c=g(y,"TLDR:"),y.forEach($),i=E(w),h=g(w,e[0]),w.forEach($),u=E(p),x=m(p,"DETAILS",{class:!0});var I=v(x);P=m(I,"SUMMARY",{});var k=v(P);T=g(k,"And if you want, here’s the long version."),k.forEach($),A=E(I),V=m(I,"SPAN",{});var D=v(V);for(let e=0;e<U.length;e+=1)U[e].l(D);D.forEach($),I.forEach($),_=E(p),L=m(p,"DIV",{class:!0});var H=v(L);N=m(H,"P",{class:!0}),v(N).forEach($),j=E(H),S=m(H,"P",{class:!0});var R=v(S);M=g(R,"Want to see another experiment with GPT-3? Check out "),z=m(R,"A",{href:!0});var q=v(z);O=g(q,"Nothing Breaks Like A.I. Heart"),q.forEach($),C=g(R,"."),R.forEach($),H.forEach($),p.forEach($),f.forEach($),this.h()},h(){b(a,"class","svelte-jhu76e"),b(n,"class","sm"),b(x,"class","sm"),b(N,"class","sm"),b(z,"href","https://pudding.cool/2021/03/love-and-ai/"),b(S,"class","sm"),b(L,"class","credits svelte-jhu76e"),b(s,"class","col"),b(t,"class","svelte-jhu76e")},m(d,f){w(d,t,f),y(t,s),y(s,a),y(a,l),y(s,r),y(s,n),y(n,o),y(o,c),y(n,i),y(n,h),y(s,u),y(s,x),y(x,P),y(P,T),y(x,A),y(x,V);for(let e=0;e<U.length;e+=1)U[e].m(V,null);y(s,_),y(s,L),y(L,N),N.innerHTML=e[2],y(L,j),y(L,S),y(S,M),y(S,z),y(z,O),y(S,C)},p(e,[t]){if(1&t&&k(h,e[0]),2&t){let s;for(H=e[1],s=0;s<H.length;s+=1){const a=Te(e,H,s);U[s]?U[s].p(a,t):(U[s]=Ae(a),U[s].c(),U[s].m(V,null))}for(;s<U.length;s+=1)U[s].d(1);U.length=H.length}4&t&&(N.innerHTML=e[2])},i:I,o:I,d(e){e&&$(t),D(U,e)}}}function _e(e,t,s){let{tldr:a}=t,{full:l}=t,{credits:r}=t;return e.$$set=e=>{"tldr"in e&&s(0,a=e.tldr),"full"in e&&s(1,l=e.full),"credits"in e&&s(2,r=e.credits)},[a,l,r]}class Le extends i{constructor(e){super(),h(this,e,_e,Ve,u,{tldr:0,full:1,credits:2})}}function Ne(e,t,s){const a=e.slice();return a[5]=t[s],a}function je(e,t,s){const a=e.slice();return a[8]=t[s].hed,a[2]=t[s].url,a[9]=t[s].image,a}function Se(e){let t,s,a,l,r,n,o,c,i,h=e[8]+"";return{c(){t=d("div"),s=d("a"),a=d("img"),r=p(),n=d("span"),o=f(h),i=p(),this.h()},l(e){t=m(e,"DIV",{class:!0});var l=v(t);s=m(l,"A",{href:!0,class:!0});var c=v(s);a=m(c,"IMG",{src:!0,alt:!0}),r=E(c),n=m(c,"SPAN",{class:!0});var u=v(n);o=g(u,h),u.forEach($),c.forEach($),i=E(l),l.forEach($),this.h()},h(){a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&b(a,"src",l),b(a,"alt","thumbnail"),b(n,"class","svelte-v4z0gm"),b(s,"href",c="https://pudding.cool/"+e[2]),b(s,"class","svelte-v4z0gm"),b(t,"class","story svelte-v4z0gm")},m(e,l){w(e,t,l),y(t,s),y(s,a),y(s,r),y(s,n),y(n,o),y(t,i)},p(e,t){1&t&&a.src!==(l="https://pudding.cool/common/assets/thumbnails/640/"+e[9]+".jpg")&&b(a,"src",l),1&t&&h!==(h=e[8]+"")&&k(o,h),1&t&&c!==(c="https://pudding.cool/"+e[2])&&b(s,"href",c)},d(e){e&&$(t)}}}function Me(e){let t,s,a,l,r,n=e[5].name.toUpperCase()+"";return{c(){t=d("li"),s=d("a"),a=d("span"),l=f(n),r=p(),this.h()},l(e){t=m(e,"LI",{class:!0});var o=v(t);s=m(o,"A",{href:!0,class:!0});var c=v(s);a=m(c,"SPAN",{class:!0});var i=v(a);l=g(i,n),i.forEach($),c.forEach($),r=E(o),o.forEach($),this.h()},h(){b(a,"class","svelte-v4z0gm"),b(s,"href",e[5].url),b(s,"class","svelte-v4z0gm"),b(t,"class","svelte-v4z0gm")},m(e,n){w(e,t,n),y(t,s),y(s,a),y(a,l),y(t,r)},p:I,d(e){e&&$(t)}}}function ze(e){let t,s,a,l,r,n,o,c,i,h,u,k,x,P=e[0],T=[];for(let d=0;d<P.length;d+=1)T[d]=Se(je(e,P,d));let A=e[1],V=[];for(let d=0;d<A.length;d+=1)V[d]=Me(Ne(e,A,d));return{c(){t=d("footer"),s=d("section");for(let e=0;e<T.length;e+=1)T[e].c();a=p(),l=d("section"),r=d("div"),n=p(),o=d("p"),c=d("a"),i=f("The Pudding"),h=f("\n      is a digital publication that explains ideas debated in culture with visual essays."),u=p(),k=d("section"),x=d("ul");for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){t=m(e,"FOOTER",{class:!0});var d=v(t);s=m(d,"SECTION",{class:!0});var f=v(s);for(let t=0;t<T.length;t+=1)T[t].l(f);f.forEach($),a=E(d),l=m(d,"SECTION",{class:!0});var p=v(l);r=m(p,"DIV",{class:!0}),v(r).forEach($),n=E(p),o=m(p,"P",{});var b=v(o);c=m(b,"A",{href:!0,class:!0});var w=v(c);i=g(w,"The Pudding"),w.forEach($),h=g(b,"\n      is a digital publication that explains ideas debated in culture with visual essays."),b.forEach($),p.forEach($),u=E(d),k=m(d,"SECTION",{class:!0});var y=v(k);x=m(y,"UL",{class:!0});var I=v(x);for(let t=0;t<V.length;t+=1)V[t].l(I);I.forEach($),y.forEach($),d.forEach($),this.h()},h(){b(s,"class","stories svelte-v4z0gm"),b(r,"class","wordmark svelte-v4z0gm"),b(c,"href","https://pudding.cool"),b(c,"class","svelte-v4z0gm"),b(l,"class","about svelte-v4z0gm"),b(x,"class","svelte-v4z0gm"),b(k,"class","links svelte-v4z0gm"),b(t,"class","svelte-v4z0gm")},m(e,d){w(e,t,d),y(t,s);for(let t=0;t<T.length;t+=1)T[t].m(s,null);y(t,a),y(t,l),y(l,r),r.innerHTML=Z,y(l,n),y(l,o),y(o,c),y(c,i),y(o,h),y(t,u),y(t,k),y(k,x);for(let t=0;t<V.length;t+=1)V[t].m(x,null)},p(e,[t]){if(1&t){let a;for(P=e[0],a=0;a<P.length;a+=1){const l=je(e,P,a);T[a]?T[a].p(l,t):(T[a]=Se(l),T[a].c(),T[a].m(s,null))}for(;a<T.length;a+=1)T[a].d(1);T.length=P.length}if(2&t){let s;for(A=e[1],s=0;s<A.length;s+=1){const a=Ne(e,A,s);V[s]?V[s].p(a,t):(V[s]=Me(a),V[s].c(),V[s].m(x,null))}for(;s<V.length;s+=1)V[s].d(1);V.length=A.length}},i:I,o:I,d(e){e&&$(t),D(T,e),D(V,e)}}}function Oe(e,t,s){let a,l=[];const r=`https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;return N((async()=>{a=window.location.href;const e=await fetch(r),t=await e.json();s(0,l=t.filter((e=>e.url!==a)).slice(0,4))})),[l,[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}],r]}class Ce extends i{constructor(e){super(),h(this,e,Oe,ze,u,{})}}function He(e){let t,s,a,l,r,n,o,c=J.readyMessage+"";return{c(){t=d("section"),s=d("div"),a=d("h2"),l=f("🚧 Work In Progress 🚧"),r=p(),n=d("p"),o=f(c),this.h()},l(e){t=m(e,"SECTION",{class:!0});var i=v(t);s=m(i,"DIV",{class:!0});var h=v(s);a=m(h,"H2",{});var u=v(a);l=g(u,"🚧 Work In Progress 🚧"),u.forEach($),r=E(h),n=m(h,"P",{});var d=v(n);o=g(d,c),d.forEach($),h.forEach($),i.forEach($),this.h()},h(){b(s,"class","col"),b(t,"class","wip svelte-1bs1k7")},m(e,c){w(e,t,c),y(t,s),y(s,a),y(a,l),y(s,r),y(s,n),y(n,o)},p:I,i:I,o:I,d(e){e&&$(t)}}}function Ue(e){let t,s;const a=[e[1],{prompt:J.prompt}];let l={};for(let r=0;r<a.length;r+=1)l=Y(l,a[r]);return t=new we({props:l}),{c(){j(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,a){M(t,e,a),s=!0},p(e,s){const l=2&s?B(a,[2&s&&K(e[1]),0&s&&{prompt:J.prompt}]):{};t.$set(l)},i(e){s||(L(t.$$.fragment,e),s=!0)},o(e){V(t.$$.fragment,e),s=!1},d(e){C(t,e)}}}function Re(e){let t,s,a,l,r,n,o,c,i,h,u,f;t=new te({});const g=[Ue,He],I=[];return l=0,r=I[0]=g[0](e),o=new De({props:{data:e[0]}}),i=new Le({props:{tldr:J.aboutTldr,full:J.about,credits:J.credits}}),u=new Ce({}),{c(){j(t.$$.fragment),s=p(),a=d("div"),r.c(),n=p(),j(o.$$.fragment),c=p(),j(i.$$.fragment),h=p(),j(u.$$.fragment),this.h()},l(e){S(t.$$.fragment,e),s=E(e),a=m(e,"DIV",{class:!0,style:!0});var l=v(a);r.l(l),n=E(l),S(o.$$.fragment,l),c=E(l),S(i.$$.fragment,l),h=E(l),S(u.$$.fragment,l),l.forEach($),this.h()},h(){b(a,"class","c svelte-1bs1k7"),T(a,"--theme","var(--theme-"+e[2]+")")},m(e,l){M(t,e,l),w(e,s,l),w(e,a,l),I[0].m(a,null),y(a,n),M(o,a,null),y(a,c),M(i,a,null),y(a,h),M(u,a,null),f=!0},p(e,[t]){r.p(e,t)},i(e){f||(L(t.$$.fragment,e),L(r),L(o.$$.fragment,e),L(i.$$.fragment,e),L(u.$$.fragment,e),f=!0)},o(e){V(t.$$.fragment,e),V(r),V(o.$$.fragment,e),V(i.$$.fragment,e),V(u.$$.fragment,e),f=!1},d(e){C(t,e),e&&$(s),e&&$(a),I[0].d(),C(o),C(i),C(u)}}}function qe(e){G("app",{themeCount:4});const t=J.contest.map(((e,t)=>c(o({},e),{attempt:J.contest.length-t}))),s=t.slice(1).map((e=>({attempt:e.attempt,slug:e.slug,title:e.title,date:e.date}))),a=t[0];return[s,a,+a.slug%4]}class Fe extends i{constructor(e){super(),h(this,e,qe,Re,u,{})}}function We(e){let t,s,a,l;return t=new Q({props:{title:J.hed,description:J.dek,url:"https://pudding.cool/projects/caption-contest"}}),a=new Fe({}),{c(){j(t.$$.fragment),s=p(),j(a.$$.fragment)},l(e){S(t.$$.fragment,e),s=E(e),S(a.$$.fragment,e)},m(e,r){M(t,e,r),w(e,s,r),M(a,e,r),l=!0},p:I,i(e){l||(L(t.$$.fragment,e),L(a.$$.fragment,e),l=!0)},o(e){V(t.$$.fragment,e),V(a.$$.fragment,e),l=!1},d(e){C(t,e),e&&$(s),C(a,e)}}}const Ge=!0;export default class extends i{constructor(e){super(),h(this,e,null,We,u,{})}}export{Ge as prerender};