import{r,j as e,Q as Ke,d as Ze,u as en,J as nn,V as fe,M as on,D as tn}from"./vendor-B-2yl_ca.js";import{a as Be,E as sn}from"./emoji-D7qZVVSC.js";import{n as c,B as ee,aP as an,c as Ue,X as Te,aQ as rn,T as Ee,g as B,aR as ln,ad as cn,x as de,aS as ze,z as pe,ae as dn,aT as ne,aU as pn,aV as ve,a as Me,aW as xn,aX as un,a3 as mn,ag as hn,E as xe,aY as fn,aZ as gn,M as jn,u as Re,a_ as Ve,a$ as bn,b0 as Fe,b1 as yn,aj as Cn,D as ge,V as Sn,b2 as vn,ah as we,b3 as wn,b4 as Dn,b5 as kn,b6 as $n,b7 as Tn,b8 as En,b9 as Rn,ba as De,f as Q,bb as Ln,bc as Ae,bd as In,be as zn,bf as Mn,bg as Le,bh as An,bi as On,o as Nn,bj as Pn,bk as Bn,bl as Un,aJ as Vn}from"./ui-lib-C41lPcrf.js";import{U as Y,e as Fn,g as S,f as Ie,C as M,i as ke,s as oe,a as Ge,r as je,b as ue,T as Gn,c as be,d as _n,D as _,h as q,u as _e,j as Oe,k as Je,l as Qe,m as qe,n as ce,o as ye,p as Jn,q as Qn,t as qn,v as Ne,w as Pe,x as Hn}from"./settings-xmdSeWFy.js";const He=r.createContext({}),Wn=()=>{const{user:n}=r.useContext(Y),{tasks:t}=n;r.useEffect(()=>{const s=m=>{(m.key==="s"||m.key==="S")&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),window.confirm("Do you want to save all tasks to JSON?")&&Fn(t))};return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[t])};function Xn(n,t,s="localStorage"){const m=window[s],[g,d]=r.useState(()=>{const o=m.getItem(t);return o!=null&&o!=="undefined"?JSON.parse(o):n});return r.useEffect(()=>{m.setItem(t,JSON.stringify(g))},[t,g,m]),r.useEffect(()=>{const o=u=>{u.key===t&&u.newValue!==null&&u.key!==""&&d(JSON.parse(u.newValue))};return window.addEventListener("storage",o),()=>{window.removeEventListener("storage",o)}},[t]),[g,d]}const Yn=c.div`
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

  animation: ${Ie} 0.5s ease-in;

  /* If the theme color and task color are the same, it changes the selection color to be different. */
  *::selection {
    background-color: ${({theme:n,backgroundColor:t})=>n.primary===t?"#ffffff":n.primary} !important;
    color: ${({theme:n,backgroundColor:t})=>n.primary===t?"#000000":S(n.primary)} !important;
  }

  @media (max-width: 768px) {
    padding: 14px 14px 14px 18px;
    margin-top: 10px;
  }
`,Kn=c.span`
  text-decoration: none;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({clr:n})=>n===M.fontDark?"#4b4b4b6e":"#dddddd9d"};
  font-size: 32px;
  padding: 12px;
  width: 42px;
  height: 42px;
  border-radius: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`,Zn=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 6px;
  justify-content: left;
  align-items: center;
`,eo=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,no=c.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,oo=c.h3`
  font-size: 20px;
  margin: 0;
  text-decoration: ${({done:n})=>n?"line-through":"none"};
  word-break: break-word;
  white-space: pre-line;
`,to=c.p`
  margin: 0 6px;
  text-align: right;
  margin-left: auto;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
  backdrop-filter: none !important;
`,so=c.div`
  margin: 0;
  font-size: 18px;
  text-decoration: ${({done:n})=>n?"line-through":"none"};
  word-break: break-word;
`,ao=c(ee)`
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
`,io=c.div`
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
`,ro=c.div`
  text-align: center;
  font-size: 20px;
  opacity: 0.9;
  margin-top: 18px;
  animation: ${Ie} 0.5s ease-in;
`,lo=c.main`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
  gap: 6px;
`,co=c.span`
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
`,po=c.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`,xo=c.div`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.8;
  font-size: 16px;
`,uo=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  background: ${({theme:n})=>ke(n.secondary)?"#090b2287":"#ffffff5c"};
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
`,mo=c(an)`
  margin-left: -8px;
  margin-right: 4px;
  color: ${({clr:n})=>n} !important;
  animation: ${Ie} 0.3s ease-in;
  &.Mui-checked {
    color: ${({clr:n})=>n} !important;
  }
`,We=Ue`
  animation: ${Ge} 0.2s ease-in;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`,ho=c(Te)`
  ${We}
`,fo=c(rn)`
  ${We}
