import{P as l,Q as c,R as p,k as a,F as i,B as d,ax as u,t as h,bC as v,z as f,r as m,j as g,q as D,aa as x,bD as B,bE as P,T as S}from"./index.a00405b9.js";import{N as k,P as I}from"./PageContent.0864824d.js";import{A as _}from"./ActionBar.6b866a2c.js";import{P as j}from"./PageFooter.0a09a5cd.js";import"./MenuItem.ed2c9e2d.js";var t={},b=c.exports;Object.defineProperty(t,"__esModule",{value:!0});var s=t.default=void 0,A=b(l),C=p,R=(0,A.default)((0,C.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");s=t.default=R;const q=()=>a(_,{left:e=>a(i,{children:a(d,{variant:"outlined",startIcon:a(s,{}),component:u,to:"/shipData",fullWidth:e.fullWidth,size:e.size,children:h("shipData.pageTitle")},"share")})}),T=()=>{const{shipId:e}=v(),r=f(),o=m.exports.useCallback(n=>{r(`/shipData/${n}`)},[r]);return g(i,{children:[a(k,{currentRoute:"/shipData"}),a(q,{}),a(I,{children:a(D,{component:"div",p:1,children:a(x,{children:e&&B(e)?a(P,{shipId:e,onClickShip:o}):a(S,{variant:"body1",children:"Invalid ID"})})})}),a(j,{})]})};export{T as ShipDetailPage,T as default};