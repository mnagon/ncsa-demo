import{R as r,j as e,I as t,S as d,B as n,T as p,y as x}from"./index-da52fd1c.js";import{a as y}from"./custom-table-6f465b8d.js";import{b as i,c as u,T as j,A as h}from"./icons-cc9e56a1.js";import{r as f}from"./requireAuth-a471c395.js";import{A as g,u as I}from"./status-5c42e19a.js";import{P as N}from"./page-size-b55592de.js";import{C as A}from"./custom-pagination-ee4e1e42.js";import{C as b}from"./confirm-modal-8668020a.js";import{T as S}from"./index-2514ac60.js";import{I as C}from"./index-81aa98f2.js";import"./ExclamationCircleFilled-2f7e95ac.js";import"./TextArea-6c8b8c26.js";const P=()=>{const[o,c]=r.useState(1),[l,s]=r.useState(!1),m=r.useMemo(()=>[{title:"Name",dataIndex:"name",key:"name",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"API Key",dataIndex:"key",key:"key",render:a=>e.jsx(S.Paragraph,{copyable:{icon:[e.jsx(t,{component:i},"copy-icon"),e.jsx(t,{className:"opacity-30",component:i},"copied-icon")],tooltips:["copy","copied!"]},children:a})},{title:"Created by",dataIndex:"createBy",key:"createBy",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"Created date",dataIndex:"createDate",key:"create-date",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"Expire date",dataIndex:"expireDate",key:"expire-date",render:a=>e.jsx(e.Fragment,{children:a}),sorter:!0},{title:"Status",dataIndex:"status",key:"status",render:a=>e.jsx(g,{status:a})},{title:"Actions",key:"actions",render:()=>e.jsxs(d,{children:[e.jsx(n,{icon:e.jsx(t,{component:u}),shape:"circle",className:"border-0 shadow-none"}),e.jsx(n,{onClick:()=>s(!0),icon:e.jsx(t,{component:j}),shape:"circle",className:"border-0 shadow-none"})]})}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsxs(p,{children:[e.jsx(t,{className:"mr-3",component:h}),"API Key Management"]})}),e.jsxs("div",{className:"mb-5 flex items-baseline justify-between",children:[e.jsx(C,{className:"max-w-[384px]",size:"large",placeholder:"Search by name",prefix:e.jsx(x,{})}),e.jsx(n,{type:"primary",size:"large",children:"+ Add New Incident Case"})]}),e.jsx(y,{className:"mb-6",dataSource:I,columns:m}),e.jsxs("div",{className:"flex items-baseline justify-between",children:[e.jsx(N,{total:30,current:o,pageSize:10}),e.jsx(A,{total:30,current:o,pageSize:10,onChange:c})]}),e.jsx(b,{open:l,headline:"Delete API Key",message:"Are you sure you want to delete this API Key?",content:e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{children:[e.jsxs("p",{className:"font-normal",children:["Name:"," ",e.jsx("strong",{className:"font-normal text-primary",children:"Support"})]}),e.jsxs("p",{className:"font-normal",children:["API Key:"," ",e.jsx("strong",{className:"font-normal text-primary",children:"f2a04524-d641-4b00-91a3-11a61d82693e"})]})]})}),confirmText:"Delete",onCancel:()=>s(!1),onOk:()=>s(!1)})]})},O=f(P);export{O as default};
