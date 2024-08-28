import{_ as fe}from"./Breadcrumb.vue.6205b94f.js";import{_ as ie,a as ae}from"./Preloader.438aca89.js";import{_ as ve}from"./CopyUrl.dfdc71c3.js";import{s as xe,t as we}from"./useFetcher.3ab9d0ec.js";import{d as H,r as be,o as s,c as d,e as o,F,h as W,b as l,i as ye,m as z,n as B,p as re,l as ce,w as c,G as ne,t as M,j as f,B as _,k as D,z as U,A as $e,g as L,x as se,C as ke,y as Ce,T as Me,q as le,s as Ie}from"./entry.4cf52b94.js";import{_ as de}from"./_plugin-vue_export-helper.c27b6911.js";import{_ as Te}from"./Button.vue.59cf4e72.js";import{_ as Be}from"./Wrapper.e55f2071.js";import{_ as Se}from"./Media.vue.c065dfe7.js";import{_ as De}from"./PromoVideo.84f21eb4.js";import{_ as Le}from"./Modal.2ef24ecc.js";import{E as O}from"./religions.8734ae30.js";import{_ as je}from"./Attractions.vue.60f6681a.js";import{u as ze}from"./composables.f7fd5c17.js";import{u as He}from"./destination.b591f83d.js";import"./index.0bf7d0d0.js";import"./swiper-slide.a84611fa.js";import"./pagination.min.94c794bf.js";const ue=m=>(re("data-v-889a3a39"),m=m(),ce(),m),Ae={class:"p-4 border border-solid border-white/20 destination-bg-blur rounded-xl flex-center-between gap-4"},Pe={class:"flex-y-center gap-4"},Re=ue(()=>o("i",{class:"icon-share text-white text-[32px]"},null,-1)),Ve=ue(()=>o("div",{class:"white-shadow-border"},null,-1)),Ee={class:"flex-y-center gap-4"},Ne=["onClick"],Oe=H({__name:"Social",props:{title:{}},setup(m){const t=[{title:"Facebook",icon:"icon-facebook text-lg",type:"facebook",link:"https://www.facebook.com/TabarrukZiyorat"},{title:"Twitter",icon:"icon-twitter",type:"twitter",link:"https://twitter.com/tabarrukziyorat"},{title:"Telegram",icon:"icon-telegram",type:"telegram",link:"https://t.me/tabarrukziyorat"}];return(h,i)=>{const v=ve,w=be("tooltip");return s(),d("div",Ae,[o("div",Pe,[Re,Ve,o("div",Ee,[(s(),d(F,null,W(t,(e,g)=>ye(o("div",{class:"w-8 h-8 rounded-full bg-white/[12%] flex-center cursor-pointer group transition-300 hover:bg-white",key:g,onClick:a=>z(xe)(e.type,h.title)},[o("i",{class:B([e==null?void 0:e.icon,"text-white text-2xl transition-300 group-hover:text-blue"])},null,2)],8,Ne),[[w,e==null?void 0:e.title]])),64))])]),l(v)])}}});const _e=de(Oe,[["__scopeId","data-v-889a3a39"]]),Ue=o("i",{class:"icon-map-pin text-[24px] text-white"},null,-1),Fe={class:"text-white text-xl leading-130 font-medium"},We={key:0},Ye=["innerHTML"],qe={class:"w-full"},Ge={class:"flex-y-center gap-3"},Ke=o("div",{class:"w-11 h-11 rounded-lg flex-center bg-white/[12%]"},[o("i",{class:"icon-islam-moon text-white text-xl sm::text-[28px]"})],-1),Ze={class:"text-2xl leading-130 text-white/60 font-medium text-left"},Je={class:"text-2xl leading-130 text-white font-bold mt-1 text-left"},Qe={key:0,class:"flex sm:items-center flex-col sm:flex-row gap-4 w-full"},Xe=o("div",{class:"white-shadow-border h-px sm:h-[75px] w-full sm:w-px"},null,-1),et={class:"flex-y-center gap-3"},tt=o("div",{class:"w-11 h-11 rounded-lg flex-center bg-white/[12%]"},[o("i",{class:"icon-islam-moon text-white text-xl sm::text-[28px]"})],-1),ot={class:"text-2xl leading-130 text-white/60 font-medium text-left"},nt={class:"text-2xl leading-130 text-white font-bold mt-1 text-left"},st={key:0},lt={key:1},it={key:2},at=H({__name:"Info",props:{isCenter:{type:Boolean},single:{},loading:{type:Boolean}},setup(m){return(t,h)=>{var w,e,g;const i=ie,v=_e;return s(),d("div",{class:B({"text-center":t.isCenter})},[l(i,_({width:"200px",height:"26px"},{loading:t.loading}),{default:c(()=>{var a,p,n,b,x,$;return[o("div",{class:B(["flex-y-center gap-2",{"flex-center":t.isCenter}])},[Ue,o("p",Fe,[ne(M((p=(a=t.single)==null?void 0:a.region)==null?void 0:p.title)+" ",1),(b=(n=t.single)==null?void 0:n.region)!=null&&b.title?(s(),d("span",We,",")):f("",!0),ne(" "+M(($=(x=t.single)==null?void 0:x.destination_country)==null?void 0:$.title),1)])],2)]}),_:1},16),l(i,_({width:"70%",height:"50px"},{loading:t.loading},{"preloader-class":"mt-0.5 mb-4"}),{default:c(()=>{var a;return[o("p",{class:B(["destination-single-text-shadow text-[40px] leading-130 font-bold text-white font-playfair",{"text-[32px] lg:text-[80px]":t.isCenter}])},M((a=t.single)==null?void 0:a.title),3)]}),_:1},16),(s(),d(F,null,W(2,(a,p)=>l(i,_({width:"100%",height:"26px"},{loading:t.loading},{"preloader-class":"mb-0.5",key:p}),null,16)),64)),l(i,_({width:"100%",height:"26px"},{loading:t.loading},{"preloader-class":"mb-4"}),{default:c(()=>{var a;return[o("div",{class:B(["text-xl leading-130 font-medium my-4 text-white font-medium description-text",{"mt-5 mb-6":t.isCenter}]),innerHTML:(a=t.single)==null?void 0:a.short_description},null,10,Ye)]}),_:1},16),o("div",{class:B(["destination-bg-blur flex items-center justify-between gap-4 p-4 border border-solid border-white/20 rounded-xl max-w-[584px] flex-col sm:flex-row",{"mx-auto":t.isCenter}])},[o("div",qe,[o("div",Ge,[l(i,_({width:"44px",height:"44px"},{loading:t.loading}),{default:c(()=>[Ke]),_:1},16),l(i,_({width:"100px",height:"31.2px"},{loading:t.loading}),{default:c(()=>[o("p",Ze,M(t.$t("affiliation")),1)]),_:1},16)]),l(i,_({width:"100px",height:"31.2px"},{loading:t.loading},{"preloader-class":"mt-1"}),{default:c(()=>{var a,p;return[o("p",Je,M((p=(a=t.single)==null?void 0:a.religion)==null?void 0:p.title),1)]}),_:1},16)]),(w=t.single)!=null&&w.erected_from||(e=t.single)!=null&&e.erected_to?(s(),d("div",Qe,[Xe,o("div",null,[o("div",et,[l(i,_({width:"44px",height:"44px"},{loading:t.loading}),{default:c(()=>[tt]),_:1},16),l(i,_({width:"100px",height:"31.2px"},{loading:t.loading}),{default:c(()=>[o("p",ot,M(t.$t("was_erected")),1)]),_:1},16)]),l(i,_({width:"100px",height:"31.2px"},{loading:t.loading},{"preloader-class":"mt-1"}),{default:c(()=>{var a,p,n,b,x;return[o("p",nt,[(a=t.single)!=null&&a.erected_from?(s(),d("span",st,M((p=t.single)==null?void 0:p.erected_from),1)):f("",!0),(n=t.single)!=null&&n.erected_to?(s(),d("span",lt," - ")):f("",!0),(b=t.single)!=null&&b.erected_to?(s(),d("span",it,M((x=t.single)==null?void 0:x.erected_to),1)):f("",!0)])]}),_:1},16)])])):f("",!0)],2),t.loading?f("",!0):(s(),D(v,{key:0,class:B(["mt-4 max-w-[584px]",{"mx-auto":t.isCenter}]),title:(g=t.single)==null?void 0:g.title},null,8,["class","title"]))],2)}}});const rt={class:"flex-y-center justify-center flex-col lg:flex-row gap-6 lg:h-[546px]"},ct={key:0,class:"w-full lg:w-[382px] min-h-[260px] border-[2px] border-solid border-white/20 h-full rounded-xl relative overflow-hidden shrink-0"},dt=["src"],ut=H({__name:"Banner",props:{single:{},loading:{type:Boolean}},setup(m){return(t,h)=>{var w,e;const i=ie,v=at;return s(),d("div",rt,[((w=t.single)==null?void 0:w.type)!=="destination"?(s(),d("div",ct,[l(i,_({width:"100%",height:"100%"},{loading:t.loading},{"content-wrapper-class":"w-full h-full",class:"w-full h-full"}),{default:c(()=>{var g;return[o("img",{src:(g=t.single)==null?void 0:g.image,alt:"single-destination",class:"w-full h-full object-cover"},null,8,dt)]}),_:1},16)])):f("",!0),l(v,_({"is-center":((e=t.single)==null?void 0:e.type)!=="attraction"},{single:t.single,loading:t.loading}),null,16,["is-center"])])}}}),_t={class:"relative"},pt=H({__name:"Contact",props:{locations:{},mapClass:{},defaultCoords:{}},setup(m){const t=m;function h(n){switch(n){case O.ISLAM:return"/svg/religions/islam.svg";case O.CHRISTIANITY:return"/svg/religions/christianity.svg";case O.BUDDHISM:return"/svg/religions/buddhism.svg";case O.ABOUT:return"/svg/religions/about.svg";default:return""}}const i=n=>({layout:"default#imageWithContent",imageHref:h(n),imageSize:[50,50],imageOffset:[-20,-30]}),v=U([41.31,69.26]);$e(()=>t.defaultCoords,()=>{var n;(n=t.defaultCoords)!=null&&n.length&&(v.value=t.defaultCoords)});const w=U({apiKey:"",lang:"ru_RU",coordorder:"latlong",version:"2.1"}),e=L(()=>function(n){var b,x,$;return`
         <div class="realtive bg-dark rounded-xl p-2 inline-block w-[142px]">
          <img
            src="${n==null?void 0:n.image}"
            class="object-cover h-20 max-w-[126px] w-full rounded-xl"
            alt="Map image"
          />
          <p class="mt-2 mb-1 text-[10px] text-[#83848D] line-clamp-1 leading-120">
            ${(b=n==null?void 0:n.region)==null?void 0:b.title} ${(x=n==null?void 0:n.region)!=null&&x.title?"<span>,</span>":""}
                 ${($=n==null?void 0:n.destination_country)==null?void 0:$.title}
          </p>
          <p class="text-xs text-white font-semibold leading-130"> ${n==null?void 0:n.title} </p>

      </div>
    `});function g(n){n.get("target").balloon.open()}function a(n){n.get("target").balloon.close()}function p(n){setTimeout(()=>{n.get("target").balloon.close()},1500)}return(n,b)=>{const x=se("ymap-marker"),$=se("yandex-map"),A=ae;return s(),d("div",_t,[l(A,null,{default:c(()=>{var j;return[l($,{class:B(["h-full w-full",n.mapClass]),coords:(j=n.locations[0])==null?void 0:j.location,settings:z(w),zoom:14,controls:[]},{default:c(()=>[(s(!0),d(F,null,W(n.locations,(y,r)=>{var u;return s(),D(x,{key:r,coords:y==null?void 0:y.location,"marker-id":"123","hint-content":y.name,icon:i((u=y==null?void 0:y.religion)==null?void 0:u.type),"balloon-template":z(e)(y),onMouseenter:g,onMouseleave:a,onBalloonopen:p},null,8,["coords","hint-content","icon","balloon-template"])}),128))]),_:1},8,["coords","settings","class"])]}),_:1})])}}});const mt=""+globalThis.__publicAssetsURL("svg/pattern-bg.svg"),Y=m=>(re("data-v-85b2a901"),m=m(),ce(),m),ht={class:"overflow-y-hidden relative z-10 mt-16 lg:mt-[136px]"},gt={class:"relative z-10 mt-16 lg:mt-[136px]"},ft={class:"container h-full mt-6"},vt={class:"absolute top-0 left-0 w-full"},xt={class:"absolute top-0 left-0 w-full"},wt={class:"relative w-full"},bt={class:"pointer-events-none w-full h-full relative overflow-hidden max-h-[700px]"},yt=["src"],$t=Y(()=>o("img",{src:mt,alt:"pattern",class:"w-full h-full object-cover left-0 top-[700px] absolute pointer-events-none"},null,-1)),kt={class:"relative"},Ct={class:"container"},Mt=Y(()=>o("div",{class:"max-w-[990px] mx-auto py-16 destination-text-main destination-text whitespace-pre-line"},null,-1)),It=["innerHTML"],Tt={key:0,class:"flex items-end justify-between p-3 rounded-xl bg-white/[4%] w-full max-w-[510px]"},Bt={class:"flex-y-center gap-7"},St=Y(()=>o("div",{class:"flex-center w-[84px] h-[84px] rounded-2xl bg-white/20"},[o("i",{class:"icon-360 text-white text-[40px]"})],-1)),Dt={class:"text-2xl leading-130 font-semibold text-white"},Lt={class:"text-base lading-130 text-white font-semibold mt-2"},jt=["href"],zt=Y(()=>o("i",{class:"icon-play-stroke ml-1"},null,-1)),Ht={key:1,class:"pt-16"},At=["src"],Pt={class:"max-w-[990px] mx-auto"},Rt={class:"mt-10 border border-solid border-white/20 rounded-xl relative overflow-hidden"},Vt={class:"max-w-[584px] mx-auto !py-4 lg:!py-8"},Et={key:0,class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10"},Nt=H({__name:"[id]",setup(m){var $,A,j,y;const t=He(),h=ke(),i=U(!1),v=U(!1),w="https://tabarruk-dash.uicgroup.tech";Ce();const e=L(()=>t==null?void 0:t.destinationSingle),g=L(()=>t==null?void 0:t.attractionList),a=L(()=>t==null?void 0:t.mediaList),p=L(()=>{var r,u,k,C,S,I;return[{id:1,title:(r=e==null?void 0:e.value)==null?void 0:r.title,location:(u=e==null?void 0:e.value)==null?void 0:u.location,region:(k=e==null?void 0:e.value)==null?void 0:k.region,destination_country:(C=e==null?void 0:e.value)==null?void 0:C.destination_country,image:(S=e==null?void 0:e.value)==null?void 0:S.image,religion:(I=e==null?void 0:e.value)==null?void 0:I.religion,latitude:41.321517,longitude:69.304964}]}),n=L(()=>{var r,u,k,C,S,I,P,R,V,E;return[{title:"country",link:`/country/${(k=(u=(r=e==null?void 0:e.value)==null?void 0:r.region)==null?void 0:u.country)==null?void 0:k.id}`},{title:(I=(S=(C=e==null?void 0:e.value)==null?void 0:C.region)==null?void 0:S.country)==null?void 0:I.title,link:`/country/${(V=(R=(P=e==null?void 0:e.value)==null?void 0:P.region)==null?void 0:R.country)==null?void 0:V.id}`},{title:(E=e==null?void 0:e.value)==null?void 0:E.title,link:"/"}]});async function b(){var r;return i.value=!0,await Promise.all([t==null?void 0:t.fetchSingleDestinations(h.params.id).then(u=>{var k,C;u&&t.fetchAttractions((k=u==null?void 0:u.destination_country)==null?void 0:k.id,(C=h==null?void 0:h.params)==null?void 0:C.id)}),t.fetchDestinationMediaList((r=h==null?void 0:h.params)==null?void 0:r.id,100)])}b().finally(()=>{i.value=!1});const x=()=>{v.value=!0};return ze({title:($=e==null?void 0:e.value)==null?void 0:$.title,description:(A=e==null?void 0:e.value)==null?void 0:A.short_description,ogDescription:(j=e.value)==null?void 0:j.short_description,ogImage:(y=e==null?void 0:e.value)==null?void 0:y.image}),(r,u)=>{var q,G,K,Z,J,Q,X,ee,te,oe;const k=fe,C=ut,S=Te,I=Be,P=Se,R=De,V=ae,E=Le,pe=pt,me=_e,he=je;return s(),d("div",ht,[o("div",gt,[(s(),D(k,_({menu:n.value},{key:e.value,class:"container"}),null,16)),o("div",ft,[l(Me,{name:"fade",mode:"out-in"},{default:c(()=>[(s(),d("div",{key:i.value,class:"max-w-[990px] mx-auto h-full"},[l(C,le(Ie({single:e.value,loading:i.value})),null,16)]))]),_:1})])]),o("div",vt,[o("div",xt,[o("div",wt,[o("div",bt,[o("img",{src:(q=e.value)==null?void 0:q.image,alt:"destination-single",class:"w-full h-full object-cover pointer-events-none"},null,8,yt)]),o("div",{class:B(["absolute inset-0 w-full h-full destination-single-blur-bg pointer-events-none",{"destination-single-blur":((G=e.value)==null?void 0:G.type)!=="destination"}])},null,2)])])]),$t,o("div",kt,[o("div",Ct,[Mt,o("div",{class:"destination-text whitespace-pre-line",innerHTML:(K=e.value)==null?void 0:K.content},null,8,It)])]),(Z=a.value)!=null&&Z.length?(s(),D(P,le(_({key:0},{images:a.value})),{suffix:c(()=>[l(I,{class:"!pt-0 !pb-10",title:r.$t("media"),subtitle:r.$t("view_media")},{suffix:c(()=>{var T,N;return[(T=e.value)!=null&&T.json_field_360?(s(),d("div",Tt,[o("div",Bt,[St,o("div",null,[o("p",Dt,M(r.$t("360_view")),1),o("p",Lt,M(r.$t("explore_360")),1)])]),o("a",{href:`${z(w)}/360/${(N=e.value)==null?void 0:N.slug}`,target:"_blank"},[l(S,{class:"!py-3",suffix:"",text:r.$t("view")},{suffix:c(()=>[zt]),_:1},8,["text"])],8,jt)])):f("",!0)]}),_:1},8,["title","subtitle"])]),_:1},16)):f("",!0),(J=e.value)!=null&&J.youtube_video?(s(),d("div",Ht,[l(R,{image:(Q=e.value)==null?void 0:Q.youtube_video_image,title:(X=e.value)==null?void 0:X.youtube_video_title,onHandleShowVideo:x},null,8,["image","title"])])):f("",!0),l(E,{show:v.value,onClose:u[0]||(u[0]=T=>v.value=!1),title:(ee=e.value)==null?void 0:ee.title,"body-style":"!max-w-full md:!max-w-[70%] h-[30%] sm:h-[50%] md:h-[70%]"},{default:c(()=>[l(V,null,{default:c(()=>{var T;return[(s(),d("iframe",{key:v.value,width:"100%",height:"100%",src:`https://www.youtube.com/embed/${("toEmbed"in r?r.toEmbed:z(we))((T=e.value)==null?void 0:T.youtube_video)}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,At))]}),_:1})]),_:1},8,["show","title"]),o("div",Pt,[l(I,{centered:"",title:r.$t("map")},{default:c(()=>[o("div",Rt,[i.value?f("",!0):(s(),D(pe,{key:0,locations:p.value,"map-class":"!h-[500px]"},null,8,["locations"]))])]),_:1},8,["title"])]),o("div",Vt,[l(me,{title:(te=e.value)==null?void 0:te.title,class:"!bg-[#07091C80]"},null,8,["title"])]),(oe=g.value)!=null&&oe.length?(s(),D(I,{key:2,class:"!py-4 lg:!py-8",centered:"",title:r.$t("recommended_attractions"),subtitle:r.$t("recommended_attractions_subtitle")},{default:c(()=>{var T;return[(T=g.value)!=null&&T.length?(s(),d("div",Et,[(s(!0),d(F,null,W(g.value,(N,ge)=>(s(),D(he,_({item:N},{key:ge,class:"!w-full !h-[200px]"}),null,16))),128))])):f("",!0)]}),_:1},8,["title","subtitle"])):f("",!0)])}}});const io=de(Nt,[["__scopeId","data-v-85b2a901"]]);export{io as default};
