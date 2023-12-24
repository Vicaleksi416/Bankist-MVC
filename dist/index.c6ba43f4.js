// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bYIrE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b1d60d25c6ba43f4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bznnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modalViewJs = require("./views/modalView.js");
var _modalViewJsDefault = parcelHelpers.interopDefault(_modalViewJs);
var _scrollViewJs = require("./views/scrollView.js");
var _scrollViewJsDefault = parcelHelpers.interopDefault(_scrollViewJs);
var _navViewJs = require("./views/navView.js");
var _navViewJsDefault = parcelHelpers.interopDefault(_navViewJs);
var _divViewJs = require("./views/divView.js");
var _divViewJsDefault = parcelHelpers.interopDefault(_divViewJs);
var _slideViewJs = require("./views/slideView.js");
var _slideViewJsDefault = parcelHelpers.interopDefault(_slideViewJs);
"use strict";
const controlCloseModal = function() {
    (0, _modalViewJsDefault.default).closeModalFn();
};
const controlOpenModal = function() {
    (0, _modalViewJsDefault.default).openModalFn();
};
const controlScroll = function(id) {
    (0, _scrollViewJsDefault.default).scrollTo(id);
};
const controlHover = function(e, opacity) {
    (0, _navViewJsDefault.default).hover(e, opacity);
};
const controlStickNav = function(e) {
    (0, _navViewJsDefault.default).stickyNav(e);
};
const controlSwitch = function(e) {
    (0, _divViewJsDefault.default).switchTabsFn(e);
};
const controlReveal = function(e) {
    (0, _scrollViewJsDefault.default).revealSections(e);
};
const controlSlide = function(page) {
    (0, _slideViewJsDefault.default).goToSlide(page);
    (0, _slideViewJsDefault.default).activateDot(page);
};
const controlImg = function(e) {
    (0, _divViewJsDefault.default).loadImg(e);
};
const init = function() {
    (0, _scrollViewJsDefault.default).scrollToHandler(controlScroll);
    (0, _scrollViewJsDefault.default).observeHandler(controlReveal);
    (0, _modalViewJsDefault.default).openModalHandler(controlOpenModal);
    (0, _modalViewJsDefault.default).closeModalHandler(controlCloseModal);
    (0, _navViewJsDefault.default).hoverHandler(controlHover);
    (0, _navViewJsDefault.default).observeHandler(controlStickNav);
    (0, _divViewJsDefault.default).switchHanler(controlSwitch);
    (0, _divViewJsDefault.default).observeHandler(controlImg);
    (0, _slideViewJsDefault.default).initView();
    (0, _slideViewJsDefault.default).sldieHandler(controlSlide);
};
init();

},{"./views/modalView.js":"8QpnA","./views/scrollView.js":"4eG6p","./views/navView.js":"82Kie","./views/divView.js":"8AjFX","./views/slideView.js":"h8JrE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QpnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ModalView {
    modal = document.querySelector(".modal");
    overlay = document.querySelector(".overlay");
    btnCloseModal = document.querySelector(".btn--close-modal");
    btnsOpenModal = document.querySelectorAll(".btn--show-modal");
    doc = document;
    openModalFn(e) {
        // e.preventDefault();
        this.modal.classList.remove("hidden");
        this.overlay.classList.remove("hidden");
    }
    closeModalFn() {
        this.modal.classList.add("hidden");
        this.overlay.classList.add("hidden");
    }
    openModalHandler(handler) {
        this.btnsOpenModal.forEach((btn)=>btn.addEventListener("click", handler));
    }
    closeModalHandler(handler) {
        this.modal.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--close-modal");
            if (!btn) return;
            handler();
        });
        this.overlay.addEventListener("click", function(e) {
            handler();
        });
        this.doc.addEventListener("keydown", (e)=>{
            if (e.key === "Escape" && !this.modal.classList.contains("hidden")) // console.log(e);
            handler();
        });
    }
}
exports.default = new ModalView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4eG6p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ScrollView {
    doc = document;
    btnScrollTo = document.querySelector(".btn--scroll-to");
    nav = document.querySelector(".nav");
    allSections = document.querySelectorAll(".section");
    logo = document.querySelector(".nav__logo");
    scrollTo(href) {
        if (href === "") return;
        const section = document.querySelector(`${href}`);
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
    scrollToHandler(handler) {
        this.btnScrollTo.addEventListener("click", function() {
            handler("#section--1");
        });
        this.doc.addEventListener("click", function(e) {
            e.preventDefault();
            const link = e.target.closest(".nav__link");
            if (!link) return;
            const href = e.target.getAttribute("href");
            handler(href);
        });
        this.logo.addEventListener("click", function(e) {
            const href = e.target.getAttribute("href");
            handler(href);
        });
    }
    revealSections(entries) {
        const [entry] = entries;
        if (entry.isIntersecting) entry.target.classList.remove("section--hidden");
        else entry.target.classList.add("section--hidden");
    }
    observeHandler(handler) {
        const sectionObserver = new IntersectionObserver(handler, {
            root: null,
            threshold: 0.2
        });
        this.allSections.forEach((section)=>{
            sectionObserver.observe(section);
        });
    }
}
exports.default = new ScrollView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82Kie":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NavView {
    nav = document.querySelector(".nav");
    header = document.querySelector(".header");
    navHeight = this.nav.getBoundingClientRect();
    hover(e, opacity) {
        const link = e.target;
        // console.log(link);
        const siblings = link.closest(".nav").querySelectorAll(".nav__link");
        const logo = link.closest(".nav").querySelector("img");
        siblings.forEach((el)=>{
            if (el !== link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
    }
    hoverHandler(handler) {
        this.nav.addEventListener("mouseover", function(e) {
            const link = e.target.closest(".nav__link");
            if (!link) return;
            // console.log('y');
            handler(e, 0.5);
        });
        this.nav.addEventListener("mouseout", function(e) {
            const link = e.target.closest(".nav__link");
            if (!link) return;
            // console.log('n');
            handler(e, 1);
        });
    }
    stickyNav(entries) {
        const [entry] = entries;
        // console.log(entry);
        if (!entry.isIntersecting) this.nav.classList.add("sticky");
        else this.nav.classList.remove("sticky");
    }
    observeHandler(handler) {
        const headerObserver = new IntersectionObserver(handler, {
            root: null,
            threshold: 0,
            rootMargin: `-${this.navHeight.height}px`
        });
        headerObserver.observe(this.header);
    }
}
exports.default = new NavView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8AjFX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class DivView {
    _parentElement = document.querySelector(".operations");
    tabsContainer = document.querySelector(".operations__tab-container");
    tabs = document.querySelectorAll(".operations__tab");
    tabsContent = document.querySelectorAll(".operations__content");
    imgTarget = document.querySelectorAll("img[data-src]");
    switchTabsFn(e) {
        this.tabs.forEach((t)=>t.classList.remove("operations__tab--active"));
        e.classList.add("operations__tab--active");
        this.tabsContent.forEach((c)=>c.classList.remove("operations__content--active"));
        document.querySelector(`.operations__content--${e.dataset.tab}`).classList.add("operations__content--active");
    }
    switchHanler(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const clickedTab = e.target.closest(".operations__tab");
            if (!clickedTab) return;
            handler(clickedTab);
        });
    }
    loadImg(entries, observe) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener("load", function() {
            entry.target.classList.remove("lazy-img");
        });
    // observe.unobserve(entry.target);
    }
    observeHandler(handler) {
        const imgObserver = new IntersectionObserver(handler, {
            root: null,
            threshold: 0
        });
        this.imgTarget.forEach((img)=>imgObserver.observe(img));
    }
}
exports.default = new DivView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h8JrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SlideView {
    slides = document.querySelectorAll(".slide");
    btnLeft = document.querySelector(".slider__btn--left");
    btnRight = document.querySelector(".slider__btn--right");
    dots = document.querySelector(".dots");
    initView() {
        this.goToSlide(0);
        this.createDots(this.dots);
        this.activateDot(0);
    }
    goToSlide(curPos) {
        this.slides.forEach((s, i)=>s.style.transform = `translateX(${(i - curPos) * 100}%)`);
    }
    sldieHandler(handler) {
        let curSlidePos = 0;
        let maxSlide = this.slides.length;
        this.btnLeft.addEventListener("click", function() {
            if (curSlidePos === 0) curSlidePos = maxSlide - 1;
            else curSlidePos--;
            //   console.log(curSlidePos);
            handler(curSlidePos);
        });
        this.btnRight.addEventListener("click", function() {
            if (curSlidePos === maxSlide - 1) curSlidePos = 0;
            else curSlidePos++;
            //   console.log(curSlidePos);
            handler(curSlidePos);
        });
        this.dots.addEventListener("click", function(e) {
            if (!e) return;
            if (e.target.classList.contains("dots__dot")) // console.log(e.target.dataset.slide);
            handler(e.target.dataset.slide);
        });
    }
    createDots(dom) {
        this.slides.forEach(function(_, i) {
            dom.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    }
    activateDot(sw) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${sw}"]`).classList.add("dots__dot--active");
    }
}
exports.default = new SlideView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bYIrE","bznnK"], "bznnK", "parcelRequire4d74")

//# sourceMappingURL=index.c6ba43f4.js.map
