import { t, type Dictionary } from "intlayer";

const heroContent = {
	key: "about-hero",
	content: {
		titleLine1: t({
			ar: "من نحن",
			en: "OUR LEGACY"
		}),
		titleLine2: t({
			ar: "وما الذي",
			en: "OF TRUST"
		}),
		titleLine3: t({
			ar: "يميزنا",
			en: "AND EXCELLENCE"
		}),
		description: t({
			ar: "بدأت رحلتنا برؤية واضحة، والتزمنا منذ اليوم الأول بتقديم أعمال إنشائية وتطوير عقاري تُبنى على النزاهة والجودة والابتكار في كل مشروع نلمسه.",
			en: "Our journey began with a clear vision. From day one we have committed to delivering construction and development built on integrity, quality, and innovation in every project we touch."
		}),
		scrollDown: t({
			ar: "اكتشف المزيد",
			en: "DISCOVER MORE"
		})
	}
} satisfies Dictionary;

export default heroContent;
