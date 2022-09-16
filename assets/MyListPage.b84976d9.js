import{j as e,a as d,F as f,B as w,t as o,u as T,r as u,g as E,b as v,T as c,c as B,d as $,S as M,e as D,f as g,h as R,i as b,s as k,k as x,l as j,m as A,n as O,o as I,p as q}from"./index.5abf1b34.js";import{d as U}from"./Settings.cf408851.js";import{d as V,a as W}from"./ContentCopy.93144310.js";import{S as P,c as _,a as z,e as G,b as H,d as K,f as J}from"./ShipTypeFilterButton.58faf5cd.js";import{A as Q}from"./ActionBar.3867206a.js";import{C as X,S as Y,c as Z}from"./ShipDataTable.aa33db4c.js";import{E as ee}from"./ExpandStack.d51a8a62.js";import{n as te}from"./sorting.c6946657.js";import{R as ae}from"./ResponsiveDialog.8963a1fd.js";import{T as ie}from"./TextField.29739de8.js";import{N as ne,P as se}from"./PageContent.1bfed528.js";import{P as oe}from"./PageFooter.25a2e23a.js";import"./domUtils.fc5866a5.js";import"./useFormControl.f97c89bf.js";import"./useTable.257323ab.js";import"./Select.b4258e7a.js";const re=r=>{const{shipFilter:t,columnConfig:i,onEdit:s,onFilter:n,onShare:h,onColumnConfigChange:p}=r;return e(Q,{left:l=>d(f,{children:[e(X,{columnConfig:i,onChange:p,disableResearchAgreementOptions:!0,buttonProps:l},"columnConfig"),e(P,{filter:t,onChange:n,researchManufacturer:!1,researchStrategyTypes:!1,researchTacticTypes:!1,buttonProps:l},"filter"),e(w,{variant:"outlined",startIcon:e(U,{}),onClick:s,...l,children:o("myList.editMyList")},"edit")]}),right:l=>e(f,{children:e(w,{variant:"outlined",startIcon:e(V,{}),onClick:h,...l,children:o("button.share")},"share")})})},le=r=>{const{ship:t}=r,{userSettings:i}=T(),s=u.exports.useMemo(()=>E(t,i),[t,i]);return s.length===0?null:e(v,{mt:.5,children:s.map(n=>d(c,{variant:"body2",color:"text.secondary",children:[e(c,{variant:"body2",component:"span",color:"text.secondary",sx:{opacity:.5},children:"\u2517 "}),`${n.category}${n.categoryNumber} ${B(t.id,n)}`]},n.id))})},ce=r=>{const{ship:t}=r,{userSettings:i}=T(),s=u.exports.useMemo(()=>$(t,i),[t,i]);return s.length===0?null:e(v,{mt:.5,children:s.map(n=>d(c,{variant:"body2",color:"text.secondary",children:[e(c,{variant:"body2",component:"span",color:"text.secondary",sx:{opacity:.5},children:"\u2517 "}),`${n.category}${n.categoryNumber} ${B(t.id,n)}`]},n.id))})},F=u.exports.memo(Y),pe=r=>{const{shipListState:t,columnConfig:i}=r;return d(M,{spacing:1,children:[e(ee,{expandables:[{id:"possessed-ships",initiallyOpened:!0,summary:e(c,{variant:"body1",children:o("label.acquiredShipsAndBlueprints")}),details:e(F,{shipDefinitions:t.possessed,columnConfig:i,decorateName:(s,n)=>d(f,{children:[s,e(le,{ship:n})]})})},{id:"wished-ships",initiallyOpened:!1,summary:e(c,{variant:"body1",children:o("label.wantedBlueprints")}),details:e(F,{shipDefinitions:t.wished,columnConfig:i,decorateName:(s,n)=>d(f,{children:[s,e(ce,{ship:n})]})})},{id:"unwished-by-user-ships",initiallyOpened:!1,summary:e(c,{variant:"body1",children:o("label.unwantedBlueprints")}),details:e(F,{shipDefinitions:t.unwishedByUser,columnConfig:i})},{id:"unwished-by-data-ships",initiallyOpened:!1,summary:e(c,{variant:"body1",children:o("myList.unwantedDuplicates")}),details:d(f,{children:[e(F,{shipDefinitions:t.unwishedByData,columnConfig:i}),e(v,{pt:1,children:e(c,{variant:"caption",align:"right",paragraph:!0,children:o("myList.unwantedDuplicatesFootnote")})})]})}]}),e(c,{variant:"caption",align:"right",paragraph:!0,children:o("myList.pageFootnote")})]})};function de(r,t){const i=[],s=[],n=[],h=[],p=[];r.forEach(a=>{switch(a.row){case g.FRONT:{i.push(a);break}case g.MIDDLE:{s.push(a);break}case g.BACK:{n.push(a);break}default:switch(a.type){case b.CORVETTE:{h.push(a);break}case b.FIGHTER:{p.push(a);break}}}});const l=te([(a,m)=>k(a.type,a.subType)-k(m.type,m.subType),(a,m)=>x(a).localeCompare(x(m),j())]);return[o("label.acquiredShipsAndBlueprints"),[o("myList.groupNameForSharing",{name:D(g.FRONT)}),...i.sort(l).map(a=>S(a,t))].join(`
`),[o("myList.groupNameForSharing",{name:D(g.MIDDLE)}),...s.sort(l).map(a=>S(a,t))].join(`
`),[o("myList.groupNameForSharing",{name:D(g.BACK)}),...n.sort(l).map(a=>S(a,t))].join(`
`),[o("myList.groupNameForSharing",{name:R(b.CORVETTE)}),...h.sort(l).map(a=>S(a,t))].join(`
`),[o("myList.groupNameForSharing",{name:R(b.FIGHTER)}),...p.sort(l).map(a=>S(a,t))].join(`
`)].join(`

`)}function S(r,t){const i=E(r,t);return i.length===0?`\u3000${x(r)}`:[`\u3000${x(r)}`,i.map(s=>`\u3000\u2517 ${s.category}${s.categoryNumber} ${B(r.id,s)}`).join(`
`)].join(`
`)}const he=r=>{const{ships:t,onClose:i}=r,[s,n]=u.exports.useState(!1),{userSettings:h}=T(),[p,l]=u.exports.useState(()=>de(t.possessed,h)),a=()=>{p&&O(p).then(()=>{n(!0)})},m=L=>{l(L.target.value)},C=()=>{i(),n(!1)};return e(ae,{title:o("button.share"),content:d(M,{spacing:1,children:[e(ie,{variant:"filled",id:"outlined-multiline-static",multiline:!0,onChange:m,rows:10,defaultValue:p,fullWidth:!0}),!!navigator.clipboard&&e(w,{variant:"outlined",startIcon:s?e(A,{}):e(W,{}),onClick:a,fullWidth:!0,children:o("button.copyToClipboard")})]}),actions:e(w,{variant:"outlined",onClick:C,children:o("button.close")}),onClose:C})},Me=()=>{const r=I(),{userSettings:t}=T(),[i,s]=u.exports.useState(_),[n,h]=u.exports.useState(null),[p,l]=u.exports.useState(()=>Z({name:!0,row:!0,type:!0,cost:!1,operationLimit:!1})),a=u.exports.useMemo(()=>{const y=z(q,i);return{possessed:G(y,t.ships),wished:H(y,t),unwishedByUser:K(y,t.ships),unwishedByData:J(y,t)}},[t,i]),m=()=>{r("/myList/edit")},C=()=>{h(a)},L=()=>{h(null)},N=Object.values(p).filter(y=>typeof y=="boolean"&&y).length>3;return d(f,{children:[e(ne,{currentRoute:"/myList"}),e(re,{shipFilter:i,columnConfig:p,onEdit:m,onFilter:s,onShare:C,onColumnConfigChange:l}),e(se,{disableContainer:N,children:d(v,{p:1,children:[d(M,{pt:1,pb:2,spacing:2,children:[e(c,{variant:"body2",children:o("myList.pageDescription1")}),e(c,{variant:"body2",children:o("myList.pageDescription2")}),e(c,{variant:"body2",children:o("myList.pageDescription3")})]}),e(pe,{shipListState:a,columnConfig:p})]})}),n&&e(he,{ships:n,onClose:L}),e(oe,{disableContainer:N})]})};export{Me as MyListPage,Me as default};
