var w=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var j=(t,n,i)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,p=(t,n)=>{for(var i in n||(n={}))b.call(n,i)&&j(t,i,n[i]);if(v)for(var i of v(n))N.call(n,i)&&j(t,i,n[i]);return t},C=(t,n)=>q(t,z(n));var O=(t,n)=>{var i={};for(var u in t)b.call(t,u)&&n.indexOf(u)<0&&(i[u]=t[u]);if(t!=null&&v)for(var u of v(t))n.indexOf(u)<0&&N.call(t,u)&&(i[u]=t[u]);return i};import{j as e,b as l,F as k,h as T,S as B,T as S,aa as P,ab as F,r as d,t as H,c as $,$ as Y,a0 as K,a1 as G,q as J}from"./vendor.4663e7d5.js";import{d as Q,a as V,b as X,C as Z}from"./ConfirmationDialog.30128307.js";import{S as ee,a as ne,s as te,c as ie}from"./ShipTypeFilterButton.dd6a296b.js";import{A as ue}from"./ActionBar.ab3d85e9.js";import{g as se,e as g,c as ae}from"./index.bd9adf92.js";import{a as re,g as L,s as oe,c as le}from"./userSettingsUtils.337fefff.js";import{d as ce}from"./Settings.4b71925b.js";import{P as m,W as A}from"./WishState.3db35fd5.js";import{c as de,i as he,r as pe,N as Ce,C as ge}from"./NavigationBar.ff166a92.js";import"./ResponsiveDialog.fa559a51.js";import"./domUtils.e9df6b0f.js";const Se=t=>{const{shipFilter:n,onCancel:i,onSave:u,onReset:r,onFilter:a}=t;return e(ue,{left:s=>e(ee,{filter:n,onChange:a,buttonProps:s},"filter"),right:s=>l(k,{children:[e(T,C(p({variant:"outlined",startIcon:e(Q,{}),onClick:r},s),{children:"\u521D\u671F\u5316"}),"reset"),e(T,C(p({variant:"outlined",startIcon:e(V,{}),onClick:i},s),{children:"\u30AD\u30E3\u30F3\u30BB\u30EB"}),"cancel"),e(T,C(p({variant:"contained",startIcon:e(X,{}),onClick:u},s),{children:"\u4FDD\u5B58"}),"save")]})})},fe=t=>{const{shipId:n,possession:i,onChange:u}=t,r=(s,o)=>{u(n,o===null?m.UNDEFINED:Number(o))},a=se(n).source;return l(B,{spacing:1,direction:"row",alignItems:"center",children:[e(S,{variant:"body1",children:Be(a)}),l(P,{size:"small",color:"primary",value:`${i}`,exclusive:!0,onChange:r,children:[e(F,{value:`${m.POSSESSED}`,children:U(a,!0)}),e(F,{value:`${m.NOT_POSSESSED}`,children:U(a,!1)})]})]})};function Be(t){switch(t){case g.CITY_TRADE:return"\u90FD\u5E02\u3067";case g.DOCK_EFFECT:return"\u81E8\u6642\u8A2D\u8A08\u56F3\u3092";default:return"\u8A2D\u8A08\u56F3\u3092"}}function U(t,n){switch(t){case g.CITY_TRADE:return n?"\u8CB7\u3063\u3066\u3044\u308B":"\u8CB7\u3063\u3066\u3044\u306A\u3044";default:return n?"\u6301\u3063\u3066\u3044\u308B":"\u6301\u3063\u3066\u3044\u306A\u3044"}}var x={},De=he.exports;Object.defineProperty(x,"__esModule",{value:!0});var M=x.default=void 0,Ee=De(de),Fe=pe,me=(0,Ee.default)((0,Fe.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");M=x.default=me;const Ae=t=>{const{shipId:n,wish:i,onChange:u}=t,r=(a,s)=>{u(n,s===null||s==="clear"?A.UNDEFINED:Number(s))};return l(B,{spacing:1,direction:"row",alignItems:"center",children:[e(S,{variant:"body1",children:"\u30AC\u30C1\u30E3\u3067"}),l(P,{size:"small",color:"primary",value:`${i}`,exclusive:!0,onChange:r,children:[e(F,{value:`${A.WANTED}`,children:"\u51FA\u3066\u6B32\u3057\u3044"}),e(F,{value:`${A.NOT_WANTED}`,children:"\u51FA\u3066\u6B32\u3057\u304F\u306A\u3044"}),i!==A.UNDEFINED&&e(F,{value:"clear",children:e(M,{})})]})]})},ve=t=>{const o=t,{ship:n,possession:i,wish:u,onPossessionChange:r,onWishChange:a}=o,s=O(o,["ship","possession","wish","onPossessionChange","onWishChange"]);return e(H,C(p({elevation:2},s),{children:e($,{p:1,children:l(B,{spacing:3,children:[e(S,{variant:"h6",children:n.name}),e(fe,{shipId:n.id,possession:i,onChange:r}),i===m.NOT_POSSESSED&&n.source===g.TECH_FILE&&e(Ae,{shipId:n.id,wish:u,onChange:a})]})})}))},ye=d.exports.memo(ve),y=t=>{const{id:n,title:i,shipDefinitions:u,shipSetting:r,initiallyOpened:a,handlePossessionChange:s,handleWishChange:o,preRenderDetails:c=!1}=t,[h,I]=d.exports.useState(a);return l(Y,{expanded:h,onChange:(f,D)=>{I(D)},children:[e(K,{id:n,expandIcon:e(ce,{}),children:e(S,{variant:"body1",children:i})}),e(G,{children:(h||c)&&e(B,{spacing:3,children:u.map(f=>{var D,E,R,_;return e(ye,{ship:f,possession:(E=(D=r[f.id])==null?void 0:D.possession)!=null?E:m.UNDEFINED,wish:(_=(R=r[f.id])==null?void 0:R.wish)!=null?_:A.UNDEFINED,onPossessionChange:s,onWishChange:o},f.id)})})})]})},Te=t=>{const{shipSetting:n,shipFilter:i,onShipSettingChange:u}=t,r=d.exports.useMemo(()=>{const o=ne(ae,i);return te(o)},[i]),a=d.exports.useCallback((o,c)=>{u(h=>re(h,o,c))},[u]),s=d.exports.useCallback((o,c)=>{u(h=>C(p({},h),{[o]:C(p({},h[o]),{wish:c})}))},[u]);return l(B,{spacing:1,children:[e("div",{children:e(y,{id:"tech-file-ships",title:"\u6280\u8853\u30D5\u30A1\u30A4\u30EB\u304B\u3089\u624B\u306B\u5165\u308B\u8266\u8239/\u8A2D\u8A08\u56F3",initiallyOpened:!1,preRenderDetails:!0,shipDefinitions:r[g.TECH_FILE],shipSetting:n,handlePossessionChange:a,handleWishChange:s})}),e("div",{children:e(y,{id:"city-trade-ships",title:"\u90FD\u5E02\u3067\u8CB7\u3048\u308B\u8266\u8239",initiallyOpened:!1,shipDefinitions:r[g.CITY_TRADE],shipSetting:n,handlePossessionChange:a,handleWishChange:s})}),e("div",{children:e(y,{id:"dock-effect-ships",title:"\u7D50\u5408\u52B9\u679C\u3067\u624B\u306B\u5165\u308B\u8266\u8239/\u81E8\u6642\u8A2D\u8A08\u56F3",initiallyOpened:!1,shipDefinitions:r[g.DOCK_EFFECT],shipSetting:n,handlePossessionChange:a,handleWishChange:s})}),e("div",{children:e(y,{id:"starter-ships",title:"\u521D\u671F\u914D\u5E03\u3067\u624B\u306B\u5165\u308B\u8266\u8239/\u8A2D\u8A08\u56F3",initiallyOpened:!1,shipDefinitions:r[g.STARTER_SHIP],shipSetting:n,handlePossessionChange:a,handleWishChange:s})})]})},Ue=()=>{const t=J(),[n,i]=d.exports.useState(L),[u,r]=d.exports.useState(ie),[a,s]=d.exports.useState(n.ships),[o,c]=d.exports.useState(!1);return l(k,{children:[e(Ce,{currentRoute:"/myList"}),e(Se,{shipFilter:u,onCancel:()=>{s(n.ships),t("/myList")},onReset:()=>{c(!0)},onSave:()=>{const E=C(p({},L()),{ships:a});oe(E),i(E),t("/myList")},onFilter:r}),e(ge,{children:l($,{p:1,children:[l(B,{pt:1,pb:2,spacing:2,children:[e(S,{variant:"body2",children:"\u3053\u3053\u3067\u306F\u8266\u8239/\u8A2D\u8A08\u56F3\u306E\u6240\u6709\u72B6\u614B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002"}),e(S,{variant:"body2",children:"\u5168\u3066\u7D30\u304B\u304F\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002"}),e(S,{variant:"body2",children:"\u8A2D\u5B9A\u30C7\u30FC\u30BF\u306F\u30D6\u30E9\u30A6\u30B6\u306E\u30ED\u30FC\u30AB\u30EB\u30B9\u30C8\u30EC\u30FC\u30B8\u306B\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002"})]}),e(Te,{shipSetting:a,shipFilter:u,onShipSettingChange:s})]})}),o&&e(Z,{title:"\u521D\u671F\u5316",question:"\u30DE\u30A4\u30EA\u30B9\u30C8\u8A2D\u5B9A\u3092\u521D\u671F\u72B6\u614B\u306B\u623B\u3057\u307E\u3059\u304B\uFF1F",cancelText:"\u30AD\u30E3\u30F3\u30BB\u30EB",confirmText:"\u521D\u671F\u5316",onCancel:()=>{c(!1)},onConfirm:()=>{c(!1),s(le().ships)}})]})};export{Ue as MyListEditPage,Ue as default};
