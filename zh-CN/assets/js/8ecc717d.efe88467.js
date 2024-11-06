"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[675473],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=a,f=p["".concat(s,".").concat(g)]||p[g]||y[g]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},629660:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const l={title:"ANY_VALUE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/any-value",id:"version-2.0/sql-manual/sql-functions/aggregate-functions/any-value",title:"ANY_VALUE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/aggregate-functions/any-value.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/any-value",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/any-value",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ANY_VALUE",language:"zh-CN"},sidebar:"docs",previous:{title:"MAX",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/max"},next:{title:"VAR_SAMP,VARIANCE_SAMP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/aggregate-functions/var-samp"}},s={},u=[{value:"ANY_VALUE",id:"any_value",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"any_value"},"ANY_VALUE"),(0,a.yg)("p",null,"ANY_VALUE"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ANY_VALUE(expr)")),(0,a.yg)("p",null,"\u5982\u679cexpr\u4e2d\u5b58\u5728\u975e NULL \u503c\uff0c\u8fd4\u56de\u4efb\u610f\u975e NULL \u503c\uff0c\u5426\u5219\u8fd4\u56de NULL\u3002"),(0,a.yg)("p",null,"\u522b\u540d\u51fd\u6570\uff1a ",(0,a.yg)("inlineCode",{parentName:"p"},"ANY(expr)")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select id, any_value(name) from cost2 group by id;\n+------+-------------------+\n| id   | any_value(`name`) |\n+------+-------------------+\n|    3 | jack              |\n|    2 | jack              |\n+------+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ANY_VALUE, ANY"))}y.isMDXComponent=!0}}]);