`,go=c.div`
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
`,_o=c.span`
  background-color: #6829ef;
  color: #fff;
  padding: 2px 0;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  margin: 0;
  font-weight: bold;
  border: 1px solid #ffffff5f;
  transition: 0.3s all;
`,jo=c(ee)`
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
`,bo=c(Ee)`
  margin: 8px 0 0 0;
  border-radius: 16px;
  transition: 0.3s all;
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${({theme:n})=>ke(n.secondary)?"#44479cb7":n.primary} !important;
  }
  & .MuiOutlinedInput-root {
    padding: 2px 16px;
    border-radius: 16px;
    transition: 0.3s all;
    background: ${({theme:n})=>ke(n.secondary)?"#090b2258":"#ffffff3e"};
    color: ${({theme:n})=>S(n.secondary)};
    & .MuiSvgIcon-root {
      color: ${({theme:n})=>S(n.secondary)};
    }
  }
`,yo=c(B)`
  animation: ${Ge} 0.3s ease;
  transition: 0.3s all;
`,Ce="2s 0.5s ease-in-out infinite",Xe=c(ln)`
  color: red;
  ${({animate:n})=>n&&Ue`
      -webkit-animation: ${je} ${Ce};
      -moz-animation: ${je} ${Ce};
      animation: ${je} ${Ce};
    `}
`,Co=({open:n,onClose:t,selectedTask:s})=>{const{user:m}=r.useContext(Y),{settings:g,name:d}=m,[o,u]=r.useState(0),k=[{label:"Link",icon:e.jsx(ve,{})},{label:"QR Code",icon:e.jsx(fn,{})},...oe.isAppleDevice?[{label:"Calendar",icon:e.jsx(gn,{})}]:[]],b=(x,y)=>{if(x){const D={...x,sharedBy:void 0,id:void 0,category:g.enableCategories?x.category:void 0},L=Ze.compressToEncodedURIComponent(JSON.stringify(D)),l=encodeURIComponent(y);return`${window.location.href}share?task=${L}&userName=${l}`}return""},$=async()=>{const x=b(s,d||"User");try{await navigator.clipboard.writeText(x),q("Link copiado para a área de transferência.")}catch(y){console.error("Erro ao copiar link para a área de transferência:",y),q("Erro ao copiar link para a área de transferência",{type:"error"})}},R=async()=>{const x=b(s,d||"User");if(navigator.share)try{await navigator.share({title:"Compartilhar tarefa",text:`Confira esta tarefa: ${s.name}`,url:x})}catch(y){console.error("Link de compartilhamento com erro:",y),q("Link de compartilhamento com erro",{type:"error"})}},p=x=>x.toISOString().replace(/[-:]/g,"").split(".")[0]+"Z",w=()=>{if(!s)return;const x=p(s.deadline?new Date(s.deadline):new Date);let{description:y=""}=s;const D=y.match(/(https?:\/\/[^\s]+)/),L=(D==null?void 0:D[0])||"";y=y.replace((D==null?void 0:D[0])||"","").trim();const l=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT",`SUMMARY:${s.name}`,`DESCRIPTION:${y}`,`DTSTART:${x}`,`DTEND:${x}`,L?`URL:${L}`:"","END:VEVENT","END:VCALENDAR"].filter(Boolean).join(`
`),U=new Blob([l],{type:"text/calendar"}),h=URL.createObjectURL(U),C=document.createElement("a");C.href=h,C.download="event.ics",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(h)};return e.jsxs(de,{open:n,onClose:t,slotProps:{paper:{style:{borderRadius:"28px",padding:"10px",width:"560px"}}},children:[e.jsx(ue,{title:"Compartilhar Tarefa",subTitle:"Compartilhe sua tarefa com outras pessoas.",onClose:t,icon:e.jsx(ze,{})}),e.jsxs(pe,{children:[e.jsx($e,{task:s,features:{enableGlow:!1}}),e.jsx(dn,{value:o,onChange:(x,y)=>u(y),sx:{m:"8px 0"},children:k.map(x=>e.jsx(Do,{label:x.label,icon:x.icon,disabled:x.disabled,totaltabs:k.length},x.label))}),e.jsxs(Gn,{name:"share",value:o,children:[e.jsx(be,{index:0,children:e.jsx(ko,{value:b(s,d||"User"),fullWidth:!0,variant:"outlined",label:"Shareable Link",slotProps:{input:{readOnly:!0,startAdornment:e.jsx(ne,{position:"start",children:e.jsx(ve,{sx:{ml:"8px"}})}),endAdornment:e.jsx(ne,{position:"end",children:e.jsxs(ee,{onClick:$,sx:{p:"12px",borderRadius:"14px",mr:"4px"},children:[e.jsx(pn,{}),"   Copiar"]})})}}})}),e.jsxs(be,{index:1,children:[e.jsx(vo,{children:e.jsx(Ke,{id:"QRCodeShare",value:b(s,d||"User"),size:400})}),e.jsx(Me,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(So,{variant:"outlined",onClick:()=>_n(s.name||""),children:[e.jsx(xn,{}),"   Baixar QR Code"]})})]}),oe.isAppleDevice&&e.jsx(be,{index:2,children:e.jsx(Me,{sx:{mt:"22px",display:"flex",justigyContent:"center",flexDirection:"column",gap:1},children:e.jsxs(ee,{variant:"contained",color:"inherit",onClick:w,children:[e.jsx(un,{}),"   Adicionar ao calendário da Apple"]})})})]}),o!==2&&e.jsxs(mn,{severity:"info",sx:{mt:"20px"},children:[e.jsx(hn,{children:"Compartilhe sua tarefa"}),"Copie o link para compartilhar manualmente ou use o botão de compartilhamento para enviá-lo por meio de outros aplicativos."]})]}),e.jsxs(xe,{children:[e.jsx(_,{onClick:t,children:"Fechar"}),e.jsxs(_,{onClick:R,children:[e.jsx(ze,{sx:{mb:"4px"}}),"   Compartilhar"]})]})]})},So=c(ee)`
  padding: 12px 24px;
  border-radius: 14px;
  margin-top: 16px;
  @media (max-width: 520px) {
    margin-top: -2px;
  }
