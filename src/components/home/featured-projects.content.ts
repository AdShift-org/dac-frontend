import { t, type Dictionary } from "intlayer";

const featuredProjectsContent = {
	key: "home-featured-projects",
	content: {
		label: t({
			en: "PORTFOLIO",
			ar: "مَحفَظة الأعمال"
		}),
		heading: t({
			en: "Featured Projects",
			ar: "مشاريع مميزة"
		}),
		viewAll: t({
			en: "VIEW ALL PROJECTS",
			ar: "عرض كل المشاريع"
		}),
		projects: [
			{
				name: t({
					en: "THE CREST",
					ar: "ذا كريست"
				}),
				location: t({
					en: "New Cairo, Egypt",
					ar: "القاهرة الجديدة، مصر"
				})
			},
			{
				name: t({
					en: "THE RESIDENCES",
					ar: "ذي ريزيدنسز"
				}),
				location: t({
					en: "New Cairo, Egypt",
					ar: "القاهرة الجديدة، مصر"
				})
			}
		]
	}
} satisfies Dictionary;

export default featuredProjectsContent;