webpackJsonp([6],{306:function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){return{userInfos:t.userinfo}}function l(t){return{InfoActions:(0,d.bindActionCreators)(m,t)}}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(6),p=o(f),h=n(127),d=n(45),y=n(71),_=n(314),b=o(_),v=n(326),m=r(v),g=n(315),w=o(g),E=n(413),O=o(E),T=n(416),A=n(318),P=o(A),S=n(328),j=r(S),x=function(t){function e(t,n){i(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.shouldComponentUpdate=b.default.shouldComponentUpdate.bind(r),r.state={isLogin:!1},r}return a(e,t),c(e,[{key:"render",value:function(){return p.default.createElement("div",null,p.default.createElement(w.default,{title:"登录"}),p.default.createElement(O.default,{getData:this.getData.bind(this)}))}},{key:"componentDidMount",value:function(){if(this.props.userInfos.userName){var t=this.props.userInfos.userName,e=P.default.getItem(j.USERNAME);console.log(e),0===t.length&&null==e||this.goUserPage()}}},{key:"getData",value:function(t,e){var n=this,r={phone:t,code:e};(0,T.LoginIn)(r).then(function(t){return t.json()}).then(function(t){if("success"===t.state){var e=n.props.userInfos;e.userName=r.phone,P.default.setItem(j.USERNAME,r.phone),n.props.InfoActions.update(e),n.goUserPage()}})}},{key:"goUserPage",value:function(){var t=this.props.location.pathname;if((t=t.replace("/login/",""))&&this.props.params.router){var e=this.props.location.query;if(e){var n="";for(var r in e)n="?"+r+"="+e[r];y.hashHistory.replace("/"+t+n)}else y.hashHistory.replace("/"+t)}else console.log(1),y.hashHistory.replace("/user")}}]),e}(p.default.Component),U=(0,h.connect)(u,l)(x);e.default=U},314:function(t,e,n){"use strict";var r=n(46);t.exports={shouldComponentUpdate:function(t,e){return!r(this.props,t)||!r(this.state,e)}}},315:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(6),l=r(u),c=n(314),f=r(c),p=n(71);n(316);var h=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.shouldComponentUpdate=f.default.shouldComponentUpdate.bind(r),r}return s(e,t),a(e,[{key:"render",value:function(){return l.default.createElement("div",{class:"header"},l.default.createElement("div",{class:"return",onClick:this.clickHandle.bind(this)},l.default.createElement("i",{class:"iconfont icon-fanhui"})),l.default.createElement("div",{class:"title"},this.props.title))}},{key:"clickHandle",value:function(){this.props.backUrl?p.hashHistory.push(this.props.backUrl):window.history.back()}}]),e}(l.default.Component);e.default=h},316:function(t,e,n){var r=n(317);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(298)(r,o);r.locals&&(t.exports=r.locals)},317:function(t,e,n){e=t.exports=n(297)(!1),e.push([t.i,".style__header--3UxKA {\n  position: relative;\n  background: #ff3131; }\n  .style__header--3UxKA .style__return--3AFQs {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: .13rem .14rem .13rem .12rem;\n    color: #fff;\n    line-height: .14rem; }\n    .style__header--3UxKA .style__return--3AFQs .style__iconfont--2Ln1C {\n      font-size: .14rem; }\n  .style__header--3UxKA .style__title--3e5Dl {\n    text-align: center;\n    padding: .13rem 0;\n    font-size: .14rem;\n    line-height: .14rem;\n    color: #fff; }\n",""]),e.locals={header:"style__header--3UxKA",return:"style__return--3AFQs",iconfont:"style__iconfont--2Ln1C",title:"style__title--3e5Dl"}},318:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getItem:function(t){var e=void 0;try{e=localStorage.getItem(t)}catch(t){__DEV__&&console.error("localStorage.getItem报错, ",t.message)}finally{return e}},setItem:function(t,e){try{localStorage.setItem(t,e)}catch(t){__DEV__&&console.error("localStorage.setItem报错, ",t.message)}},set:function(t,e){e=JSON.stringify(e),localStorage[t]=e},get:function(t){var e=localStorage[t];return null!=e?JSON.parse(e):null}}},319:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function a(t){var e=new FileReader,n=s(e);return e.readAsArrayBuffer(t),n}function u(t){var e=new FileReader,n=s(e);return e.readAsText(t),n}function l(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&m(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split("\r\n").forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function _(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],m=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(r)},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},o.prototype.getAll=function(t){return this.map[e(t)]||[]},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=[n(r)]},o.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){t.call(e,r,n,this)},this)},this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(_.prototype),_.prototype.clone=function(){return new _(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},_.error=function(){var t=new _(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];_.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new _(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=_,t.fetch=function(t,e){return new Promise(function(n,r){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new _(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},320:function(t,e,n){(function(e,r){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function i(t){Q=t}function s(t){Y=t}function a(){return function(){K(l)}}function u(){var t=setTimeout;return function(){return t(l,1)}}function l(){for(var t=0;t<q;t+=2){(0,Z[t])(Z[t+1]),Z[t]=void 0,Z[t+1]=void 0}q=0}function c(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[tt]&&k(o);var i=r._state;return i?function(){var t=n[i-1];Y(function(){return j(i,o,t,r._result)})}():T(r,o,t,e),o}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function y(t){try{return t.then}catch(t){return ot.error=t,ot}}function _(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function b(t,e,n){Y(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?g(t,n):E(t,n))},function(e){r||(r=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,O(t,o))},t)}function v(t,e){e._state===nt?E(t,e._result):e._state===rt?O(t,e._result):T(e,void 0,function(e){return g(t,e)},function(e){return O(t,e)})}function m(t,e,n){e.constructor===t.constructor&&n===c&&e.constructor.resolve===f?v(t,e):n===ot?O(t,ot.error):void 0===n?E(t,e):o(n)?b(t,e,n):E(t,e)}function g(e,n){e===n?O(e,h()):t(n)?m(e,n,y(n)):E(e,n)}function w(t){t._onerror&&t._onerror(t._result),A(t)}function E(t,e){t._state===et&&(t._result=e,t._state=nt,0!==t._subscribers.length&&Y(A,t))}function O(t,e){t._state===et&&(t._state=rt,t._result=e,Y(w,t))}function T(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+nt]=n,o[i+rt]=r,0===i&&t._state&&Y(A,t)}function A(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?j(n,r,o,i):o(i);t._subscribers.length=0}}function P(){this.error=null}function S(t,e){try{return t(e)}catch(t){return it.error=t,it}}function j(t,e,n,r){var i=o(n),s=void 0,a=void 0,u=void 0,l=void 0;if(i){if(s=S(n,r),s===it?(l=!0,a=s.error,s=null):u=!0,e===s)return void O(e,d())}else s=r,u=!0;e._state!==et||(i&&u?g(e,s):l?O(e,a):t===nt?E(e,s):t===rt&&O(e,s))}function x(t,e){try{e(function(e){g(t,e)},function(e){O(t,e)})}catch(e){O(t,e)}}function U(){return st++}function k(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[tt]||k(this.promise),V(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&E(this.promise,this._result))):O(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function B(t){return new C(this,t).promise}function H(t){var e=this;return new e(V(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function I(t){var e=this,n=new e(p);return O(n,t),n}function R(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this[tt]=U(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&R(),this instanceof F?x(this,t):M())}function N(){var t=void 0;if(void 0!==r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F}var L=void 0;L=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var V=L,q=0,K=void 0,Q=void 0,Y=function(t,e){Z[q]=t,Z[q+1]=e,2===(q+=2)&&(Q?Q(l):$())},z="undefined"!=typeof window?window:void 0,J=z||{},W=J.MutationObserver||J.WebKitMutationObserver,G="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),X="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Z=new Array(1e3),$=void 0;$=G?function(){return function(){return e.nextTick(l)}}():W?function(){var t=0,e=new W(l),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():X?function(){var t=new MessageChannel;return t.port1.onmessage=l,function(){return t.port2.postMessage(0)}}():void 0===z?function(){try{var t=n(321);return K=t.runOnLoop||t.runOnContext,a()}catch(t){return u()}}():u();var tt=Math.random().toString(36).substring(16),et=void 0,nt=1,rt=2,ot=new P,it=new P,st=0;return C.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===et&&n<t;n++)this._eachEntry(e[n],n)},C.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===f){var o=y(t);if(o===c&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===F){var i=new n(p);m(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},C.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===et&&(this._remaining--,t===rt?O(r,n):this._result[e]=n),0===this._remaining&&E(r,this._result)},C.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){return n._settledAt(nt,e,t)},function(t){return n._settledAt(rt,e,t)})},F.all=B,F.race=H,F.resolve=f,F.reject=I,F._setScheduler=i,F._setAsap=s,F._asap=Y,F.prototype={constructor:F,then:c,catch:function(t){return this.then(null,t)}},N(),F.polyfill=N,F.Promise=F,F})}).call(e,n(0),n(47))},321:function(t,e){},326:function(t,e,n){"use strict";function r(t){return{type:i.USERINFO_UPDATE,data:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.update=r;var o=n(128),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(o)},327:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(6),l=r(u),c=(n(71),n(72)),f=r(c),p=n(314),h=r(p);n(338);var d=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.shouldComponentUpdate=h.default.shouldComponentUpdate.bind(r),r.state={value:"",closeState:!1},r}return s(e,t),a(e,[{key:"render",value:function(){var t=this.props.placeHolder?this.props.placeHolder:"",e=this.props.inputType?this.props.inputType:"text",n=this.state,r=n.closeState,o=n.value;return l.default.createElement("div",{class:"input-bind"},l.default.createElement("input",{type:e,ref:"value",value:o,onChange:this.changeHandle.bind(this),onKeyUp:this.KeyUpHandle.bind(this,o),placeholder:t}),r?l.default.createElement("span",{class:"iconfont icon-close",onClick:this.deleteText.bind(this)}):"")}},{key:"deleteText",value:function(){this.setState({value:"",closeState:!1}),this.refs.value.focus(),this.props.getVal("")}},{key:"changeHandle",value:function(t){var e=t.target.value;this.setState({value:e}),this.props.getVal&&this.props.getVal(e),e.length>0?this.state.closeState=!0:this.state.closeState=!1}},{key:"KeyUpHandle",value:function(t,e){this.props.KeyUpHandle&&this.props.keyUpHandle(t,e)}},{key:"componentDidMount",value:function(){this.props.IsFocus&&this.refs.value.focus(),this.props.value&&this.setState({value:this.props.value})}}]),e}(l.default.Component);d.propTypes={KeyUpHandle:f.default.func,getVal:f.default.func,val:f.default.string,placeHolder:f.default.string,IsFocus:f.default.bool,inputType:f.default.string},e.default=d},328:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.CITYNAME="USER_CURRENT_CITY_NAME",e.USERNAME="USER_CURRENT_USER_NAME",e.SHOPSSTORE="USER_CURRENT_SHOPS_STORE"},338:function(t,e,n){var r=n(339);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(298)(r,o);r.locals&&(t.exports=r.locals)},339:function(t,e,n){e=t.exports=n(297)(!1),e.push([t.i,".style__input-bind--3LHQ9 {\n  position: relative;\n  width: 100%; }\n  .style__input-bind--3LHQ9 input {\n    width: 100%;\n    padding-right: .36rem;\n    height: .32rem;\n    font-size: .14rem;\n    line-height: .32rem;\n    padding-left: .08rem; }\n  .style__input-bind--3LHQ9 .style__iconfont--3uWjr {\n    position: absolute;\n    color: #999;\n    font-size: .16rem;\n    margin-left: -.36rem;\n    top: 50%;\n    padding: .10rem;\n    transform: translateY(-50%); }\n",""]),e.locals={"input-bind":"style__input-bind--3LHQ9",iconfont:"style__iconfont--3uWjr"}},413:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(6),l=r(u),c=n(314),f=r(c);n(71);n(414);var p=n(327),h=r(p),d=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.shouldComponentUpdate=f.default.shouldComponentUpdate.bind(r),r.state={active:!1,phone:"",code:"",tipText:"",visible:!1},r}return s(e,t),a(e,[{key:"render",value:function(){var t=this.state,e=t.visible,n=t.active;return l.default.createElement("div",{class:"login-wrapper"},l.default.createElement("div",{class:"content"},l.default.createElement("div",{class:"phone border-1px"},l.default.createElement(h.default,{inputType:"tel",getVal:this.getPhone.bind(this),placeHolder:"请输入手机号"}),l.default.createElement("div",{class:"btn",onClick:this.getOriginCode.bind(this)},"获取验证码")),l.default.createElement("div",{class:"code border-1px"},l.default.createElement(h.default,{getVal:this.getCode.bind(this),placeHolder:"请输入验证码"})),l.default.createElement("div",{class:"login-btn "+(n?"active":""),onClick:this.clickHandle.bind(this)},"登录")),l.default.createElement("div",{class:"error-tips "+(e?"on":"")},this.state.tipText))}},{key:"getPhone",value:function(t){t&&this.setState({phone:t})}},{key:"getCode",value:function(t){t&&this.setState({code:t})}},{key:"showToastHandle",value:function(t,e){var n=this;e=e||1500,this.setState({visible:!0,tipText:t}),setTimeout(function(){console.log(34342),console.log(window.href,window.location),n.setState({visible:!1})},e)}},{key:"getOriginCode",value:function(){this.showToastHandle("1234")}},{key:"clickHandle",value:function(){var t=this;this.setState({active:!0}),setTimeout(function(){t.setState({active:!1}),t.savaData()},100)}},{key:"savaData",value:function(){var t=this.state.phone,e=this.state.code;return/^1[0-9]{10}/.test(t)?"1234"!==e?void this.showToastHandle("验证码错误"):void this.props.getData(t,e):void this.showToastHandle("手机号输入不正确")}}]),e}(l.default.Component);e.default=d},414:function(t,e,n){var r=n(415);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0};o.transform=void 0;n(298)(r,o);r.locals&&(t.exports=r.locals)},415:function(t,e,n){e=t.exports=n(297)(!1),e.push([t.i,".style__login-wrapper--34w9D {\n  position: absolute;\n  top: .4rem;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  z-index: 1; }\n  .style__login-wrapper--34w9D .style__content--2Srlu {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    width: 86%;\n    padding: 0 .14rem; }\n  .style__login-wrapper--34w9D .style__border-1px--68ThJ:after {\n    border-color: #ff3131; }\n  .style__login-wrapper--34w9D .style__phone--1g-Vv {\n    padding: .04rem 0;\n    display: flex;\n    align-items: center;\n    margin-bottom: .2rem; }\n    .style__login-wrapper--34w9D .style__phone--1g-Vv .style__input-bind--1BZe5 {\n      flex: 1; }\n    .style__login-wrapper--34w9D .style__phone--1g-Vv .style__btn--QTka3 {\n      background: #fff;\n      color: #ff3131;\n      padding: 0;\n      font-size: .14rem;\n      height: auto;\n      -webkit-tap-highlight-color: transparent; }\n  .style__login-wrapper--34w9D .style__code--Ymtmq {\n    display: flex;\n    padding: .04rem 0; }\n  .style__login-wrapper--34w9D .style__login-btn--1N5pQ {\n    margin: .3rem 0;\n    padding: .08rem 0;\n    font-size: .16rem;\n    color: #fff;\n    background-color: #ff3131;\n    border-radius: .04rem;\n    text-align: center;\n    -webkit-tap-highlight-color: transparent;\n    cursor: pointer; }\n    .style__login-wrapper--34w9D .style__login-btn--1N5pQ.style__active--_YqOh {\n      color: rgba(255, 255, 255, 0.3);\n      background: #e94f4f; }\n  .style__login-wrapper--34w9D .style__error-tips--2tk_b {\n    position: absolute;\n    display: none;\n    top: 50%;\n    left: 50%;\n    background: rgba(0, 0, 0, 0.5);\n    color: #fff;\n    padding: .06rem .14rem;\n    transform: translate3d(-50%, -50%, 0);\n    border-radius: .04rem; }\n    .style__login-wrapper--34w9D .style__error-tips--2tk_b.style__on--1HWF- {\n      display: block; }\n",""]),e.locals={"login-wrapper":"style__login-wrapper--34w9D",content:"style__content--2Srlu","border-1px":"style__border-1px--68ThJ",phone:"style__phone--1g-Vv","input-bind":"style__input-bind--1BZe5",btn:"style__btn--QTka3",code:"style__code--Ymtmq","login-btn":"style__login-btn--1N5pQ",active:"style__active--_YqOh","error-tips":"style__error-tips--2tk_b",on:"style__on--1HWF-"}},416:function(t,e,n){"use strict";function r(t){return(0,o.post)("/api/login?phone="+t.phone+"&code="+t.code)}Object.defineProperty(e,"__esModule",{value:!0}),e.LoginIn=r;var o=n(417)},417:function(t,e,n){"use strict";function r(t){var e,n="";for(e in t)n+="&"+e+"="+encodeURIComponent(t[e]);return n&&(n=n.slice(1)),n}function o(t,e){return fetch(t,{method:"POST",credentials:"include",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/x-www-form-urlencoded"},body:r(e)})}Object.defineProperty(e,"__esModule",{value:!0}),e.post=o,n(319),n(320)}});