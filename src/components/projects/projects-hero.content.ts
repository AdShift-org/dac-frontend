import { t, type Dictionary } from "intlayer";

const projectsHeroContent = {
	key: "projects-hero",
	content: {
		index: "01",
		titleLine1: t({
			en: "OUR PORTFOLIO",
			ar: "بورتفوليو"
		}),
		titleLine2: t({
			en: "OF BUILT",
			ar: "أعمالنا"
		}),
		titleLine3: t({
			en: "EXCELLENCE",
			ar: "المتميزة"
		}),
		description: t({
			en: "A curated selection of projects that showcase our craft — from landmark developments and residential communities to commercial and infrastructure works delivered across the Middle East and beyond.",
			ar: "مجموعة مختارة من المشاريع التي تجسد حرفتنا — من التطويرات الرائدة والمجتمعات السكنية إلى الأعمال التجارية والبنية التحتية في منطقة الشرق الأوسط وخارجها."
		}),
		caseStudiesLink: t({
			en: "SEE OUR CASE STUDIES",
			ar: "استكشف دراسات الحالة"
		})
	}
} satisfies Dictionary;

export default projectsHeroContent;
