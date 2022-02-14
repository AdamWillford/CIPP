"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[4274],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,g=h["".concat(p,".").concat(m)]||h[m]||c[m]||n;return a?l.createElement(g,i(i({ref:t},s),{},{components:a})):l.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1688:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return m}});var l=a(7462),r=a(3366),n=(a(7294),a(3905)),i=["components"],o={title:"CIPP - v1.5.0",date:"12/03/2021 11:15:14",tags:["CIPP"],slug:"CIPP/v1-5-0"},p=void 0,u={permalink:"/releases/CIPP/v1-5-0",source:"@site/releases/CIPP/v1-5-0.md",title:"CIPP - v1.5.0",description:"Codename Absinthe",date:"2021-12-03T11:15:14.000Z",formattedDate:"3 December 2021",tags:[{label:"CIPP",permalink:"/releases/tags/cipp"}],truncated:!0,authors:[],frontMatter:{title:"CIPP - v1.5.0",date:"12/03/2021 11:15:14",tags:["CIPP"],slug:"CIPP/v1-5-0"},prevItem:{title:"CIPP - v1.5.1",permalink:"/releases/CIPP/v1-5-1"},nextItem:{title:"CIPP - v1.4.3",permalink:"/releases/CIPP/v1-4-3"}},s={authorsImageUrls:[]},c=[{value:"What&#39;s Changed",id:"whats-changed",children:[{value:"New Features",id:"new-features",children:[],level:3},{value:"Enhancements",id:"enhancements",children:[],level:3},{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2}],h={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"version-subtitle"},"Codename Absinthe"),(0,n.kt)("p",null,"Hey everyone,"),(0,n.kt)("p",null,"As CIPP grows we're also available on Discord via ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"https://discord.gg/cyberdrain")),(0,n.kt)("p",null,"Thank you all our contributors and CIPP team that worked on this. We are releasing a minor update as we've found some issues worth fixing quickly."),(0,n.kt)("p",null,"We especially like to thank our release sponsors, OITVOIP and NinjaOne for sponsoring us for this release, as their sponsorship is what makes creating this application possible. We've also setup a new website for the documentation, with an easy to remember url; ",(0,n.kt)("a",{parentName:"p",href:"https://cipp.app"},"https://cipp.app"),"."),(0,n.kt)("p",null,"The changelog below contains only the most important fixes, for more information, check out the full changelog. Items without a PR reference have been made by direct commits.(Only @KelvinTegelaar or @gavsto)"),(0,n.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,n.kt)("h3",{id:"new-features"},"New Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: List Defender Status (Alpha) by @KelvinTegelaar  in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/295"},"https://github.com/KelvinTegelaar/CIPP/pull/295")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: List Teams Voice Options by @KelvinTegelaar in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/295"},"https://github.com/KelvinTegelaar/CIPP/pull/295")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: List Teams overview page by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Edit mailbox permissions by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Interface for Edit Tenant Details by @AdamWillford in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/295"},"https://github.com/KelvinTegelaar/CIPP/pull/295")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Alerts (Alpha) by @gavsto in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/297"},"https://github.com/KelvinTegelaar/CIPP/pull/297")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Initial Roles View by @lwhitelock in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/316"},"https://github.com/KelvinTegelaar/CIPP/pull/316")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Alerts List (Alpha) by @gavsto in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/319"},"https://github.com/KelvinTegelaar/CIPP/pull/319")),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Convert Shared to user mailbox by @KelvinTegelaar"),(0,n.kt)("li",{parentName:"ul"},"NEW FEATURE: Allow disabling of self-purchase licensing by @KelvinTegelaar ")),(0,n.kt)("h3",{id:"enhancements"},"Enhancements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added tenant filter in search for Domain Analyser by @gavsto in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/267"},"https://github.com/KelvinTegelaar/CIPP/pull/267")),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Improved display of records by @gavsto in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/269"},"https://github.com/KelvinTegelaar/CIPP/pull/269")),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added search filters to a couple of pages by @gavsto in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/270"},"https://github.com/KelvinTegelaar/CIPP/pull/270")),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Restrict standards html to admin by @homotechsual in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/284"},"https://github.com/KelvinTegelaar/CIPP/pull/284")),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added hamburger menu to mailboxes and teams menu by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added exclusion for AAD sync accounts to Per-User-MFA deployment by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added new method of retrieving data(Durable Function) to BECview and Alert view, for better performance. by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"ENHANCEMENT: Changed filters for user pages to prevent slow load.")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BUGFIX: Slow loading on version check by @KelvinTegelaar "),(0,n.kt)("li",{parentName:"ul"},"SECURITY: Escape Query Parameters by @lwhitelock in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/304"},"https://github.com/KelvinTegelaar/CIPP/pull/304")),(0,n.kt)("li",{parentName:"ul"},"SECURITY: Fix input issues #303 and #302 by @homotechsual in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/305"},"https://github.com/KelvinTegelaar/CIPP/pull/305")),(0,n.kt)("li",{parentName:"ul"},"DOCS: Update README by @homotechsual in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/306"},"https://github.com/KelvinTegelaar/CIPP/pull/306")),(0,n.kt)("li",{parentName:"ul"},"DOCS: Update images from dev. by @homotechsual in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/308"},"https://github.com/KelvinTegelaar/CIPP/pull/308")),(0,n.kt)("li",{parentName:"ul"},"DOCS: Fix the README... which I broke! by @homotechsual in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/309"},"https://github.com/KelvinTegelaar/CIPP/pull/309")),(0,n.kt)("li",{parentName:"ul"},"DOCS: Collapsible Delegated Permissions Table by @DarrenChap in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/312"},"https://github.com/KelvinTegelaar/CIPP/pull/312")),(0,n.kt)("li",{parentName:"ul"},"DOCS: Replacing SAM Token Refresh Script by @DarrenChap in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/320"},"https://github.com/KelvinTegelaar/CIPP/pull/320"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/compare/v1.4.3...v1.5.0"},"https://github.com/KelvinTegelaar/CIPP/compare/v1.4.3...v1.5.0")))}m.isMDXComponent=!0}}]);