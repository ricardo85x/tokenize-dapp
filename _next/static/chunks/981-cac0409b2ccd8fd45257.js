(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{6278:function(e,r,n){"use strict";n.d(r,{Y:function(){return g}});var t=n(6265),o=n(5893),c=n(809),s=n.n(c),i=n(2447),a=n(8017),l=n(4115),u=n(2026),d=n(3637),f=n(6185),x=n(2460),p=n(2283),h=n(2593),b=n(7616),m=n(9249);function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function g(){var e=(0,x.Q)(),r=e.currentSupply,n=e.tokenSymbol,t=e.accounts,c=e.tokenRate,j=e.myTokenSaleContract,g=e.myTokenContract,k=(0,p.cI)(),w=k.register,O=k.handleSubmit,v=function(){var e=(0,i.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.tokens>0&&t&&j)){e.next=13;break}return n=h.O$.from(c).mul(h.O$.from(r.tokens)),console.log("TOTALValue",n.toNumber()),e.prev=3,e.next=6,j.buyTokens(t[0],{value:n.toNumber()});case 6:m.Am.info("Transaction sent, balance will updated once confirmed"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(3),m.Am.error("Error sending transaction"),console.error("Error sending transaction",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(r){return e.apply(this,arguments)}}(),S=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=3;break}return e.next=3,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:g.address,symbol:n,decimals:0}}});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(a.xu,{mx:"5",maxW:"500px",backgroundColor:"gray.800",borderRadius:"10",p:"5",children:[(0,o.jsxs)(l.x,{mx:"5",fontWeight:"bold",color:"cyan.400",children:["Token ",n]}),(0,o.jsxs)(u.gC,{mx:"5",fontSize:"25",spacing:"5",align:"flex-start",children:[(0,o.jsxs)(l.x,{mt:"4",color:"yellowgreen",children:["Current Token Supply ",r]}),(0,o.jsxs)(u.gC,{as:"form",onSubmit:O(v),spacing:"2",align:"flex-start",children:[(0,o.jsx)(l.x,{children:"How many tokens you want to buy?"}),(0,o.jsx)(d.I,y(y({},w("tokens")),{},{defaultValue:"5",label:"amount",type:"number"})),(0,o.jsx)(f.z,{size:"lg",colorScheme:"blackAlpha",type:"submit",children:"Buy Tokens"}),(0,o.jsxs)(l.x,{fontSize:"12",color:"red.300",children:[" * Only ",b.dF(c)," ETH each"]})]}),(0,o.jsx)(l.x,{children:"You can also send weis to the following address to obtain tokens"}),(0,o.jsxs)(l.x,{fontSize:"14",color:"red.300",children:["Token value in ETH: ",b.bM(c,"ether")]}),(0,o.jsxs)(l.x,{fontSize:"14",color:"green.300",children:["Address to send wei: ",j&&j.address]}),(0,o.jsxs)(f.z,{colorScheme:"orange",onClick:function(){return S()},children:["Add ",n," to Metamask"]})]})]})}},9943:function(e,r,n){"use strict";n.d(r,{w:function(){return j}});var t=n(6265),o=n(5893),c=n(809),s=n.n(c),i=n(2447),a=n(8017),l=n(4115),u=n(2026),d=n(6185),f=n(3637),x=n(2460),p=n(9249),h=n(2283);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function j(){var e=(0,x.Q)(),r=e.kycContract,n=e.isOwner,t=e.accounts,c=e.inList,b=(e.setInList,e.clubRate),j=(0,h.cI)(),y=j.register,g=j.handleSubmit,k=function(){var e=(0,i.Z)(s().mark((function e(o){var c,i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r||!t){e.next=25;break}return c=o||t[0],e.prev=2,e.next=5,r.kycCompleted(c);case 5:if(i=e.sent,a="".concat(c.substr(1,4),"...").concat(c.substr(-4)),!i){e.next=11;break}p.Am.warning("".concat(a," is already in the list")),e.next=19;break;case 11:if(!n){e.next=16;break}return e.next=14,r.setKycCompleted(c);case 14:e.next=18;break;case 16:return e.next=18,r.buyKyc({value:b});case 18:p.Am.info("Transaction sent, waiting confirmation to join the club");case 19:e.next=25;break;case 21:e.prev=21,e.t0=e.catch(2),p.Am.error("Error to process this address or you are not allowed"),console.error("Error to process this address or you are not allowed`",e.t0);case 25:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(r){return e.apply(this,arguments)}}(),w=function(){var e=(0,i.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(r.kycAddress);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),O=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&k(t[0]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v="Join the club to be able to buy tokens!";return n&&(v="You are not in the club!"),(0,o.jsxs)(a.xu,{mx:"5",maxW:"500px",backgroundColor:"gray.800",borderRadius:"10",p:"5",children:[(0,o.jsx)(l.x,{mx:"5",fontWeight:"bold",color:"cyan.400",children:"Club"}),(0,o.jsxs)(u.gC,{mx:"5",spacing:"5",fontSize:"25",align:"flex-start",children:[!c&&(0,o.jsxs)(u.gC,{align:"flex-start",as:"form",onSubmit:g(O),spacing:"2",children:[(0,o.jsx)(l.x,{children:v}),(0,o.jsx)(d.z,{size:"lg",colorScheme:"blackAlpha",type:"submit",children:"Join Club"}),!n&&(0,o.jsxs)(l.x,{fontSize:"12",color:"red.300",children:[" * Only ",b," wei "]})]}),!n&&!c&&(0,o.jsx)(l.x,{children:"You can also contact the owner to try to get in for free"}),n&&(0,o.jsxs)(u.gC,{align:"flex-start",spacing:"3",as:"form",onSubmit:g(w),children:[(0,o.jsx)(l.x,{children:"Add your friends to the club"}),(0,o.jsx)(f.I,m(m({},y("kycAddress")),{},{label:"KYC Address",type:"text"})),(0,o.jsx)(d.z,{mt:"3",size:"lg",colorScheme:"blackAlpha",type:"submit",children:"Add address"})]})]})]})}},3948:function(e,r,n){"use strict";n.d(r,{U:function(){return l}});var t=n(5893),o=n(8017),c=n(2026),s=n(4115),i=n(829),a=(n(7294),n(9249));function l(e){var r=e.message,n=e.error,l=void 0!==n&&n,u=l&&!0===l?"red.400":"blue.400";return(0,t.jsx)(o.xu,{mx:"5",maxW:"500px",backgroundColor:"gray.800",borderRadius:"10",p:"5",children:(0,t.jsxs)(c.Ug,{spacing:"2",align:"center",justify:"center",m:"10",p:"10",children:[(0,t.jsx)(s.x,{fontSize:"42",color:u,children:r}),!l&&(0,t.jsx)(i.$,{size:"lg"}),(0,t.jsx)(a.Ix,{})]})})}},7135:function(e,r,n){"use strict";n.d(r,{o:function(){return s}});var t=n(5893),o=n(4115),c=n(2460);function s(){var e=(0,c.Q)(),r=e.isOwner,n=e.inList,s="Hello Traveler";return r?s="Hello Owner \\o/":n&&(s="Hello Traveler your are in the club!"),(0,t.jsx)(o.x,{mx:"10",fontWeight:"bold",color:"yellowgreen",children:s})}},7706:function(e,r,n){"use strict";n.d(r,{h:function(){return h}});var t=n(5893),o=n(8017),c=n(4096),s=n(2026),i=n(9444),a=n(8482),l=n(4115),u=n(4232),d=n(6185),f=n(2460),x=n(969),p=n(5063);function h(e){var r=e.back,n=(0,f.Q)(),h=n.accounts,b=n.inList,m=n.myTokenBalance,j=n.tokenSymbol,y=n.tokens,g=h?"".concat(h[0].substr(0,5),"...").concat(h[0].substr(-5)):"0x000...0000";return(0,t.jsx)(o.xu,{bg:"cyan.800",width:"100%",align:"center",children:(0,t.jsxs)(c.k,{justify:"space-between",py:"15",align:"center",maxW:1100,px:"10",children:[(0,t.jsxs)(s.Ug,{spacing:"1",children:[r&&(0,t.jsx)(p.default,{href:"/",children:(0,t.jsxs)(i.r,{ml:"-7",children:[" ",(0,t.jsx)(a.E,{size:"25px",as:x.YFh})]})}),(0,t.jsxs)(l.x,{fontSize:"34",fontWeight:"bold",children:[j," Token Sale"]})]}),(0,t.jsxs)(u.v2,{children:[(0,t.jsx)(u.j2,{colorScheme:"cyan",as:d.z,rightIcon:(0,t.jsx)(x.bTu,{}),children:(0,t.jsx)(l.x,{fontSize:"15",children:g})}),(0,t.jsxs)(u.qy,{color:"gray.600",align:"flex",children:[(0,t.jsx)(o.xu,{align:"start",ml:"4",children:b?(0,t.jsx)(l.x,{fontWeight:"bold",color:"green.500",children:"Approved"}):(0,t.jsx)(l.x,{fontWeight:"bold",color:"red.500",children:"Not Approved"})}),(0,t.jsxs)(o.xu,{ml:"4",align:"start",children:[(0,t.jsx)("b",{children:"Balance"}),": ",m," ",j]}),y.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.R,{}),(0,t.jsx)(u.kS,{title:"Tokens",align:"start",children:y.map((function(e){return(0,t.jsx)(u.sN,{children:(0,t.jsx)(p.default,{href:"/".concat(e.address),children:(0,t.jsx)(i.r,{children:(0,t.jsxs)(l.x,{fontSize:"small",children:["- ",e.symbol]})})})},e.address)}))})]})]})]})]})})}},8851:function(e,r,n){"use strict";n.d(r,{G:function(){return j}});var t=n(6265),o=n(5893),c=n(809),s=n.n(c),i=n(2447),a=n(8017),l=n(2026),u=n(4115),d=n(3637),f=n(6185),x=n(2460),p=n(2283),h=n(9249);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function j(){var e=(0,x.Q)(),r=e.tokenSymbol,n=e.accounts,t=e.myTokenContract,c=e.myTokenSaleContract,b=(0,p.cI)(),j=b.register,y=b.handleSubmit,g=function(){var e=(0,i.Z)(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.tokens>0&&n&&t&&c)){e.next=11;break}return e.prev=1,e.next=4,t.mint(n[0],r.tokens);case 4:h.Am.info("Transaction sent, token will be minted once confirmed"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),h.Am.error("Error on token mint"),console.error("Error on token mint",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,o.jsx)(a.xu,{mx:"5",maxW:"500px",backgroundColor:"gray.800",borderRadius:"10",p:"5",children:(0,o.jsxs)(l.gC,{mx:"5",fontWeight:"bold",spacing:"5",align:"flex-start",children:[(0,o.jsxs)(u.x,{children:["Mint ",r," Token!"]}),(0,o.jsxs)(l.gC,{as:"form",onSubmit:y(g),spacing:"2",align:"flex-start",children:[(0,o.jsx)(d.I,m(m({},j("tokens")),{},{defaultValue:"5",label:"amount",type:"number"})),(0,o.jsx)(f.z,{size:"lg",colorScheme:"blackAlpha",type:"submit",children:"Mint Tokens"})]})]})})}}}]);