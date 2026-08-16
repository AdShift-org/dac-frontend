import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { Cta } from "@/components/home/cta";
import { ProjectsHero, ProjectsList } from "@/components/projects";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/projects/")({
	head: ({ params }) => seoFor("projects", "/projects", params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	return (
		<main className="min-h-screen bg-[#0d0c0a]">
			<ProjectsHero />
			<ProjectsList />
			<Cta />
			<Footer />
		</main>
	);
}
