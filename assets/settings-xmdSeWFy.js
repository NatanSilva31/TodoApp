import{V as ae,j as t,r as l,u as Ze,L as He,b as Pt}from"./vendor-B-2yl_ca.js";import{B as V,u as $e,G as zt,c as pe,k as Y,n as a,a as M,C as ze,T as Ye,A as Oe,b as ut,S as Xe,d as Ft,I as Ot,e as Bt,M as xe,D as ke,f as N,g as Ce,h as Ut,i as Se,j as ft,l as Vt,m as ht,o as Nt,p as Wt,q as Gt,F as Ht,r as _t,s as qt,P as Zt,t as Yt,L as _e,v as Ke,w as Xt,x as Ee,y as Kt,z as me,E as Be,H as Jt,J as Qt,K as eo,N as gt,O as bt,Q as Je,R as to,U as yt,V as oo,W as Fe,X as no,Y as ro,Z as ao,_ as so,$ as jt,a0 as io,a1 as lo,a2 as et,a3 as Pe,a4 as co,a5 as po,a6 as xo,a7 as G,a8 as wt,a9 as mo,aa as vt,ab as uo,ac as fo,ad as ho,ae as go,af as kt,ag as Ve,ah as bo,ai as yo,aj as Ct,ak as jo,al as wo,am as vo,an as ko,ao as Co,ap as tt,aq as So,ar as $o,as as Eo,at as Io,au as St,av as Ao,aw as To,ax as Mo,ay as Lo,az as Ro,aA as $t,aB as Do,aC as Po,aD as Ie,aE as zo,aF as Fo,aG as Oo,aH as Bo,aI as je,aJ as Uo,aK as Vo,aL as No,aM as Wo,aN as Go,aO as ot}from"./ui-lib-C41lPcrf.js";import"./tasks-DYYyw5nR.js";import{E as W,a as Ae,b as nt,T as Le,S as Ho}from"./emoji-D7qZVVSC.js";import{E as le}from"./ntc-LB1IgDFN.js";const Vr=e=>{const n=`Tasks_${new Date().toLocaleString().replace(/[/:, ]/g,"_")}.json`,r=JSON.stringify(e,null,2),s=new Blob([r],{type:"application/json"}),d=window.URL.createObjectURL(s),x=document.createElement("a");x.href=d,x.download=n,x.click(),window.URL.revokeObjectURL(d)},$={fontDark:"#101727",fontLight:"#f0f0f0",darkMode:"#383838",lightMode:"#ffffff",purple:"#b624ff",red:"#ff3131",orange:"#ff9318",orangeDark:"#ff9500"},_o={"Dark Purple":{primaryColor:$.purple},"Light Purple":{primaryColor:$.purple,secondaryColor:"#edeef6"},"Dark Blue":{primaryColor:"#106cff",secondaryColor:"#090815"},"Light Blue":{primaryColor:"#278ad2",secondaryColor:"#dddaf6"},"Dark Pink":{primaryColor:"#f2369d",secondaryColor:"#191218"},"Light Pink":{primaryColor:"#e5369a",secondaryColor:"#ffe3ff"},"Blush Blossom":{primaryColor:"#EC407A",secondaryColor:"#FCE4EC"},Cheesecake:{primaryColor:"#E14C94",secondaryColor:"#FDF0D5"},"Mystic Coral":{primaryColor:"#ff7b9c",secondaryColor:"#4a2333"},"Dark Orange":{primaryColor:"#FF5631",secondaryColor:"#0D0D0D"},"Light Orange":{primaryColor:"#F26E56",secondaryColor:"#F6F6F6"},Aurora:{primaryColor:"#00e952",secondaryColor:"#011926"}},Et=e=>/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e),h=e=>{if(!Et(e))return console.error("Invalid hex color:",e),$.fontDark;const o=e.startsWith("#")?e.slice(1):e,n=o.length===3?o.split("").map(p=>p+p).join(""):o,r=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),d=parseInt(n.slice(4,6),16);return Math.round((r*299+s*587+d*114)/1e3)>128?$.fontDark:$.fontLight},se=e=>h(e)===$.fontLight,he=new Set,qo=8,Ne=24-new Date().getHours(),rt=["Vamos fazer este dia valer a pena! **1f680**","Faça as coisas acontecerem e conquiste o dia!","Abraçe o poder da produtividade!","Defina suas metas, conquiste-as, repita.","Hoje é uma nova oportunidade para ser produtivo!","Faça cada momento contar.","Mantenha-se organizado, mantenha-se à frente.","Assuma o controle do seu dia!","Uma tarefa de cada vez, você consegue!","Produtividade é a chave para o sucesso. **1f511**","Vamos transformar planos em conquistas!","Comece pequeno, conquiste grandes coisas.","Seja eficiente, seja produtivo.","Aproveite o poder da produtividade!","Prepare-se para fazer as coisas acontecerem!","É hora de riscar as tarefas da lista! **2705**","Comece o seu dia com um plano! **1f5d3-fe0f**","Mantenha o foco, mantenha-se produtivo.","Desbloqueie seu potencial de produtividade. **1f513**","Transforme sua lista de tarefas em uma lista de feitos! **1f4dd**",`Tenha uma maravilhosa ${new Date().toLocaleDateString("pt-BR",{weekday:"long"})}!`,`Feliz ${new Date().toLocaleDateString("pt-BR",{month:"long"})}! Um ótimo mês para produtividade!`,Ne>4?`${Ne} horas restantes no dia. Use-as sabiamente!`:`Apenas ${Ne} horas restantes no dia`],Nr=()=>(()=>{let o;do o=Math.floor(Math.random()*rt.length);while(he.has(o));if(he.add(o),he.size>qo){const n=Array.from(he).shift();n!==void 0&&he.delete(n)}return rt[o]})(),H=navigator.userAgent,Zo=()=>/Windows NT/i.test(H)?"Windows":/iPhone|iPad|iPod/i.test(H)?"iOS":/Mac/i.test(H)?"macOS":/Android/i.test(H)?"Android":/Linux/i.test(H)?"Linux":"Unknown",Yo=()=>/Chrome/i.test(H)&&!/Edge/i.test(H)?"Chrome":/Firefox/i.test(H)?"Firefox":/Safari/i.test(H)&&!/Chrome/i.test(H)?"Safari":/Edg/i.test(H)?"Edge":"Unknown",Xo=/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent),U={os:Zo(),browser:Yo(),isAppleDevice:Xo,get isPWA(){var e,o;return((o=(e=window.matchMedia)==null?void 0:e.call(window,"(display-mode: standalone)"))==null?void 0:o.matches)||navigator.standalone===!0}},Wr=e=>{e=e.length>32?e.substring(0,32)+"...":e;const o=document.getElementById("QRCodeShare");if(!o){console.error("QR Code not found.");return}const n=new XMLSerializer().serializeToString(o),r=document.createElement("canvas"),s=r.getContext("2d");if(!s){console.error("Canvas context not supported.");return}const d=new Image;d.onload=()=>{const x=d.width+20,m=d.height+70;r.width=x,r.height=m,s.fillStyle="white",s.fillRect(0,0,x,m);const p=(x-d.width)/2;s.drawImage(d,p,10),s.font="bold 20px Poppins";const I=s.measureText(e).width,E=(x-I)/2,C=m-35;s.fillStyle="black",s.fillText(e,E,C);const D="Todo App by github.com/natansilva31";s.font="14px Poppins";const O=s.measureText(D).width,L=(x-O)/2,j=m-10;s.fillText(D,L,j);const b=r.toDataURL("image/png"),T=document.createElement("a");T.download=`QRCode${e?" "+e:""}.png`,T.href=b,T.click()},d.src=`data:image/svg+xml;base64,${btoa(n)}`},R=(e,{type:o,disableClickDismiss:n,disableVibrate:r,dismissButton:s,...d}={})=>{const x={error:ae.error,success:ae.success,loading:ae.loading,blank:ae,custom:ae.custom}[o||"success"];if(!r&&"vibrate"in navigator){const m=o==="error"?[100,50,100]:[100];try{navigator.vibrate(m)}catch(p){console.error(p)}}x(m=>t.jsxs("div",{onClick:!n&&!s?()=>ae.dismiss(m.id):void 0,children:[e,s&&t.jsx("div",{children:t.jsx(V,{variant:"outlined",fullWidth:!0,onClick:()=>ae.dismiss(m.id),sx:{mt:"8px",w:"100%",p:"12px 24px",fontSize:"16px",borderRadius:"16px"},children:"Dismiss"})})]}),{...d})},Gr=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const o=Math.random()*16|0;return(e==="x"?o:o&3|8).toString(16)}),It=(e,o=navigator.language||"en-US")=>{const n=new Date;e=new Date(e);const r=Math.floor((n.getTime()-e.getTime())/1e3),s=new Intl.RelativeTimeFormat(o,{numeric:"auto"});if(r<60)return s.format(-r,"second");if(r<3600){const d=Math.floor(r/60);return s.format(-d,"minute")}else if(r<86400){const d=Math.floor(r/3600);return s.format(-d,"hour")}else{const d=Math.floor(r/86400);return s.format(-d,"day")}},Hr=e=>{const o=new Date,n=new Date(o);n.setDate(o.getDate()-1);const r=e.getTime()-o.getTime(),s=new Intl.RelativeTimeFormat(navigator.language,{numeric:"auto"});return at(e,o)?s.format(0,"day")+` ${We(e)}`:at(e,n)?s.format(-1,"day")+` ${We(e)}`:r>-6048e5?`${Jo(e)} ${We(e)}`:Ko(e)},at=(e,o)=>e.getFullYear()===o.getFullYear()&&e.getMonth()===o.getMonth()&&e.getDate()===o.getDate(),We=e=>e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),Ko=e=>{const o={year:"numeric",month:"2-digit",day:"2-digit"};return e.toLocaleDateString(navigator.language,o)},Jo=e=>e.toLocaleDateString(navigator.language,{weekday:"long"}),_r=(e,o=navigator.language||"en-US")=>{const n=new Date,r=new Date(e),s=r.getTime()-n.getTime(),d=Math.floor(s/(1e3*60*60*24)),x=Math.floor(s/(1e3*60*60)),m=Math.floor(s/(1e3*60)),p=o;return r<n?`Não concluído a tempo (${It(r,p)})`:r.toDateString()===n.toDateString()?new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(x>0?x:m,x>0?"hour":"minute"):s>0&&s<=864e5&&r.getDate()!==n.getDate()?new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(1,"day"):d<=7?`${new Intl.DateTimeFormat(p,{weekday:"long"}).format(e)} (${new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(d,"day")})`:new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(d,"day")},Qo=async e=>{if(!e)return null;if(e.startsWith("LOCAL_FILE"))try{return new Promise((o,n)=>{const r=indexedDB.open("profilePictureDB",1);r.onsuccess=s=>{const p=s.target.result.transaction(["pictures"],"readonly").objectStore("pictures").get("profilePicture");p.onsuccess=()=>{o(p.result||null)},p.onerror=()=>{n(new Error("Failed to fetch profile picture from IndexedDB"))}},r.onerror=()=>{n(new Error("Failed to open IndexedDB"))}})}catch(o){return console.error("Error fetching profile picture:",o),null}return e},Q={name:null,createdAt:new Date,profilePicture:null,emojisStyle:U.os==="iOS"||U.os==="macOS"?W.NATIVE:W.APPLE,tasks:[],theme:"system",darkmode:"auto",settings:{enableCategories:!0,doneToBottom:!1,enableGlow:!0,simpleEmojiPicker:!1,enableReadAloud:"speechSynthesis"in window,voice:"Microsoft Mark - English (United States)::en-US",appBadge:!1,voiceVolume:.6},categories:[{id:"857f0db6-43b2-43eb-8143-ec4e26472516",name:"Casa",emoji:"1f3e0",color:"#1fff44"},{id:"0292cba5-f6e2-41c4-b5a7-c59a0aaecfe3",name:"Trabalho",emoji:"1f3e2",color:"#248eff"},{id:"a47a4af1-d720-41eb-9121-d3728605a62b",name:"Pessoal",emoji:"1f464",color:"#e843fe"},{id:"393068a9-9db7-4dfa-a00f-cd359f8024e8",name:"Saúde/Fitness",emoji:"1f4aa",color:"#ffdf3d"},{id:"afa0fdb4-f668-4d5a-9ad0-4e22d2b8e841",name:"Educação",emoji:"1f4da",color:"#ff8e24"}],favoriteCategories:[],colorList:["#FF69B4","#FF22B4","#C6A7FF","#7ACCFA","#4898F4","#5061FF","#3DFF7F","#3AE836","#FFEA28","#F9BE26","#FF9518","#FF5018","#FF2F2F"]},X=l.createContext({user:Q,setUser:()=>{}}),Ue=(e=768)=>{const[o,n]=l.useState(!1);return l.useEffect(()=>{const r=()=>{n(window.innerWidth<e)};r();const s=()=>r();return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[e]),o},qr=()=>{const e=$e();return t.jsx(zt,{styles:pe`
        * {
          font-family: "Poppins", sans-serif !important;
          -webkit-tap-highlight-color: transparent;
          &::selection {
            background-color: ${e.primary+"e1"};
            color: ${h(e.primary)};
            text-shadow: 0 0 12px ${h(e.primary)+"b9"};
          }
        }
        :root {
          font-family: "Poppins", sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color-scheme: ${e.darkmode?"dark":"light"};
          color: ${h(e.secondary)};
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
          --rsbs-backdrop-bg: rgba(0, 0, 0, 0.3);
          --rsbs-bg: ${e.darkmode?"#383838":"#ffffff"};
        }
        input[type="datetime-local"]:placeholder-shown {
          color: transparent !important;
        }
        img {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        a {
          text-decoration: none;
          -webkit-text-decoration: none;
          color: inherit;
        }

        input[type="file"]::-webkit-file-upload-button {
          display: none;
        }
        div[role="dialog"] {
          border-radius: 42px 42px 0 0;
          z-index: 9999999;
        }

        div[data-rsbs-backdrop] {
          z-index: 999;
        }

        div[data-rsbs-header] {
          z-index: 999999;
          &::before {
            width: 60px;
            height: 6px;
            border-radius: 100px;
            background: ${e.darkmode?"#717171":"#cfcfcf"};
            margin-top: 3px;
          }
        }
        div[data-rsbs-header] {
          box-shadow: none;
        }
        body {
          margin: 8px 16vw;
          touch-action: manipulation;
          background: ${e.secondary};
          background-attachment: fixed;
          background-size: cover;
          transition: 0.3s background;
          @media (max-width: 1024px) {
            margin: 20px;
          }

          /* Custom Scrollbar Styles */
          ::-webkit-scrollbar {
            width: 8px;

            background-color: ${e.secondary};
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${e.primary};
            border-radius: 64px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: ${e.primary+"d8"};
          }

          ::-webkit-scrollbar-track {
            border-radius: 64px;
            background-color: ${e.secondary};
          }
        }

        pre {
          background-color: #000000d7;
          color: white;
          padding: 16px;
          border-radius: 18px;
          overflow-x: auto;
        }

        .EmojiPickerReact {
          --epr-search-border-color: ${e.primary} !important;
          --epr-hover-bg-color-reduced-opacity: ${e.primary+"64"} !important;
          --epr-hover-bg-color: ${e.primary} !important;
          --epr-focus-bg-color: ${e.primary+"64"} !important;
          --epr-dark-bg-color: ${$.darkMode} !important;
          --epr-dark-category-label-bg-color: ${$.darkMode+"d8"} !important;
          --epr-skin-tone-picker-menu-color: transparent !important;
          --epr-emoji-variation-picker-bg-color: ${e.darkmode?$.darkMode:$.lightMode} !important;
          --epr-emoji-variation-picker-menu-color: ${$.darkMode} !important;
          --epr-dark-search-input-bg-color-active: #313131 !important;
          --epr-dark-picker-border-color: #616161 !important;
          border-radius: 20px !important;
          padding: 8px !important;
        }

        .epr-reactions {
          background: ${e.darkmode?"#141431dd":"#ffffffd3"} !important;
          border: 1px solid ${e.darkmode?"#020217":"#7d7d7d"} !important;
        }

        .epr-emoji-category-label {
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        .epr-emoji-native {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        .epr-body,
        .MuiDialogContent-root,
        .MuiDrawer-paper,
        .customScrollbar,
        textarea {
          ::-webkit-scrollbar {
            width: 8px;
            border-radius: 4px;
            background-color: #84848415;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #8484844b;
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #84848476;
          }

          ::-webkit-scrollbar-track {
            border-radius: 4px;
            background-color: #84848415;
          }
        }

        .MuiDialog-container {
          backdrop-filter: blur(4px);
        }
        .MuiButton-contained {
          box-shadow: none !important;
        }
        .MuiPaper-elevation8 {
          border-radius: 16px !important;
        }
        .MuiSelect-select,
        .MuiSelect-select {
          display: flex !important;
          justify-content: left;
          align-items: center;
          gap: 4px;
        }
        .MuiTooltip-tooltip {
          color: ${e.darkmode?"white":"black"} !important;
          background-color: ${e.darkmode?"#141431dd":"#ededf3dd"} !important;
          backdrop-filter: blur(6px) !important;
          padding: 8px 16px !important;
          border-radius: 8px !important;
          font-size: 12px !important;
        }
        .MuiBottomNavigationAction-root {
          padding: 12px !important;
          margin: 0 !important;
          max-height: none;
        }
        .MuiSlider-valueLabel {
          border-radius: 10px !important;
          padding: 6px 14px !important;
          color: ${e.darkmode?"white":"black"} !important;
          background-color: ${e.darkmode?"#141431dd":"#ededf3dd"} !important;
          &::before,
          &::after {
            display: none;
          }
        }
        .MuiCircularProgress-circle {
          stroke-linecap: round !important;
        }
        /* 
        .MuiTabs-indicator {
          border-radius: 24px !important;
        } */
        .MuiAccordion-root {
          &::before {
            display: none;
          }
        }
      `})},Zr=Y`
from {
  opacity: 0;
  transform: translateX(-40px)
}
to {
  opacity: 1;
  transform: translateX(0px)
  }
`,ue=Y`
from {
  opacity: 0;
}
`;Y`
  from{
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;const en=Y`
  from{
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,Qe=Y`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`,Te=(e,o=12)=>Y`
0% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 ${e}b2;
}
70% {
  transform: scale(1);
  box-shadow: 0 0 0 ${o}px ${e}00;
}
100% {
  transform: scale(0.95);
  box-shadow: 0 0 0 0 ${e}00;
}
`,tn=e=>Y`
  0% {
    filter: none;
  }
  50% {
    filter: drop-shadow(0 0 10px ${e}78);
  }
  100% {
    filter: none;
  }
`,on=Y`
  0% { -webkit-transform: rotateZ(0); }
  1% { -webkit-transform: rotateZ(30deg); }
  3% { -webkit-transform: rotateZ(-28deg); }
  5% { -webkit-transform: rotateZ(34deg); }
  7% { -webkit-transform: rotateZ(-32deg); }
  9% { -webkit-transform: rotateZ(30deg); }
  11% { -webkit-transform: rotateZ(-28deg); }
  13% { -webkit-transform: rotateZ(26deg); }
  15% { -webkit-transform: rotateZ(-24deg); }
  17% { -webkit-transform: rotateZ(22deg); }
  19% { -webkit-transform: rotateZ(-20deg); }
  21% { -webkit-transform: rotateZ(18deg); }
  23% { -webkit-transform: rotateZ(-16deg); }
  25% { -webkit-transform: rotateZ(14deg); }
  27% { -webkit-transform: rotateZ(-12deg); }
  29% { -webkit-transform: rotateZ(10deg); }
  31% { -webkit-transform: rotateZ(-8deg); }
  33% { -webkit-transform: rotateZ(6deg); }
  35% { -webkit-transform: rotateZ(-4deg); }
  37% { -webkit-transform: rotateZ(2deg); }
  39% { -webkit-transform: rotateZ(-1deg); }
  41% { -webkit-transform: rotateZ(1deg); }
  43% { -webkit-transform: rotateZ(0); }
  100% { -webkit-transform: rotateZ(0); }
`,Yr=a.div`
  display: flex;
  margin-top: 12px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 8px;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`,Xr=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Kr=a.div`
  color: ${({theme:e})=>h(e.secondary)};
  /* background: #090b2258; */
  background: ${({theme:e})=>se(e.secondary)?"#090b2258":"#ffffff3e"};
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px 16px;
  padding: 20px 24px;
  margin: 24px 0 12px 0;
  border-radius: 24px;
  width: 650px;
  border: 1px solid ${({theme:e})=>se(e.secondary)?"#44479cb7":e.primary};
  @media (min-width: 1024px) {
    padding: 24px;
  }
`,Jr=a.div`
  line-height: 1.7;
  margin-left: 6px;
`,Qr=a.h4`
  margin: 0;
  font-size: 16px;
  @media (min-width: 1024px) {
    font-size: 17px;
  }
`,ea=a.p`
  margin: 0;
  font-size: 16px;
`,ta=a(M)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #090b2287; */
  background: ${({theme:e})=>se(e.secondary)?"#090b2287":"#ffffff5c"};
  border-radius: 100px;
  margin: -5px;
  border: 1px solid ${({theme:e})=>se(e.secondary)?"#44479cb7":e.primary};
  box-shadow: ${({theme:e})=>`0 0 18px -2px ${se(e.secondary)?"#090b22":"#bababa"}`};
  & .MuiTypography-root {
    color: ${({theme:e})=>h(e.secondary)};
  }
  animation: ${({theme:e,glow:o})=>o?pe`
          ${tn(e.primary)} 4s infinite ease-in
        `:"none"};
`,oa=a(ze)`
  z-index: 1;
  margin: 2px;
  filter: ${({glow:e,theme:o})=>e?`drop-shadow(0 0 6px ${o.primary}c8)`:"none"};
  transition: 0.3s filter;
`,na=a(V)`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 24px;
  width: 72px;
  height: 72px;
  border-radius: 100%;
  background-color: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>h(e.primary)};
  right: 16vw;
  box-shadow: ${({glow:e,theme:o})=>e?`0px 0px 32px -8px ${o}`:"none"};
  transition:
    background-color 0.3s,
    backdrop-filter 0.3s,
    box-shadow 0.3s;

  &:hover {
    box-shadow: none;
    background-color: ${({theme:e})=>e.primary};
    backdrop-filter: blur(6px);
  }
  animation: ${Qe} 0.3s;
  ${({animate:e,theme:o})=>e&&pe`
      animation: ${Te(o.primary,14)} 1.2s infinite;
    `}

  @media (max-width: 1024px) {
    right: 24px;
  }
`,ra=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-shadow: 0 0 8px #ffffff56;
  margin-top: 20px;
  opacity: 0.8;
  animation: ${ue} 0.5s ease;
`,aa=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,sa=a(V)`
  margin-top: 4px;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  background: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>h(e.primary)};
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
  margin: 20px;
  width: 400px;
  text-transform: capitalize;
  &:hover {
    box-shadow: 0px 0px 24px 0px ${({theme:e})=>e.primary+"80"};
    background: ${({theme:e})=>e.primary};
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
    color: ${({theme:e})=>h(e.secondary)};
  }
`,ia=a(Ye)`
  margin: 12px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    transition: 0.3s all;
    width: 400px;
    color: ${({theme:e,hidetext:o})=>o?"transparent":h(e.secondary)};
  }
  .MuiFormHelperText-root {
    color: ${({helpercolor:e,theme:o})=>e||h(o.secondary)};
    opacity: 0.8;
  }
`,oe=a(V)`
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 16px;
  margin: 8px;
`,la=a.a`
  cursor: pointer;
  color: ${({clr:e,theme:o})=>e||o.primary};
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({clr:e,theme:o})=>e||o.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 100px;
  }
  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover {
    text-shadow: 0px 0px 20px ${({clr:e,theme:o})=>e||o.primary};
  }
  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`,nn=({...e})=>t.jsx(Oe,{translate:"no",slotProps:{img:{loading:"lazy"}},...e}),st=a(nn)`
  color: #ffffff;
  background: ${({hasimage:e,theme:o})=>e?"#ffffff1c":o.darkmode?"#5e5e65":"#8c919c"} !important;
  transition: 0.3s background;
  font-weight: 500;
  width: ${({size:e})=>e};
  height: ${({size:e})=>e};
  font-size: ${({size:e})=>`calc(${e} / 2)`};
  ${({pulse:e,theme:o})=>e&&pe`
      animation: ${Te(o.darkmode?"#5e5e65":"#8c919c",10)} 1.2s infinite;
    `}
`,qe=a.button`
  background: ${({clr:e,secondClr:o})=>o?`linear-gradient(135deg, ${e} 50%, ${o} 50%)`:e};

  color: ${({clr:e})=>h(e||"")};
  border: none;
  cursor: pointer;
  width: ${({size:e})=>e||"48px"};
  height: ${({size:e})=>e||"48px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition:
    0.2s all,
    0s border;
  transform: scale(1);

  &:focus-visible {
    outline: 4px solid ${({theme:e})=>e.primary};
  }

  &:hover {
    /* transform: scale(1.05); */
    box-shadow: ${({clr:e,disableHover:o})=>o?"none":`0 0 12px ${e}`};
    /* outline: none; */
  }
`,ca=a.code`
  background: #000000c8;
  color: white;
  font-family: consolas !important;
  padding: 4px 6px;
  border-radius: 8px;
`;a.div`
  animation: ${({theme:e})=>Te(e.primary,8)} 1.2s infinite;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  background: ${({theme:e})=>e.primary};
  border-radius: 32px;
  z-index: 1;
`;const da=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,pa=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 350px;
  background: ${({theme:e})=>e.darkmode?"#0000005a":"#acacac5a"};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 18px;
  border-radius: 18px;
`,xa=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`,ma=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 400px;
  margin: 6px 0;
  padding: 12px;
  border-radius: 18px;
  background: ${({clr:e})=>e};
  color: ${({clr:e})=>h(e)};
  animation: ${ue} 0.5s ease-in-out;
  @media (max-width: 768px) {
    width: 360px;
  }
`,ua=a.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 4px;
  gap: 4px;
`,fa=a.div`
  /* background: #ffffffcd; */
  background: ${({theme:e})=>e.darkmode?"#000000cd":"#ffffffcd"};
  border-radius: 100%;
`,ha=a(Ye)`
  margin: 12px;

  .MuiOutlinedInput-root {
    border-radius: 16px;
    width: 400px;
    color: ${({theme:e})=>h(e.secondary)};
  }
  & .MuiFormHelperText-root {
    color: ${({theme:e})=>h(e.secondary)};
    opacity: 0.8;
  }
`,ga=a(Ye)`
  margin-top: 8px;
  .MuiOutlinedInput-root {
    border-radius: 16px;
    width: 350px;
  }
`,ba=a(V)`
  border: none;
  padding: 18px 48px;
  font-size: 24px;
  background: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>h(e.primary)};
  border-radius: 999px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s all;
  margin: 20px;
  width: 400px;
  text-transform: capitalize;
  &:hover {
    box-shadow: 0px 0px 24px 0px ${({theme:e})=>e.primary+"80"};
    background: ${({theme:e})=>e.primary};
  }
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.7;
    color: white;
  }
`,ya=a(ut)`
  margin: 16px 0;
  background: transparent;
  box-shadow: none;
  border: 2px solid ${({theme:e})=>`${e.darkmode?"#ffffff":"#000000"}5a`};
  border-radius: 12px !important;
`,At=pe`
  animation: ${Qe} 0.2s ease-in;
`,ja=a(Xe)`
  ${At}
`,wa=a(Ft)`
  ${At}
`,va=a(M)`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 8px;
  padding: 10px 4px;
  border-radius: 16px;
  background: ${({theme:e})=>e.darkmode?"#00000030":"#ffffff30"};
  border: 2px solid ${({backgroundClr:e})=>e};
  box-shadow: ${({selected:e,backgroundClr:o})=>e&&`0 0 8px 1px ${o}`};
  transition: 0.3s all;
  width: 300px;
  cursor: "pointer";
  & span {
    font-weight: ${({selected:e})=>e?600:500}!important;
  }
`,ka=a.h2`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ca=a.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 6px;
`,Sa=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  border: 2px dashed ${({theme:e})=>e.primary};
  border-radius: 16px;
  padding: 32px 64px;
  text-align: center;
  max-width: 300px;
  box-shadow: ${({isDragging:e,theme:o})=>e&&`0 0 32px -2px ${o.primary}`};
  transition: 0.3s all;
  & div {
    font-weight: 500;
  }
`,$a=a(Ot)`
  color: ${({theme:e})=>h(e.secondary)};
`,Ea=a(M)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  max-height: 350px;
  overflow-y: auto;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
    background-color: ${({theme:e})=>h(e.secondary)}15;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>h(e.secondary)}30;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>h(e.secondary)}50;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: ${({theme:e})=>h(e.secondary)}15;
  }
`,Ia=a(M)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`,rn=({...e})=>t.jsx(V,{variant:"outlined",...e}),Aa=a(rn)`
  padding: 12px 18px;
  border-radius: 14px;
  width: 300px;

  &:disabled {
    color: ${({theme:e})=>h(e.secondary)+"82"};
    border-color: ${({theme:e})=>h(e.secondary)+"82"};
  }
`,Ta=({scale:e=1,color:o,variant:n="error"})=>{const r=$e(),{user:s}=l.useContext(X),{settings:d}=s,x=o||r.primary,m=h(o||r.primary),p=()=>n==="add"?A:n==="error"?I:n==="success"?E:null,A=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"124.093",y:"286.465",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(-90 124.093 286.465)",fill:m}),t.jsx("rect",{x:"87",y:"235.884",width:"87.6744",height:"13.4884",rx:"6.74419",fill:m})]}),I=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"95.0707",y:"268.856",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(-45 95.0707 268.856)",fill:m}),t.jsx("rect",{x:"104.608",y:"206.861",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(45 104.608 206.861)",fill:m})]}),E=t.jsx("path",{d:"M96 242.159L119.159 265.318L165.476 219",stroke:m,"stroke-width":"15","stroke-linecap":"round","stroke-linejoin":"round"});return t.jsxs("svg",{width:216*e,height:434*e,viewBox:"0 0 261 434",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{filter:d.enableGlow?`drop-shadow(0px 0px ${64*e}px ${x}c8)`:"none"},children:[t.jsx("circle",{cx:"130.837",cy:"34.2327",r:"26.7209",stroke:x,"stroke-width":"14"}),t.jsx("rect",{y:"51.7676",width:"261",height:"381.721",rx:"45",fill:x,"fill-opacity":"0.6"}),t.jsx("rect",{x:"26.9767",y:"80.0928",width:"207.047",height:"325.07",rx:"35",fill:"white","fill-opacity":"0.9"}),t.jsx("rect",{x:"64.7442",y:"176.535",width:"132.186",height:"132.186",rx:"66.093",fill:x}),p(),t.jsx("rect",{x:"77.5581",y:"36.9307",width:"106.558",height:"56.6512",rx:"18",fill:x})]})},an="/TodoApp/assets/bmc-logo-light-BbeYcQoR.svg",sn="/TodoApp/assets/bmc-logo-CukmK04N.svg",ln="/TodoApp/assets/logo256-gFzWMhyE.png",cn=async()=>{const o="https://img.buymeacoffee.com/button-api/?&slug=natansilva31";try{const r=await(await fetch(o)).text(),x=new DOMParser().parseFromString(r,"text/html").querySelector("text[x='226'][y='39'][text-anchor='middle']");if(x)return{supportersCount:Number(x.textContent)};throw new Error("Failed to fetch Buy Me a Coffee API: Supporters count element not found.")}catch(n){return console.error("Error fetching Buy Me a Coffee API:",n),navigator.onLine&&R("Failed to fetch Buy Me a Coffee API.",{type:"error",disableVibrate:!0}),{supportersCount:0}}},dn=async()=>{const e="natansilva31",o="TodoApp",n="main";try{const[r,s]=await Promise.all([fetch(`https://api.github.com/repos/${e}/${o}`),fetch(`https://api.github.com/repos/${e}/${o}/branches/${n}`)]);if(r.ok&&s.ok){const[d,x]=await Promise.all([r.json(),s.json()]);return{repoData:d,branchData:x}}else if(r.status===403&&s.status===403)R("Github API rate limit exceeded temporarily for your IP address.",{type:"error",disableVibrate:!0});else throw new Error("Failed to fetch repository or branch information")}catch(r){console.error(r),navigator.onLine&&R("Failed to fetch Github API.",{type:"error",disableVibrate:!0})}return{repoData:{},branchData:{}}},Ma=()=>{const{user:e,setUser:o}=l.useContext(X),{name:n,profilePicture:r,tasks:s,settings:d}=e,[x,m]=l.useState(null),p=!!x,[A,I]=l.useState(!1),[E,C]=l.useState(!1),[D,O]=l.useState(null),[L,j]=l.useState(null),[b,T]=l.useState(null),[y,S]=l.useState(null),z=$e(),ne=Ze();l.useEffect(()=>{const i=async()=>{const{repoData:v,branchData:k}=await dn();O(v.stargazers_count),j(k.commit.commit.committer.date),T(v.open_issues_count)};(async()=>{const{supportersCount:v}=await cn();v>0?S(v):console.error("No BMC supporters found.")})(),i()},[]),l.useEffect(()=>{const i=()=>{window.location.hash.startsWith("#settings/")&&C(!0)};return i(),window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const[F,_]=l.useState(null);l.useEffect(()=>{(async()=>{const f=await Qo(r);_(f)})()},[r]);const re=i=>{m(i.currentTarget)},g=()=>{m(null)},[u,w]=l.useState(!1),[P,K]=l.useState(null),[ee,q]=l.useState(!1),[ie,Z]=l.useState(!1);l.useEffect(()=>{const i=v=>{v.preventDefault(),w(!0),K(v)},f=()=>{window.matchMedia("(display-mode: standalone)").addEventListener("change",v=>{q(v.matches)})};return window.addEventListener("beforeinstallprompt",i),f(),()=>{window.removeEventListener("beforeinstallprompt",i)}},[]);const c=()=>{P&&(P.prompt(),P.userChoice.then(i=>{i.outcome==="accepted"&&(U.os==="Windows"?Z(!0):R("App installed successfully!"),g()),i.outcome==="dismissed"&&R("Installation dismissed.",{type:"error"})}))};return t.jsxs(pn,{children:[t.jsx(N,{title:t.jsx("div",{translate:n?"no":"yes",children:n||"User"}),children:t.jsx(Ce,{"aria-label":"Sidebar","aria-controls":p?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,onClick:re,sx:{zIndex:1},children:t.jsx(st,{src:F||void 0,alt:n||"User",hasimage:r!==null,pulse:e.name===Q.name&&JSON.stringify(e.settings)===JSON.stringify(Q.settings),size:"52px",onError:()=>{if(navigator.onLine)throw o(i=>({...i,profilePicture:null})),R("Error in profile picture URL",{type:"error"}),new Error("Error in profile picture URL")},children:n?n[0].toUpperCase():void 0})})}),t.jsxs(xn,{disableBackdropTransition:U.os!=="iOS",disableDiscovery:U.os==="iOS",id:"basic-menu",anchor:"right",open:p,onOpen:i=>i.preventDefault(),onClose:g,children:[t.jsxs(bn,{translate:"no",onClick:()=>{ne("/"),g()},children:[t.jsx(yn,{src:ln,alt:"logo"}),t.jsxs(jn,{children:[t.jsx("span",{children:"Todo"})," App",t.jsx("span",{children:"."})]})]}),t.jsx(J,{to:"/",children:t.jsxs(B,{onClick:g,children:[t.jsx(Ut,{}),"   Tarefas",s.filter(i=>!i.done).length>0&&t.jsx(N,{title:`${s.filter(i=>!i.done).length} tasks to do`,children:t.jsx(we,{children:s.filter(i=>!i.done).length>99?"99+":s.filter(i=>!i.done).length})})]})}),t.jsx(J,{to:"/add",children:t.jsxs(B,{onClick:g,children:[t.jsx(Se,{}),"   Adicionar tarefa"]})}),d.enableCategories!==void 0&&d.enableCategories&&t.jsx(J,{to:"/categories",children:t.jsxs(B,{onClick:g,children:[t.jsx(ft,{}),"   Categorias"]})}),t.jsx(J,{to:"/purge",children:t.jsxs(B,{onClick:g,children:[t.jsx(Vt,{}),"   Tarefas de Exclusão"]})}),t.jsx(J,{to:"/transfer",children:t.jsxs(B,{onClick:g,children:[t.jsx(ht,{}),"   Baixar"]})}),t.jsx(Re,{}),t.jsx(J,{to:"https://github.com/natansilva31/TodoApp",children:t.jsxs(B,{translate:"no",children:[t.jsx(Nt,{className:"GitHubIcon"}),"   Github"," ",D&&t.jsx(N,{title:`${D} stars on Github`,children:t.jsx(we,{clr:"#ff9d00",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(Xe,{style:{fontSize:"18px"}})," ",D]})})})]})}),t.jsx(J,{to:"https://github.com/natansilva31/TodoApp/issues/new",children:t.jsxs(B,{children:[t.jsx(Wt,{className:"BugReportRoundedIcon"}),"   Reportar problema"," ",!!(b||b===0)&&t.jsx(N,{title:`${b} questões em aberto`,children:t.jsx(we,{clr:"#3bb61c",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(Gt,{style:{fontSize:"18px"}})," ",b]})})})]})}),t.jsx(J,{to:"https://buymeacoffee.com/natansilva31",children:t.jsxs(B,{className:"bmcMenu",children:[t.jsx(wn,{className:"bmc-icon",src:z.darkmode?an:sn}),"   Compre-me um café"," ",y&&t.jsx(N,{title:`${y} supporters on Buy me a coffee`,children:t.jsx(we,{clr:"#f93c58",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(Ht,{style:{fontSize:"16px"}})," ",y]})})})]})}),t.jsx(Re,{}),u&&!ee&&t.jsxs(B,{onClick:c,children:[U.os==="Android"?t.jsx(_t,{}):t.jsx(qt,{className:"InstallDesktopRoundedIcon"}),"  Instalar aplicativo"]}),U.browser==="Safari"&&U.os==="iOS"&&!window.matchMedia("(display-mode: standalone)").matches&&t.jsxs(B,{onClick:()=>{R(t.jsxs("div",{style:{display:"inline-block"},children:["Para instalar o aplicativo no iOS Safari, clique em"," ",t.jsx(Yt,{sx:{verticalAlign:"middle",mb:"4px"}})," e depois"," ",t.jsx("span",{style:{fontWeight:"bold"},children:"Adicionar à tela inicial"}),"."]}),{type:"blank",duration:8e3}),g()},children:[t.jsx(Zt,{}),"  Instalar aplicativo"]}),t.jsxs(B,{onClick:()=>{g(),I(!0)},sx:{color:"#ff4040 !important"},children:[t.jsx(_e,{className:"LogoutIcon"}),"   Sair"]}),t.jsxs(vn,{children:[t.jsxs(fn,{onClick:()=>{C(!0),g()},children:[t.jsx(Ke,{className:"SettingsRoundedIcon"}),"   Configurações",JSON.stringify(d)===JSON.stringify(Q.settings)&&e.darkmode===Q.darkmode&&e.theme===Q.theme&&e.emojisStyle===Q.emojisStyle&&t.jsx(it,{})]}),t.jsx(Re,{}),t.jsx(J,{to:"/user",children:t.jsxs(hn,{translate:n?"no":"yes",onClick:g,children:[t.jsx(st,{src:F||void 0,hasimage:r!==null,size:"44px",children:n?n[0].toUpperCase():void 0}),t.jsxs("h4",{style:{margin:0,fontWeight:600},children:[" ",n||"User"]})," ",(n===null||n==="")&&r===null&&t.jsx(it,{})]})}),t.jsx(Re,{}),t.jsxs(lt,{translate:"no",children:[t.jsxs("span",{style:{display:"flex",alignItems:"center"},children:["Feito com  ",t.jsx(Xt,{sx:{fontSize:"14px"}})]}),t.jsx("span",{style:{marginLeft:"6px",marginRight:"4px"},children:"by"}),t.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:"https://github.com/natansilva31",children:"natansilva31"})]}),t.jsx(lt,{children:L&&t.jsx(N,{title:It(new Date(L)),children:t.jsxs("span",{children:["Última atualização:"," ",new Intl.DateTimeFormat(navigator.language,{dateStyle:"long",timeStyle:"medium"}).format(new Date(L))]})})})]})]}),t.jsxs(Ee,{open:ie,onClose:()=>Z(!1),children:[t.jsx(Me,{title:"App installed successfully!",subTitle:"The app is now running as a PWA.",icon:t.jsx(Kt,{}),onClose:()=>Z(!1)}),t.jsx(me,{children:"Você pode acessá-lo na tela inicial, com suporte offline e recursos como atalhos e emblemas."}),t.jsx(Be,{children:t.jsxs(oe,{onClick:()=>Z(!1),children:[t.jsx(Jt,{}),"   Entendi"]})})]}),t.jsx(Rr,{open:A,onClose:()=>I(!1)}),t.jsx(hr,{open:E,onClose:()=>C(!1)})]})},J=({to:e,children:o})=>{const n={borderRadius:"14px"};return e.startsWith("/")?t.jsx(He,{to:e,style:n,children:o}):t.jsx("a",{href:e,target:"_blank",style:n,children:o})},it=()=>t.jsx(gn,{children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Qt,{style:{fontSize:"16px"}})})}),pn=a.div`
  position: absolute;
  right: 16vw;
  top: 14px;
  z-index: 900;
  @media (max-width: 1024px) {
    right: 16px;
  }
`,xn=a(Bt)`
  & .MuiPaper-root {
    border-radius: 24px 0 0 0;
    min-width: 300px;
    box-shadow: none;
    padding: 4px 12px;
    color: ${({theme:e})=>e.darkmode?$.fontLight:"#101727"};
    z-index: 999;

    @media (min-width: 1920px) {
      min-width: 310px;
    }

    @media (max-width: 1024px) {
      min-width: 270px;
    }

    @media (max-width: 600px) {
      min-width: 55vw;
    }
  }
`,mn=Y`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9) translateX(-2px);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,un=Y`
   0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(2px);
  }
  70% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`,B=a(xe)`
  /* margin: 0px 8px; */
  padding: 16px 12px;
  border-radius: 14px;
  box-shadow: none;
  font-weight: 500;
  gap: 6px;

  & svg,
  .bmc-icon {
    transition: 0.4s transform;
  }

  &:hover {
    & svg.GitHubIcon {
      transform: rotateY(${2*Math.PI}rad);
    }
    & svg.BugReportRoundedIcon {
      transform: rotate(45deg) scale(1.1) translateY(-10%);
    }

    & svg.InstallDesktopRoundedIcon {
      animation: ${un} 0.8s ease-in alternate;
    }

    & svg.LogoutIcon {
      animation: ${mn} 0.5s ease-in alternate;
    }

    & .bmc-icon {
      animation: ${on} 2.5s ease-in alternate;
    }
  }
`,fn=a(B)`
  background: ${({theme:e})=>e.darkmode?"#1f1f1f":"#101727"};
  color: ${$.fontLight} !important;
  margin-top: 8px !important;
  &:hover {
    background: ${({theme:e})=>e.darkmode?"#1f1f1fb2":"#101727b2"};
    & svg.SettingsRoundedIcon {
      transform: rotate(180deg);
    }
  }
`,hn=a(B)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({theme:e})=>e.darkmode?"#1f1f1f":"#d7d7d7"};
  &:hover {
    background: ${({theme:e})=>e.darkmode?"#1f1f1fb2":"#d7d7d7b2"};
  }
