import{q as B,h,j as t,v as o,ab as m,t as E,aA as G,a4 as R,aB as $,w as z}from"./index-d1f69ef4.js";import{u as M}from"./chunk-7D6N5TE5-3bf9e472.js";var[Y,W]=B({name:"CheckboxGroupContext",strict:!1});function X(s){const[n,a]=h.useState(s),[e,i]=h.useState(!1);return s!==n&&(i(!0),a(s)),e}function q(s){return t.jsx(o.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...s,children:t.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function L(s){return t.jsx(o.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...s,children:t.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function O(s){const{isIndeterminate:n,isChecked:a,...e}=s,i=n?L:q;return a||n?t.jsx(o.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:t.jsx(i,{...e})}):null}var T={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},F={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},H=m({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),J=m({from:{opacity:0},to:{opacity:1}}),K=m({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Q=E(function(n,a){const e=W(),i={...e,...n},r=G("Checkbox",i),l=R(n),{spacing:v="0.5rem",className:y,children:u,iconColor:d,iconSize:x,icon:g=t.jsx(O,{}),isChecked:b,isDisabled:I=e==null?void 0:e.isDisabled,onChange:p,inputProps:j,...S}=l;let k=b;e!=null&&e.value&&l.value&&(k=e.value.includes(l.value));let f=p;e!=null&&e.onChange&&l.value&&(f=$(e.onChange,p));const{state:c,getInputProps:_,getCheckboxProps:P,getLabelProps:A,getRootProps:w}=M({...S,isDisabled:I,isChecked:k,onChange:f}),C=X(c.isChecked),N=h.useMemo(()=>({animation:C?c.isIndeterminate?`${J} 20ms linear, ${K} 200ms linear`:`${H} 200ms linear`:void 0,fontSize:x,color:d,...r.icon}),[d,x,C,c.isIndeterminate,r.icon]),D=h.cloneElement(g,{__css:N,isIndeterminate:c.isIndeterminate,isChecked:c.isChecked});return t.jsxs(o.label,{__css:{...F,...r.container},className:z("chakra-checkbox",y),...w(),children:[t.jsx("input",{className:"chakra-checkbox__input",..._(j,a)}),t.jsx(o.span,{__css:{...T,...r.control},className:"chakra-checkbox__control",...P(),children:D}),u&&t.jsx(o.span,{className:"chakra-checkbox__label",...A(),__css:{marginStart:v,...r.label},children:u})]})});Q.displayName="Checkbox";export{Q as C};
