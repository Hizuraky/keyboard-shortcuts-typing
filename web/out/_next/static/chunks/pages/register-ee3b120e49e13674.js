(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{2072:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return o(5217)}])},2856:function(e,r,o){"use strict";var n=o(5893),t=o(2630),a=o(1163);r.Z=function(e){var r=e.text,o=e.type,i=void 0===o?"contained":o,c=e.width,s=void 0===c?"200px":c,l=e.onClick,d=e.disable,u=void 0!==d&&d,f=(0,a.useRouter)(),b="contained"===i?{width:s,backgroundColor:"#1C73BD",borderRadius:"10px",boxShadow:"none","&:hover":{backgroundColor:"#065DA6",boxShadow:"none"},"&:active":{backgroundColor:"#065DA6",boxShadow:"none"},"&:focus":{backgroundColor:"#065DA6",boxShadow:"none"}}:{width:s,fontWeight:"bold",backgroundColor:"rgba(255,255,255,0.5)",border:"3px solid",borderColor:"#1C73BD",color:"#1C73BD",borderRadius:"10px","&:hover":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"},"&:active":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"},"&:focus":{backgroundColor:"rgba(200,200,200,0.2)",border:"3px solid",borderColor:"#065DA6",color:"#065DA6"}};return(0,n.jsx)(t.Z,{sx:b,variant:"contained"===i?"contained":"outlined",color:"primary",onClick:"back"===i?function(){return f.back()}:l,disabled:u,children:r||"\u623b\u308b"})}},4443:function(e,r,o){"use strict";var n=o(5893),t=o(162);function a(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){a(e,r,o[r])}))}return e}r.Z=function(e){var r,o,a=e.errors,c=e.schema,s=e.register,l=e.label,d=e.defaultValue;return(0,n.jsxs)("div",{className:"border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full h-[90px]",children:[(0,n.jsxs)("div",{className:"border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col",children:[(0,n.jsx)("p",{children:l}),(0,n.jsx)("p",{className:"text-xs",children:"name"===c&&"(\u4ed6\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059)"})]}),(0,n.jsx)(t.Z,i({id:"filled-error-helper-text",label:"".concat(l,"\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),variant:"filled"},s(c),{error:null===(r=a[c])||void 0===r?void 0:r.message,helperText:null===(o=a[c])||void 0===o?void 0:o.message,sx:{width:"70%",padding:"5px"},defaultValue:d,type:c.indexOf("pass")>-1?"password":"text"}))]})}},5217:function(e,r,o){"use strict";o.r(r);var n=o(4051),t=o.n(n),a=o(5893),i=o(7536),c=o(5496),s=o(1163),l=o(2856),d=o(4443),u=o(8111),f=o(2148);function b(e,r,o,n,t,a,i){try{var c=e[a](i),s=c.value}catch(l){return void o(l)}c.done?r(s):Promise.resolve(s).then(n,t)}function m(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){m(e,r,o[r])}))}return e}r.default=function(){var e,r,o,n,m=(0,s.useRouter)(),h=(0,u.JJ)(),x=h.params,v=h.setParams,w=(0,i.cI)({resolver:(0,c.X)(f.Tu)}),g=w.register,y=w.handleSubmit,j=w.formState.errors,C=function(){var e,r=(e=t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(p({},r)),m.push("/register/confirm");case 2:case"end":return e.stop()}}),e)})),function(){var r=this,o=arguments;return new Promise((function(n,t){var a=e.apply(r,o);function i(e){b(a,n,t,i,c,"next",e)}function c(e){b(a,n,t,i,c,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsxs)("form",{className:"flex flex-col justify-center items-center w-full bg-white p-10",children:[(0,a.jsx)("h2",{className:"mb-5",children:"\u4f1a\u54e1\u767b\u9332"}),(0,a.jsx)("p",{children:"\u3054\u5165\u529b\u3055\u308c\u305f\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u8a8d\u8a3c\u30b3\u30fc\u30c9\u304c\u9001\u4fe1\u3055\u308c\u307e\u3059\u3002"}),(0,a.jsx)("div",{className:"w-4/5 my-5",children:(0,a.jsx)(d.Z,{register:g,errors:j,schema:"email",label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",defaultValue:(null===(e=m.query)||void 0===e?void 0:e.edit)&&x.email})}),(0,a.jsx)("div",{className:"w-4/5 mb-5",children:(0,a.jsx)(d.Z,{register:g,errors:j,schema:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",defaultValue:(null===(r=m.query)||void 0===r?void 0:r.edit)&&x.password})}),(0,a.jsx)("div",{className:"w-4/5 mb-5",children:(0,a.jsx)(d.Z,{register:g,errors:j,schema:"passConfirm",label:"\u30d1\u30b9\u30ef\u30fc\u30c9(\u78ba\u8a8d)",defaultValue:(null===(o=m.query)||void 0===o?void 0:o.edit)&&x.password})}),(0,a.jsx)("div",{className:"w-4/5 mb-10",children:(0,a.jsx)(d.Z,{register:g,errors:j,schema:"name",label:"\u30e6\u30fc\u30b6\u30fc\u540d",defaultValue:(null===(n=m.query)||void 0===n?void 0:n.edit)&&x.name})}),(0,a.jsx)(l.Z,{onClick:y(C),text:"\u767b\u9332\u78ba\u8a8d"})]}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center mt-10",children:(0,a.jsx)(l.Z,{type:"back"})})]})}},2148:function(e,r,o){"use strict";o.d(r,{pj:function(){return s},Tu:function(){return l},CG:function(){return d}});var n=o(4231),t="\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002",a="\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",i="\u6b63\u3057\u3044\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",c="\u82f1\u5b57\u3068\u6570\u5b57\u3092\u542b\u3081\u305f8-24\u6587\u5b57\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",s=n.Ry().shape({email:n.Z_().email(i).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(t)),password:n.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(t))}),l=n.Ry().shape({email:n.Z_().email(i).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(t)),password:n.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(t)),passConfirm:n.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(t)).oneOf([n.iH("password")],"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002"),name:n.Z_().max(20,"20\u6587\u5b57".concat(a)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(t))}),d=n.Ry().shape({icon:n.nK(),name:n.Z_().max(20,"20\u6587\u5b57".concat(a)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(t))})}},function(e){e.O(0,[630,715,53,774,888,179],(function(){return r=2072,e(e.s=r);var r}));var r=e.O();_N_E=r}]);