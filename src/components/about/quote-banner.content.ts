import { t, type Dictionary } from "intlayer";

const quoteBannerContent = {
	key: "about-quote-banner",
	content: {
		quote: t({
			ar: "«كل صرح نشيده يبدأ برؤية طموحة، وينتهي بإرث حضاري خالد.»",
			en: "“Every structure we build begins with a vision and ends with a legacy.”"
		}),
		author: t({
			ar: "شركة DAC للمقاولات",
			en: "DAC Construction"
		})
	}
} satisfies Dictionary;

export default quoteBannerContent;
