"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[431421],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,d=f["".concat(c,".").concat(p)]||f[p]||y[p]||i;return n?t.createElement(d,o(o({ref:r},u),{},{components:n})):t.createElement(d,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},285849:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=n(58168),a=(n(296540),n(15680));const i={title:"ARRAY_DIFFERENCE",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-difference",id:"sql-manual/sql-functions/array-functions/array-difference",title:"ARRAY_DIFFERENCE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-difference.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-difference",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-difference",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_DIFFERENCE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_DISTINCT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-distinct"},next:{title:"ARRAY_UNION",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-union"}},c={},s=[{value:"array_difference",id:"array_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},f="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(f,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_difference"},"array_difference"),(0,a.yg)("p",null,"array_difference"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_difference(ARRAY<T> arr)")),(0,a.yg)("p",null,"\u8ba1\u7b97\u76f8\u90bb\u6570\u7ec4\u5143\u7d20\u4e4b\u95f4\u7684\u5dee\u5f02\u3002\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u5c06\u4e3a0\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662fa","[1]","-a","[0]","\u4e4b\u95f4\u7684\u5dee\u503c\u3002\n\u6ce8\u610f\u82e5 NULL \u503c\u5b58\u5728\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3aNULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select *,array_difference(k2) from array_type_table;\n+------+-----------------------------+---------------------------------+\n| k1   | k2                          | array_difference(`k2`)          |\n+------+-----------------------------+---------------------------------+\n|    0 | []                          | []                              |\n|    1 | [NULL]                      | [NULL]                          |\n|    2 | [1, 2, 3]                   | [0, 1, 1]                       |\n|    3 | [1, NULL, 3]                | [0, NULL, NULL]                 |\n|    4 | [0, 1, 2, 3, NULL, 4, 6]    | [0, 1, 1, 1, NULL, NULL, 2]     |\n|    5 | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [0, 1, 1, 1, 1, -1, -1, -1, -1] |\n|    6 | [6, 7, 8]                   | [0, 1, 1]                       |\n+------+-----------------------------+---------------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, DIFFERENCE, ARRAY_DIFFERENCE"))}y.isMDXComponent=!0}}]);