`,vo=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 22px;
`,wo=({...n})=>e.jsx(cn,{iconPosition:"start",...n}),Do=c(wo)`
  border-radius: 12px 12px 0 0;
  flex: 1 1 calc(100% / ${n=>n.totaltabs});
  max-width: calc(100% / ${n=>n.totaltabs});
`,ko=c(Ee)`
  margin-top: 22px;
  .MuiOutlinedInput-root {
    border-radius: 14px;
    padding: 2px;
    transition: 0.3s all;
  }
`,$o=()=>{const{user:n,setUser:t}=r.useContext(Y),{tasks:s,settings:m,emojisStyle:g}=n,{selectedTaskId:d,anchorEl:o,anchorPosition:u,multipleSelectedTasks:k,handleSelectTask:b,setEditModalOpen:$,handleDeleteTask:R,handleCloseMoreMenu:p}=r.useContext(He),[w,x]=r.useState(!1),y=_e(),D=en(),L=Re(),l=r.useMemo(()=>s.find(T=>T.id===d)||{},[d,s]),U=()=>{const T=l==null?void 0:l.id.toString().replace(".","");D(`/task/${T}`)},h=()=>{if(d){p();const T=s.map(v=>v.id===d?{...v,done:!v.done}:v);t(v=>({...v,tasks:T})),T.every(v=>v.done)&&q(e.jsxs("div",{children:[e.jsx("b",{children:"Todas as tarefas realizadas"}),e.jsx("br",{}),e.jsx("span",{children:"Você concluiu todas as tarefas. Muito bem!"})]}),{icon:e.jsx("div",{style:{margin:"-6px 4px -6px -6px"},children:e.jsx(Je,{variant:"success",scale:.18})})})}},C=()=>{if(d){p();const T=s.map(f=>f.id===d?{...f,pinned:!f.pinned}:f);t(f=>({...f,tasks:T}))}},V=()=>{if(p(),d&&l){const T={...l,id:Oe(),date:new Date,lastSave:void 0},f=[...s,T];t(v=>({...v,tasks:f}))}},J=()=>{var re;const f=(window.speechSynthesis.getVoices()??[]).find(F=>F.name===m.voice.split("::")[0]),v=m.voiceVolume,me=l.name?l.name+". ":"",te=l!=null&&l.description?((re=l==null?void 0:l.description)==null?void 0:re.replace(/((?:https?):\/\/[^\s/$.?#].[^\s]*)/gi,""))+". ":"",se=new Intl.DateTimeFormat(f?f.lang:navigator.language,{dateStyle:"full",timeStyle:"short"}).format(new Date((l==null?void 0:l.date)||"")),ae=l!=null&&l.deadline?`. Prazo da tarefa: ${Qe(new Date(l.deadline),f?f.lang:navigator.language)}`:"",H=`${me}${te}Data: ${se}${ae}`,N=new SpeechSynthesisUtterance(H);f&&(N.voice=f),v&&(N.volume=v),p();const ie=()=>{window.speechSynthesis.pause()},A=()=>{window.speechSynthesis.resume()},he=()=>{window.speechSynthesis.cancel(),fe.dismiss(W),p()},W=fe(()=>{var le;const[F,K]=r.useState(!0);return e.jsxs(Ro,{children:[e.jsxs(Lo,{translate:"yes",children:[e.jsx(Dn,{})," Leia em voz alta: ",e.jsx("span",{translate:"no",children:l==null?void 0:l.name})]}),e.jsxs("span",{translate:"yes",style:{marginTop:"8px",fontSize:"16px"},children:["Voz: ",e.jsx("span",{translate:"no",children:((le=N.voice)==null?void 0:le.name)||"Default"})]}),e.jsx("div",{translate:"no",children:e.jsx(on,{delay:.6,play:F,children:e.jsxs("p",{style:{margin:"6px 0"},children:[N.text,"  "]})})}),e.jsxs(Io,{children:[F?e.jsx(B,{onClick:()=>{ie(),K(!F)},children:e.jsx(kn,{fontSize:"large"})}):e.jsx(B,{onClick:()=>{A(),K(!F)},children:e.jsx($n,{fontSize:"large"})}),e.jsx(B,{onClick:he,children:e.jsx(Tn,{fontSize:"large"})})]})]})},{duration:1/0,style:{border:`1px solid ${L.darkmode?"#1b1d4eb7":"#ededf7b0"} `,WebkitBackdropFilter:`blur(${L.darkmode?"10":"14"}px)`,backdropFilter:`blur(${L.darkmode?"10":"14"}px)`}});N.onend=()=>{p(),fe.dismiss(W)},v>0&&window.speechSynthesis.speak(N)},O=e.jsxs("div",{children:[e.jsxs(P,{onClick:h,children:[l.done?e.jsx(Ve,{}):e.jsx(bn,{}),"  ",l.done?"Marcar como não concluído":"Marcar como concluído"]}),e.jsxs(P,{onClick:C,children:[e.jsx(Fe,{sx:{textDecoration:"line-through"}}),"  ",l.pinned?"Desafixar":"Fixar"]}),k.length===0&&e.jsxs(P,{onClick:()=>b(d||Oe()),children:[e.jsx(Te,{}),"   Selecionar"]}),e.jsxs(P,{onClick:U,children:[e.jsx(yn,{}),"   Detalhes da tarefa"]}),m.enableReadAloud&&"speechSynthesis"in window&&e.jsxs(P,{onClick:J,disabled:window.speechSynthesis&&(window.speechSynthesis.speaking||window.speechSynthesis.pending),children:[e.jsx(Cn,{}),"   Leia em voz alta"]}),e.jsxs(P,{onClick:()=>{x(!0),p()},children:[e.jsx(ve,{}),"   Compartilhar"]}),e.jsx(ge,{}),e.jsxs(P,{onClick:()=>{$(!0),p()},children:[e.jsx(Sn,{}),"   Editar"]}),e.jsxs(P,{onClick:V,children:[e.jsx(vn,{}),"   Duplicar"]}),e.jsx(ge,{}),e.jsxs(P,{clr:M.red,onClick:()=>{R(),p()},children:[e.jsx(we,{}),"   Apagar"]})]});return e.jsxs(e.Fragment,{children:[y?e.jsx(nn,{open:!!o,onDismiss:p,snapPoints:({minHeight:T,maxHeight:f})=>[T,f],expandOnContentDrag:!0,header:e.jsxs("div",{style:{cursor:"ns-resize"},children:[e.jsxs(To,{translate:"no",children:[e.jsx(Be,{emojiStyle:g,size:32,unified:l.emoji||""})," ",g===sn.NATIVE&&"  ",l.name]}),e.jsx(ge,{sx:{mt:"20px",mb:"-20px"}})]}),children:e.jsx(Eo,{children:O})}):e.jsx(wn,{id:"task-menu",anchorEl:o,anchorPosition:u||void 0,anchorReference:u?"anchorPosition":void 0,open:!!o,onClose:p,sx:{"& .MuiPaper-root":{borderRadius:"18px",minWidth:"200px",boxShadow:"none",padding:"6px 4px"}},MenuListProps:{"aria-labelledby":"more-button"},children:O}),e.jsx(Co,{open:w,onClose:()=>x(!1),selectedTask:l})]})},To=c.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: ${({theme:n})=>n.darkmode?M.fontLight:M.fontDark};
  margin: 10px;
  font-size: 20px;
`,Eo=c.div`
  color: ${({theme:n})=>n.darkmode?M.fontLight:M.fontDark};
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
`,P=c(jn)`
  margin: 0 6px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: none;
  gap: 2px;
  color: ${({clr:n})=>n||"unset"};
`,Ro=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Lo=c.div`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  gap: 6px;
`,Io=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  gap: 8px;
`,zo=r.memo(({task:n,onClick:t})=>e.jsx(B,{"aria-label":"Task Menu","aria-controls":"task-menu","aria-haspopup":"true",onClick:t,sx:{color:S(n.color)},children:e.jsx(En,{})})),Mo=()=>{const{user:n,setUser:t}=r.useContext(Y),{selectedTaskId:s,setSelectedTaskId:m,anchorEl:g,setAnchorEl:d,setAnchorPosition:o,expandedTasks:u,toggleShowMore:k,search:b,setSearch:$,highlightMatchingText:R,multipleSelectedTasks:p,setMultipleSelectedTasks:w,handleSelectTask:x,editModalOpen:y,setEditModalOpen:D,deleteDialogOpen:L,setDeleteDialogOpen:l}=r.useContext(He),U=!!g,[h,C]=r.useState(null),[V,J]=r.useState(!1),[O,T]=r.useState(void 0),[f,v]=Xn(void 0,"selectedCategory","sessionStorage"),[me,te]=r.useState({}),se=_e(),ae=Re();Wn();const H=r.useMemo(()=>new Intl.ListFormat("en-US",{style:"long",type:"conjunction"}),[]),N=(a,i)=>{d(a.currentTarget),m(i),a.target.tagName!=="BUTTON"?o({top:a.clientY,left:a.clientX}):o(null),!se&&!u.has(i)&&k(i)},ie=r.useCallback(a=>{var G;let i=a.filter(E=>E.pinned),j=a.filter(E=>!E.pinned);if(f!==void 0){const E=Z=>{var X;return((X=Z.category)==null?void 0:X.some(Ye=>Ye.id===f))??!1};j=j.filter(E),i=i.filter(E)}const I=b.toLowerCase(),z=E=>E.name.toLowerCase().includes(I)||E.description&&E.description.toLowerCase().includes(I);if(j=j.filter(z),i=i.filter(z),(G=n.settings)!=null&&G.doneToBottom){const E=j.filter(X=>X.done),Z=j.filter(X=>!X.done);return[...i,...Z,...E]}return[...i,...j]},[b,f,n.settings]),A=r.useMemo(()=>ie(n.tasks),[n.tasks,ie]),he=()=>{if(s){const a=n.tasks.filter(i=>i.id!==s);t(i=>({...i,tasks:a})),l(!1),q(e.jsxs("div",{children:["Deleted Task - ",e.jsx("b",{translate:"no",children:h==null?void 0:h.name})]})),C(null)}};r.useEffect(()=>{if(s&&L){const a=n.tasks.find(i=>i.id===s);C(a||null)}},[s,L,n.tasks]);const W=()=>{l(!1)},re=()=>{t(a=>({...a,tasks:a.tasks.map(i=>p.includes(i.id)?{...i,done:!0}:i)})),w([])},F=()=>J(!0);r.useEffect(()=>{const a=A,i=[];a.forEach(I=>{I.category&&I.category.forEach(z=>{i.some(G=>G.id===z.id)||i.push(z)})});const j={};i.forEach(I=>{const z=a.filter(G=>{var E;return(E=G.category)==null?void 0:E.some(Z=>Z.id===I.id)});j[I.id]=z.length}),i.sort((I,z)=>{const G=j[I.id]||0;return(j[z.id]||0)-G}),T(i),te(j)},[n.tasks,b,T,te,A]);const{toasts:K}=tn(),le=r.useCallback(a=>{if(location.pathname==="/share")return;const i=a.filter(j=>j.deadline&&new Date>new Date(j.deadline)&&!j.done);if(i.length>0){if(K.some(z=>z.id==="overdue-tasks"&&z.visible))return;const I=i.map(z=>z.name);q(e.jsxs("div",{translate:"no",style:{wordBreak:"break-word"},children:[e.jsxs("b",{translate:"yes",children:["Tarefa atrasada",i.length>1&&"s",": "]}),H.format(I)]}),{id:"overdue-tasks",type:"error",disableVibrate:!0,duration:3400,icon:e.jsx(Xe,{animate:!0,sx:{color:M.red}}),style:{borderColor:M.red,boxShadow:n.settings.enableGlow?`0 0 18px -8px ${M.red}`:"none"}})}},[H,n.settings,K]);return r.useEffect(()=>{le(n.tasks)},[]),e.jsxs(e.Fragment,{children:[e.jsx($o,{}),e.jsxs(lo,{children:[n.tasks.length>0&&e.jsx(bo,{focused:!0,color:"primary",placeholder:"Pesquisar por tarefa...",autoComplete:"off",value:b,onChange:a=>{$(a.target.value)},slotProps:{input:{startAdornment:e.jsx(ne,{position:"start",children:e.jsx(Rn,{sx:{color:"white"}})}),endAdornment:b?e.jsx(ne,{position:"end",children:e.jsx(yo,{color:A.length===0&&n.tasks.length>0?"error":"default",onClick:()=>$(""),children:e.jsx(Ve,{sx:{color:A.length===0&&n.tasks.length>0?`${M.red} !important`:"white",transition:".3s all"}})})}):void 0}}}),O!==void 0&&(O==null?void 0:O.length)>0&&n.settings.enableCategories&&e.jsx(go,{children:O==null?void 0:O.map(a=>e.jsx(qe,{category:a,emojiSizes:[24,20],list:"true",label:e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:a.name}),e.jsxs("span",{style:{fontSize:"14px",opacity:.9,marginLeft:"4px"},children:["(",me[a.id],")"]})]}),onClick:()=>f!==a.id?v(a.id):v(void 0),onDelete:f===a.id?()=>v(void 0):void 0,deleteIcon:e.jsx(De,{}),sx:{boxShadow:"none",display:f===void 0||f===a.id?"inline-flex":"none",p:"20px 14px",fontSize:"16px"}},a.id))}),p.length>0&&e.jsxs(uo,{children:[e.jsxs("div",{children:[e.jsxs("h3",{children:[e.jsx(Te,{}),"   Selecionado ",p.length," tarefa",p.length>1?"s":""]}),e.jsx("span",{translate:"no",style:{fontSize:"14px",opacity:.8},children:H.format(p.map(a=>{var i;return(i=n.tasks.find(j=>j.id===a))==null?void 0:i.name}).filter(a=>a!==void 0))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(Q,{title:"Marcar selecionado como concluído",children:e.jsx(B,{sx:{color:S(ae.secondary)},size:"large",onClick:re,children:e.jsx(Ln,{})})}),e.jsx(Q,{title:"Excluir selecionado",children:e.jsx(B,{color:"error",size:"large",onClick:F,children:e.jsx(Ae,{})})}),e.jsx(Q,{sx:{color:S(ae.secondary)},title:"Cancelar",children:e.jsx(B,{size:"large",onClick:()=>w([]),children:e.jsx(De,{})})})]})]}),b&&A.length>1&&n.tasks.length>0&&e.jsx("div",{style:{textAlign:"center",fontSize:"18px",opacity:.9,marginTop:"12px"},children:e.jsxs("b",{children:["Encontrado ",A.length," tarefa",A.length>1?"s":""]})}),n.tasks.length!==0?A.map(a=>e.jsx($e,{task:a,features:{enableLinks:!0,enableGlow:n.settings.enableGlow,enableSelection:!0},selection:{selectedIds:p,onSelect:x,onDeselect:i=>w(j=>j.filter(I=>I!==i))},onContextMenu:i=>{i.preventDefault(),N(i,a.id)},actions:e.jsx(zo,{task:a,onClick:i=>N(i,a.id)}),blur:s!==a.id&&U&&!se,textHighlighter:R},a.id)):e.jsxs(io,{children:[e.jsx("span",{children:"Você ainda não tem nenhuma tarefa"}),e.jsx("br",{}),"Clique no ícone ",e.jsx("span",{children:"+"})," para adicionar uma"]}),b&&A.length===0&&n.tasks.length>0?e.jsxs(ro,{children:[e.jsx("b",{children:"Nenhuma tarefa encontrada"}),e.jsx("br",{}),"Tente pesquisar com palavras-chave diferentes.",e.jsx("div",{style:{marginTop:"14px"},children:e.jsx(Je,{scale:.8})})]}):null,e.jsx(Ao,{open:y,task:n.tasks.find(a=>a.id===s),onClose:()=>D(!1)})]}),e.jsxs(de,{open:L,onClose:W,children:[e.jsx(ue,{title:"Excluir tarefa",subTitle:"Tem certeza de que deseja excluir esta tarefa?",onClose:W,icon:e.jsx(Ae,{})}),e.jsx(pe,{children:h&&e.jsx($e,{task:h,features:{enableGlow:!1}})}),e.jsxs(xe,{children:[e.jsx(_,{onClick:W,color:"primary",children:"Cancelar"}),e.jsxs(_,{onClick:he,color:"error",children:[e.jsx(we,{}),"   Confirmar exclusão"]})]})]}),e.jsxs(de,{open:V,children:[e.jsx(ue,{title:"Excluir tarefas selecionadas",subTitle:"Confirme para excluir as tarefas selecionadas",icon:e.jsx(we,{})}),e.jsx(pe,{translate:"no",children:H.format(p.map(a=>{var i;return(i=n.tasks.find(j=>j.id===a))==null?void 0:i.name}).filter(a=>a!==void 0))}),e.jsxs(xe,{children:[e.jsx(_,{onClick:()=>J(!1),color:"primary",children:"Cancelar"}),e.jsx(_,{onClick:()=>{t(a=>({...a,tasks:a.tasks.filter(i=>!p.includes(i.id))})),w([]),J(!1)},color:"error",children:"Excluir"})]})]})]})},Jo=Object.freeze(Object.defineProperty({__proto__:null,TasksList:Mo},Symbol.toStringTag,{value:"Module"})),Ao=({open:n,task:t,onClose:s})=>{var l,U;const{user:m,setUser:g}=r.useContext(Y),{settings:d}=m,[o,u]=r.useState(t),[k,b]=r.useState(null),[$,R]=r.useState([]),p=Re(),w=r.useMemo(()=>o!=null&&o.name?o.name.length>ce:void 0,[o==null?void 0:o.name]),x=r.useMemo(()=>o!=null&&o.description?o.description.length>ye:void 0,[o==null?void 0:o.description]);r.useEffect(()=>{u(h=>({...h,emoji:k||void 0}))},[k]),r.useEffect(()=>{u(t),R(t==null?void 0:t.category)},[t]);const y=h=>{const{name:C,value:V}=h.target;u(J=>({...J,[C]:V}))},D=()=>{if(document.body.style.overflow="auto",o&&!w&&!x){const h=m.tasks.map(C=>C.id===o.id?{...C,name:o.name,color:o.color,emoji:o.emoji||void 0,description:o.description||void 0,deadline:o.deadline||void 0,category:o.category||void 0,lastSave:new Date}:C);g(C=>({...C,tasks:h})),s(),q(e.jsxs("div",{children:["Tarefa ",e.jsx("b",{translate:"no",children:o.name})," atualizada."]}))}},L=()=>{s(),u(t),R(t==null?void 0:t.category)};return r.useEffect(()=>{u(h=>({...h,category:$||void 0}))},[$]),r.useEffect(()=>{const h=C=>{if(JSON.stringify(o)!==JSON.stringify(t)&&n){const V="Você tem alterações não salvas. Tem certeza de que quer sair?";return C.returnValue=V,V}};return window.addEventListener("beforeunload",h),()=>{window.removeEventListener("beforeunload",h)}},[o,n,t]),e.jsxs(de,{open:n,onClose:()=>{s()},slotProps:{paper:{style:{borderRadius:"24px",padding:"12px",maxWidth:"600px"}}},children:[e.jsx(ue,{title:"Editar Tarefa",subTitle:o!=null&&o.lastSave?`Última edição: ${new Date(o.lastSave).toLocaleDateString()} • ${new Date(o.lastSave).toLocaleTimeString()}`:"Edite os detalhes da tarefa.",icon:e.jsx(In,{}),onClose:s}),e.jsxs(pe,{children:[e.jsx(Jn,{emoji:(o==null?void 0:o.emoji)||void 0,setEmoji:b,color:o==null?void 0:o.color,name:(o==null?void 0:o.name)||"",type:"task"}),e.jsx(Se,{label:"Name",name:"name",autoComplete:"off",value:(o==null?void 0:o.name)||"",onChange:y,error:w||(o==null?void 0:o.name)==="",helperText:o!=null&&o.name?(o==null?void 0:o.name.length)===0?"O nome é obrigatório":(o==null?void 0:o.name.length)>ce?`O nome é muito longo (máximo ${ce} caracteres)`:`${(l=o==null?void 0:o.name)==null?void 0:l.length}/${ce}`:"O nome é obrigatório"}),e.jsx(Se,{label:"Descrição",name:"description",autoComplete:"off",value:(o==null?void 0:o.description)||"",onChange:y,multiline:!0,rows:4,margin:"normal",error:x,helperText:(o==null?void 0:o.description)===""||(o==null?void 0:o.description)===void 0?void 0:x?`A descrição é muito longa (máximo ${ye} caracteres)`:`${(U=o==null?void 0:o.description)==null?void 0:U.length}/${ye}`}),e.jsx(Se,{label:"Deadline date",name:"deadline",type:"datetime-local",value:o!=null&&o.deadline?new Date(o.deadline).toLocaleString("sv").replace(" ","T").slice(0,16):"",onChange:y,slotProps:{inputLabel:{shrink:!0},input:{startAdornment:o!=null&&o.deadline?e.jsx(ne,{position:"start",children:e.jsx(Q,{title:"Clear",children:e.jsx(B,{color:"error",onClick:()=>{u(h=>({...h,deadline:void 0}))},children:e.jsx(De,{})})})}):void 0}},sx:{colorScheme:p.darkmode?"dark":"light"," & .MuiInputBase-root":{transition:".3s all"}}}),d.enableCategories!==void 0&&d.enableCategories&&e.jsx(Qn,{fontColor:p.darkmode?M.fontLight:M.fontDark,selectedCategories:$,onCategoryChange:h=>R(h)}),e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"8px"},children:e.jsx(qn,{width:"100%",color:(o==null?void 0:o.color)||"#000000",fontColor:p.darkmode?M.fontLight:M.fontDark,onColorChange:h=>{u(C=>({...C,color:h}))}})})]}),e.jsxs(xe,{children:[e.jsx(_,{onClick:L,children:"Cancelar"}),e.jsxs(_,{onClick:D,color:"primary",disabled:w||(o==null?void 0:o.name)===""||x||w||JSON.stringify(o)===JSON.stringify(t),children:[e.jsx(zn,{}),"   Salvar"]})]})]})},Oo=({...n})=>e.jsx(Ee,{fullWidth:!0,...n}),Se=c(Oo)`
  margin: 14px 0;
  & .MuiInputBase-root {
    border-radius: 16px;
  }
`,No=r.memo(({task:n,textHighlighter:t=d=>d,onExpandClick:s,expanded:m=!1,enableLinks:g=!0})=>{if(!n||!n.description)return null;const{description:d,color:o}=n,u=d.match(Ne),$=(m||u?d:d.slice(0,Pe)).split(Ne).map((R,p)=>p%2===0?t(R):e.jsx(Bo,{url:R,color:o,disabled:!g,textHighlighter:t},p));return e.jsxs("div",{children:[$," ",n.description&&n.description.length>Pe&&!u&&s&&e.jsx(ao,{onClick:s,clr:n.color,children:m?"Show less":"Show more"})]})}),Po=[{regex:/(m\.)?youtu(\.be|be\.com)/,domainName:"Youtube",icon:e.jsx(An,{})},{regex:/(twitter\.com|x\.com)/,domainName:"X",icon:e.jsx(On,{sx:{fontSize:"18px"}})},{regex:/github\.com/,domainName:"Github",icon:e.jsx(Nn,{sx:{fontSize:"20px"}})},{regex:/reddit\.com/,domainName:"Reddit",icon:e.jsx(Pn,{})},{regex:/linkedin\.com/,domainName:"LinkedIn",icon:e.jsx(Bn,{})},{regex:/localhost/,icon:e.jsx(Un,{})},{regex:/.*/,icon:e.jsx(Le,{})}],Bo=r.memo(({url:n,color:t,disabled:s=!1,textHighlighter:m=g=>g})=>{let g="",d="",o=s?e.jsx(Mn,{sx:{fontSize:"24px"}}):e.jsx(Le,{});try{if(g=new URL(n).hostname.replace("www.",""),!s){const b=Po.find(({regex:$})=>g.match($));b&&(o=b.icon,d=b.domainName||g)}}catch(k){console.error(`Invalid URL: ${n}`,k)}const u=e.jsx(jo,{href:s?void 0:n,rel:s?void 0:"noreferrer",clr:t,"data-disabled":s,disabled:s,children:e.jsxs("div",{children:[o," ",m(d||g)]})});return e.jsx(Q,{title:n,children:u})}),$e=r.memo(({task:n,features:t={},selection:s,onContextMenu:m,actions:g,blur:d,textHighlighter:o=u=>u})=>{const{user:u}=r.useContext(Y),{settings:k}=u,{enableLinks:b=!0,enableGlow:$=k.enableGlow,enableSelection:R=!1}=t,{selectedIds:p=[],onSelect:w,onDeselect:x}=s||{},y=p.includes(n.id);return n?e.jsxs(Yn,{id:n.id,onContextMenu:m,backgroundColor:n.color,glow:$,done:n.done,blur:d,"data-testid":"task-container",children:[R&&p.length>0&&e.jsx(mo,{clr:S(n.color),checked:y,icon:e.jsx(fo,{}),checkedIcon:e.jsx(ho,{}),onChange:()=>{y?x==null||x(n.id):w==null||w(n.id)}}),(n.emoji||n.done)&&e.jsx(Kn,{clr:S(n.color),children:n.done?e.jsx(Vn,{fontSize:"large"}):e.jsx(Be,{size:oe.os==="iOS"||oe.os==="macOS"?50:38,unified:n.emoji||"",emojiStyle:u.emojisStyle,lazyLoad:!0})}),e.jsxs(eo,{translate:"no",children:[n.pinned&&e.jsxs(xo,{translate:"yes",children:[e.jsx(Fe,{fontSize:"small"}),"   Pinned"]}),e.jsxs(no,{children:[e.jsx(oo,{done:n.done,children:o(n.name)}),e.jsx(Q,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(n.date)),children:e.jsx(to,{children:Hn(new Date(n.date))})})]}),e.jsx(so,{done:n.done,children:e.jsx(No,{task:n,textHighlighter:o,enableLinks:b})}),n.deadline&&e.jsx(Q,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(n.deadline)),placement:"bottom-start",children:e.jsxs(co,{done:n.done,translate:"yes",children:[e.jsx(Xe,{fontSize:"small",animate:new Date>new Date(n.deadline)&&!n.done,sx:{color:`${S(n.color)} !important`}})," "," ",new Date(n.deadline).toLocaleDateString()," "," • ",new Date(n.deadline).toLocaleTimeString(),!n.done&&e.jsxs(e.Fragment,{children:[" • ",Qe(new Date(n.deadline))]})]})}),n.sharedBy&&e.jsxs(po,{translate:"yes",children:[e.jsx(Le,{})," Shared by"," ",e.jsx("span",{translate:n.sharedBy==="User"?"yes":"no",children:n.sharedBy})]}),k.enableCategories&&n.category&&e.jsx(Zn,{children:n.category.map(D=>e.jsx(qe,{category:D,borderclr:S(n.color),sx:{...t.enableGlow===!1?{boxShadow:"none"}:{}}},D.id))})]}),g]}):null});export{_o as H,$e as T,He as a,Wn as b,Jo as c,Xn as u};
