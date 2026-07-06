// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { paraglideVitePlugin } from "@inlang/paraglide-js";

export default defineConfig({
  plugins: [
    // Paraglide i18n — compiles ./messages/{locale}.json into tree-shakeable
    // message functions in ./src/paraglide (generated; git-ignored).
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      // emit .d.ts alongside the generated .js so TypeScript/IDE resolve the modules
      emitTsDeclarations: true,
      // pt at /pt/…, en at /en/… (both prefixed). Fallback order for un-prefixed
      // URLs (e.g. "/"): saved cookie → Accept-Language → base locale (pt).
      strategy: ["url", "cookie", "preferredLanguage", "baseLocale"],
      urlPatterns: [
        {
          pattern: ":protocol://:domain(.*)::port?/:path(.*)?",
          localized: [
            ["pt", ":protocol://:domain(.*)::port?/pt/:path(.*)?"],
            ["en", ":protocol://:domain(.*)::port?/en/:path(.*)?"],
          ],
        },
      ],
    }),
  ],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
