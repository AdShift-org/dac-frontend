import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media")({
	head: ({ params }) => seoFor("media", "/media", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<section className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
			<h1 className="font-serif text-4xl font-bold uppercase">Media</h1>
		</section>
	);
}