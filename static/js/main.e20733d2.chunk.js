(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={contact:"contact_contact__25WgQ",item:"contact_item__30qXv",button:"contact_button__2SWwD",name:"contact_name__11TfX"}},function(t,e,n){t.exports={label:"contactForm_label__32mzV",input:"contactForm_input__1P1bc",button:"contactForm_button__qdy7k"}},,,,function(t,e,n){t.exports={modal__backdrop:"modal_modal__backdrop__23hMt",modal__content:"modal_modal__content__1maT5"}},function(t,e,n){t.exports={container:"App_container__2xw-N",wrapper:"App_wrapper__2HjWw"}},function(t,e,n){t.exports={input:"filter_input__1zGu9"}},function(t,e,n){t.exports={button:"IconButton_button__pRPjo"}},,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),l=n(16),i=n(2),s=n(3),u=n(5),d=n(4),h=n(10),b=n(8),m=n.n(b),p=n(0),j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:m.a.label,children:["Name",Object(p.jsx)("input",{maxLength:"22",className:m.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:m.a.label,children:["Number",Object(p.jsx)("input",{className:m.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})})}}]),n}(a.Component),f=j,O=n(14),g=n.n(O),v=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{children:["Find contacts by name",Object(p.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},x=n(6),w=n(7),y=n.n(w),_=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(p.jsxs)("li",{className:y.a.item,children:[Object(p.jsx)("p",{className:y.a.name,children:n}),Object(p.jsx)("p",{children:a}),Object(p.jsx)("button",{className:y.a.button,onClick:function(){return c(e)},children:"Delete"})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:y.a.contact,children:e.map((function(t){return Object(p.jsx)(_,Object(x.a)(Object(x.a)({},t),{},{onDeleteContact:n}),t.id)}))})},k=n(12),S=n.n(k),N=document.getElementById("modal--root"),M=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).handleKeyDown=function(e){"Escape"===e.code&&(console.log("\u043d\u0430\u0436\u0430\u043b\u0438 \u043d\u0430 ESC"),t.props.onClose())},t.handleBackdropClick=function(e){console.log("currentTarget",e.currentTarget),console.log("target",e.target),e.currentTarget===e.target&&t.props.onClose()},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:S.a.modal__backdrop,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:S.a.modal__content,children:this.props.children})}),N)}}]),n}(a.Component),E=M,D=n(17),A=n(15),I=n.n(A),P=["children","onClick"],z=function(t){var e=t.children,n=t.onClick,a=Object(D.a)(t,P);return Object(p.jsx)("button",Object(x.a)(Object(x.a)({type:"button",className:I.a.button,onClick:n},a),{},{children:e}))};z.defaultProps={onClick:function(){return null},children:null};var B,F,T=z,L=n(13),J=n.n(L),K=n(25),q=["title","titleId"];function R(){return R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},R.apply(this,arguments)}function W(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function V(t,e){var n=t.title,c=t.titleId,o=W(t,q);return a.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":c},o),void 0===n?a.createElement("title",{id:c},"user-plus"):n?a.createElement("title",{id:c},n):null,B||(B=a.createElement("path",{d:"M12 23c0-4.726 2.996-8.765 7.189-10.319 0.509-1.142 0.811-2.411 0.811-3.681 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h12.416c-0.271-0.954-0.416-1.96-0.416-3z"})),F||(F=a.createElement("path",{d:"M23 14c-4.971 0-9 4.029-9 9s4.029 9 9 9c4.971 0 9-4.029 9-9s-4.029-9-9-9zM28 24h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z"})))}var Z,H=a.forwardRef(V),U=(n.p,["title","titleId"]);function X(){return X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},X.apply(this,arguments)}function G(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function Q(t,e){var n=t.title,c=t.titleId,o=G(t,U);return a.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":c},o),void 0===n?a.createElement("title",{id:c},"cross"):n?a.createElement("title",{id:c},n):null,Z||(Z=a.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})))}var Y=a.forwardRef(Q),$=(n.p,function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"Kate Yeland",number:"234-01-29"},{id:"id-6",name:"Olex Bond",number:"456-87-54"}],filter:"",showModal:!1},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(K.a)(),name:n,number:a};t.state.contacts.some((function(t){return t.name.toLowerCase()===c.name.toLowerCase()}))?alert("This contact is already exist!! Try one more time, please!"):t.setState((function(t){return{contacts:[c].concat(Object(l.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.toggleModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(console.log("\u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435!"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts))),this.state.contacts.length>e.contacts.length&&0!==e.contacts.length&&this.toggleModal()}},{key:"render",value:function(){var t=this.getVisibleContacts();return Object(p.jsxs)("div",{className:J.a.container,children:[Object(p.jsx)(T,{onClick:this.toggleModal,"aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(p.jsx)(H,{width:"20",height:"20",fill:"white"})}),Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(v,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)("div",{className:J.a.wrapper,children:Object(p.jsx)(C,{contacts:t,onDeleteContact:this.deleteContact})}),Object(p.jsx)("div",{children:this.state.showModal&&Object(p.jsxs)(E,{onClose:this.toggleModal,children:[Object(p.jsx)(T,{onClick:this.toggleModal,children:Object(p.jsx)(Y,{width:"20",height:"20",fill:"white"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Add contacts"}),Object(p.jsx)(f,{onSubmit:this.addContact})]})]})})]})}}]),n}(a.Component)),tt=$;r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(tt,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.e20733d2.chunk.js.map