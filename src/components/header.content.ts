import { t, type Dictionary } from "intlayer";

const headerContent = {
	key: "header",
	content: {
		home: t({ en: "HOME", ar: "الرئيسية" }),
		about: t({ en: "ABOUT", ar: "من نحن" }),
		projects: t({ en: "PROJECTS", ar: "المشاريع" }),
		services: t({ en: "SERVICES", ar: "الخدمات" }),
		media: t({ en: "MEDIA", ar: "الإعلام" }),
		contact: t({ en: "CONTACT", ar: "تواصل معنا" })
	}
} satisfies Dictionary;

export default headerContent;