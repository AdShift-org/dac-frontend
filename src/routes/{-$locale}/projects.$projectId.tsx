import { createFileRoute } from "@tanstack/react-router";
import { defaultLocale } from "intlayer";

import { ArrowLeft } from "lucide-react";

import { seoFor } from "@/lib/seo";

import { Footer } from "@/components/footer";
import { Link } from "@/components/localized-link";

export const Route = createFileRoute("/{-$locale}/projects/$projectId")({
	head: ({ params }) =>
		seoFor("projects", `/projects/${params.projectId}`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { projectId } = Route.useParams();

	return (
		<main className="min-h-screen bg-[#0d0c0a] text-white">
			<section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center sm:px-12">
				<div className="mx-auto max-w-2xl">
					<span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
						Project Details
					</span>
					<h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-white capitalize sm:text-5xl lg:text-6xl">
						{projectId.replace(/-/g, " ")}
					</h1>
					<p className="mt-4 font-sans text-sm text-neutral-400">
						Project details page is coming soon.
					</p>
					<div className="mt-8">
						<Link
							to="/projects"
							className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 font-sans text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:border-white hover:bg-white/5"
						>
							<ArrowLeft className="size-4 rtl:rotate-180" />
							<span>Back to Projects</span>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
