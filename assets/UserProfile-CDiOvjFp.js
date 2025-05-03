import{r as n,j as e}from"./vendor-CAPrwHoW.js";import{f as P,g as G,bA as H,$ as K,A as X,bB as F,bz as J,T,B as y,L as V,x as Q,z as Y,aT as Z,aV as ee,bC as te,D as I,bc as oe,E as re,be as ae,n as b}from"./ui-lib-lpr_KMSR.js";import{U as se,I as ne,a4 as ie,a5 as le,J as x,b as ce,a6 as h,D as $,a7 as de,a8 as pe,C as z,h as l,g as ue,j as xe}from"./settings-BshogTHf.js";import"./tasks-u5ZNZD5t.js";import"./emoji-DdLBlTIZ.js";import"./ntc-LB1IgDFN.js";const we=()=>{const{user:t,setUser:j}=n.useContext(se),{name:r,profilePicture:g,createdAt:S}=t,[a,v]=n.useState(""),[i,C]=n.useState(""),[N,w]=n.useState(!1),[_,k]=n.useState(!1),[O,M]=n.useState(null);n.useEffect(()=>{(async()=>{const s=await pe(g);M(s)})()},[g]),n.useEffect(()=>{document.title=`Todo App - User ${r?`(${r})`:""}`},[r]);const U=()=>{a.length<=x&&a!==r&&(j({...t,name:a}),l("Updated user name"),v(""))},A=()=>{w(!0)},d=()=>{w(!1),C("")},L=()=>{i.length<=h&&i.startsWith("https://")&&(d(),C(""),R(),j(o=>({...o,profilePicture:i})),l("Changed profile picture."))};n.useEffect(()=>{const o=indexedDB.open("profilePictureDB",1);o.onerror=()=>{console.error("Error opening IndexedDB")},o.onupgradeneeded=s=>{const p=s.target.result;p.objectStoreNames.contains("pictures")||p.createObjectStore("pictures")}},[]);const q=async o=>{var D;const s=(D=o.target.files)==null?void 0:D[0];if(!s)return;if(!s.type.startsWith("image/")){l("Please upload an image file.");return}const p=6*1024*1024;if(s.size>p){const c=new Intl.NumberFormat("en-US",{style:"unit",unit:"megabyte",maximumFractionDigits:2}),u=s.size/(1024*1024),f=p/(1024*1024);l(`File size is too large (${c.format(u)}/${c.format(f)})`,{type:"error"});return}try{const c=await new Promise((f,B)=>{const m=new FileReader;m.onloadend=()=>f(m.result),m.onerror=B,m.readAsDataURL(s)}),u=indexedDB.open("profilePictureDB",1);u.onsuccess=f=>{const E=f.target.result.transaction(["pictures"],"readwrite").objectStore("pictures").put(c,"profilePicture");E.onsuccess=()=>{j(W=>({...W,profilePicture:"LOCAL_FILE_"+xe()})),d(),l("Profile picture updated successfully.")},E.onerror=()=>{l("Failed to save profile picture.")}}}catch(c){console.error("Error uploading file:",c),l("Failed to upload profile picture.")}},R=()=>{const o=indexedDB.open("profilePictureDB",1);o.onsuccess=s=>{const u=s.target.result.transaction(["pictures"],"readwrite").objectStore("pictures").delete("profilePicture");u.onsuccess=()=>{j({...t,profilePicture:null}),d()},u.onerror=()=>{l("Failed to delete profile picture.")}}};return e.jsxs(e.Fragment,{children:[e.jsx(ne,{title:"User Profile"}),e.jsxs(ge,{children:[e.jsx(P,{title:"App Settings",children:e.jsx(G,{onClick:()=>window.location.hash="#settings/Appearance","aria-label":"Settings",size:"large",sx:{position:"absolute",top:"24px",right:"24px"},children:e.jsx(H,{fontSize:"large"})})}),e.jsx(P,{title:g?"Change profile picture":"Add profile picture",children:e.jsx(K,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(X,{onClick:A,sx:{background:"#9c9c9c81",backdropFilter:"blur(10px)",cursor:"pointer"},children:e.jsx(F,{})}),children:e.jsx(ie,{onClick:A,src:O||void 0,hasimage:g!==null,style:{cursor:"pointer"},size:"96px",children:r?r[0].toUpperCase():void 0})})}),e.jsx(me,{translate:r?"no":"yes",children:r||"User"}),e.jsx(P,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(S)),children:e.jsxs(he,{children:[e.jsx(J,{fontSize:"small"})," Registered ",le(S)]})}),e.jsx(T,{sx:{width:"300px",marginTop:"8px"},label:r===null?"Add Name":"Change Name",value:a,onChange:o=>v(o.target.value),onKeyDown:o=>o.key==="Enter"&&U(),error:a.length>x||a===r&&r!=="",helperText:a.length>x?`Name exceeds ${x} characters`:a.length>0&&a!==r?`${a.length}/${x}`:a===r&&r!==""?"New username matches old one.":"",autoComplete:"given-name"}),e.jsx(fe,{onClick:U,disabled:a.length>x||a===r,children:"Save name"}),e.jsxs(y,{color:"error",variant:"outlined",sx:{p:"12px 20px",borderRadius:"14px",marginTop:"8px"},onClick:()=>k(!0),children:[e.jsx(V,{}),"  Logout"]})]}),e.jsxs(Q,{open:N,onClose:d,children:[e.jsx(ce,{title:"Profile Picture",subTitle:"Change or delete profile picture",onClose:d,icon:e.jsx(F,{})}),e.jsxs(Y,{children:[e.jsx(T,{label:"Link to profile picture",placeholder:"Enter link to profile picture...",sx:{my:"8px",width:"100%"},value:i,onChange:o=>{C(o.target.value)},onKeyDown:o=>o.key==="Enter"&&L(),error:i.length>h,helperText:i.length>h?`URL is too long maximum ${h} characters`:"",autoComplete:"url",type:"url",slotProps:{input:{startAdornment:e.jsx(Z,{position:"start",children:e.jsx(ee,{})})}}}),e.jsx(be,{children:e.jsx("span",{style:{opacity:.8},children:"or"})}),e.jsx("input",{accept:"image/*",id:"upload-pfp",type:"file",style:{display:"none"},onChange:q}),e.jsx("label",{htmlFor:"upload-pfp",children:e.jsxs(y,{component:"span",variant:"contained",fullWidth:!0,sx:{my:"8px"},children:[e.jsx(te,{}),"   Upload from file"]})}),g!==null&&e.jsxs(e.Fragment,{children:[e.jsx(I,{sx:{my:"12px"}}),e.jsxs(y,{fullWidth:!0,onClick:R,color:"error",variant:"outlined",sx:{my:"8px"},children:[e.jsx(oe,{}),"   Remove Profile Picture"]})]})]}),e.jsxs(re,{children:[e.jsx($,{onClick:d,children:"Cancel"}),e.jsxs($,{disabled:i.length>h||!i.startsWith("https://"),onClick:L,children:[e.jsx(ae,{}),"   Save"]})]})]}),e.jsx(de,{open:_,onClose:()=>k(!1)})]})},ge=b.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 64px 38px;
  border-radius: 48px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: ${({theme:t})=>t.darkmode?"#383838":"#f5f5f5"};
  color: ${({theme:t})=>t.darkmode?z.fontLight:z.fontDark};
  transition:
    border 0.3s,
    box-shadow 0.3s;
  border: 4px solid ${({theme:t})=>t.primary};
  box-shadow: 0 0 72px -1px ${({theme:t})=>t.primary+"bf"};
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,fe=b(y)`
  width: 300px;
  font-weight: 600;
  border: none;
  background: ${({theme:t})=>t.primary};
  color: ${({theme:t})=>ue(t.primary)};
  font-size: 18px;
  padding: 14px;
  border-radius: 16px;
  cursor: pointer;
  text-transform: capitalize;
  transition:
    background 0.3s,
    color 0.3s;
  &:hover {
    background: ${({theme:t})=>t.primary};
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
    border-color: ${({theme:t})=>t.darkmode?"#ffffff83":"#00000083"};
  }
`;export{we as default};
