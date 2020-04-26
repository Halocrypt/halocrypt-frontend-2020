(window.webpackJsonp=window.webpackJsonp||[]).push([[747],{747:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(386),n=r(710),a=r(67),o=r(118),i=r(662);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={valid:!0},c=/([^\w]|_)/g;function d(e){return e?u:{error:"Value required"}}const h="Username should be between 3 and 30 characters",p="Username and name can not contain special characters",m="Name should be less than 30 characters and cannot be blank",v="Password should be longer than 5 characters",f="Passwords do not match",g=document.body.style;class b extends i.Z{constructor(...e){var t;super(...e),t=this,l(this,"state",{user:"",email:"",name:"",password:"",conf_pass:"",school:"",ig_user_id:"",currentInputIndex:0}),l(this,"fieldsOrder",["name","user","email","school","ig_user_id","password","conf_pass"]),l(this,"labelTexts",{ig_user_id:"Instagram (Optional)",conf_pass:"Confirm password",user:"Username"}),l(this,"resetError",()=>this.setState({hasError:!1,error:null})),l(this,"_validate_email",d),l(this,"_validate_school",d),l(this,"_validate_ig_user_id",()=>u),l(this,"onSubmit",(async function(e){e.preventDefault();const r=t.state.currentInputIndex,n=t.fieldsOrder[r],a=t["_validate_"+n](t.state[n]);if(a.valid){if(r!==t.fieldsOrder.length-1)return t.setState({currentInputIndex:r+1,hasError:!1,error:null});const{user:e,email:n,name:a,password:i,school:l,ig_user_id:u}=t.state;t.setState({loading:!0});const c=await o.y.createAccount({user:e,email:n,name:a,password:i,school:l,ig_user_id:u});if(c.error)return t.setState({hasError:!0,error:c.error,loading:!1});if(c.id)return(0,s.uX)("/login")}else t.setState({hasError:!0,error:a.error})})),l(this,"_decrementState",()=>{this.setState(e=>({currentInputIndex:e.currentInputIndex-1}))})}componentDidMount(){g.overflow="hidden"}componentWillUnmount(){g.overflow="unset"}componentDidUpdate(){if(store.isLoggedIn)return(0,s.uX)("/profile")}_validate_password(e){return e.length<5?{error:v}:u}_validate_user(e){const t=e.length;return t<3||t>30?{error:h}:e!==e.replace(c,"")?{error:p}:u}_validate_name(e){const t=e.length;return!t||t>30?{error:m}:u}_validate_conf_pass(e){return e!==this.state.password?{error:f}:u}onInput(e){return t=>{let r=t.target.value;"password"!==t&&"conf_pass"!==t&&(r=(r||"").trim()),this.setState({[e]:r||""})}}render(e,t){const r=t.currentInputIndex===this.fieldsOrder.length-1;return(0,s.az)("div",{class:"form-doc",children:[(0,s.az)("div",{class:"form-title heading-text",children:"Register"}),(0,s.az)("div",{class:"form-ext-text heading-text clr",children:"Let's Get You Started"}),t.hasError&&(0,s.az)(x,{close:this.resetError,reason:t.error}),(0,s.az)("div",{class:"form-stx",children:[(0,s.az)("form",{action:"javascript:",onsubmit:this.onSubmit,children:[(0,s.az)(I,{instance:this}),(0,s.az)(_,{state:t,decrement:this._decrementState,isLastInput:r}),t.loading&&(0,s.az)("div",{children:"Hang on, getting you signed up"})]}),(0,s.az)("div",{class:"inst",children:(0,s.az)(s.A,{href:"/login",class:"heading-text clr ",children:"Want to Login Instead?"})})]})]})}}function _(e){const{state:t,decrement:r,isLastInput:n}=e;return(0,s.az)("div",{class:"form-action-controls",children:[0!==t.currentInputIndex&&(0,s.az)("span",{class:"form-act back",onClick:r,"aria-label":"previous step"}),n?(0,s.az)("button",{"aria-label":"Register",style:{marginLeft:"auto"},class:"heading-text submit-button",children:"Register"}):(0,s.az)("button",{class:"form-act fwd","aria-label":"next step"})]})}const w={email:"email",password:"password",conf_pass:"password"};function I(e){const t=e.instance;return t.fieldsOrder.map((e,r)=>r===t.state.currentInputIndex&&(0,s.az)(n.H,{inputClass:"form-anim",value:t.state[e],type:w[e]||"text",labelText:t.labelTexts[e]||e,onInput:t.onInput(e)}))}function x(e){return(0,s.az)(s.HY,{children:[(0,s.az)("div",{class:"mask"}),(0,s.az)(a.O,{errorHead:"Can't register",close:e.close,reasons:[e.reason]})]})}},662:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(386),n=r(804);class a extends s.wA{constructor(...e){var t,r,s;super(...e),s=()=>this.setState({hasNewData:!0}),(r="_globalStoreStateChanged")in(t=this)?Object.defineProperty(t,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[r]=s}componentDidMount(){n.h.subscribe(this._globalStoreStateChanged)}componentWillUnmount(){n.h.unsubscribe(this._globalStoreStateChanged)}}},710:(e,t,r)=>{"use strict";r.d(t,{H:()=>a});var s=r(386);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class a extends s.wA{constructor(...e){super(...e),n(this,"state",{isFocused:!1,value:this.props.value||""}),n(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),n(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),n(this,"onInput",e=>this.setState({value:e.target.value})),n(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({id:e=Math.random(),labelText:t="",type:r="text",inputClass:n},{isFocused:a,moveDown:i}){const l=this.state.value,u=["_animate",a||l?"moveup":"",i?"movedown":""];return(0,s.h)("div",{class:"user-input-anim "+(n||"")},(0,s.h)("label",{class:u,for:e},t),(0,s.h)(o,{onFocus:this.onFocus,onBlur:this.onBlur,type:r,value:l,id:e,onInput:this.__onInput}))}}function o({onFocus:e,onBlur:t,onInput:r,id:n,type:a,value:o}){return(0,s.h)("input",{onFocus:e,onBlur:t,onInput:r,id:n,value:o,type:a,class:"paper-input"})}},67:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});var s=r(386);function n(e){return(0,s.az)("div",{class:"app-popup",children:[(0,s.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,s.az)("div",{children:e.errorHead}),(0,s.az)("div",{class:"err-reasons",children:(0,s.az)("div",{children:e.reasons.map(e=>(0,s.az)("div",{children:[" - ",e]}))})}),(0,s.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}}}]);