import { t, type Dictionary } from "intlayer";

const heroContent = {
	key: "home-hero",
	content: {
		index: t({
			en: "01",
			ar: "٠١"
		}),
		headline1: t({
			en: "BUILDING THE",
			ar: "نبني"
		}),
		headline2: t({
			en: "FUTURE WITH",
			ar: "المستقبل بكل"
		}),
		headline3: t({
			en: "PRECISION",
			ar: "إتقان ودقة"
		}),
		subtitle: t({
			en: "A leading construction and real estate development company delivering integrated solutions across Egypt and the UAE.",
			ar: "شركة رائدة في قطاع الإنشاءات والتطوير العقاري تقدم حلولا متكاملة عبر مصر والإمارات"
		}),
		cta: t({
			en: "EXPLORE OUR WORK",
			ar: "استكشف أعمالنا"
		}),
		scroll: t({
			en: "SCROLL",
			ar: "التمرير"
		})
	}
} satisfies Dictionary;

export default heroContent;