"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[2380],{44:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(4848),r=t(8453);const o={},a="EKS User Access",c={id:"manual/modules/infrastructure/devopsDeployment/AWSSetup/EKSUser",title:"EKS User Access",description:"Grant EKSUser access to cluster",source:"@site/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/14_EKSUser.md",sourceDirName:"manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup",slug:"/manual/modules/infrastructure/devopsDeployment/AWSSetup/EKSUser",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/EKSUser",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/14_EKSUser.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"manual",previous:{title:"GitHub Fork",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/fork"},next:{title:"EKS Deploy",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/EKSDeploy"}},u={},l=[{value:"Grant EKSUser access to cluster",id:"grant-eksuser-access-to-cluster",level:2}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"eks-user-access",children:"EKS User Access"}),"\n",(0,n.jsx)(s.h2,{id:"grant-eksuser-access-to-cluster",children:"Grant EKSUser access to cluster"}),"\n",(0,n.jsxs)(s.p,{children:["By default, only the IAM user who set up an EKS cluster may access it.\nIn order to let other users access the cluster, you must apply an aws-auth configmap to the cluster\ngranting access to specific IAM users. A template of ",(0,n.jsx)(s.a,{href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/aws-auth-template.yml",children:"aws-auth-template.yml"})," file can be found in ",(0,n.jsx)(s.a,{href:"https://github.com/EtherealEngine/ethereal-engine-ops",children:"ethereal-engine-ops"})," repo."]}),"\n",(0,n.jsxs)(s.p,{children:["You'll need to provide a few values for this file. To find ",(0,n.jsx)(s.code,{children:"<rolearn>"}),", in AWS go to EKS->Clusters->\n",(0,n.jsx)(s.code,{children:"<your cluster>"}),"->Compute->Select a nodegroup.  In the details should be 'Node IAM Role ARN'; copy this\nand replace ",(0,n.jsx)(s.code,{children:"<rolearn>"})," in the aws-auth file. ",(0,n.jsx)(s.code,{children:"<account_id>"})," is the ID of your AWS account; in the upper\nright corner of the AWS client should be ",(0,n.jsx)(s.code,{children:"<your_username>@<abcd-1234-efgh>"}),". The 12-character string\nafter the @ is the account ID. Make sure to remove the ",(0,n.jsx)(s.code,{children:"-"}),"'s from the account ID when pasting it in.\n",(0,n.jsx)(s.code,{children:"<IAM_username>"})," is the username of the IAM user you want to give access, e.g. ",(0,n.jsx)(s.code,{children:"EKSUser"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can add multiple users by copying the ",(0,n.jsx)(s.code,{children:"- groups:"})," section under ",(0,n.jsx)(s.code,{children:"mapUsers"}),", e.g."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"  mapUsers: |\n    - groups:\n      - system:masters\n      userarn: arn:aws:iam::abcd1234efgh:user/EKSUser\n      username: EKSUser\n    - groups:\n      - system:masters\n      userarn: arn:aws:iam::acbd1234efgh:user/FSmith\n      username: FSmith\n"})}),"\n",(0,n.jsxs)(s.p,{children:["When the aws-auth config file is filled in, just run ",(0,n.jsx)(s.code,{children:"kubectl apply -f path/to/aws-auth.yml"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>c});var n=t(6540);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);