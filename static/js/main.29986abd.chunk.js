(this["webpackJsonpto-do-list-app"]=this["webpackJsonpto-do-list-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(8),i=n.n(o),u=n(7),a=n(2),r=(n(13),n(0)),s=function(e){var t=e.onSubmit,n=Object(c.useState)(localStorage.getItem("value")||""),o=Object(a.a)(n,2),i=o[0],u=o[1];Object(c.useEffect)((function(){window.localStorage.setItem("value",i)}),[i]);return Object(r.jsx)("input",{className:"input",value:i,onChange:function(e){u(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&i&&(t(i),u(""))},placeholder:"Enter your ToDos"})},l=n(6),f=n.n(l),d=function(e){var t=e.deleteToDo,n=e.index,o=e.takeChekedProp,i=e.toDo,u=Object(c.useState)(!1),s=Object(a.a)(u,2),l=s[0],f=s[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("input",{type:"checkBox",onChange:function(){f(!l),o(l,n,i.value)},checked:!i.checked}),i.value+" ",Object(r.jsx)("button",{onClick:function(){t(n)},children:"Delete"})]})})},j=function(e){var t=e.onClick,n=e.className,c=e.name;return Object(r.jsx)("button",{onClick:t,className:n,children:c})},h=(n(16),function(e){var t=e.onClickAll,n=e.onClickUnCheked,c=e.onClickCheked,o=e.toDoList;return Object(r.jsxs)("div",{className:function(){if(!o.length)return"displayNone"}(),children:[Object(r.jsx)(j,{onClick:c,name:"checked"}),Object(r.jsx)(j,{onClick:n,name:"unchecked"}),Object(r.jsx)(j,{onClick:t,name:"all"})]})}),b=function(e){var t=f.a.mark(b),n=e.toDoList,o=e.deleteToDo,i=e.takeChekedProp,u=Object(c.useState)({buttonChecked:!1,buttonUnChecked:!1}),s=Object(a.a)(u,2),l=s[0],j=s[1];function b(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,e++;case 3:t.next=0;break;case 5:case"end":return t.stop()}}),t)}var k=b(1),O=function(e){return Object(r.jsx)(d,{buttonChecked:l.buttonChecked,toDo:e,index:n.indexOf(e),deleteToDo:o,takeChekedProp:i},k.next().value)};return Object(r.jsxs)("div",{children:[l.buttonChecked?n.filter((function(e){return!e.checked})).map((function(e){return O(e)})):l.buttonUnChecked?n.filter((function(e){return e.checked})).map((function(e){return O(e)})):n.map((function(e){return O(e)})),Object(r.jsx)(h,{onClickCheked:function(){j({buttonChecked:!0,buttonUnChecked:!1})},onClickUnCheked:function(){j({buttonChecked:!1,buttonUnChecked:!0})},onClickAll:function(){j({buttonChecked:!1,buttonUnChecked:!1})},toDoList:n})]})},k=(n(17),function(e){var t=e.changeToDoList,n=e.toDoList;return Object(r.jsx)(j,{className:function(){if(!n.length)return"displayNone"}(),name:"CheckAllButton",onClick:function(){return t(n.map((function(e){return{checked:!1,value:e.value}})))}})}),O=(n(18),function(e){var t=e.toDoList,n=e.changeToDoList;return Object(r.jsx)(j,{className:function(){if(!t.some((function(e){return!e.checked})))return"buttonClearDisplay"}(),onClick:function(){var e=[];t.forEach((function(t){t.checked&&e.push(t)})),n(e)},name:"Clear checked"})}),C=(n(19),function(e){var t=e.toDoList,n=Object(c.useState)(0),o=Object(a.a)(n,2),i=o[0],u=o[1];Object(c.useEffect)((function(){var e=0;t.forEach((function(t){t.checked&&e++})),u(e)}),[t]);return Object(r.jsxs)("p",{className:function(){if(!i)return"displayNone"}(),children:[i," items left"]})}),p=(n(20),function(){var e=Object(c.useState)((function(){return JSON.parse(localStorage.getItem("toDolist")||"[]")})),t=Object(a.a)(e,2),n=t[0],o=t[1];Object(c.useEffect)((function(){window.localStorage.setItem("toDoList",JSON.stringify(n))}),[n]);var i=function(e){o(e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{changeToDoList:i,toDoList:n}),Object(r.jsx)(s,{onSubmit:function(e){o([{value:e,checked:!0}].concat(Object(u.a)(n)))}}),Object(r.jsx)(b,{toDoList:n,deleteToDo:function(e){var t=n.slice(0,e).concat(n.slice(e+1));o(Object(u.a)(t))},takeChekedProp:function(e,t,c){var i=n.slice(0,t).concat({value:c,checked:e},n.slice(t+1));o(i)}}),Object(r.jsx)(C,{toDoList:n}),Object(r.jsx)(O,{toDoList:n,changeToDoList:i})]})});i.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.29986abd.chunk.js.map