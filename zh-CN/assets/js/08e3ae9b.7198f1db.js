"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[114680],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>d});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),u=n,d=c["".concat(p,".").concat(u)]||c[u]||g[u]||o;return r?a.createElement(d,l(l({ref:t},m),{},{components:r})):a.createElement(d,l({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},717646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(58168),n=(r(296540),r(15680));const o={title:"workload_group_privileges",language:"zh-CN"},l=void 0,i={unversionedId:"admin-manual/system-tables/information_schema/workload_group_privileges",id:"version-3.0/admin-manual/system-tables/information_schema/workload_group_privileges",title:"workload_group_privileges",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/workload_group_privileges.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/workload_group_privileges",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/workload_group_privileges",draft:!1,tags:[],version:"3.0",frontMatter:{title:"workload_group_privileges",language:"zh-CN"},sidebar:"docs",previous:{title:"views",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/views"},next:{title:"workload_group_resource_usage",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/workload_group_resource_usage"}},p={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],m={toc:s},c="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.yg)("p",null,"\u5b58\u50a8 Workload Group \u7684\u6743\u9650\u4fe1\u606f"),(0,n.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"GRANTEE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u88ab\u8d4b\u6743\u7528\u6237")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"WORKLOAD_GROUP_NAME"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(256)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Workload Group \u7684\u540d\u5b57")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"PRIVILEGE_TYPE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u6743\u9650\u7c7b\u522b")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"IS_GRANTABLE"),(0,n.yg)("td",{parentName:"tr",align:"left"},"varchar(3)"),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u53ef\u4ee5\u6388\u6743\u7ed9\u5176\u4ed6\u7528\u6237")))))}g.isMDXComponent=!0}}]);