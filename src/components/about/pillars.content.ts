import { t, type Dictionary } from "intlayer";

const pillarsContent = {
	key: "about-pillars",
	content: {
		cards: [
			{
				key: "innovation",
				title: t({
					ar: "الابتكار والحلول الذكية",
					en: "INNOVATION"
				}),
				description: t({
					ar: "نوظف أحدث الحلول الرقمية، ونمذجة معلومات البناء (BIM)، والأنظمة الإنشائية مسبقة الصنع لتسريع وتيرة الإنجاز وخفض التكاليف ورفع جودة البناء إلى آفاق غير مسبوقة.",
					en: "We harness digital twins, Building Information Modeling (BIM), and smart prefabrication technologies to accelerate project delivery, optimize lifecycle costs, and elevate quality."
				})
			},
			{
				key: "safety",
				title: t({
					ar: "السلامة والصحة المهنية",
					en: "SAFETY"
				}),
				description: t({
					ar: "نلتزم بأعلى معايير السلامة المهنية العالمية ونطبق سياسات صارمة لحماية كوادرنا وبيئة العمل، محققين ملايين الساعات التشغيلية الآمنة دون حوادث.",
					en: "We enforce uncompromising HSE protocols and stringent on-site standards protecting our workforce and the environment, achieving millions of safe operational hours across all sites."
				})
			}
		]
	}
} satisfies Dictionary;

export default pillarsContent;
