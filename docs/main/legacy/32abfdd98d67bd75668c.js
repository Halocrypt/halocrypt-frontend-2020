!function(){var t={530:function(t,n,e){"use strict";var r=e(3109),a=e.n(r),u=(e(5666),e(1161)),i=e.n(u),o=e(4435),c=e.n(o),s=e(4382),l=e.n(s),h=e(2386),p=e(8118),d=e(4776),f=e(7766),g=e.n(f),m=e(1222),y=e.n(m),b=e(7672),M=e.n(b),v=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"state",{currentPath:h.F0.getPath}),M()(y()(e),"__routeChange",(function(t){e.setState({currentPath:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){h.Qn.subscribe(this.__routeChange)},e.componentWillUnmount=function(){h.Qn.unsubscribe(this.__routeChange)},n}(h.wA),w=e(6209),A=(e(4916),e(3123),e(2991)),I=e.n(A),x=e(4383),z=x.h.getStore(),D=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"Profile",path:"/profile"}],L=function(t,n){return I()(D).call(D,(function(e){var r=e.text,a=e.path;return a===t.split("?")[0]||"/profile"===a&&!z.isLoggedIn?null:(0,h.az)(h.A,{style:n,href:a,class:["heading-text","heading-link","hoverable"],children:(0,h.az)("span",{children:r})})}))},j={instagram:{href:"https://www.instagram.com/halocrypt/",label:"Halocrpt Instagram"},discord:{href:"https://discord.gg/",label:"Halocrypt Discord"},twitter:{href:"https://twitter.com/halocrypt1",label:"Halocrypt Twitter"},github:{href:"/github-info",label:"Halocrypt Github"}},k=function(t){var n;return I()(n=["instagram","twitter","discord","github"]).call(n,(function(n){var e=j[n],r="/"===e.href[0],a=r?h.A:"a",u=r?null:"_blank";return(0,h.az)(a,{rel:"noreferrer",style:t,target:u,class:n+" social-logo",href:e.href,"aria-label":e.label})}))},T=k(),C=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),x.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),x.h.subscribe(this.__update)},e.render=function(t,n){return(0,h.az)("header",{"static-desktop":!0,children:["/"===n.currentPath?(0,h.az)("div",{class:"social-links",children:T}):(0,h.az)(w.Z,{size:"60"}),(0,h.az)("div",{class:"header-links",children:L(n.currentPath)})]})},n}(v),N=k({margin:"auto"}),S=N.length,E=document.querySelector("main"),_=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"_toggleMenu",(function(){return e.setState((function(t){return{enabledMenu:!t.enabledMenu}}))})),M()(y()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUpdate=function(){(E=E||document.querySelector("main"))&&(E.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")},e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),x.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),x.h.subscribe(this.__update)},e.render=function(t,n){return(0,h.az)(h.HY,{children:[(0,h.az)("header",{children:[(0,h.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===n.currentPath?(0,h.az)(w.Z,{size:"60"}):(0,h.az)(h.A,{href:"/",class:"heading-text halocrypt-text",children:"Halocrypt"})]}),n.enabledMenu?(0,h.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,h.az)("div",{class:"swipeable-menu-container"+(n.enabledMenu?" expanded":""),children:[(0,h.az)("div",{class:"app-routes-mob",children:L(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,h.az)("div",{class:"social-links-mob",style:{"grid-template-columns":"repeat("+S+", 1fr)",marginBottom:"5px"},children:N})]})]})},n}(v),P=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"state",{windowWidth:innerWidth}),M()(y()(e),"onWidthChange",(function(){var t=window.innerWidth;e.setState({windowWidth:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.onWidthChange)},e.render=function(t,n){return n.windowWidth<600?(0,h.az)(_,{}):(0,h.az)(C,{})},n}(h.ZP),O=(e(1539),e(8674),e(875)),Z=e.n(O),Q=e(1212),W=function(t){return t.default},U={"/":function(){return e.e(350).then(e.bind(e,4350)).then(W)},"/register":function(){return e.e(747).then(e.bind(e,2747)).then(W)},"/login":function(){return e.e(894).then(e.bind(e,1894)).then(W)},"/profile":function(){return e.e(193).then(e.bind(e,5193)).then(W)},"/logout":function(){return Z().resolve((function(){return p.y.logout().then((0,h.uX)("/")),"Logging you out"}))},"/leaderboard":function(){return e.e(748).then(e.bind(e,1968)).then(W)},"/play":function(){return e.e(564).then(e.bind(e,1564)).then(W)}},H=function(t){var n;return(0,h.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,h.az)("div",{class:"router-parent",children:(0,h.az)(h.F0,{children:[I()(n=(0,Q.Z)(U)).call(n,(function(t){return function(t,n){return(0,h.az)((function(e){return(0,h.az)("section",{"data-application-state":t,children:(0,h.az)(h.gr,{componentPromise:n,compactLayout:e.compactLayout,fallbackComponent:d.Tj})})}),{path:(0,h.Er)(t)})}(t[0],t[1])})),"}"]})})})},Y=(e(994),e(5536),e(9157),e(8628),e(391),e(7981),e(7315),e(8665),e(9025),x.h.getStore()),B=function(t){function n(){return t.apply(this,arguments)||this}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t,n=h.F0.getQs;(t=new(c())(n).get("__loader"))&&(0,h.uX)(t)},e.render=function(t,n){return(0,h.az)(h.HY,{children:[(0,h.az)(P,{}),(0,h.az)(H,{})]})},n}(h.wA);function q(){return G.apply(this,arguments)}function G(){return(G=i()(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=B,!Y.isLoggedIn){t.next=3;break}return t.abrupt("return",n);case 3:return t.prev=3,t.next=6,p.y.checkAuth();case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(3),t.abrupt("return",d.S2);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}(0,h.sY)((0,h.az)((function(){return(0,h.az)(h.gr,{componentPromise:q,fallbackComponent:d.uW})}),{}),document.getElementById("app-mount"))},77:function(t,n,e){"use strict";e.d(n,{EA:function(){return s},hY:function(){return l}});var r,a=e(9969),u=e.n(a),i=e(8580),o=e.n(i)()(r=location.hostname).call(r,"localhost")?"http://localhost:5000":"https://halocrypt-20.herokuapp.com";function c(t){return new(u())(t,o).href}var s={authenticate:c("/api/user/authenticate"),getUserDetails:c("/api/user/get-user-details"),createAccount:c("/api/user/create"),forgotPassword:c("/api/user/forgot-password"),checkPasswordToken:c("/api/user/check-password-token"),verifyEmail:c("/api/user/verify-email"),checkEmailToken:c("/api/user/check-email-token"),checkAuth:c("/api/user/check-auth"),logout:c("/api/logout")},l={getLeaderboard:c("/api/play/get-leaderboard"),getQuestion:c("/api/play/get-question"),answerQuestion:c("/api/play/answer")};c("/api/admin/create-admin-account"),c("/api/admin/elevate-status"),c("/api/admin/get-users"),c("/api/admin/add-question"),c("/api/admin/get-latest-question-number"),c("/api/admin/edit-question"),c("/api/admin/set-level"),c("/api/admin/delete-user"),c("/api/admin/disqualify"),c("/api/admin/requalify")},8118:function(t,n,e){"use strict";e.d(n,{y:function(){return p}});var r=e(3109),a=e.n(r),u=(e(5666),e(1161)),i=e.n(u),o=e(7672),c=e.n(o),s=e(3735),l=e(4383),h=e(77),p=new(function(){function t(){c()(this,"state",{checkedAuth:!1})}var n=t.prototype;return n.auth=function(){var t=i()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(h.EA.authenticate,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,l.h.set("userData",r.user_data),this.state.checkedAuth=!0,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),n.checkAuth=function(){var t=i()(a().mark((function t(){var n,e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.h.getStore().isLoggedIn,!this.state.checkedAuth&&!n){t.next=4;break}return this.state.checkedAuth=!0,t.abrupt("return",n);case 4:return this.state.checkedAuth=!0,t.next=7,(0,s.A)(h.EA.checkAuth);case 7:if(e=t.sent,(r=e.data).error){t.next=12;break}return l.h.set("userData",r.user_data),t.abrupt("return",r);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.logout=function(){return l.h.set("userData",null),(0,s.V)(h.EA.logout,{})},n.createAccount=function(){var t=i()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(h.EA.createAccount,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),t}());console.log(p)},6209:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(7766),a=e.n(r),u=e(2386),i=e(4536);function o(t){var n;return(0,u.az)(u.A,{href:"/",class:a()(n=["hoverable"]).call(n,t.class||[]),style:{backgroundImage:'url("'+i.Z+'")',height:t.size+"px",width:t.size+"px",backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto","aria-label":"home page"}})}},4776:function(t,n,e){"use strict";e.d(n,{Tj:function(){return u},uW:function(){return i},S2:function(){return o}});var r=e(2386),a={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};function u(){return"Loading.."}function i(){return(0,r.az)("div",{style:a,children:"Checking your credentials.."})}function o(){return(0,r.az)("div",{style:a,children:"An Unexpected Error Occured"})}},4383:function(t,n,e){"use strict";e.d(n,{h:function(){return l}});var r=e(8914),a=e.n(r),u=e(3978),i=e.n(u),o=e(8945),c={currentTheme:null,userData:null,eventBeginTimeStamp:15882714e5};i()(c,"isLoggedIn",{get:function(){return!(!c.userData||!c.userData.secure_data)}}),i()(c,"eventBegan",{get:function(){return c.eventBeginTimeStamp-+new Date<0},set:function(t){return t}});var s=new o.Z,l={subscribe:function(t){s.add(t)},set:function(t,n){c[t]=n,console.log("new state ->",t,n),a()(s).call(s,(function(e){return e(t,n,c)}))},unsubscribe:function(t){s.delete(t)},getStore:function(){return c}}},3735:function(t,n,e){"use strict";e.d(n,{A:function(){return y},V:function(){return b}});e(1539),e(8674);var r=e(3109),a=e.n(r),u=e(1942),i=e.n(u),o=(e(5666),e(9340)),c=e.n(o),s=e(1161),l=e.n(s),h=e(9369),p=e(4499),d={"x-halocrypt-origin":location.origin||document.origin||location.protocol+"//"+location.host},f={credentials:"include"};function g(t,n,e,r){return m.apply(this,arguments)}function m(){return(m=l()(a().mark((function t(n,e,r,u){var o,c,s,l,g;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r={}),o=(0,h.Z)({},e||{},d),c=(0,h.Z)({},f,r),s=new Request(n,i()({method:u,headers:o},c)),l=(0,p.Z)(fetch,3,100),t.next=7,l(s);case 7:return g=t.sent,t.next=10,g.json();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n,e){return g(t,n,e,"get")}function b(t,n,e){var r={body:c()(n)},a=(0,h.Z)({},e);return a["content-type"]="application/json",g(t,a,r,"post")}},8665:function(){},5536:function(){},8628:function(){},7981:function(){},9157:function(){},7315:function(){},391:function(){},994:function(){},9025:function(){},4536:function(t,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjVFMDAiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+"}},n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))},e.u=function(t){return t+"/legacy/"+{193:"89b39b7a289ca93223ba",350:"0961b7ad3493e430c384",564:"0a565a2492e414048fd6",747:"d9472518367c57079385",748:"b23c4ccfafcd29442de6",894:"0a07275212b6f33f9544"}[t]+".js"},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.p="",function(){var t={179:0},n=[[530,394]];e.f.j=function(n,r){var a=e.o(t,n)?t[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var u=new Promise((function(e,r){a=t[n]=[e,r]}));r.push(a[2]=u);var i,o=e.p+e.u(n),c=document.createElement("script");c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.src=o;var s=new Error;i=function(r){i=function(){},c.onerror=c.onload=null,clearTimeout(l);var u=function(){if(e.o(t,n)&&(0!==(a=t[n])&&(t[n]=void 0),a))return a[1]}();if(u){var o=r&&("load"===r.type?"missing":r.type),h=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+h+")",s.name="ChunkLoadError",s.type=o,s.request=h,u(s)}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}};var r=function(){};function a(){for(var r,a=0;a<n.length;a++){for(var u=n[a],i=!0,o=1;o<u.length;o++){var c=u[o];0!==t[c]&&(i=!1)}i&&(n.splice(a--,1),r=e(e.s=u[0]))}return 0===n.length&&(e.x(),e.x=function(){}),r}function u(a){for(var u,i,o=a[0],s=a[1],l=a[2],h=a[3],p=0,d=[];p<o.length;p++)i=o[p],e.o(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(u in s)e.o(s,u)&&(e.m[u]=s[u]);for(h&&h(e),c&&c(a);d.length;)d.shift()();return l&&n.push.apply(n,l),r()}e.x=function(){e.x=function(){},i=i.slice();for(var t=0;t<i.length;t++)u(i[t]);return(r=a)()};var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=u;var c=o}(),e.x()}();