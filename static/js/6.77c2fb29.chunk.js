(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{172:function(e,a,t){e.exports={formBox:"LoginView_formBox__3asOp",title:"LoginView_title__23rAh",button:"LoginView_button__9mDwf"}},198:function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(51),o=t(34),l=t(53),s=t(52),r=t(0),c=t(14),h=t(13),u=t(199),m=t(148),b=t(172),d=t.n(b),p=t(3),f=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,l=new Array(o),s=0;s<o;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,i=t.name,o=t.value;e.setState(Object(n.a)({},i,o))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(p.jsxs)("div",{className:d.a.formBox,children:[Object(p.jsx)("h1",{className:d.a.title,children:"Sign In"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,style:d.a.form,autoComplete:"on",children:[Object(p.jsx)(u.a,{label:"Email",variant:"filled",type:"email",name:"email",value:a,onChange:this.handleChange,margin:"dense",fullWidth:!0}),Object(p.jsx)(u.a,{label:"Password",variant:"filled",type:"password",name:"password",value:t,onChange:this.handleChange,margin:"dense",fullWidth:!0}),Object(p.jsx)(m.a,{className:d.a.button,variant:"contained",color:"primary",type:"submit",size:"large",fullWidth:!0,children:"Sign In"})]})]})}}]),t}(r.Component),g={onLogin:h.a.logIn};a.default=Object(c.b)(null,g)(f)}}]);
//# sourceMappingURL=6.77c2fb29.chunk.js.map