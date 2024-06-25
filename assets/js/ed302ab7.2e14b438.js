"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[1111],{3649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>j,frontMatter:()=>a,metadata:()=>h,toc:()=>p});var i=s(4848),l=s(8453),o=s(1124),t=s(5326),r=s(8423),c=s(5651);const a={sidebar_label:"Windows WSL2"},d="Installing on Windows with WSL2",h={id:"manual/install/windowsWSL",title:"Installing on Windows with WSL2",description:"This guide has been tested on Windows 10 (22H2) and Windows 11.",source:"@site/docs/manual/01_install/03_windowsWSL.md",sourceDirName:"manual/01_install",slug:"/manual/install/windowsWSL",permalink:"/etherealengine-docs/manual/install/windowsWSL",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/01_install/03_windowsWSL.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Windows WSL2"},sidebar:"manual",previous:{title:"Windows 10+",permalink:"/etherealengine-docs/manual/install/windows"},next:{title:"Control Center",permalink:"/etherealengine-docs/manual/install/controlCenter"}},u={},p=[{value:"Install Windows Subsystem for Linux (WSL).",id:"install-windows-subsystem-for-linux-wsl",level:2},{value:"Install Docker Desktop",id:"install-docker-desktop",level:2},{value:"Install Node",id:"install-node",level:2},...r.RM,...c.RM,{value:"Clone iR Engine repo to your local machine",id:"clone-ir-engine-repo-to-your-local-machine",level:2},...o.RM,{value:"Initialize MariaDB server",id:"initialize-mariadb-server",level:2},{value:"Start the Engine",id:"start-the-engine",level:2},{value:"Accept Certificates",id:"accept-certificates",level:2},...t.RM];function x(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installing-on-windows-with-wsl2",children:"Installing on Windows with WSL2"}),"\n",(0,i.jsx)(n.p,{children:"This guide has been tested on Windows 10 (22H2) and Windows 11."}),"\n",(0,i.jsx)(n.h2,{id:"install-windows-subsystem-for-linux-wsl",children:"Install Windows Subsystem for Linux (WSL)."}),"\n",(0,i.jsxs)(n.p,{children:["Remember to run Powershell in Administrator mode either by right clicking and selecting ",(0,i.jsx)(n.code,{children:"Run as administrator"})," or by typing PowerShell in ",(0,i.jsx)(n.code,{children:"Run"})," dialog box of Windows and pressing ",(0,i.jsx)(n.code,{children:"Ctrl+Shift+Enter"})," key combination."]}),"\n",(0,i.jsx)(n.p,{children:"Install Ubuntu distribution of Linux with one of these options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"wsl --install --distribution Ubuntu"})}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"WSL installation guide"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pureinfotech.com/install-wsl-windows-11/",children:"How to install WSL in Windows 11"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install-manual",children:"Manual installation steps for WSL"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once WSL is installed, make sure to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment#set-up-your-linux-username-and-password",children:"Set up your Linux username and password"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/setup/environment#update-and-upgrade-packages",children:"Update and upgrade packages"})}),"\n",(0,i.jsxs)(n.li,{children:["Verify the Ubuntu distribution with the command: ",(0,i.jsx)(n.code,{children:"lsb_release -a"})]}),"\n",(0,i.jsxs)(n.li,{children:["You can verify your WSL/Ubuntu installation by executing this command in PowerShell: ",(0,i.jsx)(n.code,{children:"wsl -l -v"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-docker-desktop",children:"Install Docker Desktop"}),"\n",(0,i.jsxs)(n.p,{children:["Install docker desktop with the WSL 2 backend.\nYou can find the instructions ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/windows-install/",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to enable your WSL distribution once docker desktop is installed and running.",(0,i.jsx)(n.br,{}),"\n","You can do so from Docker Desktop App by visiting ",(0,i.jsx)(n.code,{children:"Settings > Resources > WSL Integration"}),".\nEnable integration with Ubuntu, and make sure to hit ",(0,i.jsx)(n.code,{children:"Apply & Restart"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Docker Desktop WSL Distro",src:s(7897).A+"",width:"1918",height:"1033"})}),"\n",(0,i.jsx)(n.h2,{id:"install-node",children:"Install Node"}),"\n",(0,i.jsxs)(n.p,{children:["If Node is not already installed on your machine ",(0,i.jsxs)(n.em,{children:["(check with ",(0,i.jsx)(n.code,{children:"node --version"}),")"]}),", you can do so by first installing ",(0,i.jsx)(n.code,{children:"nvm"})," and then installing Node with nvm."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Important"}),":",(0,i.jsx)(n.br,{}),"\n","Make sure that the commands in this section are run inside Ubuntu WSL.",(0,i.jsx)(n.br,{}),"\n","To ensure that this is the case, there are two options:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Launch WSL manually:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run Powershell in Administrator mode and run Ubuntu using the command: ",(0,i.jsx)(n.code,{children:"wsl"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["After logging in to Ubuntu, run the command: ",(0,i.jsx)(n.code,{children:"cd ~/"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Open your application menu and search for ",(0,i.jsx)(n.code,{children:"Ubuntu Terminal"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["To install ",(0,i.jsx)(n.code,{children:"nvm"}),", run the following commands in your WSL Ubuntu terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash\nsource ~/.profile\n\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"                   # This loads nvm\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion" # This loads nvm bash_completion\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Verify that ",(0,i.jsx)(n.code,{children:"nvm"})," was installed correctly by using the command: ",(0,i.jsx)(n.code,{children:"nvm --version"}),".",(0,i.jsx)(n.br,{}),"\n","Afterwards, install Node ",(0,i.jsx)(n.em,{children:"(version between 16.0 and 18.0 both inclusive)"})," with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvm install 18\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify your Node version with the command: ",(0,i.jsx)(n.code,{children:"node --version"}),"."]}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(c.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"clone-ir-engine-repo-to-your-local-machine",children:"Clone iR Engine repo to your local machine"}),"\n",(0,i.jsx)(n.p,{children:"Clone iR Engine repo on your machine by running the following command from your WSL Ubuntu terminal:"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsxs)(n.p,{children:["Change directory to the location where ",(0,i.jsx)(n.code,{children:"etherealengine"})," repository is cloned with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pwd                 # Prints the current working directory\ncd etherealengine   # Change directory to `etherealengine`\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If an ",(0,i.jsx)(n.code,{children:".env.local"})," file does not exist in the root of your iR Engine repository folder, then create it by duplicating the ",(0,i.jsx)(n.code,{children:".env.local.default"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cp .env.local.default .env.local\n"})}),"\n",(0,i.jsx)(n.p,{children:"Afterwards, install npm packages with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: If you find issues related to ",(0,i.jsx)(n.code,{children:"mediasoup"})," when running ",(0,i.jsx)(n.code,{children:"npm install"}),", then:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Remove the ",(0,i.jsx)(n.code,{children:"mediasoup"})," package from ",(0,i.jsx)(n.code,{children:"packages/instanceserver/package.json"})," file of iR Engine's source code."]}),"\n",(0,i.jsxs)(n.li,{children:["Run ",(0,i.jsx)(n.code,{children:"npm install"})," again."]}),"\n",(0,i.jsxs)(n.li,{children:["Run: ",(0,i.jsx)(n.code,{children:"npm install mediasoup@3 -w @etherealengine/instanceserver"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"initialize-mariadb-server",children:"Initialize MariaDB server"}),"\n",(0,i.jsx)(n.p,{children:"You will need to initialize the engine's database with tables and data if you are running the engine for the first time. You can do so with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev-reinit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"start-the-engine",children:"Start the Engine"}),"\n",(0,i.jsx)(n.p,{children:"Run the iR Engine's stack with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If everything went well, you will now be able to open iR Engine in your browser by navigating to ",(0,i.jsx)(n.a,{href:"https://localhost:3000/location/default",children:"this link"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"accept-certificates",children:"Accept Certificates"}),"\n",(0,i.jsx)(t.Ay,{})]})}function j(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},5326:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>o});var i=s(4848),l=s(8453);const o=[];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"When loading the engine's website for the first time you'll have to tell your browser to ignore insecure connections."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"Developer Tools"})," of your browser by clicking the side menu with three dots, then go to ",(0,i.jsx)(n.code,{children:"More tools > Developer tools"})," (or use either ",(0,i.jsx)(n.code,{children:"Ctrl+Shift+I"})," or ",(0,i.jsx)(n.code,{children:"F12"}),") and then go to the ",(0,i.jsx)(n.code,{children:"Console"})," tab."]}),"\n",(0,i.jsxs)(n.li,{children:["You will see some errors in URL addresses starting with ",(0,i.jsx)(n.code,{children:"wss"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace ",(0,i.jsx)(n.code,{children:"wss"})," with ",(0,i.jsx)(n.code,{children:"https"})," and open that URL in a new tab"]}),"\n",(0,i.jsx)(n.li,{children:"Accept the certificate"}),"\n",(0,i.jsx)(n.li,{children:"Reload your iR Engine's tab"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["You will see some errors in URL addresses starting with ",(0,i.jsx)(n.code,{children:"https://localhost:9000"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open the URL linked in one of those errors"}),"\n",(0,i.jsx)(n.li,{children:"Accept the certificate"}),"\n",(0,i.jsx)(n.li,{children:"Reload your iR Engine's tab"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You need to do this for the following domains:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wss://api-local.etherealengine.org"})," -> ",(0,i.jsx)(n.a,{href:"https://api-local.etherealengine.org",children:"https://api-local.etherealengine.org"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"wss://instanceserver-local.etherealengine.org"})," -> ",(0,i.jsx)(n.a,{href:"https://instanceserver-local.etherealengine.org",children:"https://instanceserver-local.etherealengine.org"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://localhost:9000",children:"https://localhost:9000"})}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["If the engine's website keeps displaying ",(0,i.jsx)(n.code,{children:"loading routes"})," progress for a long time, it means that you have to allow the engine's certificates."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Web browsers will throw warnings when navigating to pages with unknown certificates ",(0,i.jsx)(n.em,{children:"(aka: insecure pages)"}),". You should be able to tell the browser to ignore these warnings by opening your browser's ",(0,i.jsx)(n.code,{children:"advanced options"}),", but during development it is easier to just ignore the browser's warnings and accept the default certificates."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: You will be able to create signed certificates to replace the default ones when you deploy your own iR Engine stack."})}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},1124:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>o});var i=s(4848),l=s(8453);const o=[];function t(e){const n={blockquote:"blockquote",br:"br",code:"code",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/etherealengine/etherealengine --depth 1\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Warning"}),":",(0,i.jsx)(n.br,{}),"\n","Adding ",(0,i.jsx)(n.code,{children:"--depth=1"})," will significantly reduce the amount of data downloaded when cloning, but it will also create a ",(0,i.jsx)(n.code,{children:"Shallow Copy"})," of the engine's repository.",(0,i.jsx)(n.br,{}),"\n","If you need to download any branch other than ",(0,i.jsx)(n.code,{children:"dev"}),", or go back in git history into an older commit, you will have to unshallow the repository first, or else any branches and older commits won't be accessible. The command to undo cloning with ",(0,i.jsx)(n.code,{children:"--depth=N"})," is either ",(0,i.jsx)(n.code,{children:"git fetch --unshallow"})," or ",(0,i.jsx)(n.code,{children:"git pull --unshallow"})]}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},5651:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>o});var i=s(4848),l=s(8453);const o=[{value:"Install Make",id:"install-make",level:2}];function t(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"install-make",children:"Install Make"}),"\n",(0,i.jsxs)(n.p,{children:["If Make (",(0,i.jsx)(n.code,{children:"make --version"}),") is not already installed on your device, you can do so by running following commands from your Ubuntu terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update -y\nsudo apt-get install -y build-essential\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify that Make is installed correctly with the command: ",(0,i.jsx)(n.code,{children:"make --version"})]})]})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},8423:(e,n,s)=>{s.d(n,{Ay:()=>r,RM:()=>o});var i=s(4848),l=s(8453);const o=[{value:"Install Python 3",id:"install-python-3",level:2}];function t(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"install-python-3",children:"Install Python 3"}),"\n",(0,i.jsxs)(n.p,{children:["If Python 3 (",(0,i.jsx)(n.code,{children:"pip3 --version"}),") is not already installed on your device, you can do so by running following commands from your Ubuntu terminal:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update -y\nsudo apt-get install -y python3-pip\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can verify that Python3 is installed correctly with the command: ",(0,i.jsx)(n.code,{children:"python3 --version"}),"."]})]})}function r(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},7897:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/docker-desktop-wsl-distro-1e2000b68706625f1f44958b8c6fc623.jpg"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>r});var i=s(6540);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);