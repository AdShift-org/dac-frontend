import { t, type Dictionary } from "intlayer";

const statementContent = {
	key: "home-statement",
	content: {
		label: t({
			en: "COMPANY STATEMENT",
			ar: "بَيَان الشَّرِكَة"
		}),
		heading1: t({
			en: "WE TURN",
			ar: "نُحَوِّلُ"
		}),
		heading2: t({
			en: "VISIONS",
			ar: "الرُّؤَى"
		}),
		heading3: t({
			en: "INTO LANDMARKS.",
			ar: "إِلَى مَعَالِمَ عِمْرَانِيَّة."
		}),
		p1: t({
			en: "DAC Construction is a premier multidisciplinary construction and engineering leader with a rich legacy spanning over two decades.",
			ar: "شركة DAC للمقاولات رائدة في قطاع الإنشاءات والهندسة متعددة التخصصات بإرث عريق يمتد لأكثر من عقدين."
		}),
		p2: t({
			en: "We execute comprehensive contracting and development solutions, delivering landmark architectural, residential, and infrastructure projects across the Middle East.",
			ar: "ننفذ حلولاً متكاملة في المقاولات والتطوير، مقدمين مشاريع معمارية وسكنية وبنية تحتية رائدة عبر الشرق الأوسط."
		}),
		stats: {
			established: t({
				en: "FOUNDED",
				ar: "تَأَسَّسَت"
			}),
			headquarters: t({
				en: "HEADQUARTERS",
				ar: "الْمَقَرُّ الرَّئِيسِيُّ"
			}),
			presence: t({
				en: "PRESENCE",
				ar: "النِّطَاقُ الْجُغْرَافِيُّ"
			})
		},
		establishedValue: t({
			en: "2004",
			ar: "٢٠٠٤"
		}),
		headquartersValue: t({
			en: "CAIRO, EGYPT",
			ar: "القاهرة، مصر"
		}),
		presenceValue: t({
			en: "EGYPT • UAE",
			ar: "مصر • الإمارات"
		})
	}
} satisfies Dictionary;

export default statementContent;