"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var m=f(function(b,a){
var g=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),d=require('@stdlib/math-base-special-sqrt/dist');function q(r){var e,i,n,t,u,v;if(!g(r))throw new TypeError(s('1HH9Y',r));if(r<0||r>1)throw new RangeError(s('1HHDa',r));return v=1-r,c;function c(o){return arguments.length===0?n===void 0?null:n:(n===void 0?(u=o,i=0):(t=o-u,e=r*t,u+=e,i=v*(i+t*e)),n=d(i),n)}}a.exports=q
});var w=m();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
