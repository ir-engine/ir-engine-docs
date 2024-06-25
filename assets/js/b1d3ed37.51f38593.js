"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1814],{5829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var i=t(4848),o=t(8453),r=t(9263),s=t(7152);const l={sidebar_label:"The Engine"},a="Working with iR Engine",c={id:"developer/typescript/gettingStarted/hello/engine",title:"Working with iR Engine",description:"You will need three very important steps for creating a project with iR Engine:",source:"@site/docs/developer/typescript/01_gettingStarted/02_hello/02_engine.md",sourceDirName:"developer/typescript/01_gettingStarted/02_hello",slug:"/developer/typescript/gettingStarted/hello/engine",permalink:"/etherealengine-docs/developer/typescript/gettingStarted/hello/engine",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/developer/typescript/01_gettingStarted/02_hello/02_engine.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"The Engine"},sidebar:"typescript",previous:{title:"The ECS Pattern",permalink:"/etherealengine-docs/developer/typescript/gettingStarted/hello/ecs"},next:{title:"Systems",permalink:"/etherealengine-docs/developer/typescript/gettingStarted/hello/system"}},d={},h=[{value:"Requirements and Dependencies",id:"requirements-and-dependencies",level:2},{value:"Installing and running iR Engine",id:"installing-and-running-ir-engine",level:2},{value:"Installing and running projects",id:"installing-and-running-projects",level:2},{value:"Programming with iR Engine",id:"programming-with-ir-engine",level:2},{value:"Project Configuration File",id:"project-configuration-file",level:3},{value:"Module Imports",id:"module-imports",level:3},{value:"Modifying our Source Code",id:"modifying-our-source-code",level:2}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"working-with-ir-engine",children:"Working with iR Engine"}),"\n",(0,i.jsx)(n.p,{children:"You will need three very important steps for creating a project with iR Engine:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Installing iR Engine"}),"\n",(0,i.jsx)(n.li,{children:"Installing (or creating) a project"}),"\n",(0,i.jsx)(n.li,{children:"Modify and run the source code of your project"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["We already solved #1 and #2 in the ",(0,i.jsx)(n.a,{href:"../quickstart",children:"Quickstart"})," guide.",(0,i.jsx)(n.br,{}),"\n","Lets do a quick review of how #1 and #2 work, and we  will start programming with the engine right after."]}),"\n",(0,i.jsx)(n.h2,{id:"requirements-and-dependencies",children:"Requirements and Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["We will use ",(0,i.jsx)(n.code,{children:"git"})," and ",(0,i.jsx)(n.code,{children:"npm"})," a lot throughout the guides on this website."]}),"\n",(0,i.jsxs)(n.p,{children:["Whether you followed the Quickstart guide for Ubuntu, or installed the engine with the Manual instructions, you will have both ",(0,i.jsx)(n.code,{children:"git"})," and ",(0,i.jsx)(n.code,{children:"npm"})," already installed."]}),"\n",(0,i.jsxs)(n.p,{children:["You don't need to understand either of them to get started. This guide will teach you what to do every time they are needed.",(0,i.jsx)(n.br,{}),"\n","Just remember that they are used a lot to work with the engine locally."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-and-running-ir-engine",children:"Installing and running iR Engine"}),"\n",(0,i.jsxs)(n.p,{children:["iR Engine is a web application.",(0,i.jsx)(n.br,{}),"\n","Just like any other web application, it needs to be run in a server. And that server will provide access to the engine remotely to anyone with access to its address."]}),"\n",(0,i.jsxs)(n.p,{children:['We will eventually learn how to work with "deployed" versions of the engine.',(0,i.jsx)(n.br,{}),"\n","But we need to follow this tutorial in a ",(0,i.jsx)(n.code,{children:"local development server"})," instead."]}),"\n",(0,i.jsxs)(n.p,{children:["That's exactly what the Quickstart installation guide automated for us.",(0,i.jsx)(n.br,{}),"\n","As the ",(0,i.jsx)(n.code,{children:"localhost"})," part of the URL indicates, we are running a ",(0,i.jsx)(n.code,{children:"local"})," version of the engine."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-and-running-projects",children:"Installing and running projects"}),"\n",(0,i.jsxs)(n.p,{children:["iR Engine can be ",(0,i.jsx)(n.strong,{children:"extended"}),' with projects.\nThey are equivalent to the concept of "projects" in other engines, except they are modular like npm packages ',(0,i.jsx)(n.em,{children:"(they are npm packages too)"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The engine scans for projects mounted in the ",(0,i.jsx)(n.code,{children:"/packages/projects/projects"})," sub-folder.",(0,i.jsx)(n.br,{}),"\n","This means that we can install and run new projects by executing the following commands inside our iR Engine installation folder:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/EtherealEngine/ee-tutorial-hello packages/projects/projects/ee-tutorial-hello\nnpm run dev\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You will need to stop the engine and re-run it whenever you install a new project."})}),"\n",(0,i.jsxs)(r.W,{children:[(0,i.jsxs)(n.p,{children:["Please note that, in the ",(0,i.jsx)(n.a,{href:"../quickstart",children:"Quickstart"})," guide, we cloned the ",(0,i.jsx)(n.code,{children:"Step0"})," branch from the ",(0,i.jsx)(n.code,{children:"ee-tutorial-hello"})," project specifically, and not the whole project.",(0,i.jsx)(n.br,{}),"\n","We did this by adding ",(0,i.jsx)(n.code,{children:"-b Step0"})," to the ",(0,i.jsx)(n.code,{children:"git clone"})," command:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone -b Step0 https://github.com/EtherealEngine/ee-tutorial-hello packages/projects/projects/ee-tutorial-hello\n"})}),(0,i.jsx)(n.p,{children:"This step won't be needed for your own projects."})]}),"\n",(0,i.jsx)(n.p,{children:"These steps will:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Download a copy of the project's git repository, so the engine can load it"}),"\n",(0,i.jsxs)(n.li,{children:["Install all ",(0,i.jsx)(n.code,{children:"npm"})," packages required by the project"]}),"\n",(0,i.jsx)(n.li,{children:"Run a local development version of the engine"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This is also the process recommended for installation of your own projects.",(0,i.jsx)(n.br,{}),"\n","The difference will be that, instead of starting your project from the minimal HelloWorld example like we are doing now, you will start from a pre-made template."]})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["Each project's source code is executed globally.",(0,i.jsx)(n.br,{}),"\n","This will become very important later on in this guide."]})}),"\n",(0,i.jsx)(n.h2,{id:"programming-with-ir-engine",children:"Programming with iR Engine"}),"\n",(0,i.jsx)(n.p,{children:"There are two very important steps to take in order to connect the source code of our project to the engine:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We need to import some iR Engine's modules"}),"\n",(0,i.jsx)(n.li,{children:"We need to export our code so the engine can run it"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"project-configuration-file",children:"Project Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:["Every project has an ",(0,i.jsx)(n.code,{children:"xrengine.config.ts"})," file that defines how it will behave in the engine.",(0,i.jsx)(n.br,{}),"\n","There are multiple options available, but the important thing to remember is that our ",(0,i.jsx)(n.code,{children:"src/Hello.ts"})," code will be connected to the engine from here."]}),"\n",(0,i.jsx)(r.W,{title:"Config File",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/xrengine.config.ts"',children:"import type { ProjectConfigInterface } from '@etherealengine/projects/ProjectConfigInterface'\n\nconst config: ProjectConfigInterface = {\n  onEvent: undefined,\n  thumbnail: '/static/etherealengine_thumbnail.jpg',\n  routes: {},\n  services: undefined,\n  databaseSeed: undefined,\n  // highlight-start\n  worldInjection: () => import('./src/Hello')  // Import our Hello World code\n  // highlight-end\n}\n\nexport default config\n"})})}),"\n",(0,i.jsxs)(n.p,{children:["We don't need to know much more about this file for now. We will explore it further in the ",(0,i.jsx)(n.code,{children:"Beyond the Basics"})," guide."]}),"\n",(0,i.jsx)(n.h3,{id:"module-imports",children:"Module Imports"}),"\n",(0,i.jsxs)(n.p,{children:["In this minimal tutorial we are adding a sphere primitive to the scene.",(0,i.jsx)(n.br,{}),"\n","As this sphere will be a ",(0,i.jsx)(n.code,{children:"Spatial"})," object, we will import a few components from the Spatial engine module:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/src/Hello.ts"',children:"import { NameComponent } from '@etherealengine/spatial/src/common/NameComponent'\nimport { VisibleComponent } from '@etherealengine/spatial/src/renderer/components/VisibleComponent'\nimport { TransformComponent } from '@etherealengine/spatial/src/transform/components/TransformComponent'\nimport { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We will be adding these Components to our Entity, and Components are part of the ECS pattern.",(0,i.jsx)(n.br,{}),"\n","As such, we will need to use the iR Engine ECS management functions.",(0,i.jsx)(n.br,{}),"\n","The engine provides a convenient way to import all ECS related functions at once through the ",(0,i.jsx)(n.code,{children:"ECS"})," ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/namespaces.html",children:"namespace"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/src/Hello.ts"',children:"import { ECS } from '@etherealengine/ecs'\n"})}),"\n",(0,i.jsx)(n.h2,{id:"modifying-our-source-code",children:"Modifying our Source Code"}),"\n",(0,i.jsxs)(n.p,{children:["We have learned how our minimal example works, but so far we haven't needed to modify any of its source code.",(0,i.jsx)(n.br,{}),"\n","This will be our first modification to the code of the project."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["This guide uses ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Project-based_learning",children:(0,i.jsx)(n.code,{children:"Project-based Learning"})})," as its core teaching philosophy.",(0,i.jsx)(n.br,{}),"\n","From now on, you will be actively modifying the source code of the ",(0,i.jsx)(n.code,{children:"ee-tutorial-hello"})," in every step of the way."]})}),"\n",(0,i.jsxs)(n.p,{children:["Lets start with a simple change.",(0,i.jsx)(n.br,{}),"\n","We will modify our Sphere ",(0,i.jsx)(n.code,{children:"PrimitiveGeometryComponent"})," to load our geometry with a name, instead of the hardcoded number ",(0,i.jsx)(n.code,{children:"1"})," that we used before."]}),"\n",(0,i.jsx)(n.p,{children:"In order to do this, we need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the file ",(0,i.jsx)(n.code,{children:"ee-tutorial-hello/src/Hello.ts"})," with a text editor."]}),"\n",(0,i.jsxs)(n.li,{children:["Import the ",(0,i.jsx)(n.code,{children:"GeometryTypeEnum"})," from the ",(0,i.jsx)(n.code,{children:"scene/constants/"})," sub-module inside the ",(0,i.jsx)(n.code,{children:"engine"})," module."]}),"\n",(0,i.jsxs)(n.li,{children:["Replace the ",(0,i.jsx)(n.code,{children:"1"})," with a call to the ",(0,i.jsx)(n.code,{children:"SphereGeometry"})," name that is stored inside it ",(0,i.jsx)(n.code,{children:"GeometryTypeEnum"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Try to figure out the changes by yourself before looking at the solution.",(0,i.jsx)(n.br,{}),"\n","I don't expect you to know where that enum is stored, so here are some hints to make it easier:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// The full path to the GeometryTypeEnum is:\n'@etherealengine/engine/src/scene/constants/GeometryTypeEnum'\n\n// Getting the ID number of a Sphere by its enum name will look like:\nGeometryTypeEnum.SphereGeometry\n\n// To be certain that your changes are working, set the geometry to be a cylinder instead:\nGeometryTypeEnum.CylinderGeometry\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["As we said before, you will need to stop the engine and re-run it whenever you ",(0,i.jsx)(n.em,{children:"install"})," a new project.",(0,i.jsx)(n.br,{}),"\n","But you can just refresh the webpage when you update your source code and the engine will load your changes correctly."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"VSCode"})," is the recommended editor for programming with iR Engine.",(0,i.jsx)(n.br,{}),"\n","It is not required, but it is highly recommended.",(0,i.jsx)(n.br,{}),"\n","VSCode has support for some important features and plugins that make the iR Engine programming workflow really smooth and featureful."]})}),"\n",(0,i.jsxs)(r.W,{title:"Solution",children:[(0,i.jsx)(n.p,{children:"The imports section of our code will now be:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/src/Hello.ts"',children:"// ... our other imports\nimport { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'\nimport { Vector3 } from 'three'\n// highlight-start\nimport { GeometryTypeEnum } from '@etherealengine/engine/src/scene/constants/GeometryTypeEnum'\n// highlight-end\n"})}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PrimitiveGeometryComponent"})," call will now be:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/src/Hello.ts"',children:"const entity = ECS.createEntity()\n// ... our other calls to setComponent\n// highlight-start\nECS.setComponent(entity, PrimitiveGeometryComponent, { geometryType: GeometryTypeEnum.SphereGeometry })\n// highlight-end\n"})}),(0,i.jsx)(s.B,{title:"Full Solution",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="ee-tutorial-hello/src/Hello.ts" showLineNumbers',children:"import { ECS } from '@etherealengine/ecs'\nimport { NameComponent } from '@etherealengine/spatial/src/common/NameComponent'\nimport { VisibleComponent } from '@etherealengine/spatial/src/renderer/components/VisibleComponent'\nimport { TransformComponent } from '@etherealengine/spatial/src/transform/components/TransformComponent'\nimport { PrimitiveGeometryComponent } from '@etherealengine/engine/src/scene/components/PrimitiveGeometryComponent'\n// highlight-start\nimport { GeometryTypeEnum } from '@etherealengine/engine/src/scene/constants/GeometryTypeEnum'\n// highlight-end\n\nconst entity = ECS.createEntity()\nECS.setComponent(entity, NameComponent, 'hello-world')\nECS.setComponent(entity, VisibleComponent)\nECS.setComponent(entity, TransformComponent, { position: new Vector3(0, 1, 0) })\n// highlight-start\nECS.setComponent(entity, PrimitiveGeometryComponent, { geometryType: GeometryTypeEnum.SphereGeometry })\n// highlight-end\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},9263:(e,n,t)=>{t.d(n,{W:()=>r});var i=t(6540),o=t(4848);const r=e=>{const n=e.title?e.title:"Technical Note";return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)("details",{className:"alert alert--secondary mb-5 bg-neutral-900",children:[(0,o.jsx)("summary",{className:"text-blue-200 hover:cursor-pointer",children:n}),(0,o.jsx)("div",{className:"pt-4",children:e.children})]})})}},7152:(e,n,t)=>{t.d(n,{B:()=>r});var i=t(6540),o=t(4848);const r=e=>{const n=e.title;return(0,o.jsx)(i.Fragment,{children:(0,o.jsxs)("details",{className:"mb-5",children:[(0,o.jsx)("summary",{className:"text-blue-200 hover:cursor-pointer",children:n}),(0,o.jsx)("div",{className:"pt-4",children:e.children})]})})}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);