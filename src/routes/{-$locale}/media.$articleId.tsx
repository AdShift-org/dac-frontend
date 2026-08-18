import { createFileRoute } from "@tanstack/react-router";

import { defaultLocale } from "intlayer";

import { Footer } from "@/components/footer";
import { ArticleDetail, getMediaArticleById, fromApiItems } from "@/components/media";

import { client } from "@/lib/oapi-client";
import { seoFor } from "@/lib/seo";

export const Route = createFileRoute("/{-$locale}/media/$articleId")({
	loader: async ({ params }) => {
		const id = Number(params.articleId);
		const res = await client.GET("/api/media-items/{mediaItem}", {
			params: { path: { mediaItem: id } }
		});
		const apiArticle = Number.isNaN(id) || !res.data?.data ? undefined : fromApiItems([res.data.data])[0];
		return { article: apiArticle ?? getMediaArticleById(params.articleId) };
	},
	head: ({ params }) =>
		seoFor("media", `/media/${params.articleId}`, params.locale ?? defaultLocale),
	component: RouteComponent
});

function RouteComponent() {
	const { article } = Route.useLoaderData();

	return (
		<main className="min-h-screen bg-[#fbfbfa]">
			<ArticleDetail article={article} />
			<Footer />
		</main>
	);
}
