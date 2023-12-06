import{Q as q,R as z,U as $,t as n,r as f,j as K,F as M,k as s,B as k,ab as E,v as R,ac as W,g as o,d as c,ay as O,az as G,Z as Q,T as F,aA as U,b as Y,s as I,a as Z,aB as V,aa as J,aC as _,a6 as X,aD as B,a7 as ee,aE as N,a9 as ae,aF as h,a8 as re,aG as A,aH as x,aI as te}from"./index.bb967705.js";import{B as ne,g as oe,L as le}from"./domUtils.dec8a0ff.js";import{P as ie}from"./Popper.c9b67cb7.js";import{G as se,M as ce,a as me,L as ue}from"./MenuItem.37fc2693.js";import{C as pe}from"./ClickAwayListener.3d6defdf.js";import{C as de}from"./ShipTypeFilterButton.e233a767.js";import{u as he,T as fe}from"./useTable.e31acd12.js";var L={},Ce=z.exports;Object.defineProperty(L,"__esModule",{value:!0});var j=L.default=void 0,ye=Ce(q),Se=$,Te=(0,ye.default)((0,Se.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");j=L.default=Te;function Xe(e={}){return{name:!0,type:!1,row:!1,cost:!1,operationLimit:!1,dpmShip:!1,dpmAntiAir:!1,dpmSiege:!1,hp:!1,armor:!1,shield:!1,speed:!1,accelerationTime:!1,warpSpeed:!1,flightTime:!1,dpmShipPerCommandPoint:!1,dpmAntiAirPerCommandPoint:!1,dpmSiegePerCommandPoint:!1,hpPerCommandPoint:!1,source:!1,manufacturer:!1,researchManufacturer:!1,researchTacticType:!1,researchStrategyType:!1,weight:!1,...e}}function ge(e){const{disableResearchAgreementOptions:a}=e;return[{columnKey:"type",name:n("label.shipType")},{columnKey:"row",name:n("label.rowPlacement")},{columnKey:"cost",name:n("label.commandPoints")},{columnKey:"operationLimit",name:n("label.operationLimit")},{columnKey:"dpmShip",name:n("label.antiShipDpm")},{columnKey:"dpmAntiAir",name:n("label.antiAirDpm")},{columnKey:"dpmSiege",name:n("label.siegeDpm")},{columnKey:"hp",name:n("label.hp")},{columnKey:"armor",name:n("label.armor")},{columnKey:"shield",name:n("label.shield")},{columnKey:"speed",name:n("label.cruiseSpeed")},{columnKey:"accelerationTime",name:n("label.accelerationTime")},{columnKey:"warpSpeed",name:n("label.warpSpeed")},{columnKey:"flightTime",name:n("label.flightTime")},{columnKey:"dpmShipPerCommandPoint",name:n("label.antiShipDpmPerCommandPoint")},{columnKey:"dpmAntiAirPerCommandPoint",name:n("label.antiAirDpmPerCommandPoint")},{columnKey:"dpmSiegePerCommandPoint",name:n("label.siegeDpmPerCommandPoint")},{columnKey:"hpPerCommandPoint",name:n("label.hpPerCommandPoint")},{columnKey:"source",name:n("label.acquirableThrough")},{columnKey:"manufacturer",name:n("label.manufacturer")},...a!==!0?[{columnKey:"researchManufacturer",name:n("label.researchManufacturerColumn")},{columnKey:"researchTacticType",name:n("label.researchTacticTypeColumn")},{columnKey:"researchStrategyType",name:n("label.researchStrategyTypeColumn")}]:[],{columnKey:"weight",name:n("label.probabilityWeight")}]}const ea=e=>{const{onChange:a,buttonProps:r,disableResearchAgreementOptions:t}=e,[l,i]=f.exports.useState(e.columnConfig),[m,u]=f.exports.useState(!1),[d]=f.exports.useState(()=>ge({disableResearchAgreementOptions:t})),p=f.exports.useRef(null),[P,S]=f.exports.useTransition(),w=C=>{i(y=>({...y,[C]:!y[C]}))};return f.exports.useEffect(()=>{S(()=>{a(l)})},[l,a]),K(M,{children:[s(ne,{variant:"outlined",fullWidth:r==null?void 0:r.fullWidth,size:r==null?void 0:r.size,ref:p,children:s(k,{startIcon:s(j,{}),onClick:()=>u(!0),children:n("button.displayItems")})},"columnConfig"),s(ie,{open:m,anchorEl:p.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:1},children:({TransitionProps:C,placement:y})=>{var g;return s(se,{...C,style:{transformOrigin:y==="bottom"?"center top":"center bottom"},children:s("div",{children:s(pe,{onClickAway:()=>u(!1),children:K(E,{children:[s(R,{component:"div",sx:{overflowY:"auto",maxHeight:`${((g=oe(p.current))!=null?g:0)-50}px`},children:s(ce,{id:"split-button-menu",children:d.map(b=>K(me,{selected:l[b.columnKey],onClick:()=>w(b.columnKey),children:[s(le,{children:s(de,{edge:"start",checked:l[b.columnKey],tabIndex:-1,disableRipple:!0})}),s(ue,{children:b.name})]},b.columnKey))})}),s(W,{}),s(R,{component:"div",p:1,display:"flex",justifyContent:"end",children:s(k,{variant:"outlined",onClick:()=>u(!1),children:n("button.close")})})]})})})})}})]})},be=e=>({id:"nameLink",renderHeader:()=>n("label.shipName"),renderCell:a=>{var t;return((t=e.decorateName)!=null?t:(l,i)=>l)(s(F,{variant:"body2",children:s(U,{onClick:()=>{e.onClick(a.id)},children:o(a)})}),a)},sortFn:(a,r)=>o(a).localeCompare(o(r),c())}),Pe={id:"type",renderHeader:()=>n("label.shipType"),renderCell:e=>Y(e.type,e.subType),sortFn:[(e,a)=>I(e.type,e.subType)-I(a.type,a.subType),(e,a)=>o(e).localeCompare(o(a),c())],initialSortDirection:"asc"},we={id:"row",renderHeader:()=>n("label.rowPlacement"),renderCell:e=>Z(e.row),sortFn:[(e,a)=>V(e.row)-V(a.row),(e,a)=>o(e).localeCompare(o(a),c())]},Ae={id:"cost",renderHeader:()=>n("label.commandPoints"),renderCell:e=>e.cost,sortFn:[(e,a)=>e.cost-a.cost,(e,a)=>o(e).localeCompare(o(a),c())]},De={id:"operationLimit",renderHeader:()=>n("label.operationLimit"),renderCell:e=>e.operationLimit,sortFn:[(e,a)=>e.operationLimit-a.operationLimit,(e,a)=>o(e).localeCompare(o(a),c())]},ve={id:"source",renderHeader:()=>n("label.acquirableThrough"),renderCell:e=>J(e.source),sortFn:[(e,a)=>_(e.source)-_(a.source),(e,a)=>o(e).localeCompare(o(a),c())]},Ke={id:"manufacturer",renderHeader:()=>n("label.manufacturer"),renderCell:e=>X(e.manufacturer),sortFn:[(e,a)=>B(e.manufacturer)-B(a.manufacturer),(e,a)=>o(e).localeCompare(o(a),c())]},xe={id:"researchManufacturer",renderHeader:()=>n("label.researchManufacturerColumn"),renderCell:e=>e.researchManufacturer?ee(e.researchManufacturer):"-",sortFn:[(e,a)=>(e.researchManufacturer?N(e.researchManufacturer):0)-(a.researchManufacturer?N(a.researchManufacturer):0),(e,a)=>o(e).localeCompare(o(a),c())]},He={id:"researchStrategyType",renderHeader:()=>n("label.researchStrategyTypeColumn"),renderCell:e=>{var a,r;return s(M,{children:(r=(a=e.researchStrategyTypes)==null?void 0:a.map(t=>s(F,{variant:"body2",children:ae(t)},t)))!=null?r:"-"})},sortFn:[(e,a)=>{var r,t;return((r=e.researchStrategyTypes)!=null&&r[0]?h(e.researchStrategyTypes[0]):0)-((t=a.researchStrategyTypes)!=null&&t[0]?h(a.researchStrategyTypes[0]):0)},(e,a)=>{var r,t;return((r=e.researchStrategyTypes)!=null&&r[1]?h(e.researchStrategyTypes[1]):0)-((t=a.researchStrategyTypes)!=null&&t[1]?h(a.researchStrategyTypes[1]):0)},(e,a)=>{var r,t;return((r=e.researchStrategyTypes)!=null&&r[2]?h(e.researchStrategyTypes[2]):0)-((t=a.researchStrategyTypes)!=null&&t[2]?h(a.researchStrategyTypes[2]):0)},(e,a)=>{var r,t;return((r=e.researchStrategyTypes)!=null&&r[3]?h(e.researchStrategyTypes[3]):0)-((t=a.researchStrategyTypes)!=null&&t[3]?h(a.researchStrategyTypes[3]):0)},(e,a)=>o(e).localeCompare(o(a),c())]},Me={id:"researchTacticType",renderHeader:()=>n("label.researchTacticTypeColumn"),renderCell:e=>{var a,r;return s(M,{children:(r=(a=e.researchTacticTypes)==null?void 0:a.map(t=>s(F,{variant:"body2",children:re(t)},t)))!=null?r:"-"})},sortFn:[(e,a)=>{var r,t;return((r=e.researchTacticTypes)!=null&&r[0]?A(e.researchTacticTypes[0]):0)-((t=a.researchTacticTypes)!=null&&t[0]?A(a.researchTacticTypes[0]):0)},(e,a)=>{var r,t;return((r=e.researchTacticTypes)!=null&&r[1]?A(e.researchTacticTypes[1]):0)-((t=a.researchTacticTypes)!=null&&t[1]?A(a.researchTacticTypes[1]):0)},(e,a)=>o(e).localeCompare(o(a),c())]},Fe={id:"weight",renderHeader:()=>n("label.probabilityWeight"),renderCell:e=>e.weight,sortFn:[(e,a)=>e.weight-a.weight,(e,a)=>o(e).localeCompare(o(a),c())]},Le={id:"armor",renderHeader:()=>n("label.armor"),renderCell:e=>{var a,r;return(r=(a=e.defaultStats)==null?void 0:a.armor)!=null?r:"-"},sortFn:[(e,a)=>{var r,t,l,i;return((t=(r=e.defaultStats)==null?void 0:r.armor)!=null?t:0)-((i=(l=a.defaultStats)==null?void 0:l.armor)!=null?i:0)},(e,a)=>o(e).localeCompare(o(a),c())]},ke={id:"shield",renderHeader:()=>n("label.shield"),renderCell:e=>{var a,r;return(r=(a=e.defaultStats)==null?void 0:a.shield)!=null?r:"-"},sortFn:[(e,a)=>{var r,t,l,i;return((t=(r=e.defaultStats)==null?void 0:r.shield)!=null?t:0)-((i=(l=a.defaultStats)==null?void 0:l.shield)!=null?i:0)},(e,a)=>o(e).localeCompare(o(a),c())]},Re={id:"flightTime",renderHeader:()=>n("label.flightTime"),renderCell:e=>{var a,r;return((a=e.defaultStats)==null?void 0:a.inboundTime)&&((r=e.defaultStats)==null?void 0:r.outboundTime)?[n("quantity.nSecondsShort",{count:e.defaultStats.outboundTime}),n("quantity.nSecondsShort",{count:e.defaultStats.inboundTime})].join(" | "):"-"},sortFn:[(e,a)=>{var l,i,m,u,d,p,P,S,w,C,y,g;const r=((i=(l=e.defaultStats)==null?void 0:l.inboundTime)!=null?i:0)+((u=(m=e.defaultStats)==null?void 0:m.outboundTime)!=null?u:0),t=((p=(d=a.defaultStats)==null?void 0:d.inboundTime)!=null?p:0)+((S=(P=a.defaultStats)==null?void 0:P.outboundTime)!=null?S:0);return r===t?((C=(w=e.defaultStats)==null?void 0:w.outboundTime)!=null?C:0)-((g=(y=a.defaultStats)==null?void 0:y.outboundTime)!=null?g:0):r-t},(e,a)=>o(e).localeCompare(o(a),c())]},Ie={id:"accelerationTime",renderHeader:()=>n("label.accelerationTime"),renderCell:e=>{var a;if((a=e.defaultStats)!=null&&a.speed){const r=x(e.defaultStats.speed);if(r)return n("quantity.nSecondsShort",{count:r})}return"-"},sortFn:[(e,a)=>{var l,i,m,u,d,p;const r=(m=x((i=(l=e.defaultStats)==null?void 0:l.speed)!=null?i:0))!=null?m:0,t=(p=x((d=(u=a.defaultStats)==null?void 0:u.speed)!=null?d:0))!=null?p:0;return r-t},(e,a)=>o(e).localeCompare(o(a),c())]},Ve=T(n("label.antiShipDpm"),"dpmShip"),_e=T(n("label.antiAirDpm"),"dpmAntiAir"),Be=T(n("label.siegeDpm"),"dpmSiege"),Ne=T(n("label.hp"),"hp"),Oe=T(n("label.cruiseSpeed"),"speed",e=>Number.isFinite(e)?Number(e)<=1200?`${e} - 1200`:`${e}`:"-"),je=T(n("label.warpSpeed"),"warpSpeed"),qe=v(n("label.antiShipDpmPerCommandPoint"),"dpmShip"),ze=v(n("label.antiAirDpmPerCommandPoint"),"dpmAntiAir"),$e=v(n("label.siegeDpmPerCommandPoint"),"dpmSiege"),Ee=v(n("label.hpPerCommandPoint"),"hp");function T(e,a,r=O){return{id:a,renderHeader:()=>e,renderCell:t=>r(D(t.id,a)),sortFn:[(t,l)=>{var i,m;return((i=D(t.id,a))!=null?i:0)-((m=D(l.id,a))!=null?m:0)},(t,l)=>o(t).localeCompare(o(l),c())]}}function v(e,a){return{id:`${a}_per_command_point`,renderHeader:()=>e,renderCell:r=>O(H(r,a),0),sortFn:[(r,t)=>{var l,i;return((l=H(r,a))!=null?l:0)-((i=H(t,a))!=null?i:0)},(r,t)=>o(r).localeCompare(o(t),c())]}}function D(e,a){var t,l;const r=(l=(t=G(Q(e),null))==null?void 0:t[a])!=null?l:null;if(typeof r=="boolean")throw new Error(`${a} is not a numeric value`);return r}function H(e,a){if(e.cost===0)return null;const r=D(e.id,a);if(typeof r=="boolean")throw new Error(`${a} is not a numeric value`);return r===null?null:r/e.cost}const aa=e=>{const{shipDefinitions:a,columnConfig:r,decorateName:t,initialSorting:l,onChangeSorting:i}=e,{table:m,setTableData:u}=he({initialSorting:l,onChangeSorting:i}),{openShipDetailDialog:d}=te(),p=f.exports.useMemo(()=>[be({onClick:d,decorateName:t}),...r.type?[Pe]:[],...r.row?[we]:[],...r.cost?[Ae]:[],...r.operationLimit?[De]:[],...r.dpmShip?[Ve]:[],...r.dpmAntiAir?[_e]:[],...r.dpmSiege?[Be]:[],...r.hp?[Ne]:[],...r.armor?[Le]:[],...r.shield?[ke]:[],...r.speed?[Oe]:[],...r.accelerationTime?[Ie]:[],...r.warpSpeed?[je]:[],...r.flightTime?[Re]:[],...r.dpmShipPerCommandPoint?[qe]:[],...r.dpmAntiAirPerCommandPoint?[ze]:[],...r.dpmSiegePerCommandPoint?[$e]:[],...r.hpPerCommandPoint?[Ee]:[],...r.source?[ve]:[],...r.manufacturer?[Ke]:[],...r.researchManufacturer?[xe]:[],...r.researchTacticType?[Me]:[],...r.researchStrategyType?[He]:[],...r.weight?[Fe]:[]],[r,t,d]);return f.exports.useEffect(()=>{u({columns:p,data:a,rowIdFn:S=>S.id})},[u,p,a]),s(fe,{table:m,size:"small"})};export{ea as C,aa as S,Xe as c};
