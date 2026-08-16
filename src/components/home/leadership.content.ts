import { t, type Dictionary } from "intlayer";

const leadershipContent = {
	key: "home-leadership",
	content: {
		label: t({
			en: "LEADERSHIP",
			ar: "القِيَادَة"
		}),
		heading: t({
			en: "THE PEOPLE BEHIND OUR SUCCESS",
			ar: "الأَشْخَاص وَرَاءَ نَجَاحِنَا"
		}),
		subtitle: t({
			en: "EST. 2004 - CEO 2025",
			ar: "تأسَّسَت 2004 - الرئيس التنفيذي 2025"
		}),
		members: [
			{
				name: t({
					en: "CEO MESSAGE",
					ar: "رِسَالَة الرَّئِيس التَّنْفِيذِيّ"
				}),
				role: t({
					en: "A message from our CEO on our core values.",
					ar: "رسالة من رئيسنا التنفيذي حول قيمنا الأساسية."
				})
			},
			{
				name: t({
					en: "THE EMIRATI",
					ar: "الْإِمَارَاتِيّ"
				}),
				role: t({
					en: "Building strong partnerships for sustainable development.",
					ar: "بناء شراكات قوية من أجل التنمية المستدامة."
				})
			},
			{
				name: t({
					en: "GENERAL MANAGER",
					ar: "المُدِير العَام"
				}),
				role: t({
					en: "Leading operational excellence and strategic growth.",
					ar: "قيادة التميّز التشغيلي والنمو الاستراتيجي."
				})
			},
			{
				name: t({
					en: "GENERAL MANAGER",
					ar: "المُدِير العَام"
				}),
				role: t({
					en: "Driving innovation and project delivery.",
					ar: "قيادة الابتكار وتسليم المشاريع."
				})
			}
		]
	}
} satisfies Dictionary;

export default leadershipContent;