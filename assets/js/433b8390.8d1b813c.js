"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[7307],{368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=n(4848),s=n(8453);const l={},i="Elastic Search & Kibana",r={id:"manual/modules/infrastructure/devopsDeployment/AWSSetup/elasticKibana",title:"Elastic Search & Kibana",description:"Install Elastic Search and Kibana using Helm for Server Logs",source:"@site/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/17_elasticKibana.md",sourceDirName:"manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup",slug:"/manual/modules/infrastructure/devopsDeployment/AWSSetup/elasticKibana",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/elasticKibana",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/03_modules/05_infrastructure/03_devopsDeployment/03_AWSSetup/17_elasticKibana.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"manual",previous:{title:"GitHub Actions",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/AWSSetup/githubActions"},next:{title:"Installing Projects",permalink:"/etherealengine-docs/manual/modules/infrastructure/devopsDeployment/installingProjects"}},c={},o=[{value:"Install Elastic Search and Kibana using Helm for Server Logs",id:"install-elastic-search-and-kibana-using-helm-for-server-logs",level:2},{value:"Upgrading an existing Helm deployment",id:"upgrading-an-existing-helm-deployment",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"elastic-search--kibana",children:"Elastic Search & Kibana"}),"\n",(0,a.jsx)(t.h2,{id:"install-elastic-search-and-kibana-using-helm-for-server-logs",children:"Install Elastic Search and Kibana using Helm for Server Logs"}),"\n",(0,a.jsxs)(t.p,{children:["To install Elasticsearch, add the elastic repository in Helm: ",(0,a.jsx)(t.code,{children:"helm repo add elastic https://helm.elastic.co"})]}),"\n",(0,a.jsx)(t.p,{children:"Now, use the curl command to download the values.yaml file containing configuration information:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"curl -O https://raw.githubusercontent.com/elastic/helm-charts/master/elasticsearch/examples/minikube/values.yaml"})}),"\n",(0,a.jsx)(t.p,{children:"Use the helm install command and the values.yaml file to install the Elasticsearch helm chart:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"helm install elasticsearch elastic/elasticsearch -f ./values.yaml"})}),"\n",(0,a.jsxs)(t.p,{children:["The -f option allows specifying the yaml file with the template. If you wish to install Elasticsearch in a specific namespace, add the -n option followed by the name of the namespace: ",(0,a.jsx)(t.code,{children:"helm install elasticsearch elastic/elasticsearch -n [namespace] -f ./values.yaml"})]}),"\n",(0,a.jsxs)(t.p,{children:["Now check if the cluster members are up: ",(0,a.jsx)(t.code,{children:"kubectl get pods --namespace=default -l app=elasticsearch-master -w"})]}),"\n",(0,a.jsxs)(t.p,{children:["The other option is to use the helm test command to examine the cluster\u2019s health: ",(0,a.jsx)(t.code,{children:"helm test elasticsearch"})]}),"\n",(0,a.jsxs)(t.p,{children:["To install Kibana on top of Elasticsearch : ",(0,a.jsx)(t.code,{children:"helm install kibana elastic/kibana"}),"\nCheck if all the pods are ready: ",(0,a.jsx)(t.code,{children:"kubectl get pods"})]}),"\n",(0,a.jsxs)(t.p,{children:["After you set up port-forwarding, access Elasticsearch, and the Kibana GUI by typing ",(0,a.jsx)(t.code,{children:"http://localhost:5601 "}),"in your browser"]}),"\n",(0,a.jsxs)(t.p,{children:["In order to connect logger with elasticsearch, update config file(values.yml) for Xr env ",(0,a.jsx)(t.code,{children:"api.extraEnv.ELASTIC_HOST"})," for e.g. ",(0,a.jsx)(t.code,{children:"http://<username>:<password>@<host>:<port>"})]}),"\n",(0,a.jsx)(t.h3,{id:"upgrading-an-existing-helm-deployment",children:"Upgrading an existing Helm deployment"}),"\n",(0,a.jsx)(t.p,{children:"One of the features of Helm is being able to easily upgrade deployments with new values. The command to\ndo this is very similar to the install command:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"helm upgrade --reuse-values -f </path/to/*.values.yaml> --set api.image.tag=<latest_github_commit_SHA>,client.image.tag=<latest_github_commit_SHA>,instanceserver.image.tag=<latest_github_commit_SHA> <RELEASE_NAME> etherealengine/etherealengine"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"--reuse-values"})," says to carry over all configuration values from the previous deployment. This is most important\nfor tags, since they're usually set inline with the ",(0,a.jsx)(t.code,{children:"helm install/upgrade"})," command, not a Helm config.\nUsing ",(0,a.jsx)(t.code,{children:"-f <config_file>"})," and ",(0,a.jsx)(t.code,{children:"--set <variables>"})," after it will apply any changes on top of the\ncarryover values."]}),"\n",(0,a.jsxs)(t.p,{children:["If you're not deploying a new build of the codebase, you can skip the entirety of the ",(0,a.jsx)(t.code,{children:"--set *.image.tag=<SHA>"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const s={},l=a.createContext(s);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);