(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{41:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var r,a,c,o,i=n(0),s=n(9),l=n.n(s),p=(n(41),n(2)),u=n.n(p),d=n(6),b=n(11),h=n(12),x=n(15),f=n(14),j=n(5),O=n(7),m=n(8),g=m.a.form(r||(r=Object(O.a)(["\n    width:400px;\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-bottom: 50px;\n    \ninput {\n    width: 100%;\n  padding: 12px 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid #ccc8c8;\n  transition: .3s border-color;\n    &:hover {\n  border: 1px solid #0f55eb;\n}\n}\ninput::placeholder {\n  color: rgba(0, 26, 255, 0.336);\n  font-size: 1em;\n  font-style: italic;\n}\n"]))),v=n(1),y=function(t){Object(x.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:[],filter:"",name:"",number:""},t.onHandleSubmit=function(e){e.preventDefault(),t.props.onCheckDuplicateName(t.state.name)?alert("".concat(t.state.name," is already in contacts.")):(t.props.addContact(t.state),t.setState({contacts:[],name:"",filter:"",number:""}))},t.onHandleChange=function(e){var n=e.target,r=n.name,a=n.value;t.setState(Object(j.a)({},r,a))},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(g,{onSubmit:this.onHandleSubmit,children:[Object(v.jsxs)("label",{children:["Name",Object(v.jsx)("input",{placeholder:"what's his/her name?",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.onHandleChange,value:this.state.name})]}),Object(v.jsxs)("label",{children:["Number",Object(v.jsx)("input",{placeholder:"gimme their number, hun;)",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.onHandleChange,value:this.state.number})]}),Object(v.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(i.Component),C=m.a.div(a||(a=Object(O.a)(["\n    width:400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    border-color: black;\n    padding: 15px;\n    border-radius: 2px;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    margin-top: 50px;\n\n.styled-contact-li{\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n}\n"]))),w=function(t){var e=t.contacts,n=t.deleteContact;return Object(v.jsx)(C,{children:Object(v.jsx)("ul",{children:e.map((function(t){return Object(v.jsxs)("li",{className:"styled-contact-li",children:[Object(v.jsxs)("p",{children:[t.name,":"]}),Object(v.jsx)("p",{children:t.number}),Object(v.jsx)("button",{type:"button",onClick:n,id:t.id,children:"Delete"})]},t.id)}))})})},k=function(t){var e=t.title,n=t.children,r=t.styles;return Object(v.jsxs)("div",{className:r,children:[Object(v.jsx)("h2",{children:e}),n]})},A=m.a.div(c||(c=Object(O.a)(["\n    width:400px;\n    height: 150px;\n    padding: 15px;\n    border-radius: 2px;\n    &:hover{\n        border: 1px solid #0f55eb;\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);\n    background-color: rgba(0, 26, 255, 0.336);\n    }\n\ninput {\n    width: 100%;\n  padding: 12px 10px;\n  margin: 8px 0;\n  display: inline-block;\n  border-radius: 4px;\n  box-sizing: border-box;\n  border: 1px solid #ccc8c8;\n  transition: .3s border-color;\n  \n   \n}\ninput::placeholder {\n  color: rgba(0, 26, 255, 0.336);\n  font-size: 1em;\n  font-style: italic;\n}\n"]))),N=function(t){var e=t.filter,n=t.setFilter;return Object(v.jsx)(A,{children:Object(v.jsxs)("label",{children:[Object(v.jsx)("h3",{children:"Find contacts by name"}),Object(v.jsx)("input",{className:"filterInput",type:"text",value:e,onChange:n,placeholder:"who is your booty call for tonight? "})]})})},F=n(13),z=n(4),D=Object(z.b)("contacts/addContact"),S=Object(z.b)("contacts/deleteContact"),H=Object(z.b)("contacts/getAllContacts"),E=Object(z.b)("contacts/filterContacts"),J=(Object(z.b)("contacts/setError"),Object(z.b)("contacts/resetError"),n(10)),Z=function(t){return t.contacts},q=function(t){return t.filter},B=(Object(J.a)([Z,q],(function(t,e){return t.filter((function(t){return t.clientName.includes(e)}))})),n(16)),I=n(17),L=n.n(I),M=function(t){Object(x.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(b.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).addContact=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.props.addContactOperation(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteContact=function(){var e=Object(d.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.id,t.props.deleteContactOperation(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onCheckDuplicateName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.setFilter=function(e){var n=e.target.value;t.props.filterContacts(n)},t.getFilteredContacts=function(){return t.props.contacts.filter((function(e){return e.name.toLowerCase().includes(t.props.filter.toLowerCase())}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.getAllContacts();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(k,{title:"Phonebook",children:Object(v.jsx)(y,{addContact:this.addContact,onCheckDuplicateName:this.onCheckDuplicateName})}),Object(v.jsx)(k,{title:"Contacts",styles:"filterContainerStyle",children:Object(v.jsx)(N,{filter:this.props.filter,setFilter:this.setFilter})}),Object(v.jsx)(k,{children:Object(v.jsx)(w,{contacts:this.getFilteredContacts(),deleteContact:this.deleteContact})})]})}}]),n}(i.Component),P={addContactOperation:function(t){return function(){var e=Object(d.a)(u.a.mark((function e(n,r){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts.json",t);case 3:a=e.sent,c=a.data,n(D(Object(B.a)(Object(B.a)({},t),{},{id:c.name}))),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}()},deleteContactOperation:function(t){return function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.delete("https://bootycall-phonebook-default-rtdb.firebaseio.com/contacts/".concat(t,".json"));case 3:n(S(t)),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},getAllContacts:H,filterContacts:E},$=Object(F.b)((function(t){return{contacts:Z(t),filter:q(t)}}),P)(M),G=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)($,{})})},K=n(23),Q=Object(z.c)([],(o={},Object(j.a)(o,D,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(j.a)(o,S,(function(t,e){var n=e.payload;return Object(K.a)(t.filter((function(t){return t.id!==n})))})),Object(j.a)(o,H,(function(t,e){return e.payload})),o)),R=Object(z.c)("",Object(j.a)({},E,(function(t,e){return e.payload}))),T=Object(z.a)({reducer:{contacts:Q,filter:R}});l.a.render(Object(v.jsx)(F.a,{store:T,children:Object(v.jsx)(G,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.469d0620.chunk.js.map