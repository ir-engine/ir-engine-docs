"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=g(n),p=i,b=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(b,a(a({ref:t},l),{},{components:n})):r.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var g=2;g<o;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=n(7462),i=(n(7294),n(3905));const o={hide_table_of_contents:!0},a="Debugging",c={unversionedId:"creator/testing/debugging",id:"creator/testing/debugging",title:"Debugging",description:"This section covers different techniques for debugging the source code.",source:"@site/docs/2_creator/6_testing/4_debugging.md",sourceDirName:"2_creator/6_testing",slug:"/creator/testing/debugging",permalink:"/etherealengine-docs/es/docs/creator/testing/debugging",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/2_creator/6_testing/4_debugging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Writing Good Tests",permalink:"/etherealengine-docs/es/docs/creator/testing/test_driven_development"},next:{title:"Debugging Engine in WSL on Phone/Headset",permalink:"/etherealengine-docs/es/docs/creator/testing/debugging_device_wsl"}},s={},g=[{value:"Basic Debugging",id:"basic-debugging",level:2}],l={toc:g},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"This section covers different techniques for debugging the source code."),(0,i.kt)("h2",{id:"basic-debugging"},"Basic Debugging"),(0,i.kt)("p",null,"This config can be used to debug instance server & backend server code. Navigate to 'Run & Debug' tab of vscode."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a breakpoint to desired line of code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select 'Debug Dev' from debug config dropdown.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hit the run/play button to start debugging.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Breakpoint will be hit as the code executes that line of code."))),(0,i.kt)("p",null,"Below image further elaborates this."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Basic Debug Image",src:n(8542).Z,width:"1919",height:"960"})))}d.isMDXComponent=!0},8542:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic_debug-2e22f14bcb2032b9a1ce61143d3e28a6.png"}}]);