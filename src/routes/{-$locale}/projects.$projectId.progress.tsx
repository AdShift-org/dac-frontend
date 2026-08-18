/*
	DISABLED (commented out) — progress route is hidden for now.
	Restore by uncommenting this file.
*/
/*
import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { seoFor } from "@/lib/seo";
import { Footer } from "@/components/footer";
import { ProjectProgressView } from "@/components/projects";

export const Route = createFileRoute("/{-$locale}/projects/$projectId/progress")({
	head: ({ params }) =>
		seoFor("projects", `/projects/${params.projectId}/progress`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { projectId } = Route.useParams();

	return (
		<main className="min-h-screen bg-[#f7f6f2]">
			<ProjectProgressView projectId={projectId} />
			<Footer />
		</main>
	);
}
*/
