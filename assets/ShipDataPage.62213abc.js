import{j as t,b as l,F as p,r as s,c as f}from"./vendor.612e55a5.js";import{C as m,c as h,S as c}from"./ShipDataTable.72d943ff.js";import{S as u,c as C,a as g}from"./ShipTypeFilterButton.97aa48b7.js";import{A as d}from"./ActionBar.a2802d77.js";import{d as S}from"./index.1d6337e7.js";import{N as j,C as F}from"./NavigationBar.e91af742.js";import"./domUtils.e9df6b0f.js";import"./useTable.a69db608.js";import"./sorting.c6946657.js";import"./WishState.3db35fd5.js";const b=e=>{const{shipFilter:o,columnConfig:i,onFilterChange:n,onColumnConfigChange:r}=e;return t(d,{left:a=>l(p,{children:[t(m,{columnConfig:i,onChange:r,buttonProps:a},"columnConfig"),t(u,{filter:o,onChange:n,buttonProps:a},"filter")]})})},L=()=>{const[e,o]=s.exports.useState(C),[i,n]=s.exports.useState(()=>h({name:!0,row:!0,type:!0,cost:!0,operationLimit:!0})),r=s.exports.useMemo(()=>g(S,e),[e]);return l(p,{children:[t(j,{currentRoute:"/shipData"}),t(b,{shipFilter:e,columnConfig:i,onFilterChange:o,onColumnConfigChange:n}),t(F,{disabled:Object.values(i).filter(a=>a).length>3,children:t(f,{p:1,children:t(c,{shipDefinitions:r,columnConfig:i})})})]})};export{L as ShipDataPage,L as default};
