import{r as n,j as e}from"./vendor-B-2yl_ca.js";import{f as D,g as G,bA as H,$ as K,A as X,bB as T,bz as J,T as E,B as y,L as V,x as Q,z as Y,aT as Z,aV as ee,bC as oe,D as I,bc as te,E as re,be as ae,n as b}from"./ui-lib-C41lPcrf.js";import{U as se,I as ne,a4 as ie,a5 as le,J as x,b as ce,a6 as h,D as $,a7 as de,a8 as pe,C as z,h as l,g as ue,j as xe}from"./settings-C_-OD5GG.js";import"./tasks-Bc7UcxXI.js";import"./emoji-D7qZVVSC.js";import"./ntc-LB1IgDFN.js";const Pe=()=>{const{user:o,setUser:j}=n.useContext(se),{name:r,profilePicture:f,createdAt:S}=o,[a,w]=n.useState(""),[i,v]=n.useState(""),[N,P]=n.useState(!1),[q,A]=n.useState(!1),[O,_]=n.useState(null);n.useEffect(()=>{(async()=>{const s=await pe(f);_(s)})()},[f]),n.useEffect(()=>{document.title=`Todo App - Usuário ${r?`(${r})`:""}`},[r]);const k=()=>{a.length<=x&&a!==r&&(j({...o,name:a}),l("Updated user name"),w(""))},U=()=>{P(!0)},d=()=>{P(!1),v("")},F=()=>{i.length<=h&&i.startsWith("https://")&&(d(),v(""),L(),j(t=>({...t,profilePicture:i})),l("Foto de perfil alterada."))};n.useEffect(()=>{const t=indexedDB.open("profilePictureDB",1);t.onerror=()=>{console.error("Error opening IndexedDB")},t.onupgradeneeded=s=>{const p=s.target.result;p.objectStoreNames.contains("pictures")||p.createObjectStore("pictures")}},[]);const M=async t=>{var C;const s=(C=t.target.files)==null?void 0:C[0];if(!s)return;if(!s.type.startsWith("image/")){l("Por favor, carregue um arquivo de imagem.");return}const p=6*1024*1024;if(s.size>p){const c=new Intl.NumberFormat("en-US",{style:"unit",unit:"megabyte",maximumFractionDigits:2}),u=s.size/(1024*1024),g=p/(1024*1024);l(`O tamanho do arquivo é muito grande (${c.format(u)}/${c.format(g)})`,{type:"error"});return}try{const c=await new Promise((g,R)=>{const m=new FileReader;m.onloadend=()=>g(m.result),m.onerror=R,m.readAsDataURL(s)}),u=indexedDB.open("profilePictureDB",1);u.onsuccess=g=>{const B=g.target.result.transaction(["pictures"],"readwrite").objectStore("pictures").put(c,"profilePicture");B.onsuccess=()=>{j(W=>({...W,profilePicture:"LOCAL_FILE_"+xe()})),d(),l("Foto do perfil atualizada com sucesso.")},B.onerror=()=>{l("Falha ao salvar a foto do perfil.")}}}catch(c){console.error("Erro ao carregar o arquivo:",c),l("Falha ao carregar a foto do perfil.")}},L=()=>{const t=indexedDB.open("profilePictureDB",1);t.onsuccess=s=>{const u=s.target.result.transaction(["pictures"],"readwrite").objectStore("pictures").delete("profilePicture");u.onsuccess=()=>{j({...o,profilePicture:null}),d()},u.onerror=()=>{l("Falha ao excluir a foto do perfil.")}}};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{title:"Perfil do usuário"}),e.jsxs(fe,{children:[e.jsx(D,{title:"Configurações do aplicativo",children:e.jsx(G,{onClick:()=>window.location.hash="#settings/Appearance","aria-label":"Settings",size:"large",sx:{position:"absolute",top:"24px",right:"24px"},children:e.jsx(H,{fontSize:"large"})})}),e.jsx(D,{title:f?"Alterar foto do perfil":"Adicionar foto de perfil",children:e.jsx(K,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(X,{onClick:U,sx:{background:"#9c9c9c81",backdropFilter:"blur(10px)",cursor:"pointer"},children:e.jsx(T,{})}),children:e.jsx(ie,{onClick:U,src:O||void 0,hasimage:f!==null,style:{cursor:"pointer"},size:"96px",children:r?r[0].toUpperCase():void 0})})}),e.jsx(me,{translate:r?"no":"yes",children:r||"User"}),e.jsx(D,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(S)),children:e.jsxs(he,{children:[e.jsx(J,{fontSize:"small"})," Registrado ",le(S)]})}),e.jsx(E,{sx:{width:"300px",marginTop:"8px"},label:r===null?"Adicionar nome":"Alterar nome",value:a,onChange:t=>w(t.target.value),onKeyDown:t=>t.key==="Enter"&&k(),error:a.length>x||a===r&&r!=="",helperText:a.length>x?`O nome excede ${x} caracteres`:a.length>0&&a!==r?`${a.length}/${x}`:a===r&&r!==""?"Novo nome de usuário corresponde ao antigo.":"",autoComplete:"given-name"}),e.jsx(ge,{onClick:k,disabled:a.length>x||a===r,children:"Salvar nome"}),e.jsxs(y,{color:"error",variant:"outlined",sx:{p:"12px 20px",borderRadius:"14px",marginTop:"8px"},onClick:()=>A(!0),children:[e.jsx(V,{}),"  Sair"]})]}),e.jsxs(Q,{open:N,onClose:d,children:[e.jsx(ce,{title:"Foto do perfil",subTitle:"Alterar ou excluir foto do perfil",onClose:d,icon:e.jsx(T,{})}),e.jsxs(Y,{children:[e.jsx(E,{label:"Link para foto de perfil",placeholder:"Digite o link para a foto do perfil...",sx:{my:"8px",width:"100%"},value:i,onChange:t=>{v(t.target.value)},onKeyDown:t=>t.key==="Enter"&&F(),error:i.length>h,helperText:i.length>h?`URL é muito longo, máximo de ${h} caracteres`:"",autoComplete:"url",type:"url",slotProps:{input:{startAdornment:e.jsx(Z,{position:"start",children:e.jsx(ee,{})})}}}),e.jsx(be,{children:e.jsx("span",{style:{opacity:.8},children:"or"})}),e.jsx("input",{accept:"image/*",id:"upload-pfp",type:"file",style:{display:"none"},onChange:M}),e.jsx("label",{htmlFor:"upload-pfp",children:e.jsxs(y,{component:"span",variant:"contained",fullWidth:!0,sx:{my:"8px"},children:[e.jsx(oe,{}),"   Carregar do arquivo"]})}),f!==null&&e.jsxs(e.Fragment,{children:[e.jsx(I,{sx:{my:"12px"}}),e.jsxs(y,{fullWidth:!0,onClick:L,color:"error",variant:"outlined",sx:{my:"8px"},children:[e.jsx(te,{}),"   Remover foto do perfil"]})]})]}),e.jsxs(re,{children:[e.jsx($,{onClick:d,children:"Cancelar"}),e.jsxs($,{disabled:i.length>h||!i.startsWith("https://"),onClick:F,children:[e.jsx(ae,{}),"   Salvar"]})]})]}),e.jsx(de,{open:q,onClose:()=>A(!1)})]})},fe=b.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 64px 38px;
  border-radius: 48px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: ${({theme:o})=>o.darkmode?"#383838":"#f5f5f5"};
  color: ${({theme:o})=>o.darkmode?z.fontLight:z.fontDark};
  transition:
    border 0.3s,
    box-shadow 0.3s;
  border: 4px solid ${({theme:o})=>o.primary};
  box-shadow: 0 0 72px -1px ${({theme:o})=>o.primary+"bf"};
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,ge=b(y)`
  width: 300px;
  font-weight: 600;
  border: none;
  background: ${({theme:o})=>o.primary};
  color: ${({theme:o})=>ue(o.primary)};
  font-size: 18px;
  padding: 14px;
  border-radius: 16px;
  cursor: pointer;
  text-transform: capitalize;
  transition:
    background 0.3s,
    color 0.3s;
  &:hover {
    background: ${({theme:o})=>o.primary};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    color: white;
  }
`,me=b.span`
  font-size: 20px;
  font-weight: 500;
`,he=b.span`
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: 400;
  opacity: 0.8;
  margin-top: -8px;
  margin-bottom: 2px;
  // fix for browser translate
  & font {
    margin: 0 1px;
  }
`,be=b(I)`
  &::before,
  &::after {
    border-color: ${({theme:o})=>o.darkmode?"#ffffff83":"#00000083"};
  }
`;export{Pe as default};
