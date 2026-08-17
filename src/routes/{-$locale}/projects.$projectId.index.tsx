import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { ProjectDetailView } from "@/components/projects";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/projects/$projectId/")({
	head: ({ params }) =>
		seoFor("projects", `/projects/${params.projectId}`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { projectId } = Route.useParams();

	return (
		<main className="min-h-screen bg-[#f7f6f2]">
			<ProjectDetailView projectId={projectId} />
			<Footer />
		</main>
	);
}
