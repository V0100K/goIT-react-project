"use strict";(self.webpackChunksmart_finance_team_work=self.webpackChunksmart_finance_team_work||[]).push([[124],{4592:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var a=n(885),r=n(2791),c=n(6030),o="CategoryList_img__m8hzr",s="CategoryList_rectangle_icon__fm+To",i="CategoryList_list__L38K1",l="CategoryList_item__0Tj0Y",u="CategoryList_link__6QhbK",d="CategoryList_darkTheme__1Zbcp",_="CategoryList_active__Eigvp",h=n(7609),p=[{name:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",svg:"".concat(h.Z,"#products")},{name:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c",svg:"".concat(h.Z,"#cocktail")},{name:"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f",svg:"".concat(h.Z,"#entertainment")},{name:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",svg:"".concat(h.Z,"#health")},{name:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",svg:"".concat(h.Z,"#car")},{name:"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430",svg:"".concat(h.Z,"#home")},{name:"\u0422\u0435\u0445\u043d\u0438\u043a\u0430",svg:"".concat(h.Z,"#tools")},{name:"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c",svg:"".concat(h.Z,"#bills")},{name:"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438",svg:"".concat(h.Z,"#hobby")},{name:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435",svg:"".concat(h.Z,"#education")},{name:"\u041f\u0440\u043e\u0447\u0435\u0435",svg:"".concat(h.Z,"#other")}],m=[{name:"\u0417/\u041f",svg:"".concat(h.Z,"#salary")},{name:"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434",svg:"".concat(h.Z,"#incomes")}],f={incomesTotal:function(e){var t,n;return null===(t=e.user.periodData)||void 0===t||null===(n=t.incomes)||void 0===n?void 0:n.incomeTotal},expenseTotal:function(e){var t,n;return null===(t=e.user.periodData)||void 0===t||null===(n=t.expenses)||void 0===n?void 0:n.expenseTotal},payment:function(e){var t,n;return null===(t=e.user.periodData)||void 0===t||null===(n=t.incomes)||void 0===n?void 0:n.incomesData},expenses:function(e){var t,n;return null===(t=e.user.periodData)||void 0===t||null===(n=t.expenses)||void 0===n?void 0:n.expensesData}},v=n(4392),g=n(6129),x=n(184),j=function(e){var t=e.reportTitle,n=e.setGraphObj,h=e.date,j=(e.onChageReportTitle,function(e){console.log('"click" :>> ',"click")}),b=(0,c.I0)(),N=(0,c.v9)(f.payment),w=(0,c.v9)(f.expenses),k=(0,r.useContext)(v.N).theme,C=(0,r.useState)(!1),Z=(0,a.Z)(C,2),R=Z[0],T=Z[1],y=void 0===N?[]:Object.keys(N),S=void 0===N?[]:Object.values(N),B=void 0===w?[]:Object.keys(w),D=void 0===w?[]:Object.values(w);(0,r.useEffect)((function(){b((0,g.N)(h))}),[h,b]);var P=function(e,t){T(t)};return(0,x.jsx)("ul",{className:"".concat(i," ").concat(k===v.n.light?"lightTheme":d),children:"\u0434\u043e\u0445\u043e\u0434\u044b"===t?S.sort((function(e,t){return t.total-e.total})).map((function(e,t){var a=m.find((function(e){var n=e.name;return y[t].toString()===n.toString()}));return(0,x.jsxs)("li",{id:t,className:"".concat(l," ").concat(R===t?_:""),onClick:function(a){P(0,t),j(),n(e,y[t])},children:[(0,x.jsx)("span",{children:"".concat(e.total,".00")}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("svg",{viewBox:"0 0 32 32",className:o,children:(0,x.jsx)("use",{href:a.svg})}),(0,x.jsx)("div",{className:s})]}),(0,x.jsx)("span",{children:y[t]})]},t)})):D.sort((function(e,t){return t.total-e.total})).map((function(e,t){var a=p.find((function(e){var n=e.name;return B[t].toString()===n.toString()}));return(0,x.jsxs)("li",{id:t+1,className:"".concat(l," ").concat(R===t+1?_:""),onClick:function(a){P(0,t+1),j(),n(e,B[t])},children:[(0,x.jsx)("span",{children:"".concat(e.total,".00")}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("svg",{viewBox:"0 0 32 32",className:o,children:(0,x.jsx)("use",{href:a.svg})}),(0,x.jsx)("div",{className:s})]}),(0,x.jsx)("span",{children:B[t]})]},t)}))})},b=n(6871),N={btn_backspace:"BackspaceBtn_btn_backspace__HN4I7",text:"BackspaceBtn_text__DZucY",img:"BackspaceBtn_img__SQECR",hidden_text:"BackspaceBtn_hidden_text__4lFV6",darkTheme:"BackspaceBtn_darkTheme__WkRoF"},w=function(){var e=(0,b.s0)(),t=(0,r.useContext)(v.N).theme;return(0,x.jsx)("div",{className:"".concat(N.btnBackspace_wrap," ").concat(t===v.n.light?"lightTheme":N.darkTheme),children:(0,x.jsxs)("button",{className:N.btn_backspace,type:"button",onClick:function(){e("/homepage/expense")},children:[(0,x.jsx)("svg",{viewBox:"0 0 28.3 28.3",className:N.img,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#backspace")})}),(0,x.jsx)("span",{className:N.text+" "+N.hidden_text,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})},k="ReportSwitcher_cost_incomes_wrap__pRKke",C="ReportSwitcher_btn__+RKn0",Z="ReportSwitcher_cost_incomes__CnARf",R="ReportSwitcher_arrows__FgRQU",T="ReportSwitcher_darkTheme__D6Qg1",y=function(e){var t=e.change,n=e.reportTitle,a=(0,r.useContext)(v.N).theme;return(0,x.jsxs)("div",{className:"".concat(k," ").concat(a===v.n.light?"lightTheme":T),children:[(0,x.jsx)("button",{type:"button",onClick:function(){t()},className:C,children:(0,x.jsx)("svg",{viewBox:"0 0 28.3 28.3",className:R,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#arrow_left")})})}),(0,x.jsx)("span",{className:Z,children:n}),(0,x.jsx)("button",{type:"button",onClick:function(){t()},className:C,children:(0,x.jsx)("svg",{viewBox:"0 0 28.3 28.3",className:R,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#arrow_rigth")})})})]})},S="ReportInfo_reportInfo_wrap__5wiOV",B="ReportInfo_costIncomes_report__-Hr5Y",D="ReportInfo_report_item__0+iIO",P="ReportInfo_numberCosts__MjhtB",I="ReportInfo_numberIncomes__jXQkv",O="ReportInfo_line__oBvpn",L="ReportInfo_text__cPWrc",E="ReportInfo_darkTheme__8yC33",F=function(){var e=(0,c.v9)(f.incomesTotal),t=(0,c.v9)(f.expenseTotal),n=(0,r.useContext)(v.N).theme;return(0,x.jsx)("div",{className:"".concat(S," ").concat(n===v.n.light?"lightTheme":E),children:(0,x.jsxs)("div",{className:B,children:[(0,x.jsxs)("div",{className:D+" "+O,children:[(0,x.jsx)("p",{className:L,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b:"}),(0,x.jsxs)("span",{className:P,children:["- ",t?"".concat(t,".00"):"0.00"," \u0433\u0440\u043d."]})]}),(0,x.jsxs)("div",{className:D,children:[(0,x.jsx)("p",{className:L,children:"\u0414\u043e\u0445\u043e\u0434\u044b:"}),(0,x.jsxs)("span",{className:I,children:["+ ",e?"".concat(e,".00"):"0.00"," \u0433\u0440\u043d."]})]})]})})},Q="CurrentPeriod_current_period__SlBJH",M="CurrentPeriod_current_period_wrap__ILDNN",A="CurrentPeriod_current_period_arrow__h1N1m",K="CurrentPeriod_current_period_btn__hx0Q1",z="CurrentPeriod_cost_incomes__LVleN",G="CurrentPeriod_darkTheme__fICg9",H="CurrentPeriod_text__zsHaQ",Y=n(918),V=function(){var e=(0,c.I0)(),t=(0,r.useContext)(v.N).theme,n=(0,c.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.transactions)||void 0===t?void 0:t.items})),o=(0,c.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.transactions)||void 0===t?void 0:t.itemsExpense})),s=(0,c.v9)((function(e){return e.transactions.date})),i=Y.P.convertDate(n,o),l=Y.P.transDate(s);console.log("date :>> ",s),console.log("startDate :>> ",l),console.log("dates :>> ",i);var u=i.length>0?i.find((function(e){return e===s.slice(0,7)})):null,d=u?i.indexOf(u):0;console.log("dateSelected :>> ",u);var _=(0,r.useState)(d),p=(0,a.Z)(_,2),m=p[0],f=p[1],j=(0,r.useState)(u),b=(0,a.Z)(j,2),N=b[0],w=b[1];console.log("currentDate :>> ",N);var k=(0,r.useState)(!1),C=(0,a.Z)(k,2),Z=C[0],R=C[1],T=(0,r.useState)(!1),y=(0,a.Z)(T,2),S=y[0],B=y[1],D=Y.P.transformCurrentDate(i.map((function(e){return e.slice(-2)}))),P=i.map((function(e){return e.slice(0,4)}));(0,r.useEffect)((function(){N||w(i[0]),console.log("useEffect :>> "),e((0,g.N)(N))}),[N,i,e]);return(0,x.jsxs)("div",{className:"".concat(Q," ").concat(t===v.n.light?"lightTheme":G),children:[(0,x.jsx)("span",{className:H,children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434:"}),(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("button",{type:"button",onClick:function(){return-1===m&&f(0),f(m+1),console.log("i prev:>> ",m),w(i[m+1]?i[m+1]:i[m]),m-1!==0&&B(!1),void(m===i.length-1&&(f(i.length-1),R(!Z),w(i[i.length-1])))},className:K,disabled:!(m<i.length-1)||Z,children:(0,x.jsx)("svg",{viewBox:"0 0 28.3 28.3",className:A,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#arrow_left")})})}),(0,x.jsx)("span",{className:z,children:i.length||u?" ".concat(D[m]," ").concat(P[m]):l}),(0,x.jsx)("button",{type:"button",onClick:function(){return-1===m&&f(i.length-1),f(m-1),console.log("i next:>> ",m),m!==i.length-1&&R(!1),0===m&&(f(0),w(i[0]),B(!S)),void w(i[m-1]?i[m-1]:i[0])},className:K,disabled:!(m>0)||S,children:(0,x.jsx)("svg",{viewBox:"0 0 28.3 28.3",className:A,children:(0,x.jsx)("use",{href:"".concat(h.Z,"#arrow_rigth")})})})]})]})},W=n(5671),X=n(145),U=n(2436),$=n(474),q=function(e){var t=(0,r.useState)(null),n=(0,a.Z)(t,2),c=n[0],o=n[1];return(0,r.useEffect)((function(){var t=e.current,n=new $.Z((function(e){e.forEach((function(e){o(e.contentRect)}))}));return n.observe(t),function(){n.unobserve(t)}}),[e]),c},J="GraphicComponent_bar_wrap__dzkAZ";W.kL.register(X.Z,W.uw,W.f$,W.ZL,W.WV,W.Dx,W.u,W.De);var ee=[{accentColor:"#FF751D"},{accentColor:"#FFDAC0"}],te=function(e){var t=e.obj,n=e.categoryName,c=e.show,o=(0,r.useContext)(v.N).theme,s=Object.entries(t).map((function(e){var t=(0,a.Z)(e,2);return{name:t[0],value:t[1]}})).filter((function(e){return"total"!==e.name})),i=s.map((function(e){return function(e){return e[Math.round(Math.random())].accentColor}(ee)}));s.sort((function(e,t){return t.value-e.value}));var l=(0,r.useRef)(),u=q(l),d=u?u.width:0,_=s.map((function(e){return e.name})),h={aspectRatio:d<635?.5:2,responsive:!0,indexAxis:d<635?"y":"x",layout:{padding:50},plugins:{datalabels:{display:!0,color:"#52555F",labels:{value:_,title:{color:"blue"}},anchor:"end",offset:d<635?10:-20,align:d<635?"top":"start"}},borderRadius:d<635?8:10,hoverBackgroundColor:"lightblue",scales:{xAxis:{grid:{color:" ".concat(o===v.n.light?"#ffffff":"#757781"),offset:!0},display:!(d<635)},yAxis:{grid:{color:" ".concat(o===v.n.light?"#ffffff":"#757781"),drawTicks:!1},display:d<635}}},p={labels:_,datasets:[{barThickness:d<635?15:38,minBarLength:5,label:n,data:s.map((function(e){return e.value})),backgroundColor:i,datalabels:{labels:{value:_}}}]};return(0,x.jsx)("div",{ref:l,className:J,children:c&&(0,x.jsx)(U.$Q,{options:h,data:p})})},ne={reportInfo_section:"ReportPage_reportInfo_section__2h1Gt",report_head_wrap:"ReportPage_report_head_wrap__G2PEc",reportBalance_wrap:"ReportPage_reportBalance_wrap__S+Rrq",balanceText:"ReportPage_balanceText__xAWSd",balanceNumber:"ReportPage_balanceNumber__BRMDB",section_categories:"ReportPage_section_categories__4KzXK",report_switch_wrap:"ReportPage_report_switch_wrap__0uMfO",graph_dependency_wrap:"ReportPage_graph_dependency_wrap__cke7S",darkTheme:"ReportPage_darkTheme__pQUX1"},ae=n(2598),re=function(){var e=(0,c.I0)(),t=(0,r.useContext)(v.N).theme,n=(0,r.useState)("\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),o=(0,a.Z)(n,2),s=o[0],i=o[1],l=(0,r.useState)({}),u=(0,a.Z)(l,2),d=u[0],_=u[1],h=(0,r.useState)(""),p=(0,a.Z)(h,2),m=p[0],f=p[1],g=(0,r.useState)(!1),b=(0,a.Z)(g,2),N=b[0],k=b[1],C=(0,c.v9)((function(e){var t,n;return null===(t=e.auth)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.balance})),Z=(0,c.v9)((function(e){return e.transactions.date})),R=Z?Z.slice(0,7):null,T=function(){i("\u0440\u0430\u0441\u0445\u043e\u0434\u044b"===s?"\u0434\u043e\u0445\u043e\u0434\u044b":"\u0440\u0430\u0441\u0445\u043e\u0434\u044b"),k(!1)};return(0,r.useEffect)((function(){e(ae.Z.getBalance())}),[e]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"".concat(ne.reportInfo_section," background ").concat(t===v.n.light?"lightTheme":ne.darkTheme),children:(0,x.jsxs)("div",{className:ne.wrap,children:[(0,x.jsxs)("div",{className:ne.report_head_wrap,children:[(0,x.jsx)(V,{}),(0,x.jsxs)("div",{className:ne.reportBalance_wrap,children:[(0,x.jsx)("span",{className:ne.balanceText,children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),(0,x.jsxs)("span",{className:ne.balanceNumber,children:[C?"".concat(C,".00"):"0.00"," uah"]})]}),(0,x.jsx)(w,{})]}),(0,x.jsx)(F,{}),(0,x.jsx)("div",{className:ne.section_categories,children:(0,x.jsxs)("div",{className:ne.report_switch_wrap,children:[(0,x.jsx)(y,{reportTitle:s,change:T}),(0,x.jsx)(j,{reportTitle:s,setGraphObj:function(e,t){k(!0),_(e),f(t),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},onChageReportTitle:T,date:R})]})}),(0,x.jsx)("div",{className:ne.graph_dependency_wrap,children:(0,x.jsx)(te,{obj:d,categoryName:m,show:N})})]})})})}},918:function(e,t,n){n.d(t,{P:function(){return o}});var a=n(2982),r=["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],c={normalizeDate:function(e){var t=function(e){return String(e).padStart(2,0)},n=t(e.getDate()),a=t(e.getMonth()+1),r=t(e.getFullYear());return"".concat(r,"-").concat(a,"-").concat(n)},months:r,transDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=new Date(e).getFullYear().toString(),n=new Date(e).getMonth(),a=r.find((function(e,t){return t===n}));return"".concat(a," ").concat(t)},transformCurrentDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t=e.flatMap((function(e,t,n){return r.filter((function(t,n){var a=(n+1).toString().padStart(2,0);return e.includes(a)}))}));return t}},convertDate:function(e,t){var n=e.map((function(e){return e.date.slice(0,7)})).filter((function(e,t,n){return n.indexOf(e)===t})),r=t.map((function(e,t){return e.date.slice(0,7)})).filter((function(e,t,n){return n.indexOf(e)===t}));return[].concat((0,a.Z)(n),(0,a.Z)(r)).filter((function(e,t,n){return n.indexOf(e)===t})).sort((function(e,t){return new Date(t)-new Date(e)}))}},o=c}}]);
//# sourceMappingURL=ReportPage___page.d3560293.chunk.js.map