import{d as r,o as i,c as n,e as a,v as d,n as _,g as u,z as h,t as s,b as g,w as m,G as w,p as v,l as b}from"./entry.451e725c.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const y={class:"tooltip bg-dark-100 rounded-lg px-4 py-2 text-sm leading-4 text-white relative"},x=r({__name:"Tooltip",props:{withTrigger:{type:Boolean},show:{type:Boolean}},setup(t){return(e,o)=>(i(),n("div",{class:_(["absolute bottom-full left-1/2 -translate-x-1/2 transition duration-300",[e.show&&e.withTrigger?"!-translate-y-4 !visible !opacity-100":"invisible opacity-0",{"md:group-hover:visible md:group-hover:opacity-100 md:group-hover:-translate-y-4":!e.withTrigger}]])},[a("div",y,[d(e.$slots,"default")])],2))}}),k=t=>(v("data-v-8bed980c"),t=t(),b(),t),T={style:{"word-break":"break-all"},class:"line-clamp-1 text-white leading-130 transition-300 max-w-[252px] break-all"},C={class:"w-8 h-8 shrink-0 bg-red-100 group-hover:bg-[#e52b2b] transition-300 rounded-md flex-center ml-2 group relative"},B=k(()=>a("i",{class:"icon-file-copy text-2xl leading-6 text-white"},null,-1)),S=r({__name:"CopyUrl",setup(t){const e=u(()=>window.location.href.replace(/^https?:\/\//,"")),o=h(!1);async function l(){o.value=!0,await navigator.clipboard.writeText(window.location.href),setTimeout(()=>{o.value=!1},1500)}return(p,I)=>{const c=x;return i(),n("div",{class:"cursor-pointer relative bg-white/10 hover:bg-gray-650 flex items-center justify-between pl-2 rounded-lg group max-w-[584px] transition-300 single-detail",onClick:l},[a("span",T,s(e.value),1),a("span",C,[B,g(c,{"with-trigger":"",show:o.value},{default:m(()=>[w(s(p.$t("copied")),1)]),_:1},8,["show"])])])}}});const U=f(S,[["__scopeId","data-v-8bed980c"]]);export{U as _,x as a};
