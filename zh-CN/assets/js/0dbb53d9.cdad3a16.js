"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[281234],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>d});var n=t(296540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,d=u["".concat(p,".").concat(y)]||u[y]||g[y]||a;return t?n.createElement(d,l(l({ref:r},s),{},{components:t})):n.createElement(d,l({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},141333:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(58168),o=(t(296540),t(15680));const a={title:"\u884c\u5217\u6df7\u5b58",language:"zh-CN"},l=void 0,i={unversionedId:"table-design/row-store",id:"table-design/row-store",title:"\u884c\u5217\u6df7\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/row-store.md",sourceDirName:"table-design",slug:"/table-design/row-store",permalink:"/zh-CN/docs/dev/table-design/row-store",draft:!1,tags:[],version:"current",frontMatter:{title:"\u884c\u5217\u6df7\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u6ce8\u610f",permalink:"/zh-CN/docs/dev/table-design/data-model/tips"},next:{title:"\u5206\u533a\u5206\u6876",permalink:"/zh-CN/docs/dev/table-design/data-partition"}},p={},c=[{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528\u5b9e\u4f8b",id:"\u4f7f\u7528\u5b9e\u4f8b",level:2}],s={toc:c},u="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris \u9ed8\u8ba4\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u6bcf\u4e2a\u5217\u8fde\u7eed\u5b58\u50a8\uff0c\u5728\u5206\u6790\u573a\u666f\uff08\u5982\u805a\u5408\uff0c\u8fc7\u6ee4\uff0c\u6392\u5e8f\u7b49\uff09\u6709\u5f88\u597d\u7684\u6027\u80fd\uff0c\u56e0\u4e3a\u53ea\u9700\u8981\u8bfb\u53d6\u6240\u9700\u8981\u7684\u5217\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684 IO\u3002\u4f46\u662f\u5728\u70b9\u67e5\u573a\u666f\uff08\u6bd4\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT *"),"\uff09\uff0c\u9700\u8981\u8bfb\u53d6\u6240\u6709\u5217\uff0c\u6bcf\u4e2a\u5217\u90fd\u9700\u8981\u4e00\u6b21 IO \u5bfc\u81f4 IOPS \u6210\u4e3a\u74f6\u9888\uff0c\u7279\u522b\u5bf9\u5217\u591a\u7684\u5bbd\u8868\uff08\u6bd4\u5982\u4e0a\u767e\u5217\uff09\u5c24\u4e3a\u660e\u663e\u3002"),(0,o.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u70b9\u67e5\u573a\u666f IOPS \u7684\u74f6\u9888\u95ee\u9898\uff0cDoris 2.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u884c\u5217\u6df7\u5b58\uff0c\u7528\u6237\u5efa\u8868\u65f6\u6307\u5b9a\u5f00\u542f\u884c\u5b58\u540e\uff0c\u70b9\u67e5\uff08\u6bd4\u5982 ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT *"),"\uff09\u6bcf\u4e00\u884c\u53ea\u9700\u8981\u4e00\u6b21 IO\uff0c\u6027\u80fd\u6709\u6570\u91cf\u7ea7\u63d0\u5347\u3002"),(0,o.yg)("h2",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,o.yg)("p",null,"\u5efa\u8868\u65f6\u5728\u8868\u7684 PROPERTIES \u4e2d\u6307\u5b9a\u662f\u5426\u5f00\u542f\u884c\u5b58\uff0c\u54ea\u4e9b\u5217\u5f00\u542f\u884c\u5b58\uff0c\u884c\u5b58\u7684\u5b58\u50a8\u538b\u7f29\u5355\u5143\u5927\u5c0f page_size\u3002"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u662f\u5426\u5f00\u542f\u884c\u5b58\uff1a\u9ed8\u8ba4\u4e3a false \u4e0d\u5f00\u542f")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u54ea\u4e9b\u5217\u5f00\u542f\u884c\u5b58\uff1a\u5982\u679c ",(0,o.yg)("inlineCode",{parentName:"li"},'"store_row_column" = "true"'),"\uff0c\u9ed8\u8ba4\u6240\u6709\u5217\u5f00\u542f\u884c\u5b58\uff0c\u82e5\u9700\u8981\u6307\u5b9a\u90e8\u5206\u5217\u5f00\u542f\u884c\u5b58\uff0c\u8bbe\u7f6e row_store_columns \u53c2\u6570\uff0c\u683c\u5f0f\u4e3a\u9017\u53f7\u5206\u5272\u7684\u5217\u540d")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"row_store_columns" = "column1,column2,column3"\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"\u884c\u5b58 page_size\uff1a\u9ed8\u8ba4\u4e3a 16KB\u3002")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"row_store_page_size" = "16384"\n')),(0,o.yg)("p",null,"page \u662f\u5b58\u50a8\u8bfb\u5199\u7684\u6700\u5c0f\u5355\u5143\uff0cpage_size \u662f\u884c\u5b58 page \u7684\u5927\u5c0f\uff0c\u4e5f\u5c31\u662f\u8bf4\u8bfb\u4e00\u884c\u4e5f\u9700\u8981\u4ea7\u751f\u4e00\u4e2a page \u7684 IO\u3002\u8fd9\u4e2a\u503c\u8d8a\u5927\u538b\u7f29\u6548\u679c\u8d8a\u597d\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u8d8a\u4f4e\uff0c\u4f46\u662f\u70b9\u67e5\u65f6 IO \u5f00\u9500\u8d8a\u5927\u6027\u80fd\u8d8a\u4f4e\uff08\u56e0\u4e3a\u4e00\u6b21 IO \u81f3\u5c11\u8bfb\u4e00\u4e2a page\uff09\uff0c\u53cd\u8fc7\u6765\u503c\u8d8a\u5c0f\u5b58\u50a8\u7a7a\u95f4\u7ea6\u9ad8\uff0c\u70b9\u67e5\u6027\u80fd\u8d8a\u597d\u3002\u9ed8\u8ba4\u503c 16KB \u662f\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6bd4\u8f83\u5747\u8861\u7684\u9009\u62e9\uff0c\u5982\u679c\u66f4\u504f\u5411\u67e5\u8be2\u6027\u80fd\u53ef\u4ee5\u914d\u7f6e\u8f83\u5c0f\u7684\u503c\u6bd4\u5982 4KB \u751a\u81f3\u66f4\u4f4e\uff0c\u5982\u679c\u66f4\u504f\u5411\u5b58\u50a8\u7a7a\u95f4\u53ef\u4ee5\u914d\u7f6e\u8f83\u5927\u7684\u503c\u6bd4\u5982 64KB \u751a\u81f3\u66f4\u9ad8\u3002"),(0,o.yg)("h2",{id:"\u4f7f\u7528\u5b9e\u4f8b"},"\u4f7f\u7528\u5b9e\u4f8b"),(0,o.yg)("p",null,'\u4e0b\u9762\u7684\u4f8b\u5b50\u521b\u5efa\u4e00\u4e2a 8 \u5217\u7684\u8868\uff0c\u5176\u4e2d "key,v1,v3,v5,v7" \u8fd9 5 \u5217\u5f00\u542f\u884c\u5b58\uff0c\u4e3a\u4e86\u9ad8\u5e76\u53d1\u70b9\u67e5\u6027\u80fd\u914d\u7f6e page_size \u4e3a 4KB\u3002'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "row_store_columns" = "key,v1,v3,v5,v7",\n    "row_store_page_size" = "4096"\n);\n')),(0,o.yg)("p",null,"\u66f4\u591a\u70b9\u67e5\u7684\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,o.yg)("a",{parentName:"p",href:"../query/high-concurrent-point-query"},"\u9ad8\u5e76\u53d1\u70b9\u67e5")," \u3002"))}g.isMDXComponent=!0}}]);