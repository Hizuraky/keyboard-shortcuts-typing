(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(1047)}])},2856:function(r,e,n){"use strict";var t=n(5893),o=n(2630),i=n(1163);e.Z=function(r){var e=r.text,n=r.type,a=void 0===n?"contained":n,c=r.width,u=void 0===c?"200px":c,s=r.onClick,l=r.disable,d=void 0!==l&&l,f=(0,i.useRouter)(),p="contained"===a?{width:u,backgroundColor:"#1C73BD",borderRadius:"10px",boxShadow:"none","&:hover":{backgroundColor:"#065DA6",boxShadow:"none"},"&:active":{backgroundColor:"#065DA6",boxShadow:"none"},"&:focus":{backgroundColor:"#065DA6",boxShadow:"none"}}:{width:u,fontWeight:"bold",backgroundColor:"rgba(255,255,255,0.5)",border:"3px solid",borderColor:"#1C73BD",color:"#1C73BD",borderRadius:"10px","&:hover":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"},"&:active":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"},"&:focus":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"}};return(0,t.jsx)(o.Z,{sx:p,variant:"contained"===a?"contained":"outlined",color:"primary",onClick:"back"===a?function(){return f.back()}:s,disabled:d,children:e||"\u623b\u308b"})}},4443:function(r,e,n){"use strict";var t=n(5893),o=n(162);function i(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function a(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){i(r,e,n[e])}))}return r}e.Z=function(r){var e,n,i=r.errors,c=r.schema,u=r.register,s=r.label,l=r.defaultValue;return(0,t.jsxs)("div",{className:"border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full h-[90px]",children:[(0,t.jsxs)("div",{className:"border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col",children:[(0,t.jsx)("p",{children:s}),(0,t.jsx)("p",{className:"text-xs",children:"name"===c&&"(\u4ed6\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059)"})]}),(0,t.jsx)(o.Z,a({id:"filled-error-helper-text",label:"".concat(s,"\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),variant:"filled"},u(c),{error:null===(e=i[c])||void 0===e?void 0:e.message,helperText:null===(n=i[c])||void 0===n?void 0:n.message,sx:{width:"70%",padding:"5px"},defaultValue:l,type:c.indexOf("pass")>-1?"password":"text"}))]})}},2739:function(r,e,n){"use strict";var t=n(4051),o=n.n(t),i=n(5893),a=n(7536),c=n(5496),u=n(1163),s=n(4931),l=n(4443),d=n(2856),f=n(8111),p=n(4010),h=n(2148);function v(r,e,n,t,o,i,a){try{var c=r[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function b(r){return function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function a(r){v(i,t,o,a,c,"next",r)}function c(r){v(i,t,o,a,c,"throw",r)}a(void 0)}))}}function m(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function x(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){m(r,e,n[e])}))}return r}e.Z=function(r){var e=r.viewPage,n=(0,u.useRouter)(),t=(0,f.qD)().setUser,v=(0,p.a)().login,m=(0,a.cI)({resolver:(0,c.X)(h.pj)}),g=m.register,w=m.handleSubmit,y=m.formState.errors,j=function(){var r=b(o().mark((function r(i){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=function(){var r=b(o().mark((function r(i){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t(x({},i));case 2:s.ZP.success("\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\u3002"),"loginPage"===e&&n.push("/user");case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v({email:i.email,password:i.password,callback:a});case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{className:"flex flex-col justify-center items-center w-full bg-white p-10",children:["boundary"===e&&(0,i.jsx)("div",{className:"flex flex-col items-center justify-center mt-10",children:(0,i.jsx)("p",{className:"text-red-500",children:"\u30ed\u30b0\u30a4\u30f3\u671f\u9650\u304c\u5207\u308c\u307e\u3057\u305f\u3002\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),(0,i.jsx)("h2",{children:"\u30ed\u30b0\u30a4\u30f3"}),(0,i.jsx)("div",{className:"w-4/5 my-5",children:(0,i.jsx)(l.Z,{register:g,errors:y,schema:"email",label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"})}),(0,i.jsx)("div",{className:"w-4/5 mb-10",children:(0,i.jsx)(l.Z,{register:g,errors:y,schema:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9"})}),(0,i.jsx)(d.Z,{onClick:w(j),text:"\u30ed\u30b0\u30a4\u30f3"})]}),"loginPage"===e&&(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center mt-10",children:[(0,i.jsx)("h4",{children:"\u4f1a\u54e1\u767b\u9332\u306f\u3053\u3061\u3089\u304b\u3089"}),(0,i.jsx)(d.Z,{onClick:function(){return n.push("/register")},text:"\u4f1a\u54e1\u767b\u9332",type:"outlined"})]}),(0,i.jsx)(s.x7,{position:"bottom-center"})]})}},5163:function(r,e,n){"use strict";n.d(e,{EP:function(){return u},bf:function(){return s},VZ:function(){return l},Tn:function(){return d}});var t=n(4051),o=n.n(t),i=n(9669),a=n.n(i)().create({baseURL:"https://api.ks-typing.tk/",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},responseType:"json",timeout:15e3,withCredentials:!0});function c(r,e,n,t,o,i,a){try{var c=r[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(t,o)}var u={apps:function(){return"/api/app"},bestScore:function(r){return"/api/app/".concat(r)},appScore:function(r){return"/api/app/".concat(r,"/score")},appRanking:function(r){return"/api/app/".concat(r,"/ranking")},login:function(){return"/api/auth/login"},logout:function(){return"/api/auth/logout"},auth:function(){return"/api/auth/email"},register:function(){return"/api/user/register"},profile:function(r){return"/api/user/".concat(r)},userEdit:function(){return"/api/user/edit"},top:function(){return"/api/user"},notification:function(){return"/api/notification"},titles:function(){return"/api/user/titles"},sanctum:function(){return"/sanctum/csrf-cookie"}},s=function(){var r,e=(r=o().mark((function r(e){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a.get(e).then((function(r){return r})).catch((function(r){throw(null===r||void 0===r?void 0:r.message.startsWith("Network Error"))&&(r.response={message:"Network Error"}),r.response})));case 1:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,o){var i=r.apply(e,n);function a(r){c(i,t,o,a,u,"next",r)}function u(r){c(i,t,o,a,u,"throw",r)}a(void 0)}))});return function(r){return e.apply(this,arguments)}}(),l=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.post(r,JSON.stringify(e)).then((function(r){return{data:r.data,err:void 0}})).catch((function(r){return{data:null,err:r.response}}))},d=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.put(r,e).then((function(r){return{data:r,err:void 0}})).catch((function(r){return{data:void 0,err:r.response}}))}},4010:function(r,e,n){"use strict";n.d(e,{a:function(){return s}});var t=n(4051),o=n.n(t),i=n(4931),a=n(5163),c=n(8111);function u(r,e,n,t,o,i,a){try{var c=r[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(t,o)}var s=function(){var r=(0,c.Cm)().setLoading,e=(0,c.qD)().setUser,n=function(){var e,n=(e=o().mark((function e(n){var t,c,u,s,l,d,f,p,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.email,c=n.password,u=n.callback,r(!0),e.next=6,(0,a.bf)(a.EP.sanctum());case 6:return d={email:t,password:c},e.next=9,(0,a.VZ)(a.EP.login(),d);case 9:if(f=e.sent,p=f.data,h=f.err,l=h,!(s=p)||l){e.next=18;break}return u&&u(s),r(!1),e.abrupt("return");case 18:r(!1),i.ZP.error(h.data.message);case 20:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(r){u(i,t,o,a,c,"next",r)}function c(r){u(i,t,o,a,c,"throw",r)}a(void 0)}))});return function(r){return n.apply(this,arguments)}}();return{login:n,logout:function(){e(void 0),(0,a.VZ)(a.EP.logout())}}}},1047:function(r,e,n){"use strict";n.r(e);var t=n(5893),o=n(2739);e.default=function(){return(0,t.jsx)(o.Z,{viewPage:"loginPage"})}},2148:function(r,e,n){"use strict";n.d(e,{pj:function(){return u},Tu:function(){return s},CG:function(){return l}});var t=n(4231),o="\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002",i="\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",a="\u6b63\u3057\u3044\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",c="\u82f1\u5b57\u3068\u6570\u5b57\u3092\u542b\u3081\u305f8-24\u6587\u5b57\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",u=t.Ry().shape({email:t.Z_().email(a).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(o)),password:t.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(o))}),s=t.Ry().shape({email:t.Z_().email(a).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(o)),password:t.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(o)),passConfirm:t.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(o)).oneOf([t.iH("password")],"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002"),name:t.Z_().max(20,"20\u6587\u5b57".concat(i)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(o))}),l=t.Ry().shape({icon:t.nK(),name:t.Z_().max(20,"20\u6587\u5b57".concat(i)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(o))})}},function(r){r.O(0,[630,931,669,715,53,774,888,179],(function(){return e=7237,r(r.s=e);var e}));var e=r.O();_N_E=e}]);