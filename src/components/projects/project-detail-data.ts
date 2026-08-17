import type { Project } from "@/lib/cms";

export interface ProjectMetric {
	label: { en: string; ar: string };
	value: string;
}

export interface ProjectMilestoneItem {
	step: string;
	title: { en: string; ar: string };
	description: { en: string; ar: string };
	date?: string;
	status?: "completed" | "in-progress" | "pending";
	image?: string;
}

export interface AmenityItem {
	id: string;
	iconName: "clubhouse" | "gym" | "security" | "pool" | "smarthome" | "kids" | "park" | "parking";
	title: { en: string; ar: string };
}

export interface ProjectVideoItem {
	tag: { en: string; ar: string };
	title: { en: string; ar: string };
	thumbnail: string;
	duration?: string;
}

export interface WorkpackageItem {
	name: { en: string; ar: string };
	progress: number;
}

export interface ProjectSitePhoto {
	image: string;
	caption: { en: string; ar: string };
	tag?: string;
}

export interface ProjectDetailData {
	id: string;
	title: { en: string; ar: string };
	tagline: { en: string; ar: string };
	categoryBreadcrumb: { en: string; ar: string };
	location: { en: string; ar: string };
	year: string;
	heroImage: string;
	isUnderConstruction: boolean;
	statusLabel: { en: string; ar: string };
	
	// Overview Section
	overviewTitle: { en: string; ar: string };
	overviewParagraphs: { en: string[]; ar: string[] };
	metrics: ProjectMetric[];

	// Gallery
	galleryImages: {
		image: string;
		indexTag: string;
		alt: { en: string; ar: string };
	}[];

	// Timeline (Detail Page)
	timelineTitle: { en: string; ar: string };
	timelineImage: string;
	timelineMilestones: ProjectMilestoneItem[];

	// Amenities
	amenitiesTitle: { en: string; ar: string };
	amenities: AmenityItem[];

	// Videos
	videosTitle: { en: string; ar: string };
	videosSubtitle: { en: string; ar: string };
	videos: ProjectVideoItem[];

	// Progress Data (Progress Page)
	progress?: {
		overallPercentage: number;
		lastUpdated: { en: string; ar: string };
		heading: { en: string; ar: string };
		workpackages: WorkpackageItem[];
		journeyMilestones: ProjectMilestoneItem[];
		sitePhotos: ProjectSitePhoto[];
	};
}

