(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{734:function(e,t,n){var content=n(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("829aaa08",content,!0,{sourceMap:!1})},813:function(e,t,n){"use strict";n(734)},814:function(e,t,n){var r=n(8)(!1);r.push([e.i,".sortable-tree-demo .drag-btn{cursor:move;font-size:12px}.sortable-tree-demo .vxe-body--row.sortable-chosen,.sortable-tree-demo .vxe-body--row.sortable-ghost{background-color:#dfecfb}",""]),e.exports=r},945:function(e,t,n){"use strict";n.r(t);n(33),n(24),n(27),n(45),n(46);var r=n(958),o=n(12),c=n(926),l=n(374),d=n.n(l),f=n(13);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={data:function(){var e=this,t=this.$createElement;return{showHelpTip2:!1,tableToolbar:{buttons:[{code:"add",name:"添加菜单",icon:"fa  fa-plus",status:"success"},{code:"save",name:"保存菜单",icon:"fa  fa-save",status:"primary"}],zoom:!0,custom:!0},editConfig:{trigger:"manual",mode:"row",autoClear:!1,icon:"none"},tableColumn:[{width:60,slots:{default:function(){return[t("span",{class:"drag-btn"},[t("i",{class:"vxe-icon--menu"})])]},header:function(){return[t("vxe-tooltip",{attrs:{content:"按住后可以上下拖动排序！",enterable:!0},model:{value:e.showHelpTip2,callback:function(t){e.showHelpTip2=t}}},[t("i",{class:"vxe-icon--question",on:{click:function(){e.showHelpTip2=!e.showHelpTip2}}})])]}}},{field:"title",title:"标题",editRender:{name:"input"},treeNode:!0},{field:"link",title:"地址",editRender:{name:"input"}},{title:"操作",slots:{default:"option"}}]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(f.b)("admin-settings",["tableTreeData"])),created:function(){this.treeDrop()},beforeDestroy:function(){this.sortable2&&this.sortable2.destroy()},methods:{deleteNode:function(e){this.deleteTableData(this.tableTreeData,e._XID)},toolbarClick:function(e){var t=this,code=e.code;e.button;switch(code){case"add":this.tableTreeData.push({title:"新菜单",link:"地址",children:[]});break;case"save":this.$store.dispatch("admin-settings/updateNavOption",this.tableTreeData).then((function(){t.$message.success("保存成功"),t.$store.dispatch("admin-settings/getNavOption")}))}},editRowEvent:function(e){this.$refs.grid.setActiveRow(e)},saveRowEvent:function(e){this.$refs.grid.clearActived()},addChild:function(e){e.children.push({title:"新菜单",link:"地址",children:[]})},treeDrop:function(){var e=this;this.$nextTick((function(){var t=e.$refs.grid;e.sortable2=c.a.create(t.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),{handle:".drag-btn",onEnd:function(n){var o=n.item,c=n.oldIndex,l={children:"children"},f=o,h=f.parentNode,v=f.previousElementSibling,m=e.tableTreeData,w=t.getRowNode(f).item,y=d.a.findTree(m,(function(e){return e===w}),l);if(v){var x=t.getRowNode(v).item,O=d.a.findTree(m,(function(e){return e===x}),l);if(d.a.findTree(w[l.children],(function(e){return x===e}),l)){var T=h.children[c];return h.insertBefore(f,T),e.$XModal.message({content:"不允许自己给自己拖动！",status:"error"})}var k=y.items.splice(y.index,1)[0];t.isTreeExpandByRow(x)?x[l.children].splice(0,0,k):O.items.splice(O.index+(y.index<O.index?0:1),0,k)}else{var D=y.items.splice(y.index,1)[0];m.unshift(D)}e.tableTreeData=Object(r.a)(m)}})}))},deleteTableData:function(e,t){for(var i=0;i<e.length;i++){if(e[i]._XID===t)return void e.splice(i,1);e[i].children&&e[i].children.length&&this.deleteTableData(e[i].children,t)}}}},m=(n(813),n(5)),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vxe-grid",{ref:"grid",staticClass:"sortable-tree-demo",attrs:{border:"","row-key":"","scroll-y":{enabled:!1},columns:e.tableColumn,data:e.tableTreeData,"tree-config":{children:"children"},"toolbar-config":e.tableToolbar,"edit-config":e.editConfig},on:{"toolbar-button-click":e.toolbarClick},scopedSlots:e._u([{key:"option",fn:function(t){var r=t.row;return[n("vxe-button",{attrs:{icon:"fa fa-plus",title:"添加子节点",circle:""},on:{click:function(t){return e.addChild(r)}}}),e._v(" "),e.$refs.grid.isActiveByRow(r)?n("vxe-button",{attrs:{icon:"fa fa-save",status:"primary",title:"保存",circle:""},on:{click:function(t){return e.saveRowEvent(r)}}}):n("vxe-button",{attrs:{icon:"fa fa-edit",title:"编辑",circle:""},on:{click:function(t){return e.editRowEvent(r)}}}),e._v(" "),n("el-popconfirm",{attrs:{title:"确定删除这个链接？"},on:{onConfirm:function(t){return e.deleteNode(r)}}},[n("vxe-button",{attrs:{slot:"reference",icon:"fa fa-trash",title:"删除",circle:""},slot:"reference"})],1)]}}])})],1)}),[],!1,null,null,null);t.default=component.exports}}]);