import { t, type Dictionary } from "intlayer";

const heroContent = {
	key: "home-hero",
	content: {
		headline1: t({
			en: "BUILDING THE FUTURE",
			ar: "نَبْنِي الْمُسْتَقْبَل"
		}),
		headline2: t({
			en: "WITH",
			ar: "بِدِقَّةٍ"
		}),
		headline3: t({
			en: "PRECISION",
			ar: "مُتَنَاهِيَة"
		}),
		subtitle: t({
			en: "A legacy of craftsmanship and innovation, shaping the skylines of Egypt and the Middle East.",
			ar: "إرثٌ من الإتقان والابتكار، يُشكِّل آفاق مصر والشرق الأوسط."
		}),
		cta: t({
			en: "EXPLORE OUR WORK",
			ar: "اِسْتَكْشِفْ أَعْمَالَنَا"
		})
	}
} satisfies Dictionary;

export default heroContent;