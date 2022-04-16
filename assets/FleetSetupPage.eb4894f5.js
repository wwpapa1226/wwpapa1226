var L=Object.defineProperty,U=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var M=(i,t,n)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,D=(i,t)=>{for(var n in t||(t={}))H.call(t,n)&&M(i,n,t[n]);if(O)for(var n of O(t))Q.call(t,n)&&M(i,n,t[n]);return i},_=(i,t)=>U(i,Y(t));import{r as h,j as e,F as y,b as p,h as $,$ as J,a0 as K,S as g,T as r,a1 as X,c as S,p as Z,q as ee,at as te,u as ne,a as ae,t as G,D as re,au as oe}from"./vendor.da49bbc3.js";import{c as A,i as R,r as k,N as ie,C as ue}from"./NavigationBar.0d38d227.js";import{d as se}from"./Settings.dddae240.js";import{d as le,a as ce,b as de,c as pe}from"./clipboardUtils.69eb7688.js";import{A as he}from"./ActionBar.4a719c8f.js";import{B as fe,S as me,g as Fe,a as ve,v as ge,f as Ce,G as P,b as xe}from"./fleetSetupValidation.371caa6f.js";import{g as ye}from"./userSettingsUtils.c9f7945a.js";import{d as Se}from"./ExpandMore.0181df59.js";import{g as Ee,L as $e,b as C,a as j,S as be,t as Be,y as De,o as N}from"./index.7c8cee3c.js";import{E as _e}from"./ExpandStack.d6e49f55.js";import{R as Ae}from"./ResponsiveDialog.2443e0b2.js";import"./domUtils.e9df6b0f.js";import"./sorting.c6946657.js";import"./WishState.3db35fd5.js";var w={},Re=R.exports;Object.defineProperty(w,"__esModule",{value:!0});var W=w.default=void 0,ke=Re(A),je=k,we=(0,ke.default)((0,je.jsx)("path",{d:"M16 7c0 2.21-1.79 4-4 4S8 9.21 8 7s1.79-4 4-4 4 1.79 4 4zm-9 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm10 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}),"Spoke");W=w.default=we;const Te=i=>{const{fleetSetups:t,fleetSetup:n,onChange:a,buttonProps:d}=i,s=h.exports.useMemo(()=>t.map(o=>({key:o.key,text:o.name,value:o.key})),[t]);return e(y,{children:e(fe,{icon:e(W,{}),text:"\u8266\u968A\u9078\u629E",value:n.key,options:s,onClick:a,buttonProps:d})})},Ie=i=>{const{fleetSetups:t,fleetSetup:n,grouping:a,onChangeFleet:d,onChangeGrouping:s,onEdit:o,onShare:c}=i;return e(he,{left:l=>p(y,{children:[e(me,{value:a,onChange:s,buttonProps:l}),e(Te,{fleetSetups:t,fleetSetup:n,onChange:d,buttonProps:l}),e($,_(D({variant:"outlined",startIcon:e(se,{}),onClick:o},l),{children:"\u7DE8\u96C6"}),"edit")]}),right:l=>e(y,{children:e($,_(D({variant:"outlined",startIcon:e(le,{}),onClick:c},l),{children:"\u5171\u6709"}),"share")})})},Oe=i=>{var c;const{initialFleetKey:t}=i,n=h.exports.useMemo(()=>ye(),[]),a=h.exports.useMemo(()=>Fe(n),[n]),[d,s]=h.exports.useState(t&&(c=a.find(l=>l.key===t))!=null?c:a[0]),o=h.exports.useCallback(l=>{const m=a.find(F=>F.key===l);if(!m)throw new Error(`Invalid fleet key "${l}"`);s(m)},[a]);return{fleetSetups:a,fleetSetup:d,switchFleet:o}};var T={},Me=R.exports;Object.defineProperty(T,"__esModule",{value:!0});var z=T.default=void 0,Ge=Me(A),Pe=k,Ne=(0,Ge.default)((0,Pe.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");z=T.default=Ne;var I={},We=R.exports;Object.defineProperty(I,"__esModule",{value:!0});var V=I.default=void 0,ze=We(A),Ve=k,qe=(0,ze.default)((0,Ve.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");V=I.default=qe;const Le=i=>{const{fleetSetup:t}=i,[n,a]=h.exports.useState(!1),{totalCost:d,shipCount:s,shipCountByType:o,shipCountByRow:c}=h.exports.useMemo(()=>ve(t.ships),[t.ships]),l=d>t.maxCost,m=t.totalReinforcementCount>t.maxReinforcement,F=h.exports.useMemo(()=>{const u=ge(t);return Object.keys(u).map(x=>{const[E,f]=x.split("#"),B=Ee(E);switch(f){case"self":return`${B.name}\uFF08\u5897\u63F4\uFF09\uFF1A${u[x]}`;case"ally":return`${B.name}\uFF08\u30E6\u30CB\u30AA\u30F3\u5897\u63F4\uFF09\uFF1A${u[x]}`;default:return`${B.name}\uFF1A${u[x]}`}})},[t]),b=l||m||F.length>0?e(V,{color:"error"}):e(z,{color:"primary"});return p(J,{expanded:n,onChange:()=>a(!n),children:[e(K,{expandIcon:n?e(Se,{}):b,children:p(g,{spacing:1,children:[e(r,{variant:"body1",children:t.name}),!n&&p("div",{children:[e(r,{variant:"body2",color:"text.secondary",component:"span",children:"\u5897\u63F4\uFF1A"}),e(r,{variant:"body2",color:"text.secondary",component:"span",sx:m?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`}),e(r,{variant:"body2",color:"text.secondary",component:"span",children:"\u3001\u53F8\u4EE4Pt\uFF1A"}),e(r,{variant:"body2",color:"text.secondary",component:"span",sx:l?{color:"red"}:{},children:`${d} / ${t.maxCost}`})]})]})}),e(X,{children:n&&e($e,{rows:[{key:"reinforcementCount",label:"\u5897\u63F4",value:e(r,{variant:"body2",sx:m?{color:"red"}:{},children:`${t.totalReinforcementCount} / ${t.maxReinforcement}`})},{key:"cost",label:"\u8266\u968A\u53F8\u4EE4Pt",value:e(r,{variant:"body2",sx:l?{color:"red"}:{},children:`${d} / ${t.maxCost}`})},{key:"shipCount",label:"\u8266\u8239",value:s>0?p(y,{children:[e(r,{variant:"body2",children:`\u5408\u8A08\u3000${s}`}),Object.keys(o).filter(u=>o[u]>0&&u!==C.CORVETTE&&u!==C.FIGHTER).map(u=>e(r,{variant:"body2",children:`${j(u)}\u3000${o[u]}`},u))]}):e(r,{variant:"body2",children:"-"})},{key:"carriedShipCount",label:"\u8266\u8F09\u6A5F",value:o[C.FIGHTER]+o[C.CORVETTE]>0?p(y,{children:[o[C.FIGHTER]>0&&e(r,{variant:"body2",children:`${j(C.FIGHTER)}\u3000${o[C.FIGHTER]}`}),o[C.CORVETTE]>0&&e(r,{variant:"body2",children:`${j(C.CORVETTE)}\u3000${o[C.CORVETTE]}`})]}):e(r,{variant:"body2",children:"-"})},{key:"rowCount",label:"\u914D\u7F6E",value:s>0?e(y,{children:Object.keys(c).filter(u=>u!==be.NONE).map(u=>e(r,{variant:"body2",children:`${Be(u)}\u3000${c[u]}`},u))}):e(r,{variant:"body2",children:"-"})},...F.length>0?[{key:"warnings",label:"\u8B66\u544A",value:F.map((u,x)=>e(r,{variant:"body2",sx:{color:"red"},children:u},`warning_${x}`))}]:[]]})})]})},q=i=>{const{shipSelections:t}=i,{openShipDetailDialog:n}=De();return e(g,{spacing:1,children:t==null?void 0:t.map(a=>{var d;return p(h.exports.Fragment,{children:[p(g,{spacing:1,direction:"row",children:[p(g,{spacing:1,direction:"row",flexWrap:"wrap",sx:{flexGrow:1},children:[e(S,{sx:{width:"25px"},children:e(r,{variant:"body2",textAlign:"end",children:`${a.count}\xD7`})}),e(r,{variant:"body2",children:e(N,{onClick:()=>{n(a.shipDefinition.id)},children:a.shipDefinition.name})}),a.reinforcement==="self"&&e(r,{variant:"body2",noWrap:!0,children:"\uFF08\u5897\u63F4\uFF09"}),a.reinforcement==="ally"&&e(r,{variant:"body2",noWrap:!0,children:"\uFF08\u30E6\u30CB\u30AA\u30F3\u5897\u63F4\uFF09"})]}),e(S,{sx:{width:"50px"},children:a.reinforcement===null&&e(r,{variant:"body2",textAlign:"end",children:`${a.shipDefinition.cost*a.count} Pt`})})]}),a.carriedShips.map(s=>{var o;return p(g,{spacing:1,direction:"row",flexWrap:"wrap",children:[e(r,{variant:"body2",color:"text.secondary",sx:{paddingLeft:"30px",opacity:.5},children:"\u2517"}),e(S,{sx:{width:"25px"},children:e(r,{variant:"body2",textAlign:"end",children:`${s.count}\xD7`})}),e(r,{variant:"body2",children:e(N,{onClick:()=>{n(s.shipDefinition.id)},children:s.shipDefinition.name})})]},`${s.shipDefinition.id}_${(o=s.reinforcement)!=null?o:"initial"}`)})]},`${a.shipDefinition.id}_${(d=a.reinforcement)!=null?d:"initial"}`)})})},Ue=i=>{const{fleetSetup:t,groupedShips:n,onClose:a}=i,[d,s]=h.exports.useState(!1),[o,c]=h.exports.useState(()=>Ce(t,n)),l=()=>{o&&pe(o).then(()=>{s(!0)})},m=v=>{c(v.target.value)},F=()=>{a(),s(!1)};return e(Ae,{title:"\u5171\u6709",content:p(g,{spacing:1,children:[e(Z,{variant:"filled",id:"outlined-multiline-static",multiline:!0,onChange:m,rows:10,defaultValue:o,fullWidth:!0}),!!navigator.clipboard&&e($,{variant:"outlined",startIcon:d?e(ce,{}):e(de,{}),onClick:l,fullWidth:!0,children:"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC"})]}),actions:e($,{variant:"outlined",onClick:F,children:"\u9589\u3058\u308B"}),onClose:F})},st=()=>{const i=ee(),{fleetKey:t}=te(),n=ne(),a=ae(n.breakpoints.up("lg")),[d,s]=h.exports.useState(!1),{fleetSetups:o,fleetSetup:c,switchFleet:l}=Oe({initialFleetKey:t!=null?t:null}),[m,F]=h.exports.useState(P.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME),v=h.exports.useMemo(()=>xe(m,c),[c,m]),b=()=>{i("/fleetSetup/edit/"+c.key)},u=()=>{s(!0)},x=()=>{s(!1)},E=a&&v.groupedBy===P.GROUP_BY_ROW_SORT_BY_TYPE_AND_NAME?"row":"column";return p(y,{children:[e(ie,{currentRoute:"/fleetSetup"}),e(Ie,{fleetSetups:o,fleetSetup:c,grouping:m,onChangeFleet:l,onChangeGrouping:F,onEdit:b,onShare:u}),e(ue,{disabled:E==="row",children:e(S,{p:1,children:p(g,{spacing:1,children:[e(Le,{fleetSetup:c}),c.ships.length>0?e(y,{children:E==="row"?e(g,{spacing:1,direction:"row",sx:{width:"100%"},children:v.groups.map(f=>e(G,{sx:{width:`${100/v.groups.length}%`},children:e(S,{p:1,children:p(g,{spacing:1,children:[e(r,{variant:"body1",children:`${f.name}${f.count>0?`\uFF08${f.count}\u96BB\uFF09`:""}`}),e(re,{}),e(q,{shipSelections:f.ships})]})})},v.groupedBy))}):e(_e,{expandables:v.groups.map(f=>({id:f.id,initiallyOpened:!0,summary:e(r,{variant:"body1",children:`${f.name}${f.count>0?`\uFF08${f.count}\u96BB\uFF09`:""}`}),details:e(q,{shipSelections:f.ships}),skip:f.ships.length===0}))},v.groupedBy)}):e(G,{children:e(S,{p:2,children:p(g,{spacing:1,children:[e(r,{variant:"body1",children:"\u7DE8\u6210"}),e(oe,{severity:"info",children:"\u3053\u306E\u8266\u968A\u306B\u306F\u307E\u3060\u8266\u8239\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u4E0A\u306E\u300C\u7DE8\u96C6\u300D\u30DC\u30BF\u30F3\u3067\u7DE8\u96C6\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048\u308B\u3068\u8266\u8239\u306E\u8FFD\u52A0\u3084\u5897\u63F4\u306E\u8A2D\u5B9A\u7B49\u304C\u884C\u3048\u307E\u3059\u3002"})]})})}),e(r,{variant:"caption",align:"right",paragraph:!0,children:"\u203B\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306F\u30D6\u30E9\u30A6\u30B6\u306E\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\u3055\u308C\u3066\u3044\u307E\u3059\u3002"})]})})}),d&&e(Ue,{fleetSetup:c,groupedShips:v,onClose:x})]})};export{st as FleetSetupPage,st as default};
