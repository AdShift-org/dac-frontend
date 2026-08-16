import { t, type Dictionary } from "intlayer";

const philosophyContent = {
	key: "home-philosophy",
	content: {
		heading: t({
			en: "PHILOSOPHY",
			ar: "فَلْسَفَتُنَا"
		}),
		paragraph: t({
			en: "We believe that architecture is the practical realization of excellence. Our approach merges rigorous engineering with profound aesthetic sensitivity.",
			ar: "نؤمن بأن العمارة هي التجسيد العملي للتميّز. يجمع نهجنا بين الهندسة الدقيقة والحسّ الجمالي العميق."
		}),
		principles: [
			{
				number: "01",
				title: t({
					en: "VISION",
					ar: "الرُّؤْيَة"
				}),
				description: t({
					en: "To engineer resilient, innovative structures that elevate the human experience and stand the test of time.",
					ar: "هندسة منشآت مرنة ومبتكرة ترتقي بالتجربة الإنسانية وتصمد أمام اختبار الزمن."
				})
			},
			{
				number: "02",
				title: t({
					en: "MISSION",
					ar: "الرِّسَالَة"
				}),
				description: t({
					en: "To be the unquestioned standard for architectural engineering excellence in the Middle East and beyond.",
					ar: "أن نكون المعيار الأبرز للتميّز في الهندسة المعمارية في الشرق الأوسط وما وراءه."
				})
			},
			{
				number: "03",
				title: t({
					en: "VALUES",
					ar: "الْقِيَم"
				}),
				description: t({
					en: "Integrity, Precision, Innovation, and Enduring Quality.",
					ar: "النزاهة، الدقة، الابتكار، والجودة المستدامة."
				})
			}
		]
	}
} satisfies Dictionary;

export default philosophyContent;