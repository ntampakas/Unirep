"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[7796],{30876:(e,t,r)=>{r.d(t,{Zo:()=>T,kt:()=>g});var M=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);t&&(M=M.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,M)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){if(null==e)return{};var r,M,n=function(e,t){if(null==e)return{};var r,M,n={},i=Object.keys(e);for(M=0;M<i.length;M++)r=i[M],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(M=0;M<i.length;M++)r=i[M],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=M.createContext({}),a=function(e){var t=M.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},T=function(e){var t=a(e.components);return M.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return M.createElement(M.Fragment,{},t)}},z=M.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,T=N(e,["components","mdxType","originalType","parentName"]),p=a(r),z=n,g=p["".concat(s,".").concat(z)]||p[z]||c[z]||i;return r?M.createElement(g,o(o({ref:t},T),{},{components:r})):M.createElement(g,o({ref:t},T))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=z;var N={};for(var s in t)hasOwnProperty.call(t,s)&&(N[s]=t[s]);N.originalType=e,N[p]="string"==typeof e?e:n,o[1]=N;for(var a=2;a<i;a++)o[a]=r[a];return M.createElement.apply(null,o)}return M.createElement.apply(null,r)}z.displayName="MDXCreateElement"},39113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>N,toc:()=>a});var M=r(7896),n=(r(2784),r(30876));const i={},o="13. User generates sign up proof",N={unversionedId:"getting-started/start-with-cli-commands/user-generates-sign-up-proof",id:"version-1.0.1/getting-started/start-with-cli-commands/user-generates-sign-up-proof",title:"13. User generates sign up proof",description:"NOTE: -a is attester's id. If the attester gives the attestation with a sign up flag, the user can generate a sign up proof to prove the membership from the attester.",source:"@site/versioned_docs/version-1.0.1/getting-started/start-with-cli-commands/13.-user-generates-sign-up-proof.md",sourceDirName:"getting-started/start-with-cli-commands",slug:"/getting-started/start-with-cli-commands/user-generates-sign-up-proof",permalink:"/docs/1.0.1/getting-started/start-with-cli-commands/user-generates-sign-up-proof",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-1.0.1/getting-started/start-with-cli-commands/13.-user-generates-sign-up-proof.md",tags:[],version:"1.0.1",sidebarPosition:13,frontMatter:{},sidebar:"apiSidebar",previous:{title:"12. Attesters/ Users verify the reputation proof",permalink:"/docs/1.0.1/getting-started/start-with-cli-commands/attesters-users-verify-the-reputation-proof"},next:{title:"14. Attesters/ Users verify the sign up proof",permalink:"/docs/1.0.1/getting-started/start-with-cli-commands/attesters-users-verify-the-sign-up-proof"}},s={},a=[],T={toc:a},p="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,M.Z)({},T,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"13-user-generates-sign-up-proof"},"13. User generates sign up proof"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node cli/index.ts genUserSignUpProof \\\n    -x $UNIREP_CONTRACT_ADDRESS  \\\n    -id $USER_IDENTITY  \\\n    -a $ATTESTER_ID\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"-a")," is attester's id. If the attester gives the attestation with a sign up flag, the user can generate a sign up proof to prove the membership from the attester."),(0,n.kt)("p",{parentName:"admonition"},"See: ",(0,n.kt)("a",{parentName:"p",href:"/docs/1.0.1/cli/airdrop-reputation#genusersignupproof"},"cli/genUserSignUpProof")," for more ",(0,n.kt)("inlineCode",{parentName:"p"},"genUserSignUpProof")," options.")),(0,n.kt)("p",null,"The proof will be printed and it should be handed to the receiver of this proof, for example,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Proof of user sign up from attester 1:\nEpoch key of the user: 3914435768\nUnirep.signUp.proof.WyIyMzA5MzgyMTIxNzA0OTExOTMyODcyMzc4MzU1MjU5OTI1MzI4NDI1MTc1Nzg0OTAyNDYwOTM0ODA0MDczMTAyNTkzODUwMzQ4MDg0IiwiMjA4NjA3NTQ2NDU4NjQxMzk1Mjc2NzMzNjQxNjc4NDM2OTgyNjI1MzIxODEyNjAwNDE3MzMzMTk0NDAxNDcxMDg0MTk1MDM3ODAzMTAiLCI5NzAxODg3NjMyMzQ0ODExMDEwMDU2MDg1Mjc4MzM2NzI5MTQ2NjUyMTc3Mzg2MjE1OTc4MjMwMzUzODcxMzg5NDE1NDkzMzQ5MjQ1IiwiNjMyMDA0NTM4NzYzNzY0MDA0MzQ0MDcwNjQ1NTQwMTU5Njg5ODUxNDk5MDAwMTk5ODk2NDU4NzA0NDM3MjU0MjIzMTEzMTk2MTczNSIsIjk3MzU2MzI2Mzg4MzcyNjQwNTcxODE4MTE4NTA0MDA5MTkyNzYxMzY4MTA1MzE1NzMzMTY3NTIxMzg5NDAyOTE2MTk5MTgxMDgwOTMiLCIxNDMwMDU0MzM1MTM5MzIxNTIyNzAzMTUyMDI2MjQ5MzIyOTA3ODY5NjgwMTI0MzEyODgyNjM3MTQ3MzM1NDUwOTY2MDk3MjI2NjQ1IiwiOTI3MDc5OTMxNTM5NjQ4NTMxOTk2ODg4MDgxNTQxNjQxMTEzNjIyMDM0NTM0MTQwNzU3OTk4NjAwNjc1MTUwMTUyODE1Nzk4Mzg4IiwiNjQwOTc3NDA0MjA4MTA5NTY3MzI4MTcyNTE2MjEzODE4ODc4NjgxMzk0MTAzMTIwMzM3NzA0NjYzNjU1NjE5ODA3MDY1OTUzNzQxMCJd\nUnirep.signUp.publicSignals.WyIzOTE0NDM1NzY4IiwiMTYyNzUyMTU2NzI3MjkwNTc4Mjk2NzI0NjYyMzExNzg2NDM2NzQyODAxODQyNTY5NjczOTE1NDUyMzA2NTM5NTE5NzU2NTQ1MjU4MjYiLCIyIiwiMSIsIjEiXQ\n")),(0,n.kt)("p",null,"Export those values to the environment:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export SIGNUP_PROOF=Unirep.signUp.proof.WyIyMzA5MzgyMTIxNzA0OTExOTMyODcyMzc4MzU1MjU5OTI1MzI4NDI1MTc1Nzg0OTAyNDYwOTM0ODA0MDczMTAyNTkzODUwMzQ4MDg0IiwiMjA4NjA3NTQ2NDU4NjQxMzk1Mjc2NzMzNjQxNjc4NDM2OTgyNjI1MzIxODEyNjAwNDE3MzMzMTk0NDAxNDcxMDg0MTk1MDM3ODAzMTAiLCI5NzAxODg3NjMyMzQ0ODExMDEwMDU2MDg1Mjc4MzM2NzI5MTQ2NjUyMTc3Mzg2MjE1OTc4MjMwMzUzODcxMzg5NDE1NDkzMzQ5MjQ1IiwiNjMyMDA0NTM4NzYzNzY0MDA0MzQ0MDcwNjQ1NTQwMTU5Njg5ODUxNDk5MDAwMTk5ODk2NDU4NzA0NDM3MjU0MjIzMTEzMTk2MTczNSIsIjk3MzU2MzI2Mzg4MzcyNjQwNTcxODE4MTE4NTA0MDA5MTkyNzYxMzY4MTA1MzE1NzMzMTY3NTIxMzg5NDAyOTE2MTk5MTgxMDgwOTMiLCIxNDMwMDU0MzM1MTM5MzIxNTIyNzAzMTUyMDI2MjQ5MzIyOTA3ODY5NjgwMTI0MzEyODgyNjM3MTQ3MzM1NDUwOTY2MDk3MjI2NjQ1IiwiOTI3MDc5OTMxNTM5NjQ4NTMxOTk2ODg4MDgxNTQxNjQxMTEzNjIyMDM0NTM0MTQwNzU3OTk4NjAwNjc1MTUwMTUyODE1Nzk4Mzg4IiwiNjQwOTc3NDA0MjA4MTA5NTY3MzI4MTcyNTE2MjEzODE4ODc4NjgxMzk0MTAzMTIwMzM3NzA0NjYzNjU1NjE5ODA3MDY1OTUzNzQxMCJd && \\\nexport SIGNUP_PUBLIC_SIGNALS=Unirep.signUp.publicSignals.WyIzOTE0NDM1NzY4IiwiMTYyNzUyMTU2NzI3MjkwNTc4Mjk2NzI0NjYyMzExNzg2NDM2NzQyODAxODQyNTY5NjczOTE1NDUyMzA2NTM5NTE5NzU2NTQ1MjU4MjYiLCIyIiwiMSIsIjEiXQ\n")))}c.isMDXComponent=!0}}]);