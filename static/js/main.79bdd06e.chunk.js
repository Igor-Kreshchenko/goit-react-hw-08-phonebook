(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"ContactForm_label__2RLiI",input:"ContactForm_input__jKY3j",button:"ContactForm_button__1hUD8"}},20:function(t,e,n){t.exports={section:"Section_section__3ZtTf",title:"Section_title__17yUo"}},22:function(t,e,n){t.exports={Loader:"Loader_Loader__1czZA"}},23:function(t,e,n){t.exports={label:"Filter_label__1KCuv",input:"Filter_input__2MEzR"}},34:function(t,e,n){t.exports={wrapper:"App_wrapper__1ilke"}},36:function(t,e,n){},8:function(t,e,n){t.exports={list:"ContactList_list__mpgma",item:"ContactList_item__-IXdU",name:"ContactList_name__1LfTK",number:"ContactList_number__2XjsQ",button:"ContactList_button__2kizc"}},85:function(t,e,n){"use strict";n.r(e);n(36),n(37);var c=n(0),a=n.n(c),r=n(13),o=n.n(r),u=n(20),i=n.n(u),s=n(1),b=function(t){var e=t.title,n=t.children;return Object(s.jsxs)("section",{className:i.a.section,children:[Object(s.jsx)("h2",{className:i.a.title,children:e}),n]})},l=b;b.defaultProps={title:"New section"};var j=n(11),f=n(2),d=n(15),O=n(16),m=n(18),h=n(17),p=n(7),_=n(12),C=n.n(_),x=n(3),v=Object(x.b)("contacts/fetchContactsRequest"),g=Object(x.b)("contacts/fetchContactsSuccess"),y=Object(x.b)("contacts/fetchContactsError"),N=Object(x.b)("contacts/addContactRequest"),L=Object(x.b)("contacts/addContactSuccess"),k=Object(x.b)("contacts/addContactError"),w=Object(x.b)("contacts/deleteContactRequest"),S=Object(x.b)("contacts/deleteContactSuccess"),A=Object(x.b)("contacts/deleteContactError"),F=Object(x.b)("contacts/filter");C.a.defaults.baseURL="http://localhost:7777";var z,R,q,D=n(10),E=n.n(D),Z=n(14),M=function(t){return t.contacts.items},T=function(t){return t.contacts.loading},U=function(t){return t.contacts.error},I=function(t){return t.contacts.filter},J=Object(Z.a)([M,I],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),K=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(f.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.props.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts")):t.props.onSubmit(Object(j.a)({},t.state)),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(O.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=this.handleSubmit,a=this.handleChange;return Object(s.jsxs)("form",{onSubmit:c,children:[Object(s.jsxs)("label",{className:E.a.label,children:["Name",Object(s.jsx)("input",{className:E.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:a})]}),Object(s.jsxs)("label",{className:E.a.label,children:["Number",Object(s.jsx)("input",{className:E.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:a})]}),Object(s.jsx)("button",{className:E.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),B=Object(p.b)((function(t){return{contacts:M(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(e){e(N()),C.a.post("/contacts",t).then((function(t){var n=t.data;return e(L(n))})).catch((function(t){return e(k(t))}))}}(e))}}}))(K),P=n(8),X=n.n(P),Q=Object(p.b)(null,(function(t){return{onClick:function(e){return t(function(t){return function(e){e(w()),C.a.delete("/contacts/".concat(t)).then((function(){return e(S(t))})).catch((function(t){return e(A(t))}))}}(e))}}}))((function(t){var e=t.id,n=t.name,c=t.number,a=t.onClick;return Object(s.jsxs)("li",{className:X.a.item,children:[Object(s.jsx)("p",{className:X.a.name,children:n}),Object(s.jsx)("p",{className:X.a.number,children:c}),Object(s.jsx)("button",{className:X.a.button,type:"button",onClick:function(){return a(e)},children:"Delete"})]})})),Y=n(33),$=n.n(Y),G=n(22),H=n.n(G),V=(n(84),function(){return Object(s.jsx)("div",{className:H.a.Loader,children:Object(s.jsx)($.a,{style:H.a,type:"ThreeDots",color:"#3f51b5",height:100,width:100})})}),W=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.isLoadingContacts,c=t.error;return Object(s.jsxs)(s.Fragment,{children:[n&&Object(s.jsx)(V,{}),c&&Object(s.jsx)("h2",{children:"404 Not Found"}),Object(s.jsx)("ul",{className:X.a.list,children:e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(s.jsx)(Q,{name:n,number:c,id:e},e)}))})]})}}]),n}(c.Component),tt=Object(p.b)((function(t){return{contacts:J(t),isLoadingContacts:T(t),error:U(t)}}),(function(t){return{fetchContacts:function(){return t((function(t){t(v()),C.a.get("/contacts").then((function(e){var n=e.data;return t(g(n))})).catch((function(e){return t(y(e))}))}))}}}))(W),et=n(23),nt=n.n(et),ct=Object(p.b)((function(t){return{value:I(t)}}),(function(t){return{onChange:function(e){var n=e.target.value;return t(F(n))}}}))((function(t){var e=t.value,n=t.onChange;return Object(s.jsxs)("label",{className:nt.a.label,children:["Find contacts by name",Object(s.jsx)("input",{className:nt.a.input,type:"text",value:e,onChange:n})]})})),at=n(34),rt=n.n(at),ot=function(){return Object(s.jsxs)("div",{className:rt.a.wrapper,children:[Object(s.jsx)(l,{title:"Phonebook",children:Object(s.jsx)(B,{})}),Object(s.jsxs)(l,{title:"Contacts",children:[Object(s.jsx)(ct,{}),Object(s.jsx)(tt,{})]})]})},ut=n(9),it=n(35),st=n(5),bt=Object(x.c)([],(z={},Object(f.a)(z,g,(function(t,e){return e.payload})),Object(f.a)(z,L,(function(t,e){return[e.payload].concat(Object(it.a)(t))})),Object(f.a)(z,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),z)),lt=Object(x.c)("",Object(f.a)({},F,(function(t,e){return e.payload}))),jt=Object(x.c)(!1,(R={},Object(f.a)(R,v,(function(){return!0})),Object(f.a)(R,g,(function(){return!1})),Object(f.a)(R,y,(function(){return!1})),Object(f.a)(R,N,(function(){return!0})),Object(f.a)(R,L,(function(){return!1})),Object(f.a)(R,k,(function(){return!1})),Object(f.a)(R,w,(function(){return!0})),Object(f.a)(R,S,(function(){return!1})),Object(f.a)(R,A,(function(){return!1})),R)),ft=Object(x.c)(null,(q={},Object(f.a)(q,v,(function(){return null})),Object(f.a)(q,y,(function(){return!0})),Object(f.a)(q,N,(function(){return null})),Object(f.a)(q,k,(function(){return!0})),Object(f.a)(q,w,(function(){return null})),Object(f.a)(q,A,(function(){return!0})),q)),dt=Object(st.b)({items:bt,filter:lt,loading:jt,error:ft}),Ot=Object(x.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}}),mt=Object(x.a)({reducer:{contacts:dt},middleware:Ot,devTools:!1});o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(p.a,{store:mt,children:Object(s.jsx)(ot,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.79bdd06e.chunk.js.map