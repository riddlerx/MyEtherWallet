(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0023d4e3"],{"0c0b":function(t,e,n){"use strict";var a=n("8d16"),i=n.n(a);i.a},"113e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transfer-registrar-container"},[n("div",{staticClass:"transfer-registrar-content"},[n("h3",[t._v(t._s(t.$t("ens.commit.is-available",{domain:t.fullDomainName})))]),n("p",[t._v(t._s(t.$t("ens.commit.register-domain",{domain:t.fullDomainName})))]),n("div",{staticClass:"secret-phrase-container"},[n("label",{attrs:{for:"range-slider"}},[t._v(t._s(t.$t("ens.commit.how-many-years")))]),n("b-form-input",{attrs:{id:"range-slider",type:"range",min:"1",max:"20",step:"1"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),n("div",[t._v(" "+t._s(t.duration>1?t.$tc("ens.commit.year",2,{duration:t.duration}):t.$tc("ens.commit.year",1))+" ")]),"ETH"===t.network.type.name?n("div",{staticClass:"estimate-price-container"},[t._v(" Estimated bid price: "+t._s(t.estimatedPrice.ethAmount)+" "+t._s(t.network.type.currencyName)+" ($"+t._s(t.estimatedPrice.usd)+") ")]):t._e()],1),n("div",{staticClass:"transfer-registrar-button"},[n("button",{class:["large-round-button-green-filled",t.loading?"disabled":"",t.info.disable?"disabled":""],on:{click:t.createCommitment}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("ens.register"))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.info.disable,expression:"info.disable"}]},[t._v(" "+t._s(t.$t(t.info.msg))+" ")])])]),n("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},i=[],s=(n("99af"),n("a9e3"),n("b680"),n("f3f3")),o=n("539d"),r=n("2f62"),c=n("901e"),d=n.n(c),u={components:{"interface-bottom-text":o["a"]},props:{hostName:{type:String,default:""},createCommitment:{type:Function,default:function(){}},loading:{type:Boolean,default:!1},tld:{type:String,default:""},usd:{type:Number,default:0}},data:function(){return{duration:"1"}},computed:Object(s["a"])({},Object(r["c"])("main",["account","network"]),{fullDomainName:function(){return"".concat(this.hostName,".").concat(this.tld)},pricingByLength:function(){return 3===this.hostName.length?640:4===this.hostName.length?160:5},estimatedPrice:function(){var t=new d.a(this.pricingByLength).dividedBy(this.usd).times(this.duration).toFixed(2),e=new d.a(this.pricingByLength).times(this.duration);return{usd:e,ethAmount:t}},info:function(){var t=this.account.balance;return"0"===t?{disable:!0,msg:"ens.commit.no-balance"}:{disable:!1,msg:""}}}),watch:{duration:function(t){this.$emit("updateDuration",Number(t))}},mounted:function(){""===this.hostName&&this.$router.push("/interface/dapps/manage-ens")}},m=u,l=(n("0c0b"),n("2877")),f=Object(l["a"])(m,a,i,!1,null,"da75df1c",null),h=f.exports;n.d(e,"default",(function(){return h}))},"8d16":function(t,e,n){}}]);
//# sourceMappingURL=chunk-0023d4e3.c7f1f184.js.map