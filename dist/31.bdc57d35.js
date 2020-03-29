webpackJsonp([31],{"95TY":function(t,s,a){t.exports=a("hWZI")},HZ30:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("驾车路线规划")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("查询北京新街口途径三点到达南京新街口的驾车路线规划")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-driving",{attrs:{start:"新街口",end:"新街口",startCity:"北京",endCity:"南京","auto-viewport":!0,waypoints:["呼和浩特",{lng:112.53,lat:37.87},"陕西兵马俑"]}})],1)],1),t._v(" "),a("h3",[t._v("更换驾车策略")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("div",{staticClass:"toolbar"},[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.leastDistance}},[t._v("\n    最短距离\n  ")]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.leastTime}},[t._v("\n    最短时间\n  ")])],1),t._v(" "),a("baidu-map",[a("bm-view",{staticClass:"map"}),t._v(" "),a("bm-driving",{attrs:{panel:!1,start:"天通苑北",end:"宋家庄地铁站","auto-viewport":!0,location:"北京",policy:t.policy,waypoints:["西二旗"]}})],1)],1)]],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmDriving")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("String, Point, None")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("location表示检索区域，其类型可为空、坐标点或城市名称的字符串。当参数为空时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行。")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。")])]),t._v(" "),a("tr",[a("td",[t._v("end")]),t._v(" "),a("td",[t._v("String, Point, LocalResultPoi")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。")])]),t._v(" "),a("tr",[a("td",[t._v("startCity")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("起点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 endCity 属性同时使用，否则检索结果以 location 属性为准。")])]),t._v(" "),a("tr",[a("td",[t._v("endCity")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("终点城市，可以是城市名或者城市编码。作为地方性重复地名的辅助选项，须与 startCity 属性同时使用，否则检索结果以 location 属性为准。")])]),t._v(" "),a("tr",[a("td",[t._v("waypoints")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("途经点集合，最多支持10个途经点，可以是名称也可以是坐标。")])]),t._v(" "),a("tr",[a("td",[t._v("policy")]),t._v(" "),a("td",[t._v("DrivingPolicy")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("驾车导航的策略参数")])]),t._v(" "),a("tr",[a("td",[t._v("panel")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否选展现检索结果面板。")])]),t._v(" "),a("tr",[a("td",[t._v("autoViewport")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("检索结束后是否自动调整地图视野。")])]),t._v(" "),a("tr",[a("td",[t._v("selectFirstResult")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是否选择第一个检索结果。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("markersset")]),t._v(" "),a("td",[t._v("{pois: Array, transfers: Array}")]),t._v(" "),a("td",[t._v("标注添加完成后的回调函数。")])]),t._v(" "),a("tr",[a("td",[t._v("infohtmlset")]),t._v(" "),a("td",[t._v("{poi: LocalResultPoi, html: HTMLElement}")]),t._v(" "),a("td",[t._v("标注气泡内容创建后的回调函数。")])]),t._v(" "),a("tr",[a("td",[t._v("resultshtmlset")]),t._v(" "),a("td",[t._v("{container: HTMLElement}")]),t._v(" "),a("td",[t._v("结果列表添加完成后的回调函数。")])]),t._v(" "),a("tr",[a("td",[t._v("searchcomplete")]),t._v(" "),a("td",[t._v("{results: DrivingRouteResult}")]),t._v(" "),a("td",[t._v("检索完成后的回调函数。")])]),t._v(" "),a("tr",[a("td",[t._v("onpolylinesset")]),t._v(" "),a("td",[t._v("{routes: Array, routes: Array}")]),t._v(" "),a("td",[t._v("折线添加完成后的回调函数。")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"新街口"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("startCity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("endCity")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"南京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":waypoints")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"['呼和浩特', {lng: 112.53, lat: 37.87}, '陕西兵马俑']\"")]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-view")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"天通苑北"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"宋家庄地铁站"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":auto-viewport")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("policy")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_DRIVING_POLICY_LEAST_DISTANCE"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":panel")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v("location")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"北京"')]),t._v("\n      "),a("span",{staticClass:"hljs-attr"},[t._v(":waypoints")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"['西二旗']\"")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])}]}},hWZI:function(t,s,a){var v=a("VU/8")(a("pnya"),a("HZ30"),null,null);t.exports=v.exports},pnya:function(t,s,a){var v,_,n;!function(a,l){_=[t,s],v=l,void 0!==(n="function"==typeof v?v.apply(s,_):v)&&(t.exports=n)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{policy:""}},methods:{leastDistance:function(){this.policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"},leastTime:function(){this.policy="BMAP_DRIVING_POLICY_LEAST_TIME"}}},t.exports=s.default})}});