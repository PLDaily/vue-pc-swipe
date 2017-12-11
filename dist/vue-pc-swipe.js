/*!
 * A lightweight vue swipe component that making the slides fade work in pc
 * v1.0.2 ©2017 PLDaily <pcd12321@gmail.com> 
 * https://github.com/PLDaily/vue-pc-swipe#readme
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VuePcSwipe=t():e.VuePcSwipe=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=1)}([function(e,t){e.exports=function(e,t,n,i,s,r){var o,u=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,u=e.default);var d="function"==typeof u?u.options:u;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId=s);var c;if(r?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=c):i&&(c=i),c){var a=d.functional,f=a?d.render:d.beforeCreate;a?(d._injectStyles=c,d.render=function(e,t){return c.call(t),f(e,t)}):d.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:u,options:d}}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SwipeItem=t.Swipe=void 0;var s=n(2),r=i(s),o=n(6),u=i(o);t.Swipe=r.default,t.SwipeItem=u.default},function(e,t,n){"use strict";function i(e){u||n(3)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),r=n.n(s),o=n(5),u=!1,l=n(0),d=i,c=l(r.a,o.a,!1,d,null,null);c.options.__file="src/Swipe.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=c.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Swipe",props:{continuous:{type:Boolean,default:!1},auto:{type:Number,default:5e3},startSlide:{type:Number,default:0}},data:function(){return{timer:null,index:this.startSlide,oldChildEl:null}},mounted:function(){this.$children.length<2&&(this.continuous=!1),this.slide(this.index),this.setUp()},methods:{setUp:function(){var e=this;this.continuous&&(this.timer=setInterval(function(){e.slide(e.index+1)},this.auto))},addClass:function(e,t){e.classList.add(t)},removeClass:function(e,t){e.classList.remove(t)},getNumSlides:function(){return this.$children.length},slide:function(e){e>=this.getNumSlides()&&(e=0),e<0&&(e=this.getNumSlides()-1),this.index=e,this.oldChildEl&&this.removeClass(this.oldChildEl,"is-active"),this.addClass(this.$children[e].$el,"is-active"),this.oldChildEl=this.$children[e].$el,this.$emit("change",e)},prev:function(){clearInterval(this.timer),this.timer=null,this.slide(this.index-1),this.setUp()},next:function(){clearInterval(this.timer),this.timer=null,this.slide(this.index+1),this.setUp()},getPos:function(){return this.index},mouseOver:function(){clearInterval(this.timer),this.timer=null},mouseOut:function(){this.setUp()}}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pc-swipe",on:{mouseover:e.mouseOver,mouseout:e.mouseOut}},[n("div",{staticClass:"pc-swipe-wrap"},[e._t("default")],2)])},s=[];i._withStripped=!0;var r={render:i,staticRenderFns:s};t.a=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),s=n.n(i),r=n(8),o=n(0),u=o(s.a,r.a,!1,null,null,null);u.options.__file="src/SwipeItem.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=u.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"SwipeItem"}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"pc-swipe-item"},[e._t("default")],2)},s=[];i._withStripped=!0;var r={render:i,staticRenderFns:s};t.a=r}])});