"use strict";(self.webpackChunkupdated_steam_copy=self.webpackChunkupdated_steam_copy||[]).push([[408],{896:function(n,t,e){e.d(t,{Y:function(){return i}});var i={method:"GET",headers:{"X-RapidAPI-Key":"7c5ef87773msh1ba3465dbccadb6p1e9a59jsnbe646dae5f80","X-RapidAPI-Host":"steam2.p.rapidapi.com"}}},3408:function(n,t,e){e.r(t),e.d(t,{default:function(){return G},loader:function(){return N}});var i,r,a,d,o,s,p,c,l=e(4165),u=e(5861),x=e(2791),f=e(1989),h=e(896),m=e(7689),v=e(168),g=e(7691),b=g.ZP.section(i||(i=(0,v.Z)(["\n\tpadding: 15px 10px 10px 10px;\n\t\n\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n\n\t& > p {\n\t\tmargin-bottom: 15px;\n\t}\n\n\t@media (max-width: 560px) {\n\t\t&:first-child {\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]))),j=g.ZP.button(r||(r=(0,v.Z)(["\n\tpadding: 5px 10px;\n\tmargin-bottom: 15px;\n\tfont-size: 20px;\n\tborder-radius: 5px;\n\tbackground-color: #837f7f;\n\tcolor: white;\n\n\ttransition: all 0.2s ease 0s;\n\n\t&:hover {\n\t\tbackground-color: #ccc;\n\t\tcolor: #837f7f;\n\t}\n"]))),Z=g.ZP.div(a||(a=(0,v.Z)(["\n\toverflow: hidden;\n\tborder-radius: 10px;\n\t& img {\n\t\theight: 100%;\n\t\twidth: 100%;\n\t}\n"]))),k=g.ZP.div(d||(d=(0,v.Z)(["\n\tpadding-top: 10px;\n\tfont-size: 20px;\n\tline-height: 1.2;\n\tp {\n\t\tmargin-bottom: 10px;\n\t}\n"]))),w=g.ZP.p(o||(o=(0,v.Z)(["\n\t/* font-size: 20px;\n\tline-height: 1.2;\n\tmargin-bottom: 10px; */\n"]))),P=g.ZP.p(s||(s=(0,v.Z)(["\n\t/* font-size: 20px;\n\tmargin-bottom: 10px; */\n"]))),I=(g.ZP.p(p||(p=(0,v.Z)(["\n\t/* margin-bottom: 10px; */\n"]))),g.ZP.div(c||(c=(0,v.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t& span {\n\t\tpadding: 4px;\n\t}\n"])))),y=e(184),_=function(n){var t,e=n.foundItem;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(Z,{children:(0,y.jsx)("img",{src:null===e||void 0===e?void 0:e.imgUrl,alt:"Game"})}),(0,y.jsxs)(k,{children:[(0,y.jsx)(w,{children:null===e||void 0===e?void 0:e.title}),(0,y.jsx)(P,{children:null===e||void 0===e?void 0:e.price}),(0,y.jsx)("p",{children:null===e||void 0===e?void 0:e.released})]})]}),(0,y.jsx)("p",{children:null===e||void 0===e?void 0:e.description}),(0,y.jsx)(I,{children:null===e||void 0===e||null===(t=e.tags)||void 0===t?void 0:t.map((function(n){return(0,y.jsx)("span",{children:(0,y.jsx)("h3",{children:(0,y.jsx)("a",{href:n.url,children:n.name})})},Math.random())}))})]})},z=function(){return(0,y.jsx)("p",{children:" No id provided or invalid id, can not get detailed app"})},C=function(){var n=(0,m.f_)(),t=(0,m.UO)().pageId,e="none"!==(null===t||void 0===t?void 0:t.split("-")[0]),i=(0,m.s0)();return(0,y.jsxs)(b,{children:[(0,y.jsx)(j,{onClick:function(){i(-4)},children:" Go back "}),(!e||!n)&&(0,y.jsx)(z,{}),e&&n&&(0,y.jsx)(_,{foundItem:n})]})},A=e(2319),G=function(){return(0,x.useEffect)((function(){return(0,A.S)()}),[]),(0,y.jsx)(C,{})},N=function(){var n=(0,u.Z)((0,l.Z)().mark((function n(t){var e,i,r;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.params,(i=e.pageId)&&"none"!==(null===i||void 0===i?void 0:i.split("-")[0])&&!isNaN(parseInt(i))){n.next=4;break}return n.abrupt("return",null);case 4:return n.next=6,fetch("https://steam2.p.rapidapi.com/appDetail/".concat(i),h.Y);case 6:if((r=n.sent).ok){n.next=9;break}throw(0,f.AV)({message:"Can not fetch app details."},{status:r.status,statusText:r.statusText});case 9:return n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=408.e2f40916.chunk.js.map