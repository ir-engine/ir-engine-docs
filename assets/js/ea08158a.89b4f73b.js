"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[4995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),l=n(4401);const o={},r="Ethereal Engine on Minikube",s={unversionedId:"host/devops_deployment/minikube",id:"host/devops_deployment/minikube",title:"Ethereal Engine on Minikube",description:"Install kubectl, Helm, Docker, and VirtualBox",source:"@site/docs/1_host/2_devops_deployment/1_minikube.md",sourceDirName:"1_host/2_devops_deployment",slug:"/host/devops_deployment/minikube",permalink:"/etherealengine-docs/docs/host/devops_deployment/minikube",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/1_host/2_devops_deployment/1_minikube.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereal Engine on Docker Desktop",permalink:"/etherealengine-docs/docs/host/devops_deployment/docker_desktop"},next:{title:"Ethereal Engine on AWS",permalink:"/etherealengine-docs/docs/host/devops_deployment/AWS_setup"}},p={},u=[{value:"Install kubectl, Helm, Docker, and VirtualBox",id:"install-kubectl-helm-docker-and-virtualbox",level:2},{value:"Download and install minikube",id:"download-and-install-minikube",level:2},{value:"Clone Ethereal Engine repo to your local machine",id:"clone-ethereal-engine-repo-to-your-local-machine",level:2},{value:"Start MinIO &amp; MariaDB server locally via Docker",id:"start-minio--mariadb-server-locally-via-docker",level:2},{value:"Create minikube cluster",id:"create-minikube-cluster",level:2},{value:"Starting ingress after minikube has started",id:"starting-ingress-after-minikube-has-started",level:3},{value:"Get minikube IP address and edit system hostfile to point to",id:"get-minikube-ip-address-and-edit-system-hostfile-to-point-to",level:2},{value:"Add Helm repos",id:"add-helm-repos",level:2},{value:"Install Agones and Redis deployments",id:"install-agones-and-redis-deployments",level:2},{value:"Install Elastic Search and Kibana using Helm for Server Logs",id:"install-elastic-search-and-kibana-using-helm-for-server-logs",level:2},{value:"Run build_minikube.sh",id:"run-build_minikubesh",level:2},{value:"Update Helm Values File",id:"update-helm-values-file",level:2},{value:"Deploy Ethereal Engine Helm chart",id:"deploy-ethereal-engine-helm-chart",level:2},{value:"Accept invalid certs",id:"accept-invalid-certs",level:2}],h={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ethereal-engine-on-minikube"},"Ethereal Engine on Minikube"),(0,i.kt)("h2",{id:"install-kubectl-helm-docker-and-virtualbox"},"Install kubectl, Helm, Docker, and VirtualBox"),(0,i.kt)("p",null,"If ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),", ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and/or ",(0,i.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/wiki/Downloads"},"VirtualBox"),"\naren't already installed on your machine, install them."),(0,i.kt)("p",null,"You may also need to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,i.kt)("h2",{id:"download-and-install-minikube"},"Download and install minikube"),(0,i.kt)("p",null,"Instructions can be found ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"here")),(0,i.kt)("p",null,"While you can follow the demo instructions there about starting minikube, deploying\nsome demo deployments, etc. to get a feel for it, before deploying Ethereal Engine you should delete\nyour minikube cluster, since we have some specific starting requirements."),(0,i.kt)("h2",{id:"clone-ethereal-engine-repo-to-your-local-machine"},"Clone Ethereal Engine repo to your local machine"),(0,i.kt)("p",null,"To build the Ethereal Engine Docker image locally, and to have a pre-tested way to run various local\nservices, you'll need to get the Ethereal Engine repo on your machine. This is most easily\ndone by running ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/etherealengine/etherealengine.git")),(0,i.kt)("h2",{id:"start-minio--mariadb-server-locally-via-docker"},"Start MinIO & MariaDB server locally via Docker"),(0,i.kt)("p",null,"For simplicity, we recommend running MinIO & MariaDB server on your local machine outside of MicroK8s."),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up")," from the top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the Ethereal Engine repo, it will start up MinIO & multiple MariaDB docker containers (as well as a redis server, which is not needed). For mariadb containers, one is intended for local development, runs on port 3306; another, intended for automated testing purposes, runs on port 3305; and the last one, intended for minikube/microk8s testing, runs on port 3304. Once the docker container is stopped, you can start it again by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev-docker"),"."),(0,i.kt)("p",null,"Alternatively, if you want to just run MinIO & MariaDB on its own without Docker, that's fine too. You'll just have to configure the Helm config file to have the appropriate S3 & SQL server configuration, and possibly change the script ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/build_minikube.sh"),"."),(0,i.kt)("h2",{id:"create-minikube-cluster"},"Create minikube cluster"),(0,i.kt)("p",null,"Run the following command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"minikube start --disk-size 40000m --cpus 4 --memory 10124m --addons ingress --driver virtualbox")),(0,i.kt)("p",null,"This says to start minikube with 40GB of disk space, 4 CPUs, 10GB of memory, using VirtualBox as its\ndriver, and starting up an nginx ingress service."),(0,i.kt)("p",null,"The disk space, CPUs, and memory allocation are configurable. These are what we recommend for optimal\nrunning (though the disk space might be a bit more than necessary). When minikube is running,\nit will reserve those resources for itself regardless of whether the services in minikube are using\nthat much."),(0,i.kt)("p",null,"The 10GB of memory might be the spec with the least wiggle room. Later instructions on building\nthe Docker image will have it be built in the minikube context. This uses the RAM reserved for minikube,\nand the client build process normally uses about 8GB of RAM at its peak. minikube may freeze if\nit gets maxed out on RAM, and the Docker build process might freeze indefinitely."),(0,i.kt)("h3",{id:"starting-ingress-after-minikube-has-started"},"Starting ingress after minikube has started"),(0,i.kt)("p",null,"If you forget to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--addons ingress")," when starting minikube, you can start nginx later by\nrunning ",(0,i.kt)("inlineCode",{parentName:"p"},"minikube addons enable ingress")),(0,i.kt)("h2",{id:"get-minikube-ip-address-and-edit-system-hostfile-to-point-to"},"Get minikube IP address and edit system hostfile to point to"),(0,i.kt)("p",null,"Run this command after minikube has started: ",(0,i.kt)("inlineCode",{parentName:"p"},"minikube ip"),"\nThis will get you the address that minikube is running on."),(0,i.kt)("p",null,"You'll need to edit your hostfile to point certain domains to minikube IP addresses. On Linux,\nthis is done by running ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo gedit /etc/hosts"),"."),(0,i.kt)("p",null,"Add the following lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-conf"},"<Output of 'minikube ip'>  local.etherealengine.org api-local.etherealengine.org instanceserver-local.etherealengine.org 00000.instanceserver-local.etherealengine.org 00001.instanceserver-local.etherealengine.org 00002.instanceserver-local.etherealengine.org 00003.instanceserver-local.etherealengine.org\n10.0.2.2   host.minikube.internal\n")),(0,i.kt)("p",null,"The first line says to point several *-local.etherealengine.org domains internally to the minikube cluster,\nwhere the nginx ingress server will redirect the traffic to the appropriate pod.\nThe second line is used to give minikube access to your local environment, particularly so that it\ncan access the MariaDB server."),(0,i.kt)("p",null,"Make sure to save this file after you've edited it. On Linux, at least, you need root permissions\nto edit it."),(0,i.kt)("h2",{id:"add-helm-repos"},"Add Helm repos"),(0,i.kt)("p",null,"You'll need to add a few Helm repos. Run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add agones https://agones.dev/chart/stable\nhelm repo add redis https://charts.bitnami.com/bitnami\nhelm repo add etherealengine https://helm.etherealengine.org\n")),(0,i.kt)("p",null,"This will add the Helm charts for Agones, Redis, and Ethereal Engine, respectively."),(0,i.kt)("h2",{id:"install-agones-and-redis-deployments"},"Install Agones and Redis deployments"),(0,i.kt)("p",null,"After adding those Helm repos, you'll start installing deployments using Helm repos."),(0,i.kt)("p",null,"Make sure that kubectl is pointed at minikube by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),",\nwhich should say 'minikube'. You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to get all contexts\nthat kubectl has been configured to run; the current one will have a '*' under the left-most\n'current' column."),(0,i.kt)("p",null,"Once kubectl is pointed to minikube, from the top of the Ethereal Engine repo, run\n",(0,i.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/agones-default-values.yaml> agones agones/agones")," to install Agones\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install local-redis redis/redis")," to install redis."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/agones-default-values.yaml"},"agones-default-values.yaml")," can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,i.kt)("p",null,"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," to list all of the pods running in minikube. After a minute or so,\nall of these pods should be in the Running state."),(0,i.kt)("h2",{id:"install-elastic-search-and-kibana-using-helm-for-server-logs"},"Install Elastic Search and Kibana using Helm for Server Logs"),(0,i.kt)("p",null,"To install Elasticsearch, add the elastic repository in Helm: ",(0,i.kt)("inlineCode",{parentName:"p"},"helm repo add elastic https://helm.elastic.co")),(0,i.kt)("p",null,"Now, use the curl command to download the values.yaml file containing configuration information:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"curl -O https://raw.githubusercontent.com/elastic/helm-charts/master/elasticsearch/examples/minikube/values.yaml")),(0,i.kt)("p",null,"Use the helm install command and the values.yaml file to install the Elasticsearch helm chart: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -f ./values.yaml")),(0,i.kt)("p",null,"The -f option allows specifying the yaml file with the template. If you wish to install Elasticsearch in a specific namespace, add the -n option followed by the name of the namespace: ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -n [namespace] -f ./values.yaml")),(0,i.kt)("p",null,"Now check if the cluster members are up: ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods --namespace=default -l app=elasticsearch-master -w")),(0,i.kt)("p",null,"The other option is to use the helm test command to examine the cluster\u2019s health: ",(0,i.kt)("inlineCode",{parentName:"p"},"helm test elasticsearch")),(0,i.kt)("p",null,"To install Kibana on top of Elasticsearch : ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install kibana elastic/kibana")),(0,i.kt)("p",null,"Check if all the pods are ready: ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,i.kt)("p",null,"After you set up port-forwarding, access Elasticsearch, and the Kibana GUI by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5601")," in your browser"),(0,i.kt)("p",null,"In order to connect logger with elasticsearch, update ",(0,i.kt)("inlineCode",{parentName:"p"},"local.minikube.template.values.yaml")," env ",(0,i.kt)("inlineCode",{parentName:"p"},"api.extraEnv.ELASTIC_HOST")," for e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://<username>:<password>@<host>:<port>")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.minikube.template.values.yaml"},"local.minikube.template.values.yaml")," can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,i.kt)("h2",{id:"run-build_minikubesh"},"Run build_minikube.sh"),(0,i.kt)("p",null,"When minikube is running, run the following command from the root of the Ethereal Engine repo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build_minikube.sh\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you face issue related to ",(0,i.kt)("inlineCode",{parentName:"p"},'"packages/projects/projects/" does not exist')," then run following commands in your terminal:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export MYSQL_HOST=localhost\nnpm run dev-docker\nnpm run dev-reinit\nnpm run install-projects\n")),(0,i.kt)("p",null,"This points Docker ",(0,i.kt)("em",{parentName:"p"},"in the current terminal")," to minikube's Docker environment. Anything that Docker builds\nwill be locally accessible to minikube; if the first main command in the script were not run, Docker would build to your\nmachine's Docker environment, and minikube would not have access to it."),(0,i.kt)("p",null,"The script also builds the full-repo Docker image using several build arguments. Vite, which builds\nthe client files, uses some information from the MariaDB database created for minikube deployments\nto fill in some variables, and needs database credentials. The script will supply default values\nfor all of the MYSQL_* variables if they are not provided to the script, as well as VITE_CLIENT_HOST,\nVITE_SERVER_HOST, and VITE_INSTANCESERVER_HOST. The latter three will make your minikube deployment\naccessible on ",(0,i.kt)("inlineCode",{parentName:"p"},"(local/api-local/instanceserver-local).etherealengine.org"),"; if you want to run it on a different\ndomain, then you'll have to set those three environment variables to what you want them to be (and also\nchange the hostfile records you made pointing those subdomains to minikube's IP)"),(0,i.kt)("p",null,"This will build an image of the entire Ethereal Engine repo into a single Docker file. When deployed for\ndifferent services, it will only run the parts needed for that service. This may take up to 15 minutes,\nthough later builds should take less time as things are cached."),(0,i.kt)("h2",{id:"update-helm-values-file"},"Update Helm Values File"),(0,i.kt)("p",null,"This will use a Helm config file titled 'local.values.yaml' to configure the deployment. There is\na ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.minikube.template.values.yaml"},"template")," for this file in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo."),(0,i.kt)("p",null,"If you are using local file server as explained couple of steps earlier then, update 'local.values.yaml' variable ",(0,i.kt)("inlineCode",{parentName:"p"},"api.fileServer.hostUploadFolder")," with value e.g. '/hosthome/<OS_USER_NAME>/<ENGINE_FOLDER>/packages/server/upload'. The folder must be in home folder and make sure to use /hosthome/ instead of home in path. Its mandatory to point to ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/server/upload")," folder of your engine folder."),(0,i.kt)("h2",{id:"deploy-ethereal-engine-helm-chart"},"Deploy Ethereal Engine Helm chart"),(0,i.kt)("p",null,"Run the following command: ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/local.values.yaml> -f </path/to/db-refresh-true.values.yaml> local etherealengine/etherealengine"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-true.values.yaml"},"db-refresh-true.values.yaml")," can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,i.kt)("p",null,"After a minute or so, running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," should show one or more instanceservers, one or more api\nservers, and one client server in the Running state. Setting ",(0,i.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," made the api servers\n(re)initialize the database. Since you don't want that to happen every time a new api pod starts, run\n",(0,i.kt)("inlineCode",{parentName:"p"},"helm upgrade --reuse-values -f </path/to/db-refresh-false.values.yaml> local etherealengine/etherealengine"),".\nThe API pods will restart and will now not attempt to reinit the database on boot."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-false.values.yaml"},"db-refresh-false.values.yaml")," can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,i.kt)("h2",{id:"accept-invalid-certs"},"Accept invalid certs"),(0,i.kt)(l.ZP,{mdxType:"AcceptCertificates"}))}d.isMDXComponent=!0},4401:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(7462),i=(n(7294),n(3905));const l={toc:[]},o="wrapper";function r(e){let{components:t,...n}=e;return(0,i.kt)(o,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Since there are no valid certificates for this domain, you'll have to tell your browser to ignore the insecure connections when you try to load the application."),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://local.etherealengine.org/"},"https://local.etherealengine.org/"),", you should see a warning about an invalid certificate; accept this invalid cert to get to the home page. Next if it keeps displaying 'loading routes' progress for a long time, it is due to the fact that you have to allow certificates. You'll have to open the dev tools for your browser and go to the 'Console' tab. You will see some errors in URL address starting with 'wss'. Replace 'wss' with 'https' and open it in new tab. Accept the certificate and reload your Ethereal Engine tab. You need to do this for following domains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wss://api-local.etherealengine.org -> ",(0,i.kt)("a",{parentName:"li",href:"https://api-local.etherealengine.org"},"https://api-local.etherealengine.org")),(0,i.kt)("li",{parentName:"ul"},"wss://instanceserver-local.etherealengine.org -> ",(0,i.kt)("a",{parentName:"li",href:"https://instanceserver-local.etherealengine.org"},"https://instanceserver-local.etherealengine.org")),(0,i.kt)("li",{parentName:"ul"},"https://localhost:9000")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can open Developer tools in Chrome by clicking the side menu with three dots, then More tools > Developer tools (or use Ctrl+Shift+I)")))}r.isMDXComponent=!0}}]);