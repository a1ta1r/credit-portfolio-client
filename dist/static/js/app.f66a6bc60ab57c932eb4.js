webpackJsonp([1],{"1/oy":function(t,e){},"5Vld":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},r,!1,function(t){a("Xfrr")},null,null).exports,o=a("/ocq"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"#/calculator",target:"_self"}},[t._v("\n        Кредитный Калькулятор\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Добро пожаловать в ваш кредитный портфелий))"}}},i,!1,function(t){a("5Vld")},"data-v-e7b3a8a2",null).exports,u=a("Zrlr"),m=a.n(u),c=function t(){m()(this,t)};c.LoanTypes={Even:"Аннуитетный",Differentiated:"Дифференцированный"};var p=c,v=a("wxAW"),f=a.n(v),d=a("Zx67"),h=a.n(d),y=a("zwoO"),_=a.n(y),g=a("Pf15"),b=a.n(g),P=function(t){function e(){return m()(this,e),_()(this,(e.__proto__||h()(e)).apply(this,arguments))}return b()(e,t),f()(e,[{key:"defaults",value:function(){return{paymentDate:null,paymentAmount:null}}},{key:"routes",value:function(){return{fetch:"/payment/{id}",save:"/payment"}}}]),e}(a("efHD").a),k=function(){function t(){m()(this,t)}return f()(t,null,[{key:"calculate",value:function(t){return t.PaymentType===p.LoanTypes.Even?this.calculateEqual(t):this.calculateDifferentiated(t)}},{key:"calculateEqual",value:function(t){var e=t.StartDate,a=t.NumberOfMonths,n=t.InterestRate/12,r=n*Math.pow(1+n,a)/(Math.pow(1+n,a)-1),s=t.PaymentAmount*r;t.TotalPaymentAmount=s*t.NumberOfMonths,t.PaymentList=[];for(var o=0;o<t.NumberOfMonths;o++){var i=e.setMonth(e.getMonth()+1);t.PaymentList[o]=new P({paymentDate:i,paymentAmount:s})}return t}},{key:"calculateDifferentiated",value:function(t){var e=t.StartDate,a=t.PaymentAmount/t.NumberOfMonths;t.TotalPaymentAmount=0,t.PaymentList=[];for(var n=0;n<t.NumberOfMonths;n++){var r=e.setMonth(e.getMonth()+1),s=a+(t.PaymentAmount-a*n)*t.InterestRate/t.NumberOfMonths;t.PaymentList[n]=new P({paymentDate:r,paymentAmount:s}),t.TotalPaymentAmount+=s}return t}}]),t}(),D=a("IC97"),T=a("D52M"),C={name:"calculator",components:{Datepicker:D.a},data:function(){return{paymentType:p.LoanTypes.Even,even:p.LoanTypes.Even,diff:p.LoanTypes.Differentiated,paymentPlan:new p,startDate:new Date,sum:1e6,months:12,rate:12.4,total:!1,calendar:[],options:{year:"numeric",month:"long",day:"numeric"},datepickerLocale:T.a,datepickerInput:"form-control"}},methods:{calculation:function(){this.paymentPlan.PaymentAmount=this.sum,this.paymentPlan.InterestRate=this.rate/100,this.paymentPlan.NumberOfMonths=this.months,this.paymentPlan.StartDate=this.startDate,this.paymentPlan.PaymentType=this.paymentType,this.paymentPlan=k.calculate(this.paymentPlan),this.calendar=this.paymentPlan.PaymentList,this.startDate=new Date,this.total=this.paymentPlan.TotalPaymentAmount}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calculator"},[a("div",{staticClass:"form-group form-inline"},[a("label",{},[t._v("Сумма кредита")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sum,expression:"sum"}],staticClass:"form-control",attrs:{type:"number",id:"sum",min:"0",title:"Сумма кредита"},domProps:{value:t.sum},on:{input:function(e){e.target.composing||(t.sum=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group  form-inline"},[a("label",[t._v("Количество месяцев")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.months,expression:"months"}],staticClass:"form-control",attrs:{type:"number",id:"month",title:"Количество месяцев"},domProps:{value:t.months},on:{input:function(e){e.target.composing||(t.months=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group form-inline"},[a("label",[t._v("Процент")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rate,expression:"rate"}],staticClass:"form-control",attrs:{type:"number",step:"0.01",min:"0",id:"rate",title:"Процент"},domProps:{value:t.rate},on:{input:function(e){e.target.composing||(t.rate=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group form-inline"},[a("label",[t._v("Дата начала платежей")]),t._v(" "),a("datepicker",{attrs:{"input-class":t.datepickerInput,language:t.datepickerLocale},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),t._v(" "),a("div",{staticClass:"form-group form-inline"},[a("label",[t._v("Тип выплат")]),t._v(" "),a("div",{staticClass:"radio"},[a("label",{staticClass:"radio-inline",attrs:{for:"evenradio"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentType,expression:"paymentType"}],attrs:{id:"evenradio",type:"radio"},domProps:{value:t.even,checked:t._q(t.paymentType,t.even)},on:{change:function(e){t.paymentType=t.even}}}),t._v("\n        "+t._s(t.even)+"\n      ")])]),t._v(" "),a("div",{staticClass:"radio"},[a("label",{staticClass:"radio-inline",attrs:{for:"diffradio"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentType,expression:"paymentType"}],attrs:{id:"diffradio",type:"radio"},domProps:{value:t.diff,checked:t._q(t.paymentType,t.diff)},on:{change:function(e){t.paymentType=t.diff}}}),t._v("\n        "+t._s(t.diff)+"\n      ")])])]),t._v(" "),a("div",{staticClass:"form-control-static"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",title:"Рассчитать",value:"Рассчитать"},on:{click:t.calculation}})]),t._v(" "),t.total?a("div",{staticClass:"form-group"},[a("h6",{staticClass:"form-control-static"},[t._v("Итоговая сумма платежей: "+t._s(t.paymentPlan.TotalPaymentAmount.toFixed(2)))]),t._v(" "),a("table",{staticClass:"table table-bordered"},t._l(t.calendar,function(e){return a("tr",{key:e.paymentDate,staticClass:"form-control-static"},[a("td",[t._v(t._s(new Date(e.paymentDate).toLocaleDateString("ru",t.options)))]),t._v(" "),a("td",[t._v(t._s(e.paymentAmount.toFixed(2)))])])}))]):t._e()])},staticRenderFns:[]};var A=a("VU/8")(C,w,!1,function(t){a("gRIL")},"data-v-dc87b2a6",null).exports;n.a.use(o.a);var M=new o.a({routes:[{path:"/",name:"HelloWorld",component:l},{path:"/calculator",name:"Calculator",component:A}]}),L=a("e6fC");a("Jmt5"),a("9M+g");n.a.config.productionTip=!1,n.a.use(L.a),new n.a({el:"#app",router:M,components:{App:s},template:"<App/>"})},Xfrr:function(t,e){},gRIL:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f66a6bc60ab57c932eb4.js.map