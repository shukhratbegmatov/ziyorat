import{_ as n}from"./Preloader.dbbb5ecc.js";import{d as s,o as d,c as r,b as e,w as a,e as l,t as i}from"./entry.451e725c.js";const p={class:"relative bg-white/[4%] rounded-xl p-4 overflow-hidden"},c={class:"text-white text-[40px] font-bold leading-130"},g={class:"text-lg lg:text-xl text-white/60 font-bold leading-130"},h=["src"],b=s({__name:"InfoCard",props:{title:{},count:{},icon:{},loading:{type:Boolean}},setup(_){return(o,u)=>{const t=n;return d(),r("div",p,[e(t,{width:"61px",height:"52px","border-radius":"4px","preloader-class":"mb-4",loading:o.loading},{default:a(()=>[l("p",c,i(o.count),1)]),_:1},8,["loading"]),e(t,{width:"178px",height:"26px","border-radius":"4px","preloader-class":"mb-4",loading:o.loading},{default:a(()=>[l("p",g,i(o.$t(o.title)),1)]),_:1},8,["loading"]),e(t,{width:"61px",height:"52px","border-radius":"4px","preloader-class":"absolute -bottom-4 -right-3",loading:o.loading},{default:a(()=>[l("img",{class:"absolute w-20 h-20 lg:w-auto lg:h-auto -bottom-4 -right-3",src:o.icon,alt:"Card icon"},null,8,h)]),_:1},8,["loading"])])}}});export{b as _};
