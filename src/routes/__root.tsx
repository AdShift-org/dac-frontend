import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
	useParams
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { getHTMLTextDir } from "intlayer";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => {
		return {
			meta: [
				{
					charSet: "utf-8"
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{
					title: "DAC Construction"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: appCss
				}
			]
		};
	},
	shellComponent: RootDocument
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const { locale } = useParams({ from: "/{-$locale}" });
	return (
		<html lang={locale} dir={getHTMLTextDir(locale)}>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right"
					}}
					plugins={[
						{
							name: "TanStack Router",
							render: <TanStackRouterDevtoolsPanel />
						},
						TanStackQueryDevtools
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
