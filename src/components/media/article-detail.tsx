import type { FC } from "react";
import { useState } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { Link } from "@/components/localized-link";

// import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { ArrowLeft, Quote } from "lucide-react";

import { getMediaArticleById, type MediaArticle } from "./media-data";

interface ArticleDetailProps {
	articleId: string;
}

export const ArticleDetail: FC<ArticleDetailProps> = ({ articleId }) => {
	const content = useIntlayer("article-detail");
	const { locale } = useLocale();
	const isArabic = locale === "ar";

	const article: MediaArticle | undefined = getMediaArticleById(articleId);

	const [activeSection, setActiveSection] = useState<string>(article?.sections[0]?.id ?? "");

	if (!article) {
		return (
			<section className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f9f8f5] px-6 pt-32 pb-20 text-center sm:px-12">
				<div className="mx-auto max-w-xl">
					<h2 className="font-serif text-3xl font-normal text-neutral-900 sm:text-4xl">
						{content.articleNotFound.value}
					</h2>
					<p className="mt-4 font-sans text-sm text-neutral-600">
						{content.articleNotFoundDesc.value}
					</p>
					<div className="mt-8">
						<Link
							to="/media"
							className="inline-flex items-center gap-2 border border-neutral-900 px-6 py-3 font-sans text-xs font-semibold tracking-widest text-neutral-900 uppercase transition-colors hover:bg-neutral-900 hover:text-white"
						>
							<ArrowLeft className="size-4 rtl:rotate-180" />
							<span>{content.backToMedia.value}</span>
						</Link>
					</div>
				</div>
			</section>
		);
	}

	const categoryLabel = isArabic ? article.categoryLabel.ar : article.categoryLabel.en;
	const categoryTag = isArabic ? article.categoryTag.ar : article.categoryTag.en;
	const date = isArabic ? article.dateAr : article.date;
	const readTime = isArabic ? article.readTime.ar : article.readTime.en;
	const title = isArabic ? article.title.ar : article.title.en;

	const handleScrollTo = (sectionId: string) => {
		setActiveSection(sectionId);
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<article className="min-h-screen bg-[#fbfbfa] text-neutral-900">
			{/* Top Header Section */}
			<section className="mx-auto max-w-7xl px-6 pt-36 pb-12 sm:px-12">
				{/* Top Meta Line: Category / Subcategory & Date */}
				<div className="flex items-center justify-between border-b border-neutral-200 pb-4 font-sans text-xs font-semibold tracking-widest text-neutral-500 uppercase">
					<span>{categoryLabel}</span>
					<span>{date}</span>
				</div>

				{/* Article Title */}
				<h1 className="mt-8 font-sans text-3xl font-extrabold tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
					{title}
				</h1>

				{/* Metadata Pills */}
				<div className="mt-8 flex flex-wrap items-center gap-8 border-b border-neutral-200 pb-8 font-sans text-xs sm:gap-12">
					<div>
						<span className="block font-semibold tracking-wider text-neutral-400 uppercase">
							{content.categoryLabel.value}
						</span>
						<span className="mt-1 block font-bold text-neutral-900">{categoryTag}</span>
					</div>
					<div>
						<span className="block font-semibold tracking-wider text-neutral-400 uppercase">
							{content.readingTimeLabel.value}
						</span>
						<span className="mt-1 block font-bold text-neutral-900">{readTime}</span>
					</div>
				</div>

				{/* Hero Image */}
				<div className="mt-10 overflow-hidden bg-neutral-100 shadow-sm">
					<img
						src={article.coverImage}
						alt={title}
						className="aspect-video w-full object-cover object-center md:aspect-21/9"
					/>
				</div>
			</section>

			{/* Main Article Body: 2 Columns */}
			<section className="mx-auto max-w-7xl px-6 pb-24 sm:px-12">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Column: Sticky Table of Contents */}
					<aside className="lg:col-span-3">
						<div className="sticky top-28 bg-[#f2f1ec]/60 p-6 backdrop-blur-sm">
							<h3 className="font-sans text-xs font-bold tracking-widest text-neutral-500 uppercase">
								{content.contentsLabel.value}
							</h3>
							<nav className="mt-4 flex flex-col gap-3 font-sans text-xs">
								{article.sections.map((sec) => {
									const secTitle = isArabic ? sec.title.ar : sec.title.en;
									const isActive = activeSection === sec.id;
									return (
										<button
											key={sec.id}
											type="button"
											onClick={() => handleScrollTo(sec.id)}
											className={`cursor-pointer text-start font-medium transition-colors ${
												isActive
													? "font-bold text-neutral-950"
													: "text-neutral-500 hover:text-neutral-900"
											}`}
										>
											{secTitle}
										</button>
									);
								})}
							</nav>
						</div>
					</aside>

					{/* Right Column: Article Content */}
					<div className="lg:col-span-9">
						{article.sections.map((sec, index) => {
							const secTitle = isArabic ? sec.title.ar : sec.title.en;
							const secParagraphs = isArabic ? sec.content.ar : sec.content.en;
							// Strip numbering like "01. " for heading display if desired or keep clean
							const cleanTitle = secTitle
								.replace(/^\d+\.\s*/, "")
								.replace(/^[٠-٩]+\.\s*/, "");

							return (
								<div
									key={sec.id}
									id={sec.id}
									className={`scroll-mt-32 ${index > 0 ? "mt-12" : ""}`}
								>
									{/* Section Heading */}
									<h2 className="font-sans text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
										{cleanTitle}
									</h2>

									{/* Paragraphs */}
									<div className="mt-6 flex flex-col gap-5 font-sans text-base leading-relaxed text-neutral-700 sm:text-lg">
										{secParagraphs.map((para, pIdx) => {
											// First paragraph of first section has bold lead style
											const isLead = index === 0 && pIdx === 0;
											return (
												<p
													key={pIdx}
													className={
														isLead
															? "font-semibold text-neutral-900"
															: ""
													}
												>
													{para}
												</p>
											);
										})}
									</div>

									{/* Quote Callout Box (Rendered after section 1 if quote exists) */}
									{index === 0 && article.quote && (
										<div className="my-10 bg-[#111111] p-8 text-center text-white shadow-xl md:p-12">
											<div className="flex justify-center text-neutral-500">
												<Quote className="size-10 text-neutral-400/60" />
											</div>
											<blockquote className="mt-4 font-serif text-xl leading-snug font-normal text-white sm:text-2xl md:text-3xl">
												"
												{isArabic
													? article.quote.text.ar
													: article.quote.text.en}
												"
											</blockquote>
											<cite className="mt-6 block font-sans text-xs font-semibold tracking-widest text-neutral-400 uppercase not-italic">
												{isArabic
													? article.quote.author.ar
													: article.quote.author.en}
											</cite>
										</div>
									)}

									{/* Embedded Figure (Rendered after section 2 if figure exists) */}
									{index === 1 && article.figure && (
										<div className="my-10 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm">
											<img
												src={article.figure.image}
												alt={
													isArabic
														? article.figure.caption.ar
														: article.figure.caption.en
												}
												className="aspect-video w-full object-cover object-center"
											/>
											<div className="flex items-center justify-between border-t border-neutral-200 bg-neutral-50 px-6 py-3 font-sans text-[11px] font-bold tracking-widest text-neutral-600 uppercase">
												<span>
													{isArabic
														? article.figure.figNum.ar
														: article.figure.figNum.en}
												</span>
												<span>
													{isArabic
														? article.figure.caption.ar
														: article.figure.caption.en}
												</span>
											</div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Related Case Study Section (Dark Background) */}
			{article.relatedCaseStudy && (
				<section className="bg-neutral-950 py-24 text-white">
					<div className="mx-auto max-w-7xl px-6 sm:px-12">
						<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
							{/* Left info column */}
							<div className="text-start lg:col-span-6">
								<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
									{isArabic
										? article.relatedCaseStudy.tag.ar
										: article.relatedCaseStudy.tag.en}
								</span>

								<h2 className="mt-4 font-sans text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
									{isArabic
										? article.relatedCaseStudy.title.ar
										: article.relatedCaseStudy.title.en}
								</h2>

								<p className="mt-6 font-sans text-sm leading-relaxed text-neutral-400 sm:text-base">
									{isArabic
										? article.relatedCaseStudy.description.ar
										: article.relatedCaseStudy.description.en}
								</p>

								<div className="mt-8">
									{/* DISABLED: project detail page is hidden. */}
									{/*
									<Link
										to={
											`/projects/${article.relatedCaseStudy.projectId}` as never
										}
										className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 font-sans text-xs font-bold tracking-widest text-white uppercase transition-colors hover:border-white hover:bg-white/10"
									>
										<span>{content.viewProject.value}</span>
										<ArrowRight className="size-4 rtl:rotate-180" />
									</Link>
									*/}
								</div>
							</div>

							{/* Right project card preview */}
							<div className="lg:col-span-6">
								<div className="overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
									<img
										src={article.relatedCaseStudy.previewImage}
										alt={
											isArabic
												? article.relatedCaseStudy.previewTitle.ar
												: article.relatedCaseStudy.previewTitle.en
										}
										className="aspect-16/10 w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
									/>
									<div className="p-6 sm:p-8">
										<h4 className="font-serif text-xl font-normal text-white sm:text-2xl">
											{isArabic
												? article.relatedCaseStudy.previewTitle.ar
												: article.relatedCaseStudy.previewTitle.en}
										</h4>
										<div className="mt-3 flex items-center justify-between font-sans text-xs text-neutral-400">
											<span>
												{isArabic
													? article.relatedCaseStudy.previewAuthor.ar
													: article.relatedCaseStudy.previewAuthor.en}
											</span>
											<span>{article.relatedCaseStudy.previewDate}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</article>
	);
};
