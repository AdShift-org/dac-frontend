import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { Cta } from "@/components/home/cta";
import { MediaHero, MediaList } from "@/components/media";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media/")({
	head: ({ params }) => seoFor("media", "/media", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<main className="min-h-screen bg-neutral-950">
			<MediaHero />
			<MediaList />
			<Cta />
			<Footer />
		</main>
	);
}
