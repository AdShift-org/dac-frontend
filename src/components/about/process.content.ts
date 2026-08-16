import { t, type Dictionary } from "intlayer";

const processContent = {
	key: "about-process",
	content: {
		label: t({
			ar: "منهجية العمل",
			en: "OUR PROCESS"
		}),
		heading: t({
			ar: "من التخطيط إلى التسليم.",
			en: "FROM PLANNING TO DELIVERY."
		}),
		steps: [
			{
				step: "01",
				title: t({
					ar: "الاستشارة والدراسة",
					en: "CONSULTATION"
				}),
				description: t({
					ar: "تحليل شامل لمتطلبات المشروع، ودراسات الجدوى الهندسية، وتحديد الأهداف والجداول الزمنية بدقة.",
					en: "Comprehensive requirements analysis, site appraisal, and strategic feasibility planning."
				})
			},
			{
				step: "02",
				title: t({
					ar: "التصميم والتخطيط",
					en: "DESIGN & PLANNING"
				}),
				description: t({
					ar: "تطوير النماذج الهندسية المتكاملة، وتخطيط الموارد والمشتريات، وتنسيق التراخيص الرسمية.",
					en: "Detailed architectural modeling, BIM coordination, resource scheduling, and regulatory approvals."
				})
			},
			{
				step: "03",
				title: t({
					ar: "البناء والتنفيذ",
					en: "CONSTRUCTION"
				}),
				description: t({
					ar: "إدارة موقعية صارمة وتنفيذ هندسي دقيق مع مراقبة مستمرة لضمان الجودة والسلامة والجدول الزمني.",
					en: "Precision on-site execution with continuous quality assurance, HSE vigilance, and milestone tracking."
				})
			},
			{
				step: "04",
				title: t({
					ar: "التسليم والدعم",
					en: "HANDOVER"
				}),
				description: t({
					ar: "فحص نهائي متكامل، وتسليم المشروع وفق أعلى المواصفات، مع توفير الضمانات وخدمات الدعم المستمر.",
					en: "Final commissioning, seamless project handover, certifications, and long-term client support."
				})
			}
		]
	}
} satisfies Dictionary;

export default processContent;
