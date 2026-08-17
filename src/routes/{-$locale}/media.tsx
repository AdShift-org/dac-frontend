import { createFileRoute, Outlet } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media")({
	head: ({ params }) => seoFor("media", "/media", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return <Outlet />;
}