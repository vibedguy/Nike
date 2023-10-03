import{ai as P,j as e,d,X as H,T as u,h as w,u as M,a as b,aj as B,s as f,ak as I,al as G,B as F,am as T,an as v,ao as j,ap as E,aq as N,ar as D,as as K,at as Z,au as O,F as k,I as _,a3 as z,av as C,aw as $,n as q,R as V,c as X,b as Y,ax as J,ay as p,a7 as A}from"./index-11031153.js";import{C as Q}from"./chunk-P675YKMR-e8d4e091.js";import{A as U,a as ee,b as se,c as te,d as oe}from"./chunk-UIZMWHSN-7d531f73.js";import{L as re}from"./Loading-f70afcec.js";import{E as ne}from"./Error-770e808c.js";import{G as W}from"./chunk-JARCRF6W-8a1ee958.js";import"./chunk-7D6N5TE5-1c7eba40.js";import"./index-8d968404.js";import"./index-1b4a251e.js";import"./chunk-5MKCW436-4d0a8cfe.js";function ie(s){return P({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M368 128h80m-384 0h240m64 256h80m-384 0h240m-96-128h240m-384 0h80"}},{tag:"circle",attr:{cx:"336",cy:"128",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"176",cy:"256",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}},{tag:"circle",attr:{cx:"336",cy:"384",r:"32",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"}}]})(s)}const S=({title:s,item:t,change:r,apply:o})=>e.jsxs(U,{children:[e.jsx("h2",{children:e.jsxs(ee,{children:[e.jsx(d,{flex:"1",textAlign:"left",fontSize:["14px","18px"],children:s}),e.jsx(se,{})]})}),e.jsx(te,{pb:4,children:e.jsx(H,{direction:"column",gap:"5px",children:t.map((c,x)=>e.jsx(Q,{onChange:l=>{r(l)},value:c,name:s,children:e.jsx(u,{fontSize:["13px","16px"],children:c})},x))})})]}),le=()=>{const s=window.location.href.split("/ecom-client/")[1];let t;s==="men"?t={Gender:{Men:!0,Women:!1,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Color:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:s==="women"?t={Gender:{Men:!1,Women:!0,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Color:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:s==="kids"?t={Gender:{Men:!1,Women:!1,Kids:!0},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Color:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}}:t={Gender:{Men:!1,Women:!1,Kids:!1},Category:{Cloths:!1,Shoes:!1},Size:{Small:!1,Medium:!1,Large:!1},Color:{Black:!1,White:!1,Green:!1,Red:!1,Mix:!1}};const r=w.useRef(!0),[o,c]=w.useState(t);w.useEffect(()=>{r.current?r.current=!1:h()},[o]);const x=M(),l=b(),n=({target:{name:i,value:m,checked:y}})=>{c({...o,[i]:{...o[i],[m]:y}})},a=i=>{},h=async()=>{try{const i=await x(B(o)).unwrap();f(l,"Filter Applied Successfully","success",1e3)}catch(i){f(l,i.message?i.message:"Products not found! Change the filter or click on the reset button to see products.","info"),console.error(i)}};return e.jsxs(oe,{allowMultiple:!0,children:[s==="sale"&&e.jsx(S,{change:n,apply:a,title:"Gender",item:["Men","Women","Kids"]}),e.jsx(S,{change:n,apply:a,title:"Category",item:["Cloths","Shoes"]}),e.jsx(S,{change:n,apply:a,title:"Size",item:["Small","Medium","Large"]}),e.jsx(S,{change:n,apply:a,title:"Color",item:["Black","White","Green","Red","Blue"]})]})},ae=()=>{const s=M(),t=b(),r=({target:{textContent:o}})=>{switch(f(t,`${o} applied successfully`,"success"),o){case"Price: Low-High":return s(O());case"Price: High-Low":return s(Z());case"Rating: Low-High":return s(K());case"Rating: High-Low":return s(D());case"Name: A-Z":return s(N());case"Name: Z-A":return s(E());default:console.log("default")}};return e.jsx(d,{children:e.jsxs(I,{children:[e.jsx(G,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],as:F,rightIcon:e.jsx(T,{}),children:"Sort By"}),e.jsxs(v,{children:[e.jsx(j,{onClick:r,children:"Price: Low-High"}),e.jsx(j,{onClick:r,children:"Price: High-Low"}),e.jsx(j,{onClick:r,children:"Rating: Low-High"}),e.jsx(j,{onClick:r,children:"Rating: High-Low"}),e.jsx(j,{onClick:r,children:"Name: A-Z"}),e.jsx(j,{onClick:r,children:"Name: Z-A"})]})]})})},L=({children:s})=>e.jsx(u,{fontSize:["12px","12px","13px","16px","17px"],color:"gray",children:s}),ce=({children:s})=>e.jsx(e.Fragment,{children:e.jsx(u,{fontSize:["15px","20px","17px","20px","20px"],fontWeight:600,my:"6px",children:s})}),xe=({title:s,description:t,color:r,ratings:o,price:c,size:x,gender:l,img:n,onClick:a})=>e.jsx(e.Fragment,{children:e.jsxs(k,{onClick:a,flexDirection:"column",cursor:"pointer",mb:"10px",children:[e.jsx(d,{overflow:"hidden",children:e.jsx(_,{className:"imgAnimation",src:n[0]})}),e.jsxs(d,{children:[e.jsxs(k,{justifyItems:"center",mt:"10px",children:[e.jsx(u,{fontSize:["13px","15px","17px","17px","18px"],fontWeight:600,children:z(s)}),e.jsx(C,{}),e.jsx(d,{fontSize:["13px","15px","17px","17px","18px"],mr:"3px",mt:"4px",children:e.jsx($,{})}),e.jsx(u,{fontSize:["13px","15px","17px","17px","18px"],children:o.reduce((h,i,m)=>h+m,1)!==1?o.reduce((h,i,m)=>h+i.rating,0)/o.length:0})]}),e.jsx(L,{children:z(t,20)}),e.jsx(L,{children:x.join(", ")}),e.jsxs(L,{children:[l,", ",r," Colour"]}),e.jsxs(ce,{children:["₹",q(c),".00"]})]})]})});function Ce(){const{colorMode:s}=V(),[t,r]=w.useState(!0),{products:o,loading:c,error:x}=X(g=>g.product),l=window.location.href.split("/ecom-client/")[1],n=M(),a=b(),h=Y(),i=J();w.useEffect(()=>{n(l==="men"?p("men"):l==="women"?p("women"):l==="kids"?p("kids"):p("sale"))},[l]);const m=()=>{r(!t),l==="men"?(n(p("men")),f(a,"Filter Reset Successfully","success")):l==="women"?(n(p("women")),f(a,"Filter Reset Successfully","success")):l==="kids"?(n(p("kids")),f(a,"Filter Reset Successfully","success")):(n(p("sale")),f(a,"Filter Reset Successfully","success"))},y=g=>{h(`/description/${g.id}`)};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{direction:["column","column","row","row","row"],h:["100px","100px","60px","60px","60px"],position:"sticky",top:"0px",bg:s==="light"?"white":"#1a202c",zIndex:1,children:[e.jsx(A,{textAlign:"start",children:e.jsxs(u,{w:"100%",ml:["20px","20px","30px","40px","50px"],fontSize:["20px","25px"],fontWeight:500,children:[i.pathname==="/men"?"Mens Products":i.pathname==="/women"?"Womens Products":i.pathname==="/kids"?"Kids Products":"Total Products"," ","[",o.length,"]"]})}),e.jsx(C,{}),e.jsx(A,{children:e.jsxs(k,{gap:["4px"],w:"100%",my:["10px","10px","0px","0px","0px"],px:["8px","8px","20px","20px","20px"],align:"center",children:[e.jsx(F,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:()=>{r(!t)},rightIcon:e.jsx(ie,{enableBackground:"false",color:"white"}),children:t?"Hide Filter":"Show Filter"}),e.jsx(C,{}),e.jsx(F,{color:"white",bgColor:"rgb(0,0,0)",_hover:{color:"white",bgColor:"rgb(0,0,0)"},size:"sm",fontSize:["12px","15px"],onClick:m,children:"Reset Filter"}),e.jsx(C,{}),e.jsx(ae,{})]})})]}),e.jsxs(W,{gap:["20px","20px","2%","2%","2%"],templateColumns:["100%","100%",t?"32% 66%":"100%",t?"28% 70%":"100%",t?"20% 78%":"100%"],justifyContent:"center",children:[t&&e.jsx(d,{minH:["120px","120px","600px","600px","600px"],maxH:["900px","600px"],position:["none","none","sticky","sticky","sticky"],top:["0px","70px"],overflowY:"scroll",className:"scroll",zIndex:0,mt:["10px","10px","20px","20px","20px"],children:e.jsx(le,{})}),e.jsx(d,{minH:"400px",children:c?e.jsx(re,{}):x==="Rejected"?e.jsx(d,{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",border:"1pxx solid red",marginTop:"20%",children:e.jsx(u,{fontSize:"20px",fontWeight:500,textAlign:"center",children:"Products not found! Change the filter or click on the reset button to see products."})}):x?e.jsx(ne,{}):e.jsx(W,{gap:[2,4],p:["10px","10px","20px","20px","20px"],templateColumns:["repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"],children:o==null?void 0:o.map((g,R)=>w.createElement(xe,{...g,key:R,onClick:()=>{y(g)}}))})})]})]})}export{Ce as default};
