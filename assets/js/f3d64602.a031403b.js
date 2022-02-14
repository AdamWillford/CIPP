"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[8659],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||l[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9476:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return h}});var o,a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],s={id:"addchocoapp",title:"Add Chocolatey App",description:"Deploy applications using the Chocolatey package manager.",slug:"/usingcipp/endpointmanagement/addchocoapp"},c=void 0,u={unversionedId:"usingcipp/endpointmanagement/addchocoapp",id:"usingcipp/endpointmanagement/addchocoapp",title:"Add Chocolatey App",description:"Deploy applications using the Chocolatey package manager.",source:"@site/docs/user/usingcipp/endpointmanagement/addchocoapp.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/addchocoapp",permalink:"/docs/user/usingcipp/endpointmanagement/addchocoapp",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/docs/docs/user/usingcipp/endpointmanagement/addchocoapp.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644824294,formattedLastUpdatedAt:"14/02/2022",frontMatter:{id:"addchocoapp",title:"Add Chocolatey App",description:"Deploy applications using the Chocolatey package manager.",slug:"/usingcipp/endpointmanagement/addchocoapp"},sidebar:"userSidebar",previous:{title:"List Application Queue",permalink:"/docs/user/usingcipp/endpointmanagement/applicationqueue"},next:{title:"Autopilot Devices",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotdevices"}},l=[{value:"Details",id:"details",children:[],level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",children:[],level:2}],d=(o="NoKnownIssues",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),m={toc:l};function h(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can add an application deployment utilising ",(0,i.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," by executing this wizard. The wizard guides you through the steps and provides the ability for you to deploy an app to many tenants at the same time."),(0,i.kt)("p",null,"If you have a personal repository you can enter the address for this repository too to deploy packages from your own trusted sources."),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"Adding the Chocolatey App an asynchronous operation, that's to say, it happens in the background. This means that the wizard makes sure everything is setup, and starts the process after you've hit the deploy button. The status of the deployment can is traceable through the logs page."),(0,i.kt)("p",null,"The application uploaded is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP-API/blob/master/AddChocoApp/IntunePackage.intunewin?raw=true"},"this prepared IntuneWin file")," with two scripts included - ",(0,i.kt)("inlineCode",{parentName:"p"},"install.ps1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"uninstall.ps1"),". These scripts install Chocolatey, and then run an install or uninstall command."),(0,i.kt)("p",null,"If you are unsure or don't trust the ",(0,i.kt)("inlineCode",{parentName:"p"},"IntuneWin")," file, you have the option to replace this with your own in your fork."),(0,i.kt)("p",null,"It's strongly recommended that you download, test, and view the contents of this ",(0,i.kt)("inlineCode",{parentName:"p"},"IntuneWin")," file."),(0,i.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,i.kt)(d,{mdxType:"NoKnownIssues"}))}h.isMDXComponent=!0}}]);