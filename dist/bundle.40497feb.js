parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"C4Nx":[function(require,module,exports) {
!function(){return function n(r,t,e){function o(i,f){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[i]={exports:{}};r[i][0].call(l.exports,function(n){return o(r[i][1][n]||n)},l,l.exports,n,r,t,e)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)o(e[i]);return o}}()({1:[function(n,r,t){var e=n("uniq");n("fs");console.log(e([1,2,2,3,4,5,5,5,6]))},{fs:2,uniq:3}],2:[function(n,r,t){},{}],3:[function(n,r,t){"use strict";r.exports=function(n,r,t){return 0===n.length?n:r?(t||n.sort(r),function(n,r){for(var t=1,e=n.length,o=n[0],u=n[0],i=1;i<e;++i)if(u=o,r(o=n[i],u)){if(i===t){t++;continue}n[t++]=o}return n.length=t,n}(n,r)):(t||n.sort(),function(n){for(var r=1,t=n.length,e=n[0],o=n[0],u=1;u<t;++u,o=e)if(o=e,(e=n[u])!==o){if(u===r){r++;continue}n[r++]=e}return n.length=r,n}(n))}},{}]},{},[1]);
},{}]},{},["C4Nx"], null)
//# sourceMappingURL=/bundle.40497feb.js.map