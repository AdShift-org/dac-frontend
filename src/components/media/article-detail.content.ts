import { t, type Dictionary } from "intlayer";

const articleDetailContent = {
	key: "article-detail",
	content: {
		contentsLabel: t({
			en: "CONTENTS",
			ar: "المحتويات"
		}),
		categoryLabel: t({
			en: "CATEGORY",
			ar: "الفئة"
		}),
		readingTimeLabel: t({
			en: "READING TIME",
			ar: "وقت القراءة"
		}),
		viewProject: t({
			en: "VIEW PROJECT",
			ar: "عرض المشروع"
		}),
		backToMedia: t({
			en: "Back to Media Center",
			ar: "العودة إلى المركز الإعلامي"
		}),
		articleNotFound: t({
			en: "Article not found",
			ar: "المقال غير موجود"
		}),
		articleNotFoundDesc: t({
			en: "The requested article could not be located in our media archive.",
			ar: "لم نتمكن من العثور على المقال المطلوب في أرشيف الوسائط."
		})
	}
} satisfies Dictionary;

export default articleDetailContent;
