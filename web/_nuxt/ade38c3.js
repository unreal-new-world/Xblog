(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1304:function(t,n,e){"use strict";e.r(n);e(67);n.default={data:function(){return{currentSelect:[],funcName:""}},methods:{itemOption:function(t,option){var n=this;this.$store.dispatch(this.funcName,{id:t,option:option}).then((function(t){n.$message.success("操作成功"),n.getData(n.now)})).catch((function(t){return n.$message.error(t)}))},itemsOption:function(option){var t=[];this.currentSelect.map((function(n,e,c){return t.push(n.id)})),this.itemOption(t.join(","),option)},change:function(t){this.currentSelect=t}}}}}]);