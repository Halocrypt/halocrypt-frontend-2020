(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{916:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>h});var r=e(386),n=e(710),o=e(67),a=e(77),i=e(649);function u(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}const c=a.EA.forgotPassword,d=t=>(t.target.value||"").trim();class h extends r.wA{constructor(...t){var s;super(...t),s=this,u(this,"state",{user:"",isLoading:!1}),u(this,"onSubmit",()=>{if(this.state.isLoading)return;const t=this.state.user.replace(o.Pt,"");this.setState({isLoading:!0,success:!1}),(0,i.V)(c,{user:t}).then(t=>{if(t.error||t.data.error)return this.setState({error});this.setState({success:!0,isLoading:!1})})}),u(this,"onInputUserName",(async function(t){return s.setState({user:d(t)})})),u(this,"onInputPasswordToken",t=>this.setState({passwordToken:d(t)})),u(this,"onInputNewPassword",t=>this.setState({newPassword:d(t)})),u(this,"onInputConfNewPassword",t=>this.setState({confNewPassword:d(t)})),u(this,"onSubmitPasswordToken",()=>{if(this.state.isLoading)return;const t=(this.state.passwordToken||"").trim(),s=this.state.newPassword,e=this.state.confNewPassword,n=[];if(t||n.push("token"),s||n.push("password"),e||n.push("confirm password"),s!==e&&n.push("Passwords must match"),n.length)return this.setState({error:n});this.setState({isLoading:!0}),(0,i.V)(a.EA.checkPasswordToken,{token:t,new_password:s}).then(t=>{const s=t.error||t.data.error;if(s)return this.setState({error:s,isLoading:!1});(0,r.uX)("/login?changed-password=true")})}),u(this,"_resetError",()=>this.setState({error:null}))}render(t,s){return(0,r.az)("div",{children:[s.error&&(0,r.az)(o.OK,{errorHead:"Failed",reasons:Array.isArray(s.error)?s.error:[s.error],close:this._resetError}),(0,r.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,r.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,r.az)("form",{action:"javascript:",onSubmit:s.success?this.onSubmitPasswordToken:this.onSubmit,children:[s.success&&"Check your email for the token",(0,r.az)("div",{class:"input-parent",children:s.success?(0,r.az)("div",{children:[(0,r.az)(n.H,{onInput:this.onInputPasswordToken,labelText:"Token"}),(0,r.az)(n.H,{onInput:this.onInputNewPassword,labelText:"New Password",type:"password"}),(0,r.az)(n.H,{onInput:this.onInputConfNewPassword,labelText:"Confirm",type:"password"})]}):(0,r.az)(n.H,{onInput:this.onInputUserName,labelText:"Username"})}),(0,r.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),s.isLoading&&"Hang on.. Contacting our servers"]})}}},710:(t,s,e)=>{"use strict";e.d(s,{H:()=>o});var r=e(386);function n(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}class o extends r.wA{constructor(...t){super(...t),n(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),n(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),n(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),n(this,"onInput",t=>this.setState({value:t.target.value})),n(this,"__onInput",t=>{const s=this.props.onInput;this.onInput(t),null!=s&&s(t)})}render({id:t,labelText:s="",type:e="text",inputClass:n,extraProps:o},{isFocused:i,moveDown:u}){const c=t||this.state.id,d=this.state.value,h=["_animate",i||d?"moveup":"",u?"movedown":""];return(0,r.h)("div",{class:"user-input-anim "+(n||"")},(0,r.h)("label",{class:h,for:c},s),(0,r.h)(a,{onFocus:this.onFocus,onBlur:this.onBlur,type:e,value:d,extraProps:o,id:c,onInput:this.__onInput}))}}function a({onFocus:t,onBlur:s,onInput:e,id:n,type:o,value:a,extraProps:i}){return(0,r.h)("input",{onFocus:t,onBlur:s,onInput:e,id:n,value:a,type:o,...i,class:"paper-input"})}},67:(t,s,e)=>{"use strict";e.d(s,{OK:()=>n,Pt:()=>o,GI:()=>a});var r=e(386);function n(t){return(0,r.az)(a,{...Object.assign({},t,{title:"Something Ain't Right"})})}const o=/([^\w]|_)/g;function a(t){return(0,r.az)("div",{class:"app-popup",children:[(0,r.az)("div",{class:"heading-text clr app-popup-title",children:t.title}),(0,r.az)("div",{children:t.errorHead}),(0,r.az)("div",{class:"err-reasons",children:(0,r.az)("div",{children:(t.reasons||[]).map(t=>(0,r.az)("div",{children:[" - ",t]}))})}),(0,r.az)("button",{class:"app-popup-close",onClick:t.close,children:"OK"})]})}}}]);