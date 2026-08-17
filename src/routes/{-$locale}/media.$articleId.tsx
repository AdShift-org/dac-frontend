import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { ArticleDetail } from "@/components/media";

import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media/$articleId")({
	head: ({ params }) =>
		seoFor("media", `/media/${params.articleId}`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { articleId } = Route.useParams();

	return (
		<main className="min-h-screen bg-[#fbfbfa]">
			<ArticleDetail articleId={articleId} />
			<Footer />
		</main>
	);
}
