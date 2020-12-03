(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{120:function(t,e,n){},121:function(t,e,n){},122:function(t,e,n){},123:function(t,e,n){},124:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var a=n(40),r=n(41),c=n(43),l=n(42),o=n(0),u=n.n(o),i=n(13),s=n(129),m=n(20),f=n.n(m),p=n(30),d=n(22),b=n.n(d),h=n(27),E={getContacts:function(){return function(){var t=Object(p.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h.a.getContactsRequest()),t.prev=1,t.next=4,b.a.get("/contacts");case 4:n=t.sent,e(h.a.getContactsSuccess(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(h.a.getContactsError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(p.a)(f.a.mark((function n(a){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h.a.addContactRequest()),n.prev=1,n.next=4,b.a.post("/contacts",{name:t,number:e});case 4:r=n.sent,a(h.a.addContactSuccess(r.data)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),a(h.a.addContactError(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(h.a.deleteContactRequest()),e.prev=1,e.next=4,b.a.delete("/contacts/".concat(t));case 4:n(h.a.deleteContactSuccess(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(h.a.deleteContactError(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},v=n(17),C=function(t){return t.contacts.items},g=function(t){return t.contacts.filter},O={itemsSelector:C,filterSelector:g,getFilteredContact:Object(v.a)([C,g],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),getContactById:Object(v.a)([C,function(t,e){return e}],(function(t,e){return t.find((function(t){return t.id===e}))}))},j=(n(44),n(8)),y=n(113),N=(n(120),function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).formInitialState={name:"",number:""},t.state=Object(y.a)(Object(y.a)({},t.formInitialState),{},{alert:!1}),t.inputHandler=function(e){var n=e.target,a=n.value,r=n.name;t.setState(Object(j.a)({},r,a))},t.submitHandler=function(e){var n=t.state,a=n.name,r=n.number,c=n.alert;if(e.preventDefault(),t.props.contacts.find((function(t){return t.name===a})))return t.toggleAlert(c),t.reset();t.props.addContact(a,r),t.reset()},t.reset=function(){t.setState(Object(y.a)({},t.formInitialState))},t.toggleAlert=function(e){t.setState({alert:!e})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number,r=e.alert;return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,{in:r,classNames:"alert",timeout:1500,unmountOnExit:!0,onEntered:function(){return t.setState({alert:!r})}},u.a.createElement("button",{onClick:this.toggleAlert,className:"alert"},"Contact already exists!")),u.a.createElement("form",{className:"contacts_form",onSubmit:this.submitHandler},u.a.createElement("label",{className:"input_name"},"Name",u.a.createElement("br",null),u.a.createElement("input",{className:"input_form",type:"text",name:"name",placeholder:"Add name",value:n,onChange:this.inputHandler})),u.a.createElement("br",null),u.a.createElement("label",{className:"input_name"},"Number",u.a.createElement("br",null),u.a.createElement("input",{className:"input_form",type:"text",name:"number",placeholder:"Add phone number",value:a,onChange:this.inputHandler})),u.a.createElement("br",null),u.a.createElement("button",{type:"submit",className:"submitBtn"},"Create contact")))}}]),n}(o.Component)),S={addContact:E.addContact},x=Object(i.b)((function(t){return{contacts:O.itemsSelector(t),filter:O.filterSelector(t)}}),S)(N),k=n(130),w=(n(121),Object(i.b)((function(t,e){var n=O.getContactById(t,e.id);return Object(y.a)({},n)}),(function(t,e){return{deleteContact:function(){return t(E.deleteContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.deleteContact;return u.a.createElement("li",{className:"contact"},u.a.createElement("h4",null,e),u.a.createElement("p",null,n),u.a.createElement("button",{className:"deleteButton",type:"button",onClick:a},"\u2718"))}))),_=(n(122),Object(i.b)((function(t){return{contacts:O.getFilteredContact(t)}}))((function(t){var e=t.contacts;return u.a.createElement(k.a,{component:"ul",className:"contact_List"},e.map((function(t){var e=t.id;return u.a.createElement(s.a,{key:e,classNames:"list_item",timeout:250},u.a.createElement(w,{id:e}))})))}))),F=(n(123),{handleFilter:h.a.handleFilter}),A=Object(i.b)((function(t){return{filter:O.filterSelector(t)}}),F)((function(t){var e=t.filter,n=t.handleFilter;return u.a.createElement("div",{className:"filter_box"},u.a.createElement("label",{className:"input_label"},"Find contacts by name",u.a.createElement("br",null),u.a.createElement("input",{className:"filter_form",type:"text",name:"filter",placeholder:"Find contact",value:e,onChange:n})))})),I=(n(124),function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={animation:!1},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetContacts(),this.setState((function(t){return{animation:!t.animation}}))}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement(s.a,{in:!0,appear:!0,classNames:"title-slideIn",timeout:500,unmountOnExit:!0},u.a.createElement("h1",{className:"app_title"},"Phonebook")),u.a.createElement(x,null),0===this.props.contacts.length&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",{className:"contact_title"},"Contacts"),u.a.createElement("p",null,"Contacts list is empty. Please, create new cotnact!")),u.a.createElement(s.a,{in:this.props.contacts.length>1,classNames:"filter_animation",timeout:250,unmountOnExit:!0},u.a.createElement(A,null)),u.a.createElement(_,null))}}]),n}(o.Component)),H={onGetContacts:E.getContacts};e.default=Object(i.b)((function(t){return{contacts:O.itemsSelector(t)}}),H)(I)}}]);
//# sourceMappingURL=3.a9252a44.chunk.js.map