import{r as m,a1 as g,j as e}from"./vendor-B-2yl_ca.js";import"./tasks-Bc7UcxXI.js";import{U as u,H as w,I as b,m as y}from"./settings-C_-OD5GG.js";import{a$ as h,bu as j,n as o}from"./ui-lib-C41lPcrf.js";import T from"./NotFound-C17G9ny-.js";import{a as C}from"./emoji-D7qZVVSC.js";import{E as D}from"./ntc-LB1IgDFN.js";const R=()=>{var c;const{user:d}=m.useContext(u),{tasks:p,emojisStyle:f}=d,{id:t}=g(),x=t==null?void 0:t.replace(".",""),r=p.find(a=>a.id.toString().replace(".","")===x);if(m.useEffect(()=>{document.title=`Todo App - ${(r==null?void 0:r.name)||"Task Details"}`},[r==null?void 0:r.name]),!r)return e.jsx(T,{message:e.jsxs("div",{children:["Task with id ",e.jsx(w,{children:x})," was not found."]})});const l=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"});return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Detalhes da tarefa"}),e.jsxs(S,{children:[e.jsxs(z,{children:["Tarefa: ",e.jsx("span",{translate:"no",children:r.name})]}),e.jsx(v,{children:e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(n,{children:"Emoji:"}),e.jsx(s,{children:r.emoji?e.jsxs(e.Fragment,{children:[e.jsx(C,{unified:(r==null?void 0:r.emoji)||"",size:32,emojiStyle:f})," (",r.emoji,")"]}):e.jsx("i",{children:"nenhum"})})]}),e.jsxs(i,{children:[e.jsx(n,{children:"ID:"}),e.jsx(s,{children:r==null?void 0:r.id})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Descrição:"}),e.jsx(s,{translate:"no",children:r==null?void 0:r.description})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Cor:"}),e.jsxs(s,{children:[e.jsx(E,{clr:r.color}),D(r.color).name," (",r.color.toUpperCase(),")"]})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Criado:"}),e.jsx(s,{children:l.format(new Date(r.date))})]}),(r==null?void 0:r.lastSave)&&e.jsxs(i,{children:[e.jsx(n,{children:"Última edição:"}),e.jsx(s,{children:l.format(new Date(r.lastSave))})]}),(r==null?void 0:r.deadline)&&e.jsxs(i,{children:[e.jsx(n,{children:"Prazo da tarefa:"}),e.jsx(s,{children:l.format(new Date(r.deadline))})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Terminado:"}),e.jsxs(s,{children:[r!=null&&r.done?e.jsx(h,{}):e.jsx(j,{})," ",r==null?void 0:r.done.toString()]})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Fixado:"}),e.jsxs(s,{children:[r!=null&&r.pinned?e.jsx(h,{}):e.jsx(j,{})," ",r==null?void 0:r.pinned.toString()]})]}),(r==null?void 0:r.sharedBy)&&e.jsxs(i,{children:[e.jsx(n,{children:"Compartilhado por: "}),e.jsx(s,{children:r.sharedBy})]}),r.category&&r.category.length>0&&e.jsxs(i,{children:[e.jsx(n,{children:"Categorias:"}),e.jsx(s,{children:e.jsx(F,{children:(c=r==null?void 0:r.category)==null?void 0:c.map(a=>e.jsx(y,{category:a,glow:!1},a.id))})})]})]})})]})]})},S=o.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 32px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 0px 24px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 24px;
    width: 70%;
  }
`,z=o.h2`
  margin: 8px;
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.8em;
  }
`,v=o.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`,i=o.tr`
  border-bottom: 2px solid ${({theme:d})=>d.primary}41;

  &:last-child {
    border-bottom: none;
  }
`,n=o.th`
  text-align: left;
  padding: 8px;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`,s=o.td`
  text-align: left;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1em;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`,E=o.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: ${({clr:d})=>d};
`,F=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;export{R as default};
