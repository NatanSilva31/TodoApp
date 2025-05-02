import{V as se,j as t,r as l,u as Ze,L as He,b as Rt}from"./vendor-B8wZl_f4.js";import{B as V,u as $e,G as zt,c as pe,k as X,n as s,a as M,C as ze,T as Xe,A as Oe,b as mt,S as qe,d as Ft,I as Ot,e as Bt,M as xe,D as ve,f as G,g as Se,h as Ut,i as Ce,j as ht,l as Vt,m as ft,o as Gt,p as Nt,q as Wt,F as Ht,r as _t,s as Yt,P as Zt,t as Xt,L as _e,v as Ke,w as qt,x as Ee,y as Kt,z as ue,E as Be,H as Jt,J as Qt,K as eo,N as gt,O as bt,Q as Je,R as to,U as yt,V as oo,W as Fe,X as no,Y as ro,Z as so,_ as ao,$ as jt,a0 as io,a1 as lo,a2 as et,a3 as Re,a4 as co,a5 as po,a6 as xo,a7 as W,a8 as wt,a9 as uo,aa as kt,ab as mo,ac as ho,ad as fo,ae as go,af as vt,ag as Ve,ah as bo,ai as yo,aj as St,ak as jo,al as wo,am as ko,an as vo,ao as So,ap as tt,aq as Co,ar as $o,as as Eo,at as Io,au as Ct,av as To,aw as Ao,ax as Mo,ay as Lo,az as Do,aA as $t,aB as Po,aC as Ro,aD as Ie,aE as zo,aF as Fo,aG as Oo,aH as Bo,aI as je,aJ as Uo,aK as Vo,aL as Go,aM as No,aN as Wo,aO as ot}from"./ui-lib-CzYSArXp.js";import"./tasks-DsKayl2e.js";import{E as N,a as Te,b as nt,T as Le,S as Ho}from"./emoji-BdBGO0jD.js";import{E as le}from"./ntc-LB1IgDFN.js";const Vr=e=>{const n=`Tasks_${new Date().toLocaleString().replace(/[/:, ]/g,"_")}.json`,r=JSON.stringify(e,null,2),a=new Blob([r],{type:"application/json"}),d=window.URL.createObjectURL(a),x=document.createElement("a");x.href=d,x.download=n,x.click(),window.URL.revokeObjectURL(d)},$={fontDark:"#101727",fontLight:"#f0f0f0",darkMode:"#383838",lightMode:"#ffffff",purple:"#b624ff",red:"#ff3131",orange:"#ff9318",orangeDark:"#ff9500"},_o={"Dark Purple":{primaryColor:$.purple},"Light Purple":{primaryColor:$.purple,secondaryColor:"#edeef6"},"Dark Blue":{primaryColor:"#106cff",secondaryColor:"#090815"},"Light Blue":{primaryColor:"#278ad2",secondaryColor:"#dddaf6"},"Dark Pink":{primaryColor:"#f2369d",secondaryColor:"#191218"},"Light Pink":{primaryColor:"#e5369a",secondaryColor:"#ffe3ff"},"Blush Blossom":{primaryColor:"#EC407A",secondaryColor:"#FCE4EC"},Cheesecake:{primaryColor:"#E14C94",secondaryColor:"#FDF0D5"},"Mystic Coral":{primaryColor:"#ff7b9c",secondaryColor:"#4a2333"},"Dark Orange":{primaryColor:"#FF5631",secondaryColor:"#0D0D0D"},"Light Orange":{primaryColor:"#F26E56",secondaryColor:"#F6F6F6"},Aurora:{primaryColor:"#00e952",secondaryColor:"#011926"}},Et=e=>/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e),f=e=>{if(!Et(e))return console.error("Invalid hex color:",e),$.fontDark;const o=e.startsWith("#")?e.slice(1):e,n=o.length===3?o.split("").map(p=>p+p).join(""):o,r=parseInt(n.slice(0,2),16),a=parseInt(n.slice(2,4),16),d=parseInt(n.slice(4,6),16);return Math.round((r*299+a*587+d*114)/1e3)>128?$.fontDark:$.fontLight},ae=e=>f(e)===$.fontLight,fe=new Set,Yo=8,Ge=24-new Date().getHours(),rt=["Let's make today count! **1f680**","Get things done and conquer the day!","Embrace the power of productivity!","Set your goals, crush them, repeat.","Today is a new opportunity to be productive!","Make every moment count.","Stay organized, stay ahead.","Take charge of your day!","One task at a time, you've got this!","Productivity is the key to success. **1f511**","Let's turn plans into accomplishments!","Start small, achieve big.","Be efficient, be productive.","Harness the power of productivity!","Get ready to make things happen!","It's time to check off those tasks! **2705**","Start your day with a plan! **1f5d3-fe0f**","Stay focused, stay productive.","Unlock your productivity potential. **1f513**","Turn your to-do list into a to-done list! **1f4dd**",`Have a wonderful ${new Date().toLocaleDateString("en",{weekday:"long"})}!`,`Happy ${new Date().toLocaleDateString("en",{month:"long"})}! A great month for productivity!`,Ge>4?`${Ge} hours left in the day. Use them wisely!`:`Only ${Ge} hours left in the day`],Gr=()=>(()=>{let o;do o=Math.floor(Math.random()*rt.length);while(fe.has(o));if(fe.add(o),fe.size>Yo){const n=Array.from(fe).shift();n!==void 0&&fe.delete(n)}return rt[o]})(),H=navigator.userAgent,Zo=()=>/Windows NT/i.test(H)?"Windows":/iPhone|iPad|iPod/i.test(H)?"iOS":/Mac/i.test(H)?"macOS":/Android/i.test(H)?"Android":/Linux/i.test(H)?"Linux":"Unknown",Xo=()=>/Chrome/i.test(H)&&!/Edge/i.test(H)?"Chrome":/Firefox/i.test(H)?"Firefox":/Safari/i.test(H)&&!/Chrome/i.test(H)?"Safari":/Edg/i.test(H)?"Edge":"Unknown",qo=/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent),U={os:Zo(),browser:Xo(),isAppleDevice:qo,get isPWA(){var e,o;return((o=(e=window.matchMedia)==null?void 0:e.call(window,"(display-mode: standalone)"))==null?void 0:o.matches)||navigator.standalone===!0}},Nr=e=>{e=e.length>32?e.substring(0,32)+"...":e;const o=document.getElementById("QRCodeShare");if(!o){console.error("QR Code not found.");return}const n=new XMLSerializer().serializeToString(o),r=document.createElement("canvas"),a=r.getContext("2d");if(!a){console.error("Canvas context not supported.");return}const d=new Image;d.onload=()=>{const x=d.width+20,u=d.height+70;r.width=x,r.height=u,a.fillStyle="white",a.fillRect(0,0,x,u);const p=(x-d.width)/2;a.drawImage(d,p,10),a.font="bold 20px Poppins";const I=a.measureText(e).width,E=(x-I)/2,S=u-35;a.fillStyle="black",a.fillText(e,E,S);const P="Todo App by github.com/maciekt07";a.font="14px Poppins";const O=a.measureText(P).width,L=(x-O)/2,j=u-10;a.fillText(P,L,j);const b=r.toDataURL("image/png"),A=document.createElement("a");A.download=`QRCode${e?" "+e:""}.png`,A.href=b,A.click()},d.src=`data:image/svg+xml;base64,${btoa(n)}`},D=(e,{type:o,disableClickDismiss:n,disableVibrate:r,dismissButton:a,...d}={})=>{const x={error:se.error,success:se.success,loading:se.loading,blank:se,custom:se.custom}[o||"success"];if(!r&&"vibrate"in navigator){const u=o==="error"?[100,50,100]:[100];try{navigator.vibrate(u)}catch(p){console.error(p)}}x(u=>t.jsxs("div",{onClick:!n&&!a?()=>se.dismiss(u.id):void 0,children:[e,a&&t.jsx("div",{children:t.jsx(V,{variant:"outlined",fullWidth:!0,onClick:()=>se.dismiss(u.id),sx:{mt:"8px",w:"100%",p:"12px 24px",fontSize:"16px",borderRadius:"16px"},children:"Dismiss"})})]}),{...d})},Wr=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const o=Math.random()*16|0;return(e==="x"?o:o&3|8).toString(16)}),It=(e,o=navigator.language||"en-US")=>{const n=new Date;e=new Date(e);const r=Math.floor((n.getTime()-e.getTime())/1e3),a=new Intl.RelativeTimeFormat(o,{numeric:"auto"});if(r<60)return a.format(-r,"second");if(r<3600){const d=Math.floor(r/60);return a.format(-d,"minute")}else if(r<86400){const d=Math.floor(r/3600);return a.format(-d,"hour")}else{const d=Math.floor(r/86400);return a.format(-d,"day")}},Hr=e=>{const o=new Date,n=new Date(o);n.setDate(o.getDate()-1);const r=e.getTime()-o.getTime(),a=new Intl.RelativeTimeFormat(navigator.language,{numeric:"auto"});return st(e,o)?a.format(0,"day")+` ${Ne(e)}`:st(e,n)?a.format(-1,"day")+` ${Ne(e)}`:r>-6048e5?`${Jo(e)} ${Ne(e)}`:Ko(e)},st=(e,o)=>e.getFullYear()===o.getFullYear()&&e.getMonth()===o.getMonth()&&e.getDate()===o.getDate(),Ne=e=>e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),Ko=e=>{const o={year:"numeric",month:"2-digit",day:"2-digit"};return e.toLocaleDateString(navigator.language,o)},Jo=e=>e.toLocaleDateString(navigator.language,{weekday:"long"}),_r=(e,o=navigator.language||"en-US")=>{const n=new Date,r=new Date(e),a=r.getTime()-n.getTime(),d=Math.floor(a/(1e3*60*60*24)),x=Math.floor(a/(1e3*60*60)),u=Math.floor(a/(1e3*60)),p=o;return r<n?`Not completed on time (${It(r,p)})`:r.toDateString()===n.toDateString()?new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(x>0?x:u,x>0?"hour":"minute"):a>0&&a<=864e5&&r.getDate()!==n.getDate()?new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(1,"day"):d<=7?`${new Intl.DateTimeFormat(p,{weekday:"long"}).format(e)} (${new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(d,"day")})`:new Intl.RelativeTimeFormat(p,{numeric:"auto"}).format(d,"day")},Qo=async e=>{if(!e)return null;if(e.startsWith("LOCAL_FILE"))try{return new Promise((o,n)=>{const r=indexedDB.open("profilePictureDB",1);r.onsuccess=a=>{const p=a.target.result.transaction(["pictures"],"readonly").objectStore("pictures").get("profilePicture");p.onsuccess=()=>{o(p.result||null)},p.onerror=()=>{n(new Error("Failed to fetch profile picture from IndexedDB"))}},r.onerror=()=>{n(new Error("Failed to open IndexedDB"))}})}catch(o){return console.error("Error fetching profile picture:",o),null}return e},Q={name:null,createdAt:new Date,profilePicture:null,emojisStyle:U.os==="iOS"||U.os==="macOS"?N.NATIVE:N.APPLE,tasks:[],theme:"system",darkmode:"auto",settings:{enableCategories:!0,doneToBottom:!1,enableGlow:!0,simpleEmojiPicker:!1,enableReadAloud:"speechSynthesis"in window,voice:"Microsoft Mark - English (United States)::en-US",appBadge:!1,voiceVolume:.6},categories:[{id:"857f0db6-43b2-43eb-8143-ec4e26472516",name:"Home",emoji:"1f3e0",color:"#1fff44"},{id:"0292cba5-f6e2-41c4-b5a7-c59a0aaecfe3",name:"Work",emoji:"1f3e2",color:"#248eff"},{id:"a47a4af1-d720-41eb-9121-d3728605a62b",name:"Personal",emoji:"1f464",color:"#e843fe"},{id:"393068a9-9db7-4dfa-a00f-cd359f8024e8",name:"Health/Fitness",emoji:"1f4aa",color:"#ffdf3d"},{id:"afa0fdb4-f668-4d5a-9ad0-4e22d2b8e841",name:"Education",emoji:"1f4da",color:"#ff8e24"}],favoriteCategories:[],colorList:["#FF69B4","#FF22B4","#C6A7FF","#7ACCFA","#4898F4","#5061FF","#3DFF7F","#3AE836","#FFEA28","#F9BE26","#FF9518","#FF5018","#FF2F2F"]},q=l.createContext({user:Q,setUser:()=>{}}),Ue=(e=768)=>{const[o,n]=l.useState(!1);return l.useEffect(()=>{const r=()=>{n(window.innerWidth<e)};r();const a=()=>r();return window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[e]),o},Yr=()=>{const e=$e();return t.jsx(zt,{styles:pe`
        * {
          font-family: "Poppins", sans-serif !important;
          -webkit-tap-highlight-color: transparent;
          &::selection {
            background-color: ${e.primary+"e1"};
            color: ${f(e.primary)};
            text-shadow: 0 0 12px ${f(e.primary)+"b9"};
          }
        }
        :root {
          font-family: "Poppins", sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color-scheme: ${e.darkmode?"dark":"light"};
          color: ${f(e.secondary)};
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
      `})},Zr=X`
from {
  opacity: 0;
  transform: translateX(-40px)
}
to {
  opacity: 1;
  transform: translateX(0px)
  }
`,me=X`
from {
  opacity: 0;
}
`;X`
  from{
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;const en=X`
  from{
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`,Qe=X`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`,Ae=(e,o=12)=>X`
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
`,tn=e=>X`
  0% {
    filter: none;
  }
  50% {
    filter: drop-shadow(0 0 10px ${e}78);
  }
  100% {
    filter: none;
  }
`,on=X`
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
`,Xr=s.div`
  display: flex;
  margin-top: 12px;
  font-size: 26px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 8px;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`,qr=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Kr=s.div`
  color: ${({theme:e})=>f(e.secondary)};
  /* background: #090b2258; */
  background: ${({theme:e})=>ae(e.secondary)?"#090b2258":"#ffffff3e"};
  transition: 0.3s all;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 8px 16px;
  padding: 20px 24px;
  margin: 24px 0 12px 0;
  border-radius: 24px;
  width: 650px;
  border: 1px solid ${({theme:e})=>ae(e.secondary)?"#44479cb7":e.primary};
  @media (min-width: 1024px) {
    padding: 24px;
  }
`,Jr=s.div`
  line-height: 1.7;
  margin-left: 6px;
`,Qr=s.h4`
  margin: 0;
  font-size: 16px;
  @media (min-width: 1024px) {
    font-size: 17px;
  }
`,es=s.p`
  margin: 0;
  font-size: 16px;
`,ts=s(M)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #090b2287; */
  background: ${({theme:e})=>ae(e.secondary)?"#090b2287":"#ffffff5c"};
  border-radius: 100px;
  margin: -5px;
  border: 1px solid ${({theme:e})=>ae(e.secondary)?"#44479cb7":e.primary};
  box-shadow: ${({theme:e})=>`0 0 18px -2px ${ae(e.secondary)?"#090b22":"#bababa"}`};
  & .MuiTypography-root {
    color: ${({theme:e})=>f(e.secondary)};
  }
  animation: ${({theme:e,glow:o})=>o?pe`
          ${tn(e.primary)} 4s infinite ease-in
        `:"none"};
`,os=s(ze)`
  z-index: 1;
  margin: 2px;
  filter: ${({glow:e,theme:o})=>e?`drop-shadow(0 0 6px ${o.primary}c8)`:"none"};
  transition: 0.3s filter;
`,ns=s(V)`
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
  color: ${({theme:e})=>f(e.primary)};
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
      animation: ${Ae(o.primary,14)} 1.2s infinite;
    `}

  @media (max-width: 1024px) {
    right: 24px;
  }
`,rs=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  text-shadow: 0 0 8px #ffffff56;
  margin-top: 20px;
  opacity: 0.8;
  animation: ${me} 0.5s ease;
`,ss=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,as=s(V)`
  margin-top: 4px;
  border: none;
  padding: 16px 32px;
  font-size: 24px;
  background: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>f(e.primary)};
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
    color: ${({theme:e})=>f(e.secondary)};
  }
`,is=s(Xe)`
  margin: 12px;
  & .MuiOutlinedInput-root {
    border-radius: 16px;
    transition: 0.3s all;
    width: 400px;
    color: ${({theme:e,hidetext:o})=>o?"transparent":f(e.secondary)};
  }
  .MuiFormHelperText-root {
    color: ${({helpercolor:e,theme:o})=>e||f(o.secondary)};
    opacity: 0.8;
  }
`,oe=s(V)`
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 16px;
  margin: 8px;
`,ls=s.a`
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
`,nn=({...e})=>t.jsx(Oe,{translate:"no",slotProps:{img:{loading:"lazy"}},...e}),at=s(nn)`
  color: #ffffff;
  background: ${({hasimage:e,theme:o})=>e?"#ffffff1c":o.darkmode?"#5e5e65":"#8c919c"} !important;
  transition: 0.3s background;
  font-weight: 500;
  width: ${({size:e})=>e};
  height: ${({size:e})=>e};
  font-size: ${({size:e})=>`calc(${e} / 2)`};
  ${({pulse:e,theme:o})=>e&&pe`
      animation: ${Ae(o.darkmode?"#5e5e65":"#8c919c",10)} 1.2s infinite;
    `}
`,Ye=s.button`
  background: ${({clr:e,secondClr:o})=>o?`linear-gradient(135deg, ${e} 50%, ${o} 50%)`:e};

  color: ${({clr:e})=>f(e||"")};
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
`,cs=s.code`
  background: #000000c8;
  color: white;
  font-family: consolas !important;
  padding: 4px 6px;
  border-radius: 8px;
`;s.div`
  animation: ${({theme:e})=>Ae(e.primary,8)} 1.2s infinite;
  position: absolute;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  background: ${({theme:e})=>e.primary};
  border-radius: 32px;
  z-index: 1;
`;const ds=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`,ps=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 350px;
  background: ${({theme:e})=>e.darkmode?"#0000005a":"#acacac5a"};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px 18px;
  border-radius: 18px;
`,xs=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`,us=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 400px;
  margin: 6px 0;
  padding: 12px;
  border-radius: 18px;
  background: ${({clr:e})=>e};
  color: ${({clr:e})=>f(e)};
  animation: ${me} 0.5s ease-in-out;
  @media (max-width: 768px) {
    width: 360px;
  }
`,ms=s.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 0 4px;
  gap: 4px;
`,hs=s.div`
  /* background: #ffffffcd; */
  background: ${({theme:e})=>e.darkmode?"#000000cd":"#ffffffcd"};
  border-radius: 100%;
`,fs=s(Xe)`
  margin: 12px;

  .MuiOutlinedInput-root {
    border-radius: 16px;
    width: 400px;
    color: ${({theme:e})=>f(e.secondary)};
  }
  & .MuiFormHelperText-root {
    color: ${({theme:e})=>f(e.secondary)};
    opacity: 0.8;
  }
`,gs=s(Xe)`
  margin-top: 8px;
  .MuiOutlinedInput-root {
    border-radius: 16px;
    width: 350px;
  }
`,bs=s(V)`
  border: none;
  padding: 18px 48px;
  font-size: 24px;
  background: ${({theme:e})=>e.primary};
  color: ${({theme:e})=>f(e.primary)};
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
`,ys=s(mt)`
  margin: 16px 0;
  background: transparent;
  box-shadow: none;
  border: 2px solid ${({theme:e})=>`${e.darkmode?"#ffffff":"#000000"}5a`};
  border-radius: 12px !important;
`,Tt=pe`
  animation: ${Qe} 0.2s ease-in;
`,js=s(qe)`
  ${Tt}
`,ws=s(Ft)`
  ${Tt}
`,ks=s(M)`
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
`,vs=s.h2`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ss=s.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 6px;
`,Cs=s.div`
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
`,$s=s(Ot)`
  color: ${({theme:e})=>f(e.secondary)};
`,Es=s(M)`
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
    background-color: ${({theme:e})=>f(e.secondary)}15;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme:e})=>f(e.secondary)}30;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>f(e.secondary)}50;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: ${({theme:e})=>f(e.secondary)}15;
  }
