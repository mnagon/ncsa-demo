import{a as d,v as q,l as z,o as A,au as Z,_ as D,av as ee,K as X,A as ae,as as J,z as ne,p as te,r as E,a8 as Q,O as oe,P as re,aw as le,W as ie,ax as se,aa as ce,ay as de,az as F,at as V,aA as ue}from"./index-45ef3337.js";var U=d.forwardRef(function(a,e){var n,t=a.prefixCls,s=a.forceRender,h=a.className,C=a.style,c=a.children,p=a.isActive,u=a.role,x=d.useState(p||s),o=q(x,2),f=o[0],y=o[1];return d.useEffect(function(){(s||p)&&y(!0)},[s,p]),f?d.createElement("div",{ref:e,className:z("".concat(t,"-content"),(n={},A(n,"".concat(t,"-content-active"),p),A(n,"".concat(t,"-content-inactive"),!p),n),h),style:C,role:u},d.createElement("div",{className:"".concat(t,"-content-box")},c)):null});U.displayName="PanelContent";var pe=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],me=d.forwardRef(function(a,e){var n,t,s=a.showArrow,h=s===void 0?!0:s,C=a.headerClass,c=a.isActive,p=a.onItemClick,u=a.forceRender,x=a.className,o=a.prefixCls,f=a.collapsible,y=a.accordion,m=a.panelKey,$=a.extra,B=a.header,N=a.expandIcon,P=a.openMotion,v=a.destroyInactivePanel,R=a.children,O=Z(a,pe),I=f==="disabled",l=f==="header",i=f==="icon",r=$!=null&&typeof $!="boolean",b=function(){p==null||p(m)},S=function(w){(w.key==="Enter"||w.keyCode===X.ENTER||w.which===X.ENTER)&&b()},g=typeof N=="function"?N(a):d.createElement("i",{className:"arrow"});g&&(g=d.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:["header","icon"].includes(f)?b:void 0},g));var k=z((n={},A(n,"".concat(o,"-item"),!0),A(n,"".concat(o,"-item-active"),c),A(n,"".concat(o,"-item-disabled"),I),n),x),K=z((t={},A(t,"".concat(o,"-header"),!0),A(t,"headerClass",C),A(t,"".concat(o,"-header-collapsible-only"),l),A(t,"".concat(o,"-icon-collapsible-only"),i),t)),M={className:K,"aria-expanded":c,"aria-disabled":I,onKeyPress:S};return!l&&!i&&(M.onClick=b,M.role=y?"tab":"button",M.tabIndex=I?-1:0),d.createElement("div",D({},O,{ref:e,className:k}),d.createElement("div",M,h&&g,d.createElement("span",{className:"".concat(o,"-header-text"),onClick:f==="header"?b:void 0},B),r&&d.createElement("div",{className:"".concat(o,"-extra")},$)),d.createElement(ee,D({visible:c,leavedClassName:"".concat(o,"-content-hidden")},P,{forceRender:u,removeOnLeave:v}),function(_,w){var H=_.className,j=_.style;return d.createElement(U,{ref:w,prefixCls:o,className:H,style:j,isActive:c,forceRender:u,role:y?"tabpanel":void 0},R)}))});function fe(a){var e=a;if(!Array.isArray(e)){var n=ne(e);e=n==="number"||n==="string"?[e]:[]}return e.map(function(t){return String(t)})}var ge=d.forwardRef(function(a,e){var n=a.prefixCls,t=n===void 0?"rc-collapse":n,s=a.destroyInactivePanel,h=s===void 0?!1:s,C=a.style,c=a.accordion,p=a.className,u=a.children,x=a.collapsible,o=a.openMotion,f=a.expandIcon,y=a.activeKey,m=a.defaultActiveKey,$=a.onChange,B=z(t,p),N=ae([],{value:y,onChange:function(r){return $==null?void 0:$(r)},defaultValue:m,postState:fe}),P=q(N,2),v=P[0],R=P[1],O=function(r){return R(function(){if(c)return v[0]===r?[]:[r];var b=v.indexOf(r),S=b>-1;return S?v.filter(function(g){return g!==r}):[].concat(te(v),[r])})},I=function(r,b){if(!r)return null;var S=r.key||String(b),g=r.props,k=g.header,K=g.headerClass,M=g.destroyInactivePanel,_=g.collapsible,w=g.onItemClick,H=!1;c?H=v[0]===S:H=v.indexOf(S)>-1;var j=_??x,Y=function(W){j!=="disabled"&&(O(W),w==null||w(W))},T={key:S,panelKey:S,header:k,headerClass:K,isActive:H,prefixCls:t,destroyInactivePanel:M??h,openMotion:o,accordion:c,children:r.props.children,onItemClick:Y,expandIcon:f,collapsible:j};return typeof r.type=="string"?r:(Object.keys(T).forEach(function(G){typeof T[G]>"u"&&delete T[G]}),d.cloneElement(r,T))},l=J(u).map(I);return d.createElement("div",{ref:e,className:B,style:C,role:c?"tablist":void 0},l)});const L=Object.assign(ge,{Panel:me});L.Panel;const ve=E.forwardRef((a,e)=>{const{getPrefixCls:n}=E.useContext(Q),{prefixCls:t,className:s="",showArrow:h=!0}=a,C=n("collapse",t),c=z({[`${C}-no-arrow`]:!h},s);return E.createElement(L.Panel,Object.assign({ref:e},a,{prefixCls:C,className:c}))}),Ce=ve,xe=a=>{const{componentCls:e,collapseContentBg:n,padding:t,collapseContentPaddingHorizontal:s,collapseHeaderBg:h,collapseHeaderPadding:C,collapseHeaderPaddingSM:c,collapseHeaderPaddingLG:p,collapsePanelBorderRadius:u,lineWidth:x,lineType:o,colorBorder:f,colorText:y,colorTextHeading:m,colorTextDisabled:$,fontSize:B,fontSizeLG:N,lineHeight:P,marginSM:v,paddingSM:R,paddingLG:O,motionDurationSlow:I,fontSizeIcon:l}=a,i=`${x}px ${o} ${f}`;return{[e]:Object.assign(Object.assign({},ie(a)),{backgroundColor:h,border:i,borderBottom:0,borderRadius:`${u}px`,["&-rtl"]:{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:i,["&:last-child"]:{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:C,color:m,lineHeight:P,cursor:"pointer",transition:`all ${I}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:B*P,display:"flex",alignItems:"center",paddingInlineEnd:v},[`${e}-arrow`]:Object.assign(Object.assign({},se()),{fontSize:l,svg:{transition:`transform ${I}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-header-collapsible-only`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-icon-collapsible-only`]:{cursor:"default",[`${e}-expand-icon`]:{cursor:"pointer"}},[`&${e}-no-arrow`]:{[`> ${e}-header`]:{paddingInlineStart:R}}},[`${e}-content`]:{color:y,backgroundColor:n,borderTop:i,[`& > ${e}-content-box`]:{padding:`${t}px ${s}px`},["&-hidden"]:{display:"none"}},["&-small"]:{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:c},[`> ${e}-content > ${e}-content-box`]:{padding:R}}},["&-large"]:{[`> ${e}-item`]:{fontSize:N,[`> ${e}-header`]:{padding:p,[`> ${e}-expand-icon`]:{height:N*P}},[`> ${e}-content > ${e}-content-box`]:{padding:O}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${u}px ${u}px`}},[`& ${e}-item-disabled > ${e}-header`]:{[`
          &,
          & > .arrow
        `]:{color:$,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:v}}}}})}},$e=a=>{const{componentCls:e}=a,n=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[n]:{transform:"rotate(180deg)"}}}},be=a=>{const{componentCls:e,collapseHeaderBg:n,paddingXXS:t,colorBorder:s}=a;return{[`${e}-borderless`]:{backgroundColor:n,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${s}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},he=a=>{const{componentCls:e,paddingSM:n}=a;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:n}}}}}},ye=oe("Collapse",a=>{const e=re(a,{collapseContentBg:a.colorBgContainer,collapseHeaderBg:a.colorFillAlter,collapseHeaderPadding:`${a.paddingSM}px ${a.padding}px`,collapseHeaderPaddingSM:`${a.paddingXS}px ${a.paddingSM}px`,collapseHeaderPaddingLG:`${a.padding}px ${a.paddingLG}px`,collapsePanelBorderRadius:a.borderRadiusLG,collapseContentPaddingHorizontal:16});return[xe(e),be(e),he(e),$e(e),le(e)]}),Pe=E.forwardRef((a,e)=>{const{getPrefixCls:n,direction:t}=E.useContext(Q),{prefixCls:s,className:h,rootClassName:C,bordered:c=!0,ghost:p,size:u,expandIconPosition:x="start",children:o,expandIcon:f}=a,y=ce(l=>{var i;return(i=u??l)!==null&&i!==void 0?i:"middle"}),m=n("collapse",s),$=n(),[B,N]=ye(m),P=E.useMemo(()=>x==="left"?"start":x==="right"?"end":x,[x]),v=function(){let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const i=f?f(l):E.createElement(ue,{rotate:l.isActive?90:void 0});return V(i,()=>({className:z(i.props.className,`${m}-arrow`)}))},R=z(`${m}-icon-position-${P}`,{[`${m}-borderless`]:!c,[`${m}-rtl`]:t==="rtl",[`${m}-ghost`]:!!p,[`${m}-${y}`]:y!=="middle"},h,C,N),O=Object.assign(Object.assign({},de($)),{motionAppear:!1,leavedClassName:`${m}-content-hidden`}),I=E.useMemo(()=>J(o).map((l,i)=>{var r,b;if(!((r=l.props)===null||r===void 0)&&r.disabled){const S=(b=l.key)!==null&&b!==void 0?b:String(i),{disabled:g,collapsible:k}=l.props,K=Object.assign(Object.assign({},F(l.props,["disabled"])),{key:S,collapsible:k??(g?"disabled":void 0)});return V(l,K)}return l}),[o]);return B(E.createElement(L,Object.assign({ref:e,openMotion:O},F(a,["rootClassName"]),{expandIcon:v,prefixCls:m,className:R}),I))}),Se=Object.assign(Pe,{Panel:Ce});export{Se as C};