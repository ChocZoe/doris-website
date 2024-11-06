"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[899130],{15680:(e,l,n)=>{n.d(l,{xA:()=>i,yg:()=>m});var r=n(296540);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function t(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?t(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function o(e,l){if(null==e)return{};var n,r,a=function(e,l){if(null==e)return{};var n,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)n=t[r],l.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)n=t[r],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var l=r.useContext(p),n=l;return e&&(n="function"==typeof e?e(l):s(s({},l),e)),n},i=function(e){var l=u(e.components);return r.createElement(p.Provider,{value:l},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var l=e.children;return r.createElement(r.Fragment,{},l)}},d=r.forwardRef((function(e,l){var n=e.components,a=e.mdxType,t=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||t;return n?r.createElement(m,s(s({ref:l},i),{},{components:n})):r.createElement(m,s({ref:l},i))}));function m(e,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var t=n.length,s=new Array(t);s[0]=d;var o={};for(var p in l)hasOwnProperty.call(l,p)&&(o[p]=l[p]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<t;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},156431:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const t={title:"\u90e8\u7f72 Doris \u96c6\u7fa4",language:"zh-CN"},s=void 0,o={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster",title:"\u90e8\u7f72 Doris \u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-coupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u90e8\u7f72 Doris \u96c6\u7fa4",language:"zh-CN"},sidebar:"docs",previous:{title:"\u914d\u7f6e Doris \u96c6\u7fa4",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-config-cluster"},next:{title:"\u8bbf\u95ee Doris \u96c6\u7fa4 ",permalink:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster"}},p={},u=[{value:"\u90e8\u7f72\u96c6\u7fa4",id:"\u90e8\u7f72\u96c6\u7fa4",level:2},{value:"\u4f7f\u7528 Custom Resource \u6587\u4ef6\u90e8\u7f72",id:"\u4f7f\u7528-custom-resource-\u6587\u4ef6\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Helm \u90e8\u7f72",id:"\u4f7f\u7528-helm-\u90e8\u7f72",level:3},{value:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001",level:2},{value:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001",id:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001",level:3},{value:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001",id:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001",level:3}],i={toc:u},c="wrapper";function g(e){let{components:l,...n}=e;return(0,a.yg)(c,(0,r.A)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u5728\u89c4\u5212\u96c6\u7fa4\u62d3\u6251\u540e\uff0c\u53ef\u4ee5\u5728 Kubernetes \u4e2d\u90e8\u7f72 Doris \u96c6\u7fa4\u3002"),(0,a.yg)("h2",{id:"\u90e8\u7f72\u96c6\u7fa4"},"\u90e8\u7f72\u96c6\u7fa4"),(0,a.yg)("h3",{id:"\u4f7f\u7528-custom-resource-\u6587\u4ef6\u90e8\u7f72"},"\u4f7f\u7528 Custom Resource \u6587\u4ef6\u90e8\u7f72"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u90e8\u7f72")),(0,a.yg)("p",null,"\u5728\u7ebf\u7f72\u96c6\u7fa4\u9700\u8981\u7ecf\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u521b\u5efa namespace\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ${namespace}\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u90e8\u7f72 Doris \u96c6\u7fa4")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u90e8\u7f72")),(0,a.yg)("p",null,"\u79bb\u7ebf\u90e8\u7f72 Doris \u96c6\u7fa4\u9700\u8981\u5728\u6709\u5916\u7f51\u7684\u673a\u5668\u4e0a\u5c06 Doris \u96c6\u7fa4\u7528\u5230\u7684 docker \u955c\u50cf\uff0c\u4e0a\u4f20\u5230\u6240\u6709\u7684 node \u8282\u70b9\u4e0a\u3002\u7136\u540e\u4f7f\u7528 docker load \u5c06\u955c\u50cf\u5b89\u88c5\u5230\u670d\u52a1\u5668\u4e0a\u3002\u79bb\u7ebf\u90e8\u7f72\u9700\u8981\u7ecf\u5386\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6240\u9700\u7684\u955c\u50cf")),(0,a.yg)("p",null,"\u90e8\u7f72 Doris \u96c6\u7fa4\u9700\u8981\u4ee5\u4e0b\u955c\u50cf\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"selectdb/doris.fe-ubuntu:2.0.2\nselectdb/doris.be-ubuntu:2.0.2\n")),(0,a.yg)("p",null,"\u5c06\u955c\u50cf\u4e0b\u8f7d\u5230\u672c\u5730\u540e\u6253\u5305\u6210 tar \u6587\u4ef6"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"## download docker image\ndocker pull selectdb/doris.fe-ubuntu:2.0.2\ndocker pull selectdb/doris.be-ubuntu:2.0.2\n\n## save docker image as a tar package\ndocker save -o doris.fe-ubuntu-v2.0.2.tar selectdb/doris.fe-ubuntu:2.0.2\ndocker save -o doris.be-ubuntu-v2.0.2.tar docker pull selectdb/doris.be-ubuntu:2.0.2\n")),(0,a.yg)("p",null,"\u5c06 image tar \u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u6267\u884c docker load \u547d\u4ee4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"## load docker image\ndocker load -i doris.fe-ubuntu-v2.0.2.tar\ndocker load -i doris.be-ubuntu-v2.0.2.tar\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u521b\u5efa namespace\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace ${namespace}\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u90e8\u7f72 Doris \u96c6\u7fa4")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./${cluster_sample}.yaml -n ${namespace}\n")),(0,a.yg)("h3",{id:"\u4f7f\u7528-helm-\u90e8\u7f72"},"\u4f7f\u7528 Helm \u90e8\u7f72"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u5728\u7ebf\u90e8\u7f72")),(0,a.yg)("p",null,"\u5728\u5b89\u88c5\u5f00\u59cb\u524d\uff0c\u9700\u8981\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93\uff0c\u82e5\u5df2\u7ecf\u6dfb\u52a0\u5219\u53ef\u76f4\u63a5\u8fdb\u884c Doris Cluster \u7684\u5b89\u88c5\uff0c\u5426\u5219\u8bf7\u53c2\u8003\u6dfb\u52a0",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator#E6%96%B9%E6%A1%88%E4%B8%89helm-%E9%83%A8%E7%BD%B2-doris-operator"},"\u90e8\u7f72 Doris Operator")," \u65f6 ",(0,a.yg)("strong",{parentName:"p"},"\u6dfb\u52a0\u90e8\u7f72\u4ed3\u5e93")," \u7684\u64cd\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Doris Cluster")),(0,a.yg)("p",null,"\u5b89\u88c5 ",(0,a.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris"},"doriscluster"),"\uff0c\u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\u6b64\u90e8\u7f72\u4ec5\u90e8\u7f72 3 \u4e2a FE \u548c 3 \u4e2a BE \u7ec4\u4ef6\uff0c\u4f7f\u7528\u9ed8\u8ba4 ",(0,a.yg)("inlineCode",{parentName:"p"},"storageClass")," \u5b9e\u73b0 PV \u52a8\u6001\u4f9b\u7ed9\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install doriscluster doris-repo/doris\n")),(0,a.yg)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u8d44\u6e90\u548c\u96c6\u7fa4\u5f62\u6001\uff0c\u8bf7\u6839\u636e ",(0,a.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," \u7684\u5404\u4e2a\u8d44\u6e90\u914d\u7f6e\u7684\u6ce8\u89e3\u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e\uff0c\u5e76\u6267\u884c\u5982\u4e0b\u547d\u4ee4:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml doriscluster doris-repo/doris\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u9a8c\u8bc1 doris \u96c6\u7fa4\u5b89\u88c5\u7ed3\u679c")),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b pod \u90e8\u7f72\u72b6\u6001\u3002\u5f53 ",(0,a.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u7684 Pod \u5904\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u79bb\u7ebf\u90e8\u7f72")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d Doris Cluster Chart \u8d44\u6e90")),(0,a.yg)("p",null,"\u4e0b\u8f7d ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-{chart_version}.tgz")," \u5b89\u88c5 Doris Cluster chart\u3002\u5982\u9700\u8981\u4e0b\u8f7d 1.6.1 \u7248\u672c\u7684 Doris \u96c6\u7fa4\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://charts.selectdb.com/doris-1.6.1.tgz\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Doris \u96c6\u7fa4")),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"helm install")," \u547d\u4ee4\u53ef\u4ee5\u5b89\u88c5 Doris \u96c6\u7fa4\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install doriscluster doris-1.4.0.tgz\n")),(0,a.yg)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u88c5\u914d ",(0,a.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris?modal=values"},"values.yaml")," \uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u547d\u4ee4:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml doriscluster doris-1.4.0.tgz\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u9a8c\u8bc1 doris \u96c6\u7fa4\u5b89\u88c5\u7ed3\u679c")),(0,a.yg)("p",null,"\u901a\u8fc7 ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," \u547d\u4ee4\u53ef\u4ee5\u67e5\u770b pod \u90e8\u7f72\u72b6\u6001\u3002\u5f53 ",(0,a.yg)("inlineCode",{parentName:"p"},"doriscluster")," \u7684 Pod \u5904\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\u4e14 Pod \u5185\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ecf\u5c31\u7eea\uff0c\u5373\u90e8\u7f72\u6210\u529f\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                     READY   STATUS    RESTARTS   AGE\ndoriscluster-helm-fe-0   1/1     Running   0          1m39s\ndoriscluster-helm-fe-1   1/1     Running   0          1m39s\ndoriscluster-helm-fe-2   1/1     Running   0          1m39s\ndoriscluster-helm-be-0   1/1     Running   0          16s\ndoriscluster-helm-be-1   1/1     Running   0          16s\ndoriscluster-helm-be-2   1/1     Running   0          16s\n")),(0,a.yg)("h2",{id:"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"},"\u67e5\u770b\u96c6\u7fa4\u72b6\u6001"),(0,a.yg)("h3",{id:"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001"},"\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001"),(0,a.yg)("p",null,"\u96c6\u7fa4\u90e8\u7f72\u8d44\u6e90\u4e0b\u53d1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\u96c6\u7fa4\u72b6\u6001\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n ${namespace}\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                       READY   STATUS    RESTARTS   AGE\ndoriscluster-sample-fe-0   1/1     Running   0          20m\ndoriscluster-sample-be-0   1/1     Running   0          19m\n")),(0,a.yg)("p",null,"\u5f53\u6240\u6709 pod \u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"STATUS")," \u90fd\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"Running")," \u72b6\u6001\uff0c \u4e14\u6240\u6709\u7ec4\u4ef6\u7684 pod \u4e2d\u6240\u6709\u5bb9\u5668\u90fd ",(0,a.yg)("inlineCode",{parentName:"p"},"READY")," \u8868\u793a\u6574\u4e2a\u96c6\u7fa4\u90e8\u7f72\u6b63\u5e38\u3002"),(0,a.yg)("h3",{id:"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001"},"\u68c0\u67e5\u90e8\u7f72\u8d44\u6e90\u72b6\u6001"),(0,a.yg)("p",null,"Doris Operator \u4f1a\u6536\u96c6\u96c6\u7fa4\u670d\u52a1\u7684\u72b6\u6001\u663e\u793a\u5230\u4e0b\u53d1\u7684\u8d44\u6e90\u4e2d\u3002Doris Operator \u5b9a\u4e49\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"DorisCluster")," \u7c7b\u578b\u8d44\u6e90\u540d\u79f0\u7684\u7b80\u5199 ",(0,a.yg)("inlineCode",{parentName:"p"},"dcr"),"\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u7c7b\u578b\u67e5\u770b\u96c6\u7fa4\u72b6\u6001\u65f6\u53ef\u7528\u7b80\u5199\u66ff\u4ee3\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get dcr\n")),(0,a.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                  FESTATUS    BESTATUS    CNSTATUS   BROKERSTATUS\ndoriscluster-sample   available   available\n")),(0,a.yg)("p",null,"\u5f53\u914d\u7f6e\u7684\u76f8\u5173\u670d\u52a1\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"STATUS")," \u90fd\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"available")," \u65f6\uff0c\u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u3002"))}g.isMDXComponent=!0}}]);