"use strict";(self.webpackChunk_unirep_docs=self.webpackChunk_unirep_docs||[]).push([[1433],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},66825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7896),r=(a(2784),a(30876));const i={title:"Getting Started with create-unirep-app"},o="\ud83d\ude80 Getting Started with create-unirep-app",p={unversionedId:"getting-started/create-unirep-app",id:"version-2.0.0-beta-4/getting-started/create-unirep-app",title:"Getting Started with create-unirep-app",description:"The create-unirep-app package provides a convenient and efficient way to build applications that leverage the power of UniRep. Developers can use the following guide to explore the example attester, and then customize the attester to suit their unique application.",source:"@site/versioned_docs/version-2.0.0-beta-4/getting-started/create-unirep-app.mdx",sourceDirName:"getting-started",slug:"/getting-started/create-unirep-app",permalink:"/docs/2.0.0-beta-4/getting-started/create-unirep-app",draft:!1,editUrl:"https://github.com/Unirep/Unirep/tree/main/packages/docs/versioned_docs/version-2.0.0-beta-4/getting-started/create-unirep-app.mdx",tags:[],version:"2.0.0-beta-4",frontMatter:{title:"Getting Started with create-unirep-app"},sidebar:"apiSidebar",previous:{title:"what can i build with unirep",permalink:"/docs/2.0.0-beta-4/what-can-i-build"},next:{title:"Getting Started with ts/js",permalink:"/docs/2.0.0-beta-4/getting-started/ts-js"}},l={},s=[{value:"\ud83d\udcbb Run the application locally",id:"-run-the-application-locally",level:2},{value:"Installation",id:"installation",level:3},{value:"Build the files",id:"build-the-files",level:3},{value:"Start a blockchain environment with Hardhat",id:"start-a-blockchain-environment-with-hardhat",level:3},{value:"Deploy smart contracts",id:"deploy-smart-contracts",level:3},{value:"Start the relayer (backend)",id:"start-the-relayer-backend",level:3},{value:"Start the frontend server",id:"start-the-frontend-server",level:3},{value:"\ud83d\udd79\ufe0f Interacting with the example attester",id:"\ufe0f-interacting-with-the-example-attester",level:2},{value:"User Sign Up",id:"user-sign-up",level:3},{value:"Information",id:"information",level:3},{value:"Request Data",id:"request-data",level:3},{value:"User State Transtion",id:"user-state-transtion",level:3},{value:"Prove Data",id:"prove-data",level:3},{value:"\ud83d\udca1 Build your own application",id:"-build-your-own-application",level:2},{value:"Define epoch length",id:"define-epoch-length",level:3},{value:"Customize attestation policy",id:"customize-attestation-policy",level:3},{value:"Verify epoch key",id:"verify-epoch-key",level:3}],c={toc:s},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-getting-started-with-create-unirep-app"},"\ud83d\ude80 Getting Started with ",(0,r.kt)("inlineCode",{parentName:"h1"},"create-unirep-app")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/create-unirep-app"},"create-unirep-app")," package provides a convenient and efficient way to build applications that leverage the power of UniRep. Developers can use the following guide to explore the example attester, and then customize the attester to suit their unique application."),(0,r.kt)("h2",{id:"-run-the-application-locally"},"\ud83d\udcbb Run the application locally"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-unirep-app\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OR")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/unirep/create-unirep-app"},"Unirep/create-unirep-app")," repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/unirep/create-unirep-app &&\ncd create-unirep-app &&\nyarn\n")),(0,r.kt)("h3",{id:"build-the-files"},"Build the files"),(0,r.kt)("p",null,"Navigate to the new directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn build\n")),(0,r.kt)("h3",{id:"start-a-blockchain-environment-with-hardhat"},"Start a blockchain environment with Hardhat"),(0,r.kt)("p",null,"Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn contracts hardhat node\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/getting-started#quick-start"},"hardhat tutorial"))),(0,r.kt)("h3",{id:"deploy-smart-contracts"},"Deploy smart contracts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol")," smart contract is an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/2.0.0-beta-4/protocol/users-and-attesters#attesters-%F0%9F%A4%96"},"attester"))," and interacts directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"Unirep.sol"),". Both smart contracts will be deployed in the Hardhat environment.",(0,r.kt)("br",null)," In a new terminal window, from root, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn contracts deploy\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If ",(0,r.kt)("inlineCode",{parentName:"p"},"Unirep.sol")," has been deployed in the testnet, specify the address of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Unirep.sol")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp")," constructor:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(\n   Unirep _unirep,\n   ...\n)\n"))),(0,r.kt)("p",null,"The contract configurations will be written to ",(0,r.kt)("inlineCode",{parentName:"p"},"create-unirep-app/config.ts")),(0,r.kt)("h3",{id:"start-the-relayer-backend"},"Start the relayer (backend)"),(0,r.kt)("p",null,"The example attester hosts a relayer to handle requests from the frontend and post transactions to the blockchain. It also provides proving keys for the frontend prover.",(0,r.kt)("br",null),"To start the relayer, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn relay start\n")),(0,r.kt)("p",null,"Proceed when ",(0,r.kt)("inlineCode",{parentName:"p"},"Listening on port 8000")," is displayed in the terminal."),(0,r.kt)("h3",{id:"start-the-frontend-server"},"Start the frontend server"),(0,r.kt)("p",null,"The frontend is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/2.0.0-beta-4/protocol/users-and-attesters#users-%F0%9F%91%A4"},"users'"))," interface to interact with the attester (",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol"),").",(0,r.kt)("br",null),"In a new terminal window, from root, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn frontend start\n")),(0,r.kt)("p",null,"The frontend will be running at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:3000/")," by default."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h2",{parentName:"admonition",id:"\ufe0f-create-unirep-app-architecture"},"\ud83c\udfd7\ufe0f ",(0,r.kt)("inlineCode",{parentName:"h2"},"create-unirep-app")," Architecture"),(0,r.kt)("p",{parentName:"admonition"},"It is important to note that the architecture of this application is different from that of traditional dApps, which require users to obtain ETH, use a browser wallet, understand gas fees, etc. This presents a steep learning curve for new users and a poor UX."),(0,r.kt)("p",{parentName:"admonition"},"With ",(0,r.kt)("inlineCode",{parentName:"p"},"create-unirep-app"),", the architecture is Web App <-> Relay <-> Blockchain. This reduces the cognitive load for a user new to blockchain appplications by abstracting that learning curve into the relay:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{alt:"Architecture",src:a(69721).Z,width:"457",height:"160"})),(0,r.kt)("p",{parentName:"admonition"},"While use of the relayer is optional for a Unirep application, developers should be aware that if users send transactions directly to ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol"),", their privacy could be compromised.")),(0,r.kt)("h2",{id:"\ufe0f-interacting-with-the-example-attester"},"\ud83d\udd79\ufe0f Interacting with the example attester"),(0,r.kt)("h3",{id:"user-sign-up"},"User Sign Up"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Join",src:a(69444).Z,width:"1621",height:"705"})),(0,r.kt)("p",null,"Clicking the ",(0,r.kt)("strong",{parentName:"p"},"Join")," button prompts the client to generate a ",(0,r.kt)("a",{parentName:"p",href:"https://semaphore.appliedzkp.org/"},"Semaphore Identity")," and a ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/circuits-api/circuits#signup-proof"},"signup proof"),"."),(0,r.kt)("p",null,"The relayer will submit the signup proof to ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol")," and the client will store the Semaphore identity secret in the browser. When the transaction completes successfully, the user has been added to the attester's membership and can access the application with the ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dashboard",src:a(48426).Z,width:"1643",height:"768"})),(0,r.kt)("h3",{id:"information"},"Information"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Epoch")," ",(0,r.kt)("br",null),"\nDisplays the attester's ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/epoch"},"epoch")," details and the current user's last transitioned epoch."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Latest Data"),(0,r.kt)("br",null),"\nDisplays the user's total ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/data"},"data"),", including data changed in the current epoch that can not yet be proven.",(0,r.kt)("br",null),"\nThis is updated upon each data change request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Provable Data"),(0,r.kt)("br",null),"\nDisplays only provable data that the user can currently prove ownership of. Any change made to the user's data since their last ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/user-state-transition"},"user state transition")," is not included here. This is updated ",(0,r.kt)("strong",{parentName:"p"},"after")," UST is performed."),(0,r.kt)("h3",{id:"request-data"},"Request Data"),(0,r.kt)("img",{src:a(8697).Z,title:"Request data",width:"400"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change Data"),(0,r.kt)("br",null),"\nIn the example application, the user simply requests the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/data"},"data")," they want to receive. (Real attesters will implement their own logic to determine why and how data is attributed to their users.)"),(0,r.kt)("p",null,"There are two types of data fields: ",(0,r.kt)("em",{parentName:"p"},"sum fields")," and ",(0,r.kt)("em",{parentName:"p"},"replacement fields"),". ",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"sum field")," carries a total of all the data that has been added to it."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"replacement field")," is used to fully replace old data with new data.")),(0,r.kt)("p",null,"Users can choose which of their anonymous identifiers (",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/epoch-key"},"epoch keys"),") will receieve the attestation by choosing an ",(0,r.kt)("em",{parentName:"p"},"epoch key nonce"),". A unique identifier is generated for each epoch key nonce in each epoch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# epoch key nonce = 0\nRequesting data with epoch key:\n0x2b4b15e0173f69807318198d5c1db6c00c44380af2e05912608950e10ba04b43\n# epoch key nonce = 1\nRequesting data with epoch key:\n0x15e1358a646a10aa99756a250d9463b6026fbd09c5f4d28e477085f21eecd197\n")),(0,r.kt)("p",null,"The data received by each of a user's epoch keys will be accumulated to that user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.g.")," ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[0] = 1")," is requested by epoch key: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x2b4b15e0173f69807318198d5c1db6c00c44380af2e05912608950e10ba04b43"),(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data[0] = 2")," is requested by epoch key: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x15e1358a646a10aa99756a250d9463b6026fbd09c5f4d28e477085f21eecd197")),(0,r.kt)("p",null,"1+2=3 so the final ",(0,r.kt)("inlineCode",{parentName:"p"},"data[0]")," of the user is ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These epoch keys last for only one epoch. At the start of each epoch, new epoch keys are generated and old epoch keys become invalid.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attest")),(0,r.kt)("p",null,"Upon clicking the ",(0,r.kt)("strong",{parentName:"p"},"attest")," button, the following steps are executed to process an attestation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Client generates an ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.0.0-beta-4/circuits-api/circuits#epoch-key-proof"},"epoch key proof")," to prove the epoch key is valid"),(0,r.kt)("li",{parentName:"ol"},"Client submits the epoch key proof and the requested data to the relayer"),(0,r.kt)("li",{parentName:"ol"},"Relayer uses ",(0,r.kt)("inlineCode",{parentName:"li"},"UnirepApp.sol")," to call ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.0.0-beta-4/contracts-api/unirep-sol#attest"},"attest")," on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Unirep.sol")," contract"),(0,r.kt)("li",{parentName:"ol"},"Frontend updates the user's ",(0,r.kt)("em",{parentName:"li"},"latest data")," (data is not yet provable)")),(0,r.kt)("h3",{id:"user-state-transtion"},"User State Transtion"),(0,r.kt)("img",{src:a(30941).Z,title:"User state transition",width:"300"}),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/user-state-transition"},"user state transition")," is performed manually by a user in any any epoch they want to participate in. The user will not be able to receive data if ",(0,r.kt)("inlineCode",{parentName:"p"},"Current epoch #")," does not match ",(0,r.kt)("inlineCode",{parentName:"p"},"Latest transition epoch")," (found under the Epoch section); UST must be completed first. ",(0,r.kt)("br",null),"\nClicking the ",(0,r.kt)("strong",{parentName:"p"},"Transition")," button executes the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Client generates a ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.0.0-beta-4/circuits-api/circuits#user-state-transition-proof"},"user state transition proof")),(0,r.kt)("li",{parentName:"ol"},"Client submits the proof to the relayer"),(0,r.kt)("li",{parentName:"ol"},"Relayer updates the ",(0,r.kt)("inlineCode",{parentName:"li"},"Unirep.sol")," contract"),(0,r.kt)("li",{parentName:"ol"},"Frontend updates the user's ",(0,r.kt)("em",{parentName:"li"},"provable data"))),(0,r.kt)("p",null,"The latest user status has been recorded on chain; the user can now receive data in the current epoch and their updated provable data can be used to generate a ",(0,r.kt)("a",{parentName:"p",href:"#prove-data"},"data proof"),"."),(0,r.kt)("h3",{id:"prove-data"},"Prove Data"),(0,r.kt)("img",{src:a(33450).Z,title:"Prova data",width:"200"}),(0,r.kt)("p",null,"In the example attester, there is no functionality that requires proof of any data; individual attesters will define the purpose of proofs for their unique application."),(0,r.kt)("p",null,"The example input fields take the data a user wishes to claim. Clicking the ",(0,r.kt)("strong",{parentName:"p"},"Generate Proof")," button creates a data proof with the claim data and sends it to the prover to be verified. A proof will be valid if the claimed data is greater than or equal to the user's provable data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.g."),(0,r.kt)("br",null),"\nIf user's provable data is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Provable Data 0 = 2\nProvable Data 1 = 3\nProvable Data 2 = 4\nProvable Data 3 = 5\n")),(0,r.kt)("p",null,"the user can claim they have data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Claim Data 0 = 2\nClaim Data 1 = 2\nClaim Data 2 = 2\nClaim Data 3 = 2\n")),(0,r.kt)("p",null,"because:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"2 (Provable Data 0) >= 2 (Claim Data 0) # satisfied. 2 === 2\n3 (Provable Data 1) >= 2 (Claim Data 1) # satisfied. 3 > 2\n4 (Provable Data 2) >= 2 (Claim Data 2) # satisfied. 4 > 2\n5 (Provable Data 3) >= 2 (Claim Data 3) # satisfied. 5 > 2\n")),(0,r.kt)("p",null,'If the proof is valid, the frontend will display the proof and "Is proof valid? ',(0,r.kt)("strong",{parentName:"p"},"true"),'" below the ',(0,r.kt)("strong",{parentName:"p"},"Generate Proof")," button."),(0,r.kt)("p",null,"If the proof is invalid, the snarkjs prover will throw an error."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.g."),(0,r.kt)("br",null),"\nIf user's provable data is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Provable Data 0 = 2 \ud83d\udc48\nProvable Data 1 = 3\nProvable Data 2 = 4\nProvable Data 3 = 5\n")),(0,r.kt)("p",null,"and they claim to own the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Claim Data 0 = 3 \ud83d\udc48\nClaim Data 1 = 3\nClaim Data 2 = 3\nClaim Data 3 = 3\n")),(0,r.kt)("p",null,"The prover will throw an error because the fields with emojis do not satisfy the conditions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"2 (Provable Data 0) >= 3 (Claim Data 0) # not satisfied. 2 is not greater than or equal to 3\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the customized ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unirep/create-unirep-app/blob/2ca9aaa3fcacb9282993b8f5d5917afc482ec089/packages/circuits/circuits/dataProof.circom"},"data proof circuit"),(0,r.kt)("br",null),"\nApp builders can customize their own ZK circuits and deploy verifiers to fit the application.")),(0,r.kt)("h2",{id:"-build-your-own-application"},"\ud83d\udca1 Build your own application"),(0,r.kt)("p",null,"Start by modifying the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Unirep/create-unirep-app/blob/2ca9aaa3fcacb9282993b8f5d5917afc482ec089/packages/contracts/contracts/UnirepApp.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"UnirepApp.sol"))," contract."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See all ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/unirep-sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Unirep.sol")," APIs"))),(0,r.kt)("h3",{id:"define-epoch-length"},"Define epoch length"),(0,r.kt)("p",null,"Each attester sets its own ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/protocol/epoch"},"epoch")," length, determined by the needs of the application. When deciding their attester's epoch length, developers should consider the following trade-offs.",(0,r.kt)("br",null)),(0,r.kt)("p",null,"Longer epoch lengths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allow users more time to receive new data, especially in cases with user-to-user interactions"),(0,r.kt)("li",{parentName:"ul"},"extend the time users must wait for changed data to be provable"),(0,r.kt)("li",{parentName:"ul"},"risk making users pseudonymous, as their activities may be tracked when using the same epoch keys for an long period of time")),(0,r.kt)("p",null,"Shorter epoch lengths:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"allow users to prove new data sooner"),(0,r.kt)("li",{parentName:"ul"},"limit opportunities for users to receive new data, as their epoch keys expire quickly"),(0,r.kt)("li",{parentName:"ul"},"may enable a higher degree of user anonymity, as user's anonymous identifiers change more frequently")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"unit48 epochLength = 60 * 15; // 15 minutes\nunirep.attesterSignUp(epochLength);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/unirep-sol#attestersignup"},"attesterSignUp"))),(0,r.kt)("h3",{id:"customize-attestation-policy"},"Customize attestation policy"),(0,r.kt)("p",null,"Attesters define their own systems to format user data and regulate how that data is attributed to users. An application's user data might represent aspects of a user's status, actions, associations, reputation, etc."),(0,r.kt)("p",null,"The attester may implement its policy with any combination of smart contract code (customizing ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol"),") and traditional application logic. (The application may require a user to satisfy an on-chain OR an off-chain condition in order to receive new data.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.g."),(0,r.kt)("br",null),"\nAn attester wants to limit the amount of data a user can receive in each epoch. The code below utilizes a simple mapping to prevent an attestation to an epoch key if it has already received a value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"mapping(uint => bool) epochKeyReceivedValue;\n\nfunction submitAttestation(\n   uint epochKey\n) public {\n   // check if the epoch key has received data\n   require(epochKeyReceivedValue[epochKey] == false);\n   // compute attester ID: the address of the smart contract\n   uint160 attesterId = uint160(address(this));\n   // get current epoch from unirep\n   uint48 targetEpoch = unirep.attesterCurrentEpoch(attesterId);\n   // fix field index\n   uint fieldIndex = 0;\n   // fix data value\n   uint val = 1;\n   // call unirep attest function\n   unirep.attest(\n      epochKey,\n      targetEpochs,\n      fieldIndex,\n      val\n   );\n   // mark the epoch key has received data\n   epochKeyReceivedValue[epochKey] = true;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e.g."),(0,r.kt)("br",null),"\nAn attester needs to track the total number of posts a user has made. The code below executes an attestation to increment the user's post count when the user submits a valid post. Note that this must be enforced on the server side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<input\n    type="submit"\n    value="POST"\n    onClick={async () => {\n        // check if user is transitioned to current epoch\n        if (\n            user.userState &&\n            user.userState.sync.calcCurrentEpoch() !==\n                (await user.userState.latestTransitionedEpoch())\n        ) {\n            throw new Error(\'Needs transition\')\n        }\n        // create new entry in off-chain database\n        await app.createNewPost(postData)\n        // submit attestation to increment user\'s post count\n        await user.requestReputation({ [0]: 1 }, reqInfo.nonce ?? 0)\n    }}\n/>\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/unirep-sol#attestercurrentepoch"},(0,r.kt)("inlineCode",{parentName:"a"},"attesterCurrentEpoch")),(0,r.kt)("br",null),"\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/unirep-sol#attest"},(0,r.kt)("inlineCode",{parentName:"a"},"attest")))),(0,r.kt)("h3",{id:"verify-epoch-key"},"Verify epoch key"),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/circuits-api/circuits#epoch-key-proof"},"epoch key proof")," is submitted when a request is made to change to user data. Attesters can choose to verify proofs off-chain (with a relay, as in the demo attester) or on-chain."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"UnirepApp.sol")," can be modified by adding the epoch key proof:"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/verifiers/epoch-key-verifier-helper"},(0,r.kt)("inlineCode",{parentName:"a"},"EpochKeyVerifierHelper"))," to learn how to deploy a verifier and its APIs.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("inlineCode",{parentName:"li"},"EpochKeyVerifierHelper")," from ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@unirep/contracts"},(0,r.kt)("inlineCode",{parentName:"a"},"@unirep/contracts")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"import { EpochKeyVerifierHelper } from '@unirep/contracts/verifierHelpers/EpochKeyVerifierHelper.sol';\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Sepcify the address of the deployed verifier.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"// add a public verifier\nEpochKeyVerifierHelper public epkVerifier;\nconstructor(\n    // ...\n    // pass the verifier address while construction\n    EpochKeyVerifierHelper _epkVerifier\n){\n    // ...\n    // set the public verifier to this address\n    epkVerifier = _epkVerifier;\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"publicSignals")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"proof")," to verify it in the function.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"function submitAttestation(\n    uint[] memory publicSignals,\n    uint[8] memory proof\n) public {\n    // verify epoch key proof and check if the caller matches the attester ID in the proof\n    epkVerifier.verifyAndCheckCaller(publicSignals, proof);\n}\n")),(0,r.kt)("p",null,"But how can we tell which signal is the epoch key?",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"EpochKeyVerifierHelper.sol")," provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.0.0-beta-4/contracts-api/verifiers/epoch-key-verifier-helper#decodeepochkeysignals"},(0,r.kt)("inlineCode",{parentName:"a"},"decodeEpochKeySignals"))," to fix this problem."),(0,r.kt)("p",null,"We can complete the ",(0,r.kt)("inlineCode",{parentName:"p"},"submitAttestation")," function with ",(0,r.kt)("inlineCode",{parentName:"p"},"decodeEpochKeySignals"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},"mapping(uint => bool) epochKeyReceivedValue;\n\nfunction submitAttestation(\n   uint[] memory publicSignals,\n   uint[8] memory proof\n) public {\n    // verify epoch key proof\n    epkVerifier.verifyAndCheckCaller(publicSignals, proof);\n    // decode epoch key signals\n    EpochKeyVerifierHelper.EpochKeySignals memory signals = epkVerifier\n            .decodeEpochKeySignals(publicSignals);\n    // check if the epoch key receives data or not\n    require(epochKeyReceivedValue[signals.epochKey] == false);\n    // compute attester ID: the address of the smart contract\n    uint160 attesterId = uint160(address(this));\n    // get current epoch from unirep\n    uint48 targetEpoch = unirep.attesterCurrentEpoch(attesterId);\n    // verify the state tree root in current epoch\n    require(\n        unirep.attesterStateTreeRootExists(\n            attesterId,\n            targetEpoch,\n            signals.stateTreeRoot\n        )\n    );\n    // fix field index\n    uint fieldIndex = 0;\n    // fix data value\n    uint val = 1;\n    // call UniRep attest function\n    unirep.attest(\n        signals.epochKey,\n        targetEpoch,\n        fieldIndex,\n        val\n    );\n    // mark the epoch key has received data\n    epochKeyReceivedValue[signals.epochKey] = true;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now you can start building your own application with UniRep. \ud83d\ude80")))}u.isMDXComponent=!0},33450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/prove_data-7ee9878fddcaa3d8743df934ab69a69b.png"},8697:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/request_data-c73e7518971ffd9579d5bef7e050da23.png"},30941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ust-578c2e7900cbfc602a802f82293e37d6.png"},69721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architecture-44575c168fba996a8b89db0575b06948.png"},48426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dashboard-7ffc5b8ac9cfe8e41683ef2980e00388.png"},69444:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/join-dfe099962900fdb39955de944f301f99.png"}}]);