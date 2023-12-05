"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[9037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),l=(n(7294),n(3905)),o=n(4401);const i={},r="Ethereal Engine on MicroK8s (Windows)",s={unversionedId:"host/devops_deployment/microk8s_windows",id:"host/devops_deployment/microk8s_windows",title:"Ethereal Engine on MicroK8s (Windows)",description:"This guide is intended for local environment and currently tested on Windows 11.",source:"@site/docs/1_host/2_devops_deployment/0_microk8s_windows.md",sourceDirName:"1_host/2_devops_deployment",slug:"/host/devops_deployment/microk8s_windows",permalink:"/etherealengine-docs/docs/host/devops_deployment/microk8s_windows",draft:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/1_host/2_devops_deployment/0_microk8s_windows.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ethereal Engine on MicroK8s (Linux)",permalink:"/etherealengine-docs/docs/host/devops_deployment/microk8s_linux"},next:{title:"Ethereal Engine on Docker Desktop",permalink:"/etherealengine-docs/docs/host/devops_deployment/docker_desktop"}},c={},u=[{value:"Install Windows Subsystem for Linux (WSL)",id:"install-windows-subsystem-for-linux-wsl",level:2},{value:"Set Ubuntu as default WSL distribution",id:"set-ubuntu-as-default-wsl-distribution",level:3},{value:"Install Docker Desktop",id:"install-docker-desktop",level:2},{value:"Enable systemd in WSL",id:"enable-systemd-in-wsl",level:2},{value:"Enable localhostForwarding in WSL",id:"enable-localhostforwarding-in-wsl",level:2},{value:"Install Node",id:"install-node",level:2},{value:"Install Python 3",id:"install-python-3",level:2},{value:"Install Make",id:"install-make",level:2},{value:"Install kubectl and Helm",id:"install-kubectl-and-helm",level:2},{value:"Download and install MicroK8s",id:"download-and-install-microk8s",level:2},{value:"Clone Ethereal Engine repo to your local machine",id:"clone-ethereal-engine-repo-to-your-local-machine",level:2},{value:"Start MinIO &amp; MariaDB server locally via Docker",id:"start-minio--mariadb-server-locally-via-docker",level:2},{value:"Enabling MicroK8s Addons",id:"enabling-microk8s-addons",level:2},{value:"Add MicroK8s to Kubectl",id:"add-microk8s-to-kubectl",level:2},{value:"(Optional) Add MicroK8s to Lens",id:"optional-add-microk8s-to-lens",level:2},{value:"Enable MicroK8s access for local docker",id:"enable-microk8s-access-for-local-docker",level:2},{value:"Verify and troubleshoot MicroK8s",id:"verify-and-troubleshoot-microk8s",level:2},{value:"Update system hostfile to point to MicroK8s",id:"update-system-hostfile-to-point-to-microk8s",level:2},{value:"Add Helm repos",id:"add-helm-repos",level:2},{value:"Install Agones and Redis deployments",id:"install-agones-and-redis-deployments",level:2},{value:"(Optional) Install Elastic Search and Kibana using Helm for Server Logs",id:"optional-install-elastic-search-and-kibana-using-helm-for-server-logs",level:2},{value:"Run build_microk8s.sh",id:"run-build_microk8ssh",level:2},{value:"Update Helm Values File",id:"update-helm-values-file",level:2},{value:"Deploy Ethereal Engine Helm chart",id:"deploy-ethereal-engine-helm-chart",level:2},{value:"Accept invalid certs",id:"accept-invalid-certs",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...i}=e;return(0,l.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ethereal-engine-on-microk8s-windows"},"Ethereal Engine on MicroK8s (Windows)"),(0,l.kt)("p",null,"This guide is intended for local environment and currently tested on Windows 11."),(0,l.kt)("h2",{id:"install-windows-subsystem-for-linux-wsl"},"Install Windows Subsystem for Linux (WSL)"),(0,l.kt)("p",null,"Install Ubuntu distribution of Linux from Microsoft Store by using guide ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"here"),"."),(0,l.kt)("p",null,"Alternatively, you can follow these instructions as well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pureinfotech.com/install-wsl-windows-11/"},"How to install WSL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install-manual"},"Manual installation steps for WSL"))),(0,l.kt)("p",null,"Once WSL is installed, make sure to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password"},"Set up your Linux username and password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment#update-and-upgrade-packages"},"Update and upgrade packages"))),(0,l.kt)("h3",{id:"set-ubuntu-as-default-wsl-distribution"},"Set Ubuntu as default WSL distribution"),(0,l.kt)("p",null,"In powershell/cmd run following command to see the list of distributions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -l\n")),(0,l.kt)("p",null,"In the list you should be able to see ",(0,l.kt)("inlineCode",{parentName:"p"},"Ubuntu")," listed. Afterwards, run following command to set Ubuntu as default distribution:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wsl -s Ubuntu\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"WSL Ubuntu Default Distribution",src:n(8488).Z,width:"769",height:"435"})),(0,l.kt)("h2",{id:"install-docker-desktop"},"Install Docker Desktop"),(0,l.kt)("p",null,"Install docker desktop with WSL 2 backend. You can find the instructions ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"here"),"."),(0,l.kt)("p",null,"Once docker desktop is installed and running make sure to enable your WSL distribution. You can do so from Docker Desktop App by visiting ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings > Resources > WSL Integration"),". Make sure to hit 'Apply & Restart'."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docker Desktop WSL Distro",src:n(5238).Z,width:"1918",height:"1033"})),(0,l.kt)("h2",{id:"enable-systemd-in-wsl"},"Enable systemd in WSL"),(0,l.kt)("p",null,"Inside your Ubuntu instance, add the following modification to ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/wsl.conf"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[boot]\nsystemd=true\n")),(0,l.kt)("p",null,"Then restart your instance by running ",(0,l.kt)("inlineCode",{parentName:"p"},"wsl --shutdown")," in PowerShell and relaunching Ubuntu. Upon launch you should have systemd running. You can check this with the command ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl list-unit-files --type=service")," which should show your services status."),(0,l.kt)("p",null,"You can read more about this on ",(0,l.kt)("a",{parentName:"p",href:"https://ubuntu.com/blog/ubuntu-wsl-enable-systemd"},"Ubuntu blog")," & ",(0,l.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/commandline/systemd-support-is-now-available-in-wsl/"},"Microsoft blog"),"."),(0,l.kt)("h2",{id:"enable-localhostforwarding-in-wsl"},"Enable localhostForwarding in WSL"),(0,l.kt)("p",null,"Create or update ",(0,l.kt)("inlineCode",{parentName:"p"},".wslconfig")," file located at ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{USER_NAME}\\.wslconfig")," (Or ",(0,l.kt)("inlineCode",{parentName:"p"},"%UserProfile%\\.wslconfig"),") with following content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[wsl2]\nlocalhostForwarding=true\n")),(0,l.kt)("p",null,"This requires WSL shutdown and reboot. Shutting down your terminal is insufficient. Also machine boot is not required. Simply run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wsl --shutdown (in Powershell) or \nwsl.exe --shutdown (within Ubuntu)\n")),(0,l.kt)("p",null,"Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/65707003/2077741"},"Custom hostname for servers running in WSL 2")),(0,l.kt)("h2",{id:"install-node"},"Install Node"),(0,l.kt)("p",null,"In your WSL Ubuntu terminal, if node (",(0,l.kt)("inlineCode",{parentName:"p"},"node --version"),") isn't already installed on your machine. You can do so by first installing ",(0,l.kt)("inlineCode",{parentName:"p"},"nvm")," by running following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash\nsource ~/.profile\n\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"                   # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion" # This loads nvm bash_completion\n')),(0,l.kt)("p",null,"You can verify nvm by using ",(0,l.kt)("inlineCode",{parentName:"p"},"nvm --version")," command. Afterwards, install node by using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install --lts\n")),(0,l.kt)("p",null,"You can verify nvm by using ",(0,l.kt)("inlineCode",{parentName:"p"},"node --version")," command."),(0,l.kt)("h2",{id:"install-python-3"},"Install Python 3"),(0,l.kt)("p",null,"In your WSL Ubuntu terminal, if python 3 (",(0,l.kt)("inlineCode",{parentName:"p"},"pip3 --version"),") isn't already installed on your machine. You can do so by running following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install -y python3-pip\n")),(0,l.kt)("p",null,"You can verify python3 by using ",(0,l.kt)("inlineCode",{parentName:"p"},"python3 --version")," command."),(0,l.kt)("h2",{id:"install-make"},"Install Make"),(0,l.kt)("p",null,"In your WSL Ubuntu terminal, if make (",(0,l.kt)("inlineCode",{parentName:"p"},"make --version"),") isn't already installed on your machine. You can do so by running following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update -y\nsudo apt-get install -y build-essential\n")),(0,l.kt)("p",null,"You can verify make by using ",(0,l.kt)("inlineCode",{parentName:"p"},"make --version")," command."),(0,l.kt)("h2",{id:"install-kubectl-and-helm"},"Install kubectl and Helm"),(0,l.kt)("p",null,"In your WSL Ubuntu terminal, if ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," & ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm")," aren't already installed on your machine, install them."),(0,l.kt)("p",null,'Docker & Docker Compose should be installed if you successfully completed "',(0,l.kt)("a",{parentName:"p",href:"#install-docker-desktop"},"Install Docker Desktop"),'" step. You can verify by running ',(0,l.kt)("inlineCode",{parentName:"p"},"docker --version")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose --version")," commands in WSL Ubuntu terminal."),(0,l.kt)("h2",{id:"download-and-install-microk8s"},"Download and install MicroK8s"),(0,l.kt)("p",null,"Make sure to install MicroK8s in your WSL Ubuntu terminal. Instructions can be found ",(0,l.kt)("a",{parentName:"p",href:"https://ubuntu.com/tutorials/install-a-local-kubernetes-with-microk8s#1-overview"},"here")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap install microk8s --classic --channel=1.26/stable\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Due to some ongoing issue with host storage access in microk8s 1.25 version, it is recommended to use version 1.26.")),(0,l.kt)("p",null,"While you can follow the demo instructions there about starting MicroK8s, deploying some demo deployments, etc. to get a feel for it."),(0,l.kt)("h2",{id:"clone-ethereal-engine-repo-to-your-local-machine"},"Clone Ethereal Engine repo to your local machine"),(0,l.kt)("p",null,"To build the Ethereal Engine Docker image locally, and to have a pre-tested way to run various local services, you'll need to get the Ethereal Engine repo on your machine. This is most easily done by running following command in WSL Ubuntu terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/etherealengine/etherealengine.git etherealengine\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local")," file does not exist in the root of your repo folder then create it by duplicating ",(0,l.kt)("inlineCode",{parentName:"p"},".env.local.default"),"."),(0,l.kt)("h2",{id:"start-minio--mariadb-server-locally-via-docker"},"Start MinIO & MariaDB server locally via Docker"),(0,l.kt)("p",null,"For simplicity, we recommend running MinIO & MariaDB server on your local machine outside of MicroK8s."),(0,l.kt)("p",null,"If you run ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose up")," from the top-level ",(0,l.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the Ethereal Engine repo, it will start up MinIO & multiple MariaDB docker containers (as well as a redis server, which is not needed). For mariadb containers, one is intended for local development, runs on port 3306; another, intended for automated testing purposes, runs on port 3305; and the last one, intended for minikube/microk8s testing, runs on port 3304. Once the docker container is stopped, you can start it again by running ",(0,l.kt)("inlineCode",{parentName:"p"},"npm run dev-docker"),"."),(0,l.kt)("p",null,"Alternatively, if you want to just run MinIO & MariaDB on its own without Docker, that's fine too. You'll just have to configure the Helm config file to have the appropriate S3 & SQL server configuration, and possibly change the script ",(0,l.kt)("inlineCode",{parentName:"p"},"./scripts/build_microk8s.sh"),"."),(0,l.kt)("h2",{id:"enabling-microk8s-addons"},"Enabling MicroK8s Addons"),(0,l.kt)("p",null,"Execute following command in your WSL Ubuntu terminal to enable MicroK8s addons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo microk8s enable dashboard dns registry host-access ingress rbac hostpath-storage helm3\n")),(0,l.kt)("h2",{id:"add-microk8s-to-kubectl"},"Add MicroK8s to Kubectl"),(0,l.kt)("p",null,"First make sure there is no existing configuration for microk8s in your kubectl config. To do so you run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," command in WSL Ubuntu terminal and see if the output contains microk8s. You can remove the existing configurations using following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config delete-context microk8s\nkubectl config delete-cluster microk8s-cluster\nkubectl config delete-user microk8s-admin\n")),(0,l.kt)("p",null,"Now, we will add microk8s configuration to kubectl config. We can do this by using following commands in WSL Ubuntu terminal. ",(0,l.kt)("a",{parentName:"p",href:"https://discuss.kubernetes.io/t/use-kubectl-with-microk8s/5313/6"},"Reference")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config set-cluster microk8s --server=https://127.0.0.1:16443/ --certificate-authority=/var/snap/microk8s/current/certs/ca.crt\nkubectl config set-credentials microk8s-admin --token=\"$(sudo microk8s kubectl config view --raw -o 'jsonpath={.users[0].user.token}')\"\nkubectl config set-context microk8s --cluster=microk8s --namespace=default --user=microk8s-admin\n")),(0,l.kt)("p",null,"Afterwards you can use this newly create context by executing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl config use-context microk8s\n")),(0,l.kt)("p",null,"Now if you run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," command then microk8s should be current context."),(0,l.kt)("h2",{id:"optional-add-microk8s-to-lens"},"(Optional) Add MicroK8s to Lens"),(0,l.kt)("p",null," If the previous step was performed successfully then you should be able to see MicroK8s cluster in GUI tool ",(0,l.kt)("a",{parentName:"p",href:"https://k8slens.dev/"},"Lens"),". Else you can print the configuration using following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"microk8s config\n")),(0,l.kt)("p",null,"In Lens, goto ",(0,l.kt)("inlineCode",{parentName:"p"},"File")," > ",(0,l.kt)("inlineCode",{parentName:"p"},"Add Cluster")," and paste the output of above command to add cluster."),(0,l.kt)("h2",{id:"enable-microk8s-access-for-local-docker"},"Enable MicroK8s access for local docker"),(0,l.kt)("p",null,"For MicroK8s we will be using MicroK8s local ",(0,l.kt)("a",{parentName:"p",href:"https://microk8s.io/docs/registry-built-in"},"registry")),(0,l.kt)("p",null,"Option 1: In Windows, add the following lines to ",(0,l.kt)("inlineCode",{parentName:"p"},"%userprofile%\\.docker\\daemon.json"),". Create this file if it does not already exists."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n    "insecure-registries" : ["http://microk8s.registry:32000", "microk8s.registry:32000"]  \n}\n')),(0,l.kt)("p",null,"Afterwards, restart docker from Powershell: ",(0,l.kt)("inlineCode",{parentName:"p"},"restart-service *docker*")),(0,l.kt)("p",null,"Option 2: Edit configuration as shown in below image. Make sure to hit 'Apply & Restart' after making changes."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Docker Desktop Configuration",src:n(7233).Z,width:"1920",height:"1030"})),(0,l.kt)("p",null,"Reference:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/55352883/2077741"},"daemon.json file in W1indows")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/docker/docs/blob/62adddbb6b1f8d861c72f6ade2c50977fd57f481/registry/insecure.md#troubleshoot-insecure-registry"},"When using buildkit, http needs to be added")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://forums.docker.com/t/restart-docker-service-from-command-line/27331/2"},"Restart Docker service from command line"))),(0,l.kt)("h2",{id:"verify-and-troubleshoot-microk8s"},"Verify and troubleshoot MicroK8s"),(0,l.kt)("p",null,"Run following command and check if there is any warning. Its recommended to fix the warnings for MicroK8s to work properly."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo microk8s inspect\n")),(0,l.kt)("h2",{id:"update-system-hostfile-to-point-to-microk8s"},"Update system hostfile to point to MicroK8s"),(0,l.kt)("p",null,"You'll need to edit your hostfile to point certain domains to host machine IP address. First you need to find the IP address of your WSL. Run ",(0,l.kt)("inlineCode",{parentName:"p"},"wsl hostname -I")," in powershell/cmd. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"C:\\Users\\hanzl>wsl hostname -I\n172.31.89.133 10.1.215.0\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: If you face issue while running above command, make sure that 'Ubuntu' distribution is selected as default. You can do so by running ",(0,l.kt)("inlineCode",{parentName:"p"},"wsl /l")," to view distributions and then run ",(0,l.kt)("inlineCode",{parentName:"p"},"wslconfig /s Ubuntu")," to select distribution.")),(0,l.kt)("p",null,"From the above output, use ",(0,l.kt)("inlineCode",{parentName:"p"},"172.31.89.133")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"{WSL_IP}"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Your ip would be different, this is just for example.")),(0,l.kt)("p",null,"Next, edit your Windows hostfile, this is done by editing ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Windows\\System32\\drivers\\etc\\hosts"),". Add/Update the following lines:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"{WSL_IP} local.etherealengine.org api-local.etherealengine.org instanceserver-local.etherealengine.org 00000.instanceserver-local.etherealengine.org 00001.instanceserver-local.etherealengine.org 00002.instanceserver-local.etherealengine.org 00003.instanceserver-local.etherealengine.org\n\n{WSL_IP} microk8s.registry\n")),(0,l.kt)("p",null,"Make sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"{WSL_IP}")," with ip address from ",(0,l.kt)("inlineCode",{parentName:"p"},"wsl hostname -I")," command."),(0,l.kt)("p",null,"The first line says to point several *-local.etherealengine.org domains internally to the host machine, where the nginx ingress server will redirect the traffic to the appropriate pod."),(0,l.kt)("p",null,"Make sure to save this file after you've edited it. Also, you will need to update hostfile with updated ip address after every Windows/WSL reboot."),(0,l.kt)("h2",{id:"add-helm-repos"},"Add Helm repos"),(0,l.kt)("p",null,"You'll need to add a few Helm repos. Run the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add agones https://agones.dev/chart/stable\nhelm repo add redis https://charts.bitnami.com/bitnami\nhelm repo add etherealengine https://helm.etherealengine.org\n")),(0,l.kt)("p",null,"This will add the Helm charts for Agones, Redis, and Ethereal Engine, respectively."),(0,l.kt)("h2",{id:"install-agones-and-redis-deployments"},"Install Agones and Redis deployments"),(0,l.kt)("p",null,"After adding those Helm repos, you'll start installing deployments using Helm repos."),(0,l.kt)("p",null,"Make sure that kubectl is pointed at MicroK8s by running ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),", which should say 'microk8s'. You can also run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl config get-contexts")," to get all contexts that kubectl has been configured to run; the current one will have a '*' under the left-most\n'current' column."),(0,l.kt)("p",null,"Once kubectl is pointed to microk8s, from the top of the Ethereal Engine repo, run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install -f </path/to/agones-default-values.yaml> agones agones/agones")," to install Agones and ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install local-redis redis/redis")," to install redis."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/agones-default-values.yaml"},"agones-default-values.yaml")," can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,l.kt)("p",null,"You can run ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods -A")," to list all of the pods running in microk8s. After a minute or so, all of these pods should be in the Running state."),(0,l.kt)("h2",{id:"optional-install-elastic-search-and-kibana-using-helm-for-server-logs"},"(Optional) Install Elastic Search and Kibana using Helm for Server Logs"),(0,l.kt)("p",null,"To install Elasticsearch, add the elastic repository in Helm: ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo add elastic https://helm.elastic.co")),(0,l.kt)("p",null,"Now, use the curl command to download the values.yaml file containing configuration information:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"curl -O https://raw.githubusercontent.com/elastic/helm-charts/master/elasticsearch/examples/minikube/values.yaml")),(0,l.kt)("p",null,"Use the helm install command and the values.yaml file to install the Elasticsearch helm chart:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -f ./values.yaml")),(0,l.kt)("p",null,"The -f option allows specifying the yaml file with the template. If you wish to install Elasticsearch in a specific namespace, add the -n option followed by the name of the namespace: ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install elasticsearch elastic/elasticsearch -n [namespace] -f ./values.yaml")),(0,l.kt)("p",null,"Now check if the cluster members are up: ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods --namespace=default -l app=elasticsearch-master -w")),(0,l.kt)("p",null,"The other option is to use the helm test command to examine the cluster\u2019s health: ",(0,l.kt)("inlineCode",{parentName:"p"},"helm test elasticsearch")),(0,l.kt)("p",null,"To install Kibana on top of Elasticsearch : ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install kibana elastic/kibana")),(0,l.kt)("p",null,"Check if all the pods are ready: ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods")),(0,l.kt)("p",null,"After you set up port-forwarding, access Elasticsearch, and the Kibana GUI by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:5601")," in your browser"),(0,l.kt)("p",null,"In order to connect logger with elasticsearch, update ",(0,l.kt)("inlineCode",{parentName:"p"},"local.microk8s.template.values.yaml")," env ",(0,l.kt)("inlineCode",{parentName:"p"},"api.extraEnv.ELASTIC_HOST")," for e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"http://<username>:<password>@<host>:<port>")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.microk8s.template.values.yaml"},"local.microk8s.template.values.yaml")," can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,l.kt)("h2",{id:"run-build_microk8ssh"},"Run build_microk8s.sh"),(0,l.kt)("p",null,"When microk8s is running, run the following command from the root of the Ethereal Engine repo in WSL Ubuntu terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export REGISTRY_HOST=microk8s.registry; export MYSQL_HOST=kubernetes.docker.internal;bash ./scripts/build_microk8s.sh\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If you face issue related to ",(0,l.kt)("inlineCode",{parentName:"p"},'"packages/projects/projects/" does not exist')," then run following commands in your WSL terminal:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export MYSQL_HOST=localhost\nnpm run dev-docker\nnpm run dev-reinit\nnpm run install-projects\n")),(0,l.kt)("p",null,"The script builds the full-repo Docker image using several build arguments. Vite, which builds he client files, uses some information from the MariaDB database created for microk8s deployments to fill in some variables, and needs database credentials. The script will supply default values for all of the MYSQL_* variables if they are not provided to the script, as well as VITE_CLIENT_HOST, VITE_SERVER_HOST, and VITE_INSTANCESERVER_HOST. The latter three will make your microk8s deployment accessible on ",(0,l.kt)("inlineCode",{parentName:"p"},"(local/api-local/instanceserver-local).etherealengine.org"),"; if you want to run it on a different domain, then you'll have to set those three environment variables to what you want them to be (and also change the hostfile records you made pointing those subdomains)"),(0,l.kt)("p",null,"This will build an image of the entire Ethereal Engine repo into a single Docker file. When deployed for different services, it will only run the parts needed for that service. This may take up to 15 minutes, though later builds should take less time as things are cached."),(0,l.kt)("p",null,"Once the images are build. It will push it to MicroK8s local registry. You can verify that images are pushed to registry by visiting ",(0,l.kt)("a",{parentName:"p",href:"http://microk8s.registry:32000/v2/_catalog"},"http://microk8s.registry:32000/v2/_catalog"),"."),(0,l.kt)("h2",{id:"update-helm-values-file"},"Update Helm Values File"),(0,l.kt)("p",null,"This will use a Helm config file titled 'local.values.yaml' to configure the deployment. There is\na ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/local.microk8s.template.values.yaml"},"template")," for this file in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo."),(0,l.kt)("p",null,"If you are using local file server as explained couple of steps earlier then, update 'local.values.yaml' variable ",(0,l.kt)("inlineCode",{parentName:"p"},"api.fileServer.hostUploadFolder")," with value similar to '<ENGINE_FULL_PATH>/packages/server/upload' e.g. '/home/<OS_USER_NAME>/<ENGINE_FOLDER>/packages/server/upload'. Its mandatory to point to ",(0,l.kt)("inlineCode",{parentName:"p"},"/packages/server/upload")," folder of your engine folder."),(0,l.kt)("h2",{id:"deploy-ethereal-engine-helm-chart"},"Deploy Ethereal Engine Helm chart"),(0,l.kt)("p",null,'Before this step, ensure that all the agones and redis pods are in "Running" state. You can check pods status using the below command.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install -f </path/to/local.values.yaml> -f </path/to/db-refresh-true.values.yaml> local etherealengine/etherealengine\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-true.values.yaml"},"db-refresh-true.values.yaml")," can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,l.kt)("p",null,"After a minute or so, running ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," should show one or more instanceservers, one or more api servers, and one client server in the Running state. Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"FORCE_DB_REFRESH=true")," made the api servers (re)initialize the database. Since you don't want that to happen every time a new api pod starts, run ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade --reuse-values -f </path/to/db-refresh-false.values.yaml> local etherealengine/etherealengine"),". The API pods will restart and will now not attempt to reinit the database on boot."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops/blob/master/configs/db-refresh-false.values.yaml"},"db-refresh-false.values.yaml")," can be found in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EtherealEngine/ethereal-engine-ops"},"ethereal-engine-ops")," repo.")),(0,l.kt)("h2",{id:"accept-invalid-certs"},"Accept invalid certs"),(0,l.kt)(o.ZP,{mdxType:"AcceptCertificates"}))}m.isMDXComponent=!0},4401:(e,t,n)=>{n.d(t,{ZP:()=>r});var a=n(7462),l=(n(7294),n(3905));const o={toc:[]},i="wrapper";function r(e){let{components:t,...n}=e;return(0,l.kt)(i,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Since there are no valid certificates for this domain, you'll have to tell your browser to ignore the insecure connections when you try to load the application."),(0,l.kt)("p",null,"Go to ",(0,l.kt)("a",{parentName:"p",href:"https://local.etherealengine.org/"},"https://local.etherealengine.org/"),", you should see a warning about an invalid certificate; accept this invalid cert to get to the home page. Next if it keeps displaying 'loading routes' progress for a long time, it is due to the fact that you have to allow certificates. You'll have to open the dev tools for your browser and go to the 'Console' tab. You will see some errors in URL address starting with 'wss'. Replace 'wss' with 'https' and open it in new tab. Accept the certificate and reload your Ethereal Engine tab. You need to do this for following domains:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wss://api-local.etherealengine.org -> ",(0,l.kt)("a",{parentName:"li",href:"https://api-local.etherealengine.org"},"https://api-local.etherealengine.org")),(0,l.kt)("li",{parentName:"ul"},"wss://instanceserver-local.etherealengine.org -> ",(0,l.kt)("a",{parentName:"li",href:"https://instanceserver-local.etherealengine.org"},"https://instanceserver-local.etherealengine.org")),(0,l.kt)("li",{parentName:"ul"},"https://localhost:9000")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can open Developer tools in Chrome by clicking the side menu with three dots, then More tools > Developer tools (or use Ctrl+Shift+I)")))}r.isMDXComponent=!0},7233:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-desktop-configuration-3bcd2b14180e1728b2d1c25965aab8a5.jpg"},5238:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/docker-desktop-wsl-distro-1e2000b68706625f1f44958b8c6fc623.jpg"},8488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wsl-ubuntu-default-1fc9022e83d8512beab359a72fc0502e.jpg"}}]);