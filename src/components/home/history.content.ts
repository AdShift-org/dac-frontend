import { t, type Dictionary } from "intlayer";

const historyContent = {
	key: "home-history",
	content: {
		heading: t({
			en: "OUR HISTORY",
			ar: "تاريخنا"
		}),
		subtitle: t({
			en: "EVOLUTION OF EXCELLENCE",
			ar: "تطور التميز"
		}),
		milestones: [
			{
				year: "2004",
				title: t({
					en: "FOUNDATION",
					ar: "التأسيس"
				}),
				description: t({
					en: "Established in Cairo with a vision to bring international engineering standards to the region.",
					ar: "تأسست في القاهرة برؤية لإدخال المعايير الهندسية العالمية إلى المنطقة"
				})
			},
			{
				year: "2014",
				title: t({
					en: "EXPANSION",
					ar: "التوسع"
				}),
				description: t({
					en: "Expanded operations to include comprehensive fit-out services and project management.",
					ar: "وسعنا عملياتنا لتشمل خدمات التشطيبات الشاملة وإدارة المشاريع"
				})
			},
			{
				year: "2020",
				title: t({
					en: "INNOVATION",
					ar: "الابتكار"
				}),
				description: t({
					en: "Integrated sustainable and advanced BIM technologies to revolutionize our engineering processes.",
					ar: "دمجنا تقنيات الاستدامة ونمذجة معلومات البناء المتقدمة لإحداث ثورة في عملياتنا الهندسية"
				})
			},
			{
				year: "2023",
				title: t({
					en: "MILESTONE",
					ar: "إنجاز بارز"
				}),
				description: t({
					en: "Delivered our 1000th project, setting a benchmark in quality and excellence in the industry.",
					ar: "سلمنا مشروعنا رقم 1000، ما جعلنا معيارا للجودة والتميز في القطاع"
				})
			}
		]
	}
} satisfies Dictionary;

export default historyContent;