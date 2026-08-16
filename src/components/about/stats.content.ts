import { t, type Dictionary } from "intlayer";

const statsContent = {
	key: "about-stats",
	content: {
		heading: t({
			ar: "أرقامنا",
			en: "OUR NUMBERS"
		}),
		subtitle: t({
			ar: "إنجازات تترجم التزامنا المستمر بالريادة والإتقان في قطاع الإنشاءات",
			en: "Milestones reflecting our enduring dedication to leadership and craft across construction"
		}),
		items: [
			{
				value: "20+",
				label: t({
					ar: "عاماً من التميز الهندسي",
					en: "Years of Excellence"
				})
			},
			{
				value: "250+",
				label: t({
					ar: "مشروعاً منجزاً بنجاح",
					en: "Completed Projects"
				})
			},
			{
				value: "1500+",
				label: t({
					ar: "مهندس وخبير وحرفي",
					en: "Expert Craftsmen & Engineers"
				})
			},
			{
				value: "2",
				label: t({
					ar: "مقرات إقليمية (الإمارات ومصر)",
					en: "Regional Hubs (UAE & Egypt)"
				})
			}
		]
	}
} satisfies Dictionary;

export default statsContent;
