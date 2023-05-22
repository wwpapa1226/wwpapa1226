import{k as e,j as h,F as O,B as L,t,r as n,x as C,T as f,V as E,W as b,b9 as M,d as k,aJ as I,v as D,f as _,ba as R,u as A,bb as W,bc as B,a4 as m,ab as $,g as w,ac as q,aL as U,aM as Y,aO as z,m as H,A as j}from"./index.c0102965.js";import{d as G}from"./Save.d9f87c11.js";import{d as V,a as J}from"./DeleteForever.c1dcc644.js";import{S as K,a as Q,s as X,c as Z}from"./ShipTypeFilterButton.35400437.js";import{A as ee}from"./ActionBar.c4fe5a50.js";import{d as ie}from"./Settings.4a8895dd.js";import{T as P,a as x}from"./ToggleButtonGroup.ea0242ac.js";import{d as se}from"./Clear.1f4a92ea.js";import{N as te,P as ne}from"./PageContent.c57ff487.js";import{C as oe}from"./ConfirmationDialog.2b1077d0.js";import{P as ae}from"./PageFooter.012d8f78.js";import"./domUtils.4f25a6c5.js";import"./MenuItem.b8435d40.js";import"./Popper.4ef64c1e.js";import"./ClickAwayListener.3fb97e7a.js";import"./useFormControl.a391276c.js";import"./ResponsiveDialog.af97cdd9.js";import"./DialogContentText.7e41b6fe.js";const re=a=>{const{shipFilter:i,onCancel:s,onSave:o,onReset:c,onFilter:d}=a;return e(ee,{left:r=>e(K,{filter:i,onChange:d,researchManufacturer:!1,researchStrategyTypes:!1,researchTacticTypes:!1,buttonProps:r},"filter"),right:r=>h(O,{children:[e(L,{variant:"outlined",startIcon:e(V,{}),onClick:c,...r,children:t("button.initialize")},"reset"),e(L,{variant:"outlined",startIcon:e(J,{}),onClick:s,...r,children:t("button.cancel")},"cancel"),e(L,{variant:"contained",startIcon:e(G,{}),onClick:o,...r,children:t("button.save")},"save")]})})},N=a=>{const{label:i,options:s,possession:o,onChange:c}=a,[d,r]=n.exports.useState(o),[u,p]=n.exports.useTransition(),l=(g,y)=>{r(y===null?E.UNDEFINED:Number(y))};return n.exports.useEffect(()=>{p(()=>{c(d)})},[d,c]),h(C,{spacing:1,direction:"row",alignItems:"center",children:[e(f,{variant:"body2",children:i}),h(P,{size:"small",color:"primary",value:`${d}`,exclusive:!0,onChange:l,children:[e(x,{value:`${E.POSSESSED}`,children:s[0]}),e(x,{value:`${E.NOT_POSSESSED}`,children:s[1]})]})]})},F=a=>{const{wish:i,onChange:s}=a,[o,c]=n.exports.useState(i),[d,r]=n.exports.useTransition(),u=(p,l)=>{c(l===null||l==="clear"?b.UNDEFINED:Number(l))};return n.exports.useEffect(()=>{r(()=>{s(o)})},[o,s]),h(C,{spacing:1,direction:"row",alignItems:"center",children:[e(f,{variant:"body2",children:t("myList.wantOption")}),h(P,{size:"small",color:"primary",value:`${o}`,exclusive:!0,onChange:u,children:[e(x,{value:`${b.WANTED}`,children:t("myList.wantOptionYes")}),e(x,{value:`${b.NOT_WANTED}`,children:t("myList.wantOptionNo")}),o!==b.UNDEFINED&&e(x,{value:"clear",children:e(se,{})})]})]})},ce=a=>{const{ship:i,module:s,userSettings:o,setModulePossession:c,setModuleWish:d}=a,r=n.exports.useCallback(g=>{c(s.id,i.id,g)},[s,i,c]),u=n.exports.useCallback(g=>{d(s.id,i.id,g)},[s,i,d]),p=n.exports.useMemo(()=>M(s.id,i.id,o),[s,i,o]),l=k()===I.JAPANESE;return e(D,{component:"div",pl:2,children:h(C,{spacing:3,children:[h("div",{children:[e(f,{variant:"h6",children:`${s.category}${s.categoryNumber} ${_(i.id,s)}`}),l&&s.description&&e(f,{variant:"caption",color:"text.secondary",children:s.description})]}),e(N,{label:t("myList.additionalModuleAcquiredOption"),options:[t("myList.blueprintAcquiredOptionYes"),t("myList.blueprintAcquiredOptionNo")],possession:p,onChange:r}),p===E.NOT_POSSESSED&&e(F,{wish:R(s.id,i.id,o),onChange:u})]})},s.id)},le=a=>{const{ship:i,...s}=a,{userSettings:o,setShipPossession:c,setShipWish:d,setModulePossession:r,setModuleWish:u}=A(),p=n.exports.useMemo(()=>W(i.id,o),[i,o]),l=n.exports.useMemo(()=>B(i.id,o),[i,o]),g=n.exports.useMemo(()=>l!==b.UNDEFINED?!0:i.source===m.TECH_FILE&&p===E.NOT_POSSESSED,[i,p,l]),y=n.exports.useCallback(S=>{c(i.id,S)},[c,i]),T=n.exports.useCallback(S=>{d(i.id,S)},[d,i]);return e($,{elevation:2,...s,children:e(D,{component:"div",p:1,children:h(C,{spacing:3,children:[e(f,{variant:"h6",children:w(i)}),e(N,{label:de(i),options:pe(i),possession:p,onChange:y}),g&&e(F,{wish:l,onChange:T}),(i.source===m.TECH_FILE||i.source===m.STARTER_SHIP)&&p===E.POSSESSED&&i.modules&&i.modules.filter(S=>!S.defaultModule&&S.category!=="STATIC").map(S=>h(n.exports.Fragment,{children:[e(q,{}),e(ce,{ship:i,module:S,userSettings:o,setModulePossession:r,setModuleWish:u})]},S.id))]})})})};function de(a){switch(a.source){case m.CITY_TRADE:return t("myList.shipBoughtOption");case m.DOCK_EFFECT:return t("myList.dockingEffectBlueprintAcquiredOption");case m.SALVAGE:return t("myList.salvageAcquiredOption");default:return t("myList.blueprintAcquiredOption")}}function pe(a){switch(a.source){case m.CITY_TRADE:return[t("myList.shipBoughtOptionYes"),t("myList.shipBoughtOptionNo")];default:return[t("myList.blueprintAcquiredOptionYes"),t("myList.blueprintAcquiredOptionNo")]}}const v=a=>{const{id:i,title:s,shipDefinitions:o,initiallyOpened:c,preRenderDetails:d=!1}=a,[r,u]=n.exports.useState(c),p=n.exports.useCallback((l,g)=>{u(g)},[]);return h(U,{expanded:r,onChange:p,children:[e(Y,{id:i,expandIcon:e(ie,{}),children:e(f,{variant:"body1",children:s})}),e(z,{children:(r||d)&&e(C,{spacing:3,children:o.map(l=>e(le,{ship:l},l.id))})})]})},he=a=>{const{shipFilter:i}=a,s=n.exports.useMemo(()=>{const o=Q(H,i);return X(o)},[i]);return h(C,{spacing:1,children:[e("div",{children:e(v,{id:"tech-file-ships",title:t("shipSource.techFile"),initiallyOpened:!1,preRenderDetails:!0,shipDefinitions:s[m.TECH_FILE]})}),e("div",{children:e(v,{id:"city-trade-ships",title:t("shipSource.cityTrade"),initiallyOpened:!1,shipDefinitions:s[m.CITY_TRADE]})}),e("div",{children:e(v,{id:"dock-effect-ships",title:t("shipSource.dockEffect"),initiallyOpened:!1,shipDefinitions:s[m.DOCK_EFFECT]})}),e("div",{children:e(v,{id:"salvage-ships",title:t("shipSource.salvage"),initiallyOpened:!1,shipDefinitions:s[m.SALVAGE]})}),e("div",{children:e(v,{id:"starter-ships",title:t("shipSource.starterShip"),initiallyOpened:!1,shipDefinitions:s[m.STARTER_SHIP]})})]})},Fe=()=>{const a=j(),{saveUserSettings:i,restoreUserSettings:s,resetUserSettings:o}=A(),[c,d]=n.exports.useState(Z),[r,u]=n.exports.useState(!1);n.exports.useEffect(()=>()=>{s()},[s]);const p=n.exports.useCallback(()=>{s(),a("/myList")},[s,a]),l=n.exports.useCallback(()=>{i(),a("/myList")},[i,a]),g=n.exports.useCallback(()=>{u(!1)},[]),y=n.exports.useCallback(()=>{u(!0)},[]),T=n.exports.useCallback(()=>{u(!1),o()},[o]);return h(O,{children:[e(te,{currentRoute:"/myList"}),e(re,{shipFilter:c,onCancel:p,onReset:y,onSave:l,onFilter:d}),e(ne,{children:h(D,{component:"div",p:1,children:[h(C,{pt:1,pb:2,spacing:2,children:[e(f,{variant:"body2",children:t("myListConfig.pageDescription1")}),e(f,{variant:"body2",children:t("myListConfig.pageDescription2")}),e(f,{variant:"body2",children:t("myListConfig.pageDescription3")})]}),e(he,{shipFilter:c})]})}),r&&e(oe,{title:t("button.initialize"),question:t("myList.confirmInitialize"),cancelText:t("button.cancel"),confirmText:t("button.initialize"),onCancel:g,onConfirm:T}),e(ae,{})]})};export{Fe as MyListEditPage,Fe as default};