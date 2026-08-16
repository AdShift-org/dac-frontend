import { insert, t, type Dictionary } from "intlayer";

const footerContent = {
	key: "footer",
	content: {
		about: t({
			en: "ABOUT",
			ar: "مَنْ نَحْن"
		}),
		services: t({
			en: "SERVICES",
			ar: "الخِدْمَات"
		}),
		projects: t({
			en: "PROJECTS",
			ar: "المَشَارِيع"
		}),
		contact: t({
			en: "CONTACT",
			ar: "تَوَاصَلْ مَعَنَا"
		}),
		rights: t({
			en: "© {{year}} DAC Construction. All rights reserved.",
			ar: "© {{year}} شركة DAC للمقاولات. جميع الحقوق محفوظة."
		})
	}
} satisfies Dictionary;

export default footerContent;
