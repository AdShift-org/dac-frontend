import { t, type Dictionary } from "intlayer";

const contactHeroContent = {
	key: "contact-hero",
	content: {
		tag: t({
			en: "06 // CONTACT",
			ar: "٠٦ // تواصل معنا"
		}),
		titleLine1: t({
			en: "LET'S BUILD SOMETHING",
			ar: "لنقم ببناء شيء"
		}),
		titleLine2: t({
			en: "SIGNIFICANT.",
			ar: "ذو قيمة وأثر."
		}),
		description: t({
			en: "Have a project in mind? Let's discuss how DAC can help turn your vision into reality. We are ready to architect the future.",
			ar: "هل لديك مشروع في ذهنك؟ دعنا نناقش كيف يمكن لـ DAC المساعدة في تحويل رؤيتك إلى واقع. نحن جاهزون لصياغة المستقبل معاً."
		}),
		scrollText: t({
			en: "SCROLL",
			ar: "تمرير"
		})
	}
} satisfies Dictionary;

export default contactHeroContent;
