import { t, type Dictionary } from "intlayer";

const mediaListContent = {
	key: "media-list",
	content: {
		sectionHeading: t({
			en: "Latest News & Insights",
			ar: "أحدث الأخبار والرؤى"
		}),
		categories: {
			all: t({
				en: "ALL",
				ar: "الكل"
			}),
			pressReleases: t({
				en: "PRESS RELEASES",
				ar: "بيانات صحفية"
			}),
			insights: t({
				en: "INSIGHTS",
				ar: "رؤى"
			}),
			awards: t({
				en: "AWARDS",
				ar: "جوائز"
			})
		},
		featured: {
			tag: t({
				en: "Project Tours",
				ar: "جولات المشاريع"
			}),
			title: t({
				en: "SUMMIT Breaks Ground on New Luxury Development in New Cairo",
				ar: "ساميت تبدأ تنفيذ مشروع فاخر جديد في القاهرة الجديدة"
			}),
			description: t({
				en: "SUMMIT announces the launch of its newest project, setting new standards for luxury living in Egypt's capital.",
				ar: "تعلن ساميت عن إطلاق أحدث مشاريعها، واضعة معايير جديدة للحياة الفاخرة في العاصمة المصرية."
			}),
			completed: t({
				en: "Completed 2024",
				ar: "اكتمل ٢٠٢٤"
			}),
			readMore: t({
				en: "Read more",
				ar: "اقرأ المزيد"
			})
		},
		readMoreUpper: t({
			en: "READ MORE",
			ar: "اقرأ المزيد"
		})
	}
} satisfies Dictionary;

export default mediaListContent;
