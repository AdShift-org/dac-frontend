import { t, type Dictionary } from "intlayer";

const notFoundContent = {
	key: "not-found",
	content: {
		title: t({
			en: "Page Not Found",
			ar: "الصفحة غير موجودة"
		}),
		message: t({
			en: "The page you're looking for doesn't exist or has been moved.",
			ar: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها"
		}),
		back: t({
			en: "Back to home",
			ar: "العودة إلى الرئيسية"
		})
	}
} satisfies Dictionary;

export default notFoundContent;