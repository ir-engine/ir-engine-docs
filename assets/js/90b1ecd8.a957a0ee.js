"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[7547],{8358:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(4848),t=s(8453);const r={},o="Node Types",l={id:"manual/scene/visualscript/nodes/types",title:"Node Types",description:"Events",source:"@site/docs/manual/02_scene/02_visualscript/03_nodes/01_types.md",sourceDirName:"manual/02_scene/02_visualscript/03_nodes",slug:"/manual/scene/visualscript/nodes/types",permalink:"/etherealengine-docs/manual/scene/visualscript/nodes/types",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/02_scene/02_visualscript/03_nodes/01_types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"manual",previous:{title:"Nodes",permalink:"/etherealengine-docs/category/nodes"},next:{title:"Entity Nodes",permalink:"/etherealengine-docs/manual/scene/visualscript/nodes/entity/intro"}},c={},a=[{value:"Events",id:"events",level:2},{value:"Actions",id:"actions",level:2},{value:"Logic",id:"logic",level:2},{value:"Queries",id:"queries",level:2},{value:"Flow Control",id:"flow-control",level:2},{value:"Variables",id:"variables",level:2},{value:"Custom Events",id:"custom-events",level:2}];function d(e){const n={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"node-types",children:"Node Types"}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["Initiate actions with Events: ",(0,i.jsx)(n.strong,{children:"Start"})," (begin execution) and ",(0,i.jsx)(n.strong,{children:"Tick"})," (continuous execution)."]}),"\n",(0,i.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.p,{children:"Trigger animations, scene changes, or update internal states with Actions. Examples include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Log"}),": Record a message."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Play Gltf animation"}),": Start a 3D animation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Play Audio"}),": Play a sound."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Play Video"}),": Display a video."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"logic",children:"Logic"}),"\n",(0,i.jsx)(n.p,{children:"Perform mathematical and logical operations, manipulate strings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Add"}),", ",(0,i.jsx)(n.strong,{children:"Subtract"}),", ",(0,i.jsx)(n.strong,{children:"Multiply"}),", ",(0,i.jsx)(n.strong,{children:"Divide"}),": Basic arithmetic"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"And"}),", ",(0,i.jsx)(n.strong,{children:"Or"}),", ",(0,i.jsx)(n.strong,{children:"Not"}),": Logical operations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"=="}),", ",(0,i.jsx)(n.strong,{children:">"}),", ",(0,i.jsx)(n.strong,{children:">="}),", ",(0,i.jsx)(n.strong,{children:"<"}),", ",(0,i.jsx)(n.strong,{children:"<="}),": Comparison operations"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Concat"}),": Combine strings"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Includes"}),": Check if a string contains another"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"queries",children:"Queries"}),"\n",(0,i.jsx)(n.p,{children:"Retrieve information from the scene through ECS queries."}),"\n",(0,i.jsx)(n.h2,{id:"flow-control",children:"Flow Control"}),"\n",(0,i.jsx)(n.p,{children:"Control execution sequence with user-friendly structures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Branch"}),": Make decisions based on conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Delay"}),": Pause execution for a specified duration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Debounce"}),": Ensure an action only happens after a pause."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Throttle"}),": Limit execution rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FlipFlop"}),": Alternate between two states."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sequence"}),": Execute nodes in a specified order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gate"}),", ",(0,i.jsx)(n.strong,{children:"MultiGate"}),": Control flow based on conditions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DoOnce"}),", ",(0,i.jsx)(n.strong,{children:"DoN"}),": Execute a node once or a specific number of times."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ForLoop"}),": Iterate through a sequence of actions."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(n.p,{children:"Create, set, and retrieve variable values."}),"\n",(0,i.jsx)(n.h2,{id:"custom-events",children:"Custom Events"}),"\n",(0,i.jsx)(n.p,{children:"Design, listen to, and trigger custom events to customize system behavior."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);