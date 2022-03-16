"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[4647],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6481:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],p={id:"preparing",title:"Preparing for Local Development",description:"Preparing to develop the CIPP React frontend.",slug:"/preparing"},u=void 0,c={unversionedId:"preparing",id:"preparing",title:"Preparing for Local Development",description:"Preparing to develop the CIPP React frontend.",source:"@site/docs/dev/preparing.mdx",sourceDirName:".",slug:"/preparing",permalink:"/docs/dev/preparing",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/dev/preparing.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647381503,formattedLastUpdatedAt:"15/03/2022",frontMatter:{id:"preparing",title:"Preparing for Local Development",description:"Preparing to develop the CIPP React frontend.",slug:"/preparing"},sidebar:"devSidebar",previous:{title:"Setting Up for Local Development",permalink:"/docs/dev/settingup"},next:{title:"CIPP React UI",permalink:"/docs/dev/cipp"}},d={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"SAM Tokens for Development")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We ",(0,o.kt)("strong",{parentName:"p"},"strongly")," recommend that you setup an entirely separate SAM app and KeyVault for development purposes."))),(0,o.kt)("p",null,"So first you need tokens for a ",(0,o.kt)("a",{parentName:"p",href:"../../user/gettingstarted/prerequisites/"},"Secure Application Model (SAM) application")," and you should have completed ",(0,o.kt)("a",{parentName:"p",href:"/docs/dev/settingup"},"setting up for local development")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recommended Extensions")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you use the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," editor when you open the folder containing the CIPP frontend you'll be presented with the option to install recommended extensions."))),(0,o.kt)("p",null,"For the purposes of this guide remember that our ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP-API")," repositories live alongside each other (siblings) in ",(0,o.kt)("inlineCode",{parentName:"p"},"X:\\Development\\CIPP-Project"),"."),(0,o.kt)("p",null,"You should now have everything you require to start a local development instance of the Azure Function App (API), the Static Web App (frontend) or both."),(0,o.kt)("p",null,"Starting only the frontend:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"swa start 'X:\\Development\\CIPP-Project\\CIPP' --swa-config-location \"C:\\DoesntExist\"\n")),(0,o.kt)("p",null,"We use an invalid path for ",(0,o.kt)("inlineCode",{parentName:"p"},"--swa-config-location")," on purpose. We do this because the config provided in the CIPP folder only works for the actual Static Web Application (SWA) engine and not the local emulator."),(0,o.kt)("p",null,"To start only the API function app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'func start --script-root "X:\\Development\\CIPP-Project\\CIPP-API"\n')),(0,o.kt)("p",null,"To start both, it's recommended to use ",(0,o.kt)("inlineCode",{parentName:"p"},"func start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"swa start")," independently. You can also have the SWA utility start the API but this brings in some added difficulties because you can't see the API logs directly in the console."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'func start --script-root "X:\\Development\\CIPP-Project\\CIPP-API"\nswa start "X:\\Development\\CIPP-Project\\CIPP" --swa-config-location "C:\\DoesntExist" --api-location http://localhost:7071/\n')),(0,o.kt)("p",null,"If you need the APIs to connect to Microsoft 365 and / or to test the Secure Application Model functionality itself you have to make a ",(0,o.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"CIPP-API")," folder. This file isn't detected by git (because of the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file) so it's not pushed with any changes/contributions you make. This file stores the Secure Application Model tokens, and a Azure Storage connection string for the durable function queues."),(0,o.kt)("p",null,"The contents of your ",(0,o.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file differs depending on whether you are using the Azurite storage emulator or Azure Storage itself."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"azurite",label:"Azurite",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "IsEncrypted": false,\n  "Values": {\n    "FUNCTIONS_WORKER_RUNTIME": "powershell",\n    "FUNCTIONS_WORKER_RUNTIME_VERSION": "~7",\n    "AzureWebJobsStorage": "UseDevelopmentStorage=true",\n    "AzureWebJobsSecretStorageType": "files",\n    "applicationid": "<APPLICATION ID>",\n    "applicationsecret": "<APPLICATION SECRET>",\n    "refreshtoken": "<REFRESH TOKEN>",\n    "exchangerefreshtoken": "<EXCHANGE REFRESH TOKEN>",\n    "tenantid":"<TENANT ID>"\n  }\n}\n'))),(0,o.kt)(l.Z,{value:"azurestorage",label:"Azure Storage",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "IsEncrypted": false,\n  "Values": {\n    "FUNCTIONS_WORKER_RUNTIME": "powershell",\n    "FUNCTIONS_WORKER_RUNTIME_VERSION": "~7",\n    "AzureWebJobsStorage": "DefaultEndpointsProtocol=<AZURESTORAGECONNECTIONSTRING>",\n    "applicationid": "<APPLICATION ID>",\n    "applicationsecret": "<APPLICATION SECRET>",\n    "refreshtoken": "<REFRESH TOKEN>",\n    "exchangerefreshtoken": "<EXCHANGE REFRESH TOKEN>",\n    "tenantid":"<TENANT ID>"\n  }\n}\n')))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"We've got you covered!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you open the CIPP project in ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file that you can use to start the API, frontend, Azurite and, the SWA emulator."),(0,o.kt)("p",{parentName:"div"},"You can consult the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging"},"Debugging in Visual Studio Code")," for more information."),(0,o.kt)("p",{parentName:"div"},"The launch task you're looking for is ",(0,o.kt)("inlineCode",{parentName:"p"},"Launch it all \ud83d\ude80"),". Which launches everything required to run CIPP locally. Once started you can navigate to CIPP by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://localhost:4280/"},"localhost:4280"),"."))))}h.isMDXComponent=!0},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),o=n(2389),i=n(5450),l=n(6010),s="tabItem_LplD";function p(e){var t,n,o,p=e.lazy,u=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==N&&!v.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),b=k.tabGroupChoices,y=k.setTabGroupChoices,P=(0,r.useState)(N),C=P[0],I=P[1],E=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=b[m];null!=w&&w!==C&&v.some((function(e){return e.value===w}))&&I(w)}var O=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==C&&(T(t),I(a),null!=m&&y(m,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:A,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);