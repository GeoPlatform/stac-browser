"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[9363],{79363:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-component search-box"},[t("span",{staticClass:"icon"},[e._v("🔎")]),t("b-form-input",{attrs:{type:"search",placeholder:e.placeholder||e.$t("search.placeholder")},model:{value:e.searchTerm,callback:function(t){e.searchTerm="string"===typeof t?t.trim():t},expression:"searchTerm"}})],1)},n=[],s=r(19115),c={name:"SearchBox",components:{BFormInput:s.b},props:{value:{type:String,default:""},placeholder:{type:String,default:null}},data(){return{searchTerm:this.value}},watch:{searchTerm(e){e.length<this.minLength&&(e=""),this.$emit("input",e)}}},l=c,h=r(81656),u=(0,h.A)(l,a,n,!1,null,null,null),i=u.exports}}]);
//# sourceMappingURL=9363.f665e83d.js.map