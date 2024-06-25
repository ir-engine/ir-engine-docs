"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[7213],{2155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var s=t(4848),o=t(8453);const a={},c="Locations",i={id:"manual/concepts/locations",title:"Locations",description:"Locations can be thought of as instantiations of a scene.",source:"@site/docs/manual/02_concepts/03_locations.md",sourceDirName:"manual/02_concepts",slug:"/manual/concepts/locations",permalink:"/etherealengine-docs/es/manual/concepts/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/02_concepts/03_locations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"manual",previous:{title:"Projects",permalink:"/etherealengine-docs/es/manual/concepts/projects"},next:{title:"Models",permalink:"/etherealengine-docs/es/manual/concepts/avatars/avatarModels"}},l={},r=[];function d(e){const n={br:"br",code:"code",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"locations",children:"Locations"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Locations"})," can be thought of as instantiations of a scene.",(0,s.jsx)(n.br,{}),"\n","They allow scenes to be connected to a session that can be shared between multiple devices at the same time."]}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.strong,{children:"instance"})," is an individual session running at a location, in which users are connected together in real time. This allows the deployment to scale events and locations to potentially millions of concurrent users without having to support them all on a single instance."]}),"\n",(0,s.jsx)(n.p,{children:"There are two types of instances:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"World"})," instances: Handle the spatial objects in the scene.\n",(0,s.jsx)(n.em,{children:"(such as avatars, vehicles and grabbables)"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Media"})," instances: Handle realtime audio, video and screenshare."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Media instances can be tied to a location, or exist ephemerally as a group call (called ",(0,s.jsx)(n.code,{children:"parties"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["Instances can also be customised with the ",(0,s.jsx)(n.code,{children:"matchmaker"})," functionality to create private rooms."]}),"\n",(0,s.jsxs)(n.p,{children:["Locations can be loaded via the ",(0,s.jsx)(n.code,{children:"/location/<locationName>"})," route, where ",(0,s.jsx)(n.code,{children:"locationName"})," is the name of the location.\niR Engine always adds locations ",(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"apartment"})," and ",(0,s.jsx)(n.code,{children:"sky-station"})," by default to new projects."]}),"\n",(0,s.jsxs)(n.p,{children:["Adding a new location is done from the ",(0,s.jsx)(n.code,{children:"/admin/locations"})," route, and live instances can be viewed from ",(0,s.jsx)(n.code,{children:"/admin/instances"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},a=s.createContext(o);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);