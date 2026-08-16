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
				ar: "شركة DAC للمقاولات — حلول بناء موثوقة وعالية الجودة",
				en: "DAC Construction — reliable, high-quality building solutions."
			}),
			schemaType: "Organization",
			schemaName: "DAC Construction"
		},
		about: {
			title: t({
				ar: "DAC Construction | من نحن",
				en: "DAC Construction | About"
			}),
			description: t({
				ar: "تعرف على DAC للمقاولات — تاريخنا ورؤيتنا وفريقنا",
				en: "Learn about DAC Construction — our history, vision and team."
			})
		},
		projects: {
			title: t({
				ar: "DAC Construction | مشاريعنا",
				en: "DAC Construction | Projects"
			}),
			description: t({
				ar: "استكشف مشاريع DAC للمقاولات وأبرز أعمالنا المنجزة",
				en: "Explore DAC Construction projects and our featured work."
			})
		},
		services: {
			title: t({
				ar: "DAC Construction | خدماتنا",
				en: "DAC Construction | Services"
			}),
			description: t({
				ar: "خدمات المقاولات والبناء التي نقدمها في DAC",
				en: "The construction and building services we offer at DAC."
			})
		},
		media: {
			title: t({
				ar: "DAC Construction | الوسائط",
				en: "DAC Construction | Media"
			}),
			description: t({
				ar: "أخبار وفعاليات وتغطيات إعلامية عن DAC للمقاولات",
				en: "News, events and media coverage about DAC Construction."
			})
		},
		contact: {
			title: t({
				ar: "DAC Construction | تواصل معنا",
				en: "DAC Construction | Contact"
			}),
			description: t({
				ar: "تواصل مع فريق DAC للمقاولات",
				en: "Get in touch with the DAC Construction team."
			})
		}
	}
} satisfies Dictionary;

export default seoContent;
