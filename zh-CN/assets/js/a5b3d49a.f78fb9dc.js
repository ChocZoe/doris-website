"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[904698],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},314968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"Overview",language:"zh-CN"},i=void 0,s={unversionedId:"admin-manual/system-tables/overview",id:"version-3.0/admin-manual/system-tables/overview",title:"Overview",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/overview.md",sourceDirName:"admin-manual/system-tables",slug:"/admin-manual/system-tables/overview",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Overview",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7528\u6237\u914d\u7f6e\u9879",permalink:"/zh-CN/docs/3.0/admin-manual/config/user-property"},next:{title:"active_queries",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/active_queries"}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u4e2d\u7684 information_schema \u5e93\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u865a\u62df\u6570\u636e\u5e93\uff0c\u5b83\u5305\u542b\u4e86\u5173\u4e8e Doris \u96c6\u7fa4 \u53ca\u5176\u6240\u6709\u6570\u636e\u5e93\u5bf9\u8c61\u7684\u5143\u6570\u636e\u3002\u8fd9\u4e9b\u5bf9\u8c61\u5305\u62ec\u6570\u636e\u5e93\u3001\u8868\u3001\u5217\u3001\u6743\u9650\u7b49\u3002\u5728 information_schema \u5e93\u4e2d\uff0c\u5b58\u5728\u591a\u5f20\u53ea\u8bfb\u8868\uff0c\u5b83\u4eec\u5b9e\u9645\u4e0a\u662f\u89c6\u56fe\u800c\u4e0d\u662f\u771f\u5b9e\u7684\u8868\u3002\u56e0\u6b64\uff0c\u5728\u8fd9\u4e9b\u8868\u4e0a\u53ea\u80fd\u6267\u884c SELECT \u64cd\u4f5c\uff0c\u800c\u4e0d\u80fd\u6267\u884c INSERT\uff0cUPDATE\uff0cDELETE \u7b49\u6570\u636e\u4fee\u6539\u64cd\u4f5c\u3002"),(0,a.yg)("p",null,"\u672c\u7ae0\u8282\u5c06\u5206\u522b\u4ecb\u7ecd\u6240\u5c5e\u6570\u636e\u5e93 ",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema"),"\u3001",(0,a.yg)("inlineCode",{parentName:"p"},"mysql"),"\u3001 ",(0,a.yg)("inlineCode",{parentName:"p"},"__internal_schema")," \u4e0b\u7684\u5404\u7c7b\u8868\u4fe1\u606f\u3002"))}p.isMDXComponent=!0}}]);