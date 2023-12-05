"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Debugging Deployed Instanceservers (and other Kubernetes pods)",i={unversionedId:"creator/testing/debugging_deployed_instanceservers",id:"creator/testing/debugging_deployed_instanceservers",title:"Debugging Deployed Instanceservers (and other Kubernetes pods)",description:"Because of the nature of Kubernetes, logs of fatal errors on instanceserver or API pods can sometimes disappear",source:"@site/docs/2_creator/6_testing/6_debugging_deployed_instanceservers.md",sourceDirName:"2_creator/6_testing",slug:"/creator/testing/debugging_deployed_instanceservers",permalink:"/etherealengine-docs/docs/creator/testing/debugging_deployed_instanceservers",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/2_creator/6_testing/6_debugging_deployed_instanceservers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging Engine in WSL on Phone/Headset",permalink:"/etherealengine-docs/docs/creator/testing/debugging_device_wsl"},next:{title:"readme",permalink:"/etherealengine-docs/docs/creator/avatars/"}},l={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-deployed-instanceservers-and-other-kubernetes-pods"},"Debugging Deployed Instanceservers (and other Kubernetes pods)"),(0,o.kt)("p",null,"Because of the nature of Kubernetes, logs of fatal errors on instanceserver or API pods can sometimes disappear\nbefore one has a chance to view them, as the pods that they were on are deleted, along with their logs."),(0,o.kt)("p",null,"One way to catch these errors is to tail the logs of existing pods from a local machine and then trigger the error.\nThe tail of the logs will persist in your terminal even after the pod has been deleted."),(0,o.kt)("p",null,"You should already have kubectl set up and pointing to your cluster, but if not, do so.\n(see ",(0,o.kt)("a",{parentName:"p",href:"../2_devops_deployment/5_managing_remote_kubernetes.md"},"here")," for links to do that)\nMake sure you don't have a browser tab with the offending location(s) open already, as you want to be tailing\nthe logs before the instance starts."),(0,o.kt)("p",null,"Next, run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get gs"),". If the cluster is fully installed, this will get all of the running instanceserver\npods (",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," will get all pods, if you need to find the names of API pods, etc.)\nSelect the Name of a pod and copy it (in Linux, highlight it and press CTRL+SHIFT+C), then run\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs <pod_name> -c <RELEASE_NAME>-instanceserver -f"),",\ne.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs prod-instanceserver-vhwh2-9vqrv -c prod-instanceserver -f"),". It should output something like this for\nand instanceserver pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> @etherealengine/instanceserver@1.3.0 start\n> cross-env APP_ENV=production ts-node --swc src/index.ts\n\n\ud83d\udc7e bitECS - resizing all data stores from 100000 to 5000\n Powered by three.quarks. https://quarks.art/\n[hyperflux:Action] Added topic default\n[hyperflux:State] registerState SceneState\n[hyperflux:Action] Added Receptor EngineEventReceptor\n[hyperflux:State] registerState EngineState\n[hyperflux:State] registerState ServerState\nTue, 11 Jul 2023 00:38:50 GMT koa deprecated Support for generators will be removed in v3. See the documentation for examples of how to convert old middleware https://github.com/koajs/koa/blob/master/docs/migration.md at ../../node_modules/@feathersjs/koa/lib/index.js:52:27\n[00:38:50.631] INFO: Starting app.\n    component: "server-core:sequelize"\n[hyperflux:State] registerState NetworkState\n[00:38:50.645] INFO: Starting app.\n    component: "server-core:mysql"\n[00:38:50.900] INFO: registered kickCreatedListener\n    component: "instanceserver:channels"\n[00:38:50.901] INFO: Starting instanceserver with NO HTTPS on 3031, if you meant to use HTTPS try \'sudo bash generate-certs\'\n    component: "instanceserver"\n[00:38:51.036] INFO: Feathers-sync started.\n    component: "server-core"\n[00:38:51.634] INFO: Server Ready\n    component: "server-core:sequelize"\n\n')),(0,o.kt)("p",null,"Since the instanceserver pod that is picked to handle a given world or media instance is random, you'll want to\nopen a few more tabs in your terminal and repeat the above ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs")," command, substituting a different\ninstanceserver pod name in each tab, so that you're tailing all of the current pods. Then go to the location that is\ndisplaying problematic behavior, or otherwise trigger the action that is causing problems, and you should see the error\nin one of the terminals. If it's a fatal error, the logging will end with the pod, but the logs will stay in that terminal."),(0,o.kt)("p",null,"Note that if you want to log further errors, you may need to get the names of the new pods that are spun up to replace\nthe ones that crashed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get gs")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," again, and then using the new pods' names in\n",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs")," commands."))}u.isMDXComponent=!0}}]);