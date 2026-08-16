import { createFileRoute, Outlet } from "@tanstack/react-router";

import { IntlayerProvider } from "react-intlayer";

import { Header } from "#/components/header";
import { NotFound } from "#/components/not-found";

export const Route = createFileRoute("/{-$locale}")({
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
