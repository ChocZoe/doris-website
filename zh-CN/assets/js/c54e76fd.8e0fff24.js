"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[383515],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=d(r),m=o,g=y["".concat(s,".").concat(m)]||y[m]||u[m]||a;return r?t.createElement(g,l(l({ref:n},p),{},{components:r})):t.createElement(g,l({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},403245:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(58168),o=(r(296540),r(15680));const a={title:"SQL Mode",language:"zh-CN"},l=void 0,i={unversionedId:"query-data/delete-query-variables/sql-mode",id:"version-2.1/query-data/delete-query-variables/sql-mode",title:"SQL Mode",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-data/delete-query-variables/sql-mode.md",sourceDirName:"query-data/delete-query-variables",slug:"/query-data/delete-query-variables/sql-mode",permalink:"/zh-CN/docs/query-data/delete-query-variables/sql-mode",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SQL Mode",language:"zh-CN"}},s={},d=[{value:"SQL Mode \u4ecb\u7ecd",id:"sql-mode-\u4ecb\u7ecd",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u64cd\u4f5c\u65b9\u5f0f",id:"\u64cd\u4f5c\u65b9\u5f0f",level:2},{value:"\u5df2\u652f\u6301 mode",id:"\u5df2\u652f\u6301-mode",level:2},{value:"\u590d\u5408 mode",id:"\u590d\u5408-mode",level:2}],p={toc:d},y="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(y,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Doris \u65b0\u652f\u6301\u7684 SQL Mode \u53c2\u7167\u4e86 Mysql \u7684 SQL Mode \u7ba1\u7406\u673a\u5236\uff0c\u6bcf\u4e2a\u5ba2\u6237\u7aef\u90fd\u80fd\u8bbe\u7f6e\u81ea\u5df1\u7684 SQL Mode\uff0c\u62e5\u6709 Admin \u6743\u9650\u7684\u6570\u636e\u5e93\u7ba1\u7406\u5458\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40 SQL Mode\u3002"),(0,o.yg)("h2",{id:"sql-mode-\u4ecb\u7ecd"},"SQL Mode \u4ecb\u7ecd"),(0,o.yg)("p",null,"SQL Mode \u4f7f\u7528\u6237\u80fd\u5728\u4e0d\u540c\u98ce\u683c\u7684 sql \u8bed\u6cd5\u548c\u6570\u636e\u6821\u9a8c\u4e25\u683c\u5ea6\u95f4\u505a\u5207\u6362\uff0c\u4f7f Doris \u5bf9\u5176\u4ed6\u6570\u636e\u5e93\u6709\u66f4\u597d\u7684\u517c\u5bb9\u6027\u3002\u4f8b\u5982\u5728\u4e00\u4e9b\u6570\u636e\u5e93\u91cc\uff0c'||'\u7b26\u53f7\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\uff0c\u4f46\u5728 Doris \u91cc\u5374\u662f\u4e0e'or'\u7b49\u4ef7\u7684\uff0c\u8fd9\u65f6\u7528\u6237\u53ea\u9700\u8981\u4f7f\u7528 SQL Mode \u5207\u6362\u5230\u81ea\u5df1\u60f3\u8981\u7684\u98ce\u683c\u3002\u6bcf\u4e2a\u5ba2\u6237\u7aef\u90fd\u80fd\u8bbe\u7f6e SQL Mode\uff0c\u5e76\u5728\u5f53\u524d\u5bf9\u8bdd\u4e2d\u6709\u6548\uff0c\u53ea\u6709\u62e5\u6709 Admin \u6743\u9650\u7684\u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40 SQL Mode\u3002"),(0,o.yg)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.yg)("p",null,"SQL Mode \u7528\u4e00\u4e2a 64 \u4f4d\u7684 Long \u578b\u5b58\u50a8\u5728 SessionVariables \u4e2d\uff0c\u8fd9\u4e2a\u5730\u5740\u7684\u6bcf\u4e00\u4f4d\u90fd\u4ee3\u8868\u4e00\u4e2a mode \u7684\u5f00\u542f/\u7981\u7528 (1 \u8868\u793a\u5f00\u542f\uff0c0 \u8868\u793a\u7981\u7528) \u72b6\u6001\uff0c\u53ea\u8981\u77e5\u9053\u6bcf\u4e00\u79cd mode \u5177\u4f53\u662f\u5728\u54ea\u4e00\u4f4d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7\u4f4d\u8fd0\u7b97\u65b9\u4fbf\u5feb\u901f\u7684\u5bf9 SQL Mode \u8fdb\u884c\u6821\u9a8c\u548c\u64cd\u4f5c\u3002"),(0,o.yg)("p",null,"\u6bcf\u4e00\u6b21\u5bf9 SQL Mode \u7684\u67e5\u8be2\uff0c\u90fd\u4f1a\u5bf9\u6b64 Long \u578b\u8fdb\u884c\u4e00\u6b21\u89e3\u6790\uff0c\u53d8\u6210\u7528\u6237\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0c\u540c\u7406\uff0c\u7528\u6237\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684 SQL Mode \u5b57\u7b26\u4e32\uff0c\u4f1a\u88ab\u89e3\u6790\u6210\u80fd\u591f\u5b58\u50a8\u5728 SessionVariables \u4e2d\u7684 Long \u578b\u3002"),(0,o.yg)("p",null,"\u5df2\u88ab\u8bbe\u7f6e\u597d\u7684\u5168\u5c40 SQL Mode \u4f1a\u88ab\u6301\u4e45\u5316\uff0c\u56e0\u6b64\u5bf9\u5168\u5c40 SQL Mode \u7684\u64cd\u4f5c\u603b\u662f\u53ea\u9700\u4e00\u6b21\uff0c\u5373\u4f7f\u7a0b\u5e8f\u91cd\u542f\u540e\u4ecd\u53ef\u4ee5\u6062\u590d\u4e0a\u4e00\u6b21\u7684\u5168\u5c40 SQL Mode\u3002"),(0,o.yg)("h2",{id:"\u64cd\u4f5c\u65b9\u5f0f"},"\u64cd\u4f5c\u65b9\u5f0f"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"\u8bbe\u7f6e SQL Mode")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u76ee\u524d Doris \u7684\u9ed8\u8ba4 SQL Mode \u662f DEFAULT\uff08\u4f46\u9a6c\u4e0a\u4f1a\u5728\u540e\u7eed\u4fee\u6539\u4e2d\u4f1a\u6539\u53d8\uff09\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u8bbe\u7f6e global SQL Mode \u9700\u8981 Admin \u6743\u9650\uff0c\u5e76\u4f1a\u5f71\u54cd\u6240\u6709\u5728\u6b64\u540e\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u3002")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"\u8bbe\u7f6e session SQL Mode \u53ea\u4f1a\u5f71\u54cd\u5f53\u524d\u5bf9\u8bdd\u5ba2\u6237\u7aef\uff0c\u9ed8\u8ba4\u4e3a session \u65b9\u5f0f\u3002")))),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"\u67e5\u8be2 SQL Mode")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select @@global.sql_mode\nselect @@session.sql_mode\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"\u9664\u4e86\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u65b9\u5f0f\u8fd4\u56de\u6240\u6709 session variables \u6765\u67e5\u770b\u5f53\u524d sql mode")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"show global variables\nshow session variables\n")),(0,o.yg)("h2",{id:"\u5df2\u652f\u6301-mode"},"\u5df2\u652f\u6301 mode"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"PIPES_AS_CONCAT")),(0,o.yg)("p",{parentName:"li"},"\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c'||'\u7b26\u53f7\u662f\u4e00\u79cd\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\u53f7\uff08\u540c CONCAT() \u51fd\u6570\uff09\uff0c\u800c\u4e0d\u662f'OR'\u7b26\u53f7\u7684\u540c\u4e49\u8bcd\u3002(e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"'a'||'b' = 'ab'"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1||0 = '10'"),")")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"NO_BACKSLASH_ESCAPES")),(0,o.yg)("p",{parentName:"li"},"\u542f\u7528\u6b64\u6a21\u5f0f\u5c06\u7981\u7528\u53cd\u659c\u6760\u5b57\u7b26\uff08\\\uff09\u4f5c\u4e3a\u5b57\u7b26\u4e32\u548c\u6807\u8bc6\u7b26\u4e2d\u7684\u8f6c\u4e49\u5b57\u7b26\u3002\u542f\u7528\u6b64\u6a21\u5f0f\u540e\uff0c\u53cd\u659c\u6760\u5c06\u53d8\u6210\u4e00\u4e2a\u666e\u901a\u5b57\u7b26\uff0c\u4e0e\u5176\u4ed6\u5b57\u7b26\u4e00\u6837\u3002(e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"\\b = \\\\b"),", )"))),(0,o.yg)("h2",{id:"\u590d\u5408-mode"},"\u590d\u5408 mode"),(0,o.yg)("p",null,"\uff08\u5f85\u8865\u5145\uff09"))}u.isMDXComponent=!0}}]);