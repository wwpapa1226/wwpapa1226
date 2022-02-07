var he=Object.defineProperty,fe=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var Q=(e,t,o)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,x=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&Q(e,o,t[o]);if(E)for(var o of E(t))K.call(t,o)&&Q(e,o,t[o]);return e},y=(e,t)=>fe(e,ve(t));var X=(e,t)=>{var o={};for(var s in e)J.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&E)for(var s of E(e))t.indexOf(s)<0&&K.call(e,s)&&(o[s]=e[s]);return o};import{i as Z,k as ee,s as te,l as F,_ as m,D as N,r as g,u as oe,n as se,o as re,j as r,q as P,b as v,F as W,f as O,z as Ce}from"./vendor.67bf9958.js";import{c as M,i as I,r as L,p as me,S as k,P as $,o as ae,W as R,B as U,d as Se,N as be,C as Be}from"./NavigationBar.8bb842c6.js";import{A as xe,S as ye,B as w,d as $e,c as Re}from"./ActionBar.a736b9e4.js";import{B as Te,P as ne}from"./Paper.9c820029.js";import{a as _e,g as ie,s as ze,c as De}from"./userSettingsUtils.c70c4537.js";function Ee(e){return Z("MuiToggleButton",e)}const Fe=ee("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]);var le=Fe;const Ne=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],Me=e=>{const{classes:t,fullWidth:o,selected:s,disabled:i,size:n,color:l}=e,a={root:["root",s&&"selected",i&&"disabled",o&&"fullWidth",`size${F(n)}`,l]};return re(a,Ee,t)},Ie=te(Te,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`size${F(o.size)}`]]}})(({theme:e,ownerState:t})=>{const o=t.color==="standard"?e.palette.text.primary:e.palette[t.color].main;return m({},e.typography.button,{borderRadius:e.shape.borderRadius,padding:11,border:`1px solid ${e.palette.divider}`,color:e.palette.action.active},t.fullWidth&&{width:"100%"},{[`&.${le.disabled}`]:{color:e.palette.action.disabled,border:`1px solid ${e.palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:N(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${le.selected}`]:{color:o,backgroundColor:N(o,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:N(o,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:N(o,e.palette.action.selectedOpacity)}}}},t.size==="small"&&{padding:7,fontSize:e.typography.pxToRem(13)},t.size==="large"&&{padding:15,fontSize:e.typography.pxToRem(15)})}),Le=g.exports.forwardRef(function(t,o){const s=oe({props:t,name:"MuiToggleButton"}),{children:i,className:n,color:l="standard",disabled:a=!1,disableFocusRipple:d=!1,fullWidth:p=!1,onChange:c,onClick:C,selected:_,size:h="medium",value:b}=s,z=se(s,Ne),B=m({},s,{color:l,disabled:a,disableFocusRipple:d,fullWidth:p,size:h}),j=Me(B),A=u=>{C&&(C(u,b),u.defaultPrevented)||c&&c(u,b)};return r(Ie,m({className:P(j.root,n),disabled:a,focusRipple:!d,ref:o,onClick:A,onChange:c,value:b,ownerState:B,"aria-pressed":_},z,{children:i}))});var T=Le;function ke(e,t){return t===void 0||e===void 0?!1:Array.isArray(t)?t.indexOf(e)>=0:e===t}function je(e){return Z("MuiToggleButtonGroup",e)}const Ae=ee("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]);var f=Ae;const Pe=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],We=e=>{const{classes:t,orientation:o,fullWidth:s,disabled:i}=e,n={root:["root",o==="vertical"&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${F(o)}`,i&&"disabled"]};return re(n,je,t)},Oe=te("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${f.grouped}`]:t.grouped},{[`& .${f.grouped}`]:t[`grouped${F(o.orientation)}`]},t.root,o.orientation==="vertical"&&t.vertical,o.fullWidth&&t.fullWidth]}})(({ownerState:e,theme:t})=>m({display:"inline-flex",borderRadius:t.shape.borderRadius},e.orientation==="vertical"&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{[`& .${f.grouped}`]:m({},e.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${f.selected} + .${f.grouped}.${f.selected}`]:{borderTop:0,marginTop:0}})})),Ue=g.exports.forwardRef(function(t,o){const s=oe({props:t,name:"MuiToggleButtonGroup"}),{children:i,className:n,color:l="standard",disabled:a=!1,exclusive:d=!1,fullWidth:p=!1,onChange:c,orientation:C="horizontal",size:_="medium",value:h}=s,b=se(s,Pe),z=m({},s,{disabled:a,fullWidth:p,orientation:C,size:_}),B=We(z),j=(u,S)=>{if(!c)return;const Y=h&&h.indexOf(S);let D;h&&Y>=0?(D=h.slice(),D.splice(Y,1)):D=h?h.concat(S):[S],c(u,D)},A=(u,S)=>{!c||c(u,h===S?null:S)};return r(Oe,m({role:"group",className:P(B.root,n),ref:o,ownerState:z},b,{children:g.exports.Children.map(i,u=>g.exports.isValidElement(u)?g.exports.cloneElement(u,{className:P(B.grouped,u.props.className),onChange:d?A:j,selected:u.props.selected===void 0?ke(u.props.value,h):u.props.selected,size:u.props.size||_,fullWidth:p,color:u.props.color||l,disabled:u.props.disabled||a}):null)}))});var ue=Ue,G={},we=I.exports;Object.defineProperty(G,"__esModule",{value:!0});var de=G.default=void 0,Ge=we(M),qe=L,He=(0,Ge.default)((0,qe.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");de=G.default=He;var q={},Ve=I.exports;Object.defineProperty(q,"__esModule",{value:!0});var ce=q.default=void 0,Ye=Ve(M),Je=L,Ke=(0,Ye.default)((0,Je.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");ce=q.default=Ke;var H={},Qe=I.exports;Object.defineProperty(H,"__esModule",{value:!0});var pe=H.default=void 0,Xe=Qe(M),Ze=L,et=(0,Xe.default)((0,Ze.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");pe=H.default=et;const tt=e=>{const{shipFilter:t,onCancel:o,onSave:s,onReset:i,onFilter:n}=e;return r(xe,{left:v(W,{children:[r(ye,{filter:t,onChange:n},"filter"),r(w,{variant:"contained",startIcon:r(de,{}),onClick:s,children:"\u4FDD\u5B58"},"save")]}),right:v(W,{children:[r(w,{variant:"outlined",startIcon:r(pe,{}),onClick:i,children:"\u521D\u671F\u5316"},"reset"),r(w,{variant:"outlined",startIcon:r(ce,{}),onClick:o,children:"\u30AD\u30E3\u30F3\u30BB\u30EB"},"cancel")]})})},ot=e=>{const{shipId:t,possession:o,onChange:s}=e,i=(l,a)=>{s(t,a===null?$.UNDEFINED:Number(a))},n=me(t).source;return v(k,{spacing:1,direction:"row",alignItems:"center",children:[r(O,{variant:"body1",children:"\u8A2D\u8A08\u56F3\u3092"}),v(ue,{size:"small",color:"primary",value:`${o}`,exclusive:!0,onChange:i,children:[r(T,{value:`${$.POSSESSED}`,children:n===ae.CITY_TRADE?"\u8CB7\u3063\u3066\u3044\u308B":"\u6301\u3063\u3066\u3044\u308B"}),r(T,{value:`${$.NOT_POSSESSED}`,children:n===ae.CITY_TRADE?"\u8CB7\u3063\u3066\u3044\u306A\u3044":"\u6301\u3063\u3066\u3044\u306A\u3044"})]})]})};var V={},st=I.exports;Object.defineProperty(V,"__esModule",{value:!0});var ge=V.default=void 0,rt=st(M),at=L,nt=(0,rt.default)((0,at.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");ge=V.default=nt;const it=e=>{const{shipId:t,wish:o,onChange:s}=e,i=(n,l)=>{s(t,l===null||l==="clear"?R.UNDEFINED:Number(l))};return v(k,{spacing:1,direction:"row",alignItems:"center",children:[r(O,{variant:"body1",children:"\u30AC\u30C1\u30E3\u3067"}),v(ue,{size:"small",color:"primary",value:`${o}`,exclusive:!0,onChange:i,children:[r(T,{value:`${R.WANTED}`,children:"\u51FA\u3066\u6B32\u3057\u3044"}),r(T,{value:`${R.NOT_WANTED}`,children:"\u51FA\u3066\u6B32\u3057\u304F\u306A\u3044"}),o!==R.UNDEFINED&&r(T,{value:"clear",children:r(ge,{})})]})]})},lt=e=>{const d=e,{shipId:t,shipName:o,possession:s,wish:i,onPossessionChange:n,onWishChange:l}=d,a=X(d,["shipId","shipName","possession","wish","onPossessionChange","onWishChange"]);return r(ne,y(x({elevation:2},a),{children:r(U,{p:1,children:v(k,{spacing:3,children:[r(O,{variant:"h6",children:o}),r(ot,{shipId:t,possession:s,onChange:n}),s===$.NOT_POSSESSED&&r(it,{shipId:t,wish:i,onChange:l})]})})}))},ut=g.exports.memo(lt),dt=e=>{const{shipSetting:t,shipFilter:o,onShipSettingChange:s}=e,i=g.exports.useMemo(()=>$e(Se,o),[o]),n=g.exports.useCallback((a,d)=>{s(p=>_e(p,a,d))},[s]),l=g.exports.useCallback((a,d)=>{s(p=>y(x({},p),{[a]:y(x({},p[a]),{wish:d})}))},[s]);return r(ne,{children:r(U,{p:1,children:r(k,{spacing:3,children:i.map(a=>{var d,p,c,C;return r(ut,{shipId:a.id,shipName:a.name,possession:(p=(d=t[a.id])==null?void 0:d.possession)!=null?p:$.UNDEFINED,wish:(C=(c=t[a.id])==null?void 0:c.wish)!=null?C:R.UNDEFINED,onPossessionChange:n,onWishChange:l},a.id)})})})})},Ct=()=>{const e=Ce(),[t,o]=g.exports.useState(ie),[s,i]=g.exports.useState(Re),[n,l]=g.exports.useState(t.ships);return v(W,{children:[r(be,{currentRoute:"/myList"}),r(tt,{shipFilter:s,onCancel:()=>{l(t.ships),e("/myList")},onReset:()=>{window.confirm("\u8A2D\u5B9A\u3092\u521D\u671F\u5316\u3057\u307E\u3059\u304B\uFF1F")&&l(De().ships)},onSave:()=>{const c=y(x({},ie()),{ships:n});ze(c),o(c),e("/myList")},onFilter:i}),r(Be,{children:r(U,{p:1,children:r(dt,{shipSetting:n,shipFilter:s,onShipSettingChange:l})})})]})};export{Ct as MyListEditPage,Ct as default};