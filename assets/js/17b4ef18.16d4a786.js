"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[241],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7896),o=(n(2784),n(30876));const a={description:"Definition of epoch in UniRep"},i="Epoch",c={unversionedId:"protocol/epoch",id:"version-2.1.x/protocol/epoch",title:"Epoch",description:"Definition of epoch in UniRep",source:"@site/versioned_docs/version-2.1.x/protocol/epoch.md",sourceDirName:"protocol",slug:"/protocol/epoch",permalink:"/docs/protocol/epoch",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.1.x/protocol/epoch.md",tags:[],version:"2.1.x",frontMatter:{description:"Definition of epoch in UniRep"},sidebar:"apiSidebar",previous:{title:"Users and Attesters",permalink:"/docs/protocol/users-and-attesters"},next:{title:"User State Transition",permalink:"/docs/protocol/user-state-transition"}},p={},s=[{value:"Epoch Transition",id:"epoch-transition",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"epoch"},"Epoch"),(0,o.kt)("p",null,"An epoch is a cycle in the UniRep system, each with an updated state tree and epoch tree. Each attester determines their own epoch length, in seconds. User epoch keys can receive attestations during 1 epoch. With each transition, the data balances of all users are finalized and carried over into the next epoch."),(0,o.kt)("h2",{id:"epoch-transition"},"Epoch Transition"),(0,o.kt)("p",null,"Epoch transitions happen automatically whenever an attester calls functions in the UniRep contract. The current epoch is defined by the function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},"(block.timestamp - attester.startTimestamp) / attester.epochLength;\n")),(0,o.kt)("p",null,"This allows epochs to be updated automatically and precisely. When an epoch ends, all epoch keys with owed balances must be committed by updating the epoch tree root."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See also"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/protocol/trees"},"Trees")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/protocol/epoch-key"},"Epoch Key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/protocol/user-state-transition"},"User State Transition")))))}d.isMDXComponent=!0}}]);