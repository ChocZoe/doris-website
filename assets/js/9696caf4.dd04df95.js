"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[131109],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>m});var a=i(296540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(i),u=n,m=g["".concat(c,".").concat(u)]||g[u]||d[u]||r;return i?a.createElement(m,o(o({ref:t},p),{},{components:i})):a.createElement(m,o({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[g]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},657011:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=i(58168),n=(i(296540),i(15680));const r={title:"QuickSight",language:"en"},o=void 0,s={unversionedId:"ecosystem/bi/quicksight",id:"ecosystem/bi/quicksight",title:"QuickSight",description:"\x3c!--",source:"@site/docs/ecosystem/bi/quicksight.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/quicksight",permalink:"/docs/dev/ecosystem/bi/quicksight",draft:!1,tags:[],version:"current",frontMatter:{title:"QuickSight",language:"en"},sidebar:"ecosystem",previous:{title:"Tableau",permalink:"/docs/dev/ecosystem/bi/tableau"},next:{title:"Quick BI",permalink:"/docs/dev/ecosystem/bi/quickbi"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Data configuration",id:"data-configuration",level:2}],p={toc:l},g="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"QuickSight is a robust data visualization and analysis platform that seamlessly integrates data computation with visually appealing charts. It does not necessitate programming skills from users, as data insights can be quickly obtained through simple drag-and-drop operations. QuickSight offers a diverse range of viewing options for exploring data from various perspectives. Furthermore, it facilitates easy integration of multiple data sources, simplifying and streamlining the process of presenting, exploring, and analyzing data. This platform not only accelerates data processing but also enhances the intuitiveness and comprehensibility of the analysis process, significantly improving user work efficiency and analytical capabilities."),(0,n.yg)("h2",{id:"data-configuration"},"Data configuration"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Upon completing the registration process, please proceed to sign in to QuickSight and choose the desired dataset."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"dataset select",src:i(767330).A,width:"476",height:"404"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select MySQL on the dataset selection page."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"database select",src:i(233913).A,width:"3560",height:"1714"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'On the data connection page, fill in the corresponding IP, port, database name, username, and password for Doris. After filling in the information, click "Verify the Connection". If the test is successful, create a data source.'),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"connection information",src:i(227664).A,width:"1194",height:"1296"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Select the table for which you want to create the dashboard."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"jdbc connector download",src:i(213039).A,width:"2234",height:"1838"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"QuickSight offers two methods for importing tables. You can choose the appropriate import method based on your needs."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"table select",src:i(631494).A,width:"2374",height:"1374"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"After importing the table, you can create the desired dashboard."),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"table import",src:i(412701).A,width:"2558",height:"1362"})))))}d.isMDXComponent=!0},767330:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-1-176f448b302663d3d7fd75348175edbe.png"},233913:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-2-e185183b48411b97357e513e9bf4e312.png"},227664:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-3-e2aa55347e613af04ca557d1bd7cce26.png"},213039:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-4-a3bce26288d0e929765642132801cb62.png"},631494:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-5-e3dfd8a71eaf12b8a9486a58c83ea079.png"},412701:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/bi-quicksight-en-6-1723bbbec28760fbdb30a13a510cd5d0.png"}}]);