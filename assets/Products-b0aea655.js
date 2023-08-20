import{k as B,l as T,j as e,q as E,i as k,c as u,N,w as z,I as ae,A as le,m as de,o as ue,p as xe,s as R,O as pe,Q as me,S as he,T as ge,U as fe,V as je,W as U,n as ye,y as we,a as Ae,u as be,X as ve,Y as Ce,Z as ke}from"./index-b78b9c99.js";import{G as Se}from"./iconBase-c366b57b.js";import{c as Ie}from"./chunk-OCNORRQU-649bcd73.js";import{u as Pe}from"./index-0edad3b3.js";import{m as Ne}from"./index-32ccd240.js";import{w as V,a as D}from"./chunk-ROURZMX4-d1911d7b.js";import{S as De}from"./chunk-ZHMYA64R-5d3b3d21.js";import{B as A,T as C}from"./chunk-PULVB27S-558afbef.js";import{C as Me}from"./chunk-P675YKMR-9ab4fb4f.js";import{B as L}from"./chunk-UVUR7MCU-5be8378d.js";import{u as W}from"./chunk-R42ZB7PB-86b11cbd.js";import{a as Fe,b as Le}from"./index.esm-40ded25c.js";import{u as J}from"./useDispatch-41a62c0c.js";import{M as _e,a as Te,b as Ee,c as v,S as F}from"./chunk-J5XKU7PD-995e6eec.js";import{F as _}from"./chunk-KRPLQIP4-a227f63c.js";import{I as He}from"./chunk-QINAG4RG-fd958eda.js";import{L as ze,E as Oe}from"./Error-1fd0e66b.js";import{C as q}from"./chunk-FAWTVNS3-702e3c03.js";import{G as Q}from"./chunk-JARCRF6W-f2f49090.js";import"./chunk-XRMX4GAI-0845dbb0.js";import"./index-8d968404.js";var[Be,H]=B({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[Re,G]=B({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[We,Io,Ge,Ze]=Ie(),ee=T(function(n,t){const{getButtonProps:s}=G(),c=s(n,t),r={display:"flex",alignItems:"center",width:"100%",outline:0,...H().button};return e.jsx(E.button,{...c,className:k("chakra-accordion__button",n.className),__css:r})});ee.displayName="AccordionButton";function $e(o){const{onChange:n,defaultIndex:t,index:s,allowMultiple:c,allowToggle:i,...r}=o;Ue(o),Ve(o);const h=Ge(),[x,d]=u.useState(-1);u.useEffect(()=>()=>{d(-1)},[]);const[a,p]=Pe({value:s,defaultValue(){return c?t??[]:t??-1},onChange:n});return{index:a,setIndex:p,htmlProps:r,getAccordionItemProps:l=>{let y=!1;return l!==null&&(y=Array.isArray(a)?a.includes(l):a===l),{isOpen:y,onChange:f=>{if(l!==null)if(c&&Array.isArray(a)){const S=f?a.concat(l):a.filter(I=>I!==l);p(S)}else f?p(l):i&&p(-1)}}},focusedIndex:x,setFocusedIndex:d,descendants:h}}var[Ke,Z]=B({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function Ye(o){const{isDisabled:n,isFocusable:t,id:s,...c}=o,{getAccordionItemProps:i,setFocusedIndex:r}=Z(),h=u.useRef(null),x=u.useId(),d=s??x,a=`accordion-button-${d}`,p=`accordion-panel-${d}`;qe(o);const{register:m,index:l,descendants:y}=Ze({disabled:n&&!t}),{isOpen:g,onChange:f}=i(l===-1?null:l);Qe({isOpen:g,isDisabled:n});const S=()=>{f==null||f(!0)},I=()=>{f==null||f(!1)},$=u.useCallback(()=>{f==null||f(!g),r(l)},[l,r,g,f]),K=u.useCallback(P=>{const b={ArrowDown:()=>{const j=y.nextEnabled(l);j==null||j.node.focus()},ArrowUp:()=>{const j=y.prevEnabled(l);j==null||j.node.focus()},Home:()=>{const j=y.firstEnabled();j==null||j.node.focus()},End:()=>{const j=y.lastEnabled();j==null||j.node.focus()}}[P.key];b&&(P.preventDefault(),b(P))},[y,l]),Y=u.useCallback(()=>{r(l)},[r,l]),re=u.useCallback(function(w={},b=null){return{...w,type:"button",ref:Ne(m,h,b),id:a,disabled:!!n,"aria-expanded":!!g,"aria-controls":p,onClick:z(w.onClick,$),onFocus:z(w.onFocus,Y),onKeyDown:z(w.onKeyDown,K)}},[a,n,g,$,Y,K,p,m]),ce=u.useCallback(function(w={},b=null){return{...w,ref:b,role:"region",id:p,"aria-labelledby":a,hidden:!g}},[a,g,p]);return{isOpen:g,isDisabled:n,isFocusable:t,onOpen:S,onClose:I,getButtonProps:re,getPanelProps:ce,htmlProps:c}}function Ue(o){const n=o.index||o.defaultIndex,t=n!=null&&!Array.isArray(n)&&o.allowMultiple;N({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}function Ve(o){N({condition:!!(o.allowMultiple&&o.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}function qe(o){N({condition:!!(o.isFocusable&&!o.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `})}function Qe(o){N({condition:o.isOpen&&!!o.isDisabled,message:"Cannot open a disabled accordion item"})}function oe(o){const{isOpen:n,isDisabled:t}=G(),{reduceMotion:s}=Z(),c=k("chakra-accordion__icon",o.className),i=H(),r={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...i.icon};return e.jsx(ae,{viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:r,...o,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}oe.displayName="AccordionIcon";var ne=T(function(n,t){const{children:s,className:c}=n,{htmlProps:i,...r}=Ye(n),x={...H().container,overflowAnchor:"none"},d=u.useMemo(()=>r,[r]);return e.jsx(Re,{value:d,children:e.jsx(E.div,{ref:t,...i,className:k("chakra-accordion__item",c),__css:x,children:typeof s=="function"?s({isExpanded:!!r.isOpen,isDisabled:!!r.isDisabled}):s})})});ne.displayName="AccordionItem";var Xe=o=>o!=null&&parseInt(o.toString(),10)>0,X={exit:{height:{duration:.2,ease:D.ease},opacity:{duration:.3,ease:D.ease}},enter:{height:{duration:.3,ease:D.ease},opacity:{duration:.4,ease:D.ease}}},Je={exit:({animateOpacity:o,startingHeight:n,transition:t,transitionEnd:s,delay:c})=>{var i;return{...o&&{opacity:Xe(n)?1:0},height:n,transitionEnd:s==null?void 0:s.exit,transition:(i=t==null?void 0:t.exit)!=null?i:V.exit(X.exit,c)}},enter:({animateOpacity:o,endingHeight:n,transition:t,transitionEnd:s,delay:c})=>{var i;return{...o&&{opacity:1},height:n,transitionEnd:s==null?void 0:s.enter,transition:(i=t==null?void 0:t.enter)!=null?i:V.enter(X.enter,c)}}},te=u.forwardRef((o,n)=>{const{in:t,unmountOnExit:s,animateOpacity:c=!0,startingHeight:i=0,endingHeight:r="auto",style:h,className:x,transition:d,transitionEnd:a,...p}=o,[m,l]=u.useState(!1);u.useEffect(()=>{const I=setTimeout(()=>{l(!0)});return()=>clearTimeout(I)},[]),N({condition:Number(i)>0&&!!s,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const y=parseFloat(i.toString())>0,g={startingHeight:i,endingHeight:r,animateOpacity:c,transition:m?d:{enter:{duration:0}},transitionEnd:{enter:a==null?void 0:a.enter,exit:s?a==null?void 0:a.exit:{...a==null?void 0:a.exit,display:y?"block":"none"}}},f=s?t:!0,S=t||s?"enter":"exit";return e.jsx(le,{initial:!1,custom:g,children:f&&e.jsx(de.div,{ref:n,...p,className:k("chakra-collapse",x),style:{overflow:"hidden",display:"block",...h},custom:g,variants:Je,initial:s?"exit":!1,animate:S,exit:"exit"})})});te.displayName="Collapse";var se=T(function(n,t){const{className:s,motionProps:c,...i}=n,{reduceMotion:r}=Z(),{getPanelProps:h,isOpen:x}=G(),d=h(i,t),a=k("chakra-accordion__panel",s),p=H();r||delete d.hidden;const m=e.jsx(E.div,{...d,__css:p.panel,className:a});return r?m:e.jsx(te,{in:x,...c,children:m})});se.displayName="AccordionPanel";var ie=T(function({children:n,reduceMotion:t,...s},c){const i=ue("Accordion",s),r=xe(s),{htmlProps:h,descendants:x,...d}=$e(r),a=u.useMemo(()=>({...d,reduceMotion:!!t}),[d,t]);return e.jsx(We,{value:x,children:e.jsx(Ke,{value:a,children:e.jsx(Be,{value:i,children:e.jsx(E.div,{ref:c,...h,className:k("chakra-accordion",s.className),__css:i.root,children:n})})})})});ie.displayName="Accordion";function eo(o){return Se({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"}},{tag:"circle",attr:{cx:"336",cy:"128",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"176",cy:"256",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"336",cy:"384",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(o)}const M=({title:o,item:n,change:t,apply:s})=>e.jsxs(ne,{children:[e.jsx("h2",{children:e.jsxs(ee,{children:[e.jsx(A,{flex:"1",textAlign:"left",fontSize:["14px","18px"],children:o}),e.jsx(oe,{})]})}),e.jsx(se,{pb:4,children:e.jsxs(De,{direction:"column",gap:"5px",children:[n.map((c,i)=>e.jsx(Me,{onChange:r=>{t(r)},value:c,name:o,children:e.jsx(C,{fontSize:["13px","16px"],children:c})},i)),e.jsx(L,{mt:1,size:"sm",color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},fontSize:["10px","13px"],name:o,onClick:s,children:"Apply"})]})})]}),oo=()=>{const o=W(),n=()=>{},t=s=>{R(o,"Filter Applied Successfully","success",1e3)};return e.jsxs(ie,{allowMultiple:!0,children:[e.jsx(M,{change:n,apply:t,title:"Gender",item:["Men","Women","Kids"]}),e.jsx(M,{change:n,apply:t,title:"Category",item:["Cloths","Shoes"]}),e.jsx(M,{change:n,apply:t,title:"Size",item:["Small","Medium","Large"]}),e.jsx(M,{change:n,apply:t,title:"Colour",item:["Black","White","Green","Red","Blue"]})]})},no=()=>{const o=J(),n=W(),t=({target:{textContent:s}})=>{switch(R(n,`${s} applied successfully`,"success"),s){case"Price: Low-High":return o(je());case"Price: High-Low":return o(fe());case"Rating: Low-High":return o(ge());case"Rating: High-Low":return o(he());case"Name: A-Z":return o(me());case"Name: Z-A":return o(pe());default:console.log("default")}};return e.jsx(A,{children:e.jsxs(_e,{children:[e.jsx(Te,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],as:L,rightIcon:e.jsx(Fe,{}),children:"Sort By"}),e.jsxs(Ee,{children:[e.jsx(v,{onClick:t,children:"Price: Low-High"}),e.jsx(v,{onClick:t,children:"Price: High-Low"}),e.jsx(v,{onClick:t,children:"Rating: Low-High"}),e.jsx(v,{onClick:t,children:"Rating: High-Low"}),e.jsx(v,{onClick:t,children:"Name: A-Z"}),e.jsx(v,{onClick:t,children:"Name: Z-A"})]})]})})},O=({children:o})=>e.jsx(C,{fontSize:["12px","12px","13px","16px","17px"],color:"gray",children:o}),to=({children:o})=>e.jsx(e.Fragment,{children:e.jsx(C,{fontSize:["15px","20px","17px","20px","20px"],fontWeight:600,my:"6px",children:o})}),so=({title:o,description:n,color:t,rating:s,price:c,size:i,gender:r,img:h,onClick:x})=>e.jsx(e.Fragment,{children:e.jsxs(_,{onClick:x,flexDirection:"column",cursor:"pointer",mb:"10px",children:[e.jsx(A,{overflow:"hidden",children:e.jsx(He,{className:"imgAnimation",src:h[0]})}),e.jsxs(A,{children:[e.jsxs(_,{justifyItems:"center",mt:"10px",children:[e.jsx(C,{fontSize:["13px","15px","17px","17px","18px"],fontWeight:600,children:U(o)}),e.jsx(F,{}),e.jsx(A,{fontSize:["13px","15px","17px","17px","18px"],mr:"3px",mt:"4px",children:e.jsx(Le,{})}),e.jsx(C,{fontSize:["13px","15px","17px","17px","18px"],children:s})]}),e.jsx(O,{children:U(n,20)}),e.jsx(O,{children:i.join(", ")}),e.jsxs(O,{children:[r,", ",t," Colour"]}),e.jsxs(to,{children:["₹",ye(c),".00"]})]})]})});function Po(){const{colorMode:o}=we(),[n,t]=u.useState(!0),{products:s,loading:c,error:i}=Ae(m=>m.product),r=J(),h=W(),x=be(),d=ve(),a=()=>{t(!n),r(ke()),R(h,"Filter Reset Successfully","success")},p=m=>{x(`/description/${m.id}`)};return u.useEffect(()=>{r(Ce())},[]),e.jsxs(e.Fragment,{children:[e.jsxs(_,{direction:["column","column","row","row","row"],h:["100px","100px","60px","60px","60px"],position:"sticky",top:"0px",bg:o==="light"?"white":"#1a202c",zIndex:1,children:[e.jsx(q,{textAlign:"start",children:e.jsxs(C,{w:"100%",ml:["20px","20px","30px","40px","50px"],fontSize:["20px","25px"],fontWeight:500,children:[d.pathname==="sale"?"On Sale Products":d.pathname==="newin"?"New Products":d.pathname==="goingout"?"Going Out Products":"Total Products"," ","[",s.length,"]"]})}),e.jsx(F,{}),e.jsx(q,{children:e.jsxs(_,{gap:["4px"],w:"100%",my:["10px","10px","0px","0px","0px"],px:["8px","8px","20px","20px","20px"],children:[e.jsx(L,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:()=>{t(!n)},rightIcon:e.jsx(eo,{enableBackground:"false",color:"white"}),children:n?"Hide Filter":"Show Filter"}),e.jsx(F,{}),e.jsx(L,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:a,children:"Reset Filter"}),e.jsx(F,{}),e.jsx(no,{})]})})]}),e.jsxs(Q,{gap:["20px","20px","2%","2%","2%"],templateColumns:["100%","100%",n?"32% 66%":"100%",n?"28% 70%":"100%",n?"20% 78%":"100%"],justifyContent:"center",children:[n&&e.jsx(A,{minH:["120px","120px","600px","600px","600px"],maxH:["900px","600px"],position:["none","none","sticky","sticky","sticky"],top:["0px","70px"],overflowY:"scroll",className:"scroll",zIndex:0,mt:["10px","10px","20px","20px","20px"],children:e.jsx(oo,{})}),e.jsx(A,{minH:"400px",children:c?e.jsx(ze,{}):i?e.jsx(Oe,{}):e.jsx(Q,{gap:[2,4],p:["10px","10px","20px","20px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"],children:s==null?void 0:s.map((m,l)=>u.createElement(so,{...m,key:l,onClick:()=>{p(m)}}))})})]})]})}export{Po as default};