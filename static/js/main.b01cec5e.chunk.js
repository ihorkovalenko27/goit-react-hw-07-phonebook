(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={contacts:"ContactList_contacts__1KGWS",filter:"ContactList_filter__39y_U",btn:"ContactList_btn__1F4IF"}},29:function(t,e,n){t.exports={form:"ContactForm_form__2Dyg6"}},30:function(t,e,n){t.exports={input:"Filter_input__2bst2"}},60:function(t,e,n){"use strict";n.r(e);var c,r,a,u=n(0),s=n.n(u),o=n(13),i=n.n(o),b=n(7),j=n(2),l=n(3),f=n(31),p=n(6),O=Object(j.b)("contacts/fetchContactsRequest"),d=Object(j.b)("contacts/fetchContactsSuccess"),h=Object(j.b)("contacts/fetchContactsError"),x=Object(j.b)("contacts/addContactsRequest"),m=Object(j.b)("contacts/addContactsSuccess"),v=Object(j.b)("contacts/addContactsError"),C=Object(j.b)("contacts/deleteContactsRequest"),y=Object(j.b)("contacts/deleteContactsSuccess"),w=Object(j.b)("contacts/deleteContactsError"),k=Object(j.b)("contacts/filterContacts"),_=Object(j.c)([],(c={},Object(l.a)(c,d,(function(t,e){return e.payload})),Object(l.a)(c,m,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(l.a)(c,y,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(j.c)(!1,(r={},Object(l.a)(r,O,(function(){return!0})),Object(l.a)(r,d,(function(){return!1})),Object(l.a)(r,h,(function(){return!1})),Object(l.a)(r,x,(function(){return!0})),Object(l.a)(r,m,(function(){return!1})),Object(l.a)(r,v,(function(){return!1})),Object(l.a)(r,C,(function(){return!0})),Object(l.a)(r,y,(function(){return!1})),Object(l.a)(r,w,(function(){return!1})),r)),L=Object(j.c)("",Object(l.a)({},k,(function(t,e){return e.payload}))),S=Object(j.c)(null,(a={},Object(l.a)(a,h,(function(t,e){return e.payload})),Object(l.a)(a,O,(function(){return null})),a)),F=Object(p.b)({items:_,filter:L,loading:g,error:S}),A=Object(j.a)({reducer:{contacts:F}}),N=n(1),q=function(t){var e=t.title,n=t.children;return Object(N.jsx)("div",{children:Object(N.jsxs)("section",{children:[e&&Object(N.jsx)("h1",{children:e}),n]})})},E=n(20),z=n(14),R=function(t){return t.contacts.items},D=function(t){return t.contacts.filter},J=Object(z.a)([R,D],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),Z=function(t){return t.contacts.loading},B=n(29),I=n.n(B),M=n(4),T=n.n(M),U=n(8),G=n(10),K=n.n(G);function P(){return W.apply(this,arguments)}function W(){return(W=Object(U.a)(T.a.mark((function t(){var e,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $(t,e){return H.apply(this,arguments)}function H(){return(H=Object(U.a)(T.a.mark((function t(e,n){var c,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.post("/contacts",{name:e,number:n});case 2:return c=t.sent,r=c.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t){return V.apply(this,arguments)}function V(){return(V=Object(U.a)(T.a.mark((function t(e){var n,c;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K.a.delete("/contacts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}K.a.defaults.baseURL="http://localhost:3000";var X=function(){var t=Object(u.useState)(""),e=Object(E.a)(t,2),n=e[0],c=e[1],r=Object(u.useState)(""),a=Object(E.a)(r,2),s=a[0],o=a[1],i=Object(b.c)(R),j=Object(b.b)(),l=function(t,e){return j(function(t,e){return function(){var n=Object(U.a)(T.a.mark((function n(c){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(x()),n.prev=1,n.next=4,$(t,e);case 4:r=n.sent,c(m(r)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),c(v(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()}(t,e))},f=function(t){var e=t.currentTarget,n=e.name,r=e.value;switch(n){case"name":c(r);break;case"number":o(r);break;default:return}},p=function(){c(""),o("")};return Object(N.jsxs)("form",{className:I.a.form,onSubmit:function(t){if(t.preventDefault(),i.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts")),void p();l(n,s),p()},children:[Object(N.jsxs)("label",{children:["Name",Object(N.jsx)("input",{type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{children:["Number",Object(N.jsx)("input",{type:"tel",name:"number",value:s,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)("button",{type:"submit",children:"Add contacts"})]})},Y=n(19),tt=n.n(Y),et=function(){var t=Object(b.c)(J),e=Object(b.b)(),n=Object(b.c)(Z);Object(u.useEffect)((function(){e(function(){var t=Object(U.a)(T.a.mark((function t(e){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(O()),t.prev=1,t.next=4,P();case 4:n=t.sent,e(d(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(h(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]);var c=function(t){return e(function(t){return function(){var e=Object(U.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(C()),e.prev=1,e.next=4,Q(t);case 4:n(y(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(w(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{children:"Contacts"}),n&&Object(N.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."}),Object(N.jsx)("ul",{className:tt.a.contacts,children:t.map((function(t){var e=t.id,n=t.name,r=t.number;return Object(N.jsxs)("li",{children:[Object(N.jsxs)("span",{children:[n,":"]})," ",Object(N.jsx)("span",{children:r}),Object(N.jsx)("button",{className:tt.a.btn,type:"button",onClick:function(){return c(e)},children:"Delete"})]},e)}))})]})},nt=n(30),ct=n.n(nt),rt=function(){var t=Object(b.c)(D),e=Object(b.b)();return Object(N.jsxs)("label",{children:["Filter contacts by name"," ",Object(N.jsx)("input",{className:ct.a.input,type:"text",value:t,onChange:function(t){return e(k(t.currentTarget.value))}})]})},at=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(q,{title:"Phonebook",children:[Object(N.jsx)(X,{}),Object(N.jsx)(rt,{}),Object(N.jsx)(et,{})]})})};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(b.a,{store:A,children:Object(N.jsx)(at,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b01cec5e.chunk.js.map