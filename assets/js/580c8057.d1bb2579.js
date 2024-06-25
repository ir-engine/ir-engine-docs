"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[803],{9912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),o=n(8453);const i={},s=void 0,a={id:"manual/modules/infrastructure/devopsDeployment/AWSSetup/ECR",title:"ECR",description:"Create ECR repositories for built images.",source:"@site/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/03_ECR.md",sourceDirName:"manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup",slug:"/manual/modules/infrastructure/devopsDeployment/AWSSetup/ECR",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/ECR",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/03_ECR.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"manual",previous:{title:"EKS",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/EKS"},next:{title:"IAM",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/IAM"}},l={},c=[{value:"Create ECR repositories for built images.",id:"create-ecr-repositories-for-built-images",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-ecr-repositories-for-built-images",children:"Create ECR repositories for built images."}),"\n",(0,r.jsxs)(t.p,{children:["The iR Engine deployment process will be building multiple Docker images, and those need to be stored somewhere.\nIn AWS, that somewhere is ",(0,r.jsx)(t.a,{href:"https://us-west-1.console.aws.amazon.com/ecr/get-started",children:"Elastic Container Registry"}),".\nYou need to make those repositories in the same AWS region where the EKS cluster is running."]}),"\n",(0,r.jsxs)(t.p,{children:["Go to the ECR link above and click Get Started under Create a Repository. If you're very concerned about any of your\niR Engine project codebase(s) getting out, you can choose Private for Visibility Settings, but normally Public is fine.\nYou'll be needing to create multiple repositories for each deployment, e.g. several repos for a ",(0,r.jsx)(t.code,{children:"dev"})," deployment,\nseveral more for a ",(0,r.jsx)(t.code,{children:"prod"})," deployment, etc."]}),"\n",(0,r.jsxs)(t.p,{children:["Assuming you're first doing a ",(0,r.jsx)(t.code,{children:"dev"})," deployment, name the first repo ",(0,r.jsx)(t.code,{children:"etherealengine-<RELEASE_NAME>-builder"})," under Repository\nName, e.g. ",(0,r.jsx)(t.code,{children:"etherealengine-dev-builder"}),". You shouldn't need to change any other settings, though if you're using a Private\nrepo and want to turn on Tag Immutability, that's fine. The image tags that are generated should never collide, but it\nwill prevent any manual overwriting of a tag. Click Create Repository."]}),"\n",(0,r.jsxs)(t.p,{children:["You will need to make four more repos for each of the services that are deployed as part of the iR Engine stack -\n",(0,r.jsx)(t.code,{children:"api"}),", ",(0,r.jsx)(t.code,{children:"client"}),", ",(0,r.jsx)(t.code,{children:"instanceserver"})," and ",(0,r.jsx)(t.code,{children:"taskserver"}),", which are also in the form ",(0,r.jsx)(t.code,{children:"etherealengine-<RELEASE_NAME>-<service_name>"}),".\ne.g. ",(0,r.jsx)(t.code,{children:"etherealengine-dev-api"}),", ",(0,r.jsx)(t.code,{children:"etherealengine-dev-client"}),", ",(0,r.jsx)(t.code,{children:"etherealengine-dev-instanceserver"})," and ",(0,r.jsx)(t.code,{children:"etherealengine-dev-taskserver"}),".\nEverything else can be left alone for those, too."]}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.a,{href:"https://us-west-1.console.aws.amazon.com/ecr/repositories",children:"repositories page"}),", you should see all of\nthe repositories you made. If you don't see any, you may be on the wrong tab up top - click Private or Public to switch\nbetween them. Also check that you're in the right AWS region. You'll see a column 'URI'. If you made public repos,\nthe URIs should be in the form ",(0,r.jsx)(t.code,{children:"public.ecr.aws/<identifier>/etherealengine-<RELEASE_NAME>(-builder)"}),"; if you made private\nrepos, the URIs should be in the form ",(0,r.jsx)(t.code,{children:"<AWS_account_id>.dkr.ecr.<AWS_region>.amazonaws.com/etherealengine-<deployment>(-builder)"}),".\nTake note of everything before the ",(0,r.jsx)(t.code,{children:"/etherealengine-<RELEASE_NAME>"})," - you'll need to add that as a variable in later steps.\nIt will be called ",(0,r.jsx)(t.code,{children:"ECR_URL"})," there."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);