(this["webpackJsonpbairro-admin"]=this["webpackJsonpbairro-admin"]||[]).push([[28],{170:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var s=c(15),n=(c(5),c(325)),r=c(333),i=c(301),a=c(299),l=c(300),o=c(297),j=function(e){var t=e.title,c=e.content,j=e.show,b=e.setShow,d=e.actionOnSuccess;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(r.a,{open:j,onClose:function(){return b(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(s.jsx)(o.a,{id:"alert-dialog-title",children:t}),c?Object(s.jsx)(a.a,{children:Object(s.jsx)(l.a,{id:"alert-dialog-description",children:c})}):null,Object(s.jsxs)(i.a,{children:[Object(s.jsx)(n.a,{onClick:function(){return b(!1)},color:"primary",children:"Cancel"}),Object(s.jsx)(n.a,{onClick:function(){d(),b(!1)},color:"primary",autoFocus:!0,children:"Ok"})]})]})})}},263:function(e,t,c){},320:function(e,t,c){"use strict";c.r(t);var s=c(41),n=c(15),r=c(5),i=c(51),a=c(31),l=c(19),o=c(50),j=c(159),b=(c(263),c(170));t.default=Object(i.b)((function(e){return{users:e.users.users}}),(function(e){return{fetchGetUsers:function(){return e(Object(a.b)())},fetchBlockUser:function(t,c){return e(Object(a.a)(t,c))}}}))((function(e){var t=e.fetchGetUsers,c=e.fetchBlockUser,i=e.users,a=Object(r.useState)(0),d=Object(s.a)(a,2),u=d[0],h=d[1],O=Object(r.useState)(!1),x=Object(s.a)(O,2),f=x[0],m=x[1],N=Object(l.i)();return Object(r.useEffect)((function(){t()}),[]),console.log(i),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{title:i.length?"Do you want ".concat(i[u].blocked?"un":"","block this user?"):"",show:f,actionOnSuccess:function(){u&&c(i[u]._id,!i[u].blocked)},setShow:m}),Object(n.jsxs)("div",{className:"Users",children:[Object(n.jsxs)("div",{className:"Users-Header",children:[Object(n.jsx)("div",{className:"Users-Header-Button"}),Object(n.jsx)("p",{className:"Users-Header-Title",children:"Users"})]}),Object(n.jsxs)("table",{className:"Users-Table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Phone Number"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Discount"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:i?i.map((function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"Users-Table-Title",align:"left",children:e.phoneNumber?e.phoneNumber:"Older app version"}),Object(n.jsx)("td",{className:"Users-Table-Title",align:"left",children:"".concat(e.firstName," ").concat(e.fatherName," ").concat(e.lastName)}),Object(n.jsx)("td",{className:"Users-Table-Title",align:"left",children:e.discount?"".concat(e.discount,"%"):"0%"}),Object(n.jsxs)("td",{align:"right",children:[Object(n.jsx)(o.b,{to:"".concat(N.url,"/").concat(e._id),children:Object(n.jsx)(j.a,{className:"Users-Table-Edit",children:"edit"})}),Object(n.jsx)("div",{onClick:function(){h(t),m(!0)},children:Object(n.jsx)(j.a,{className:"Users-Table-".concat(e.blocked?"Unblock":"Delete"),children:e.blocked?"autorenew":"block"})})]})]})})})):null})]})]})]})}))}}]);
//# sourceMappingURL=28.47413008.chunk.js.map