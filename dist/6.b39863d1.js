webpackJsonp([6],{"135A":function(t,e,n){t.exports=n("ZAo9")},"7d5A":function(t,e,n){var s,a,i;!function(o,r){a=[t,e,n("j3lb"),n("Ddvr"),n("YBLM")],s=r,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e,n,s,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(n),r=i(a);e.default={name:"bm-lushu",render:function(t){},mixins:[(0,o.default)("lushu")],props:{path:{type:Array,default:[]},landmarkPois:{type:Array,default:function(){return[]}},icon:{type:Object},speed:{type:Number,default:4e3},content:{type:String,default:""},autoView:{type:Boolean,default:!1},rotation:{type:Boolean,default:!1},infoWindow:{type:Boolean,default:!0},play:{type:Boolean,default:!0}},watch:{path:{handler:function(t){this.reload()},deep:!0},landmarkPois:{handler:function(t){this.reload()},deep:!0},icon:{handler:function(t){var e=this.originInstance,n=(this.content,(0,s.createIcon)(BMap,t));e._opts.icon=n,e._marker=n},deep:!0},speed:function(t){var e=this.originInstance;this.content;e._opts.speed=t},content:function(t){var e=this.originInstance,n=this.infoWindow;t&&n?e.showInfoWindow():e.hideInfoWindow(),e._opts.defaultContent=t,e._overlay&&e._overlay.setHtml(t)},autoView:function(t){var e=this.originInstance;this.content;e._opts.autoView=t},rotation:function(t){var e=this.originInstance;this.content;e._opts.enableRotation=t},infoWindow:function(t){var e=this.originInstance,n=this.content;e&&t&&n?e.showInfoWindow():e.hideInfoWindow()},play:function(t){var e=this.originInstance;t&&e?e.start():!this._isEnd&&e.pause()}},methods:{load:function(){var t=this,e=this.BMap,n=this.map,a=this.path,i=this.landmarkPois,o=this.icon,l=this.speed,_=this.content,v=this.autoView,c=this.rotation,h=this.infoWindow,p=this.play,u=this.originInstance=new r.default(n,a,{enableRotation:c,landmarkPois:i,showInfoWindow:h,defaultContent:_,icon:o&&(0,s.createIcon)(e,o),speed:l,autoView:v,onstart:function(e){t._isEnd=!1,t.$emit("start")},onstop:function(e){t._isEnd=!0,t.$emit("stop")},onpause:function(e){return t.$emit("pause")}});p&&a.length&&u.start(this),a.length&&(_&&h?u.showInfoWindow():u.hideInfoWindow())}}},t.exports=e.default})},Ddvr:function(t,e,n){(function(n){var s,a,i;!function(n,o){a=[e],s=o,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t){"use strict";function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.lng,s=e.lat;return new t.Point(n,s)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.x,s=e.y;return new t.Pixel(n,s)}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.sw,a=n.ne;return new t.Bounds(e(t,s),e(t,a))}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,s=e.height;return new t.Size(n,s)}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.url,s=e.size,a=e.opts,o=void 0===a?{}:a;return new t.Icon(n,i(t,s),{anchor:o.anchor&&i(t,o.anchor),imageSize:o.imageSize&&i(t,o.imageSize),imageOffset:o.imageOffset&&i(t,o.imageOffset),infoWindowAnchor:o.infoWindowAnchor&&i(t,o.infoWindowAnchor),printImageUrl:o.printImageUrl})}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.content,a=n.opts;return new t.Label(s,{offset:a.offset&&i(t,a.offset),position:a.position&&e(t,a.position),enableMassClear:a.enableMassClear})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e.path,a=e.opts;return new t.Symbol(n[s]||s,{anchor:a.anchor&&i(t,a.anchor),fillColor:a.fillColor,fillOpacity:a.fillOpacity,scale:a.scale,rotation:a.rotation,strokeColor:a.strokeColor,strokeOpacity:a.strokeOpacity,strokeWeight:a.strokeWeight})}function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.symbol,s=e.offset,a=e.repeat,i=e.fixedRotation;return new t.IconSequence(n&&l(t,n),s,a,i)}Object.defineProperty(t,"__esModule",{value:!0}),t.createPoint=e,t.createPixel=s,t.createBounds=a,t.createSize=i,t.createIcon=o,t.createLabel=r,t.createSymbol=l,t.createIconSequence=_})}).call(e,n("DuR2"))},YBLM:function(t,e,n){!function(e,n){t.exports=n()}(0,function(){function t(t,e){this._point=t,this._html=e}function e(){t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){var e=this._div=n.dom.create("div",{style:"border:solid 1px #ccc;width:auto;min-width:50px;text-align:center;position:absolute;background:#fff;color:#000;font-size:12px;border-radius: 10px;padding:5px;white-space: nowrap;"});return e.innerHTML=this._html,t.getPanes().floatPane.appendChild(e),this._map=t,e},t.prototype.draw=function(){this.setPosition(this.lushuMain._marker.getPosition(),this.lushuMain._marker.getIcon().size)},n.object.extend(t.prototype,{setPosition:function(t,e){var s=this._map.pointToOverlayPixel(t),a=n.dom.getStyle(this._div,"width"),i=n.dom.getStyle(this._div,"height"),o=parseInt(this._div.clientWidth||a,10);parseInt(this._div.clientHeight||i,10);this._div.style.left=s.x-o/2+"px",this._div.style.bottom=-(s.y-e.height)+"px"},setHtml:function(t){this._div.innerHTML=t},setRelatedClass:function(t){this.lushuMain=t}})}var n={};n.dom={},n.dom.g=function(t){return"string"==typeof t||t instanceof String?document.getElementById(t):t&&t.nodeName&&(1==t.nodeType||9==t.nodeType)?t:null},n.g=n.G=n.dom.g,n.lang=n.lang||{},n.lang.isString=function(t){return"[object String]"==Object.prototype.toString.call(t)},n.isString=n.lang.isString,n.dom._g=function(t){return n.lang.isString(t)?document.getElementById(t):t},n._g=n.dom._g,n.dom.getDocument=function(t){return t=n.dom.g(t),9==t.nodeType?t:t.ownerDocument||t.document},n.browser=n.browser||{},n.browser.ie=n.ie=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:void 0,n.dom.getComputedStyle=function(t,e){t=n.dom._g(t);var s,a=n.dom.getDocument(t);return a.defaultView&&a.defaultView.getComputedStyle&&(s=a.defaultView.getComputedStyle(t,null))?s[e]||s.getPropertyValue(e):""},n.dom._styleFixer=n.dom._styleFixer||{},n.dom._styleFilter=n.dom._styleFilter||[],n.dom._styleFilter.filter=function(t,e,s){for(var a,i=0,o=n.dom._styleFilter;a=o[i];i++)(a=a[s])&&(e=a(t,e));return e},n.string=n.string||{},n.string.toCamelCase=function(t){return t.indexOf("-")<0&&t.indexOf("_")<0?t:t.replace(/[-_][^-_]/g,function(t){return t.charAt(1).toUpperCase()})},n.dom.getStyle=function(t,e){var s=n.dom;t=s.g(t),e=n.string.toCamelCase(e);var a=t.style[e]||(t.currentStyle?t.currentStyle[e]:"")||s.getComputedStyle(t,e);if(!a){var i=s._styleFixer[e];i&&(a=i.get?i.get(t):n.dom.getStyle(t,i))}return(i=s._styleFilter)&&(a=i.filter(e,a,"get")),a},n.getStyle=n.dom.getStyle,n.dom._NAME_ATTRS=function(){var t={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",usemap:"useMap",frameborder:"frameBorder"};return n.browser.ie<8?(t.for="htmlFor",t.class="className"):(t.htmlFor="for",t.className="class"),t}(),n.dom.setAttr=function(t,e,s){return t=n.dom.g(t),"style"==e?t.style.cssText=s:(e=n.dom._NAME_ATTRS[e]||e,t.setAttribute(e,s)),t},n.setAttr=n.dom.setAttr,n.dom.setAttrs=function(t,e){t=n.dom.g(t);for(var s in e)n.dom.setAttr(t,s,e[s]);return t},n.setAttrs=n.dom.setAttrs,n.dom.create=function(t,e){var s=document.createElement(t),a=e||{};return n.dom.setAttrs(s,a)},n.object=n.object||{},n.extend=n.object.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t};var s=function(t,e,n){try{BMap}catch(t){throw Error("Baidu Map JS API is not ready yet!")}!e||e.length<1||(this._map=t,this._path=e,this.i=0,this._setTimeoutQuene=[],this._projection=this._map.getMapType().getProjection(),this._opts={icon:null,speed:4e3,defaultContent:"",showInfoWindow:!1},this._setOptions(n),this._rotation=0,!this._opts.icon instanceof BMap.Icon&&(this._opts.icon=defaultIcon))};return s.prototype._setOptions=function(t){if(t)for(var e in t)t.hasOwnProperty(e)&&(this._opts[e]=t[e])},s.prototype.start=function(){var t=this,e=t._path.length;if(this._opts.onstart&&this._opts.onstart(t),t.i&&t.i<e-1){if(!t._fromPause)return;t._fromStop||t._moveNext(++t.i)}else!t._marker&&t._addMarker(),t._timeoutFlag=setTimeout(function(){!t._overlay&&t._addInfoWin(),t._moveNext(t.i)},400);this._fromPause=!1,this._fromStop=!1},s.prototype.stop=function(){this.i=0,this._fromStop=!0,clearInterval(this._intervalFlag),this._clearTimeout();for(var t=0,e=this._opts.landmarkPois,n=e.length;t<n;t++)e[t].bShow=!1;this._opts.onstop&&this._opts.onstop(this)},s.prototype.pause=function(){clearInterval(this._intervalFlag),this._fromPause=!0,this._clearTimeout(),this._opts.onpause&&this._opts.onpause(this)},s.prototype.hideInfoWindow=function(){this._opts.showInfoWindow=!1,this._overlay&&(this._overlay._div.style.visibility="hidden")},s.prototype.showInfoWindow=function(){this._opts.showInfoWindow=!0,this._overlay&&(this._overlay._div.style.visibility="visible")},s.prototype.dispose=function(){clearInterval(this._intervalFlag),this._setTimeoutQuene&&this._clearTimeout(),this._map&&(this._map.removeOverlay(this._overlay),this._map.removeOverlay(this._marker))},n.object.extend(s.prototype,{_addMarker:function(t){this._marker&&(this.stop(),this._map.removeOverlay(this._marker),clearTimeout(this._timeoutFlag)),this._overlay&&this._map.removeOverlay(this._overlay);var e=new BMap.Marker(this._path[0]);this._opts.icon&&e.setIcon(this._opts.icon),this._map.addOverlay(e),e.setAnimation(BMAP_ANIMATION_DROP),this._marker=e},_addInfoWin:function(){var n=this;!t.prototype.initialize&&e();var s=new t(n._marker.getPosition(),n._opts.defaultContent);s.setRelatedClass(this),this._overlay=s,this._map.addOverlay(s),this._opts.showInfoWindow?this.showInfoWindow():this.hideInfoWindow()},_getMercator:function(t){return this._map.getMapType().getProjection().lngLatToPoint(t)},_getDistance:function(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))},_move:function(t,e,n){var s=this,a=0,i=this._opts.speed/100,o=this._projection.lngLatToPoint(t),r=this._projection.lngLatToPoint(e),l=Math.round(s._getDistance(o,r)/i);if(l<1)return void s._moveNext(++s.i);s._intervalFlag=setInterval(function(){if(a>=l){if(clearInterval(s._intervalFlag),s.i>s._path.length)return;s._moveNext(++s.i)}else{a++;var i=n(o.x,r.x,a,l),_=n(o.y,r.y,a,l),v=s._projection.pointToLngLat(new BMap.Pixel(i,_));if(1==a){var c=null;s.i-1>=0&&(c=s._path[s.i-1]),1==s._opts.enableRotation&&s.setRotation(c,t,e),s._opts.autoView&&(s._map.getBounds().containsPoint(v)||s._map.setCenter(v))}s._marker.setPosition(v),s._setInfoWin(v)}},10)},setRotation:function(t,e,n){var s=this,a=0;if(e=s._map.pointToPixel(e),n=s._map.pointToPixel(n),n.x!=e.x){var i=(n.y-e.y)/(n.x-e.x);a=360*Math.atan(i)/(2*Math.PI),a=n.x<e.x?90-a+90:-a,s._marker.setRotation(-a)}else{var o=n.y-e.y,r=0;r=o>0?-1:1,s._marker.setRotation(90*-r)}},linePixellength:function(t,e){return Math.sqrt(Math.abs(t.x-e.x)*Math.abs(t.x-e.x)+Math.abs(t.y-e.y)*Math.abs(t.y-e.y))},pointToPoint:function(t,e){return Math.abs(t.x-e.x)*Math.abs(t.x-e.x)+Math.abs(t.y-e.y)*Math.abs(t.y-e.y)},_moveNext:function(t){var e=this;t<this._path.length-1?e._move(e._path[t],e._path[t+1],e._tween.linear):e.stop()},_setInfoWin:function(t){var e=this;e._overlay.setPosition(t,e._marker.getIcon().size);var n=e._troughPointIndex(t);-1!=n?(clearInterval(e._intervalFlag),e._overlay.setHtml(e._opts.landmarkPois[n].html),e._overlay.setPosition(t,e._marker.getIcon().size),e._pauseForView(n)):e._overlay.setHtml(e._opts.defaultContent)},_pauseForView:function(t){var e=this,n=setTimeout(function(){e._moveNext(++e.i)},1e3*e._opts.landmarkPois[t].pauseTime);e._setTimeoutQuene.push(n)},_clearTimeout:function(){for(var t in this._setTimeoutQuene)clearTimeout(this._setTimeoutQuene[t]);this._setTimeoutQuene.length=0},_tween:{linear:function(t,e,n,s){return(e-t)*n/s+t}},_troughPointIndex:function(t){for(var e=this._opts.landmarkPois,n=0,s=e.length;n<s;n++)if(!e[n].bShow&&this._map.getDistance(new BMap.Point(e[n].lng,e[n].lat),t)<10)return e[n].bShow=!0,n;return-1}}),s})},Yd1t:function(t,e,n){var s=n("VU/8")(n("7d5A"),null,null,null);t.exports=s.exports},ZAo9:function(t,e,n){var s=n("VU/8")(n("uytG"),n("mJMS"),null,null);t.exports=s.exports},j3lb:function(t,e,n){var s,a,i;!function(n,o){a=[t,e],s=o,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(){var t=this.unload,e=this.renderByParent,n=this.$parent;e&&n.reload(),t()}Object.defineProperty(e,"__esModule",{value:!0});var a={control:{unload:"removeControl"},layer:{unload:"removeTileLayer"},overlay:{unload:"removeOverlay"},contextMenu:{unload:"removeContextMenu"}},i=function t(e){return e.abstract||e.$el===e.$children[0].$el?t(e.$parent):e},o=function t(e){n(this,t),this.methods={ready:function(){var t=i(this.$parent),e=this.BMap=t.BMap,n=this.map=t.map;this.load(),this.$emit("ready",{BMap:e,map:n})},transmitEvent:function(t){this.$emit(t.type.replace(/^on/,""),t)},reload:function(){var t=this;this&&this.BMap&&this.$nextTick(function(){t.unload(),t.$nextTick(t.load)})},unload:function(){var t=this.map,n=this.originInstance;try{switch(e.type){case"search":return n.clearResults();case"autoComplete":case"lushu":return n.dispose();case"markerClusterer":return n.clearMarkers();default:t[a[e.type].unload](n)}}catch(t){}}},this.computed={renderByParent:function(){return this.$parent.preventChildrenRender}},this.mounted=function(){var t=i(this.$parent),e=t.map,n=this.ready;e?n():t.$on("ready",n)},this.destroyed=s,this.beforeDestroy=s};e.default=function(t){return new o({type:t})},t.exports=e.default})},mJMS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("路书")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),n("h2",[t._v("示例")]),t._v(" "),n("h3",[t._v("还原天安门到百度大厦的驾车路径")]),t._v(" "),n("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),n("h4",[t._v("预览")]),t._v(" "),n("doc-preview",[n("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:11}},[n("bm-driving",{attrs:{start:"天安门",end:"百度大厦",panel:!1,autoViewport:!0},on:{searchcomplete:t.handleSearchComplete}}),t._v(" "),n("bml-lushu",{attrs:{path:t.path,rotation:t.rotation,content:t.content,infoWindow:!0,speed:t.speed,icon:t.icon,play:t.play},on:{start:function(e){t.changeBtnText("pause")},stop:function(e){t.changeBtnText("play_arrow")},pause:function(e){t.changeBtnText("play_arrow")}}})],1),t._v(" "),n("md-table",[n("md-table-header",[n("md-table-head",[t._v("操作")]),t._v(" "),n("md-table-head",[t._v("旋转")]),t._v(" "),n("md-table-head",[t._v("行进速度")]),t._v(" "),n("md-table-head",[t._v("窗体内容")])],1),t._v(" "),n("md-table-body",[n("md-table-row",[n("md-table-cell",[n("md-button",{staticClass:"md-icon-button md-primary",on:{click:t.toggle}},[n("md-icon",[t._v(t._s(t.btnText))])],1)],1),t._v(" "),n("md-table-cell",[n("md-switch",{model:{value:t.rotation,callback:function(e){t.rotation=e},expression:"rotation"}})],1),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{model:{value:t.speed,callback:function(e){t.speed=t._n(e)},expression:"speed"}})],1)],1),t._v(" "),n("md-table-cell",[n("md-input-container",[n("md-input",{model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("code",[t._v("bml-lushu")]),t._v(" 是用来还原行进轨迹的组件。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性名")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("play")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("是否行进")])]),t._v(" "),n("tr",[n("td",[t._v("path")]),t._v(" "),n("td",[t._v("Array[{lng, lat}]")]),t._v(" "),n("td",[t._v("[]")]),t._v(" "),n("td",[t._v("构成路线的坐标点数组")])]),t._v(" "),n("tr",[n("td",[t._v("landmarkPois")]),t._v(" "),n("td",[t._v("Array[{lng, lat, html, pauseTime}]")]),t._v(" "),n("td",[t._v("[]")]),t._v(" "),n("td",[t._v("要在覆盖物移动过程中显示的特殊点")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("Icon")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("覆盖物的图标")])]),t._v(" "),n("tr",[n("td",[t._v("speed")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("4000")]),t._v(" "),n("td",[t._v("覆盖物移动速度")])]),t._v(" "),n("tr",[n("td",[t._v("autoView")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("是否自动调整路线视野")])]),t._v(" "),n("tr",[n("td",[t._v("rotation")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v("移动物体是否随路径旋转朝向")])]),t._v(" "),n("tr",[n("td",[t._v("infoWindow")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("是否开启移动物体上的信息窗体")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td"),t._v(" "),n("td",[t._v("信息窗体中的内容，无内容则不显示信息窗体")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("start")]),t._v(" "),n("td",[t._v("this")]),t._v(" "),n("td",[t._v("开始移动")])]),t._v(" "),n("tr",[n("td",[t._v("stop")]),t._v(" "),n("td",[t._v("this")]),t._v(" "),n("td",[t._v("停止本次移动")])]),t._v(" "),n("tr",[n("td",[t._v("pause")]),t._v(" "),n("td",[t._v("this")]),t._v(" "),n("td",[t._v("暂停移动")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"language-html"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"11"')]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("start")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"天安门"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("end")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"百度大厦"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("@searchcomplete")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"handleSearchComplete"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":panel")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"false"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v(":autoViewport")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("bm-driving")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("bml-lushu")]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("@stop")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"reset"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":path")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"path"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":icon")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"icon"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":play")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"play"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":rotation")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("bml-lushu")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" {BmlLushu} "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'vue-baidu-map'")]),t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    BmlLushu\n  },\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("play")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v(",\n      "),n("span",{staticClass:"hljs-attr"},[t._v("path")]),t._v(": [],\n      "),n("span",{staticClass:"hljs-attr"},[t._v("icon")]),t._v(": {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("url")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'http://api.map.baidu.com/library/LuShu/1.2/examples/car.png'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("size")]),t._v(": {"),n("span",{staticClass:"hljs-attr"},[t._v("width")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("52")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("height")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("26")]),t._v("},\n        "),n("span",{staticClass:"hljs-attr"},[t._v("opts")]),t._v(": {"),n("span",{staticClass:"hljs-attr"},[t._v("anchor")]),t._v(": {"),n("span",{staticClass:"hljs-attr"},[t._v("width")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("27")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("height")]),t._v(":"),n("span",{staticClass:"hljs-number"},[t._v("13")]),n("span",[t._v("}}")]),t._v("\n      }\n    }\n  },\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    reset () {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".play = "),n("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    },\n    handleSearchComplete (res) {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".path = res.getPlan("),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(").getRoute("),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v(").getPath()\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},uytG:function(t,e,n){var s,a,i;!function(o,r){a=[t,e,n("Yd1t")],s=r,void 0!==(i="function"==typeof s?s.apply(e,a):s)&&(t.exports=i)}(0,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{BmlLushu:s.default},data:function(){return{btnText:"play_arrow",path:[],rotation:!0,play:!1,content:"一言不合就开车",speed:5e3,icon:{url:"http://api.map.baidu.com/library/LuShu/1.2/examples/car.png",size:{width:52,height:26},opts:{anchor:{width:27,height:13}}}}},methods:{changeBtnText:function(t){this.btnText=t,"play_arrow"===t&&(this.play=!1)},toggle:function(){this.play=!this.play},handleSearchComplete:function(t){this.path=t.getPlan(0).getRoute(0).getPath()}}},t.exports=e.default})}});