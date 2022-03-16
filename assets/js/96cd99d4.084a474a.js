"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[4244],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return l},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"tips",title:"Development Tips",description:"Tips for developing with the CIPP-API function app code.",slug:"/cipp/tips"},p=void 0,c={unversionedId:"CIPP-API/tips",id:"CIPP-API/tips",title:"Development Tips",description:"Tips for developing with the CIPP-API function app code.",source:"@site/docs/dev/CIPP-API/tips.md",sourceDirName:"CIPP-API",slug:"/cipp/tips",permalink:"/docs/dev/cipp/tips",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/dev/CIPP-API/tips.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647381503,formattedLastUpdatedAt:"15/03/2022",frontMatter:{id:"tips",title:"Development Tips",description:"Tips for developing with the CIPP-API function app code.",slug:"/cipp/tips"},sidebar:"devSidebar",previous:{title:"Project Structure",permalink:"/docs/dev/cipp-api/structure"},next:{title:"Contributing",permalink:"/docs/dev/contributing"}},l={},u=[{value:"Reusing Local Settings",id:"reusing-local-settings",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reusing-local-settings"},"Reusing Local Settings"),(0,a.kt)("p",null,"You can reuse your ",(0,a.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file to test direct calls to Microsoft's Graph API, first setup environment variables from the values in your ",(0,a.kt)("inlineCode",{parentName:"p"},"local.settings.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"### Read the local.settings.json file and convert to a PowerShell object.\n$CIPPSettings = Get-Content .\\local.settings.json | ConvertFrom-Json | Select-Object -ExpandProperty Values\n### Loop through the settings and set environment variables for each.\n$ValidKeys = @('TenantId', 'ApplicationId', 'ApplicationSecret', 'RefreshToken', 'ExchangeRefreshToken')\nForEach ($Key in $CIPPSettings.PSObject.Properties.Name) {\n    if ($ValidKeys -Contains $Key) {\n        [Environment]::SetEnvironmentVariable($Key, $CippSettings.$Key)\n    }\n}\n")),(0,a.kt)("p",null,"This creates environment variables which you can access directly in PowerShell or in other scripts using ",(0,a.kt)("inlineCode",{parentName:"p"},"$ENV:<key>"),". For example to use the refresh token you could use: ",(0,a.kt)("inlineCode",{parentName:"p"},"$ENV:RefreshToken"),"."),(0,a.kt)("p",null,"Here's an example using the environment variables in a PowerShell script to call the Microsoft Graph API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"### Setup body for the call to the Microsoft Graph API.\n$AuthBody = @{\n    client_id = $ENV:ApplicationId\n    client_secret = $ENV:ApplicationSecret\n    scope = 'https://graph.microsoft.com/.default'\n    grant_type = 'refresh_token'\n    refresh_token = $ENV:RefreshToken\n}\n### Splat the parameters for the call to the Microsoft Graph API.\n$AuthParams = @{\n    URI = \"https://login.microsoftonline.com/$($ENV:TenantId)/oauth2/v2.0/token\"\n    Body = $AuthBody\n    Method = 'POST'\n    ContentType = 'application/x-www-form-urlencoded'\n    ErrorAction = 'Stop'\n}\n### Make a call to the Microsoft Graph API for an access token.\n$AccessToken = (Invoke-RestMethod @AuthParams).access_token\n\n$GraphHeader = @{\n    Authorization = \"Bearer $AccessToken\"\n}\n\n### Splat the parameters for the call to the Microsoft Graph API.\n$GraphParams = @{\n    URI = 'https://graph.microsoft.com/v1.0/contracts?$top=999'\n    Headers = $GraphHeader\n    Method = 'GET'\n    ErrorAction = 'Stop'\n}\n\n### Get all tenants your token has access to.\n(Invoke-RestMethod @GraphParams).value | ft\n")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Security Implications")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This adds your Graph Tokens as environment variables to your PowerShell session. This represents a security risk and you should use it only for testing / development purposes."),(0,a.kt)("p",{parentName:"div"},"You can clean up the environment variables set in the earlier script by running:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"$EnvironmentVariables = @('TenantId', 'ApplicationId', 'ApplicationSecret', 'RefreshToken', 'ExchangeRefreshToken')\nForEach ($Key in $EnvironmentVariables) {\n    [Environment]::SetEnvironmentVariable($Key, $null)\n}\n")))))}h.isMDXComponent=!0}}]);