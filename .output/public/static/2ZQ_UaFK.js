import{D as o,N as i,R as r,f as m,E as u,u as g}from"./DbjbkAeu.js";import{u as l}from"./BHNe58bI.js";import{u as p}from"./rEFWXNFF.js";const _={class:"page-container"},h={class:"page-body"},d=["src"],B={__name:"GamePage",props:{imageSrc:{type:String,required:!0}},setup(t){return(s,e)=>(o(),i("div",_,[r("div",h,[r("img",{src:t.imageSrc},null,8,d)])]))}},y={__name:"[type]",setup(t){const s=l(),e=p(),n=m(()=>{const{type:a}=s.params;if(a==="promotion")return e.themeMode==="dark"?`${e.imageBasePath}/image/not-use/hall/promotions_dark.png`:`${e.imageBasePath}/image/not-use/hall/promotions_light.png`;switch(a){case"ball":return`${e.imageBasePath}/image/not-use/hall/sport_1200.png`;case"card":return`${e.imageBasePath}/image/not-use/hall/card_1200.png`;case"game":return`${e.imageBasePath}/image/not-use/hall/casino_960.png`;case"live":return`${e.imageBasePath}/image/not-use/hall/live_960.png`;case"lottery":return`${e.imageBasePath}/image/not-use/hall/lottery_1200.jpg`;default:return""}});return(a,f)=>{const c=B;return o(),u(c,{imageSrc:g(n)},null,8,["imageSrc"])}}};export{y as default};