export const PROJECTS_DETAIL_DATA: Record<string, ProjectDetailData> = {
	"the-line-complex": {
		id: "the-line-complex",
		title: {
			en: "FROM GROUND TO COMPLETION.",
			ar: "من الأساسات حتى الاكتمال."
		},
		tagline: {
			en: "Refining every nuance of the project's experience and architecture into enduring excellence.",
			ar: "صياغة كل تفاصيل تجربة المشروع وعمارته نحو تميز هندسي يدوم طويلاً."
		},
		categoryBreadcrumb: {
			en: "PROJECTS / COMMERCIAL / RIYADH, KSA",
			ar: "المشاريع / تجاري / الرياض، المملكة العربية السعودية"
		},
		location: {
			en: "Riyadh, KSA",
			ar: "الرياض، المملكة العربية السعودية"
		},
		year: "2025",
		heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85",
		isUnderConstruction: true,
		statusLabel: {
			en: "Under Construction",
			ar: "قيد الإنشاء"
		},
		overviewTitle: {
			en: "REDEFINING URBAN LUXURY",
			ar: "إعادة تعريف الفخامة الحضرية"
		},
		overviewParagraphs: {
			en: [
				"The Karamlah 15 project has the unique design of the exterior façade that attracts all passers-by, due to its beautiful choice of colors that are consistent with the streamlined and simple design of the project.",
				"Just as Golden Point's engineers took care of the project's exterior, they also took care of its interior façade, by finishing it entirely in marble and adding some special decorations and aesthetic spenters that add another sophistication to the project.",
				"The Al-Qaranful 15 project is also surrounded by a special fence, and at its entrance, security personnel and guards are present 24 hours a day to protect the residents and their children continuously, and the project includes a private garage for each housing unit that can accommodate more than one car, and is equipped with surveillance cameras to preserve the residents' property."
			],
			ar: [
				"يتميز مشروع كراملا ١٥ بتصميم فريد للواجهة الخارجية يجذب أنظار المارة بفضل الاختيار المتقن للألوان المتناسقة مع التصميم الانسيابي والبسيط للمشروع.",
				"وكما اعتنى مهندسو الشركة بالواجهة الخارجية للمشروع، فقد أولوا اهتماماً فائقاً بالتصميم الداخلي، حيث تم تكسية المساحات بالرخام الفاخر وإضافة تفاصيل جمالية خاصة تضفي رونقاً متميزاً.",
				"كما يحيط بالمشروع سور خاص وحراسة أمنية على مدار ٢٤ ساعة لضمان أمان وراحة السكان، ويشتمل كل مسكن على مرآب خاص يستوعب أكثر من سيارة ومزود بكاميرات مراقبة حديثة."
			]
		},
		metrics: [
			{ label: { en: "Total Units", ar: "إجمالي الوحدات" }, value: "120" },
			{ label: { en: "Built Area", ar: "المساحة المبنية" }, value: "15,000 m²" },
			{ label: { en: "Delivery Date", ar: "تاريخ التسليم" }, value: "Q4 2025" },
			{ label: { en: "Starting Price", ar: "يبدأ السعر من" }, value: "5.2M SAR" }
		],
		galleryImages: [
			{
				image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85",
				indexTag: "01/",
				alt: { en: "Grand reception and double-height lobby", ar: "بهو الاستقبال الفسيح والمدخل الرئيسي" }
			},
			{
				image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1000&auto=format&fit=crop&q=85",
				indexTag: "02/",
				alt: { en: "Contemporary living lounge with daylight focus", ar: "صالة معيشة معاصرة مع إضاءة طبيعية" }
			},
			{
				image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&auto=format&fit=crop&q=85",
				indexTag: "03/",
				alt: { en: "Private garden suite terrace", ar: "شرفة الجناح الخاص المطلة على الحديقة" }
			}
		],
		timelineTitle: {
			en: "PROJECT TIMELINE",
			ar: "الجدول الزمني للمشروع"
		},
		timelineImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85",
		timelineMilestones: [
			{
				step: "01/05",
				title: { en: "SITE PREPARATION", ar: "تجهيز الموقع والأساسات" },
				description: {
					en: "Comprehensive soil stabilization, excavation, and structural piling foundations completed to highest safety standards.",
					ar: "أعمال الحفر وتثبيت التربة وتجهيز الأساسات الخرسانية العميقة وفق أعلى معايير الجودة والسلامة."
				},
				status: "completed",
				image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "02/05",
				title: { en: "MAIN STRUCTURE", ar: "الهيكل الإنشائي الرئيسي" },
				description: {
					en: "Reinforced concrete core and post-tensioned slabs shaping the tower's architectural geometry.",
					ar: "صب الأعمدة والأسقف الخرسانية مسبقة الإجهاد وتشييد الهيكل الحامل للتصميم المعماري."
				},
				status: "in-progress",
				image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "03/05",
				title: { en: "FACADE COMPLETION", ar: "تنفيذ الواجهات الزجاجية" },
				description: {
					en: "Installation of thermal acoustic double-glazed curtain walls and bespoke architectural louvers.",
					ar: "تركيب الواجهات الزجاجية العازلة للصوت والحرارة والشرائح المعمارية المخصصة."
				},
				status: "pending",
				image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "04/05",
				title: { en: "INTERIOR FIT-OUT", ar: "التشطيبات والتجهيزات الداخلية" },
				description: {
					en: "Premium marble flooring, customized joinery, integrated smart lighting and HVAC MEP systems.",
					ar: "تركيب الرخام الفاخر والأعمال الخشبية وأنظمة التكييف والإنارة الذكية المدمجة."
				},
				status: "pending",
				image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "05/05",
				title: { en: "HANDOVER & DELIVERY", ar: "الفحص النهائي والتسليم" },
				description: {
					en: "Rigorous quality assurance testing, council certifications and key handover to owners.",
					ar: "اختبارات الجودة الشاملة والحصول على اعتمادات التشغيل وتسليم الوحدات للعملاء."
				},
				status: "pending",
				image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=85"
			}
		],
		amenitiesTitle: {
			en: "Curated Lifestyle Amenities",
			ar: "مرافق وخدمات استثنائية"
		},
		amenities: [
			{ id: "clubhouse", iconName: "clubhouse", title: { en: "Club House", ar: "النادي الاجتماعي" } },
			{ id: "gym", iconName: "gym", title: { en: "Gym & Spa", ar: "نادي صحي وسبا" } },
			{ id: "security", iconName: "security", title: { en: "24/7 Security", ar: "أمن وحراسة ٢٤/٧" } },
			{ id: "pool", iconName: "pool", title: { en: "Infinity Pool", ar: "مسبح إنفينيتي" } },
			{ id: "smarthome", iconName: "smarthome", title: { en: "Smart Home", ar: "أنظمة منزلية ذكية" } },
			{ id: "kids", iconName: "kids", title: { en: "Kids Play Area", ar: "منطقة ألعاب أطفال" } },
			{ id: "park", iconName: "park", title: { en: "Green Parks", ar: "حدائق ومساحات خضراء" } },
			{ id: "parking", iconName: "parking", title: { en: "Covered Parking", ar: "مواقف سيارات مغطاة" } }
		],
		videosTitle: {
			en: "Project videos",
			ar: "فيديوهات المشروع"
		},
		videosSubtitle: {
			en: "COMPREHENSIVE WALKTHROUGH AND DETAILED PROJECT VIDEOS.",
			ar: "جولة شاملة وتغطية مرئية مفصلة لمراحل المشروع وتصميمه."
		},
		videos: [
			{
				tag: { en: "VIDEO 01", ar: "فيديو ٠١" },
				title: { en: "Notion x Metropolis: A Modern Study", ar: "دراسة معمارية: التناغم بين الحداثة والمكان" },
				thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&auto=format&fit=crop&q=85",
				duration: "03:45"
			},
			{
				tag: { en: "VIDEO 02", ar: "فيديو ٠٢" },
				title: { en: "Notion x Metropolis: A Modern Study", ar: "دراسة معمارية: التناغم بين الحداثة والمكان" },
				thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85",
				duration: "04:12"
			}
		],
		progress: {
			overallPercentage: 68,
			lastUpdated: { en: "LAST UPDATED 24 OCT 2024", ar: "آخر تحديث ٢٤ أكتوبر ٢٠٢٤" },
			heading: { en: "THE PROJECT IS TAKING SHAPE.", ar: "المشروع يتشكل على أرض الواقع." },
			workpackages: [
				{ name: { en: "Substructure", ar: "الأعمال التحتية والأساسات" }, progress: 100 },
				{ name: { en: "Primary Structure", ar: "الهيكل الإنشائي الرئيسي" }, progress: 87 },
				{ name: { en: "Facade & Glazing", ar: "الواجهات والزجاج" }, progress: 52 },
				{ name: { en: "MEP & Fit-Out", ar: "الأعمال الكهروميكانيكية والتشطيب" }, progress: 33 }
			],
			journeyMilestones: [
				{ step: "01/05", title: { en: "Site Preparation", ar: "تجهيز الموقع" }, description: { en: "Completed", ar: "مكتمل" }, status: "completed" },
				{ step: "02/05", title: { en: "Main Structure", ar: "الهيكل الرئيسي" }, description: { en: "In Progress", ar: "قيد التنفيذ" }, status: "completed" },
				{ step: "03/05", title: { en: "MEP & Masonry", ar: "الكهروميكانيكا والبناء" }, description: { en: "Ongoing", ar: "جاري العمل" }, status: "in-progress" },
				{ step: "04/05", title: { en: "Facade & Finishes", ar: "الواجهات والتشطيبات" }, description: { en: "Scheduled", ar: "مجدول" }, status: "pending" },
				{ step: "05/05", title: { en: "Final Handover", ar: "التسليم النهائي" }, description: { en: "Upcoming", ar: "قادم" }, status: "pending" }
			],
			sitePhotos: [
				{
					image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop&q=85",
					caption: { en: "Interior structural concrete framing with floor-to-ceiling panoramic views", ar: "أعمال الهيكل الخرساني الداخلي مع إطلالات بانورامية مفتوحة" },
					tag: "STRUCTURAL"
				},
				{
					image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Precision MEP installation & electrical distribution panels", ar: "تركيب لوحات التوزيع الكهربائية وأنظمة التكييف بدقة عالية" },
					tag: "MEP INSTALLATION"
				},
				{
					image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=85",
					caption: { en: "External cradle installation of acoustic facade panels", ar: "أعمال تركيب ألواح الواجهات الخارجية عبر منصات متخصصة" },
					tag: "FACADE GLAZING"
				},
				{
					image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Advanced cabling, conduits and hydraulic plumbing systems", ar: "تمديد شبكات البنية التحتية والسباكة والأنظمة الهيدروليكية" },
					tag: "INFRASTRUCTURE"
				},
				{
					image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Dusk structural inspection on upper deck levels", ar: "متابعة وفحص الأعمال الإنشائية في الطوابق العليا عند الغروب" },
					tag: "SITE INSPECTION"
				},
				{
					image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Finished mock-up corridor showcasing luxury marble & lighting", ar: "نموذج التشطيب الأولي للممرات بالرخام الطبيعي والإضاءة الفاخرة" },
					tag: "SAMPLE UNIT"
				}
			]
		}
	},
	"the-monolith-residence": {
		id: "the-monolith-residence",
		title: {
			en: "FROM GROUND TO COMPLETION.",
			ar: "من الأساسات حتى الاكتمال."
		},
		tagline: {
			en: "From a breathtaking perspective of coastal living framed by striking glass and concrete geometry.",
			ar: "منظور استثنائي للحياة الساحلية بإطار هندسي أخاذ من الزجاج والخرسانة النقية."
		},
		categoryBreadcrumb: {
			en: "PROJECTS / RESIDENTIAL / DUBAI, UAE",
			ar: "المشاريع / سكني / دبي، الإمارات العربية المتحدة"
		},
		location: {
			en: "Dubai, UAE",
			ar: "دبي، الإمارات العربية المتحدة"
		},
		year: "2024",
		heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85",
		isUnderConstruction: false,
		statusLabel: {
			en: "Completed",
			ar: "مكتمل"
		},
		overviewTitle: {
			en: "REDEFINING URBAN LUXURY",
			ar: "إعادة تعريف الفخامة الحضرية"
		},
		overviewParagraphs: {
			en: [
				"Ardlyn receives global excellence award for 'The Monolith' residence. Framed by striking glass and concrete geometry, this award-winning private residence elevates modern luxury to an art form.",
				"Every room captures pristine coastal panoramas while interior courtyards introduce serene water features, natural sunlight, and sculpted landscape architecture.",
				"Finished to uncompromising bespoke standards, featuring imported Italian travertine, custom minimalist joinery, and fully automated building systems."
			],
			ar: [
				"حصد المشروع جائزة التميز العالمية للعمارة السكنية الخاصة، حيث يجمع بين الهندسة الخرسانية الصريحة والواجهات الزجاجية الشفافة.",
				"تطل كل زاوية من زوايا المسكن على مشاهد بحرية خلابة، بينما توفر الأفنية الداخلية واحات من الهدوء وعناصر المياه والإضاءة الطبيعية الموزعة بعناية.",
				"تم تنفيذ كافة التفاصيل بمعايير عالمية دقيقة شملت رخام الترافرتين الإيطالي المستورد والأعمال الخشبية المتقنة والأنظمة الذكية المتكاملة."
			]
		},
		metrics: [
			{ label: { en: "Total Units", ar: "إجمالي الوحدات" }, value: "1 Private Estate" },
			{ label: { en: "Built Area", ar: "المساحة المبنية" }, value: "2,800 m²" },
			{ label: { en: "Completed", ar: "تاريخ الإنجاز" }, value: "2024" },
			{ label: { en: "Valuation", ar: "القيمة التقديرية" }, value: "38M AED" }
		],
		galleryImages: [
			{
				image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=85",
				indexTag: "01/",
				alt: { en: "Modern architectural facade overlooking infinity pool", ar: "واجهة المسكن الحديثة المطلة على المسبح" }
			},
			{
				image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=85",
				indexTag: "02/",
				alt: { en: "Sunlit living hall with open courtyard connection", ar: "صالة المعيشة المغمورة بالضوء الطبيعي" }
			},
			{
				image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&auto=format&fit=crop&q=85",
				indexTag: "03/",
				alt: { en: "Master bedroom suite with private sea balcony", ar: "جناح النوم الرئيسي مع شرفة خاصة" }
			}
		],
		timelineTitle: {
			en: "PROJECT TIMELINE",
			ar: "الجدول الزمني للمشروع"
		},
		timelineImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85",
		timelineMilestones: [
			{
				step: "01/05",
				title: { en: "ARCHITECTURAL DESIGN", ar: "التصميم المعماري والمخططات" },
				description: { en: "Concept creation and parametric engineering simulations.", ar: "ابتكار المفهوم والتصميم الهندسي البارامتري المتقدم." },
				status: "completed",
				image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "02/05",
				title: { en: "EARTHWORKS & FOUNDATION", ar: "الحفريات والأساسات" },
				description: { en: "Precision deep foundation and marine-grade waterproofing.", ar: "تنفيذ الأساسات العميقة والعزل المائي المخصص للبيئات الساحلية." },
				status: "completed",
				image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "03/05",
				title: { en: "CAST CONCRETE SHELL", ar: "الهيكل الخرساني المعماري" },
				description: { en: "Flawless fair-faced concrete architectural shell.", ar: "تنفيذ الخرسانة الظاهرة فائقة النعومة بدون عيوب." },
				status: "completed",
				image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "04/05",
				title: { en: "BESPOKE INTERIOR FIT-OUT", ar: "التشطيبات الداخلية الراقية" },
				description: { en: "Custom Italian marble, smart home automation, and acoustic tuning.", ar: "تركيب الرخام الإيطالي وأنظمة المنزل الذكي والعزل الصوتي المتطور." },
				status: "completed",
				image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=85"
			},
			{
				step: "05/05",
				title: { en: "FINAL HANDOVER", ar: "التسليم النهائي" },
				description: { en: "Full delivery to client and global architectural award recognition.", ar: "التسليم الكامل للعميل وحصد جوائز التميز المعماري الدولية." },
				status: "completed",
				image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=1200&auto=format&fit=crop&q=85"
			}
		],
		amenitiesTitle: {
			en: "Curated Lifestyle Amenities",
			ar: "مرافق وخدمات استثنائية"
		},
		amenities: [
			{ id: "clubhouse", iconName: "clubhouse", title: { en: "Private Lounge", ar: "صالة استقبال خاصة" } },
			{ id: "gym", iconName: "gym", title: { en: "Wellness Spa", ar: "سبا ونادي صحي خاص" } },
			{ id: "security", iconName: "security", title: { en: "24/7 Security", ar: "حراسة أمنية ٢٤/٧" } },
			{ id: "pool", iconName: "pool", title: { en: "Infinity Pool", ar: "مسبح إنفينيتي" } },
			{ id: "smarthome", iconName: "smarthome", title: { en: "Smart Automation", ar: "تحكم ذكي متكامل" } },
			{ id: "kids", iconName: "kids", title: { en: "Cinema Room", ar: "صالة سينما خاصة" } },
			{ id: "park", iconName: "park", title: { en: "Zen Courtyard", ar: "حديقة زن يابانية" } },
			{ id: "parking", iconName: "parking", title: { en: "Underground Garage", ar: "مرآب سفلي فاخر" } }
		],
		videosTitle: {
			en: "Project videos",
			ar: "فيديوهات المشروع"
		},
		videosSubtitle: {
			en: "COMPREHENSIVE WALKTHROUGH AND DETAILED PROJECT VIDEOS.",
			ar: "جولة شاملة وتغطية مرئية مفصلة للمسكن والتفاصيل الهندسية."
		},
		videos: [
			{
				tag: { en: "VIDEO 01", ar: "فيديو ٠١" },
				title: { en: "The Monolith: Coastal Architecture Film", ar: "ذا مونوليث: الفيلم الوثائقي للعمارة الساحلية" },
				thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=85",
				duration: "04:30"
			},
			{
				tag: { en: "VIDEO 02", ar: "فيديو ٠٢" },
				title: { en: "Interior Detailing & Light Simulation", ar: "دراسة التفاصيل الداخلية وحركة الضوء" },
				thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85",
				duration: "02:50"
			}
		]
	}
};

