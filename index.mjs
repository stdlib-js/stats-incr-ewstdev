// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.1.1-esm/index.mjs";function s(s){var n,i,o,d,m,l;if(!r(s))throw new TypeError(t("1HH9Y,Hw",s));if(s<0||s>1)throw new RangeError(t("1HHHx",s));return l=1-s,function(r){if(0===arguments.length)return void 0===o?null:o;void 0===o?(m=r,i=0):(m+=n=s*(d=r-m),i=l*(i+d*n));return o=e(i)}}export{s as default};
//# sourceMappingURL=index.mjs.map
