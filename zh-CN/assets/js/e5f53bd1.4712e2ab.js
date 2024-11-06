"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[401148],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,y=u["".concat(p,".").concat(f)]||u[f]||g[f]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},961996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"PERCENTILE_APPROX",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/percentile-approx",id:"sql-manual/sql-functions/aggregate-functions/percentile-approx",title:"PERCENTILE_APPROX",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/percentile-approx.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/percentile-approx",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-approx",draft:!1,tags:[],version:"current",frontMatter:{title:"PERCENTILE_APPROX",language:"zh-CN"},sidebar:"docs",previous:{title:"PERCENTILE_ARRAY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile-array"},next:{title:"PERCENTILE_APPROX_WEIGHTED",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/percentile_approx_weighted"}},p={},c=[{value:"PERCENTILE_APPROX",id:"percentile_approx",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"percentile_approx"},"PERCENTILE_APPROX"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])")),(0,a.yg)("p",null,"\u8fd4\u56de\u7b2cp\u4e2a\u767e\u5206\u4f4d\u70b9\u7684\u8fd1\u4f3c\u503c\uff0cp\u7684\u503c\u4ecb\u4e8e0\u52301\u4e4b\u95f4"),(0,a.yg)("p",null,"compression\u53c2\u6570\u662f\u53ef\u9009\u9879\uff0c\u53ef\u8bbe\u7f6e\u8303\u56f4\u662f","[2048, 10000]","\uff0c\u503c\u8d8a\u5927\uff0c\u7cbe\u5ea6\u8d8a\u9ad8\uff0c\u5185\u5b58\u6d88\u8017\u8d8a\u5927\uff0c\u8ba1\u7b97\u8017\u65f6\u8d8a\u957f\u3002\ncompression\u53c2\u6570\u672a\u6307\u5b9a\u6216\u8bbe\u7f6e\u7684\u503c\u5728","[2048, 10000]","\u8303\u56f4\u5916\uff0c\u4ee510000\u7684\u9ed8\u8ba4\u503c\u8fd0\u884c"),(0,a.yg)("p",null,"\u8be5\u51fd\u6570\u4f7f\u7528\u56fa\u5b9a\u5927\u5c0f\u7684\u5185\u5b58\uff0c\u56e0\u6b64\u5bf9\u4e8e\u9ad8\u57fa\u6570\u7684\u5217\u53ef\u4ee5\u4f7f\u7528\u66f4\u5c11\u7684\u5185\u5b58\uff0c\u53ef\u7528\u4e8e\u8ba1\u7b97tp99\u7b49\u7edf\u8ba1\u503c"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"PERCENTILE_APPROX,PERCENTILE,APPROX"))}g.isMDXComponent=!0}}]);