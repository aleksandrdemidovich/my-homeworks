(this["webpackJsonpmy-homeworks"]=this["webpackJsonpmy-homeworks"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={affairPriority:"Affairs_affairPriority__2xseN",affair:"Affairs_affair__1Ty4S",deleteAffairButton:"Affairs_deleteAffairButton__1XkM_",rootBlock:"Affairs_rootBlock__3S8GB",bf:"Affairs_bf__qoU96"}},function(e,t,n){e.exports={inputWrap:"SuperInputText_inputWrap__1Tzxe",superInput:"SuperInputText_superInput__2nLuv",placeHolder:"SuperInputText_placeHolder__2Ilzm",hidePlaceHolder:"SuperInputText_hidePlaceHolder__3Ukth",errorInput:"SuperInputText_errorInput__2_5Na",error:"SuperInputText_error__YdufZ"}},,,function(e,t,n){e.exports={wrap:"Error404_wrap__2f_hX",notfound:"Error404_notfound__1WzGa",notfound404:"Error404_notfound404__2ViTp",navLink:"Error404_navLink__1hMXV"}},,,function(e,t,n){e.exports={rootMess:"Message_rootMess__pk6MU",timeMess:"Message_timeMess__3sUn0",messInfo:"Message_messInfo__2nksH",inputForm:"Message_inputForm__EIXxC"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__ksYQh",error:"Greeting_error__Wgixs",input:"Greeting_input__33veP"}},function(e,t,n){e.exports={Wrap:"Route_Wrap__26CsV",navigationItem:"Route_navigationItem__21yt7",navlinks:"Route_navlinks__1ZY_L"}},,,,function(e,t,n){e.exports={column:"HW4_column__3qwya",blue:"HW4_blue__2JUJw"}},function(e,t,n){e.exports={default:"SuperButton_default__2DNEU","focus-visible":"SuperButton_focus-visible__1MR7z",red:"SuperButton_red__2j5SR","button-24":"SuperButton_button-24__3Ws9x"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2vTGo",spanClassName:"SuperCheckbox_spanClassName__uGAmq"}},function(e,t,n){e.exports={dark:"HW12_dark__16EC5","dark-text":"HW12_dark-text__1T78t",red:"HW12_red__sBJ7P","red-text":"HW12_red-text__x485C",some:"HW12_some__HGI7P","some-text":"HW12_some-text__2teP0"}},,,,function(e,t,n){e.exports={App:"App_App__3HIds"}},,,function(e,t,n){e.exports={range:"SuperRange_range__5ulmT"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),s=n.n(c),i=(n(37),n(29)),o=n.n(i),j=n(2),l=n(8),u=n(13),d=n.n(u),b=n(0);var O=function(){return Object(b.jsxs)("div",{className:d.a.wrap,children:[Object(b.jsx)(fe,{}),Object(b.jsxs)("div",{className:d.a.notfound,children:[Object(b.jsx)("div",{className:d.a.notfound404,children:Object(b.jsx)("h1",{children:"404"})}),Object(b.jsx)("h2",{children:"Oops! This Page Could Not Be Found"}),Object(b.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"}),Object(b.jsx)(l.b,{className:d.a.navLink,to:he.PRE_JUNIOR,children:"Go To Homepage"})]})]})},h=n(3),x=n(4),m=n(15),p=n(16),f=n.n(p);var _=function(e){return Object(b.jsxs)("div",{className:f.a.rootMess,children:[Object(b.jsx)("img",{src:e.avatar,alt:"ava"}),Object(b.jsxs)("div",{className:f.a.messInfo,children:[Object(b.jsx)("div",{children:e.name}),Object(b.jsx)("div",{children:e.message}),Object(b.jsx)("div",{className:f.a.timeMess,children:e.time})]})]})},v={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sanya",message:"some text some text some text some text some text some ",time:(new Date).toLocaleTimeString()};var g=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],o=s[1];function l(){a([].concat(Object(m.a)(n),[Object(x.a)(Object(x.a)({},v),{},{message:i,time:(new Date).toLocaleTimeString()})])),o("")}return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(_,{avatar:v.avatar,name:v.name,message:v.message,time:v.time}),Object(b.jsx)("hr",{}),n.map((function(e,t){return Object(b.jsx)(_,{avatar:v.avatar,name:v.name,message:e.message,time:e.time},t)})),Object(b.jsx)("input",{type:"text",placeholder:"Enter message",value:i,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||l()},autoFocus:!0}),Object(b.jsx)("button",{onClick:l,children:"Send"})]})},k=n(9),C=n.n(k),N=function(e){switch(e){case"high":return"green";case"middle":return"blue";case"low":return"red"}};var y=function(e){return Object(b.jsxs)("div",{className:C.a.affair,children:[Object(b.jsxs)("span",{children:[e.affair.name," "]}),Object(b.jsxs)("span",{style:{color:N(e.affair.priority)},className:C.a.affairPriority,children:["[",e.affair.priority,"]"]}),Object(b.jsx)("button",{className:C.a.deleteAffairButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(b.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback,checkAffairPriority:e.setFilter},t._id)}));return Object(b.jsxs)("div",{className:C.a.rootBlock,children:[Object(b.jsx)("div",{className:C.a.affairs,children:t}),Object(b.jsxs)("div",{className:C.a.bf,children:[Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"Angular",priority:"middle"},{_id:6,name:"Vue",priority:"middle"},{_id:7,name:"NodeJS",priority:"high"},{_id:8,name:"Java",priority:"middle"},{_id:9,name:"Swift",priority:"middle"}];var I=function(){var e=Object(r.useState)(w),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},R=n(46),T=n(17),P=n.n(T),U=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a.length>0?P.a.error:P.a.input;return Object(b.jsxs)("div",{className:P.a.someClass,children:[Object(b.jsx)("input",{value:t,onChange:n,className:s}),Object(b.jsx)("button",{disabled:!t,onClick:r,children:"add"}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("div",{children:a})]})},A=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],O=t.length;return Object(b.jsx)(U,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&d("")):(d("name is required"),i(""))},addUser:function(){t.push({_id:Object(R.a)(),name:s}),n(s),alert("Hello ".concat(s," !")),i("")},error:u,totalUsers:O})};var E=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(A,{users:n,addUserCallback:function(e){a(Object(m.a)(n)),console.log(n)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=n(7),H=n(10),W=n.n(H),M=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(W.a.error," ").concat(i||""),l="".concat(W.a.input," ").concat(c?W.a.errorInput:W.a.superInput," ").concat(s);return Object(b.jsxs)("div",{className:W.a.inputWrap,children:[Object(b.jsxs)("label",{htmlFor:"name",children:[Object(b.jsx)("input",Object(x.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l,name:"name",id:"name"},o)),Object(b.jsx)("span",{className:""===o.value?W.a.placeHolder:W.a.hidePlaceHolder,children:"Type here"})]}),c&&Object(b.jsx)("span",{className:j,children:c})]})},B=n(22),F=n.n(B),L=n(23),G=n.n(L),D=function(e){var t=e.red,n=e.className,r=Object(J.a)(e,["red","className"]),a="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(b.jsx)("button",Object(x.a)({className:a},r))},X=n(24),q=n.n(X),z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),a&&Object(b.jsx)("span",{className:q.a.spanClassName,children:a})]})};var K=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:F.a.column,children:[Object(b.jsx)(M,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(M,{className:F.a.blue}),Object(b.jsx)(D,{children:"default"}),Object(b.jsx)(D,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(D,{disabled:!0,children:"disabled"}),Object(b.jsx)(z,{checked:l,onChangeChecked:u,children:"some text "}),Object(b.jsx)(z,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var V=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(I,{}),Object(b.jsx)(E,{}),Object(b.jsx)(K,{})]})},Y=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Z=function(){var e=Object(r.useState)(Y),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n.map((function(e){return Object(b.jsx)("div",{children:"some name, age"},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",c,Object(b.jsx)("div",{children:Object(b.jsx)(D,{onClick:function(){return a(function(e,t){switch(t.type){case"sort":case"check":default:return e}}(Y,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:"sort down"}),"check 18",Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Q=function(e){e.options,e.onChange,e.onChangeOption;var t=Object(J.a)(e,["options","onChange","onChangeOption"]);return Object(b.jsx)("select",Object(x.a)(Object(x.a)({onChange:function(e){}},t),{},{children:[]}))},$=function(e){e.type;var t=e.name,n=e.options,r=(e.value,e.onChange,e.onChangeOption,Object(J.a)(e,["type","name","options","value","onChange","onChangeOption"]),n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio"}),e]},t+"-"+n)})):[]);return Object(b.jsx)(b.Fragment,{children:r})},ee=["x","y","z"];var te=function(){var e=Object(r.useState)(ee[1]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(Q,{options:ee,value:n,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)($,{name:"radio",options:ee,value:n,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ne=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(),c=Object(j.a)(a,2),s=(c[0],c[1],Object(r.useState)(!1)),i=Object(j.a)(s,2),o=i[0],l=(i[1],function(){});return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){},onMouseLeave:function(){},children:"Time"}),o&&Object(b.jsx)("div",{children:"Date"}),Object(b.jsx)(D,{onClick:function(){var e=window.setInterval((function(){}),1e3);n(e)},children:"start"}),Object(b.jsx)(D,{onClick:l,children:"stop"})]})};var re=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(ne,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ae=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",Object(b.jsx)("div",{children:Object(b.jsx)(D,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ce=n(32),se=n.n(ce),ie=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,a=Object(J.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(se.a.range," ").concat(r||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(x.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:c},a))})},oe=function(e){e.onChangeRange,e.value;return Object(b.jsx)(b.Fragment,{children:"DoubleRange"})};var je=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),n=t[0],a=(t[1],Object(r.useState)(100)),c=Object(j.a)(a,2),s=c[0];return c[1],Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(ie,{})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(oe,{}),Object(b.jsx)("span",{children:s})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var le=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(te,{}),Object(b.jsx)(Z,{}),Object(b.jsx)(re,{}),Object(b.jsx)(ae,{}),Object(b.jsx)(je,{})]})},ue=n(25),de=n.n(ue);var be=function(){return Object(b.jsxs)("div",{className:de.a.some,children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:de.a["some-text"],children:"homeworks 12"}),Object(b.jsx)("hr",{})]})};var Oe=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(be,{})})},he={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var xe=function(e){return Object(b.jsxs)("div",{children:[function(){switch(Object(h.g)().pathname){case"/pre-junior":case"/junior":case"/junior-plus":return e.checkCallback(!0);default:e.checkCallback(!1)}}(),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(h.a,{to:he.PRE_JUNIOR})}}),Object(b.jsx)(h.b,{path:he.PRE_JUNIOR,render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(h.b,{path:he.JUNIOR,render:function(){return Object(b.jsx)(le,{})}}),Object(b.jsx)(h.b,{path:he.JUNIOR_PLUS,render:function(){return Object(b.jsx)(Oe,{})}}),Object(b.jsx)(h.b,{render:function(){return Object(b.jsx)(O,{})}})]})]})},me=n(18),pe=n.n(me);var fe=function(){var e={textDecoration:"none",color:"inherit"},t={background:"-webkit-linear-gradient(#11998e, #38ef7d)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","border-bottom":"1px solid #38ef7d"};return Object(b.jsxs)("div",{className:pe.a.Wrap,children:[Object(b.jsxs)("ul",{className:pe.a.navlinks,children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:he.PRE_JUNIOR,children:"Pre Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:he.JUNIOR,children:"Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:he.JUNIOR_PLUS,children:"Junior +"})})]}),Object(b.jsx)("div",{className:pe.a.navigationItem,children:"Navigation"})]})};var _e=function(){var e=Object(r.useState)(!0),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[n&&Object(b.jsx)(fe,{}),Object(b.jsx)(xe,{checkCallback:function(e){a(!!e)}})]})})};var ve=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(_e,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ve,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.ca23e932.chunk.js.map