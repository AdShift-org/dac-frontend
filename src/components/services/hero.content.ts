import { t, type Dictionary } from "intlayer";

const servicesHeroContent = {
	key: "services-hero",
	content: {
		tag: t({
			en: "03",
			ar: "٠٣"
		}),
		titleLine1: t({
			en: "COMPLETE",
			ar: "حلول"
		}),
		titleLine2: t({
			en: "BUILDING",
			ar: "إنشاء"
		}),
		titleLine3: t({
			en: "SOLUTIONS",
			ar: "متكاملة"
		}),
		description: t({
			en: "From construction and fit-out to facilities management and real estate development, we deliver end-to-end solutions tailored to every client, project, and market we serve.",
			ar: "من الإنشاءات والتشطيبات إلى إدارة المرافق والتطوير العقاري، نقدم حلولاً متكاملة مصممة خصيصاً لكل عميل ومشروع وسوق نخدمه."
		}),
		ctaText: t({
			en: "EXPLORE OUR WORK",
			ar: "استكشف أعمالنا"
		})
	}
} satisfies Dictionary;

export default servicesHeroContent;
