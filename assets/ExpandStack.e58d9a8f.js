import{A as u,C as m,D as g,_ as p,r as d,O as x,G as A,I as f,k as a,J as S,q as h,j as y,aM as C,aN as b,aO as k,aP as w,F as E,w as I}from"./index.5c26d7d4.js";function M(o){return u("MuiAccordionActions",o)}m("MuiAccordionActions",["root","spacing"]);const O=["className","disableSpacing"],j=o=>{const{classes:s,disableSpacing:t}=o;return f({root:["root",!t&&"spacing"]},M,s)},_=g("div",{name:"MuiAccordionActions",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,!t.disableSpacing&&s.spacing]}})(({ownerState:o})=>p({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end"},!o.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),v=d.exports.forwardRef(function(s,t){const n=x({props:s,name:"MuiAccordionActions"}),{className:r,disableSpacing:i=!1}=n,l=A(n,O),e=p({},n,{disableSpacing:i}),c=j(e);return a(_,p({className:S(c.root,r),ref:t,ownerState:e},l))});var N=v;const P=o=>{var i;const{expandable:s,expanded:t,onToggle:n,unmount:r}=o;return d.exports.useEffect(()=>{s.initiallyOpened!==t&&n(s.id)},[s.initiallyOpened,n]),a(h,{sx:{flexGrow:1},children:y(C,{expanded:t,onChange:()=>n(s.id),children:[a(b,{id:s.id,expandIcon:(i=s.expandIcon)!=null?i:a(k,{}),children:s.summary}),a(w,{children:(!r||t)&&a(E,{children:s.details})}),s.actions&&a(N,{children:s.actions})]})})},R=d.exports.memo(P),U=o=>{const{expandables:s,unmount:t=!0,stackProps:n}=o,[r,i]=d.exports.useState(()=>s.reduce((e,c)=>({...e,[c.id]:c.initiallyOpened}),{})),l=d.exports.useCallback(e=>{i(c=>({...c,[e]:!c[e]}))},[]);return a(I,{spacing:1,...n,children:s.filter(e=>e.skip!==!0).map(e=>a(R,{expandable:e,expanded:!!r[e.id],onToggle:l,unmount:t},e.id))})};export{U as E};
