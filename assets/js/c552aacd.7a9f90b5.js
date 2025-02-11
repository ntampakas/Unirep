"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[6689],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),f=a,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7896),a=(r(2784),r(30876));const o={description:"The subgraph is used to query data from Unirep smart contract."},p="@unirep/subgraph",c={unversionedId:"package/subgraph",id:"version-1.0.1/package/subgraph",title:"@unirep/subgraph",description:"The subgraph is used to query data from Unirep smart contract.",source:"@site/versioned_docs/version-1.0.1/package/subgraph.md",sourceDirName:"package",slug:"/package/subgraph",permalink:"/docs/1.0.1/package/subgraph",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/package/subgraph.md",tags:[],version:"1.0.1",frontMatter:{description:"The subgraph is used to query data from Unirep smart contract."}},i={},s=[{value:"\ud83d\udcfd Compile",id:"-compile",level:2},{value:"\ud83d\uddbc Deploy",id:"-deploy",level:2},{value:"\ud83d\udcbb Demo",id:"-demo",level:2},{value:"\ud83c\udfaf Contributing",id:"-contributing",level:2}],u={toc:s},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unirepsubgraph"},"@unirep/subgraph"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/unirep/unirep"},(0,a.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/5124fc18e7c4eea90190045bc66eddafb19a7b4d93c696e88c65dc530cec9b02/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70726f6a6563742d756e697265702d626c75652e7376673f7374796c653d666c61742d737175617265",alt:null})," "),(0,a.kt)("a",{parentName:"p",href:"https://github.com/unirep/unirep/blob/master/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/9dc25f9a3042124b664e5c386b48a35246c09e7fa0e514bf151c2034b183ec62/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f756e697265702f756e697265702e7376673f7374796c653d666c61742d737175617265",alt:"Github license"})," "),(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},(0,a.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/ed5849d453eb089b4ad8f56f316f492ceef5e7aa5404ee4df4d97ff6cb3f375f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e7465722d65736c696e742d3830383066323f7374796c653d666c61742d737175617265266c6f676f3d65736c696e74",alt:"Linter eslint"})," "),(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},(0,a.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/81082ed03d1efb3d135c66d183ce379d0d30a0091d09d472f5e96ab4e2ff4375/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d70726574746965722d6638626334353f7374796c653d666c61742d737175617265266c6f676f3d7072657474696572",alt:"Code style prettier"}))),(0,a.kt)("h2",{id:"-compile"},"\ud83d\udcfd Compile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn build\n")),(0,a.kt)("h2",{id:"-deploy"},"\ud83d\uddbc Deploy"),(0,a.kt)("p",null,"To deploy, you'll need your auth token from thegraph dashboard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"graph auth --product hosted-service <AUTH_TOKEN_HERE>\n")),(0,a.kt)("p",null,"Then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn deploy\n")),(0,a.kt)("h2",{id:"-demo"},"\ud83d\udcbb Demo"),(0,a.kt)("p",null,"The subgraph is presently deployed ",(0,a.kt)("a",{parentName:"p",href:"https://thegraph.com/hosted-service/subgraph/unirep/unirep"},"here"),"."),(0,a.kt)("p",null,"This query"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"{\n  userEntities(first: 5) {\n    id\n    createdAt\n    identityCommitment\n    attesterId\n  }\n  reputationEntities(first: 5) {\n    id\n    createdAt\n    posRep\n    negRep\n  }\n}\n")),(0,a.kt)("p",null,"will return this as result"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "userEntities": [\n      {\n        "id": "0x15d76961f7f9ed383e132add82257458d590ef55",\n        "createdAt": "1649565733",\n        "identityCommitment": "18926337200484736318947765217640540000000000000000000000000000000000000000000",\n        "attesterId": "1"\n      }\n    ],\n    "reputationEntities": []\n  }\n}\n')),(0,a.kt)("h2",{id:"-contributing"},"\ud83c\udfaf Contributing"),(0,a.kt)("p",null,"Contributions are always welcome!\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unirep/Unirep/blob/main/CONTRIBUTING.md"},"CONTRIBUTING.md")," for ways to get started.\nPlease adhere to this Unirep's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unirep/Unirep/blob/main/CODE_OF_CONDUCT.md"},"code of conduct"),"."))}d.isMDXComponent=!0}}]);