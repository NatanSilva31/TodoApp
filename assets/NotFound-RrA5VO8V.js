import{u as r,r as e,j as t}from"./vendor-B-2yl_ca.js";import{bH as i,n,B as s}from"./ui-lib-C41lPcrf.js";import{k as p,I as c}from"./settings-xmdSeWFy.js";import"./tasks-DYYyw5nR.js";import"./emoji-D7qZVVSC.js";import"./ntc-LB1IgDFN.js";const w=({message:a})=>{const o=r();return e.useEffect(()=>{document.title="Todo App - Página não encontrada"},[]),t.jsxs(l,{children:[t.jsx(m,{children:"404"}),t.jsx(p,{scale:.9}),t.jsx(x,{children:a||t.jsxs("div",{children:["Página"," ",t.jsx(c,{children:location.pathname.length>32?location.pathname.substring(0,29)+"...":location.pathname})," ","não encontrada. Favor recarregue a página"]})}),t.jsxs(d,{variant:"outlined",onClick:()=>o("/"),children:[t.jsx(i,{}),"   Voltar para tarefas"]})]})},l=n.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  line-height: 2em;
`,m=n.h1`
  font-size: 128px;
  color: ${({theme:a})=>a.primary};
  text-shadow: 0 0 32px ${({theme:a})=>a.primary+"a9"};
  margin: 48px 0;
`,x=n.p`
  font-size: 22px;
  line-height: 1.8em;
  margin: 32px;
`,d=n(s)`
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 16px;
  margin: 16px;
`;export{w as default};
