"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[425],{1748:function(e,n,s){s.r(n),s.d(n,{default:function(){return j}});var t=s(4270),c=s(3957),i=s(3433),l=s(9439),a=s(2791),r=s(1087),o=s(4304),u=s(2602),m=s(9613),d=s(184),h=function(){var e=(0,a.useState)([]),n=(0,l.Z)(e,2),s=n[0],t=n[1],c=(0,a.useState)(!1),h=(0,l.Z)(c,2),j=h[0],x=h[1],f=(0,a.useState)(0),_=(0,l.Z)(f,2),v=_[0],g=_[1],Z=(0,a.useState)(!1),b=(0,l.Z)(Z,2),p=b[0],N=b[1],k=(0,o.Z)(),C=k.loading,S=k.error,w=k.getAllComics;(0,a.useEffect)((function(){y(v,!0)}),[]);var y=function(e,n){x(!n),w(e).then(q)},q=function(e){var n=!1;e.length<8&&(n=!0),t([].concat((0,i.Z)(s),(0,i.Z)(e))),x(!1),g(v+8),N(n)};var A=function(e){var n=e.map((function(e,n){return(0,d.jsx)("li",{className:"comics__item",children:(0,d.jsxs)(r.rU,{to:"/comics/".concat(e.id),children:[(0,d.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,d.jsx)("div",{className:"comics__item-name",children:e.title}),(0,d.jsx)("div",{className:"comics__item-price",children:e.price})]})},n)}));return(0,d.jsx)("ul",{className:"comics__grid",children:n})}(s),E=S?(0,d.jsx)(m.Z,{}):null,F=C&&!j?(0,d.jsx)(u.Z,{}):null;return(0,d.jsxs)("div",{className:"comics__list",children:[E,F,A,(0,d.jsx)("button",{disabled:j,style:{display:p?"none":"block"},className:"button button__main button__long",onClick:function(){return y(v)},children:(0,d.jsx)("div",{className:"inner",children:"load more"})})]})},j=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.q,{children:[(0,d.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,d.jsx)("title",{children:"Comics page"})]}),(0,d.jsx)(c.Z,{}),(0,d.jsx)(h,{})]})}}}]);
//# sourceMappingURL=425.50a62a6f.chunk.js.map