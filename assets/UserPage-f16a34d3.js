import{t as k,j as e,v,w as P,aG as oe,h,az as K,a8 as G,aB as le,q as H,z as R,aH as ie,o as ce,aC as de,aI as ue,aJ as _,B as U,N as xe,L as J,T as x,d as f,R as T,c as O,E as he,M as pe,G as fe,H as me,J as be,K as je,a as q,k as Q,aK as ye,s as L,Z as S,i as N,a2 as $,D,I as ge,F as C}from"./index-e0d390c3.js";import{C as Ce}from"./chunk-5MKCW436-99a92f12.js";import{u as ve,A as Se}from"./chunk-V7PAE35Z-7f472d5a.js";import{M as we,B as F,a as ke,S as V}from"./chunk-3RSXBRAN-e645820e.js";import{H as Pe}from"./chunk-7OLJDQMT-0fb184d6.js";import{G as W}from"./chunk-JARCRF6W-b60bee8a.js";import{F as w}from"./chunk-7COXQURZ-19011509.js";import{u as Te}from"./chunk-7D6N5TE5-40b52e03.js";import{E as Ae}from"./Error-7f9a0b02.js";import{L as De}from"./Loading-8b2d9bfc.js";import{A as _e,a as Ee,b as Ne,c as Ie,d as Me}from"./chunk-UIZMWHSN-9f3f4425.js";import{d as Be}from"./dateFormatorFunction-b8d8a4b9.js";import{u as ze}from"./index-25dd978c.js";import"./index-8d968404.js";var Fe={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},X=k(function(t,n){const{placement:r="bottom-end",className:a,...l}=t,i=ve(),c={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...Fe[r],...i.badge};return e.jsx(v.div,{ref:n,...l,className:P("chakra-avatar__badge",a),__css:c})});X.displayName="AvatarBadge";var Re=function(){var s=document.getSelection();if(!s.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<s.rangeCount;r++)n.push(s.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return s.removeAllRanges(),function(){s.type==="Caret"&&s.removeAllRanges(),s.rangeCount||n.forEach(function(a){s.addRange(a)}),t&&t.focus()}},Le=Re,Y={"text/plain":"Text","text/html":"Url",default:"Text"},We="Copy to clipboard: #{key}, Enter";function He(s){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return s.replace(/#{\s*key\s*}/g,t)}function Ue(s,t){var n,r,a,l,i,o,c=!1;t||(t={}),n=t.debug||!1;try{a=Le(),l=document.createRange(),i=document.getSelection(),o=document.createElement("span"),o.textContent=s,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(p){if(p.stopPropagation(),t.format)if(p.preventDefault(),typeof p.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=Y[t.format]||Y.default;window.clipboardData.setData(d,s)}else p.clipboardData.clearData(),p.clipboardData.setData(t.format,s);t.onCopy&&(p.preventDefault(),t.onCopy(p.clipboardData))}),document.body.appendChild(o),l.selectNodeContents(o),i.addRange(l);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");c=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",s),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),r=He("message"in t?t.message:We),window.prompt(r,s)}}finally{i&&(typeof i.removeRange=="function"?i.removeRange(l):i.removeAllRanges()),o&&document.body.removeChild(o),a()}return c}var Oe=Ue;const $e=oe(Oe);function Ve(s,t={}){const[n,r]=h.useState(!1),[a,l]=h.useState(s);h.useEffect(()=>l(s),[s]);const{timeout:i=1500,...o}=typeof t=="number"?{timeout:t}:t,c=h.useCallback(()=>{const u=$e(a,o);r(u)},[a,o]);return h.useEffect(()=>{let u=null;return n&&(u=window.setTimeout(()=>{r(!1)},i)),()=>{u&&window.clearTimeout(u)}},[i,n]),{value:a,setValue:l,onCopy:c,hasCopied:n}}var Z=k(function(t,n){const r=K("Switch",t),{spacing:a="0.5rem",children:l,...i}=G(t),{getIndicatorProps:o,getInputProps:c,getCheckboxProps:u,getRootProps:p,getLabelProps:d}=Te(i),m=h.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...r.container}),[r.container]),b=h.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...r.track}),[r.track]),y=h.useMemo(()=>({userSelect:"none",marginStart:a,...r.label}),[a,r.label]);return e.jsxs(v.label,{...p(),className:P("chakra-switch",t.className),__css:m,children:[e.jsx("input",{className:"chakra-switch__input",...c({},n)}),e.jsx(v.span,{...u(),className:"chakra-switch__track",__css:b,children:e.jsx(v.span,{__css:r.thumb,className:"chakra-switch__thumb",...o()})}),l&&e.jsx(v.span,{className:"chakra-switch__label",...d(),__css:y,children:l})]})});Z.displayName="Switch";var[Ye,Ke,Ge,Je]=le();function qe(s){var t;const{defaultIndex:n,onChange:r,index:a,isManual:l,isLazy:i,lazyBehavior:o="unmount",orientation:c="horizontal",direction:u="ltr",...p}=s,[d,m]=h.useState(n??0),[b,y]=ze({defaultValue:n??0,value:a,onChange:r});h.useEffect(()=>{a!=null&&m(a)},[a]);const A=Ge(),z=h.useId();return{id:`tabs-${(t=s.id)!=null?t:z}`,selectedIndex:b,focusedIndex:d,setSelectedIndex:y,setFocusedIndex:m,isManual:l,isLazy:i,lazyBehavior:o,orientation:c,descendants:A,direction:u,htmlProps:p}}var[Qe,M]=H({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function Xe(s){const{focusedIndex:t,orientation:n,direction:r}=M(),a=Ke(),l=h.useCallback(i=>{const o=()=>{var j;const g=a.nextEnabled(t);g&&((j=g.node)==null||j.focus())},c=()=>{var j;const g=a.prevEnabled(t);g&&((j=g.node)==null||j.focus())},u=()=>{var j;const g=a.firstEnabled();g&&((j=g.node)==null||j.focus())},p=()=>{var j;const g=a.lastEnabled();g&&((j=g.node)==null||j.focus())},d=n==="horizontal",m=n==="vertical",b=i.key,y=r==="ltr"?"ArrowLeft":"ArrowRight",A=r==="ltr"?"ArrowRight":"ArrowLeft",E={[y]:()=>d&&c(),[A]:()=>d&&o(),ArrowDown:()=>m&&o(),ArrowUp:()=>m&&c(),Home:u,End:p}[b];E&&(i.preventDefault(),E(i))},[a,t,n,r]);return{...s,role:"tablist","aria-orientation":n,onKeyDown:R(s.onKeyDown,l)}}function Ze(s){const{isDisabled:t=!1,isFocusable:n=!1,...r}=s,{setSelectedIndex:a,isManual:l,id:i,setFocusedIndex:o,selectedIndex:c}=M(),{index:u,register:p}=Je({disabled:t&&!n}),d=u===c,m=()=>{a(u)},b=()=>{o(u),!l&&!(t&&n)&&a(u)},y=ie({...r,ref:ce(p,s.ref),isDisabled:t,isFocusable:n,onClick:R(s.onClick,m)}),A="button";return{...y,id:ee(i,u),role:"tab",tabIndex:d?0:-1,type:A,"aria-selected":d,"aria-controls":te(i,u),onFocus:t?void 0:R(s.onFocus,b)}}var[et,tt]=H({});function st(s){const t=M(),{id:n,selectedIndex:r}=t,l=de(s.children).map((i,o)=>h.createElement(et,{key:o,value:{isSelected:o===r,id:te(n,o),tabId:ee(n,o),selectedIndex:r}},i));return{...s,children:l}}function nt(s){const{children:t,...n}=s,{isLazy:r,lazyBehavior:a}=M(),{isSelected:l,id:i,tabId:o}=tt(),c=h.useRef(!1);l&&(c.current=!0);const u=ue({wasSelected:c.current,isSelected:l,enabled:r,mode:a});return{tabIndex:0,...n,children:u?t:null,role:"tabpanel","aria-labelledby":o,hidden:!l,id:i}}function ee(s,t){return`${s}--tab-${t}`}function te(s,t){return`${s}--tabpanel-${t}`}var[at,B]=H({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),se=k(function(t,n){const r=K("Tabs",t),{children:a,className:l,...i}=G(t),{htmlProps:o,descendants:c,...u}=qe(i),p=h.useMemo(()=>u,[u]),{isFitted:d,...m}=o;return e.jsx(Ye,{value:c,children:e.jsx(Qe,{value:p,children:e.jsx(at,{value:r,children:e.jsx(v.div,{className:P("chakra-tabs",l),ref:n,...m,__css:r.root,children:a})})})})});se.displayName="Tabs";var ne=k(function(t,n){const r=Xe({...t,ref:n}),l={display:"flex",...B().tablist};return e.jsx(v.div,{...r,className:P("chakra-tabs__tablist",t.className),__css:l})});ne.displayName="TabList";var I=k(function(t,n){const r=nt({...t,ref:n}),a=B();return e.jsx(v.div,{outline:"0",...r,className:P("chakra-tabs__tab-panel",t.className),__css:a.tabpanel})});I.displayName="TabPanel";var ae=k(function(t,n){const r=st(t),a=B();return e.jsx(v.div,{...r,width:"100%",ref:n,className:P("chakra-tabs__tab-panels",t.className),__css:a.tabpanels})});ae.displayName="TabPanels";var re=k(function(t,n){const r=B(),a=Ze({...t,ref:n}),l={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...r.tab};return e.jsx(v.button,{...a,className:P("chakra-tabs__tab",t.className),__css:l})});re.displayName="Tab";function rt({onProfilePicSubmit:s}){const t="https://apple.com/cook",{hasCopied:n,onCopy:r}=Ve(t),a=h.useRef(null);return h.useEffect(()=>{n&&(a.current.focus(),a.current.select())}),e.jsx(_,{py:8,px:5,spacing:3,children:e.jsx(U,{w:"full",variant:"outline",onClick:s,children:"Update Profile"})})}const ot=[{id:1,name:"Total Orders Placed",value:32,color:"yellow"},{id:2,name:"Ongoing Deliveries",value:6,color:"green"},{id:3,name:"Products Favorited",value:10,color:"cadet"}];function lt(){const{colorMode:s,toggleColorMode:t}=xe();return e.jsxs(_,{as:"ul",spacing:0,listStyleType:"none",children:[e.jsxs(J,{w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{fontWeight:"bold",children:s==="dark"?"Dark Mode":"Light Mode"}),e.jsx("div",{className:"checkbox-wrapper-25",children:e.jsx("input",{type:"checkbox",checked:s==="dark",onChange:t})})]}),ot.map(n=>e.jsxs(f,{as:"li",w:"full",py:3,px:5,d:"flex",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(x,{color:T("brand.dark","brand.light"),children:n.name}),e.jsx(x,{color:`brand.${n.color}`,fontWeight:"bold",children:n.value})]},n.id))]})}function it({selectedProfile:s,setSelectedProfile:t}){const[n,r]=h.useState(null),a=O(d=>d.auth.user)||"Test",l=h.useRef(null),{isOpen:i,onOpen:o,onClose:c}=he(),u=()=>{l.current.click()},p=d=>{const m=["image/png","image/jpeg","image/jpg"],b=d.target.files[0];if(b&&m.includes(b.type)){t(b);let y=new FileReader;return y.onloadend=()=>r(y.result),y.readAsDataURL(b)}o()};return e.jsxs(_,{spacing:3,py:5,borderBottomWidth:1,borderColor:"brand.light",children:[e.jsx(Se,{size:"2xl",name:a.firstName,cursor:"pointer",onClick:u,src:a.profilePic?a.profilePic:n,children:e.jsx(X,{bg:"brand.blue",boxSize:"1em",children:e.jsx("svg",{width:"0.4em",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"})})})}),e.jsx("input",{hidden:!0,type:"file",ref:l,onChange:p}),e.jsxs(pe,{isOpen:i,onClose:c,children:[e.jsx(fe,{}),e.jsxs(we,{children:[e.jsx(me,{children:"Something went wrong"}),e.jsx(be,{}),e.jsxs(je,{children:[e.jsx(x,{children:"File not supported!"}),e.jsxs(J,{mt:1,children:[e.jsx(x,{color:"brand.cadet",fontSize:"sm",children:"Supported types:"}),e.jsx(F,{colorScheme:"green",children:"PNG"}),e.jsx(F,{colorScheme:"green",children:"JPG"}),e.jsx(F,{colorScheme:"green",children:"JPEG"})]})]}),e.jsx(ke,{children:e.jsx(U,{onClick:c,children:"Close"})})]})]}),e.jsxs(_,{spacing:1,children:[e.jsx(Pe,{as:"h3",fontSize:"xl",color:T("brand.dark","brand.light"),children:"Venketesh Rushi"}),e.jsx(x,{color:T("brand.gray","brand.light"),fontSize:"sm",children:"Pune, India"})]})]})}function ct(){const[s,t]=h.useState(null),n=O(l=>l.auth.token),r=q(),a=async()=>{const l=new FormData;l.append("imgCollection",s);try{const i=await Q.post("user/adduserimage",l,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${n}`}});console.log(i.data.user),ye("user",i.data.user),L(r,"Profile Piture Upload Succsfully.","success")}catch(i){console.log(i),L(r,"Something Went Wrong!","error")}};return e.jsxs(f,{as:"aside",flex:1,mr:{base:0,md:5},mb:{base:5,md:0},rounded:"md",borderWidth:1,borderColor:"brand.light",style:{transform:"translateY(-100px)"},bg:T("gray.50","gray.800"),children:[e.jsx(it,{selectedProfile:s,setSelectedProfile:t}),e.jsx(lt,{}),e.jsx(rt,{onProfilePicSubmit:a})]})}function dt(){return e.jsxs(W,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:6,children:[e.jsxs(S,{id:"firstName",children:[e.jsx(w,{children:"First Name"}),e.jsx(N,{focusBorderColor:"brand.blue",type:"text",placeholder:"Enter Your First Name"})]}),e.jsxs(S,{id:"lastName",children:[e.jsx(w,{children:"Last Name"}),e.jsx(N,{focusBorderColor:"brand.blue",type:"text",placeholder:"Enter Your Last Name"})]}),e.jsxs(S,{id:"phoneNumber",children:[e.jsx(w,{children:"Phone Number"}),e.jsx(N,{focusBorderColor:"brand.blue",type:"tel",placeholder:"Enter Your Phone Number"})]}),e.jsxs(S,{id:"emailAddress",children:[e.jsx(w,{children:"Email Address"}),e.jsx(N,{focusBorderColor:"brand.blue",type:"email",placeholder:"Enter Your Email"})]}),e.jsxs(S,{id:"city",children:[e.jsx(w,{children:"City"}),e.jsxs(V,{focusBorderColor:"brand.blue",placeholder:"Select city",children:[e.jsx("option",{value:"pune",selected:!0,children:"Pune"}),e.jsx("option",{value:"mumbai",children:"Mumbai"}),e.jsx("option",{value:"delhi",children:"New Delhi"}),e.jsx("option",{value:"bangalore",children:"Bangalore"}),e.jsx("option",{value:"chennai",children:"Chennai"}),e.jsx("option",{value:"kolkata",children:"Kolkata"}),e.jsx("option",{value:"hyderabad",children:"Hyderabad"})]})]}),e.jsxs(S,{id:"country",children:[e.jsx(w,{children:"Country"}),e.jsx(V,{focusBorderColor:"brand.blue",placeholder:"Select country",children:e.jsx("option",{value:"india",selected:!0,children:"India"})})]})]})}function ut(){const s=q(),t=()=>{L(s,"This functionality is under development","success")};return e.jsx(f,{mt:5,py:5,px:8,borderTopWidth:1,borderColor:"brand.light",children:e.jsx(U,{color:"white",bgColor:"rgb(0,0,0)",_hover:{boxShadow:"xl"},onClick:t,children:"Update"})})}function xt(){return e.jsxs(S,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(w,{htmlFor:"notificationEmails",mb:0,cursor:"pointer",userSelect:"none",children:"Receive notification emails"}),e.jsx(Z,{id:"notificationEmails"})]})}const ht=({date:s,time:t,children:n})=>e.jsxs(_e,{width:"100%",children:[e.jsx("h2",{children:e.jsxs(Ee,{children:[e.jsxs(f,{flex:"1",textAlign:"left",children:["Order on ",s," at ",t]}),e.jsx(Ne,{})]})}),e.jsx(Ie,{pb:4,children:n})]});function pt(){const[s,t]=h.useState(!1),[n,r]=h.useState(!1),[a,l]=h.useState([]),i=O(c=>c.auth.token);h.useEffect(()=>{o()},[]);async function o(){try{t(!0);let{data:c}=await Q.get("/order/getorders",{headers:{Authorization:`Bearer ${i}`}});l(c),t(!1)}catch(c){console.log(c),t(!1),r(!0)}}return a.length===0?e.jsx(f,{children:e.jsx($,{h:"40vh",children:e.jsx(x,{fontSize:"20px",children:"Your orders will be displayed here."})})}):s?e.jsx(De,{}):n?e.jsx(Ae,{}):e.jsx(Me,{allowMultiple:!0,width:"100%",children:a==null?void 0:a.map(c=>{const{date:u,time:p}=Be(c.createdAt);return e.jsxs(ht,{date:u,time:p,children:[" ",e.jsx(f,{children:e.jsxs(W,{templateColumns:["100%","100%","100%","50% 50%","50% 50%"],gap:["20px","20px","4%","2%","4%"],children:[" ",e.jsxs(f,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Ordered Items"}),e.jsx(D,{mb:"20px"}),c.cartProducts.map(d=>e.jsxs(W,{templateColumns:"100px 60%",p:"5px",children:[e.jsx(f,{w:"100px",overflow:"hidden",children:e.jsx(ge,{src:d.img[0]})}),e.jsx($,{children:e.jsxs(f,{textAlign:"left",px:"20px",w:"100%",children:[e.jsx(x,{fontWeight:600,children:d.title}),e.jsxs(x,{children:["Price: ₹ ",d.price]}),e.jsxs(x,{children:["Quantity: ",d.quantity]})]})})]},d.price))]}),c.ShippingDetails.map(d=>e.jsxs(f,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Shipping Address"}),e.jsx(D,{mb:"20px"}),e.jsxs(C,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Full Name"}),e.jsx(x,{children:d.name})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Email"}),e.jsx(x,{children:d.email})]}),e.jsx(D,{my:"10px"}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Address"}),e.jsx(x,{children:d.addressLine})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"City"}),e.jsx(x,{children:d.locality})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"State"}),e.jsx(x,{children:d.state})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Country"}),e.jsx(x,{children:d.country})]}),e.jsx(D,{my:"10px"})]})]})),e.jsxs(f,{py:"15px",px:"25px",children:[e.jsx(x,{textAlign:"left",fontSize:"20px",fontWeight:600,children:"Summary"}),e.jsx(D,{}),e.jsxs(C,{flexDirection:"column",gap:"5px",my:"20px",fontSize:"18px",children:[e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Quantity"}),e.jsx(x,{children:c.quantity})]}),e.jsxs(C,{justifyContent:"space-between",children:[e.jsx(x,{children:"Total"}),e.jsx(x,{children:c.total})]})]})]})]})},c.id)]})})})}function ft(){return e.jsx(_,{overflowY:"auto",minH:"355px",maxH:"455px",children:e.jsx(pt,{})})}function mt(){const s=["Account Settings","Orders Placed","Notifications"];return e.jsxs(f,{as:"main",flex:3,d:"flex",flexDir:"column",justifyContent:"space-between",pt:5,rounded:"md",borderWidth:1,borderColor:"gray.200",style:{transform:"translateY(-100px)"},bg:T("gray.50","gray.800"),children:[e.jsxs(se,{children:[e.jsx(ne,{px:5,children:s.map(t=>e.jsx(re,{mx:3,px:0,py:3,fontWeight:"semibold",color:"brand.cadet",borderBottomWidth:1,_active:{bg:"transparent"},_selected:{color:T("brand.dark","white"),borderColor:"brand.blue"},children:t},t))}),e.jsxs(ae,{px:3,mt:5,children:[e.jsx(I,{children:e.jsx(dt,{})}),e.jsx(I,{children:e.jsx(ft,{})}),e.jsx(I,{children:e.jsx(xt,{})})]})]}),e.jsx(ut,{})]})}function Et(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{marginTop:["70px","70px","70px","70px","70px"]}),e.jsxs(Ce,{display:{base:"block",md:"flex"},maxW:"container.xl",py:10,children:[e.jsx(ct,{}),e.jsx(mt,{})]}),e.jsx(f,{marginTop:["-90px","-90px","-70px","-70px","-70px"]})]})}export{Et as default};
