webpackJsonp([3],{"7/Ea":function(t,e,n){var s=n("VU/8")(n("r+js"),n("t7XB"),null,null);t.exports=s.exports},"8B3Q":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){function t(t,n){try{BMap}catch(t){throw Error("Baidu Map JS API is not ready yet!")}var s=e(t),a=new BMap.Polyline(s,n);return a.addEventListener("lineupdate",function(){this.isEditing&&this.enableEditing()}),a.cornerPoints=t,a.editMarkers=[],a.enableEditing=function(){var t=this;if(t.map){t.disableEditing();for(var n=0;n<t.cornerPoints.length;n++){var s=new BMap.Marker(t.cornerPoints[n],{icon:new BMap.Icon("http://api.map.baidu.com/library/CurveLine/1.5/src/circle.png",new BMap.Size(16,16)),enableDragging:!0,raiseOnDrag:!0});s.addEventListener("dragend",function(){t.cornerPoints.length=0;for(var n=0;n<t.editMarkers.length;n++)t.cornerPoints.push(t.editMarkers[n].getPosition());var s=e(t.cornerPoints);t.setPath(s)}),s.index=n,t.editMarkers.push(s),t.map.addOverlay(s)}}t.isEditing=!0},a.disableEditing=function(){this.isEditing=!1;for(var t=0;t<this.editMarkers.length;t++)this.map.removeOverlay(this.editMarkers[t]),this.editMarkers[t]=null;this.editMarkers.length=0},a.getPath=function(){return s},a}function e(t){for(var e=[],s=0;s<t.length-1;s++){var a=n(t[s],t[s+1]);a&&a.length>0&&(e=e.concat(a))}return e}function n(t,e){var n=[];if(!(t&&e&&t instanceof BMap.Point&&e instanceof BMap.Point))return null;var s,a,i,o,r,l,v=function(t){return 1-2*t+t*t},c=function(t){return 2*t-2*t*t},d=function(t){return t*t},u=0,_=0;if(void 0===e)return void(void 0!==n&&(n=[]));var p=parseFloat(t.lat),h=parseFloat(e.lat),m=parseFloat(t.lng),f=parseFloat(e.lng);for(f>m&&parseFloat(f-m)>180&&m<0&&(m=parseFloat(360+m)),m>f&&parseFloat(m-f)>180&&f<0&&(f=parseFloat(360+f)),0,l=0,h==p?(s=0,a=m-f):f==m?(s=Math.PI/2,a=p-h):(s=Math.atan((h-p)/(f-m)),a=(h-p)/Math.sin(s)),0==l&&(l=s+Math.PI/5),i=a/2,r=i*Math.cos(l)+m,o=i*Math.sin(l)+p,u=0;u<31;u++)n.push(new BMap.Point(m*v(_)+r*c(_)+f*d(_),p*v(_)+o*c(_)+h*d(_))),_+=1/30;return n}return t})},Az6V:function(t,e,n){t.exports=n("7/Ea")},Ddvr:function(t,e,n){var s,a,i;!function(n,o){a=[e],s=o,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t){"use strict";function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.lng,s=e.lat;return new t.Point(n,s)}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.x,s=e.y;return new t.Pixel(n,s)}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.sw,a=n.ne;return new t.Bounds(e(t,s),e(t,a))}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,s=e.height;return new t.Size(n,s)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.url,s=e.size,i=e.opts,o=void 0===i?{}:i;return new t.Icon(n,a(t,s),{anchor:o.anchor&&a(t,o.anchor),imageSize:o.imageSize&&a(t,o.imageSize),imageOffset:o.imageOffset&&a(t,o.imageOffset),infoWindowAnchor:o.infoWindowAnchor&&a(t,o.infoWindowAnchor),printImageUrl:o.printImageUrl})}function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.content,i=n.opts;return new t.Label(s,{offset:i.offset&&a(t,i.offset),position:i.position&&e(t,i.position),enableMassClear:i.enableMassClear})}Object.defineProperty(t,"__esModule",{value:!0}),t.createPoint=e,t.createPixel=n,t.createBounds=s,t.createSize=a,t.createIcon=i,t.createLabel=o})},JMrc:function(t,e,n){var s,a,i;!function(o,r){a=[t,e,n("oSuW")],s=r,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=this,a=e||s.default[this.$options.name];a&&a.forEach(function(e){var s="on"===e.slice(0,2),a=s?e.slice(2):e,i=n.$listeners[a];i&&t.addEventListener(e,i.fns)})};var s=function(t){return t&&t.__esModule?t:{default:t}}(n);t.exports=e.default})},"hu+X":function(t,e,n){var s,a,i;!function(o,r){a=[t,e,n("8B3Q"),n("j3lb"),n("JMrc"),n("Ddvr")],s=r,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e,n,s,a,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(n),l=o(s),v=o(a),c=["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"];e.default={name:"bml-curve-line",render:function(){},mixins:[(0,l.default)("overlay")],props:{points:{type:Array,default:Array},strokeColor:{type:String},strokeWeight:{type:Number},strokeOpacity:{type:Number},strokeStyle:{type:String},massClear:{type:Boolean,default:!0},clicking:{type:Boolean,default:!0},editing:{type:Boolean,default:!1}},watch:{points:{handler:function(t,e){this.originInstance.disableEditing(),this.reload()},deep:!0},strokeColor:function(t){this.originInstance.setStrokeColor(t)},strokeOpacity:function(t){this.originInstance.setStrokeOpacity(t)},strokeWeight:function(t){this.originInstance.setStrokeWeight(t)},strokeStyle:function(t){this.originInstance.setStrokeStyle(t)},editing:function(t){t?this.originInstance.enableEditing():this.originInstance.disableEditing()},massClear:function(t){t?this.originInstance.enableMassClear():this.originInstance.disableMassClear()},clicking:function(t){this.reload()}},methods:{load:function(){var t=this.BMap,e=this.map,n=this.points,s=this.strokeColor,a=this.strokeWeight,o=this.strokeOpacity,l=this.strokeStyle,d=this.editing,u=this.massClear,_=this.clicking,p=new r.default(n.map(function(e){return(0,i.createPoint)(t,e)}),{strokeColor:s,strokeWeight:a,strokeOpacity:o,strokeStyle:l,enableMassClear:u,enableClicking:_});d?p.enableEditing():p.disableEditing(),this.originInstance=p,e.addOverlay(p),v.default.call(this,p,c)}}},t.exports=e.default})},j3lb:function(t,e,n){var s,a,i;!function(n,o){a=[t,e],s=o,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(){var t=this.unload,e=this.renderByParent,n=this.$parent;e&&n.reload(),t()}Object.defineProperty(e,"__esModule",{value:!0});var a={control:{unload:"removeControl"},layer:{unload:"removeTileLayer"},overlay:{unload:"removeOverlay"},contextMenu:{unload:"removeContextMenu"}},i=function t(e){return e.abstract||e.$el===e.$children[0].$el?t(e.$parent):e},o=function t(e){n(this,t),this.methods={ready:function(){var t=i(this.$parent),e=this.BMap=t.BMap,n=this.map=t.map;this.load(),this.$emit("ready",{BMap:e,map:n})},transmitEvent:function(t){this.$emit(t.type.replace(/^on/,""),t)},reload:function(){var t=this;this&&this.BMap&&this.$nextTick(function(){t.unload(),t.$nextTick(t.load)})},unload:function(){var t=this.map,n=this.originInstance;try{switch(e.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"markerClusterer":return n.clearMarkers();default:t[a[e.type].unload](n)}}catch(t){}}},this.computed={renderByParent:function(){return this.$parent.preventChildrenRender}},this.mounted=function(){var t=i(this.$parent),e=t.map,n=this.ready;e?n():t.$on("ready",n)},this.destroyed=s,this.beforeDestroy=s};e.default=function(t){return new o({type:t})},t.exports=e.default})},oSuW:function(t,e,n){var s,a,i;!function(n,o){a=[t,e],s=o,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={"bm-map":["click","dblclick","rightclick","rightdblclick","maptypechange","mousemove","mouseover","mouseout","movestart","moving","moveend","zoomstart","zoomend","addoverlay","addcontrol","removecontrol","removeoverlay","clearoverlays","dragstart","dragging","dragend","addtilelayer","removetilelayer","load","resize","hotspotclick","hotspotover","hotspotout","tilesloaded","touchstart","touchmove","touchend","longpress"],"bm-geolocation":["locationSuccess","locationError"],"bm-overview-map":["viewchanged","viewchanging"],"bm-marker":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","infowindowclose","infowindowopen","dragstart","dragging","dragend","rightclick"],"bm-polyline":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-polygon":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-circle":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","lineupdate"],"bm-label":["click","dblclick","mousedown","mouseup","mouseout","mouseover","remove","rightclick"],"bm-info-window":["close","open","maximize","restore","clickclose"],"bm-ground":["click","dblclick"],"bm-autocomplete":["onconfirm","onhighlight"],"bm-point-collection":["click","mouseover","mouseout"]},t.exports=e.default})},osVk:function(t,e,n){var s=n("VU/8")(n("hu+X"),null,null,null);t.exports=s.exports},"r+js":function(t,e,n){var s,a,i;!function(o,r){a=[t,e,n("osVk")],s=r,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{BmlCurveLine:s.default},methods:{addPoint:function(){this.points.push({lng:116.404,lat:39.915})},update:function(t){this.points=t.target.cornerPoints}},data:function(){return{points:[{lng:116.432045,lat:39.910683},{lng:120.129721,lat:30.314429},{lng:121.491121,lat:25.127053}]}}},t.exports=e.default})},t7XB:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[[n("h1",[t._v("Curve Line")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("Events")]),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("Examples")]),t._v(" "),n("h3",[t._v("Add an editable polyline on the map")]),t._v(" "),n("h4",[t._v("Code")]),t._v(" "),t._m(3),t._v(" "),n("h4",[t._v("Preview")]),t._v(" "),n("doc-preview",[n("baidu-map",{staticClass:"map",attrs:{center:{lng:118.454,lat:32.955},zoom:5,"scroll-wheel-zoom":!0}},[n("bml-curve-line",{attrs:{points:t.points,editing:!0},on:{lineupdate:t.update}})],1),t._v(" "),n("md-table",[n("md-table-header",[n("md-table-head",[t._v("Points")]),t._v(" "),n("md-table-head",[t._v("Longitude")]),t._v(" "),n("md-table-head",[t._v("Latitude")])],1),t._v(" "),n("md-table-body",t._l(t.points,function(e,s){return n("md-table-row",{key:s},[n("md-table-cell",[t._v(t._s("Point-"+(s+1)))]),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{attrs:{"md-inline":""},model:{value:e.lng,callback:function(n){e.lng=t._n(n)},expression:"point.lng"}})],1)],1),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{attrs:{"md-inline":""},model:{value:e.lat,callback:function(n){e.lat=t._n(n)},expression:"point.lat"}})],1)],1)],1)}))],1),t._v(" "),n("md-button",{staticClass:"md-raised md-primary",on:{click:t.addPoint}},[t._v("\n    Add Point\n  ")])],1)]],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("BmlCurveLine")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),t._v(" "),n("th",[t._v("type")]),t._v(" "),n("th",[t._v("default")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("path")]),t._v(" "),n("td",[t._v("Array[Point]")]),t._v(" "),n("td",[t._v("[]")]),t._v(" "),n("td",[t._v("The key points that makes the curve line.")])]),t._v(" "),n("tr",[n("td",[t._v("strokeColor")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Polyline stroke color.")])]),t._v(" "),n("tr",[n("td",[t._v("strokeWeight")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Polyline stroke width.")])]),t._v(" "),n("tr",[n("td",[t._v("strokeOpacity")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("Polyline stroke opacity.")])]),t._v(" "),n("tr",[n("td",[t._v("strokeStyle")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'solid'")]),t._v(" "),n("td",[t._v("Polyline stroke style. "),n("code",[t._v("'solid'")]),t._v(" or "),n("code",[t._v("'dashed'")]),t._v(".")])]),t._v(" "),n("tr",[n("td",[t._v("massClear")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("Whether remove this overlay or not when "),n("code",[t._v("map.clearOverlays")]),t._v(" is called.")])]),t._v(" "),n("tr",[n("td",[t._v("editing")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("Enable editing the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("clicking")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("Whether to respond to a click event.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("name")]),t._v(" "),n("th",[t._v("parameter")]),t._v(" "),n("th",[t._v("description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("click")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when click on the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("dblclick")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when double click on the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("mousedown")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when the mouse is pressed down on the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("mouseup")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when the mouse is released on the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("mouseout")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when the mouse leaves the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("mouseover")]),t._v(" "),n("td",[t._v("event{type, target, point, pixel}")]),t._v(" "),n("td",[t._v("Triggers when the mouse enters the polyline.")])]),t._v(" "),n("tr",[n("td",[t._v("remove")]),t._v(" "),n("td",[t._v("event{type, target}")]),t._v(" "),n("td",[t._v("Triggers when the polyline is removed.")])]),t._v(" "),n("tr",[n("td",[t._v("lineupdate")]),t._v(" "),n("td",[t._v("event{type, target}")]),t._v(" "),n("td",[t._v("Triggers when the polyline is updated.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{lng: 118.454, lat: 32.955}"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"5"')]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("bml-curve-line")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":points")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"points"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":editing")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("@lineupdate")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"update"')]),t._v(">")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("bml-curve-line")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {BmlCurveLine} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'vue-baidu-map'")]),t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    BmlCurveLine\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    update (e) {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".points = e.target.cornerPoints\n    }\n  },\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("points")]),t._v(": [\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("116.432045")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("39.910683")]),t._v("},\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("120.129721")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("30.314429")]),t._v("},\n        {"),n("span",{staticClass:"hljs-attr"},[t._v("lng")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("121.491121")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("lat")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("25.127053")]),t._v("}\n      ]\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}}});