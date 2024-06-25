"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[834],{7800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var r=n(4848),o=n(8453);const u={},s="Security Group",i={id:"manual/modules/infrastructure/devopsDeployment/AWSSetup/securityGroup",title:"Security Group",description:"Edit security group to allow instanceserver traffic into VPC",source:"@site/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/06_securityGroup.md",sourceDirName:"manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup",slug:"/manual/modules/infrastructure/devopsDeployment/AWSSetup/securityGroup",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/securityGroup",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/06_securityGroup.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"manual",previous:{title:"RDS",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/RDS"},next:{title:"Route 53",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/route53"}},l={},c=[{value:"Edit security group to allow instanceserver traffic into VPC",id:"edit-security-group-to-allow-instanceserver-traffic-into-vpc",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"security-group",children:"Security Group"}),"\n",(0,r.jsx)(t.h2,{id:"edit-security-group-to-allow-instanceserver-traffic-into-vpc",children:"Edit security group to allow instanceserver traffic into VPC"}),"\n",(0,r.jsxs)(t.p,{children:["You'll need to edit the new cluster's main security group to allow instanceserver traffic.\nOn the AWS web client, go to EC2 -> Security Groups. There should be three SGs that have\nthe node's name somewhere in their name; look for the one that is in the form\n",(0,r.jsx)(t.code,{children:"eks-cluster-sg-<cluster_name>-<random_numbers>"}),". It should NOT end with /ControlPlaneSecurityGroup\nor /ClusterSharedNodeSecurityGroup.\nClick on that, then the Inbound Rules tab, then click Edit Inbound Rules."]}),"\n",(0,r.jsx)(t.p,{children:"You'll need to add two rule sets:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Type: Custom UDP; Port Range: 7000-8000; Source: Anywhere (or 'Custom 0.0.0.0/0')"}),"\n",(0,r.jsx)(t.li,{children:"Type: Custom TCP; Port Range: 7000-8000; Source: Anywhere (or 'Custom 0.0.0.0/0')"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const o={},u=r.createContext(o);function s(e){const t=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(u.Provider,{value:t},e.children)}}}]);