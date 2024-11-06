"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[747092],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(t),g=a,d=y["".concat(p,".").concat(g)]||y[g]||s[g]||i;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[y]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},423632:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const i={title:"\u67e5\u8be2\u4f18\u5316\u5668\u4ecb\u7ecd",language:"zh-CN"},l=void 0,o={unversionedId:"query-acceleration/query-optimizer",id:"version-2.1/query-acceleration/query-optimizer",title:"\u67e5\u8be2\u4f18\u5316\u5668\u4ecb\u7ecd",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/query-optimizer.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/query-optimizer",permalink:"/zh-CN/docs/query-acceleration/query-optimizer",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u67e5\u8be2\u4f18\u5316\u5668\u4ecb\u7ecd",language:"zh-CN"},sidebar:"docs",previous:{title:"HLL \u8fd1\u4f3c\u53bb\u91cd",permalink:"/zh-CN/docs/query-acceleration/distinct-counts/using-hll"},next:{title:"Pipeline \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/query-acceleration/pipeline-execution-engine"}},p={},c=[{value:"\u7814\u53d1\u80cc\u666f",id:"\u7814\u53d1\u80cc\u666f",level:2},{value:"Doris \u67e5\u8be2\u4f18\u5316\u5668\u4f18\u52bf",id:"doris-\u67e5\u8be2\u4f18\u5316\u5668\u4f18\u52bf",level:2},{value:"\u66f4\u806a\u660e",id:"\u66f4\u806a\u660e",level:3},{value:"\u66f4\u7a33\u5b9a",id:"\u66f4\u7a33\u5b9a",level:3},{value:"\u66f4\u7075\u6d3b",id:"\u66f4\u7075\u6d3b",level:3},{value:"\u4f18\u5316\u5668\u5de5\u4f5c\u539f\u7406",id:"\u4f18\u5316\u5668\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u6574\u4f53\u6d41\u7a0b",id:"\u6574\u4f53\u6d41\u7a0b",level:3},{value:"\u5e38\u7528\u4f1a\u8bdd\u53d8\u91cf",id:"\u5e38\u7528\u4f1a\u8bdd\u53d8\u91cf",level:2}],u={toc:c},y="wrapper";function s(e){let{components:r,...i}=e;return(0,a.yg)(y,(0,n.A)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u7814\u53d1\u80cc\u666f"},"\u7814\u53d1\u80cc\u666f"),(0,a.yg)("p",null,"\u5728\u5f53\u524d\u7684\u4fe1\u606f\u6280\u672f\u73af\u5883\u4e2d\uff0c\u67e5\u8be2\u4f18\u5316\u5668\u9762\u4e34\u7740\u591a\u91cd\u6311\u6218\uff1a\u4e00\u65b9\u9762\uff0c\u5b83\u4eec\u9700\u8981\u5904\u7406\u7528\u6237\u65e5\u76ca\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u548c\u591a\u6837\u5316\u7684\u67e5\u8be2\u573a\u666f\uff1b\u53e6\u4e00\u65b9\u9762\uff0c\u7528\u6237\u5bf9\u67e5\u8be2\u5b9e\u65f6\u6027\u7684\u8981\u6c42\u6108\u53d1\u4e25\u683c\uff0c\u6e34\u671b\u80fd\u591f\u5373\u65f6\u83b7\u53d6\u6240\u9700\u7ed3\u679c\u3002\u6b64\u5916\uff0c\u4e3a\u4e86\u5e94\u5bf9\u4e0d\u65ad\u51fa\u73b0\u7684\u65b0\u9700\u6c42\uff0c\u67e5\u8be2\u4f18\u5316\u5668\u5fc5\u987b\u5177\u5907\u5feb\u901f\u8fed\u4ee3\u4e0e\u7075\u6d3b\u9002\u5e94\u7684\u80fd\u529b\u3002"),(0,a.yg)("p",null,"\u57fa\u4e8e\u8fd9\u6837\u7684\u80cc\u666f\uff0cDoris \u5f00\u59cb\u7740\u624b\u7814\u53d1\u4e86\u4e00\u6b3e\u5168\u65b0\u7684\u67e5\u8be2\u4f18\u5316\u5668\u3002\u8be5\u4f18\u5316\u5668\u4f9d\u6258\u73b0\u4ee3\u4f18\u5316\u5668\u67b6\u6784\uff0c\u65e8\u5728\u66f4\u9ad8\u6548\u5730\u5e94\u5bf9\u5f53\u524d Doris \u573a\u666f\u7684\u67e5\u8be2\u8bf7\u6c42\uff0c\u540c\u65f6\u63d0\u4f9b\u5353\u8d8a\u7684\u6269\u5c55\u6027\uff0c\u4e3a\u672a\u6765\u53ef\u80fd\u51fa\u73b0\u7684\u66f4\u590d\u6742\u9700\u6c42\u5960\u5b9a\u575a\u5b9e\u57fa\u7840\u3002"),(0,a.yg)("h2",{id:"doris-\u67e5\u8be2\u4f18\u5316\u5668\u4f18\u52bf"},"Doris \u67e5\u8be2\u4f18\u5316\u5668\u4f18\u52bf"),(0,a.yg)("h3",{id:"\u66f4\u806a\u660e"},"\u66f4\u806a\u660e"),(0,a.yg)("p",null,"\u4f18\u5316\u5668\u5c06\u6bcf\u4e2a RBO\uff08\u57fa\u4e8e\u89c4\u5219\u7684\u4f18\u5316\uff09\u548c CBO\uff08\u57fa\u4e8e\u6210\u672c\u7684\u4f18\u5316\uff09\u7684\u4f18\u5316\u70b9\uff0c\u4ee5\u89c4\u5219\u7684\u5f62\u5f0f\u6e05\u6670\u5730\u5448\u73b0\u51fa\u6765\u3002\u9488\u5bf9\u6bcf\u4e00\u4e2a\u89c4\u5219\uff0c\u4f18\u5316\u5668\u90fd\u63d0\u4f9b\u4e86\u4e00\u7ec4\u63cf\u8ff0\u67e5\u8be2\u8ba1\u5212\u5f62\u72b6\u7684\u6a21\u5f0f\uff0c\u8fd9\u4e9b\u6a21\u5f0f\u80fd\u591f\u7cbe\u786e\u5730\u5339\u914d\u53ef\u4f18\u5316\u7684\u67e5\u8be2\u8ba1\u5212\u3002\u56e0\u6b64\uff0c\u4f18\u5316\u5668\u80fd\u591f\u66f4\u597d\u5730\u652f\u6301\u8bf8\u5982\u591a\u5c42\u5b50\u67e5\u8be2\u5d4c\u5957\u7b49\u66f4\u4e3a\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3002"),(0,a.yg)("p",null,"\u540c\u65f6\uff0c\u4f18\u5316\u5668\u7684 CBO \u57fa\u4e8e\u5148\u8fdb\u7684 Cascades \u6846\u67b6\uff0c\u5145\u5206\u5229\u7528\u4e86\u4e30\u5bcc\u7684\u6570\u636e\u7edf\u8ba1\u4fe1\u606f\u3001\u6570\u636e\u7279\u5f81\u4fe1\u606f\u4ee5\u53ca\u7cbe\u5fc3\u8c03\u4f18\u7684\u4ee3\u4ef7\u6a21\u578b\u3002\u8fd9\u4f7f\u5f97\u4f18\u5316\u5668\u5728\u5904\u7406\u591a\u8868 Join \u7b49\u590d\u6742\u67e5\u8be2\u65f6\uff0c\u80fd\u591f\u6e38\u5203\u6709\u4f59\uff0c\u8f7b\u677e\u5e94\u5bf9\u3002"),(0,a.yg)("h3",{id:"\u66f4\u7a33\u5b9a"},"\u66f4\u7a33\u5b9a"),(0,a.yg)("p",null,"\u4f18\u5316\u5668\u7684\u6240\u6709\u4f18\u5316\u89c4\u5219\u5747\u5728\u903b\u8f91\u6267\u884c\u8ba1\u5212\u6811\u4e0a\u5b8c\u6210\u3002\u67e5\u8be2\u8bed\u6cd5\u8bed\u4e49\u89e3\u6790\u5b8c\u6210\u540e\uff0c\u67e5\u8be2\u4f1a\u88ab\u8f6c\u6362\u4e3a\u6811\u72b6\u7ed3\u6784\u3002\u76f8\u6bd4\u65e7\u4f18\u5316\u5668\uff0c\u65b0\u4f18\u5316\u5668\u7684\u5185\u90e8\u6570\u636e\u7ed3\u6784\u66f4\u4e3a\u5408\u7406\u3001\u7edf\u4e00\u3002"),(0,a.yg)("p",null,"\u4ee5\u5b50\u67e5\u8be2\u5904\u7406\u4e3a\u4f8b\uff0c\u65b0\u4f18\u5316\u5668\u57fa\u4e8e\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u907f\u514d\u4e86\u65e7\u4f18\u5316\u5668\u4e2d\u4f17\u591a\u89c4\u5219\u5bf9\u5b50\u67e5\u8be2\u7684\u5355\u72ec\u5904\u7406\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u4f18\u5316\u89c4\u5219\u51fa\u73b0\u903b\u8f91\u9519\u8bef\u7684\u53ef\u80fd\u6027\u3002"),(0,a.yg)("h3",{id:"\u66f4\u7075\u6d3b"},"\u66f4\u7075\u6d3b"),(0,a.yg)("p",null,"\u4f18\u5316\u5668\u7684\u67b6\u6784\u8bbe\u8ba1\u5408\u7406\u4e14\u73b0\u4ee3\uff0c\u4f7f\u5f97\u6269\u5c55\u4f18\u5316\u89c4\u5219\u548c\u5904\u7406\u9636\u6bb5\u53d8\u5f97\u975e\u5e38\u65b9\u4fbf\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u80fd\u591f\u8fc5\u901f\u589e\u52a0\u65b0\u7684\u529f\u80fd\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u65ad\u53d8\u5316\u7684\u65b0\u9700\u6c42\u3002"),(0,a.yg)("h2",{id:"\u4f18\u5316\u5668\u5de5\u4f5c\u539f\u7406"},"\u4f18\u5316\u5668\u5de5\u4f5c\u539f\u7406"),(0,a.yg)("h3",{id:"\u6574\u4f53\u6d41\u7a0b"},"\u6574\u4f53\u6d41\u7a0b"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"\u4f18\u5316\u5668\u5de5\u4f5c\u539f\u7406",src:t(265715).A,width:"2560",height:"1256"})),(0,a.yg)("p",null,"\u4f18\u5316\u5668\u7684\u6267\u884c\u6d41\u7a0b\u5927\u81f4\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8bed\u6cd5\u5206\u6790\uff1a")," \u4f18\u5316\u5668\u4f1a\u5c1d\u8bd5\u5c06 SQL \u6587\u672c\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u3002\u5982\u679c SQL \u6587\u672c\u5408\u6cd5\uff0c\u5219\u7ee7\u7eed\u8fdb\u884c\u540e\u7eed\u6b65\u9aa4\uff1b\u5982\u679c\u975e\u6cd5\uff0c\u5219\u4f1a\u62a5\u9519\u5e76\u7ec8\u6b62\u6267\u884c\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u8bed\u4e49\u5206\u6790\uff1a")," \u4f18\u5316\u5668\u4f1a\u5bf9 AST \u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u8bed\u4e49\u5206\u6790\u3002\u8fd9\u4e00\u6b65\u9aa4\u4f1a\u68c0\u67e5 SQL \u67e5\u8be2\u4e2d\u7684\u8868\u3001\u5217\u3001\u51fd\u6570\u7b49\u662f\u5426\u5b58\u5728\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u4f7f\u7528\u662f\u5426\u7b26\u5408\u8bed\u6cd5\u548c\u8bed\u4e49\u89c4\u5219\u3002\u5982\u679c\u8bed\u4e49\u5408\u6cd5\uff0c\u5219\u7ee7\u7eed\u6267\u884c\uff1b\u5982\u679c\u8bed\u4e49\u975e\u6cd5\uff0c\u5219\u4f1a\u62a5\u9519\u5e76\u7ec8\u6b62\u6267\u884c\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u6539\u5199\u67e5\u8be2\u8ba1\u5212\uff08RBO\uff09\uff1a")," \u5728\u8bed\u6cd5\u548c\u8bed\u4e49\u5206\u6790\u4e4b\u540e\uff0c\u4f18\u5316\u5668\u4f1a\u8fdb\u884c\u57fa\u4e8e\u89c4\u5219\u7684\u4f18\u5316\uff08RBO\uff09\u3002\u8fd9\u4e00\u6b65\u9aa4\u4f1a\u901a\u8fc7\u4e00\u7cfb\u5217\u9884\u5b9a\u4e49\u7684\u89c4\u5219\u5bf9\u67e5\u8be2\u8ba1\u5212\u8fdb\u884c\u6539\u5199\uff0c\u4ee5\u786e\u5b9a\u6027\u5730\u4f18\u5316\u6267\u884c\u901f\u5ea6\u3002\u5e38\u89c1\u7684\u4f18\u5316\u624b\u6bb5\u5305\u62ec\u5217\u88c1\u526a\u3001\u8c13\u8bcd\u4e0b\u63a8\u3001\u5206\u533a\u88c1\u526a\u7b49\u3002")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"\u4f18\u5316\u67e5\u8be2\u8ba1\u5212\uff08CBO\uff09\uff1a")," \u6700\u540e\uff0c\u4f18\u5316\u5668\u4f1a\u8fdb\u884c\u57fa\u4e8e\u4ee3\u4ef7\u7684\u4f18\u5316\uff08CBO\uff09\u3002\u5728\u8fd9\u4e00\u6b65\u9aa4\u4e2d\uff0c\u4f18\u5316\u5668\u4f1a\u5728\u641c\u7d22\u7a7a\u95f4\u4e2d\u679a\u4e3e\u7b49\u4ef7\u7684\u8ba1\u5212\u96c6\u5408\uff0c\u5e76\u8bc4\u4f30\u5b83\u4eec\u7684\u6267\u884c\u4ee3\u4ef7\u3002\u901a\u8fc7\u6bd4\u8f83\u4e0d\u540c\u8ba1\u5212\u7684\u6267\u884c\u4ee3\u4ef7\uff0c\u4f18\u5316\u5668\u4f1a\u9009\u62e9\u4ee3\u4ef7\u6700\u5c0f\u7684\u8ba1\u5212\u4f5c\u4e3a\u6700\u7ec8\u7684\u6267\u884c\u8ba1\u5212\u3002\u8fd9\u4e00\u6b65\u9aa4\u65e8\u5728\u786e\u4fdd\u67e5\u8be2\u80fd\u591f\u4ee5\u6700\u9ad8\u6548\u7684\u65b9\u5f0f\u6267\u884c\uff0c\u4ece\u800c\u63d0\u4f9b\u6700\u4f73\u7684\u6027\u80fd\u3002"))),(0,a.yg)("h2",{id:"\u5e38\u7528\u4f1a\u8bdd\u53d8\u91cf"},"\u5e38\u7528\u4f1a\u8bdd\u53d8\u91cf"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1. \u8bbe\u7f6e\u89c4\u5212\u8d85\u65f6\u65f6\u95f4 ",(0,a.yg)("inlineCode",{parentName:"strong"},"nereids_timeout_second"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u6b64\u53d8\u91cf\u7528\u4e8e\u8bbe\u7f6e\u67e5\u8be2\u89c4\u5212\u7684\u6700\u5927\u5141\u8bb8\u65f6\u95f4\u3002\u5f53\u89c4\u5212\u65f6\u95f4\u8d85\u51fa\u8be5\u8bbe\u5b9a\u503c\u65f6\uff0c\u67e5\u8be2\u89c4\u5212\u5c06\u88ab\u7ec8\u6b62\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u4fe1\u606f\u3002\u5728\u89c4\u5212\u67e5\u8be2\u8bed\u53e5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7cfb\u7edf\u4f1a\u83b7\u53d6 SQL \u4e2d\u6d89\u53ca\u7684\u6240\u6709\u8868\u7684\u8bfb\u9501\uff0c\u8fd9\u4e00\u673a\u5236\u7684\u4e3b\u8981\u76ee\u7684\u662f\u7ef4\u62a4\u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\uff0c\u9632\u6b62\u56e0\u89c4\u5212\u65f6\u95f4\u8fc7\u957f\u800c\u9020\u6210\u7684\u8d44\u6e90\u8fc7\u5ea6\u5360\u7528\u4ee5\u53ca\u9501\u51b2\u7a81\u95ee\u9898\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9ed8\u8ba4\u503c\uff1a30s")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u9002\u7528\u573a\u666f\uff1a\u5f53\u67e5\u8be2\u6d89\u53ca\u5927\u91cf\u5916\u90e8\u8868\u6216\u67e5\u8be2\u8bed\u53e5\u7279\u522b\u590d\u6742\u65f6\uff0c\u53ef\u4ee5\u9002\u5f53\u589e\u52a0\u6b64\u503c\uff0c\u4ee5\u786e\u4fdd\u67e5\u8be2\u80fd\u591f\u6b63\u5e38\u8fdb\u884c\u3002"))))}s.isMDXComponent=!0},265715:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/cost-based-optimizer-fc98bc8cc103d7a455129ef94b21d4ae.jpg"}}]);