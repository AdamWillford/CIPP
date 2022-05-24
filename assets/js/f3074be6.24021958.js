"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9333],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(g,i(i({ref:t},s),{},{components:a})):r.createElement(g,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4380:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"CIPP - v2.3.0",date:"03/18/2022 11:03:17",tags:["CIPP"],slug:"CIPP/v2-3-0"},u=void 0,p={permalink:"/releases/CIPP/v2-3-0",source:"@site/releases/CIPP/v2-3-0.md",title:"CIPP - v2.3.0",description:"Mai Tai",date:"2022-03-18T11:03:17.000Z",formattedDate:"18 March 2022",tags:[{label:"CIPP",permalink:"/releases/tags/cipp"}],truncated:!0,authors:[],frontMatter:{title:"CIPP - v2.3.0",date:"03/18/2022 11:03:17",tags:["CIPP"],slug:"CIPP/v2-3-0"},nextItem:{title:"CIPP-API - v1.8.0",permalink:"/releases/CIPP-API/v1-8-0"}},s={authorsImageUrls:[]},c=[{value:"New Features",id:"new-features",level:2},{value:"Reported bug fixes",id:"reported-bug-fixes",level:2},{value:"Other notable changes",id:"other-notable-changes",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"version-subtitle"},"Mai Tai"),(0,l.kt)("p",null,"Hey everyone,"),(0,l.kt)("p",null,"Thank you all our contributors and CIPP team that worked on this release. This release is is feature packed with many of our feature request list getting tackled."),(0,l.kt)("p",null,"Of course we also have many bug fixes in this release big and small, so check out the complete changelog, if you have any bugs, report them :)"),(0,l.kt)("p",null,"We especially like to thank our release sponsors, OITVOIP, NinjaOne, Immybot, and Huntress for sponsoring us for this release, as their sponsorship is what makes creating this application possible."),(0,l.kt)("p",null,"The changelog below contains only the most important fixes, for more information, check out the full changelog. Items without a PR reference have been made by direct commits."),(0,l.kt)("h2",{id:"new-features"},"New Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added Single Tenant / Partner Tenant mode, which allows you to use CIPP without being a Microsoft partner, or for your own tenant by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added ability to edit calendars by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Replaced home page with new dashboard by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added Alerts Wizard to setup alerts, per tenant for specific categories  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added Graph Explorer for easier reporting  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added more option to assigning devices  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added Temporary Access password Standard  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added  Temporary Access Password Generation  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added option to set teams to public/private  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Added standard to set passwordless authentication and location information  by @KelvinTegelaar ")),(0,l.kt)("h2",{id:"reported-bug-fixes"},"Reported bug fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed #829  by @AdamWillford "),(0,l.kt)("li",{parentName:"ul"},"Fixed #828  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #824  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #806  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #799  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #794  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #793  by @KelvinTegelaar "),(0,l.kt)("li",{parentName:"ul"},"Fixed #791 by @gavsto ")),(0,l.kt)("h2",{id:"other-notable-changes"},"Other notable changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ENHANCEMENT: URL Fixed, file count sort, added root template by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/788"},"https://github.com/KelvinTegelaar/CIPP/pull/788")),(0,l.kt)("li",{parentName:"ul"},"ENHANCEMENT: Added display name instead of SKU to BPA by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/790"},"https://github.com/KelvinTegelaar/CIPP/pull/790")),(0,l.kt)("li",{parentName:"ul"},"FEATURE: Token Verification by @johnduprey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/792"},"https://github.com/KelvinTegelaar/CIPP/pull/792")),(0,l.kt)("li",{parentName:"ul"},"ENHANCEMENT: Multiple column fixes by @gavsto in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/803"},"https://github.com/KelvinTegelaar/CIPP/pull/803")),(0,l.kt)("li",{parentName:"ul"},"Improve offboarding wizard UX. Fixes #806. by @homotechsual in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/807"},"https://github.com/KelvinTegelaar/CIPP/pull/807")),(0,l.kt)("li",{parentName:"ul"},"Allow licenses column to be sorted. by @homotechsual in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/808"},"https://github.com/KelvinTegelaar/CIPP/pull/808")),(0,l.kt)("li",{parentName:"ul"},"Change ExecDnsHelper to ListDomainHealth by @johnduprey in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/816"},"https://github.com/KelvinTegelaar/CIPP/pull/816")),(0,l.kt)("li",{parentName:"ul"},"Removed unused vars by @AdamWillford in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/830"},"https://github.com/KelvinTegelaar/CIPP/pull/830")),(0,l.kt)("li",{parentName:"ul"},"Dev to release by @KelvinTegelaar in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP/pull/835"},"https://github.com/KelvinTegelaar/CIPP/pull/835"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/compare/v2.2.0...v.2.3.0"},"https://github.com/KelvinTegelaar/CIPP/compare/v2.2.0...v.2.3.0")))}d.isMDXComponent=!0}}]);