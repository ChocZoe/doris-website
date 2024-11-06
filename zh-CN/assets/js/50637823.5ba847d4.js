"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[739137],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},447100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"SECOND",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/second",id:"version-3.0/sql-manual/sql-functions/date-time-functions/second",title:"SECOND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/second.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/second",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/second",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SECOND",language:"zh-CN"},sidebar:"docs",previous:{title:"MINUTE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/minute"},next:{title:"FROM_DAYS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/from-days"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"\u83b7\u5f97\u65e5\u671f\u4e2d\u7684\u79d2\u7684\u4fe1\u606f\uff0c\u8fd4\u56de\u503c\u8303\u56f4\u4ece 0-59\u3002"),(0,o.yg)("p",null,"\u53c2\u6570\u4e3a Date \u6216\u8005 Datetime\uff0cTime \u7c7b\u578b"),(0,o.yg)("h2",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"INT SECOND(DATETIME date)")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select second('2018-12-31 23:59:59');\n+-----------------------------+\n| second('2018-12-31 23:59:59') |\n+-----------------------------+\n|                          59 |\n+-----------------------------+\n")),(0,o.yg)("h2",{id:"keywords"},"Keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SECOND\n")))}d.isMDXComponent=!0}}]);