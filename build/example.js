!function e(t,n,i){function r(s,l){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=e("../../src/lightbox"),o=i(r);new o["default"](document.getElementsByClassName("tnt-lightbox"))},{"../../src/lightbox":2}],2:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=e("./utils"),a=i(l),u=function(){function e(t){o(this,e),this.elements=t,this.count=t.length,this.index=null,this.build()}return s(e,[{key:"build",value:function(){var e=this;document.addEventListener("keydown",function(t){switch(t.keyCode){case 27:e.close();break;case 37:e.openPrev();break;case 39:e.openNext()}}),this.overlay=document.createElement("div"),this.overlay.className+="tnt-photobox-overlay hidden",document.body.appendChild(this.overlay),this.close=document.createElement("button"),this.close.classList.add("tnt-lightbox-close"),this.overlay.appendChild(this.close),this.prev=document.createElement("button"),this.prev.classList.add("tnt-lightbox-prev"),this.overlay.appendChild(this.prev),this.next=document.createElement("button"),this.next.classList.add("tnt-lightbox-next"),this.overlay.appendChild(this.next),this.box=document.createElement("div"),this.overlay.appendChild(this.box),[].forEach.call(this.elements,function(t){t.addEventListener("click",function(t){e.click(t)})}),this.prev.addEventListener("click",function(){e.openPrev()}),this.next.addEventListener("click",function(){e.openNext()}),this.close.addEventListener("click",function(){e.close()})}},{key:"click",value:function(e){this.open(e.target),e.preventDefault()}},{key:"openNext",value:function(){this.openByIndex(this.index+1)}},{key:"openPrev",value:function(){this.openByIndex(this.index-1)}},{key:"openByIndex",value:function(e){if(e>=0){var t=this.elements[e];this.open(t)}}},{key:"open",value:function(e){var t=this,n=this.getIndex(e),i=e.getAttribute("href");if(n>=0){var r=i.split("."),o=r[r.length-1],s=null;if(this.index=n,this.box.innerHTML="",this.overlay.classList.remove("hidden"),0===n?this.hide(this.prev):this.show(this.prev),n===this.count-1?this.hide(this.next):this.show(this.next),a["default"].startsWith(i,"https://www.vimeo.com/")){var l=i.replace("https://www.vimeo.com/","");s=document.createElement("iframe"),s.setAttribute("src","https://player.vimeo.com/video/"+l+"?color=7a7d80&autoplay=true&quality=1080p"),s.setAttribute("frameborder",0),s.setAttribute("webkitallowfullscreen",!0),s.setAttribute("mozallowfullscreen",!0),s.setAttribute("allowfullscreen",!0),this.box.appendChild(s),this.overlay.classList.remove("loading")}else if(a["default"].startsWith(i,"https://www.youtube.com/")){var u=i.replace("https://www.youtube.com/watch?v=","");s=document.createElement("iframe"),s.setAttribute("src","https://www.youtube.com/embed/"+u+"?rel=0"),s.setAttribute("frameborder",0),s.setAttribute("webkitallowfullscreen",!0),s.setAttribute("mozallowfullscreen",!0),s.setAttribute("allowfullscreen",!0),this.box.appendChild(s),this.overlay.classList.remove("loading")}else o.match(/(jpg|png)/)&&a["default"].loadImage(i,function(e){t.box.appendChild(e),t.overlay.classList.remove("loading")})}}},{key:"getIndex",value:function(e){return[].concat(r(this.elements)).indexOf(e)}},{key:"close",value:function(){this.box.innerHTML="",this.overlay.classList.add("hidden")}},{key:"hide",value:function(e){return e.style.display="none"}},{key:"show",value:function(e){return e.style.display="inline-block"}}]),e}();n["default"]=u},{"./utils":3}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={loadImage:function(e,t){var n=new Image;n.onload=function(){t(n)},n.src=e},startsWith:function(e,t){return e.substring(0,t.length)==t}};n["default"]=i},{}]},{},[1]);