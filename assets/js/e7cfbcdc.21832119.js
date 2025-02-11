"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[9153],{30876:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(2784);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(o),f=n,d=h["".concat(l,".").concat(f)]||h[f]||u[f]||a;return o?r.createElement(d,i(i({ref:t},c),{},{components:o})):r.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},96128:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(7896),n=(o(2784),o(30876));const a={description:"Definition of user state transition in UniRep protocol."},i="User State Transition",s={unversionedId:"protocol/user-state-transition",id:"version-2.1.x/protocol/user-state-transition",title:"User State Transition",description:"Definition of user state transition in UniRep protocol.",source:"@site/versioned_docs/version-2.1.x/protocol/user-state-transition.md",sourceDirName:"protocol",slug:"/protocol/user-state-transition",permalink:"/docs/protocol/user-state-transition",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.1.x/protocol/user-state-transition.md",tags:[],version:"2.1.x",frontMatter:{description:"Definition of user state transition in UniRep protocol."},sidebar:"apiSidebar",previous:{title:"Epoch",permalink:"/docs/protocol/epoch"},next:{title:"Epoch Key",permalink:"/docs/protocol/epoch-key"}},l={},p=[{value:"Logical Flow",id:"logical-flow",level:2},{value:"1. Prove the from epoch state leaf",id:"1-prove-the-from-epoch-state-leaf",level:3},{value:"2. Prove the history tree root",id:"2-prove-the-history-tree-root",level:3},{value:"3. Prove epoch keys",id:"3-prove-epoch-keys",level:3},{value:"4. Apply changes",id:"4-apply-changes",level:3},{value:"5. Generate outputs",id:"5-generate-outputs",level:3},{value:"5. Submit the proof (or evaluate offchain)",id:"5-submit-the-proof-or-evaluate-offchain",level:3}],c={toc:p},h="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(h,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-state-transition"},"User State Transition"),(0,n.kt)("p",null,"The user state transition is used to combine the data a user has received in an epoch. This happens in zk to ensure the user processes the data honestly and correctly. The proof then outputs a new state tree leaf for the epoch the user is transitioning to. This leaf contains the latest user data."),(0,n.kt)("h2",{id:"logical-flow"},"Logical Flow"),(0,n.kt)("h3",{id:"1-prove-the-from-epoch-state-leaf"},"1. Prove the from epoch state leaf"),(0,n.kt)("p",null,"The user will prove that they have a state tree leaf in the epoch they are transitioning ",(0,n.kt)("em",{parentName:"p"},"from"),". The user will prove the data in this leaf and use it as the base to apply changes to."),(0,n.kt)("h3",{id:"2-prove-the-history-tree-root"},"2. Prove the history tree root"),(0,n.kt)("p",null,"The user will prove that the epoch tree root and state tree root exist as a leaf in the history tree. This prevents the proof from revealing what epoch the user is transitioning from."),(0,n.kt)("h3",{id:"3-prove-epoch-keys"},"3. Prove epoch keys"),(0,n.kt)("p",null,"The user will then compute their epoch keys for the epoch they are transitioning ",(0,n.kt)("em",{parentName:"p"},"from"),". For each epoch key they will prove membership in the epoch tree."),(0,n.kt)("p",null,"Some epoch keys may not exist in the epoch tree. This is the case for keys that have not received attestations. The data for keys not proven to be in the epoch tree must be 0 (no change)."),(0,n.kt)("h3",{id:"4-apply-changes"},"4. Apply changes"),(0,n.kt)("p",null,"The proof will iterate over each data field for each epoch key. Each field will be combined using either summation or replacement (depending on field index and configuration)."),(0,n.kt)("h3",{id:"5-generate-outputs"},"5. Generate outputs"),(0,n.kt)("p",null,"The proof will take the final data from step 3 and create a new state tree leaf containing this data. The proof will also iterate over all epoch keys and either:"),(0,n.kt)("ol",{type:"a"},(0,n.kt)("li",null,"Output the epoch key"),(0,n.kt)("li",null,"Output a random hash")),(0,n.kt)("p",null,"If the epoch key ",(0,n.kt)("em",{parentName:"p"},"does not")," exist in the epoch tree it will do ",(0,n.kt)("strong",{parentName:"p"},"a"),". Otherwise it will do ",(0,n.kt)("strong",{parentName:"p"},"b"),"."),(0,n.kt)("h3",{id:"5-submit-the-proof-or-evaluate-offchain"},"5. Submit the proof (or evaluate offchain)"),(0,n.kt)("p",null,"To safely evaluate a state transition proof you must check a few things (in addition to verifying the proof):"),(0,n.kt)("ol",{type:"a"},(0,n.kt)("li",null,"Check that the history tree root exists"),(0,n.kt)("li",null,"Check that the output epoch keys did ",(0,n.kt)("i",null,"not")," receive attestations"),(0,n.kt)("li",null,"Check that the first output epoch key has not been seen before")),(0,n.kt)("p",null,"Item ",(0,n.kt)("strong",{parentName:"p"},"c")," only applies to onchain verification to prevent double UST."),(0,n.kt)("p",null,"If all of this is valid the new state tree leaf may be inserted into the state tree (or otherwise used for proofs)."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"See also:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/protocol/trees"},"Trees")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../circuits-api/circuits#user-state-transition-proof"},"User State Transition Proof")))))}u.isMDXComponent=!0}}]);