import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";

import { Hero, Offices, InquiryForm } from "@/components/contact";
import { Footer } from "@/components/footer";

export const Route = createFileRoute("/{-$locale}/contact")({
	head: ({ params }) => seoFor("contact", "/contact", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<main className="min-h-screen bg-[#fcfbf9]">
			<Hero />
			<Offices />
			<InquiryForm />
			<Footer />
		</main>
	);
}