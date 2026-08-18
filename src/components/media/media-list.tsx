import { useState, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";
import { ArrowRight, Calendar } from "lucide-react";

import { Link } from "@/components/localized-link";
import { MEDIA_ARTICLES, type MediaArticle } from "./media-data";

import dacLogo from "#/assets/dac-logo.png";

interface MediaListProps {
	articles?: MediaArticle[];
}

export const MediaList: FC<MediaListProps> = ({ articles }) => {
	const content = useIntlayer("media-list");
	const { locale } = useLocale();
	const isArabic = locale === "ar";

	const [activeCategory, setActiveCategory] = useState<string>("ALL");

	const list = (articles && articles.length ? articles : MEDIA_ARTICLES) as MediaArticle[];

	const categories: { key: string; label: string }[] = [
		{ key: "ALL", label: content.categories.all.value },
		...Array.from(new Set(list.map((a) => a.category).filter(Boolean))).map((category) => ({
			key: category,
			label: category
		}))
	];

	const featuredArticle = list[0];

	const filteredArticles = list.filter((article) => {
		if (activeCategory === "ALL") return true;
		return article.category === activeCategory;
	});

	return (
		<section id="latest-news-section" className="bg-[#f9f8f5] py-20 text-neutral-900 sm:py-28">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				{/* Section Header with Tabs */}
				<div className="flex flex-col justify-between gap-6 border-b border-neutral-200/80 pb-8 sm:flex-row sm:items-end">
					<h2 className="font-sans text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
						{content.sectionHeading.value}
					</h2>

					{/* Categories Tab Navigation */}
					<div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-wider sm:gap-6">
						{categories.map((cat) => {
							const isActive = activeCategory === cat.key;
							return (
								<button
									key={cat.key}
									type="button"
									onClick={() => setActiveCategory(cat.key)}
									className={`cursor-pointer pb-1 uppercase transition-all duration-200 ${
										isActive
											? "border-b-2 border-neutral-950 text-neutral-950 font-bold"
											: "text-neutral-400 hover:text-neutral-800"
									}`}
								>
									{cat.label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Featured Hero Banner Card (Visible on ALL or if matching category) */}
				{(activeCategory === "ALL" || featuredArticle.category === activeCategory) && (
					<div className="mt-12">
						<Link
							to={`/media/${featuredArticle.slug}` as never}
							className="group relative block overflow-hidden rounded-3xl bg-neutral-950 transition-transform duration-500 hover:-translate-y-1"
						>
							{/* Background Image */}
							<div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
								<img
									src={featuredArticle.coverImage || dacLogo}
									alt={isArabic ? featuredArticle.title.ar : featuredArticle.title.en}
									className={
										featuredArticle.coverImage
											? "size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
											: "mx-auto size-1/2 object-contain opacity-40"
									}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
							</div>

							{/* Overlay Content */}
							<div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12">
								<span className="font-sans text-xs font-semibold tracking-widest text-neutral-300 uppercase">
									{isArabic
										? featuredArticle.featuredTag?.ar
										: featuredArticle.featuredTag?.en}
								</span>

								<h3 className="mt-2 max-w-3xl font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl md:text-4xl">
									{isArabic ? featuredArticle.title.ar : featuredArticle.title.en}
								</h3>

								<p className="mt-3 max-w-2xl font-sans text-xs text-neutral-300 sm:text-sm">
									{isArabic
										? featuredArticle.excerpt.ar
										: featuredArticle.excerpt.en}
								</p>

								{/* Bottom Meta Row */}
								<div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-4 font-sans text-xs text-neutral-300">
									<div className="flex items-center gap-2">
										<Calendar className="size-3.5 text-neutral-400" />
										<span>
											{isArabic
												? featuredArticle.completedYear?.replace("Completed", "اكتمل")
												: featuredArticle.completedYear}
										</span>
									</div>

									<div className="inline-flex items-center gap-1.5 font-semibold text-white group-hover:underline">
										<span>{content.featured.readMore.value}</span>
										<ArrowRight className="size-3.5 rtl:rotate-180" />
									</div>
								</div>
							</div>
						</Link>
					</div>
				)}

				{/* 3-Column Articles Grid */}
				<div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-10">
					{filteredArticles.map((article) => {
						const title = isArabic ? article.title.ar : article.title.en;
						const excerpt = isArabic ? article.excerpt.ar : article.excerpt.en;
						const categoryTag = isArabic ? article.categoryTag.ar : article.categoryTag.en;
						const date = isArabic ? article.dateAr : article.date;

						return (
							<Link
								key={article.id}
								to={`/media/${article.slug}` as never}
								className="group flex flex-col justify-between"
							>
								<div>
									{/* Article Image Card */}
									<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200">
										<img
											src={article.coverImage || dacLogo}
											alt={title}
											className={
												article.coverImage
													? "size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
													: "mx-auto size-1/2 object-contain opacity-40"
											}
										/>
									</div>

									{/* Metadata: Category & Date */}
									<div className="mt-5 flex items-center justify-between font-sans text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">
										<span className="text-neutral-700">{categoryTag}</span>
										<span className="text-neutral-400">{date}</span>
									</div>

									{/* Article Title */}
									<h4 className="mt-3 font-serif text-xl font-normal leading-snug text-neutral-900 transition-colors group-hover:text-neutral-600 sm:text-2xl">
										{title}
									</h4>

									{/* Excerpt */}
									<p className="mt-2.5 line-clamp-3 font-sans text-xs leading-relaxed text-neutral-500 sm:text-sm">
										{excerpt}
									</p>
								</div>

								{/* Read More Action Link */}
								<div className="mt-5 pt-2">
									<span className="font-sans text-[11px] font-bold tracking-widest text-neutral-900 uppercase transition-all duration-200 group-hover:text-neutral-600 group-hover:underline">
										{content.readMoreUpper.value}
									</span>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};
