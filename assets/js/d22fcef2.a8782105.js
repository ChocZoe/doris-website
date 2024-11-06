"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[2005],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=d(n),g=i,u=l["".concat(p,".").concat(g)]||l[g]||c[g]||a;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},393044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(58168),i=(n(296540),n(15680));const a={title:"SSD and HDD tiered storage",language:"en"},o=void 0,s={unversionedId:"table-design/tiered-storage/diff-disk-medium-migration",id:"table-design/tiered-storage/diff-disk-medium-migration",title:"SSD and HDD tiered storage",description:"\x3c!--",source:"@site/docs/table-design/tiered-storage/diff-disk-medium-migration.md",sourceDirName:"table-design/tiered-storage",slug:"/table-design/tiered-storage/diff-disk-medium-migration",permalink:"/docs/dev/table-design/tiered-storage/diff-disk-medium-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"SSD and HDD tiered storage",language:"en"},sidebar:"docs",previous:{title:"Schema Evolution",permalink:"/docs/dev/table-design/schema-change"},next:{title:"Remote Storage",permalink:"/docs/dev/table-design/tiered-storage/remote-storage"}},p={},d=[],m={toc:d},l="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(l,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You can set parameters for dynamic partitions across different disk types, facilitating data migration from SSDs to HDDs based on the parameters. This strategy improves read and write performance in Doris while lowering costs."),(0,i.yg)("p",null,"By configuring ",(0,i.yg)("inlineCode",{parentName:"p"},"dynamic_partition.hot_partition_num")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"dynamic_partition.storage_medium"),", you can use SSD and HDD tiered storage. For specific usage, please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/table-design/data-partition#dynamic-partitioning"},"Data Partitioning - Dynamic Partitioning"),"."),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"em"},"dynamic_partition.hot_partition_num"))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"  If the storage path does not include an SSD disk path, configuring this parameter will result in the failure of dynamic partition creation."),(0,i.yg)("p",{parentName:"admonition"},"  :::"),(0,i.yg)("p",{parentName:"admonition"},"  ",(0,i.yg)("inlineCode",{parentName:"p"},"hot_partition_num")," indicates that the current partition and the previous hot_partition_num - 1 partitions, along with all future partitions, will be stored on SSD media."),(0,i.yg)("p",{parentName:"admonition"},"  Let us give an example. Suppose today is 2021-05-20, partition by day, and the properties of dynamic partition are set to: hot_partition_num=2, end=3, start=-3. Then the system will automatically create the following partitions, and set the ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_medium")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_cooldown_time")," properties:"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'p20210517: ["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518: ["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519: ["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520: ["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521: ["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522: ["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523: ["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n')),(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("em",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"em"},"dynamic_partition.storage_medium")))),(0,i.yg)("p",null,"This parameteres is supported since Doris version 1.2.3\n:::"),(0,i.yg)("p",null,"  Specifies the final storage medium for the newly created dynamic partition. HDD is the default, but SSD can be selected."),(0,i.yg)("p",null,"  Note that when set to SSD, the ",(0,i.yg)("inlineCode",{parentName:"p"},"hot_partition_num")," property will no longer take effect, all partitions will default to SSD storage media and the cooldown time will be 9999-12-31 23:59:59."))}c.isMDXComponent=!0}}]);