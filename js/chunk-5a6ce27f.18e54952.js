(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6ce27f"],{"2ab9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAkCAYAAADVeVmEAAAAAXNSR0IArs4c6QAAAVNJREFUaAXtmLFqAkEQhm8tFIS0KazTpE2lKdKkEAshdSBg4RukS5nWF1DTCD6Fha2dYmFvmTeI6c5vwy4sySYQrrmdnYGf3RtOmW//ueG4oqh5lGXZQBP0jnboruYlVysPwDEK48RFv9q/1vjXwM1CWreXCw3gYwTYpkRDv2UFDaxBCh24LrO9c3Z6HrgbbkU7rdCB1ep0jd+t/leaG2Ta3r+1t/HnyQ0X7Ifo0ucSWxvU+4w6kbo/yT0YY1ZfwMC2SBzQVeRmKSkLfeuBb7jYSiH7g2Np2yCnKL3DTaj36Fow/Qm2bji02iQGKOWh9UL9saFlYYcMrTVr+sHQtd+9FigWHyTv06d0BMAorLNZnU22rbWNXQ+zaBtrG6dwArk9s/abdB4vFbb7gH1CsZA1oPyjBuk0QisT1jk8+gYsF9YB22f4FR3RBvW8+7rqCfw8gTMZu333xRPRkQAAAABJRU5ErkJggg=="},"4dc8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"interact-with-contract-container"},[n("interface-container-title",{attrs:{title:t.$t("contract.interact")}}),t.interact?n("div",{staticClass:"contract-methods-container"},[n("h4",[t._v(t._s(t.$t("contract.read-write")))]),n("div",{staticClass:"contract-addr-container"},[n("div",{staticClass:"contract-addr"},[n("p",[t._v(t._s(t.$t("contract.addr"))+": "+t._s(t.address))])]),n("div",{staticClass:"picker-container"},[n("currency-picker",{attrs:{currency:t.contractMethods,"clear-currency":t.clearCurrency,token:!1,page:"interactWContract"},on:{selectedCurrency:t.selectedFunction}})],1)]),void 0!==t.selectedMethod.name?n("div",{staticClass:"method-arguments-container"},[n("h4",[t._v(t._s(t._f("capitalize")(t.selectedMethod.name)))]),t._l(t.selectedMethod.inputs,(function(e,a){return n("div",{key:e.name+a,staticClass:"input-item-container"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h5",[t._v(t._s(t._f("capitalize")(e.name))+" ("+t._s(e.type)+"):")])])]),n("div",{staticClass:"input-container"},["checkbox"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"checkbox"},domProps:{checked:Array.isArray(t.inputs[e.name])?t._i(t.inputs[e.name],null)>-1:t.inputs[e.name]},on:{change:function(a){var n=t.inputs[e.name],s=a.target,i=!!s.checked;if(Array.isArray(n)){var r=null,c=t._i(n,r);s.checked?c<0&&t.$set(t.inputs,e.name,n.concat([r])):c>-1&&t.$set(t.inputs,e.name,n.slice(0,c).concat(n.slice(c+1)))}else t.$set(t.inputs,e.name,i)}}}):"radio"===t.getType(e.type).type&&"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:"radio"},domProps:{checked:t._q(t.inputs[e.name],null)},on:{change:function(a){return t.$set(t.inputs,e.name,null)}}}):"radio"!==t.getType(e.type).type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:t.noInput,type:t.getType(e.type).type},domProps:{value:t.inputs[e.name]},on:{input:function(a){a.target.composing||t.$set(t.inputs,e.name,a.target.value)}}}):t._e(),"radio"===t.getType(e.type).type?n("div",{staticClass:"bool-input-container"},[n("div",{staticClass:"bool-items"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio"},domProps:{value:!0,checked:t._q(t.inputs[e.name],!0)},on:{change:function(a){return t.$set(t.inputs,e.name,!0)}}}),n("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.true")))])]),n("div",{staticClass:"bool-items"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[e.name],expression:"inputs[input.name]"}],attrs:{name:e.name,type:"radio",checked:""},domProps:{value:!1,checked:t._q(t.inputs[e.name],!1)},on:{change:function(a){return t.$set(t.inputs,e.name,!1)}}}),n("label",{attrs:{for:e.name}},[t._v(t._s(t.$t("contract.false")))])])]):t._e(),t.noInput?t._e():n("i",{class:["radio"!==t.getType(e.type).type?"non-bool-i":"",t.isValidInput(t.inputs[e.name],t.getType(e.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])})),n("div",[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.value-in-eth"))+":")])])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"non-bool-input",attrs:{step:"any",type:"text",name:"",placeholder:"ETH"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t.selectedMethod.constant?n("div",[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.result"))+":")])])]),n("div",{staticClass:"result-inputs"},["string"===t.resType||"boolean"===t.resType||"number"===t.resType?n("input",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}):t._e(),"object"===t.resType?n("div",t._l(t.selectedMethod.outputs,(function(e,a){return n("div",{key:e.name+a,staticClass:"result-container"},[n("label",{attrs:{for:""!==e.name?e.name:e.type+a}},[t._v(" "+t._s(t._f("capitalize")(""!==e.name?e.name:e.type))+" ")]),n("input",{staticClass:"result-input",attrs:{name:""!==e.name?e.name:e.type+a,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:t.result[a]}})])})),0):t._e()])]):t._e()],2):t._e(),n("div",{staticClass:"submit-button-container"},[n("div",{staticClass:"interact-buttons"},[n("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(e){return t.switchView("backwards")}}},[t._v(" "+t._s(t.$t("common.back"))+" ")]),t.selectedMethod.hasOwnProperty("inputs")&&(t.selectedMethod.constant&&t.selectedMethod.inputs.length>0||!t.selectedMethod.constant)?n("div",{class:[t.allValid?"":"disabled",t.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:t.write}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&!t.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[t._v(" "+t._s(t.$t("contract.write"))+" ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading&&t.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[t._v(t._s(t.$t("contract.read")))]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):t._e()]),n("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])]):n("div",{staticClass:"interact-div"},[n("div",{staticClass:"send-form contract-address-container"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",{staticClass:"contract-address-title"},[t._v(" "+t._s(t.$t("contract.addr"))+" ")]),n("div",{staticClass:"select-contract no-border"},[n("currency-picker",{attrs:{currency:t.mergedContracts,token:!1,"clear-currency":t.clearCurrency,page:"interactWContract"},on:{selectedCurrency:t.selectedContract}})],1)])]),n("div",{staticClass:"the-form domain-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{placeholder:t.$t("contract.enter-addr"),type:"text",name:"nameAddr"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),n("i",{staticClass:"address-validation-check",class:[t.isValidAddress&&""!==t.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"send-form"},[n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("contract.abi-json-int")))]),n("div",{staticClass:"copy-buttons"},[n("span",{on:{click:function(e){return t.deleteInput("abi")}}},[t._v(t._s(t.$t("common.clear")))]),n("span",{on:{click:function(e){return t.copyToClipboard("abi")}}},[t._v(" "+t._s(t.$t("common.copy"))+" ")])])])]),n("div",{staticClass:"the-form domain-name"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.abi,expression:"abi"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:t.abi},on:{input:function(e){e.target.composing||(t.abi=e.target.value)}}}),t._v(" "),n("i",{class:[t.isValidAbi&&""!==t.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),n("div",{staticClass:"submit-button-container"},[n("div",{class:[t.isValidAbi&&t.isValidAddress&&!t.errors.has("nameAddr")&&!t.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(e){return t.switchView("forward")}}},[t._v(" "+t._s(t.$t("common.continue"))+" "),n("img",{attrs:{src:a("2ab9"),alt:""}})]),n("div",{staticClass:"clear-all-btn",on:{click:function(e){return t.resetDefaults()}}},[t._v(" "+t._s(t.$t("common.clear-all"))+" ")])])])],1)},s=[],i=(a("99af"),a("4160"),a("d81d"),a("b0c0"),a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("498a"),a("159b"),a("d0ff")),r=(a("96cf"),a("c964")),c=a("0122"),o=a("f3f3"),d=a("2f62"),l=a("d7a2"),u=a("55c1"),p=a("ce96"),m=a("b7d3"),h=a("70c1"),v=a("8ded"),f=a.n(v),b={components:{"interface-container-title":u["a"],"currency-picker":l["a"]},data:function(){return{abi:"",address:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{},clearCurrency:!1}},computed:Object(o["a"])({},Object(d["c"])("main",["network","gasPrice","account","web3"]),{mergedContracts:function(){var t=f.a.get("customContracts")||[],e=this.network.type.contracts.concat(t);return e},isValidAbi:function(){return p["d"].isJson(this.abi)},isValidAddress:function(){return Object(m["a"])(this.address)},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(c["a"])(this.result)},allValid:function(){var t=this,e=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach((function(a){t.isValidInput(t.inputs[a.name],t.getType(a.type).solidityType)||(e=!1)})),e&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var t=this,e=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach((function(a){if("bytes32[]"===a.type){var n=t.formatInput(t.inputs[a.name]);e.push(n)}else"address"===a.type?e.push(t.inputs[a.name].toLowerCase().trim()):e.push(t.inputs[a.name])})),e},txValue:function(){return p["d"].sanitizeHex(h["toWei"](this.value,"ether").toString(16))}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={},this.clearCurrency=!this.clearCurrency},isValidInput:p["d"].isContractArgValid,getType:p["d"].solidityType,selectedContract:function(t){""===t.abi?this.abi="":this.abi=JSON.stringify(t.abi),this.address=t.address},selectedFunction:function(t){var e=this;if(t.hasOwnProperty("constant")){var a=new this.web3.eth.Contract([t],this.address.toLowerCase());!0===t.constant&&0===t.inputs.length?a.methods[t.name]().call({from:this.account.address.toLowerCase()}).then((function(t){e.result=t})).catch((function(t){e.loading=!1,p["e"].responseHandler(t,p["e"].WARN)})):this.result="",this.loading=!1,this.selectedMethod=t,this.selectedMethod.inputs.forEach((function(t){"bool"===t.type&&(e.inputs[t.name]=!1)}))}},formatInput:function(t){if("["===t[0])return t;var e=t.split(",");return e.map((function(t){return t.replace(" ","")}))},copyToClipboard:function(t){this.$refs[t].select(),document.execCommand("copy")},deleteInput:function(t){this.$refs[t].value=""},switchView:function(t){var e=this;switch(t){case"forward":""!==this.abi&&JSON.parse(this.abi).forEach((function(t){"constructor"!==t.type&&void 0!==t.constant&&e.contractMethods.push(t)})),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n,s,r,c,o,d,l,u,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.web3,n=new a.eth.Contract([t.selectedMethod],t.address.toLowerCase()),t.loading=!0,!0!==t.selectedMethod.constant){e.next=7;break}(s=n.methods)[t.selectedMethod.name].apply(s,Object(i["a"])(t.contractArgs)).call({from:t.account.address.toLowerCase()}).then((function(e){t.result=e,t.loading=!1})).catch((function(e){t.loading=!1,p["e"].responseHandler(e,!1)})),e.next=15;break;case 7:return e.next=9,a.eth.getTransactionCount(t.account.address.toLowerCase());case 9:return c=e.sent,o=!1,e.next=13,(r=n.methods)[t.selectedMethod.name].apply(r,Object(i["a"])(t.contractArgs)).estimateGas({from:t.account.address.toLowerCase(),value:t.txValue}).then((function(t){return t})).catch((function(e){t.loading=!1,p["e"].responseHandler(e,p["e"].ERROR),o=!0}));case 13:d=e.sent,o||(u=(l=n.methods)[t.selectedMethod.name].apply(l,Object(i["a"])(t.contractArgs)).encodeABI(),m={from:t.account.address.toLowerCase(),gas:d,nonce:c,gasPrice:Number(h["toWei"](t.gasPrice,"gwei")),value:t.txValue,to:t.address.toLowerCase(),data:u},t.loading=!1,a.eth.sendTransaction(m).catch((function(t){p["e"].responseHandler(t,p["e"].ERROR)})));case 15:case"end":return e.stop()}}),e)})))()}}},g=b,y=(a("e984"),a("2877")),C=Object(y["a"])(g,n,s,!1,null,"0dcc5cb6",null),w=C.exports;a.d(e,"default",(function(){return w}))},"694c":function(t,e,a){},e984:function(t,e,a){"use strict";var n=a("694c"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-5a6ce27f.18e54952.js.map