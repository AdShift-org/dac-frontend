import { t, type Dictionary } from "intlayer";

const ctaContent = {
	key: "home-cta",
	content: {
		heading1: t({
			en: "LET'S BUILD",
			ar: "لنبن"
		}),
		heading2: t({
			en: "THE FUTURE",
			ar: "المستقبل"
		}),
		heading3: t({
			en: "TOGETHER.",
			ar: "معا"
		}),
		consultation: t({
			en: "BOOK A CONSULTATION",
			ar: "احجز استشارة"
		}),
		contact: t({
			en: "CONTACT US",
			ar: "تواصل معنا"
		})
	}
} satisfies Dictionary;

export default ctaContent;