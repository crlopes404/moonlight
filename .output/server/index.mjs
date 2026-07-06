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
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": '"1441-nigdUogdWxQojYxRzudxpEvkopk"',
    "mtime": "2026-07-06T21:09:43.844Z",
    "size": 5185,
    "path": "../public/sitemap.xml"
  },
  "/assets/case-studies-C3NGzss-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2d33-w5wBHccDknkpcsJLUGxDZml5Y64"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 11571,
    "path": "../public/assets/case-studies-C3NGzss-.js"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"46-SfGy3CqtWdyYJfm8eEvwrUiCrOQ"',
    "mtime": "2026-07-03T10:13:01.908Z",
    "size": 70,
    "path": "../public/robots.txt"
  },
  "/assets/arrow-right-DfUvaECp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"a6-7vTuUb69vzQ0U0+pNvTDar5ktwg"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 166,
    "path": "../public/assets/arrow-right-DfUvaECp.js"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"2f1-UrpMh0bRgFKlCCNT6RyPRWyoynY"',
    "mtime": "2026-07-03T10:12:56.253Z",
    "size": 753,
    "path": "../public/favicon.ico"
  },
  "/assets/chart-column-BzBbsnma.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"fc-t2RGYGPZRNO6DfwR2PHCcBy4n1A"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 252,
    "path": "../public/assets/chart-column-BzBbsnma.js"
  },
  "/site.webmanifest": {
    "type": "application/manifest+json",
    "etag": '"257-O5SXAzNFkveXJ3vyqr4gwMPO9UQ"',
    "mtime": "2026-07-03T10:13:25.339Z",
    "size": 599,
    "path": "../public/site.webmanifest"
  },
  "/assets/contacto-RL9Q24kp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4021-x1Oa6rZ/fZOe8tXPGuEMoYnPqgY"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 16417,
    "path": "../public/assets/contacto-RL9Q24kp.js"
  },
  "/assets/headphones-DchoE5mc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"55d-9HCRAqCP6ViI4wfhtOVzEb1rolQ"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 1373,
    "path": "../public/assets/headphones-DchoE5mc.js"
  },
  "/assets/CTABanner-BPYdXEaS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"d09-MkUBAGKPB51iGqaMCl7sj64XjGw"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 3337,
    "path": "../public/assets/CTABanner-BPYdXEaS.js"
  },
  "/assets/home-Df8y_VHh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5202-Oj3c76d7nO+ZnY5PfNHbpVEAiqw"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 20994,
    "path": "../public/assets/home-Df8y_VHh.js"
  },
  "/assets/m-ecommerce-DRLtBh1s.png": {
    "type": "image/png",
    "etag": '"37b9-57aOf5Z5XhZF5PRtDaYIFcPSoBo"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 14265,
    "path": "../public/assets/m-ecommerce-DRLtBh1s.png"
  },
  "/assets/m-analitics-CCd8_Q16.png": {
    "type": "image/png",
    "etag": '"6b4b-xXTAGYlz1fbXXjjHXdlAhebg0YQ"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 27467,
    "path": "../public/assets/m-analitics-CCd8_Q16.png"
  },
  "/assets/m-leads-WPIEg50v.png": {
    "type": "image/png",
    "etag": '"4a6f-2R2LRr4lMlO7pjcLe6RU3pDzyCE"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 19055,
    "path": "../public/assets/m-leads-WPIEg50v.png"
  },
  "/moonhd.png": {
    "type": "image/png",
    "etag": '"6a051-Gy3sv2tXpns7Fu7IJPduhGSJlpc"',
    "mtime": "2026-06-30T10:11:15.744Z",
    "size": 434257,
    "path": "../public/moonhd.png"
  },
  "/assets/m-gaming-BwlavxME.png": {
    "type": "image/png",
    "etag": '"17a7a-s/hLdPe6U+93aHEZXjXgvbfkSKA"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 96890,
    "path": "../public/assets/m-gaming-BwlavxME.png"
  },
  "/assets/mlogo-BfmS5fdl.png": {
    "type": "image/png",
    "etag": '"1284c-DL6Niha/EkzmIbkx88NMfK3rPIA"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 75852,
    "path": "../public/assets/mlogo-BfmS5fdl.png"
  },
  "/assets/m-mchain-DRifDb5t.png": {
    "type": "image/png",
    "etag": '"7f8c-JV+KQt14Fv4ZR/1gGWBMg0/rGwM"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 32652,
    "path": "../public/assets/m-mchain-DRifDb5t.png"
  },
  "/assets/quem-somos-7jXcApZJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"51aa-osJdxSTpa3ksiS5s4lr9OdUBGQo"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 20906,
    "path": "../public/assets/quem-somos-7jXcApZJ.js"
  },
  "/assets/route-CoU3dPhB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"5f-lZsiii67XTielGp95q2dqDw1zlY"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 95,
    "path": "../public/assets/route-CoU3dPhB.js"
  },
  "/assets/produtos-PPk7spVD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"3c9f-+XjN3I/5nuf7xOhk23oG6FcJx54"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 15519,
    "path": "../public/assets/produtos-PPk7spVD.js"
  },
  "/assets/SectionHeader-CBoQcyag.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"501-pSn4JFiyZG/sxq8cW0ji1e5YV24"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 1281,
    "path": "../public/assets/SectionHeader-CBoQcyag.js"
  },
  "/assets/servicos-UKi3bu-Z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2ab2-nbN0CqQhk3dywvwGxJZ9rxBbNrc"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 10930,
    "path": "../public/assets/servicos-UKi3bu-Z.js"
  },
  "/assets/index-B8TiCbiP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"80145-ueJXE4VzkA0CsB9J+DFsrEbBB/8"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 524613,
    "path": "../public/assets/index-B8TiCbiP.js"
  },
  "/assets/use-transform-C3B_m2Pm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"4e9-GKvoPMwvuER+EvfRBNKecqn0TBc"',
    "mtime": "2026-07-06T21:18:46.249Z",
    "size": 1257,
    "path": "../public/assets/use-transform-C3B_m2Pm.js"
  },
  "/assets/styles-De6awFGw.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"ca9e-sBPmmmeCd81gTFCQEQQTToAlgqk"',
    "mtime": "2026-07-06T21:18:46.248Z",
    "size": 51870,
    "path": "../public/assets/styles-De6awFGw.css"
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
