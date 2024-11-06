"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[554255],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},422852:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(58168),r=(a(296540),a(15680));const i={title:"Quick BI",language:"en"},o=void 0,c={unversionedId:"ecosystem/bi/quickbi",id:"version-3.0/ecosystem/bi/quickbi",title:"Quick BI",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/bi/quickbi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/quickbi",permalink:"/docs/3.0/ecosystem/bi/quickbi",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Quick BI",language:"en"},sidebar:"ecosystem",previous:{title:"QuickSight",permalink:"/docs/3.0/ecosystem/bi/quicksight"},next:{title:"Smartbi",permalink:"/docs/3.0/ecosystem/bi/smartbi"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Data connection and application",id:"data-connection-and-application",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Quick BI is a data warehouse-based business intelligence tool that helps enterprises set up impressive visual analyses quickly. Quick BI supports a variety of data sources, including databases like MySQL, Oracle, SQL Server, and Apache Doris, as well as file formats such as Excel, CSV, and JSON. It offers a wealth of visualization components, such as tables, charts, and maps, allowing users to easily achieve data visualization through simple drag-and-drop operations."),(0,r.yg)("h2",{id:"data-connection-and-application"},"Data connection and application"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Login Quick BI and create a workspace.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click Data Source under the current workspace."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"create workspace",src:a(986486).A,width:"1104",height:"416"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select Apache Doris in the already created data source and fill in the corresponding Apache Doris connection information."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Doris information",src:a(418253).A,width:"1280",height:"609"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once the connection is successful, you can see the data source we created in the data source list."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"data source",src:a(238660).A,width:"1104",height:"224"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a dataset in the data source we created, using the TPC-H dataset as an example. After the dataset is created, you can set the corresponding report."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{alt:"Doris table",src:a(893467).A,width:"994",height:"986"})))))}d.isMDXComponent=!0},986486:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-quickbi-en-1-0aff7985cda7a5ade2f9e63980a3489b.png"},418253:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-quickbi-en-2-f89f0585066ae995ffaeb570c1924d4e.png"},238660:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-quickbi-en-3-d4fbe71c92bb56810cf798cf283fad4f.png"},893467:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bi-quickbi-en-4-e21f84c898164ef5ff3491f42296a82f.png"}}]);