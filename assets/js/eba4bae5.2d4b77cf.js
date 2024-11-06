"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[699180],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),s=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=a,f=y["".concat(i,".").concat(d)]||y[d]||p[d]||o;return r?t.createElement(f,c(c({ref:n},u),{},{components:r})):t.createElement(f,c({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[y]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},780648:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(58168),a=(r(296540),r(15680));const o={title:"ARRAY_CONCAT",language:"en"},c=void 0,l={unversionedId:"sql-manual/sql-functions/array-functions/array-concat",id:"version-2.1/sql-manual/sql-functions/array-functions/array-concat",title:"ARRAY_CONCAT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-concat.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-concat",permalink:"/docs/sql-manual/sql-functions/array-functions/array-concat",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_CONCAT",language:"en"},sidebar:"docs",previous:{title:"ARRAY_COMPACT",permalink:"/docs/sql-manual/sql-functions/array-functions/array-compact"},next:{title:"ARRAY_ZIP",permalink:"/docs/sql-manual/sql-functions/array-functions/array-zip"}},i={},s=[{value:"array_concat",id:"array_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},y="wrapper";function p(e){let{components:n,...r}=e;return(0,a.yg)(y,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_concat"},"array_concat"),(0,a.yg)("p",null,"array_concat"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Concat all arrays passed in the arguments"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Array<T> array_concat(Array<T>, ...)")),(0,a.yg)("h4",{id:"returned-value"},"Returned value"),(0,a.yg)("p",null,"The concated array."),(0,a.yg)("p",null,"Type: Array."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_concat([1, 2], [7, 8], [5, 6]);\n+-----------------------------------------------------+\n| array_concat(ARRAY(1, 2), ARRAY(7, 8), ARRAY(5, 6)) |\n+-----------------------------------------------------+\n| [1, 2, 7, 8, 5, 6]                                  |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select col2, col3, array_concat(col2, col3) from array_test;\n+--------------+-----------+------------------------------+\n| col2         | col3      | array_concat(`col2`, `col3`) |\n+--------------+-----------+------------------------------+\n| [1, 2, 3]    | [3, 4, 5] | [1, 2, 3, 3, 4, 5]           |\n| [1, NULL, 2] | [NULL]    | [1, NULL, 2, NULL]           |\n| [1, 2, 3]    | NULL      | NULL                         |\n| []           | []        | []                           |\n+--------------+-----------+------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,CONCAT,ARRAY_CONCAT"))}p.isMDXComponent=!0}}]);