import { t, type Dictionary } from "intlayer";

const leadershipContent = {
	key: "home-leadership",
	content: {
		label: t({
			en: "LEADERSHIP",
			ar: "القيادة"
		}),
		heading: t({
			en: "THE PEOPLE BEHIND OUR SUCCESS",
			ar: "الأشخاص وراء نجاحنا"
		}),
		subtitle: t({
			en: "EST. 2004 - CEO 2025",
			ar: "تأسست 2004 - الإدارة التنفيذية"
		}),
		members: [
			{
				name: t({
					en: "CEO MESSAGE",
					ar: "رسالة الرئيس التنفيذي"
				}),
				role: t({
					en: "Leading strategic vision, operational integrity and core values.",
					ar: "قيادة الرؤية الاستراتيجية والنزاهة التشغيلية والقيم الأساسية"
				})
			},
			{
				name: t({
					en: "THE DUBAI PARTNER",
					ar: "شريك دبي"
				}),
				role: t({
					en: "Building cross-regional alliances for sustainable growth.",
					ar: "بناء تحالفات إقليمية رائدة للنمو المستدام"
				})
			},
			{
				name: t({
					en: "GENERAL MANAGER",
					ar: "المدير العام - مصر"
				}),
				role: t({
					en: "Leading operational excellence and project delivery.",
					ar: "قيادة التميز التشغيلي وتنفيذ المشاريع الكبرى"
				})
			},
			{
				name: t({
					en: "GENERAL MANAGER",
					ar: "المدير العام - الإمارات"
				}),
				role: t({
					en: "Driving technological innovation and regional execution.",
					ar: "قيادة الابتكار التقني والتنفيذ الإقليمي"
				})
			}
		]
	}
} satisfies Dictionary;

export default leadershipContent;