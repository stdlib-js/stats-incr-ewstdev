// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,a=r.__lookupGetter__,u=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var c,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(a.call(t,e)||u.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=c):t[e]=l.value),p="get"in l,b="set"in l,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),b&&i&&i.call(t,e,l.set),t};function c(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=b()?function(t){var e,r,n,o,i;if(null==t)return y.call(t);r=t[_],i=_,e=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[_]=r:delete t[_],n}:function(t){return y.call(t)},m=Number,d=m.prototype.toString;var g=b();function j(t){return"object"==typeof t&&(t instanceof m||(g?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function h(t){return f(t)||j(t)}function w(t){return f(t)&&t>=0}function S(t){return j(t)&&t.valueOf()>=0}function O(t){return w(t)||S(t)}function P(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}c(h,"isPrimitive",f),c(h,"isObject",j),c(O,"isPrimitive",w),c(O,"isObject",S);var E=Math.sqrt;function T(t){var e,r,n,o,i,a;if(!w(t))throw new TypeError(P("0dXA9",t));if(t<0||t>1)throw new RangeError(P("invalid argument. Must provide a nonnegative number on the interval: [0, 1]. Value: `%f`.",t));return a=1-t,function(u){if(0===arguments.length)return void 0===n?null:n;void 0===n?(i=u,r=0):(i+=e=t*(o=u-i),r=a*(r+o*e));return n=E(r)}}export{T as default};
//# sourceMappingURL=mod.js.map
