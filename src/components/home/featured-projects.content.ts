import { t, type Dictionary } from "intlayer";

const featuredProjectsContent = {
	key: "home-featured-projects",
	content: {
		label: t({
			en: "PORTFOLIO",
			ar: "محفظة الأعمال"
		}),
		heading: t({
			en: "Featured Projects",
			ar: "مشاريع مميزة"
		}),
		viewAll: t({
			en: "VIEW ALL PROJECTS",
			ar: "عرض كل المشاريع"
		}),
		discover: t({
			en: "DISCOVER PROJECT",
			ar: "استكشف المشروع"
		}),
		projects: [
			{
				name: t({
					en: "THE CREST",
					ar: "ذا كريست"
				}),
				location: t({
					en: "New Cairo, Egypt",
					ar: "القاهرة الجديدة، مصر"
				}),
				category: t({
					en: "Luxury Residential & Villas",
					ar: "فلل وسكني فاخر"
				}),
				year: "2026"
			},
			{
				name: t({
					en: "THE RESIDENCES",
					ar: "ذي ريزيدنسز"
				}),
				location: t({
					en: "New Cairo, Egypt",
					ar: "القاهرة الجديدة، مصر"
				}),
				category: t({
					en: "Boutique Hospitality Suites",
					ar: "أجنحة فندقية متميزة"
				}),
				year: "2025"
			},
			{
				name: t({
					en: "THE PALM ATELIER",
					ar: "ذا بالم أتيليه"
				}),
				location: t({
					en: "Sheikh Zayed, Egypt",
					ar: "الشيخ زايد، مصر"
				}),
				category: t({
					en: "Commercial & Retail Hub",
					ar: "مركز تجاري ومكاتب"
				}),
				year: "2025"
			},
			{
				name: t({
					en: "MARINA BAZAAR",
					ar: "مارينا بازار"
				}),
				location: t({
					en: "North Coast, Egypt",
					ar: "الساحل الشمالي، مصر"
				}),
				category: t({
					en: "Waterfront Coastal Complex",
					ar: "مجمع ساحلي مطل على البحر"
				}),
				year: "2024"
			},
			{
				name: t({
					en: "HORIZON TOWERS",
					ar: "أبراج الأفق"
				}),
				location: t({
					en: "New Administrative Capital, Egypt",
					ar: "العاصمة الإدارية الجديدة، مصر"
				}),
				category: t({
					en: "High-Rise Corporate Headquarters",
					ar: "أبراج إدارية ومقرات شركات"
				}),
				year: "2026"
			},
			{
				name: t({
					en: "OASIS COURTYARD",
					ar: "فناء الواحة"
				}),
				location: t({
					en: "6th of October, Egypt",
					ar: "السادس من أكتوبر، مصر"
				}),
				category: t({
					en: "Gated Community Residences",
					ar: "مجمع سكني مغلق"
				}),
				year: "2024"
			},
			{
				name: t({
					en: "THE GALLERIA",
					ar: "ذا جاليريا"
				}),
				location: t({
					en: "Alexandria, Egypt",
					ar: "الإسكندرية، مصر"
				}),
				category: t({
					en: "Urban Lifestyle Mall",
					ar: "مركز تسوق عصري"
				}),
				year: "2025"
			},
			{
				name: t({
					en: "SILICON GARDENS",
					ar: "حدائق السيليكون"
				}),
				location: t({
					en: "New Cairo, Egypt",
					ar: "القاهرة الجديدة، مصر"
				}),
				category: t({
					en: "Innovation & Technology Park",
					ar: "مجمع ابتكار وتكنولوجيا"
				}),
				year: "2026"
			}
		]
	}
} satisfies Dictionary;

export default featuredProjectsContent;