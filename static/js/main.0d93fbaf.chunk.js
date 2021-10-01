(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{27:function(t,e,n){t.exports={form:"ContactForm_form__1YvpW"}},33:function(t,e,n){},39:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(12),u=n.n(a),o=(n(33),n(18)),s=n(27),i=n.n(s),b=n(1);var j=function(t){var e=t.onSubmit,n=Object(r.useState)(""),c=Object(o.a)(n,2),a=c[0],u=c[1],s=Object(r.useState)(""),j=Object(o.a)(s,2),f=j[0],p=j[1];return Object(b.jsxs)("form",{className:i.a.form,style:{marginBottom:"32px"},onSubmit:function(t){t.preventDefault(),e(a,f),u(""),p("")},children:[Object(b.jsx)("p",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",value:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:function(t){u(t.currentTarget.value)}}),Object(b.jsx)("p",{children:"Number"}),Object(b.jsx)("input",{type:"tel",value:f,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:function(t){p(t.currentTarget.value)}}),Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Add contact"})]})]})};var f=function(t){var e=t.onChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Find contacts by name"}),Object(b.jsx)("input",{type:"text",onChange:function(t){e(t.currentTarget.value)}})]})},p=n(6),l=n(8),d=function(t){return t.contacts},O=Object(l.a)([d,function(t){return t.filter}],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}));var h=Object(p.b)((function(t){return{contacts:O(t)}}),null)((function(t){var e=t.contacts,n=t.onDelete;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsxs)("li",{children:[t.name," ",t.number,Object(b.jsx)("button",{type:"button",onClick:function(){n(t.id)},children:"Delete"})]},t.id)}))})})),x=(n(39),n(62)),v=n(2),m=Object(v.b)("fetchContacts/request"),y=Object(v.b)("fetchContacts/success"),C=Object(v.b)("fetchContacts/error"),w=Object(v.b)("addContact/request"),g=Object(v.b)("addContact/success"),k=Object(v.b)("addContact/error"),A=Object(v.b)("deleteContact/request"),S=Object(v.b)("deleteContact/success"),q=Object(v.b)("deleteContact/error"),z=Object(v.b)("changeFilter"),D=n(3),T=n.n(D),B=n(7),F=n(10),J=n.n(F);function L(){return N.apply(this,arguments)}function N(){return(N=Object(B.a)(T.a.mark((function t(){var e,n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return _.apply(this,arguments)}function _(){return(_=Object(B.a)(T.a.mark((function t(e){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return M.apply(this,arguments)}function M(){return(M=Object(B.a)(T.a.mark((function t(e){var n,r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}J.a.defaults.baseURL="http://localhost:3000";var I,P=Object(p.b)()((function(){var t=Object(p.d)(d),e=Object(p.c)();return Object(r.useEffect)((function(){e(function(){var t=Object(B.a)(T.a.mark((function t(e){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,L();case 4:n=t.sent,e(y(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(C(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(j,{onSubmit:function(n,r){var c,a=t.filter((function(t){return t.name===n}));a.length>0?alert(n+" is already in contacts"):e((c={id:Object(x.a)(),name:n,number:r},function(){var t=Object(B.a)(T.a.mark((function t(e){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(w(c)),t.prev=1,t.next=4,Z(c);case 4:e(g(c)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e(k(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(f,{onChange:function(t){e(z(t))}}),Object(b.jsx)(h,{onDelete:function(t){e(function(t){return function(){var e=Object(B.a)(T.a.mark((function e(n){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(A(t)),e.prev=1,e.next=4,E(t);case 4:n(S(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(q(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}(t))}})]})})),R=n(11),U=n(28),W=n(5),Y=Object(v.c)([],(I={},Object(R.a)(I,y,(function(t,e){return e.payload})),Object(R.a)(I,g,(function(t,e){return[].concat(Object(U.a)(t),[e.payload])})),Object(R.a)(I,S,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),I)),$=Object(v.c)("",Object(R.a)({},z,(function(t,e){return e.payload}))),G=Object(W.b)({contacts:Y,filter:$}),H=Object(v.a)({reducer:G,devTools:!1});u.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(p.a,{store:H,children:Object(b.jsx)(P,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0d93fbaf.chunk.js.map