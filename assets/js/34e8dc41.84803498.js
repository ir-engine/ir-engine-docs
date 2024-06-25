"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1463],{5194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var i=s(4848),o=s(8453);const t={},d="Debugging in WSL on Phone/Headset",c={id:"manual/modules/engine/debugging/deviceWSL",title:"Debugging in WSL on Phone/Headset",description:"This section covers testing/debugging on phone/headset when engine stack hosted in WSL2 Ubuntu on Windows 11.",source:"@site/docs/manual/03_modules/01_engine/08_debugging/02_deviceWSL.md",sourceDirName:"manual/03_modules/01_engine/08_debugging",slug:"/manual/modules/engine/debugging/deviceWSL",permalink:"/etherealengine-docs/manual/modules/engine/debugging/deviceWSL",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/01_engine/08_debugging/02_deviceWSL.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"manual",previous:{title:"Basic Debugging",permalink:"/etherealengine-docs/manual/modules/engine/debugging/basic"},next:{title:"Debugging Deployed InstanceServers (and other Kubernetes pods)",permalink:"/etherealengine-docs/manual/modules/engine/debugging/deployedInstanceServers"}},r={},a=[];function g(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"debugging-in-wsl-on-phoneheadset",children:"Debugging in WSL on Phone/Headset"}),"\n",(0,i.jsx)(n.p,{children:"This section covers testing/debugging on phone/headset when engine stack hosted in WSL2 Ubuntu on Windows 11."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure that your ",(0,i.jsx)(n.code,{children:".env.local"})," and database entries points to ",(0,i.jsx)(n.code,{children:"localhost"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Open a location i.e. ",(0,i.jsx)(n.code,{children:"https://localhost:3000/location/apartment"})," through Windows 11 chrome. It should work fine."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Connect your device (currently tested on Samsung S22 Ultra) with PC and enabled USB debugging and access prompts as mentioned on ",(0,i.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/remote-debugging",children:'"https://developer.chrome.com/docs/devtools/remote-debugging"'})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once your device is connected, then you can see your device's browser tabs in PC's Chrome as show in below image. ",(0,i.jsx)(n.code,{children:"chrome://inspect/#devices"}),"\n",(0,i.jsx)(n.img,{alt:"Device connected to PC Chrome",src:s(765).A+"",width:"1166",height:"540"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Make sure the check boxes marked in below are checked.\n",(0,i.jsx)(n.img,{alt:"Remote Devtool Options",src:s(9142).A+"",width:"865",height:"473"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Click on "Port forwarding" button and ensure you have entries as shown in below image. Also make sure to check the port forwarding checkbox in that modal.\n',(0,i.jsx)(n.img,{alt:"Port Forwarding Options",src:s(5471).A+"",width:"522",height:"444"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once this is done and you have Port forwardings having green circles before them which means forwarding is working as shown in below image.\n",(0,i.jsx)(n.img,{alt:"Port Forwarding Enabled",src:s(4144).A+"",width:"1092",height:"504"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to ",(0,i.jsx)(n.code,{children:"https://localhost:3000/location/apartment"})," in your device's browser."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["On your PC you can inspect this and allow if you face any certificate errors as shown in below image.\n",(0,i.jsx)(n.img,{alt:"Remote Debugging",src:s(5321).A+"",width:"1919",height:"1033"})]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},765:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/debugging_device_wsl_1-db578454e478384a8f5896f93530f0fe.png"},9142:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/debugging_device_wsl_2-41a58d269748d0ffce692c73a84530e9.png"},5471:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/debugging_device_wsl_3-188460f0a293898906be512799e62be2.png"},4144:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/debugging_device_wsl_4-8c79f91da94c7664b5191cefbf9b4fae.png"},5321:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/debugging_device_wsl_5-70ba778cf0114bf6a6b6bda743434562.png"},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var i=s(6540);const o={},t=i.createContext(o);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);