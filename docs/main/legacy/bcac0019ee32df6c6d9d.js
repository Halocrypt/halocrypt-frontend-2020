!function(){var t={50530:function(t,n,e){"use strict";var r=e(63109),a=e.n(r),u=(e(35666),e(51161)),i=e.n(u),o=e(94435),c=e.n(o),s=e(94382),l=e.n(s),f=e(12386),h=e(48118),d=e(4776),p=e(77766),g=e.n(p),m=e(5824),y=e.n(m),b=e(87672),M=e.n(b),v=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"state",{currentPath:f.F0.getPath}),M()(y()(e),"__routeChange",(function(t){e.setState({currentPath:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){f.Qn.subscribe(this.__routeChange)},e.componentWillUnmount=function(){f.Qn.unsubscribe(this.__routeChange)},n}(f.wA),w=e(86209),A=(e(74916),e(23123),e(86902)),I=e.n(A),x=e(51942),z=e.n(x),D=e(2991),L=e.n(D),j=e(74383),k=j.h.getStore(),T=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"Profile",path:"/profile"}],C=function(t,n){return L()(T).call(T,(function(e){var r=e.text,a=e.path;return a===t.split("?")[0]||"/profile"===a&&!k.isLoggedIn?null:(0,f.az)(f.A,{style:z()({fontWeight:"normal"},n),href:a,class:["heading-text","heading-link","hoverable"],children:(0,f.az)("span",{children:r})})}))},N={instagram:{href:"https://www.instagram.com/halocrypt/",label:"Halocrpt Instagram"},discord:{href:"https://discord.gg/fz8e6Df",label:"Halocrypt Discord"},github:{href:"/github-info",label:"Halocrypt Github"},twitter:{href:"https://twitter.com/halocrypt1",label:"Halocrypt Twitter"}},S=function(t){var n;return L()(n=I()(N)).call(n,(function(n){var e=N[n],r="/"===e.href[0],a=r?f.A:"a",u=r?null:"_blank";return(0,f.az)(a,{rel:"noreferrer",style:t,target:u,class:n+" social-logo",href:e.href,"aria-label":e.label})}))},E=S(),_=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),j.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),j.h.subscribe(this.__update)},e.render=function(t,n){return(0,f.az)("header",{"static-desktop":!0,children:["/"===n.currentPath?(0,f.az)("div",{class:"social-links",children:E}):(0,f.az)(w.Z,{size:"5rem"}),(0,f.az)("div",{class:"header-links",children:C(n.currentPath)})]})},n}(v),P=S({margin:"auto"}),O=P.length,W=document.querySelector("main"),Z=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"_toggleMenu",(function(){return e.setState((function(t){return{enabledMenu:!t.enabledMenu}}))})),M()(y()(e),"__update",(function(){return e.setState({})})),e}l()(n,t);var e=n.prototype;return e.componentWillUpdate=function(){(W=W||document.querySelector("main"))&&(W.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")},e.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),j.h.unsubscribe(this.__update)},e.componentDidMount=function(){t.prototype.componentDidMount.call(this),j.h.subscribe(this.__update)},e.render=function(t,n){return(0,f.az)(f.HY,{children:[(0,f.az)("header",{children:[(0,f.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===n.currentPath?(0,f.az)(w.Z,{size:"60"}):(0,f.az)(f.A,{href:"/",class:"heading-text halocrypt-text c_u",children:"Halocrypt"})]}),n.enabledMenu?(0,f.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,f.az)("div",{class:"swipeable-menu-container"+(n.enabledMenu?" expanded":""),children:[(0,f.az)("div",{class:"app-routes-mob",children:C(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,f.az)("div",{class:"social-links-mob",style:{"grid-template-columns":"repeat("+O+", 1fr)",marginBottom:"5px"},children:P})]})]})},n}(v),Q=function(t){function n(){for(var n,e,r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return e=t.call.apply(t,g()(n=[this]).call(n,a))||this,M()(y()(e),"state",{windowWidth:innerWidth}),M()(y()(e),"onWidthChange",(function(){var t=window.innerWidth;e.setState({windowWidth:t})})),e}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.onWidthChange)},e.render=function(t,n){return n.windowWidth<600?(0,f.az)(Z,{}):(0,f.az)(_,{})},n}(f.ZP),H=(e(41539),e(88674),e(93476)),U=e.n(H),Y=e(71212),B=function(t){return t.default},q={"/":function(){return e.e(350).then(e.bind(e,14350)).then(B)},"/register":function(){return Promise.all([e.e(933),e.e(747)]).then(e.bind(e,2747)).then(B)},"/login":function(){return Promise.all([e.e(933),e.e(894)]).then(e.bind(e,21894)).then(B)},"/profile":function(){return Promise.all([e.e(933),e.e(193)]).then(e.bind(e,75193)).then(B)},"/logout":function(){return U().resolve((function(){return h.y.logout().then((0,f.uX)("/")),"Logging you out"}))},"/leaderboard":function(){return e.e(748).then(e.bind(e,92748)).then(B)},"/play":function(){return Promise.all([e.e(933),e.e(564)]).then(e.bind(e,61564)).then(B)},"/rules":function(){return e.e(396).then(e.bind(e,53396)).then(B)},"/__admin__":function(){return e.e(669).then(e.bind(e,18669)).then(B)}},G=function(t){var n;return(0,f.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,f.az)("div",{class:"router-parent",children:(0,f.az)(f.F0,{children:[L()(n=(0,Y.Z)(q)).call(n,(function(t){return function(t,n){return(0,f.az)((function(e){return(0,f.az)("section",{"data-application-state":t,children:(0,f.az)(f.gr,{componentPromise:n,compactLayout:e.compactLayout,fallbackComponent:d.Tj})})}),{path:(0,f.Er)(t)})}(t[0],t[1])})),"}"]})})})},R=(e(50994),e(45536),e(99157),e(48628),e(20391),e(67981),e(47315),e(86221),e(2411),e(23659),e(59025),j.h.getStore()),F=function(t){function n(){return t.apply(this,arguments)||this}l()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t,n=f.F0.getQs;(t=new(c())(n).get("__loader"))&&(0,f.uX)(t)},e.render=function(t,n){return(0,f.az)(f.HY,{children:[(0,f.az)(Q,{}),(0,f.az)(G,{})]})},n}(f.wA);function J(){return V.apply(this,arguments)}function V(){return(V=i()(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=F,!R.isLoggedIn){t.next=3;break}return t.abrupt("return",n);case 3:return t.prev=3,t.next=6,h.y.checkAuth();case 6:t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(3),t.abrupt("return",d.S2);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t,null,[[3,8]])})))).apply(this,arguments)}(0,f.sY)((0,f.az)((function(){return(0,f.az)(f.gr,{componentPromise:J,fallbackComponent:d.uW})}),{}),document.getElementById("app-mount"))},80077:function(t,n,e){"use strict";e.d(n,{mH:function(){return o},EA:function(){return l},hY:function(){return f},PW:function(){return h}});var r,a=e(39969),u=e.n(a),i=e(78580),o=e.n(i)()(r=location.hostname).call(r,"localhost"),c=o?"http://localhost:5000":"https://halocrypt-20.herokuapp.com";function s(t){return new(u())(t,c).href}var l={authenticate:s("/api/user/authenticate"),getUserDetails:s("/api/user/get-user-details"),createAccount:s("/api/user/create"),forgotPassword:s("/api/user/forgot-password"),checkPasswordToken:s("/api/user/check-password-token"),verifyEmail:s("/api/user/verify-email"),checkEmailToken:s("/api/user/check-email-token"),checkAuth:s("/api/user/check-auth"),logout:s("/api/logout")},f={getLeaderboard:s("/api/play/get-leaderboard"),getQuestion:s("/api/play/get-question"),answerQuestion:s("/api/play/answer")},h=(s("/api/admin/create-admin-account"),s("/api/admin/elevate-status"),s("/api/admin/get-users"),s("/api/admin/add-question"),s("/api/admin/get-latest-question-number"),s("/api/admin/edit-question"),s("/api/admin/set-level"),s("/api/admin/delete-user"),s("/api/admin/disqualify"),s("/api/admin/requalify"),{addLog:s("/api/ginggol/1"),getLogs:s("/api/ginggol/get")})},48118:function(t,n,e){"use strict";e.d(n,{y:function(){return h}});var r=e(63109),a=e.n(r),u=(e(35666),e(51161)),i=e.n(u),o=e(87672),c=e.n(o),s=e(73735),l=e(74383),f=e(80077),h=new(function(){function t(){c()(this,"state",{checkedAuth:!1})}var n=t.prototype;return n.auth=function(){var t=i()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(f.EA.authenticate,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,l.h.set("userData",r.user_data),this.state.checkedAuth=!0,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),n.checkAuth=function(){var t=i()(a().mark((function t(){var n,e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.h.getStore().isLoggedIn,!this.state.checkedAuth&&!n){t.next=4;break}return this.state.checkedAuth=!0,t.abrupt("return",n);case 4:return this.state.checkedAuth=!0,t.next=7,(0,s.A)(f.EA.checkAuth);case 7:if(e=t.sent,(r=e.data).error){t.next=12;break}return l.h.set("userData",r.user_data),t.abrupt("return",r);case 12:return t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.logout=function(){return l.h.set("userData",null),(0,s.V)(f.EA.logout,{})},n.createAccount=function(){var t=i()(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.V)(f.EA.createAccount,n);case 2:if(null==(e=t.sent).error){t.next=5;break}return t.abrupt("return",e);case 5:return r=e.data,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),t}());console.log(h)},86209:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(77766),a=e.n(r),u=e(12386),i=e(34536);function o(t){var n,e=c(t.size);return(0,u.az)(u.A,{href:"/",class:a()(n=["hoverable"]).call(n,t.class||[]),"aria-label":"home page",style:{backgroundImage:'url("'+i.Z+'")',height:e,width:e,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}var c=function(t){return/\d$/.test(t)?t+"px":t}},4776:function(t,n,e){"use strict";e.d(n,{Tj:function(){return u},uW:function(){return i},S2:function(){return o}});var r=e(12386),a={margin:"auto",textAlign:"center",position:"absolute",top:0,bottom:0,left:0,right:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center"};function u(){return"Loading.."}function i(){return(0,r.az)("div",{style:a,children:"Checking your credentials.."})}function o(){return(0,r.az)("div",{style:a,children:"An Unexpected Error Occured"})}},74383:function(t,n,e){"use strict";e.d(n,{h:function(){return l}});var r=e(78914),a=e.n(r),u=e(63978),i=e.n(u),o=e(88945),c={currentTheme:null,userData:null,eventBeginTimeStamp:15882714e5};i()(c,"isLoggedIn",{get:function(){return!(!c.userData||!c.userData.secure_data)}}),i()(c,"eventBegan",{get:function(){return c.eventBeginTimeStamp-+new Date<0},set:function(t){return t}});var s=new o.Z,l={subscribe:function(t){s.add(t)},set:function(t,n){c[t]=n,console.log("new state ->",t,n),a()(s).call(s,(function(e){return e(t,n,c)}))},unsubscribe:function(t){s.delete(t)},getStore:function(){return c}}},73735:function(t,n,e){"use strict";e.d(n,{A:function(){return y},V:function(){return b}});e(41539),e(88674);var r=e(63109),a=e.n(r),u=e(51942),i=e.n(u),o=(e(35666),e(59340)),c=e.n(o),s=e(51161),l=e.n(s),f=e(59369),h=e(4499),d={"x-halocrypt-origin":location.origin||document.origin||location.protocol+"//"+location.host},p={credentials:"include"};function g(t,n,e,r){return m.apply(this,arguments)}function m(){return(m=l()(a().mark((function t(n,e,r,u){var o,c,s,l,g;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===r&&(r={}),o=(0,f.Z)({},e||{},d),c=(0,f.Z)({},p,r),s=new Request(n,i()({method:u,headers:o},c)),l=(0,h.Z)(fetch,3,100),t.next=7,l(s);case 7:return g=t.sent,t.next=10,g.json();case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n,e){return g(t,n,e,"get")}function b(t,n,e){var r={body:c()(n)},a=(0,f.Z)({},e);return a["content-type"]="application/json",g(t,a,r,"post")}},23659:function(){},45536:function(){},48628:function(){},67981:function(){},99157:function(){},47315:function(){},20391:function(){},2411:function(){},86221:function(){},50994:function(){},59025:function(){},34536:function(t,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGRjVFMDAiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+"}},n={};function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}};return t[r](a,a.exports,e),a.exports}e.m=t,e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,r){return e.f[r](t,n),n}),[]))},e.u=function(t){return t+"/legacy/"+{193:"e0aed27dc9fb8103e8ac",350:"15a821fcb09ca4281975",396:"f9d70ac28495b1847fbf",564:"6182504f6a7f2f5f6386",669:"24c009f65222730bdb60",747:"6e8f502d90b4b6d23060",748:"db5ef43500972d72d61f",894:"3b7923f0cbf78cc580c6",933:"f12e364aeed052b25b1b"}[t]+".js"},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.p="",function(){var t={179:0},n=[[50530,394]];e.f.j=function(n,r){var a=e.o(t,n)?t[n]:void 0;if(0!==a)if(a)r.push(a[2]);else{var u=new Promise((function(e,r){a=t[n]=[e,r]}));r.push(a[2]=u);var i,o=e.p+e.u(n),c=document.createElement("script");c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.src=o;var s=new Error;i=function(r){i=function(){},c.onerror=c.onload=null,clearTimeout(l);var u=function(){if(e.o(t,n)&&(0!==(a=t[n])&&(t[n]=void 0),a))return a[1]}();if(u){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+f+")",s.name="ChunkLoadError",s.type=o,s.request=f,u(s)}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}};var r=function(){};function a(){for(var r,a=0;a<n.length;a++){for(var u=n[a],i=!0,o=1;o<u.length;o++){var c=u[o];0!==t[c]&&(i=!1)}i&&(n.splice(a--,1),r=e(e.s=u[0]))}return 0===n.length&&(e.x(),e.x=function(){}),r}function u(a){for(var u,i,o=a[0],s=a[1],l=a[2],f=a[3],h=0,d=[];h<o.length;h++)i=o[h],e.o(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(u in s)e.o(s,u)&&(e.m[u]=s[u]);for(f&&f(e),c&&c(a);d.length;)d.shift()();return l&&n.push.apply(n,l),r()}e.x=function(){e.x=function(){},i=i.slice();for(var t=0;t<i.length;t++)u(i[t]);return(r=a)()};var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=u;var c=o}(),e.x()}();