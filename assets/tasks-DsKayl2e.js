import{r,j as e,Q as Ke,d as Ze,u as en,J as nn,V as fe,M as on,D as tn}from"./vendor-B8wZl_f4.js";import{a as Ue,E as sn}from"./emoji-BdBGO0jD.js";import{n as d,B as ee,aP as an,c as Be,X as Te,aQ as rn,T as Ee,g as U,aR as ln,ad as dn,x as ce,aS as Ae,z as xe,ae as cn,aT as ne,aU as xn,aV as we,a as Ne,aW as pn,aX as hn,a3 as un,ag as mn,E as pe,aY as fn,aZ as gn,M as jn,u as Re,a_ as Ve,a$ as bn,b0 as Fe,b1 as yn,aj as Cn,D as ge,V as Sn,b2 as wn,ah as ve,b3 as vn,b4 as kn,b5 as Dn,b6 as $n,b7 as Tn,b8 as En,b9 as Rn,ba as ke,f as Q,bb as In,bc as Me,bd as Ln,be as An,bf as Nn,bg as Ie,bh as Mn,bi as On,o as zn,bj as Pn,bk as Un,bl as Bn,aJ as Vn}from"./ui-lib-CzYSArXp.js";import{U as q,e as Fn,g as S,f as Le,C as N,i as De,s as oe,a as Ge,r as je,b as he,T as Gn,c as be,d as _n,D as _,h as H,u as _e,j as Oe,k as Je,l as Qe,m as He,n as de,o as ye,p as Jn,q as Qn,t as Hn,v as ze,w as Pe,x as Wn}from"./settings-CxFNKuU0.js";const We=r.createContext({}),Yn=()=>{const{user:n}=r.useContext(q),{tasks:t}=n;r.useEffect(()=>{const s=u=>{(u.key==="s"||u.key==="S")&&(u.ctrlKey||u.metaKey)&&(u.preventDefault(),window.confirm("Do you want to save all tasks to JSON?")&&Fn(t))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[t])};function Xn(n,t,s="localStorage"){const u=window[s],[g,c]=r.useState(()=>{const o=u.getItem(t);return o!=null&&o!=="undefined"?JSON.parse(o):n});return r.useEffect(()=>{u.setItem(t,JSON.stringify(g))},[t,g,u]),r.useEffect(()=>{const o=h=>{h.key===t&&h.newValue!==null&&h.key!==""&&c(JSON.parse(h.newValue))};return window.addEventListener("storage",o),()=>{window.removeEventListener("storage",o)}},[t]),[g,c]}const qn=d.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 20px;
  border-radius: 30px;
  margin-top: 12px;
  transition: 0.3s all !important;
  color: ${({backgroundColor:n})=>S(n)};
  background-color: ${({backgroundColor:n,done:t})=>`${n}${t?"cc":""}`};
  opacity: ${({done:n})=>n?.8:1};
  border-left: ${({done:n})=>n?"8px solid #00ff1ee3":"1px solid transparent"};
  box-shadow: ${n=>n.glow&&!n.blur?`0 0 128px -20px ${n.backgroundColor}`:"none"};
  /* text-shadow: ${({backgroundColor:n,glow:t,done:s})=>t&&!s?`0 0 2px ${S(n)}78`:"none"}; */
  filter: ${({blur:n})=>n?"blur(2px) opacity(75%)":"none"};

  animation: ${Le} 0.5s ease-in;

  /* If the theme color and task color are the same, it changes the selection color to be different. */
  *::selection {
    background-color: ${({theme:n,backgroundColor:t})=>n.primary===t?"#ffffff":n.primary} !important;
    color: ${({theme:n,backgroundColor:t})=>n.primary===t?"#000000":S(n.primary)} !important;
  }

  @media (max-width: 768px) {
    padding: 14px 14px 14px 18px;
    margin-top: 10px;
  }
`,Kn=d.span`
  text-decoration: none;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({clr:n})=>n===N.fontDark?"#4b4b4b6e":"#dddddd9d"};
  font-size: 32px;
  padding: 12px;
  width: 42px;
  height: 42px;
  border-radius: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zn=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  justify-content: left;
  align-items: center;
`,eo=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,no=d.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,oo=d.h3`
  font-size: 20px;
  margin: 0;
  text-decoration: ${({done:n})=>n?"line-through":"none"};
  word-break: break-word;
  white-space: pre-line;
`,to=d.p`
  margin: 0 6px;
  text-align: right;
  margin-left: auto;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  backdrop-filter: none !important;
`,so=d.div`
  margin: 0;
  font-size: 18px;
  text-decoration: ${({done:n})=>n?"line-through":"none"};
  word-break: break-word;
`,io=d(ee)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bolder;
  transition: 0.3s color;
  color: ${({clr:n})=>S(n)};
  text-shadow: ${({clr:n})=>`0 0 8px ${S(n)+45}`};
  text-transform: capitalize;
  border-radius: 6px;
  padding: 0 4px;
  margin: 0 4px;
`,ao=d.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  opacity: 0.9;
  font-size: 18px;
  & span {
    font-weight: bold;
  }
`,ro=d.div`
  text-align: center;
  font-size: 20px;
  opacity: 0.9;
  margin-top: 18px;
  animation: ${Le} 0.5s ease-in;
`,lo=d.main`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
  gap: 6px;
`,co=d.span`
  text-decoration: ${({done:n})=>n?"line-through":"none"};
  transition: 0.3s all;
  font-size: 16px;
  margin: 4px 0;
  font-weight: 400;
  display: flex;
  backdrop-filter: none !important;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  // fix for browser translate
  & font {
    margin: 0 1px;
  }
`,xo=d.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,po=d.div`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.8;
  font-size: 16px;
`,ho=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  background: ${({theme:n})=>De(n.secondary)?"#090b2287":"#ffffff5c"};
  padding: 16px 20px;
  border-radius: 18px;
  position: sticky;
  top: ${oe.os==="iOS"?"52":"60"}px;
  z-index: 1;
  backdrop-filter: blur(24px);
  & h3 {
    margin: 0;
    display: flex;
    align-items: center;
  }
  & font {
    margin: 0 1px;
  }
`,uo=d(an)`
  margin-left: -8px;
  margin-right: 4px;
  color: ${({clr:n})=>n} !important;
  animation: ${Le} 0.3s ease-in;
  &.Mui-checked {
    color: ${({clr:n})=>n} !important;
  }
`,Ye=Be`
  animation: ${Ge} 0.2s ease-in;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`,mo=d(Te)`
  ${Ye}
`,fo=d(rn)`
  ${Ye}
`,go=d.div`
  position: sticky;
  background: transparent;
  backdrop-filter: blur(24px);
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 8px;
  overflow-x: auto;
  padding: 0 0 6px 0;
  margin: 8px 0;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({theme:n})=>S(n.secondary)}15;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({theme:n})=>S(n.secondary)}30;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:n})=>S(n.secondary)}50;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: ${({theme:n})=>S(n.secondary)}15;
  }
`,_o=d.span`
  background-color: #6829ef;
  color: #fff;
  padding: 2px 0;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  margin: 0;
  font-weight: bold;
  border: 1px solid #ffffff5f;
  transition: 0.3s all;
`,jo=d(ee)`
  margin: 0;
  color: ${({clr:n})=>S(n)};
  padding: 0 4px;
  display: inline-block;
  background: ${({clr:n})=>S(n)}28;
  backdrop-filter: none !important;
  text-transform: none !important;
  min-width: unset !important;
  user-select: auto !important;
  border-radius: 6px;
  &:hover {
    background: ${({clr:n})=>S(n)}19;
  }
  & div {
    word-break: break-all;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`,bo=d(Ee)`
  margin: 8px 0 0 0;
  border-radius: 16px;
  transition: 0.3s all;
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({theme:n})=>De(n.secondary)?"#44479cb7":n.primary} !important;
  }
  & .MuiOutlinedInput-root {
    padding: 2px 16px;
    border-radius: 16px;
    transition: 0.3s all;
    background: ${({theme:n})=>De(n.secondary)?"#090b2258":"#ffffff3e"};
    color: ${({theme:n})=>S(n.secondary)};
    & .MuiSvgIcon-root {
      color: ${({theme:n})=>S(n.secondary)};
    }
  }
`,yo=d(U)`
  animation: ${Ge} 0.3s ease;
  transition: 0.3s all;
`,Ce="2s 0.5s ease-in-out infinite",Xe=d(ln)`
  color: red;
  ${({animate:n})=>n&&Be`
      -webkit-animation: ${je} ${Ce};
      -moz-animation: ${je} ${Ce};
      animation: ${je} ${Ce};
    `}
`,Co=({open:n,onClose:t,selectedTask:s})=>{const{user:u}=r.useContext(q),{settings:g,name:c}=u,[o,h]=r.useState(0),D=[{label:"Link",icon:e.jsx(we,{})},{label:"QR Code",icon:e.jsx(fn,{})},...oe.isAppleDevice?[{label:"Calendar",icon:e.jsx(gn,{})}]:[]],b=(p,y)=>{if(p){const k={...p,sharedBy:void 0,id:void 0,category:g.enableCategories?p.category:void 0},I=Ze.compressToEncodedURIComponent(JSON.stringify(k)),l=encodeURIComponent(y);return`${window.location.href}share?task=${I}&userName=${l}`}return""},$=async()=>{const p=b(s,c||"User");try{await navigator.clipboard.writeText(p),H("Copied link to clipboard.")}catch(y){console.error("Error copying link to clipboard:",y),H("Error copying link to clipboard",{type:"error"})}},R=async()=>{const p=b(s,c||"User");if(navigator.share)try{await navigator.share({title:"Share Task",text:`Check out this task: ${s.name}`,url:p})}catch(y){console.error("Error sharing link:",y),H("Error sharing link",{type:"error"})}},x=p=>p.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",v=()=>{if(!s)return;const p=x(s.deadline?new Date(s.deadline):new Date);let{description:y=""}=s;const k=y.match(/(https?:\/\/[^\s]+)/),I=(k==null?void 0:k[0])||"";y=y.replace((k==null?void 0:k[0])||"","").trim();const l=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",`SUMMARY:${s.name}`,`DESCRIPTION:${y}`,`DTSTART:${p}`,`DTEND:${p}`,I?`URL:${I}`:"","END:VEVENT","END:VCALENDAR"].filter(Boolean).join(`
`),B=new Blob([l],{type:"text/calendar"}),m=URL.createObjectURL(B),C=document.createElement("a");C.href=m,C.download="event.ics",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(m)};return e.jsxs(ce,{open:n,onClose:t,slotProps:{paper:{style:{borderRadius:"28px",padding:"10px",width:"560px"}}},children:[e.jsx(he,{title:"Share Task",subTitle:"Share your task with others.",onClose:t,icon:e.jsx(Ae,{})}),e.jsxs(xe,{children:[e.jsx($e,{task:s,features:{enableGlow:!1}}),e.jsx(cn,{value:o,onChange:(p,y)=>h(y),sx:{m:"8px 0"},children:D.map(p=>e.jsx(ko,{label:p.label,icon:p.icon,disabled:p.disabled,totaltabs:D.length},p.label))}),e.jsxs(Gn,{name:"share",value:o,children:[e.jsx(be,{index:0,children:e.jsx(Do,{value:b(s,c||"User"),fullWidth:!0,variant:"outlined",label:"Shareable Link",slotProps:{input:{readOnly:!0,startAdornment:e.jsx(ne,{position:"start",children:e.jsx(we,{sx:{ml:"8px"}})}),endAdornment:e.jsx(ne,{position:"end",children:e.jsxs(ee,{onClick:$,sx:{p:"12px",borderRadius:"14px",mr:"4px"},children:[e.jsx(xn,{}),"   Copy"]})})}}})}),e.jsxs(be,{index:1,children:[e.jsx(wo,{children:e.jsx(Ke,{id:"QRCodeShare",value:b(s,c||"User"),size:400})}),e.jsx(Ne,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(So,{variant:"outlined",onClick:()=>_n(s.name||""),children:[e.jsx(pn,{}),"   Download QR Code"]})})]}),oe.isAppleDevice&&e.jsx(be,{index:2,children:e.jsx(Ne,{sx:{mt:"22px",display:"flex",justigyContent:"center",flexDirection:"column",gap:1},children:e.jsxs(ee,{variant:"contained",color:"inherit",onClick:v,children:[e.jsx(hn,{}),"   Add to Apple Calendar"]})})})]}),o!==2&&e.jsxs(un,{severity:"info",sx:{mt:"20px"},children:[e.jsx(mn,{children:"Share Your Task"}),"Copy the link to share manually or use the share button to send it via other apps."]})]}),e.jsxs(pe,{children:[e.jsx(_,{onClick:t,children:"Close"}),e.jsxs(_,{onClick:R,children:[e.jsx(Ae,{sx:{mb:"4px"}}),"   Share"]})]})]})},So=d(ee)`
  padding: 12px 24px;
  border-radius: 14px;
  margin-top: 16px;
  @media (max-width: 520px) {
    margin-top: -2px;
  }
`,wo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`,vo=({...n})=>e.jsx(dn,{iconPosition:"start",...n}),ko=d(vo)`
  border-radius: 12px 12px 0 0;
  flex: 1 1 calc(100% / ${n=>n.totaltabs});
  max-width: calc(100% / ${n=>n.totaltabs});
