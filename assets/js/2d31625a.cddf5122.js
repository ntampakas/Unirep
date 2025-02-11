"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[8312],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7896),o=(r(2784),r(30876));const i={description:"Users should call user state transition to receive reputation"},a="User state transition",s={unversionedId:"cli/user-state-transition",id:"version-1.0.1/cli/user-state-transition",title:"User state transition",description:"Users should call user state transition to receive reputation",source:"@site/versioned_docs/version-1.0.1/cli/user-state-transition.md",sourceDirName:"cli",slug:"/cli/user-state-transition",permalink:"/docs/1.0.1/cli/user-state-transition",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/cli/user-state-transition.md",tags:[],version:"1.0.1",frontMatter:{description:"Users should call user state transition to receive reputation"},sidebar:"apiSidebar",previous:{title:"Epoch transition",permalink:"/docs/1.0.1/cli/epoch-transition"},next:{title:"Reputation Proof",permalink:"/docs/1.0.1/cli/reputation-proof"}},c={},p=[{value:"<code>userStateTransition</code>",id:"userstatetransition",level:2},{value:"Options",id:"options",level:3},{value:'Options inherited from parent commands <a href="#options-inherited-from-parent-commands" id="options-inherited-from-parent-commands"></a>',id:"options-inherited-from-parent-commands-",level:4}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user-state-transition"},"User state transition"),(0,o.kt)("h2",{id:"userstatetransition"},(0,o.kt)("inlineCode",{parentName:"h2"},"userStateTransition")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx ts-node cli/index.ts userStateTransition\n                  [-h] \n                  [-e ETH_PROVIDER] \n                  -id IDENTITY \n                  -x CONTRACT \n                  -d ETH_PRIVKEY\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It will generate ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/circuits/user-state-transition-proof#1-start-transition-proof"},"start transition proof"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/circuits/user-state-transition-proof#2-process-attestations-proof"},"process attestations proof"),"s, and the ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/circuits/user-state-transition-proof#3-user-state-transition-proof"},"user state transition proof"),".")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -e ETH_PROVIDER, --eth-provider ETH_PROVIDER\n                        A connection string to an Ethereum provider. Default: http://localhost:8545\n  -id IDENTITY, --identity IDENTITY\n                        The (serialized) user's identity\n  -x CONTRACT, --contract CONTRACT\n                        The Unirep contract address\n  -d ETH_PRIVKEY, --eth-privkey ETH_PRIVKEY\n                        The user's Ethereum private key\n")),(0,o.kt)("h4",{id:"options-inherited-from-parent-commands-"},"Options inherited from parent commands ",(0,o.kt)("a",{href:"#options-inherited-from-parent-commands",id:"options-inherited-from-parent-commands"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help            Show this help message and exit.\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unirep/Unirep/blob/5ef3fa8ed70761e0d128fe054bcdb6c72be2f7a1/packages/core/cli/userStateTransition.ts"},"core/cli/userStateTransition.ts"))))}d.isMDXComponent=!0}}]);