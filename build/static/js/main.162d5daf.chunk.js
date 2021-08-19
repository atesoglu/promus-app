(this["webpackJsonppromus-app"]=this["webpackJsonppromus-app"]||[]).push([[0],{104:function(e,t,c){},105:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(38),r=c.n(s),i=c(23),l=c.p+"static/media/logo.c5159cef.svg",o=c(1);var j=function(){return Object(o.jsx)("header",{className:"bg-gray-50 p-2 h-12 border-b border-gray-200",children:Object(o.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:l,className:"object-scale-down h-8 py-1 pr-4 float-left",alt:"Promus App | Yet another developer butler"})}),Object(o.jsx)("div",{className:"text-right",children:""})]})})},x=c(8);function b(){return Object(o.jsxs)("nav",{className:"flex flex-col uppercase",children:[Object(o.jsx)(i.b,{to:"/",className:"py-1",children:"Home"}),Object(o.jsx)(i.b,{to:"/about",className:"py-1",children:"About"}),Object(o.jsx)(i.b,{to:"/contact",className:"py-1",children:"Contact"}),Object(o.jsx)(i.b,{to:"/login",className:"py-1",children:"Login"}),Object(o.jsx)(i.b,{to:"/text-editor",className:"py-1",children:"Text Editor"})]})}var d=function(){return Object(o.jsx)("aside",{className:"inset-y-0 z-10 flex-shrink-0 w-48 lg:static dark:border-primary-darker dark:bg-darker focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200",children:Object(o.jsx)(b,{})})};var h=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About"})})};var p=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Contact"})})};var u=function(){return Object(o.jsx)(n.Fragment,{children:Object(o.jsx)("h1",{children:"Home"})})};var O=function(){return console.log("Login.render"),Object(o.jsx)("div",{className:"container",children:"#login"})},f=c(46),m=c(62),g=c.n(m),v=c(63),y=c.n(v),N=c(73),w=c(108),C=c(24),k=c(25);function L(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(f.a)(s,2),i=r[0],l=r[1],j=Object(n.useState)(""),x=Object(f.a)(j,2),b=x[0],d=x[1];return Object(n.useEffect)((function(){y.a.get("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text").then((function(e){a(e.data)}))}),[]),Object(o.jsx)(n.Fragment,{children:Object(o.jsxs)("div",{className:"flex h-full",children:[Object(o.jsx)("div",{className:"flex-grow bg-red-500 h-full",children:Object(o.jsx)("textarea",{className:"resize-none w-full h-full border border-gray-200 outline-none focus:border-blue-400",value:c,onChange:function(e){a(e.target.value)}})}),Object(o.jsx)("aside",{className:"flex-shrink w-96 focus:outline-none bg-gray-100 px-2 py-1 border-r border-gray-200",children:Object(o.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Remove Duplicate Lines"}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){var t=c.replace(/\r/g,"").split("\n");a(g.a.uniq(t).join("\n"))},className:"flex-grow",children:[Object(o.jsx)(C.a,{icon:k.c,className:"text-white"})," Remove Duplicate Lines"]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Remove Empty Lines"}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){for(var t=c.replace(/\r/g,"").split("\n"),n=t.length,s=[],r=0,i=new RegExp(/\S/),l=0;l<n;l++)i.test(t[l])&&(s[r]=t[l],r++);a(s.join("\n"))},children:[Object(o.jsx)(C.a,{icon:k.c,className:"text-white"})," Remove Empty Lines"]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Remove Lines"}),Object(o.jsxs)("div",{className:"flex space-x-1",children:[Object(o.jsx)(w.a,{placeholder:"Keyword",value:i,onChange:function(e){l(e.target.value)}}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){for(var t=c.replace(/\r/g,"").split("\n"),n=t.length,s=[],r=0,l=new RegExp(i,"i"),o=0;o<n;o++)l.test(t[o]),s[r]=t[o],r++;a(s.join("\n"))},className:"flex-grow",children:[Object(o.jsx)(C.a,{icon:k.c,className:"text-white"})," Containing"]}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){for(var t=c.replace(/\r/g,"").split("\n"),n=t.length,s=[],r=0,i=new RegExp(/\S/),l=0;l<n;l++)i.test(t[l])&&(s[r]=t[l],r++);a(s.join("\n"))},className:"flex-grow",children:[Object(o.jsx)(C.a,{icon:k.c,className:"text-white"})," Not Containing"]})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Prefix / Suffix Lines"}),Object(o.jsxs)("div",{className:"flex space-x-1",children:[Object(o.jsx)(w.a,{placeholder:"Keyword",value:b,onChange:function(e){d(e.target.value)}}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){for(var t=c.replace(/\r/g,"").split("\n"),n=t.length,s=0;s<n;s++)t[s]=b+t[s];a(t.join("\n"))},className:"flex-grow",children:[Object(o.jsx)(C.a,{icon:k.a,className:"text-white"})," Prefix"]}),Object(o.jsxs)(N.a,{type:"primary",onClick:function(e){for(var t=c.replace(/\r/g,"").split("\n"),n=t.length,s=0;s<n;s++)t[s]=t[s]+b;a(t.join("\n"))},className:"flex-grow",children:[Object(o.jsx)(C.a,{icon:k.d,className:"text-white"})," Suffix"]})]})]})]})})]})})}var S=function(){return Object(o.jsx)(n.Fragment,{children:Object(o.jsxs)("main",{className:"flex content bg-white flex-grow",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"flex-auto p-2",children:Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/",component:u}),Object(o.jsx)(x.a,{path:"/contact",component:p}),Object(o.jsx)(x.a,{path:"/about",component:h}),Object(o.jsx)(x.a,{path:"/login",component:O}),Object(o.jsx)(x.a,{path:"/text-editor",component:L})]})})]})})};function E(){return Object(o.jsxs)("footer",{className:"flex bg-gray-50 py-1 px-2 h-8 border-t border-gray-100",children:[Object(o.jsx)("div",{className:"flex-none w-72",children:"#footer"}),Object(o.jsx)("div",{className:"flex-grow"}),Object(o.jsxs)("div",{className:"flex-none w-72 text-right",children:[Object(o.jsx)(C.a,{icon:k.b,className:"text-gray-700"}),"production"]})]})}c(104);var R=function(){return Object(o.jsxs)("div",{className:"app min-h-screen flex flex-col antialiased text-gray-900",children:[Object(o.jsx)(j,{}),Object(o.jsx)(i.a,{children:Object(o.jsx)(S,{})}),Object(o.jsx)(E,{})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),F()}},[[105,1,2]]]);
//# sourceMappingURL=main.162d5daf.chunk.js.map