(this["webpackJsonpmy-react-app-with-ts"]=this["webpackJsonpmy-react-app-with-ts"]||[]).push([[0],{11:function(t,e,c){},12:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),a=c(5),r=c.n(a),d=(c(11),c(2)),i=c(4),j=(c(12),c(3));function l(t){let{children:e,...c}=t;const n=Object(d.r)(c.url),s=Object(d.n)({path:n.pathname,end:!0});return Object(j.jsx)("li",{className:s?"navigation--active":"",children:Object(j.jsx)(i.b,{to:c.url,children:e})})}var o=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(l,{url:"/",children:"Home"}),Object(j.jsx)(l,{url:"/about-us",children:"About Us"}),Object(j.jsx)(l,{url:"/contact-us",children:"Contact Us"})]})})};c(14);var b=function(t){let{task:e,dispatch:c}=t;return Object(j.jsx)("div",{className:"card card-body mt-2",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-9",children:Object(j.jsxs)("h2",{className:e.done?"task--done":"",children:[e.name," - ",e.id]})}),Object(j.jsxs)("div",{className:"col-md-3",children:[Object(j.jsx)("button",{className:"btn btn-primary ml-3 mr-1","data-testid":"change-task-button",onClick:t=>{c({type:"change_task",taskId:e.id})},children:e.done?"\u2713":"\ud835\ude1f"}),Object(j.jsx)("button",{className:"btn btn-warning","data-testid":"remove-task-button",onClick:()=>{c({type:"remove_task",taskId:e.id})},children:"\ud83d\uddd1"})]})]})})};const u=(t,e)=>{switch(e.type){case"add_task":return[...t,{id:e.taskId,name:e.taskName,done:!1}];case"change_task":const c=t.findIndex((t=>t.id===e.taskId));if(c>-1){const e=[...t],n={...e[c],done:!e[c].done};return e.splice(c,1,n),e}return t;case"remove_task":return[...t.filter((t=>t.id!==e.taskId))];default:return t}};var h=function(){const[t,e]=Object(n.useReducer)(u,[]),[c,s]=Object(n.useState)(0),a=Object(n.useRef)(null);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(j.jsx)("div",{className:"card mt-4",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{className:"form-control","data-testid":"task-input",type:"text",autoFocus:!0,ref:a}),Object(j.jsx)("button",{className:"btn btn-success btn-block mt-3","data-testid":"save-task-button",onClick:t=>{var n;t.preventDefault(),e({type:"add_task",taskId:c,taskName:(null===(n=a.current)||void 0===n?void 0:n.value)||""}),s(c+1)},children:"Save"})]})})}),t.map(((t,c)=>Object(j.jsx)(b,{task:t,dispatch:e},c)))]})})})})};var m=function(){return Object(j.jsx)("h1",{children:"My Home Page"})};var O=function(){return Object(j.jsx)("h1",{children:"About Us"})};var x=function(){return Object(j.jsx)("h1",{children:"ContactUs"})};var v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",element:Object(j.jsx)(m,{})}),Object(j.jsx)(d.a,{path:"/about-us",element:Object(j.jsx)(O,{})}),Object(j.jsx)(d.a,{path:"/contact-us",element:Object(j.jsx)(x,{})})]}),Object(j.jsx)(h,{})]})};var k=t=>{t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((e=>{let{getCLS:c,getFID:n,getFCP:s,getLCP:a,getTTFB:r}=e;c(t),n(t),s(t),a(t),r(t)}))};c(15);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.c32f3b16.chunk.js.map