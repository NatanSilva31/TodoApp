import{r as m,a1 as g,j as e}from"./vendor-B-2yl_ca.js";import"./tasks-DYYyw5nR.js";import{U as u,I as b,J as w,m as y}from"./settings-xmdSeWFy.js";import{a$ as h,bu as j,n as s}from"./ui-lib-C41lPcrf.js";import C from"./NotFound-RrA5VO8V.js";import{a as T}from"./emoji-D7qZVVSC.js";import{E as D}from"./ntc-LB1IgDFN.js";const R=()=>{var c;const{user:a}=m.useContext(u),{tasks:p,emojisStyle:f}=a,{id:t}=g(),x=t==null?void 0:t.replace(".",""),r=p.find(d=>d.id.toString().replace(".","")===x);if(m.useEffect(()=>{document.title=`Todo App - ${(r==null?void 0:r.name)||"Detalhes da tarefa"}`},[r==null?void 0:r.name]),!r)return e.jsx(C,{message:e.jsxs("div",{children:["A tarefa com id ",e.jsx(b,{children:x})," não foi encontrada."]})});const l=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"});return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Detalhes da tarefa"}),e.jsxs(S,{children:[e.jsxs(z,{children:["Tarefa: ",e.jsx("span",{translate:"no",children:r.name})]}),e.jsx(v,{children:e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(n,{children:"Emoji:"}),e.jsx(o,{children:r.emoji?e.jsxs(e.Fragment,{children:[e.jsx(T,{unified:(r==null?void 0:r.emoji)||"",size:32,emojiStyle:f})," (",r.emoji,")"]}):e.jsx("i",{children:"nenhum"})})]}),e.jsxs(i,{children:[e.jsx(n,{children:"ID:"}),e.jsx(o,{children:r==null?void 0:r.id})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Descrição:"}),e.jsx(o,{translate:"no",children:r==null?void 0:r.description})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Cor:"}),e.jsxs(o,{children:[e.jsx(E,{clr:r.color}),D(r.color).name," (",r.color.toUpperCase(),")"]})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Criado:"}),e.jsx(o,{children:l.format(new Date(r.date))})]}),(r==null?void 0:r.lastSave)&&e.jsxs(i,{children:[e.jsx(n,{children:"Última edição:"}),e.jsx(o,{children:l.format(new Date(r.lastSave))})]}),(r==null?void 0:r.deadline)&&e.jsxs(i,{children:[e.jsx(n,{children:"Prazo da tarefa:"}),e.jsx(o,{children:l.format(new Date(r.deadline))})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Terminado:"}),e.jsxs(o,{children:[r!=null&&r.done?e.jsx(h,{}):e.jsx(j,{})," ",r==null?void 0:r.done.toString()]})]}),e.jsxs(i,{children:[e.jsx(n,{children:"Fixado:"}),e.jsxs(o,{children:[r!=null&&r.pinned?e.jsx(h,{}):e.jsx(j,{})," ",r==null?void 0:r.pinned.toString()]})]}),(r==null?void 0:r.sharedBy)&&e.jsxs(i,{children:[e.jsx(n,{children:"Compartilhado por: "}),e.jsx(o,{children:r.sharedBy})]}),r.category&&r.category.length>0&&e.jsxs(i,{children:[e.jsx(n,{children:"Categorias:"}),e.jsx(o,{children:e.jsx(F,{children:(c=r==null?void 0:r.category)==null?void 0:c.map(d=>e.jsx(y,{category:d,glow:!1},d.id))})})]})]})})]})]})},S=s.div`
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
`,z=s.h2`
  margin: 8px;
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.8em;
  }
`,v=s.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`,i=s.tr`
  border-bottom: 2px solid ${({theme:a})=>a.primary}41;

  &:last-child {
    border-bottom: none;
  }
`,n=s.th`
  text-align: left;
  padding: 8px;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`,o=s.td`
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
`,E=s.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: ${({clr:a})=>a};
`,F=s.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;export{R as default};
