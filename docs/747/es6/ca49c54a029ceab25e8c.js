(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{747:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(386),n=r(710),a=r(67),i=r(118),o=r(508),l=r(804),c=r(264);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const d=l.h.getStore(),h=c.R0;class p extends o.Z{constructor(...e){var t;super(...e),t=this,u(this,"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),u(this,"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),u(this,"labelTexts",{school:"School (Optional)",ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),u(this,"resetError",()=>this.setState({hasError:!1,error:null})),u(this,"_validate_password",c.Bj),u(this,"_validate_user",c.RX),u(this,"_validate_name",c.u2),u(this,"_validate_email",c.sQ),u(this,"_validate_school",c.oS),u(this,"_validate_ig_user_id",c.oS),u(this,"onSubmit",(async function(e){if(t.state.loading)return;e.preventDefault();const r=t.state.currentInputIndex,n=t.fieldsOrder[r],a=t["_validate_"+n](t.state[n]);if(a.valid){if(r!==t.fieldsOrder.length-1)return t.setState({currentInputIndex:r+1,hasError:!1,error:null});const{user:e,email:n,name:a,password:o,school:l,ig_user_id:c}=t.state;t.setState({loading:!0});const u=await i.y.createAccount({user:e,email:n,name:a,password:o,school:l,ig_user_id:c});if(u.error)return t.setState({hasError:!0,error:u.error,loading:!1});if(u.id)return(0,s.uX)("/login")}else t.setState({hasError:!0,error:a.error})})),u(this,"_decrementState",()=>{this.setState(e=>({currentInputIndex:e.currentInputIndex-1}))})}componentDidMount(){super.componentDidMount()}componentDidUpdate(){if(d.isLoggedIn)return(0,s.uX)("/profile");const e=document.getElementById("input___"+this.state.currentInputIndex);e&&e.focus()}_validate_conf_pass(e){return e!==this.state.password?{error:h.pwNomatch}:c.Vy}onInput(e){return t=>{let r=t.target.value;"password"!==t&&"conf_pass"!==t&&(r=(r||"").trim()),this.setState({[e]:r||""})}}render(e,t){const r=t.currentInputIndex===this.fieldsOrder.length-1;return(0,s.az)("div",{class:"form-doc",children:[(0,s.az)("div",{class:"form-title heading-text",children:"Register"}),(0,s.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),t.hasError&&(0,s.az)(f,{close:this.resetError,reason:t.error}),(0,s.az)("div",{class:"form-stx",children:[(0,s.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,s.az)(g,{instance:this}),(0,s.az)(m,{state:t,decrement:this._decrementState,isLastInput:r}),t.loading&&(0,s.az)("div",{children:"Hang on, getting you signed up"})]}),(0,s.az)("div",{class:"inst",children:(0,s.az)(s.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})}),(0,s.az)("div",{class:"social-link-container",children:[(0,s.az)("a",{href:"https://discord.gg/fz8e6Df",class:"heading-text clr hoverable",children:"Discord"}),(0,s.az)("a",{href:"https://twitter.com/halocrypt1",class:"heading-text clr hoverable",children:"Twitter"})]})]})]})}}function m(e){const{state:t,decrement:r,isLastInput:n}=e;return(0,s.az)("div",{class:"form-action-controls",children:[0!==t.currentInputIndex&&(0,s.az)("span",{class:"form-act back",onClick:r,"aria-label":"previous step"}),n?(0,s.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,s.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}const v={email:"email",password:"password",conf_pass:"password"};function g(e){const t=e.instance;return t.fieldsOrder.map((e,r)=>r===t.state.currentInputIndex&&(0,s.az)(n.H,{id:"input___"+r,inputClass:"form-anim",value:t.state[e],type:v[e]||"text",labelText:t.labelTexts[e]||e,onInput:t.onInput(e)}))}function f(e){return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"mask"}),(0,s.az)(a.OK,{errorHead:"Can't register",close:e.close,reasons:[e.reason]})]})}},508:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(386),n=r(804);class a extends s.wA{constructor(...e){var t,r,s;super(...e),s=()=>this.setState({hasNewData:!0}),(r="_globalStoreStateChanged")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s}componentDidMount(){n.h.subscribe(this._globalStoreStateChanged)}componentWillUnmount(){n.h.unsubscribe(this._globalStoreStateChanged)}}},710:(e,t,r)=>{"use strict";r.d(t,{H:()=>a});var s=r(386);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends s.wA{constructor(...e){super(...e),n(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),n(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),n(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),n(this,"onInput",e=>this.setState({value:e.target.value})),n(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({id:e,labelText:t="",type:r="text",inputClass:n,extraProps:a},{isFocused:o,moveDown:l}){const c=e||this.state.id,u=this.state.value,d=["_animate",o||u?"moveup":"",l?"movedown":""];return(0,s.h)("div",{class:"user-input-anim "+(n||"")},(0,s.h)("label",{class:d,for:c},t),(0,s.h)(i,{onFocus:this.onFocus,onBlur:this.onBlur,type:r,value:u,extraProps:a,id:c,onInput:this.__onInput}))}}function i({onFocus:e,onBlur:t,onInput:r,id:n,type:a,value:i,extraProps:o}){return(0,s.h)("input",{onFocus:e,onBlur:t,onInput:r,id:n,value:i,type:a,...o,class:"paper-input"})}},67:(e,t,r)=>{"use strict";r.d(t,{OK:()=>n,Pt:()=>a,GI:()=>i});var s=r(386);function n(e){return(0,s.az)(i,{...Object.assign({},e,{title:"Something Ain't Right"})})}const a=/([^\w]|_)/g;function i(e){return(0,s.az)("div",{class:"app-popup",children:[(0,s.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,s.az)("div",{children:e.errorHead}),(0,s.az)("div",{class:"err-reasons",children:(0,s.az)("div",{children:(e.reasons||[]).map(e=>(0,s.az)("div",{children:[" - ",e]}))})}),(0,s.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}},264:(e,t,r)=>{"use strict";r.d(t,{Vy:()=>n,sQ:()=>i,oS:()=>o,If:()=>l,Bj:()=>c,RX:()=>u,u2:()=>d,R0:()=>h});var s=r(67);const n={valid:!0},a={valid:!1};function i(e){return e?n:{error:"Value required"}}const o=()=>n;function l(e){return(t=+(t=e))==t?n:a;var t}function c(e){return e.length<5?{error:h.pwLength}:n}function u(e){const t=e.length;return t<3||t>30?{error:h.userLength}:e!==e.replace(s.Pt,"")?{error:h.invalidCharacters}:n}function d(e){const t=e.length;return!t||t>30?{error:h.nameLength}:n}const h={userLength:"Username should be between 3 and 30 characters",invalidCharacters:"Username and name can not contain special characters",invalidEmail:"Invalid email",nameLength:"Name should be less than 30 characters and cannot be blank",pwLength:"Password should be longer than 5 characters",pwNomatch:"Passwords do not match"}}}]);