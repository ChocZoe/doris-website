"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[729677],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var o=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return a?o.createElement(m,i(i({ref:t},c),{},{components:a})):o.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},324661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var o=a(58168),r=(a(296540),a(15680));const n={title:"Why Apache Doris is the best open source alternative to Rockset",summary:"Among of all the claim-to-be alternatives to Rockset, Apache Doris is one of the few that cover all the key features of Rockset.",description:"Among of all the claim-to-be alternatives to Rockset, Apache Doris is one of the few that cover all the key features of Rockset.",date:"2024-06-24",author:"Zaki Lu",tags:["Top News"],image:"/images/doris-vs-rockset.jpeg"},i=void 0,s={permalink:"/zh-CN/blog/apache-doris-vs-rockset",source:"@site/blog/apache-doris-vs-rockset.md",title:"Why Apache Doris is the best open source alternative to Rockset",description:"Among of all the claim-to-be alternatives to Rockset, Apache Doris is one of the few that cover all the key features of Rockset.",date:"2024-06-24T00:00:00.000Z",formattedDate:"2024\u5e746\u670824\u65e5",tags:[{label:"Top News",permalink:"/zh-CN/blog/tags/top-news"}],hasTruncateMarker:!1,authors:[{name:"Zaki Lu"}],frontMatter:{title:"Why Apache Doris is the best open source alternative to Rockset",summary:"Among of all the claim-to-be alternatives to Rockset, Apache Doris is one of the few that cover all the key features of Rockset.",description:"Among of all the claim-to-be alternatives to Rockset, Apache Doris is one of the few that cover all the key features of Rockset.",date:"2024-06-24",author:"Zaki Lu",tags:["Top News"],image:"/images/doris-vs-rockset.jpeg"},prevItem:{title:"Apache Doris 2.1.4 just released",permalink:"/zh-CN/blog/release-note-2.1.4"},nextItem:{title:"Steps to industry-leading query speed: evolution of the Apache Doris execution engine",permalink:"/zh-CN/blog/evolution-of-the-apache-doris-execution-engine"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"OpenAI dropped a bomb on the data world by announcing ",(0,r.yg)("a",{parentName:"p",href:"https://openai.com/index/openai-acquires-rockset/"},"the acquisition of Rockset"),", a cloud-based, fully managed analytical database. Among all the congratulating voices, one question is raised: ",(0,r.yg)("strong",{parentName:"p"},"why ",(0,r.yg)("a",{parentName:"strong",href:"https://rockset.com"},"Rockset")),"?"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"OpenAI acquisition Rockset",src:a(331778).A,width:"1212",height:"482"})),(0,r.yg)("p",null,"Founded in 2016 by Venkat Venkataramani, former Engineering Director at Meta, Rockset focuses on real-time search and data analytics. Compared to other DBMS, Rockset stands out by its:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Real-time data updates"),": Rockset ensures data freshness for users by its capabilities in fetching and delivering the latest data. It supports real-time updates at the granularity of data fields, which can be performed within milliseconds.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Converged index"),": It reaps the benefits of inverted index, columnar storage, and row-oriented storage, and provides efficient and flexible data querying services.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Native support for semi-structured data"),": Rockset is well-suited to the growing demand for semi-structured data processing, hash joins, and nested loop joins.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"SQL and JOIN compatibility"),": The Search Index of Rockset is optimized for various join queries."))),(0,r.yg)("p",null,"The news also gaves all Rockset users a ticking time bomb: they have to find an appropriate alternative to Rockset for their own use case within three months. This, of course, arises as an opportunity for other analytical databases on the market. However, of all the claim-to-be alternatives, only a few of them cover all the above-mentioned key features of Rockset. Among them, Apache Doris is worth looking into."),(0,r.yg)("p",null,"As an open-source real-time data warehouse, Apache Doris is trusted by over 4000 enterprise users worldwide with powerful functionalities including:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Real-time data updates"),": Apache Doris supports not only ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/table-design/data-model/unique"},"real-time updates")," and deletion, but also real-time partial column updates, making it particularly useful in cases involving frequent data updates.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Row/column hybrid storage"),": Apache Doris is a column-oriented data warehouse that achieves world-leading OLAP performance on ",(0,r.yg)("a",{parentName:"p",href:"https://benchmark.clickhouse.com/"},"ClickBench"),". Additionally, it supports row-oriented storage to serve ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/query/high-concurrent-point-query/"},"high-concurrency point query scenarios"),", which allows it to respond to almost a million query requests within milliseconds. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/table-design/index/inverted-index"},"Inverted index")," and full-text searches"),": Apache Doris provides high efficiency and flexibility in keyword searching. It allows index creation on all fields and a flexible combination of data fields for multi-dimensional data analysis.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Native support for semi-structured data"),": Apache Doris has introduced the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/sql-manual/sql-types/Data-Types/VARIANT"},"VARIANT")," data type to accommodate semi-structured data. It enables flexible data schema and high query speed on top of cost-efficient data storage. Compared to traditional JSON methods, VARIANT can bring a 10x performance improvement.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Support for various SQL and ",(0,r.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/query/join-optimization/doris-join-optimization"},"join operations")),": Apache Doris is highly compatible with MySQL syntaxes and interfaces. It supports INNER JOIN, CROSS JOIN, and all types of OUTER JOIN. The best part is its capability of auto-optimization based on data types to guarantee optimal performance under different circumstances."))),(0,r.yg)("p",null,"As a Top-Level Project of the Apache Software Foundation, Apache Doris is supported by a robust and fast-growing community. It has accumulated over 11.8K GitHub stars and 636 contributors so far."),(0,r.yg)("p",null,"Apache Doris is the best open-source alternative to Rockset. Feel free to contact ",(0,r.yg)("a",{parentName:"p",href:"mailto:dev@doris.apache.org"},"dev@doris.apache.org")," for more assistance."))}d.isMDXComponent=!0},331778:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/openai-twitter-rockset-629193903b8235732c88086caa39cc0c.png"}}]);