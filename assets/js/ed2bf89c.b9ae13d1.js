"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[134174],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var n=t(296540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,m=p["".concat(l,".").concat(y)]||p[y]||g[y]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},154279:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(58168),o=(t(296540),t(15680));const a={title:"Hybrid Storage",language:"en"},s=void 0,i={unversionedId:"table-design/row-store",id:"version-2.1/table-design/row-store",title:"Hybrid Storage",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/table-design/row-store.md",sourceDirName:"table-design",slug:"/table-design/row-store",permalink:"/docs/table-design/row-store",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Hybrid Storage",language:"en"},sidebar:"docs",previous:{title:"Usage Notes",permalink:"/docs/table-design/data-model/tips"},next:{title:"Data Partitioning",permalink:"/docs/table-design/data-partition"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"hybrid-storage"},"Hybrid Storage"),(0,o.yg)("p",null,"Doris defaults to columnar storage, where each column is stored contiguously. Columnar storage offers excellent performance for analytical scenarios (such as aggregation, filtering, sorting, etc.), as it only reads the necessary columns, reducing unnecessary IO. However, in point query scenarios (such as ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT *"),"), all columns need to be read, requiring an IO operation for each column, which can lead to IOPS becoming a bottleneck, especially for wide tables with many columns (e.g., hundreds of columns)."),(0,o.yg)("p",null,"To address the IOPS bottleneck in point query scenarios, starting from version 2.0.0, Doris supports hybrid storage. When users create tables, they can specify whether to enable row storage. With row storage enabled, each row only requires one IO operation for point queries (such as ",(0,o.yg)("inlineCode",{parentName:"p"},"SELECT *"),"), significantly improving performance."),(0,o.yg)("h2",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,"When creating a table, specify whether to enable row storage, which columns to enable row storage for, and the storage compression unit size page_size in the table's PROPERTIES."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Whether to enable row storage: defaults to false (not enabled).")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Which columns to enable row storage for:if ",(0,o.yg)("inlineCode",{parentName:"li"},'"store_row_column" = "true"'),", all columns are enabled by default. If you need to specify that only some columns are enabled for row storage, set the row_store_columns parameter, formatted as a comma-separated list of column names.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"row_store_columns" = "column1,column2,column3"\n')),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Row storage page_size: defaults to 16KB.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"row_store_page_size" = "16384"\n')),(0,o.yg)("p",null,"The page is the smallest unit of storage read/write operations, and page_size is the size of the row storage page. This means that reading one row also requires generating an IO for a page. The larger the value, the better the compression effect and the lower the storage space usage, but the higher the IO overhead for point queries (since one IO reads at least one page), and vice versa. The smaller the value, the higher the storage space, the better the point query performance. The default value of 16KB is a balanced choice in most cases. If you prefer query performance, you can configure a smaller value such as 4KB or even lower. If you prefer storage space, you can configure a larger value such as 64KB or even higher."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,'The example below creates an 8-column table, where "key,v1,v3,v5,v7" are the 5 columns enabled for row storage. To optimize for high-concurrency point query performance, the page_size is configured to 4KB.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl_point_query` (\n     `key` int(11) NULL,\n     `v1` decimal(27, 9) NULL,\n     `v2` varchar(30) NULL,\n     `v3` varchar(30) NULL,\n     `v4` date NULL,\n     `v5` datetime NULL,\n     `v6` float NULL,\n     `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n     "enable_unique_key_merge_on_write" = "true",\n     "light_schema_change" = "true",\n     "row_store_columns" = "key,v1,v3,v5,v7",\n     "row_store_page_size" = "4096"\n);\n')),(0,o.yg)("p",null,"For more information on point query usage, please refer to ",(0,o.yg)("a",{parentName:"p",href:"../query/high-concurrent-point-query"},"High-Concurrent Point Query"),"."))}g.isMDXComponent=!0}}]);