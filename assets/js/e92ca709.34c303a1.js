"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9969],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting information for issues with CIPP.",slug:"/troubleshooting"},l=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting information for issues with CIPP.",source:"@site/docs/general/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/general/troubleshooting",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/general/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1649419418,formattedLastUpdatedAt:"08/04/2022",frontMatter:{id:"troubleshooting",title:"Troubleshooting",description:"Troubleshooting information for issues with CIPP.",slug:"/troubleshooting"}},p={},u=[{value:"&#39;<em>RepositoryToken is invalid</em>&#39; error during deployment with older forked repo (Pre-2.x)",id:"repositorytoken-is-invalid-error-during-deployment-with-older-forked-repo-pre-2x",level:2},{value:"Token Testing Script",id:"token-testing-script",level:2},{value:"Refresh Secure Application Model Tokens",id:"refresh-secure-application-model-tokens",level:2},{value:"Clear Token Cache",id:"clear-token-cache",level:2},{value:"Service Principal",id:"service-principal",level:2},{value:"Multi-Factor Authentication Troubleshooting",id:"multi-factor-authentication-troubleshooting",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below are some common issues that users have had from initial deployment, updating and general usage."),(0,a.kt)("p",null,"Note that these steps come from the community - if you notice any mistakes, please either edit this page or get in touch via the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Cyberdrain"},"Discord server"),". Please note the ",(0,a.kt)("a",{parentName:"p",href:"/docs/dev/#contributor-code-of-conduct"},"Contributor Code of Conduct"),"."),(0,a.kt)("h2",{id:"repositorytoken-is-invalid-error-during-deployment-with-older-forked-repo-pre-2x"},"'",(0,a.kt)("em",{parentName:"h2"},"RepositoryToken is invalid"),"' error during deployment with older forked repo (Pre-2.x)"),(0,a.kt)("p",null,"If your CIPP repository fork (Not CIPP-API at this time) is from before the release of 2.x then you may run into the issue where the deployment is actually trying to reference the ",(0,a.kt)("strong",{parentName:"p"},"main")," branch instead of ",(0,a.kt)("strong",{parentName:"p"},"master")," that your repository may still be. Be sure to check that your repo is fully up-to-date and then rename the branch to ",(0,a.kt)("strong",{parentName:"p"},"main")," if it's still ",(0,a.kt)("strong",{parentName:"p"},"master"),". You can read about renaming GitHub branches via the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch"},"GitHub Documentation"),"."),(0,a.kt)("h2",{id:"token-testing-script"},"Token Testing Script"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Token Test Script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Test-SecureApplicationModelTokens.ps1"',title:'"Test-SecureApplicationModelTokens.ps1"'},"### User Input Variables ###\n\n### Enter the details of your Secure Access Model Application below ###\n$ApplicationId = '<YOUR APPLICATION ID>'\n$ApplicationSecret = '<YOUR APPLICATION SECRET>'\n$RefreshToken = '<YOUR REFRESH TOKEN>'\n$ExchangeRefreshToken = '<YOUR EXCHANGE REFRESH TOKEN>'\n$MyTenant = '<YOUR TENANT ID>'\n### STOP EDITING HERE ###\n\nfunction Get-GraphToken($TenantId, $Scope, $AsApp, $AppId, $eRefreshToken, $ReturnRefresh) {\n    if (!$scope) { $scope = 'https://graph.microsoft.com/.default' }\n    $AuthBody = @{\n        client_id     = $ApplicationId\n        client_secret = $ApplicationSecret\n        scope         = $Scope\n        refresh_token = $eRefreshToken\n        grant_type    = 'refresh_token'\n    }\n    if ($null -ne $AppId -and $null -ne $eRefreshToken) {\n        $AuthBody = @{\n            client_id     = $AppId\n            refresh_token = $eRefreshToken\n            scope         = $Scope\n            grant_type    = 'refresh_token'\n        }\n    }\n    if (!$TenantId) { $TenantId = $ENV:TenantId }\n    $AccessToken = (Invoke-RestMethod -Method post -Uri \"https://login.microsoftonline.com/$($TenantId)/oauth2/v2.0/token\" -Body $Authbody -ErrorAction Stop)\n    if ($ReturnRefresh) { $Header = $AccessToken } else { $Header = @{ Authorization = \"Bearer $($AccessToken.access_token)\" } }\n\n    return $header\n}\nfunction Connect-graphAPI {\n    [CmdletBinding()]\n    Param\n    (\n        [parameter(Position = 0, Mandatory = $false)]\n        [ValidateNotNullOrEmpty()][String]$ApplicationId,\n\n        [parameter(Position = 1, Mandatory = $false)]\n        [ValidateNotNullOrEmpty()][String]$ApplicationSecret,\n\n        [parameter(Position = 2, Mandatory = $true)]\n        [ValidateNotNullOrEmpty()][String]$TenantId,\n\n        [parameter(Position = 3, Mandatory = $false)]\n        [ValidateNotNullOrEmpty()][String]$RefreshToken\n\n    )\n    Write-Verbose 'Removing old token if it exists'\n    $Script:GraphHeader = $null\n    Write-Verbose 'Logging into Graph API'\n    try {\n        if ($ApplicationId) {\n            Write-Verbose '   using the entered credentials'\n            $script:ApplicationId = $ApplicationId\n            $script:ApplicationSecret = $ApplicationSecret\n            $script:RefreshToken = $RefreshToken\n            $AuthBody = @{\n                client_id     = $ApplicationId\n                client_secret = $ApplicationSecret\n                scope         = 'https://graph.microsoft.com/.default'\n                refresh_token = $RefreshToken\n                grant_type    = 'refresh_token'\n            }\n        } else {\n            Write-Verbose '   using the cached credentials'\n            $AuthBody = @{\n                client_id     = $script:ApplicationId\n                client_secret = $Script:ApplicationSecret\n                scope         = 'https://graph.microsoft.com/.default'\n                refresh_token = $script:RefreshToken\n                grant_type    = 'refresh_token'\n            }\n        }\n        $AccessToken = (Invoke-RestMethod -Method post -Uri \"https://login.microsoftonline.com/$($TenantId)/oauth2/v2.0/token\" -Body $Authbody -ErrorAction Stop).access_token\n        $Script:GraphHeader = @{ Authorization = \"Bearer $($AccessToken)\" }\n    } catch {\n        Write-Host \"Could not log into the Graph API for tenant $($TenantID): $($_.Exception.Message)\" -ForegroundColor Red\n    }\n}\nWrite-Host 'Starting test of the standard Refresh Token' -ForegroundColor Green\ntry {\n    Write-Host 'Attempting to retrieve an Access Token' -ForegroundColor Green\n    Connect-graphAPI -ApplicationId $ApplicationId -ApplicationSecret $ApplicationSecret -RefreshToken $RefreshToken -TenantID $MyTenant\n} catch {\n    $ErrorDetails = if ($_.ErrorDetails.Message) {\n        $ErrorParts = $_.ErrorDetails.Message | ConvertFrom-Json\n        \"[$($ErrorParts.error)] $($ErrorParts.error_description)\"\n    } else {\n        $_.Exception.Message\n    }\n    Write-Host \"Unable to generate access token. The detailed error information, if returned was: $($ErrorDetails)\" -ForegroundColor Red\n}\ntry {\n    Write-Host 'Attempting to retrieve all tenants you have delegated permission to' -ForegroundColor Green\n    $Tenants = (Invoke-RestMethod -Uri \"https://graph.microsoft.com/v1.0/contracts?`$top=999\" -Method GET -Headers $script:GraphHeader).value\n} catch {\n    $ErrorDetails = if ($_.ErrorDetails.Message) {\n        $ErrorParts = $_.ErrorDetails.Message | ConvertFrom-Json\n        \"[$($ErrorParts.error)] $($ErrorParts.error_description)\"\n    } else {\n        $_.Exception.Message\n    }\n    Write-Host \"Unable to retrieve tenants. The detailed error information, if returned was: $($ErrorDetails)\" -ForegroundColor Red\n}\n# Setup some variables for use in the foreach. Pay no attention to the man behind the curtain....\n$TenantCount = $Tenants.Count\n$IncrementAmount = 100 / $TenantCount\n$i = 0\n$ErrorCount = 0\nWrite-Host \"$TenantCount tenants found, attempting to loop through each to test access to each individual tenant\" -ForegroundColor Green\n# Loop through every tenant we have, and attempt to interact with it with Graph\nforeach ($Tenant in $Tenants) {\n    Write-Progress -Activity 'Checking Tenant - Refresh Token' -Status \"Progress -> Checking $($Tenant.defaultDomainName)\" -PercentComplete $i -CurrentOperation TenantLoop\n    If ($i -eq 0) { Write-Host 'Starting Refresh Token Loop Tests' }\n    $i = $i + $IncrementAmount\n    try {\n        Connect-graphAPI -ApplicationId $ApplicationId -ApplicationSecret $ApplicationSecret -RefreshToken $RefreshToken -TenantID $Tenant.customerid\n    } catch {\n        $ErrorDetails = if ($_.ErrorDetails.Message) {\n            $ErrorParts = $_.ErrorDetails.Message | ConvertFrom-Json\n            \"[$($ErrorParts.error)] $($ErrorParts.error_description)\"\n        } else {\n            $_.Exception.Message\n        }\n        Write-Host \"Unable to connect to graph API for $($Tenant.defaultDomainName). The detailed error information, if returned was: $($ErrorDetails)\" -ForegroundColor Red\n        $ErrorCount++\n        continue\n    }\n    try {\n        $Result = (Invoke-RestMethod -Uri 'https://graph.microsoft.com/v1.0/users' -Method GET -Headers $script:GraphHeader).value\n    } catch {\n        $ErrorDetails = if ($_.ErrorDetails.Message) {\n            $ErrorParts = $_.ErrorDetails.Message | ConvertFrom-Json\n            \"[$($ErrorParts.error)] $($ErrorParts.error_description)\"\n        } else {\n            $_.Exception.Message\n        }\n        Write-Host \"Unable to get users from $($Tenant.defaultDomainName) in Refresh Token Test. The detailed error information, if returned was: $($ErrorDetails)\" -ForegroundColor Red\n        $ErrorCount++\n    }\n}\nWrite-Host \"Standard Graph Refresh Token Test: $TenantCount total tenants, with $ErrorCount failures\"\nWrite-Host 'Now attempting to test the Exchange Refresh Token'\n# Setup some variables for use in the foreach. Pay no attention to the man behind the curtain....\n$j = 0\n$ExcErrorCount = 0\nforeach ($Tenant in $Tenants) {\n    Write-Progress -Activity 'Checking Tenant - Exchange Refresh Token' -Status \"Progress -> Checking $($Tenant.defaultDomainName)\" -PercentComplete $j -CurrentOperation TenantLoop\n    If ($j -eq 0) { Write-Host 'Starting Exchange Refresh Token Test' }\n    $j = $j + $IncrementAmount\n\n    try {\n        $UPN = 'notRequired@required.com'\n        $TokenValue = ConvertTo-SecureString (Get-GraphToken -AppID 'a0c73c16-a7e3-4564-9a95-2bdf47383716' -ERefreshToken $ExchangeRefreshToken -Scope 'https://outlook.office365.com/.default' -Tenantid $Tenant.defaultDomainName).Authorization -AsPlainText -Force\n        $Credential = New-Object System.Management.Automation.PSCredential($UPN, $TokenValue)\n        $Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri \"https://ps.outlook.com/powershell-liveid?DelegatedOrg=$($Tenant.defaultDomainName)&BasicAuthToOAuthConversion=true\" -Credential $credential -Authentication Basic -AllowRedirection -ErrorAction Continue\n        $Session = Import-PSSession $Session -ea Silentlycontinue -AllowClobber -CommandName 'Get-OrganizationConfig'\n        $Org = Get-OrganizationConfig\n        $null = Get-PSSession | Remove-PSSession\n    } catch {\n        $ErrorDetails = if ($_.ErrorDetails.Message) {\n            $ErrorParts = $_.ErrorDetails.Message | ConvertFrom-Json\n            \"[$($ErrorParts.error)] $($ErrorParts.error_description)\"\n        } else {\n            $_.Exception.Message\n        }\n        Write-Host \"Tenant: $($Tenant.defaultDomainName)-----------------------------------------------------------------------------------------------------------\" -ForegroundColor Yellow\n        Write-Host \"Failed to Connect to Exchange for $($Tenant.defaultDomainName). The detailed error information, if returned was: $($ErrorDetails)\" -ForegroundColor Red\n        $ExcErrorCount++\n    }\n}\nWrite-Host \"Exchange Refresh Token Test: $TenantCount total tenants, with $ExcErrorCount failures\"\nWrite-Host 'All Tests Finished'\n"))),(0,a.kt)("p",null,"This script comes from Gavin Stone's ",(0,a.kt)("a",{parentName:"p",href:"https://www.gavsto.com/secure-application-model-for-the-layman-and-step-by-step/"},"blog post on setting up the Secure Application Model"),"."),(0,a.kt)("p",null,"This script doesn't test the CIPP configuration, only that the tokens you are pasting into this script are correct."),(0,a.kt)("p",null,"It's possible that you may have pasted the tokens incorrectly into the deployment fields."),(0,a.kt)("h2",{id:"refresh-secure-application-model-tokens"},"Refresh Secure Application Model Tokens"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Refresh Token Script"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"PowerShell Version")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This script requires the PartnerCenter module to generate the Secure Application Model tokens. At the moment it is only compatible with PowerShell 5.1."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell",metastring:'title="Update-SecureApplicationModelTokens.ps1"',title:'"Update-SecureApplicationModelTokens.ps1"'},'### User Input Variables ###\n\n### Enter the details of your Secure Access Model Application below ###\n\n$ApplicationId           = \'<YOUR APPLICATION ID>\'\n$ApplicationSecret       = \'<YOUR APPLICATION SECRET>\'\n$TenantId                = \'<YOUR TENANT ID>\'\n\n### STOP EDITING HERE ###\n\n### Create credential object using UserEntered(ApplicationID) and UserEntered(ApplicationSecret) ###\n\n$Credential = New-Object System.Management.Automation.PSCredential($ApplicationId, ($ApplicationSecret | ConvertTo-SecureString -AsPlainText -Force))\n\n### Splat Params required for Updating Refresh Token ###\n\n$UpdateRefreshTokenParamaters = @{\n    ApplicationID        = $ApplicationId\n    Tenant               = $TenantId\n    Scopes               = \'https://api.partnercenter.microsoft.com/user_impersonation\'\n    Credential           = $Credential\n    UseAuthorizationCode = $true\n    ServicePrincipal     = $true\n}\n\n### Splat Params required for Updating Exchange Refresh Token ###\n\n$UpdateExchangeTokenParamaters = @{\n    ApplicationID           = \'a0c73c16-a7e3-4564-9a95-2bdf47383716\'\n    Scopes                  = \'https://outlook.office365.com/.default\'\n    Tenant                  = $TenantId\n    UseDeviceAuthentication = $true\n}\n\n### Create new Refresh Token using previously splatted paramaters ###\n\n$Token = New-PartnerAccessToken @UpdateRefreshTokenParamaters\n\n### Create new Exchange Refresh Token using previously splatted paramaters ###\n\n$Exchangetoken = New-PartnerAccessToken @UpdateExchangeTokenParamaters\n\n### Output Refresh Tokens and Exchange Refresh Tokens ###\n\nWrite-Host "================ Secrets ================"\nWrite-Host "`$ApplicationId         = $($ApplicationId)"\nWrite-Host "`$ApplicationSecret     = $($ApplicationSecret)"\nWrite-Host "`$TenantID              = $($TenantId)"\nWrite-Host "`$RefreshToken          = $($Token.refreshtoken)" -ForegroundColor Blue\nWrite-Host "`$ExchangeRefreshToken  = $($ExchangeToken.Refreshtoken)" -ForegroundColor Green\nWrite-Host "================ Secrets ================"\nWrite-Host "     SAVE THESE IN A SECURE LOCATION     "\n'))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Settings"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Backend")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Go to Key Vault")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Access Policies")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add Access Policy")),(0,a.kt)("li",{parentName:"ol"},'Add your own user with "Secret Management" permissions.'),(0,a.kt)("li",{parentName:"ol"},"Go back to Secrets."),(0,a.kt)("li",{parentName:"ol"},"Update the tokens as required by creating new versions."),(0,a.kt)("li",{parentName:"ol"},"Clear the ",(0,a.kt)("a",{parentName:"li",href:"#clear-token-cache"},"token cache"),".")),(0,a.kt)("h2",{id:"clear-token-cache"},"Clear Token Cache"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Settings"),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Backend")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Go to Function App Configuration")),(0,a.kt)("li",{parentName:"ol"},"At each item that has the source ",(0,a.kt)("em",{parentName:"li"},"Key Vault")," there should be a green checkbox. If there is no green checkbox, restart the function app and try in 30 minutes"),(0,a.kt)("li",{parentName:"ol"},"For the items ",(0,a.kt)("em",{parentName:"li"},"RefreshToken")," and ",(0,a.kt)("em",{parentName:"li"},"ExchangeRefreshToken")," rename each item, for example to ",(0,a.kt)("em",{parentName:"li"},"RefreshToken2")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Save")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Overview")," in the side menu"),(0,a.kt)("li",{parentName:"ol"},"Stop the app & wait 5 minutes."),(0,a.kt)("li",{parentName:"ol"},"Start the app"),(0,a.kt)("li",{parentName:"ol"},"Go back to ",(0,a.kt)("strong",{parentName:"li"},"Configuration")," in the side menu."),(0,a.kt)("li",{parentName:"ol"},"Reset the token names to their original values, for example back to ",(0,a.kt)("em",{parentName:"li"},"RefreshToken")),(0,a.kt)("li",{parentName:"ol"},"Stop the app once more for 5 minutes then start it again.")),(0,a.kt)("p",null,"The tokens should no longer be in the cache."),(0,a.kt)("h2",{id:"service-principal"},"Service Principal"),(0,a.kt)("p",null,"Sometimes Azure has intermittent issues with applying service principals to AAD."),(0,a.kt)("p",null,"If this is the only error during deployment, follow the below steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"https://portal.azure.com/#blade/Microsoft_Azure_Billing/SubscriptionsBlade"},"Subscription in the Azure Portal")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Access Control (IAM)")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add")),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add Role Assignment")),(0,a.kt)("li",{parentName:"ol"},"Give the Azure function service principal ",(0,a.kt)("em",{parentName:"li"},"reader")," role")),(0,a.kt)("h2",{id:"multi-factor-authentication-troubleshooting"},"Multi-Factor Authentication Troubleshooting"),(0,a.kt)("p",null,"Here are a few things it's important to know about MFA and its effects on the Secure Application Model (SAM) and CIPP:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The account you use to generate your SAM tokens for CIPP must have Microsoft (Azure AD) MFA enabled, it can't use third-party MFA."),(0,a.kt)("li",{parentName:"ol"},"You can't have the ",(0,a.kt)("inlineCode",{parentName:"li"},"Allow users to remember multi-factor authentication on devices they trust")," option enabled in the ",(0,a.kt)("a",{parentName:"li",href:"https://account.activedirectory.windowsazure.com/UserManagement/MfaSettings.aspx"},"classic MFA admin portal"),". In either customer or the partner tenant."),(0,a.kt)("li",{parentName:"ol"},"You can't have trusted locations or other Conditional Access Policy settings applicable to the account you use to generate your SAM tokens for CIPP.")))}d.isMDXComponent=!0}}]);