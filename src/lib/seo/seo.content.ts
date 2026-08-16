import { t, type Dictionary } from "intlayer";

const seoContent = {
	key: "seo",
	content: {
		home: {
			title: t({
				ar: "DAC Construction | الرئيسية",
				en: "DAC Construction | Home"
			}),
			description: t({
				ar: "شركة DAC للمقاولات — حلول بناء موثوقة وعالية الجودة.",
				en: "DAC Construction — reliable, high-quality building solutions."
			}),
			schemaType: "Organization",
			schemaName: "DAC Construction"
		}
	}
} satisfies Dictionary;

export default seoContent;
