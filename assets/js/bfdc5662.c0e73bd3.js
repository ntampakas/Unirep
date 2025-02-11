"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[3627],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={title:"IUnirep.sol"},s=void 0,o={unversionedId:"contracts-api/iunirep-sol",id:"version-2.1.x/contracts-api/iunirep-sol",title:"IUnirep.sol",description:"Events",source:"@site/versioned_docs/version-2.1.x/contracts-api/iunirep-sol.md",sourceDirName:"contracts-api",slug:"/contracts-api/iunirep-sol",permalink:"/docs/contracts-api/iunirep-sol",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.1.x/contracts-api/iunirep-sol.md",tags:[],version:"2.1.x",frontMatter:{title:"IUnirep.sol"},sidebar:"apiSidebar",previous:{title:"Error codes",permalink:"/docs/contracts-api/errors"},next:{title:"Unirep.sol",permalink:"/docs/contracts-api/unirep-sol"}},l={},p=[{value:"Events",id:"events",level:2},{value:"AttesterSignedUp",id:"attestersignedup",level:3},{value:"UserSignUp",id:"usersignup",level:3},{value:"UserStateTransitioned",id:"userstatetransitioned",level:3},{value:"Attestation",id:"attestation",level:3},{value:"StateTreeLeaf",id:"statetreeleaf",level:3},{value:"EpochTreeLeaf",id:"epochtreeleaf",level:3},{value:"HistoryTreeLeaf",id:"historytreeleaf",level:3},{value:"EpochEnded",id:"epochended",level:3},{value:"Structs",id:"structs",level:2},{value:"SignupSignals",id:"signupsignals",level:3},{value:"UserStateTransitionSignals",id:"userstatetransitionsignals",level:3},{value:"EpochKeyData",id:"epochkeydata",level:3},{value:"AttesterData",id:"attesterdata",level:3},{value:"Config",id:"config",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"The UniRep contract emits a number of events to help offchain observers track state."),(0,r.kt)("h3",{id:"attestersignedup"},"AttesterSignedUp"),(0,r.kt)("p",null,"Emitted when an attester registers with the UniRep contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event AttesterSignedUp(\n    uint160 indexed attesterId,\n    uint48 epochLength,\n    uint48 timestamp\n);\n")),(0,r.kt)("h3",{id:"usersignup"},"UserSignUp"),(0,r.kt)("p",null,"Emitted when a user joins an attester."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event UserSignedUp(\n    uint48 indexed epoch,\n    uint256 indexed identityCommitment,\n    uint160 indexed attesterId,\n    uint256 leafIndex\n);\n")),(0,r.kt)("h3",{id:"userstatetransitioned"},"UserStateTransitioned"),(0,r.kt)("p",null,"Emitted when a user transitions to a new epoch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event UserStateTransitioned(\n    uint48 indexed epoch,\n    uint160 indexed attesterId,\n    uint256 indexed leafIndex,\n    uint256 hashedLeaf,\n    uint256 nullifier\n);\n")),(0,r.kt)("h3",{id:"attestation"},"Attestation"),(0,r.kt)("p",null,"Emitted when an attester makes an attestation to an epoch key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event Attestation(\n    uint48 indexed epoch,\n    uint256 indexed epochKey,\n    uint160 indexed attesterId,\n    uint256 fieldIndex,\n    uint256 change\n);\n")),(0,r.kt)("h3",{id:"statetreeleaf"},"StateTreeLeaf"),(0,r.kt)("p",null,"Emitted when a leaf is added to a state tree."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event StateTreeLeaf(\n    uint48 indexed epoch,\n    uint160 indexed attesterId,\n    uint256 indexed index,\n    uint256 leaf\n);\n")),(0,r.kt)("h3",{id:"epochtreeleaf"},"EpochTreeLeaf"),(0,r.kt)("p",null,"Emitted when a leaf in an epoch tree is updated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event EpochTreeLeaf(\n    uint48 indexed epoch,\n    uint160 indexed attesterId,\n    uint256 indexed index,\n    uint256 leaf\n);\n")),(0,r.kt)("h3",{id:"historytreeleaf"},"HistoryTreeLeaf"),(0,r.kt)("p",null,"Emitted when a leaf is added to the history tree."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event HistoryTreeLeaf(\n    uint160 indexed attesterId,\n    uint256 leaf\n);\n")),(0,r.kt)("h3",{id:"epochended"},"EpochEnded"),(0,r.kt)("p",null,"Emitted when an attester epoch ends."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"event EpochEnded(uint48 indexed epoch, uint160 indexed attesterId);\n")),(0,r.kt)("h2",{id:"structs"},"Structs"),(0,r.kt)("h3",{id:"signupsignals"},"SignupSignals"),(0,r.kt)("p",null,"Public signals of a user signup proof."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"struct SignupSignals {\n    uint256 stateTreeLeaf;\n    uint48 epoch;\n    uint48 chainId;\n    uint160 attesterId;\n    uint256 identityCommitment;\n}\n")),(0,r.kt)("h3",{id:"userstatetransitionsignals"},"UserStateTransitionSignals"),(0,r.kt)("p",null,"Public signals of a user state transition proof."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"struct UserStateTransitionSignals {\n    uint256 historyTreeRoot;\n    uint256 stateTreeLeaf;\n    uint48 toEpoch;\n    uint160 attesterId;\n    uint256[] epochKeys;\n}\n")),(0,r.kt)("h3",{id:"epochkeydata"},"EpochKeyData"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EpochKeyData")," saves the current status of an epoch key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"struct EpochKeyData {\n    uint256 leaf;\n    uint40 leafIndex;\n    uint48 epoch;\n    uint256[128] data;\n}\n")),(0,r.kt)("h3",{id:"attesterdata"},"AttesterData"),(0,r.kt)("p",null,"The current status of an attester."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"struct AttesterData {\n    mapping(uint256 => mapping(uint256 => bool)) stateTreeRoots;\n    ReusableTreeData stateTree;\n    mapping(uint256 => bool) historyTreeRoots;\n    IncrementalTreeData historyTree;\n    mapping(uint256 => uint256) epochTreeRoots;\n    LazyTreeData epochTree;\n    uint48 startTimestamp;\n    uint48 currentEpoch;\n    uint48 epochLength;\n    mapping(uint256 => bool) identityCommitments;\n    IncrementalTreeData semaphoreGroup;\n    mapping(uint256 => EpochKeyData) epkData;\n}\n")),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("p",null,"The circuit config."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"struct Config {\n    uint8 stateTreeDepth;\n    uint8 epochTreeDepth;\n    uint8 historyTreeDepth;\n    uint8 fieldCount;\n    uint8 sumFieldCount;\n    uint8 numEpochKeyNoncePerEpoch;\n    uint8 replNonceBits;\n    uint8 replFieldBits;\n}\n")))}d.isMDXComponent=!0}}]);