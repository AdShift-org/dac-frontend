import { createFileRoute, Outlet } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/projects/$projectId")({
	head: ({ params }) =>
		seoFor("projects", `/projects/${params.projectId}`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return <Outlet />;
}
