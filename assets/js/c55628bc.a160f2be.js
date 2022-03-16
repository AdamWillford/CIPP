"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[6153],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1766:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"prerequisites",title:"Prerequisites",description:"How to prepare to install an instance of CIPP for your organisation.",slug:"/gettingstarted/prerequisites"},c=void 0,p={unversionedId:"gettingstarted/prerequisites/prerequisites",id:"gettingstarted/prerequisites/prerequisites",title:"Prerequisites",description:"How to prepare to install an instance of CIPP for your organisation.",source:"@site/docs/user/gettingstarted/prerequisites/index.md",sourceDirName:"gettingstarted/prerequisites",slug:"/gettingstarted/prerequisites",permalink:"/docs/user/gettingstarted/prerequisites",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/gettingstarted/prerequisites/index.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647381503,formattedLastUpdatedAt:"15/03/2022",frontMatter:{id:"prerequisites",title:"Prerequisites",description:"How to prepare to install an instance of CIPP for your organisation.",slug:"/gettingstarted/prerequisites"},sidebar:"userSidebar",previous:{title:"Getting Started",permalink:"/docs/user/gettingstarted"},next:{title:"Permissions",permalink:"/docs/user/gettingstarted/permissions"}},l={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started make sure you have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your Secure Application Model information"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork")," of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP"},"the CIPP GitHub")," repository."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"fork")," of ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KelvinTegelaar/CIPP-API"},"the CIPP API GitHub")," repository."),(0,a.kt)("li",{parentName:"ul"},"An active Azure Subscription."),(0,a.kt)("li",{parentName:"ul"},"A GitHub Personal Access Token. You can find instructions on what you need and the minimum permissions to do this ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-azure-resource-manager?tabs=azure-cli#create-a-github-personal-access-token"},"in Microsoft's Azure Static Web Apps documentation"),'. You only need the "Create a GitHub Personal Access Token" section.')),(0,a.kt)("p",null,"For the installation and maintenance, it's assumed you have some knowledge of GitHub (or Git in general)."),(0,a.kt)("p",null,"If you haven't setup the Secure Application Model (SAM) use the instructions below and then move onto the next page to configure the permissions for your SAM application."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Secure Application Model account")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"It is ",(0,a.kt)("strong",{parentName:"p"},"strongly")," recommended that you use a separate global administrator account for each Secure Application Model application you create. This avoids conflicts that occur when using existing accounts which may be in customer tenants as guest users and provides better tracing in audit logs. "),(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"This service account should be a Global Admin (in your tenant) and given Admin Agent (in partner center)"),"."))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Setting up the Secure Application Model")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Haven't setup the Secure Application model yet? Check out ",(0,a.kt)("a",{parentName:"li",href:"https://www.cyberdrain.com/connect-to-exchange-online-automated-when-mfa-is-enabled-using-the-secureapp-model/"},"this CyberDrain blog post"),"."),(0,a.kt)("li",{parentName:"ul"},"For a step-by-step guide to setting up the Secure Application Model, see ",(0,a.kt)("a",{parentName:"li",href:"https://www.gavsto.com/secure-application-model-for-the-layman-and-step-by-step/"},"this Gavsto blog post"),".")))),(0,a.kt)("p",null,"If you just need the script to setup the Secure Application Model (SAM) it's below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Secure App Model Setup Script"),(0,a.kt)("p",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="New-SAMAzureADApplication.ps1"',title:'"New-SAMAzureADApplication.ps1"'},'Param(\n  [Parameter(Mandatory = $false)]\n  [switch]$ConfigurePreconsent,\n  [Parameter(Mandatory = $true)]\n  [string]$DisplayName,\n  [Parameter(Mandatory = $false)]\n  [string]$TenantId\n)\n\n$ErrorActionPreference = "Stop"\n\n# Check if the Azure AD PowerShell module has already been loaded.\nif ( ! ( Get-Module AzureAD ) ) {\n  # Check if the Azure AD PowerShell module is installed.\n  if ( Get-Module -ListAvailable -Name AzureAD ) {\n    # The Azure AD PowerShell module is not load and it is installed. This module\n    # must be loaded for other operations performed by this script.\n    Write-Host -ForegroundColor Green "Loading the Azure AD PowerShell module..."\n    Import-Module AzureAD\n  } else {\n    Install-Module AzureAD\n  }\n}\n\ntry {\n  Write-Host -ForegroundColor Green "When prompted please enter the appropriate credentials... Warning: Window might have pop-under in VSCode"\n  if([string]::IsNullOrEmpty($TenantId)) {\n    Connect-AzureAD | Out-Null\n    $TenantId = $(Get-AzureADTenantDetail).ObjectId\n  } else {\n    Connect-AzureAD -TenantId $TenantId | Out-Null\n  }\n} catch [Microsoft.Azure.Common.Authentication.AadAuthenticationCanceledException] {\n  # The authentication attempt was canceled by the end-user. Execution of the script should be halted.\n  Write-Host -ForegroundColor Yellow "The authentication attempt was canceled. Execution of the script will be halted..."\n  Exit\n} catch {\n  # An unexpected error has occurred. The end-user should be notified so that the appropriate action can be taken.\n  Write-Error "An unexpected error has occurred. Please review the following error message and try again." `\n  "$($Error[0].Exception)"\n}\n\n$adAppAccess = [Microsoft.Open.AzureAD.Model.RequiredResourceAccess]@{\n  ResourceAppId = "00000002-0000-0000-c000-000000000000";\n  ResourceAccess = [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "5778995a-e1bf-45b8-affa-663a9f3f4d04";\n    Type = "Role"\n  },\n  [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "a42657d6-7f20-40e3-b6f0-cee03008a62a";\n    Type = "Scope"\n  },\n  [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "311a71cc-e848-46a1-bdf8-97ff7156d8e6";\n    Type = "Scope"\n  }\n}\n\n$graphAppAccess = [Microsoft.Open.AzureAD.Model.RequiredResourceAccess]@{\n  ResourceAppId = "00000003-0000-0000-c000-000000000000";\n  ResourceAccess = [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "bf394140-e372-4bf9-a898-299cfc7564e5";\n    Type = "Role"\n  },\n  [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "7ab1d382-f21e-4acd-a863-ba3e13f7da61";\n    Type = "Role"\n  }\n}\n\n$partnerCenterAppAccess = [Microsoft.Open.AzureAD.Model.RequiredResourceAccess]@{\n  ResourceAppId = "fa3d9a0c-3fb0-42cc-9193-47c7ecd2edbd";\n  ResourceAccess = [Microsoft.Open.AzureAD.Model.ResourceAccess]@{\n    Id = "1cebfa2a-fb4d-419e-b5f9-839b4383e05a";\n    Type = "Scope"\n  }\n}\n\n$SessionInfo = Get-AzureADCurrentSessionInfo\n\nWrite-Host -ForegroundColor Green "Creating the Azure AD application and related resources..."\n\n$app = New-AzureADApplication -AvailableToOtherTenants $true -DisplayName $DisplayName -IdentifierUris "https://$($SessionInfo.TenantDomain)/$((New-Guid).ToString())" -RequiredResourceAccess $adAppAccess, $graphAppAccess, $partnerCenterAppAccess -ReplyUrls @("urn:ietf:wg:oauth:2.0:oob","https://login.microsoftonline.com/organizations/oauth2/nativeclient","https://localhost","http://localhost","http://localhost:8400")\n$password = New-AzureADApplicationPasswordCredential -ObjectId $app.ObjectId\n$spn = New-AzureADServicePrincipal -AppId $app.AppId -DisplayName $DisplayName\n$adminAgentsGroup = Get-AzureADGroup -Filter "DisplayName eq \'AdminAgents\'"\nAdd-AzureADGroupMember -ObjectId $adminAgentsGroup.ObjectId -RefObjectId $spn.ObjectId\n\nwrite-host "Installing PartnerCenter Module." -ForegroundColor Green\ninstall-module PartnerCenter -Force\nwrite-host "Sleeping for 30 seconds to allow app creation on O365" -foregroundcolor green\nstart-sleep 30\nwrite-host "Please approve General consent form." -ForegroundColor Green\n$PasswordToSecureString = $password.value | ConvertTo-SecureString -asPlainText -Force\n$credential = New-Object System.Management.Automation.PSCredential($($app.AppId),$PasswordToSecureString)\n$token = New-PartnerAccessToken -ApplicationId "$($app.AppId)" -Scopes \'https://api.partnercenter.microsoft.com/user_impersonation\' -ServicePrincipal -Credential $credential -Tenant $($spn.AppOwnerTenantID) -UseAuthorizationCode\nwrite-host "Please approve Exchange consent form." -ForegroundColor Green\n$Exchangetoken = New-PartnerAccessToken -ApplicationId \'a0c73c16-a7e3-4564-9a95-2bdf47383716\' -Scopes \'https://outlook.office365.com/.default\' -Tenant $($spn.AppOwnerTenantID) -UseDeviceAuthentication\nwrite-host "Last initiation required: Please browse to https://login.microsoftonline.com/$($spn.AppOwnerTenantID)/adminConsent?client_id=$($app.AppId)"\nwrite-host "Press any key after auth. An error report about incorrect URIs is expected!"\n[void][System.Console]::ReadKey($true)\nWrite-Host "================ Secrets ================"\nWrite-Host "`$ApplicationId         = $($app.AppId)"\nWrite-Host "`$ApplicationSecret     = $($password.Value)"\nWrite-Host "`$TenantID              = $($spn.AppOwnerTenantID)"\nwrite-host "`$RefreshToken          = $($token.refreshtoken)" -ForegroundColor Blue\nwrite-host "`$Exchange RefreshToken = $($ExchangeToken.Refreshtoken)" -ForegroundColor Green\nWrite-Host "================ Secrets ================"\nWrite-Host "    SAVE THESE IN A SECURE LOCATION     "\n')))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Consent, Risk and Conditional Access")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Setting up SAM tokens for the first time, presents three consent steps. Make sure you consent to all three."),(0,a.kt)("p",{parentName:"div"},"You should make sure that the user account you're using to generate your SAM tokens isn't listed as a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-investigate-risk"},"risky user"),"."),(0,a.kt)("p",{parentName:"div"},"The account you use for your SAM tokens mustn't have an exemption/exclusion from MFA checks resulting from Conditional Access policies."))),(0,a.kt)("p",null,"Now that you have SAM setup, move onto configuring permissions using the Next button below."))}m.isMDXComponent=!0}}]);