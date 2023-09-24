import{f as g,j as r,aD as M,aE as S,y as _,aF as p,aG as y,t as F,m as P,aH as j,aI as w,aJ as R}from"./index-62f813c7.js";var k={exit:({reverse:s,initialScale:t,transition:a,transitionEnd:e,delay:n})=>{var o;return{opacity:0,...s?{scale:t,transitionEnd:e==null?void 0:e.exit}:{transitionEnd:{scale:t,...e==null?void 0:e.exit}},transition:(o=a==null?void 0:a.exit)!=null?o:p.exit(y.exit,n)}},enter:({transitionEnd:s,transition:t,delay:a})=>{var e;return{opacity:1,scale:1,transition:(e=t==null?void 0:t.enter)!=null?e:p.enter(y.enter,a),transitionEnd:s==null?void 0:s.enter}}},C={initial:"exit",animate:"enter",exit:"exit",variants:k},D=g.forwardRef(function(t,a){const{unmountOnExit:e,in:n,reverse:o=!0,initialScale:i=.95,className:l,transition:u,transitionEnd:x,delay:v,...m}=t,c=e?n&&e:!0,f=n||e?"enter":"exit",d={initialScale:i,reverse:o,transition:u,transitionEnd:x,delay:v};return r.jsx(M,{custom:d,children:c&&r.jsx(S.div,{ref:a,className:_("chakra-offset-slide",l),...C,animate:f,custom:d,...m})})});D.displayName="ScaleFade";var E={initial:({offsetX:s,offsetY:t,transition:a,transitionEnd:e,delay:n})=>{var o;return{opacity:0,x:s,y:t,transition:(o=a==null?void 0:a.exit)!=null?o:p.exit(y.exit,n),transitionEnd:e==null?void 0:e.exit}},enter:({transition:s,transitionEnd:t,delay:a})=>{var e;return{opacity:1,x:0,y:0,transition:(e=s==null?void 0:s.enter)!=null?e:p.enter(y.enter,a),transitionEnd:t==null?void 0:t.enter}},exit:({offsetY:s,offsetX:t,transition:a,transitionEnd:e,reverse:n,delay:o})=>{var i;const l={x:t,y:s};return{opacity:0,transition:(i=a==null?void 0:a.exit)!=null?i:p.exit(y.exit,o),...n?{...l,transitionEnd:e==null?void 0:e.exit}:{transitionEnd:{...l,...e==null?void 0:e.exit}}}}},N={initial:"initial",animate:"enter",exit:"exit",variants:E},O=g.forwardRef(function(t,a){const{unmountOnExit:e,in:n,reverse:o=!0,className:i,offsetX:l=0,offsetY:u=8,transition:x,transitionEnd:v,delay:m,...c}=t,f=e?n&&e:!0,d=n||e?"enter":"exit",h={offsetX:l,offsetY:u,reverse:o,transition:x,transitionEnd:v,delay:m};return r.jsx(M,{custom:h,children:f&&r.jsx(S.div,{ref:a,className:_("chakra-offset-slide",i),custom:h,...N,animate:d,...c})})});O.displayName="SlideFade";var T={slideInBottom:{...N,custom:{offsetY:16,reverse:!0}},slideInRight:{...N,custom:{offsetX:16,reverse:!0}},scale:{...C,custom:{initialScale:.95,reverse:!0}},none:{}},A=F(S.section),X=s=>T[s||"none"],I=g.forwardRef((s,t)=>{const{preset:a,motionProps:e=X(a),...n}=s;return r.jsx(A,{ref:t,...e,...n})});I.displayName="ModalTransition";var Y=P((s,t)=>{const{className:a,children:e,containerProps:n,motionProps:o,...i}=s,{getDialogProps:l,getDialogContainerProps:u}=j(),x=l(i,t),v=u(n),m=_("chakra-modal__content",a),c=w(),f={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...c.dialog},d={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...c.dialogContainer},{motionPreset:h}=j();return r.jsx(R,{children:r.jsx(F.div,{...v,className:"chakra-modal__content-container",tabIndex:-1,__css:d,children:r.jsx(I,{preset:h,motionProps:o,className:m,...x,__css:f,children:e})})})});Y.displayName="ModalContent";var $=P((s,t)=>{const{className:a,...e}=s,n=_("chakra-modal__footer",a),i={display:"flex",alignItems:"center",justifyContent:"flex-end",...w().footer};return r.jsx(F.footer,{ref:t,...e,__css:i,className:n})});$.displayName="ModalFooter";export{Y as M,$ as a};