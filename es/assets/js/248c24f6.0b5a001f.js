"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[7132],{3955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(4848),i=s(8453);const o={},r="Projects",a={id:"manual/concepts/projects",title:"Projects",description:"Projects are folders that contain all your custom code, assets and scenes.",source:"@site/docs/manual/02_concepts/01_projects.md",sourceDirName:"manual/02_concepts",slug:"/manual/concepts/projects",permalink:"/etherealengine-docs/es/manual/concepts/projects",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/02_concepts/01_projects.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"manual",previous:{title:"Concepts",permalink:"/etherealengine-docs/es/manual/concepts/"},next:{title:"Locations",permalink:"/etherealengine-docs/es/manual/concepts/locations"}},l={},c=[{value:"File Structure",id:"file-structure",level:2},{value:"Config",id:"config",level:2},{value:"Hooks",id:"hooks",level:3},{value:"Thumbnail",id:"thumbnail",level:3},{value:"Routes",id:"routes",level:3},{value:"Webapp Injection",id:"webapp-injection",level:3},{value:"World Injection",id:"world-injection",level:3},{value:"Services",id:"services",level:3},{value:"Database Seeding",id:"database-seeding",level:3},{value:"Internationalization <em>(i18n)</em>",id:"internationalization-i18n",level:3}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"projects",children:"Projects"}),"\n",(0,t.jsxs)(n.p,{children:["Projects are folders that contain all your custom code, assets and scenes.\nThey are version controlled using git & github, and can be installed to any deployment\nwith a single click.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.em,{children:["(more information about this on the ",(0,t.jsx)(n.a,{href:"/manual/concepts/locations",children:"Locations chapter"})," of the ",(0,t.jsx)(n.code,{children:"Creator Manual"}),")"]})]}),"\n",(0,t.jsxs)(n.p,{children:["Pictured below is an example of 4 projects installed.\nBy default, only the ",(0,t.jsx)(n.code,{children:"default-project"})," is installed, which in a production environment is read only.\nYou can find the default project under ",(0,t.jsx)(n.code,{children:"/packages/projects/default-project/"})]}),"\n",(0,t.jsx)(n.p,{children:"In a production environment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The builder process will install all projects according to the ",(0,t.jsx)(n.code,{children:"project"})," database table"]}),"\n",(0,t.jsx)(n.li,{children:"The builder process will download files from the storage provider."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In a local development environment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The local file system is always the source of truth."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To ensure that there is no accidental loss of data, any project folders added or removed from the file system will be automatically added or removed from the database. These project folders are also git repositories."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5594).A+"",width:"263",height:"241"})}),"\n",(0,t.jsx)(n.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,t.jsx)(n.p,{children:"Projects have a few conventions."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"assets/"})," is where files uploaded from the editor will be uploaded to"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src/"})," is where code assets can be served from"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tests/"})," is where test files can be run"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sceneName.scene.json"})," is a scene file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sceneName.thumbnail.png"})," is an auto-generated scene thumbnail file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"xrengine.config.ts"})," the project configuration, where client routes, database models, feathers services and the project thumbnail can be defined"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A project must also have a package.json to provide custom dependencies, and to define the project name, project version, and iR Engine version it is known to work with."}),"\n",(0,t.jsxs)(n.p,{children:["Systems imported from a scene MUST have their filename end with ",(0,t.jsx)(n.code,{children:"System.ts"})," and be in the ",(0,t.jsx)(n.code,{children:"/src/systems"})," folder.\nThis is to optimize vite's code-splitting bundling process, as each potentially dynamically importable file will result in a new bundle with it's own copy of all of it's import dependencies."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@etherealengine/*"})," monorepo dependencies will be symlinked and not needed, but some package managers ",(0,t.jsx)(n.em,{children:"(such as pnpm)"})," require these to be defined.\nIf so, they should be defined in ",(0,t.jsx)(n.code,{children:"peerDependencies"})," and kept up to date with the current engine version."]}),"\n",(0,t.jsx)(n.h2,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.p,{children:"The iR Engine config file has the following options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface ProjectConfigInterface {\n  onEvent?: string\n  thumbnail?: string\n  routes?: {\n    [route: string]: {\n      component: () => Promise<{ default: (props: any) => JSX.Element }>\n      props?: {\n        [x: string]: any\n        exact?: boolean\n      }\n    }\n  }\n  webappInjection?: () => Promise<{ default: (props: any) => void | JSX.Element }>\n  worldInjection?: () => Promise<{ default: () => Promise<void> }>\n  services?: string\n  databaseSeed?: string\n  settings?: Array<ProjectSettingSchema>\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"hooks",children:"Hooks"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"onEvent"})," property is a relative path string that points to a file which\nmust expose an object with properties as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface ProjectEventHooks {\n  onInstall?: (app: Application) => Promise<any>\n  onLoad?: (app: Application) => Promise<any>\n  onUpdate?: (app: Application) => Promise<any>\n  onUninstall?: (app: Application) => Promise<any>\n  /**\n   * get oEmbed for active routes that match URL\n   * return that project's onOEmbedRequest()\n   * if null, return default\n   */\n  onOEmbedRequest?: (app: Application, url: URL, currentOEmbed: OEmbed) => Promise<OEmbed | null>\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["These functions are called when the project they belong to are installed,\nupdated (such as scenes saved) or uninstalled respectively. This is used in the\ndefault iR Engine project to install the default avatars.\nSee ",(0,t.jsx)(n.code,{children:"/packages/projects/default-project/projectEventHooks.ts"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"thumbnail",children:"Thumbnail"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"thumbnail"})," property is a string that must contain a URL to an image that will be used as the Studio thumbnail for the project."]}),"\n",(0,t.jsx)(n.h3,{id:"routes",children:"Routes"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"routes"})," property enables users to customise the various URL paths of their website utilizing dynamic loading of modules."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Key: Represents the path ",(0,t.jsx)(n.em,{children:"(with leading forward slash included)"})," to the resource,"]}),"\n",(0,t.jsxs)(n.li,{children:["Value: Represents a react component object which gets wrapped with ",(0,t.jsx)(n.code,{children:"React.lazy()"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"props"}),": Passes options into the ",(0,t.jsx)(n.code,{children:"react-dom-router.Route"})," component corresponding to the route."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"webapp-injection",children:"Webapp Injection"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"webappInjection"})," property allows logic to be run on all pages, and it is loaded before any routes are loaded.\nThis will soon be extended to allow easy stylesheet injection and other configurables of the webapp."]}),"\n",(0,t.jsx)(n.h3,{id:"world-injection",children:"World Injection"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"worldInjection"})," property allows logic to be run every time a new world is created",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.em,{children:"(note: currently only when the engine is initialised)"}),".",(0,t.jsx)(n.br,{}),"\n","This logic is loaded on all instances of the engine, such as a location and the editor."]}),"\n",(0,t.jsx)(n.p,{children:"An example use case of this property would be registering custom scene loader and editor prefabs."}),"\n",(0,t.jsx)(n.h3,{id:"services",children:"Services"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"services"})," property is a relative path that points to a file which:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Must return the type ",(0,t.jsx)(n.code,{children:"((app: Application) => Promise<any>)[]"}),(0,t.jsx)(n.br,{}),"\n","This return type will be run on all instanceservers and api servers at startup."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This property allows users to expose custom Feathers services, or whatever other functionality they may need."}),"\n",(0,t.jsx)(n.h3,{id:"database-seeding",children:"Database Seeding"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"databaseSeed"})," property is:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A relative path that points to a file which must return the type ",(0,t.jsx)(n.code,{children:"ServicesSeedConfig"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsxs)(n.em,{children:["from ",(0,t.jsx)(n.code,{children:"../packages/common/src/interfaces/ServicesSeedConfig.ts"})]}),(0,t.jsx)(n.br,{}),"\n","This return type is run when the database seeder is run."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"internationalization-i18n",children:["Internationalization ",(0,t.jsx)(n.em,{children:"(i18n)"})]}),"\n",(0,t.jsxs)(n.p,{children:["Internationalization can be added by using the pattern ",(0,t.jsx)(n.code,{children:"./i18n/<language>/<namespace>.json"}),".",(0,t.jsx)(n.br,{}),"\n","An example of the format can be found in ",(0,t.jsx)(n.a,{href:"https://github.com/etherealengine/etherealengine/tree/dev/packages/client-core/i18n",children:"the base i18n files"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5594:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/projects-folder-b0a16be5a64322e12f81233c0a19f898.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);