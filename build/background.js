!function(r){function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=r,e.c=n,e.i=function(r){return r},e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:t})},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="/build/",e(e.s=0)}([function(r,e){function n(r){"chrome://newtab/"==r.url&&chrome.tabs.update(r.id,{url:localStorage.url||"https://www.google.com",selected:!0})}chrome.browserAction.onClicked.addListener(function(r){window.confirm("确定设置新的默认标签页？\n\n"+r.url)&&(localStorage.url=r.url)}),chrome.tabs.onCreated.addListener(n),chrome.tabs.query({},function(r){r.forEach(n)})}]);