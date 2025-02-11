"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[5233],{30876:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var n=t(2784);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,h=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82009:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(2784),a=t(6277);const o={tabItem:"tabItem_OMyP"};function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},r)}},77336:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(7896),a=t(2784),o=t(6277),i=t(24126),l=t(7267),c=t(32424),s=t(42244),p=t(24155);function u(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function f(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function d(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,s]=h({queryString:t,groupId:n}),[u,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,p.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=c??u;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var y=t(89741);const v={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function b(e){let{className:r,block:t,selectedValue:l,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),f=e=>{const r=e.currentTarget,t=p.indexOf(r),n=s[t].value;n!==l&&(u(r),c(n))},d=e=>{let r=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;r=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;r=p[t]??p[p.length-1];break}}r?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},s.map((e=>{let{value:r,label:t,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:e=>p.push(e),onKeyDown:d,onClick:f},i,{className:(0,o.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":l===r})}),t??r)})))}function g(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function k(e){const r=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(b,(0,n.Z)({},e,r)),a.createElement(g,(0,n.Z)({},e,r)))}function E(e){const r=(0,y.Z)();return a.createElement(k,(0,n.Z)({key:String(r)},e))}},70899:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=t(7896),a=(t(2784),t(30876)),o=t(77336),i=t(82009);const l={title:"EpochKeyVerifierHelper.sol"},c=void 0,s={unversionedId:"contracts-api/verifiers/epoch-key-verifier-helper",id:"version-2.1.x/contracts-api/verifiers/epoch-key-verifier-helper",title:"EpochKeyVerifierHelper.sol",description:"This smart contract is dedicated to verifying epoch key proofs. See IVerifier for more info.",source:"@site/versioned_docs/version-2.1.x/contracts-api/verifiers/epoch-key-verifier-helper.md",sourceDirName:"contracts-api/verifiers",slug:"/contracts-api/verifiers/epoch-key-verifier-helper",permalink:"/docs/contracts-api/verifiers/epoch-key-verifier-helper",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.1.x/contracts-api/verifiers/epoch-key-verifier-helper.md",tags:[],version:"2.1.x",frontMatter:{title:"EpochKeyVerifierHelper.sol"},sidebar:"apiSidebar",previous:{title:"EpochKeyLiteVerifierHelper.sol",permalink:"/docs/contracts-api/verifiers/epoch-key-lite-verifier-helper"},next:{title:"IVerifier.sol",permalink:"/docs/contracts-api/verifiers/iverifier-sol"}},p={},u=[{value:"decodeEpochKeySignals",id:"decodeepochkeysignals",level:2},{value:"verifyAndCheck",id:"verifyandcheck",level:2},{value:"verifyAndCheckCaller",id:"verifyandcheckcaller",level:2}],f={toc:u},d="wrapper";function h(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This smart contract is dedicated to verifying epoch key proofs. See ",(0,a.kt)("a",{parentName:"p",href:"iverifier-sol"},"IVerifier")," for more info."),(0,a.kt)(o.Z,{defaultValue:"typescript",values:[{label:"Typescript/Javascript",value:"typescript"},{label:"Solidity",value:"solidity"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="epochKeyVerifierHelper.ts"',title:'"epochKeyVerifierHelper.ts"'},"import { deployUnirep, deployVerifierHelper } from '@unirep/contracts/deploy'\nimport { defaultProver } from '@unirep/circuits/provers/defaultProver'\nimport { Circuit, EpochKeyProof } from '@unirep/circuits'\n\n// deploys epoch key verifier helper contract\nconst unirep = await deployUnirep(accounts[0])\nconst epochKeyVerifierHelper = await deployVerifierHelper(\n  unirep.address,\n  accounts[0],\n  Circuit.epochKey\n)\n\nconst r = await defaultProver.genProofAndPublicSignals(\n  Circuit.epochKey,\n  CircuitInputs // see @unirep/circuits to know the whole circuit inputs\n)\n\nconst { publicSignals, proof } = new EpochKeyProof(\n  r.publicSignals,\n  r.proof\n)\n\n// fails or returns proof signals\nconst signals = await epochKeyVerifierHelper.verifyAndCheck(\n  publicSignals,\n  proof\n) \n"))),(0,a.kt)(i.Z,{value:"solidity",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="App.sol"',title:'"App.sol"'},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport { EpochKeyVerifierHelper } from '@unirep/contracts/verifierHelpers/EpochKeyVerifierHelper.sol';\n\ncontract App {\n  // use the deployed helper\n  EpochKeyVerifierHelper public helper;\n  constructor(\n    EpochKeyVerifierHelper _helper\n  ) {\n    helper = _helper;\n  }\n\n  // decode and verify the proofs\n  // fails or returns proof signals\n  function decodeAndVerify(\n    uint256[] calldata publicSignals,\n    uint256[8] calldata proof\n  ) public view returns (EpochKeyVerifierHelper.EpochKeySignals memory) {\n    return helper.verifyAndCheck(publicSignals, proof);\n  }\n}\n\n")))),(0,a.kt)("h2",{id:"decodeepochkeysignals"},"decodeEpochKeySignals"),(0,a.kt)("p",null,"Decode the public signals from an ",(0,a.kt)("a",{parentName:"p",href:"/docs/circuits-api/classes/src.EpochKeyProof"},"epoch key proof")," into named variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function decodeEpochKeySignals(uint256[] memory publicSignals)\n    public\n    pure\n    returns (EpochKeySignals memory)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"struct EpochKeySignals {\n  uint256 epochKey;\n  uint256 stateTreeRoot;\n  uint256 data;\n  uint160 attesterId;\n  uint48 epoch;\n  uint48 chainId;\n  uint8 nonce;\n  bool revealNonce;\n}\n")),(0,a.kt)("h2",{id:"verifyandcheck"},"verifyAndCheck"),(0,a.kt)("p",null,"Verify an ",(0,a.kt)("a",{parentName:"p",href:"/docs/circuits-api/classes/src.EpochKeyProof"},"epoch key proof")," and validate the public signals against the onchain state. This function will revert if any inputs are invalid."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This function ",(0,a.kt)("strong",{parentName:"p"},"does not")," require the epoch for the proof to be the ",(0,a.kt)("strong",{parentName:"p"},"current epoch"),". The user may generate a valid proof for a past epoch. If you require the proof to be for the current epoch you should add an additional check using ",(0,a.kt)("a",{parentName:"p",href:"/docs/contracts-api/unirep-sol#attestercurrentepoch"},(0,a.kt)("inlineCode",{parentName:"a"},"attesterCurrentEpoch")),".")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This function does not verify that the ",(0,a.kt)("inlineCode",{parentName:"p"},"attesterId")," is the same as the caller. Thus, we recommend that to either use ",(0,a.kt)("a",{parentName:"p",href:"#verifyandcheckcaller"},"verifyAndCheckCaller")," or to manually verify the ",(0,a.kt)("inlineCode",{parentName:"p"},"attesterId"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function verifyAndCheck(\n    uint256[] calldata publicSignals,\n    uint256[8] calldata proof\n) public\n  view\n  returns (EpochKeySignals memory) \n")),(0,a.kt)("h2",{id:"verifyandcheckcaller"},"verifyAndCheckCaller"),(0,a.kt)("p",null,"Verify an ",(0,a.kt)("a",{parentName:"p",href:"/docs/circuits-api/classes/src.EpochKeyProof"},"epoch key proof")," and validate the public signals against the onchain state. This function will revert if any inputs are invalid. This is identical to ",(0,a.kt)("inlineCode",{parentName:"p"},"verifyAndCheck")," but also checks that the caller is the attester."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This function ",(0,a.kt)("strong",{parentName:"p"},"does not")," require the epoch for the proof to be the ",(0,a.kt)("strong",{parentName:"p"},"current epoch"),". The user may generate a valid proof for a past epoch. If you require the proof to be for the current epoch you should add an additional check using ",(0,a.kt)("a",{parentName:"p",href:"/docs/contracts-api/unirep-sol#attestercurrentepoch"},(0,a.kt)("inlineCode",{parentName:"a"},"attesterCurrentEpoch")),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},"function verifyAndCheckCaller(\n    uint256[] calldata publicSignals,\n    uint256[8] calldata proof\n) public\n  view\n  returns (EpochKeySignals memory) \n")))}h.isMDXComponent=!0}}]);