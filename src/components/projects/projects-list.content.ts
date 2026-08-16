import { t, type Dictionary } from "intlayer";

const projectsListContent = {
	key: "projects-list",
	content: {
		label: t({
			en: "SELECTED PORTFOLIO",
			ar: "محفظة الأعمال المختارة"
		}),
		heading: t({
			en: "Selected Projects",
			ar: "مشاريع مختارة"
		}),
		intro: t({
			en: "Working closely with international architectural leaders, each of our projects combines engineering innovation with timeless craftsmanship.",
			ar: "بالتعاون الوثيق مع رواد العمارة العالميين، يجمع كل مشروع من مشاريعنا بين الابتكار الهندسي والحرفية الخالدة."
		}),
		filterLabels: {
			status: t({
				en: "STATUS",
				ar: "الحالة"
			}),
			typology: t({
				en: "TYPOLOGY",
				ar: "النوع"
			}),
			sector: t({
				en: "SECTOR",
				ar: "القطاع"
			}),
			allStatuses: t({
				en: "All Statuses",
				ar: "جميع الحالات"
			}),
			allTypologies: t({
				en: "All Typologies",
				ar: "جميع الأنواع"
			}),
			allSectors: t({
				en: "All Sectors",
				ar: "جميع القطاعات"
			}),
			clearFilters: t({
				en: "Clear filters",
				ar: "إعادة ضبط التصفية"
			}),
			noResults: t({
				en: "No projects match the selected criteria.",
				ar: "لا توجد مشاريع تطابق المعايير المحددة."
			}),
			showing: t({
				en: "Showing",
				ar: "عرض"
			}),
			projects: t({
				en: "projects",
				ar: "مشاريع"
			})
		},
		metaLabels: {
			location: t({
				en: "LOCATION",
				ar: "الموقع"
			}),
			sector: t({
				en: "SECTOR",
				ar: "القطاع"
			}),
			status: t({
				en: "STATUS",
				ar: "الحالة"
			}),
			area: t({
				en: "AREA",
				ar: "المساحة"
			}),
			year: t({
				en: "YEAR",
				ar: "السنة"
			})
		},
		viewProject: t({
			en: "VIEW PROJECT",
			ar: "عرض المشروع"
		}),
		spotlight: {
			id: "the-monolith-residence",
			statusKey: "completed",
			typologyKey: "residential",
			sectorKey: "architecture",
			badge: t({
				en: "FEATURED",
				ar: "مشروع مميز"
			}),
			tag: t({
				en: "RESIDENTIAL ARCHITECTURE / DUBAI, UAE",
				ar: "عمارة سكنية / دبي، الإمارات"
			}),
			title: t({
				en: "Ardlyn Receives Global Excellence Award for 'The Monolith' Residence",
				ar: "أردلين يحصد جائزة التميز العالمية لمشروع 'ذا مونوليث' السكني"
			}),
			description: t({
				en: "From a breathtaking perspective of coastal living. Framed by striking glass and concrete geometry, this award-winning private residence elevates modern luxury to an art form through seamless indoor-outdoor cohesion.",
				ar: "من منظور استثنائي للحياة الساحلية. مع إطار هندسي خرساني وزجاجي أخاذ، يرتقي هذا المسكن الخاص الحائز على جوائز بالفخامة العصرية إلى مستوى الفن من خلال التناغم السلس بين الداخل والخارج."
			}),
			subHeading: t({
				en: "The Zenith Residence",
				ar: "إقامة ذا زينيث"
			}),
			location: t({
				en: "Dubai, UAE",
				ar: "دبي، الإمارات"
			}),
			year: "2024",
			image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&auto=format&fit=crop&q=85"
		},
		items: [
			{
				id: "ardlyn-gardens",
				statusKey: "completed",
				typologyKey: "residential",
				sectorKey: "residential",
				badge: t({
					en: "FEATURED",
					ar: "مميز"
				}),
				title: t({
					en: "Ardlyn Gardens",
					ar: "حدائق أردلين"
				}),
				description: t({
					en: "A private residential sanctuary celebrating light, courtyard nature and crafted concrete geometry.",
					ar: "ملاذ سكني خاص يحتفي بالضوء والطبيعة والفناء الداخلي بتفاصيل خرسانية متقنة."
				}),
				year: "2023",
				location: t({
					en: "Riyadh, KSA",
					ar: "الرياض، السعودية"
				}),
				sector: t({
					en: "Residential",
					ar: "سكني"
				}),
				status: t({
					en: "Completed",
					ar: "مكتمل"
				}),
				area: "1,450 m²",
				image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85"
			},
			{
				id: "the-line-complex",
				statusKey: "ongoing",
				typologyKey: "commercial",
				sectorKey: "commercial",
				badge: t({
					en: "FEATURED",
					ar: "مميز"
				}),
				title: t({
					en: "The Line Complex",
					ar: "مجمع ذا لاين"
				}),
				description: t({
					en: "Design-led architecture and interior execution celebrating raw steel and glazed desert vistas.",
					ar: "عمارة متميزة وتنفيذ داخلي يحتفي بالفولاذ الصافي والإطلالات الصحراوية الزجاجية."
				}),
				year: "2025",
				location: t({
					en: "Riyadh, KSA",
					ar: "الرياض، السعودية"
				}),
				sector: t({
					en: "Commercial",
					ar: "تجاري"
				}),
				status: t({
					en: "Ongoing",
					ar: "قيد التنفيذ"
				}),
				area: "4,500 m²",
				image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=85"
			},
			{
				id: "marina-wings",
				statusKey: "completed",
				typologyKey: "residential",
				sectorKey: "residential",
				badge: t({
					en: "COMPLETED",
					ar: "مكتمل"
				}),
				title: t({
					en: "Marina Wings",
					ar: "مارينا وينجز"
				}),
				description: t({
					en: "Bespoke coastal living spaces sculpted with panoramic waterfront views and raw textures.",
					ar: "مساحات معيشة ساحلية راقية صُممت بإطلالات بانورامية على الواجهة البحرية وتفاصيل ملمسية نقية."
				}),
				year: "2024",
				location: t({
					en: "Kuwait City",
					ar: "مدينة الكويت"
				}),
				sector: t({
					en: "Residential",
					ar: "سكني"
				}),
				status: t({
					en: "Completed",
					ar: "مكتمل"
				}),
				area: "850 m²",
				image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=85"
			},
			{
				id: "the-zenith-residence",
				statusKey: "in-planning",
				typologyKey: "commercial",
				sectorKey: "commercial",
				badge: t({
					en: "IN PROGRESS",
					ar: "قيد التطوير"
				}),
				title: t({
					en: "The Zenith Residence",
					ar: "إقامة ذا زينيث"
				}),
				description: t({
					en: "Parametric facade and open glass integration redefining contemporary urban residential presence.",
					ar: "واجهة بارامترية وزجاج متكامل يعيد تعريف الحضور السكني الحضري المعاصر."
				}),
				year: "2024",
				location: t({
					en: "London, UK",
					ar: "لندن، بريطانيا"
				}),
				sector: t({
					en: "Commercial",
					ar: "تجاري"
				}),
				status: t({
					en: "In Planning",
					ar: "في مرحلة التخطيط"
				}),
				area: "3,200 m²",
				image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=85"
			},
			{
				id: "the-line-complex-ii",
				statusKey: "in-progress",
				typologyKey: "commercial",
				sectorKey: "commercial",
				badge: t({
					en: "UNDER DEV",
					ar: "قيد التطوير"
				}),
				title: t({
					en: "The Line Complex II",
					ar: "مجمع ذا لاين 2"
				}),
				description: t({
					en: "Pre-engineered structural systems providing floating residential volumes with zero columns.",
					ar: "أنظمة إنشائية مسبقة الهندسة تتيح كتل سكنية معلقة وبلا أعمدة داخلية."
				}),
				year: "2025",
				location: t({
					en: "Dubai, UAE",
					ar: "دبي، الإمارات"
				}),
				sector: t({
					en: "Commercial",
					ar: "تجاري"
				}),
				status: t({
					en: "In Progress",
					ar: "قيد التنفيذ"
				}),
				area: "6,000 m²",
				image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&auto=format&fit=crop&q=85"
			},
			{
				id: "ardlyn-gardens-ii",
				statusKey: "masterplan",
				typologyKey: "residential",
				sectorKey: "architecture",
				badge: t({
					en: "CONCEPT DESIGN",
					ar: "مخطط مفاهيمي"
				}),
				title: t({
					en: "Ardlyn Gardens II",
					ar: "حدائق أردلين 2"
				}),
				description: t({
					en: "An urban residential regeneration concept marrying timber louvers and climate-responsive masonry.",
					ar: "مفهوم تجديد سكني حضري يجمع بين الشرائح الخشبية والبناء المتجاوب مع المناخ."
				}),
				year: "2026",
				location: t({
					en: "Abu Dhabi, UAE",
					ar: "أبوظبي، الإمارات"
				}),
				sector: t({
					en: "Architecture",
					ar: "عمارة"
				}),
				status: t({
					en: "Masterplan",
					ar: "مخطط رئيسي"
				}),
				area: "12,000 m²",
				image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&auto=format&fit=crop&q=85"
			}
		]
	}
} satisfies Dictionary;

export default projectsListContent;
