import{ac as H,j as e,c as p,V as R,T as d,f as u,u as b,ad as I,s as C,ae as G,af as T,B as M,ag as v,ah as E,ai as f,aj as D,ak as N,al as K,am as Z,an as O,ao as _,F as S,I as V,_ as A,ap as w,aq as $,n as q,P as Q,b as X,X as Y,a as J,ar as U,as as g,a2 as F,at as ee,au as se}from"./index-ed7b805f.js";import{C as te}from"./chunk-P675YKMR-3983188b.js";import{A as oe,a as re,b as ne,c as ie,d as ae}from"./chunk-UIZMWHSN-032f5e05.js";import{u as z}from"./chunk-BFUVSDI7-f56c1071.js";import{L as le}from"./Loading-592401d5.js";import{E as ce}from"./Error-0318f101.js";import{G as W}from"./chunk-JARCRF6W-9da2ca91.js";import"./chunk-7D6N5TE5-c37641ab.js";import"./index-8d968404.js";import"./index-fb69038e.js";import"./chunk-5MKCW436-e5ca90b3.js";function xe(s){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"}},{tag:"circle",attr:{cx:"336",cy:"128",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"176",cy:"256",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"336",cy:"384",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(s)}const j=({title:s,item:t,change:o,apply:r})=>e.jsxs(oe,{children:[e.jsx("h2",{children:e.jsxs(re,{children:[e.jsx(p,{flex:"1",textAlign:"left",fontSize:["14px","18px"],children:s}),e.jsx(ne,{})]})}),e.jsx(ie,{pb:4,children:e.jsx(R,{direction:"column",gap:"5px",children:t.map((l,c)=>e.jsx(te,{onChange:i=>{o(i)},value:l,name:s,children:e.jsx(d,{fontSize:["13px","16px"],children:l})},c))})})]}),pe=()=>{const s=window.location.href.split("/ecom-client/")[1];let t;s==="men"?t={Gender:{Men:!0,Women:!1,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Colour:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:s==="women"?t={Gender:{Men:!1,Women:!0,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Colour:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:s==="kids"?t={Gender:{Men:!1,Women:!1,Kids:!0},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Colour:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:t={Gender:{Men:!1,Women:!1,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Colour:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}};const o=u.useRef(!0),[r,l]=u.useState(t);u.useEffect(()=>{o.current?o.current=!1:k()},[r]);const c=b(),i=z(),x=({target:{name:a,value:m,checked:y}})=>{l({...r,[a]:{...r[a],[m]:y}})},n=a=>{},k=async()=>{try{const a=await c(I(r)).unwrap();C(i,"Filter Applied Successfully","success",1e3)}catch(a){C(i,a.message?a.message:"Products not found! Change the filter or click on the reset button to see products.","info"),console.error(a)}};return e.jsxs(ae,{allowMultiple:!0,children:[s==="sale"&&e.jsx(j,{change:x,apply:n,title:"Gender",item:["Men","Women","Kids"]}),e.jsx(j,{change:x,apply:n,title:"Category",item:["Cloths","Shoes"]}),e.jsx(j,{change:x,apply:n,title:"Size",item:["Small","Medium","Large"]}),e.jsx(j,{change:x,apply:n,title:"Colour",item:["Black","White","Green","Red","Blue"]})]})},de=()=>{const s=b(),t=z(),o=({target:{textContent:r}})=>{switch(C(t,`${r} applied successfully`,"success"),r){case"Price: Low-High":return s(_());case"Price: High-Low":return s(O());case"Rating: Low-High":return s(Z());case"Rating: High-Low":return s(K());case"Name: A-Z":return s(N());case"Name: Z-A":return s(D());default:console.log("default")}};return e.jsx(p,{children:e.jsxs(G,{children:[e.jsx(T,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],as:M,rightIcon:e.jsx(v,{}),children:"Sort By"}),e.jsxs(E,{children:[e.jsx(f,{onClick:o,children:"Price: Low-High"}),e.jsx(f,{onClick:o,children:"Price: High-Low"}),e.jsx(f,{onClick:o,children:"Rating: Low-High"}),e.jsx(f,{onClick:o,children:"Rating: High-Low"}),e.jsx(f,{onClick:o,children:"Name: A-Z"}),e.jsx(f,{onClick:o,children:"Name: Z-A"})]})]})})},L=({children:s})=>e.jsx(d,{fontSize:["12px","12px","13px","16px","17px"],color:"gray",children:s}),he=({children:s})=>e.jsx(e.Fragment,{children:e.jsx(d,{fontSize:["15px","20px","17px","20px","20px"],fontWeight:600,my:"6px",children:s})}),fe=({title:s,description:t,color:o,rating:r,price:l,size:c,gender:i,img:x,onClick:n})=>e.jsx(e.Fragment,{children:e.jsxs(S,{onClick:n,flexDirection:"column",cursor:"pointer",mb:"10px",children:[e.jsx(p,{overflow:"hidden",children:e.jsx(V,{className:"imgAnimation",src:x[0]})}),e.jsxs(p,{children:[e.jsxs(S,{justifyItems:"center",mt:"10px",children:[e.jsx(d,{fontSize:["13px","15px","17px","17px","18px"],fontWeight:600,children:A(s)}),e.jsx(w,{}),e.jsx(p,{fontSize:["13px","15px","17px","17px","18px"],mr:"3px",mt:"4px",children:e.jsx($,{})}),e.jsx(d,{fontSize:["13px","15px","17px","17px","18px"],children:r})]}),e.jsx(L,{children:A(t,20)}),e.jsx(L,{children:c.join(", ")}),e.jsxs(L,{children:[i,", ",o," Colour"]}),e.jsxs(he,{children:["₹",q(l),".00"]})]})]})});function be(){const{colorMode:s}=Q(),[t,o]=u.useState(!0),{products:r,loading:l,error:c}=X(h=>h.product),i=window.location.href.split("/ecom-client/")[1],[x]=Y("(max-width: 995px)"),n=b(),k=z(),a=J(),m=U(),y=()=>{o(!t),n(se()),n(g()),C(k,"Filter Reset Successfully","success")},P=h=>{a(`/description/${h.id}`)};return u.useEffect(()=>{n(i==="men"?g("men"):i==="women"?g("women"):i==="kids"?g("kids"):g("sale"))},[i]),e.jsxs(e.Fragment,{children:[e.jsxs(S,{direction:["column","column","row","row","row"],h:["100px","100px","60px","60px","60px"],position:"sticky",top:"0px",bg:s==="light"?"white":"#1a202c",zIndex:1,children:[e.jsx(F,{textAlign:"start",children:e.jsxs(d,{w:"100%",ml:["20px","20px","30px","40px","50px"],fontSize:["20px","25px"],fontWeight:500,children:[m.pathname==="/men"?"Mens Products":m.pathname==="/women"?"Womens Products":m.pathname==="/kids"?"Kids Products":"Total Products"," ","[",r.length,"]"]})}),e.jsx(w,{}),e.jsx(F,{children:e.jsxs(S,{gap:["4px"],w:"100%",my:["10px","10px","0px","0px","0px"],px:["8px","8px","20px","20px","20px"],align:"center",children:[!x&&e.jsx(ee,{}),e.jsx(M,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:()=>{o(!t)},rightIcon:e.jsx(xe,{enableBackground:"false",color:"white"}),children:t?"Hide Filter":"Show Filter"}),e.jsx(w,{}),e.jsx(M,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:y,children:"Reset Filter"}),e.jsx(w,{}),e.jsx(de,{})]})})]}),e.jsxs(W,{gap:["20px","20px","2%","2%","2%"],templateColumns:["100%","100%",t?"32% 66%":"100%",t?"28% 70%":"100%",t?"20% 78%":"100%"],justifyContent:"center",children:[t&&e.jsx(p,{minH:["120px","120px","600px","600px","600px"],maxH:["900px","600px"],position:["none","none","sticky","sticky","sticky"],top:["0px","70px"],overflowY:"scroll",className:"scroll",zIndex:0,mt:["10px","10px","20px","20px","20px"],children:e.jsx(pe,{})}),e.jsx(p,{minH:"400px",children:l?e.jsx(le,{}):c==="Rejected"?e.jsx(p,{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"1pxx solid red",marginTop:"20%",children:e.jsx(d,{fontSize:"20px",fontWeight:500,textAlign:"center",children:"Products not found! Change the filter or click on the reset button to see products."})}):c?e.jsx(ce,{}):e.jsx(W,{gap:[2,4],p:["10px","10px","20px","20px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"],children:r==null?void 0:r.map((h,B)=>u.createElement(fe,{...h,key:B,onClick:()=>{P(h)}}))})})]})]})}export{be as default};
