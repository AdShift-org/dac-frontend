import { t, type Dictionary } from "intlayer";

const clientsContent = {
	key: "home-clients",
	content: {
		label: t({
			en: "CLUSTERS OF TRUST",
			ar: "مَجمُوعَة عُملَائِنَا"
		}),
		logos: ["EMAAR", "DAR AL ARKAN", "INTER IKEA", "ORC", "SOROUH", "DAR AL ARKAN", "EMAAR"]
	}
} satisfies Dictionary;

export default clientsContent;