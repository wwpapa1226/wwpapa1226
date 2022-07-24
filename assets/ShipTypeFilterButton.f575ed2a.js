import{m as X,n as Z,o as G,p as pe,_ as m,r as T,q as ee,v as Ie,w as te,a as k,j as n,x as Se,y as z,z as H,A as Oe,C as Te,D as me,E as re,G as ae,H as se,P as W,c as Ce,W as L,I as ne,J as Re,K as _e,d as C,L as g,M as u,R as d,N as h,O as y,Q as P,t as Ee,U as Ne,V as Fe,X as be,Y as Pe,F as Ae,B,Z as xe,b as Q,$ as ke,S as ye}from"./index.5b9e6c17.js";import{B as ve,C as Me,g as De,L as Ue}from"./domUtils.fcdde9fd.js";import{u as Be,P as ge,G as we,M as $e,a as We}from"./MenuItem.0a801ece.js";import{L as Ge}from"./PageContent.59c6dd11.js";function ze(e){return X("PrivateSwitchBase",e)}Z("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const He=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Le=e=>{const{classes:t,checked:r,disabled:a,edge:s}=e,o={root:["root",r&&"checked",a&&"disabled",s&&`edge${z(s)}`],input:["input"]};return te(o,ze,t)},je=G(pe,{skipSx:!0})(({ownerState:e})=>m({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ke=G("input",{skipSx:!0})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Je=T.exports.forwardRef(function(t,r){const{autoFocus:a,checked:s,checkedIcon:o,className:f,defaultChecked:I,disabled:c,disableFocusRipple:l=!1,edge:R=!1,icon:p,id:S,inputProps:v,inputRef:_,name:A,onBlur:E,onChange:F,onFocus:i,readOnly:x,required:D,tabIndex:b,type:U,value:J}=t,ce=ee(t,He),[q,ie]=Ie({controlled:s,default:Boolean(I),name:"SwitchBase",state:"checked"}),N=Be(),ue=O=>{i&&i(O),N&&N.onFocus&&N.onFocus(O)},de=O=>{E&&E(O),N&&N.onBlur&&N.onBlur(O)},he=O=>{if(O.nativeEvent.defaultPrevented)return;const Y=O.target.checked;ie(Y),F&&F(O,Y)};let M=c;N&&typeof M=="undefined"&&(M=N.disabled);const fe=U==="checkbox"||U==="radio",w=m({},t,{checked:q,disabled:M,disableFocusRipple:l,edge:R}),V=Le(w);return k(je,m({component:"span",className:Se(V.root,f),centerRipple:!0,focusRipple:!l,disabled:M,tabIndex:null,role:void 0,onFocus:ue,onBlur:de,ownerState:w,ref:r},ce,{children:[n(Ke,m({autoFocus:a,checked:s,defaultChecked:I,className:V.input,disabled:M,id:fe&&S,name:A,onChange:he,readOnly:x,ref:_,required:D,ownerState:w,tabIndex:b,type:U},U==="checkbox"&&J===void 0?{}:{value:J},v)),q?o:p]}))});var qe=Je,Ve=H(n("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Ye=H(n("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Qe=H(n("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Xe(e){return X("MuiCheckbox",e)}const Ze=Z("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);var $=Ze;const et=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],tt=e=>{const{classes:t,indeterminate:r,color:a}=e,s={root:["root",r&&"indeterminate",`color${z(a)}`]},o=te(s,Xe,t);return m({},t,o)},rt=G(qe,{shouldForwardProp:e=>Oe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,r.color!=="default"&&t[`color${z(r.color)}`]]}})(({theme:e,ownerState:t})=>m({color:e.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:Te(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${$.checked}, &.${$.indeterminate}`]:{color:e.palette[t.color].main},[`&.${$.disabled}`]:{color:e.palette.action.disabled}})),at=n(Ye,{}),st=n(Ve,{}),nt=n(Qe,{}),ot=T.exports.forwardRef(function(t,r){var a,s;const o=me({props:t,name:"MuiCheckbox"}),{checkedIcon:f=at,color:I="primary",icon:c=st,indeterminate:l=!1,indeterminateIcon:R=nt,inputProps:p,size:S="medium"}=o,v=ee(o,et),_=l?R:c,A=l?R:f,E=m({},o,{color:I,indeterminate:l,size:S}),F=tt(E);return n(rt,m({type:"checkbox",inputProps:m({"data-indeterminate":l},p),icon:T.exports.cloneElement(_,{fontSize:(a=_.props.fontSize)!=null?a:S}),checkedIcon:T.exports.cloneElement(A,{fontSize:(s=A.props.fontSize)!=null?s:S}),ownerState:E,ref:r},v,{classes:F}))});var lt=ot,j={},ct=ae.exports;Object.defineProperty(j,"__esModule",{value:!0});var oe=j.default=void 0,it=ct(re),ut=se,dt=(0,it.default)((0,ut.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");oe=j.default=dt;var K={},ht=ae.exports;Object.defineProperty(K,"__esModule",{value:!0});var le=K.default=void 0,ft=ht(re),pt=se,It=(0,ft.default)((0,pt.jsx)("path",{d:"M19.79 5.61C20.3 4.95 19.83 4 19 4H6.83l7.97 7.97 4.99-6.36zM2.81 2.81 1.39 4.22 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.17l5.78 5.78 1.41-1.41L2.81 2.81z"}),"FilterAltOff");le=K.default=It;function St(e){return(e!=null?e:[C.FRONT,C.MIDDLE,C.BACK]).map(t=>({filterKey:t,name:Ee(t)}))}function Ot(e){return(e!=null?e:Object.keys(g)).map(t=>({filterKey:t,name:g[t].name}))}function Tt(e){return(e!=null?e:[u.JUPITER_INDUSTRIES,u.NOMA_SHIPPING_GROUP,u.ANTONIOS_CONSORTIUM,u.DAWN_ACCORD]).map(t=>({filterKey:t,name:Ne(t)}))}function mt(e){return(e!=null?e:[d.JUPITER_INDUSTRIES,d.NOMA_SHIPPING_GROUP,d.ANTONIOS_CONSORTIUM,d.DAWN_ACCORD]).map(t=>({filterKey:t,name:`\u59D4\u8A17\u4F01\u696D\uFF1A${Fe(t)}`}))}function Ct(e){return(e!=null?e:[h.OUTSTANDING_FIREPOWER,h.SUSTAINED_COMBAT,h.STRATEGY_AND_SUPPORT,h.FIGHTER_AND_CORVETTE]).map(t=>({filterKey:t,name:`\u6226\u7565\u80FD\u529B\uFF1A${be(t)}`}))}function Rt(e){return(e!=null?e:[y.PROJECTILE_WEAPONS,y.DIRECT_FIRE_WEAPONS]).map(t=>({filterKey:t,name:`\u6226\u8853\u6027\u80FD\uFF1A${Pe(t)}`}))}function _t(e={}){var t,r,a,s,o,f;return[...St((t=e.shipRows)!=null?t:null),...Ot((r=e.shipTypes)!=null?r:null),...Tt((a=e.manufacturer)!=null?a:null),...e.researchManufacturer===!1?[]:mt((s=e.researchManufacturer)!=null?s:null),...e.researchStrategyTypes===!1?[]:Ct((o=e.researchStrategyTypes)!=null?o:null),...e.researchTacticTypes===!1?[]:Rt((f=e.researchTacticTypes)!=null?f:null)]}function Ut(){return{[C.FRONT]:!1,[C.MIDDLE]:!1,[C.BACK]:!1,...Object.keys(g).reduce((e,t)=>({...e,[t]:!1}),{}),[u.JUPITER_INDUSTRIES]:!1,[u.NOMA_SHIPPING_GROUP]:!1,[u.ANTONIOS_CONSORTIUM]:!1,[u.DAWN_ACCORD]:!1,[d.JUPITER_INDUSTRIES]:!1,[d.NOMA_SHIPPING_GROUP]:!1,[d.ANTONIOS_CONSORTIUM]:!1,[d.DAWN_ACCORD]:!1,[h.OUTSTANDING_FIREPOWER]:!1,[h.SUSTAINED_COMBAT]:!1,[h.STRATEGY_AND_SUPPORT]:!1,[h.FIGHTER_AND_CORVETTE]:!1,[y.PROJECTILE_WEAPONS]:!1,[y.DIRECT_FIRE_WEAPONS]:!1}}function Et(e){const t={...e};return Object.keys(t).forEach(r=>{t[r]=!1}),t}function Bt(e,t){let r=e;return Nt(t)&&(r=r.filter(a=>t[a.row]===!0)),Ft(t)&&(r=r.filter(a=>t[a.type]===!0)),bt(t)&&(r=r.filter(a=>t[a.manufacturer]===!0)),Pt(t)&&(r=r.filter(a=>a.researchManufacturer&&t[a.researchManufacturer]===!0)),At(t)&&(r=r.filter(a=>{var s;return((s=a.researchStrategyTypes)!=null?s:[]).some(o=>t[o]===!0)})),xt(t)&&(r=r.filter(a=>{var s;return((s=a.researchTacticTypes)!=null?s:[]).some(o=>t[o]===!0)})),r}function gt(e){const t={[P.STARTER_SHIP]:[],[P.TECH_FILE]:[],[P.CITY_TRADE]:[],[P.DOCK_EFFECT]:[],[P.UNKNOWN]:[]};return e.forEach(r=>{t[r.source].push(r)}),t}function Nt(e){return[C.FRONT,C.MIDDLE,C.BACK].some(t=>e[t]===!0)}function Ft(e){return Object.keys(g).some(t=>e[t]===!0)}function bt(e){return[u.JUPITER_INDUSTRIES,u.NOMA_SHIPPING_GROUP,u.ANTONIOS_CONSORTIUM,u.DAWN_ACCORD].some(t=>e[t]===!0)}function Pt(e){return[d.JUPITER_INDUSTRIES,d.NOMA_SHIPPING_GROUP,d.ANTONIOS_CONSORTIUM,d.DAWN_ACCORD].some(t=>e[t]===!0)}function At(e){return[h.OUTSTANDING_FIREPOWER,h.SUSTAINED_COMBAT,h.STRATEGY_AND_SUPPORT,h.FIGHTER_AND_CORVETTE].some(t=>e[t]===!0)}function xt(e){return[y.PROJECTILE_WEAPONS,y.DIRECT_FIRE_WEAPONS].some(t=>e[t]===!0)}function wt(e,t){return e.filter(r=>{var a;return((a=t[r.id])==null?void 0:a.possession)===W.POSSESSED})}function $t(e,t){return e.filter(r=>{var a;return Ce(r,t).length>0?!0:((a=t.ships[r.id])==null?void 0:a.wish)===L.WANTED})}function Wt(e,t){return e.filter(r=>{var a;return ne(r.id)&&((a=t[r.id])==null?void 0:a.wish)===L.NOT_WANTED})}function Gt(e,t){return e.filter(s=>s.source===P.TECH_FILE||s.source===P.STARTER_SHIP).filter(s=>{var o;return((o=t.ships[s.id])==null?void 0:o.possession)===W.POSSESSED}).filter(s=>{var o,f,I;if(!!s.modules&&Re(s,t).length>0||s.baseModelId)return!1;if(!!s.subModelIds||!!s.baseModelId){const c=(I=(f=s.subModelIds)!=null?f:(o=_e(s.baseModelId))==null?void 0:o.subModelIds)!=null?I:[];return kt(c,t.ships)?!(c.filter(p=>ne(p)&&!!t.ships[p]&&t.ships[p].possession!==W.POSSESSED).filter(p=>t.ships[p].wish!==L.NOT_WANTED).length>0):!1}return!0})}function kt(e,t){return e.length>0&&e.every(r=>{var a;return!!((a=t[r])!=null&&a.possession)})}const zt=e=>{const{onChange:t,popperProps:r,shipRows:a,shipTypes:s,researchManufacturer:o,researchStrategyTypes:f,researchTacticTypes:I,buttonProps:c}=e,[l,R]=T.exports.useState(e.filter),[p,S]=T.exports.useState(!1),[v]=T.exports.useState(()=>_t({shipRows:a,shipTypes:s,researchManufacturer:o,researchStrategyTypes:f,researchTacticTypes:I})),_=T.exports.useRef(null),A=i=>{R(x=>({...x,[i]:!x[i]}))},E=()=>{R(i=>Et(i))};T.exports.useEffect(()=>{const i=setTimeout(()=>{t(l)},0);return()=>clearTimeout(i)},[l,t]);const F=Object.values(l).some(i=>i);return k(Ae,{children:[k(ve,{variant:"outlined",ref:_,fullWidth:c==null?void 0:c.fullWidth,size:c==null?void 0:c.size,children:[n(B,{startIcon:n(oe,{}),onClick:()=>S(!0),sx:{flexShrink:1},children:"\u30D5\u30A3\u30EB\u30BF\u30FC"}),F&&n(B,{size:"small",onClick:E,sx:{flexShrink:3},children:n(le,{})})]},"filter"),n(ge,{open:p,anchorEl:_.current,role:void 0,transition:!0,disablePortal:!0,style:{zIndex:1},...r,children:({TransitionProps:i,placement:x})=>{var D;return n(we,{...i,style:{transformOrigin:x==="bottom"?"center top":"center bottom"},children:n("div",{children:n(Me,{onClickAway:()=>S(!1),children:k(xe,{children:[n(Q,{sx:{overflowY:"auto",maxHeight:`${((D=De(_.current))!=null?D:0)-50}px`},children:n($e,{id:"split-button-menu",children:v.map(b=>k(We,{selected:l[b.filterKey],onClick:()=>A(b.filterKey),children:[n(Ue,{children:n(lt,{edge:"start",checked:l[b.filterKey],tabIndex:-1,disableRipple:!0})}),n(Ge,{children:b.name})]},b.filterKey))})}),n(ke,{}),n(Q,{p:1,display:"flex",justifyContent:"end",children:k(ye,{spacing:1,direction:"row",children:[n(B,{variant:"outlined",onClick:E,disabled:!F,children:"\u5168\u3066\u5916\u3059"}),n(B,{variant:"outlined",onClick:()=>S(!1),children:"\u9589\u3058\u308B"})]})})]})})})})}})]})};export{lt as C,zt as S,Bt as a,$t as b,Ut as c,Wt as d,wt as e,Gt as f,qe as g,gt as s};