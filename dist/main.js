!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=17)}([,function(e,t,n){"use strict";function o(){var e=location.host.replace(/\.?github\.com$/,"")||"github",t=location.pathname,n="true"===localStorage["logged-in"],o=(document.getElementsByName("analytics-location")[0]||0).content||"",r="/<user-name>"===o,a="/<org-login>"===o,i=o.indexOf("/<user-name>/<repo-name>")>-1,u=t;return"/"===t?u=n?"dashboard":t:r?u="profile":a?u="organizations":i&&(u=o.replace("/<user-name>/<repo-name>","repository")),{site:e,page:u}}function r(){localStorage._GITHUB_LANG_?window._GITHUB_LANG_=localStorage._GITHUB_LANG_:window._GITHUB_LANG_="zh_CN";var e=o();console.log("pageInfo:",e),window._GITHUB_SITE_=_GITHUB_LANGS_[_GITHUB_LANG_][e.site],_GITHUB_SITE_.pageInfo=e}Object.defineProperty(t,"__esModule",{value:!0}),t.setPageInfo=r,t.default=o},function(e,t,n){"use strict";function o(){if(!window.RelativeTimeElement)return!1;var e=window.RelativeTimeElement.prototype.getFormattedDate,t=window.TimeAgoElement.prototype.getFormattedDate,n=function(e,t){if(/^on ([\w ]+)$/.test(e))return"于 "+t.title.replace(/ .+$/,"");var n=window._GITHUB_LANGS_[window._GITHUB_LANG_].github.public.regexp[1];return e.replace(n[0],n[1])};window.RelativeTimeElement.prototype.getFormattedDate=function(){var t=e.call(this);return n(t,this)},window.TimeAgoElement.prototype.getFormattedDate=function(){var e=t.call(this);return n(e,this)},window.LocalTimeElement.prototype.getFormattedDate=function(){return this.title.replace(/ .+$/,"")};var o=document.querySelectorAll("time, relative-time, time-ago, local-time");return Array.prototype.forEach.call(o,function(e){e.getFormattedDate&&(e.textContent=e.getFormattedDate())}),!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e,t,n){var o=0;setTimeout(function r(){if(!window.define)return!(++o>=20)&&setTimeout(r,99);var a=n||"github/hans-hook-"+Date.now().toString(16);window.define(a,e,t),window.ghImport(a).catch(function(e){return setTimeout(function(){throw e})})},99)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";function o(e){for(var t=e.childNodes,n=0,r=t.length;n<r;n++){var u=t[n];u.nodeType===Node.ELEMENT_NODE?("INPUT"===u.tagName||"TEXTAREA"===u.tagName?"button"===u.type||"submit"===u.type?(0,a.default)(u,"value"):(0,a.default)(u,"placeholder"):u.hasAttribute("aria-label")?((0,a.default)(u,"aria-label",!0),u.hasAttribute("data-copied-hint")&&(0,a.default)(u.dataset,"copiedHint")):"OPTGROUP"===u.tagName&&(0,a.default)(u,"label"),u.hasAttribute("data-disable-with")&&(0,a.default)(u.dataset,"disableWith"),"readme"===u.id||i.test(u.className)||o(u)):u.nodeType===Node.TEXT_NODE&&(0,a.default)(u,"data")}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=window._GITHUB_LANGS_.config.reIgnore;t.default=o},,,,,,,,,,,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){setTimeout(function(){(0,f.setPageInfo)(),(0,d.default)(),(0,l.default)(document.body)},99)}var a=n(3),i=o(a),u=n(4),l=o(u),c=n(2),d=o(c),f=n(1);r(),(0,i.default)(["../jquery"],function(e){e(document).ajaxSuccess(r),e("include-fragment").on("loadend",r)})},function(e,t,n){"use strict";function o(e,t,n){var o=!1;return(o=void 0===n?(0,a.default)(e[t]):(0,a.default)(e.getAttribute(t)))!==!1&&(void 0===n?e[t]=o:e.setAttribute(t,o),!0)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=o},function(e,t,n){"use strict";function o(e,t){if(t=t||_GITHUB_SITE_.pageInfo.page,!_GITHUB_SITE_||!_GITHUB_SITE_[t]||!_GITHUB_SITE_[t].static)return!1;var n=_GITHUB_SITE_[t].static[e];if(n)return n;var o=_GITHUB_SITE_[t].regexp;if(o)for(var r=0,a=o.length;r<a;r++)if((n=e.replace(o[r][0],o[r][1]))!==e)return n;return!1}function r(e){var t=e.trim(),n=t.replace(/\xa0/g," ").replace(/\s{2,}/g," ");if(""===n)return!1;var r=o(n,"public");return r!==!1&&r!==n?(r=o(r,"public")||r,e.replace(t,r)):(r=o(n))!==!1&&""!==r&&(r=o(r,"public")||r,e.replace(t,r))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}]);