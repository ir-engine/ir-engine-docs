"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[481],{5269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(4848),s=t(8453);const o={},a="Locations",r={id:"manual/modules/infrastructure/adminPanel/locations",title:"Locations",description:"The Locations page provides a tool to add new locations and list all existing locations of an iR Engine's deployment.",source:"@site/docs/manual/03_modules/05_infrastructure/02_adminPanel/05_locations.md",sourceDirName:"manual/03_modules/05_infrastructure/02_adminPanel",slug:"/manual/modules/infrastructure/adminPanel/locations",permalink:"/etherealengine-docs/manual/modules/infrastructure/adminPanel/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/05_infrastructure/02_adminPanel/05_locations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"manual",previous:{title:"Routes",permalink:"/etherealengine-docs/manual/modules/infrastructure/adminPanel/routes"},next:{title:"Instances",permalink:"/etherealengine-docs/manual/modules/infrastructure/adminPanel/instances"}},l={},c=[{value:"Location Table",id:"location-table",level:2},{value:"View/Edit Properties",id:"viewedit-properties",level:3},{value:"Create Location",id:"create-location",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"locations",children:"Locations"}),"\n",(0,i.jsx)(n.p,{children:"The Locations page provides a tool to add new locations and list all existing locations of an iR Engine's deployment."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(2100).A+"",width:"1296",height:"357"})}),"\n",(0,i.jsx)(n.h2,{id:"location-table",children:"Location Table"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Name"}),":",(0,i.jsx)(n.br,{}),"\n","The human-readable name of the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Scene"}),":",(0,i.jsx)(n.br,{}),"\n","The scene file that will be used for the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Max Users Per Instance"}),":",(0,i.jsx)(n.br,{}),"\n","The maximum number of users that are allowed in the location before a new instance of that location is created."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),":",(0,i.jsx)(n.br,{}),"\n","The access type of the location ",(0,i.jsx)(n.em,{children:"(public, private, showroom)"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tags"}),":",(0,i.jsx)(n.br,{}),"\n","The tags that the location is marked with."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Video Enabled"}),":",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"(Yes/No)"})," Whether the location has the Video feature enabled or not."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Action"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"View"}),": Opens a dialog to manage the properties of the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delete"}),": Orders the deployment to delete the location from the list ",(0,i.jsx)(n.em,{children:"(no undoing possible)"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"viewedit-properties",children:"View/Edit Properties"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Action: View"})," dialog provides a tool to edit all properties of the Location Table, plus:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Audio Enabled"}),":",(0,i.jsx)(n.br,{}),"\n","Enable/disable the Audio feature for the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Screen Sharing Enabled"}),":",(0,i.jsx)(n.br,{}),"\n","Enable/disable the Screen Sharing feature for the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Face Streaming Enabled"}),":",(0,i.jsx)(n.br,{}),"\n","Enable/disable the Face Streaming feature for the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Make Lobby"}),":",(0,i.jsx)(n.br,{}),"\n","Enable/disable the Lobby property for the location."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Featured"}),":",(0,i.jsx)(n.br,{}),"\n","Enable/disable the Featured property for the location."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6404).A+"",width:"490",height:"421"})}),"\n",(0,i.jsx)(n.h2,{id:"create-location",children:"Create Location"}),"\n",(0,i.jsxs)(n.p,{children:["Pressing the ",(0,i.jsx)(n.code,{children:"Add Location"})," button will open a dialog to create a new location in the deployment."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:t(352).A+"",width:"493",height:"398"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsxs)(n.em,{children:["Note: Refer to the previous section (",(0,i.jsx)(n.a,{href:"#location-table",children:"Location Table"}),") for a description of each of the properties."]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},352:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create-add60aa875ced2eb03443a977438d9da.png"},6404:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/edit-d36aa34d224cbe64c9a07e97a9cc179a.png"},2100:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/list-f1c0df2ea826b69d865a17273b5b1131.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);