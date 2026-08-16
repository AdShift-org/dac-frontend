import { t, type Dictionary } from "intlayer";

const servicesListContent = {
	key: "services-list",
	content: {
		items: [
			{
				tag: t({
					en: "01 / SERVICES",
					ar: "٠١ / الخدمات"
				}),
				title: t({
					en: "Real Estate Developments",
					ar: "التطوير العقاري"
				}),
				description: t({
					en: "We create modern, sustainable commercial and residential spaces. We optimize market architecture and refine urban structures for every client, ensuring every development stands as a testament to holistic excellence, and enduring value.",
					ar: "نبتكر مساحات تجارية وسكنية حديثة ومستدامة. نعمل على تحسين العمارة وهيكلة المساحات الحضرية لكل عميل، مما يضمن أن يقف كل مشروع كشاهد على التميز الشامل والقيمة الدائمة."
				}),
				buttonText: t({
					en: "EXPLORE SERVICES",
					ar: "استكشف الخدمات"
				}),
				image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400",
				imageAlt: t({
					en: "Real Estate Developments Architecture",
					ar: "معمار التطوير العقاري"
				}),
				theme: "dark"
			},
			{
				tag: t({
					en: "02 / SERVICES",
					ar: "٠٢ / الخدمات"
				}),
				title: t({
					en: "General Contracting",
					ar: "المقاولات العامة"
				}),
				description: t({
					en: "Unapologetic precision in execution. We manage and execute complex builds from raw materials to final finishes, delivering ruthlessly practical elegance on time and within the tight frameworks of modern institutional demands.",
					ar: "دقة متناهية في التنفيذ. ندير وننفذ مشاريع البناء المعقدة من المواد الأولية وحتى التشطيبات النهائية، مقدمين أناقة عملية ودقيقة في الوقت المحدد ووفق أعلى المعايير المؤسسية الحديثة."
				}),
				buttonText: t({
					en: "EXPLORE SERVICES",
					ar: "استكشف الخدمات"
				}),
				image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400",
				imageAlt: t({
					en: "General Contracting Construction Site",
					ar: "موقع إنشاءات المقاولات العامة"
				}),
				theme: "light"
			},
			{
				tag: t({
					en: "03 / SERVICES",
					ar: "٠٣ / الخدمات"
				}),
				title: t({
					en: "Technical Works",
					ar: "الأعمال الفنية والكهروميكانيكية"
				}),
				description: t({
					en: "High-performance MEP engineering and specialized technical infrastructure engineered for modern architectural integrity, energy efficiency, and operational endurance.",
					ar: "أعمال كهروميكانيكية وبنية تحتية فنية متقدمة مصممة لتحقيق التكامل المعماري الحديث، وكفاءة الطاقة، والجاهزية التشغيلية المستدامة."
				}),
				buttonText: t({
					en: "EXPLORE SERVICES",
					ar: "استكشف الخدمات"
				}),
				image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400",
				imageAlt: t({
					en: "Technical Works and Engineering",
					ar: "الأعمال الفنية والهندسية"
				}),
				theme: "dark"
			},
			{
				tag: t({
					en: "04 / SERVICES",
					ar: "٠٤ / الخدمات"
				}),
				title: t({
					en: "Property Management",
					ar: "إدارة الممتلكات والمرافق"
				}),
				description: t({
					en: "End-to-end asset oversight, preventive facility engineering, and comprehensive lifecycle management to safeguard long-term real estate value.",
					ar: "إشراف شامل على الأصول، وهندسة صيانة وقائية، وإدارة متكاملة لدورة حياة العقار للحفاظ على القيمة الاستثمارية ورضا المستأجرين على المدى الطويل."
				}),
				buttonText: t({
					en: "EXPLORE SERVICES",
					ar: "استكشف الخدمات"
				}),
				image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400",
				imageAlt: t({
					en: "Property and Asset Management",
					ar: "إدارة الممتلكات والمرافق"
				}),
				theme: "light"
			}
		]
	}
} satisfies Dictionary;

export default servicesListContent;
