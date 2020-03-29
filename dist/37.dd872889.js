webpackJsonp([37],{"+nLJ":function(t,e,s){var a,v,_;!function(s,l){v=[t,e],a=l,void 0!==(_="function"==typeof a?a.apply(e,v):a)&&(t.exports=_)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{circlePath:{center:{lng:116.404,lat:39.915},radius:500}}},methods:{updateCirclePath:function(t){this.circlePath.center=t.target.getCenter(),this.circlePath.radius=t.target.getRadius()}}},t.exports=e.default})},"5DAb":function(t,e,s){var a=s("VU/8")(s("+nLJ"),s("dBUS"),null,null);t.exports=a.exports},M1BG:function(t,e,s){t.exports=s("5DAb")},dBUS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[[s("h1",[t._v("Circle Overlay")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Examples")]),t._v(" "),s("h3",[t._v("Add an editable circle on the map")]),t._v(" "),s("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),s("h4",[t._v("预览")]),t._v(" "),s("doc-preview",[s("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[s("bm-circle",{attrs:{center:t.circlePath.center,radius:t.circlePath.radius,editing:!0},on:{lineupdate:t.updateCirclePath}})],1),t._v(" "),s("md-table",[s("md-table-header",[s("md-table-head",[t._v("Longitude")]),t._v(" "),s("md-table-head",[t._v("Latitude")]),t._v(" "),s("md-table-head",[t._v("Radius")])],1),t._v(" "),s("md-table-body",[s("md-table-row",[s("md-table-cell",[s("md-input-container",[s("md-input",{attrs:{"md-inline":""},model:{value:t.circlePath.center.lng,callback:function(e){t.circlePath.center.lng=t._n(e)},expression:"circlePath.center.lng"}})],1)],1),t._v(" "),s("md-table-cell",[s("md-input-container",[s("md-input",{attrs:{"md-inline":""},model:{value:t.circlePath.center.lat,callback:function(e){t.circlePath.center.lat=t._n(e)},expression:"circlePath.center.lat"}})],1)],1),t._v(" "),s("md-table-cell",[s("md-input-container",[s("md-input",{attrs:{"md-inline":""},model:{value:t.circlePath.radius,callback:function(e){t.circlePath.radius=t._n(e)},expression:"circlePath.radius"}})],1)],1)],1)],1)],1)],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("BmCircle")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("center")]),t._v(" "),s("td",[t._v("Point")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The centre of circle.")])]),t._v(" "),s("tr",[s("td",[t._v("radius")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("The radius of circle.")])]),t._v(" "),s("tr",[s("td",[t._v("strokeColor")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Circle stroke color.")])]),t._v(" "),s("tr",[s("td",[t._v("strokeWeight")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Circle stroke width.")])]),t._v(" "),s("tr",[s("td",[t._v("strokeOpacity")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Circle stroke opacity.")])]),t._v(" "),s("tr",[s("td",[t._v("strokeStyle")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("'solid'")]),t._v(" "),s("td",[t._v("Circle stroke style. "),s("code",[t._v("'solid'")]),t._v(" or "),s("code",[t._v("'dashed'")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("fillColor")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Circle fill color.")])]),t._v(" "),s("tr",[s("td",[t._v("fillOpacity")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Circle fill opacity.")])]),t._v(" "),s("tr",[s("td",[t._v("massClear")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Whether remove this overlay or not when "),s("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),s("tr",[s("td",[t._v("editing")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Enable editing the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("clicking")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("Whether to respond to a click event.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("click")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when click on the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("dblclick")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when double click on the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("mousedown")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse is pressed down on the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseup")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse is released on the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseout")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse leaves the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("mouseover")]),t._v(" "),s("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),s("td",[t._v("Triggers when the mouse enters the circle.")])]),t._v(" "),s("tr",[s("td",[t._v("remove")]),t._v(" "),s("td",[t._v("event{type, target}")]),t._v(" "),s("td",[t._v("Triggers when the circle is removed.")])]),t._v(" "),s("tr",[s("td",[t._v("lineupdate")]),t._v(" "),s("td",[t._v("event{type, target}")]),t._v(" "),s("td",[t._v("Triggers when the circle is updated.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("bm-circle")]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"circlePath.center"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":radius")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"circlePath.radius"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("stroke-color")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"blue"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":stroke-opacity")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"0.5"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":stroke-weight")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"2"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"updateCirclePath"')]),t._v(" "),s("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("bm-circle")]),t._v(">")]),t._v("\n  "),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),s("span",{staticClass:"javascript"},[t._v("\n"),s("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),s("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),s("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),s("span",{staticClass:"hljs-attr"},[t._v("circlePath")]),t._v(": {\n        "),s("span",{staticClass:"hljs-attr"},[t._v("center")]),t._v(": {\n          "),s("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("116.404")]),t._v(",\n          "),s("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("39.915")]),t._v("\n        },\n        "),s("span",{staticClass:"hljs-attr"},[t._v("radius")]),t._v(": "),s("span",{staticClass:"hljs-number"},[t._v("500")]),t._v("\n      }\n    }\n  },\n  "),s("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    updateCirclePath (e) {\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".circlePath.center = e.target.getCenter()\n      "),s("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".circlePath.radius = e.target.getRadius()\n    }\n  }\n}\n")]),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}}});