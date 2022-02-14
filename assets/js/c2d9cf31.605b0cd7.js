"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[1368],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8621:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP API project.",slug:"/cipp-api/structure"},p=void 0,u={unversionedId:"CIPP-API/structure",id:"CIPP-API/structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP API project.",source:"@site/docs/dev/CIPP-API/structure.md",sourceDirName:"CIPP-API",slug:"/cipp-api/structure",permalink:"/docs/dev/cipp-api/structure",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644824294,formattedLastUpdatedAt:"14/02/2022",frontMatter:{id:"structure",title:"Project Structure",description:"An overview of the various files / folders of note in the CIPP API project.",slug:"/cipp-api/structure"},sidebar:"devSidebar",previous:{title:"CIPP API",permalink:"/docs/dev/cipp-api"},next:{title:"Development Tips",permalink:"/docs/dev/cipp/tips"}},s=[{value:"The Root",id:"the-root",children:[],level:2}],d={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So you've got two repositories now (assuming you followed the ",(0,a.kt)("a",{parentName:"p",href:"../../settingup/"},"setting up")," guide.) this page looks at what's in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CIPP-API")," folder so you know where to look when you start coding."),(0,a.kt)("h2",{id:"the-root"},"The Root"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"CIPP-API")," directory itself there're a number of files and folders, this page highlights the unusual ones but first the general structure of most of the folders is:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"function.json")),(0,a.kt)("td",{parentName:"tr",align:null},"A JSON file containing the function type and binding information.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"run.ps1")),(0,a.kt)("td",{parentName:"tr",align:null},"A PowerShell script file containing the function code itself.")))),(0,a.kt)("p",null,"So what else is here besides functions in terms of important files?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ConversionTable.csv")),(0,a.kt)("td",{parentName:"tr",align:null},"Holds information on Microsoft 365 licensing and product names used in other functions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DNSHelper.psm1")),(0,a.kt)("td",{parentName:"tr",align:null},"A custom PowerShell module providing DNS functions used by the Domain Analysers.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GraphHelper.psm1")),(0,a.kt)("td",{parentName:"tr",align:null},"A custom PowerShell module providing Microsoft Graph helper functions used by most functions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"host.json")),(0,a.kt)("td",{parentName:"tr",align:null},"Host configuration for the PowerShell function app host.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"profile.ps1")),(0,a.kt)("td",{parentName:"tr",align:null},"PowerShell profile to import modules and setup the environment for the PowerShell function.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"requirements.psd1")),(0,a.kt)("td",{parentName:"tr",align:null},"Lists required PowerShell modules and their versions used in the functions app.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"version_latest.txt")),(0,a.kt)("td",{parentName:"tr",align:null},"Our version file. This gets incremented just before ",(0,a.kt)("inlineCode",{parentName:"td"},"dev")," gets merged into ",(0,a.kt)("inlineCode",{parentName:"td"},"main")," for a new release.")))))}c.isMDXComponent=!0}}]);