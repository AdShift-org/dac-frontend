import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

import { Hero, ServicesList } from "@/components/services";
import { Cta } from "@/components/home/cta";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/{-$locale}/services")({
	head: ({ params }) => seoFor("services", "/services", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<main className="min-h-screen bg-[#12110e]">
			<Hero />
			<ServicesList />
			<Cta />
			<Footer />
		</main>
	);
}