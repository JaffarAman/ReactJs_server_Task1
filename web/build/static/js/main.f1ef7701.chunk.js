(this.webpackJsonplearningreact=this.webpackJsonplearningreact||[]).push([[0],{154:function(e,s,a){},155:function(e,s,a){},278:function(e,s,a){},279:function(e,s,a){},281:function(e,s,a){"use strict";a.r(s);var t=a(0),c=a.n(t),n=a(45),r=a.n(n),i=(a(154),a(9)),l=(a(155),a.p+"static/media/signUP.eaeca0fe.svg"),o=a(91),d=a(140),j=a(332),m=a(328),b=a(329),u=a(39),O=a(1),h=["label","type"],x=Object(b.a)({box:{width:"100%",margin:"10px 0"},input:{width:"100%"},small:{color:"red",fontSize:"10px"}});function p(e){var s=e.label,a=e.type,t=Object(d.a)(e,h),c=Object(u.d)(t),n=Object(i.a)(c,2),r=n[0],l=(n[1],x());return Object(O.jsxs)(j.a,{className:l.box,component:"form",noValidate:!0,autoComplete:"off",children:[Object(O.jsx)(m.a,Object(o.a)(Object(o.a)({type:a,className:l.input},r),{},{label:s,variant:"standard"})),Object(O.jsx)(u.a,{className:l.small,name:r.name,component:"small"})]})}var f=a(327),g=a(330);function w(e){var s=e.value,a=e.addFun;return Object(O.jsx)(f.a,{spacing:2,direction:"row",children:Object(O.jsx)(g.a,{style:{width:"100%",backgroundColor:"#09DEEA"},type:"submit",variant:"contained",onClick:a?function(){return a()}:null,children:!0===s?Object(O.jsx)("div",{className:"spinner-border",role:"status",children:Object(O.jsx)("span",{className:"sr-only",children:"Loading..."})}):s})})}var v=a(32),N=a(19),A=a(50),y=a(73),S=a.n(y),P="localhost"===window.location.hostname.split(":")?"http://localhost:5000":"",q=function(){var e=Object(t.useState)(!1),s=Object(i.a)(e,2),a=s[0],c=s[1],n=Object(t.useState)(!1),r=Object(i.a)(n,2),o=r[0],d=r[1],j=Object(t.useState)("errorBOx"),m=Object(i.a)(j,2),b=m[0],h=m[1],x=v.a({firstName:v.c().max(15,"Must be 15 characters or less").required("Required"),lastName:v.c().max(15,"Must be 15 characters or less").required("Required"),emailAddress:v.c().email("Enter a valid Email").required("Required"),password:v.c().min(6,"Password should be of minimum 8 characters length").required("Required"),confirmPassword:v.c().oneOf([v.b("password"),null],"Password Must be Match").required("Required")}),f=Object(N.f)(),g=function(){f.replace("/")};return Object(O.jsxs)("div",{className:"signUpBox",children:[Object(O.jsx)("h3",{className:b,children:"Email Address is Already Exist"}),Object(O.jsx)("div",{className:"signUpImg",children:Object(O.jsx)("img",{src:l,width:"100%",alt:""})}),Object(O.jsxs)("div",{className:"upFOrmBOx",children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)("span",{children:" Sign Up "})," Form"]}),Object(O.jsx)(u.c,{initialValues:{firstName:"",lastName:"",emailAddress:"",password:"",confirmPassword:""},onSubmit:function(e){return function(e){c(!0),S.a.post("".concat(P,"/api/v1/signup"),{firstName:e.firstName,lastName:e.lastName,emailAddress:e.emailAddress,password:e.password,confirmPassword:e.confirmPassword}).then((function(e){console.log(e.data),c(!1),"This Email Address is Already Exist"===e.data?(console.log(e.data),h("errorBOx show"),setTimeout((function(){h("errorBOx")}),3e3)):d(!0)})).catch((function(e){console.log(e),c(!1)})),console.log(e.firstName)}(e)},validationSchema:x,children:function(e){return Object(O.jsxs)(u.b,{children:[Object(O.jsx)(p,{label:"First Name",type:"text",name:"firstName"}),Object(O.jsx)(p,{label:"Last Name",type:"text",name:"lastName"}),Object(O.jsx)(p,{label:"Email Address",type:"text",name:"emailAddress"}),Object(O.jsx)(p,{label:"Password",type:"password",name:"password"}),Object(O.jsx)(p,{label:"Confirm Password",type:"password",name:"confirmPassword"}),Object(O.jsx)(A.b,{to:"/",children:Object(O.jsx)("small",{children:"Already have an Account? Sign In "})}),o?Object(O.jsx)(w,{addFun:g,value:"User Succesfully Signup"}):Object(O.jsx)(w,{value:!!a||"Sign Up"})]})}})]})]})},E=(a(278),a(279),a.p+"static/media/logIn.701cdcf3.svg"),B=function(){var e=Object(t.useState)(!1),s=Object(i.a)(e,2),a=s[0],c=s[1],n=Object(t.useState)(null),r=Object(i.a)(n,2),l=r[0],o=r[1],d=Object(t.useState)("errorBOx"),j=Object(i.a)(d,2),m=j[0],b=j[1],h=Object(N.f)(),x=v.a({emailAddress:v.c().required("Required").email("Enter a valid Email"),password:v.c().required("Required").min(6,"Password should be of minimum 8 characters length")});return Object(O.jsxs)("div",{className:"loginBox",children:[Object(O.jsx)("h3",{className:m,children:l}),Object(O.jsx)("div",{className:"LoginPic",children:Object(O.jsx)("img",{src:E,width:"100%",alt:""})}),Object(O.jsxs)("div",{className:"loginForm",children:[Object(O.jsx)("h2",{children:"Hello,"}),Object(O.jsx)("h2",{children:"Welcome Back"}),Object(O.jsx)(u.c,{initialValues:{emailAddress:"",password:""},onSubmit:function(e){return function(e){c(!0),S.a.post("".concat(P,"/api/v1/signin"),{emailAddress:e.emailAddress,password:e.password}).then((function(e){console.log(e),c(!1),"login successfully"==e.data?h.replace("/dashboard"):(o(e.data),b("errorBOx show"),setTimeout((function(){b("errorBOx")}),3e3))})).catch((function(e){return console.log(e)}))}(e)},validationSchema:x,children:function(e){return Object(O.jsxs)(u.b,{children:[Object(O.jsx)(p,{label:"User Email Address",type:"email",name:"emailAddress"}),Object(O.jsx)(p,{label:"Password",type:"password",name:"password"}),Object(O.jsx)("small",{className:"forgetDiv",children:"Forget Password?"}),Object(O.jsx)(w,{value:!!a||"Login"})]})}}),Object(O.jsx)(A.b,{to:"signup",children:Object(O.jsx)("small",{className:"notAcc",children:"Don't have An Account? Click Here"})})]})]})},F=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Dashboard Screen"})})},C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(A.a,{children:Object(O.jsxs)(N.c,{children:[Object(O.jsx)(N.a,{path:"/signup",component:q}),Object(O.jsx)(N.a,{exact:!0,path:"/",component:B}),Object(O.jsx)(N.a,{exact:!0,path:"/dashboard",component:F})]})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,333)).then((function(s){var a=s.getCLS,t=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;a(e),t(e),c(e),n(e),r(e)}))};a(280);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),R()}},[[281,1,2]]]);
//# sourceMappingURL=main.f1ef7701.chunk.js.map