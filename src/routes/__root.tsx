import { TanStackDevtools } from "@tanstack/react-devtools";
import type { QueryClient } from "@tanstack/react-query";
import {
	HeadContent,
	Scripts,
	createRootRouteWithContext,
	useParams
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { useEffect, type ReactNode } from "react";

import { getHTMLTextDir } from "intlayer";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import appCss from "../styles.css?url";
import { PreloaderOverlay } from "#/components/preloader";

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

function RootDocument({ children }: { children: ReactNode }) {
	const { locale } = useParams({ from: "/{-$locale}" });

	// Fade out the SSR boot splash once React has hydrated
	useEffect(() => {
		const el = document.getElementById("boot-splash");
		if (!el) return;
		el.style.opacity = "0";
		el.style.pointerEvents = "none";
		const timer = setTimeout(() => el.remove(), 700);
		return () => clearTimeout(timer);
	}, []);

	return (
		<html lang={locale} dir={getHTMLTextDir(locale)}>
			<head>
				<HeadContent />
			</head>
			<body>
				{/* Hide the boot splash entirely when JavaScript is disabled */}
				<noscript>
					<style>{`#boot-splash { display: none; }`}</style>
				</noscript>
				<div id="boot-splash">
					<PreloaderOverlay />
				</div>
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
