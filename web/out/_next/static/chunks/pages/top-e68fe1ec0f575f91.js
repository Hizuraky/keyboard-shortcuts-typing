(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{8563:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/top",function(){return t(1164)}])},6845:function(e,s,t){"use strict";var r=t(5893),n=t(1163),l=t(5797),i=t(9325),c=t(2856),a=t(8111);s.Z=function(e){var s=e.data,t=e.type,o=e.index,d=(0,n.useRouter)(),u=(0,a.JJ)().setParams,x="#939393]",f="text-black font-bold";switch(o){case 1:x="bg-gradient-to-b from-[#d6c25b] to-[#f7eaa9]";break;case 2:x="bg-gradient-to-b from-[#b1b1b1] to-[#e9e9e9]";break;case 3:x="bg-gradient-to-b from-[#e2be9c] to-[#fae1c9]";break;default:x="bg-gradient-to-b from-[#686868] to-[#acacac]",f="text-white font-bold"}var m=function(e){var t,n,c=e.type;return(0,r.jsxs)("div",{className:"flex justify-between ml-20 w-[50%] my-1",children:[(0,r.jsxs)("span",{className:"flex items-center",children:["challenger"===c&&(0,r.jsx)(l.I$,{size:20}),"questions"===c&&(0,r.jsx)(i.RJT,{size:20}),"score"===c&&s.hasOwnProperty("bestScore")&&(0,r.jsx)(l.NMh,{size:20}),(0,r.jsxs)("p",{className:"ml-2",children:["challenger"===c&&"\u6311\u6226\u8005","questions"===c&&"\u767b\u9332\u554f\u984c\u6570","score"===c&&s.hasOwnProperty("bestScore")&&"\u30d9\u30b9\u30c8\u30b9\u30b3\u30a2"]})]}),(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsxs)("p",{className:"text-lg font-bold mr-1",children:["challenger"===c&&(null===(t=s.challenger)||void 0===t?void 0:t.length),"questions"===c&&(null===(n=s.questions)||void 0===n?void 0:n.length),"score"===c&&s.hasOwnProperty("bestScore")&&s.bestScore.toLocaleString()]}),"challenger"===c&&"\u4eba","questions"===c&&"\u554f","score"===c&&s.hasOwnProperty("bestScore")&&"\u70b9"]})]})};return(0,r.jsxs)("div",{className:"bg-white flex items-center w-full px-[5%] py-6 relative mb-8 rounded-md shadow-md ",children:[o&&"list"!==t&&(0,r.jsx)("div",{className:"absolute top-[-10px] left-[-10px] h-10 w-10 flex items-center justify-center rounded-full "+"".concat(x),children:(0,r.jsx)("p",{className:"text-lg "+f,children:o})}),(0,r.jsx)("img",{src:s.icon,className:"w-[150px]"}),(0,r.jsxs)("div",{className:"w-full h-full flex flex-col justify-between",children:[(0,r.jsx)("p",{className:"font-bold text-xl ml-14",children:s.name}),(0,r.jsx)(m,{type:"challenger"}),(0,r.jsx)(m,{type:"questions"}),(0,r.jsx)(m,{type:"score"})]}),(0,r.jsxs)("div",{className:"flex flex-col items-end h-32 justify-between pt-6",children:[(0,r.jsx)(c.Z,{text:"\u30b2\u30fc\u30e0\u30d7\u30ec\u30a4",onClick:function(){u({game:s}),d.push("/apps/".concat(s.id))}}),(0,r.jsx)(c.Z,{type:"outlined",text:"\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u4e00\u89a7",onClick:function(){u({app:s}),d.push("/list/".concat(s.id))}})]})]},s.id)}},4443:function(e,s,t){"use strict";var r=t(5893),n=t(162);function l(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function i(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(s){l(e,s,t[s])}))}return e}s.Z=function(e){var s,t,l=e.errors,c=e.schema,a=e.register,o=e.label,d=e.defaultValue;return(0,r.jsxs)("div",{className:"border-[1px] border-solid border-gray-400 flex items-center rounded-md w-full h-[90px]",children:[(0,r.jsxs)("div",{className:"border-r-[1px] border-solid border-gray-400 border-t-0 w-[30%] h-full border-b-0 border-l-0 flex items-center justify-center text-gray-600 flex-col",children:[(0,r.jsx)("p",{children:o}),(0,r.jsx)("p",{className:"text-xs",children:"name"===c&&"(\u4ed6\u30e6\u30fc\u30b6\u30fc\u306b\u8868\u793a\u3055\u308c\u307e\u3059)"})]}),(0,r.jsx)(n.Z,i({id:"filled-error-helper-text",label:"".concat(o,"\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044"),variant:"filled"},a(c),{error:null===(s=l[c])||void 0===s?void 0:s.message,helperText:null===(t=l[c])||void 0===t?void 0:t.message,sx:{width:"70%",padding:"5px"},defaultValue:d,type:c.indexOf("pass")>-1?"password":"text"}))]})}},9039:function(e,s,t){"use strict";var r=t(5893),n=(t(7294),t(2739)),l=function(e){var s;return(null===(s=e.message)||void 0===s?void 0:s.startsWith("Network Error"))?"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u63a5\u7d9a\u304c\u3042\u308a\u307e\u305b\u3093":400===e.status?"\u4e0d\u6b63\u306a\u30ea\u30af\u30a8\u30b9\u30c8\u3067\u3059":404===e.status?"\u30c7\u30fc\u30bf\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f":429===e.status?"\u4e00\u5b9a\u6642\u9593\u5185\u306b\u591a\u304f\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f":e.status>=500?"\u30b7\u30b9\u30c6\u30e0\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002":void 0};s.Z=function(e){var s=e.isLoading,t=e.error,i=e.children;return 401===(null===t||void 0===t?void 0:t.status)?(0,r.jsx)(n.Z,{viewPage:"boundary"}):t?(0,r.jsx)("p",{children:l(t)}):s?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)(r.Fragment,{children:i})}},2739:function(e,s,t){"use strict";var r=t(4051),n=t.n(r),l=t(5893),i=t(7536),c=t(5496),a=t(1163),o=t(4931),d=t(4443),u=t(2856),x=t(8111),f=t(4010),m=t(2148);function h(e,s,t,r,n,l,i){try{var c=e[l](i),a=c.value}catch(o){return void t(o)}c.done?s(a):Promise.resolve(a).then(r,n)}function j(e){return function(){var s=this,t=arguments;return new Promise((function(r,n){var l=e.apply(s,t);function i(e){h(l,r,n,i,c,"next",e)}function c(e){h(l,r,n,i,c,"throw",e)}i(void 0)}))}}function p(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function b(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(s){p(e,s,t[s])}))}return e}s.Z=function(e){var s=e.viewPage,t=(0,a.useRouter)(),r=(0,x.qD)().setUser,h=(0,f.a)().login,p=(0,i.cI)({resolver:(0,c.X)(m.pj)}),v=p.register,w=p.handleSubmit,y=p.formState.errors,g=function(){var e=j(n().mark((function e(l){var i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=function(){var e=j(n().mark((function e(l){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(b({},l));case 2:o.ZP.success("\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f\u3002"),"loginPage"===s&&t.push("/user");case 4:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),h({email:l.email,password:l.password,callback:i});case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{className:"flex flex-col justify-center items-center w-full bg-white p-10",children:["boundary"===s&&(0,l.jsx)("div",{className:"flex flex-col items-center justify-center mt-10",children:(0,l.jsx)("p",{className:"text-red-500",children:"\u30ed\u30b0\u30a4\u30f3\u671f\u9650\u304c\u5207\u308c\u307e\u3057\u305f\u3002\u518d\u5ea6\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),(0,l.jsx)("h2",{children:"\u30ed\u30b0\u30a4\u30f3"}),(0,l.jsx)("div",{className:"w-4/5 my-5",children:(0,l.jsx)(d.Z,{register:v,errors:y,schema:"email",label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"})}),(0,l.jsx)("div",{className:"w-4/5 mb-10",children:(0,l.jsx)(d.Z,{register:v,errors:y,schema:"password",label:"\u30d1\u30b9\u30ef\u30fc\u30c9"})}),(0,l.jsx)(u.Z,{onClick:w(g),text:"\u30ed\u30b0\u30a4\u30f3"})]}),"loginPage"===s&&(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center mt-10",children:[(0,l.jsx)("h4",{children:"\u4f1a\u54e1\u767b\u9332\u306f\u3053\u3061\u3089\u304b\u3089"}),(0,l.jsx)(u.Z,{onClick:function(){return t.push("/register")},text:"\u4f1a\u54e1\u767b\u9332",type:"outlined"})]}),(0,l.jsx)(o.x7,{position:"bottom-center"})]})}},1164:function(e,s,t){"use strict";t.r(s);var r=t(5893),n=t(1163),l=t(4931),i=t(7070),c=t(1298),a=t(6538),o=t(6517),d=t(9746),u=t(5797),x=t(2856),f=t(6845),m=t(9039),h=t(8111),j=t(2429),p=t(5163);s.default=function(){var e,s=(0,n.useRouter)(),t=(0,h.qD)().user,b=(0,j.YE)(t&&p.EP.top()),v=b.data,w=b.error,y=(0,j.YE)(p.EP.notification()),g=y.data,N=y.error,Z=t?v:g,O=t?w:N;return(0,j.Z6)({isLoading:!Z,error:O}),t?(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-around",children:[(0,r.jsxs)(m.Z,{error:w,isLoading:!v,children:[(0,r.jsxs)("div",{className:"bg-white w-full flex items-center justify-around px-10 flex-col py-5 rounded-md relative mb-14 shadow-md",children:[(0,r.jsxs)("div",{className:"flex items-center mb-4 ",children:[(0,r.jsx)("div",{className:"mr-2 flex items-center",children:(0,r.jsx)(c.X6i,{size:20})}),(0,r.jsx)("p",{className:"font-bold text-xl mr-7",children:"\u304a\u77e5\u3089\u305b"})]}),(0,r.jsx)("div",{className:"h-full flex flex-col justify-around w-full",children:null===v||void 0===v?void 0:v.notifications.map((function(e,s){return(0,r.jsxs)("p",{className:"my-2",children:["\u30fb",e.content]},s)}))})]}),(0,r.jsxs)("div",{className:"w-full flex justify-around flex-col relative mb-10",children:[(0,r.jsxs)("div",{className:"flex items-center my-4 ",children:[(0,r.jsx)("div",{className:"mr-2 flex items-center",children:(0,r.jsx)(i.n4u,{size:35,color:"red"})}),(0,r.jsx)("p",{className:"font-bold text-xl",children:"\u65b0\u7740\u30a2\u30d7\u30ea"})]}),null===v||void 0===v?void 0:v.newList.map((function(e){return(0,r.jsx)(f.Z,{data:e,type:"new"},e.id)}))]}),(0,r.jsxs)("div",{className:"w-full flex justify-around flex-col relative mb-10",children:[(0,r.jsxs)("div",{className:"flex items-center my-4 ",children:[(0,r.jsx)("div",{className:"mr-2 flex items-center",children:(0,r.jsx)(u.Op,{size:20})}),(0,r.jsx)("p",{className:"font-bold text-xl",children:"\u30d7\u30ec\u30a4\u5c65\u6b74"})]}),null===v||void 0===v?void 0:v.recordList.map((function(e){return(0,r.jsx)(f.Z,{data:e,type:"new"},e.id)})),0===(null===v||void 0===v||null===(e=v.recordList)||void 0===e?void 0:e.length)&&(0,r.jsx)("p",{children:"\u4eca\u9031\u306e\u30d7\u30ec\u30a4\u5c65\u6b74\u306f\u3042\u308a\u307e\u305b\u3093\u3002"})]})]}),(0,r.jsx)(l.x7,{position:"bottom-center"})]}):(0,r.jsxs)(m.Z,{error:N,isLoading:!g,children:[(0,r.jsxs)("div",{className:"w-full flex flex-col items-center justify-around",children:[(0,r.jsxs)("div",{className:"bg-[rgb(249,250,235)] w-full flex items-center justify-around px-10 h-64 shadow-md rounded-t-md",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-around h-4/5 w-1/2",children:[(0,r.jsxs)("p",{className:"font-bold text-lg",children:["\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30ad\u30fc\u3092\u5b66\u3079\u308b",(0,r.jsx)("br",{}),"\u30bf\u30a4\u30d4\u30f3\u30b0\u30b2\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9"]}),(0,r.jsx)("p",{className:"max-w-[450px]",children:"\u69d8\u3005\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30ad\u30fc\u30bf\u30a4\u30d4\u30f3\u30b0\u30b2\u30fc\u30e0\u3092\u884c\u3044\u3001\u5b66\u7fd2\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),(0,r.jsx)(x.Z,{type:"outlined",text:"\u30d7\u30ec\u30a4\u65b9\u6cd5",onClick:function(){s.push("/tutorial")}})]}),(0,r.jsx)("div",{className:"w-1/2 flex items-center justify-center pt-12",children:(0,r.jsx)(a.Q8A,{color:"#1C73BD",size:250})})]}),(0,r.jsxs)("div",{className:"bg-[#e8f1f8] w-full flex items-center justify-around px-10 h-64 shadow-md ",children:[(0,r.jsxs)("div",{className:"flex items-baseline w-1/2 justify-center",children:[(0,r.jsx)(d.R92,{color:"#F5E177",size:120,className:"mr-3"}),(0,r.jsx)(d.R92,{color:"#D4D4D4",size:100,className:"mr-3"}),(0,r.jsx)(d.R92,{color:"#EED3BA",size:80})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-around h-4/5 w-1/2",children:[(0,r.jsx)("p",{className:"font-bold text-lg",children:"\u4e16\u754c\u4e2d\u306e\u4eba\u3068\u7af6\u3048\u308b"}),(0,r.jsx)("p",{className:"text-center",children:"\u4f1a\u54e1\u767b\u9332\u3059\u308b\u3068\u3001\u30bf\u30a4\u30d4\u30f3\u30b0\u306e\u6b63\u7b54\u7387\u30fb\u30bf\u30a4\u30e0\u304b\u3089\u7b97\u51fa\u3057\u305f\u30b9\u30b3\u30a2\u306e\u4e16\u754c\u30e9\u30f3\u30ad\u30f3\u30b0\u304c\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"}),(0,r.jsx)("p",{className:"text-center",children:"\u307e\u305f\u3001\u7d2f\u8a08\u30b9\u30b3\u30a2\u306b\u5fdc\u3058\u3066\u30d7\u30ec\u30a4\u30e4\u30fc\u30ec\u30d9\u30eb\u304c\u4e0a\u304c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),(0,r.jsx)(x.Z,{text:"\u4f1a\u54e1\u767b\u9332",onClick:function(){return s.push("/register")}})]})]}),(0,r.jsxs)("div",{className:"bg-[rgb(248,248,239)] w-full flex items-center justify-around px-10 h-64 shadow-md mb-10 rounded-b-md",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center justify-around h-4/5 w-1/2",children:[(0,r.jsx)("p",{className:"font-bold text-lg",children:"\u4e00\u76ee\u3067\u5206\u304b\u308b\u30b7\u30e7\u30fc\u30ab\u30c3\u30c8\u4e00\u89a7\u8868"}),(0,r.jsxs)("p",{className:"text-center",children:["\u63b2\u8f09\u30a2\u30d7\u30ea\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30ad\u30fc\u3092\u4e00\u89a7\u8868\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002",(0,r.jsx)("br",{}),"\u30bf\u30a4\u30d4\u30f3\u30b0\u30b2\u30fc\u30e0\u306e\u78ba\u8a8d\u3084\u3001\u666e\u6bb5\u306e\u4f5c\u696d\u306e\u53c2\u8003\u306b\u304a\u4f7f\u3044\u3044\u305f\u3060\u3051\u307e\u3059\u3002"]}),(0,r.jsx)("p",{className:"text-center"}),(0,r.jsx)(x.Z,{text:"\u30a2\u30d7\u30ea\u4e00\u89a7",type:"outlined",onClick:function(){return s.push("/apps")}})]}),(0,r.jsx)("div",{className:"flex items-baseline w-1/2 justify-center",children:(0,r.jsx)(o.JJu,{color:"#1C73BD",size:200,className:"mr-3"})})]})]}),(0,r.jsxs)("div",{className:"bg-white w-full flex items-center justify-around px-10 flex-col py-5 rounded-md relative mb-14 shadow-md",children:[(0,r.jsxs)("div",{className:"flex items-center mb-4 ",children:[(0,r.jsx)("div",{className:"mr-2 flex items-center",children:(0,r.jsx)(c.X6i,{size:20})}),(0,r.jsx)("p",{className:"font-bold text-xl mr-7",children:"\u304a\u77e5\u3089\u305b"})]}),(0,r.jsx)("div",{className:"h-full flex flex-col justify-around w-full",children:null===g||void 0===g?void 0:g.map((function(e,s){return(0,r.jsxs)("p",{className:"my-2",children:["\u30fb",e.content]},s)}))})]}),(0,r.jsx)(l.x7,{position:"bottom-center"})]})}},2148:function(e,s,t){"use strict";t.d(s,{pj:function(){return a},Tu:function(){return o},CG:function(){return d}});var r=t(4231),n="\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059\u3002",l="\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",i="\u6b63\u3057\u3044\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",c="\u82f1\u5b57\u3068\u6570\u5b57\u3092\u542b\u3081\u305f8-24\u6587\u5b57\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",a=r.Ry().shape({email:r.Z_().email(i).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(n)),password:r.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(n))}),o=r.Ry().shape({email:r.Z_().email(i).required("\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9".concat(n)),password:r.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(n)),passConfirm:r.Z_().matches(/(?=.*[a-z])(?=.*[0-9])[0-9a-zA-Z]{8,64}/,c).required("\u30d1\u30b9\u30ef\u30fc\u30c9".concat(n)).oneOf([r.iH("password")],"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093\u3002"),name:r.Z_().max(20,"20\u6587\u5b57".concat(l)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(n))}),d=r.Ry().shape({icon:r.nK(),name:r.Z_().max(20,"20\u6587\u5b57".concat(l)).required("\u30e6\u30fc\u30b6\u30fc\u540d".concat(n))})}},function(e){e.O(0,[885,314,245,47,182,284,423,630,931,669,715,53,218,205,774,888,179],(function(){return s=8563,e(e.s=s);var s}));var s=e.O();_N_E=s}]);