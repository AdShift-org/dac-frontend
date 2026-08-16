import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/contact")({
	head: ({ params }) => seoFor("contact", "/contact", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<section className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
			<h1 className="font-serif text-4xl font-bold uppercase">Contact</h1>
		</section>
	);
}