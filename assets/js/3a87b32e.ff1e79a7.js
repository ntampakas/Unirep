"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[8605],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const o={description:"Definition of data in UniRep"},i="Data",l={unversionedId:"protocol/data",id:"protocol/data",title:"Data",description:"Definition of data in UniRep",source:"@site/docs/protocol/data.md",sourceDirName:"protocol",slug:"/protocol/data",permalink:"/docs/next/protocol/data",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/docs/protocol/data.md",tags:[],version:"current",frontMatter:{description:"Definition of data in UniRep"},sidebar:"apiSidebar",previous:{title:"Epoch Key",permalink:"/docs/next/protocol/epoch-key"},next:{title:"Trees",permalink:"/docs/next/protocol/trees"}},p={},d=[{value:"Addition field",id:"addition-field",level:2},{value:"Replacement field",id:"replacement-field",level:2}],c={toc:d},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data"},"Data"),(0,a.kt)("p",null,"Attesters define the data system for their application on top of the UniRep protocol. There are ",(0,a.kt)("inlineCode",{parentName:"p"},"FIELD_COUNT")," data fields. It composes of two kinds of operations: addition field and replacement field."),(0,a.kt)("h2",{id:"addition-field"},"Addition field"),(0,a.kt)("p",null,"The elements in addition field are combined with addition and modulo by ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/utils-api/modules#snark_scalar_field"},(0,a.kt)("inlineCode",{parentName:"a"},"SNARK_SCALAR_FIELD")),". E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"data[0] = (old_data[0] + new_data[0]) % SNARK_SCALAR_FIELD"),". There are ",(0,a.kt)("inlineCode",{parentName:"p"},"SUM_FIELD_COUNT")," addition fields."),(0,a.kt)("h2",{id:"replacement-field"},"Replacement field"),(0,a.kt)("p",null,"The elements in replacement field are combined by replacement. Each replacement field contains 2 parts:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"data"),(0,a.kt)("th",{parentName:"tr",align:"center"},"index"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"205 bits"),(0,a.kt)("td",{parentName:"tr",align:"center"},"48 bits")))),(0,a.kt)("p",null,"The maximum value that can be stored in a replacement field is ",(0,a.kt)("inlineCode",{parentName:"p"},"2**205-1"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," value is used by the protocol to order the attestations. Because the index is stored as the higher order bits data field attestation can be sorted without bit operations."),(0,a.kt)("p",null,"There are ",(0,a.kt)("inlineCode",{parentName:"p"},"FIELD_COUNT - SUM_FIELD_COUNT")," replacement fields."))}f.isMDXComponent=!0}}]);