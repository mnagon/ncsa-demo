import{j as e,R as o,I as r,c,B as s,T as i,S as d}from"./index-b3792167.js";import{a as n,b as l,T as m,C as p}from"./icons-90e44da5.js";import{r as x}from"./requireAuth-a98b14e9.js";import{T as u}from"./index-3eadb3d1.js";import{I as y}from"./index-5f4ae37d.js";import"./TextArea-b5836a20.js";const b=[{name:"Support",key:"f2a04524-d641-4b00-91a3-11a61d82693e",createDate:"23-03-01 11:12",expireDate:"",status:"ACTIVE"},{name:"Internal testing",key:"f2a04524-d641-4b00-91a3-11a61d82693e",createDate:"23-03-01 11:12",expireDate:"23-03-25 02:30",status:"ACTIVE"},{name:"QA",key:"f2a04524-d641-4b00-91a3-11a61d82693e",createDate:"23-03-01 11:12",expireDate:"",status:"DISABLED"}],f={ACTIVE:"before:bg-[#00C82C]",DISABLED:"before:bg-[#A7A7A7]"},h=({status:t})=>e.jsx("span",{className:`relative flex items-center pl-5 font-normal ${f[t]} before:absolute before:left-0 before:block before:h-3 before:w-3 before:rounded-full before:content-['']`,children:t}),j=()=>{const t=o.useMemo(()=>[{title:"Name",dataIndex:"name",key:"name",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"API Key",dataIndex:"key",key:"key",render:a=>e.jsx(u.Paragraph,{copyable:{icon:[e.jsx(r,{component:n},"copy-icon"),e.jsx(r,{className:"opacity-30",component:n},"copied-icon")],tooltips:["copy","copied!"]},children:a})},{title:"Created date",dataIndex:"createDate",key:"create-date",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"Expire date",dataIndex:"expireDate",key:"expire-date",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"Status",dataIndex:"status",key:"status",render:a=>e.jsx(h,{status:a})},{title:"Actions",key:"actions",render:()=>e.jsxs(c,{children:[e.jsx(s,{icon:e.jsx(r,{component:l}),shape:"circle",className:"border-0 shadow-none"}),e.jsx(s,{icon:e.jsx(r,{component:m}),shape:"circle",className:"border-0 shadow-none"})]})}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx(i,{children:"API Key creation and management"})}),e.jsxs("div",{className:"mb-5 flex items-baseline justify-between",children:[e.jsx(y,{className:"max-w-[384px]",size:"large",placeholder:"Search by name",prefix:e.jsx(d,{})}),e.jsx(s,{type:"primary",size:"large",children:"+ Generate API Key"})]}),e.jsx(p,{dataSource:b,columns:t})]})},C=x(j);export{C as default};