`,Do=d(Ee)`
  margin-top: 22px;
  .MuiOutlinedInput-root {
    border-radius: 14px;
    padding: 2px;
    transition: 0.3s all;
  }
`,$o=()=>{const{user:n,setUser:t}=r.useContext(q),{tasks:s,settings:u,emojisStyle:g}=n,{selectedTaskId:c,anchorEl:o,anchorPosition:h,multipleSelectedTasks:D,handleSelectTask:b,setEditModalOpen:$,handleDeleteTask:R,handleCloseMoreMenu:x}=r.useContext(We),[v,p]=r.useState(!1),y=_e(),k=en(),I=Re(),l=r.useMemo(()=>s.find(T=>T.id===c)||{},[c,s]),B=()=>{const T=l==null?void 0:l.id.toString().replace(".","");k(`/task/${T}`)},m=()=>{if(c){x();const T=s.map(w=>w.id===c?{...w,done:!w.done}:w);t(w=>({...w,tasks:T})),T.every(w=>w.done)&&H(e.jsxs("div",{children:[e.jsx("b",{children:"All tasks done"}),e.jsx("br",{}),e.jsx("span",{children:"You've checked off all your todos. Well done!"})]}),{icon:e.jsx("div",{style:{margin:"-6px 4px -6px -6px"},children:e.jsx(Je,{variant:"success",scale:.18})})})}},C=()=>{if(c){x();const T=s.map(f=>f.id===c?{...f,pinned:!f.pinned}:f);t(f=>({...f,tasks:T}))}},V=()=>{if(x(),c&&l){const T={...l,id:Oe(),date:new Date,lastSave:void 0},f=[...s,T];t(w=>({...w,tasks:f}))}},J=()=>{var re;const f=(window.speechSynthesis.getVoices()??[]).find(F=>F.name===u.voice.split("::")[0]),w=u.voiceVolume,ue=l.name?l.name+". ":"",te=l!=null&&l.description?((re=l==null?void 0:l.description)==null?void 0:re.replace(/((?:https?):\/\/[^\s/$.?#].[^\s]*)/gi,""))+". ":"",se=new Intl.DateTimeFormat(f?f.lang:navigator.language,{dateStyle:"full",timeStyle:"short"}).format(new Date((l==null?void 0:l.date)||"")),ie=l!=null&&l.deadline?`. Task Deadline: ${Qe(new Date(l.deadline),f?f.lang:navigator.language)}`:"",W=`${ue}${te}Date: ${se}${ie}`,z=new SpeechSynthesisUtterance(W);f&&(z.voice=f),w&&(z.volume=w),x();const ae=()=>{window.speechSynthesis.pause()},M=()=>{window.speechSynthesis.resume()},me=()=>{window.speechSynthesis.cancel(),fe.dismiss(Y),x()},Y=fe(()=>{var le;const[F,K]=r.useState(!0);return e.jsxs(Ro,{children:[e.jsxs(Io,{translate:"yes",children:[e.jsx(kn,{})," Read aloud: ",e.jsx("span",{translate:"no",children:l==null?void 0:l.name})]}),e.jsxs("span",{translate:"yes",style:{marginTop:"8px",fontSize:"16px"},children:["Voice: ",e.jsx("span",{translate:"no",children:((le=z.voice)==null?void 0:le.name)||"Default"})]}),e.jsx("div",{translate:"no",children:e.jsx(on,{delay:.6,play:F,children:e.jsxs("p",{style:{margin:"6px 0"},children:[z.text,"  "]})})}),e.jsxs(Lo,{children:[F?e.jsx(U,{onClick:()=>{ae(),K(!F)},children:e.jsx(Dn,{fontSize:"large"})}):e.jsx(U,{onClick:()=>{M(),K(!F)},children:e.jsx($n,{fontSize:"large"})}),e.jsx(U,{onClick:me,children:e.jsx(Tn,{fontSize:"large"})})]})]})},{duration:1/0,style:{border:`1px solid ${I.darkmode?"#1b1d4eb7":"#ededf7b0"} `,WebkitBackdropFilter:`blur(${I.darkmode?"10":"14"}px)`,backdropFilter:`blur(${I.darkmode?"10":"14"}px)`}});z.onend=()=>{x(),fe.dismiss(Y)},w>0&&window.speechSynthesis.speak(z)},O=e.jsxs("div",{children:[e.jsxs(P,{onClick:m,children:[l.done?e.jsx(Ve,{}):e.jsx(bn,{}),"  ",l.done?"Mark as not done":"Mark as done"]}),e.jsxs(P,{onClick:C,children:[e.jsx(Fe,{sx:{textDecoration:"line-through"}}),"  ",l.pinned?"Unpin":"Pin"]}),D.length===0&&e.jsxs(P,{onClick:()=>b(c||Oe()),children:[e.jsx(Te,{}),"   Select"]}),e.jsxs(P,{onClick:B,children:[e.jsx(yn,{}),"   Task details"]}),u.enableReadAloud&&"speechSynthesis"in window&&e.jsxs(P,{onClick:J,disabled:window.speechSynthesis&&(window.speechSynthesis.speaking||window.speechSynthesis.pending),children:[e.jsx(Cn,{}),"   Read Aloud"]}),e.jsxs(P,{onClick:()=>{p(!0),x()},children:[e.jsx(we,{}),"   Share"]}),e.jsx(ge,{}),e.jsxs(P,{onClick:()=>{$(!0),x()},children:[e.jsx(Sn,{}),"   Edit"]}),e.jsxs(P,{onClick:V,children:[e.jsx(wn,{}),"   Duplicate"]}),e.jsx(ge,{}),e.jsxs(P,{clr:N.red,onClick:()=>{R(),x()},children:[e.jsx(ve,{}),"   Delete"]})]});return e.jsxs(e.Fragment,{children:[y?e.jsx(nn,{open:!!o,onDismiss:x,snapPoints:({minHeight:T,maxHeight:f})=>[T,f],expandOnContentDrag:!0,header:e.jsxs("div",{style:{cursor:"ns-resize"},children:[e.jsxs(To,{translate:"no",children:[e.jsx(Ue,{emojiStyle:g,size:32,unified:l.emoji||""})," ",g===sn.NATIVE&&"  ",l.name]}),e.jsx(ge,{sx:{mt:"20px",mb:"-20px"}})]}),children:e.jsx(Eo,{children:O})}):e.jsx(vn,{id:"task-menu",anchorEl:o,anchorPosition:h||void 0,anchorReference:h?"anchorPosition":void 0,open:!!o,onClose:x,sx:{"& .MuiPaper-root":{borderRadius:"18px",minWidth:"200px",boxShadow:"none",padding:"6px 4px"}},MenuListProps:{"aria-labelledby":"more-button"},children:O}),e.jsx(Co,{open:v,onClose:()=>p(!1),selectedTask:l})]})},To=d.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: ${({theme:n})=>n.darkmode?N.fontLight:N.fontDark};
  margin: 10px;
  font-size: 20px;
`,Eo=d.div`
  color: ${({theme:n})=>n.darkmode?N.fontLight:N.fontDark};
  margin: 20px 10px;
  & .MuiMenuItem-root {
    font-size: 16px;
    padding: 16px;
    &::before {
      content: "";
      display: inline-block;
      margin-right: 10px;
    }
  }
`,P=d(jn)`
  margin: 0 6px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: none;
  gap: 2px;
  color: ${({clr:n})=>n||"unset"};
`,Ro=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Io=d.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  gap: 6px;
`,Lo=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`,Ao=r.memo(({task:n,onClick:t})=>e.jsx(U,{"aria-label":"Task Menu","aria-controls":"task-menu","aria-haspopup":"true",onClick:t,sx:{color:S(n.color)},children:e.jsx(En,{})})),No=()=>{const{user:n,setUser:t}=r.useContext(q),{selectedTaskId:s,setSelectedTaskId:u,anchorEl:g,setAnchorEl:c,setAnchorPosition:o,expandedTasks:h,toggleShowMore:D,search:b,setSearch:$,highlightMatchingText:R,multipleSelectedTasks:x,setMultipleSelectedTasks:v,handleSelectTask:p,editModalOpen:y,setEditModalOpen:k,deleteDialogOpen:I,setDeleteDialogOpen:l}=r.useContext(We),B=!!g,[m,C]=r.useState(null),[V,J]=r.useState(!1),[O,T]=r.useState(void 0),[f,w]=Xn(void 0,"selectedCategory","sessionStorage"),[ue,te]=r.useState({}),se=_e(),ie=Re();Yn();const W=r.useMemo(()=>new Intl.ListFormat("en-US",{style:"long",type:"conjunction"}),[]),z=(i,a)=>{c(i.currentTarget),u(a),i.target.tagName!=="BUTTON"?o({top:i.clientY,left:i.clientX}):o(null),!se&&!h.has(a)&&D(a)},ae=r.useCallback(i=>{var G;let a=i.filter(E=>E.pinned),j=i.filter(E=>!E.pinned);if(f!==void 0){const E=Z=>{var X;return((X=Z.category)==null?void 0:X.some(qe=>qe.id===f))??!1};j=j.filter(E),a=a.filter(E)}const L=b.toLowerCase(),A=E=>E.name.toLowerCase().includes(L)||E.description&&E.description.toLowerCase().includes(L);if(j=j.filter(A),a=a.filter(A),(G=n.settings)!=null&&G.doneToBottom){const E=j.filter(X=>X.done),Z=j.filter(X=>!X.done);return[...a,...Z,...E]}return[...a,...j]},[b,f,n.settings]),M=r.useMemo(()=>ae(n.tasks),[n.tasks,ae]),me=()=>{if(s){const i=n.tasks.filter(a=>a.id!==s);t(a=>({...a,tasks:i})),l(!1),H(e.jsxs("div",{children:["Deleted Task - ",e.jsx("b",{translate:"no",children:m==null?void 0:m.name})]})),C(null)}};r.useEffect(()=>{if(s&&I){const i=n.tasks.find(a=>a.id===s);C(i||null)}},[s,I,n.tasks]);const Y=()=>{l(!1)},re=()=>{t(i=>({...i,tasks:i.tasks.map(a=>x.includes(a.id)?{...a,done:!0}:a)})),v([])},F=()=>J(!0);r.useEffect(()=>{const i=M,a=[];i.forEach(L=>{L.category&&L.category.forEach(A=>{a.some(G=>G.id===A.id)||a.push(A)})});const j={};a.forEach(L=>{const A=i.filter(G=>{var E;return(E=G.category)==null?void 0:E.some(Z=>Z.id===L.id)});j[L.id]=A.length}),a.sort((L,A)=>{const G=j[L.id]||0;return(j[A.id]||0)-G}),T(a),te(j)},[n.tasks,b,T,te,M]);const{toasts:K}=tn(),le=r.useCallback(i=>{if(location.pathname==="/share")return;const a=i.filter(j=>j.deadline&&new Date>new Date(j.deadline)&&!j.done);if(a.length>0){if(K.some(A=>A.id==="overdue-tasks"&&A.visible))return;const L=a.map(A=>A.name);H(e.jsxs("div",{translate:"no",style:{wordBreak:"break-word"},children:[e.jsxs("b",{translate:"yes",children:["Overdue task",a.length>1&&"s",": "]}),W.format(L)]}),{id:"overdue-tasks",type:"error",disableVibrate:!0,duration:3400,icon:e.jsx(Xe,{animate:!0,sx:{color:N.red}}),style:{borderColor:N.red,boxShadow:n.settings.enableGlow?`0 0 18px -8px ${N.red}`:"none"}})}},[W,n.settings,K]);return r.useEffect(()=>{le(n.tasks)},[]),e.jsxs(e.Fragment,{children:[e.jsx($o,{}),e.jsxs(lo,{children:[n.tasks.length>0&&e.jsx(bo,{focused:!0,color:"primary",placeholder:"Search for task...",autoComplete:"off",value:b,onChange:i=>{$(i.target.value)},slotProps:{input:{startAdornment:e.jsx(ne,{position:"start",children:e.jsx(Rn,{sx:{color:"white"}})}),endAdornment:b?e.jsx(ne,{position:"end",children:e.jsx(yo,{color:M.length===0&&n.tasks.length>0?"error":"default",onClick:()=>$(""),children:e.jsx(Ve,{sx:{color:M.length===0&&n.tasks.length>0?`${N.red} !important`:"white",transition:".3s all"}})})}):void 0}}}),O!==void 0&&(O==null?void 0:O.length)>0&&n.settings.enableCategories&&e.jsx(go,{children:O==null?void 0:O.map(i=>e.jsx(He,{category:i,emojiSizes:[24,20],list:"true",label:e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:i.name}),e.jsxs("span",{style:{fontSize:"14px",opacity:.9,marginLeft:"4px"},children:["(",ue[i.id],")"]})]}),onClick:()=>f!==i.id?w(i.id):w(void 0),onDelete:f===i.id?()=>w(void 0):void 0,deleteIcon:e.jsx(ke,{}),sx:{boxShadow:"none",display:f===void 0||f===i.id?"inline-flex":"none",p:"20px 14px",fontSize:"16px"}},i.id))}),x.length>0&&e.jsxs(ho,{children:[e.jsxs("div",{children:[e.jsxs("h3",{children:[e.jsx(Te,{}),"   Selected ",x.length," task",x.length>1?"s":""]}),e.jsx("span",{translate:"no",style:{fontSize:"14px",opacity:.8},children:W.format(x.map(i=>{var a;return(a=n.tasks.find(j=>j.id===i))==null?void 0:a.name}).filter(i=>i!==void 0))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Q,{title:"Mark selected as done",children:e.jsx(U,{sx:{color:S(ie.secondary)},size:"large",onClick:re,children:e.jsx(In,{})})}),e.jsx(Q,{title:"Delete selected",children:e.jsx(U,{color:"error",size:"large",onClick:F,children:e.jsx(Me,{})})}),e.jsx(Q,{sx:{color:S(ie.secondary)},title:"Cancel",children:e.jsx(U,{size:"large",onClick:()=>v([]),children:e.jsx(ke,{})})})]})]}),b&&M.length>1&&n.tasks.length>0&&e.jsx("div",{style:{textAlign:"center",fontSize:"18px",opacity:.9,marginTop:"12px"},children:e.jsxs("b",{children:["Found ",M.length," task",M.length>1?"s":""]})}),n.tasks.length!==0?M.map(i=>e.jsx($e,{task:i,features:{enableLinks:!0,enableGlow:n.settings.enableGlow,enableSelection:!0},selection:{selectedIds:x,onSelect:p,onDeselect:a=>v(j=>j.filter(L=>L!==a))},onContextMenu:a=>{a.preventDefault(),z(a,i.id)},actions:e.jsx(Ao,{task:i,onClick:a=>z(a,i.id)}),blur:s!==i.id&&B&&!se,textHighlighter:R},i.id)):e.jsxs(ao,{children:[e.jsx("span",{children:"You don't have any tasks yet"}),e.jsx("br",{}),"Click on the ",e.jsx("span",{children:"+"})," button to add one"]}),b&&M.length===0&&n.tasks.length>0?e.jsxs(ro,{children:[e.jsx("b",{children:"No tasks found"}),e.jsx("br",{}),"Try searching with different keywords.",e.jsx("div",{style:{marginTop:"14px"},children:e.jsx(Je,{scale:.8})})]}):null,e.jsx(Mo,{open:y,task:n.tasks.find(i=>i.id===s),onClose:()=>k(!1)})]}),e.jsxs(ce,{open:I,onClose:Y,children:[e.jsx(he,{title:"Delete Task",subTitle:"Are you sure you want to delete this task?",onClose:Y,icon:e.jsx(Me,{})}),e.jsx(xe,{children:m&&e.jsx($e,{task:m,features:{enableGlow:!1}})}),e.jsxs(pe,{children:[e.jsx(_,{onClick:Y,color:"primary",children:"Cancel"}),e.jsxs(_,{onClick:me,color:"error",children:[e.jsx(ve,{}),"   Confirm Delete"]})]})]}),e.jsxs(ce,{open:V,children:[e.jsx(he,{title:"Delete selected tasks",subTitle:"Confirm to delete selected tasks",icon:e.jsx(ve,{})}),e.jsx(xe,{translate:"no",children:W.format(x.map(i=>{var a;return(a=n.tasks.find(j=>j.id===i))==null?void 0:a.name}).filter(i=>i!==void 0))}),e.jsxs(pe,{children:[e.jsx(_,{onClick:()=>J(!1),color:"primary",children:"Cancel"}),e.jsx(_,{onClick:()=>{t(i=>({...i,tasks:i.tasks.filter(a=>!x.includes(a.id))})),v([]),J(!1)},color:"error",children:"Delete"})]})]})]})},Jo=Object.freeze(Object.defineProperty({__proto__:null,TasksList:No},Symbol.toStringTag,{value:"Module"})),Mo=({open:n,task:t,onClose:s})=>{var l,B;const{user:u,setUser:g}=r.useContext(q),{settings:c}=u,[o,h]=r.useState(t),[D,b]=r.useState(null),[$,R]=r.useState([]),x=Re(),v=r.useMemo(()=>o!=null&&o.name?o.name.length>de:void 0,[o==null?void 0:o.name]),p=r.useMemo(()=>o!=null&&o.description?o.description.length>ye:void 0,[o==null?void 0:o.description]);r.useEffect(()=>{h(m=>({...m,emoji:D||void 0}))},[D]),r.useEffect(()=>{h(t),R(t==null?void 0:t.category)},[t]);const y=m=>{const{name:C,value:V}=m.target;h(J=>({...J,[C]:V}))},k=()=>{if(document.body.style.overflow="auto",o&&!v&&!p){const m=u.tasks.map(C=>C.id===o.id?{...C,name:o.name,color:o.color,emoji:o.emoji||void 0,description:o.description||void 0,deadline:o.deadline||void 0,category:o.category||void 0,lastSave:new Date}:C);g(C=>({...C,tasks:m})),s(),H(e.jsxs("div",{children:["Task ",e.jsx("b",{translate:"no",children:o.name})," updated."]}))}},I=()=>{s(),h(t),R(t==null?void 0:t.category)};return r.useEffect(()=>{h(m=>({...m,category:$||void 0}))},[$]),r.useEffect(()=>{const m=C=>{if(JSON.stringify(o)!==JSON.stringify(t)&&n){const V="You have unsaved changes. Are you sure you want to leave?";return C.returnValue=V,V}};return window.addEventListener("beforeunload",m),()=>{window.removeEventListener("beforeunload",m)}},[o,n,t]),e.jsxs(ce,{open:n,onClose:()=>{s()},slotProps:{paper:{style:{borderRadius:"24px",padding:"12px",maxWidth:"600px"}}},children:[e.jsx(he,{title:"Edit Task",subTitle:o!=null&&o.lastSave?`Last Edited: ${new Date(o.lastSave).toLocaleDateString()} • ${new Date(o.lastSave).toLocaleTimeString()}`:"Edit the details of the task.",icon:e.jsx(Ln,{}),onClose:s}),e.jsxs(xe,{children:[e.jsx(Jn,{emoji:(o==null?void 0:o.emoji)||void 0,setEmoji:b,color:o==null?void 0:o.color,name:(o==null?void 0:o.name)||"",type:"task"}),e.jsx(Se,{label:"Name",name:"name",autoComplete:"off",value:(o==null?void 0:o.name)||"",onChange:y,error:v||(o==null?void 0:o.name)==="",helperText:o!=null&&o.name?(o==null?void 0:o.name.length)===0?"Name is required":(o==null?void 0:o.name.length)>de?`Name is too long (maximum ${de} characters)`:`${(l=o==null?void 0:o.name)==null?void 0:l.length}/${de}`:"Name is required"}),e.jsx(Se,{label:"Description",name:"description",autoComplete:"off",value:(o==null?void 0:o.description)||"",onChange:y,multiline:!0,rows:4,margin:"normal",error:p,helperText:(o==null?void 0:o.description)===""||(o==null?void 0:o.description)===void 0?void 0:p?`Description is too long (maximum ${ye} characters)`:`${(B=o==null?void 0:o.description)==null?void 0:B.length}/${ye}`}),e.jsx(Se,{label:"Deadline date",name:"deadline",type:"datetime-local",value:o!=null&&o.deadline?new Date(o.deadline).toLocaleString("sv").replace(" ","T").slice(0,16):"",onChange:y,slotProps:{inputLabel:{shrink:!0},input:{startAdornment:o!=null&&o.deadline?e.jsx(ne,{position:"start",children:e.jsx(Q,{title:"Clear",children:e.jsx(U,{color:"error",onClick:()=>{h(m=>({...m,deadline:void 0}))},children:e.jsx(ke,{})})})}):void 0}},sx:{colorScheme:x.darkmode?"dark":"light"," & .MuiInputBase-root":{transition:".3s all"}}}),c.enableCategories!==void 0&&c.enableCategories&&e.jsx(Qn,{fontColor:x.darkmode?N.fontLight:N.fontDark,selectedCategories:$,onCategoryChange:m=>R(m)}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"8px"},children:e.jsx(Hn,{width:"100%",color:(o==null?void 0:o.color)||"#000000",fontColor:x.darkmode?N.fontLight:N.fontDark,onColorChange:m=>{h(C=>({...C,color:m}))}})})]}),e.jsxs(pe,{children:[e.jsx(_,{onClick:I,children:"Cancel"}),e.jsxs(_,{onClick:k,color:"primary",disabled:v||(o==null?void 0:o.name)===""||p||v||JSON.stringify(o)===JSON.stringify(t),children:[e.jsx(An,{}),"   Save"]})]})]})},Oo=({...n})=>e.jsx(Ee,{fullWidth:!0,...n}),Se=d(Oo)`
  margin: 14px 0;
  & .MuiInputBase-root {
    border-radius: 16px;
  }
`,zo=r.memo(({task:n,textHighlighter:t=c=>c,onExpandClick:s,expanded:u=!1,enableLinks:g=!0})=>{if(!n||!n.description)return null;const{description:c,color:o}=n,h=c.match(ze),$=(u||h?c:c.slice(0,Pe)).split(ze).map((R,x)=>x%2===0?t(R):e.jsx(Uo,{url:R,color:o,disabled:!g,textHighlighter:t},x));return e.jsxs("div",{children:[$," ",n.description&&n.description.length>Pe&&!h&&s&&e.jsx(io,{onClick:s,clr:n.color,children:u?"Show less":"Show more"})]})}),Po=[{regex:/(m\.)?youtu(\.be|be\.com)/,domainName:"Youtube",icon:e.jsx(Mn,{})},{regex:/(twitter\.com|x\.com)/,domainName:"X",icon:e.jsx(On,{sx:{fontSize:"18px"}})},{regex:/github\.com/,domainName:"Github",icon:e.jsx(zn,{sx:{fontSize:"20px"}})},{regex:/reddit\.com/,domainName:"Reddit",icon:e.jsx(Pn,{})},{regex:/linkedin\.com/,domainName:"LinkedIn",icon:e.jsx(Un,{})},{regex:/localhost/,icon:e.jsx(Bn,{})},{regex:/.*/,icon:e.jsx(Ie,{})}],Uo=r.memo(({url:n,color:t,disabled:s=!1,textHighlighter:u=g=>g})=>{let g="",c="",o=s?e.jsx(Nn,{sx:{fontSize:"24px"}}):e.jsx(Ie,{});try{if(g=new URL(n).hostname.replace("www.",""),!s){const b=Po.find(({regex:$})=>g.match($));b&&(o=b.icon,c=b.domainName||g)}}catch(D){console.error(`Invalid URL: ${n}`,D)}const h=e.jsx(jo,{href:s?void 0:n,rel:s?void 0:"noreferrer",clr:t,"data-disabled":s,disabled:s,children:e.jsxs("div",{children:[o," ",u(c||g)]})});return e.jsx(Q,{title:n,children:h})}),$e=r.memo(({task:n,features:t={},selection:s,onContextMenu:u,actions:g,blur:c,textHighlighter:o=h=>h})=>{const{user:h}=r.useContext(q),{settings:D}=h,{enableLinks:b=!0,enableGlow:$=D.enableGlow,enableSelection:R=!1}=t,{selectedIds:x=[],onSelect:v,onDeselect:p}=s||{},y=x.includes(n.id);return n?e.jsxs(qn,{id:n.id,onContextMenu:u,backgroundColor:n.color,glow:$,done:n.done,blur:c,"data-testid":"task-container",children:[R&&x.length>0&&e.jsx(uo,{clr:S(n.color),checked:y,icon:e.jsx(fo,{}),checkedIcon:e.jsx(mo,{}),onChange:()=>{y?p==null||p(n.id):v==null||v(n.id)}}),(n.emoji||n.done)&&e.jsx(Kn,{clr:S(n.color),children:n.done?e.jsx(Vn,{fontSize:"large"}):e.jsx(Ue,{size:oe.os==="iOS"||oe.os==="macOS"?50:38,unified:n.emoji||"",emojiStyle:h.emojisStyle,lazyLoad:!0})}),e.jsxs(eo,{translate:"no",children:[n.pinned&&e.jsxs(po,{translate:"yes",children:[e.jsx(Fe,{fontSize:"small"}),"   Pinned"]}),e.jsxs(no,{children:[e.jsx(oo,{done:n.done,children:o(n.name)}),e.jsx(Q,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(n.date)),children:e.jsx(to,{children:Wn(new Date(n.date))})})]}),e.jsx(so,{done:n.done,children:e.jsx(zo,{task:n,textHighlighter:o,enableLinks:b})}),n.deadline&&e.jsx(Q,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(n.deadline)),placement:"bottom-start",children:e.jsxs(co,{done:n.done,translate:"yes",children:[e.jsx(Xe,{fontSize:"small",animate:new Date>new Date(n.deadline)&&!n.done,sx:{color:`${S(n.color)} !important`}})," "," ",new Date(n.deadline).toLocaleDateString()," "," • ",new Date(n.deadline).toLocaleTimeString(),!n.done&&e.jsxs(e.Fragment,{children:[" • ",Qe(new Date(n.deadline))]})]})}),n.sharedBy&&e.jsxs(xo,{translate:"yes",children:[e.jsx(Ie,{})," Shared by"," ",e.jsx("span",{translate:n.sharedBy==="User"?"yes":"no",children:n.sharedBy})]}),D.enableCategories&&n.category&&e.jsx(Zn,{children:n.category.map(k=>e.jsx(He,{category:k,borderclr:S(n.color),sx:{...t.enableGlow===!1?{boxShadow:"none"}:{}}},k.id))})]}),g]}):null});export{_o as H,$e as T,We as a,Yn as b,Jo as c,Xn as u};
