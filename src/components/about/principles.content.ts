import { t, type Dictionary } from "intlayer";

const principlesContent = {
	key: "about-principles",
	content: {
		label: t({
			ar: "هويتنا وجوهرنا",
			en: "OUR VALUES"
		}),
		heading: t({
			ar: "المبادئ التوجيهية",
			en: "GUIDING PRINCIPLES"
		}),
		items: [
			{
				number: "01",
				title: t({
					ar: "التميز الهندسي",
					en: "EXCELLENCE"
				}),
				description: t({
					ar: "نسعى جاهدين لتحقيق الكمال الهندسي في كل مرحلة، متجاوزين تطلعات العملاء والمستثمرين.",
					en: "Pursuing engineering perfection at every phase, surpassing expectations of clients and stakeholders."
				})
			},
			{
				number: "02",
				title: t({
					ar: "النزاهة والشفافية",
					en: "INTEGRITY"
				}),
				description: t({
					ar: "نبني علاقاتنا وشراكاتنا على الصدق التام، والالتزام الأخلاقي، والوضوح الكامل في كل تعامل.",
					en: "Upholding complete transparency, ethical governance, and accountability across every engagement."
				})
			},
			{
				number: "03",
				title: t({
					ar: "الشغف والإتقان",
					en: "PASSION"
				}),
				description: t({
					ar: "شغف متقد بالبناء يدفعنا لابتكار حلول استثنائية تحوّل التحديات المعقدة إلى إنجازات واقعية.",
					en: "An unrelenting drive for craftsmanship that turns complex architectural challenges into reality."
				})
			},
			{
				number: "04",
				title: t({
					ar: "الاستدامة والمسؤولية",
					en: "SUSTAINABILITY"
				}),
				description: t({
					ar: "تبني ممارسات بناء صديقة للبيئة وأنظمة موفرة للطاقة لضمان مستقبل مستدام للأجيال القادمة.",
					en: "Embedding eco-conscious methods and energy-efficient systems for a resilient future."
				})
			}
		]
	}
} satisfies Dictionary;

export default principlesContent;
