(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,e,o){t.exports=o.p+"img/b660cc4.png"},188:function(t,e,o){t.exports=o.p+"img/0e6e5f3.gif"},189:function(t,e,o){t.exports=o.p+"img/ea479d7.png"},190:function(t,e,o){t.exports=o.p+"img/b779be5.png"},191:function(t,e,o){t.exports=o.p+"img/9564dcd.png"},192:function(t,e,o){t.exports=o.p+"img/1873d04.png"},193:function(t,e,o){var map={"./criticalmechs/logo.png":194,"./dale-findlay.jpeg":195,"./dale-findlay.png":187,"./dustbot/thumbnail.png":196,"./fff/Screen Shot 2020-07-06 at 1.12.33 am.png":197,"./fff/Screen Shot 2020-07-06 at 1.13.12 am.png":198,"./fff/logo.png":199,"./fff/thumbnail-1.jpg":200,"./fff/thumbnail-2.png":201,"./fff/thumbnail-3.png":202,"./fff/thumbnail-4.png":203,"./horizon/thumbnail.png":204,"./platforms/android.png":191,"./platforms/github.png":192,"./platforms/windows.png":190,"./relativity.gif":188,"./relativity/logo.png":205,"./relativity/thumbnail-1.gif":206,"./riddles/logo.png":207,"./shootem-preview.png":189,"./shootem/logo.png":208,"./shootem/thumbnail-1.png":209,"./tcfh/logo.png":210,"./tcfh/thumbnail-1.gif":211,"./tcfh/thumbnail-2.gif":212,"./tcfh/thumbnail-3.gif":213,"./ufnc/logo.png":214,"./ufnc/thumbnail-1.gif":215,"./ufnc/thumbnail-2.gif":216};function n(t){var e=l(t);return o(e)}function l(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=193},194:function(t,e,o){t.exports=o.p+"img/a039ccf.png"},195:function(t,e,o){t.exports=o.p+"img/fbd2013.jpeg"},196:function(t,e,o){t.exports=o.p+"img/e8c3bc2.png"},197:function(t,e,o){t.exports=o.p+"img/cbaf68c.png"},198:function(t,e,o){t.exports=o.p+"img/cda7439.png"},199:function(t,e,o){t.exports=o.p+"img/ba787bc.png"},200:function(t,e,o){t.exports=o.p+"img/1a3e521.jpg"},201:function(t,e,o){t.exports=o.p+"img/2ee2dbb.png"},202:function(t,e,o){t.exports=o.p+"img/44c5f74.png"},203:function(t,e,o){t.exports=o.p+"img/b6f07c8.png"},204:function(t,e,o){t.exports=o.p+"img/0daf035.png"},205:function(t,e,o){t.exports=o.p+"img/ceec3b6.png"},206:function(t,e,o){t.exports=o.p+"img/0e6e5f3.gif"},207:function(t,e,o){t.exports=o.p+"img/e70047f.png"},208:function(t,e,o){t.exports=o.p+"img/e4c0c1d.png"},209:function(t,e,o){t.exports=o.p+"img/ea479d7.png"},210:function(t,e,o){t.exports=o.p+"img/71e8ed5.png"},211:function(t,e,o){t.exports=o.p+"img/1c7da7b.gif"},212:function(t,e,o){t.exports=o.p+"img/0df25e4.gif"},213:function(t,e,o){t.exports=o.p+"img/6e3621f.gif"},214:function(t,e,o){t.exports=o.p+"img/07df864.png"},215:function(t,e,o){t.exports=o.p+"img/007d35a.gif"},216:function(t,e,o){t.exports=o.p+"img/7e3bec7.gif"},217:function(t,e,o){"use strict";o.r(e);var n={props:["platforms"]},l=o(14),r={components:{PlatformDownload:Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("strong",{staticClass:"d-block"},[t._v("Download:")]),t._v(" "),t._l(t.platforms,(function(e){return n("div",{key:e.link,staticClass:"d-inline"},[n("a",{attrs:{href:e.link}},["windows"===e.type?n("img",{staticClass:"platform",attrs:{src:o(190),alt:"Windows"}}):"android"===e.type?n("img",{staticClass:"platform",attrs:{src:o(191),alt:"Android"}}):"github"===e.type?n("img",{staticClass:"platform",attrs:{src:o(192),alt:"Github"}}):t._e()])])}))],2)}),[],!1,null,null,null).exports},props:["games"],data:function(){return{slide:0}},methods:{onSlideStart:function(t){},onSlideEnd:function(t){}}},c={components:{GameDisplay:Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.games,(function(e,l){return n("div",{key:e.id,staticClass:"mb-4"},[n("hr",{attrs:{id:e.id}}),t._v(" "),n("section",{staticClass:"game-section"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 d-flex align-items-start flex-column justify-content-center",class:{"order-md-1":(l+1)%2==0,"order-md-2":(l+1)%2!=0}},[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-2",interval:e.carouselInterval,width:"1024",height:"480",controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(e.images,(function(image){return n("b-carousel-slide",{key:image,attrs:{"img-src":o(193)("./"+image)}})})),1)],1),t._v(" "),n("div",{staticClass:"col-md-6",class:{"order-md-1":l+1!=0,"order-md-2":l+1==0}},[n("div",{staticClass:"game-logo mb-2"},[e.logoPath?t._e():n("h3",[t._v(t._s(e.name))]),t._v(" "),e.logoPath?n("img",{staticClass:"img-fluid",attrs:{src:o(193)("./"+e.logoPath),alt:""}}):t._e()]),t._v(" "),n("div",{staticClass:"game-info",domProps:{innerHTML:t._s(e.description)}}),t._v(" "),e.showFullStory&&!0===e.showFullStory?n("a",{staticClass:"btn btn-outline-primary mb-3",attrs:{href:e.link}},[t._v("Read the full story")]):t._e(),t._v(" "),n("PlatformDownload",{attrs:{platforms:e.platforms}}),t._v(" "),n("div",{staticClass:"game-platforms"})],1)])])])})),0)}),[],!1,null,null,null).exports},head:function(){return{title:"Dale Findlay - Porfolio"}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},data:function(){return{slideIndex:[],slideSliding:[],scrollPosition:null,games:[{id:"shoot-em",name:"Shoot Em'",link:"/games/shoot-em",scrollMin:240,scrollMax:860,description:"Shoot Em’ is a fun first-person shoot-em-up game where you must destroy the flying heads! On mobile, this game can be controlled using the phone's gyroscope for added immersion!",logoPath:"shootem/logo.png",carouselInterval:4e3,images:["shootem/thumbnail-1.png"],platforms:[{type:"windows",link:"https://drive.google.com/uc?export=download&id=1eGXsUR99iZIyA1CU_B1TSSHWFUhtdegE"},{type:"android",link:"https://drive.google.com/uc?export=download&id=1XPT50INn4Q38fEGOppx8gVRzsCyDwefq"}]},{id:"ufnc",name:"Ultimate Fun Noodle Championship",link:"/games/ufnc",scrollMin:860,scrollMax:1064,description:"Ultimate Fun Noodle Championship is an arcade-style game in which the player must eat as many noodle bowls as possible in thirty seconds.",logoPath:"ufnc/logo.png",carouselInterval:4e3,images:["ufnc/thumbnail-2.gif","ufnc/thumbnail-1.gif"],platforms:[{type:"windows",link:"https://drive.google.com/uc?export=download&id=1XN96-86j8dcJWxh3Ab7en2bdVpuQawaP"},{type:"android",link:"https://drive.google.com/uc?export=download&id=1C-l44SvtD7JZrcEqtwUG38bXtduir4hv"}]},{id:"relativity",name:"Relativity",link:"/games/relativity",scrollMin:1064,scrollMax:1500,description:"Relativity is a first-person shooter action puzzle game, where you must race against the clock the collect the cubes and climb the tower as fast as possible beat your personal best and you’ll earn your spot on the leaderboard.",logoPath:"relativity/logo.png",carouselInterval:4500,images:["relativity/thumbnail-1.gif","relativity/logo.png"],platforms:[{type:"windows",link:"https://drive.google.com/uc?export=download&id=1RqNW444h4DN7U7B6nz4bbd_mEuG4wVOy"}]},{id:"tcfh",name:"Time Crystals for Humanity",link:"/games/tcfh",scrollMin:1500,scrollMax:1900,description:"Time Crystals For Humanity is a game in which you control 4 brothers, with 120 seconds on the clock you must collect the gems, save the universe and reunite the brothers.",logoPath:"tcfh/logo.png",carouselInterval:5e3,images:["tcfh/thumbnail-3.gif","tcfh/thumbnail-2.gif","tcfh/thumbnail-1.gif"],platforms:[{type:"windows",link:"https://drive.google.com/uc?export=download&id=116swtu-TZDo91u1oZJq37u83Mj5XSx3k"}]},{id:"fff",name:"Frantic Food Frenzy",link:"/games/frantic-food-frenzy",scrollMin:1900,scrollMax:2270,showFullStory:!1,description:"Frantic Food Frenzy ​is a 3D third-person chaotic cooking and driving game where the player collects, cooks and combines ingredients all while driving. The player is in control of a food delivery van and must collect ingredients from around town, cook a recipe while behind the wheel and finally deliver it to the hungry customer before time runs out.",logoPath:"fff/logo.png",carouselInterval:4e3,images:["fff/thumbnail-1.jpg","fff/thumbnail-2.png","fff/thumbnail-3.png","fff/thumbnail-4.png"],platforms:[{type:"windows",link:"https://drive.google.com/uc?export=download&id=1eGXsUR99iZIyA1CU_B1TSSHWFUhtdegE"}]}],personalProjects:[{id:"horizon-engine",name:"Horizon Game Engine.",link:"/games/horizon-game-engine",scrollMin:2270,scrollMax:2530,description:"The Horizon Game Engine is written in C++ with a custom OpenGL engine implementing a Mono C# Scripting runtime. It's featured in the below Dustbot demo.",carouselInterval:4e3,images:["horizon/thumbnail.png"],platforms:[{type:"github",link:"https://github.com/dale-findlay/dustbot"}]},{id:"dustbot",name:"Dustbot Demo",link:"/games/shoot-em",scrollMin:2530,scrollMax:3e3,description:"Dustbot is written in C++ with a custom OpenGL engine implementing a Mono C# Scripting runtime running a very basic path-finding simulation.",carouselInterval:4e3,images:["dustbot/thumbnail.png"],platforms:[{type:"github",link:"https://github.com/dale-findlay/dustbot"}]},{id:"aim",name:"Aim (Artificial Intelligence Library)",link:"/games/shoot-em",scrollMin:3e3,scrollMax:3500,description:"Aim is a basic artificial intelligence library - providing basic functionality like behaviour trees and basic A* path-finding. It's also featured in the above Dustbot Demo.",carouselInterval:4e3,images:["horizon/thumbnail.png"],platforms:[{type:"github",link:"https://github.com/dale-findlay/aim"}]}]}},methods:{onSlideStart:function(t){},onSlideEnd:function(t){},scrollInRange:function(t){return this.scrollPosition>=t.scrollMin&&this.scrollPosition<=t.scrollMax},scrollInRangeCategory:function(t){var e=null;if("games"==t&&(e=this.games),"personalProjects"==t&&(e=this.personalProjects),e){var o=e[0],n=e[e.length-1];if(this.scrollPosition>=o.scrollMin&&this.scrollPosition<=n.scrollMax)return!0}return!1},updateScroll:function(){this.scrollPosition=window.scrollY}}},m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"content-section-header row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-md-6 d-flex align-items-start flex-column justify-content-center"},[n("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slideIndex[0],callback:function(e){t.$set(t.slideIndex,0,e)},expression:"slideIndex[0]"}},[n("b-carousel-slide",{attrs:{caption:"Relativity",text:"Relativity is a first-person shooter action puzzle game, where you must race against the clock...","img-src":o(188)}}),t._v(" "),n("b-carousel-slide",{attrs:{caption:"Shoot Em'",text:"Shoot Em’ is a fun first-person shoot-em-up game where you must destroy the flying heads!","img-src":o(189)}})],1)],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 d-none d-sm-block"},[n("ul",{staticClass:"list-group list-group-flush sticky-top rounded-0",staticStyle:{top:"25px"}},[n("li",{staticClass:"list-group-item p-0 my-1"},[n("a",{staticClass:"btn w-100 text-left",class:{"btn-outline-dark":!t.scrollInRangeCategory("games"),"btn-dark":t.scrollInRangeCategory("games")},attrs:{href:"#games"}},[t._v("Games")])]),t._v(" "),t._l(t.games,(function(e){return n("li",{key:e.id,staticClass:"list-group-item p-0 ml-4"},[n("a",{staticClass:"w-100 text-left btn btn-outline-secondary",class:{"btn-outline-primary":!t.scrollInRange(e),"btn-secondary text-white":t.scrollInRange(e)},staticStyle:{"margin-bottom":"3px !important"},attrs:{href:"#"+e.id}},[t._v(t._s(e.name))])])})),t._v(" "),n("li",{staticClass:"list-group-item p-0 my-1"},[n("a",{staticClass:"btn w-100 text-left",class:{"btn-outline-dark":!t.scrollInRangeCategory("personalProjects"),"btn-dark":t.scrollInRangeCategory("personalProjects")},attrs:{href:"#personal-projects"}},[t._v("Personal Projects")])]),t._v(" "),t._l(t.personalProjects,(function(e){return n("li",{key:e.id,staticClass:"list-group-item p-0 ml-4"},[n("a",{staticClass:"w-100 text-left btn btn-outline-secondary",class:{"btn-outline-primary":!t.scrollInRange(e),"btn-secondary text-white":t.scrollInRange(e)},attrs:{href:"#"+e.id}},[t._v(t._s(e.name))])])}))],2)]),t._v(" "),n("div",{staticClass:"col-md-9"},[n("h1",{staticClass:"mt-4",attrs:{id:"games"}},[t._v("Games")]),t._v(" "),n("p",[t._v("These are some of the games I've built or helped build over the years. They are in no particular order by the one's I'm most proud of are towards the top. If you're interesting i've also written some post-mortems for each project detailing how it all went.")]),t._v(" "),n("p",{staticClass:"font-weight-bold"},[t._v("All the below games are built using Unity in C#")]),t._v(" "),n("GameDisplay",{attrs:{games:t.games}}),t._v(" "),n("h1",{staticClass:"mt-4",attrs:{id:"personal-projects"}},[t._v("Personal Projects")]),t._v(" "),n("p",[t._v("Here's some recent personal projects.")]),t._v(" "),n("GameDisplay",{attrs:{games:t.personalProjects}})],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12 col-lg-6 col-md-6 d-flex align-items-start flex-column justify-content-center"},[o("h1",{staticClass:"mt-4"},[t._v("Hello World!")]),t._v(" "),o("p",[t._v("\n        Hi there, my name is Dale Findlay. I’m a game developer and an experienced software developer. For years now, I’ve been chasing a career in game development, I’ve learnt so much from the great and not-so-great experiences I’ve had along my journey so far and im eager to apply them in a professional capacity.\n        "),o("br"),t._v(" "),o("a",{staticClass:"btn btn-outline-primary my-3",attrs:{href:"/portfolio/about-me"}},[t._v("Learn More About Me")]),t._v(" "),o("br"),t._v("If you would like to get in touch, I'm best available over this email:\n        "),o("a",{attrs:{href:"mailto:dalefindlay01@gmail.com"}},[t._v("dalefindlay01@gmail.com")]),t._v(" "),o("br"),o("br"),o("strong",[t._v("Feel free to check some examples of my work below!")])])])}],!1,null,null,null);e.default=m.exports}}]);