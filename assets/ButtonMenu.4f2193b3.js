import{r as l,j as n,F as k,k as a,B as C,aa as v}from"./index.ab4b431d.js";import{B as y,g as B,C as I,L}from"./domUtils.e8e26673.js";import{P as M}from"./useFormControl.5bf868fe.js";import{G as w,M as j,a as z,L as G}from"./PageContent.49b7d4c4.js";const H=c=>{const{options:d,icon:o,text:h,value:m,onClick:u,buttonProps:e}=c,[f,s]=l.exports.useState(!1),i=l.exports.useRef(null),p=r=>{s(!1),u(r)};return n(k,{children:[a(y,{variant:"outlined",fullWidth:e==null?void 0:e.fullWidth,ref:i,disabled:e==null?void 0:e.disabled,size:e==null?void 0:e.size,children:a(C,{startIcon:o,onClick:r=>{r.stopPropagation(),s(!0)},disabled:e==null?void 0:e.disabled,children:h})}),a(M,{open:f,anchorEl:i.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:2},children:({TransitionProps:r,placement:x})=>a(w,{...r,style:{transformOrigin:x==="bottom"?"center top":"center bottom"},children:a(v,{style:{maxHeight:B(i.current),overflowY:"auto"},children:a(I,{onClickAway:()=>s(!1),children:a(j,{children:d.map(t=>n(z,{selected:t.value===m,onClick:g=>{g.stopPropagation(),p(t.value)},disabled:t.disabled,children:[t.icon&&a(L,{children:t.icon}),a(G,{children:t.text})]},t.key))})})})})})]})};export{H as B};