export function getProjectDetailById(id: string): ProjectDetailData {
	if (PROJECTS_DETAIL_DATA[id]) {
		return PROJECTS_DETAIL_DATA[id];
	}

	// Dynamic fallback for any other project ID
	const formattedTitle = id
		.replace(/-/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase());

	const isUnderConstruction = id.includes("progress") || id.includes("ongoing") || id.includes("line") || id.includes("complex");

	return {
		id,
		title: {
			en: `FROM GROUND TO COMPLETION.`,
			ar: `من الأساسات حتى الاكتمال.`
		},
		tagline: {
			en: `Refining every nuance of ${formattedTitle} into enduring architectural excellence.`,
			ar: `صياغة كل تفاصيل ${formattedTitle} نحو تميز هندسي يدوم طويلاً.`
		},
		categoryBreadcrumb: {
			en: `PROJECTS / RESIDENTIAL & COMMERCIAL / ${formattedTitle.toUpperCase()}`,
			ar: `المشاريع / سكني وتجاري / ${formattedTitle}`
		},
		location: {
			en: "Riyadh, KSA",
			ar: "الرياض، المملكة العربية السعودية"
		},
		year: "2025",
		heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85",
		isUnderConstruction,
		statusLabel: {
			en: isUnderConstruction ? "Under Construction" : "Completed",
			ar: isUnderConstruction ? "قيد الإنشاء" : "مكتمل"
		},
		overviewTitle: {
			en: "REDEFINING URBAN LUXURY",
			ar: "إعادة تعريف الفخامة الحضرية"
		},
		overviewParagraphs: {
			en: [
				`The ${formattedTitle} project has the unique design of the exterior façade that attracts all passers-by, due to its beautiful choice of colors that are consistent with the streamlined and simple design of the project.`,
				"Just as the engineers took care of the project's exterior, they also took care of its interior façade, by finishing it entirely in marble and adding some special decorations and aesthetic spenters that add another sophistication to the project.",
				"The project is also surrounded by a special fence, and at its entrance, security personnel and guards are present 24 hours a day to protect the residents and their children continuously, and the project includes private parking equipped with surveillance cameras."
			],
			ar: [
				`يتميز مشروع ${formattedTitle} بتصميم فريد للواجهة الخارجية يجذب أنظار المارة بفضل الاختيار المتقن للألوان المتناسقة مع التصميم الانسيابي والبسيط للمشروع.`,
				"وكما اعتنى مهندسو المشروع بالواجهة الخارجية، فقد أولوا اهتماماً فائقاً بالتصميم الداخلي، حيث تم تكسية المساحات بالرخام الفاخر وإضافة تفاصيل جمالية تضفي رونقاً متميزاً.",
				"كما يحيط بالمشروع سور خاص وحراسة أمنية على مدار ٢٤ ساعة لضمان أمان وراحة السكان، ويشتمل كل مسكن على مواقف سيارات خاصة مزودة بكاميرات مراقبة حديثة."
			]
		},
		metrics: [
			{ label: { en: "Total Units", ar: "إجمالي الوحدات" }, value: "120" },
			{ label: { en: "Built Area", ar: "المساحة المبنية" }, value: "15,000 m²" },
			{ label: { en: "Delivery Date", ar: "تاريخ التسليم" }, value: "Q4 2025" },
			{ label: { en: "Starting Price", ar: "يبدأ السعر من" }, value: "5.2M SAR" }
		],
		galleryImages: [
			{
				image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85",
				indexTag: "01/",
				alt: { en: "Luxury reception area", ar: "منطقة الاستقبال الفاخرة" }
			},
			{
				image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1000&auto=format&fit=crop&q=85",
				indexTag: "02/",
				alt: { en: "Main living hall", ar: "صالة المعيشة الرئيسية" }
			},
			{
				image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&auto=format&fit=crop&q=85",
				indexTag: "03/",
				alt: { en: "Private suite", ar: "الجناح الخاص" }
			}
		],
		timelineTitle: {
			en: "PROJECT TIMELINE",
			ar: "الجدول الزمني للمشروع"
		},
		timelineImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=85",
		timelineMilestones: [
			{ step: "01/05", title: { en: "SITE PREPARATION", ar: "تجهيز الموقع" }, description: { en: "Soil stabilization and deep excavation works.", ar: "أعمال الحفر وتجهيز التربة والأساسات." }, status: "completed" },
			{ step: "02/05", title: { en: "MAIN STRUCTURE", ar: "الهيكل الرئيسي" }, description: { en: "Reinforced concrete core construction.", ar: "تشييد الهيكل الخرساني الحامل." }, status: "in-progress" },
			{ step: "03/05", title: { en: "FACADE COMPLETION", ar: "الواجهات الزجاجية" }, description: { en: "Thermal curtain walls installation.", ar: "تركيب الواجهات الزجاجية العازلة." }, status: "pending" },
			{ step: "04/05", title: { en: "INTERIOR FIT-OUT", ar: "التشطيبات الداخلية" }, description: { en: "Marble flooring and smart HVAC systems.", ar: "تركيب الرخام وأنظمة التكييف الذكية." }, status: "pending" },
			{ step: "05/05", title: { en: "HANDOVER & DELIVERY", ar: "التسليم النهائي" }, description: { en: "Quality assurance and unit handovers.", ar: "الفحص النهائي وتسليم المفاتيح." }, status: "pending" }
		],
		amenitiesTitle: {
			en: "Curated Lifestyle Amenities",
			ar: "مرافق وخدمات استثنائية"
		},
		amenities: [
			{ id: "clubhouse", iconName: "clubhouse", title: { en: "Club House", ar: "النادي الاجتماعي" } },
			{ id: "gym", iconName: "gym", title: { en: "Gym & Spa", ar: "نادي صحي وسبا" } },
			{ id: "security", iconName: "security", title: { en: "24/7 Security", ar: "أمن وحراسة ٢٤/٧" } },
			{ id: "pool", iconName: "pool", title: { en: "Infinity Pool", ar: "مسبح إنفينيتي" } },
			{ id: "smarthome", iconName: "smarthome", title: { en: "Smart Home", ar: "أنظمة منزلية ذكية" } },
			{ id: "kids", iconName: "kids", title: { en: "Kids Play Area", ar: "منطقة ألعاب أطفال" } },
			{ id: "park", iconName: "park", title: { en: "Green Parks", ar: "حدائق ومساحات خضراء" } },
			{ id: "parking", iconName: "parking", title: { en: "Covered Parking", ar: "مواقف سيارات مغطاة" } }
		],
		videosTitle: {
			en: "Project videos",
			ar: "فيديوهات المشروع"
		},
		videosSubtitle: {
			en: "COMPREHENSIVE WALKTHROUGH AND DETAILED PROJECT VIDEOS.",
			ar: "جولة شاملة وتغطية مرئية مفصلة للمشروع."
		},
		videos: [
			{
				tag: { en: "VIDEO 01", ar: "فيديو ٠١" },
				title: { en: "Notion x Metropolis: A Modern Study", ar: "دراسة معمارية: التناغم بين الحداثة والمكان" },
				thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&auto=format&fit=crop&q=85"
			},
			{
				tag: { en: "VIDEO 02", ar: "فيديو ٠٢" },
				title: { en: "Notion x Metropolis: A Modern Study", ar: "دراسة معمارية: التناغم بين الحداثة والمكان" },
				thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85"
			}
		],
		progress: isUnderConstruction ? {
			overallPercentage: 68,
			lastUpdated: { en: "LAST UPDATED 24 OCT 2024", ar: "آخر تحديث ٢٤ أكتوبر ٢٠٢٤" },
			heading: { en: "THE PROJECT IS TAKING SHAPE.", ar: "المشروع يتشكل على أرض الواقع." },
			workpackages: [
				{ name: { en: "Substructure", ar: "الأعمال التحتية والأساسات" }, progress: 100 },
				{ name: { en: "Primary Structure", ar: "الهيكل الإنشائي الرئيسي" }, progress: 87 },
				{ name: { en: "Facade & Glazing", ar: "الواجهات والزجاج" }, progress: 52 },
				{ name: { en: "MEP & Fit-Out", ar: "الأعمال الكهروميكانيكية والتشطيب" }, progress: 33 }
			],
			journeyMilestones: [
				{ step: "01/05", title: { en: "Site Preparation", ar: "تجهيز الموقع" }, description: { en: "Completed", ar: "مكتمل" }, status: "completed" },
				{ step: "02/05", title: { en: "Main Structure", ar: "الهيكل الرئيسي" }, description: { en: "In Progress", ar: "قيد التنفيذ" }, status: "completed" },
				{ step: "03/05", title: { en: "MEP & Masonry", ar: "الكهروميكانيكا والبناء" }, description: { en: "Ongoing", ar: "جاري العمل" }, status: "in-progress" },
				{ step: "04/05", title: { en: "Facade & Finishes", ar: "الواجهات والتشطيبات" }, description: { en: "Scheduled", ar: "مجدول" }, status: "pending" },
				{ step: "05/05", title: { en: "Final Handover", ar: "التسليم النهائي" }, description: { en: "Upcoming", ar: "قادم" }, status: "pending" }
			],
			sitePhotos: [
				{
					image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=1200&auto=format&fit=crop&q=85",
					caption: { en: "Interior structural concrete framing with floor-to-ceiling panoramic views", ar: "أعمال الهيكل الخرساني الداخلي مع إطلالات بانورامية مفتوحة" },
					tag: "STRUCTURAL"
				},
				{
					image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Precision MEP installation & electrical distribution panels", ar: "تركيب لوحات التوزيع الكهربائية وأنظمة التكييف بدقة عالية" },
					tag: "MEP INSTALLATION"
				},
				{
					image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=85",
					caption: { en: "External cradle installation of acoustic facade panels", ar: "أعمال تركيب ألواح الواجهات الخارجية عبر منصات متخصصة" },
					tag: "FACADE GLAZING"
				},
				{
					image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Advanced cabling, conduits and hydraulic plumbing systems", ar: "تمديد شبكات البنية التحتية والسباكة والأنظمة الهيدروليكية" },
					tag: "INFRASTRUCTURE"
				},
				{
					image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Dusk structural inspection on upper deck levels", ar: "متابعة وفحص الأعمال الإنشائية في الطوابق العليا عند الغروب" },
					tag: "SITE INSPECTION"
				},
				{
					image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=85",
					caption: { en: "Finished mock-up corridor showcasing luxury marble & lighting", ar: "نموذج التشطيب الأولي للممرات بالرخام الطبيعي والإضاءة الفاخرة" },
					tag: "SAMPLE UNIT"
				}
			]
		} : undefined
	};
}

