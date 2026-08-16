import { defaultLocale, getIntlayer, getLocalizedUrl, localeMap } from "intlayer";

const siteUrl = import.meta.env.VITE_SITE_URL ?? "http://localhost:3000";

export function seoFor(key: string, path: string, locale: string) {
	const meta = getIntlayer("seo", locale)[key];
	const url = getLocalizedUrl(`${siteUrl}${path}`, locale);
	const ogImage = `${siteUrl}/og-image?title=${encodeURIComponent(meta.title)}&description=${encodeURIComponent(meta.description)}`;

	const schema = {
		"@context": "https://schema.org",
		"@type": meta.schemaType ?? "WebPage",
		name: meta.schemaName ?? meta.title,
		description: meta.description,
		url,
		inLanguage: locale,
		image: ogImage
	};

	return {
		meta: [
			{ title: meta.title },
			{ name: "description", content: meta.description },
			{ property: "og:title", content: meta.title },
			{ property: "og:description", content: meta.description },
			{ property: "og:url", content: url },
			{ property: "og:type", content: "website" },
			{ property: "og:image", content: ogImage },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: meta.title },
			{ name: "twitter:url", content: url },
			{ name: "twitter:description", content: meta.description },
			{ name: "twitter:image", content: ogImage }
		],
		links: [
			{ rel: "canonical", href: url },
			...localeMap(({ locale: l }) => ({
				rel: "alternate",
				hrefLang: l,
				href: getLocalizedUrl(`${siteUrl}${path}`, l)
			})),
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: getLocalizedUrl(`${siteUrl}${path}`, defaultLocale)
			}
		],
		scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }]
	};
}
