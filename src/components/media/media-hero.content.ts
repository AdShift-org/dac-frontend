import { t, type Dictionary } from "intlayer";

const mediaHeroContent = {
	key: "media-hero",
	content: {
		watchFilm: t({
			en: "WATCH FILM",
			ar: "مشاهدة الفيلم"
		}),
		heading: t({
			en: "Media Center",
			ar: "المركز الإعلامي"
		}),
		narrative: t({
			en: "We craft architectural narratives that blend human experience with the environment, creating structures that resonate through generations. We create architectural landmarks where exceptional design, premium locations, and refined lifestyles come together.",
			ar: "نصيغ حكايات معمارية تمزج بين التجربة الإنسانية والبيئة، لنبني صروحاً تدوم لأجيال. نبدع معالم معمارية تجمع بين التصميم الاستثنائي، والمواقع المتميزة، وأسلوب الحياة الراقي."
		}),
		scroll: t({
			en: "SCROLL",
			ar: "تمرير"
		})
	}
} satisfies Dictionary;

export default mediaHeroContent;
