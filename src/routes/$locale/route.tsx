import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { isLocale } from "@/paraglide/runtime";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    // Reject any prefix that isn't a supported locale (pt · en) → 404.
    if (!isLocale(params.locale)) throw notFound();
  },
  component: () => <Outlet />,
});
