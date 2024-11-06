"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[507791],{15680:(e,o,r)=>{r.d(o,{xA:()=>d,yg:()=>m});var t=r(296540);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function l(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?l(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),p=function(e){var o=t.useContext(i),r=o;return e&&(r="function"==typeof e?e(o):n(n({},o),e)),r},d=function(e){var o=p(e.components);return t.createElement(i.Provider,{value:o},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},g=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,m=c["".concat(i,".").concat(g)]||c[g]||u[g]||l;return r?t.createElement(m,n(n({ref:o},d),{},{components:r})):t.createElement(m,n({ref:o},d))}));function m(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=g;var s={};for(var i in o)hasOwnProperty.call(o,i)&&(s[i]=o[i]);s.originalType=e,s[c]="string"==typeof e?e:a,n[1]=s;for(var p=2;p<l;p++)n[p]=r[p];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},427646:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=r(58168),a=(r(296540),r(15680));const l={title:"Deploying Doris Operator",language:"en"},n=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",id:"version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",title:"Deploying Doris Operator",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-coupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-operator",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Deploying Doris Operator",language:"en"},sidebar:"docs",previous:{title:"Quick Start",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-quickstart"},next:{title:"Configuring Doris Cluster",permalink:"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-config-cluster"}},i={},p=[{value:"Add Doris Cluster resource definition",id:"add-doris-cluster-resource-definition",level:2},{value:"Add Doris Operator",id:"add-doris-operator",level:2},{value:"Solution 1: Quickly deploy Doris Operator",id:"solution-1-quickly-deploy-doris-operator",level:3},{value:"Option 2: Customized deployment of Doris Operator",id:"option-2-customized-deployment-of-doris-operator",level:3},{value:"Option 3: Helm deploys Doris Operator",id:"option-3-helm-deploys-doris-operator",level:3},{value:"Check service status",id:"check-service-status",level:2}],d={toc:p},c="wrapper";function u(e){let{components:o,...r}=e;return(0,a.yg)(c,(0,t.A)({},d,r,{components:o,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"add-doris-cluster-resource-definition"},"Add Doris Cluster resource definition"),(0,a.yg)("p",null,"Doris Operator extends Kubernetes with Custom Resource Definition (CRD). The CRD of Doris Cluster encapsulates the description of Doris objects, such as the description of FE or BE. For details, please refer to ","[doris-operator-api]","(",(0,a.yg)("a",{parentName:"p",href:"https://github.com/selectdb/doris-operator/blob/master"},"https://github.com/selectdb/doris-operator/blob/master")," /doc/api.md). Before deploying Doris, you need to create the CRD of Doris Cluster."),(0,a.yg)("p",null,"Doris Cluster CRD can be deployed in a Kubernetes environment with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml\n")),(0,a.yg)("p",null,"If there is no external network, download the CRD file to your local computer first:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://raw.githubusercontent.com/selectdb/doris-operator/master/config/crd/bases/doris.selectdb.com_dorisclusters.yaml\nkubectl create -f ./doris.selectdb.com_dorisclusters.yaml\n")),(0,a.yg)("p",null,"The following is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"customresourcedefinition.apiextensions.k8s.io/dorisclusters.doris.selectdb.com created\n")),(0,a.yg)("p",null,"After the Doris Cluster CRD is created, you can view the created CRD with the following command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get crd | grep doris\n")),(0,a.yg)("p",null,"The following is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"dorisclusters.doris.selectdb.com                      2024-02-22T16:23:13Z\n")),(0,a.yg)("h2",{id:"add-doris-operator"},"Add Doris Operator"),(0,a.yg)("h3",{id:"solution-1-quickly-deploy-doris-operator"},"Solution 1: Quickly deploy Doris Operator"),(0,a.yg)("p",null,"You can directly pull the Doris Operator template in the warehouse for quick deployment."),(0,a.yg)("p",null,"Doris Operator can be deployed in a Kubernetes cluster using the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/selectdb/doris-operator/master/config/operator/operator.yaml\n")),(0,a.yg)("p",null,"The following is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,a.yg)("h3",{id:"option-2-customized-deployment-of-doris-operator"},"Option 2: Customized deployment of Doris Operator"),(0,a.yg)("p",null,"After creating the CRD, there are two ways to deploy Doris Operator on the Kubernetes cluster: online and offline deployment."),(0,a.yg)("p",null,"The minimum requirements for deploying operator services are specified in the operator.yaml file. In order to adapt to complex production environments, you can download the operator.yaml file and update the configuration as desired."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Install Doris Operator online")),(0,a.yg)("p",null,"After modifying the operator.yaml file, you can deploy the Doris Operator service using the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./operator.yaml\n")),(0,a.yg)("p",null,"The following is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Offline installation of Doris Operator")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Download the image file required to run the operator")),(0,a.yg)("p",null,"If the server is not connected to the external network, you need to download the corresponding operator image file first. Doris Operator uses the following images:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"selectdb/doris.k8s-operator:latest\n")),(0,a.yg)("p",null,"Run the following command on a server that can connect to the external network to download the image:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"## download doris operator image\ndocker pull selectdb/doris.k8s-operator:latest\n## save the doris operator image as a tar package\ndocker save -o doris.k8s-operator-latest.tar selectdb/doris.k8s-operator:latest\n")),(0,a.yg)("p",null,"Place the packaged tar file into all Kubernetes nodes and run the following command to upload the image:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"docker load -i doris.k8s-operator-latest.tar\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Configure Doris Operator")),(0,a.yg)("p",null,"After downloading the operator.yaml file, you can modify the template according to your production environment expectations."),(0,a.yg)("p",null,"Doris Operator is a stateless Deployment in the Kubernetes cluster. Items such as ",(0,a.yg)("inlineCode",{parentName:"p"},"limits"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"replica"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"label"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"namespace")," and other items can be modified according to needs. If you need to specify a certain version of the doirs operator image, you can make the following modifications to the operator.yaml file after uploading the image:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'...\ncontainers:\n  - command:\n      - /dorisoperator\n    args:\n      - --leader-elect\n    image: selectdb/doris.k8s-operator:v1.0.0\n    name: dorisoperator\n    securityContext:\n      allowPrivilegeEscalation: false\n      capabilities:\n        drop:\n          - "ALL"\n  ...\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Install Doris Operator")),(0,a.yg)("p",null,"After modifying the Doris Operator template, you can use the apply command to deploy the Operator:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f ./operator.yaml\n")),(0,a.yg)("p",null,"The following is the expected output:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"namespace/doris created\nrole.rbac.authorization.k8s.io/leader-election-role created\nrolebinding.rbac.authorization.k8s.io/leader-election-rolebinding created\nclusterrole.rbac.authorization.k8s.io/doris-operator created\nclusterrolebinding.rbac.authorization.k8s.io/doris-operator-rolebinding created\nserviceaccount/doris-operator created\ndeployment.apps/doris-operator created\n")),(0,a.yg)("h3",{id:"option-3-helm-deploys-doris-operator"},"Option 3: Helm deploys Doris Operator"),(0,a.yg)("p",null,"Helm Chart is an encapsulation of a series of YAML files that describe Kubernetes-related resources. When deploying an application through Helm, you can customize the application's metadata to facilitate application distribution. Chart is a Helm package in TAR format for deploying Kubernetes native applications. Helm Chart can simplify the process of deploying Doris clusters."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Add a deployment warehouse")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Add warehouse online")),(0,a.yg)("p",null,"Add the remote repository through the ",(0,a.yg)("inlineCode",{parentName:"p"},"repo add")," command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo add doris-repo https://charts.selectdb.com\n")),(0,a.yg)("p",null,"Update the latest version of the chart through the ",(0,a.yg)("inlineCode",{parentName:"p"},"repo update")," command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm repo update doris-repo\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Install Doris Operator")),(0,a.yg)("p",null,"Doris Operator can be installed in the doris namespace using the default configuration through the ",(0,a.yg)("inlineCode",{parentName:"p"},"helm install")," command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install operator doris-repo/doris-operator\n")),(0,a.yg)("p",null,"If you need to customize the assembly ",(0,a.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml"),", you can refer to the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml operator doris-repo/doris-operator\n")),(0,a.yg)("p",null,"Check the deployment status of Pods through the ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command. When the Doris Operator's Pod is in the Running state and all containers in the Pod are ready, the deployment is successful."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Add warehouse offline")),(0,a.yg)("p",null,"If the server cannot connect to the external network, you need to download the chart resources of Doris Operator and Doris Cluster in advance."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Download offline chart resources")),(0,a.yg)("p",null,"Download ",(0,a.yg)("inlineCode",{parentName:"p"},"doris-operator-{chart_version}.tgz")," to install Doris Operator chart. If you need to download version 1.4.0 of Doris Operator, you can use the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://charts.selectdb.com/doris-operator-1.4.0.tgz\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Install Doris Operator")),(0,a.yg)("p",null,"Doris Operator can be installed through the ",(0,a.yg)("inlineCode",{parentName:"p"},"helm install")," command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install operator doris-operator-1.4.0.tgz\n")),(0,a.yg)("p",null,"If you need to customize the assembly ",(0,a.yg)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/doris/doris-operator?modal=values"},"values.yaml"),", you can refer to the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"helm install -f values.yaml operator doris-operator-1.4.0.tgz\n")),(0,a.yg)("p",null,"Check the deployment status of Pods through the ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get pods")," command. When the Doris Operator's Pod is in the Running state and all containers in the Pod are ready, the deployment is successful."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod --namespace doris\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-866bd449bb-zl5mr   1/1     Running   0          18m\n")),(0,a.yg)("h2",{id:"check-service-status"},"Check service status"),(0,a.yg)("p",null,"After deploying the Operator service, you can check the service status through the following command."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n doris\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              READY   STATUS    RESTARTS   AGE\ndoris-operator-6f47594455-p5tp7   1/1     Running   0          11s\n")),(0,a.yg)("p",null,"You need to ensure that the STATUS status is Running and the status of all containers in the pod is Ready."))}u.isMDXComponent=!0}}]);