import { getLocale } from "@/paraglide/runtime";

const BASE = "https://www.moonlight.pt";
const OG_LOCALE: Record<string, string> = { pt: "pt_PT", en: "en_US" };

/**
 * Builds locale-aware <head> metadata for a route:
 *   - translated title/description/og
 *   - canonical + og:url pointing at the CURRENT locale URL (/pt/… or /en/…)
 *   - hreflang alternates (pt, en, x-default) so Google indexes both languages
 *   - og:locale + og:locale:alternate
 *
 * `path` is the route segment without locale prefix, e.g. "servicos".
 */
export function localizedHead(opts: { path: string; title: string; description: string }) {
  const locale = getLocale();
  const other = locale === "pt" ? "en" : "pt";
  const url = `${BASE}/${locale}/${opts.path}`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: OG_LOCALE[locale] },
      { property: "og:locale:alternate", content: OG_LOCALE[other] },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hreflang: "pt", href: `${BASE}/pt/${opts.path}` },
      { rel: "alternate", hreflang: "en", href: `${BASE}/en/${opts.path}` },
      { rel: "alternate", hreflang: "x-default", href: `${BASE}/pt/${opts.path}` },
    ],
  };
}
