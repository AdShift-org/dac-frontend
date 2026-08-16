import { t, type Dictionary } from "intlayer";

const introContent = {
	key: "about-intro",
	content: {
		label: t({
			ar: "من نحن",
			en: "WHO WE ARE"
		}),
		heading: t({
			ar: "نحوّل الرؤى إلى معالم بارزة.",
			en: "WE TURN VISIONS INTO LANDMARKS."
		}),
		p1: t({
			ar: "تأسست شركة DAC للمقاولات كقوة رائدة في قطاع الإنشاءات الإقليمي، حيث تجمع بين الخبرة الهندسية المتقدمة والإدارة الفعالة لتسليم أرقى المشاريع العمرانية والصناعية والسكنية.",
			en: "DAC Construction stands as a premier force across the regional construction landscape, uniting advanced engineering mastery and seamless project execution to deliver iconic residential, commercial, and infrastructure developments."
		}),
		p2: t({
			ar: "نؤمن بأن كل مشروع يمثل التزاماً متكاملاً بالتميز والابتكار والسلامة، مع الحفاظ على أعلى معايير الجودة والاستدامة في كل تفصيل.",
			en: "We believe every build represents an enduring commitment to excellence, innovation, and safety, upholding stringent quality and sustainability benchmarks across every detail."
		}),
		highlights: {
			heritage: t({
				ar: "خبرة عريقة ممتدة",
				en: "Heritage Built"
			}),
			precision: t({
				ar: "هندسة فائقة الدقة",
				en: "Precision Engineering"
			}),
			clientCentric: t({
				ar: "التركيز على العميل",
				en: "Client Centric"
			})
		},
		cards: [
			{
				key: "precision",
				title: t({
					ar: "الدقة",
					en: "PRECISION"
				}),
				description: t({
					ar: "تنفيذ هندسي منضبط يراعي أدق المعايير المعمارية والإنشائية دون أي تنازل.",
					en: "Meticulous structural execution aligning with exact architectural parameters and highest engineering tolerance."
				})
			},
			{
				key: "quality",
				title: t({
					ar: "الجودة",
					en: "QUALITY"
				}),
				description: t({
					ar: "استخدام أرقى المواد وتطبيق أحدث تقنيات البناء لضمان استدامة المشاريع وطول عمرها.",
					en: "Premium grade materials paired with advanced construction methodologies ensuring resilience and longevity."
				})
			},
			{
				key: "trust",
				title: t({
					ar: "الثقة",
					en: "TRUST"
				}),
				description: t({
					ar: "شراكات طويلة الأمد مبنية على الشفافية والالتزام بالجداول الزمنية والميزانيات المحددة.",
					en: "Enduring client partnerships built on uncompromised transparency, punctuality, and fiscal discipline."
				})
			}
		]
	}
} satisfies Dictionary;

export default introContent;
