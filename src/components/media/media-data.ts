export type MediaCategory = "ALL" | "PRESS RELEASES" | "INSIGHTS" | "AWARDS";

export interface MediaArticle {
	id: string;
	slug: string;
	category: "PRESS RELEASES" | "INSIGHTS" | "AWARDS";
	categoryLabel: {
		en: string;
		ar: string;
	};
	categoryTag: {
		en: string;
		ar: string;
	};
	date: string;
	dateAr: string;
	readTime: {
		en: string;
		ar: string;
	};
	title: {
		en: string;
		ar: string;
	};
	excerpt: {
		en: string;
		ar: string;
	};
	coverImage: string;
	isFeatured?: boolean;
	featuredTag?: {
		en: string;
		ar: string;
	};
	completedYear?: string;
	author?: {
		name: {
			en: string;
			ar: string;
		};
		role: {
			en: string;
			ar: string;
		};
	};
	sections: {
		id: string;
		title: {
			en: string;
			ar: string;
		};
		content: {
			en: string[];
			ar: string[];
		};
	}[];
	quote?: {
		text: {
			en: string;
			ar: string;
		};
		author: {
			en: string;
			ar: string;
		};
	};
	figure?: {
		image: string;
		figNum: {
			en: string;
			ar: string;
		};
		caption: {
			en: string;
			ar: string;
		};
	};
	relatedCaseStudy?: {
		tag: {
			en: string;
			ar: string;
		};
		title: {
			en: string;
			ar: string;
		};
		description: {
			en: string;
			ar: string;
		};
		projectId: string;
		previewImage: string;
		previewTitle: {
			en: string;
			ar: string;
		};
		previewAuthor: {
			en: string;
			ar: string;
		};
		previewDate: string;
	};
}

