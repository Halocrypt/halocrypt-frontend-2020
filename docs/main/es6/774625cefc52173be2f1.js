(()=>{var e={369:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(466);const o="assign"in r.do?r.do.assign:function(e){for(let t=1;t<arguments.length;t++){const n=arguments[t];for(const t in n)r.Q$.call(n,t)&&(e[t]=n[t])}return e}},466:(e,t,n)=>{"use strict";function r(){if("object"==typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"___this",{get:function(){return this},configurable:!0}),___this.globalThis=___this;const e=___this;return delete Object.prototype.___this,e}n.d(t,{zc:()=>r,e$:()=>a,TW:()=>u,do:()=>l,Q$:()=>c});const o=r(),i=o.Symbol||{},a=(e,t)=>e in t,s={},u=e=>e&&!!e[i.iterator],l=s.constructor,c=s.hasOwnProperty;"undefined"!=typeof window&&(window.navigator&&!!window.navigator.userAgent||window.document&&document.createElement),"undefined"!=typeof self&&!!self.postMessage&&o.importScripts,"function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout},386:(e,t,n)=>{"use strict";function r(e,t,n){if(!(null==e||e instanceof Text||t===n)){for(var r in null==e._listeners&&(e._listeners={}),null==t&&(t=I),null==n&&(n=I),n)r in t||(delete e._listeners[r],e.removeEventListener(r,o));for(var i in t){var a=t[i],s=n[i];s!==a&&(null==s&&e.addEventListener(i,o),e._listeners[i]=a)}}}function o(e){return this._listeners[e.type].call(this,e)}n.d(t,{ZP:()=>de,A:()=>le,gr:()=>re,wA:()=>R,HY:()=>U,F0:()=>ue,Qn:()=>ae,Er:()=>ce,az:()=>V,h:()=>V,uX:()=>se,sY:()=>ee});var i="undefined"!=typeof Promise,a="undefined"!=typeof requestAnimationFrame,s=setTimeout,u=i?Promise.prototype.then.bind(Promise.resolve()):s,l={deferImplementation:u,scheduleRender:a?function(e){return requestAnimationFrame(e)}:u,eagerlyHydrate:!0,beforeHookRender:null},c=[],d=[];function p(){m(c)}function h(){m(d)}function m(e){for(var t;t=e.pop();)g(t)}function f(e){var t=e.name;return"componentDidMount"===t?c.push(e):"componentDidUpdate"===t?d.push(e):void g(e)}function g(e){var t=e.args,n=e.bind,r=e.name;n._lastLifeCycleMethod=r;var o=n[r],a=!!n.componentDidCatch;if(i)Promise.resolve().then(()=>o&&o.apply(n,t)).catch(e=>{if(a)return n.componentDidCatch(e);throw e});else try{o.apply(n,t)}catch(e){if(a)return n.componentDidCatch(e);throw e}}var y={key:1,ref:1,children:1};function v(e){return e in y}function _(e,t,n){n=n||"";var r=e.style;if("string"!=typeof t){var o="string"==typeof n;if(o)r.cssText="";else for(var i in n)i in t||(r[i]="");for(var a in t){var s=t[a];(o||s!==n[a])&&(r[a]=s)}}else r.cssText=t}function b(e,t,n){var r=Array.isArray;r(t)&&(t=t.join(" ").trim()),r(n)&&(n=n.join(" ").trim()),t!==n&&M(e,"className",t)}function S(e,t,n){D(e,t,n,"_renders"),D(e,t,n,"_renderedBy")}var w={_dom:"_FragmentDomNodeChildren",_FragmentDomNodeChildren:"_dom"};function D(e,t,n,r){var o=e;if(o){var i=w[t];return i&&(o[i]=null),o[t]=n,D(o[r],t,n,r)}}function M(e,t,n){return t in e?e[t]=null==n?"":n:null==n?e.removeAttribute(t):e.setAttribute(t,n)}function C(e,t){null!=t&&D(e,"_parentDom",t,"_renderedBy")}function N(e,t){if(null!=e&&e!==I){N(e._renders,t);var n=e._component;t||null==n||(n.setState=U,n._VNode=null,f({name:"componentWillUnmount",bind:n}));var o=e._children;if(o)for(;o.length;)N(o.pop(),t);!function(e,t){var n=e._dom;t||null==n||(!(e.type===E)&&r(n,null,e.events),function(e){P(x,e)}(n),function(e){if(null!=e){var t=e.parentNode;t&&t.removeChild(e)}}(n)),function(e,t){if(!t&&null!=e){var n=e._nextSibDomVNode;if(null!=n){var r=n._dom,o=r&&r.previousSibling;S(n,"_prevSibDomVNode",o&&o._VNode)}var i=e._prevSibDomVNode;if(null!=i){var a=i._dom,s=a&&a.nextSibling;S(i,"_nextSibDomVNode",s&&s._VNode),P(A,e)}}}(e,t)}(e,t)}}var x={_VNode:1,_listeners:1,onclick:1},A={events:1,_FragmentDomNodeChildren:1,_children:1,_component:1,_depth:1,_dom:1,_nextSibDomVNode:1,_prevSibDomVNode:1,_renderedBy:1,_renders:1,_parentDom:1};function P(e,t){if(null!=t)for(var n in e)t[n]=null}var I={},j=[];function k(e,t,n){return function e(t,n,r,o){if(!t)return n;for(var i=0;i<t.length;i++){var a=t[i];Array.isArray(a)?e(a,n,r,o):o&&null==a||n.push(r?r(a):a)}return n}(e,[],t,n)}function L(e){return"o"===e[0]&&"n"===e[1]}var z=I.hasOwnProperty,T="assign"in Object?I.constructor.assign:function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)z.call(n,r)&&(e[r]=n[r])}return e},E=Object.freeze({});function V(e,t){if(null==e||"boolean"==typeof e)return null;null==t&&(t=I);var n,r=t.ref,o=t.key,i="string"==typeof e?{}:null;t=B(t,i);for(var a=arguments.length,s=new Array(a>2?a-2:0),u=2;u<a;u++)s[u-2]=arguments[u];return s.length&&null==t.children&&(n=k(s)),null!=t.children&&(n=k([t.children])),t.children=n,O(e,t,i,o,r)}function O(e,t,n,r,o){var i={type:"string"==typeof e?e.toLowerCase():e,props:t,events:n,key:r,ref:o,_dom:null,_children:null,_component:null,_nextSibDomVNode:null,_renders:null,_renderedBy:null,_prevSibDomVNode:null,_FragmentDomNodeChildren:null,_parentDom:null,_depth:0,__self:null};return i.__self=i,i}var U=function(){},W={key:1,ref:1};function B(e,t){var n={},r=null!=t;for(var o in e)null==W[o]&&(n[o]=e[o],r&&L(o)&&(t[o.substr(2).toLowerCase()]=e[o]));return n}function Q(e){return null==e||"boolean"==typeof e?V(E):"string"==typeof e||"number"==typeof e?O(null,String(e)):Array.isArray(e)?V(U,null,e):null!=e._dom?O(e.type,e.props,e.events,e.key,null):e}function F(e,t,n,r){return function(e,t,n,r,o){for(var i=e.type===U,a=t.length,s=Math.max(a,n.length),u=0;u<s;u++){var l=t[u]||(u<a?V(E):null),c=n[u]||I;if(null==c._nextSibDomVNode){var d=i?e._nextSibDomVNode:null;null!=d&&D(l,"_nextSibDomVNode",d,"_renderedBy")}K(l,c,r,null,o),i&&null!=l&&H(e,l,u)}if(i&&a){var p=e._children;D(e,"_nextSibDomVNode",p[a-1]._nextSibDomVNode,"_renderedBy"),D(e,"_prevSibDomVNode",p[0]._prevSibDomVNode,"_renderedBy")}}(e,e._children||j,(t||I)._children||j,n,r)}function H(e,t,n){var r=t&&(t._dom||t._FragmentDomNodeChildren),o=e._FragmentDomNodeChildren;null==o&&D(e,"_FragmentDomNodeChildren",o=[],"_renderedBy"),o[n]=r}var Z=[];class R{constructor(e){this.state={},this.props=e}render(e,t){return null}setState(e){if(this._oldState=T({},this.state),this._nextState=T({},this.state),"function"==typeof e){var t=e(this._nextState,this.props);if(null==t)return;T(this._nextState,t)}else T(this._nextState,e);var n;this.state=this._nextState,(n=this)._dirty=!0,1===Z.push(n)&&l.scheduleRender(Y)}forceUpdate(e){var t=!1!==e;this.base=K(this._VNode,T({},this._VNode),this._VNode._parentDom,t,{depth:this._depth}),"function"==typeof e&&e(),p(),h()}}function Y(){var e;for(Z.sort((e,t)=>e._depth-t._depth);e=Z.pop();)e._dirty&&(e._dirty=!1,e.forceUpdate(!1))}var $=e=>"function"==typeof e&&e!==U,q={_nextSibDomVNode:1,_prevSibDomVNode:1};function G(e,t){if(t._renders=e,e)for(var n in e._renderedBy=t,q)e[n]=t[n]}function J(e){return this.constructor(e)}function X(e,t,n){var r,o=T({},e.state||I,e._nextState||I),i=null!=(r=t.getDerivedStateFromProps)?T({},r(n.props,o)):null;i&&T(o,i),e._nextState=o}function K(e,t,n,o,i){if("boolean"==typeof e&&(e=null),null==t&&(t=I),null!=e){if(e===I)return null;if(!((a=e)&&a.__self===a||(console.warn("component not of expected type =>",a),0)))return null;var a;if(t===e)return e._dom;!function(e,t){if(t!==I&&null!=e&&null!=t){var n=t._prevSibDomVNode;null==e._prevSibDomVNode&&null!=n&&(S(e,"_prevSibDomVNode",n),S(n,"_nextSibDomVNode",e));var r=t._nextSibDomVNode;null==e._nextSibDomVNode&&null!=r&&(S(e,"_nextSibDomVNode",r),S(r,"_prevSibDomVNode",e))}}(e,t);var s=t.type,u=e.type,l=$(u);u===s&&l&&(e._component=t._component),u!==s&&(N(t),t=I);var c,d=e;if("string"!=typeof e.props&&u!==E&&(e._children=null==(c=e.props.children)?[]:k([c],Q),e=function(e,t,n,r){var o;return null!=e&&$(o=e.type)?(t=t||I,function(e){var t=e.prototype;return!(!t||!t.render)}(o)?function(e,t,n,r){var o,i=e.type,a=e._component;if(null!=a){if(null!=a.shouldComponentUpdate&&!n&&!1===a.shouldComponentUpdate(e.props,a._nextState||a.state))return I;X(a,i,e),f({bind:a,name:"componentWillUpdate",args:[e.props,a._nextState]}),o="componentDidUpdate"}else o="componentDidMount",a=new i(e.props),e._component=a,X(a,i,e),f({bind:a,name:"componentWillMount"}),a._depth=++r.depth;a._VNode=e;var s=a._oldState,u=t.props;a.state=a._nextState,a._oldState=null,a._nextState=null,a.props=e.props;var l=Q(a.render(a.props,a.state));return f({bind:a,name:o,args:"componentDidUpdate"===o?[u,s]:[]}),G(l,e),l}(e,t,n,r):function(e,t){var n,r,o=e.type;return e._component?r=e._component:(r=new R(e.props),e._component=r,r.render=J,r.constructor=o,r.props=e.props),n=Q(r.render(e.props)),r._depth=++t.depth,G(n,e),n}(e,r)):e}(e,t,o,i)),$(t.type)&&(t=t._renders),e!==d)return K(e,t,n,o,i);if(s=t.type,u=e.type,C(e,n),u===U)return F(e,t,n,i);var p=t;return s!==u&&(t=null),function(e,t,n){var o,i=(t=t||I)===I,a=t._dom;(o=e.type!==t.type||null==a?function(e){if("string"==typeof e.props)return document.createTextNode("");var t=e.type;if(t===E)return document.createComment("");var n=document.createElement(t);return n.onclick=U,n}(e):a)._VNode=e,function(e,t,n){if(t.type!==E){if(n=n||I,"string"==typeof t.props)return function(e,t,n){return t===n||(e.nodeValue=t)}(e,t.props,n.props);var o=n.props||I,i=t.props;null!=o&&function(e,t,n){for(var r in t)r in n||M(e,r,null)}(e,o,i),function(e,t,n){for(var r in n)if(!L(r)&&!v(r)){var o=n[r],i=t[r];o!==i&&("className"!==(r="class"===r?"className":r)?"style"!==r?M(e,r,o):_(e,o,i):b(e,o,i))}}(e,o,i),r(e,t.events,n.events)}}(o,e,i?null:t),S(e,"_dom",o),function e(t,n){t&&(null!=t._component?t._component.base=n:e(t._renderedBy,n))}(e,o),i&&function(e,t,n){var r=function(e){if(e){var t=e._dom;if(t)return t;var n=e._FragmentDomNodeChildren;return n?function e(t){for(var n=0;n<t.length;n++){var r=t[n];if(Array.isArray(r)){var o=e(r);if(o)return o}else if(r)return r}}(n):void 0}}(e._nextSibDomVNode),o=e._dom;o&&(function(e,t,n){var r,o=!0;t&&t!==e&&(o=!1,r=t),!o&&r?n.insertBefore(e,r):n.appendChild(e)}(o,r,t),function(e){var t=e._dom;null==e._parentDom&&C(e,t.parentNode);var n=e._nextSibDomVNode;if(null==n){var r=t.nextSibling;null!=r&&(n=r._VNode)}S(n,"_prevSibDomVNode",e),S(e,"_nextSibDomVNode",n);var o=e._prevSibDomVNode;if(null==o){var i=t.previousSibling;null!=i&&(o=i._VNode)}S(o,"_nextSibDomVNode",e),S(e,"_prevSibDomVNode",o)}(e))}(e,n)}(e,t,n),F(e,t,e._dom,i),N(p,!0),e._dom}N(t)}function ee(e,t){var n=V(U,null,e);t.hasChildNodes()&&function(e,t){for(var n;n=e.firstChild;)e.removeChild(n)}(t),K(n,null,t,!1,{depth:0}),p(),h()}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}class re extends R{constructor(e,t){var{componentPromise:n,fallbackComponent:r}=e;super(e,t),this.state={ready:!1,componentPromise:n,finalComponent:null,fallbackComponent:r}}static getDerivedStateFromProps(e,t){var n=t||{};return n.componentPromise===e.componentPromise||null!=e.componentPromise&&(n.componentPromise=e.componentPromise,n.ready=!1,n.finalComponent=null),n}render(e,t){var{eager:n=!0,loadComponent:r=!1}=e,o=ne(e,["eager","loadComponent","componentPromise","fallbackComponent"]),{ready:i,finalComponent:a}=t;if(!n&&!r||i||this.loadComponent(),i)return V(a,o);var s=ne(o,["children"]);return null!=this.state.fallbackComponent?V(this.state.fallbackComponent,s):oe}loadComponent(){return this.state.componentPromise().then(e=>{this.setState({ready:!0,finalComponent:e})})}}var oe=V("div",null,"Loading.."),ie=[],ae={subscribe(e){ie.includes(e)||ie.push(e)},unsubscribe(e){for(var t=0;t<ie.length;t++)if(ie[t]===e)return ie.splice(t,1)},emit(e,t){for(var n of ie)n(e,t)},unsubscribeAll(){ie.length=0}};function se(e){window.history.replaceState(0,0,e),ae.emit(e,{type:"redirect",native:!1})}class ue extends R{static __emitter(){ae.emit(ue.getPath+ue.getQs,{type:"popstate",native:!0})}componentWillMount(){ae.subscribe(this._routeChangeHandler),window.addEventListener("popstate",ue.__emitter)}componentWillUnmount(){window.removeEventListener("popstate",ue.__emitter),this.props.destroySubscriptionOnUnmount&&ae.unsubscribeAll()}absolute(e){return new URL(e||"",location.protocol+"//"+location.host).toString()}getCurrentComponent(){return this.getPathComponent(ue.getPath)||[]}_routeChangeHandler(){var[e,t]=this.getCurrentComponent();this.setState({component:e,match:t})}_notFoundComponent(){return V("div",null,'The Requested URL "'+this.absolute(ue.getPath)+'" was not found')}static get getPath(){return location.pathname}static get getQs(){return location.search}getPathComponent(e){for(var t of this.state.routes){var{regex:n,component:r}=t,o=n.exec(e);if(o)return[r,o]}return[]}initComponents(e){var t=[];for(var n of e)null!=n.props&&null!=n.props.path&&t.push({regex:n.props.path,component:n});return t}constructor(e,t){var{children:n,fallbackComponent:r}=e;super(ne(e,["children","fallbackComponent"]),t),r=r||this._notFoundComponent.bind(this),this.state={routes:this.initComponents(n),fallbackComponent:r};var[o,i]=this.getCurrentComponent();this.state.component=o,this.state.match=i,this._routeChangeHandler=this._routeChangeHandler.bind(this)}componentDidMount(){}render(){var e,t=ne(this.props,["children"]),n=te({match:this.state.match},t);return null!=this.state.component&&null!=this.state.match?T((e=this.state.component).props,n):e=V(this.state.fallbackComponent,n),e.__self||(e=V(e,n)),V(U,null,e)}}function le(e){var{native:t,href:n,onClick:r}=e,o=ne(e,["native","href","onClick"]);return o.href=n,t||null==n||(o.onClick=t=>function(e,t,n){e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),function(e){window.history.pushState(0,0,e),ae.emit(e,{type:"load",native:!1})}(t),null!=n&&n(e,t))}(t,e.href,r)),V("a",o)}function ce(e){return RegExp("^"+e+"(/?)$")}const de=R},446:(e,t,n)=>{"use strict";var r=n(369);function o(e){return new Promise(t=>setTimeout(t,e))}const i={"x-halocrypt-origin":location.origin||document.origin||`${location.protocol}//${location.host}`},a={credentials:"include"};async function s(e,t,n={},s){const u=(0,r.Z)({},t||{},i),l=(0,r.Z)({},a,n),c=new Request(e,{method:s,headers:u,...l}),d=function(e,t=3,n,r){return async function(){let i=0;for(;i<t;)try{return await Promise.resolve(e.apply(r,[].slice.call(arguments)))}catch(e){i++,n&&await o(n)}throw new Error("function "+(e.name||"")+" failed "+t+" times")}}(fetch,3,100),p=await d(c);return await p.json()}function u(e,t,n){const o={body:JSON.stringify(t)},i=(0,r.Z)({},n);return i["content-type"]="application/json",s(e,i,o,"post")}var l=n(804);const c=location.hostname.includes("localhost")?"http://localhost:5000":"https://halocrypt-20.herokuapp.com";function d(e){return new URL(e,c).href}const p={authenticate:d("/api/user/authenticate"),getUserDetails:d("/api/user/get-user-details"),createAccount:d("/api/user/create"),forgotPassword:d("/api/user/forgot-password"),checkPasswordToken:d("/api/user/check-password-token"),verifyEmail:d("/api/user/verify-email"),checkEmailToken:d("/api/user/check-email-token"),checkAuth:d("/api/user/check-auth"),logout:d("/api/logout")};d("/api/play/get-leaderboard"),d("/api/play/get-question"),d("/api/play/answer"),d("/api/admin/create-admin-account"),d("/api/admin/elevate-status"),d("/api/admin/get-users"),d("/api/admin/add-question"),d("/api/admin/get-latest-question-number"),d("/api/admin/edit-question"),d("/api/admin/set-level"),d("/api/admin/delete-user"),d("/api/admin/disqualify"),d("/api/admin/requalify");n.d(t,{y:()=>h});const h=new class{constructor(){var e,t,n;n={checkedAuth:!1},(t="state")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}async auth(e){const t=await u(p.authenticate,e);if(null!=t.error)return t;const n=t.data;return l.h.set("userData",n.user_data),this.state.checkedAuth=!0,n}async checkAuth(){if(this.state.checkedAuth)return l.h.getStore().isLoggedIn;var e,t,n;const r=(await(e=p.checkAuth,s(e,t,n,"get"))).data;return this.state.checkedAuth=!0,!r.error&&(l.h.set("userData",r.user_data),r)}logout(){return l.h.set("userData",null),u(p.logout,{})}async createAccount(e){const t=await u(p.createAccount,e);return null!=t.error?t:t.data}};console.log(h)},961:(e,t,n)=>{"use strict";var r=n(386);function o(e){return(0,r.az)(r.A,{href:"/",class:["hoverable"].concat(e.class||[]),style:{backgroundImage:'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjEuMjMgNDU2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNzk5MzEiIHN0cm9rZS13aWR0aD0iNiI+PHBhdGggZD0iTTE4LjE2IDU3LjMybDg3LjY2LTUzLjM2YTEuMTggMS4xOCAwIDAgMSAxLjc1IDEuMzRMNjYuMTQgMTQ1LjIyYS4xNS4xNSAwIDAgMS0uMjggMEwxNy40MyA2MC4wOGEyLjA3IDIuMDcgMCAwIDEgLjczLTIuNzZ6bTIzOS4zLTMxTDY3LjIyIDE0NC44M2EuNTIuNTIgMCAwIDEtLjc4LS42TDEwNy45MiA0LjVhMi4xMiAyLjEyIDAgMCAxIDIuMzItMS40OWwxNDYuNiAyMC4zM2ExLjYyIDEuNjIgMCAwIDEgLjYzIDIuOTd6Ii8+PHBhdGggZD0iTTE3LjMgNTguMzdMMy4wNCAyODAuNzJhLjQ1LjQ1IDAgMCAwIC44Ni4yMmw2Mi0xMzUuNyIvPjxwYXRoIGQ9Ik00LjkzIDI4My45bDEzNC43IDQ5LjQgMzEuOS0xMDEuMUwzLjk3IDI3OS42Yy0xLjYyIDMuMTguMzUgNC4wNS45NiA0LjN6Ii8+PHBhdGggZD0iTTY2LjQ0IDE0NC4yM2wxMDQuMSA5MC45NCA4Ni0yMDUuNjdhMS4yMiAxLjIyIDAgMCAwLTEuNzctMS41MXpNMy4wNCAyODIuMTdsMTc3LjQzIDE3MC40OGEuNS41IDAgMCAwIC44My0uNTFsLTQwLjQ2LTEyMi42OHoiLz48cGF0aCBkPSJNMTcwLjU0IDIzOC43N2wxMC45MiAyMTMuMTJhLjQ2LjQ2IDAgMCAxLS45LjE2bC0zOC41OC0xMTguNzh6Ii8+PHBhdGggZD0iTTI1Ny45OCAyNmwtNzUuOTQgNDI2LjhhLjI2LjI2IDAgMCAxLS41MSAwbC0xMS0yMTR6Ii8+PC9zdmc+")',height:`${e.size}px`,width:`${e.size}px`,backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"inline-block",margin:"auto"}})}n.d(t,{Z:()=>o})},804:(e,t,n)=>{"use strict";var r=n(466);let o=(0,r.zc)();(0,r.e$)("Map",o);const i=(0,r.e$)("Set",o),a=((0,r.e$)("WeakMap",o)&&(0,r.e$)("WeakSet",o),"__@@set"),s=e=>e!=e,u=(e,t)=>e===t||s(e)&&s(t);let l,c,d;if("undefined"!=typeof Symbol){function p(e,t){const n=e[a];let r=0;const o=n.length;return{[Symbol.iterator]:function(){return this},next:function(){if(r<o){const e=n[r++];return{value:t?[e,e]:e,done:!1}}return{value:void 0,done:!0}}}}l=function(){return p(this,!0)},c=function(){return p(this,!1)},d=function(){return p(this,!1)}}else l=d=c=function(){console.warn("no symbol support")};const h={keys:d,values:c,entries:l};var m=n(369);function f(e,t){if(n=e,!(null!=(r=t)&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r))throw new TypeError("Cannot call a class as a function");var n,r}const g=function e(t,n){if(f(this,e),!n&&i)return new Set(t);this[a]=[],function(e,t){if(null==t)return;if(!(0,r.TW)(t))throw new Error("value:"+String(t)+" is not iterable");const n=t.length;for(let r=0;r<n;r++){const n=t[r];e.add(n)}}(this,t)};!function(e){e.prototype.add=function(e){return this.has(e)||this[a].push((e=>0===e?0:e)(e)),this},e.prototype.has=function(e){const t=this[a],n=t.length;for(let r=0;r<n;r++){const n=t[r];if(u(n,e))return!0}return!1},e.prototype.delete=function(e){let t=!1;return this[a]=this[a].filter(n=>{const r=!u(n,e);return r||(t=!0),r}),t},e.prototype.forEach=function(e,t){const n=this[a],r=n.length;for(let o=0;o<r;o++){const r=n[o],i=this;t?e.call(t,r,r,i):e(r,r,i)}},e.prototype.clear=function(){this[a].length=0},Object.defineProperty(e.prototype,"size",{enumerable:!1,configurable:!0,get:function(){return this[a].length}}),"undefined"!=typeof Symbol&&(e.prototype[Symbol.iterator]=h.values,e.prototype[Symbol.toStringTag]="Set"),(0,m.Z)(e.prototype,h)}(g),g[Symbol.species]=g;const y=g;n.d(t,{h:()=>b});const v={currentTheme:null,userData:null,eventBeginTimeStamp:+new Date+5e3};Object.defineProperty(v,"isLoggedIn",{get:()=>!(!v.userData||!v.userData.secure_data)}),Object.defineProperty(v,"eventBegan",{get:()=>v.eventBeginTimeStamp-+new Date<0,set:e=>e});const _=new y,b={subscribe(e){_.add(e)},set(e,t){console.log("new state ->",e,t),v[e]=t,_.forEach(n=>n(e,t,v))},unsubscribe(e){_.delete(e)},getStore:()=>v}},659:()=>{},536:()=>{},628:()=>{},157:()=>{},994:()=>{},25:()=>{}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>e+"/es6/"+{17:"4d5ce3660e4a8c6cb8be",920:"fedfb25f1752a97d627a"}[e]+".js",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="",(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((n,r)=>{o=e[t]=[n,r]});r.push(o[2]=i);var a,s=n.p+n.u(t),u=document.createElement("script");u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=s;var l=new Error;a=r=>{a=()=>{},u.onerror=u.onload=null,clearTimeout(c);var i=(()=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o))return o[1]})();if(i){var s=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+d+")",l.name="ChunkLoadError",l.type=s,l.request=d,i(l)}};var c=setTimeout(()=>{a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=function(t){for(var r,i,a=t[0],s=t[1],u=t[3],l=0,c=[];l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&c.push(e[i][0]),e[i]=0;for(r in s)n.o(s,r)&&(n.m[r]=s[r]);for(u&&u(n),o&&o(t);c.length;)c.shift()()};var o=r})(),(()=>{"use strict";var e=n(386),t=n(446),r=(n(994),n(536),n(157),n(628),n(659),n(25),n(466));const o="keys"in r.do?r.do.keys:function(e){const t=[];for(const n in e)r.Q$.call(e,n)&&t.push(n);return t},i="entries"in r.do?r.do.entries:function(e){const t=o(e);let n=t.length;const r=Array(n);for(;n--;){const o=t[n];r[n]=[o,e[o]]}return r};function a(){return"Loading.."}const s=e=>e.default,u={"/":()=>n.e(920).then(n.bind(n,920)).then(s),"/register":()=>n.e(17).then(n.bind(n,17)).then(s)},l=function(t){return(0,e.az)("main",{class:["router-app",t.compactLayout?"compact":"free-form"],children:(0,e.az)(e.F0,{children:i(u).map(([n,r])=>(0,e.az)("section",{"data-application-state":n,path:(0,e.Er)(n),children:(0,e.az)(e.gr,{componentPromise:r,compactLayout:t.compactLayout,fallbackComponent:a})}))})})};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=class extends e.wA{constructor(...t){super(...t),c(this,"state",{currentPath:e.F0.getPath}),c(this,"__routeChange",e=>{this.setState({currentPath:e})})}componentDidMount(){e.Qn.subscribe(this.__routeChange)}componentWillUnmount(){e.Qn.unsubscribe(this.__routeChange)}};var p=n(961),h=n(804);const m=h.h.getStore(),f=[{text:"Leaderboard",path:"/leaderboard"},{text:"Rules",path:"/rules"},{text:"Play",path:"/play"},{text:"FAQ",path:"/faq"},{text:"Logout",path:"/logout"}],g=(t,n)=>f.map(({text:r,path:o})=>o===t||"/logout"===o&&!m.isLoggedIn?null:(0,e.az)(e.A,{style:n,href:`${o}`,class:["heading-text","heading-link","hoverable"],children:(0,e.az)("span",{children:r})})),y={instagram:"https://www.instagram.com/halocrypt/",discord:"https://discord.gg/",twitter:"https://twitter.com/halocrypt1",github:"/github-info"},v=t=>["instagram","twitter","discord","github"].map(n=>{const r=y[n],o="/"===r[0],i=o?e.A:"a",a=o?null:"_blank";return(0,e.az)(i,{style:t,target:a,class:`${n} social-logo`,href:r})});const _=v();class b extends d{constructor(...e){var t,n,r;super(...e),r=()=>this.setState({}),(n="__update")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}componentWillUnmount(){super.componentWillUnmount(),h.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),h.h.subscribe(this.__update)}render(t,n){return(0,e.az)("header",{"static-desktop":!0,children:["/"===n.currentPath?(0,e.az)("div",{class:"social-links",children:_}):(0,e.az)(p.Z,{size:"60"}),(0,e.az)("div",{class:"header-links",children:g(n.currentPath)})]})}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const w=v({margin:"auto"}),D=w.length;class M extends d{constructor(...e){super(...e),S(this,"_toggleMenu",()=>this.setState(e=>({enabledMenu:!e.enabledMenu}))),S(this,"__update",()=>this.setState({}))}componentWillUpdate(){const e=document.querySelector("main");e&&(e.style.transform=this.state.enabledMenu?"scale(0.9)":"unset")}componentWillUnmount(){super.componentWillUnmount(),h.h.unsubscribe(this.__update)}componentDidMount(){super.componentDidMount(),h.h.subscribe(this.__update)}render(t,n){return(0,e.az)(e.HY,{children:[(0,e.az)("header",{children:[(0,e.az)("div",{class:"hamburger-menu",onClick:this._toggleMenu}),"/"===n.currentPath?(0,e.az)(p.Z,{size:"60"}):(0,e.az)(e.A,{href:"/",class:"heading-text halocrypt-text",children:"Halocrypt"})]}),n.enabledMenu?(0,e.az)("div",{class:"mask",onClick:this._toggleMenu}):null,(0,e.az)("div",{class:"swipeable-menu-container"+(n.enabledMenu?" expanded":""),children:[(0,e.az)("div",{class:"app-routes-mob",children:g(this.state.currentPath,{marginTop:"5px",marginBottom:"5px"})}),(0,e.az)("div",{class:"social-links-mob",style:{"grid-template-columns":`repeat(${D}, 1fr)`,marginBottom:"5px"},children:w})]})]})}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class N extends e.ZP{constructor(...e){super(...e),C(this,"state",{windowWidth:innerWidth}),C(this,"onWidthChange",()=>{const e=window.innerWidth;this.setState({windowWidth:e})})}componentDidMount(){window.addEventListener("resize",this.onWidthChange)}render(t,n){return n.windowWidth<600?(0,e.az)(M,{}):(0,e.az)(b,{})}}class x extends e.ZP{async __beginFetch(){await t.y.checkAuth()}componentDidMount(){const t=e.F0.getQs;let n;this.__beginFetch(),(n=new URLSearchParams(t).get("__loader"))&&(0,e.uX)(n)}render(t,n){return(0,e.az)(e.HY,{children:[(0,e.az)(N,{}),(0,e.az)(l,{})]})}}(0,e.sY)((0,e.az)(x,{}),document.getElementById("app-mount"))})()})();