(this["webpackJsonpmy-homeworks"]=this["webpackJsonpmy-homeworks"]||[]).push([[0],{18:function(e,t,n){e.exports={affairPriority:"Affairs_affairPriority__3Gv3G",affair:"Affairs_affair__1RhqV",deleteAffairButton:"Affairs_deleteAffairButton__1vE_B",rootBlock:"Affairs_rootBlock__XnDdT",bf:"Affairs_bf__1WWKO"}},19:function(e,t,n){e.exports={inputWrap:"SuperInputText_inputWrap__KKfX6",superInput:"SuperInputText_superInput__3J-bB",placeHolder:"SuperInputText_placeHolder__2_wmn",hidePlaceHolder:"SuperInputText_hidePlaceHolder__32bN3",errorInput:"SuperInputText_errorInput__3d5ox",error:"SuperInputText_error__3ZttO"}},23:function(e,t,n){e.exports={wrap:"Error404_wrap__3hQou",notfound:"Error404_notfound__2LDA5",notfound404:"Error404_notfound404__39-ZJ",navLink:"Error404_navLink__14oDF"}},24:function(e,t,n){e.exports={rootMess:"Message_rootMess__22XXA",timeMess:"Message_timeMess__xeeqz",messInfo:"Message_messInfo__1tXgU",messText:"Message_messText__1nT4_"}},31:function(e,t,n){e.exports={someClass:"Greeting_someClass__14due",error:"Greeting_error__1i1lA",input:"Greeting_input__2rctm"}},32:function(e,t,n){e.exports={Wrap:"Route_Wrap__2bIsh",navigationItem:"Route_navigationItem__3dWYQ",navlinks:"Route_navlinks__23Yzj"}},37:function(e,t,n){e.exports={column:"HW4_column__2zHK2",blue:"HW4_blue__Hp9-z"}},38:function(e,t,n){e.exports={default:"SuperButton_default__2X8gw","focus-visible":"SuperButton_focus-visible__3b4TF",red:"SuperButton_red___jAT-","button-24":"SuperButton_button-24__1laMk"}},39:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__w1R36",spanClassName:"SuperCheckbox_spanClassName__3tmHB"}},40:function(e,t,n){},41:function(e,t,n){e.exports={dark:"HW12_dark__3i-Oq","dark-text":"HW12_dark-text__1zHQ9",red:"HW12_red__vCbMK","red-text":"HW12_red-text__1s3xT",some:"HW12_some__37Vpk","some-text":"HW12_some-text__2LntZ"}},51:function(e,t,n){e.exports={App:"App_App__Xcz4V"}},56:function(e,t,n){e.exports={span:"SuperEditableSpan_span__3Z_-U"}},57:function(e,t,n){e.exports={selectOption:"SuperSelect_selectOption__HhbWK"}},58:function(e,t,n){e.exports={loadingCircle:"HW10_loadingCircle__3lWdL"}},68:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(28),s=n.n(r),i=(n(68),n(51)),o=n.n(i),j=n(4),l=n(16),u=n(23),d=n.n(u),b=n(0);var O=function(){return Object(b.jsx)("div",{className:d.a.wrap,children:Object(b.jsxs)("div",{className:d.a.notfound,children:[Object(b.jsx)("div",{className:d.a.notfound404,children:Object(b.jsx)("h1",{children:"404"})}),Object(b.jsx)("h2",{children:"Oops! This Page Could Not Be Found"}),Object(b.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"}),Object(b.jsx)(l.b,{className:d.a.navLink,to:Ue.PRE_JUNIOR,children:"Go To Homepage"})]})})},h=n(8),x=n(7),m=n(9),p=n(24),f=n.n(p);var v=function(e){return Object(b.jsxs)("div",{className:f.a.rootMess,children:[Object(b.jsx)("img",{src:e.avatar,alt:"ava"}),Object(b.jsxs)("div",{className:f.a.messInfo,children:[Object(b.jsx)("div",{children:e.name}),Object(b.jsx)("div",{className:f.a.messText,children:e.message}),Object(b.jsx)("div",{className:f.a.timeMess,children:e.time})]})]})},_={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Sanya",message:"some text some text some text some text some text some ",time:(new Date).toLocaleTimeString()};var g=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1];function l(){c([].concat(Object(m.a)(n),[Object(x.a)(Object(x.a)({},_),{},{message:i,time:(new Date).toLocaleTimeString()})])),o("")}return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(v,{avatar:_.avatar,name:_.name,message:_.message,time:_.time}),Object(b.jsx)("hr",{}),n.map((function(e,t){return Object(b.jsx)(v,{avatar:_.avatar,name:_.name,message:e.message,time:e.time},t)})),Object(b.jsx)("input",{type:"text",placeholder:"Enter message",value:i,onChange:function(e){return o(e.target.value)},onKeyPress:function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||l()},autoFocus:!0}),Object(b.jsx)("button",{onClick:l,children:"Send"})]})},k=n(18),y=n.n(k),C=function(e){switch(e){case"high":return"green";case"middle":return"blue";case"low":return"red"}};var N=function(e){return Object(b.jsxs)("div",{className:y.a.affair,children:[Object(b.jsxs)("span",{children:[e.affair.name," "]}),Object(b.jsxs)("span",{style:{color:C(e.affair.priority)},className:y.a.affairPriority,children:["[",e.affair.priority,"]"]}),Object(b.jsx)("button",{className:y.a.deleteAffairButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var S=function(e){var t=e.data.map((function(t){return Object(b.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback,checkAffairPriority:e.setFilter},t._id)}));return Object(b.jsxs)("div",{className:y.a.rootBlock,children:[Object(b.jsx)("div",{className:y.a.affairs,children:t}),Object(b.jsxs)("div",{className:y.a.bf,children:[Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"Angular",priority:"middle"},{_id:6,name:"Vue",priority:"middle"},{_id:7,name:"NodeJS",priority:"high"},{_id:8,name:"Java",priority:"middle"},{_id:9,name:"Swift",priority:"middle"}];var T=function(){var e=Object(a.useState)(w),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(j.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},I=n(104),E=n(31),R=n.n(E),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c.length>0?R.a.error:R.a.input;return Object(b.jsxs)("div",{className:R.a.someClass,children:[Object(b.jsx)("input",{value:t,onChange:n,className:s}),Object(b.jsx)("button",{disabled:!t,onClick:a,children:"add"}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("div",{children:c})]})},H=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(j.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],O=t.length;return Object(b.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u&&d("")):(d("name is required"),i(""))},addUser:function(){t.push({_id:Object(I.a)(),name:s}),n(s),alert("Hello ".concat(s," !")),i("")},error:u,totalUsers:O})};var L=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(H,{users:n,addUserCallback:function(e){c(Object(m.a)(n)),console.log(n)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},J=n(10),P=n(19),F=n.n(P),W=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(F.a.input," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(b.jsxs)("div",{className:F.a.inputWrap,children:[Object(b.jsxs)("label",{htmlFor:"name",children:[Object(b.jsx)("input",Object(x.a)({type:"text",autoComplete:"off",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l,name:"name",id:"name"},o)),Object(b.jsx)("span",{className:""===o.value?F.a.placeHolder:F.a.hidePlaceHolder,children:"Type here"})]}),r&&Object(b.jsx)("span",{className:j,children:r})]})},U=n(37),B=n.n(U),D=n(38),M=n.n(D),G=function(e){var t=e.red,n=e.className,a=Object(J.a)(e,["red","className"]),c="".concat(t?M.a.red:M.a.default," ").concat(n);return Object(b.jsx)("button",Object(x.a)({className:c},a))},K=n(39),z=n.n(K),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(x.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},r)),c&&Object(b.jsx)("span",{className:z.a.spanClassName,children:c})]})};var q=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:B.a.column,children:[Object(b.jsx)(W,{value:n,onChangeText:c,onEnter:s,error:r}),Object(b.jsx)(W,{className:B.a.blue}),Object(b.jsx)(G,{children:"default"}),Object(b.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(G,{disabled:!0,children:"disabled"}),Object(b.jsx)(X,{checked:l,onChangeChecked:u,children:"some text "}),Object(b.jsx)(X,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(56),V=n.n(Z),Q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=c||{},d=u.children,O=u.onDoubleClick,h=u.className,m=Object(J.a)(u,["children","onDoubleClick","className"]),p="".concat(V.a.span," ").concat(h||"");return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(W,Object(x.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(b.jsxs)("span",Object(x.a)(Object(x.a)({onDoubleClick:function(e){l(!0),O&&O(e)},className:p},m),{},{children:[Object(b.jsx)("img",{src:"https://img.icons8.com/material-sharp/24/000000/edit--v3.png"}),d||r.value]}))})};function Y(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function $(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}Y("test",{x:"A",y:1});$("test",{x:"",y:0});var ee=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{style:{marginLeft:"20px"},children:Object(b.jsx)(Q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"double click to enter text..."}})}),Object(b.jsx)(G,{onClick:function(){Y("editable-span-value",n)},children:"save"}),Object(b.jsx)(G,{onClick:function(){c($("editable-span-value",""))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(T,{}),Object(b.jsx)(L,{}),Object(b.jsx)(q,{}),Object(b.jsx)(ee,{})]})},ne=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(m.a)(e.sort((function(e,t){return e.name>t.name?1:-1}))):"down"===t.payload?Object(m.a)(e.sort((function(e,t){return e.name<t.name?1:-1}))):e;case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},ae=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ce=function(){var e=Object(a.useState)(ae),t=Object(j.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"340px"},children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{children:e.age})]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",r,Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(G,{onClick:function(){return c(ne(ae,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{onClick:function(){return c(ne(ae,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{onClick:function(){return c(ne(ae,{type:"check",payload:18}))},children:"check 18+"})})]})]})},re=n(57),se=n.n(re),ie=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(J.a)(e,["options","onChange","onChangeOption"]),r=t?null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsx)("option",{className:se.a.selectOption,value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(x.a)(Object(x.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},oe=n(40),je=n.n(oe),le=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(J.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{className:je.a.label,children:[Object(b.jsx)("input",{className:je.a.inputRadio,type:"radio",name:t,checked:e===a,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},ue=["x","y","z"];var de=function(){var e=Object(a.useState)(ue[0]),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ie,{options:ue,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(le,{name:"radio",options:ue,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var be=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),u=Object(j.a)(l,2),d=u[0],O=u[1],h=function(){clearInterval(n)},x=null===i||void 0===i?void 0:i.toLocaleTimeString(),m=new Intl.DateTimeFormat("en",{year:"numeric"}).format(i),p=new Intl.DateTimeFormat("en",{month:"short"}).format(i),f=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(i),v="".concat(f,"-").concat(p,"-").concat(m);return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{onMouseEnter:function(){O(!d)},onMouseLeave:function(){O(!1)},children:x}),Object(b.jsx)("div",{style:d?{visibility:"visible"}:{visibility:"hidden"},children:v}),Object(b.jsx)(G,{onClick:function(){h();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(b.jsx)(G,{onClick:h,children:"stop"})]})};var Oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(be,{}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},he=n(17),xe={isLoading:!1},me=function(e){return{type:"SET-LOADING",loading:e}},pe=n(58),fe=n.n(pe);var ve=function(){var e=Object(he.b)(),t=Object(he.c)((function(e){return e.loading.isLoading}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",t?Object(b.jsxs)("div",{className:fe.a.loadingCircle,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]}):Object(b.jsx)("div",{children:Object(b.jsx)(G,{onClick:function(){e(me(!0)),setTimeout((function(){return e(me(!1))}),2e3)},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},_e=n(103),ge=function(e){e.type,e.onChange;var t=e.onChangeRange,n=(e.className,Object(J.a)(e,["type","onChange","onChangeRange","className"]));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_e.a,{style:{width:"300px",marginLeft:"30px"},size:"small",value:n.value,step:1,onChange:function(e,n){t(n)}})})},ke=function(e){var t=e.onChangeRange,n=e.value;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(_e.a,{size:"small",step:1,style:{width:"300px",marginLeft:"30px"},value:n,onChange:function(e,n){t(n)}})})};var ye=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],s=c.a.useState([n,100]),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)("span",{style:{position:"absolute"},children:n}),Object(b.jsx)(ge,{onChangeRange:r,value:n})]}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)("span",{style:{position:"absolute"},children:n}),Object(b.jsx)(ke,{value:[n,o[1]],onChangeRange:function(e){l(e)}}),Object(b.jsx)("span",{style:{paddingLeft:"10px"},children:o[1]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Ce=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(de,{}),Object(b.jsx)(ce,{}),Object(b.jsx)(Oe,{}),Object(b.jsx)(ve,{}),Object(b.jsx)(ye,{})]})},Ne=n(41),Se=n.n(Ne),we={theme:"red"},Te=["dark","red","some"];var Ie=function(){var e=Object(he.b)(),t=Object(he.c)((function(e){return e.theme}));return Object(b.jsxs)("div",{className:Se.a[t.theme],children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:Se.a[t.theme+"-text"],children:"homeworks 12"}),Object(b.jsx)(ie,{options:Te,value:t.theme,onChange:function(t){e(function(e){return{type:"TOGGLE-THEME",theme:e}}(t.currentTarget.value))}}),Object(b.jsx)("hr",{})]})},Ee=n(59),Re=n.n(Ee).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ae=function(e){return Re.post("/auth/test",{success:e})};var He=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(""),u=Object(j.a)(l,2),d=u[0],O=u[1];return Object(a.useEffect)((function(){Ae(n).then((function(e){o(JSON.stringify(e.data))})).catch((function(e){O(JSON.stringify(e.response))}))}),[n]),Object(b.jsxs)("div",{children:["Request component",Object(b.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){c(e.currentTarget.checked)}}),n?Object(b.jsxs)("div",{children:["Response - ",i]}):Object(b.jsxs)("div",{children:["Error - ",d]})]})};var Le=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("hr",{}),"homeworks 13",Object(b.jsx)("div",{children:Object(b.jsx)(He,{})}),Object(b.jsx)("hr",{})]})};var Je=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Ie,{}),Object(b.jsx)(Le,{})]})},Pe=n(32),Fe=n.n(Pe);var We=function(){var e={textDecoration:"none",color:"inherit"},t={background:"-webkit-linear-gradient(#11998e, #38ef7d)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","border-bottom":"1px solid #38ef7d"};return Object(b.jsxs)("div",{className:Fe.a.Wrap,children:[Object(b.jsxs)("ul",{className:Fe.a.navlinks,children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:Ue.PRE_JUNIOR,children:"Pre Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:Ue.JUNIOR,children:"Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{style:e,activeStyle:t,to:Ue.JUNIOR_PLUS,children:"Junior +"})})]}),Object(b.jsx)("div",{className:Fe.a.navigationItem,children:"Navigation"})]})},Ue={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"/junior-plus"};var Be=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(h.g)().pathname;return Object(a.useEffect)((function(){c(Object.values(Ue).includes(r))}),[r]),Object(b.jsxs)(b.Fragment,{children:[n&&Object(b.jsx)(We,{}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(h.a,{to:Ue.PRE_JUNIOR})}}),Object(b.jsx)(h.b,{path:Ue.PRE_JUNIOR,render:function(){return Object(b.jsx)(te,{})}}),Object(b.jsx)(h.b,{path:Ue.JUNIOR,render:function(){return Object(b.jsx)(Ce,{})}}),Object(b.jsx)(h.b,{path:Ue.JUNIOR_PLUS,render:function(){return Object(b.jsx)(Je,{})}}),Object(b.jsx)(h.b,{render:function(){return Object(b.jsx)(O,{})}})]})]})};var De=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(l.a,{children:Object(b.jsx)(Be,{})})})};var Me=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(De,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=n(42),Ke=Object(Ge.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(x.a)(Object(x.a)({},e),{},{isLoading:t.loading});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE-THEME":return Object(x.a)(Object(x.a)({},e),{},{theme:t.theme});default:return e}}}),ze=Object(Ge.b)(Ke),Xe=ze;window.store=ze,s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(he.a,{store:Xe,children:Object(b.jsx)(Me,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[94,1,2]]]);
//# sourceMappingURL=main.6053c1d5.chunk.js.map