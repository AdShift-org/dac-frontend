import { createFileRoute, Outlet } from "@tanstack/react-router";

import { IntlayerProvider } from "react-intlayer";

import { Header } from "#/components/header";
import { NotFound } from "#/components/not-found";
import { client } from "@/lib/oapi-client";
import { unfoldAr } from "@/lib/cms";

export const Route = createFileRoute("/{-$locale}")({
	loader: async () => {
		const [services, projects, home, contact, about] = await Promise.all([
			client.GET("/api/services"),
			client.GET("/api/projects"),
			client.GET("/api/pages/{page}", { params: { path: { page: "home" } } }),
			client.GET("/api/pages/{page}", { params: { path: { page: "contact-us" } } }),
			client.GET("/api/pages/{page}", { params: { path: { page: "about-us" } } })
		]);

		return {
			services: (services.data?.data ?? []).map((item) => ({
				...item,
				ar: unfoldAr(item.ar) as typeof item.ar
			})),
			projects: (projects.data?.data ?? []).map((item) => ({
				...item,
				ar: unfoldAr(item.ar) as typeof item.ar
			})),
			home: home.data?.sections ?? {},
			contact: contact.data?.sections ?? {},
			about: about.data?.sections ?? {}
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