`,Is=s(M)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`,rn=({...e})=>t.jsx(V,{variant:"outlined",...e}),Ts=s(rn)`
  padding: 12px 18px;
  border-radius: 14px;
  width: 300px;

  &:disabled {
    color: ${({theme:e})=>f(e.secondary)+"82"};
    border-color: ${({theme:e})=>f(e.secondary)+"82"};
  }
`,As=({scale:e=1,color:o,variant:n="error"})=>{const r=$e(),{user:a}=l.useContext(q),{settings:d}=a,x=o||r.primary,u=f(o||r.primary),p=()=>n==="add"?T:n==="error"?I:n==="success"?E:null,T=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"124.093",y:"286.465",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(-90 124.093 286.465)",fill:u}),t.jsx("rect",{x:"87",y:"235.884",width:"87.6744",height:"13.4884",rx:"6.74419",fill:u})]}),I=t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:"95.0707",y:"268.856",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(-45 95.0707 268.856)",fill:u}),t.jsx("rect",{x:"104.608",y:"206.861",width:"87.6744",height:"13.4884",rx:"6.74419",transform:"rotate(45 104.608 206.861)",fill:u})]}),E=t.jsx("path",{d:"M96 242.159L119.159 265.318L165.476 219",stroke:u,"stroke-width":"15","stroke-linecap":"round","stroke-linejoin":"round"});return t.jsxs("svg",{width:216*e,height:434*e,viewBox:"0 0 261 434",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{filter:d.enableGlow?`drop-shadow(0px 0px ${64*e}px ${x}c8)`:"none"},children:[t.jsx("circle",{cx:"130.837",cy:"34.2327",r:"26.7209",stroke:x,"stroke-width":"14"}),t.jsx("rect",{y:"51.7676",width:"261",height:"381.721",rx:"45",fill:x,"fill-opacity":"0.6"}),t.jsx("rect",{x:"26.9767",y:"80.0928",width:"207.047",height:"325.07",rx:"35",fill:"white","fill-opacity":"0.9"}),t.jsx("rect",{x:"64.7442",y:"176.535",width:"132.186",height:"132.186",rx:"66.093",fill:x}),p(),t.jsx("rect",{x:"77.5581",y:"36.9307",width:"106.558",height:"56.6512",rx:"18",fill:x})]})},sn="/TodoApp/assets/bmc-logo-light-CYr-fih2.svg",an="/TodoApp/assets/bmc-logo-DhjOGBfv.svg",ln="/TodoApp/assets/logo256-gFzWMhyE.png",cn=async()=>{const o="https://img.buymeacoffee.com/button-api/?&slug=maciekt07";try{const r=await(await fetch(o)).text(),x=new DOMParser().parseFromString(r,"text/html").querySelector("text[x='226'][y='39'][text-anchor='middle']");if(x)return{supportersCount:Number(x.textContent)};throw new Error("Failed to fetch Buy Me a Coffee API: Supporters count element not found.")}catch(n){return console.error("Error fetching Buy Me a Coffee API:",n),navigator.onLine&&D("Failed to fetch Buy Me a Coffee API.",{type:"error",disableVibrate:!0}),{supportersCount:0}}},dn=async()=>{const e="maciekt07",o="TodoApp",n="main";try{const[r,a]=await Promise.all([fetch(`https://api.github.com/repos/${e}/${o}`),fetch(`https://api.github.com/repos/${e}/${o}/branches/${n}`)]);if(r.ok&&a.ok){const[d,x]=await Promise.all([r.json(),a.json()]);return{repoData:d,branchData:x}}else if(r.status===403&&a.status===403)D("Github API rate limit exceeded temporarily for your IP address.",{type:"error",disableVibrate:!0});else throw new Error("Failed to fetch repository or branch information")}catch(r){console.error(r),navigator.onLine&&D("Failed to fetch Github API.",{type:"error",disableVibrate:!0})}return{repoData:{},branchData:{}}},Ms=()=>{const{user:e,setUser:o}=l.useContext(q),{name:n,profilePicture:r,tasks:a,settings:d}=e,[x,u]=l.useState(null),p=!!x,[T,I]=l.useState(!1),[E,S]=l.useState(!1),[P,O]=l.useState(null),[L,j]=l.useState(null),[b,A]=l.useState(null),[y,C]=l.useState(null),z=$e(),ne=Ze();l.useEffect(()=>{const i=async()=>{const{repoData:k,branchData:v}=await dn();O(k.stargazers_count),j(v.commit.commit.committer.date),A(k.open_issues_count)};(async()=>{const{supportersCount:k}=await cn();k>0?C(k):console.error("No BMC supporters found.")})(),i()},[]),l.useEffect(()=>{const i=()=>{window.location.hash.startsWith("#settings/")&&S(!0)};return i(),window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const[F,_]=l.useState(null);l.useEffect(()=>{(async()=>{const h=await Qo(r);_(h)})()},[r]);const re=i=>{u(i.currentTarget)},g=()=>{u(null)},[m,w]=l.useState(!1),[R,K]=l.useState(null),[ee,Y]=l.useState(!1),[ie,Z]=l.useState(!1);l.useEffect(()=>{const i=k=>{k.preventDefault(),w(!0),K(k)},h=()=>{window.matchMedia("(display-mode: standalone)").addEventListener("change",k=>{Y(k.matches)})};return window.addEventListener("beforeinstallprompt",i),h(),()=>{window.removeEventListener("beforeinstallprompt",i)}},[]);const c=()=>{R&&(R.prompt(),R.userChoice.then(i=>{i.outcome==="accepted"&&(U.os==="Windows"?Z(!0):D("App installed successfully!"),g()),i.outcome==="dismissed"&&D("Installation dismissed.",{type:"error"})}))};return t.jsxs(pn,{children:[t.jsx(G,{title:t.jsx("div",{translate:n?"no":"yes",children:n||"User"}),children:t.jsx(Se,{"aria-label":"Sidebar","aria-controls":p?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,onClick:re,sx:{zIndex:1},children:t.jsx(at,{src:F||void 0,alt:n||"User",hasimage:r!==null,pulse:e.name===Q.name&&JSON.stringify(e.settings)===JSON.stringify(Q.settings),size:"52px",onError:()=>{if(navigator.onLine)throw o(i=>({...i,profilePicture:null})),D("Error in profile picture URL",{type:"error"}),new Error("Error in profile picture URL")},children:n?n[0].toUpperCase():void 0})})}),t.jsxs(xn,{disableBackdropTransition:U.os!=="iOS",disableDiscovery:U.os==="iOS",id:"basic-menu",anchor:"right",open:p,onOpen:i=>i.preventDefault(),onClose:g,children:[t.jsxs(bn,{translate:"no",onClick:()=>{ne("/"),g()},children:[t.jsx(yn,{src:ln,alt:"logo"}),t.jsxs(jn,{children:[t.jsx("span",{children:"Todo"})," App",t.jsx("span",{children:"."})]})]}),t.jsx(J,{to:"/",children:t.jsxs(B,{onClick:g,children:[t.jsx(Ut,{}),"   Tasks",a.filter(i=>!i.done).length>0&&t.jsx(G,{title:`${a.filter(i=>!i.done).length} tasks to do`,children:t.jsx(we,{children:a.filter(i=>!i.done).length>99?"99+":a.filter(i=>!i.done).length})})]})}),t.jsx(J,{to:"/add",children:t.jsxs(B,{onClick:g,children:[t.jsx(Ce,{}),"   Add Task"]})}),d.enableCategories!==void 0&&d.enableCategories&&t.jsx(J,{to:"/categories",children:t.jsxs(B,{onClick:g,children:[t.jsx(ht,{}),"   Categories"]})}),t.jsx(J,{to:"/purge",children:t.jsxs(B,{onClick:g,children:[t.jsx(Vt,{}),"   Purge Tasks"]})}),t.jsx(J,{to:"/transfer",children:t.jsxs(B,{onClick:g,children:[t.jsx(ft,{}),"   Transfer"]})}),t.jsx(De,{}),t.jsx(J,{to:"https://github.com/maciekt07/TodoApp",children:t.jsxs(B,{translate:"no",children:[t.jsx(Gt,{className:"GitHubIcon"}),"   Github"," ",P&&t.jsx(G,{title:`${P} stars on Github`,children:t.jsx(we,{clr:"#ff9d00",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(qe,{style:{fontSize:"18px"}})," ",P]})})})]})}),t.jsx(J,{to:"https://github.com/maciekt07/TodoApp/issues/new",children:t.jsxs(B,{children:[t.jsx(Nt,{className:"BugReportRoundedIcon"}),"   Report Issue"," ",!!(b||b===0)&&t.jsx(G,{title:`${b} open issues`,children:t.jsx(we,{clr:"#3bb61c",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(Wt,{style:{fontSize:"18px"}})," ",b]})})})]})}),t.jsx(J,{to:"https://www.buymeacoffee.com/maciekt07",children:t.jsxs(B,{className:"bmcMenu",children:[t.jsx(wn,{className:"bmc-icon",src:z.darkmode?sn:an}),"   Buy me a coffee"," ",y&&t.jsx(G,{title:`${y} supporters on Buy me a coffee`,children:t.jsx(we,{clr:"#f93c58",children:t.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx(Ht,{style:{fontSize:"16px"}})," ",y]})})})]})}),t.jsx(De,{}),m&&!ee&&t.jsxs(B,{onClick:c,children:[U.os==="Android"?t.jsx(_t,{}):t.jsx(Yt,{className:"InstallDesktopRoundedIcon"}),"  Install App"]}),U.browser==="Safari"&&U.os==="iOS"&&!window.matchMedia("(display-mode: standalone)").matches&&t.jsxs(B,{onClick:()=>{D(t.jsxs("div",{style:{display:"inline-block"},children:["To install the app on iOS Safari, click on"," ",t.jsx(Xt,{sx:{verticalAlign:"middle",mb:"4px"}})," and then"," ",t.jsx("span",{style:{fontWeight:"bold"},children:"Add to Home Screen"}),"."]}),{type:"blank",duration:8e3}),g()},children:[t.jsx(Zt,{}),"  Install App"]}),t.jsxs(B,{onClick:()=>{g(),I(!0)},sx:{color:"#ff4040 !important"},children:[t.jsx(_e,{className:"LogoutIcon"}),"   Logout"]}),t.jsxs(kn,{children:[t.jsxs(hn,{onClick:()=>{S(!0),g()},children:[t.jsx(Ke,{className:"SettingsRoundedIcon"}),"   Settings",JSON.stringify(d)===JSON.stringify(Q.settings)&&e.darkmode===Q.darkmode&&e.theme===Q.theme&&e.emojisStyle===Q.emojisStyle&&t.jsx(it,{})]}),t.jsx(De,{}),t.jsx(J,{to:"/user",children:t.jsxs(fn,{translate:n?"no":"yes",onClick:g,children:[t.jsx(at,{src:F||void 0,hasimage:r!==null,size:"44px",children:n?n[0].toUpperCase():void 0}),t.jsxs("h4",{style:{margin:0,fontWeight:600},children:[" ",n||"User"]})," ",(n===null||n==="")&&r===null&&t.jsx(it,{})]})}),t.jsx(De,{}),t.jsxs(lt,{translate:"no",children:[t.jsxs("span",{style:{display:"flex",alignItems:"center"},children:["Made with  ",t.jsx(qt,{sx:{fontSize:"14px"}})]}),t.jsx("span",{style:{marginLeft:"6px",marginRight:"4px"},children:"by"}),t.jsx("a",{style:{textDecoration:"none",color:"inherit"},href:"https://github.com/maciekt07",children:"maciekt07"})]}),t.jsx(lt,{children:L&&t.jsx(G,{title:It(new Date(L)),children:t.jsxs("span",{children:["Last update:"," ",new Intl.DateTimeFormat(navigator.language,{dateStyle:"long",timeStyle:"medium"}).format(new Date(L))]})})})]})]}),t.jsxs(Ee,{open:ie,onClose:()=>Z(!1),children:[t.jsx(Me,{title:"App installed successfully!",subTitle:"The app is now running as a PWA.",icon:t.jsx(Kt,{}),onClose:()=>Z(!1)}),t.jsx(ue,{children:"You can access it from your home screen, with offline support and features like shortcuts and badges."}),t.jsx(Be,{children:t.jsxs(oe,{onClick:()=>Z(!1),children:[t.jsx(Jt,{}),"   Got it"]})})]}),t.jsx(Dr,{open:T,onClose:()=>I(!1)}),t.jsx(fr,{open:E,onClose:()=>S(!1)})]})},J=({to:e,children:o})=>{const n={borderRadius:"14px"};return e.startsWith("/")?t.jsx(He,{to:e,style:n,children:o}):t.jsx("a",{href:e,target:"_blank",style:n,children:o})},it=()=>t.jsx(gn,{children:t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(Qt,{style:{fontSize:"16px"}})})}),pn=s.div`
  position: absolute;
  right: 16vw;
  top: 14px;
  z-index: 900;
  @media (max-width: 1024px) {
    right: 16px;
  }
`,xn=s(Bt)`
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
`,un=X`
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
`,mn=X`
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
`,B=s(xe)`
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
      animation: ${mn} 0.8s ease-in alternate;
    }

    & svg.LogoutIcon {
      animation: ${un} 0.5s ease-in alternate;
    }

    & .bmc-icon {
      animation: ${on} 2.5s ease-in alternate;
    }
  }
`,hn=s(B)`
  background: ${({theme:e})=>e.darkmode?"#1f1f1f":"#101727"};
  color: ${$.fontLight} !important;
  margin-top: 8px !important;
  &:hover {
    background: ${({theme:e})=>e.darkmode?"#1f1f1fb2":"#101727b2"};
    & svg.SettingsRoundedIcon {
      transform: rotate(180deg);
    }
  }
`,fn=s(B)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({theme:e})=>e.darkmode?"#1f1f1f":"#d7d7d7"};
  &:hover {
    background: ${({theme:e})=>e.darkmode?"#1f1f1fb2":"#d7d7d7b2"};
  }
