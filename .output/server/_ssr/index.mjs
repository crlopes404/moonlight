import "../_libs/urlpattern-polyfill.mjs";
let lastCapturedError;
const TTL_MS = 5e3;
function record(error) {
  lastCapturedError = { error, at: Date.now() };
}
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record(event.error ?? event));
  globalThis.addEventListener(
    "unhandledrejection",
    (event) => record(event.reason)
  );
}
function consumeLastCapturedError() {
  if (!lastCapturedError) return void 0;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = void 0;
    return void 0;
  }
  const { error } = lastCapturedError;
  lastCapturedError = void 0;
  return error;
}
function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/home">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
const baseLocale = "pt";
const locales = (
  /** @type {const} */
  ["pt", "en"]
);
const cookieName = "PARAGLIDE_LOCALE";
const strategy = [
  "url",
  "cookie",
  "preferredLanguage",
  "baseLocale"
];
const routeStrategies = [];
const urlPatterns = [
  {
    "pattern": ":protocol://:domain(.*)::port?/:path(.*)?",
    "localized": [
      [
        "pt",
        ":protocol://:domain(.*)::port?/pt/:path(.*)?"
      ],
      [
        "en",
        ":protocol://:domain(.*)::port?/en/:path(.*)?"
      ]
    ]
  }
];
let cachedRouteStrategyUrl;
let cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
  if (routeStrategies.length === 0) {
    return void 0;
  }
  const urlString = typeof url === "string" ? url : url.href;
  if (cachedRouteStrategyUrl === urlString) {
    return cachedRouteStrategy;
  }
  const urlObject = new URL(urlString, "http://dummy.com");
  let match;
  for (const routeStrategy of routeStrategies) {
    const pattern = new URLPattern(routeStrategy.match, urlObject.href);
    if (pattern.exec(urlObject.href)) {
      match = routeStrategy;
      break;
    }
  }
  cachedRouteStrategyUrl = urlString;
  cachedRouteStrategy = match;
  return match;
}
function getStrategyForUrl(url) {
  const routeStrategy = findMatchingRouteStrategy(url);
  if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) {
    return routeStrategy.strategy;
  }
  return strategy;
}
function isExcludedByRouteStrategy(url) {
  return findMatchingRouteStrategy(url)?.exclude === true;
}
let serverAsyncLocalStorage = void 0;
function overwriteServerAsyncLocalStorage(value) {
  serverAsyncLocalStorage = value;
}
globalThis.__paraglide = /** @type {any} */
globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = /** @type {any} */
globalThis.__paraglide.ssr ?? {};
let _locale;
let localeInitiallySet = false;
let getLocale = () => {
  if (serverAsyncLocalStorage) {
    const locale = serverAsyncLocalStorage?.getStore()?.locale;
    if (locale) {
      return locale;
    }
  }
  let strategyToUse = strategy;
  const resolved = resolveLocaleWithStrategies(strategyToUse);
  if (resolved) {
    if (!localeInitiallySet) {
      _locale = resolved;
      localeInitiallySet = true;
      setLocale(resolved, { reload: false });
    }
    return resolved;
  }
  throw new Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function getLocaleForUrl(url) {
  const strategyToUse = getStrategyForUrl(url);
  const resolved = resolveLocaleWithStrategies(strategyToUse, typeof url === "string" ? url : url.href);
  if (resolved) {
    return resolved;
  }
  throw new Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
}
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
  let locale;
  for (const strat of strategyToUse) {
    if (strat === "cookie") {
      locale = extractLocaleFromCookie();
    } else if (strat === "baseLocale") {
      locale = baseLocale;
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        const result = handler.getLocale();
        if (result instanceof Promise) {
          continue;
        }
        if (result !== void 0) {
          return assertIsLocale(result);
        }
      }
    }
    const matchedLocale = toLocale(locale);
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  return void 0;
}
let setLocale = (newLocale, options) => {
  ({
    ...options
  });
  let currentLocale;
  try {
    currentLocale = getLocale();
  } catch {
  }
  const customSetLocalePromises = [];
  let strategyToUse = strategy;
  for (const strat of strategyToUse) {
    if (strat === "cookie") {
      {
        continue;
      }
    } else if (strat === "baseLocale") {
      continue;
    } else if (strat === "url" && typeof window !== "undefined") {
      localizeUrl(window.location.href, {
        locale: newLocale
      }).href;
    } else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
      const handler = customClientStrategies.get(strat);
      if (handler) {
        let result = handler.setLocale(newLocale);
        if (result instanceof Promise) {
          result = result.catch((error) => {
            throw new Error(`Custom strategy "${strat}" setLocale failed.`, {
              cause: error
            });
          });
          customSetLocalePromises.push(result);
        }
      }
    }
  }
  if (customSetLocalePromises.length) {
    return Promise.all(customSetLocalePromises).then(() => {
    });
  }
  return;
};
let getUrlOrigin = () => {
  if (serverAsyncLocalStorage) {
    return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
  } else if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://fallback.com";
};
function toLocale(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const lowerValue = value.toLowerCase();
  for (const locale of locales) {
    if (locale.toLowerCase() === lowerValue) {
      return locale;
    }
  }
  return void 0;
}
function isLocale(locale) {
  return !!locale && locales.some((item) => item === locale);
}
function assertIsLocale(input) {
  const locale = toLocale(input);
  if (locale)
    return locale;
  throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
const extractLocaleFromRequestWithStrategies = (request, strategies, url = request.url) => {
  const effectiveRequestUrl = resolveEffectiveRequestUrl(request, url);
  let locale;
  for (const strat of strategies) {
    if (strat === "cookie") {
      const cookiePrefix = cookieName + "=";
      locale = request.headers.get("cookie")?.split(";").map((c) => c.trim()).find((c) => c.startsWith(cookiePrefix))?.slice(cookiePrefix.length);
    } else if (strat === "url") {
      locale = extractLocaleFromUrl(effectiveRequestUrl);
    } else if (strat === "preferredLanguage") {
      locale = extractLocaleFromHeader(request);
    } else if (strat === "globalVariable") {
      locale = _locale;
    } else if (strat === "baseLocale") {
      return baseLocale;
    } else if (strat === "localStorage") {
      continue;
    } else if (isCustomStrategy(strat)) {
      continue;
    }
    const matchedLocale = toLocale(locale);
    if (matchedLocale) {
      return matchedLocale;
    }
  }
  throw new Error("No locale found. There is an error in your strategy. Try adding 'baseLocale' as the very last strategy. Read more here https://paraglidejs.com/errors#no-locale-found");
};
function resolveEffectiveRequestUrl(request, effectiveRequestUrl = request.url) {
  if (effectiveRequestUrl instanceof URL) {
    return new URL(effectiveRequestUrl.href);
  }
  return new URL(effectiveRequestUrl, request.url);
}
const extractLocaleFromRequestAsync = async (request, options = {}) => {
  let locale;
  const effectiveRequestUrl = resolveEffectiveRequestUrlFromRequestAsync(request, options.effectiveRequestUrl);
  const strategy2 = getStrategyForUrl(effectiveRequestUrl);
  for (const strat of strategy2) {
    if (isCustomStrategy(strat) && customServerStrategies.has(strat)) {
      const handler = customServerStrategies.get(strat);
      if (handler) {
        locale = await handler.getLocale(request);
      }
      const matchedLocale = toLocale(locale);
      if (matchedLocale) {
        return matchedLocale;
      }
    }
  }
  return extractLocaleFromRequestWithStrategies(request, strategy2, effectiveRequestUrl);
};
function resolveEffectiveRequestUrlFromRequestAsync(request, effectiveRequestUrl = request.url) {
  if (effectiveRequestUrl instanceof URL) {
    return new URL(effectiveRequestUrl.href);
  }
  return new URL(effectiveRequestUrl, request.url);
}
const cookieNamePattern = cookieName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const localeCookiePattern = new RegExp(`(?:^|;\\s*)${cookieNamePattern}=([^;]*)`);
const noCachedLocale = /* @__PURE__ */ Symbol();
let cachedLocaleFromCookie = noCachedLocale;
function clearLocaleCookieCache() {
  cachedLocaleFromCookie = noCachedLocale;
}
function scheduleLocaleCookieCacheClear() {
  if (typeof queueMicrotask === "function") {
    queueMicrotask(clearLocaleCookieCache);
  } else {
    Promise.resolve().then(clearLocaleCookieCache);
  }
}
function extractLocaleFromCookie() {
  if (typeof document === "undefined") {
    return;
  }
  if (cachedLocaleFromCookie !== noCachedLocale) {
    return cachedLocaleFromCookie;
  }
  const match = document.cookie.match(localeCookiePattern);
  const locale = match?.[1];
  cachedLocaleFromCookie = toLocale(locale);
  scheduleLocaleCookieCacheClear();
  return cachedLocaleFromCookie;
}
function extractLocaleFromHeader(request) {
  const acceptLanguageHeader = request.headers.get("accept-language");
  if (acceptLanguageHeader) {
    const languages = acceptLanguageHeader.split(",").map((lang) => {
      const [tag, q = "1"] = lang.trim().split(";q=");
      const baseTag = tag?.split("-")[0];
      return {
        fullTag: tag,
        baseTag,
        q: Number(q)
      };
    }).sort((a, b) => b.q - a.q);
    for (const lang of languages) {
      const fullLocale = toLocale(lang.fullTag);
      if (fullLocale) {
        return fullLocale;
      }
      const baseLocale2 = toLocale(lang.baseTag);
      if (baseLocale2) {
        return baseLocale2;
      }
    }
    return void 0;
  }
  return void 0;
}
let cachedUrl;
let cachedLocale;
function extractLocaleFromUrl(url) {
  const urlString = typeof url === "string" ? url : url.href;
  if (cachedUrl === urlString) {
    return cachedLocale;
  }
  let result;
  {
    const urlObj = typeof url === "string" ? new URL(url) : url;
    for (const element of urlPatterns) {
      for (const [locale, localizedPattern] of element.localized) {
        const match = new URLPattern(localizedPattern, urlObj.href).exec(urlObj.href);
        if (match) {
          result = locale;
          break;
        }
      }
      if (result)
        break;
    }
  }
  cachedUrl = urlString;
  cachedLocale = result;
  return result;
}
function localizeUrl(url, options) {
  const targetLocale = options?.locale ? assertIsLocale(options?.locale) : getLocale();
  const urlObj = typeof url === "string" ? new URL(url) : url;
  for (const element of urlPatterns) {
    for (const [, localizedPattern] of element.localized) {
      const match = new URLPattern(localizedPattern, urlObj.href).exec(urlObj.href);
      if (!match) {
        continue;
      }
      const targetPattern = element.localized.find(([locale]) => locale === targetLocale)?.[1];
      if (!targetPattern) {
        continue;
      }
      const localizedUrl = fillPattern(targetPattern, aggregateGroups(match), urlObj.origin);
      return fillMissingUrlParts(localizedUrl, match);
    }
    const unlocalizedMatch = new URLPattern(element.pattern, urlObj.href).exec(urlObj.href);
    if (unlocalizedMatch) {
      const targetPattern = element.localized.find(([locale]) => locale === targetLocale)?.[1];
      if (targetPattern) {
        const localizedUrl = fillPattern(targetPattern, aggregateGroups(unlocalizedMatch), urlObj.origin);
        return fillMissingUrlParts(localizedUrl, unlocalizedMatch);
      }
    }
  }
  return urlObj;
}
function deLocalizeUrl(url) {
  const urlObj = typeof url === "string" ? new URL(url) : url;
  for (const element of urlPatterns) {
    for (const [, localizedPattern] of element.localized) {
      const match = new URLPattern(localizedPattern, urlObj.href).exec(urlObj.href);
      if (match) {
        const groups = aggregateGroups(match);
        const baseUrl = fillPattern(element.pattern, groups, urlObj.origin);
        return fillMissingUrlParts(baseUrl, match);
      }
    }
    const unlocalizedMatch = new URLPattern(element.pattern, urlObj.href).exec(urlObj.href);
    if (unlocalizedMatch) {
      const baseUrl = fillPattern(element.pattern, aggregateGroups(unlocalizedMatch), urlObj.origin);
      return fillMissingUrlParts(baseUrl, unlocalizedMatch);
    }
  }
  return urlObj;
}
function fillMissingUrlParts(url, match) {
  if (match.protocol.groups["0"]) {
    url.protocol = match.protocol.groups["0"] ?? "";
  }
  if (match.hostname.groups["0"]) {
    url.hostname = match.hostname.groups["0"] ?? "";
  }
  if (match.username.groups["0"]) {
    url.username = match.username.groups["0"] ?? "";
  }
  if (match.password.groups["0"]) {
    url.password = match.password.groups["0"] ?? "";
  }
  if (match.port.groups["0"]) {
    url.port = match.port.groups["0"] ?? "";
  }
  if (match.pathname.groups["0"]) {
    url.pathname = match.pathname.groups["0"] ?? "";
  }
  if (match.search.groups["0"]) {
    url.search = match.search.groups["0"] ?? "";
  }
  if (match.hash.groups["0"]) {
    url.hash = match.hash.groups["0"] ?? "";
  }
  return url;
}
function fillPattern(pattern, values, origin) {
  let processedPattern = pattern.replace(/(https?:\/\/[^:/]+):(\d+)(\/|$)/g, (_, protocol, port, slash) => {
    return `${protocol}#PORT-${port}#${slash}`;
  });
  let processedGroupDelimiters = processedPattern.replace(/\{([^{}]*)\}([?+*]?)/g, (_, content, modifier) => {
    if (modifier === "?") {
      return content;
    }
    return content;
  });
  let filled = processedGroupDelimiters.replace(/(\/?):([a-zA-Z0-9_]+)(\([^)]*\))?([?+*]?)/g, (_, slash, name, __, modifier) => {
    const value = values[name];
    if (value === null) {
      return "";
    }
    if (modifier === "?") {
      return value !== void 0 ? `${slash}${value}` : "";
    }
    if (modifier === "+" || modifier === "*") {
      if (value === void 0 && modifier === "+") {
        throw new Error(`Missing value for "${name}" (one or more required)`);
      }
      return value ? `${slash}${value}` : "";
    }
    if (value === void 0) {
      throw new Error(`Missing value for "${name}"`);
    }
    return `${slash}${value}`;
  });
  filled = filled.replace(/#PORT-(\d+)#/g, ":$1");
  return new URL(filled, origin);
}
function aggregateGroups(match) {
  return {
    ...match.hash.groups,
    ...match.hostname.groups,
    ...match.password.groups,
    ...match.pathname.groups,
    ...match.port.groups,
    ...match.protocol.groups,
    ...match.search.groups,
    ...match.username.groups
  };
}
async function shouldRedirect(input = {}) {
  const currentUrl = resolveUrl(input);
  const locale = await resolveLocale(input, currentUrl);
  const strategy2 = getStrategyForUrl(currentUrl.href);
  if (isExcludedByRouteStrategy(currentUrl.href) || !strategy2.includes("url")) {
    return { shouldRedirect: false, locale, redirectUrl: void 0 };
  }
  const localizedUrl = localizeUrl(currentUrl.href, { locale });
  const shouldRedirectToLocalizedUrl = normalizeUrl(localizedUrl.href) !== normalizeUrl(currentUrl.href);
  return {
    shouldRedirect: shouldRedirectToLocalizedUrl,
    locale,
    redirectUrl: shouldRedirectToLocalizedUrl ? localizedUrl : void 0
  };
}
async function resolveLocale(input, currentUrl) {
  const locale = toLocale(input.locale);
  if (locale) {
    return locale;
  }
  if (input.request) {
    return extractLocaleFromRequestAsync(input.request, {
      effectiveRequestUrl: currentUrl
    });
  }
  if ("url" in input && typeof input.url !== "undefined") {
    return getLocaleForUrl(currentUrl.href);
  }
  return getLocale();
}
function resolveUrl(input) {
  if ("effectiveRequestUrl" in input && input.effectiveRequestUrl instanceof URL) {
    return new URL(input.effectiveRequestUrl.href);
  }
  if ("effectiveRequestUrl" in input && typeof input.effectiveRequestUrl === "string") {
    return new URL(input.effectiveRequestUrl, input.request ? input.request.url : getUrlOrigin());
  }
  if (input.request) {
    return new URL(input.request.url);
  }
  if ("url" in input && input.url instanceof URL) {
    return new URL(input.url.href);
  }
  if ("url" in input && typeof input.url === "string") {
    return new URL(input.url, getUrlOrigin());
  }
  if (typeof window !== "undefined" && window?.location?.href) {
    return new URL(window.location.href);
  }
  throw new Error("shouldRedirect() requires either a request, an absolute URL, or must run in a browser environment.");
}
function normalizeUrl(url) {
  const urlObj = new URL(url);
  urlObj.pathname = urlObj.pathname.replace(/\/$/, "");
  return urlObj.href;
}
const customServerStrategies = /* @__PURE__ */ new Map();
const customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy2) {
  return typeof strategy2 === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy2);
}
async function paraglideMiddleware(request, resolve, options) {
  if (!serverAsyncLocalStorage) {
    const { AsyncLocalStorage } = await import("async_hooks");
    overwriteServerAsyncLocalStorage(new AsyncLocalStorage());
  } else if (!serverAsyncLocalStorage) {
    overwriteServerAsyncLocalStorage(createMockAsyncLocalStorage());
  }
  const url = resolveMiddlewareUrl(request, options?.effectiveRequestUrl);
  const origin = url.origin;
  if (isExcludedByRouteStrategy(url.href)) {
    const locale2 = baseLocale;
    const newRequest2 = cloneRequestWithFallback(request, url);
    const messageCalls2 = /* @__PURE__ */ new Set();
    return (
      /** @type {Response} */
      await serverAsyncLocalStorage?.run({ locale: locale2, origin, messageCalls: messageCalls2 }, () => resolve({ locale: locale2, request: newRequest2 }))
    );
  }
  const strategy2 = getStrategyForUrl(url.href);
  const decision = await shouldRedirect({ request, effectiveRequestUrl: url });
  const locale = decision.locale;
  if (request.headers.get("Sec-Fetch-Dest") === "document" && decision.shouldRedirect && decision.redirectUrl) {
    const headers = {};
    if (strategy2.includes("preferredLanguage")) {
      headers["Vary"] = "Accept-Language";
    }
    const response2 = new Response(null, {
      status: 307,
      headers: {
        Location: decision.redirectUrl.href,
        ...headers
      }
    });
    return response2;
  }
  let newRequest;
  if (strategy2.includes("url")) {
    newRequest = cloneRequestWithFallback(request, deLocalizeUrl(url));
  } else {
    newRequest = cloneRequestWithFallback(request, url);
  }
  const messageCalls = /* @__PURE__ */ new Set();
  const response = await serverAsyncLocalStorage?.run({ locale, origin, messageCalls }, () => resolve({ locale, request: newRequest }));
  return response;
}
function resolveMiddlewareUrl(request, effectiveRequestUrl) {
  if (effectiveRequestUrl instanceof URL) {
    return new URL(effectiveRequestUrl, request.url);
  }
  return new URL(request.url);
}
function cloneRequestWithFallback(request, url = request.url) {
  const targetUrl = typeof url === "string" ? url : url.href;
  if (targetUrl === request.url) {
    try {
      return new Request(request.clone());
    } catch {
      try {
        return new Request(request);
      } catch {
        return request;
      }
    }
  }
  try {
    return new Request(targetUrl, request.clone());
  } catch {
    try {
      return new Request(targetUrl, request);
    } catch {
      return request;
    }
  }
}
function createMockAsyncLocalStorage() {
  let currentStore = void 0;
  return {
    getStore() {
      return currentStore;
    },
    async run(store, callback) {
      currentStore = store;
      try {
        return await callback();
      } finally {
        currentStore = void 0;
      }
    }
  };
}
let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("./server-C7f-vxcz.mjs").then((n) => n.s).then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
const SECURITY_HEADERS = {
  "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  "content-security-policy-report-only": "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; img-src 'self' data:; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; form-action 'self'; manifest-src 'self'"
};
function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(key)) headers.set(key, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
async function normalizeCatastrophicSsrResponse(response) {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;
  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }
  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
const server = {
  async fetch(request, env, ctx) {
    return paraglideMiddleware(request, async () => {
      try {
        const handler = await getServerEntry();
        const response = await handler.fetch(request, env, ctx);
        return withSecurityHeaders(await normalizeCatastrophicSsrResponse(response));
      } catch (error) {
        console.error(error);
        return withSecurityHeaders(
          new Response(renderErrorPage(), {
            status: 500,
            headers: { "content-type": "text/html; charset=utf-8" }
          })
        );
      }
    });
  }
};
export {
  server as default,
  getLocale as g,
  isLocale as i,
  renderErrorPage as r,
  setLocale as s
};