`,we=a.span`
  margin-left: auto;
  font-weight: 600;
  background: ${({clr:e,theme:o})=>(e||o.primary)+"35"};
  color: ${({clr:e,theme:o})=>e||o.primary};
  padding: 2px 12px;
  border-radius: 32px;
  font-size: 14px;
`,Re=a(ke)`
  margin: 8px 4px;
`,gn=a(we)`
  animation: ${({theme:e})=>Te(e.primary,6)} 1.2s infinite;
  padding: 6px;
  margin-right: 4px;
`,bn=a.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 16px;
  gap: 12px;
  cursor: pointer;
`,yn=a.img`
  width: 52px;
  height: 52px;
  margin-left: 12px;
  border-radius: 14px;
`,jn=a.h2`
  & span {
    color: #7764e8;
  }
`,wn=a.img`
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
`,vn=a.div`
  margin-top: auto;
  margin-bottom: ${window.matchMedia("(display-mode: standalone)").matches&&/Mobi/.test(navigator.userAgent)?"38px":"16px"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lt=a.div`
  font-size: 12px;
  margin: 0;
  opacity: 0.8;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    backdrop-filter: none !important;
  }
`,kn=40,La=350,Ra=100,Da=14,Pa=255,Cn=20,ge=3,ct=32,za=/((?:https?):\/\/[^\s/$.?#].[^\s]*)/gi,Tt=()=>{const[e,o]=l.useState("unknown");return l.useEffect(()=>{const n=s=>{o(s.matches?"dark":"light")},r=window.matchMedia("(prefers-color-scheme: dark)");return o(r.matches?"dark":"light"),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e},Sn={MuiTooltip:{defaultProps:{disableInteractive:!0,style:{backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)"}}},MuiButton:{styleOverrides:{root:{padding:"12px 24px",borderRadius:"14px"}}},MuiSelect:{styleOverrides:{root:{borderRadius:"18px"}}},MuiDialog:{defaultProps:{slotProps:{paper:{style:{padding:"12px",borderRadius:"24px",minWidth:"400px"}}}}},MuiAvatar:{styleOverrides:{root:{fontWeight:500,color:"#fff"}}},MuiAlert:{styleOverrides:{root:{borderRadius:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiInputBase-root":{borderRadius:"16px"}}}}},$n=(e,o="#232e58",n="dark")=>eo({components:{...Sn},palette:{primary:{main:e},secondary:{main:o},warning:{main:n==="dark"?$.orange:$.orangeDark},error:{main:$.red},mode:n}}),Ge=Object.entries(_o).map(([e,o])=>({name:e,MuiTheme:$n(o.primaryColor,o.secondaryColor)})),En=(e,o,n)=>{switch(e){case"light":return!1;case"dark":return!0;case"system":return o==="dark";case"auto":return h(n)===$.fontLight;default:return!1}},Fa=({selectedCategories:e,onCategoryChange:o,width:n,fontColor:r})=>{const{user:s}=l.useContext(X),{categories:d,emojisStyle:x,favoriteCategories:m}=s,[p,A]=l.useState(e),[I,E]=l.useState(!1),C=Je(),D=Tt(),O=b=>{const T=b.target.value;if(T.length>ge){R(`You cannot add more than ${ge} categories`,{type:"error",position:"top-center"});return}const y=d.filter(S=>T.includes(S.id));A(y),o==null||o(y)},L=d.filter(b=>m&&m.includes(b.id)),j=d.filter(b=>!m||!m.includes(b.id));return t.jsxs(to,{sx:{width:n||"100%"},children:[t.jsx(yt,{sx:{color:r?`${r}e8`:`${$.fontLight}e8`,marginLeft:"8px",fontWeight:500},children:"Categoria"}),t.jsx(In,{multiple:!0,width:n,value:p.map(b=>b.id),onChange:O,open:I,onOpen:()=>E(!0),onClose:()=>E(!1),IconComponent:()=>t.jsx(M,{sx:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:()=>E(b=>!b),children:t.jsx(Fe,{sx:{marginRight:"14px",color:r||$.fontLight,transform:I?"rotate(180deg)":"none"}})}),displayEmpty:!0,renderValue:()=>p.length>0?t.jsx(M,{sx:{display:"flex",flexWrap:"wrap",gap:"4px 8px"},children:p.map(b=>t.jsx(Tr,{category:b,sx:{cursor:"pointer"},glow:!1},b.id))}):t.jsx(M,{sx:{color:r},children:"Selecione Categorias"}),MenuProps:{PaperProps:{style:{maxHeight:450,zIndex:999999,padding:"0px 8px",background:En(s.darkmode,D,C.palette.secondary.main)?"#2f2f2f":"#ffffff"}}},children:(()=>{const b=y=>t.jsxs(An,{value:y.id,clr:y.color,translate:"no",disable:p.length>=ge&&!p.some(S=>S.id===y.id),children:[p.some(S=>S.id===y.id)&&t.jsx(no,{}),y.emoji&&t.jsx(Ae,{unified:y.emoji,emojiStyle:x})," ",y.name]},y.id),T=(y,S,z)=>y.length===0?[]:[t.jsx(Rn,{children:S},z),...y.map(b)];return d&&d.length>0?[t.jsx(Tn,{disabled:!0,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("b",{children:["Selecione Categorias"," ",t.jsx("span",{style:{transition:".3s color",color:p.length>=ge?"#f34141":"currentcolor"},children:d.length>3&&t.jsxs("span",{children:["(max ",ge,")"]})})]}),t.jsxs(Mn,{children:["Selecionado:"," ",p.length>0?new Intl.ListFormat("en",{style:"long",type:"conjunction"}).format(p.map(y=>y.name)):t.jsx("span",{style:{fontStyle:"italic"},children:"nenhum"})]})]})},"header-info"),...T(L,t.jsxs(t.Fragment,{children:[t.jsx(Xe,{color:"warning",sx:{fontSize:"18px"}})," Categorias favoritas"]}),"header-favorites"),...T(j,L.length>0?"Other Categories":"","header-others"),t.jsxs("div",{style:{margin:"8px"},children:[t.jsx(ke,{sx:{mb:"12px",mt:"16px"}}),t.jsx(He,{to:"/categories",children:t.jsxs(V,{fullWidth:!0,variant:"outlined",sx:{mb:"8px",mt:"2px"},children:[t.jsx(oo,{}),"   Modificar categorias"]})})]},"footer")]:[t.jsxs(Ln,{disableTouchRipple:!0,children:[t.jsx("p",{children:"Você não tem nenhuma categoria"}),t.jsx(He,{to:"/categories",style:{width:"100%"},children:t.jsxs(V,{fullWidth:!0,variant:"outlined",children:[t.jsx(Se,{}),"   Criar categoria"]})})]},"no-categories")]})()})]})},In=a(gt)`
  margin: 12px 0;
  border-radius: 16px !important;
  transition: 0.3s all;
  width: ${({width:e})=>e||"100%"};

  /* background: #ffffff18; */
  z-index: 999;
  border: none !important;