export function getProjectDetail(projectId: string, api?: Project | null): ProjectDetailData {
	if (!api) return getProjectDetailById(projectId);

	const en = api.en as {
		slug?: string;
		title?: string | null;
		name?: string;
		description?: string | null;
		location?: string | null;
		status?: string;
		completed_at?: string | null;
		delivery_year?: number | null;
		delivery_quarter?: number | null;
		total_units?: number | null;
		area?: string | null;
		starting_price?: number | null;
		images?: string[];
		timeline_image?: string | null;
		timelines?: {
			en: { title?: string | null; description?: string | null; year?: number };
			ar: { title_ar?: string | null; description_ar?: string | null };
		}[];
	};
	const ar = api.ar as {
		title_ar?: string | null;
		name_ar?: string;
		description_ar?: string | null;
		location_ar?: string | null;
		status?: string;
	};

	const status = en.status ?? "";
	const isUnderConstruction = status === "in-progress" || status === "ongoing";

	const galleryImages = (en.images ?? []).map((url, i) => ({
		image: url,
		indexTag: `${String(i + 1).padStart(2, "0")}/`,
		alt: { en: en.name ?? "", ar: ar.name_ar ?? "" }
	}));

	const timelineMilestones = (en.timelines ?? []).map((t, i) => ({
		step: `${String(i + 1).padStart(2, "0")}/${String(en.timelines!.length).padStart(2, "0")}`,
		title: { en: t.en.title ?? "", ar: t.ar.title_ar ?? "" },
		description: { en: t.en.description ?? "", ar: t.ar.description_ar ?? "" },
		date: t.en.year ? String(t.en.year) : undefined,
		status: "completed" as const
	}));

	const metrics: ProjectMetric[] = [];
	if (en.total_units) metrics.push({ label: { en: "Total Units", ar: "إجمالي الوحدات" }, value: String(en.total_units) });
	if (en.area) metrics.push({ label: { en: "Built Area", ar: "المساحة المبنية" }, value: en.area });
	if (en.delivery_year) metrics.push({ label: { en: "Delivery Date", ar: "تاريخ التسليم" }, value: `Q${en.delivery_quarter ?? "-"} ${en.delivery_year}` });
	if (en.starting_price) metrics.push({ label: { en: "Starting Price", ar: "يبدأ السعر من" }, value: String(en.starting_price) });

	return {
		id: en.slug ?? projectId,
		title: { en: en.title ?? en.name ?? "", ar: ar.title_ar ?? ar.name_ar ?? "" },
		tagline: { en: en.description ?? "", ar: ar.description_ar ?? "" },
		categoryBreadcrumb: { en: "", ar: "" },
		location: { en: en.location ?? "", ar: ar.location_ar ?? "" },
		year: en.delivery_year?.toString() ?? en.completed_at ?? "",
		heroImage: en.images?.[0] ?? "",
		isUnderConstruction,
		statusLabel: { en: status, ar: status },
		overviewTitle: { en: "", ar: "" },
		overviewParagraphs: { en: [], ar: [] },
		metrics,
		galleryImages,
		timelineTitle: { en: "", ar: "" },
		timelineImage: en.timeline_image ?? "",
		timelineMilestones,
		amenitiesTitle: { en: "", ar: "" },
		amenities: [],
		videosTitle: { en: "", ar: "" },
		videosSubtitle: { en: "", ar: "" },
		videos: [],
		progress: undefined
	};
}
