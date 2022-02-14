"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[2517],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5025:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",slug:"/gettingstarted/postinstall"},l=void 0,p={unversionedId:"gettingstarted/postinstall/postinstall",id:"gettingstarted/postinstall/postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",source:"@site/docs/user/gettingstarted/postinstall/index.md",sourceDirName:"gettingstarted/postinstall",slug:"/gettingstarted/postinstall",permalink:"/docs/user/gettingstarted/postinstall",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/docs/docs/user/gettingstarted/postinstall/index.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644824294,formattedLastUpdatedAt:"14/02/2022",frontMatter:{id:"postinstall",title:"Post-Install Configuration",description:"How to configure CIPP after you've completed installation.",slug:"/gettingstarted/postinstall"},sidebar:"userSidebar",previous:{title:"Installation",permalink:"/docs/user/gettingstarted/installation"},next:{title:"Roles",permalink:"/docs/user/gettingstarted/roles"}},d=[{value:"Adding Users",id:"adding-users",children:[],level:2},{value:"It&#39;s Not Working",id:"its-not-working",children:[],level:2},{value:"Adding a Custom Domain Name",id:"adding-a-custom-domain-name",children:[],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"At this point you should have completed all the steps in ",(0,r.kt)("a",{parentName:"p",href:"../installation/"},"manual installation or click-to-deploy installation")," and your deployment has succeeded."),(0,r.kt)("h2",{id:"adding-users"},"Adding Users"),(0,r.kt)("p",null,"After deployment, go to your resource group in Azure and select your Static Web Application (",(0,r.kt)("inlineCode",{parentName:"p"},"cipp-swa-xxxx")," if using click-to-deploy). Select Role Management and invite the users you want. Currently CIPP supports three roles, ",(0,r.kt)("inlineCode",{parentName:"p"},"reader"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"admin"),". Further information on the roles and how to assign these is on the ",(0,r.kt)("a",{parentName:"p",href:"../roles/"},"Roles")," page."),(0,r.kt)("p",null,"You should now be able to browse to the custom domain or the default domain, and use the CIPP control panel."),(0,r.kt)("h2",{id:"its-not-working"},"It's Not Working"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Patience Young Padawan")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For the first 30 minutes or so, the Function App (CIPP-API) runs slow whilst PowerShell modules are downloaded from Microsoft. At present we can't make this run any faster."))),(0,r.kt)("p",null,"If you have waited for at least 30 minutes and things are still not working restart the Function App (",(0,r.kt)("strong",{parentName:"p"},"Azure Portal > CIPP Resource Group > Function App > Overview > Restart"),"). This solves 99.9% of all issues. Turn it off, turn it on again."),(0,r.kt)("p",null,"If you're still stuck, check out the ",(0,r.kt)("a",{parentName:"p",href:"/faq"},"FAQ")," or ",(0,r.kt)("a",{parentName:"p",href:"/troubleshooting"},"Troubleshooting")," pages and if needed - create an issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KelvinTegelaar/CIPP/issues"},"on GitHub")," or seek help ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/cyberdrain"},"on the CIPP Discord")),(0,r.kt)("h2",{id:"adding-a-custom-domain-name"},"Adding a Custom Domain Name"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Why setup a custom domain?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"The automatically generated domain uses azurewebsites.net which is often blocked by web filtering products as it's often used by spammers and phishing sites due to the ease of obtaining an azurewebsites.net subdomain."),(0,r.kt)("li",{parentName:"ol"},"Your bookmark stays the same if you redeploy."),(0,r.kt)("li",{parentName:"ol"},"Easier to communicate internally and looks better for your team.")))),(0,r.kt)("p",null,"At the moment of deployment, the application uses a generated domain name. To change this, go to your Resource Group in Azure, select your Static Web App (",(0,r.kt)("inlineCode",{parentName:"p"},"cipp-swa-xxxx")," if using click-to-deploy) and select Custom Domains. You can add your own domain name here. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/custom-domain?tabs=azure-dns"},"Microsoft Docs - Set up a custom domain with free certificate in Azure Static Web Apps")))}u.isMDXComponent=!0}}]);