`,An=a(xe)`
  padding: 12px 16px;
  border-radius: 16px;
  margin: 8px;
  display: flex;
  gap: 4px;
  font-weight: 600;
  transition: 0.2s all;
  color: ${e=>h(e.clr||$.fontLight)};
  background: ${({clr:e})=>e};
  opacity: ${({disable:e})=>e?".6":"none"};
  &:hover {
    background: ${({clr:e})=>e};
    opacity: ${({disable:e})=>e?"none":".8"};
  }

  &:focus {
    opacity: none;
  }

  &:focus-visible {
    border-color: ${({theme:e})=>e.primary} !important;
  }

  &.Mui-selected {
    background: ${({clr:e})=>e};
    color: ${e=>h(e.clr||$.fontLight)};
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 800;
    &:hover {
      background: ${({clr:e})=>e};
      opacity: 0.7;
    }
  }
`,Tn=a(xe)`
  opacity: 1 !important;
  font-weight: 500;
  position: sticky !important;
  top: 0;
  z-index: 99;
  pointer-events: none !important;
  cursor: default !important;
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  line-height: 20px;
`,Mn=a.div`
  opacity: 0.9;
  font-size: 15px;
  word-break: break-all;
  max-width: 300px;
`,Ln=a(xe)`
  opacity: 1 !important;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 12px 0;
  gap: 6px;
  cursor: default !important;
  & p {
    margin: 20px 0 32px 0;
  }
  &:hover {
    background: transparent !important;
  }
