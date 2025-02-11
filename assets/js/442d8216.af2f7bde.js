"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[2091],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return r?a.createElement(u,i(i({ref:t},c),{},{components:r})):a.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const o={description:"The tree structures that are used in UniRep protocol."},i="Trees",s={unversionedId:"protocol/trees",id:"protocol/trees",title:"Trees",description:"The tree structures that are used in UniRep protocol.",source:"@site/docs/protocol/trees.md",sourceDirName:"protocol",slug:"/protocol/trees",permalink:"/docs/next/protocol/trees",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/docs/protocol/trees.md",tags:[],version:"current",frontMatter:{description:"The tree structures that are used in UniRep protocol."},sidebar:"apiSidebar",previous:{title:"Data",permalink:"/docs/next/protocol/data"},next:{title:"Nullifiers",permalink:"/docs/next/protocol/nullifiers"}},l={},p=[{value:"<strong>State tree</strong>",id:"state-tree",level:2},{value:"<strong>Epoch tree</strong>",id:"epoch-tree",level:2},{value:"<strong>History tree</strong>",id:"history-tree",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"trees"},"Trees"),(0,n.kt)("p",null,"Each attester has an epoch tree and a state tree that is overwritten each epoch. Attesters also have a history tree that stores all the final state tree/epoch tree root combinations."),(0,n.kt)("h2",{id:"state-tree"},(0,n.kt)("strong",{parentName:"h2"},"State tree")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The state tree stores the updated user state after a user signs up and after a ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/protocol/user-state-transition"},"user state transition")," is performed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This is an ",(0,n.kt)("strong",{parentName:"p"},"incremental merkle tree"),", with its leaves storing users' ",(0,n.kt)("inlineCode",{parentName:"p"},"identitySecret"),"s and starting data, e.g."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a state tree leaf: ",(0,n.kt)("inlineCode",{parentName:"p"},"H(H(identitySecret, attesterId + (epoch << 160) + (chainId << 208)), H(data))"),(0,n.kt)("br",null),"\nThe combined field looks like:"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"chain id"),(0,n.kt)("th",{parentName:"tr",align:"center"},"epoch"),(0,n.kt)("th",{parentName:"tr",align:"center"},"attester id"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"36 bits"),(0,n.kt)("td",{parentName:"tr",align:"center"},"48 bits"),(0,n.kt)("td",{parentName:"tr",align:"center"},"160 bits"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The hashchain of data is computed by: ",(0,n.kt)("inlineCode",{parentName:"p"},"hashchain = H(hashchain, data[i])"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The default state tree leaf is ",(0,n.kt)("inlineCode",{parentName:"p"},"0")))))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," this is an incremental merkle tree so leaves are inserted from left (leaf index 0) to right, one by one, instead of inserted directly into the specified leaf index."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," since state tree leaf is the hash of ",(0,n.kt)("inlineCode",{parentName:"p"},"identitySecret")," and other values, observers are not able to determine which user has inserted leaves into the tree.")),(0,n.kt)("h2",{id:"epoch-tree"},(0,n.kt)("strong",{parentName:"h2"},"Epoch tree")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An epoch tree is used to ",(0,n.kt)("strong",{parentName:"p"},"track the data received by epoch keys"),". Non-repudiability is enforced at the circuit and smart contract level.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This is an ",(0,n.kt)("strong",{parentName:"p"},"incremental merkle tree"),", with its leaves storing the hash of epoch key and data received, e.g.,"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"leaf value: ",(0,n.kt)("inlineCode",{parentName:"li"},"H(epochKey, H(data[0]), H(data[1]), ... H(data[n]))"))))),(0,n.kt)("p",null,"The epoch tree exists onchain and is overwritten each epoch. Only the tree root is stored."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See also: ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/protocol/data"},"Data"))),(0,n.kt)("h2",{id:"history-tree"},(0,n.kt)("strong",{parentName:"h2"},"History tree")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The history tree tracks valid combinations of state tree roots and epoch tree roots. When an epoch ends an entry is added.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This is an ",(0,n.kt)("strong",{parentName:"p"},"incremental merkle tree")," with it's leaves storing the hash of a state tree root and epoch tree root"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"leaf value: ",(0,n.kt)("inlineCode",{parentName:"li"},"H(stateTreeRoot, epochTreeRoot)"))))),(0,n.kt)("p",null,"The history tree exists onchain. Each attester has their own history tree."))}h.isMDXComponent=!0}}]);