(this.webpackJsonplikewater=this.webpackJsonplikewater||[]).push([[8],{498:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),i=a(44),l=a(47),c=a(0),o=a.n(c),s=a(26),u=a(19),v=a(442),m=a(493),d=a(499),f=a(441),p=a(9),b=a(8),y=[{key:b.a,value:b.a,text:"Aid",icon:o.a.createElement("i",{className:"ri-first-aid-kit-fill ri-lg aid",style:{color:"gainsboro"}})},{key:b.c,value:b.c,text:"Info",icon:o.a.createElement("i",{className:"ri-broadcast-fill ri-lg info"})},{key:b.e,value:b.e,text:"Police",icon:o.a.createElement("i",{className:"ri-alarm-warning-fill ri-lg police"})},{key:b.g,value:b.g,text:"Safety",icon:o.a.createElement("i",{className:"ri-fire-fill ri-lg safety"})},{key:b.b,value:b.b,text:"SOS",icon:o.a.createElement("i",{className:"ri-lifebuoy-fill ri-lg sos"})}];t.default=Object(s.b)((function(e){return{eventTypes:e.events.eventTypes,markerPosition:e.map.markerPosition,inverted:e.preferences.invertedTheme}}),{reportEvent:p.q,getEventTypes:p.m})((function(e){var t=e.eventTypes,a=e.markerPosition,n=e.reportEvent,s=e.getEventTypes,p=e.inverted,b=null!==a&&void 0!==a?a:[0,0],g=Object(l.a)(b,2),k=g[0],E=g[1],h=Object(c.useState)(),x=Object(l.a)(h,2),O=x[0],j=x[1],w=Object(c.useState)(),S=Object(l.a)(w,2),C=S[0],T=S[1],N=Object(c.useState)(""),P=Object(l.a)(N,2),A=P[0],z=P[1],D=Object(u.f)();Object(c.useEffect)((function(){t||s()}),[t,s]);var F=Object(c.useMemo)((function(){return t&&O?t[O].map((function(e){return{key:e,text:e,value:e}})):[{text:"",value:""}]}),[t,O]),I=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(O&&k&&E&&A)){e.next=4;break}return e.next=3,n({coordinates:{lon:k,lat:E},eventCategory:O,eventType:C,eventDesc:A});case 3:D.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(v.a,{className:"clickable",raised:!0,inverted:p,style:{padding:16}},o.a.createElement(m.a,{inverted:p,as:"h3"},"Submit event",o.a.createElement(m.a.Subheader,{floated:"right"},"[".concat(E.toFixed(4),", ").concat(k.toFixed(4),"]"))),o.a.createElement(d.a,{inverted:p},o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Category"),o.a.createElement("div",{style:{overflowX:"auto",whiteSpace:"nowrap"}},y.map((function(e){var t=e.value,a=e.text,n=e.icon;return o.a.createElement(f.a,{circular:!0,toggle:!0,inverted:!0,size:"tiny",key:t,style:t===O?{color:"black",backgroundColor:"white",verticalAlign:"middle"}:{color:"white",backgroundColor:"transparent",verticalAlign:"middle"},onClick:function(){return j(t)}},n,a)})))),o.a.createElement(d.a.Select,{label:"Type",options:F,disabled:!O,placeholder:"General",onChange:function(e,t){var a=t.value;return T(a)}}),o.a.createElement(d.a.Input,{label:"Description",placeholder:"E.g. Barricade on Main St.",value:A,onChange:function(e,t){var a=t.value;return z(a)}}),o.a.createElement(f.a,{size:"small",circular:!0,color:"grey",content:"Submit",onClick:I})))}))}}]);
//# sourceMappingURL=8.74724e64.chunk.js.map