(this.webpackJsonpproducts=this.webpackJsonpproducts||[]).push([[0],{15:function(t,c,e){var r={"./1.svg":27,"./2.svg":28,"./3.svg":29};function n(t){var c=s(t);return e(c)}function s(t){if(!e.o(r,t)){var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=15},23:function(t,c,e){},24:function(t,c,e){},25:function(t,c,e){},27:function(t,c,e){"use strict";e.r(c),c.default=e.p+"static/media/1.6db3f32f.svg"},28:function(t,c,e){"use strict";e.r(c),c.default=e.p+"static/media/2.3d83d82a.svg"},29:function(t,c,e){"use strict";e.r(c),c.default=e.p+"static/media/3.630470f2.svg"},38:function(t,c,e){"use strict";e.r(c);var r=e(0),n=e.n(r),s=e(16),i=e.n(s),o=(e(23),e(10)),a=e(8),d=e(2),u=(e(24),e(18)),j=(e(25),e(1)),l={1:"Tractor Porche",2:"Tractor Ferrari",3:"Tractor Tesla"},b=function(t){var c=t.product,n=Object(r.useState)({id:"1",image:"",alt:""}),s=Object(u.a)(n,2),i=s[0],a=s[1];Object(r.useEffect)((function(){a((function(t){var r=void 0===c?"1":c;return Object(o.a)(Object(o.a)({},t),{},{id:r,image:e(15)("./".concat(r,".svg")).default,alt:e(15)("./".concat(r,".svg")).default})}))}),[c]);return Object(j.jsxs)("div",{className:"products",children:[Object(j.jsxs)("div",{className:"products-container",children:[Object(j.jsxs)("h1",{className:"products-h1",children:["Producto: ",l[i.id]]}),Object(j.jsx)("img",{className:"products-img",src:i.image,alt:i.alt})]}),Object(j.jsx)("div",{className:"products-payment",children:Object(j.jsx)("button",{onClick:function(t){t.preventDefault();window.location.href="".concat("https://front-tech.github.io/payment","?product=").concat(i.id)},children:"Comprar tractor"})})]})};var p=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(a.a,{children:[Object(j.jsx)("nav",{style:{display:"none"},children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/products?product=1",children:"First Product"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/products?product=2",children:"Second Product"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/products?product=3",children:"Third Product"})})]})}),Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{exact:!0,path:"/",children:Object(j.jsx)(d.a,{to:"/products"})}),Object(j.jsx)(d.b,{exact:!0,path:"/products",render:function(t){var c=t.location.search.replace("?","").split("&").reduce((function(t,c){var e=c.split("=");return t[e[0]]=e[1],t}),{});return Object(j.jsx)(b,Object(o.a)({},c))}})]})]})})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,39)).then((function(c){var e=c.getCLS,r=c.getFID,n=c.getFCP,s=c.getLCP,i=c.getTTFB;e(t),r(t),n(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),h()}},[[38,1,2]]]);
//# sourceMappingURL=main.1dd2823d.chunk.js.map