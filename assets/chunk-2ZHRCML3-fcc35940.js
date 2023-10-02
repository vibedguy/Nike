import{q as N,t as m,aA as R,a4 as b,w as g,aD as j,a8 as G,h as y,j as p,v as E}from"./index-d1f69ef4.js";var[z,C]=N({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),L=m(function(s,l){const e=R("Input",s),{children:a,className:r,...h}=b(s),d=g("chakra-input__group",r),t={},I=j(a),i=e.field;I.forEach(n=>{var o,u;e&&(i&&n.type.id==="InputLeftElement"&&(t.paddingStart=(o=i.height)!=null?o:i.h),i&&n.type.id==="InputRightElement"&&(t.paddingEnd=(u=i.height)!=null?u:i.h),n.type.id==="InputRightAddon"&&(t.borderEndRadius=0),n.type.id==="InputLeftAddon"&&(t.borderStartRadius=0))});const S=I.map(n=>{var o,u;const v=G({size:((o=n.props)==null?void 0:o.size)||s.size,variant:((u=n.props)==null?void 0:u.variant)||s.variant});return n.type.id!=="Input"?y.cloneElement(n,v):y.cloneElement(n,Object.assign(v,t,n.props))});return p.jsx(E.div,{className:d,ref:l,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...e.group},"data-group":!0,...h,children:p.jsx(z,{value:e,children:S})})});L.displayName="InputGroup";var w=E("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),c=m(function(s,l){var e,a;const{placement:r="left",...h}=s,d=C(),t=d.field,i={[r==="left"?"insetStart":"insetEnd"]:"0",width:(e=t==null?void 0:t.height)!=null?e:t==null?void 0:t.h,height:(a=t==null?void 0:t.height)!=null?a:t==null?void 0:t.h,fontSize:t==null?void 0:t.fontSize,...d.element};return p.jsx(w,{ref:l,__css:i,...h})});c.id="InputElement";c.displayName="InputElement";var _=m(function(s,l){const{className:e,...a}=s,r=g("chakra-input__left-element",e);return p.jsx(c,{ref:l,placement:"left",className:r,...a})});_.id="InputLeftElement";_.displayName="InputLeftElement";var x=m(function(s,l){const{className:e,...a}=s,r=g("chakra-input__right-element",e);return p.jsx(c,{ref:l,placement:"right",className:r,...a})});x.id="InputRightElement";x.displayName="InputRightElement";export{L as I,x as a,_ as b};
