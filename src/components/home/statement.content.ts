import { t, type Dictionary } from "intlayer";

const statementContent = {
	key: "home-statement",
	content: {
		label: t({
			en: "COMPANY STATEMENT",
			ar: "بَيَان الشَّرِكَة"
		}),
		heading1: t({
			en: "WE TURN",
			ar: "نُحَوِّلُ"
		}),
		heading2: t({
			en: "VISIONS",
			ar: "الرُّؤَى"
		}),
		heading3: t({
			en: "INTO LANDMARKS.",
			ar: "إِلَى مَعَالِمَ"
		}),
		p1: t({
			en: "DAC Construction is a company built on experience, expertise and a commitment to delivering quality projects on time.",
			ar: "شركة DAC للمقاولات شركةٌ مبنية على الخبرة والكفاءة والالتزام بتسليم مشاريع عالية الجودة في الوقت المحدد."
		}),
		p2: t({
			en: "Since our establishment in 2004, we have successfully delivered diverse projects that contribute to shaping communities and enhancing lives.",
			ar: "منذ تأسيسنا في عام 2004، نجحنا في تنفيذ مشاريع متنوّعة تسهم في تشكيل المجتمعات وتحسين حياة الناس."
		}),
		stats: {
			established: t({
				en: "ESTABLISHED",
				ar: "تَأسَّسَت"
			}),
			headquarters: t({
				en: "HEADQUARTERS",
				ar: "المقر الرئيسي"
			}),
			projects: t({
				en: "PROJECTS",
				ar: "المشاريع"
			})
		},
		establishedValue: t({
			en: "2004",
			ar: "2004"
		}),
		headquartersValue: t({
			en: "CAIRO, EGYPT",
			ar: "القاهرة، مصر"
		}),
		projectsValue: t({
			en: "EGYPT - UAE",
			ar: "مصر - الإمارات"
		})
	}
} satisfies Dictionary;

export default statementContent;