`,we=s.span`
  margin-left: auto;
  font-weight: 600;
  background: ${({clr:e,theme:o})=>(e||o.primary)+"35"};
  color: ${({clr:e,theme:o})=>e||o.primary};
  padding: 2px 12px;
  border-radius: 32px;
  font-size: 14px;
`,De=s(ve)`
  margin: 8px 4px;
`,gn=s(we)`
  animation: ${({theme:e})=>Ae(e.primary,6)} 1.2s infinite;
  padding: 6px;
  margin-right: 4px;
`,bn=s.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 16px;
  gap: 12px;
  cursor: pointer;
`,yn=s.img`
  width: 52px;
  height: 52px;
  margin-left: 12px;
  border-radius: 14px;
`,jn=s.h2`
  & span {
    color: #7764e8;
  }
`,wn=s.img`
  width: 1em;
  height: 1em;
  font-size: 1.5rem;
`,kn=s.div`
  margin-top: auto;
  margin-bottom: ${window.matchMedia("(display-mode: standalone)").matches&&/Mobi/.test(navigator.userAgent)?"38px":"16px"};
  display: flex;
  flex-direction: column;
  gap: 8px;
`,lt=s.div`
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
`,vn=40,Ls=350,Ds=100,Ps=14,Rs=255,Sn=20,ge=3,ct=32,zs=/((?:https?):\/\/[^\s/$.?#].[^\s]*)/gi,At=()=>{const[e,o]=l.useState("unknown");return l.useEffect(()=>{const n=a=>{o(a.matches?"dark":"light")},r=window.matchMedia("(prefers-color-scheme: dark)");return o(r.matches?"dark":"light"),r.addEventListener("change",n),()=>{r.removeEventListener("change",n)}},[]),e},Cn={MuiTooltip:{defaultProps:{disableInteractive:!0,style:{backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)"}}},MuiButton:{styleOverrides:{root:{padding:"12px 24px",borderRadius:"14px"}}},MuiSelect:{styleOverrides:{root:{borderRadius:"18px"}}},MuiDialog:{defaultProps:{slotProps:{paper:{style:{padding:"12px",borderRadius:"24px",minWidth:"400px"}}}}},MuiAvatar:{styleOverrides:{root:{fontWeight:500,color:"#fff"}}},MuiAlert:{styleOverrides:{root:{borderRadius:"16px"}}},MuiTextField:{styleOverrides:{root:{"& .MuiInputBase-root":{borderRadius:"16px"}}}}},$n=(e,o="#232e58",n="dark")=>eo({components:{...Cn},palette:{primary:{main:e},secondary:{main:o},warning:{main:n==="dark"?$.orange:$.orangeDark},error:{main:$.red},mode:n}}),We=Object.entries(_o).map(([e,o])=>({name:e,MuiTheme:$n(o.primaryColor,o.secondaryColor)})),En=(e,o,n)=>{switch(e){case"light":return!1;case"dark":return!0;case"system":return o==="dark";case"auto":return f(n)===$.fontLight;default:return!1}},Fs=({selectedCategories:e,onCategoryChange:o,width:n,fontColor:r})=>{const{user:a}=l.useContext(q),{categories:d,emojisStyle:x,favoriteCategories:u}=a,[p,T]=l.useState(e),[I,E]=l.useState(!1),S=Je(),P=At(),O=b=>{const A=b.target.value;if(A.length>ge){D(`You cannot add more than ${ge} categories`,{type:"error",position:"top-center"});return}const y=d.filter(C=>A.includes(C.id));T(y),o==null||o(y)},L=d.filter(b=>u&&u.includes(b.id)),j=d.filter(b=>!u||!u.includes(b.id));return t.jsxs(to,{sx:{width:n||"100%"},children:[t.jsx(yt,{sx:{color:r?`${r}e8`:`${$.fontLight}e8`,marginLeft:"8px",fontWeight:500},children:"Category"}),t.jsx(In,{multiple:!0,width:n,value:p.map(b=>b.id),onChange:O,open:I,onOpen:()=>E(!0),onClose:()=>E(!1),IconComponent:()=>t.jsx(M,{sx:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:()=>E(b=>!b),children:t.jsx(Fe,{sx:{marginRight:"14px",color:r||$.fontLight,transform:I?"rotate(180deg)":"none"}})}),displayEmpty:!0,renderValue:()=>p.length>0?t.jsx(M,{sx:{display:"flex",flexWrap:"wrap",gap:"4px 8px"},children:p.map(b=>t.jsx(Ar,{category:b,sx:{cursor:"pointer"},glow:!1},b.id))}):t.jsx(M,{sx:{color:r},children:"Select Categories"}),MenuProps:{PaperProps:{style:{maxHeight:450,zIndex:999999,padding:"0px 8px",background:En(a.darkmode,P,S.palette.secondary.main)?"#2f2f2f":"#ffffff"}}},children:(()=>{const b=y=>t.jsxs(Tn,{value:y.id,clr:y.color,translate:"no",disable:p.length>=ge&&!p.some(C=>C.id===y.id),children:[p.some(C=>C.id===y.id)&&t.jsx(no,{}),y.emoji&&t.jsx(Te,{unified:y.emoji,emojiStyle:x})," ",y.name]},y.id),A=(y,C,z)=>y.length===0?[]:[t.jsx(Dn,{children:C},z),...y.map(b)];return d&&d.length>0?[t.jsx(An,{disabled:!0,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("b",{children:["Select Categories"," ",t.jsx("span",{style:{transition:".3s color",color:p.length>=ge?"#f34141":"currentcolor"},children:d.length>3&&t.jsxs("span",{children:["(max ",ge,")"]})})]}),t.jsxs(Mn,{children:["Selected:"," ",p.length>0?new Intl.ListFormat("en",{style:"long",type:"conjunction"}).format(p.map(y=>y.name)):t.jsx("span",{style:{fontStyle:"italic"},children:"none"})]})]})},"header-info"),...A(L,t.jsxs(t.Fragment,{children:[t.jsx(qe,{color:"warning",sx:{fontSize:"18px"}})," Favorite Categories"]}),"header-favorites"),...A(j,L.length>0?"Other Categories":"","header-others"),t.jsxs("div",{style:{margin:"8px"},children:[t.jsx(ve,{sx:{mb:"12px",mt:"16px"}}),t.jsx(He,{to:"/categories",children:t.jsxs(V,{fullWidth:!0,variant:"outlined",sx:{mb:"8px",mt:"2px"},children:[t.jsx(oo,{}),"   Modify Categories"]})})]},"footer")]:[t.jsxs(Ln,{disableTouchRipple:!0,children:[t.jsx("p",{children:"You don't have any categories"}),t.jsx(He,{to:"/categories",style:{width:"100%"},children:t.jsxs(V,{fullWidth:!0,variant:"outlined",children:[t.jsx(Ce,{}),"   Create Category"]})})]},"no-categories")]})()})]})},In=s(gt)`
  margin: 12px 0;
  border-radius: 16px !important;
  transition: 0.3s all;
  width: ${({width:e})=>e||"100%"};

  /* background: #ffffff18; */
  z-index: 999;
  border: none !important;
`,Tn=s(xe)`
  padding: 12px 16px;
  border-radius: 16px;
  margin: 8px;
  display: flex;
  gap: 4px;
  font-weight: 600;
  transition: 0.2s all;
  color: ${e=>f(e.clr||$.fontLight)};
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
    color: ${e=>f(e.clr||$.fontLight)};
    display: flex;
    justify-content: left;
    align-items: center;
    font-weight: 800;
    &:hover {
      background: ${({clr:e})=>e};
      opacity: 0.7;
    }
  }
`,An=s(xe)`
  opacity: 1 !important;
  font-weight: 500;
  position: sticky !important;
  top: 0;
  z-index: 99;
  pointer-events: none !important;
  cursor: default !important;
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  line-height: 20px;
`,Mn=s.div`
  opacity: 0.9;
  font-size: 15px;
  word-break: break-all;
  max-width: 300px;
`,Ln=s(xe)`
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
`,Dn=s(bt)`
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  font-weight: 600;
  position: sticky;
  z-index: 1;
  top: 52px;
  line-height: 28px;
  display: flex;
  align-items: center;
`,Os=({title:e})=>{const o=Ze();return t.jsxs(Pn,{children:[t.jsx(Fn,{size:"large","aria-label":"Back",onClick:()=>o("/"),children:t.jsx(Rn,{})}),t.jsx(zn,{children:e})]})},Pn=s.div`
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
`,Rn=s(ro)`
  color: ${({theme:e})=>f(e.secondary)};
`,zn=s.h2`
  font-size: 28px;
  margin: 0 auto;
  text-align: center;
  padding: 4px 0 8px 0;
  /* text-shadow: 0 0 24px #00000068; */
`,Fn=s(Se)`
  position: absolute;
  color: ${({theme:e})=>f(e.secondary)};
  @media (max-width: 1024px) {
    margin-top: 4px;
  }
`,Mt=()=>{const[e,o]=l.useState(navigator.onLine);return l.useEffect(()=>{const n=()=>o(!0),r=()=>o(!1);return window.addEventListener("online",n),window.addEventListener("offline",r),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}},[]),e},Me=({title:e,subTitle:o,icon:n,removeDivider:r,onClose:a,...d})=>t.jsxs(so,{...d,children:[a&&t.jsx(Bn,{onClick:a,size:"small",children:t.jsx(ao,{})}),t.jsxs(On,{children:[n&&t.jsx(Un,{children:n}),t.jsxs(Vn,{children:[t.jsx(Gn,{children:e}),o&&t.jsx(Nn,{children:o})]})]}),!r&&t.jsx(Wn,{})]}),On=s.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  max-width: 400px;
`,Bn=s(Se)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 1;
`,Un=s.div`
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
`,Vn=s.div`
  line-height: 1.3em;
`,Gn=s.div`
  font-weight: 600;
  opacity: 0.9;
`,Nn=s.div`
  font-size: 14px;
  opacity: 0.7;
`,Wn=s(ve)`
  margin-top: 16px;
`,Bs=({emoji:e,setEmoji:o,color:n,name:r,type:a})=>{const{user:d,setUser:x}=l.useContext(q),{emojisStyle:u,settings:p}=d,[T,I]=l.useState(!1),[E,S]=l.useState(e||null),P=Mt(),O=$e(),L=()=>{const g=JSON.parse(localStorage.getItem("epr_suggested")||"null");return g?(g.sort((R,K)=>K.count-R.count),g.slice(0,6).map(R=>R.unified)):[]};l.useEffect(()=>{o(E)},[E,o]),l.useEffect(()=>{e===""&&S(null)},[e]);const j=()=>{I(g=>!g)},b=g=>{j(),S(g.unified)},A=()=>{j(),S(null)},[y,C]=l.useState(!1),[z,ne]=l.useState(null);l.useEffect(()=>{(async()=>{if(window.ai){const m=await window.ai.languageModel.create();ne(m)}})()},[]);async function F(){const g=new Date().getTime();C(!0);try{const w=await(z||await window.ai.languageModel.create()).prompt(`Pick one emoji that best fits the task: "${r}". Reply with the chosen emoji only, no text or explanation.`);console.log("Full AI response:",w);const R=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)+|\\p{EPres}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?|\\p{Emoji}(\\p{EMod}+|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})","gu"),K=w.trim().replace(/\*/g,"").match(R)||[],ee=[...new Set(K)];if(console.log("Unique Emojis:",ee),ee.length===0){S(null),D(t.jsxs("div",{children:[t.jsx("b",{children:"No emoji found."})," ",t.jsx("br",{})," Please try again with different ",a," name."]}),{type:"error"}),console.error("No emoji found.");return}let Y=ee[0];const ie={":joy:":"😄",":smile:":"😄",":heart:":"❤️","<3":"❤️",":sunglasses:":"😎",":thinking_head:":"🤔",":technology:":"💻",":tech:":"💻",":ml:":"🧠",":wave:":"👋",":O":"😮","☮":"✌️","🎙":"🎙️","🗣":"🗣️","✈":"✈️","🍽":"🍽️","⌨":"⌨️","🖱":"🖱️"};Y in ie&&(Y=ie[Y],console.log("Emoji replaced with:",Y));const Z=_(Y.replaceAll(":",""));console.log("Emoji unified:",Z),R.test(Y)?(C(!1),S(Z)):(S(null),D(t.jsxs("div",{children:[t.jsx("b",{children:"Invalid emoji."})," ",t.jsx("br",{})," Please try again with different ",a," name."]}),{type:"error"}),console.error("Invalid emoji.",Z))}catch(m){C(!1),S(null),console.error(m),D(t.jsxs("div",{children:[t.jsx("b",{children:"Falied to generate emoji."}),t.jsx("br",{}),String(m)]}),{type:"error",duration:8e3})}finally{C(!1);const m=new Date().getTime();console.log(`%cTook ${m-g}ms to generate.`,`color: ${m-g>1500?"orange":"lime"}`)}}const _=g=>Array.from(g).map(m=>{var w;return((w=m.codePointAt(0))==null?void 0:w.toString(16).toUpperCase())||""}).join("-").toLowerCase(),re=()=>{const g=n?f(n):$.fontLight;if(y)return t.jsx(ze,{size:40,thickness:5,sx:{color:g}});if(E){const m=u===N.NATIVE&&U.os==="iOS"?64:u===N.NATIVE?48:64;return t.jsx(Kn,{children:t.jsx(Te,{size:m,emojiStyle:u,unified:E})},E)}else return t.jsx(et,{sx:{fontSize:"52px",color:g,transition:".3s all"}})};return l.useEffect(()=>{I(!1)},[d.settings.simpleEmojiPicker]),t.jsxs(t.Fragment,{children:[t.jsx(Hn,{children:t.jsx(jt,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:t.jsx(Xn,{onClick:j,children:t.jsx(io,{})}),children:t.jsx(Zn,{clr:n,onClick:j,children:re()})})}),"ai"in window&&r!==void 0&&t.jsx(G,{title:r?void 0:`Enter a name for the ${a} to find emoji`,children:t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsxs(V,{onClick:F,disabled:(r==null?void 0:r.length)<3||(a==="task"?r.length>vn:r.length>Sn),style:{marginBottom:"4px"},children:[t.jsx(lo,{}),"   Find emoji with AI"]})})}),T&&p.simpleEmojiPicker&&t.jsx(Yn,{children:t.jsx(l.Suspense,{fallback:t.jsx(ze,{size:40,thickness:5}),children:t.jsx(nt,{style:{border:"none"},reactionsDefaultOpen:!0,lazyLoadEmojis:!0,reactions:L(),emojiStyle:u,onReactionClick:b,allowExpandReactions:!1,theme:O.darkmode?Le.DARK:Le.LIGHT,autoFocusSearch:!1})})}),T&&!p.simpleEmojiPicker&&t.jsx(t.Fragment,{children:t.jsxs(Ee,{open:T,onClose:j,slotProps:{paper:{style:{padding:"12px",borderRadius:"24px",minWidth:"400px"}}},children:[t.jsx(Me,{title:"Choose Emoji",subTitle:`Choose the perfect emoji for your ${a}.`,onClose:j,icon:t.jsx(et,{})}),t.jsxs(ue,{sx:{p:0,m:0},children:[!P&&u!==N.NATIVE&&t.jsxs(M,{sx:{mx:"14px",mb:"16px"},children:[t.jsx(Re,{severity:"warning",children:"Emojis may not load correctly when offline. Try switching to the native emoji style."}),t.jsxs(V,{variant:"outlined",color:"warning",fullWidth:!0,sx:{mt:"14px"},onClick:()=>{x(g=>({...g,emojisStyle:N.NATIVE}))},children:[t.jsx(co,{}),"   Switch to Native Emoji"]})]}),t.jsx(_n,{children:t.jsx(l.Suspense,{fallback:!p.simpleEmojiPicker&&t.jsx(qn,{pickerTheme:O.darkmode?"dark":"light"}),children:t.jsx(nt,{width:"100vw",height:"550px",reactionsDefaultOpen:p.simpleEmojiPicker&&L().length!==0,reactions:L(),emojiStyle:u,theme:O.darkmode?Le.DARK:Le.LIGHT,suggestedEmojisMode:Ho.FREQUENT,autoFocusSearch:!1,onEmojiClick:b,searchPlaceHolder:"Search emoji",previewConfig:{defaultEmoji:"1f4dd",defaultCaption:`Choose the perfect emoji for your ${a}`}})})})]}),t.jsxs(Be,{children:[E&&t.jsxs(oe,{color:"error",onClick:A,children:[t.jsx(po,{}),"   Remove Emoji"]}),t.jsx(oe,{onClick:j,children:"Cancel"})]})]})})]})},Hn=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 14px;
`,_n=s(ue)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  animation: ${me} 0.4s ease-in;
  padding: 0;
`,Yn=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  animation: ${me} 0.4s ease-in;
  padding: 0;
`,Zn=s(Oe)`
  background: ${({clr:e,theme:o})=>e||o.primary};
  transition: 0.3s all;
  cursor: pointer;
  width: 96px;
  height: 96px;
`,Xn=s(Oe)`
  background: #9c9c9c81;
  backdrop-filter: blur(6px);
  cursor: pointer;
`,qn=s.div`
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
`,Kn=s.div`
  animation: ${me} 0.4s ease-in;
`,dt=({options:e,value:o,onChange:n})=>t.jsx(Jn,{value:o,onChange:r=>n(r.target.value),children:e.map(r=>t.jsx(wt,{value:r.value,control:t.jsx(uo,{sx:{display:"none"}}),label:t.jsxs(Qn,{selected:o===r.value,sx:{border:"1px solid",borderColor:"divider"},children:[t.jsx(W,{fontSize:"28px",children:r.icon}),t.jsx(er,{translate:"no",variant:"body2",children:r.label})]})},r.value))}),Jn=s(xo)`
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
`,Qn=s(M)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  width: 100px;
  height: 100px;
  color: ${({theme:e,selected:o})=>o&&f(e.primary)};
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
`,er=s(W)`
  font-weight: 500;
  text-align: center;
  max-width: 100px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`,be=({header:e,text:o,settingKey:n})=>{const{user:r,setUser:a}=l.useContext(q),d=()=>{const x={...r.settings,[n]:!r.settings[n]};a(u=>({...u,settings:x}))};return t.jsxs(M,{sx:{p:2,display:"flex",flexDirection:"column"},children:[t.jsxs(M,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[t.jsx(W,{variant:"h6",sx:{fontWeight:600,color:"text.primary",fontSize:"16px"},children:e}),t.jsx(kt,{children:t.jsx(wt,{control:t.jsx(mo,{checked:r.settings[n],onChange:d}),label:""})})]}),o&&t.jsx(W,{variant:"body2",sx:{color:"text.secondary",mt:0},children:o})]})},tr=e=>{const o=Ue();return t.jsx(gt,{fullWidth:!0,MenuProps:{PaperProps:{style:{maxHeight:o?400:220,overflowY:"auto"}},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},...e})},pt=s(tr)`
  margin: 8px 0;
`,ce=s(W)`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`,te=s(W)`
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 4px;
`,or=s(W)`
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 8px;
`,nr=e=>{const o=Ue();return t.jsx(fo,{iconPosition:o?"top":"start",...e})},rr=s(nr)`
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
`,xt=s(xe)`
  padding: 12px 20px;
  border-radius: 12px;
  margin: 0 8px;
  display: flex;
  gap: 6px;
`,sr=s.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
  opacity: 0.8;
  font-weight: 500;
  max-width: 330px;
  margin: 0 auto;
`,ar=s(ho)`
  margin: 8px 0;
  background: #afafaf2b;
  padding: 12px 24px 12px 18px;
  border-radius: 18px;
  transition: 0.3s all;
  width: 100%;
`,ir=s(bt)`
  background-color: ${({theme:e})=>e.darkmode?"#2e2e2e":"#ffffff"};
  font-weight: 600;
  position: sticky;
  z-index: 1;
  top: 0;
`,lr="/TodoApp/assets/baner-BaBMvPN-.png",cr=({name:e,description:o,keys:n})=>t.jsxs(dr,{children:[t.jsxs(pr,{children:[t.jsx(W,{fontWeight:600,children:e}),o&&t.jsx(W,{variant:"body2",color:"text.secondary",children:o})]}),t.jsx(xr,{children:n.map((r,a)=>t.jsx(ur,{children:r},a))})]}),dr=s(M)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  gap: 8px;
  border-bottom: 1px solid
    ${({theme:e})=>e.darkmode?"rgba(255, 255, 255, 0.06)":"rgba(0, 0, 0, 0.06)"};
`,pr=s(M)`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,xr=s(M)`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`,ur=s("kbd")`
  background: ${({theme:e})=>e.darkmode?"#2c2c2e":"#f2f2f2"};
  border: 1px solid ${({theme:e})=>e.darkmode?"#4c4c4e":"#d0d0d0"};
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 0.85rem;
  font-family: "Roboto Mono", monospace;
  color: ${({theme:e})=>e.darkmode?"#fff":"#111"};
  box-shadow: ${({theme:e})=>e.darkmode?"inset 0 -1px 0 rgba(255, 255, 255, 0.1)":"inset 0 -1px 0 rgba(0, 0, 0, 0.05)"};
  transition: all 0.2s ease;
`,ke=32,mr=[{label:"Auto",value:"auto",icon:t.jsx(To,{sx:{fontSize:ke}})},{label:"System",value:"system",icon:t.jsx(vt,{sx:{fontSize:ke}})},{label:"Light",value:"light",icon:t.jsx(Ao,{sx:{fontSize:ke}})},{label:"Dark",value:"dark",icon:t.jsx(Mo,{sx:{fontSize:ke}})}],hr=[{label:"Apple",value:N.APPLE},{label:"Facebook",value:N.FACEBOOK},{label:"Discord",value:N.TWITTER},{label:"Google",value:N.GOOGLE},{label:"Native",value:N.NATIVE}].map(({label:e,value:o})=>({label:e,value:o,icon:t.jsx(Te,{emojiStyle:o,unified:"1f60e",size:ke})})),Pe=[{icon:t.jsx($o,{}),label:"Appearance"},{icon:t.jsx(Ke,{}),label:"General"},{icon:t.jsx(Eo,{}),label:"Emoji"},{icon:t.jsx(St,{}),label:"Read Aloud"},{icon:t.jsx(Io,{}),label:"Shortcuts"},{icon:t.jsx(Ct,{}),label:"About"}],fr=({open:e,onClose:o})=>{const{user:n,setUser:r}=l.useContext(q),[a,d]=l.useState(0),[x,u]=l.useState(n.darkmode),[p,T]=l.useState(n.emojisStyle),[I,E]=l.useState([]),[S,P]=l.useState(n.settings.voiceVolume),[O,L]=l.useState(n.settings.voiceVolume),[j,b]=l.useState(!1),[A,y]=l.useState(void 0),C=Ue(),z=Je(),ne=At(),F=Mt(),_=c=>c.replace(/\s+/g,""),re=(c,i)=>{d(i);const h=_(Pe[i].label);window.location.hash=`#settings/${h}`};l.useEffect(()=>{const c=()=>{const h=window.location.hash.match(/^#settings\/(\w+)/);if(h){const k=h[1],v=Pe.findIndex(he=>_(he.label)===k);v!==-1&&d(v)}};return c(),window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),l.useEffect(()=>{if(!e)return;if(!window.location.hash.match(/^#settings\/(\w+)/)){const h=_(Pe[0].label);window.location.hash=`#settings/${h}`}},[e]);const g=()=>{window.speechSynthesis&&window.speechSynthesis.cancel(),b(!1),o(),history.replaceState(null,"",window.location.pathname+window.location.search)};l.useEffect(()=>{const c=document.querySelector("meta[name=theme-color]"),i=z.palette.secondary.main;c&&(e?c.setAttribute("content",z.palette.mode==="dark"?"#383838":"#ffffff"):c.setAttribute("content",i))},[z.palette.mode,z.palette.secondary.main,e,n.theme,n.darkmode]),l.useEffect(()=>{b(!1),window.speechSynthesis&&window.speechSynthesis.cancel()},[n.settings.voiceVolume,n.settings.voice]);const m=c=>{const i=c.target.value;r(h=>({...h,theme:i}))},w=()=>{if(!window.speechSynthesis)return[];const c=window.speechSynthesis.getVoices()??[],i=[];for(const h of c)i.push(h);return i};l.useEffect(()=>{const c=w();E(c??[]),(async()=>{const h=await navigator.storage.estimate();y(h.usage)})()},[]),window.speechSynthesis&&(window.speechSynthesis.onvoiceschanged=()=>{const c=w();E(c??[])});const R=c=>{const i=c.target.value;i&&r(h=>({...h,settings:{...h.settings,voice:i}}))},K=I.filter((c,i,h)=>i===h.findIndex(k=>k.lang===c.lang&&k.default===c.default&&k.localService===c.localService&&k.name===c.name&&k.voiceURI===c.voiceURI)).sort((c,i)=>{const h=c.lang.startsWith(navigator.language),k=i.lang.startsWith(navigator.language);return h&&!k?-1:!h&&k?1:c.lang.localeCompare(i.lang)}),ee=c=>{if(!c)return"";const i=c.split("-");if(i.length>1)try{return new Intl.DisplayNames([c],{type:"region"}).of(i[1])}catch(h){return console.error("Error:",h),c}else return c},Y=(c,i)=>{r(h=>({...h,settings:{...h.settings,voiceVolume:i}}))},ie=()=>{const c=S;L(c);const i=c===0?O!==0?O:Q.settings.voiceVolume:0;r(h=>({...h,settings:{...h.settings,voiceVolume:i}})),P(i)},Z=c=>{var v;const i=(v=c.split("-").pop())==null?void 0:v.toUpperCase().slice(0,2);if(!i||i.length!==2)throw new Error("Invalid country code format");const[h,k]=[...i].map(he=>he.charCodeAt(0)-65+127462);return`${h.toString(16)}-${k.toString(16)}`};return t.jsxs(Ee,{open:e,onClose:g,maxWidth:"md",fullWidth:!0,fullScreen:C,slotProps:{paper:{style:{padding:C?"12px 0":"12px",borderRadius:C?0:"24px",minWidth:"400px",maxHeight:C?void 0:"500px",overflow:"hidden"}}},children:[t.jsx(Me,{icon:t.jsx(Ke,{}),title:"Settings",subTitle:"Manage Your settings and preferences",onClose:g,removeDivider:!0}),t.jsx(ve,{sx:{mb:2}}),t.jsxs(ue,{sx:{display:"flex",minHeight:400,m:0,p:0,overflow:"hidden"},children:[t.jsx(go,{orientation:"vertical",value:a,onChange:re,variant:"scrollable","aria-label":"Settings tabs",sx:{borderRight:1,borderColor:"divider"},children:Pe.map((c,i)=>l.createElement(rr,{icon:c.icon,label:c.label,...gr(i),key:i}))}),t.jsx(M,{className:"customScrollbar",sx:{flex:1,p:0,m:C?"0 12px":"0 20px 0 20px",overflowY:"auto"},children:t.jsxs(Pr,{value:a,name:"settings",children:[t.jsxs(de,{index:0,children:[t.jsx(ce,{children:"Appearance"}),t.jsx(te,{children:"Dark Mode Options"}),t.jsx(dt,{options:mr,value:x,onChange:c=>{u(c),r(i=>({...i,darkmode:c}))}}),t.jsx(te,{children:"Theme Selection"}),t.jsxs(pt,{value:n.theme,onChange:m,IconComponent:Fe,children:[t.jsxs(xt,{value:"system",children:[t.jsx(vt,{}),"  System (",ne==="dark"?We[0].name:We[1].name,")"]}),We.map(c=>t.jsxs(xt,{value:c.name,children:[t.jsx(Ye,{clr:c.MuiTheme.palette.primary.main,secondClr:c.MuiTheme.palette.secondary.main,"aria-label":`Change theme - ${c.name}`,size:"24px",disableHover:!0})," ",c.name]},c.name))]}),t.jsx(be,{settingKey:"enableGlow",header:"Enable Glow Effect",text:"Add a soft glow to tasks for better visibility."})]}),t.jsxs(de,{index:1,children:[t.jsx(ce,{children:"General Settings"}),t.jsx(be,{settingKey:"enableCategories",header:"Enable Categories",text:`\r
              Enable categories to organize your tasks.`}),U.isPWA&&"setAppBadge"in navigator&&t.jsx(be,{settingKey:"appBadge",header:"App Badge",text:"Show a badge on the PWA icon to indicate the number of not done tasks."}),t.jsx(be,{settingKey:"doneToBottom",header:"Completed Tasks at Bottom",text:"Move completed tasks to the bottom of the list to keep your active tasks more visible."})]}),t.jsxs(de,{index:2,children:[t.jsx(ce,{children:"Emoji Settings"}),t.jsx(te,{children:"Emoji Style"}),t.jsx(dt,{options:hr,value:p,onChange:c=>{T(c),r(i=>({...i,emojisStyle:c}))}}),!F&&t.jsxs(Re,{severity:"warning",sx:{mt:"8px"},children:[t.jsx(Ve,{children:"Offline Mode"}),"You are currently offline. Non-native emoji styles may not load."]}),t.jsx(te,{children:"Simple Emoji Picker"}),t.jsx(be,{settingKey:"simpleEmojiPicker",header:"Enable simple emoji picker",text:`\r
              Use a simple emoji picker with only recently used emojis. This will make the emoji picker load faster.`}),t.jsx(te,{children:"Emoji Data"}),t.jsx(or,{children:" Clear data about recently used emojis"}),t.jsxs(V,{variant:"contained",color:"error",onClick:()=>{localStorage.removeItem("epr_suggested"),D("Removed emoji data.")},children:[t.jsx(bo,{}),"   Clear Emoji Data"]})]}),t.jsxs(de,{index:3,children:[t.jsx(ce,{children:"Read Aloud Settings"}),!("speechSynthesis"in window)&&t.jsxs(Re,{severity:"error",children:[t.jsx(Ve,{children:"Speech Synthesis Not Supported"}),"Your browser does not support built in text-to-speech."]}),t.jsx(te,{children:"Play Sample"}),t.jsxs(V,{variant:"contained",disabled:!("speechSynthesis"in window),sx:{color:f(z.palette.primary.main),mt:"8px"},onClick:()=>{if("speechSynthesis"in window){if(window.speechSynthesis.cancel(),j)window.speechSynthesis.pause();else{const c="This is a sample text for testing the speech synthesis feature.",i=new SpeechSynthesisUtterance(c),h=window.speechSynthesis.getVoices()??[];i.voice=h.find(k=>k.name===n.settings.voice.split("::")[0])||h[0],i.volume=S,i.rate=1,i.onend=()=>{b(!1)},window.speechSynthesis.speak(i)}b(c=>!c)}},children:[j?t.jsx(yo,{}):t.jsx(St,{}),"   Play Sample"]}),t.jsx(te,{children:"Voice Selection"}),K.length!==0?t.jsx(pt,{value:n.settings.voice,variant:"outlined",disabled:!("speechSynthesis"in window),onChange:R,translate:"no",IconComponent:Fe,MenuProps:{PaperProps:{style:{maxHeight:500,padding:"0px 6px"}}},children:(()=>{const c=K.filter(v=>v.lang.startsWith(navigator.language)),i=K.filter(v=>!v.lang.startsWith(navigator.language)),h=v=>t.jsxs(xe,{value:`${v.name}::${v.lang}`,translate:"no",disabled:v.localService===!1&&!F,sx:{padding:"10px",borderRadius:"8px"},children:[v.name.startsWith("Google")&&t.jsx(Lo,{sx:{mr:"8px"}}),v.name.startsWith("Microsoft")&&t.jsx(Do,{sx:{mr:"8px"}}),v.name.replace(/^(Google|Microsoft)\s*|\([^()]*\)/gi,""),t.jsx($t,{sx:{fontWeight:500,padding:"4px",ml:"8px"},label:ee(v.lang||""),icon:t.jsx("span",{style:{fontSize:"16px",alignItems:"center",display:"flex"},children:t.jsx(Te,{unified:Z(v.lang),emojiStyle:n.emojisStyle,size:18})})}),v.default&&U.os!=="iOS"&&U.os!=="macOS"&&t.jsx("span",{style:{fontWeight:600},children:"  Default"}),v.localService===!1&&t.jsx("span",{style:{marginLeft:"auto",display:"flex",alignItems:"center"},children:F?t.jsx(G,{title:"Requires Internet Connection",placement:"left",children:t.jsx(Ro,{sx:{fontSize:"18px"}})}):t.jsx(Po,{sx:{fontSize:"18px"}})})]},`${v.name}::${v.lang}`),k=(v,he,Pt)=>v.length===0?[]:[t.jsx(ir,{children:he},Pt),...v.map(h)];return[...k(c,`Your Language (${ee(navigator.language)})`,"header-matching"),...k(i,"Other Languages","header-other")]})()}):t.jsxs(sr,{children:["There are no voice styles available.",t.jsx(G,{title:"Refetch voices",children:t.jsx(Se,{size:"large",onClick:()=>{E(w()??[])},children:t.jsx(jo,{fontSize:"large"})})})]}),!F&&I.some(c=>c.localService===!1)&&t.jsxs(Re,{severity:"warning",sx:{mt:"8px"},children:[t.jsx(Ve,{children:"Offline Mode"}),"You are currently offline. Some Voices may require an internet connection to work."]}),t.jsx(te,{children:"Voice Volume"}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsxs(ar,{spacing:2,direction:"row",alignItems:"center",children:[t.jsx(G,{title:S?"Mute":"Unmute",onClick:ie,children:t.jsx(Se,{children:S===0?t.jsx(wo,{}):S<=.4?t.jsx(ko,{}):t.jsx(vo,{})})}),t.jsx(So,{sx:{width:"100%"},value:S,onChange:(c,i)=>P(i),onChangeCommitted:Y,min:0,max:1,step:.01,"aria-label":"Volume Slider",valueLabelFormat:()=>{const c=Math.floor(S*100);return c===0?"Muted":c+"%"},valueLabelDisplay:"auto"})]})})]}),t.jsxs(de,{index:4,children:[t.jsx(ce,{children:"Keyboard Shortcuts"}),t.jsx(cr,{name:"Quick Export",description:"Save all tasks and download as JSON file",keys:["Ctrl","S"]})]}),t.jsxs(de,{index:5,children:[t.jsx(ce,{children:"About Todo App"}),t.jsx(W,{variant:"body1",sx:{mb:2},children:"📝 A simple todo app project made using React.js and MUI with many features, including sharing tasks via link, theme customization and offline usage as a Progressive Web App (PWA)."}),t.jsx("img",{src:lr,style:{width:"100%",height:"auto"},alt:"Todo App Screenshot"}),t.jsxs(W,{variant:"caption",sx:{display:"block",mt:2},children:["Created by ",t.jsx(tt,{href:"https://github.com/maciekt07",children:"maciekt07"})," ",t.jsx("br",{}),"Explore the project on GitHub:"," ",t.jsx(tt,{href:"https://github.com/maciekt07/TodoApp",target:"_blank",rel:"noopener noreferrer",children:"Todo App Repository"})]}),A!==void 0&&A!==0&&t.jsxs(t.Fragment,{children:[t.jsx(ve,{sx:{my:1}}),t.jsxs(kt,{children:[t.jsxs(yt,{sx:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(Co,{sx:{fontSize:"18px"}}),"Storage Usage"]}),t.jsxs(M,{sx:{mt:"2px"},children:[A?`${(A/1024/1024).toFixed(2)} MB`:"0 MB",U.os==="iOS"&&" / 50 MB"]})]})]})]})]})})]}),C&&t.jsx(M,{sx:{position:"fixed",bottom:"32px",left:"50%",transform:"translateX(-50%)"},children:t.jsx(V,{variant:"contained",sx:{p:"16px 64px",fontSize:"16px",fontWeight:600,borderRadius:"999px"},onClick:g,children:"Close"})})]})};function gr(e){return{id:`vertical-tab-${e}`,"aria-controls":`vertical-tabpanel-${e}`}}const Us=()=>{const{user:e}=l.useContext(q),{tasks:o,settings:n}=e,[r,a]=l.useState(),d=Je(),x=Ze(),u=Ue(),p=Rt(),T="29px";return l.useEffect(()=>{if(p.pathname.split("/")[1]==="task")a(0);else switch(p.pathname){case"/categories":a(1);break;case"/add":a(2);break;case"/transfer":a(3);break;case"/user":a(4);break;case"/":a(0);break;default:a(void 0)}},[p.pathname]),u?t.jsx(yr,{children:t.jsxs(jr,{showLabels:!0,glow:n.enableGlow,value:r,onChange:(I,E)=>{window.scrollTo({top:0,behavior:"smooth"}),a(E)},children:[t.jsx(ye,{onClick:()=>x("/"),label:"Tasks",icon:t.jsx(jt,{color:"primary",badgeContent:r!==0?o.filter(I=>!I.done).length:void 0,max:99,children:t.jsx(Oo,{sx:{fontSize:T}})})}),t.jsx(ye,{onClick:()=>x("/categories"),label:"Categories",icon:t.jsx(ht,{sx:{fontSize:T}}),disabled:!n.enableCategories}),t.jsx(ye,{onClick:()=>x("add"),showLabel:!1,"aria-label":"Add",icon:t.jsx(br,{clr:d.palette.primary.main,fontSize:"large",animate:o.length===0&&r!==2})}),t.jsx(ye,{onClick:()=>x("transfer"),label:"Transfer",icon:t.jsx(ft,{sx:{fontSize:T}})}),t.jsx(ye,{onClick:()=>x("user"),label:"Profile",icon:t.jsx(Bo,{sx:{fontSize:T}})})]})}):null},br=Ie(Ce)`
  border: 2px solid ${({clr:e})=>e};
  background-color: ${({theme:e})=>e.palette.secondary.main};
  font-size: 38px;
  border-radius: 100px;
  padding: 6px;
  margin: 14px;
  transition: background 0.3s;
  ${({animate:e,theme:o})=>e&&pe`
      animation: ${Ae(o.palette.primary.main,10)} 1.2s infinite;
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
  color: ${({theme:e})=>f(e.palette.secondary.main)};

  &:disabled {
    opacity: 0.6;
    & .MuiBottomNavigationAction-label {
      text-shadow: none;
    }
  }

  & .MuiBottomNavigationAction-label {
    font-size: 13px !important;
  }
`,Vs=({color:e,onColorChange:o,width:n,fontColor:r,label:a})=>{const{user:d,setUser:x}=l.useContext(q),{colorList:u}=d,[p,T]=l.useState(e),[I,E]=l.useState(!1),[S,P]=l.useState(Array(u.length).fill(!1)),[O,L]=l.useState(!1),[j,b]=l.useState(e),A=l.useRef([]),y=$e();l.useEffect(()=>{T(e)},[e]);const C=l.useCallback(m=>{T(m),o(m)},[o]);l.useEffect(()=>{Et(e)||(C(y.primary),T(y.primary),console.error("Invalid hex color "+e))},[e,C,y.primary]);const z=m=>{const w=[...S];w[m]=!w[m],P(w)},ne=()=>{L(!0),b(p)},F=()=>{L(!1),b(p)},_=m=>({iconTheme:{primary:m,secondary:f(m)},style:{borderColor:m}}),re=()=>{if(u.length>=ct){D(`You cannot add more than ${ct} colors to color list.`,{type:"error"});return}if(u.some(m=>m.toLowerCase()===j.toLowerCase())||j.toLowerCase()===y.primary.toLowerCase()){D("Color is already in color list.",{type:"error"});return}C(j.toUpperCase()),x({...d,colorList:[...u,j.toUpperCase()]}),D(t.jsxs("div",{children:["Added"," ",t.jsxs("b",{children:[t.jsx(ut,{clr:j}),le(j).name]})," ","to your color list."]}),_(j)),F()},g=m=>{P(Array(u.length).fill(!1)),D(t.jsxs("div",{children:["Removed"," ",t.jsxs("b",{children:[t.jsx(ut,{clr:m}),le(m).name]})," ","from your color list."]}),_(m)),x({...d,colorList:u.filter(w=>w!==m)})};return t.jsxs(t.Fragment,{children:[t.jsxs(wr,{onChange:(m,w)=>E(w),isExpanded:I,fontColor:r,sx:{width:n},children:[t.jsx(Vo,{expandIcon:t.jsx(Fe,{sx:{color:r||$.fontLight}}),children:t.jsxs(kr,{clr:r||$.fontLight,children:[!I&&t.jsx(Lt,{clr:p}),a||"Color",!I&&` - ${le(p).name}`]})}),t.jsxs(Go,{children:[t.jsxs(vr,{maxWidth:n||400,clr:p,children:[p.toUpperCase()," - ",le(p).name]}),t.jsx(je,{container:!0,maxWidth:n||400,children:t.jsxs(je,{container:!0,spacing:1,maxWidth:n||400,m:1,children:[[y.primary,...u].map((m,w)=>t.jsxs(je,{children:[t.jsx(G,{title:le(m).name,children:t.jsx(Ye,{ref:R=>{A.current[w]=R},id:`color-element-${w}`,clr:m,"aria-label":`Select color - ${m}`,onContextMenu:R=>{window.matchMedia("(pointer:fine)").matches&&m!==y.primary&&(R.preventDefault(),z(w))},onClick:()=>{C(m),window.matchMedia("(pointer:fine)").matches||p===m&&m!==y.primary&&z(w)},children:m.toUpperCase()===p.toUpperCase()&&t.jsx(Ir,{})})}),t.jsx(No,{open:S[w]===!0,onClose:()=>z(w),anchorEl:A.current[w],anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},slotProps:{paper:{sx:{background:"transparent",backdropFilter:"none",boxShadow:"none"}}},children:t.jsx("div",{children:t.jsx(Sr,{onClick:()=>g(m),children:"Delete"})})})]},m)),t.jsx(G,{title:"Add new color",children:t.jsx(je,{children:t.jsx(Ye,{clr:"transparent",style:{border:"2px solid",color:r||$.fontLight},onClick:ne,children:t.jsx(Ce,{style:{fontSize:"38px"}})})})})]})}),t.jsxs(Cr,{clr:r||$.fontLight,children:[t.jsx(Ct,{fontSize:"small"})," ",window.matchMedia("(pointer:fine)").matches?"Right click":"Double tap"," to remove color from list"]})]})]}),t.jsxs(Ee,{open:O,onClose:F,children:[t.jsx(Me,{title:"Choose a color",subTitle:"Add a new color to the color list.",icon:t.jsx(Wo,{}),onClose:F}),t.jsxs(ue,{children:[t.jsxs(Er,{children:[j.toUpperCase()," - ",le(j).name]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx(Tr,{type:"color",value:j,onChange:m=>b(m.target.value)}),t.jsxs($r,{clr:f(j),children:[t.jsx(ot,{})," Choose color"]})]})]}),t.jsxs(Be,{children:[t.jsx(oe,{onClick:F,children:"Cancel"}),t.jsxs(oe,{onClick:()=>{o(j),F()},children:[t.jsx(ot,{}),"   Set"]}),t.jsxs(oe,{onClick:re,children:[t.jsx(Ce,{}),"   Add"]})]})]})]})},wr=s(mt)`
  background: transparent;
  border-radius: 16px !important;
  // match border with other inputs
  border: ${({fontColor:e})=>`1px solid ${ae(e)?"rgba(0, 0, 0, 0.23)":"rgb(255, 255, 255, 0.23)"}`};
  box-shadow: none;
  padding: 6px 0;
  margin: 8px 0;
  &:hover {
    border: ${({theme:e,isExpanded:o,fontColor:n})=>o?`1px solid ${ae(n)?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`:`1px solid ${e.darkmode?"#ffffff":"#000000"}`};
  }
`,Lt=s.div`
  width: 24px;
  height: 24px;
  background: ${({clr:e})=>e};
  border-radius: 8px;
  transition: 0.3s background;
`,kr=s.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({clr:e})=>e};
  font-size: 16px;
`,ut=s(Lt)`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  display: inline-block;
  margin-right: 5px;
  margin-left: 2px;
  vertical-align: middle;
`,vr=s(je)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({clr:e})=>e};
  color: ${({clr:e})=>f(e)};
  padding: 8px 0;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 100px;
  transition: 0.3s all;
  font-weight: 600;
  border: 2px solid #ffffffab;
`,Sr=s.button`
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
`,Cr=s.span`
  color: ${({clr:e})=>e};
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
  margin-left: 4px;
  font-size: 14px;
`,$r=s.p`
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
`,Er=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0;
  font-weight: 600;
`,Ir=s(Uo)`
  font-size: 28px;
  animation: ${Qe} 0.25s;
`,Tr=s.input`
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
`,Ar=({category:e,emojiSizes:o,...n})=>{const{user:r}=l.useContext(q),{emojisStyle:a,settings:d}=r,x=o?a!==N.NATIVE?o[0]:o[1]:20;return t.jsx(Mr,{label:e.name,variant:"outlined",backgroundclr:e.color,glow:d.enableGlow,translate:"no",avatar:e.emoji?t.jsx(Oe,{alt:e.name,sx:{background:"transparent",borderRadius:"0px"},children:t.jsx(Te,{lazyLoad:!0,size:x,unified:e.emoji,emojiStyle:a})}):void 0,...n},e.id)},Mr=Ie($t)`
  color: ${({backgroundclr:e})=>f(e||"")};
  background-color: ${({backgroundclr:e})=>e};
  box-shadow: ${({glow:e,backgroundclr:o})=>e?`0 0 8px 0 ${o}`:"none"};
  border: ${({borderclr:e})=>e?`1px solid ${e}`:"none"};
  font-weight: bold;
  font-size: 14px;
  margin: 6px 0 0 0;
  padding: 8px;
  transition: 0.3s all;
  animation: ${me} 0.5s ease-in;

  &:hover {
    background-color: ${({backgroundclr:e})=>`${e} !important`};
    opacity: ${({list:e})=>e&&.7};
  }

  &:focus-visible {
    opacity: 0.5;
    background-color: ${({backgroundclr:e})=>e};
  }

  & .MuiChip-deleteIcon {
    color: ${({backgroundclr:e})=>f(e||"")};
    transition: 0.3s all;
    width: 22px;
    height: 22px;
    stroke: transparent;

    @media (max-width: 1024px) {
      width: 26px;
      height: 26px;
    }

    &:hover {
      color: ${({backgroundclr:e})=>f(e||"")};
    }
  }
`,Gs=()=>{const[e,o]=l.useState(!1);return l.useEffect(()=>{const n=setTimeout(()=>{o(!0)},100);return()=>clearTimeout(n)},[]),t.jsx(Lr,{children:e&&t.jsx(ze,{size:80,thickness:4,"aria-label":"loading"})})},Lr=s(M)`
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
`;function Dr({open:e,onClose:o}){const{setUser:n}=l.useContext(q),r=()=>{n(Q),o(),D("You have been successfully logged out")};return t.jsxs(Ee,{open:e,onClose:o,children:[t.jsx(Me,{title:"Logout Confirmation",onClose:o,icon:t.jsx(_e,{})}),t.jsxs(ue,{children:["Are you sure you want to logout? ",t.jsx("b",{children:"Your tasks will not be saved."})]}),t.jsxs(Be,{children:[t.jsx(oe,{onClick:o,children:"Cancel"}),t.jsxs(oe,{onClick:r,color:"error",children:[t.jsx(_e,{}),"   Logout"]})]})]})}const Dt=l.createContext(void 0),Pr=({name:e,value:o,children:n})=>t.jsx(Dt.Provider,{value:{name:e,value:o},children:n}),Rr=()=>{const e=l.useContext(Dt);if(!e)throw new Error("TabPanel must be used within a TabGroupProvider.");return e};function de({children:e,index:o,...n}){const{name:r,value:a}=Rr();return t.jsx("div",{role:"tabpanel",hidden:a!==o,id:`${r}-tabpanel-${o}`,"aria-labelledby":`${r}-tab-${o}`,style:{overflowX:"hidden"},...n,children:a===o&&t.jsx(M,{children:t.jsx(W,{children:e})})})}export{es as $,We as A,Us as B,$ as C,oe as D,$n as E,En as F,Yr as G,cs as H,Os as I,Ps as J,Et as K,Gs as L,Gr as M,Zr as N,Mt as O,Ms as P,Xr as Q,rs as R,ls as S,Pr as T,q as U,qr as V,Kr as W,os as X,ts as Y,Jr as Z,Qr as _,Qe as a,ns as a0,ss as a1,is as a2,as as a3,at as a4,It as a5,Rs as a6,Dr as a7,Qo as a8,Sn as a9,Ss as aa,vs as ab,$s as ac,Es as ad,ks as ae,Is as af,Ts as ag,Cs as ah,ds as ai,ps as aj,us as ak,ms as al,hs as am,js as an,ws as ao,xs as ap,fs as aq,bs as ar,ys as as,gs as at,Me as b,de as c,Nr as d,Vr as e,me as f,f as g,D as h,ae as i,Wr as j,As as k,_r as l,Ar as m,vn as n,Ls as o,Bs as p,Fs as q,on as r,U as s,Vs as t,Ue as u,zs as v,Ds as w,Hr as x,At as y,Q as z};
