import{u as d,c,j as e,N as l,d as u,L as x,B as h}from"./index-da52fd1c.js";import{F as s}from"./index-ce2967e2.js";import{I as i}from"./index-81aa98f2.js";import"./ExclamationCircleFilled-2f7e95ac.js";import"./TextArea-6c8b8c26.js";const w=()=>{const a=d(),{user:r,login:o}=c(),[m]=s.useForm();if(r)return r.role==="admin"?e.jsx(l,{to:"/admin/dashboard"}):e.jsx(l,{to:"/dashboard"});const n=async t=>{if(await o(t),t.password.trim().toLowerCase()==="admin"){a("/admin/dashboard");return}a("/dashboard")};return e.jsxs("div",{className:"flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/auth-background.svg')] bg-cover bg-center",children:[e.jsx(u,{className:"mb-12",disabled:!0}),e.jsxs("div",{className:"w-full max-w-lg rounded-lg bg-white px-10 py-12 shadow-lg",children:[e.jsx("h2",{className:"mb-8 text-center text-4xl font-semibold text-primary",children:"User Login"}),e.jsxs(s,{form:m,onFinish:n,children:[e.jsx("label",{className:"mb-1 block font-semibold",children:"Email"}),e.jsx(s.Item,{name:"email",rules:[{required:!0,message:"กรุณาระบุ Email"},{type:"email",message:"รูปแบบของ Email ไม่ถูกต้อง"}],children:e.jsx(i,{className:"p-3 ",placeholder:"Email address",size:"large"})}),e.jsx("label",{className:"mb-1 block font-semibold",children:"Password"}),e.jsx(s.Item,{name:"password",rules:[{required:!0,message:"กรุณาระบุ Password"}],children:e.jsx(i,{type:"password",className:"p-3 ",placeholder:"Password",size:"large"})}),e.jsx("div",{className:"mb-5 text-right ",children:e.jsx(x,{className:"font-normal text-primary underline",to:"/auth/forget-password",children:"Forget password?"})}),e.jsx(h,{className:"mx-auto block h-14 w-40 text-2xl",type:"primary",htmlType:"submit",children:"Login"})]})]})]})};export{w as default};
