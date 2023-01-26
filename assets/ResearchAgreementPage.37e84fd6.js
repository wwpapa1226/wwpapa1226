import{A as ue,C as he,D as pe,K as me,_ as P,r as y,O as fe,G as ge,I as Se,k as r,J as be,ai as ye,bs as Oe,bt as q,bu as Y,m as _e,bv as Ae,g as T,v as Ee,bf as Ce,bd as ve,a0 as $,a2 as M,a1 as z,X as De,be as Be,bw as Ge,c as Le,ax as ze,t as d,j as S,q as x,T as f,aB as E,a6 as X,a7 as ee,a8 as te,aI as Ue,u as je,bx as Ve,by as He,F as D,bz as Q,f as qe,b as Ke,P as Te,Q as xe,R as Fe,ab as W,B as we,bp as Je,w as O,aa as Ze}from"./index.e87314bd.js";import{a as v,N as Qe,P as Ye}from"./PageContent.88b25430.js";import{u as Xe,T as et}from"./useTable.8270119e.js";import{E as tt}from"./ExpandStack.5d76ba3c.js";import{T as B}from"./Tooltip.b5eabe05.js";import{T as rt,a as oe}from"./ToggleButtonGroup.124c2610.js";import{F as G,I as H,S as L}from"./Select.5d3c8607.js";import{R as at}from"./ResponsiveDialog.78959fc0.js";import{P as nt}from"./PageFooter.5f40460d.js";import"./sorting.c6946657.js";import"./TableRow.051756ab.js";import"./useFormControl.255f141d.js";function it(e){return ue("MuiListSubheader",e)}he("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const lt=["className","color","component","disableGutters","disableSticky","inset"],st=e=>{const{classes:t,color:a,disableGutters:s,inset:l,disableSticky:o}=e,c={root:["root",a!=="default"&&`color${me(a)}`,!s&&"gutters",l&&"inset",!o&&"sticky"]};return Se(c,it,t)},ot=pe("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.color!=="default"&&t[`color${me(a.color)}`],!a.disableGutters&&t.gutters,a.inset&&t.inset,!a.disableSticky&&t.sticky]}})(({theme:e,ownerState:t})=>P({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(e.vars||e).palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},t.color==="primary"&&{color:(e.vars||e).palette.primary.main},t.color==="inherit"&&{color:"inherit"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.inset&&{paddingLeft:72},!t.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(e.vars||e).palette.background.paper})),ct=y.exports.forwardRef(function(t,a){const s=fe({props:t,name:"MuiListSubheader"}),{className:l,color:o="default",component:c="li",disableGutters:h=!1,disableSticky:m=!1,inset:p=!1}=s,g=ge(s,lt),i=P({},s,{color:o,component:c,disableGutters:h,disableSticky:m,inset:p}),n=st(i);return r(ot,P({as:c,className:be(n.root,l),ref:a,ownerState:i},g))});var K=ct;const dt=y.exports.createContext();var ce=dt;function ut(e){return ue("MuiGrid",e)}const ht=[0,1,2,3,4,5,6,7,8,9,10],pt=["column-reverse","column","row-reverse","row"],mt=["nowrap","wrap-reverse","wrap"],_=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],U=he("MuiGrid",["root","container","item","zeroMinWidth",...ht.map(e=>`spacing-xs-${e}`),...pt.map(e=>`direction-xs-${e}`),...mt.map(e=>`wrap-xs-${e}`),..._.map(e=>`grid-xs-${e}`),..._.map(e=>`grid-sm-${e}`),..._.map(e=>`grid-md-${e}`),..._.map(e=>`grid-lg-${e}`),..._.map(e=>`grid-xl-${e}`)]),ft=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function N(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function gt({theme:e,ownerState:t}){let a;return e.breakpoints.keys.reduce((s,l)=>{let o={};if(t[l]&&(a=t[l]),!a)return s;if(a===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(a==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=q({values:t.columns,breakpoints:e.breakpoints.values}),h=typeof c=="object"?c[l]:c;if(h==null)return s;const m=`${Math.round(a/h*1e8)/1e6}%`;let p={};if(t.container&&t.item&&t.columnSpacing!==0){const g=e.spacing(t.columnSpacing);if(g!=="0px"){const i=`calc(${m} + ${N(g)})`;p={flexBasis:i,maxWidth:i}}}o=P({flexBasis:m,flexGrow:0,maxWidth:m},p)}return e.breakpoints.values[l]===0?Object.assign(s,o):s[e.breakpoints.up(l)]=o,s},{})}function St({theme:e,ownerState:t}){const a=q({values:t.direction,breakpoints:e.breakpoints.values});return Y({theme:e},a,s=>{const l={flexDirection:s};return s.indexOf("column")===0&&(l[`& > .${U.item}`]={maxWidth:"none"}),l})}function $e({breakpoints:e,values:t}){let a="";Object.keys(t).forEach(l=>{a===""&&t[l]!==0&&(a=l)});const s=Object.keys(e).sort((l,o)=>e[l]-e[o]);return s.slice(0,s.indexOf(a))}function bt({theme:e,ownerState:t}){const{container:a,rowSpacing:s}=t;let l={};if(a&&s!==0){const o=q({values:s,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=$e({breakpoints:e.breakpoints.values,values:o})),l=Y({theme:e},o,(h,m)=>{var p;const g=e.spacing(h);return g!=="0px"?{marginTop:`-${N(g)}`,[`& > .${U.item}`]:{paddingTop:N(g)}}:(p=c)!=null&&p.includes(m)?{}:{marginTop:0,[`& > .${U.item}`]:{paddingTop:0}}})}return l}function yt({theme:e,ownerState:t}){const{container:a,columnSpacing:s}=t;let l={};if(a&&s!==0){const o=q({values:s,breakpoints:e.breakpoints.values});let c;typeof o=="object"&&(c=$e({breakpoints:e.breakpoints.values,values:o})),l=Y({theme:e},o,(h,m)=>{var p;const g=e.spacing(h);return g!=="0px"?{width:`calc(100% + ${N(g)})`,marginLeft:`-${N(g)}`,[`& > .${U.item}`]:{paddingLeft:N(g)}}:(p=c)!=null&&p.includes(m)?{}:{width:"100%",marginLeft:0,[`& > .${U.item}`]:{paddingLeft:0}}})}return l}function Ct(e,t,a={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[a[`spacing-xs-${String(e)}`]];const s=[];return t.forEach(l=>{const o=e[l];Number(o)>0&&s.push(a[`spacing-${l}-${String(o)}`])}),s}const vt=pe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{container:s,direction:l,item:o,spacing:c,wrap:h,zeroMinWidth:m,breakpoints:p}=a;let g=[];s&&(g=Ct(c,p,t));const i=[];return p.forEach(n=>{const b=a[n];b&&i.push(t[`grid-${n}-${String(b)}`])}),[t.root,s&&t.container,o&&t.item,m&&t.zeroMinWidth,...g,l!=="row"&&t[`direction-xs-${String(l)}`],h!=="wrap"&&t[`wrap-xs-${String(h)}`],...i]}})(({ownerState:e})=>P({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),St,bt,yt,gt);function Tt(e,t){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const a=[];return t.forEach(s=>{const l=e[s];if(Number(l)>0){const o=`spacing-${s}-${String(l)}`;a.push(o)}}),a}const xt=e=>{const{classes:t,container:a,direction:s,item:l,spacing:o,wrap:c,zeroMinWidth:h,breakpoints:m}=e;let p=[];a&&(p=Tt(o,m));const g=[];m.forEach(n=>{const b=e[n];b&&g.push(`grid-${n}-${String(b)}`)});const i={root:["root",a&&"container",l&&"item",h&&"zeroMinWidth",...p,s!=="row"&&`direction-xs-${String(s)}`,c!=="wrap"&&`wrap-xs-${String(c)}`,...g]};return Se(i,ut,t)},Ft=y.exports.forwardRef(function(t,a){const s=fe({props:t,name:"MuiGrid"}),{breakpoints:l}=ye(),o=Oe(s),{className:c,columns:h,columnSpacing:m,component:p="div",container:g=!1,direction:i="row",item:n=!1,rowSpacing:b,spacing:C=0,wrap:F="wrap",zeroMinWidth:I=!1}=o,u=ge(o,ft),w=b||C,We=m||C,ke=y.exports.useContext(ce),ne=g?h||12:ke,ie={},le=P({},u);l.keys.forEach(V=>{u[V]!=null&&(ie[V]=u[V],delete le[V])});const se=P({},o,{columns:ne,container:g,direction:i,item:n,rowSpacing:w,columnSpacing:We,wrap:F,zeroMinWidth:I,spacing:C},ie,{breakpoints:l.keys}),Ne=xt(se);return r(ce.Provider,{value:ne,children:r(vt,P({ownerState:se,className:be(Ne.root,c),as:p,ref:a},le))})});var R=Ft,j=(e=>(e.ONE="one",e.TWO_PLUS="twoPlus",e))(j||{});function wt(e){return _e.filter(t=>{var a;return e===j.ONE&&((a=t.tags)==null?void 0:a.includes(Ae.PHASE_TWO_BLUEPRINT))?!1:!!t.researchManufacturer||!!t.researchStrategyTypes||!!t.researchTacticTypes})}function $t(e,t){const a=[],s=[],l=[],o=[];return e.forEach(c=>{const h=Ee(c,t);if(h.length>0){s.push({shipDefinition:c,modules:h});return}if(Ce(c.id,t)){l.push(c);return}if(ve(c.id,t)){a.push(c);return}o.push(c)}),{wantedShips:a.sort((c,h)=>T(c).localeCompare(T(h))),shipsWithWantedModule:s.sort((c,h)=>T(c.shipDefinition).localeCompare(T(h.shipDefinition))),possessedShips:l.sort((c,h)=>T(c).localeCompare(T(h))),remainingShips:o.sort((c,h)=>T(c).localeCompare(T(h)))}}function Mt(){const e=[$.NOMA_SHIPPING_GROUP,$.JUPITER_INDUSTRIES,$.ANTONIOS_CONSORTIUM,$.DAWN_ACCORD,null],t=[M.OUTSTANDING_FIREPOWER,M.SUSTAINED_COMBAT,M.STRATEGY_AND_SUPPORT,M.FIGHTER_AND_CORVETTE,null],a=[z.PROJECTILE_WEAPONS,z.DIRECT_FIRE_WEAPONS,null];return e.flatMap(s=>a.flatMap(l=>t.map(o=>({shipId:null,manufacturerFilter:s,strategyTypeFilter:o,tacticTypeFilter:l}))))}let Rt=0;function Pt(e,t,a){const s=t.filter(n=>!(e.manufacturerFilter!==null&&n.researchManufacturer!==e.manufacturerFilter||e.strategyTypeFilter!==null&&n.researchStrategyTypes&&!n.researchStrategyTypes.includes(e.strategyTypeFilter)||e.tacticTypeFilter!==null&&n.researchTacticTypes&&!n.researchTacticTypes.includes(e.tacticTypeFilter))),l=s.reduce((n,b)=>n+b.weight,0),o=s.map(n=>{const b=Ce(n.id,a),C=n.weight/l,F=De(n,a);return{shipDefinition:n,chance:C,formula:`${n.weight} / ${l}`,possessed:b,wished:ve(n.id,a),unwished:Be(n.id,a),modules:F.map(I=>({module:I,chance:C/F.length,formula:`${kt(C)} / ${F.length}`,wished:Ge(I.id,n.id,a)}))}});let c=0,h=0,m=0,p=0,g=0;o.forEach(n=>{if(n.possessed){if(n.modules.length>0){h+=n.chance,n.modules.find(b=>b.wished)&&(m+=n.chance);return}g+=n.chance;return}else{c+=n.chance,n.wished&&(m+=n.chance),n.unwished&&(p+=n.chance);return}});const i=Object.values(Le).map(n=>{const b=n;return{shipType:b,chance:o.filter(C=>C.shipDefinition.type===b).map(C=>C.chance).reduce((C,F)=>C+F,0)}}).filter(n=>n.chance>0);return{id:`${Rt++}`,filterState:e,shipChances:o,shipTypeChances:i,totalShipChance:c,totalModuleChance:h,wishedShipChance:m,unwishedShipChance:p,techPointChance:g}}function It(e){var t,a,s;return`${(t=e.manufacturerFilter)!=null?t:"null"}.${(a=e.strategyTypeFilter)!=null?a:"null"}.${(s=e.tacticTypeFilter)!=null?s:"null"}`}function Wt(e,t){if(t.shipId!==null)return e.filter(l=>!l.filterState.manufacturerFilter&&!l.filterState.strategyTypeFilter&&!l.filterState.tacticTypeFilter?!1:l.shipChances.find(o=>o.shipDefinition.id===t.shipId)).sort((l,o)=>{var m,p,g,i;const c=(p=(m=l.shipChances.find(n=>n.shipDefinition.id===t.shipId))==null?void 0:m.chance)!=null?p:0;return((i=(g=o.shipChances.find(n=>n.shipDefinition.id===t.shipId))==null?void 0:g.chance)!=null?i:0)-c});const a=[],s=e.filter(l=>t.manufacturerFilter!==null&&l.filterState.manufacturerFilter!==t.manufacturerFilter||t.strategyTypeFilter!==null&&l.filterState.strategyTypeFilter!==t.strategyTypeFilter||t.tacticTypeFilter!==null&&l.filterState.tacticTypeFilter!==t.tacticTypeFilter||!l.filterState.manufacturerFilter&&!l.filterState.strategyTypeFilter&&!l.filterState.tacticTypeFilter?!1:l.filterState.manufacturerFilter===t.manufacturerFilter&&l.filterState.strategyTypeFilter===t.strategyTypeFilter&&l.filterState.tacticTypeFilter===t.tacticTypeFilter?(a.push(l),!1):l);return[...a,...s]}function kt(e){return`${Number((e*100).toFixed(3))} %`}const Nt=e=>{const{configurations:t,filterState:a,onClickConfiguration:s}=e,{table:l,setTableData:o}=Xe(),c=ye(),m=ze(c.breakpoints.down("sm"))?"38px":"50px",p=a.shipId;return y.exports.useEffect(()=>{const g={columns:[{id:"filter",renderHeader:()=>d("label.researchDirection"),renderCell:i=>S(x,{sx:{minWidth:"120px"},children:[i.filterState.manufacturerFilter&&r(f,{variant:"body2",children:r(E,{onClick:()=>s(i),children:X(i.filterState.manufacturerFilter)})}),i.filterState.tacticTypeFilter&&r(f,{variant:"body2",children:r(E,{onClick:()=>s(i),children:ee(i.filterState.tacticTypeFilter)})}),i.filterState.strategyTypeFilter&&r(f,{variant:"body2",children:r(E,{onClick:()=>s(i),children:te(i.filterState.strategyTypeFilter)})}),!i.filterState.manufacturerFilter&&!i.filterState.strategyTypeFilter&&!i.filterState.tacticTypeFilter&&r(f,{variant:"body2",children:r(E,{onClick:()=>s(i),children:d("label.notSelected")})})]})},...p?[{id:"selectedShipChance",renderHeader:()=>d("label.selectedShip"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(J(i,p))})}),sortFn:[(i,n)=>J(i,p)-J(n,p),(i,n)=>i.totalShipChance-n.totalShipChance,(i,n)=>n.techPointChance-i.techPointChance,(i,n)=>i.wishedShipChance-n.wishedShipChance,(i,n)=>n.unwishedShipChance-i.unwishedShipChance]}]:[],{id:"totalShipChance",renderHeader:()=>d("label.newShip"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(i.totalShipChance)})}),sortFn:[(i,n)=>i.totalShipChance-n.totalShipChance,(i,n)=>n.techPointChance-i.techPointChance,(i,n)=>i.wishedShipChance-n.wishedShipChance,(i,n)=>n.unwishedShipChance-i.unwishedShipChance]},{id:"totalModuleChance",renderHeader:()=>d("label.additionalSystemModule"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(i.totalModuleChance)})}),sortFn:[(i,n)=>i.totalModuleChance-n.totalModuleChance,(i,n)=>i.totalShipChance-n.totalShipChance,(i,n)=>n.techPointChance-i.techPointChance,(i,n)=>i.wishedShipChance-n.wishedShipChance,(i,n)=>n.unwishedShipChance-i.unwishedShipChance]},{id:"techPointChance",renderHeader:()=>d("label.techPoints"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(i.techPointChance)})}),sortFn:[(i,n)=>i.techPointChance-n.techPointChance,(i,n)=>n.totalShipChance-i.totalShipChance,(i,n)=>n.wishedShipChance-i.wishedShipChance,(i,n)=>i.unwishedShipChance-n.unwishedShipChance]},{id:"wishedShipChance",renderHeader:()=>d("label.wantedBlueprint"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(i.wishedShipChance)})}),sortFn:[(i,n)=>i.wishedShipChance-n.wishedShipChance,(i,n)=>n.techPointChance-i.techPointChance,(i,n)=>i.totalShipChance-n.totalShipChance,(i,n)=>n.unwishedShipChance-i.unwishedShipChance]},{id:"unwishedShipChance",renderHeader:()=>d("label.unwantedBlueprint"),renderCell:i=>r(x,{sx:{minWidth:m},children:r(f,{variant:"body2",children:k(i.unwishedShipChance)})}),sortFn:[(i,n)=>i.unwishedShipChance-n.unwishedShipChance,(i,n)=>n.totalShipChance-i.totalShipChance,(i,n)=>n.wishedShipChance-i.wishedShipChance,(i,n)=>i.techPointChance-n.techPointChance]}],data:t,rowIdFn:i=>It(i.filterState)};o(g)},[o,t,p,s,m]),r(et,{table:l,size:"small"})};function k(e){return`${Number((e*100).toFixed(2))} %`}function J(e,t){var a,s;return(s=(a=e.shipChances.find(l=>l.shipDefinition.id===t))==null?void 0:a.chance)!=null?s:0}const Ot=e=>{const{shipDefinition:t}=e,{openShipDetailDialog:a}=Ue();return r(f,{variant:"body2",component:"span",children:r(E,{onClick:()=>{a(t.id)},children:T(t)})})},Z={[$.JUPITER_INDUSTRIES]:35,[$.NOMA_SHIPPING_GROUP]:35,[$.ANTONIOS_CONSORTIUM]:40,[$.DAWN_ACCORD]:25,[M.OUTSTANDING_FIREPOWER]:55,[M.SUSTAINED_COMBAT]:50,[M.STRATEGY_AND_SUPPORT]:55,[M.FIGHTER_AND_CORVETTE]:60,[z.PROJECTILE_WEAPONS]:45,[z.DIRECT_FIRE_WEAPONS]:40};function _t(e){const t=At(e);return d("label.daysAndHours",{days:Math.floor(t/24),hours:Math.round(t%24)})}function At(e){var o,c,h;const t=[...e.manufacturerFilter?[e.manufacturerFilter]:[],...e.tacticTypeFilter?[e.tacticTypeFilter]:[],...e.strategyTypeFilter?[e.strategyTypeFilter]:[]],a=t[0]&&(o=Z[t[0]])!=null?o:0,s=t[1]&&(c=Z[t[1]])!=null?c:0,l=t[2]&&(h=Z[t[2]])!=null?h:0;return t.length===3?a+(a+s)+a*s*l/250:t.length===2?a+(a+s):a}const Me=e=>{const{configuration:t}=e,{userSettings:a}=je();return r(Ve,{rows:[{key:`${t.id}.wishedShipChance`,label:d("label.wantedBlueprint"),value:A(t.wishedShipChance),separatorAfter:!0},...t.techPointChance>0?[{key:`${t.id}.techPointChance`,label:r(f,{variant:"body2",sx:t.techPointChance>0?{color:"red"}:void 0,children:d("label.techPoints")}),value:r(f,{variant:"body2",sx:t.techPointChance>0?{color:"red"}:void 0,children:A(t.techPointChance)}),separatorAfter:!0}]:[],...t.shipChances.flatMap(s=>{const l=s.possessed&&s.modules.length>0,o=s.wished||He(s.shipDefinition.id,a);return[{key:`${t.id}.${s.shipDefinition.id}`,label:S(D,{children:[r(Ot,{shipDefinition:s.shipDefinition}),Q()&&r("span",{children:"\xA0"}),l&&r(f,{variant:"body2",component:"span",children:d("label.additionalSystemModuleBrackets")}),!l&&s.possessed&&r(f,{variant:"body2",component:"span",children:d("label.techPointsBrackets")}),o&&r(B,{arrow:!0,disableFocusListener:!0,title:`${d("label.wantedBlueprint")}`,children:r(f,{variant:"body2",component:"span",sx:{color:"#ffc107",marginLeft:"4px"},children:"\u2605"})})]}),value:r(B,{arrow:!0,disableFocusListener:!0,title:S(D,{children:[r(f,{variant:"body2",gutterBottom:!0,children:`[${d("label.probabilityWeight")}] / [${d("label.total")}]`}),r(f,{variant:"body2",children:s.formula})]}),children:r(f,{variant:"body2",sx:{color:!l&&s.possessed?"red":void 0},children:A(s.chance)})})},...l?s.modules.map(c=>({key:`${t.id}.${s.shipDefinition.id}.${c.module.id}`,label:S(D,{children:[r(f,{variant:"body2",component:"span",color:"text.secondary",sx:{opacity:.5},children:"\u2517"}),Q()&&r("span",{children:"\xA0"}),r(f,{variant:"body2",component:"span",color:"text.secondary",children:`${c.module.category}${c.module.categoryNumber} ${qe(s.shipDefinition.id,c.module)}`}),c.wished&&r(B,{arrow:!0,disableFocusListener:!0,title:`${d("label.wantedAdditionalSystemModule")}`,children:r(f,{variant:"body2",component:"span",sx:{color:"#ffc107",marginLeft:"4px"},children:"\u2605"})})]}),value:r(B,{arrow:!0,disableFocusListener:!0,title:S(D,{children:[r(f,{variant:"body2",gutterBottom:!0,children:`[${d("label.shipProbability")}] / [${d("label.remainingAdditionalSystemModules")}]`}),r(f,{variant:"body2",children:c.formula})]}),children:r(f,{variant:"body2",color:"text.secondary",children:A(c.chance)})})})):[]]}),...t.shipTypeChances.map((s,l)=>({key:`${t.id}.${s.shipType}`,label:Ke(s.shipType),value:A(s.chance),separatorBefore:l===0})),{key:`${t.id}.duration`,label:d("researchAgreement.researchTime"),value:_t(t.filterState),separatorBefore:!0}],rowGap:1})};function A(e){return`${Number((e*100).toFixed(3))} %`}const Re=e=>{var s,l;const{configuration:t,filterState:a}=e;return S(f,{variant:"body2",children:[[...t.filterState.manufacturerFilter!==null?[X(t.filterState.manufacturerFilter)]:[],...t.filterState.tacticTypeFilter!==null?[ee(t.filterState.tacticTypeFilter)]:[],...t.filterState.strategyTypeFilter!==null?[te(t.filterState.strategyTypeFilter)]:[],...!t.filterState.manufacturerFilter&&!t.filterState.strategyTypeFilter&&!t.filterState.tacticTypeFilter?[d("label.notSelected")]:[]].map(o=>`\u300C${o}\u300D`).join("+"),a.shipId===null&&t.wishedShipChance>0&&r(B,{arrow:!0,disableFocusListener:!0,title:`${d("label.probabilityForWantedBlueprintColon")}${de(t.wishedShipChance)}`,children:r(f,{variant:"body2",component:"span",sx:{color:"#ffc107",marginLeft:"4px"},children:"\u2605"})}),a.shipId!==null&&r(f,{variant:"body2",component:"span",children:`\u3000\u21D2\u3000${de((l=(s=t.shipChances.find(o=>o.shipDefinition.id===a.shipId))==null?void 0:s.chance)!=null?l:0)}`})]})};function de(e){return`${Number((e*100).toFixed(3))} %`}const Et=e=>{const{configurations:t,filterState:a}=e,s=!!a.manufacturerFilter||!!a.strategyTypeFilter||!!a.tacticTypeFilter;return r(tt,{expandables:t.map(l=>({id:l.id,initiallyOpened:s,summary:r(Re,{configuration:l,filterState:a}),details:r(Me,{configuration:l})})),unmount:!0})};var re={},Dt=xe.exports;Object.defineProperty(re,"__esModule",{value:!0});var Pe=re.default=void 0,Bt=Dt(Te),Gt=Fe,Lt=(0,Bt.default)((0,Gt.jsx)("path",{d:"M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z"}),"AccountTree");Pe=re.default=Lt;var ae={},zt=xe.exports;Object.defineProperty(ae,"__esModule",{value:!0});var Ie=ae.default=void 0,Ut=zt(Te),jt=Fe,Vt=(0,Ut.default)((0,jt.jsx)("path",{d:"M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"}),"TableRows");Ie=ae.default=Vt;const Ht=e=>{const{mode:t,onChange:a}=e;return S(rt,{value:t,exclusive:!0,onChange:(l,o)=>{a(o)},size:"small","aria-label":"view mode",children:[r(oe,{value:"ships","aria-label":"ships",children:r(Pe,{})}),r(oe,{value:"table","aria-label":"table",children:r(Ie,{})})]})},qt=e=>{var b,C,F,I;const{filterState:t,shipFilterOptions:a,onChange:s}=e,[l,o]=y.exports.useState(t),[c,h]=y.exports.useTransition(),m=u=>{o(w=>({...w,shipId:u.target.value===""?null:u.target.value,manufacturerFilter:null,strategyTypeFilter:null,tacticTypeFilter:null}))},p=u=>{o(w=>({...w,shipId:null,manufacturerFilter:u.target.value===""?null:u.target.value}))},g=u=>{o(w=>({...w,shipId:null,strategyTypeFilter:u.target.value===""?null:u.target.value}))},i=u=>{o(w=>({...w,shipId:null,tacticTypeFilter:u.target.value===""?null:u.target.value}))},n=()=>{o(u=>({...u,shipId:null,manufacturerFilter:null,strategyTypeFilter:null,tacticTypeFilter:null}))};return y.exports.useEffect(()=>{h(()=>{s(l)})},[l,s]),S(R,{container:!0,spacing:2,children:[r(R,{item:!0,xs:12,sm:8,md:4,children:S(G,{fullWidth:!0,size:"small",children:[r(H,{id:"manufacturer-select-label",children:d("label.researchManufacturer")}),S(L,{labelId:"manufacturer-select-label",value:(b=l.manufacturerFilter)!=null?b:"",label:d("label.researchManufacturer"),onChange:p,children:[r(v,{value:"",children:d("label.notSelected")}),r(W,{}),Object.values($).map(u=>r(v,{value:u,children:X(u)},u))]})]})}),r(R,{item:!0,xs:12,sm:8,md:4,children:S(G,{fullWidth:!0,size:"small",children:[r(H,{id:"tactics-select-label",children:d("label.researchTacticType")}),S(L,{labelId:"tactics-select-label",value:(C=l.tacticTypeFilter)!=null?C:"",label:d("label.researchTacticType"),onChange:i,children:[r(v,{value:"",children:d("label.notSelected")}),r(W,{}),Object.values(z).map(u=>r(v,{value:u,children:ee(u)},u))]})]})}),r(R,{item:!0,xs:12,sm:8,md:4,children:S(G,{fullWidth:!0,size:"small",children:[r(H,{id:"strategy-select-label",children:d("label.researchStrategyType")}),S(L,{labelId:"strategy-select-label",value:(F=l.strategyTypeFilter)!=null?F:"",label:d("label.researchStrategyType"),onChange:g,children:[r(v,{value:"",children:d("label.notSelected")}),r(W,{}),Object.values(M).map(u=>r(v,{value:u,children:te(u)},u))]})]})}),r(R,{item:!0,xs:12,sm:8,children:S(G,{fullWidth:!0,size:"small",children:[r(H,{id:"ship-select-label",children:d("label.ship")}),S(L,{labelId:"ship-select-label",value:(I=l.shipId)!=null?I:"",label:d("label.ship"),onChange:m,children:[r(v,{value:"",children:d("label.notSelected")}),a.wantedShips.length+a.shipsWithWantedModule.length>0&&r(W,{}),a.wantedShips.length+a.shipsWithWantedModule.length>0&&r(K,{disableSticky:!0,children:d("label.wantedBlueprintColon")}),a.wantedShips.map(u=>S(v,{value:u.id,children:[T(u),r(f,{variant:"body1",component:"span",sx:{color:"#ffc107",marginLeft:"4px"},children:"\u2605"})]},u.id)),a.shipsWithWantedModule.map(({shipDefinition:u,modules:w})=>S(v,{value:u.id,children:[T(u),Q()&&r("span",{children:"\xA0"}),d("label.additionalSystemModuleBrackets"),r(f,{variant:"body1",component:"span",sx:{color:"#ffc107",marginLeft:"4px"},children:"\u2605"})]},u.id)),a.remainingShips.length>0&&r(W,{}),a.remainingShips.length>0&&r(K,{disableSticky:!0,children:d("label.acquirableBlueprintColon")}),a.remainingShips.map(u=>r(v,{value:u.id,children:T(u)},u.id)),a.possessedShips.length>0&&r(W,{}),a.possessedShips.length>0&&r(K,{disableSticky:!0,children:d("label.acquiredBlueprintColon")}),a.possessedShips.map(u=>r(v,{value:u.id,children:T(u)},u.id))]})]})}),r(R,{item:!0,xs:12,sm:4,sx:{display:"flex",justifyContent:"end"},children:r(we,{variant:"outlined",onClick:n,children:d("button.reset")})})]})},Kt=e=>{const{season:t,seasonDisabled:a,onChangeSeason:s}=e,l=y.exports.useCallback(o=>{s(o.target.value)},[s]);return r(R,{container:!0,spacing:2,children:r(R,{item:!0,xs:12,sm:8,md:4,children:r(G,{fullWidth:!0,size:"small",children:S(L,{value:t,label:null,onChange:l,disabled:a,children:[r(v,{value:j.ONE,children:d("researchAgreement.seasonOne")}),r(v,{value:j.TWO_PLUS,children:d("researchAgreement.seasonTwoPlus")})]})})})})},Jt=y.exports.memo(Nt),Zt=y.exports.memo(Et),cr=()=>{const[e,t]=y.exports.useState("ships"),[a,s]=y.exports.useState(j.TWO_PLUS),l=y.exports.useMemo(()=>wt(a),[a]),o=y.exports.useMemo(()=>Je(),[]),c=y.exports.useMemo(()=>Mt(),[]),h=y.exports.useMemo(()=>c.map(C=>Pt(C,l,o)),[c,l]),m=y.exports.useMemo(()=>$t(l,o),[l,o]),[p,g]=y.exports.useState({shipId:null,manufacturerFilter:null,strategyTypeFilter:null,tacticTypeFilter:null}),i=y.exports.useMemo(()=>Wt(h,p),[h,p]),[n,b]=y.exports.useState(null);return S(D,{children:[r(Qe,{currentRoute:"/researchAgreement"}),r(Ye,{children:r(x,{p:1,children:S(O,{spacing:1,children:[S(O,{pt:1,pb:1,spacing:2,children:[r(f,{variant:"body2",children:d("researchAgreement.pageDescription1")}),r(f,{variant:"body2",children:d("researchAgreement.pageDescription2")}),r(f,{variant:"body2",children:d("researchAgreement.pageDescription3")})]}),r(Ze,{children:r(x,{p:2,children:S(O,{spacing:4,children:[S(O,{spacing:2,children:[r(f,{variant:"body2",children:d("researchAgreement.environment")}),r("div",{children:r(Kt,{season:a,seasonDisabled:p.shipId!==null,onChangeSeason:s})})]}),S(O,{spacing:2,children:[r(f,{variant:"body2",children:d("label.researchDirection")}),r("div",{children:r(qt,{filterState:p,onChange:g,shipFilterOptions:m})}),r(x,{sx:{display:"flex",justifyContent:"end"},children:r(Ht,{mode:e,onChange:t})})]})]})})}),e==="ships"&&r(Zt,{configurations:i,filterState:p})]})})}),e==="table"&&r(x,{p:1,children:r(Jt,{configurations:i,filterState:p,onClickConfiguration:b})}),n&&r(at,{maxWidth:"sm",title:r(Re,{configuration:n,filterState:p}),content:r(Me,{configuration:n}),actions:r(we,{variant:"outlined",onClick:()=>b(null),children:d("button.close")}),onClose:()=>b(null)}),r(nt,{disableContainer:e==="table"})]})};export{cr as ResearchAgreementPage,cr as default};
