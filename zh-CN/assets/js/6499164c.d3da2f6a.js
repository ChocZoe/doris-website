"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[900625],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=i(t),y=l,d=p["".concat(s,".").concat(y)]||p[y]||g[y]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,c=new Array(o);c[0]=y;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,c[1]=a;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},344458:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>i});var r=t(58168),l=(t(296540),t(15680));const o={title:"COLLECT_SET",language:"zh-CN"},c=void 0,a={unversionedId:"sql-manual/sql-functions/aggregate-functions/collect_set",id:"version-1.2/sql-manual/sql-functions/aggregate-functions/collect_set",title:"COLLECT_SET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/collect_set.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/collect_set",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/collect_set",draft:!1,tags:[],version:"1.2",frontMatter:{title:"COLLECT_SET",language:"zh-CN"},sidebar:"docs",previous:{title:"REGEXP_REPLACE_ONE",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_replace_one"},next:{title:"MIN",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/min"}},s={},i=[{value:"COLLECT_SET",id:"collect_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"collect_set"},"COLLECT_SET"),(0,l.yg)("p",null,"COLLECT_SET"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY<T> collect_set(expr[,max_size])")),(0,l.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5bf9",(0,l.yg)("inlineCode",{parentName:"p"},"expr"),"\u53bb\u91cd\u540e\u7684\u6570\u7ec4\u3002\u53ef\u9009\u53c2\u6570",(0,l.yg)("inlineCode",{parentName:"p"},"max_size"),"\uff0c\u901a\u8fc7\u8bbe\u7f6e\u8be5\u53c2\u6570\u80fd\u591f\u5c06\u7ed3\u679c\u6570\u7ec4\u7684\u5927\u5c0f\u9650\u5236\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"max_size")," \u4e2a\u5143\u7d20\u3002\n\u5f97\u5230\u7684\u7ed3\u679c\u6570\u7ec4\u4e2d\u4e0d\u5305\u542bNULL\u5143\u7d20\uff0c\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u987a\u5e8f\u4e0d\u56fa\u5b9a\u3002\u8be5\u51fd\u6570\u5177\u6709\u522b\u540d",(0,l.yg)("inlineCode",{parentName:"p"},"group_uniq_array"),"\u3002"),(0,l.yg)("h3",{id:"notice"},"notice"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u4ec5\u652f\u6301\u5411\u91cf\u5316\u5f15\u64ce\u4e2d\u4f7f\u7528\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select k1,k2,k3 from collect_set_test order by k1;\n+------+------------+-------+\n| k1   | k2         | k3    |\n+------+------------+-------+\n|    1 | 2023-01-01 | hello |\n|    2 | 2023-01-01 | NULL  |\n|    2 | 2023-01-02 | hello |\n|    3 | NULL       | world |\n|    3 | 2023-01-02 | hello |\n|    4 | 2023-01-02 | doris |\n|    4 | 2023-01-03 | sql   |\n+------+------------+-------+\n\nmysql> select collect_set(k1),collect_set(k1,2) from collect_set_test;\n+-------------------------+--------------------------+\n| collect_set(`k1`)       | collect_set(`k1`,2)      |\n+-------------------------+--------------------------+\n| [4,3,2,1]               | [1,2]                    |\n+----------------------------------------------------+\n\nmysql> select k1,collect_set(k2),collect_set(k3,1) from collect_set_test group by k1 order by k1;\n+------+-------------------------+--------------------------+\n| k1   | collect_set(`k2`)       | collect_set(`k3`,1)      |\n+------+-------------------------+--------------------------+\n|    1 | [2023-01-01]            | [hello]                  |\n|    2 | [2023-01-01,2023-01-02] | [hello]                  |\n|    3 | [2023-01-02]            | [world]                  |\n|    4 | [2023-01-02,2023-01-03] | [sql]                    |\n+------+-------------------------+--------------------------+\n\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"COLLECT_SET,GROUP_UNIQ_ARRAY,COLLECT_LIST,ARRAY"))}g.isMDXComponent=!0}}]);