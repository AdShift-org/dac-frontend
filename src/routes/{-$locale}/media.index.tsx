import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { Cta } from "@/components/home/cta";
import { MediaHero, MediaList, fromApiItems } from "@/components/media";

import { client } from "@/lib/oapi-client";
import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media/")({
	loader: async () => {
		const res = await client.GET("/api/media-items");
		return { articles: fromApiItems(res.data?.data ?? []) };
	},
	head: ({ params }) => seoFor("media", "/media", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { articles } = Route.useLoaderData();

	return (
		<main className="min-h-screen bg-neutral-950">
			<MediaHero />
			<MediaList articles={articles} />
			<Cta />
			<Footer />
		</main>
	);
}
