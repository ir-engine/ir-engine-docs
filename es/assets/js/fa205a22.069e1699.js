"use strict";(self.webpackChunk_etherealengine_docs=self.webpackChunk_etherealengine_docs||[]).push([[3968],{3533:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=i(4848),l=i(8453);const t={},o="Custom Nodes",r={id:"manual/scene/visualscript/nodes/custom/index",title:"Custom Nodes",description:"Play Video Node",source:"@site/docs/manual/02_scene/02_visualscript/03_nodes/07_custom/index.md",sourceDirName:"manual/02_scene/02_visualscript/03_nodes/07_custom",slug:"/manual/scene/visualscript/nodes/custom/",permalink:"/etherealengine-docs/es/manual/scene/visualscript/nodes/custom/",draft:!1,unlisted:!1,editUrl:"https://github.com/EtherealEngine/etherealengine-docs/blob/master/docs/manual/02_scene/02_visualscript/03_nodes/07_custom/index.md",tags:[],version:"current",frontMatter:{},sidebar:"manual",previous:{title:"Action Nodes",permalink:"/etherealengine-docs/es/manual/scene/visualscript/nodes/actions/"},next:{title:"Usage",permalink:"/etherealengine-docs/es/manual/scene/visualscript/usage"}},d={},c=[{value:"Play Video Node",id:"play-video-node",level:2},{value:"Play Audio Node",id:"play-audio-node",level:2},{value:"Get Avatar Animations Node",id:"get-avatar-animations-node",level:2},{value:"Play Animation Node",id:"play-animation-node",level:2},{value:"Set Animation Action Node",id:"set-animation-action-node",level:2},{value:"Load Asset Node",id:"load-asset-node",level:2},{value:"Camera Fade Node",id:"camera-fade-node",level:2}];function a(e){const n={em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-nodes",children:"Custom Nodes"}),"\n",(0,s.jsx)(n.h2,{id:"play-video-node",children:"Play Video Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Play Video"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Play a video on a specified entity within the scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Entity: ",(0,s.jsx)(n.em,{children:"Select the entity for video playback."})]}),"\n",(0,s.jsxs)(n.li,{children:["Media Path: ",(0,s.jsx)(n.em,{children:"Provide the path to the video."})]}),"\n",(0,s.jsxs)(n.li,{children:["Autoplay: ",(0,s.jsx)(n.em,{children:"Specify whether the video should autoplay (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Volume: ",(0,s.jsx)(n.em,{children:"Set the volume for the video (0 to 1)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Play Mode: ",(0,s.jsx)(n.em,{children:'Choose the play mode for the video (e.g., "normal").'})]}),"\n",(0,s.jsxs)(n.li,{children:["Video Fit: ",(0,s.jsx)(n.em,{children:'Select the fit mode for the video (e.g., "cover").'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Play videos on entities, adjusting playback settings as needed."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"play-audio-node",children:"Play Audio Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Play Audio"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Play audio on a specified entity within the scene."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Entity: ",(0,s.jsx)(n.em,{children:"Select the entity for audio playback."})]}),"\n",(0,s.jsxs)(n.li,{children:["Media Path: ",(0,s.jsx)(n.em,{children:"Provide the path to the audio file."})]}),"\n",(0,s.jsxs)(n.li,{children:["Autoplay: ",(0,s.jsx)(n.em,{children:"Specify whether the audio should autoplay (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Is Music: ",(0,s.jsx)(n.em,{children:"Indicate whether the audio is music (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Volume: ",(0,s.jsx)(n.em,{children:"Set the volume for the audio (0 to 1)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Play Mode: ",(0,s.jsx)(n.em,{children:'Choose the play mode for the audio (e.g., "normal").'})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Play audio on entities, customizing playback options such as volume and autoplay."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"get-avatar-animations-node",children:"Get Avatar Animations Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Query"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Get Avatar Animations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Retrieve available avatar animations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Animation Name: ",(0,s.jsx)(n.em,{children:"Choose an animation from the list."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Animation Name: ",(0,s.jsx)(n.em,{children:"Outputs the selected animation name."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Obtain a list of available avatar animations for further use."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"play-animation-node",children:"Play Animation Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Play Animation"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Play animations on a specified entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Entity: ",(0,s.jsx)(n.em,{children:"Select the entity for animation."})]}),"\n",(0,s.jsxs)(n.li,{children:["Action: ",(0,s.jsx)(n.em,{children:'Choose the action for the animation (e.g., "play", "pause", "stop").'})]}),"\n",(0,s.jsxs)(n.li,{children:["Animation Speed: ",(0,s.jsx)(n.em,{children:"Set the animation speed."})]}),"\n",(0,s.jsxs)(n.li,{children:["Animation Pack: ",(0,s.jsx)(n.em,{children:"Provide the animation pack name."})]}),"\n",(0,s.jsxs)(n.li,{children:["Active Clip Index: ",(0,s.jsx)(n.em,{children:"Specify the active clip index."})]}),"\n",(0,s.jsxs)(n.li,{children:["Is Avatar: ",(0,s.jsx)(n.em,{children:"Indicate whether the animation is for an avatar (true or false)."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Control animations on entities, including actions like play, pause, and stop."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"set-animation-action-node",children:"Set Animation Action Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Set Animation Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Set actions and properties for animations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Entity: ",(0,s.jsx)(n.em,{children:"Select the entity with the animation."})]}),"\n",(0,s.jsxs)(n.li,{children:["Animation Speed: ",(0,s.jsx)(n.em,{children:"Set the animation speed."})]}),"\n",(0,s.jsxs)(n.li,{children:["Blend Mode: ",(0,s.jsx)(n.em,{children:'Choose the animation blend mode (e.g., "normal").'})]}),"\n",(0,s.jsxs)(n.li,{children:["Loop Mode: ",(0,s.jsx)(n.em,{children:'Select the loop mode for the animation (e.g., "once").'})]}),"\n",(0,s.jsxs)(n.li,{children:["Clamp When Finished: ",(0,s.jsx)(n.em,{children:"Specify whether to clamp the animation when finished (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Zero Slope at Start: ",(0,s.jsx)(n.em,{children:"Indicate whether to use zero slope at the start (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Zero Slope at End: ",(0,s.jsx)(n.em,{children:"Indicate whether to use zero slope at the end (true or false)."})]}),"\n",(0,s.jsxs)(n.li,{children:["Weight: ",(0,s.jsx)(n.em,{children:"Set the animation weight."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Configure animation actions and properties for entities."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"load-asset-node",children:"Load Asset Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Load Asset"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Load an asset and add a media component to an entity."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Asset Path: ",(0,s.jsx)(n.em,{children:"Provide the path to the asset."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["Load End: ",(0,s.jsx)(n.em,{children:"Signal that asset loading has completed."})]}),"\n",(0,s.jsxs)(n.li,{children:["Entity: ",(0,s.jsx)(n.em,{children:"Outputs the entity with the loaded asset."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Load assets dynamically and attach them to entities."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"camera-fade-node",children:"Camera Fade Node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node Type:"})," Action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name:"})," Camera Fade"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Description:"})," Fade the camera view to black or back to normal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n",(0,s.jsxs)(n.li,{children:["To Black: ",(0,s.jsx)(n.em,{children:"Specify whether to fade the camera to black (true or false)."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Output Sockets:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Flow: ",(0,s.jsx)(n.em,{children:"Control script flow."})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Usage:"})," Create camera fade effects."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);