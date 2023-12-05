"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={},i="Entities, Components and Systems",s={unversionedId:"creator/development/ecs",id:"creator/development/ecs",title:"Entities, Components and Systems",description:"What is an ECS?",source:"@site/docs/2_creator/4_development/2_ecs.md",sourceDirName:"2_creator/4_development",slug:"/creator/development/ecs",permalink:"/etherealengine-docs/docs/creator/development/ecs",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/2_creator/4_development/2_ecs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"State Management",permalink:"/etherealengine-docs/docs/creator/development/state_management"},next:{title:"Networking",permalink:"/etherealengine-docs/docs/creator/development/networking"}},p={},l=[{value:"What is an ECS?",id:"what-is-an-ecs",level:2},{value:"Component Definitions",id:"component-definitions",level:2},{value:"Structure of Arrays Component Data",id:"structure-of-arrays-component-data",level:3},{value:"Reactive Component Data",id:"reactive-component-data",level:3},{value:"onInit",id:"oninit",level:3},{value:"onSet",id:"onset",level:3},{value:"onRemove",id:"onremove",level:3},{value:"toJSON",id:"tojson",level:3},{value:"jsonID",id:"jsonid",level:2},{value:"reactor",id:"reactor",level:3},{value:"Update Loop",id:"update-loop",level:2},{value:"Queries",id:"queries",level:2},{value:"Examples",id:"examples",level:2},{value:"Timer",id:"timer",level:3},{value:"References",id:"references",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entities-components-and-systems"},"Entities, Components and Systems"),(0,a.kt)("h2",{id:"what-is-an-ecs"},"What is an ECS?"),(0,a.kt)("p",null,'ECS refers to the "Entity Component System" architecture paradigm. In this pattern, data is organised into abstract objects called ',(0,a.kt)("strong",{parentName:"p"},"components")," that allows for composition instead of inheritance. An ",(0,a.kt)("strong",{parentName:"p"},"entity")," is simply collection of components identified by a number. ",(0,a.kt)("strong",{parentName:"p"},"Systems")," are functions that operate on these entities and components."),(0,a.kt)("h2",{id:"component-definitions"},"Component Definitions"),(0,a.kt)("p",null,"Components support two types of data: Structure of Arrays and Array of Structures."),(0,a.kt)("h3",{id:"structure-of-arrays-component-data"},"Structure of Arrays Component Data"),(0,a.kt)("p",null,"Structure of Arrays is a data layout that stores data in a way that is more cache friendly. It is a good choice for data that is accessed often and in a predictable way, such as transform data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const TransformComponent = defineComponent({\n  name: 'TransformComponent',\n  schema: {\n    position: Types.f64,\n    rotation: Types.f64,\n    scale: Types.f64\n  }\n})\n")),(0,a.kt)("h3",{id:"reactive-component-data"},"Reactive Component Data"),(0,a.kt)("p",null,"Array of Structures is an implementation unique to Ethereal Engine, using React and Hookstate under the hood, it allows for reactive data binding. This means that when a property is changed, all effects depending on it will be triggered. It is a good choice for data that is accessed infrequently and in an unpredictable way, especially when react style logic is associated with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const DebugArrowComponent = defineComponent({\n  name: 'DebugArrowComponent',\n\n  onInit: (entity) => {\n    return {\n      color: 0xffffff,\n      direction: new Vector3(),\n      position: new Vector3()\n    }\n  },\n\n  onSet: (entity, component, json) => {\n    if (!json) return\n\n    if (json.color) component.color.set(json.color)\n    if (json.direction) component.direction.set(json.direction)\n    if (json.position) component.position.set(json.position)\n  }\n})\n")),(0,a.kt)("h3",{id:"oninit"},"onInit"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(entity: Entity) => ComponentType<C>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onInit")," is a function that is called when ",(0,a.kt)("strong",{parentName:"p"},"setComponent")," is called on an entity that does not have the component in question. It is passed the entity number and should return an object with the initial values for the component."),(0,a.kt)("h3",{id:"onset"},"onSet"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"entity: Entity, component: ComponentType<C>, json: SerializedComponentType<C>) => void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onSet")," is a function that is called each time ",(0,a.kt)("strong",{parentName:"p"},"setComponent")," is called. It is passed the entity number, the component object and json object. This is how reactive data can be updated in batch, allowing for tighter data flow, such as deserializing scene data."),(0,a.kt)("h3",{id:"onremove"},"onRemove"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(entity: Entity, component: ComponentType<C>) => void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onRemove")," is a function that is called when ",(0,a.kt)("strong",{parentName:"p"},"removeComponent")," is called on an entity that has the component in question. It is passed the entity number and the component object. This is where you would clean up any resources associated with the component."),(0,a.kt)("h3",{id:"tojson"},"toJSON"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"(entity: Entity, component: ComponentType<C>) => SerializedComponentType<C>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"toJSON")," is a function that is called when ",(0,a.kt)("strong",{parentName:"p"},"serializeComponent")," is called on an entity that has the component in question. It is passed the entity number and the component object. This is where serialized data can be generated, such as for saving a scene."),(0,a.kt)("h2",{id:"jsonid"},"jsonID"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"jsonID")," is a string that is used to identify the component in json. It is used when deserializing and serializing scenes."),(0,a.kt)("h3",{id:"reactor"},"reactor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function(props: { root: EntityRoot }) => void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"reactor")," specifies a function that exists for the duration of this component instance. This is where you would add any effects that depend on the component."),(0,a.kt)("h2",{id:"update-loop"},"Update Loop"),(0,a.kt)("p",null,"The engine uses a very similar model to Unity's update loop (found here ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/ExecutionOrder.html"},"https://docs.unity3d.com/Manual/ExecutionOrder.html"),"). It has a frame update, called once per frame, of which inside is a fixed update, which operates on an accumulator system. This system ensures a stable number of updates per second independent of the framerate. This means it may have 0 to many updates in a given frame. "),(0,a.kt)("p",null,"Ethereal Engine implements this with ",(0,a.kt)("strong",{parentName:"p"},"pipelines"),", which are collections of systems to execute in order."),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,"Queries are used to select entities that have a set of components. They are used to define the entities that a system will operate on. Queries are defined using the ",(0,a.kt)("strong",{parentName:"p"},"defineQuery")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const query = defineQuery([TransformComponent, GroupComponent])\n\nconst entities = query() // returns an array of entity numbers\n")),(0,a.kt)("p",null,"Queries also have enter and exit derivatives, which are used to define when a combination of components is added or removed from an entity. These are defined using the ",(0,a.kt)("strong",{parentName:"p"},"defineEnterQuery")," and ",(0,a.kt)("strong",{parentName:"p"},"defineExitQuery")," functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const query = defineQuery([TransformComponent, GroupComponent])\n\nconst allEntities = query()\nconst enterEntities = query.enter()\nconst exitEntities = query.exit()\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"timer"},"Timer"),(0,a.kt)("p",null,"The follow code snippets, we define a component and a system. The component will hold a property to store the current elapsed time rounded down."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"initializer")," of the system, it creates a new entity and adds the component to it. In the ",(0,a.kt)("strong",{parentName:"p"},"execute")," function of the system, we set the property ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," on the component of the entity."),(0,a.kt)("p",null,"This example uses 'Structure of Arrays' (SoA) data structures with bitECS syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const TimerComponent = defineComponent({\n  name: 'TimerComponent',\n  schema: {\n    time: Types.f32\n  }\n})\n\nconst timerQuery = defineQuery([TimerComponent])\n\nconst execute = () => {\n  const { deltaSeconds } = getState(EngineState)\n\n  for (const entity of timerQuery()) {\n      TimerComponent.time[entity] += delta\n  }\n}\n\nexport const TimerSystem = defineSystem({\n  uuid: 'TimerSystem',\n  execute\n})\n\n")),(0,a.kt)("p",null,"This example uses 'Array of Structures' syntax, with reactive data binding."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const TimerComponent = defineComponent({\n  name: 'TimerComponent',\n  onInit: (entity) => {\n    return {\n      time: 0\n    }\n  },\n  onSet: (entity, component, json) => {\n    if (typeof json?.time === 'number') component.time.set(json.time)\n  },\n  toJSON: (entity, component) => {\n    return {\n      time: component.time.value\n    }\n  }\n})\n\nconst timerQuery = defineQuery([TimerComponent])\n\nconst execute = () => {\n  const { elapsedSeconds } = getState(EngineState)\n\n  for (const entity of timerQuery()) {\n    const timerComponent = getMutableComponent(entity, TimerComponent)\n    timerComponent.time.set(Math.floor(elapsedSeconds))\n  }\n}\n\nexport const TimerSystem = defineSystem({\n  uuid: 'TimerSystem',\n  execute\n})\n\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=2rW7ALyHaas"},"Entity Component System Overview in 7 Minutes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qaY_CKvFLYM"},"Entity Component System in TypeScript with Phaser 3 and bitECS)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=W3aieHjyNvw"},"Overwatch GDC ECS & Netcode")," (note, ethereal engine does not use this style of networking)")))}d.isMDXComponent=!0}}]);