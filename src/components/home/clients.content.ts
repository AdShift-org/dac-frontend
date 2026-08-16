import { t, type Dictionary } from "intlayer";

const clientsContent = {
	key: "home-clients",
	content: {
		label: t({
			en: "CLIENTS & PARTNERS",
			ar: "شركاء النجاح والعملاء"
		}),
		egyptTitle: t({
			en: "Clients of Egypt",
			ar: "عملاء مصر"
		}),
		uaeTitle: t({
			en: "Clients of DUBAI",
			ar: "عملاء دبي"
		}),
		egyptLogos: ["EMAAR", "DANUBE PROPERTIES", "INTERMASS", "GULF ASIA", "ASCC"],
		uaeLogos: ["EMAAR", "DANUBE PROPERTIES", "INTERMASS", "GULF ASIA", "ASCC"]
	}
} satisfies Dictionary;

export default clientsContent;