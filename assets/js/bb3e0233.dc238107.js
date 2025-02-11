"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[8227],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),y=a,f=d["".concat(s,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},36192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7896),a=(r(2784),r(30876));const i={},o="1. deploy",p={unversionedId:"getting-started/start-with-typescript/deploy",id:"version-1.0.1/getting-started/start-with-typescript/deploy",title:"1. deploy",description:"Spin up the testing chain with",source:"@site/versioned_docs/version-1.0.1/getting-started/start-with-typescript/1.-deploy.md",sourceDirName:"getting-started/start-with-typescript",slug:"/getting-started/start-with-typescript/deploy",permalink:"/docs/1.0.1/getting-started/start-with-typescript/deploy",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/getting-started/start-with-typescript/1.-deploy.md",tags:[],version:"1.0.1",sidebarPosition:1,frontMatter:{},sidebar:"apiSidebar",previous:{title:"0. Install packages",permalink:"/docs/1.0.1/getting-started/start-with-typescript/install-packages"},next:{title:"2. User signs up",permalink:"/docs/1.0.1/getting-started/start-with-typescript/user-signs-up"}},s={},c=[],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-deploy"},"1. deploy"),(0,a.kt)("p",null,"Spin up the testing chain with"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat node\n")),(0,a.kt)("p",null,"Use the hardhat testing chain as an example config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const PROVIDER = 'http://127.0.0.1:8545/'\nconst PRIVATE_KEY= '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="deploy.ts"',title:'"deploy.ts"'},"import { ethers } from 'ethers'\nimport { deployUnirep } from '@unirep/contracts/deploy'\n\nasync function main(){\n    const provider = await ethers.getDefaultProvider(PROVIDER)\n    const signer = new ethers.Wallet(\n        PRIVATE_KEY,\n        provider\n    )\n    const contract = await deployUnirep(\n        signer\n    )\n    console.log(\"Unirep address: \", contract.address)\n}\n\nmain();\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See: ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0.1/package/contracts"},"@unirep/contracts"))))}u.isMDXComponent=!0}}]);