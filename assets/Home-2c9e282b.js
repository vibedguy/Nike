import{w as A,a6 as O,j as r,x as F,a7 as B,h as y,a8 as G,a9 as N,aa as V,ab as L,ac as U,y as Y,I as J,T as l,d as t,c as q,b as P,u as K,ad as M,P as S,B as C}from"./index-dee9e6eb.js";import{G as _}from"./chunk-JARCRF6W-d994450c.js";import{E as Q}from"./Error-e9b5a926.js";import{H as X}from"./chunk-7OLJDQMT-bf1dfb28.js";function T(i){return B(i,s=>s==="auto"?"auto":`span ${s}/span ${s}`)}var m=A(function(s,e){const{area:n,colSpan:a,colStart:x,colEnd:p,rowEnd:d,rowSpan:u,rowStart:f,...b}=s,h=O({gridArea:n,gridColumn:T(a),gridRow:T(u),gridColumnStart:x,gridColumnEnd:p,gridRowStart:f,gridRowEnd:d});return r.jsx(F.div,{ref:e,__css:h,...b})});m.displayName="GridItem";function Z(){const i=y.useRef(!0);return y.useEffect(()=>{i.current=!1},[]),i.current}function D(i){const s=y.useRef();return y.useEffect(()=>{s.current=i},[i]),s.current}var H=F("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),E=G("skeleton-start-color"),I=G("skeleton-end-color"),ee=N({from:{opacity:0},to:{opacity:1}}),re=N({from:{borderColor:E.reference,background:E.reference},to:{borderColor:I.reference,background:I.reference}}),w=A((i,s)=>{const e={...i,fadeDuration:typeof i.fadeDuration=="number"?i.fadeDuration:.4,speed:typeof i.speed=="number"?i.speed:.8},n=V("Skeleton",e),a=Z(),{startColor:x="",endColor:p="",isLoaded:d,fadeDuration:u,speed:f,className:b,fitContent:h,...j}=L(e),[g,k]=U("colors",[x,p]),v=D(d),c=Y("chakra-skeleton",b),W={...g&&{[E.variable]:g},...k&&{[I.variable]:k}};if(d){const z=a||v?"none":`${ee} ${u}s`;return r.jsx(F.div,{ref:s,className:c,__css:{animation:z},...j})}return r.jsx(H,{ref:s,className:c,...j,__css:{width:h?"fit-content":void 0,...n,...W,_dark:{...n._dark,...W},animation:`${f}s linear infinite alternate ${re}`}})});w.displayName="Skeleton";const o=({source:i,onClick:s})=>r.jsx(m,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",onClick:s,children:r.jsx(J,{className:"imgAnimation",src:i})}),R=({children:i})=>r.jsx(l,{fontWeight:600,letterSpacing:2,fontFamily:"'Anton', sans-serif",fontSize:["25px","30px","40px","45px","50px"],mb:3,children:i});function $(){return r.jsx(t,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],children:r.jsxs(_,{mt:3,gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(m,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(m,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(m,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})}),r.jsx(m,{cursor:"pointer",borderRadius:"15px",overflow:"hidden",aspectRatio:4/5,children:r.jsx(w,{height:"100%",width:"100%"})})]})})}const ie=()=>{var a,x,p,d,u,f,b,h,j,g,k,v;const{loading:i,error:s,clothDataHomepage:e}=q(c=>c.home),n=P();return i?r.jsxs(r.Fragment,{children:[r.jsx($,{}),r.jsx($,{}),r.jsx($,{})]}):s||!e||[...Object.keys(e)].length<=0?r.jsx(Q,{}):r.jsxs(r.Fragment,{children:[r.jsxs(t,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(R,{children:"Nike Unleash Your Potential"}),r.jsxs(_,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(a=e==null?void 0:e.a[0])==null?void 0:a.image,onClick:()=>{n(`/description/${e==null?void 0:e.a[0].id}`)}}),r.jsx(o,{source:(x=e==null?void 0:e.a[1])==null?void 0:x.image,onClick:()=>{n(`/description/${e==null?void 0:e.a[1].id}`)}}),r.jsx(o,{source:(p=e==null?void 0:e.a[2])==null?void 0:p.image,onClick:()=>{n(`/description/${e==null?void 0:e.a[2].id}`)}}),r.jsx(o,{source:(d=e==null?void 0:e.a[3])==null?void 0:d.image,onClick:()=>{n(`/description/${e==null?void 0:e.a[3].id}`)}})]})]}),r.jsxs(t,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(R,{children:"Elevate Your Workout"}),r.jsxs(_,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(u=e==null?void 0:e.b[0])==null?void 0:u.image,onClick:()=>{n(`/description/${e.b[0].id}`)}}),r.jsx(o,{source:(f=e==null?void 0:e.b[1])==null?void 0:f.image,onClick:()=>{n(`/description/${e==null?void 0:e.b[1].id}`)}}),r.jsx(o,{source:(b=e==null?void 0:e.b[2])==null?void 0:b.image,onClick:()=>{n(`/description/${e==null?void 0:e.b[2].id}`)}}),r.jsx(o,{source:(h=e==null?void 0:e.b[3])==null?void 0:h.image,onClick:()=>{n(`/description/${e==null?void 0:e.b[3].id}`)}})]})]}),r.jsxs(t,{m:"60px auto 60px",w:["94%","94%","94%","94%","80%"],textAlign:"center",fontWeight:"bolder",children:[r.jsx(R,{children:"Gear Up and Just Do It!"}),r.jsxs(_,{gap:["10px","10px","10px","10px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)"],children:[r.jsx(o,{source:(j=e==null?void 0:e.c[0])==null?void 0:j.image,onClick:()=>{n(`/description/${e==null?void 0:e.c[0].id}`)}}),r.jsx(o,{source:(g=e==null?void 0:e.c[1])==null?void 0:g.image,onClick:()=>{n(`/description/${e==null?void 0:e.c[1].id}`)}}),r.jsx(o,{source:(k=e==null?void 0:e.c[2])==null?void 0:k.image,onClick:()=>{var c;n(`/description/${(c=e==null?void 0:e.c[2])==null?void 0:c.id}`)}}),r.jsx(o,{source:(v=e==null?void 0:e.c[3])==null?void 0:v.image,onClick:()=>{n(`/description/${e==null?void 0:e.c[3].id}`)}})]})]})]})};function de(){const i=P(),s=K();y.useEffect(()=>{e()},[]);async function e(){try{const n=await s(M()).unwrap()}catch(n){console.log(n)}}return r.jsxs(t,{width:"100%",children:[r.jsxs(t,{width:"89%",m:"auto",display:"flex",flexDirection:"column",alignItems:["left","left","left","center"],justifyContent:"center",mt:7,mb:["25px","30px","33px","43px","56px"],textAlign:["left","left","left","center"],children:[r.jsxs(t,{children:[r.jsx(X,{fontSize:["40px","45px","50px","60px","65px"],fontFamily:"heading",children:"FEEL IT TO GET IT"}),r.jsx(l,{children:"UP TO 70% OFF EVERYTHING!"})]}),r.jsxs(S,{width:["100%","100%","80%","80%","70%"],align:"center",justifyContent:["flex-start","flex-start","flex-start","space-around","space-around"],mt:[3,3,5,10,10],gap:10,children:[r.jsx(C,{width:["100%","50%","35%"],sx:{background:"rgba(0, 0, 0, 0.78)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(0, 0, 0, 0.71)",backdropFilter:"blur(4.4px)",WebkitBackdropFilter:"blur(4.4px)"},color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",_hover:{bgColor:"black"},fontWeight:"bolder",onClick:()=>i("/sale"),children:"SHOP NOW"}),r.jsx(C,{width:["100%","50%","35%"],sx:{background:"rgba(0, 0, 0, 0.78)",borderRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",border:"1px solid rgba(0, 0, 0, 0.71)",backdropFilter:"blur(4.4px)",WebkitBackdropFilter:"blur(4.4px)"},color:"white",p:"6px 20px",borderRadius:30,alignItems:"center",fontWeight:"bolder",_hover:{bgColor:"black"},onClick:()=>i("/contactus"),children:"CONTACT US!"})]})]}),r.jsx(l,{width:"89%",fontSize:"25px",textAlign:"left",fontWeight:"bolder",m:"auto",marginBottom:3,children:"Featuerd"}),r.jsxs(t,{display:"flex",flexDirection:["column","column","row","row"],alignItems:"flex-start",justifyContent:"space-between",width:"90%",m:"auto",maxHeight:"max-content",children:[r.jsx(t,{background:"url(https://i1.adis.ws/i/boohooamplience/bmm40185_bright%20pink_xl/bright-pink-oversized-cord-shirt?$product_image_main_tablet$) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",onClick:()=>i("/sale"),children:r.jsxs(t,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",children:"Valentine's Day Looks"}),r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",children:"Partner Up and Reach those Goals"}),r.jsxs(S,{mt:5,children:[r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>i("/sale"),children:"Explore"}),r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>i("/men"),children:"Top 10 Gifts"})]})]})}),r.jsx(t,{background:"url(https://media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom$&fmt=webp%201x,%20//media.boohooman.com/i/boohooman/bmm28815_sage_xl/mens-sage-faux-layer-jersey-sleeve-overshirt?$product_page_main_magic_zoom_2x$&fmt=webp%202x) center/cover no-repeat",width:["100%","100%","50%","50%"],height:["280px","380px","400px","650px"],minHeight:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer",onClick:()=>i("/sale"),children:r.jsxs(t,{color:"white",width:["100%","80%","90%","90%"],height:["80%","70%","50%","64%","85%"],textAlign:"left",display:"flex",flexDirection:"column",justifyContent:"flex-end",children:[r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",onClick:()=>i("/sale"),children:"Early Access"}),r.jsx(l,{_hover:{color:"rgba(0, 0, 0, 1.1)",transition:"color 0.5s ease-out"},fontWeight:"bold",fontSize:"24px",onClick:()=>i("/men"),children:"Top Selling"}),r.jsx(S,{mt:5,children:r.jsx(C,{fontWeight:"bold",bgColor:"white",p:"6px 20px",borderRadius:20,color:"black",alignItems:"center",onClick:()=>i("/sale"),children:"Get It First"})})]})})]}),r.jsx(t,{children:r.jsx(ie,{})})]})}export{de as default};