`,Rn=a(bt)`
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  font-weight: 600;
  position: sticky;
  z-index: 1;
  top: 52px;
  line-height: 28px;
  display: flex;
  align-items: center;
`,Oa=({title:e})=>{const o=Ze();return t.jsxs(Dn,{children:[t.jsx(Fn,{size:"large","aria-label":"Back",onClick:()=>o("/"),children:t.jsx(Pn,{})}),t.jsx(zn,{children:e})]})},Dn=a.div`
  margin: 0;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background: ${({theme:e})=>e.secondary+"c1"};
  transition:
    background 0.3s,
    color 0.3s;
  margin-bottom: 48px;
`,Pn=a(ro)`
  color: ${({theme:e})=>h(e.secondary)};
`,zn=a.h2`
  font-size: 28px;
  margin: 0 auto;
  text-align: center;
  padding: 4px 0 8px 0;
  /* text-shadow: 0 0 24px #00000068; */
`,Fn=a(Ce)`
  position: absolute;
  color: ${({theme:e})=>h(e.secondary)};
  @media (max-width: 1024px) {
    margin-top: 4px;
  }
`,Mt=()=>{const[e,o]=l.useState(navigator.onLine);return l.useEffect(()=>{const n=()=>o(!0),r=()=>o(!1);return window.addEventListener("online",n),window.addEventListener("offline",r),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}},[]),e},Me=({title:e,subTitle:o,icon:n,removeDivider:r,onClose:s,...d})=>t.jsxs(ao,{...d,children:[s&&t.jsx(Bn,{onClick:s,size:"small",children:t.jsx(so,{})}),t.jsxs(On,{children:[n&&t.jsx(Un,{children:n}),t.jsxs(Vn,{children:[t.jsx(Nn,{children:e}),o&&t.jsx(Wn,{children:o})]})]}),!r&&t.jsx(Gn,{})]}),On=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  max-width: 400px;
`,Bn=a(Ce)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 1;
`,Un=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({theme:e})=>e.darkmode?"#5c5c5c":"#E5E5E8"};
  box-shadow: 0px 0px 1px ${({theme:e})=>e.darkmode?"#5c5c5c":"#E5E5E8"};
  color: ${({theme:e})=>e.darkmode?"#c2c2c2":"#696969"};
  width: 24px;
  height: 24px;
  padding: 12px;
  border-radius: 16px;
`,Vn=a.div`
  line-height: 1.3em;
`,Nn=a.div`
  font-weight: 600;
  opacity: 0.9;
`,Wn=a.div`
  font-size: 14px;
  opacity: 0.7;
`,Gn=a(ke)`
  margin-top: 16px;
`,Ba=({emoji:e,setEmoji:o,color:n,name:r,type:s})=>{const{user:d,setUser:x}=l.useContext(X),{emojisStyle:m,settings:p}=d,[A,I]=l.useState(!1),[E,C]=l.useState(e||null),D=Mt(),O=$e(),L=()=>{const g=JSON.parse(localStorage.getItem("epr_suggested")||"null");return g?(g.sort((P,K)=>K.count-P.count),g.slice(0,6).map(P=>P.unified)):[]};l.useEffect(()=>{o(E)},[E,o]),l.useEffect(()=>{e===""&&C(null)},[e]);const j=()=>{I(g=>!g)},b=g=>{j(),C(g.unified)},T=()=>{j(),C(null)},[y,S]=l.useState(!1),[z,ne]=l.useState(null);l.useEffect(()=>{(async()=>{if(window.ai){const u=await window.ai.languageModel.create();ne(u)}})()},[]);async function F(){const g=new Date().getTime();S(!0);try{const w=await(z||await window.ai.languageModel.create()).prompt(`Pick one emoji that best fits the task: "${r}". Reply with the chosen emoji only, no text or explanation.`);console.log("Full AI response:",w);const P=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})","gu"),K=w.trim().replace(/\*/g,"").match(P)||[],ee=[...new Set(K)];if(console.log("Unique Emojis:",ee),ee.length===0){C(null),R(t.jsxs("div",{children:[t.jsx("b",{children:"No emoji found."})," ",t.jsx("br",{})," Please try again with different ",s," name."]}),{type:"error"}),console.error("No emoji found.");return}let q=ee[0];const ie={":joy:":"😄",":smile:":"😄",":heart:":"❤️","<3":"❤️",":sunglasses:":"😎",":thinking_head:":"🤔",":technology:":"💻",":tech:":"💻",":ml:":"🧠",":wave:":"👋",":O":"😮","☮":"✌️","🎙":"🎙️","🗣":"🗣️","✈":"✈️","🍽":"🍽️","⌨":"⌨️","🖱":"🖱️"};q in ie&&(q=ie[q],console.log("Emoji replaced with:",q));const Z=_(q.replaceAll(":",""));console.log("Emoji unified:",Z),P.test(q)?(S(!1),C(Z)):(C(null),R(t.jsxs("div",{children:[t.jsx("b",{children:"Invalid emoji."})," ",t.jsx("br",{})," Please try again with different ",s," name."]}),{type:"error"}),console.error("Invalid emoji.",Z))}catch(u){S(!1),C(null),console.error(u),R(t.jsxs("div",{children:[t.jsx("b",{children:"Falied to generate emoji."}),t.jsx("br",{}),String(u)]}),{type:"error",duration:8e3})}finally{S(!1);const u=new Date().getTime();console.log(`%cTook ${u-g}ms to generate.`,`color: ${u-g>1500?"orange":"lime"}`)}}const _=g=>Array.from(g).map(u=>{var w;return((w=u.codePointAt(0))==null?void 0:w.toString(16).toUpperCase())||""}).join("-").toLowerCase(),re=()=>{const g=n?h(n):$.fontLight;if(y)return t.jsx(ze,{size:40,thickness:5,sx:{color:g}});if(E){const u=m===W.NATIVE&&U.os==="iOS"?64:m===W.NATIVE?48:64;return t.jsx(Kn,{children:t.jsx(Ae,{size:u,emojiStyle:m,unified:E})},E)}else return t.jsx(et,{sx:{fontSize:"52px",color:g,transition:".3s all"}})};return l.useEffect(()=>{I(!1)},[d.settings.simpleEmojiPicker]),t.jsxs(t.Fragment,{children:[t.jsx(Hn,{children:t.jsx(jt,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:t.jsx(Yn,{onClick:j,children:t.jsx(io,{})}),children:t.jsx(Zn,{clr:n,onClick:j,children:re()})})}),"ai"in window&&r!==void 0&&t.jsx(N,{title:r?void 0:`Enter a name for the ${s} to find emoji`,children:t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsxs(V,{onClick:F,disabled:(r==null?void 0:r.length)<3||(s==="task"?r.length>kn:r.length>Cn),style:{marginBottom:"4px"},children:[t.jsx(lo,{}),"   Find emoji with AI"]})})}),A&&p.simpleEmojiPicker&&t.jsx(qn,{children:t.jsx(l.Suspense,{fallback:t.jsx(ze,{size:40,thickness:5}),children:t.jsx(nt,{style:{border:"none"},reactionsDefaultOpen:!0,lazyLoadEmojis:!0,reactions:L(),emojiStyle:m,onReactionClick:b,allowExpandReactions:!1,theme:O.darkmode?Le.DARK:Le.LIGHT,autoFocusSearch:!1})})}),A&&!p.simpleEmojiPicker&&t.jsx(t.Fragment,{children:t.jsxs(Ee,{open:A,onClose:j,slotProps:{paper:{style:{padding:"12px",borderRadius:"24px",minWidth:"400px"}}},children:[t.jsx(Me,{title:"Choose Emoji",subTitle:`Choose the perfect emoji for your ${s}.`,onClose:j,icon:t.jsx(et,{})}),t.jsxs(me,{sx:{p:0,m:0},children:[!D&&m!==W.NATIVE&&t.jsxs(M,{sx:{mx:"14px",mb:"16px"},children:[t.jsx(Pe,{severity:"warning",children:"Emojis may not load correctly when offline. Try switching to the native emoji style."}),t.jsxs(V,{variant:"outlined",color:"warning",fullWidth:!0,sx:{mt:"14px"},onClick:()=>{x(g=>({...g,emojisStyle:W.NATIVE}))},children:[t.jsx(co,{}),"   Switch to Native Emoji"]})]}),t.jsx(_n,{children:t.jsx(l.Suspense,{fallback:!p.simpleEmojiPicker&&t.jsx(Xn,{pickerTheme:O.darkmode?"dark":"light"}),children:t.jsx(nt,{width:"100vw",height:"550px",reactionsDefaultOpen:p.simpleEmojiPicker&&L().length!==0,reactions:L(),emojiStyle:m,theme:O.darkmode?Le.DARK:Le.LIGHT,suggestedEmojisMode:Ho.FREQUENT,autoFocusSearch:!1,onEmojiClick:b,searchPlaceHolder:"Search emoji",previewConfig:{defaultEmoji:"1f4dd",defaultCaption:`Choose the perfect emoji for your ${s}`}})})})]}),t.jsxs(Be,{children:[E&&t.jsxs(oe,{color:"error",onClick:T,children:[t.jsx(po,{}),"   Remove Emoji"]}),t.jsx(oe,{onClick:j,children:"Cancel"})]})]})})]})},Hn=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px;
`,_n=a(me)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  animation: ${ue} 0.4s ease-in;
  padding: 0;
`,qn=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  animation: ${ue} 0.4s ease-in;
  padding: 0;
`,Zn=a(Oe)`
  background: ${({clr:e,theme:o})=>e||o.primary};
  transition: 0.3s all;
  cursor: pointer;
  width: 96px;
  height: 96px;
`,Yn=a(Oe)`
  background: #9c9c9c81;
  backdrop-filter: blur(6px);
  cursor: pointer;
`,Xn=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({width:e})=>e||"350px"};
  height: 500px;
  width: 100vw;
  padding: 8px;
  border-radius: 20px;
  background: transparent;
  border: ${({pickerTheme:e})=>`1px solid ${e==="dark"?"#151617":"#e7e7e7"}`};
`,Kn=a.div`
  animation: ${ue} 0.4s ease-in;
`,dt=({options:e,value:o,onChange:n})=>t.jsx(Jn,{value:o,onChange:r=>n(r.target.value),children:e.map(r=>t.jsx(wt,{value:r.value,control:t.jsx(mo,{sx:{display:"none"}}),label:t.jsxs(Qn,{selected:o===r.value,sx:{border:"1px solid",borderColor:"divider"},children:[t.jsx(G,{fontSize:"28px",children:r.icon}),t.jsx(er,{translate:"no",variant:"body2",children:r.label})]})},r.value))}),Jn=a(xo)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  margin: 0px 6px;
  padding: 8px;
  width: 100%;
  max-width: calc(100% - 24px);
  box-sizing: border-box;
  @media (max-width: 768px) {
    gap: 4px;
  }
`,Qn=a(M)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  width: 100px;
  height: 100px;
  color: ${({theme:e,selected:o})=>o&&h(e.primary)};
  background-color: ${({theme:e,selected:o})=>o?e.primary:"transparent"};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  user-select: none;
  & .epr-emoji-native {
    width: unset !important;
    height: unset !important;
  }

  &:hover {
    background-color: ${({theme:e,selected:o})=>o?e.primary:"rgba(0, 0, 0, 0.08)"};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 2px;
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`,er=a(G)`
  font-weight: 500;
  text-align: center;
  max-width: 100px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=({header:e,text:o,settingKey:n})=>{const{user:r,setUser:s}=l.useContext(X),d=()=>{const x={...r.settings,[n]:!r.settings[n]};s(m=>({...m,settings:x}))};return t.jsxs(M,{sx:{p:2,display:"flex",flexDirection:"column"},children:[t.jsxs(M,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx(G,{variant:"h6",sx:{fontWeight:600,color:"text.primary",fontSize:"16px"},children:e}),t.jsx(vt,{children:t.jsx(wt,{control:t.jsx(uo,{checked:r.settings[n],onChange:d}),label:""})})]}),o&&t.jsx(G,{variant:"body2",sx:{color:"text.secondary",mt:0},children:o})]})},tr=e=>{const o=Ue();return t.jsx(gt,{fullWidth:!0,MenuProps:{PaperProps:{style:{maxHeight:o?400:220,overflowY:"auto"}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},...e})},pt=a(tr)`
  margin: 8px 0;
`,ce=a(G)`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`,te=a(G)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 4px;
`,or=a(G)`
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 8px;
`,nr=e=>{const o=Ue();return t.jsx(ho,{iconPosition:o?"top":"start",...e})},rr=a(nr)`
  justify-content: flex-start;
  margin-right: 12px;
  border-radius: 14px;
  min-height: 0;
  padding: 18px;
  &.Mui-selected {
    background-color: ${({theme:e})=>e.primary+"23"};
  }
  @media (max-width: 768px) {
    margin-right: 0;
    font-size: 13px;
    min-height: 0;
    padding: 10px 6px;
    margin: 0 8px;
    border-radius: 14px;
  }
`,xt=a(xe)`
  padding: 12px 20px;
  border-radius: 12px;
  margin: 0 8px;
  display: flex;
  gap: 6px;
`,ar=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  opacity: 0.8;
  font-weight: 500;
  max-width: 330px;
  margin: 0 auto;
`,sr=a(fo)`
  margin: 8px 0;
  background: #afafaf2b;
  padding: 12px 24px 12px 18px;
  border-radius: 18px;
  transition: 0.3s all;
  width: 100%;
`,ir=a(bt)`
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  font-weight: 600;
  position: sticky;
  z-index: 1;
  top: 0;
`,lr="/TodoApp/assets/baner-BaBMvPN-.png",cr=({name:e,description:o,keys:n})=>t.jsxs(dr,{children:[t.jsxs(pr,{children:[t.jsx(G,{fontWeight:600,children:e}),o&&t.jsx(G,{variant:"body2",color:"text.secondary",children:o})]}),t.jsx(xr,{children:n.map((r,s)=>t.jsx(mr,{children:r},s))})]}),dr=a(M)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  gap: 8px;
  border-bottom: 1px solid
    ${({theme:e})=>e.darkmode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
`,pr=a(M)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,xr=a(M)`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`,mr=a("kbd")`
  background: ${({theme:e})=>e.darkmode?"#2c2c2e":"#f2f2f2"};
  border: 1px solid ${({theme:e})=>e.darkmode?"#4c4c4e":"#d0d0d0"};
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 0.85rem;
  font-family: "Roboto Mono", monospace;
  color: ${({theme:e})=>e.darkmode?"#fff":"#111"};
  box-shadow: ${({theme:e})=>e.darkmode?"inset 0 -1px 0 rgba(255, 255, 255, 0.1)":"inset 0 -1px 0 rgba(0, 0, 0, 0.05)"};
  transition: all 0.2s ease;
`,ve=32,ur=[{label:"Auto",value:"auto",icon:t.jsx(Ao,{sx:{fontSize:ve}})},{label:"System",value:"system",icon:t.jsx(kt,{sx:{fontSize:ve}})},{label:"Light",value:"light",icon:t.jsx(To,{sx:{fontSize:ve}})},{label:"Dark",value:"dark",icon:t.jsx(Mo,{sx:{fontSize:ve}})}],fr=[{label:"Apple",value:W.APPLE},{label:"Facebook",value:W.FACEBOOK},{label:"Discord",value:W.TWITTER},{label:"Google",value:W.GOOGLE},{label:"Native",value:W.NATIVE}].map(({label:e,value:o})=>({label:e,value:o,icon:t.jsx(Ae,{emojiStyle:o,unified:"1f60e",size:ve})})),De=[{icon:t.jsx($o,{}),label:"Aparência"},{icon:t.jsx(Ke,{}),label:"Em geral"},{icon:t.jsx(Eo,{}),label:"Emoji"},{icon:t.jsx(Ct,{}),label:"Ler em voz alta"},{icon:t.jsx(Io,{}),label:"Atalhos"},{icon:t.jsx(St,{}),label:"Sobre"}],hr=({open:e,onClose:o})=>{const{user:n,setUser:r}=l.useContext(X),[s,d]=l.useState(0),[x,m]=l.useState(n.darkmode),[p,A]=l.useState(n.emojisStyle),[I,E]=l.useState([]),[C,D]=l.useState(n.settings.voiceVolume),[O,L]=l.useState(n.settings.voiceVolume),[j,b]=l.useState(!1),[T,y]=l.useState(void 0),S=Ue(),z=Je(),ne=Tt(),F=Mt(),_=c=>c.replace(/\s+/g,""),re=(c,i)=>{d(i);const f=_(De[i].label);window.location.hash=`#settings/${f}`};l.useEffect(()=>{const c=()=>{const f=window.location.hash.match(/^#settings\/(\w+)/);if(f){const v=f[1],k=De.findIndex(fe=>_(fe.label)===v);k!==-1&&d(k)}};return c(),window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),l.useEffect(()=>{if(!e)return;if(!window.location.hash.match(/^#settings\/(\w+)/)){const f=_(De[0].label);window.location.hash=`#settings/${f}`}},[e]);const g=()=>{window.speechSynthesis&&window.speechSynthesis.cancel(),b(!1),o(),history.replaceState(null,"",window.location.pathname+window.location.search)};l.useEffect(()=>{const c=document.querySelector("meta[name=theme-color]"),i=z.palette.secondary.main;c&&(e?c.setAttribute("content",z.palette.mode==="dark"?"#383838":"#ffffff"):c.setAttribute("content",i))},[z.palette.mode,z.palette.secondary.main,e,n.theme,n.darkmode]),l.useEffect(()=>{b(!1),window.speechSynthesis&&window.speechSynthesis.cancel()},[n.settings.voiceVolume,n.settings.voice]);const u=c=>{const i=c.target.value;r(f=>({...f,theme:i}))},w=()=>{if(!window.speechSynthesis)return[];const c=window.speechSynthesis.getVoices()??[],i=[];for(const f of c)i.push(f);return i};l.useEffect(()=>{const c=w();E(c??[]),(async()=>{const f=await navigator.storage.estimate();y(f.usage)})()},[]),window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{const c=w();E(c??[])});const P=c=>{const i=c.target.value;i&&r(f=>({...f,settings:{...f.settings,voice:i}}))},K=I.filter((c,i,f)=>i===f.findIndex(v=>v.lang===c.lang&&v.default===c.default&&v.localService===c.localService&&v.name===c.name&&v.voiceURI===c.voiceURI)).sort((c,i)=>{const f=c.lang.startsWith(navigator.language),v=i.lang.startsWith(navigator.language);return f&&!v?-1:!f&&v?1:c.lang.localeCompare(i.lang)}),ee=c=>{if(!c)return"";const i=c.split("-");if(i.length>1)try{return new Intl.DisplayNames([c],{type:"region"}).of(i[1])}catch(f){return console.error("Error:",f),c}else return c},q=(c,i)=>{r(f=>({...f,settings:{...f.settings,voiceVolume:i}}))},ie=()=>{const c=C;L(c);const i=c===0?O!==0?O:Q.settings.voiceVolume:0;r(f=>({...f,settings:{...f.settings,voiceVolume:i}})),D(i)},Z=c=>{var k;const i=(k=c.split("-").pop())==null?void 0:k.toUpperCase().slice(0,2);if(!i||i.length!==2)throw new Error("Invalid country code format");const[f,v]=[...i].map(fe=>fe.charCodeAt(0)-65+127462);return`${f.toString(16)}-${v.toString(16)}`};return t.jsxs(Ee,{open:e,onClose:g,maxWidth:"md",fullWidth:!0,fullScreen:S,slotProps:{paper:{style:{padding:S?"12px 0":"12px",borderRadius:S?0:"24px",minWidth:"400px",maxHeight:S?void 0:"500px",overflow:"hidden"}}},children:[t.jsx(Me,{icon:t.jsx(Ke,{}),title:"Configurações",subTitle:"Gerencie suas configurações e preferências",onClose:g,removeDivider:!0}),t.jsx(ke,{sx:{mb:2}}),t.jsxs(me,{sx:{display:"flex",minHeight:400,m:0,p:0,overflow:"hidden"},children:[t.jsx(go,{orientation:"vertical",value:s,onChange:re,variant:"scrollable","aria-label":"Settings tabs",sx:{borderRight:1,borderColor:"divider"},children:De.map((c,i)=>l.createElement(rr,{icon:c.icon,label:c.label,...gr(i),key:i}))}),t.jsx(M,{className:"customScrollbar",sx:{flex:1,p:0,m:S?"0 12px":"0 20px 0 20px",overflowY:"auto"},children:t.jsxs(Dr,{value:s,name:"settings",children:[t.jsxs(de,{index:0,children:[t.jsx(ce,{children:"Aparência"}),t.jsx(te,{children:"Opções de Modo Escuro"}),t.jsx(dt,{options:ur,value:x,onChange:c=>{m(c),r(i=>({...i,darkmode:c}))}}),t.jsx(te,{children:"Seleção de Tema"}),t.jsxs(pt,{value:n.theme,onChange:u,IconComponent:Fe,children:[t.jsxs(xt,{value:"system",children:[t.jsx(kt,{}),"  System (",ne==="dark"?Ge[0].name:Ge[1].name,")"]}),Ge.map(c=>t.jsxs(xt,{value:c.name,children:[t.jsx(qe,{clr:c.MuiTheme.palette.primary.main,secondClr:c.MuiTheme.palette.secondary.main,"aria-label":`Change theme - ${c.name}`,size:"24px",disableHover:!0})," ",c.name]},c.name))]}),t.jsx(be,{settingKey:"enableGlow",header:"Habilitar efeito de brilho",text:"Adicione um brilho suave às tarefas para melhor visibilidade."})]}),t.jsxs(de,{index:1,children:[t.jsx(ce,{children:"Configurações Gerais"}),t.jsx(be,{settingKey:"enableCategories",header:"Habilitar categorias",text:`
              Habilite categorias para organizar suas tarefas.`}),U.isPWA&&"setAppBadge"in navigator&&t.jsx(be,{settingKey:"appBadge",header:"App Badge",text:"Show a badge on the PWA icon to indicate the number of not done tasks."}),t.jsx(be,{settingKey:"doneToBottom",header:"Tarefas concluídas na parte inferior",text:"Mova as tarefas concluídas para o final da lista para manter suas tarefas ativas mais visíveis."})]}),t.jsxs(de,{index:2,children:[t.jsx(ce,{children:"Configurações de Emoji"}),t.jsx(te,{children:"Estilos de Emoji"}),t.jsx(dt,{options:fr,value:p,onChange:c=>{A(c),r(i=>({...i,emojisStyle:c}))}}),!F&&t.jsxs(Pe,{severity:"warning",sx:{mt:"8px"},children:[t.jsx(Ve,{children:"Modo Offline"}),"Você está atualmente offline. Estilos de emoji não nativos podem não ser carregados."]}),t.jsx(te,{children:"Seletor de Emoji Simples"}),t.jsx(be,{settingKey:"simpleEmojiPicker",header:"Habilitar seletor de emoji simples",text:`
              Use um seletor de emojis simples com apenas emojis usados ​​recentemente. Isso fará com que o seletor de emojis carregue mais rápido.`}),t.jsx(te,{children:"Dados de Emoji"}),t.jsx(or,{children:" Limpar dados dos emojis recentemente usados"}),t.jsxs(V,{variant:"contained",color:"error",onClick:()=>{localStorage.removeItem("epr_suggested"),R("Removed emoji data.")},children:[t.jsx(bo,{}),"   Limpar dados do Emoji"]})]}),t.jsxs(de,{index:3,children:[t.jsx(ce,{children:"Configurações de Leitura em Voz Alta"}),!("speechSynthesis"in window)&&t.jsxs(Pe,{severity:"error",children:[t.jsx(Ve,{children:"Speech Synthesis Not Supported"}),"Your browser does not support built in text-to-speech."]}),t.jsx(te,{children:"Reproduzir Amostra"}),t.jsxs(V,{variant:"contained",disabled:!("speechSynthesis"in window),sx:{color:h(z.palette.primary.main),mt:"8px"},onClick:()=>{if("speechSynthesis"in window){if(window.speechSynthesis.cancel(),j)window.speechSynthesis.pause();else{const c="Este é um texto de exemplo para testar o recurso de fala.",i=new SpeechSynthesisUtterance(c),f=window.speechSynthesis.getVoices()??[];i.voice=f.find(v=>v.name===n.settings.voice.split("::")[0])||f[0],i.volume=C,i.rate=1,i.onend=()=>{b(!1)},window.speechSynthesis.speak(i)}b(c=>!c)}},children:[j?t.jsx(yo,{}):t.jsx(Ct,{}),"   Teste Reprodução"]}),t.jsx(te,{children:"Seleção de Voz"}),K.length!==0?t.jsx(pt,{value:n.settings.voice,variant:"outlined",disabled:!("speechSynthesis"in window),onChange:P,translate:"no",IconComponent:Fe,MenuProps:{PaperProps:{style:{maxHeight:500,padding:"0px 6px"}}},children:(()=>{const c=K.filter(k=>k.lang.startsWith(navigator.language)),i=K.filter(k=>!k.lang.startsWith(navigator.language)),f=k=>t.jsxs(xe,{value:`${k.name}::${k.lang}`,translate:"no",disabled:k.localService===!1&&!F,sx:{padding:"10px",borderRadius:"8px"},children:[k.name.startsWith("Google")&&t.jsx(Lo,{sx:{mr:"8px"}}),k.name.startsWith("Microsoft")&&t.jsx(Ro,{sx:{mr:"8px"}}),k.name.replace(/^(Google|Microsoft)\s*|\([^()]*\)/gi,""),t.jsx($t,{sx:{fontWeight:500,padding:"4px",ml:"8px"},label:ee(k.lang||""),icon:t.jsx("span",{style:{fontSize:"16px",alignItems:"center",display:"flex"},children:t.jsx(Ae,{unified:Z(k.lang),emojiStyle:n.emojisStyle,size:18})})}),k.default&&U.os!=="iOS"&&U.os!=="macOS"&&t.jsx("span",{style:{fontWeight:600},children:"  Default"}),k.localService===!1&&t.jsx("span",{style:{marginLeft:"auto",display:"flex",alignItems:"center"},children:F?t.jsx(N,{title:"Requires Internet Connection",placement:"left",children:t.jsx(Po,{sx:{fontSize:"18px"}})}):t.jsx(Do,{sx:{fontSize:"18px"}})})]},`${k.name}::${k.lang}`),v=(k,fe,Dt)=>k.length===0?[]:[t.jsx(ir,{children:fe},Dt),...k.map(f)];return[...v(c,`Your Language (${ee(navigator.language)})`,"header-matching"),...v(i,"Other Languages","header-other")]})()}):t.jsxs(ar,{children:["Não há estilos de voz disponíveis.",t.jsx(N,{title:"Refetch voices",children:t.jsx(Ce,{size:"large",onClick:()=>{E(w()??[])},children:t.jsx(jo,{fontSize:"large"})})})]}),!F&&I.some(c=>c.localService===!1)&&t.jsxs(Pe,{severity:"warning",sx:{mt:"8px"},children:[t.jsx(Ve,{children:"Offline Mode"}),"Você está offline no momento. Algumas vozes podem exigir uma conexão com a internet para funcionar.."]}),t.jsx(te,{children:"Volume da voz"}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsxs(sr,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(N,{title:C?"Mute":"Unmute",onClick:ie,children:t.jsx(Ce,{children:C===0?t.jsx(wo,{}):C<=.4?t.jsx(vo,{}):t.jsx(ko,{})})}),t.jsx(Co,{sx:{width:"100%"},value:C,onChange:(c,i)=>D(i),onChangeCommitted:q,min:0,max:1,step:.01,"aria-label":"Volume Slider",valueLabelFormat:()=>{const c=Math.floor(C*100);return c===0?"Muted":c+"%"},valueLabelDisplay:"auto"})]})})]}),t.jsxs(de,{index:4,children:[t.jsx(ce,{children:"Atalhos de teclado"}),t.jsx(cr,{name:"Exportação rápida",description:"Salve todas as tarefas e baixe como arquivo JSON",keys:["Ctrl","S"]})]}),t.jsxs(de,{index:5,children:[t.jsx(ce,{children:"Sobre o aplicativo"}),t.jsx(G,{variant:"body1",sx:{mb:2},children:"📝 Um projeto simples de aplicativo de tarefas feito com React.js e MUI com diversos recursos, incluindo compartilhamento de tarefas via link, personalização de tema e uso offline como um plicativo Web Progressivo (PWA)."}),t.jsx("img",{src:lr,style:{width:"100%",height:"auto"},alt:"Todo App Screenshot"}),t.jsxs(G,{variant:"caption",sx:{display:"block",mt:2},children:["Criado por ",t.jsx(tt,{href:"https://github.com/natansilva31",children:"natansilva31"})," ",t.jsx("br",{}),"Explore o projeto no GitHub:"," ",t.jsx(tt,{href:"https://github.com/natansilva31/TodoApp",target:"_blank",rel:"noopener noreferrer",children:"Todo App Repositório"})]}),T!==void 0&&T!==0&&t.jsxs(t.Fragment,{children:[t.jsx(ke,{sx:{my:1}}),t.jsxs(vt,{children:[t.jsxs(yt,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(So,{sx:{fontSize:"18px"}}),"Uso de armazenamento"]}),t.jsxs(M,{sx:{mt:"2px"},children:[T?`${(T/1024/1024).toFixed(2)} MB`:"0 MB",U.os==="iOS"&&" / 50 MB"]})]})]})]})]})})]}),S&&t.jsx(M,{sx:{position:"fixed",bottom:"32px",left:"50%",transform:"translateX(-50%)"},children:t.jsx(V,{variant:"contained",sx:{p:"16px 64px",fontSize:"16px",fontWeight:600,borderRadius:"999px"},onClick:g,children:"Fechar"})})]})};function gr(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const Ua=()=>{const{user:e}=l.useContext(X),{tasks:o,settings:n}=e,[r,s]=l.useState(),d=Je(),x=Ze(),m=Ue(),p=Pt(),A="29px";return l.useEffect(()=>{if(p.pathname.split("/")[1]==="task")s(0);else switch(p.pathname){case"/categories":s(1);break;case"/add":s(2);break;case"/transfer":s(3);break;case"/user":s(4);break;case"/":s(0);break;default:s(void 0)}},[p.pathname]),m?t.jsx(yr,{children:t.jsxs(jr,{showLabels:!0,glow:n.enableGlow,value:r,onChange:(I,E)=>{window.scrollTo({top:0,behavior:"smooth"}),s(E)},children:[t.jsx(ye,{onClick:()=>x("/"),label:"Tasks",icon:t.jsx(jt,{color:"primary",badgeContent:r!==0?o.filter(I=>!I.done).length:void 0,max:99,children:t.jsx(Oo,{sx:{fontSize:A}})})}),t.jsx(ye,{onClick:()=>x("/categories"),label:"Categories",icon:t.jsx(ft,{sx:{fontSize:A}}),disabled:!n.enableCategories}),t.jsx(ye,{onClick:()=>x("add"),showLabel:!1,"aria-label":"Add",icon:t.jsx(br,{clr:d.palette.primary.main,fontSize:"large",animate:o.length===0&&r!==2})}),t.jsx(ye,{onClick:()=>x("transfer"),label:"Transfer",icon:t.jsx(ht,{sx:{fontSize:A}})}),t.jsx(ye,{onClick:()=>x("user"),label:"Profile",icon:t.jsx(Bo,{sx:{fontSize:A}})})]})}):null},br=Ie(Se)`
  border: 2px solid ${({clr:e})=>e};
  background-color: ${({theme:e})=>e.palette.secondary.main};
  font-size: 38px;
  border-radius: 100px;
  padding: 6px;
  margin: 14px;
  transition: background 0.3s;
  ${({animate:e,theme:o})=>e&&pe`
      animation: ${Te(o.palette.primary.main,10)} 1.2s infinite;
    `};
`,yr=Ie(M)`
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  animation: ${en} 0.5s ease;
  z-index: 999;
`,jr=Ie(zo)`
  /* border-radius: 24px 24px 0 0; */
  background: ${({theme:e,glow:o})=>`${e.palette.secondary.main}${o?"c8":"e6"}`};
  backdrop-filter: blur(20px);
  margin: 0px 20px 0px -20px;
  padding: 18px 10px 32px 10px;
  transition:
    0.3s background,
    color;
`,ye=Ie(Fo)`
  border-radius: 18px;
  margin: 4px;
  color: ${({theme:e})=>h(e.palette.secondary.main)};

  &:disabled {
    opacity: 0.6;
    & .MuiBottomNavigationAction-label {
      text-shadow: none;
    }
  }

  & .MuiBottomNavigationAction-label {
    font-size: 13px !important;
  }
`,Va=({color:e,onColorChange:o,width:n,fontColor:r,label:s})=>{const{user:d,setUser:x}=l.useContext(X),{colorList:m}=d,[p,A]=l.useState(e),[I,E]=l.useState(!1),[C,D]=l.useState(Array(m.length).fill(!1)),[O,L]=l.useState(!1),[j,b]=l.useState(e),T=l.useRef([]),y=$e();l.useEffect(()=>{A(e)},[e]);const S=l.useCallback(u=>{A(u),o(u)},[o]);l.useEffect(()=>{Et(e)||(S(y.primary),A(y.primary),console.error("Invalid hex color "+e))},[e,S,y.primary]);const z=u=>{const w=[...C];w[u]=!w[u],D(w)},ne=()=>{L(!0),b(p)},F=()=>{L(!1),b(p)},_=u=>({iconTheme:{primary:u,secondary:h(u)},style:{borderColor:u}}),re=()=>{if(m.length>=ct){R(`You cannot add more than ${ct} colors to color list.`,{type:"error"});return}if(m.some(u=>u.toLowerCase()===j.toLowerCase())||j.toLowerCase()===y.primary.toLowerCase()){R("Color is already in color list.",{type:"error"});return}S(j.toUpperCase()),x({...d,colorList:[...m,j.toUpperCase()]}),R(t.jsxs("div",{children:["Adicionado"," ",t.jsxs("b",{children:[t.jsx(mt,{clr:j}),le(j).name]})," ","à sua lista de cores."]}),_(j)),F()},g=u=>{D(Array(m.length).fill(!1)),R(t.jsxs("div",{children:["Removido"," ",t.jsxs("b",{children:[t.jsx(mt,{clr:u}),le(u).name]})," ","da sua lista de cores."]}),_(u)),x({...d,colorList:m.filter(w=>w!==u)})};return t.jsxs(t.Fragment,{children:[t.jsxs(wr,{onChange:(u,w)=>E(w),isExpanded:I,fontColor:r,sx:{width:n},children:[t.jsx(Vo,{expandIcon:t.jsx(Fe,{sx:{color:r||$.fontLight}}),children:t.jsxs(vr,{clr:r||$.fontLight,children:[!I&&t.jsx(Lt,{clr:p}),s||"Color",!I&&` - ${le(p).name}`]})}),t.jsxs(No,{children:[t.jsxs(kr,{maxWidth:n||400,clr:p,children:[p.toUpperCase()," - ",le(p).name]}),t.jsx(je,{container:!0,maxWidth:n||400,children:t.jsxs(je,{container:!0,spacing:1,maxWidth:n||400,m:1,children:[[y.primary,...m].map((u,w)=>t.jsxs(je,{children:[t.jsx(N,{title:le(u).name,children:t.jsx(qe,{ref:P=>{T.current[w]=P},id:`color-element-${w}`,clr:u,"aria-label":`Select color - ${u}`,onContextMenu:P=>{window.matchMedia("(pointer:fine)").matches&&u!==y.primary&&(P.preventDefault(),z(w))},onClick:()=>{S(u),window.matchMedia("(pointer:fine)").matches||p===u&&u!==y.primary&&z(w)},children:u.toUpperCase()===p.toUpperCase()&&t.jsx(Ir,{})})}),t.jsx(Wo,{open:C[w]===!0,onClose:()=>z(w),anchorEl:T.current[w],anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{sx:{background:"transparent",backdropFilter:"none",boxShadow:"none"}}},children:t.jsx("div",{children:t.jsx(Cr,{onClick:()=>g(u),children:"Excluir"})})})]},u)),t.jsx(N,{title:"Adicionar nova cor",children:t.jsx(je,{children:t.jsx(qe,{clr:"transparent",style:{border:"2px solid",color:r||$.fontLight},onClick:ne,children:t.jsx(Se,{style:{fontSize:"38px"}})})})})]})}),t.jsxs(Sr,{clr:r||$.fontLight,children:[t.jsx(St,{fontSize:"small"})," ",window.matchMedia("(pointer:fine)").matches?"Clique com o botão direito":"Toque duas vezes"," para remover da lista de cores"]})]})]}),t.jsxs(Ee,{open:O,onClose:F,children:[t.jsx(Me,{title:"Escolha uma cor",subTitle:"Adicione uma nova cor à lista de cores.",icon:t.jsx(Go,{}),onClose:F}),t.jsxs(me,{children:[t.jsxs(Er,{children:[j.toUpperCase()," - ",le(j).name]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Ar,{type:"color",value:j,onChange:u=>b(u.target.value)}),t.jsxs($r,{clr:h(j),children:[t.jsx(ot,{})," Escolher a cor"]})]})]}),t.jsxs(Be,{children:[t.jsx(oe,{onClick:F,children:"Cancelar"}),t.jsxs(oe,{onClick:()=>{o(j),F()},children:[t.jsx(ot,{}),"   Aplicar"]}),t.jsxs(oe,{onClick:re,children:[t.jsx(Se,{}),"   Adicionar"]})]})]})]})},wr=a(ut)`
  background: transparent;
  border-radius: 16px !important;
  // match border with other inputs
  border: ${({fontColor:e})=>`1px solid ${se(e)?"rgba(0, 0, 0, 0.23)":"rgb(255, 255, 255, 0.23)"}`};
  box-shadow: none;
  padding: 6px 0;
  margin: 8px 0;
  &:hover {
    border: ${({theme:e,isExpanded:o,fontColor:n})=>o?`1px solid ${se(n)?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`:`1px solid ${e.darkmode?"#ffffff":"#000000"}`};
  }
`,Lt=a.div`
  width: 24px;
  height: 24px;
  background: ${({clr:e})=>e};
  border-radius: 8px;
  transition: 0.3s background;
`,vr=a.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({clr:e})=>e};
  font-size: 16px;
`,mt=a(Lt)`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  display: inline-block;
  margin-right: 5px;
  margin-left: 2px;
  vertical-align: middle;
`,kr=a(je)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({clr:e})=>e};
  color: ${({clr:e})=>h(e)};
  padding: 8px 0;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100px;
  transition: 0.3s all;
  font-weight: 600;
  border: 2px solid #ffffffab;
`,Cr=a.button`
  border: none;
  outline: none;
  background-color: #141431dd;
  color: #ff4e4e;
  font-weight: 500;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 10px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 15px;
  }
`,Sr=a.span`
  color: ${({clr:e})=>e};
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  margin-left: 4px;
  font-size: 14px;
`,$r=a.p`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({clr:e})=>e};
  pointer-events: none;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  font-weight: 600;
`,Er=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
  font-weight: 600;
`,Ir=a(Uo)`
  font-size: 28px;
  animation: ${Qe} 0.25s;
`,Ar=a.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 54px;
  width: 100%;
  display: flex;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 18px;
    border: none;
  }
  &::-moz-color-swatch {
    border-radius: 18px;
    border: none;
  }
`,Tr=({category:e,emojiSizes:o,...n})=>{const{user:r}=l.useContext(X),{emojisStyle:s,settings:d}=r,x=o?s!==W.NATIVE?o[0]:o[1]:20;return t.jsx(Mr,{label:e.name,variant:"outlined",backgroundclr:e.color,glow:d.enableGlow,translate:"no",avatar:e.emoji?t.jsx(Oe,{alt:e.name,sx:{background:"transparent",borderRadius:"0px"},children:t.jsx(Ae,{lazyLoad:!0,size:x,unified:e.emoji,emojiStyle:s})}):void 0,...n},e.id)},Mr=Ie($t)`
  color: ${({backgroundclr:e})=>h(e||"")};
  background-color: ${({backgroundclr:e})=>e};
  box-shadow: ${({glow:e,backgroundclr:o})=>e?`0 0 8px 0 ${o}`:"none"};
  border: ${({borderclr:e})=>e?`1px solid ${e}`:"none"};
  font-weight: bold;
  font-size: 14px;
  margin: 6px 0 0 0;
  padding: 8px;
  transition: 0.3s all;
  animation: ${ue} 0.5s ease-in;

  &:hover {
    background-color: ${({backgroundclr:e})=>`${e} !important`};
    opacity: ${({list:e})=>e&&.7};
  }

  &:focus-visible {
    opacity: 0.5;
    background-color: ${({backgroundclr:e})=>e};
  }

  & .MuiChip-deleteIcon {
    color: ${({backgroundclr:e})=>h(e||"")};
    transition: 0.3s all;
    width: 22px;
    height: 22px;
    stroke: transparent;

    @media (max-width: 1024px) {
      width: 26px;
      height: 26px;
    }

    &:hover {
      color: ${({backgroundclr:e})=>h(e||"")};
    }
  }
`,Na=()=>{const[e,o]=l.useState(!1);return l.useEffect(()=>{const n=setTimeout(()=>{o(!0)},100);return()=>clearTimeout(n)},[]),t.jsx(Lr,{children:e&&t.jsx(ze,{size:80,thickness:4,"aria-label":"loading"})})},Lr=a(M)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;function Rr({open:e,onClose:o}){const{setUser:n}=l.useContext(X),r=()=>{n(Q),o(),R("Você foi desconectado com sucesso")};return t.jsxs(Ee,{open:e,onClose:o,children:[t.jsx(Me,{title:"Confirmação de logout",onClose:o,icon:t.jsx(_e,{})}),t.jsxs(me,{children:["Tem certeza de que deseja sair? ",t.jsx("b",{children:"Suas tarefas não serão salvas."})]}),t.jsxs(Be,{children:[t.jsx(oe,{onClick:o,children:"Cancelar"}),t.jsxs(oe,{onClick:r,color:"error",children:[t.jsx(_e,{}),"   Sair"]})]})]})}const Rt=l.createContext(void 0),Dr=({name:e,value:o,children:n})=>t.jsx(Rt.Provider,{value:{name:e,value:o},children:n}),Pr=()=>{const e=l.useContext(Rt);if(!e)throw new Error("TabPanel must be used within a TabGroupProvider.");return e};function de({children:e,index:o,...n}){const{name:r,value:s}=Pr();return t.jsx("div",{role:"tabpanel",hidden:s!==o,id:`${r}-tabpanel-${o}`,"aria-labelledby":`${r}-tab-${o}`,style:{overflowX:"hidden"},...n,children:s===o&&t.jsx(M,{children:t.jsx(G,{children:e})})})}export{Qr as $,Q as A,Ua as B,$ as C,oe as D,Ge as E,$n as F,En as G,qr as H,ca as I,Oa as J,Da as K,Na as L,Et as M,Nr as N,Zr as O,Ma as P,Mt as Q,Yr as R,la as S,Dr as T,X as U,ra as V,Xr as W,Kr as X,oa as Y,ta as Z,Jr as _,Qe as a,ea as a0,na as a1,aa as a2,ia as a3,sa as a4,st as a5,It as a6,Pa as a7,Rr as a8,Qo as a9,Cn as aa,Ca as ab,ka as ac,$a as ad,Ea as ae,va as af,Ia as ag,Aa as ah,Sa as ai,da as aj,pa as ak,ma as al,ua as am,fa as an,ja as ao,wa as ap,xa as aq,ha as ar,ba as as,ya as at,ga as au,Me as b,de as c,Wr as d,Vr as e,ue as f,h as g,R as h,se as i,Gr as j,Ta as k,_r as l,Tr as m,kn as n,La as o,Ba as p,Fa as q,on as r,U as s,Va as t,Ue as u,za as v,Ra as w,Hr as x,hr as y,Tt as z};
