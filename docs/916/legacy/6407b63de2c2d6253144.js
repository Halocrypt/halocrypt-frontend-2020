(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{2916:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});r(4916),r(5306);var e=r(3109),a=r.n(e),i=r(5843),o=r.n(i),u=(r(5666),r(1161)),s=r.n(u),c=r(7766),l=r.n(c),d=r(1222),p=r.n(d),v=r(4382),h=r.n(v),f=r(7672),g=r.n(f),S=r(2386),m=r(9710),w=r(9067),x=r(77),b=(r(3735),x.EA.forgotPassword,function(n){return n.replace(w.P,"")}),I=function(n){function t(){for(var t,r,e=arguments.length,i=new Array(e),u=0;u<e;u++)i[u]=arguments[u];return r=n.call.apply(n,l()(t=[this]).call(t,i))||this,g()(p()(r),"state",{user:"",isLoading:!1}),g()(p()(r),"onSubmit",(function(){b(r.state.user);r.setState({isLoading:!0})})),g()(p()(r),"onInput",function(){var n=s()(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.setState({user:o()(e=t.target.value||"").call(e)});case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),r}return h()(t,n),t.prototype.render=function(n,t){return(0,S.az)("div",{children:[(0,S.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,S.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,S.az)("form",{action:"javascript:",onSubmit:this.onSubmit,children:[(0,S.az)("div",{class:"input-parent",children:(0,S.az)(m.H,{onInput:this.onInput,labelText:"Username"})}),(0,S.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),t.isLoading&&"Hang on.. Contacting our servers"]})},t}(S.wA)},9710:function(n,t,r){"use strict";r.d(t,{H:function(){return h}});var e=r(1942),a=r.n(e),i=r(7766),o=r.n(i),u=r(1222),s=r.n(u),c=r(4382),l=r.n(c),d=r(7672),p=r.n(d),v=r(2386),h=function(n){function t(){for(var t,r,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return r=n.call.apply(n,o()(t=[this]).call(t,a))||this,p()(s()(r),"state",{id:Math.random(),isFocused:!1,value:r.props.value||""}),p()(s()(r),"onFocus",(function(){return!r.state.value&&r.setState({isFocused:!0,moveDown:!1})})),p()(s()(r),"onBlur",(function(){return!r.state.value&&r.setState({isFocused:!1,moveDown:!0})})),p()(s()(r),"onInput",(function(n){return r.setState({value:n.target.value})})),p()(s()(r),"__onInput",(function(n){var t=r.props.onInput;r.onInput(n),null!=t&&t(n)})),r}return l()(t,n),t.prototype.render=function(n,t){var r=n.idx,e=n.labelText,a=void 0===e?"":e,i=n.type,o=void 0===i?"text":i,u=n.inputClass,s=n.extraProps,c=t.isFocused,l=t.moveDown,d=r||this.state.id,p=this.state.value,h=["_animate",c||p?"moveup":"",l?"movedown":""];return(0,v.h)("div",{class:"user-input-anim "+(u||"")},(0,v.h)("label",{class:h,for:d},a),(0,v.h)(f,{onFocus:this.onFocus,onBlur:this.onBlur,type:o,value:p,extraProps:s,id:d,onInput:this.__onInput}))},t}(v.wA);function f(n){var t=n.onFocus,r=n.onBlur,e=n.onInput,i=n.id,o=n.type,u=n.value,s=n.extraProps;return(0,v.h)("input",a()({onFocus:t,onBlur:r,onInput:e,id:i,value:u,type:o},s,{class:"paper-input"}))}},9067:function(n,t,r){"use strict";r.d(t,{O:function(){return o},P:function(){return u}});var e=r(2991),a=r.n(e),i=r(2386);function o(n){var t;return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,i.az)("div",{children:n.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:a()(t=n.reasons).call(t,(function(n){return(0,i.az)("div",{children:[" - ",n]})}))})}),(0,i.az)("button",{class:"app-popup-close",onClick:n.close,children:"OK"})]})}var u=/([^\w]|_)/g},5306:function(n,t,r){"use strict";var e=r(7007),a=r(9670),i=r(7908),o=r(7466),u=r(9958),s=r(4488),c=r(1530),l=r(7651),d=Math.max,p=Math.min,v=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,f=/\$([$&'`]|\d\d?)/g;e("replace",2,(function(n,t,r,e){var g=e.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,S=e.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(r,e){var a=s(this),i=null==r?void 0:r[n];return void 0!==i?i.call(r,a,e):t.call(String(a),r,e)},function(n,e){if(!g&&S||"string"==typeof e&&-1===e.indexOf(m)){var i=r(t,n,this,e);if(i.done)return i.value}var s=a(n),v=String(this),h="function"==typeof e;h||(e=String(e));var f=s.global;if(f){var x=s.unicode;s.lastIndex=0}for(var b=[];;){var I=l(s,v);if(null===I)break;if(b.push(I),!f)break;""===String(I[0])&&(s.lastIndex=c(v,o(s.lastIndex),x))}for(var y,z="",E=0,A=0;A<b.length;A++){I=b[A];for(var _=String(I[0]),F=d(p(u(I.index),v.length),0),P=[],$=1;$<I.length;$++)P.push(void 0===(y=I[$])?y:String(y));var k=I.groups;if(h){var B=[_].concat(P,F,v);void 0!==k&&B.push(k);var C=String(e.apply(void 0,B))}else C=w(_,v,F,P,k,e);F>=E&&(z+=v.slice(E,F)+C,E=F+_.length)}return z+v.slice(E)}];function w(n,r,e,a,o,u){var s=e+n.length,c=a.length,l=f;return void 0!==o&&(o=i(o),l=h),t.call(u,l,(function(t,i){var u;switch(i.charAt(0)){case"$":return"$";case"&":return n;case"`":return r.slice(0,e);case"'":return r.slice(s);case"<":u=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>c){var d=v(l/10);return 0===d?t:d<=c?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):t}u=a[l-1]}return void 0===u?"":u}))}}))}}]);