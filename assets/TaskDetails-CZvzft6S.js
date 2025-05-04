import{r as m,a1 as f,j as e}from"./vendor-B-2yl_ca.js";import"./tasks-D_NJAJ7R.js";import{U as u,H as b,I as w,m as y}from"./settings-Bf_VNhSA.js";import{a$ as h,bu as j,n as d}from"./ui-lib-C41lPcrf.js";import T from"./NotFound-DnwvIKjs.js";import{a as C}from"./emoji-D7qZVVSC.js";import{E as D}from"./ntc-LB1IgDFN.js";const R=()=>{var c;const{user:o}=m.useContext(u),{tasks:p,emojisStyle:g}=o,{id:a}=f(),x=a==null?void 0:a.replace(".",""),n=p.find(t=>t.id.toString().replace(".","")===x);if(m.useEffect(()=>{document.title=`Todo App - ${(n==null?void 0:n.name)||"Task Details"}`},[n==null?void 0:n.name]),!n)return e.jsx(T,{message:e.jsxs("div",{children:["Task with id ",e.jsx(b,{children:x})," was not found."]})});const l=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"});return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Task Details"}),e.jsxs(S,{children:[e.jsxs(v,{children:["Task: ",e.jsx("span",{translate:"no",children:n.name})]}),e.jsx(z,{children:e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(r,{children:"Emoji:"}),e.jsx(s,{children:n.emoji?e.jsxs(e.Fragment,{children:[e.jsx(C,{unified:(n==null?void 0:n.emoji)||"",size:32,emojiStyle:g})," (",n.emoji,")"]}):e.jsx("i",{children:"none"})})]}),e.jsxs(i,{children:[e.jsx(r,{children:"ID:"}),e.jsx(s,{children:n==null?void 0:n.id})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Description:"}),e.jsx(s,{translate:"no",children:n==null?void 0:n.description})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Color:"}),e.jsxs(s,{children:[e.jsx(E,{clr:n.color}),D(n.color).name," (",n.color.toUpperCase(),")"]})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Created:"}),e.jsx(s,{children:l.format(new Date(n.date))})]}),(n==null?void 0:n.lastSave)&&e.jsxs(i,{children:[e.jsx(r,{children:"Last edited:"}),e.jsx(s,{children:l.format(new Date(n.lastSave))})]}),(n==null?void 0:n.deadline)&&e.jsxs(i,{children:[e.jsx(r,{children:"Task deadline:"}),e.jsx(s,{children:l.format(new Date(n.deadline))})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Done:"}),e.jsxs(s,{children:[n!=null&&n.done?e.jsx(h,{}):e.jsx(j,{})," ",n==null?void 0:n.done.toString()]})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Pinned:"}),e.jsxs(s,{children:[n!=null&&n.pinned?e.jsx(h,{}):e.jsx(j,{})," ",n==null?void 0:n.pinned.toString()]})]}),(n==null?void 0:n.sharedBy)&&e.jsxs(i,{children:[e.jsx(r,{children:"Shared by: "}),e.jsx(s,{children:n.sharedBy})]}),n.category&&n.category.length>0&&e.jsxs(i,{children:[e.jsx(r,{children:"Categories:"}),e.jsx(s,{children:e.jsx(F,{children:(c=n==null?void 0:n.category)==null?void 0:c.map(t=>e.jsx(y,{category:t,glow:!1},t.id))})})]})]})})]})]})},S=d.div`
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
`,v=d.h2`
  margin: 8px;
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.8em;
  }
`,z=d.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`,i=d.tr`
  border-bottom: 2px solid ${({theme:o})=>o.primary}41;

  &:last-child {
    border-bottom: none;
  }
`,r=d.th`
  text-align: left;
  padding: 8px;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`,s=d.td`
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
`,E=d.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: ${({clr:o})=>o};
`,F=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;export{R as default};
