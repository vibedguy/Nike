import{g as le,c as o,j as f,k as x,Z as z,a2 as W,$ as de,p as n,q as u,a6 as X,h as ue,i as fe,o as he,a1 as me,f as ke}from"./index-51c90892.js";import{u as be}from"./chunk-XRMX4GAI-33aaf54c.js";import{m as te}from"./chunk-UVUR7MCU-03f94adf.js";import{t as ve}from"./index-8d968404.js";var[Ke,Ce]=le({name:"CheckboxGroupContext",strict:!1});function pe(s){const[l,t]=o.useState(s),[a,k]=o.useState(!1);return s!==l&&(k(!0),t(s)),a}function ye(s){return f.jsx(x.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...s,children:f.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function xe(s){return f.jsx(x.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...s,children:f.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function ge(s){const{isIndeterminate:l,isChecked:t,...a}=s,k=l?xe:ye;return t||l?f.jsx(x.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:f.jsx(k,{...a})}):null}var Ie={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};function Se(s,l=[]){const t=Object.assign({},s);for(const a of l)a in t&&delete t[a];return t}function Pe(s={}){const l=be(s),{isDisabled:t,isReadOnly:a,isRequired:k,isInvalid:r,id:C,onBlur:U,onFocus:q,"aria-describedby":g}=l,{defaultChecked:I,isChecked:S,isFocusable:O,onChange:H,isIndeterminate:d,name:P,value:R,tabIndex:B=void 0,"aria-label":D,"aria-labelledby":w,"aria-invalid":b,...$}=s,_=Se($,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),j=z(H),F=z(U),A=z(q),[p,G]=o.useState(!1),[v,M]=o.useState(!1),[E,T]=o.useState(!1),[L,y]=o.useState(!1);o.useEffect(()=>ve(G),[]);const h=o.useRef(null),[Z,ae]=o.useState(!0),[ne,N]=o.useState(!!I),V=S!==void 0,i=V?S:ne,J=o.useCallback(e=>{if(a||t){e.preventDefault();return}V||N(i?e.target.checked:d?!0:e.target.checked),j==null||j(e)},[a,t,i,V,d,j]);W(()=>{h.current&&(h.current.indeterminate=!!d)},[d]),de(()=>{t&&M(!1)},[t,M]),W(()=>{const e=h.current;if(!(e!=null&&e.form))return;const c=()=>{N(!!I)};return e.form.addEventListener("reset",c),()=>{var m;return(m=e.form)==null?void 0:m.removeEventListener("reset",c)}},[]);const Q=t&&!O,Y=o.useCallback(e=>{e.key===" "&&y(!0)},[y]),ee=o.useCallback(e=>{e.key===" "&&y(!1)},[y]);W(()=>{if(!h.current)return;h.current.checked!==i&&N(h.current.checked)},[h.current]);const oe=o.useCallback((e={},c=null)=>{const m=K=>{v&&K.preventDefault(),y(!0)};return{...e,ref:c,"data-active":n(L),"data-hover":n(E),"data-checked":n(i),"data-focus":n(v),"data-focus-visible":n(v&&p),"data-indeterminate":n(d),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a),"aria-hidden":!0,onMouseDown:u(e.onMouseDown,m),onMouseUp:u(e.onMouseUp,()=>y(!1)),onMouseEnter:u(e.onMouseEnter,()=>T(!0)),onMouseLeave:u(e.onMouseLeave,()=>T(!1))}},[L,i,t,v,p,E,d,r,a]),se=o.useCallback((e={},c=null)=>({...e,ref:c,"data-active":n(L),"data-hover":n(E),"data-checked":n(i),"data-focus":n(v),"data-focus-visible":n(v&&p),"data-indeterminate":n(d),"data-disabled":n(t),"data-invalid":n(r),"data-readonly":n(a)}),[L,i,t,v,p,E,d,r,a]),re=o.useCallback((e={},c=null)=>({..._,...e,ref:te(c,m=>{m&&ae(m.tagName==="LABEL")}),onClick:u(e.onClick,()=>{var m;Z||((m=h.current)==null||m.click(),requestAnimationFrame(()=>{var K;(K=h.current)==null||K.focus({preventScroll:!0})}))}),"data-disabled":n(t),"data-checked":n(i),"data-invalid":n(r)}),[_,t,i,r,Z]),ie=o.useCallback((e={},c=null)=>({...e,ref:te(h,c),type:"checkbox",name:P,value:R,id:C,tabIndex:B,onChange:u(e.onChange,J),onBlur:u(e.onBlur,F,()=>M(!1)),onFocus:u(e.onFocus,A,()=>M(!0)),onKeyDown:u(e.onKeyDown,Y),onKeyUp:u(e.onKeyUp,ee),required:k,checked:i,disabled:Q,readOnly:a,"aria-label":D,"aria-labelledby":w,"aria-invalid":b?!!b:r,"aria-describedby":g,"aria-disabled":t,style:Ie}),[P,R,C,J,F,A,Y,ee,k,i,Q,a,D,w,b,r,g,t,B]),ce=o.useCallback((e={},c=null)=>({...e,ref:c,onMouseDown:u(e.onMouseDown,De),"data-disabled":n(t),"data-checked":n(i),"data-invalid":n(r)}),[i,t,r]);return{state:{isInvalid:r,isFocused:v,isChecked:i,isActive:L,isHovered:E,isIndeterminate:d,isDisabled:t,isReadOnly:a,isRequired:k},getRootProps:re,getCheckboxProps:oe,getIndicatorProps:se,getInputProps:ie,getLabelProps:ce,htmlProps:_}}function De(s){s.preventDefault(),s.stopPropagation()}var we={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},_e={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},je=X({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),Ae=X({from:{opacity:0},to:{opacity:1}}),Ee=X({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Le=ue(function(l,t){const a=Ce(),k={...a,...l},r=fe("Checkbox",k),C=he(l),{spacing:U="0.5rem",className:q,children:g,iconColor:I,iconSize:S,icon:O=f.jsx(ge,{}),isChecked:H,isDisabled:d=a==null?void 0:a.isDisabled,onChange:P,inputProps:R,...B}=C;let D=H;a!=null&&a.value&&C.value&&(D=a.value.includes(C.value));let w=P;a!=null&&a.onChange&&C.value&&(w=me(a.onChange,P));const{state:b,getInputProps:$,getCheckboxProps:_,getLabelProps:j,getRootProps:F}=Pe({...B,isDisabled:d,isChecked:D,onChange:w}),A=pe(b.isChecked),p=o.useMemo(()=>({animation:A?b.isIndeterminate?`${Ae} 20ms linear, ${Ee} 200ms linear`:`${je} 200ms linear`:void 0,fontSize:S,color:I,...r.icon}),[I,S,A,b.isIndeterminate,r.icon]),G=o.cloneElement(O,{__css:p,isIndeterminate:b.isIndeterminate,isChecked:b.isChecked});return f.jsxs(x.label,{__css:{..._e,...r.container},className:ke("chakra-checkbox",q),...F(),children:[f.jsx("input",{className:"chakra-checkbox__input",...$(R,t)}),f.jsx(x.span,{__css:{...we,...r.control},className:"chakra-checkbox__control",..._(),children:G}),g&&f.jsx(x.span,{className:"chakra-checkbox__label",...j(),__css:{marginStart:U,...r.label},children:g})]})});Le.displayName="Checkbox";export{Le as C};
