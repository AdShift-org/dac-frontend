import { t, type Dictionary } from "intlayer";

const pillarsContent = {
	key: "about-pillars",
	content: {
		cards: [
			{
				key: "mission",
				title: t({
					ar: "رسالتنا",
					en: "MISSION"
				}),
				description: t({
					ar: "نلتزم بتقديم حلول إنشائية مبتكرة وموثوقة ترتقي بمعايير الجودة والسلامة، وتفي بتطلعات عملائنا وتساهم في تنمية المجتمعات التي نخدمها.",
					en: "We deliver innovative, reliable construction solutions that uphold the highest standards of quality and safety, exceed our clients' expectations, and contribute to the growth of the communities we serve."
				})
			},
			{
				key: "vision",
				title: t({
					ar: "رؤيتنا",
					en: "VISION"
				}),
				description: t({
					ar: "نسعى لنكون الشركة الرائدة في قطاع الإنشاءات على مستوى المنطقة، من خلال تبني أحدث التقنيات، وبناء شراكات مستدامة، وتحقيق التميز في كل مشروع نقوم به.",
					en: "We aspire to be the region's leading construction company by embracing cutting-edge technology, building lasting partnerships, and achieving excellence in every project we undertake."
				})
			}
		]
	}
} satisfies Dictionary;

export default pillarsContent;
