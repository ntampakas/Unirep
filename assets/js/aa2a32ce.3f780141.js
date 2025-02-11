"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[626],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(y,i(i({ref:t},s),{},{components:n})):o.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=n(7896),r=(n(2784),n(30876));const a={description:"Definition of epoch key in UniRep"},i="Epoch Key",p={unversionedId:"protocol/glossary/epoch-key",id:"version-1.0.1/protocol/glossary/epoch-key",title:"Epoch Key",description:"Definition of epoch key in UniRep",source:"@site/versioned_docs/version-1.0.1/protocol/glossary/epoch-key.md",sourceDirName:"protocol/glossary",slug:"/protocol/glossary/epoch-key",permalink:"/docs/1.0.1/protocol/glossary/epoch-key",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/protocol/glossary/epoch-key.md",tags:[],version:"1.0.1",frontMatter:{description:"Definition of epoch key in UniRep"},sidebar:"apiSidebar",previous:{title:"8. Reputation proof",permalink:"/docs/1.0.1/getting-started/start-with-typescript/reputation-proof"},next:{title:"Epoch Transition",permalink:"/docs/1.0.1/protocol/glossary/epoch-transition"}},c={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"epoch-key"},"Epoch Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Epoch keys")," are temporary personas which users use them to interact with others."),(0,r.kt)("li",{parentName:"ul"},"Instead of giving attestations to an ",(0,r.kt)("inlineCode",{parentName:"li"},"identityCommitment"),", a random-value-like ",(0,r.kt)("inlineCode",{parentName:"li"},"epochKey")," is the ",(0,r.kt)("strong",{parentName:"li"},"receiver")," of an attestation."),(0,r.kt)("li",{parentName:"ul"},"Epoch key is computed by")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"hash2([\n    identityNullifier + nonce,\n    epoch\n]) % BigInt(2 ** epochTreeDepth)\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It would be better to be expressed as"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"hash3([\n    identityNullifier,\n    nonce,\n    epoch\n]) % BigInt(2 ** epochTreeDepth)\n")),(0,r.kt)("p",{parentName:"admonition"},"But to save circuit constraints, we put ",(0,r.kt)("inlineCode",{parentName:"p"},"identityNullifier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," in one input field.")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," and be any value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"numEpochKeyNoncePerEpoch - 1"),", so that a user can have ",(0,r.kt)("inlineCode",{parentName:"p"},"numEpochKeyNoncePerEpoch")," epoch keys per epoch."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only the user knows his ",(0,r.kt)("inlineCode",{parentName:"li"},"identityNullifier")," so only he knows if he is receiving an attestation, others would see an attestation attesting to a random value."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/circuits/epoch-key-proof"},"epoch key proof")," circuit user can prove that he knows the ",(0,r.kt)("inlineCode",{parentName:"li"},"epochKey")," and can rightfully receive and process the attestations attested to this ",(0,r.kt)("inlineCode",{parentName:"li"},"epochKey"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See also"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/glossary/epoch"},"Epoch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/glossary/epoch-transition"},"Epoch Transition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/glossary/user-state-transition"},"User State Transition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.1/protocol/circuits/epoch-key-proof"},"Epoch Key Proof")))))}m.isMDXComponent=!0}}]);