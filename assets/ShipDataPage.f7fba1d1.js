import{k as i,j as C,F as S,bq as F,r as s,au as D,q as d,m as x}from"./index.2bd1e859.js";import{C as P,c as b,S as j}from"./ShipDataTable.d7dafed5.js";import{S as A,c as T,a as k}from"./ShipTypeFilterButton.4bca7d8c.js";import{A as v}from"./ActionBar.8bc05d74.js";import{N as O,P as q}from"./PageContent.c8deda8b.js";import{P as I}from"./PageFooter.84c3fa84.js";import"./domUtils.2de71e35.js";import"./MenuItem.da4dd3e8.js";import"./Popper.c19f49ed.js";import"./ClickAwayListener.c8554820.js";import"./useTable.8643271f.js";import"./sorting.c6946657.js";import"./TableRow.f6e372c5.js";import"./useFormControl.4c114cf8.js";const M=t=>{const{shipFilter:o,columnConfig:e,onFilterChange:a,onColumnConfigChange:r}=t;return i(v,{left:n=>C(S,{children:[i(P,{columnConfig:e,onChange:r,buttonProps:n},"columnConfig"),i(A,{filter:o,onChange:a,buttonProps:n},"filter")]})})},Y=()=>{var m,u;const[t,o]=F(),[e,a]=s.exports.useState(()=>f(t.getAll("filter"),T())),[r,n]=s.exports.useState(()=>f(t.getAll("columns"),b({name:!0,row:!0,type:!0,cost:!0,operationLimit:!0}))),[c,y]=s.exports.useState([(m=t.get("sortBy"))!=null?m:"type",(u=t.get("sortDirection"))!=null?u:"asc"]);s.exports.useEffect(()=>{var l,h;o(D.shipData.createSearchParams({filter:g(e),columns:g(r),sortBy:(l=c[0])!=null?l:null,sortDirection:(h=c[1])!=null?h:"asc"}))},[e,r,c]);const B=s.exports.useMemo(()=>k(x,e),[e]),p=Object.values(r).filter(l=>l).length>3;return C(S,{children:[i(O,{currentRoute:"/shipData"}),i(M,{shipFilter:e,columnConfig:r,onFilterChange:a,onColumnConfigChange:n}),i(q,{disableContainer:p,children:i(d,{component:"div",p:1,children:i(j,{shipDefinitions:B,columnConfig:r,initialSorting:c,onChangeSorting:y})})}),i(I,{disableContainer:p})]})};function f(t,o){if(t.length>0){const e=N(t);return Object.keys(o).reduce((a,r)=>{var n;return{...a,[r]:(n=e[r])!=null?n:!1}},{...o})}return o}function g(t){const o=Object.keys(t).filter(e=>t[e]);return o.length>0?o:[]}function N(t){return t.reduce((o,e)=>({...o,[e]:!0}),{})}export{Y as ShipDataPage,Y as default};