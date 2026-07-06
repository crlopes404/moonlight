import { createFileRoute, redirect } from "@tanstack/react-router";
import { getLocale } from "@/paraglide/runtime";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    // "/" → localized home. Locale resolved from cookie → Accept-Language → base (pt).
    throw redirect({ to: "/$locale/home", params: { locale: getLocale() } });
  },
});
