import{P as y,Q as I,R as S,r as v,k as e,j as a,w as n,q as D,T as c,t,B as o,aQ as E,F as V,x as T,aR as A,y as Q}from"./index.ab4b431d.js";import{R as w}from"./ResponsiveDialog.614f3c8f.js";import{C as W,d as G}from"./ConfirmationDialog.81593bcd.js";import{A as R,T as J}from"./TextField.bd47117a.js";import{d as N}from"./Download.56fbb24a.js";var k={},K=I.exports;Object.defineProperty(k,"__esModule",{value:!0});var U=k.default=void 0,X=K(y),Y=S,Z=(0,X.default)((0,Y.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");U=k.default=Z;var F={},ee=I.exports;Object.defineProperty(F,"__esModule",{value:!0});var P=F.default=void 0,te=ee(y),ae=S,ne=(0,te.default)((0,ae.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");P=F.default=ne;var $={},re=I.exports;Object.defineProperty($,"__esModule",{value:!0});var oe=$.default=void 0,le=re(y),ie=S,ce=(0,le.default)((0,ie.jsx)("path",{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H15v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z"}),"FileOpen");oe=$.default=ce;const ve=m=>{const{confirmDialogTitle:b,confirmWarning:l,createPreview:u,parseInput:p,canRestore:C,onImport:g,onClose:i,onSelectFile:x,onRestoreFromBackup:h}=m,[s,d]=v.exports.useState(null),[_,z]=v.exports.useState(""),[j,f]=v.exports.useState(!1),B=()=>{x(r=>{d(r)},()=>{i()})},q=()=>{h==null||h(r=>{d(r)},()=>{i()})},H=r=>{f(!1),z(r.target.value)},M=()=>{f(!1);let r;try{r=p(_)}catch(L){console.error(L),f(!0);return}if(r===null){f(!0);return}d(r)},O=()=>{s&&g(s),i()};return s?e(W,{title:b,question:a(n,{children:[l&&e(R,{severity:"warning",children:l}),e(D,{p:1,children:e(c,{variant:"body2",component:"div",children:e("pre",{children:u(s)})})})]}),onConfirm:O,onCancel:()=>d(null)}):e(w,{title:t("label.dataImport"),content:a(n,{spacing:4,children:[l&&e(R,{severity:"warning",children:l}),a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.importFromFile")}),e(o,{variant:"outlined",onClick:B,disabled:!E(),children:t("button.chooseFile")})]}),a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.directInput")}),a(n,{direction:"row",spacing:1,children:[e(D,{sx:{flexGrow:1},children:e(J,{id:"json-input",placeholder:t("label.pasteHere"),variant:"outlined",value:_,onChange:H,error:j,helperText:j?t("validation.invalidValue"):void 0,fullWidth:!0,autoComplete:"off",size:"small"})}),e("div",{children:e(o,{variant:"outlined",onClick:M,disabled:_.length===0,children:t("button.parseInput")})})]})]}),C&&a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.restoreFromBackup")}),e(o,{variant:"outlined",onClick:q,children:t("button.restoreFromStorage")})]})]}),onClose:i,actions:e(V,{children:e(o,{variant:"outlined",onClick:i,children:t("button.cancel")})})})},fe=m=>{const{fileName:b,jsonContent:l,onClose:u,onStoreBackup:p}=m,[C,g]=v.exports.useState(!1),[i,x]=v.exports.useState(!1),h=()=>{A(l,b),u()},s=()=>{p&&(p(),x(!0))},d=()=>{Q(l).then(()=>{g(!0)})};return e(w,{title:t("label.dataExport"),content:a(n,{spacing:4,children:[a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.exportToFile")}),e(o,{variant:"outlined",onClick:h,startIcon:e(N,{}),children:t("button.downloadFile")})]}),a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.directCopy")}),e(o,{variant:"outlined",onClick:d,startIcon:C?e(T,{}):e(P,{}),children:t("button.copyToClipboard")})]}),p&&a(n,{spacing:1,children:[e(c,{variant:"body1",children:t("label.createBackup")}),e(o,{variant:"outlined",onClick:s,startIcon:i?e(T,{}):e(G,{}),children:t("button.storeBackupInStorage")})]})]}),onClose:u,actions:e(V,{children:e(o,{variant:"outlined",onClick:u,children:t("button.close")})})})};export{fe as E,ve as I,P as a,oe as b,U as d};