export const MEDIA_ARTICLES: MediaArticle[] = [
	{
		id: "mara-secures-major-contract-new-cairo",
		slug: "mara-secures-major-contract-new-cairo",
		category: "PRESS RELEASES",
		categoryLabel: {
			en: "NEWS / COMPANY",
			ar: "أخبار / الشركة"
		},
		categoryTag: {
			en: "Company News",
			ar: "أخبار الشركة"
		},
		date: "18 AUG 2024",
		dateAr: "١٨ أغسطس ٢٠٢٤",
		readTime: {
			en: "5 MIN",
			ar: "٥ دقائق"
		},
		title: {
			en: "MARA SECURES MAJOR CONTRACT FOR NEW CAIRO BUSINESS DISTRICT.",
			ar: "مارا تفوز بعقد رئيسي لمنطقة الأعمال المركزية في القاهرة الجديدة."
		},
		excerpt: {
			en: "MARA Construction Group has been awarded the primary contracting mandate for the highly anticipated New Cairo Business District Phase II.",
			ar: "مجموعة مارا للإنشاءات تفوز بعقد المقاولة الرئيسي للمرحلة الثانية من منطقة الأعمال بالقاهرة الجديدة."
		},
		coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80",
		isFeatured: true,
		featuredTag: {
			en: "Project Tours",
			ar: "جولات المشاريع"
		},
		completedYear: "Completed 2024",
		author: {
			name: {
				en: "Omar El-Sayed",
				ar: "عمر السيد"
			},
			role: {
				en: "Lead Structural Engineer",
				ar: "كبير مهندسي الإنشاءات"
			}
		},
		sections: [
			{
				id: "strategic-expansion",
				title: {
					en: "01. Strategic Expansion",
					ar: "٠١. التوسع الاستراتيجي"
				},
				content: {
					en: [
						"MARA Construction Group has been awarded the primary contracting mandate for the highly anticipated New Cairo Business District Phase II. This landmark agreement solidifies MARA's position as the leading executor of monumental commercial spaces in the region, bringing our signature precision to one of the decade's most ambitious developments.",
						"The project encompasses over 250,000 square feet of mixed-use development, demanding a rigorous approach to scale and environmental synergy. Our mandate covers the complete lifecycle of the primary superstructure, moving from foundational engineering through to the precision external cladding that will define the district's skyward face."
					],
					ar: [
						"حصلت مجموعة مارا للإنشاءات على تفويض المقاولات الرئيسي للمرحلة الثانية المرتقبة من منطقة الأعمال بالقاهرة الجديدة. تعزز هذه الاتفاقية البارزة مكانة مارا كجهة رائدة في تنفيذ المساحات التجارية الضخمة بالمنطقة.",
						"يمتد المشروع على أكثر من ٢٥٠ ألف قدم مربع من التطوير متعدد الاستخدامات، مما يتطلب نهجًا دقيقًا للحجم والتناغم البيئي. يغطي نطاق عملنا الدورة الكاملة للهيكل الرئيسي، بدءًا من الهندسة التأسيسية وصولاً إلى الكسوة الخارجية الدقيقة."
					]
				}
			},
			{
				id: "architectural-vision",
				title: {
					en: "02. Architectural Vision",
					ar: "٠٢. الرؤية المعمارية"
				},
				content: {
					en: [
						"Collaborating closely with leading international architects, MARA's approach prioritises raw materiality of concrete and steel. The design relies heavily on a visible structural grid, a philosophy championed by our team to deliver a pure identity of uncompromising quality and technical distinction."
					],
					ar: [
						"بالتعاون الوثيق مع كبار المعماريين الدوليين، يعطي نهج مارا الأولوية للمادية الخام للخرسانة والصلب. يعتمد التصميم بشكل كبير على شبكة هيكلية مرئية، وهي فلسفة يتبناها فريقنا لتقديم هوية نقية ذات جودة لا تضاهى وتميز تقني."
					]
				}
			},
			{
				id: "sustainable-execution",
				title: {
					en: "03. Sustainable Execution",
					ar: "٠٣. التنفيذ المستدام"
				},
				content: {
					en: [
						"Emphasizing low-carbon concrete mixes and high-efficiency glazed facades, the project establishes a new benchmark for sustainable urban development in North Africa. Real-time telemetry monitoring during structural assembly ensures minimal material wastage and accelerated delivery timelines."
					],
					ar: [
						"مع التركيز على خلطات الخرسانة منخفضة الكربون والواجهات الزجاجية عالية الكفاءة، يضع المشروع معيارًا جديدًا للتطوير الحضري المستدام في شمال إفريقيا. يضمن الرصد المستمر أثناء التجميع الهيكلي تقليل هدر المواد وتسريع الجداول الزمنية."
					]
				}
			}
		],
		quote: {
			text: {
				en: "This project is a testament to the belief that structural integrity should not be hidden, but celebrated as the primary architectural language.",
				ar: "هذا المشروع هو شهادة على الإيمان بأن السلامة الهيكلية لا ينبغي إخفاؤها، بل الاحتفاء بها كلغة معمارية أساسية."
			},
			author: {
				en: "— OMAR EL-SAYED, LEAD STRUCTURAL ENGINEER",
				ar: "— عمر السيد، كبير مهندسي الإنشاءات"
			}
		},
		figure: {
			image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=1200&auto=format&fit=crop&q=80",
			figNum: {
				en: "FIG 01",
				ar: "شكل ٠١"
			},
			caption: {
				en: "STRUCTURAL NODE DETAIL, PHASE 01",
				ar: "تفاصيل العقدة الهيكلية، المرحلة ٠١"
			}
		},
		relatedCaseStudy: {
			tag: {
				en: "RELATED CASE STUDY",
				ar: "دراسة حالة ذات صلة"
			},
			title: {
				en: "CAIRO BUSINESS PARK.",
				ar: "كايرو بيزنس بارك."
			},
			description: {
				en: "Explore the foundation Phase I project that set the standard for our current expansion, showcasing our expertise in large-scale commercial executions.",
				ar: "استكشف المرحلة التأسيسية الأولى التي أرست المعايير لتوسعنا الحالي، مستعرضة خبرتنا في التنفيذ التجاري واسع النطاق."
			},
			projectId: "cairo-business-park",
			previewImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000&auto=format&fit=crop&q=80",
			previewTitle: {
				en: "Unity Tower: A Monument to brutalist revival",
				ar: "برج الوحدة: صرح لإحياء العمارة الوحشية"
			},
			previewAuthor: {
				en: "By Sarah Park",
				ar: "بقلم سارة بارك"
			},
			previewDate: "Published 12 January 2024"
		}
	},
	{
		id: "poetics-raw-materials-modern-living",
		slug: "poetics-raw-materials-modern-living",
		category: "INSIGHTS",
		categoryLabel: {
			en: "INSIGHTS / ARCHITECTURE",
			ar: "رؤى / العمارة"
		},
		categoryTag: {
			en: "INSIGHT",
			ar: "رؤية"
		},
		date: "OCT 15, 2024",
		dateAr: "١٥ أكتوبر ٢٠٢٤",
		readTime: {
			en: "4 MIN",
			ar: "٤ دقائق"
		},
		title: {
			en: "The Poetics of Raw Materials in Modern Living",
			ar: "شعرية المواد الخام في الحياة المعاصرة"
		},
		excerpt: {
			en: "Exploring the emotional resonance of tactile surfaces and their impact on long-term residential wellbeing.",
			ar: "استكشاف الأثر الشعوري للأسطح الملموسة وتأثيرها على جودة الحياة السكنية على المدى الطويل."
		},
		coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "material-authenticity",
				title: {
					en: "01. Material Authenticity",
					ar: "٠١. أصالة المواد"
				},
				content: {
					en: [
						"In an era dominated by synthetic finishes, the tactile honesty of exposed stone, brushed timber, and untreated cast concrete creates a profound grounding effect within residential architecture.",
						"Natural materials age with grace, recording the passage of time through subtle patinas that deepen the emotional relationship between occupants and their built environment."
					],
					ar: [
						"في عصر تهيمن عليه التشطيبات الاصطناعية، يخلق الصدق الملموس للحجر المكشوف والخشب المصقول والخرسانة المصبوبة تأثيراً عميقاً في العمارة السكنية.",
						"تتقادم المواد الطبيعية برشاقة، مسجلة مرور الوقت عبر طبقات رقيقة تعمق العلاقة العاطفية بين الساكنين ومحيطهم العمراني."
					]
				}
			}
		],
		quote: {
			text: {
				en: "True luxury is found not in excess ornament, but in the authentic presence of timeless materials.",
				ar: "الفخامة الحقيقية لا تكمن في الزخرفة المفرطة، بل في الحضور الأصيل للمواد الخالدة."
			},
			author: {
				en: "— ARCHITECTURAL RESEARCH GROUP",
				ar: "— مجموعة الأبحاث المعمارية"
			}
		}
	},
	{
		id: "arclyn-announces-expansion-sustainable-urban-hubs",
		slug: "arclyn-announces-expansion-sustainable-urban-hubs",
		category: "PRESS RELEASES",
		categoryLabel: {
			en: "PRESS RELEASE / EXPANSION",
			ar: "بيان صحفي / التوسع"
		},
		categoryTag: {
			en: "PRESS RELEASE",
			ar: "بيان صحفي"
		},
		date: "SEP 28, 2024",
		dateAr: "٢٨ سبتمبر ٢٠٢٤",
		readTime: {
			en: "6 MIN",
			ar: "٦ دقائق"
		},
		title: {
			en: "ARCLYN Announces Expansion into Sustainable Urban Hubs",
			ar: "آركلاين تعلن عن التوسع في المراكز الحضرية المستدامة"
		},
		excerpt: {
			en: "Bringing our signature architectural clarity to the most vibrant metropolitan centres in Europe and Asia.",
			ar: "نقل وضوحنا المعماري المميز إلى أكثر المراكز الحضرية حيوية في أوروبا وآسيا."
		},
		coverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "global-footprint",
				title: {
					en: "01. Global Footprint",
					ar: "٠١. التواجد العالمي"
				},
				content: {
					en: [
						"Our international expansion program marks a pivotal step in exporting localized climate-responsive construction techniques to global urban destinations.",
						"Each new hub integrates advanced prefabrication systems with local material sourcing to reduce embodied carbon by up to 35%."
					],
					ar: [
						"يمثل برنامج التوسع الدولي خطوة محورية في تصدير تقنيات البناء المتجاوبة مع المناخ إلى وجهات حضرية عالمية.",
						"يدمج كل مركز جديد أنظمة التصنيع المسبق المتقدمة مع توريد المواد المحلية لتقليل الكربون المتجسد بنسبة تصل إلى ٣٥٪."
					]
				}
			}
		]
	},
	{
		id: "innovator-of-the-year-design-lab",
		slug: "innovator-of-the-year-design-lab",
		category: "AWARDS",
		categoryLabel: {
			en: "AWARDS / RECOGNITION",
			ar: "جوائز / تقدير"
		},
		categoryTag: {
			en: "AWARD",
			ar: "جائزة"
		},
		date: "AUG 12, 2024",
		dateAr: "١٢ أغسطس ٢٠٢٤",
		readTime: {
			en: "3 MIN",
			ar: "٣ دقائق"
		},
		title: {
			en: "Innovator of the Year: The ARCLYN Design Lab",
			ar: "مبتكر العام: مختبر آركلاين للتصميم"
		},
		excerpt: {
			en: "How our internal research division is redefining the limits of carbon-neutral high-density construction.",
			ar: "كيف يعيد قسم الأبحاث الداخلي لدينا تعريف حدود البناء عالي الكثافة الخالي من الكربون."
		},
		coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "engineering-distinction",
				title: {
					en: "01. Engineering Distinction",
					ar: "٠١. التميز الهندسي"
				},
				content: {
					en: [
						"The World Architecture & Engineering Council has awarded the Design Lab for its pioneering structural topology optimization platform."
					],
					ar: [
						"منح المجلس العالمي للعمارة والهندسة مختبر التصميم جائزة تقديرية لمنصته الرائدة في تحسين الطوبولوجيا الهيكلية."
					]
				}
			}
		]
	},
	{
		id: "sustainable-structures-next-century",
		slug: "sustainable-structures-next-century",
		category: "INSIGHTS",
		categoryLabel: {
			en: "INSIGHTS / SUSTAINABILITY",
			ar: "رؤى / الاستدامة"
		},
		categoryTag: {
			en: "INSIGHT",
			ar: "رؤية"
		},
		date: "JUL 30, 2024",
		dateAr: "٣٠ يوليو ٢٠٢٤",
		readTime: {
			en: "5 MIN",
			ar: "٥ دقائق"
		},
		title: {
			en: "Sustainable Structures for the Next Century",
			ar: "هياكل مستدامة للقرن القادم"
		},
		excerpt: {
			en: "Designing resilient building envelopes that adapt dynamically to shifting microclimatic conditions.",
			ar: "تصميم أظرف بناء مرنة تتكيف ديناميكيًا مع الظروف المناخية المتغيرة."
		},
		coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "resilient-envelope",
				title: {
					en: "01. Resilient Envelope",
					ar: "٠١. الغلاف المرن"
				},
				content: {
					en: [
						"Smart facade assemblies reduce heating and cooling loads while offering occupants unobstructed connections to natural day lighting."
					],
					ar: [
						"تقلل الواجهات الذكية من أحمال التدفئة والتبريد مع منح الساكنين اتصالاً غير منقطع بالإضاءة الطبيعية."
					]
				}
			}
		]
	},
	{
		id: "future-of-mixed-use-urbanism",
		slug: "future-of-mixed-use-urbanism",
		category: "PRESS RELEASES",
		categoryLabel: {
			en: "PRESS RELEASE / URBAN PLANNING",
			ar: "بيان صحفي / التخطيط العمراني"
		},
		categoryTag: {
			en: "PRESS RELEASE",
			ar: "بيان صحفي"
		},
		date: "JUL 14, 2024",
		dateAr: "١٤ يوليو ٢٠٢٤",
		readTime: {
			en: "4 MIN",
			ar: "٤ دقائق"
		},
		title: {
			en: "The Future of Mixed-Use Urbanism in the MENA Region",
			ar: "مستقبل العمران متعدد الاستخدامات في منطقة الشرق الأوسط"
		},
		excerpt: {
			en: "A comprehensive roadmap for integrating civic amenities, high-density residential towers, and green public corridors.",
			ar: "خارطة طريق شاملة لدمج المرافق العامة والأبراج السكنية والممرات الخضراء."
		},
		coverImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "integrated-spaces",
				title: {
					en: "01. Integrated Spaces",
					ar: "٠١. مساحات متكاملة"
				},
				content: {
					en: [
						"By combining commercial hubs with pedestrian-first green corridors, future cities achieve superior livability metrics and sustainable transit synergy."
					],
					ar: [
						"من خلال الجمع بين المراكز التجارية والممرات الخضراء المخصصة للمشاة، تحقق مدن المستقبل مقاييس معيشة فائقة."
					]
				}
			}
		]
	},
	{
		id: "excellence-in-concrete-craftsmanship",
		slug: "excellence-in-concrete-craftsmanship",
		category: "AWARDS",
		categoryLabel: {
			en: "AWARDS / CRAFTSMANSHIP",
			ar: "جوائز / الحرفية"
		},
		categoryTag: {
			en: "AWARD",
			ar: "جائزة"
		},
		date: "JUN 20, 2024",
		dateAr: "٢٠ يونيو ٢٠٢٤",
		readTime: {
			en: "3 MIN",
			ar: "٣ دقائق"
		},
		title: {
			en: "Excellence in Concrete Craftsmanship Recognition",
			ar: "جائزة التميز في الحرفية الخرسانية"
		},
		excerpt: {
			en: "Honouring monumental facade execution and precision casting across key commercial and cultural projects.",
			ar: "تكريم تنفيذ الواجهات الصرحية والصب عالي الدقة عبر المشاريع التجارية والثقافية."
		},
		coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
		sections: [
			{
				id: "craftsmanship-overview",
				title: {
					en: "01. Craftsmanship Overview",
					ar: "٠١. نظرة عامة على الحرفية"
				},
				content: {
					en: [
						"Precision formwork and custom aggregate formulations create architectural concrete that stands as art in itself."
					],
					ar: [
						"تخلق القوالب الدقيقة وتركيبات الركام المخصصة خرسانة معمارية تقف كعمل فني بحد ذاتها."
					]
				}
			}
		]
	}
];

export function getMediaArticleById(id: string): MediaArticle | undefined {
	return MEDIA_ARTICLES.find(
		(article) => article.id.toLowerCase() === id.toLowerCase() || article.slug.toLowerCase() === id.toLowerCase()
	);
}
