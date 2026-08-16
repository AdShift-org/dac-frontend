import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

import {
	Hero,
	Intro,
	Pillars,
	Principles,
	Process,
	QuoteBanner,
	Stats,
	Timeline
} from "@/components/about";
import { Clients } from "@/components/home/clients";
import { Cta } from "@/components/home/cta";
import { Leadership } from "@/components/home/leadership";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/{-$locale}/about")({
	head: ({ params }) => seoFor("about", "/about", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<main className="min-h-screen bg-[#12110e]">
			<Hero />
			<Intro />
			<Stats />
			<Timeline />
			<QuoteBanner />
			<Pillars />
			<Principles />
			<Leadership />
			<Process />
			<Clients />
			<Cta />
			<Footer />
		</main>
	);
}