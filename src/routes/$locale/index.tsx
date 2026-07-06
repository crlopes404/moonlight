import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale/")({
  beforeLoad: ({ params }) => {
    // "/pt" · "/en" → their home page.
    throw redirect({ to: "/$locale/home", params: { locale: params.locale } });
  },
});
