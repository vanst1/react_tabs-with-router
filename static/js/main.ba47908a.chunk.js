(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),r=c.n(b),j=c(1),d=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Home"}),Object(j.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},l=function(){return Object(j.jsx)("h1",{className:"title",children:"Home page"})},o=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},x=function(e){var t=e.tab,c=e.selectedTabId;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":t.id===c}),children:Object(j.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})})})},h=function(e){var t=e.tabs,c=e.selectedTabId;return Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(x,{tab:e,selectedTabId:c},e.id)}))})})},O=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){var e,t=Object(i.h)().tabId,c=void 0===t?"":t,a=null===(e=O.find((function(e){return e.id===c})))||void 0===e?void 0:e.content;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(h,{tabs:O,selectedTabId:c}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:a||"Please select a tab"})]})},u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"*",element:Object(j.jsx)(o,{})}),Object(j.jsx)(i.b,{path:"home",element:Object(j.jsx)(i.a,{to:"/",replace:!0})}),Object(j.jsx)(i.b,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsxs)(i.b,{path:"tabs",element:Object(j.jsx)(m,{}),children:[Object(j.jsx)(i.b,{path:":tabId"}),Object(j.jsx)(i.b,{index:!0})]})]})})})]})};s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ba47908a.chunk.js.map