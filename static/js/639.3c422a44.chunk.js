"use strict";(self.webpackChunkupdated_steam_copy=self.webpackChunkupdated_steam_copy||[]).push([[639],{896:function(t,n,e){e.d(n,{Y:function(){return r}});var r={method:"GET",headers:{"X-RapidAPI-Key":"7c5ef87773msh1ba3465dbccadb6p1e9a59jsnbe646dae5f80","X-RapidAPI-Host":"steam2.p.rapidapi.com"}}},469:function(t,n,e){e.r(n),e.d(n,{default:function(){return st}});var r,a,i,o,s,c,p,d,u,l,f,h=e(9439),x=e(7689),g=e(1087),m=e(1989),v=e(896),b=e(2791),w=e(2783),Z=e(2483),j=e(6879),y=function(t,n,e){var r="bigger-to-lower"===t;if(isNaN(n))return r?1:-1;if(isNaN(e))return r?-1:1;var a=e-n;return r?a:-a},k=function(){var t=Math.random().toFixed(10).toString();return"none-".concat(t.slice(5))},P=e(168),C=e(7342),z=e(7691),N=(0,z.ZP)(C.ZP)(r||(r=(0,P.Z)(["\n\tpadding: 0 50px;\n\tposition: relative;\n\tz-index: 1;\n\t\n\t@media (max-width: 980px) {\n\t\tpadding: 0 25px;\n\t}\n\t@media (max-width: 760px) {\n\t\tpadding: 0 15px;\n\t}\n\t@media (max-width: 420px) {\n\t\tpadding: 0;\n\t}\n"]))),E=z.ZP.div(a||(a=(0,P.Z)(["\n\ttext-align: center;\n\tfont-size: 24px;\n\tpadding: 30px 0;\n\n\th2:not(:last-child) {\n\t\tmargin-bottom: 10px;\n\t}\n\n\tp {\n\t\tfont-size: 16px;\n\t}\n"]))),R=z.ZP.li(i||(i=(0,P.Z)(["\n\tlist-style: none;\n\theight: 100%;\n\tbackground: #17323a;\n\tborder-radius: 10px;\n\tposition: relative;\n\ttransition: transform 0.15s ease 0s;\n\tcursor: pointer;\n\n\t&:hover {\n\t\ttransform: scale(1.05, 1.05);\n\t}\n"]))),T=z.ZP.div(o||(o=(0,P.Z)(["\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tcursor: pointer;\n\timg {\n\t\tbackground-color: transparent;\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"]))),U=z.ZP.div(s||(s=(0,P.Z)(["\n\tpadding: 7px 11px;\n\tcursor: pointer;\n\n\t/* display: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tjustify-content: space-between;\n\t */\n\ta {\n\t\tcolor: white;\n\t}\n"]))),A=z.ZP.p(c||(c=(0,P.Z)(["\n\tfont-size: 18px;\n\tline-height: 1.2;\n\tmargin-bottom: 6px;\n"]))),_=z.ZP.p(p||(p=(0,P.Z)(["\n\tfont-size: 15px;\n\tline-height: 1.2;\n\tmargin-bottom: 5px;\n\t/* flex: 1 1 auto; */\n"]))),F=z.ZP.div(d||(d=(0,P.Z)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"]))),I=z.ZP.p(u||(u=(0,P.Z)(["\n\tfont-size: 14px;\n\tline-height: 1.2;\n"]))),S=z.ZP.p(l||(l=(0,P.Z)(["\n\twidth: 25px;\n\theight: 25px;\n\ttransition: transform 0.1s ease 0s;\n\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t&:hover {\n\t\ttransform: scale(1.25);\n\t}\n"]))),Y=z.ZP.div(f||(f=(0,P.Z)(["\n\tposition: absolute;\n\ttop: 76px;\n\tright: 17px;\n\tcursor: pointer;\n\ttransition: transform 0.25s ease 0s;\n\t&:hover {\n\t\ttransform: scale(1.1);\n\t}\n"])));var H=e.p+"static/media/play-button.6a8fa214fa962010a5b4e024d50e2ff9.svg";var J=e.p+"static/media/icon-liked.835f843858e6d0fa13f7abbab2ec1973.svg";var D,L=e.p+"static/media/icon-unliked.f4d9df42cad2a451530fb6bd48a1d4c2.svg",O=function(t){var n=parseFloat(t.replace(",","."));return isNaN(n)?t||"Unprovided price":n+"\u20ac"},V=e(184),W=function(t){var n=t.app,e=n.imgUrl,r=n.title,a=n.released,i=n.price,o=n.url,s=n.appId,c=void 0===s?k():s,p=(0,b.useState)(!1),d=(0,h.Z)(p,2),u=d[0],l=d[1],f=(0,x.s0)(),g=(0,w.T)(),m=(0,w.C)(Z.Ws);(0,b.useEffect)((function(){m.includes(c)&&l(!0)}),[c,m]);var v=(0,x.HJ)().state;return(0,V.jsx)(C.ZP,{lg:3,md:4,sm:6,xs:12,item:!0,children:(0,V.jsxs)(R,{onClick:function(){"loading"!==v&&f("detailed/".concat(c))},children:[(0,V.jsx)(T,{children:(0,V.jsx)("img",{src:e,alt:r})}),(0,V.jsxs)(U,{children:[(0,V.jsx)(A,{children:r||"Unprovided title of the app"}),(0,V.jsx)(_,{children:a||"Release date was not provided"}),(0,V.jsxs)(F,{children:[(0,V.jsx)(I,{children:O(i.trim()||"")}),(0,V.jsx)(S,{onClick:function(t){t.stopPropagation(),l((function(t){return!t})),g(u?(0,Z.Jc)(c):(0,Z.RT)(c))},children:(0,V.jsx)("img",{src:u?J:L,alt:"".concat("Unliked"," icon")})})]})]}),u&&(0,V.jsx)(Y,{onClick:function(t){t.stopPropagation(),window.location.href=o},children:(0,V.jsx)("img",{src:H,alt:"Play game"})})]})})},X=e(7047),q=function(){return(0,V.jsx)(C.ZP,{lg:3,md:4,sm:6,xs:12,item:!0,children:(0,V.jsx)(X.Z,{sx:{backgroundColor:"#303030"},variant:"rounded",width:"100%",height:210})})},G=function(){var t=new Array(25).fill(0).map((function(t,n){return(0,V.jsx)(q,{},n)}));return(0,V.jsx)(N,{container:!0,spacing:2,children:t})},K=function(t){var n=t.apps,e=(0,g.lr)(),r=(0,h.Z)(e,1)[0],a=(0,w.C)(Z.Ws),i=(0,w.C)(j.V_),o=(0,w.T)();if((0,b.useEffect)((function(){n&&0!==n.length?o((0,j.wt)(!1)):o((0,j.wt)(!0))}),[n,o]),i||!n)return(0,V.jsx)(G,{});var s=function(t){var n=new URL(window.location.href).searchParams,e={sort:"bigger-to-lower",parameter:"price"};if(n.has("sort")){var r=n.get("sort");e.sort="bigger-to-lower"===r||"lower-to-bigger"===r?r:"bigger-to-lower"}if(n.has("parameter")){var a=n.get("parameter");e.parameter="price"===a||"publish-date"===a?a:"price"}return"price"===e.parameter?t.sort((function(t,n){var r=parseFloat(t.price||""),a=parseFloat(n.price||"");return y(e.sort,r,a)})):t.sort((function(t,n){var r=Date.parse(t.released),a=Date.parse(n.released);return y(e.sort,r,a)}))}(n),c="like-list"===r.get("priority");return c&&(s=s.filter((function(t){var n=t.appId;return a.includes(n)}))),c&&0===s.length?(0,V.jsxs)(E,{children:[(0,V.jsx)("h2",{children:"No liked app in your search request ^_^"}),(0,V.jsx)("p",{children:"You can try to change searching parameters"})]}):(0,V.jsx)("div",{children:(0,V.jsx)(N,{container:!0,spacing:2,children:s.map((function(t){return(0,V.jsx)(W,{app:t},t.appId||k())}))})})},M=e.p+"static/media/main-error.ce3ad40fca0549b6238a.jpg",B=z.ZP.div(D||(D=(0,P.Z)(["\n\ttext-align: center;\n\th2 {\n\t\tfont-size: 24px;\n\t\tline-height: 1.2;\n\t}\n\tp {\n\t\tfont-size: 20px;\n\t\tline-height: 1.2;\n\t\tpadding: 5px;\n\t}\n\n\timg {\n\t\tmax-width: 250px;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: 1px 1px 2px #fbfbfb;\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"]))),Q=function(t){var n=t.error,e=(0,x.s0)(),r=(0,x.UO)().page,a=(0,b.useState)(!0),i=(0,h.Z)(a,2),o=i[0],s=i[1];(0,b.useEffect)((function(){return s("1"!==r)}),[o,r]);var c=(0,b.useCallback)((function(){var t=new URL(window.location.href).searchParams;o&&e("/main/pages/1?".concat(t.toString()))}),[]);(0,b.useEffect)((function(){if(o){var t=setTimeout((function(){return c()}),7500);return function(){return clearTimeout(t)}}}),[c,o]);var p=o?(0,V.jsx)("p",{children:" You will be redirected in 10 seconds"}):(0,V.jsx)("p",{children:" Please try to change search params"});return(0,V.jsxs)(B,{children:[(0,V.jsx)("h2",{children:n.title}),(0,V.jsx)("p",{children:n.message}),p,(0,V.jsx)("img",{src:M,alt:"Error"})]})},$=e(4165),tt=e(5861),nt=e(1413);var et,rt=function(t,n){var e=(0,b.useRef)({}),r=(0,b.useRef)(!1),a={error:void 0,data:void 0},i=(0,b.useReducer)((function(t,n){switch(n.type){case"loading":return(0,nt.Z)({},a);case"fetched":return(0,nt.Z)((0,nt.Z)({},a),{},{data:n.payload});case"error":return(0,nt.Z)((0,nt.Z)({},a),{},{error:n.payload});default:return t}}),a),o=(0,h.Z)(i,2),s=o[0],c=o[1];return(0,b.useEffect)((function(){if(t){r.current=!1;var a=function(){var a=(0,tt.Z)((0,$.Z)().mark((function a(){var i,o;return(0,$.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c({type:"loading"}),!e.current[t]){a.next=4;break}return c({type:"fetched",payload:e.current[t]}),a.abrupt("return");case 4:return a.prev=4,a.next=7,fetch(t,n);case 7:if((i=a.sent).ok){a.next=11;break}throw console.log(i),new Error(i.statusText);case 11:return a.next=13,i.json();case 13:if(o=a.sent,!Array.isArray(o)){a.next=17;break}if(0!==o.length){a.next=17;break}throw new Error("No data");case 17:if(e.current[t]=o,!r.current){a.next=20;break}return a.abrupt("return");case 20:c({type:"fetched",payload:o}),a.next=28;break;case 23:if(a.prev=23,a.t0=a.catch(4),!r.current){a.next=27;break}return a.abrupt("return");case 27:c({type:"error",payload:a.t0});case 28:case"end":return a.stop()}}),a,null,[[4,23]])})));return function(){return a.apply(this,arguments)}}();return a(),function(){r.current=!0}}}),[t]),s},at=e(8485),it=z.ZP.div(et||(et=(0,P.Z)(["\n\tcolor: #837f7f;\n\tpadding-bottom: 15px;\n\tposition: sticky;\n\ttop: -35px;\n\tleft: 0;\n\tz-index: 15;\n\n\t@media (max-width: 768px) {\n\t\tpadding: 15px 0;\n\t\ttop: -50px;\n\t}\n\n\t& > p {\n\t\twidth: 100%;\n\t\theight: 4px;\n\t\tz-index: 1000;\n\t}\n"])));var ot=function(){var t="loading"===(0,x.HJ)().state;return(0,V.jsxs)(it,{children:[!t&&(0,V.jsx)("p",{}),t&&(0,V.jsx)(at.Z,{color:"inherit"})]})},st=function(){var t=(0,x.UO)().page,n=(0,g.lr)(),e=(0,h.Z)(n,1)[0].get("search")||"Counter",r=rt("https://steam2.p.rapidapi.com/search/".concat(e,"/page/").concat(t),v.Y),a=r.data,i=r.error;if(i){if("No data"===i.message)return(0,V.jsx)(Q,{error:{title:"Something went wrong!",message:"No data found."}});throw(0,m.AV)({},{statusText:i.message})}return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(ot,{}),(0,V.jsx)(K,{apps:a})]})}}}]);
//# sourceMappingURL=639.3c422a44.chunk.js.map