import{c as p,D as a,N as n,H as d,G as _,u as t,U as l,X as C,T as S,F as v,W as f,E as F,R as e,Z as T,_ as k,$ as G,a0 as L,a1 as A,V as b,a2 as I,a3 as N,a4 as $,Y as V}from"./DbjbkAeu.js";import{u as P}from"./rEFWXNFF.js";import{_ as z}from"./CUrNVFNU.js";import"./BHNe58bI.js";const q={class:"slider-wrap"},O={key:0,class:"highlight"},Z=["src"],J={__name:"CommonSlider",setup(y){const s=P(),g=p([{image:`${s.imageBasePath}/image/${s.themeColor}/event01.png`},{image:`${s.imageBasePath}/image/${s.themeColor}/event02.png`},{image:`${s.imageBasePath}/image/${s.themeColor}/event03.png`},{image:`${s.imageBasePath}/image/${s.themeColor}/event04.png`}]);return(i,B)=>{const r=L,u=A;return a(),n("div",q,[d(S,{name:"fade"},{default:_(()=>[t(s).highlight==="slider"?(a(),n("div",O,l(t(s).themeSize.slider),1)):C("",!0)]),_:1}),d(u,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:t(T),"SwiperEffectCreative"in i?i.SwiperEffectCreative:t(k),"SwiperPagination"in i?i.SwiperPagination:t(G)],pagination:!0,"slides-per-view":1,loop:!0,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[(a(!0),n(v,null,f(t(g),(m,o)=>(a(),F(r,{key:o},{default:_(()=>[e("img",{src:m.image,class:"ele-slider-img"},null,8,Z)]),_:2},1024))),128))]),_:1},8,["modules"])])}}},U={class:"first-hotgame-warp"},W={class:"hotgame-warp"},j={class:"hotgame-item-warp"},X={class:"hotgame-rank"},Q=["src","title"],R={key:1},Y={class:"hotgame-icon"},K=["src"],x={class:"hotgame-name"},ee={class:"hotgame-name-top"},te={class:"hotgame-name-bottom"},oe={class:"hotgame-number"},se={class:"hotgame-item-warp"},ae={class:"hotgame-rank"},ne=["src","title"],ie={key:1},me={class:"hotgame-icon"},le=["src"],re={class:"hotgame-name"},ce={class:"hotgame-name-top"},pe={class:"hotgame-name-bottom"},de={class:"hotgame-number"},ge={__name:"CommonHotGame",setup(y){const s=P(),g=p([{nameTop:"真人百家樂",nameBottom:"Live Casino",number:"243,062"},{nameTop:"麻將胡了",nameBottom:"Casino",number:"158,772"},{nameTop:"糖果派對",nameBottom:"Casino",number:"128,772"},{nameTop:"六合彩",nameBottom:"Lottery",number:"98,772"},{nameTop:"捕魚遊戲",nameBottom:"Fish Game",number:"56,772"},{nameTop:"牛牛",nameBottom:"Card game",number:"43,062"},{nameTop:"英雄联盟",nameBottom:"E-sports",number:"28,772"},{nameTop:"足球联赛",nameBottom:"Sports",number:"18,772"},{nameTop:"3D彩",nameBottom:"Lottery",number:"9,772"},{nameTop:"连环夺宝",nameBottom:"Casino",number:"6,772"}]);return p(1),(i,B)=>{const r=L,u=A;return a(),n("div",U,[B[0]||(B[0]=e("div",{class:"hotgame-title"},[b(" 热门游戏"),e("span",null,"Hot Games")],-1)),e("div",W,[d(u,{modules:["SwiperAutoplay"in i?i.SwiperAutoplay:t(T),"SwiperEffectCreative"in i?i.SwiperEffectCreative:t(k),"SwiperPagination"in i?i.SwiperPagination:t(G)],pagination:!0,"slides-per-view":1,autoplay:{delay:8e3,disableOnInteraction:!0}},{default:_(()=>[d(r,null,{default:_(()=>[e("div",j,[(a(!0),n(v,null,f(t(g).slice(0,5),(m,o)=>(a(),n("div",{class:"hotgame-item",key:o},[e("div",X,[o+1<=3?(a(),n("img",{key:0,src:`${t(s).imageBasePath}/image/ic_crown0${o+1}.png`,title:`top${o+1}`},null,8,Q)):(a(),n("span",R,l(o+1),1))]),e("div",Y,[e("img",{src:`${t(s).imageBasePath}/image/hotgame_icon${String(o+1).padStart(2,"0")}.png`},null,8,K)]),e("div",x,[e("div",ee,l(m.nameTop),1),e("div",te,l(m.nameBottom),1)]),e("div",oe,[e("span",null,l(m.number),1)])]))),128))])]),_:1}),d(r,null,{default:_(()=>[e("div",se,[(a(!0),n(v,null,f(t(g).slice(5,10),(m,o)=>(a(),n("div",{class:"hotgame-item",key:o+5},[e("div",ae,[o+6<=3?(a(),n("img",{key:0,src:`${t(s).imageBasePath}/image/ic_crown0${o+6}.png`,title:`top${o+6}`},null,8,ne)):(a(),n("span",ie,l(o+6),1))]),e("div",me,[e("img",{src:`${t(s).imageBasePath}/image/hotgame_icon${String(o+6).padStart(2,"0")}.png`},null,8,le)]),e("div",re,[e("div",ce,l(m.nameTop),1),e("div",pe,l(m.nameBottom),1)]),e("div",de,[e("span",null,l(m.number),1)])]))),128))])]),_:1})]),_:1},8,["modules"])])])}}},he={class:"page-container"},ue={class:"first-section-wrap section1"},_e={class:"section-wrap"},ve={class:"first-top-wrap"},fe={class:"first-slider-wrap"},Be={class:"first-promotion-warp"},we=["onMouseover"],$e=["src","alt"],be={class:"first-section-wrap section2"},Ce={class:"section-wrap"},Pe={class:"first-casino-wrap"},ye={class:"casino-tab-wrap"},Se=["onClick"],Te={key:0,class:"casino-wrap"},ke={class:"item-img"},Ge=["src"],Le={class:"item-name"},Ae={class:"name"},Ee={key:0,class:"hot"},Me={class:"item-platform"},De={class:"first-section-wrap section3"},He={class:"section-wrap"},Fe={class:"first-live-wrap"},Ie={class:"live-wrap"},Ne={href:"#",class:"live-item"},Ve={class:"live-item-top"},ze=["src"],qe={class:"first-section-wrap section4"},Oe={class:"section-wrap"},Ze={class:"first-mob-wrap"},Je={class:"mob-left-wrap"},Ue={class:"download"},We={class:"download-qrcode"},je=["src"],Xe={class:"mob-right-wrap"},Qe=["src"],et={__name:"first",setup(y){const s=P(),g=p(null);p([{nameTop:"真人百家樂",nameBottom:"Live Casino",number:"243,062"},{nameTop:"麻將胡了",nameBottom:"Casino",number:"158,772"},{nameTop:"糖果派對",nameBottom:"Casino",number:"128,772"},{nameTop:"六合彩",nameBottom:"Lottery",number:"98,772"},{nameTop:"捕魚遊戲",nameBottom:"Fish Game",number:"56,772"},{nameTop:"牛牛",nameBottom:"Card game",number:"43,062"},{nameTop:"英雄联盟",nameBottom:"E-sports",number:"28,772"},{nameTop:"足球联赛",nameBottom:"Sports",number:"18,772"},{nameTop:"3D彩",nameBottom:"Lottery",number:"9,772"},{nameTop:"连环夺宝",nameBottom:"Casino",number:"6,772"}]),p(1),p("transform: translateX(0);");function i(m){}function B(m){}I(()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",B)});const r=p("casino"),u=p({casino:{label:"Casino",game:[{name:"糖果派對",platform:"BB電子",image:"5902.png",hot:!0},{name:"賞金女王",platform:"PG電子",image:"58069.png",hot:!0},{name:"聚寶消消樂",platform:"BB電子",image:"5231.jpg",hot:!1},{name:"麻將胡了",platform:"PG電子",image:"58045.png",hot:!0},{name:"發財神2",platform:"CQ9電子",image:"52177.png",hot:!1},{name:"阿斯加德之火",platform:"MG電子",image:"82497.png",hot:!1},{name:"糖果派對2",platform:"BB電子",image:"5908.png",hot:!1},{name:"冰球突破",platform:"MG電子",image:"82033.png",hot:!1}]},fishing:{label:"Fishing",game:[{name:"五龙捕鱼",platform:"JDB电子",image:"39099.png",hot:!0},{name:"龙王捕鱼",platform:"JDB电子",image:"39047.png",hot:!0},{name:"捕鱼王3D",platform:"AG电子",image:"40116.png",hot:!1},{name:"捕鱼乐园",platform:"AG电子",image:"40186.png",hot:!0},{name:"财神捕鱼",platform:"JDB电子",image:"39064.png",hot:!1},{name:"猎龙传说",platform:"BB电子",image:"30594.png",hot:!1},{name:"捕鱼大师",platform:"BB电子",image:"38001.png",hot:!1},{name:"魔鬼克星",platform:"BB电子",image:"30592.png",hot:!1}]},card:{label:"Card game",game:[{name:"火箭鸟",platform:"WG棋牌",image:"151037.png",hot:!1},{name:"财神发发发",platform:"开元棋牌",image:"49965.png",hot:!1},{name:"21点百家乐",platform:"BB棋牌",image:"66104.png",hot:!1},{name:"玛雅神殿",platform:"WG棋牌",image:"151038.png",hot:!1},{name:"炸财神",platform:"开元棋牌",image:"49964.png",hot:!1},{name:"红黑大战",platform:"BB棋牌",image:"66078.png",hot:!1},{name:"捕鱼高手",platform:"BB棋牌",image:"66068.png",hot:!1},{name:"抢庄牌九",platform:"TP棋牌",image:"140009.png",hot:!1}]}});return(m,o)=>{const E=J,M=z,D=ge;return a(),n("div",he,[e("section",ue,[e("div",_e,[e("div",ve,[e("div",fe,[d(E),e("div",Be,[(a(),n(v,null,f([1,2],c=>e("a",{key:c,href:"#",class:"first-promotion-promotion",onMouseover:h=>g.value=c,onMouseout:o[0]||(o[0]=h=>g.value=null)},[e("img",{src:`${t(s).imageBasePath}/image/${t(s).themeColor}/lang/zh-cn/btn0${c}${t(g)===c?"_hover":""}.png`,alt:`Promotion ${c}`},null,8,$e)],40,we)),64))])]),d(M,{class:"isFirst"})]),d(D)])]),e("section",be,[e("div",Ce,[e("div",Pe,[e("div",ye,[(a(!0),n(v,null,f(t(u),(c,h)=>(a(),n("button",{key:h,class:V(["tab",{active:t(r)===h}]),onClick:w=>r.value=h},[e("span",null,l(c.label),1)],10,Se))),128))]),d(S,{name:"fade",mode:"out-in"},{default:_(()=>{var c,h;return[(h=(c=t(u)[t(r)])==null?void 0:c.game)!=null&&h.length?(a(),n("div",Te,[(a(!0),n(v,null,f(t(u)[t(r)].game,(w,H)=>(a(),n("a",{href:"#",class:"game-item",key:H},[e("div",ke,[o[1]||(o[1]=e("button",{class:"item-btn"},"Play",-1)),e("img",{src:`${t(s).imageBasePath}/image/game_${t(r)}/${w.image}`},null,8,Ge)]),e("div",Le,[e("div",Ae,l(w.name),1),w.hot?(a(),n("div",Ee,"HOT")):C("",!0)]),e("div",Me,l(w.platform),1)]))),128))])):C("",!0)]}),_:1})])])]),e("section",De,[e("div",He,[e("div",Fe,[e("div",Ie,[e("a",Ne,[e("div",Ve,[o[2]||(o[2]=N('<button class="item-btn">进入游戏</button><div class="item-text"><div class="title">BB视讯</div><div class="description"><p>全球最佳视讯直播平台，真人荷官在线发牌，画面真实高清，给您亲临赌场的真实爽快感受！</p><p class="text-red">包桌百家乐・经典百家乐・竟咪百家乐</p></div></div>',2)),e("img",{src:`${t(s).imageBasePath}/image/${t(s).themeColor}/btn_live01.png`},null,8,ze)]),o[3]||(o[3]=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"579px",height:"271px"},[e("path",{"fill-rule":"evenodd",fill:"currentColor",d:"M20.000,49.1000 L559.000,0.000 C570.046,0.000 578.1000,8.954 578.1000,19.1000 L578.1000,251.000 C578.1000,262.046 570.046,270.1000 559.000,270.1000 L20.000,270.1000 C8.954,270.1000 0.000,262.046 0.000,251.000 L0.000,70.000 C0.000,58.954 8.954,49.1000 20.000,49.1000 Z"})],-1))]),e("a",{href:"#",class:"live-item",style:$({backgroundImage:`url(${t(s).imageBasePath}/image/${t(s).themeColor}/btn_live02.png)`,"--color-first-live-line":"#02AC63"})},o[4]||(o[4]=[e("button",{class:"item-btn"},"Play",-1),e("div",{class:"item-text"},[e("div",{class:"title"},"AG视讯"),e("div",{class:"description"},[e("p",null,"实体赌场真人荷官现场发牌")])],-1)]),4),e("a",{href:"#",class:"live-item",style:$({backgroundImage:`url(${t(s).imageBasePath}/image/${t(s).themeColor}/btn_live03.png)`,"--color-first-live-line":"#F5B443"})},o[5]||(o[5]=[e("button",{class:"item-btn"},"Play",-1),e("div",{class:"item-text"},[e("div",{class:"title"},"DB视讯"),e("div",{class:"description"},[e("p",null,"网上体验亲临赌场的刺激")])],-1)]),4),e("a",{href:"#",class:"live-item",style:$({backgroundImage:`url(${t(s).imageBasePath}/image/${t(s).themeColor}/btn_live04.png)`,"--color-first-live-line":"#3E56E1"})},o[6]||(o[6]=[e("button",{class:"item-btn"},"Play",-1),e("div",{class:"item-text"},[e("div",{class:"title"},"MG视讯"),e("div",{class:"description"},[e("p",null,"给你身临其境的真实感受")])],-1)]),4),e("a",{href:"#",class:"live-item",style:$({backgroundImage:`url(${t(s).imageBasePath}/image/${t(s).themeColor}/btn_live05.png)`,"--color-first-live-line":"#45DDF6"})},o[7]||(o[7]=[e("button",{class:"item-btn"},"Play",-1),e("div",{class:"item-text"},[e("div",{class:"title"},"BG视讯"),e("div",{class:"description"},[e("p",null,"最美荷官在线互动")])],-1)]),4)])])])]),e("section",qe,[e("div",Oe,[e("div",Ze,[e("div",Je,[o[10]||(o[10]=e("div",{class:"title"}," 体验极致 手机投注APP ",-1)),o[11]||(o[11]=e("div",{class:"description"}," 原生APP，便捷登录、操作简单、界面一目了然、游戏畅通无阻、丰富的游戏品类、24小时多平台无缝应用体验。指尖App无处不在，带您开启掌上精彩！ ",-1)),e("div",Ue,[e("div",We,[e("img",{src:t(s).isLoggedIn?`${t(s).imageBasePath}/image/not-use/qrcode.jpg`:`${t(s).imageBasePath}/image/not-use/lang/zh-cn/qrcode_d.png`,class:"img img-qrcode"},null,8,je),o[8]||(o[8]=e("p",null,[b("扫码下载App"),e("br"),b("iOS & Android")],-1))]),o[9]||(o[9]=e("div",{class:"download-h5"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"107.743",height:"122.708",viewBox:"0 0 107.743 122.708"},[e("path",{id:"Path_15","data-name":"Path 15",d:"M21.169,22.78h69L88.842,36.913H37.466L38.63,50.049H87.512L84.02,91.616,55.088,99.929,27.322,91.783l-2-20.951H39.295l1.164,9.312L55.088,84.8l15.461-4.654.832-16.129H24.5ZM.552.5,11.359,110.4l43.564,12.8,44.56-13.3L108.295.5Z",transform:"translate(-0.552 -0.5)",fill:"currentColor"})]),e("p",null,[b("无需下载，扫码直接访问"),e("br"),e("span",{class:"text-primary"},"web.bbinpartner.com")])],-1))])]),e("div",Xe,[e("img",{src:`${t(s).imageBasePath}/image/${t(s).themeColor}/bg_mobile.png`},null,8,Qe)])])])])])}}};export{et as default};
