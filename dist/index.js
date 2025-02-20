"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=n(function(h,u){
var p=require('@stdlib/stats-base-dnanmeanpn/dist').ndarray;function y(e,r,a,c){return p(e,r,a,c)}u.exports=y
});var v=n(function(k,s){
var f=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,a){return x(e,r,a,f(e,a))}s.exports=j
});var o=n(function(w,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=i();l(d,"ndarray",R);q.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,m=E(_(__dirname,"./native.js"));O(m)?t=b:t=m;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
