import{d as i,r as m,o as d,c as p,a as t,t as _,F as f,p as g,b as h,e as l,f as v,g as y}from"./vendor.3d4e20bf.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};b();var V="/assets/logo.03d6d6da.png";var k=(r,s)=>{const a=r.__vccOpts||r;for(const[n,e]of s)a[n]=e;return a};const c=r=>(g("data-v-8203a322"),r=r(),h(),r),S=c(()=>t("p",null,[l(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),l(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),x=c(()=>t("p",null,[l("See "),t("code",null,"README.md"),l(" for more information.")],-1)),E=c(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Docs "),l(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Docs")],-1)),I=c(()=>t("p",null,[l(" Edit "),t("code",null,"components/HelloWorld.vue"),l(" to test hot module replacement. ")],-1)),N=i({props:{msg:null},setup(r){const s=m(0);return(a,n)=>(d(),p(f,null,[t("h1",null,_(r.msg),1),S,x,E,t("button",{type:"button",onClick:n[0]||(n[0]=e=>s.value++)},"count is: "+_(s.value),1),I],64))}});var D=k(N,[["__scopeId","data-v-8203a322"]]);const L=t("img",{alt:"Vue logo",src:V},null,-1),O=i({setup(r){return(s,a)=>(d(),p(f,null,[L,v(D,{msg:"Hello Vue 3 + TypeScript + Vite"})],64))}});y(O).mount("#app");
