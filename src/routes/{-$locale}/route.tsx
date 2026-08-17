import { createFileRoute, Outlet } from "@tanstack/react-router";

import { IntlayerProvider } from "react-intlayer";

import { Header } from "#/components/header";
import { NotFound } from "#/components/not-found";
import { client } from "@/lib/oapi-client";

export const Route = createFileRoute("/{-$locale}")({
	loader: async () => {
		const [services, projects, home] = await Promise.all([
			client.GET("/api/services"),
			client.GET("/api/projects"),
			client.GET("/api/pages/{page}", { params: { path: { page: "home" } } })
		]);

		return {
			services: services.data?.data ?? [],
			projects: projects.data?.data ?? [],
			home: home.data?.sections ?? {}
		};
	},
	component: RouteComponent,
	notFoundComponent: NotFound
});

function RouteComponent() {
	const { locale } = Route.useParams();
	return (
		<IntlayerProvider locale={locale}>
			<Header />
			<Outlet />
		</IntlayerProvider>
	);
}
