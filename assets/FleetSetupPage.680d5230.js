import{P as B,Q as A,R as I,r as f,k as e,F as x,t as n,bD as ee,j as d,B as E,aA as W,bE as j,Y as te,g as $,aM as ne,aN as ae,aO as re,w as k,T as a,bz as w,aP as oe,bx as ie,bF as le,bG as se,bH as ce,c as C,b as R,S as pe,a as de,aI as ue,q as D,aB as G,x as he,y as fe,z as me,bA as Se,ai as ve,ax as ye,aa as N,ab as ge}from"./index.ab4b431d.js";import{N as xe,P as be}from"./PageContent.49b7d4c4.js";import{d as Ce}from"./Settings.4d01f954.js";import{A as ke}from"./ActionBar.b7485479.js";import{B as L}from"./ButtonMenu.4f2193b3.js";import{u as V,g as Y,f as q,m as De,s as _e,S as Fe,a as Te,b as we,v as Re,G as z}from"./fleetSetupValidation.1178134b.js";import{d as Ee,a as K,b as $e,I as Be,E as Ae}from"./ExportDataDialog.5935d5c3.js";import{d as Ie}from"./ConfirmationDialog.81593bcd.js";import{E as Oe}from"./ExpandStack.7cafc35e.js";import{R as Pe}from"./ResponsiveDialog.614f3c8f.js";import{T as Me,A as We}from"./TextField.bd47117a.js";import{P as je}from"./PageFooter.e9d5be0a.js";import"./domUtils.e8e26673.js";import"./useFormControl.5bf868fe.js";import"./sorting.c6946657.js";import"./Download.56fbb24a.js";import"./DialogContentText.ab931aa6.js";import"./Select.aefcfb2a.js";var O={},Ge=A.exports;Object.defineProperty(O,"__esModule",{value:!0});var J=O.default=void 0,Ne=Ge(B),Ve=I,ze=(0,Ne.default)((0,Ve.jsx)("path",{d:"M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}),"Spoke");J=O.default=ze;const He=h=>{const{fleetSetups:t,fleetSetup:i,onChange:r,buttonProps:u}=h,s=f.exports.useMemo(()=>t.map(o=>({key:o.key,text:o.name,value:o.key})),[t]);return e(x,{children:e(L,{icon:e(J,{}),text:n("fleetSetup.selectFleet"),value:i.key,options:s,onClick:r,buttonProps:u})})},Le=h=>{const{fleetSetup:t,grouping:i,onCopyAsText:r,buttonProps:u}=h,[s,o]=f.exports.useState(!1),[c,p]=f.exports.useState(!1),v=f.exports.useCallback((g,l)=>{(async()=>{const y=await ee();if(!y){l();return}const m=V(y,t.key);g(m)})()},[t]),b=f.exports.useCallback(g=>{let l;try{l=JSON.parse(g)}catch(y){return console.log(y),null}return V(l,t.key)},[t]),S=f.exports.useCallback(g=>{const l=Y(i,g);return q(g,l)},[i]),T=f.exports.useCallback(g=>{switch(g){case"copyAsText":{r();break}case"import":{o(!0);break}case"export":{p(!0);break}}},[t]);return d(x,{children:[e(L,{icon:e(Ee,{}),text:n("button.share"),value:void 0,buttonProps:u,onClick:T,options:[{key:"copyAsText",icon:e(K,{}),text:n("label.copyAsText"),value:"copyAsText"},{key:"export",icon:e(Ie,{}),text:n("label.dataExport"),value:"export"},{key:"import",icon:e($e,{}),text:n("label.dataImport"),value:"import"}]}),s&&e(Be,{confirmDialogTitle:n("fleetSetup.importConfirmTitle"),confirmWarning:n("fleetSetup.importConfirmWarning",{name:t.name}),createPreview:S,parseInput:b,onImport:Ye,onClose:()=>o(!1),onSelectFile:v}),c&&e(Ae,{fileName:t.name,jsonContent:JSON.stringify(De(t)),onClose:()=>p(!1)})]})};function Ye(h){_e(h),setTimeout(()=>{const t=new URL(window.location.href);window.location.href=`${t.origin}${t.pathname}#/fleetSetup/${h.key}`,window.location.reload()},0)}const qe=h=>{const{fleetSetups:t,fleetSetup:i,grouping:r,onChangeFleet:u,onChangeGrouping:s,onEdit:o,onShare:c}=h;return e(ke,{left:p=>d(x,{children:[e(Fe,{value:r,onChange:s,buttonProps:p}),e(He,{fleetSetups:t,fleetSetup:i,onChange:u,buttonProps:p}),e(E,{variant:"outlined",startIcon:e(Ce,{}),onClick:o,...p,children:n("button.edit")},"edit")]}),right:p=>e(x,{children:e(Le,{fleetSetup:i,grouping:r,onCopyAsText:c,buttonProps:p})})})},Ke=h=>{var o;const{initialFleetKey:t}=h,i=f.exports.useMemo(()=>Te(),[]),[r,u]=f.exports.useState(t&&(o=i.find(c=>c.key===t))!=null?o:i[0]),s=f.exports.useCallback(c=>{const p=i.find(v=>v.key===c);if(!p)throw new Error(`Invalid fleet key "${c}"`);u(p)},[i]);return{fleetSetups:i,fleetSetup:r,switchFleet:s}};var P={},Je=A.exports;Object.defineProperty(P,"__esModule",{value:!0});var U=P.default=void 0,Ue=Je(B),Qe=I,Xe=(0,Ue.default)((0,Qe.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");U=P.default=Xe;var M={},Ze=A.exports;Object.defineProperty(M,"__esModule",{value:!0});var Q=M.default=void 0,et=Ze(B),tt=I,nt=(0,et.default)((0,tt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");Q=M.default=nt;function at(h){const t={hp:0,speed:1/0,warpSpeed:1/0,dpmShip:0,dpmAntiAir:0,dpmSiege:0,incomplete:!1};return h.reduce((i,r)=>{const u=W(r.shipDefinition,r.moduleSelection);if(!u)return{...i,incomplete:!0};const s=j(u,r.count,i);return r.carriedShips.reduce((o,c)=>{const p=W(c.shipDefinition,null);return p?j(p,c.count,o):{...o,incomplete:!0}},s)},t)}const rt=h=>{const{fleetSetup:t}=h,[i,r]=f.exports.useState(!1),{totalCost:u,shipCount:s,shipCountByType:o,shipCountByRow:c}=f.exports.useMemo(()=>we(t.ships),[t.ships]),p=f.exports.useMemo(()=>at(t.ships),[t.ships]),v=u>t.maxCost,b=t.totalReinforcementCount>t.maxReinforcement,S=f.exports.useMemo(()=>{const l=Re(t);return Object.keys(l).map(y=>{const[m,X]=y.split("#"),Z=te(m),_=$(Z),F=l[y];switch(X){case"self":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.selfReinforcement"),errorText:F});case"ally":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementA"),errorText:F});case"ally2":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementB"),errorText:F});case"ally3":return n("fleetSetup.reinforcementShipWithValidationError",{shipName:_,reinforcementType:n("fleetSetup.orgReinforcementC"),errorText:F});default:return n("fleetSetup.shipWithValidationError",{shipName:_,errorText:F})}})},[t]),g=v||b||S.length>0?e(Q,{color:"error"}):e(U,{color:"primary"});return d(ne,{expanded:i,onChange:()=>r(!i),children:[e(ae,{expandIcon:i?e(re,{}):g,children:d(k,{spacing:1,children:[e(a,{variant:"body1",children:t.name}),!i&&d("div",{children:[d(a,{variant:"body2",color:"text.secondary",component:"span",children:[n("fleetSetup.reinforcementColon"),w()?" ":""]}),e(a,{variant:"body2",color:"text.secondary",component:"span",sx:b?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`}),d(a,{variant:"body2",color:"text.secondary",component:"span",children:[n("fleetSetup.commaCommandPointColon"),w()?" ":""]}),e(a,{variant:"body2",color:"text.secondary",component:"span",sx:v?{color:"red"}:{},children:`${u} / ${t.maxCost}`})]})]})}),e(oe,{children:i&&e(ie,{rows:[{key:"reinforcementCount",label:n("fleetSetup.reinforcement"),value:e(a,{variant:"body2",sx:b?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`})},{key:"cost",label:n("fleetSetup.totalFleetCommandPoints"),value:e(a,{variant:"body2",sx:v?{color:"red"}:{},children:`${u} / ${t.maxCost}`})},{key:"dpm",label:n("fleetSetup.totalFleetDpm"),value:d(x,{children:[e(a,{variant:"body2",children:le(p)}),p.incomplete&&e(a,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"hp",label:n("fleetSetup.totalFleetHp"),value:d(x,{children:[e(a,{variant:"body2",children:se(p)}),p.incomplete&&e(a,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"speed",label:n("label.speed"),value:d(x,{children:[e(a,{variant:"body2",children:ce(p)}),p.incomplete&&e(a,{variant:"caption",color:"text.secondary",children:n("fleetSetup.inaccurateDueToMissingDataBrackets")})]})},{key:"shipCount",label:n("label.ships"),value:s>0?d(x,{children:[e(a,{variant:"body2",children:n("fleetSetup.totalShipCountValue",{value:s})}),Object.keys(o).filter(l=>o[l]>0&&l!==C.CORVETTE&&l!==C.FIGHTER).map(l=>e(a,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:R(l),value:o[l]})},l))]}):e(a,{variant:"body2",children:"-"})},{key:"carriedShipCount",label:n("shipType.aircraft"),value:o[C.FIGHTER]+o[C.CORVETTE]>0?d(x,{children:[o[C.FIGHTER]>0&&e(a,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:R(C.FIGHTER),value:o[C.FIGHTER]})}),o[C.CORVETTE]>0&&e(a,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:R(C.CORVETTE),value:o[C.CORVETTE]})})]}):e(a,{variant:"body2",children:"-"})},{key:"rowCount",label:n("label.rowPlacement"),value:s>0?e(x,{children:Object.keys(c).filter(l=>l!==pe.NONE&&c[l]>0).map(l=>e(a,{variant:"body2",children:n("fleetSetup.countPerKind",{kind:de(l),value:c[l]})},l))}):e(a,{variant:"body2",children:"-"})},...S.length>0?[{key:"warnings",label:n("label.warning"),value:S.map((l,y)=>e(a,{variant:"body2",sx:{color:"red"},children:l},`warning_${y}`))}]:[]]})})]})},H=h=>{const{shipSelections:t}=h,{openShipDetailDialog:i}=ue();return e(k,{spacing:1,children:t==null?void 0:t.map(r=>{var u;return d(f.exports.Fragment,{children:[d(k,{spacing:1,direction:"row",children:[d(k,{spacing:1,direction:"row",flexWrap:"wrap",sx:{flexGrow:1},children:[e(D,{sx:{width:"25px"},children:e(a,{variant:"body2",textAlign:"end",children:`${r.count}\xD7`})}),e(a,{variant:"body2",children:e(G,{onClick:()=>{i(r.shipDefinition.id)},children:$(r.shipDefinition)})}),r.reinforcement==="self"&&e(a,{variant:"body2",noWrap:!0,children:n("fleetSetup.reinforcementBrackets")}),r.reinforcement==="ally"&&e(a,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementABrackets")}),r.reinforcement==="ally2"&&e(a,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementBBrackets")}),r.reinforcement==="ally3"&&e(a,{variant:"body2",noWrap:!0,children:n("fleetSetup.orgReinforcementCBrackets")})]}),e(D,{sx:{width:"50px"},children:r.reinforcement===null&&e(a,{variant:"body2",textAlign:"end",children:`${r.shipDefinition.cost*r.count} Pt`})})]}),r.carriedShips.map(s=>{var o;return d(k,{spacing:1,direction:"row",flexWrap:"wrap",children:[e(a,{variant:"body2",color:"text.secondary",sx:{paddingLeft:"30px",opacity:.5},children:"\u2517"}),e(D,{sx:{width:"25px"},children:e(a,{variant:"body2",textAlign:"end",children:`${s.count}\xD7`})}),e(a,{variant:"body2",children:e(G,{onClick:()=>{i(s.shipDefinition.id)},children:$(s.shipDefinition)})})]},`${s.shipDefinition.id}_${(o=s.reinforcement)!=null?o:"initial"}`)})]},`${r.shipDefinition.id}_${(u=r.reinforcement)!=null?u:"initial"}`)})})},ot=h=>{const{fleetSetup:t,groupedShips:i,onClose:r}=h,[u,s]=f.exports.useState(!1),[o,c]=f.exports.useState(()=>q(t,i)),p=()=>{o&&fe(o).then(()=>{s(!0)})},v=S=>{c(S.target.value)},b=()=>{r(),s(!1)};return e(Pe,{title:n("button.share"),content:d(k,{spacing:1,children:[e(Me,{variant:"filled",id:"outlined-multiline-static",multiline:!0,onChange:v,rows:10,defaultValue:o,fullWidth:!0}),!!navigator.clipboard&&e(E,{variant:"outlined",startIcon:u?e(he,{}):e(K,{}),onClick:p,fullWidth:!0,children:n("button.copyToClipboard")})]}),actions:e(E,{variant:"outlined",onClick:b,children:n("button.close")}),onClose:b})},Dt=()=>{const h=me(),{fleetKey:t}=Se(),i=ve(),r=ye(i.breakpoints.up("lg")),[u,s]=f.exports.useState(!1),{fleetSetups:o,fleetSetup:c,switchFleet:p}=Ke({initialFleetKey:t!=null?t:null}),[v,b]=f.exports.useState(z.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME),S=f.exports.useMemo(()=>Y(v,c),[c,v]),T=()=>{h("/fleetSetup/edit/"+c.key)},g=()=>{s(!0)},l=()=>{s(!1)},y=r&&S.groupedBy===z.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME?"row":"column";return d(x,{children:[e(xe,{currentRoute:"/fleetSetup"}),e(qe,{fleetSetups:o,fleetSetup:c,grouping:v,onChangeFleet:p,onChangeGrouping:b,onEdit:T,onShare:g}),e(be,{disableContainer:y==="row",children:e(D,{p:1,children:d(k,{spacing:1,children:[e(rt,{fleetSetup:c}),c.ships.length>0?e(x,{children:y==="row"?e(k,{spacing:1,direction:"row",sx:{width:"100%"},children:S.groups.map(m=>e(N,{sx:{width:`${100/S.groups.length}%`},children:e(D,{p:1,children:d(k,{spacing:1,children:[d(a,{variant:"body1",children:[m.name,w()&&e("span",{children:"\xA0"}),m.count>0?n("fleetSetup.shipCountBrackets",{value:m.count}):""]}),e(ge,{}),e(H,{shipSelections:m.ships})]})})},m.id))}):e(Oe,{expandables:S.groups.map(m=>({id:m.id,initiallyOpened:!0,summary:d(a,{variant:"body1",children:[m.name,w()&&e("span",{children:"\xA0"}),m.count>0?n("fleetSetup.shipCountBrackets",{value:m.count}):""]}),details:e(H,{shipSelections:m.ships}),skip:m.ships.length===0}))},S.groupedBy)}):e(N,{children:e(D,{p:2,children:d(k,{spacing:1,children:[e(a,{variant:"body1",children:n("fleetSetup.fleetFormation")}),e(We,{severity:"info",children:n("fleetSetup.fleetEmptyNotice")})]})})}),e(a,{variant:"caption",align:"right",paragraph:!0,children:n("fleetSetup.pageFootnote")})]})})}),u&&e(ot,{fleetSetup:c,groupedShips:S,onClose:l}),e(je,{disableContainer:y==="row"})]})};export{Dt as FleetSetupPage,Dt as default};
