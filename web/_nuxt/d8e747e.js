(window.webpackJsonp=window.webpackJsonp||[]).push([[4,34],{1300:function(e,t,n){"use strict";n(936)},1301:function(e,t,n){var r=n(8)(!1);r.push([e.i,"img.friend-avatar[data-v-4a3a75cc]{width:45px;height:45px;border-radius:50%}.vxe-button+.vxe-button[data-v-4a3a75cc]{margin-left:0!important}",""]),e.exports=r},1336:function(e,t,n){"use strict";n.r(t);n(67);var r=n(652),o=n(68),c={layout:"admin",mixins:[r.default],data:function(){var e=this;return{selects:"",tableProxy:{ajax:{query:function(e){var t=e.page,form=e.form;return Object(o.f)({url:"/barrages",type:"get",data:{page:t.currentPage,page_size:t.pageSize,search_type:form.search_type,search_key:form.search_key}})},delete:function(t){return e.deleteFriend(e.selects)}}},tableForm:{items:[{field:"search_type",title:"搜索类型",itemRender:{name:"$select",options:[{label:"昵称",value:"nickname"},{label:"弹幕内容",value:"content"}]}},{field:"search_key",visibleMethod:function(e){return"status"!==e.data.search_type},title:"关键词",itemRender:{name:"$input",attrs:{placeholder:"请输入关键词"}}},{itemRender:{name:"$button",props:{content:"查询",type:"submit",status:"primary"}}},{itemRender:{name:"$button",props:{content:"重置",type:"reset"}}}]},tableToolbar:{buttons:[{code:"delete",name:"删除选中",icon:"fa fa-trash",status:"danger"}],zoom:!0,custom:!0},tableColumn:[{type:"checkbox",width:50},{field:"nickname",title:"用户昵称",editRender:{name:"input"}},{field:"avatar",title:"弹幕头像",slots:{default:"avatar"},editRender:{name:"input"}},{field:"content",title:"弹幕内容",slots:{default:"content"},editRender:{name:"input"}},{field:"send",title:"发送时间",editRender:{name:"input"}},{title:"操作",slots:{default:"option"}}]}},methods:{checkboxChangeEvent:function(data){var e=[];data.records.map((function(t){return e.push(t.id)})),this.selects=e.toString()},updateData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.$message.success("更新成功"),this.$refs.grid.commitProxy("query")},deleteFriend:function(e){var t=this;""===e?this.$message.warning("请选择内容！"):this.$store.dispatch("admin-plugins/pluginRequest",{url:"/barrages/".concat(e),type:"delete",data:null}).then((function(e){return t.updateData()})).catch((function(e){return t.$message.error(e)}))}}},l=(n(1300),n(5)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vxe-grid",{ref:"grid",attrs:{border:"",resizable:"",height:"780","row-id":"id","pager-config":{pageSize:10},"proxy-config":e.tableProxy,"form-config":e.tableForm,"toolbar-config":e.tableToolbar,columns:e.tableColumn},on:{"checkbox-change":e.checkboxChangeEvent,"checkbox-all":e.checkboxChangeEvent},scopedSlots:e._u([{key:"avatar",fn:function(e){var t=e.row;return[n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"friend-avatar",attrs:{src:t.avatar}})])]}},{key:"content",fn:function(t){var r=t.row;return[n("span",{staticStyle:{"text-align":"center",background:"rgba(0,0,0,.3)",padding:"3px","border-radius":"3px"},style:{color:r.color}},[e._v(e._s(r.content))])]}},{key:"option",fn:function(t){var r=t.row;return[n("el-popconfirm",{attrs:{title:"确定要删除这条友链？"},on:{onConfirm:function(t){return e.deleteFriend(r.id)}}},[n("vxe-button",{attrs:{slot:"reference",icon:"fa fa-trash",title:"删除",circle:""},slot:"reference"})],1)]}}])})],1)}),[],!1,null,"4a3a75cc",null);t.default=component.exports},652:function(e,t,n){"use strict";n.r(t),t.default={head:function(){return{title:"XBlog后台管理系统"}}}},936:function(e,t,n){var content=n(1301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("6730b1da",content,!0,{sourceMap:!1})}}]);