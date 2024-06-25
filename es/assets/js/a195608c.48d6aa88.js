"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[802],{6762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(4848),i=n(8453),s=n(9263);const o={sidebar_label:"State"},r="State Management",l={id:"developer/typescript/basics/state",title:"state",description:"\x3c!--",source:"@site/docs/developer/typescript/02_basics/03_state.md",sourceDirName:"developer/typescript/02_basics",slug:"/developer/typescript/basics/state",permalink:"/etherealengine-docs/es/developer/typescript/basics/state",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/developer/typescript/02_basics/03_state.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"State"},sidebar:"typescript",previous:{title:"Physics",permalink:"/etherealengine-docs/es/developer/typescript/basics/physics"},next:{title:"Locations",permalink:"/etherealengine-docs/es/developer/typescript/basics/locations"}},c={},d=[{value:"What is State",id:"what-is-state",level:2},{value:"Local State",id:"local-state",level:3},{value:"Global State",id:"global-state",level:3},{value:"React State",id:"react-state",level:2},{value:"Managing State in iR Engine",id:"managing-state-in-ir-engine",level:2},{value:"Local Variable",id:"local-variable",level:3},{value:"iR Engine&#39;s Hyperflux",id:"ir-engines-hyperflux",level:3},{value:"Hookstate",id:"hookstate",level:4},{value:"Hyperflux",id:"hyperflux",level:4},{value:"<code>useEffect</code>",id:"useeffect",level:3}];function h(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"state-management",children:"State Management"}),"\n",(0,a.jsxs)(t.p,{children:["We have been talking about the concept of ",(0,a.jsx)(t.code,{children:"State"}),", but we never really explained what it is or how to use it correctly. Lets fix that now."]}),"\n",(0,a.jsx)(t.h2,{id:"what-is-state",children:"What is State"}),"\n",(0,a.jsxs)(t.p,{children:["In Computer Science, ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/State_(computer_science)",children:"State"})," is the concept of remembering information (data) about something that happened earlier in time."]}),"\n",(0,a.jsx)(t.p,{children:"Lets say we want to:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Increment a number every second"}),"\n",(0,a.jsx)(t.li,{children:"Keep incrementing the number until the application stops"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["We could store the current value of our number inside a variable, and that variable would contain our ",(0,a.jsx)(t.code,{children:"State"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// Simple example of a variable used to track our clock's current state\nlet seconds = ...\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, our State variable would represent the seconds elapsed.",(0,a.jsx)(t.br,{}),"\n","We could name it ",(0,a.jsx)(t.code,{children:"clock"})," or ",(0,a.jsx)(t.code,{children:"clockSeconds"})," to make it easier to understand the purpose of the data contained in the variable."]}),"\n",(0,a.jsxs)(t.p,{children:["That is exactly what we did with our ",(0,a.jsx)(t.code,{children:"initialized"})," variable from before.",(0,a.jsx)(t.br,{}),"\n","We needed to run our code only once ",(0,a.jsx)(t.em,{children:"(aka when our code is first loaded)"})," so we created an ",(0,a.jsx)(t.code,{children:"if (initialized)"})," check that exited our code early when the value was ",(0,a.jsx)(t.code,{children:"true"}),".",(0,a.jsx)(t.br,{}),"\n","Then, by updating the information contained in our variable to ",(0,a.jsx)(t.code,{children:"true"}),", we created a ",(0,a.jsx)(t.code,{children:"State Variable"})," that remembered whether our code was already initialized or not."]}),"\n",(0,a.jsx)(t.h3,{id:"local-state",children:"Local State"}),"\n",(0,a.jsxs)(t.p,{children:["In Computer Science, ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Scope_(computer_science)",children:"Scope"})," is used to represent the part of the program where a name is valid."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Module Scope"})," is one of the many types of ",(0,a.jsx)(t.code,{children:"Local Scope"})," that can exist.",(0,a.jsx)(t.br,{}),"\n","When a name has Module Scope it means that the variable/function/etc it represents will only be accessible by code in:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The file where it is declared"}),"\n",(0,a.jsxs)(t.li,{children:["A file where the name is imported ",(0,a.jsxs)(t.em,{children:["(only if the name was defined with ",(0,a.jsx)(t.code,{children:"export"}),")"]}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Our ",(0,a.jsx)(t.code,{children:"initialized"})," variable started as a Module Scope variable in the earlier sections of the ",(0,a.jsx)(t.a,{href:"../gettingStarted/hello/system",children:"Hello World"})," tutorial. We declared it at the top-level of our file, so it was ",(0,a.jsx)(t.code,{children:"Local State"})," ",(0,a.jsx)(t.em,{children:"(ie: Local to the Module)"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"let initialized = false\nfunction hello() {\n  if (initialized) return\n  // ... etc\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"But, later on, we changed our code and moved the variable into our custom scene Component:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"export const HelloComponent = defineComponent({\n  ...\n  onInit: () => return { initialized: false }\n})\n"})}),"\n",(0,a.jsxs)(t.p,{children:["With this change, we made our variable accessible anywhere where our Component is accessible.",(0,a.jsx)(t.br,{}),"\n","This still doesn't make our state ",(0,a.jsx)(t.code,{children:"Global"}),', but it changed the scope from "Local to the Module" to "Local to the Component".']}),"\n",(0,a.jsx)(t.h3,{id:"global-state",children:"Global State"}),"\n",(0,a.jsx)(t.p,{children:"So far we have only dealt with Local State"}),"\n",(0,a.jsx)(t.h2,{id:"react-state",children:"React State"}),"\n",(0,a.jsxs)(t.p,{children:["Global State in React is any State that can be shared between Components.",(0,a.jsx)(t.br,{}),"\n","Its purpose is being able to share updatable variables between multiple components. (eg: Accessing a variable from a child component several levels down the component tree) without having to pass their data from component to component ",(0,a.jsx)(t.em,{children:'(called "prop-drilling")'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["React provides the ",(0,a.jsx)(t.a,{href:"https://react.dev/learn/passing-data-deeply-with-context",children:(0,a.jsx)(t.code,{children:"Context"})})," API for this exact purpose.",(0,a.jsx)(t.br,{}),"\n","But, as we will explore in a moment, ",(0,a.jsx)(t.code,{children:"Hookstate"})," and iR Engine's ",(0,a.jsx)(t.code,{children:"Hyperflux"})," are much better ways to manage the state of our project."]}),"\n",(0,a.jsx)(t.h2,{id:"managing-state-in-ir-engine",children:"Managing State in iR Engine"}),"\n",(0,a.jsx)(t.p,{children:"There are multiple ways to keep track of state in iR Engine:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Manually maintaining the value of a variable"}),"\n",(0,a.jsxs)(t.li,{children:["A state variable with ",(0,a.jsx)(t.code,{children:"Hyperflux"})]}),"\n",(0,a.jsxs)(t.li,{children:["A reactor mount with ",(0,a.jsx)(t.code,{children:"useEffect"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"local-variable",children:"Local Variable"}),"\n",(0,a.jsxs)(t.p,{children:["As you saw, we are fully responsible of book-keeping the values contained in the variables we create this way.",(0,a.jsx)(t.br,{}),"\n","There are also strict limitations on what these values can be used for."]}),"\n",(0,a.jsx)(t.h3,{id:"ir-engines-hyperflux",children:"iR Engine's Hyperflux"}),"\n",(0,a.jsx)(t.h4,{id:"hookstate",children:"Hookstate"}),"\n",(0,a.jsxs)(t.p,{children:["Hookstate is a tool created to simplify state management in React applications.\nWe can access a vanilla hookstate State definition with the ",(0,a.jsx)(t.code,{children:"useState"})," Hook from Hookstate.\nSame as any other React Hook, we can only call the ",(0,a.jsx)(t.code,{children:"useState"})," hook inside React Components."]}),"\n",(0,a.jsxs)(t.p,{children:["The variable returned from ",(0,a.jsx)(t.code,{children:"useState"})," will have:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"get()"})," method: Allows us to read the data contained in the variable"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"set()"})," method: Allows us to modify the data of the variable"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"merge()"})," method: Allows us to combine the current data with new data in an ergonomic way"]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"hyperflux",children:"Hyperflux"}),"\n",(0,a.jsx)(t.p,{children:"iR Engine provides a group of functions to manage state asynchronously."}),"\n",(0,a.jsx)(t.h3,{id:"useeffect",children:(0,a.jsx)(t.code,{children:"useEffect"})}),"\n",(0,a.jsx)(t.p,{children:"We want to do some sort of side-effect whenever something happens."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Everything contained is run every time our application is rendered (aka every update)"}),"\n",(0,a.jsx)(t.li,{children:'Everything contained is run when the component is first "Mounted" (explain mount)'}),"\n",(0,a.jsxs)(t.li,{children:["List of values that, whenever they change, the code contained in the ",(0,a.jsx)(t.code,{children:"useEffect"})," function is going to run\nExplain what a reactor mount is"]}),"\n"]}),"\n",(0,a.jsx)(s.W,{title:"Full Solution"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"/**\n * Global state that tracks locally spawned or destroyed artifacts by using action receptors\n */\n\nconst BasicState = defineState({\n  name: 'ee.basic.BasicState',\n\n  initial: {} as Record<EntityUUID, {}>,\n\n  receptors: {\n    onSpawnAction: BasicActions.spawnAction.receive((action) => {\n      const state = getMutableState(BasicState)\n      state[action.entityUUID].merge({})\n    }),\n    onDestroyObject: WorldNetworkAction.destroyObject.receive((action) => {\n      const state = getMutableState(BasicState)\n      state[action.entityUUID].set(none)\n    })\n  }\n})\n\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9263:(e,t,n)=>{n.d(t,{W:()=>s});var a=n(6540),i=n(4848);const s=e=>{const t=e.title?e.title:"Technical Note";return(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)("details",{className:"alert alert--secondary mb-5 bg-neutral-900",children:[(0,i.jsx)("summary",{className:"text-blue-200 hover:cursor-pointer",children:t}),(0,i.jsx)("div",{className:"pt-4",children:e.children})]})})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);