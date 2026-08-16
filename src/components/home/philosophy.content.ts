import { t, type Dictionary } from "intlayer";

const philosophyContent = {
	key: "home-philosophy",
	content: {
		heading: t({
			en: "PHILOSOPHY",
			ar: "الفَلْسَفَة"
		}),
		paragraph: t({
			en: "We believe that architecture is the practical realization of excellence. Our approach merges rigorous engineering with profound aesthetic sensitivity.",
			ar: "نؤمن بأن العمارة هي التجسيد العملي للتميّز. يجمع نهجنا بين الهندسة الدقيقة والحسّ الجمالي العميق."
		}),
		principles: [
			{
				title: t({
					en: "EXCELLENCE",
					ar: "التَّمَيُّز"
				}),
				description: t({
					en: "To engineer resilient, innovative structures that elevate the human experience and stand the test of time.",
					ar: "هندسة منشآت مرنة ومبتكرة ترتقي بالتجربة الإنسانية وتصمد أمام اختبار الزمن."
				})
			},
			{
				title: t({
					en: "VISION",
					ar: "الرُّؤْيَة"
				}),
				description: t({
					en: "To be the unquestioned standard for architectural engineering excellence in the Middle East and beyond.",
					ar: "أن نكون المعيار بلا منازع للتميّز في الهندسة المعمارية في الشرق الأوسط وخارجه."
				})
			},
			{
				title: t({
					en: "INTEGRITY",
					ar: "النَّزَاهَة"
				}),
				description: t({
					en: "Integrity, Precision, Innovation, and Enduring Quality.",
					ar: "النزاهة والدقة والابتكار والجودة الدائمة."
				})
			}
		]
	}
} satisfies Dictionary;

export default philosophyContent;