(window.webpackJsonp=window.webpackJsonp||[]).push([[42,34],{1267:function(t,e,n){"use strict";n(919)},1268:function(t,e,n){var o=n(8)(!1);o.push([t.i,".table-tag[data-v-03ff19b6]{margin:2px 5px}.vxe-button+.vxe-button[data-v-03ff19b6]{margin-left:0!important}",""]),t.exports=o},1311:function(t,e,n){"use strict";n.r(e);n(67);var o=n(651),r=n(16),c={layout:"admin",mixins:[o.default],data:function(){var t=this;return{selects:"",tableProxy:{ajax:{query:function(t){var e=t.page,form=t.form;return Object(r.g)({page:e.currentPage,page_size:e.pageSize,search_type:form.search_type,search_key:form.search_key})},delete:function(e){return t.updatePost(t.selects,null)}}},tableForm:{items:[{field:"search_type",title:"搜索类型",itemRender:{name:"$select",options:[{label:"文章id",value:"post_id"},{label:"文章标题",value:"title"}]}},{field:"search_key",title:"关键词",itemRender:{name:"$input",attrs:{placeholder:"请输入文章标题",name:"sex"}}},{itemRender:{name:"$button",props:{content:"查询",type:"submit",status:"primary"}}},{itemRender:{name:"$button",props:{content:"重置",type:"reset"}}}]},tableToolbar:{buttons:[{code:"write",name:"写文章",icon:"fa fa-plus",status:"primary"},{code:"publish",name:"发布",icon:"fa fa-send",status:"success"},{code:"cancel",name:"取消发布",status:"warning"},{code:"delete",name:"删除选中",icon:"fa fa-trash",status:"danger"}],zoom:!0,custom:!0},tableColumn:[{type:"checkbox",width:50},{field:"id",title:"文章id",width:90},{field:"title",title:"文章标题"},{title:"分类",slots:{default:"category"}},{title:"标签",slots:{default:"tag"}},{field:"view",title:"阅读数",width:100},{field:"good",title:"点赞数",width:100},{field:"comment",title:"评论数",width:100},{field:"status",title:"类型",formatter:"formatPostType",width:100},{field:"is_draft",title:"状态",formatter:"formatPostStatus",width:100},{field:"date",title:"发布时间"},{title:"操作",slots:{default:"option"}}]}},methods:{toolbarClick:function(t){var code=t.code;t.button;switch(code){case"write":this.gotoEdit(0);break;case"publish":this.updatePost(this.selects,"false");break;case"cancel":this.updatePost(this.selects,"true")}},checkboxChangeEvent:function(data){var t=[];data.records.map((function(e){return t.push(e.id)})),this.selects=t.toString()},updatePost:function(t,e){var n=this;if(""===t)this.$message.warning("请选择内容！");else{var data={};data=null!=e?{is_draft:e}:{delete:"true"},this.$store.dispatch("admin-posts/updatePost",{id:t,data:data}).then((function(t){n.$message.success("更新成功"),n.$refs.grid.commitProxy("query")})).catch((function(t){return n.$message.error(t)}))}},noticeUser:function(t){var e=this;this.$store.dispatch("admin-posts/noticeUser",t).then((function(t){return e.$message.success("发布订阅信息成功")})).catch((function(t){return e.$message.error(t)}))},gotoEdit:function(t){var path="/admin/post/post-edit";0!==t&&(path+="/"+t),this.$router.push(path),this.$store.dispatch("admin/editChangeId",{title:"文章编辑器",path:path})}}},l=(n(1267),n(5)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("vxe-grid",{ref:"grid",attrs:{border:"",resizable:"",height:"780","row-id":"id","pager-config":{pageSize:10},"proxy-config":t.tableProxy,"form-config":t.tableForm,"toolbar-config":t.tableToolbar,columns:t.tableColumn},on:{"toolbar-button-click":t.toolbarClick,"checkbox-change":t.checkboxChangeEvent,"checkbox-all":t.checkboxChangeEvent},scopedSlots:t._u([{key:"category",fn:function(e){var o=e.row;return t._l(o.category,(function(e,o){return n("el-tag",{key:o,staticClass:"table-tag",attrs:{size:"small"}},[t._v("\n          "+t._s(e)+"\n        ")])}))}},{key:"tag",fn:function(e){var o=e.row;return t._l(o.tags,(function(e,o){return n("el-tag",{key:o,staticClass:"table-tag",attrs:{type:"success",size:"mini"}},[t._v("\n          "+t._s(e)+"\n        ")])}))}},{key:"option",fn:function(e){var o=e.row;return[n("vxe-button",{attrs:{icon:"fa fa-edit",title:"编辑",circle:""},on:{click:function(e){return t.gotoEdit(o.id)}}}),t._v(" "),o.is_draft?n("vxe-button",{attrs:{icon:"fa fa-send",title:"发布",circle:""},on:{click:function(e){return t.updatePost(o.id,"false")}}}):n("vxe-button",{attrs:{icon:"fa fa-file-o",title:"草稿",circle:""},on:{click:function(e){return t.updatePost(o.id,"true")}}}),t._v(" "),n("vxe-button",{attrs:{icon:"fa fa-envelope",title:"发布邮件订阅通知",circle:""},on:{click:function(e){return t.noticeUser(o.id)}}}),t._v(" "),n("el-popconfirm",{attrs:{title:"确定要删除这篇文章？"},on:{onConfirm:function(e){return t.updatePost(o.id,null)}}},[n("vxe-button",{attrs:{slot:"reference",icon:"fa fa-trash",title:"删除",circle:""},slot:"reference"})],1)]}}])})],1)],1)}),[],!1,null,"03ff19b6",null);e.default=component.exports},651:function(t,e,n){"use strict";n.r(e),e.default={head:function(){return{title:"XBlog后台管理系统"}}}},919:function(t,e,n){var content=n(1268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("aecd07a6",content,!0,{sourceMap:!1})}}]);