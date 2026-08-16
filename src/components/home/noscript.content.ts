import { t, type Dictionary } from "intlayer";

const noscriptContent = {
	key: "home-noscript",
	content: {
		title: t({
			en: "Please enable JavaScript",
			ar: "يرجى تفعيل JavaScript"
		}),
		message: t({
			en: "This page uses JavaScript for its animations. Enable JavaScript in your browser settings to view the experience.",
			ar: "تستخدم هذه الصفحة JavaScript لعرض الحركات. قم بتفعيل JavaScript في إعدادات المتصفح لمشاهدة التجربة."
		})
	}
} satisfies Dictionary;

export default noscriptContent;
