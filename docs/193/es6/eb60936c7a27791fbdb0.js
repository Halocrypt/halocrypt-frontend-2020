(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{193:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>m});var n=i(386),r=i(804),t=(i(776),i(77)),d=i(596),s=i(67),l=i(659);const o=r.h.getStore(),c={},u={id:"Username",current_level:"Level",ig_user_id:"Insta",is_admin:"Player Type"};function h(e){const a=e.data,i=a.secure_data||c,r=o.isLoggedIn&&o.userData.id;return(0,n.az)("div",{children:[(0,n.az)("div",{class:"heading-text bfont",children:"Profile"}),(0,n.az)("div",{class:"prof-data-box",children:["name","id","current_level","is_admin"].concat((0,l.Z)(i)).map(e=>(0,n.az)("div",{class:"prof-container",children:[(0,n.az)("div",{class:"heading-text prof-field",children:u[e]||e}),(0,n.az)("div",{class:"prof-field",children:g(a,i,e)})]}))}),f(a,r)&&(0,n.az)(n.A,{href:"/__admin__",class:"heading-text hoverable landing-action-button",children:"Admin Panel"}),a.id===r&&(0,n.az)(n.A,{href:"/logout",class:"heading-text hoverable landing-action-button",children:"Logout"})]})}async function p(){const e=new URLSearchParams(n.F0.getQs).get("id");let a;return o.isLoggedIn&&e===o.userData.id?a=o.userData:(a=await(0,d.A)(`${t.EA.getUserDetails}?id=${e}`),a=a.data),a?()=>(0,n.az)(h,{data:a}):()=>(0,n.az)(s.O,{errorHead:"Profile Error",reasons:["User does not exist"],close:()=>(0,n.uX)("/")})}function g(e,a,i){let n=i in e?e[i]:a[i];return null==n&&(n="N/A"),"is_admin"===i&&(n=n?"Team Halocrypt":"Player"),n}function f(e,a){return e.is_admin&&e.id===a}const v={id:"Loading..",current_level:"Infinity",has_verified_email:null,name:"??"},m=()=>new URLSearchParams(n.F0.getQs).get("id")?(0,n.az)(n.gr,{componentPromise:p,fallbackComponent:()=>(0,n.az)(h,{data:v})}):o.isLoggedIn?(0,n.uX)("/profile?id="+o.userData.id):(0,n.uX)("/login")},67:(e,a,i)=>{"use strict";i.d(a,{O:()=>r,P:()=>t});var n=i(386);function r(e){return(0,n.az)("div",{class:"app-popup",children:[(0,n.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,n.az)("div",{children:e.errorHead}),(0,n.az)("div",{class:"err-reasons",children:(0,n.az)("div",{children:e.reasons.map(e=>(0,n.az)("div",{children:[" - ",e]}))})}),(0,n.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}const t=/([^\w]|_)/g}}]);