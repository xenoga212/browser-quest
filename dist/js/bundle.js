!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){r(4),e.exports=r(3)},function(e,t,r){"use strict";e.exports=function(){var e=r(2),t={};return t.createDomain=t.create=function(){var t=new e.EventEmitter;function r(e){t.emit("error",e)}return t.add=function(e){e.on("error",r)},t.remove=function(e){e.removeListener("error",r)},t.bind=function(e){return function(){var t=Array.prototype.slice.call(arguments);try{e.apply(null,t)}catch(e){r(e)}}},t.intercept=function(e){return function(t){if(t)r(t);else{var n=Array.prototype.slice.call(arguments,1);try{e.apply(null,n)}catch(t){r(t)}}}},t.run=function(e){try{e()}catch(e){r(e)}return this},t.dispose=function(){return this.removeAllListeners(),this},t.enter=t.exit=function(){return this},t},t}.call(this)},function(e,t,r){"use strict";var n,o="object"==typeof Reflect?Reflect:null,i=o&&"function"==typeof o.apply?o.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var l=10;function u(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function c(e,t,r,n){var o,i,s,a;if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r);if(void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),i=e._events),s=i[t]),void 0===s)s=i[t]=r,++e._eventsCount;else if("function"==typeof s?s=i[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(o=u(e))>0&&s.length>o&&!s.warned){s.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=s.length,a=l,console&&console.warn&&console.warn(a)}return e}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,i(this.listener,this.target,e))}.bind(n);return o.listener=r,n.wrapFn=o,o}function p(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):h(o,o.length)}function y(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function h(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return u(this)},a.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[e];if(void 0===l)return!1;if("function"==typeof l)i(l,this,t);else{var u=l.length,c=h(l,u);for(r=0;r<u;++r)i(c[r],this,t)}return!0},a.prototype.addListener=function(e,t){return c(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return c(this,e,t,!0)},a.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,f(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,f(this,e,t)),this},a.prototype.removeListener=function(e,t){var r,n,o,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):y.call(e,t)},a.prototype.listenerCount=y,a.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},function(e,t,r){},function(e,t,r){"use strict";r.r(t),console.log("Working on player");var n=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.specialty=r,this.stats={strength:0,magic:0,defense:0,dexterity:0,health:10,level:0,exp:0,expForNextLevel:0}};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}console.log("Warrior model working...");var l=function(e){function t(e,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=i(this,s(t).call(this,e,r))).rage=2,n.stats.strength=7,n.stats.magic=3,n.stats.defense=5,n.stats.dexterity=4,n.stats.health=13,n.stats.level=1,n.stats.exp=0,n.stats.expForNextLevel=n.stats.level*(2*Math.sqrt(500)).toFixed(0),n.skills=[{skill:"Smash",requiredLevel:1,description:"Hit a single target with all of your might.",rageCost:2},{skill:"Fox hunt",requiredLevel:3,description:"Hit a single target and restore some health",rageCost:4},{skill:"Eruption",requiredLevel:6,description:"Hit multiple targets by with the power of fire",rageCost:5},{skill:"Reapers blessing",requiredLevel:9,description:"You are blessed by the reaper, granting strength and defense bonus for 3 turns",rageCost:8}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,n),t}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}console.log("Ranger model working");var y=function(e){function t(e,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,f(t).call(this,e,r))).deadeye=3,n.stats.strength=4,n.stats.magic=3,n.stats.defense=4,n.stats.dexterity=8,n.stats.health=11,n.stats.level=1,n.stats.exp=0,n.stats.expForNextLevel=n.stats.level*(2*Math.sqrt(500)).toFixed(0),n.skills=[{skill:"Double shot",requiredLevel:1,DeadEyeCost:1,description:"Attack a single target with two arrows"},{skill:"Posion touch",requiredLevel:3,DeadEyeCost:2,description:"Attack a single target physically, dealing posion damage for 3 turns"},{skill:"Valkyrie eyes",requiredLevel:5,DeadEyeCost:4,description:"Fire a powerful arrow with a high chance of dealing critical hit"},{skill:"Ricochete",requiredLevel:8,DeadEyeCost:5,description:"Fire an arrow that will bounce all over the place, damaging all targets"},{skill:"Heavens shower",requiredLevel:11,DeadEyeCost:8,description:"Fire multiple arrows in the air before they come down, damaging all targets"}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,n),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=d(this,v(t).call(this,e,r))).mp=10,n.stats.strength=2,n.stats.magic=9,n.stats.defense=3,n.stats.dexterity=3,n.stats.health=10,n.stats.level=1,n.stats.exp=0,n.stats.expForNextLevel=n.stats.level*(2*Math.sqrt(500)).toFixed(0),n.skills=[{skill:"Fireball",requiredLevel:1,description:"Deal damage to a single target",mpCost:3},{skill:"Bolt",requiredLevel:3,description:"Deal damage to a single target",mpCost:3},{skill:"Mystic Robe",requiredLevel:5,description:"Equip a special robe that will increase your magic attacks for 3 turns",mpCost:5},{skill:"Cure",requiredLevel:6,description:"Heal yourself restoring some health",mpCost:7},{skill:"Ice sword",requiredLevel:8,description:"Attack a single target with an Ice sword",mpCost:5},{skill:"Meteor",requiredLevel:11,description:"Attack all targets with meteors raining down",mpCost:10}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,n),t}();r(1);function b(){return document.querySelector(".player-info__input-name").value}function _(){return document.querySelector(".player-info__player-class-select").value}function w(){var e=document.querySelector(".player-greet");e.removeChild(e.lastChild)}console.log("Main app working...");var L=document.querySelector(".btn--start"),x=document.querySelector(".player-greet__button-next"),O=document.querySelector(".player-info__form"),S=document.querySelector(".player-info__btn--next");L.addEventListener("click",function(){document.querySelector(".container").style.display="none",function(){var e=document.querySelector(".player-greet__text");document.querySelector(".player-greet").style.display="block";for(var t=e.children,r=0;r<t.length;r++)t[r].classList.contains("player-greet__paragraph-1")?t[r].classList.add("player-greet__paragraph-1--fade-in-1"):t[r].classList.contains("player-greet__paragraph-2")?t[r].classList.add("player-greet__paragraph-2--fade-in-2"):t[r].classList.contains("player-greet__paragraph-3")&&t[r].classList.add("player-greet__paragraph-3--fade-in-3")}()}),x.addEventListener("click",function(){var e=document.querySelector(".player-greet__text"),t=document.querySelector(".player-info");e.style.display="none",t.style.display="flex"}),O.addEventListener("submit",function(e){e.preventDefault(),"Warrior"===_()?new l(b(),_()):"Ranger"===_()?new y(b(),_()):"Mage"===_()&&new g(b(),_()),document.querySelector(".player-info").style.display="none",function(){var e=document.querySelector(".player-greet__player-instruction");e.style.display="block";var t=document.createElement("p");t.textContent="\n    ".concat(b()," Is your name?\n    Hmm...I see that you are a ").concat(_(),". Maybe we can escape this tower at last. Climb up the tower and fight against the mobs to claim freedom. C'mon! Let's get out!\n    "),e.insertBefore(t,e.childNodes[0])}(),w()}),S.addEventListener("click",w)}]);