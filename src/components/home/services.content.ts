import { t, type Dictionary } from "intlayer";

const servicesContent = {
	key: "home-services",
	content: {
		label: t({
			en: "OUR SERVICES",
			ar: "خدماتنا"
		}),
		heading1: t({
			en: "WHAT",
			ar: "ماذا"
		}),
		heading2: t({
			en: "WE DO",
			ar: "نقدم"
		}),
		paragraph: t({
			en: "We provide a full range of construction and engineering services designed to meet our clients' needs.",
			ar: "نقدم مجموعة متكاملة من خدمات البناء والهندسة المصممة لتلبية احتياجات عملائنا"
		}),
		seeAll: t({
			en: "SEE ALL SERVICES",
			ar: "شاهد كل الخدمات"
		}),
		services: [
			t({
				en: "REAL ESTATE DEVELOPMENTS",
				ar: "التطوير العقاري"
			}),
			t({
				en: "GENERAL CONTRACTING",
				ar: "المقاولات العامة"
			}),
			t({
				en: "TECHNICAL WORKS",
				ar: "الأعمال الفنية"
			}),
			t({
				en: "PROPERTY MANAGEMENT",
				ar: "إدارة الممتلكات"
			})
		],
		descriptions: [
			t({
				en: "We design and build modern residential communities with world-class amenities.",
				ar: "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
			}),
			t({
				en: "End-to-end contracting services delivered with precision and on schedule.",
				ar: "خدمات مقاولات متكاملة تُنجز بدقة وفي المواعيد المحددة."
			}),
			t({
				en: "Specialized technical and engineering works for projects of every scale.",
				ar: "أعمال فنية وهندسية متخصصة لمشاريع بجميع الأحجام."
			}),
			t({
				en: "Comprehensive property management that protects and grows your assets.",
				ar: "إدارة شاملة للممتلكات تحمي أصولك وتنمّيها."
			})
		]
	}
} satisfies Dictionary;

export default servicesContent;