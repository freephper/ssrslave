webpackJsonp([0],{CVdW:function(t,e,n){function r(t){return n(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./gif":"Ftnh"};r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="CVdW"},Ftnh:function(t,e,n){var r,r;!function(e){t.exports=e()}(function(){return function t(e,n,i){function s(a,h){if(!n[a]){if(!e[a]){var l="function"==typeof r&&r;if(!h&&l)return r(a,!0);if(o)return o(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return s(n||t)},u,u.exports,t,e,n,i)}return n[a].exports}for(var o="function"==typeof r&&r,a=0;a<i.length;a++)s(i[a]);return s}({1:[function(t,e,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function s(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!s(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,n,r,s,h,l;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var f=new Error('Uncaught, unspecified "error" event. ('+e+")");throw f.context=e,f}if(n=this._events[t],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(o(n))for(s=Array.prototype.slice.call(arguments,1),l=n.slice(),r=l.length,h=0;h<r;h++)l[h].apply(this,s);return!0},r.prototype.addListener=function(t,e){var n;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[t].length>n&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function n(){this.removeListener(t,n),r||(r=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var r=!1;return n.listener=e,this.on(t,n),this},r.prototype.removeListener=function(t,e){var n,r,s,a;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],s=n.length,r=-1,n===e||i(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(a=s;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){r=a;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],i(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},{}],2:[function(t,e,n){var r,i,s,o,a;a=navigator.userAgent.toLowerCase(),o=navigator.platform.toLowerCase(),r=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],s="ie"===r[1]&&document.documentMode,i={name:"version"===r[1]?r[3]:r[1],version:s||parseFloat("opera"===r[1]&&r[4]?r[4]:r[2]),platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||o.match(/mac|win|linux/)||["other"])[0]}},i[i.name]=!0,i[i.name+parseInt(i.version,10)]=!0,i.platform[i.platform.name]=!0,e.exports=i},{}],3:[function(t,e,n){var r,i,s,o=function(t,e){function n(){this.constructor=t}for(var r in e)a.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,h=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},l=[].slice;r=t("events").EventEmitter,s=t("./browser.coffee"),i=function(t){function e(t){var e,r,i;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(t);for(r in n)i=n[r],null==(e=this.options)[r]&&(e[r]=i)}var n,r;return o(e,t),n={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},r={delay:500,copy:!1},e.prototype.setOption=function(t,e){if(this.options[t]=e,null!=this._canvas&&("width"===t||"height"===t))return this._canvas[t]=e},e.prototype.setOptions=function(t){var e,n,r;n=[];for(e in t)a.call(t,e)&&(r=t[e],n.push(this.setOption(e,r)));return n},e.prototype.addFrame=function(t,e){var n,i;null==e&&(e={}),n={},n.transparent=this.options.transparent;for(i in r)n[i]=e[i]||r[i];if(null==this.options.width&&this.setOption("width",t.width),null==this.options.height&&this.setOption("height",t.height),"undefined"!=typeof ImageData&&null!==ImageData&&t instanceof ImageData)n.data=t.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&t instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&t instanceof WebGLRenderingContext)e.copy?n.data=this.getContextData(t):n.context=t;else{if(null==t.childNodes)throw new Error("Invalid image");e.copy?n.data=this.getImageData(t):n.image=t}return this.frames.push(n)},e.prototype.render=function(){var t,e,n,r;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var e,n,r;for(r=[],t=e=0,n=this.frames.length;0<=n?e<n:e>n;t=0<=n?++e:--e)r.push(null);return r}.call(this),n=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(t=e=0,r=n;0<=r?e<r:e>r;t=0<=r?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},e.prototype.abort=function(){for(var t;;){if(null==(t=this.activeWorkers.shift()))break;this.log("killing active worker"),t.terminate()}return this.running=!1,this.emit("abort")},e.prototype.spawnWorkers=function(){var t,e,n;return t=Math.min(this.options.workers,this.frames.length),function(){n=[];for(var r=e=this.freeWorkers.length;e<=t?r<t:r>t;e<=t?r++:r--)n.push(r);return n}.apply(this).forEach(function(t){return function(e){var n;return t.log("spawning worker "+e),n=new Worker(__awesome_qr_base_path+"/"+t.options.workerScript),n.onmessage=function(e){return t.activeWorkers.splice(t.activeWorkers.indexOf(n),1),t.freeWorkers.push(n),t.frameFinished(e.data)},t.freeWorkers.push(n)}}(this)),t},e.prototype.frameFinished=function(t){var e,n;if(this.log("frame "+t.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[t.index]=t,!0===this.options.globalPalette&&(this.options.globalPalette=t.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(e=1,n=this.freeWorkers.length;1<=n?e<n:e>n;1<=n?++e:--e)this.renderNextFrame();return h.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},e.prototype.finishRendering=function(){var t,e,n,r,i,s,o,a,h,l,f,u,p,c,v,d;for(a=0,c=this.imageParts,i=0,h=c.length;i<h;i++)e=c[i],a+=(e.data.length-1)*e.pageSize+e.cursor;for(a+=e.pageSize-e.cursor,this.log("rendering finished - filesize "+Math.round(a/1e3)+"kb"),t=new Uint8Array(a),u=0,v=this.imageParts,s=0,l=v.length;s<l;s++)for(e=v[s],d=e.data,n=o=0,f=d.length;o<f;n=++o)p=d[n],t.set(p,u),n===e.data.length-1?u+=e.cursor:u+=e.pageSize;return r=new Blob([t],{type:"image/gif"}),this.emit("finished",r,t)},e.prototype.renderNextFrame=function(){var t,e,n;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return t=this.frames[this.nextFrame++],n=this.freeWorkers.shift(),e=this.getTask(t),this.log("starting frame "+(e.index+1)+" of "+this.frames.length),this.activeWorkers.push(n),n.postMessage(e)},e.prototype.getContextData=function(t){return t.getImageData(0,0,this.options.width,this.options.height).data},e.prototype.getImageData=function(t){var e;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),e=this._canvas.getContext("2d"),e.setFill=this.options.background,e.fillRect(0,0,this.options.width,this.options.height),e.drawImage(t,0,0),this.getContextData(e)},e.prototype.getTask=function(t){var e,n;if(e=this.frames.indexOf(t),n={index:e,last:e===this.frames.length-1,delay:t.delay,transparent:t.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===s.name},null!=t.data)n.data=t.data;else if(null!=t.context)n.data=this.getContextData(t.context);else{if(null==t.image)throw new Error("Invalid frame");n.data=this.getImageData(t.image)}return n},e.prototype.log=function(){var t;if(t=1<=arguments.length?l.call(arguments,0):[],this.options.debug)return console.log.apply(console,t)},e}(r),e.exports=i},{"./browser.coffee":2,events:1}]},{},[3])(3)})}});
//# sourceMappingURL=0.ebc4289132b83ce1b8e6.js.map