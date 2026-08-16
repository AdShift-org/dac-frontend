import { createFileRoute, Outlet } from "@tanstack/react-router";

import { IntlayerProvider } from "react-intlayer";

export const Route = createFileRoute("/{-$locale}")({
	component: RouteComponent
});

function RouteComponent() {
	const { locale } = Route.useParams();
	return (
		<IntlayerProvider locale={locale}>
			<Outlet />
		</IntlayerProvider>
	);
}
