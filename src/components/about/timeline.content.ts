import { t, type Dictionary } from "intlayer";

const timelineContent = {
	key: "about-timeline",
	content: {
		label: t({
			ar: "مسيرتنا",
			en: "OUR JOURNEY"
		}),
		heading: t({
			ar: "مسيرة التميز والريادة",
			en: "EVOLUTION OF EXCELLENCE"
		}),
		subtitle: t({
			ar: "محطات فارقة رسمت طريق نجاحنا وشكلت هويتنا الإنشائية عبر عقدين من الزمان",
			en: "Defining milestones that shaped our identity and solidified our construction leadership over two decades"
		}),
		milestones: [
			{
				year: "2004",
				title: t({
					ar: "التأسيس والانطلاقة",
					en: "FOUNDATION"
				}),
				description: t({
					ar: "تأسست شركة DAC برؤية طموحة لوضع معايير هندسية متقدمة في مجال المقاولات والإنشاءات الكبرى.",
					en: "DAC was established with a singular vision: to bring uncompromising engineering rigour and construction excellence to major regional projects."
				}),
				image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80"
			},
			{
				year: "2014",
				title: t({
					ar: "التوسع الإقليمي والنمو",
					en: "REGIONAL EXPANSION"
				}),
				description: t({
					ar: "توسيع نطاق العمليات ليشمل مشاريع سكنية وتجارية ضخمة بمحفظة استثمارية متنامية واعتمادات عالمية.",
					en: "Expanded operations across high-profile commercial and luxury residential sectors, scaling our multidisciplinary engineering capacity."
				}),
				image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&auto=format&fit=crop&q=80"
			},
			{
				year: "2020",
				title: t({
					ar: "المعالم الكبرى والابتكار",
					en: "ICONIC LANDMARKS"
				}),
				description: t({
					ar: "تنفيذ أبراج أيقونية ومشاريع سياحية وبنية تحتية معقدة باستخدام تقنيات البناء الحديثة والذكية.",
					en: "Delivered landmark skyscrapers and complex infrastructure projects leveraging cutting-edge modular construction and digital modeling."
				}),
				image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=80"
			},
			{
				year: "2023",
				title: t({
					ar: "الريادة والاستدامة",
					en: "SUSTAINABLE LEADERSHIP"
				}),
				description: t({
					ar: "ترسيخ مكانة الشركة كشريك إنشائي رائد يقود التحول نحو العمارة الخضراء والمباني الذكية المعتمدة عالمياً.",
					en: "Pioneered sustainable building standards, establishing DAC as the preferred partner for future-ready sustainable architectural feats."
				}),
				image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80"
			}
		]
	}
} satisfies Dictionary;

export default timelineContent;
