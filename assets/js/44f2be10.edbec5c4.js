"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[9627],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(2784);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=s(r),d=i,m=l["".concat(p,".").concat(d)]||l[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(7896),i=(r(2784),r(30876));const a={description:"Client library for circuit related functions which are used in UniRep protocol."},c="@unirep/circuits",o={unversionedId:"package/circuits",id:"version-1.0.1/package/circuits",title:"@unirep/circuits",description:"Client library for circuit related functions which are used in UniRep protocol.",source:"@site/versioned_docs/version-1.0.1/package/circuits.md",sourceDirName:"package",slug:"/package/circuits",permalink:"/docs/1.0.1/package/circuits",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/package/circuits.md",tags:[],version:"1.0.1",frontMatter:{description:"Client library for circuit related functions which are used in UniRep protocol."},sidebar:"apiSidebar",previous:{title:"@unirep/crypto",permalink:"/docs/1.0.1/package/crypto"},next:{title:"@unirep/contracts",permalink:"/docs/1.0.1/package/contracts"}},p={},s=[{value:"\ud83d\udee0 Install",id:"-install",level:2},{value:"npm or yarn",id:"npm-or-yarn",level:3},{value:"\ud83d\udcd4 Usage",id:"-usage",level:2},{value:"Prover",id:"prover",level:3}],u={toc:s},l="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unirepcircuits"},"@unirep/circuits"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/unirep/unirep"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/5124fc18e7c4eea90190045bc66eddafb19a7b4d93c696e88c65dc530cec9b02/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70726f6a6563742d756e697265702d626c75652e7376673f7374796c653d666c61742d737175617265",alt:null})," "),(0,i.kt)("a",{parentName:"p",href:"https://github.com/unirep/unirep/blob/master/LICENSE"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/9dc25f9a3042124b664e5c386b48a35246c09e7fa0e514bf151c2034b183ec62/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f756e697265702f756e697265702e7376673f7374796c653d666c61742d737175617265",alt:"Github license"})," "),(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@unirep/circuits"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/6a4116015b3d93ff9e23861d2be7960d76c6f9cf5af0920404249a25c39b9ca4/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40756e697265702f63697263756974733f7374796c653d666c61742d737175617265",alt:"NPM version"})," "),(0,i.kt)("a",{parentName:"p",href:"https://npmjs.org/package/@unirep/circuits"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/20f160f10286348d26bfffe691dd6e94d5e44af6028b40eec801230df81740d8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f40756e697265702f63697263756974732e7376673f7374796c653d666c61742d737175617265",alt:"Downloads"})," "),(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/ed5849d453eb089b4ad8f56f316f492ceef5e7aa5404ee4df4d97ff6cb3f375f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e7465722d65736c696e742d3830383066323f7374796c653d666c61742d737175617265266c6f676f3d65736c696e74",alt:"Linter eslint"})," "),(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},(0,i.kt)("img",{parentName:"a",src:"https://camo.githubusercontent.com/81082ed03d1efb3d135c66d183ce379d0d30a0091d09d472f5e96ab4e2ff4375/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d70726574746965722d6638626334353f7374796c653d666c61742d737175617265266c6f676f3d7072657474696572",alt:"Code style prettier"}))),(0,i.kt)("h2",{id:"-install"},"\ud83d\udee0 Install"),(0,i.kt)("h3",{id:"npm-or-yarn"},"npm or yarn"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@unirep/circuits")," package with npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @unirep/circuits\n")),(0,i.kt)("p",null,"or yarn:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @unirep/circuits\n")),(0,i.kt)("h2",{id:"-usage"},"\ud83d\udcd4 Usage"),(0,i.kt)("h3",{id:"prover"},"Prover"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build a prover for unirep protocol")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as snarkjs from 'snarkjs'\nimport { Circuit, Prover } from '@unirep/circuits'\nimport { SnarkProof, SnarkPublicSignals } from '@unirep/crypto'\n\nconst buildPath = 'PATH/TO/CIRCUIT/FOLDER/'\n\nconst prover: Prover = {\n    genProofAndPublicSignals: async (\n        circuitName: string | Circuit,\n        inputs: any\n    ): Promise<any> => {\n        const circuitWasmPath = path.join(buildPath, `${circuitName}.wasm`)\n        const zkeyPath = path.join(buildPath, `${circuitName}.zkey`)\n        const { proof, publicSignals } = await snarkjs.groth16.fullProve(\n            inputs,\n            circuitWasmPath,\n            zkeyPath\n        )\n\n        return { proof, publicSignals }\n    },\n\n    verifyProof: async (\n        circuitName: string | Circuit,\n        publicSignals: SnarkPublicSignals,\n        proof: SnarkProof\n    ): Promise<boolean> => {\n        const vkey = require(path.join(buildPath, `${circuitName}.vkey.json`))\n        return snarkjs.groth16.verify(vkey, publicSignals, proof)\n    },\n\n    getVKey: (name: string | Circuit) => {\n        return require(path.join(buildPath, `${name}.vkey.json`))\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Generate proof and verify it with the above prover")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Circuit } from '@unirep/circuits'\n\n// See ./test/verifyEpochKey.test.ts for generating circuit inputs\nconst circuitInputs = {\n    identity_nullifier: ...,\n    identity_trapdoor: ...,\n    user_tree_root: ...,\n    ...\n}\nconst { proof, publicSignals } = await prover.genProofAndPublicSignals(\n    Circuit.verifyEpochKey,\n    circuitInputs\n)\n\nconst isValid = await prover.verifyProof(\n    Circuit.verifyEpochKey,\n    publicSignals,\n    proof\n)\n")))}f.isMDXComponent=!0}}]);