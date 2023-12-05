"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[4449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||h[u]||a;return n?o.createElement(k,l(l({ref:t},d),{},{components:n})):o.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),a=n(4401);const l={},i="Ethereal Engine on Docker Desktop",s={unversionedId:"host/devops_deployment/docker_desktop",id:"host/devops_deployment/docker_desktop",title:"Ethereal Engine on Docker Desktop",description:"NOTE: UDP networking does not work properly on Docker Desktop as of this writing, as Docker Desktop does not expose the IP addresses/ports of the node publicly, so mediasoup cannot connect over UDP. If you want to test audio/video calling or networked movements, please use minikube.",source:"@site/docs/1_host/2_devops_deployment/1_docker_desktop.md",sourceDirName:"1_host/2_devops_deployment",slug:"/host/devops_deployment/docker_desktop",permalink:"/etherealengine-docs/es/docs/host/devops_deployment/docker_desktop",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/1_host/2_devops_deployment/1_docker_desktop.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereal Engine on MicroK8s (Windows)",permalink:"/etherealengine-docs/es/docs/host/devops_deployment/microk8s_windows"},next:{title:"Ethereal Engine on Minikube",permalink:"/etherealengine-docs/es/docs/host/devops_deployment/minikube"}},p={},d=[{value:"NOTE: UDP networking does not work properly on Docker Desktop as of this writing, as Docker Desktop does not expose the IP addresses/ports of the node publicly, so mediasoup cannot connect over UDP. If you want to test audio/video calling or networked movements, please use minikube.",id:"note-udp-networking-does-not-work-properly-on-docker-desktop-as-of-this-writing-as-docker-desktop-does-not-expose-the-ip-addressesports-of-the-node-publicly-so-mediasoup-cannot-connect-over-udp-if-you-want-to-test-audiovideo-calling-or-networked-movements-please-use-minikube",level:2},{value:"Install kubectl, Helm, and Docker Desktop",id:"install-kubectl-helm-and-docker-desktop",level:2},{value:"Clone Ethereal Engine repo to your local machine",id:"clone-ethereal-engine-repo-to-your-local-machine",level:2},{value:"Start MinIO &amp; MariaDB server locally via Docker",id:"start-minio--mariadb-server-locally-via-docker",level:2},{value:"Enable Kubernetes in Docker Desktop",id:"enable-kubernetes-in-docker-desktop",level:2},{value:"Edit system hostfile to point EtherealEngine addresses to 127.0.0.1",id:"edit-system-hostfile-to-point-etherealengine-addresses-to-127001",level:2},{value:"Add Helm repos",id:"add-helm-repos",level:2},{value:"Install Agones and Redis deployments",id:"install-agones-and-redis-deployments",level:2},{value:"Run build_docker_desktop.sh",id:"run-build_docker_desktopsh",level:2},{value:"Update Helm Values File",id:"update-helm-values-file",level:2},{value:"Deploy Ethereal Engine Helm chart",id:"deploy-ethereal-engine-helm-chart",level:2},{value:"Accept invalid certs",id:"accept-invalid-certs",level:2}],c={toc:d},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ethereal-engine-on-docker-desktop"},"Ethereal Engine on Docker Desktop"),(0,r.kt)("h2",{id:"note-udp-networking-does-not-work-properly-on-docker-desktop-as-of-this-writing-as-docker-desktop-does-not-expose-the-ip-addressesports-of-the-node-publicly-so-mediasoup-cannot-connect-over-udp-if-you-want-to-test-audiovideo-calling-or-networked-movements-please-use-minikube"},"NOTE: UDP networking does not work properly on Docker Desktop as of this writing, as Docker Desktop does not expose the IP addresses/ports of the node publicly, so mediasoup cannot connect over UDP. If you want to test audio/video calling or networked movements, please use minikube."),(0,r.kt)("h2",{id:"install-kubectl-helm-and-docker-desktop"},"Install kubectl, Helm, and Docker Desktop"),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),", ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm"),",\nand/or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/linux-install/"},"Docker Desktop"),"\naren't already installed on your machine, install them. Windows and Mac Docker Desktop installation instructions\ncan be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/mac-install/"},"here"),"."),(0,r.kt)("p",null,"You may also need to install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")),(0,r.kt)("h2",{id:"clone-ethereal-engine-repo-to-your-local-machine"},"Clone Ethereal Engine repo to your local machine"),(0,r.kt)("p",null,"To build the Ethereal Engine Docker image locally, and to have a pre-tested way to run various local\nservices, you'll need to get the Ethereal Engine repo on your machine. This is most easily\ndone by running ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/etherealengine/etherealengine.git")),(0,r.kt)("h2",{id:"start-minio--mariadb-server-locally-via-docker"},"Start MinIO & MariaDB server locally via Docker"),(0,r.kt)("p",null,"For simplicity, we recommend running MinIO & MariaDB server on your local machine outside of MicroK8s."),(0,r.kt)("p",null,"If you run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," from the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the Ethereal Engine repo, it will start up MinIO & multiple MariaDB docker containers (as well as a redis server, which is not needed). For mariadb containers, one is intended for local development, runs on port 3306; another, intended for automated testing purposes, runs on port 3305; and the last one, intended for minikube/microk8s testing, runs on port 3304. Once the docker container is stopped, you can start it again by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev-docker"),"."),(0,r.kt)("p",null,"Alternatively, if you want to just run MinIO & MariaDB on its own without Docker, that's fine too. You'll just have to configure the Helm config file to have the appropriate S3 & SQL server configuration, and possibly change the script ",(0,r.kt)("inlineCode",{parentName:"p"},"./scripts/build_minikube.sh"),"."),(0,r.kt)("h2",{id:"enable-kubernetes-in-docker-desktop"},"Enable Kubernetes in Docker Desktop"),(0,r.kt)("p",null,"Inside Docker Desktop, go to Settings. There should be a section for Kubernetes (as of this writing, located\nbetween ",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Engine")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Software updates")," settings). Click on that, then check the checkbox for Enable Kuberentes,\nand then click the button Apply and restart. When Docker Desktop restarts, it should now run a minikube-like Kubernetes\ncluster on startup. The Kubernetes context for this should be named ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-desktop"),"."),(0,r.kt)("h2",{id:"edit-system-hostfile-to-point-etherealengine-addresses-to-127001"},"Edit system hostfile to point EtherealEngine addresses to 127.0.0.1"),(0,r.kt)("p",null,"You'll need to edit your hostfile to point certain domains to 127.0.0.1, which is how Docker Desktop routes traffic\nto its Kubernetes cluster. On Linux, this is done by running ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo gedit /etc/hosts"),"."),(0,r.kt)("p",null,"Add the following line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1  local.etherealengine.org api-local.etherealengine.org instanceserver-local.etherealengine.org 00000.instanceserver-local.etherealengine.org 00001.instanceserver-local.etherealengine.org 00002.instanceserver-local.etherealengine.org 00003.instanceserver-local.etherealengine.org\n")),(0,r.kt)("p",null,"You should also see a section that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Added by Docker Desktop\n# To allow the same kube context to work on the host and the container:\n127.0.0.1   kubernetes.docker.internal\n# End of section\n")),(0,r.kt)("p",null,"The first line says to point several *-local.etherealengine.org domains internally to the Kubernetes cluster,\nwhere the nginx ingress server will redirect the traffic to the appropriate pod.\nThe section it automatically added is used for giving Docker containers, including the Kubernetes cluster,\naccess to the host machine."),(0,r.kt)("p",null,"Make sure to save this file after you've edited it. On Linux, at least, you need root permissions\nto edit it."),(0,r.kt)("h2",{id:"add-helm-repos"},"Add Helm repos"),(0,r.kt)("p",null,"You'll need to add a few Helm repos. Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add agones https://agones.dev/chart/stable\nhelm repo add redis https://charts.bitnami.com/bitnami\nhelm repo add etherealengine https://helm.etherealengine.org\n")),(0,r.kt)("p",null,"This will add the Helm charts for Agones, Redis, and Ethereal Engine, respectively."),(0,r.kt)("h2",{id:"install-agones-and-redis-deployments"},"Install Agones and Redis deployments"),(0,r.kt)("p",null,"After adding those Helm repos, you'll start installing deployments using Helm repos."),(0,r.kt)("p",null,"Make sure that kubectl is pointed at docker-desktop by running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),",\nwhich should say 'docker-desktop'. You can also run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to get all contexts\nthat kubectl has been configured to run; the current one will have a '*' under the left-most\n'current' column."),(0,r.kt)("p",null,"Once kubectl is pointed to docker-desktop, from the top of the Ethereal Engine repo, run\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/agones-default-values.yaml> agones agones/agones")," to install Agones\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install local-redis redis/redis")," to install redis."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/agones-default-values.yaml"},"agones-default-values.yaml")," can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," to list all of the pods running in docker-desktop. After a minute or so,\nall of these pods should be in the Running state."),(0,r.kt)("h2",{id:"run-build_docker_desktopsh"},"Run build_docker_desktop.sh"),(0,r.kt)("p",null,"When docker desktop's Kubernetes cluster is running, run the following command from the root of the Ethereal Engine repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/build_docker_desktop.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you face issue related to ",(0,r.kt)("inlineCode",{parentName:"p"},'"packages/projects/projects/" does not exist')," then run following commands in your terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MYSQL_HOST=localhost\nnpm run dev-docker\nnpm run dev-reinit\nnpm run install-projects\n")),(0,r.kt)("p",null,"The script builds the full-repo Docker image using several build arguments. Vite, which builds\nthe client files, uses some information from the MariaDB database created for local K8s deployments\nto fill in some variables, and needs database credentials. The script will supply default values\nfor all of the MYSQL_* variables if they are not provided to the script, as well as VITE_CLIENT_HOST,\nVITE_SERVER_HOST, and VITE_INSTANCESERVER_HOST. The latter three will make your Docker Desktop K8s deployment\naccessible on ",(0,r.kt)("inlineCode",{parentName:"p"},"(local/api-local/instanceserver-local).etherealengine.org"),"; if you want to run it on a different\ndomain, then you'll have to set those three environment variables to what you want them to be (and also\nchange the hostfile records you made pointing those subdomains to 127.0.0.1)"),(0,r.kt)("p",null,"This will build an image of the entire Ethereal Engine repo into a single Docker file. When deployed for\ndifferent services, it will only run the parts needed for that service. This may take up to 15 minutes,\nthough later builds should take less time as things are cached."),(0,r.kt)("h2",{id:"update-helm-values-file"},"Update Helm Values File"),(0,r.kt)("p",null,"This will use a Helm config file titled 'local.values.yaml' to configure the deployment. There is\na ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.dockerdesktop.template.values.yaml"},"template")," for this file in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo."),(0,r.kt)("p",null,"If you are using local file server as explained a couple of steps earlier then, update 'local.values.yaml' variable ",(0,r.kt)("inlineCode",{parentName:"p"},"api.fileServer.hostUploadFolder")," with value e.g. '/hosthome/<OS_USER_NAME>/<ENGINE_FOLDER>/packages/server/upload'. The folder must be in home folder and make sure to use /hosthome/ instead of home in path. It's mandatory to point to ",(0,r.kt)("inlineCode",{parentName:"p"},"/packages/server/upload")," folder of your engine folder."),(0,r.kt)("h2",{id:"deploy-ethereal-engine-helm-chart"},"Deploy Ethereal Engine Helm chart"),(0,r.kt)("p",null,"Run the following command: ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/local.values.yaml> -f </path/to/db-refresh-true.values.yaml> local etherealengine/etherealengine"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-true.values.yaml"},"db-refresh-true.values.yaml")," can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,r.kt)("p",null,"After a minute or so, running ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," should show one or more instanceservers, one or more api\nservers, and one client server in the Running state. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," made the api servers\n(re)initialize the database. Since you don't want that to happen every time a new api pod starts, run\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade --reuse-values -f </path/to/db-refresh-false.values.yaml> local etherealengine/etherealengine"),".\nThe API pods will restart and will now not attempt to reinit the database on boot."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-false.values.yaml"},"db-refresh-false.values.yaml")," can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,r.kt)("h2",{id:"accept-invalid-certs"},"Accept invalid certs"),(0,r.kt)(a.ZP,{mdxType:"AcceptCertificates"}))}u.isMDXComponent=!0},4401:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(7462),r=(n(7294),n(3905));const a={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since there are no valid certificates for this domain, you'll have to tell your browser to ignore the insecure connections when you try to load the application."),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://local.etherealengine.org/"},"https://local.etherealengine.org/"),", you should see a warning about an invalid certificate; accept this invalid cert to get to the home page. Next if it keeps displaying 'loading routes' progress for a long time, it is due to the fact that you have to allow certificates. You'll have to open the dev tools for your browser and go to the 'Console' tab. You will see some errors in URL address starting with 'wss'. Replace 'wss' with 'https' and open it in new tab. Accept the certificate and reload your Ethereal Engine tab. You need to do this for following domains:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wss://api-local.etherealengine.org -> ",(0,r.kt)("a",{parentName:"li",href:"https://api-local.etherealengine.org"},"https://api-local.etherealengine.org")),(0,r.kt)("li",{parentName:"ul"},"wss://instanceserver-local.etherealengine.org -> ",(0,r.kt)("a",{parentName:"li",href:"https://instanceserver-local.etherealengine.org"},"https://instanceserver-local.etherealengine.org")),(0,r.kt)("li",{parentName:"ul"},"https://localhost:9000")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can open Developer tools in Chrome by clicking the side menu with three dots, then More tools > Developer tools (or use Ctrl+Shift+I)")))}i.isMDXComponent=!0}}]);