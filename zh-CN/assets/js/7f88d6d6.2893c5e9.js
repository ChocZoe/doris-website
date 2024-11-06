"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[139672],{15680:(t,e,n)=>{n.d(e,{xA:()=>c,yg:()=>b});var r=n(296540);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),f=i,b=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(b,a(a({ref:e},c),{},{components:n})):r.createElement(b,a({ref:e},c))}));function b(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},479425:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(58168),i=(n(296540),n(15680));const o={title:"BITMAP_NOT",language:"zh-CN"},a=void 0,s={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-not",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-not",title:"BITMAP_NOT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-not.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-not",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-not",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_NOT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_XOR",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor"},next:{title:"BITMAP_AND_NOT,BITMAP_ANDNOT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not"}},l={},p=[{value:"bitmap_not",id:"bitmap_not",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},m="wrapper";function u(t){let{components:e,...n}=t;return(0,i.yg)(m,(0,r.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_not"},"bitmap_not"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BITMAP BITMAP_NOT(BITMAP lhs, BITMAP rhs)")),(0,i.yg)("p",null,"\u8ba1\u7b97lhs\u51cf\u53bbrhs\u4e4b\u540e\u7684\u96c6\u5408\uff0c\u8fd4\u56de\u65b0\u7684bitmap."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n|                                                                                        |\n+----------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n| 5                                                                                      |\n+----------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_NOT,BITMAP\n")))}u.isMDXComponent=!0}}]);