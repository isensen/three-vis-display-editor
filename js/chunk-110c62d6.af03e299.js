(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110c62d6"],{"27c8":function(t,e,n){},"4a71":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sceneStructure-container"},[n("el-tree",{attrs:{data:t.sceneStructure,"node-key":"vid",draggable:"","default-expand-all":""},on:{"node-drop":t.handleDrop,"node-click":t.nodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.data;return n("span",{staticClass:"custom-tree-node",class:{active:t.modelStatus[r.vid].active}},[n("vis-icon",{attrs:{code:t.$store.getters["vidAttributeMapper/iconMap"][r.vid]}}),n("span",[t._v(t._s(t.$store.getters["vidAttributeMapper/nameMap"][r.vid]))])],1)}}])})],1)},a=[],s={computed:{sceneStructure:function(){return this.$store.getters["sceneStructure/get"]},modelStatus:function(){return this.$store.getters["modelStatus/get"]}},methods:{nodeClick:function(t){var e=this.$store.getters["modelStatus/getActive"](),n=[t.vid];this.$store.commit("action/modelStatusActive",{newList:n,oldList:e})},handleDrop:function(t,e,n,r){var a=t.data.vid,s=e.data.vid;"inner"!==n&&(s=0===e.parent.level?"root":e.parent.data.vid),this.$store.commit("sceneStructure/change",{dargVid:a,dropVid:s})}}},c=s,i=(n("78394"),n("2877")),o=Object(i["a"])(c,r,a,!1,null,"2b7cfaed",null);e["default"]=o.exports},78394:function(t,e,n){"use strict";n("27c8")}}]);