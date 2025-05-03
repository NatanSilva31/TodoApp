import{u as e,r as s,j as t}from"./vendor-CAPrwHoW.js";import{bH as i,n,B as r}from"./ui-lib-lpr_KMSR.js";import{k as p,H as c}from"./settings-BshogTHf.js";import"./tasks-u5ZNZD5t.js";import"./emoji-DdLBlTIZ.js";import"./ntc-LB1IgDFN.js";const w=({message:o})=>{const a=e();return s.useEffect(()=>{document.title="Todo App - Page Not Found"},[]),t.jsxs(m,{children:[t.jsx(x,{children:"404"}),t.jsx(p,{scale:.9}),t.jsx(d,{children:o||t.jsxs("div",{children:["Page"," ",t.jsx(c,{children:location.pathname.length>32?location.pathname.substring(0,29)+"...":location.pathname})," ","was not found."]})}),t.jsxs(l,{variant:"outlined",onClick:()=>a("/"),children:[t.jsx(i,{}),"   Go back to tasks"]})]})},m=n.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  line-height: 2em;
`,x=n.h1`
  font-size: 128px;
  color: ${({theme:o})=>o.primary};
  text-shadow: 0 0 32px ${({theme:o})=>o.primary+"a9"};
  margin: 48px 0;
`,d=n.p`
  font-size: 22px;
  line-height: 1.8em;
  margin: 32px;
`,l=n(r)`
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 16px;
  margin: 16px;
`;export{w as default};
