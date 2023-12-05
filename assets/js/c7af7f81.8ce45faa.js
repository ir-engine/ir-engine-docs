"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[4380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),l=n(4401);const i={},r="Ethereal Engine on MicroK8s (Linux)",s={unversionedId:"host/devops_deployment/microk8s_linux",id:"host/devops_deployment/microk8s_linux",title:"Ethereal Engine on MicroK8s (Linux)",description:"This guide is intended for local environment and currently tested on Ubuntu.",source:"@site/docs/1_host/2_devops_deployment/0_microk8s_linux.md",sourceDirName:"1_host/2_devops_deployment",slug:"/host/devops_deployment/microk8s_linux",permalink:"/etherealengine-docs/docs/host/devops_deployment/microk8s_linux",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/1_host/2_devops_deployment/0_microk8s_linux.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/etherealengine-docs/docs/host/devops_deployment/"},next:{title:"Ethereal Engine on MicroK8s (Windows)",permalink:"/etherealengine-docs/docs/host/devops_deployment/microk8s_windows"}},c={},p=[{value:"Install Python 3",id:"install-python-3",level:2},{value:"Install Make",id:"install-make",level:2},{value:"Install kubectl, Helm and Docker",id:"install-kubectl-helm-and-docker",level:2},{value:"Download and install MicroK8s",id:"download-and-install-microk8s",level:2},{value:"Clone Ethereal Engine repo to your local machine",id:"clone-ethereal-engine-repo-to-your-local-machine",level:2},{value:"Start MinIO &amp; MariaDB server locally via Docker",id:"start-minio--mariadb-server-locally-via-docker",level:2},{value:"Enabling MicroK8s Addons",id:"enabling-microk8s-addons",level:2},{value:"Add MicroK8s to Kubectl",id:"add-microk8s-to-kubectl",level:2},{value:"(Optional) Add MicroK8s to Lens",id:"optional-add-microk8s-to-lens",level:2},{value:"Enable MicroK8s access for local docker",id:"enable-microk8s-access-for-local-docker",level:2},{value:"Verify and troubleshoot MicroK8s",id:"verify-and-troubleshoot-microk8s",level:2},{value:"Update system hostfile to point to MicroK8s",id:"update-system-hostfile-to-point-to-microk8s",level:2},{value:"Add Helm repos",id:"add-helm-repos",level:2},{value:"Install Agones and Redis deployments",id:"install-agones-and-redis-deployments",level:2},{value:"(Optional) Install Elastic Search and Kibana using Helm for Server Logs",id:"optional-install-elastic-search-and-kibana-using-helm-for-server-logs",level:2},{value:"Run build_microk8s.sh",id:"run-build_microk8ssh",level:2},{value:"Update Helm Values File",id:"update-helm-values-file",level:2},{value:"Deploy Ethereal Engine Helm chart",id:"deploy-ethereal-engine-helm-chart",level:2},{value:"Accept invalid certs",id:"accept-invalid-certs",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ethereal-engine-on-microk8s-linux"},"Ethereal Engine on MicroK8s (Linux)"),(0,o.kt)("p",null,"This guide is intended for local environment and currently tested on Ubuntu."),(0,o.kt)("h2",{id:"install-python-3"},"Install Python 3"),(0,o.kt)("p",null,"In your WSL Ubuntu terminal, if python 3 (",(0,o.kt)("inlineCode",{parentName:"p"},"pip3 --version"),") isn't already installed on your machine. You can do so by running following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install -y python3-pip\n")),(0,o.kt)("p",null,"You can verify pip3 by using ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3 --version")," command."),(0,o.kt)("h2",{id:"install-make"},"Install Make"),(0,o.kt)("p",null,"In your WSL Ubuntu terminal, if make (",(0,o.kt)("inlineCode",{parentName:"p"},"make --version"),") isn't already installed on your machine. You can do so by running following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install -y build-essential\n")),(0,o.kt)("p",null,"You can verify make by using ",(0,o.kt)("inlineCode",{parentName:"p"},"make --version")," command."),(0,o.kt)("h2",{id:"install-kubectl-helm-and-docker"},"Install kubectl, Helm and Docker"),(0,o.kt)("p",null,"If ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),", ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," aren't already installed on your machine, install them."),(0,o.kt)("p",null,"You may also need to install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,o.kt)("h2",{id:"download-and-install-microk8s"},"Download and install MicroK8s"),(0,o.kt)("p",null,"Instructions can be found ",(0,o.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/install-a-local-kubernetes-with-microk8s#1-overview"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install microk8s --classic --channel=1.26/stable\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Due to some ongoing issue with host storage access in microk8s 1.25 version, it is recommended to use version 1.26.")),(0,o.kt)("p",null,"While you can follow the demo instructions there about starting MicroK8s, deploying some demo deployments, etc. to get a feel for it."),(0,o.kt)("h2",{id:"clone-ethereal-engine-repo-to-your-local-machine"},"Clone Ethereal Engine repo to your local machine"),(0,o.kt)("p",null,"To build the Ethereal Engine Docker image locally, and to have a pre-tested way to run various local services, you'll need to get the Ethereal Engine repo on your machine. This is most easily done by running following command in WSL Ubuntu terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/etherealengine/etherealengine.git etherealengine\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," file does not exist in the root of your repo folder then create it by duplicating ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local.default"),"."),(0,o.kt)("h2",{id:"start-minio--mariadb-server-locally-via-docker"},"Start MinIO & MariaDB server locally via Docker"),(0,o.kt)("p",null,"For simplicity, we recommend running MinIO & MariaDB server on your local machine outside of MicroK8s."),(0,o.kt)("p",null,"If you run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up")," from the top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the Ethereal Engine repo, it will start up MinIO & multiple MariaDB docker containers (as well as a redis server, which is not needed). For mariadb containers, one is intended for local development, runs on port 3306; another, intended for automated testing purposes, runs on port 3305; and the last one, intended for minikube/microk8s testing, runs on port 3304. Once the docker container is stopped, you can start it again by running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev-docker"),"."),(0,o.kt)("p",null,"Alternatively, if you want to just run MinIO & MariaDB on its own without Docker, that's fine too. You'll just have to configure the Helm config file to have the appropriate S3 & SQL server configuration, and possibly change the script ",(0,o.kt)("inlineCode",{parentName:"p"},"./scripts/build_microk8s.sh"),"."),(0,o.kt)("h2",{id:"enabling-microk8s-addons"},"Enabling MicroK8s Addons"),(0,o.kt)("p",null,"Execute following command in your terminal to enable MicroK8s addons"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo microk8s enable dashboard dns registry host-access ingress rbac hostpath-storage helm3")),(0,o.kt)("h2",{id:"add-microk8s-to-kubectl"},"Add MicroK8s to Kubectl"),(0,o.kt)("p",null,"First make sure there is no existing configuration for microk8s in your kubectl config. To do so you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," command in terminal and see if the output contains microk8s. You can remove the existing configurations using following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config delete-context microk8s\nkubectl config delete-cluster microk8s-cluster\nkubectl config delete-user microk8s-admin\n")),(0,o.kt)("p",null,"Now, we will add microk8s configuration to kubectl config. We can do this by using following commands. ",(0,o.kt)("a",{parentName:"p",href:"https://discuss.kubernetes.io/t/use-kubectl-with-microk8s/5313/6"},"Reference")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-cluster microk8s --server=https://127.0.0.1:16443/ --certificate-authority=/var/snap/microk8s/current/certs/ca.crt\nkubectl config set-credentials microk8s-admin --token=\"$(sudo microk8s kubectl config view --raw -o 'jsonpath={.users[0].user.token}')\"\nkubectl config set-context microk8s --cluster=microk8s --namespace=default --user=microk8s-admin\n")),(0,o.kt)("p",null,"Afterwards you can use this newly create context by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config use-context microk8s")),(0,o.kt)("p",null,"Now if you run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," command then microk8s should be current context."),(0,o.kt)("h2",{id:"optional-add-microk8s-to-lens"},"(Optional) Add MicroK8s to Lens"),(0,o.kt)("p",null," If the previous step was performed successfully then you should be able to see MicroK8s cluster in GUI tool ",(0,o.kt)("a",{parentName:"p",href:"https://k8slens.dev/"},"Lens"),". Else you can print the configuration using following command:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"microk8s config")),(0,o.kt)("p",null,"Option 1: If you have kubectl already installed, use ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo gedit ~/.kube/config")," as add the above output in it.",(0,o.kt)("br",{parentName:"p"}),"\n","Option 2: In Lens, goto ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Cluster")," and paste the output of above command to add cluster."),(0,o.kt)("h2",{id:"enable-microk8s-access-for-local-docker"},"Enable MicroK8s access for local docker"),(0,o.kt)("p",null,"For MicroK8s we will be using MicroK8s local ",(0,o.kt)("a",{parentName:"p",href:"https://microk8s.io/docs/registry-built-in"},"registry")),(0,o.kt)("p",null,"Add the following lines to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),". On Linux, this is done by running ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo gedit /etc/docker/daemon.json"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "insecure-registries" : ["localhost:32000"]  \n}\n')),(0,o.kt)("p",null,"Afterwards, restart docker with: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart docker")),(0,o.kt)("h2",{id:"verify-and-troubleshoot-microk8s"},"Verify and troubleshoot MicroK8s"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo microk8s inspect")," and check if there is any warning. Its recommended to fixed the warning for MicroK8s to work properly. Following are some of the warnings and their possible fixes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"WARNING:  This machine's hostname contains capital letters and/or underscores. This is not a valid name for a Kubernetes node, causing node registration to fail. Please change the machine's hostname or refer to the documentation for more details."),(0,o.kt)("p",{parentName:"li"},"Possible Fix: ",(0,o.kt)("a",{parentName:"p",href:"https://askubuntu.com/a/87687/1558816"},"https://askubuntu.com/a/87687/1558816"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"WARNING:  The memory cgroup is not enabled. The cluster may not be functioning properly. Please ensure cgroups are enabled  "),(0,o.kt)("p",{parentName:"li"},"Possible Fix: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/canonical/microk8s/issues/1691#issuecomment-1265788228"},"https://github.com/canonical/microk8s/issues/1691#issuecomment-1265788228"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"WARNING: IPtables FORWARD policy is DROP. Consider enabling traffic forwarding with: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo iptables -P FORWARD ACCEPT")),(0,o.kt)("p",{parentName:"li"},"The change can be made persistent with: ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt-get install iptables-persistent"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"MicroK8s is not running. Use microk8s inspect for a deeper inspection."),(0,o.kt)("p",{parentName:"li"},"Possible Fix: ",(0,o.kt)("a",{parentName:"p",href:"https://lightrun.com/answers/canonical-microk8s-microk8s-is-not-running-microk8sinspect-showing-no-error"},"https://lightrun.com/answers/canonical-microk8s-microk8s-is-not-running-microk8sinspect-showing-no-error")),(0,o.kt)("p",{parentName:"li"},"Here this error cloud be due to conflicting kubectl being installed. Use this command to remove kubectl ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo rm -rf /usr/local/bin/kubectl")))),(0,o.kt)("h2",{id:"update-system-hostfile-to-point-to-microk8s"},"Update system hostfile to point to MicroK8s"),(0,o.kt)("p",null,"You'll need to edit your hostfile to point certain domains to host machine IP address. On Linux, this is done by running ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo gedit /etc/hosts"),"."),(0,o.kt)("p",null,"Add/Update the following lines:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1 local.etherealengine.org api-local.etherealengine.org instanceserver-local.etherealengine.org 00000.instanceserver-local.etherealengine.org 00001.instanceserver-local.etherealengine.org 00002.instanceserver-local.etherealengine.org 00003.instanceserver-local.etherealengine.org")),(0,o.kt)("p",null,"The first line says to point several *-local.etherealengine.org domains internally to the host machine, where the nginx ingress server will redirect the traffic to the appropriate pod."),(0,o.kt)("p",null,"Make sure to save this file after you've edited it. On Linux, at least, you need root permissions to edit it."),(0,o.kt)("h2",{id:"add-helm-repos"},"Add Helm repos"),(0,o.kt)("p",null,"You'll need to add a few Helm repos. Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add agones https://agones.dev/chart/stable\nhelm repo add redis https://charts.bitnami.com/bitnami\nhelm repo add etherealengine https://helm.etherealengine.org\n")),(0,o.kt)("p",null,"This will add the Helm charts for Agones, Redis, and Ethereal Engine, respectively."),(0,o.kt)("h2",{id:"install-agones-and-redis-deployments"},"Install Agones and Redis deployments"),(0,o.kt)("p",null,"After adding those Helm repos, you'll start installing deployments using Helm repos."),(0,o.kt)("p",null,"Make sure that kubectl is pointed at MicroK8s by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),", which should say 'microk8s'. You can also run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to get all contexts that kubectl has been configured to run; the current one will have a '*' under the left-most\n'current' column."),(0,o.kt)("p",null,"Once kubectl is pointed to microk8s, from the top of the Ethereal Engine repo, run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/agones-default-values.yaml> agones agones/agones")," to install Agones and ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install local-redis redis/redis")," to install redis."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/agones-default-values.yaml"},"agones-default-values.yaml")," can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,o.kt)("p",null,"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," to list all of the pods running in microk8s. After a minute or so, all of these pods should be in the Running state."),(0,o.kt)("h2",{id:"optional-install-elastic-search-and-kibana-using-helm-for-server-logs"},"(Optional) Install Elastic Search and Kibana using Helm for Server Logs"),(0,o.kt)("p",null,"To install Elasticsearch, add the elastic repository in Helm: ",(0,o.kt)("inlineCode",{parentName:"p"},"helm repo add elastic https://helm.elastic.co")),(0,o.kt)("p",null,"Now, use the curl command to download the values.yaml file containing configuration information:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"curl -O https://raw.githubusercontent.com/elastic/helm-charts/master/elasticsearch/examples/minikube/values.yaml")),(0,o.kt)("p",null,"Use the helm install command and the values.yaml file to install the Elasticsearch helm chart:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -f ./values.yaml")),(0,o.kt)("p",null,"The -f option allows specifying the yaml file with the template. If you wish to install Elasticsearch in a specific namespace, add the -n option followed by the name of the namespace: ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -n [namespace] -f ./values.yaml")),(0,o.kt)("p",null,"Now check if the cluster members are up: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods --namespace=default -l app=elasticsearch-master -w")),(0,o.kt)("p",null,"The other option is to use the helm test command to examine the cluster\u2019s health: ",(0,o.kt)("inlineCode",{parentName:"p"},"helm test elasticsearch")),(0,o.kt)("p",null,"To install Kibana on top of Elasticsearch : ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install kibana elastic/kibana")),(0,o.kt)("p",null,"Check if all the pods are ready: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,o.kt)("p",null,"After you set up port-forwarding, access Elasticsearch, and the Kibana GUI by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:5601")," in your browser"),(0,o.kt)("p",null,"In order to connect logger with elasticsearch, update ",(0,o.kt)("inlineCode",{parentName:"p"},"local.microk8s.template.values.yaml")," env ",(0,o.kt)("inlineCode",{parentName:"p"},"api.extraEnv.ELASTIC_HOST")," for e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://<username>:<password>@<host>:<port>")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.microk8s.template.values.yaml"},"local.microk8s.template.values.yaml")," can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,o.kt)("h2",{id:"run-build_microk8ssh"},"Run build_microk8s.sh"),(0,o.kt)("p",null,"When microk8s is running, run the following command from the root of the Ethereal Engine repo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build_microk8s.sh\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you face issue related to ",(0,o.kt)("inlineCode",{parentName:"p"},'"packages/projects/projects/" does not exist')," then run following commands in your terminal:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export MYSQL_HOST=localhost\nnpm run dev-docker\nnpm run dev-reinit\nnpm run install-projects\n")),(0,o.kt)("p",null,"The script builds the full-repo Docker image using several build arguments. Vite, which builds he client files, uses some information from the MariaDB database created for microk8s deployments to fill in some variables, and needs database credentials. The script will supply default values for all of the MYSQL_* variables if they are not provided to the script, as well as VITE_CLIENT_HOST, VITE_SERVER_HOST, and VITE_INSTANCESERVER_HOST. The latter three will make your microk8s deployment accessible on ",(0,o.kt)("inlineCode",{parentName:"p"},"(local/api-local/instanceserver-local).etherealengine.org"),"; if you want to run it on a different domain, then you'll have to set those three environment variables to what you want them to be (and also change the hostfile records you made pointing those subdomains)"),(0,o.kt)("p",null,"This will build an image of the entire Ethereal Engine repo into a single Docker file. When deployed for different services, it will only run the parts needed for that service. This may take up to 15 minutes, though later builds should take less time as things are cached."),(0,o.kt)("p",null,"Once the images are build. It will push it to MicroK8s local registry. You can verify that images are pushed to registry by visiting ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:32000/v2/_catalog"},"http://localhost:32000/v2/_catalog"),"."),(0,o.kt)("h2",{id:"update-helm-values-file"},"Update Helm Values File"),(0,o.kt)("p",null,"This will use a Helm config file titled 'local.values.yaml' to configure the deployment. There is\na ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.microk8s.template.values.yaml"},"template")," for this file in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo."),(0,o.kt)("p",null,"If you are using local file server as explained couple of steps earlier then, update 'local.values.yaml' variable ",(0,o.kt)("inlineCode",{parentName:"p"},"api.fileServer.hostUploadFolder")," with value similar to '<ENGINE_FULL_PATH>/packages/server/upload' e.g. '/home/<OS_USER_NAME>/<ENGINE_FOLDER>/packages/server/upload'. Its mandatory to point to ",(0,o.kt)("inlineCode",{parentName:"p"},"/packages/server/upload")," folder of your engine folder."),(0,o.kt)("h2",{id:"deploy-ethereal-engine-helm-chart"},"Deploy Ethereal Engine Helm chart"),(0,o.kt)("p",null,"Run the following command: ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/local.values.yaml> -f </path/to/db-refresh-true.values.yaml> local etherealengine/etherealengine"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-true.values.yaml"},"db-refresh-true.values.yaml")," can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,o.kt)("p",null,"After a minute or so, running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," should show one or more instanceservers, one or more api servers, and one client server in the Running state. Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," made the api servers (re)initialize the database. Since you don't want that to happen every time a new api pod starts, run ",(0,o.kt)("inlineCode",{parentName:"p"},"helm upgrade --reuse-values -f </path/to/db-refresh-false.values.yaml> local etherealengine/etherealengine"),". The API pods will restart and will now not attempt to reinit the database on boot."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-false.values.yaml"},"db-refresh-false.values.yaml")," can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,o.kt)("h2",{id:"accept-invalid-certs"},"Accept invalid certs"),(0,o.kt)(l.ZP,{mdxType:"AcceptCertificates"}))}h.isMDXComponent=!0},4401:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(7462),o=(n(7294),n(3905));const l={toc:[]},i="wrapper";function r(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since there are no valid certificates for this domain, you'll have to tell your browser to ignore the insecure connections when you try to load the application."),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://local.etherealengine.org/"},"https://local.etherealengine.org/"),", you should see a warning about an invalid certificate; accept this invalid cert to get to the home page. Next if it keeps displaying 'loading routes' progress for a long time, it is due to the fact that you have to allow certificates. You'll have to open the dev tools for your browser and go to the 'Console' tab. You will see some errors in URL address starting with 'wss'. Replace 'wss' with 'https' and open it in new tab. Accept the certificate and reload your Ethereal Engine tab. You need to do this for following domains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"wss://api-local.etherealengine.org -> ",(0,o.kt)("a",{parentName:"li",href:"https://api-local.etherealengine.org"},"https://api-local.etherealengine.org")),(0,o.kt)("li",{parentName:"ul"},"wss://instanceserver-local.etherealengine.org -> ",(0,o.kt)("a",{parentName:"li",href:"https://instanceserver-local.etherealengine.org"},"https://instanceserver-local.etherealengine.org")),(0,o.kt)("li",{parentName:"ul"},"https://localhost:9000")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can open Developer tools in Chrome by clicking the side menu with three dots, then More tools > Developer tools (or use Ctrl+Shift+I)")))}r.isMDXComponent=!0}}]);