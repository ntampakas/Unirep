"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[3192],{30876:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var l=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,k=c["".concat(i,".").concat(f)]||c[f]||p[f]||n;return r?l.createElement(k,s(s({ref:t},d),{},{components:r})):l.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<n;u++)s[u]=r[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82009:(e,t,r)=>{r.d(t,{Z:()=>s});var l=r(2784),a=r(6277);const n={tabItem:"tabItem_OMyP"};function s(e){let{children:t,hidden:r,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:r},t)}},77336:(e,t,r)=>{r.d(t,{Z:()=>F});var l=r(7896),a=r(2784),n=r(6277),s=r(24126),o=r(7267),i=r(32424),u=r(42244),d=r(24155);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:l,default:a}}=e;return{value:t,label:r,attributes:l,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:r}=e;const l=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(n),(0,a.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(l.location.search);t.set(n,e),l.replace({...l.location,search:t.toString()})}),[n,l])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:l}=e,n=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:n}))),[i,u]=k({queryString:r,groupId:l}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,n]=(0,d.Nk)(r);return[l,(0,a.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:l}),h=(()=>{const e=i??c;return f({value:e,tabValues:n})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,n]),tabValues:n}}var h=r(89741);const m={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function A(e){let{className:t,block:r,selectedValue:o,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=d.indexOf(t),l=u[r].value;l!==o&&(c(t),i(l))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:p},s,{className:(0,n.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":o===t})}),r??t)})))}function E(e){let{lazy:t,children:r,selectedValue:l}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function B(e){const t=b(e);return a.createElement("div",{className:(0,n.Z)("tabs-container",m.tabList)},a.createElement(A,(0,l.Z)({},e,t)),a.createElement(E,(0,l.Z)({},e,t)))}function F(e){const t=(0,h.Z)();return a.createElement(B,(0,l.Z)({key:String(t)},e))}},16210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,circuitsVersion:()=>f,contentTitle:()=>i,contractsVersion:()=>p,coreVersion:()=>c,default:()=>A,frontMatter:()=>o,metadata:()=>u,toc:()=>b,utilsVersion:()=>k});var l=r(7896),a=(r(2784),r(30876)),n=r(77336),s=r(82009);const o={title:"Testnet Addresses"},i=void 0,u={unversionedId:"testnet-deployment",id:"version-2.1.x/testnet-deployment",title:"Testnet Addresses",description:"Deployment",source:"@site/versioned_docs/version-2.1.x/testnet-deployment.mdx",sourceDirName:".",slug:"/testnet-deployment",permalink:"/docs/testnet-deployment",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.1.x/testnet-deployment.mdx",tags:[],version:"2.1.x",frontMatter:{title:"Testnet Addresses"},sidebar:"apiSidebar",previous:{title:"Getting Started with ts/js",permalink:"/docs/getting-started/ts-js"},next:{title:"Users and Attesters",permalink:"/docs/protocol/users-and-attesters"}},d={},c=r(42391).i8,p=r(79745).i8,f=r(23214).i8,k=r(19413).i8,b=[{value:"Deployment",id:"deployment",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Demo Attester",id:"demo-attester",level:2},{value:"Keys",id:"keys",level:2}],h={coreVersion:c,toc:b},m="wrapper";function A(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,l.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"The UniRep team maintains up to date deployments of the contracts matching our releases."),(0,a.kt)("p",null,"Latest package versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:`https://www.npmjs.com/package/@unirep/core/v/${c}`},"@unirep/core@",c)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:`https://www.npmjs.com/package/@unirep/contracts/v/${p}`},"@unirep/contracts@",p)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:`https://www.npmjs.com/package/@unirep/circuits/v/${f}`},"@unirep/circuits@",f)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:`https://www.npmjs.com/package/@unirep/utils/v/${k}`},"@unirep/utils@",k))),(0,a.kt)("p",null,"Our contracts are deployed on the the following testnets."),(0,a.kt)(n.Z,{defaultValue:"sepolia",values:[{label:"Sepolia",value:"sepolia"},{label:"Arbitrum Sepolia",value:"arb-sepolia"},{label:"Avalanche Fuji",value:"ava-fuji"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"sepolia",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unirep.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"},"0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"},"0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"},"0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"},"0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"},"0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"},"0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x5764503318880b702FaAd653951a506F0F8cF47B"},"0x5764503318880b702FaAd653951a506F0F8cF47B"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SignupVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"},"0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UserStateTransitionVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0xe5AEB664E19c07E861B68A046957501cd6e56a68"},"0xe5AEB664E19c07E861B68A046957501cd6e56a68"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ScopeNullifierVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"},"0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IncrementalBinaryTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"},"0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReusableMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x4636dc8202Db826b84023B1351aE05c1904C6BF8"},"0x4636dc8202Db826b84023B1351aE05c1904C6BF8"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LazyMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.etherscan.io/address/0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA"},"0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA")))))),(0,a.kt)(s.Z,{value:"opt-goerli",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unirep.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"},"0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"},"0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"},"0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"},"0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"},"0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"},"0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x5764503318880b702FaAd653951a506F0F8cF47B"},"0x5764503318880b702FaAd653951a506F0F8cF47B"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SignupVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"},"0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UserStateTransitionVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0xe5AEB664E19c07E861B68A046957501cd6e56a68"},"0xe5AEB664E19c07E861B68A046957501cd6e56a68"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ScopeNullifierVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"},"0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IncrementalBinaryTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"},"0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReusableMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x4636dc8202Db826b84023B1351aE05c1904C6BF8"},"0x4636dc8202Db826b84023B1351aE05c1904C6BF8"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LazyMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://goerli-optimism.etherscan.io/address/0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA"},"0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA")))))),(0,a.kt)(s.Z,{value:"arb-sepolia",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unirep.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"},"0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"},"0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"},"0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"},"0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"},"0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"},"0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x5764503318880b702FaAd653951a506F0F8cF47B"},"0x5764503318880b702FaAd653951a506F0F8cF47B"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SignupVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"},"0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UserStateTransitionVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0xe5AEB664E19c07E861B68A046957501cd6e56a68"},"0xe5AEB664E19c07E861B68A046957501cd6e56a68"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ScopeNullifierVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"},"0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IncrementalBinaryTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"},"0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReusableMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x4636dc8202Db826b84023B1351aE05c1904C6BF8"},"0x4636dc8202Db826b84023B1351aE05c1904C6BF8"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LazyMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://sepolia.arbiscan.io/address/0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA"},"0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA")))))),(0,a.kt)(s.Z,{value:"ava-fuji",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Address"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Unirep.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"},"0x83cB6AF63eAfEc7998cC601eC3f56d064892b386"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"},"0x46EE928e44E18f424E400CbA6a6807BDEEcb7676"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"},"0xaEdfbb0C5a57620DbF645f6Cc8F2dE5832564855"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"},"0x346742319D70A2299f7c4A55C3b1D8B4d7C77eC5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EpochKeyLiteVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"},"0x5B33D83A972fa2b1336b945FF8F1Cab8DfD17532"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"},"0x9B393de71752f004A120e3E5c1ddA1681f31ae8f"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReputationVerifierHelper.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x5764503318880b702FaAd653951a506F0F8cF47B"},"0x5764503318880b702FaAd653951a506F0F8cF47B"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SignupVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"},"0x2404789B9B4Beab901AbaA5e9eBA47A5eD89747A"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UserStateTransitionVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0xe5AEB664E19c07E861B68A046957501cd6e56a68"},"0xe5AEB664E19c07E861B68A046957501cd6e56a68"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ScopeNullifierVerifier.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"},"0x2E5F94fc629294B0f36385A1F69FAE494Ce04731"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"IncrementalBinaryTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"},"0x6471a2f0a5A9ed97F34Ac9768d77a4E5fD906bDb"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ReusableMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x4636dc8202Db826b84023B1351aE05c1904C6BF8"},"0x4636dc8202Db826b84023B1351aE05c1904C6BF8"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LazyMerkleTree.sol"),(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://testnet.snowtrace.io/address/0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA"},"0x89C249Bf3baB12fdb93F47b0474a53F10465b4bA"))))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Epoch tree depth: 17\nState tree depth: 17\nHistory tree depth: 17\nNumber of epoch keys per epoch: 3\nTotal fields per user: 6\nSum fields per user: 4\nReplacement field nonce bits: 48\nReplacement field data bits: 205\n")),(0,a.kt)("h2",{id:"demo-attester"},"Demo Attester"),(0,a.kt)("p",null,"You can interact with a ",(0,a.kt)("a",{parentName:"p",href:"https://demo.unirep.io"},"demo attester")," to get a feel for the flow of data in the system."),(0,a.kt)("h2",{id:"keys"},"Keys"),(0,a.kt)("p",null,"Proving keys for this contract can be accessed at the following url:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://keys.unirep.io/2.0.0/"},"https://keys.unirep.io/2.0.0/"))),(0,a.kt)("p",null,"This URL is used in the ",(0,a.kt)("a",{parentName:"p",href:"circuits-api/classes/provers_web.WebProver"},"web prover"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These keys have had a secure phase 2 trusted setup. ",(0,a.kt)("br",null),"\nCheck out the trusted setup ceremony: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://ceremony.unirep.io/"},"THE CELESTIAL CALL")))),(0,a.kt)("p",null,"Read more about trusted setups:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2022/03/14/trustedsetup.html"},"https://vitalik.ca/general/2022/03/14/trustedsetup.html")))}A.isMDXComponent=!0},23214:e=>{e.exports={i8:"2.1.5"}},79745:e=>{e.exports={i8:"2.1.5"}},42391:e=>{e.exports={i8:"2.1.5"}},19413:e=>{e.exports={i8:"2.1.5"}}}]);