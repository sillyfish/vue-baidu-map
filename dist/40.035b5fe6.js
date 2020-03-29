webpackJsonp([40],{bqYa:function(t,s,a){t.exports=a("so5B")},dqxx:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("自动填充")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("注意事项")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("自定义控件、自动填充、本地检索组件的配合使用")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{attrs:{center:{lng:116.403765,lat:39.91485},zoom:11}},[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-control",{attrs:{offset:{width:10,height:10}}},[a("bm-auto-complete",{attrs:{sugStyle:{zIndex:1}},model:{value:t.keyword,callback:function(s){t.keyword=s},expression:"keyword"}},[a("text-field",{attrs:{placeholder:"关键词"}})],1)],1),t._v(" "),a("bm-local-search",{attrs:{keyword:t.keyword,"auto-viewport":!0}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmAutoComplete")]),t._v(" 组件默认渲染一个 "),a("code",[t._v("input")]),t._v(" 元素。你可以在该组件的 slot 中定义自己的表单组件来替代它。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("AutoComplete 类是一个百度地图 JS API 官方 "),a("strong",[t._v("不推荐")]),t._v(" 使用的核心类，因为它的定制性较差。")]),t._v(" "),a("li",[t._v("如果您对检索框有高级的 UI 定制需求，官方 "),a("strong",[t._v("推荐")]),t._v(" 使用 "),a("a",{attrs:{href:"http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi"}},[t._v("百度地图 Web API")]),t._v(" 进行查询，将返回的数据配合您自定义的 UI 组件进行开发。")]),t._v(" "),a("li",[t._v("自动填充组件弹出的检索框有时会被其它层覆盖，此时需要在 "),a("code",[t._v("sugStyle")]),t._v(" 属性中声明 "),a("code",[t._v("zIndex")]),t._v(" 加以调整。")]),t._v(" "),a("li",[t._v("此组件可能在 1.0.0 版本中移除，或以更好的方式实现。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("String, Map, Point")]),t._v(" "),a("td",[t._v("map")]),t._v(" "),a("td",[t._v("设定返回结果的所属范围。例如“北京市”")])]),t._v(" "),a("tr",[a("td",[t._v("types")]),t._v(" "),a("td",[t._v("Array, String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v('返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条')])]),t._v(" "),a("tr",[a("td",[t._v("sugStyle")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("定制提示框基本样式，通常用于调整 zIndex 防止被覆盖。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",[t._v("AutocompleteResult")]),t._v(" "),a("td",[t._v("在input框中输入字符后，发起列表检索，完成后的回调函数。")])]),t._v(" "),a("tr",[a("td",[t._v("confirm")]),t._v(" "),a("td",[t._v("{type,target,item}")]),t._v(" "),a("td",[t._v("回车选中某条记录后触发 item : { index : 1 /"),a("em",[t._v("高亮的记录，所属返回结果的index")]),t._v("/ ,value : {}/"),a("em",[t._v("结果数据，见AutocompleteResultPoi")]),t._v("/ }")])]),t._v(" "),a("tr",[a("td",[t._v("highlight")]),t._v(" "),a("td",[t._v("{type,target,fromitem,toitem}")]),t._v(" "),a("td",[t._v("键盘或者鼠标移动，某条记录高亮之后，触发 fromitem: { /"),a("em",[t._v("上一条记录的信息")]),t._v("/ index : 2 /"),a("em",[t._v("高亮的记录，所属返回结果的index")]),t._v("/ ,value : {}/"),a("em",[t._v("结果数据，见AutocompleteResultPoi")]),t._v("/ }, toitem : {/"),a("em",[t._v("当前记录的信息，与fromitem结构一致")]),t._v("/}")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.403765, lat: 39.914850}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":offset")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{width: '10px', height: '10px'}\"")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-auto-complete")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"keyword"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":sugStyle")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{zIndex: 1}"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("search-field")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"请输入地名关键字"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("search-field")]),t._v(">")]),t._v(" "),a("span",{staticClass:"hljs-comment"},[t._v("\x3c!-- 这里指代一个自定义搜索框组件 --\x3e")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-auto-complete")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-local-search")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":keyword")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"keyword"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" >")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-local-search")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("keyword")]),t._v(": "),a("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},so5B:function(t,s,a){var v=a("VU/8")(a("vnJ2"),a("dqxx"),null,null);t.exports=v.exports},vnJ2:function(t,s,a){var v,_,e;!function(a,l){_=[t,s],v=l,void 0!==(e="function"==typeof v?v.apply(s,_):v)&&(t.exports=e)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{keyword:""}}},t.exports=s.default})}});