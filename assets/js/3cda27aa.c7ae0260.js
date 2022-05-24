"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[1608],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},P={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,h=s["".concat(p,".").concat(m)]||s[m]||P[m]||l;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7118:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return P}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={title:"CIPP-API - v1.8.0",date:"03/18/2022 10:56:27",tags:["CIPP-API"],slug:"CIPP-API/v1-8-0"},p=void 0,u={permalink:"/releases/CIPP-API/v1-8-0",source:"@site/releases/CIPP-API/v1-8-0.md",title:"CIPP-API - v1.8.0",description:"What's Changed",date:"2022-03-18T10:56:27.000Z",formattedDate:"18 March 2022",tags:[{label:"CIPP-API",permalink:"/releases/tags/cipp-api"}],truncated:!0,authors:[],frontMatter:{title:"CIPP-API - v1.8.0",date:"03/18/2022 10:56:27",tags:["CIPP-API"],slug:"CIPP-API/v1-8-0"},prevItem:{title:"CIPP - v2.3.0",permalink:"/releases/CIPP/v2-3-0"},nextItem:{title:"CIPP-API - v1.7.1",permalink:"/releases/CIPP-API/v1-7-1"}},c={authorsImageUrls:[]},P=[{value:"What&#39;s Changed",id:"whats-changed",level:2}],s={toc:P};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"whats-changed"},"What's Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fix for incorrect licenses by @KelvinTegelaar in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/121"},"https://github.com/KelvinTegelaar/CIPP-API/pull/121")),(0,l.kt)("li",{parentName:"ul"},"ADDED: Root template for sharepoint lists and fix for sort by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/122"},"https://github.com/KelvinTegelaar/CIPP-API/pull/122")),(0,l.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added display name license to API endpoint for BPA by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/123"},"https://github.com/KelvinTegelaar/CIPP-API/pull/123")),(0,l.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added removal of currently running txt on cache button by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/124"},"https://github.com/KelvinTegelaar/CIPP-API/pull/124")),(0,l.kt)("li",{parentName:"ul"},"FIX: Mailbox archive issue by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/125"},"https://github.com/KelvinTegelaar/CIPP-API/pull/125")),(0,l.kt)("li",{parentName:"ul"},"FEATURE: Token Verification & DNS helper updates by @johnduprey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/126"},"https://github.com/KelvinTegelaar/CIPP-API/pull/126")),(0,l.kt)("li",{parentName:"ul"},"FIX: Enhanced return from API to allow for appropriate date sorting by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/127"},"https://github.com/KelvinTegelaar/CIPP-API/pull/127")),(0,l.kt)("li",{parentName:"ul"},"DNS Helper - Move from Exec to List function by @johnduprey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/128"},"https://github.com/KelvinTegelaar/CIPP-API/pull/128")),(0,l.kt)("li",{parentName:"ul"},"Fix removed values not being pushed on Edit User by @AdamWillford in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/129"},"https://github.com/KelvinTegelaar/CIPP-API/pull/129")),(0,l.kt)("li",{parentName:"ul"},"Dev to release by @KelvinTegelaar in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API/pull/130"},"https://github.com/KelvinTegelaar/CIPP-API/pull/130"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP-API/compare/v1.7.1...v1.8.0"},"https://github.com/KelvinTegelaar/CIPP-API/compare/v1.7.1...v1.8.0")))}m.isMDXComponent=!0}}]);