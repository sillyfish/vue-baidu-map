webpackJsonp([81],{"4Fs4":function(t,s,e){var a=e("VU/8")(null,e("kDC+"),null,null);t.exports=a.exports},"6Kwi":function(t,s,e){t.exports=e("4Fs4")},"kDC+":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[[e("h1",[t._v("Bus Route Search")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Examples")]),t._v(" "),e("h3",[t._v("Search the route of 331 bus route.")]),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[e("baidu-map",[e("bm-view",{staticClass:"map"}),t._v(" "),e("bm-bus",{attrs:{keyword:"331","auto-viewport":!0,location:"北京"}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("BmBus")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("location")]),t._v(" "),e("td",[t._v("String, Point, None")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Search area. The type can be empty, coordinate point or city name.")])]),t._v(" "),e("tr",[e("td",[t._v("keyword")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Keyword of buslines.")])]),t._v(" "),e("tr",[e("td",[t._v("panel")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("Whether to show the result panel.")])]),t._v(" "),e("tr",[e("td",[t._v("autoViewport")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Whether to adjust the viewport after search.")])]),t._v(" "),e("tr",[e("td",[t._v("selectFirstResult")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Whether to select the first search result.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("getbuslistcomplete")]),t._v(" "),e("td",[t._v("{rs: BusListResult}")]),t._v(" "),e("td",[t._v("Triggers when the search of buses is completed.")])]),t._v(" "),e("tr",[e("td",[t._v("getbuslinecomplete")]),t._v(" "),e("td",[t._v("{rs: BusLine")]),t._v(" "),e("td",[t._v("Triggers when the search of buslines is completed.")])]),t._v(" "),e("tr",[e("td",[t._v("buslisthtmlset")]),t._v(" "),e("td",[t._v("{container: HTMLElement}")]),t._v(" "),e("td",[t._v("Triggers when the list of buses is rendered.")])]),t._v(" "),e("tr",[e("td",[t._v("buslinehtmlset")]),t._v(" "),e("td",[t._v("{container: HTMLElement}")]),t._v(" "),e("td",[t._v("Triggers when busline list is rendered.")])]),t._v(" "),e("tr",[e("td",[t._v("markersset")]),t._v(" "),e("td",[t._v("{pois: Array}")]),t._v(" "),e("td",[t._v("Triggers when markers are set.")])]),t._v(" "),e("tr",[e("td",[t._v("polylinesset")]),t._v(" "),e("td",[t._v("{routes: Array, routes: Array}")]),t._v(" "),e("td",[t._v("Triggers when the polyline is set.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("bm-bus")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("keyword")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"331"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v(">")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("bm-bus")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}}});