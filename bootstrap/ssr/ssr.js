import { mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode, toDisplayString, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import require$$0 from "process";
import require$$1 from "http";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$2 = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    homeUrl: String,
    livewireUrl: String
    // optional
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-100" }, _attrs))}><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="flex-shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.homeUrl,
        class: "text-xl font-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` My App `);
          } else {
            return [
              createTextVNode(" My App ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></nav><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    title: String,
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-md mx-auto mt-10"${_scopeId}><div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"${_scopeId}><h2 class="text-2xl font-bold mb-6 text-center"${_scopeId}>${ssrInterpolate(__props.title)}</h2><p class="text-center text-gray-600 mb-6"${_scopeId}>${ssrInterpolate(__props.message)}</p><form${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="email"${_scopeId}> Email </label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"${_scopeId}></div><div class="mb-6"${_scopeId}><label class="block text-gray-700 text-sm font-bold mb-2" for="password"${_scopeId}> Password </label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"${_scopeId}></div><div class="flex items-center justify-between"${_scopeId}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"${_scopeId}> Sign In </button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-md mx-auto mt-10" }, [
                createVNode("div", { class: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" }, [
                  createVNode("h2", { class: "text-2xl font-bold mb-6 text-center" }, toDisplayString(__props.title), 1),
                  createVNode("p", { class: "text-center text-gray-600 mb-6" }, toDisplayString(__props.message), 1),
                  createVNode("form", null, [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        class: "block text-gray-700 text-sm font-bold mb-2",
                        for: "email"
                      }, " Email "),
                      createVNode("input", {
                        class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                        id: "email",
                        type: "email",
                        placeholder: "Email"
                      })
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("label", {
                        class: "block text-gray-700 text-sm font-bold mb-2",
                        for: "password"
                      }, " Password "),
                      createVNode("input", {
                        class: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
                        id: "password",
                        type: "password",
                        placeholder: "******************"
                      })
                    ]),
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("button", {
                        class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        type: "button"
                      }, " Sign In ")
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8 bg-blue-100" }, _attrs))}><h1>SSR TEST PAGE</h1><p>Title from props: ${ssrInterpolate(_ctx.title)}</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/__Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __Login
}, Symbol.toStringTag, { value: "Module" }));
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lib = {};
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  Object.defineProperty(lib, "__esModule", {
    value: true
  });
  lib.default = void 0;
  var process = _interopRequireWildcard(require$$0);
  var _http = require$$1;
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  const readableToString = (readable) => new Promise((resolve, reject) => {
    let data = "";
    readable.on("data", (chunk) => data += chunk);
    readable.on("end", () => resolve(data));
    readable.on("error", (err) => reject(err));
  });
  var _default = (render, port) => {
    const _port = port || 13714;
    const routes = {
      "/health": async () => ({
        status: "OK",
        timestamp: Date.now()
      }),
      "/shutdown": () => process.exit(),
      "/render": async (request) => render(JSON.parse(await readableToString(request))),
      "/404": async () => ({
        status: "NOT_FOUND",
        timestamp: Date.now()
      })
    };
    (0, _http.createServer)(async (request, response) => {
      const dispatchRoute = routes[request.url] || routes["/404"];
      try {
        response.writeHead(200, {
          "Content-Type": "application/json",
          "Server": "Inertia.js SSR"
        });
        response.write(JSON.stringify(await dispatchRoute(request)));
      } catch (e) {
        console.error(e);
      }
      response.end();
    }).listen(_port, () => console.log("Inertia SSR server started."));
    console.log(`Starting SSR server on port ${_port}...`);
  };
  lib.default = _default;
  return lib;
}
var libExports = requireLib();
const createServer = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Auth/__Login.vue": __vite_glob_0_1 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
