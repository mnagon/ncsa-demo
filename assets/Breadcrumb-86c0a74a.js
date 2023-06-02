import{r as o,x as w,ay as M,f as B,az as Y,aA as Z,q as k,s as ee,t as re,aB as te,ar as A,aw as ne}from"./index-da52fd1c.js";const F=e=>{let{children:t}=e;const{getPrefixCls:a}=o.useContext(w),r=a("breadcrumb");return o.createElement("li",{className:`${r}-separator`,"aria-hidden":"true"},t===""?t:t||"/")};F.__ANT_BREADCRUMB_SEPARATOR=!0;const R=F;var ae=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function oe(e,t){if(e.title===void 0)return null;const a=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${a})`,"g"),(r,n)=>t[n]||r)}function K(e,t,a,r){if(a==null)return null;const{className:n,onClick:l}=t,s=ae(t,["className","onClick"]),c=Object.assign(Object.assign({},M(s,{data:!0,aria:!0})),{onClick:l});return r!==void 0?o.createElement("a",Object.assign({},c,{className:B(`${e}-link`,n),href:r}),a):o.createElement("span",Object.assign({},c,{className:B(`${e}-link`,n)}),a)}function le(e,t){return(r,n,l,s,c)=>{if(t)return t(r,n,l,s);const d=oe(r,n);return K(e,r,d,c)}}var _=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};const U=e=>{const{prefixCls:t,separator:a="/",children:r,menu:n,overlay:l,dropdownProps:s,href:c}=e,f=(g=>{if(n||l){const y=Object.assign({},s);if(n){const j=n||{},{items:O}=j,h=_(j,["items"]);y.menu=Object.assign(Object.assign({},h),{items:O==null?void 0:O.map((m,P)=>{var{key:C,title:p,label:S,path:v}=m,u=_(m,["key","title","label","path"]);let i=S??p;return v&&(i=o.createElement("a",{href:`${c}${v}`},i)),Object.assign(Object.assign({},u),{key:C??P,label:i})})})}else l&&(y.overlay=l);return o.createElement(Y,Object.assign({placement:"bottom"},y),o.createElement("span",{className:`${t}-overlay-link`},g,o.createElement(Z,null)))}return g})(r);return f!=null?o.createElement(o.Fragment,null,o.createElement("li",null,f),a&&o.createElement(R,null,a)):null},q=e=>{const{prefixCls:t,children:a,href:r}=e,n=_(e,["prefixCls","children","href"]),{getPrefixCls:l}=o.useContext(w),s=l("breadcrumb",t);return o.createElement(U,Object.assign({},n,{prefixCls:s}),K(s,n,a,r))};q.__ANT_BREADCRUMB_ITEM=!0;const se=q,ce=e=>{const{componentCls:t,iconCls:a}=e;return{[t]:Object.assign(Object.assign({},re(e)),{color:e.breadcrumbBaseColor,fontSize:e.breadcrumbFontSize,[a]:{fontSize:e.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.breadcrumbLinkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover}},te(e)),["li:last-child"]:{color:e.breadcrumbLastItemColor},[`${t}-separator`]:{marginInline:e.breadcrumbSeparatorMargin,color:e.breadcrumbSeparatorColor},[`${t}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${a}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.breadcrumbLinkColorHover,backgroundColor:e.colorBgTextHover,a:{color:e.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},ie=k("Breadcrumb",e=>{const t=ee(e,{breadcrumbBaseColor:e.colorTextDescription,breadcrumbFontSize:e.fontSize,breadcrumbIconFontSize:e.fontSize,breadcrumbLinkColor:e.colorTextDescription,breadcrumbLinkColorHover:e.colorText,breadcrumbLastItemColor:e.colorText,breadcrumbSeparatorMargin:e.marginXS,breadcrumbSeparatorColor:e.colorTextDescription});return[ce(t)]});var H=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};function me(e){const{breadcrumbName:t,children:a}=e,r=H(e,["breadcrumbName","children"]),n=Object.assign({title:t},r);return a&&(n.menu={items:a.map(l=>{var{breadcrumbName:s}=l,c=H(l,["breadcrumbName"]);return Object.assign(Object.assign({},c),{title:s})})}),n}function ue(e,t){return o.useMemo(()=>e||(t?t.map(me):null),[e,t])}var be=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a};const de=(e,t)=>{if(t===void 0)return t;let a=(t||"").replace(/^\//,"");return Object.keys(e).forEach(r=>{a=a.replace(`:${r}`,e[r])}),a},T=e=>{const{prefixCls:t,separator:a="/",style:r,className:n,rootClassName:l,routes:s,items:c,children:d,itemRender:f,params:g={}}=e,y=be(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:j,direction:O}=o.useContext(w);let h;const m=j("breadcrumb",t),[P,C]=ie(m),p=ue(c,s),S=le(m,f);if(p&&p.length>0){const u=[],i=c||s;h=p.map((b,x)=>{const{path:W,key:E,type:G,menu:z,overlay:X,onClick:J,className:L,separator:Q}=b,$=de(g,W);$!==void 0&&u.push($);const D=E??x;if(G==="separator")return o.createElement(R,{key:D},Q);const I={},V=x===p.length-1;z?I.menu=z:X&&(I.overlay=X),L&&(I.className=L);let{href:N}=b;return u.length&&$!==void 0&&(N=`#/${u.join("/")}`),o.createElement(U,Object.assign({key:D},I,M(b,{data:!0,aria:!0}),{href:N,separator:V?"":a,onClick:J,prefixCls:m}),S(b,g,i,u,N))})}else if(d){const u=A(d).length;h=A(d).map((i,b)=>{if(!i)return i;const x=b===u-1;return ne(i,{separator:x?"":a,key:b})})}const v=B(m,{[`${m}-rtl`]:O==="rtl"},n,l,C);return P(o.createElement("nav",Object.assign({className:v,style:r},y),o.createElement("ol",null,h)))};T.Item=se;T.Separator=R;const fe=T;export{fe as B};
