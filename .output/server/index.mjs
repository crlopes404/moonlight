globalThis.__nitro_main__ = import.meta.url;
import { N as NodeResponse, s as serve } from "./_libs/srvx.mjs";
import { H as HTTPError, d as defineHandler, t as toEventHandler, a as defineLazyEventHandler, b as H3Core } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "node:http";
import "node:stream";
import "node:stream/promises";
import "node:https";
import "node:http2";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/apple-touch-icon.png": {
    "type": "image/png",
    "etag": '"1284c-DL6Niha/EkzmIbkx88NMfK3rPIA"',
    "mtime": "2026-07-03T10:12:56.276Z",
    "size": 75852,
    "path": "../public/apple-touch-icon.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"2f1-UrpMh0bRgFKlCCNT6RyPRWyoynY"',
    "mtime": "2026-07-03T10:12:56.253Z",
    "size": 753,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"46-SfGy3CqtWdyYJfm8eEvwrUiCrOQ"',
    "mtime": "2026-07-03T10:13:01.908Z",
    "size": 70,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"388-cAIpG7hTvsNFwnlOGJTZcOUXIAY"',
    "mtime": "2026-07-03T10:13:08.166Z",
    "size": 904,
    "path": "../public/sitemap.xml"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"257-O5SXAzNFkveXJ3vyqr4gwMPO9UQ"',
    "mtime": "2026-07-03T10:13:25.339Z",
    "size": 599,
    "path": "../public/site.webmanifest"
  },
  "/assets/arrow-right-C-EapDYx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-X/KgIzt1d9evTYjAue9iSyzhRHk"',
    "mtime": "2026-07-06T10:09:54.552Z",
    "size": 166,
    "path": "../public/assets/arrow-right-C-EapDYx.js"
  },
  "/assets/chart-column-CI8kVID9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"f7-B3qIFOt9NabG7nw0xrqkTwmTWPM"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 247,
    "path": "../public/assets/chart-column-CI8kVID9.js"
  },
  "/assets/contacto-B-wXnru8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2e98-csdXUsbS5/LgULRDpa4S/0H3xTo"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 11928,
    "path": "../public/assets/contacto-B-wXnru8.js"
  },
  "/assets/case-studies-DD_aNeuZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1f06-OAwJJapbeYyOvioETN8K/yfjRJ8"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 7942,
    "path": "../public/assets/case-studies-DD_aNeuZ.js"
  },
  "/assets/CTABanner-CaqTle69.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bda-u3Wt2yHJVkcRpFDKkbhmaMFooRY"',
    "mtime": "2026-07-06T10:09:54.552Z",
    "size": 3034,
    "path": "../public/assets/CTABanner-CaqTle69.js"
  },
  "/assets/headphones-UswiTi3d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"55d-hEfqhIxFFEy47PB8kvHdDpXApJg"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 1373,
    "path": "../public/assets/headphones-UswiTi3d.js"
  },
  "/moonhd.png": {
    "type": "image/png",
    "etag": '"6a051-Gy3sv2tXpns7Fu7IJPduhGSJlpc"',
    "mtime": "2026-06-30T10:11:15.744Z",
    "size": 434257,
    "path": "../public/moonhd.png"
  },
  "/assets/home-Cl_CtBhI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d39-ucLaU4PA6R+J5fPjcnoZ7C3WeP0"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 15673,
    "path": "../public/assets/home-Cl_CtBhI.js"
  },
  "/assets/m-ecommerce-DRLtBh1s.png": {
    "type": "image/png",
    "etag": '"37b9-57aOf5Z5XhZF5PRtDaYIFcPSoBo"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 14265,
    "path": "../public/assets/m-ecommerce-DRLtBh1s.png"
  },
  "/assets/m-leads-WPIEg50v.png": {
    "type": "image/png",
    "etag": '"4a6f-2R2LRr4lMlO7pjcLe6RU3pDzyCE"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 19055,
    "path": "../public/assets/m-leads-WPIEg50v.png"
  },
  "/assets/m-analitics-CCd8_Q16.png": {
    "type": "image/png",
    "etag": '"6b4b-xXTAGYlz1fbXXjjHXdlAhebg0YQ"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 27467,
    "path": "../public/assets/m-analitics-CCd8_Q16.png"
  },
  "/assets/m-mchain-DRifDb5t.png": {
    "type": "image/png",
    "etag": '"7f8c-JV+KQt14Fv4ZR/1gGWBMg0/rGwM"',
    "mtime": "2026-07-06T10:09:54.548Z",
    "size": 32652,
    "path": "../public/assets/m-mchain-DRifDb5t.png"
  },
  "/assets/mlogo-BfmS5fdl.png": {
    "type": "image/png",
    "etag": '"1284c-DL6Niha/EkzmIbkx88NMfK3rPIA"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 75852,
    "path": "../public/assets/mlogo-BfmS5fdl.png"
  },
  "/assets/m-gaming-BwlavxME.png": {
    "type": "image/png",
    "etag": '"17a7a-s/hLdPe6U+93aHEZXjXgvbfkSKA"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 96890,
    "path": "../public/assets/m-gaming-BwlavxME.png"
  },
  "/assets/produtos-C53wHHUs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ae3-cygJtT0gUWqv1zFwD3u2XTU89cs"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 10979,
    "path": "../public/assets/produtos-C53wHHUs.js"
  },
  "/assets/servicos-B01RiOqe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"19e9-DVGRYLaeeqe3aT+7Z90muxMm9qw"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 6633,
    "path": "../public/assets/servicos-B01RiOqe.js"
  },
  "/assets/quem-somos-CP8QuZJQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3d46-dVED3zb+uVpTTWGDVz0lg5/mvTM"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 15686,
    "path": "../public/assets/quem-somos-CP8QuZJQ.js"
  },
  "/assets/styles-DhJNtW_m.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"ca6b-SYPnZXF57ALqH+Y/3ar1CP4MQZs"',
    "mtime": "2026-07-06T10:09:54.550Z",
    "size": 51819,
    "path": "../public/assets/styles-DhJNtW_m.css"
  },
  "/assets/SectionHeader-DFC346Ow.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"501-ExPk/G2yzLiM30ueQUCnULRpaiM"',
    "mtime": "2026-07-06T10:09:54.552Z",
    "size": 1281,
    "path": "../public/assets/SectionHeader-DFC346Ow.js"
  },
  "/assets/index-C0nr_mVh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"794df-6U+7lwZFZE5YmM63BKhDQjXvYAk"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 496863,
    "path": "../public/assets/index-C0nr_mVh.js"
  },
  "/assets/use-transform-FDc9adiG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e9-HFxquo6r87ZX5OR1p7w6o2dG7nY"',
    "mtime": "2026-07-06T10:09:54.551Z",
    "size": 1257,
    "path": "../public/assets/use-transform-FDc9adiG.js"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br",
  zstd: ".zst"
};
const _JMDuWJ = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_vDtinN = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_vDtinN };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const globalMiddleware = [
  toEventHandler(_JMDuWJ)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const tracingSrvxPlugins = [];
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: nitroApp.fetch,
  plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
const nodeServer = {};
export {
  nodeServer as default
};
