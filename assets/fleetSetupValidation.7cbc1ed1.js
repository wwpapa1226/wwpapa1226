import{r as $,a as L,F as w,j as m,B as z,a4 as W,J as V,K as q,L as K,t as c,i as h,h as J,f as R,e as Z,k as g,l as Q,s as A,bq as X,c as ee,O as M,by as I,bz as C,Q as te}from"./index.d5f2f31e.js";import{B as re,g as ne,C as oe,L as ie}from"./domUtils.cc05ceb3.js";import{P as ae}from"./useFormControl.757befdb.js";import{G as se,M as ue,a as ce,L as le}from"./PageContent.2223fbba.js";import{n as j}from"./sorting.c6946657.js";const fe=e=>{const{options:t,icon:n,text:o,value:r,onClick:i,buttonProps:a}=e,[s,u]=$.exports.useState(!1),l=$.exports.useRef(null),f=d=>{u(!1),i(d)};return L(w,{children:[m(re,{variant:"outlined",fullWidth:a==null?void 0:a.fullWidth,ref:l,disabled:a==null?void 0:a.disabled,size:a==null?void 0:a.size,children:m(z,{startIcon:n,onClick:d=>{d.stopPropagation(),u(!0)},disabled:a==null?void 0:a.disabled,children:o})}),m(ae,{open:s,anchorEl:l.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:2},children:({TransitionProps:d,placement:D})=>m(se,{...d,style:{transformOrigin:D==="bottom"?"center top":"center bottom"},children:m(W,{style:{maxHeight:ne(l.current),overflowY:"auto"},children:m(oe,{onClickAway:()=>u(!1),children:m(ue,{children:t.map(p=>L(ce,{selected:p.value===r,onClick:F=>{F.stopPropagation(),f(p.value)},disabled:p.disabled,children:[p.icon&&m(ie,{children:p.icon}),m(le,{children:p.text})]},p.key))})})})})})]})};var k={},me=q.exports;Object.defineProperty(k,"__esModule",{value:!0});var P=k.default=void 0,de=me(V),pe=K,ye=(0,de.default)((0,pe.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");P=k.default=ye;var y=(e=>(e.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME="groupByRowSortByTypeAndName",e.GROUP_BY_TYPE_SORT_BY_NAME="groupByTypeSortByName",e.SORT_BY_TYPE_AND_NAME="sortByTypeAndName",e.SORT_BY_NAME="sortByName",e))(y||{});const b={initial:0,self:1,ally:2,ally2:3,ally3:4},G=(e,t)=>{var n,o;return b[(n=e.reinforcement)!=null?n:"initial"]-b[(o=t.reinforcement)!=null?o:"initial"]},T=j([(e,t)=>g(e.shipDefinition).localeCompare(g(t.shipDefinition),Q()),G]),O=j([(e,t)=>A(e.shipDefinition.type,e.shipDefinition.subType)-A(t.shipDefinition.type,t.shipDefinition.subType),T,G]);function Se(e,t){switch(e){case"groupByRowSortByTypeAndName":return{groupedBy:e,groups:he(t.ships)};case"groupByTypeSortByName":return{groupedBy:e,groups:ge(t.ships)};case"sortByTypeAndName":return{groupedBy:e,groups:[{id:"all",name:c("fleetSetup.fleetFormation"),ships:t.ships.map(n=>({...n,carriedShips:[...n.carriedShips].sort(O)})).sort(O),count:t.ships.map(n=>n.count).reduce((n,o)=>n+o,0)}]};case"sortByName":return{groupedBy:e,groups:[{id:"all",name:c("fleetSetup.fleetFormation"),ships:t.ships.map(n=>({...n,carriedShips:[...n.carriedShips].sort(T)})).sort(T),count:t.ships.map(n=>n.count).reduce((n,o)=>n+o,0)}]};default:throw new Error(`Unknown group and sort option "${e}"`)}}function he(e){return[R.FRONT,R.MIDDLE,R.BACK].map(t=>{const n=e.filter(r=>r.shipDefinition.row===t).map(r=>({...r,carriedShips:[...r.carriedShips].sort(O)})).sort(O),o=n.map(r=>r.count).reduce((r,i)=>r+i,0);return{id:t,name:Z(t),ships:n,count:o}})}function ge(e){return[h.CARRIER,h.AUXILIARY,h.BATTLE_CRUISER,h.CRUISER,h.DESTROYER,h.FRIGATE].map(t=>{const n=e.filter(r=>r.shipDefinition.type===t).map(r=>({...r,carriedShips:[...r.carriedShips].sort(T)})).sort(T),o=n.map(r=>r.count).reduce((r,i)=>r+i,0);return{id:t,name:J(t),ships:n,count:o}})}function ve(e,t){const n=X()?" ":"";return[e.name,t.groups.filter(o=>o.ships.length>0).map(o=>[...t.groups.length>1?[c("fleetSetup.groupNameForSharing",{name:o.name})]:[],...o.ships.flatMap(r=>{const i=r.count*r.shipDefinition.cost,a=Re(r);switch(r.reinforcement){case"self":return[`${_(r.count)}\xD7\u3000${g(r.shipDefinition)}${n}${c("fleetSetup.reinforcementBrackets")}`,...a?[a]:[],...B(r.carriedShips)];case"ally":return[`${_(r.count)}\xD7\u3000${g(r.shipDefinition)}${n}${c("fleetSetup.orgReinforcementABrackets")}`,...a?[a]:[],...B(r.carriedShips)];case"ally2":return[`${_(r.count)}\xD7\u3000${g(r.shipDefinition)}${n}${c("fleetSetup.orgReinforcementBBrackets")}`,...a?[a]:[],...B(r.carriedShips)];case"ally3":return[`${_(r.count)}\xD7\u3000${g(r.shipDefinition)}${n}${c("fleetSetup.orgReinforcementCBrackets")}`,...a?[a]:[],...B(r.carriedShips)];default:return[`${_(r.count)}\xD7\u3000${g(r.shipDefinition)}${n}${c("fleetSetup.commandPointsValueBrackets",{value:i})}`,...a?[a]:[],...B(r.carriedShips)]}})].join(`
`)).join(`

`),[`${c("fleetSetup.reinforcementColon")}${n}${e.totalReinforcementCount}/${e.maxReinforcement}`,`${c("label.commandPointsColon")}${n}${e.totalCost}/${e.maxCost}`].join(`
`)].join(`

`)}function B(e){return e.map(t=>`\u3000\u3000 ${_(t.count)}\xD7\u3000${g(t.shipDefinition)}`)}function Re(e){if(e.moduleSelection===null||e.moduleSelection.static)return null;const t=["M","A","B","C"].flatMap(n=>{var a,s,u;const r=Object.keys((s=(a=e.moduleSelection)==null?void 0:a.groups[n])!=null?s:{}).find(l=>{var f;return((f=e.moduleSelection)==null?void 0:f.groups[n][l].usage)==="used"});if(!r)return[];const i=(u=e.moduleSelection)==null?void 0:u.groups[n][r];return!i||i.module.defaultModule?[]:i?[`${ee(e.shipDefinition.id,i.module)}\uFF08${i.module.id}\uFF09`]:[]});return t.length===0?null:t.map(n=>`\u3000\u3000 ${n}`).join(`
`)}function _(e){return e<10?`${e}`.padStart(3):`${e}`}const ke=e=>{const{value:t,onChange:n,buttonProps:o}=e;return m(w,{children:m(fe,{icon:m(P,{}),text:c("button.displayItems"),value:t,options:[{key:y.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME,text:c("fleetSetup.groupByRowSortByShipTypeAndName"),value:y.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME},{key:y.GROUP_BY_TYPE_SORT_BY_NAME,text:c("fleetSetup.groupByShipTypeSortByName"),value:y.GROUP_BY_TYPE_SORT_BY_NAME},{key:y.SORT_BY_TYPE_AND_NAME,text:c("fleetSetup.sortByShipTypeAndName"),value:y.SORT_BY_TYPE_AND_NAME},{key:y.SORT_BY_NAME,text:c("fleetSetup.sortByName"),value:y.SORT_BY_NAME}],onClick:n,buttonProps:o})})};function $e(){var e,t,n,o,r;return[(e=x("fleet1"))!=null?e:E(1),(t=x("fleet2"))!=null?t:E(2),(n=x("fleet3"))!=null?n:E(3),(o=x("fleet4"))!=null?o:E(4),(r=x("fleet5"))!=null?r:E(5)]}function Le(e){const t=JSON.stringify(_e(e));window.localStorage.setItem(e.key,t)}function x(e){const t=window.localStorage.getItem(e);if(!t)return null;const n=Ee(t);return n?Ce(Be(n),e):null}function Ce(e,t){const n=e.myListOnly===!0,o=e.ships.map(r=>{var i;return{...U({shipDefinition:M(r.shipId),usedModules:(i=r.usedModules)!=null?i:null,count:r.count,reinforcement:r.reinforcement,maxReinforcement:e.maxReinforcement}),carriedShips:r.carriedShips.map(a=>H({shipId:a.shipId,count:a.count,reinforcement:r.reinforcement}))}});return{key:t,name:e.name,ships:o,totalCost:S(o),totalReinforcementCount:v(o),maxReinforcement:e.maxReinforcement,maxCost:e.maxCost,myListOnly:n}}function _e(e){return{name:e.name,ships:e.ships.map(t=>({shipId:t.shipDefinition.id,usedModules:t.moduleSelection?xe(t.moduleSelection):void 0,carriedShips:t.carriedShips.map(n=>({shipId:n.shipDefinition.id,count:n.count})),count:t.count,reinforcement:t.reinforcement})),maxReinforcement:e.maxReinforcement,maxCost:e.maxCost,myListOnly:e.myListOnly}}function Be(e){const t=e.ships.reduce((o,r)=>{const i=I(r.shipId),a=M(i);if(!a)return o;let s;r.usedModules&&a.modules&&(s=r.usedModules.filter(l=>{var f;return!!((f=a.modules)!=null&&f.find(d=>d.id===l))}));const u=r.carriedShips.flatMap(l=>{const f=I(l.shipId);return M(f)?[{...l,shipId:f}]:[]});return[...o,{...r,shipId:i,usedModules:s,carriedShips:u}]},[]);return{...e,ships:t}}function xe(e){const t=[];return Object.keys(e.groups).forEach(n=>{Object.keys(e.groups[n]).forEach(o=>{e.groups[n][o].usage==="used"&&t.push(e.groups[n][o].module.id)})}),t}function Ee(e){try{return JSON.parse(e)}catch(t){return alert("ERROR - Failed to restore fleet setup"),console.error(t),null}}function E(e){return{key:`fleet${e}`,name:c("fleetSetup.defaultFleetNameWithNumber",{fleetNumber:e}),ships:[],totalCost:0,totalReinforcementCount:0,maxReinforcement:5,maxCost:400,myListOnly:!0}}function U(e){const{shipDefinition:t,usedModules:n,count:o,reinforcement:r,maxReinforcement:i,temporary:a}=e,s=Me(t,n),u=N(t,s),l=r===null||t.type===h.FIGHTER||t.type===h.CORVETTE?t.operationLimit:Math.min(t.operationLimit,i);return{shipDefinition:t,carrierCapabilities:u,carriedShips:[],count:Math.max(0,o),reinforcement:r,maxCount:l,moduleSelection:s,temporary:a}}function Me(e,t){if(!e.modules||e.modules.length===0)return null;const n=t!=null?t:e.modules.filter(r=>r.defaultModule).map(r=>r.id),o={static:e.staticModules===!0,groups:{}};return e.modules.forEach(r=>{if(o.groups[r.category]||(o.groups[r.category]={}),o.static){o.groups[r.category][r.id]={module:r,usage:"used"};return}o.groups[r.category][r.id]={module:r,usage:n.includes(r.id)?"used":"not_used"}}),o}function N(e,t){var a;let n=0,o=0,r=0,i=(a=e.carryCorvette)!=null?a:0;if(e.carryFighter)switch(e.carryFighterType){case C.LARGE_FIGHTER:{n+=e.carryFighter;break}case C.MEDIUM_FIGHTER:{o+=e.carryFighter;break}case C.SMALL_FIGHTER:{r+=e.carryFighter;break}}return t&&Object.keys(t.groups).forEach(s=>{var u;Object.keys((u=t.groups[s])!=null?u:{}).forEach(l=>{var d,D,p,F;const f=t.groups[s][l];if(f.usage==="used"){switch(f.module.carryFighterType){case C.LARGE_FIGHTER:{n+=(d=f.module.carryFighter)!=null?d:0;break}case C.MEDIUM_FIGHTER:{o+=(D=f.module.carryFighter)!=null?D:0;break}case C.SMALL_FIGHTER:{r+=(p=f.module.carryFighter)!=null?p:0;break}}i+=(F=f.module.carryCorvette)!=null?F:0}})}),{canCarry:n+o+r+i>0,carryUpToLargeFighter:n,carryUpToMediumFighter:o,carryUpToSmallFighter:r,carryCorvette:i}}function H(e){const{shipId:t,count:n,reinforcement:o,temporary:r}=e;return{shipDefinition:M(t),count:Math.max(0,n),reinforcement:o,temporary:r}}function Ae(e){const{shipId:t,count:n,reinforcement:o,fleetSetup:r,keepZero:i}=e,a=M(t);let s=!0;const u={...r,ships:r.ships.flatMap(l=>l.shipDefinition.id!==t||l.reinforcement!==o?l:(s=!1,!i&&n<=0?[]:[{...l,count:n}]))};return s?{...u,ships:[...u.ships,U({shipDefinition:a,usedModules:null,count:n,reinforcement:o,maxReinforcement:r.maxReinforcement})],totalCost:S(u.ships),totalReinforcementCount:v(u.ships)}:{...u,totalCost:S(u.ships),totalReinforcementCount:v(u.ships)}}function Ie(e){const{shipId:t,carrierShipId:n,count:o,reinforcement:r,fleetSetup:i,keepZero:a}=e;return{...i,ships:i.ships.map(s=>s.shipDefinition.id!==n||s.reinforcement!==r?s:s.carriedShips.find(u=>u.shipDefinition.id===t)?{...s,carriedShips:s.carriedShips.flatMap(u=>{if(u.shipDefinition.id!==t)return[u];if(u.reinforcement!==r)throw new Error("Detected invalid reinforcement");return!a&&o<=0?[]:[{...u,count:Math.max(0,o),reinforcement:r}]})}:{...s,carriedShips:[...s.carriedShips,H({shipId:t,count:o,reinforcement:r})]})}}function be(e){const{shipId:t,reinforcement:n,moduleSelection:o,fleetSetup:r}=e;return{...r,ships:r.ships.map(i=>i.shipDefinition.id!==t?i:n!=null&&n.includes("ally")?i.reinforcement===n?{...i,moduleSelection:o,carrierCapabilities:N(i.shipDefinition,o)}:i:!i.reinforcement||!i.reinforcement.includes("ally")?{...i,moduleSelection:o,carrierCapabilities:N(i.shipDefinition,o)}:i)}}function Ye(e,t,n){return{...n,groups:{...n.groups,[e]:Object.keys(n.groups[e]).reduce((o,r)=>{const i=n.groups[e][r];return{...o,[r]:r===t?{...i,usage:"used"}:{...i,usage:"not_used"}}},n.groups[e])}}}function S(e){return e.filter(t=>t.reinforcement===null).map(t=>t.count*t.shipDefinition.cost).reduce((t,n)=>t+n,0)}function v(e){return e.filter(t=>t.reinforcement!==null).map(t=>t.count).reduce((t,n)=>t+n,0)}function we(e){let t=0;const n=e.map(i=>i.count).reduce((i,a)=>i+a,0),o=Object.keys(te).reduce((i,a)=>({...i,[a]:0}),{}),r={[R.FRONT]:0,[R.MIDDLE]:0,[R.BACK]:0,[R.NONE]:0};return e.forEach(i=>{i.reinforcement===null&&(t+=i.count*i.shipDefinition.cost),o[i.shipDefinition.type]+=i.count,r[i.shipDefinition.row]+=i.count,i.carriedShips.length>0&&i.carriedShips.forEach(a=>{o[a.shipDefinition.type]+=a.count})}),{shipCount:n,shipCountByType:o,shipCountByRow:r,totalCost:t}}function je(e){var n,o;const t={};return e.name.length===0&&(t.name=c("validation.requiredField")),(!Number.isFinite(e.maxReinforcement)||e.maxReinforcement<0)&&(t.maxReinforcement=c("validation.invalidValue")),(!Number.isFinite(e.maxCost)||e.maxCost<300||e.maxCost>450)&&(t.maxCost=c("validation.invalidValue")),e.maxCost>400&&e.maxReinforcement>5&&(t.maxReinforcement=(n=t.maxReinforcement)!=null?n:c("fleetSetup.maxOneDockingEffect"),t.maxCost=(o=t.maxCost)!=null?o:c("fleetSetup.maxOneDockingEffect")),t}function Pe(e){const t={},n={},o={};return e.ships.forEach(r=>{const i=Y(r.shipDefinition.id,r.reinforcement);if(n[i]){const a=n[i];n[i]={count:r.reinforcement===null?r.count:a.count,reinforcementCount:r.reinforcement!==null?r.count:a.reinforcementCount,operationLimit:r.shipDefinition.operationLimit}}else n[i]={count:r.reinforcement===null?r.count:0,reinforcementCount:r.reinforcement!==null?r.count:0,operationLimit:r.shipDefinition.operationLimit};r.carriedShips.forEach(a=>{const s=Y(a.shipDefinition.id,r.reinforcement);o[s]?o[s].count+=a.count:o[s]={count:a.count,operationLimit:a.shipDefinition.operationLimit}})}),Object.keys(n).forEach(r=>{const i=n[r];i.count+i.reinforcementCount>i.operationLimit&&(t[r]=c("fleetSetup.exceedingTotalOperationLimit"))}),Object.keys(o).forEach(r=>{const i=o[r];i.count>i.operationLimit&&(t[r]=c("fleetSetup.exceedingTotalOperationLimit"))}),t}function Y(e,t){const n=t!=null&&t.includes("ally")?t:"self";return`${e}#${n}`}export{fe as B,y as G,ke as S,we as a,Se as b,Ae as c,Ie as d,be as e,ve as f,$e as g,E as h,je as i,U as j,Ye as k,Y as l,H as m,Le as s,Pe as v};