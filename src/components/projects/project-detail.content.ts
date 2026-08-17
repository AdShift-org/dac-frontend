import { t, type Dictionary } from "intlayer";

const projectDetailContent = {
	key: "project-detail",
	content: {
		underConstructionHeroBtn: t({
			en: "UNDER CONSTRUCTION",
			ar: "قيد الإنشاء"
		}),
		viewConstructionProgress: t({
			en: "VIEW CONSTRUCTION PROGRESS",
			ar: "عرض تقدم أعمال البناء"
		}),
		projectGallery: t({
			en: "Project Gallery",
			ar: "معرض المشروع"
		}),
		projectTimeline: t({
			en: "PROJECT TIMELINE",
			ar: "الجدول الزمني للمشروع"
		}),
		curatedAmenities: t({
			en: "Curated Lifestyle Amenities",
			ar: "مرافق وخدمات استثنائية"
		}),
		projectVideos: t({
			en: "Project videos",
			ar: "فيديوهات المشروع"
		}),
		projectVideosSubtitle: t({
			en: "COMPREHENSIVE WALKTHROUGH AND DETAILED PROJECT VIDEOS.",
			ar: "جولة شاملة وتغطية مرئية مفصلة للمشروع."
		}),
		backToProjects: t({
			en: "Back to Projects",
			ar: "العودة للمشاريع"
		}),
		backToProjectDetail: t({
			en: "Back to Project Overview",
			ar: "العودة لصفحة المشروع"
		}),
		projectStatus: t({
			en: "PROJECT STATUS",
			ar: "حالة المشروع"
		}),
		overallProgress: t({
			en: "OVERALL PROGRESS",
			ar: "التقدم الإجمالي"
		}),
		workpackageProgress: t({
			en: "WORKPACKAGE PROGRESS",
			ar: "تقدم حزم العمل"
		}),
		timelessJourney: t({
			en: "TIMELESS JOURNEY",
			ar: "مسار الإنجاز"
		}),
		projectMilestones: t({
			en: "Project Milestones",
			ar: "المحطات الرئيسية"
		}),
		siteDocumentation: t({
			en: "SITE DOCUMENTATION",
			ar: "التوثيق الميداني"
		}),
		siteGallery: t({
			en: "Site Gallery",
			ar: "معرض صور الموقع"
		}),
		viewAllPhotos: t({
			en: "VIEW ALL (24)",
			ar: "عرض الكل (٢٤)"
		}),
		noProgressTitle: t({
			en: "No Construction Progress Found",
			ar: "لا يوجد تقدم إنشاء لهذا المشروع"
		}),
		noProgressDesc: t({
			en: "This project is not currently under construction or has already reached final completion.",
			ar: "هذا المشروع ليس قيد الإنشاء حالياً أو تم اكتماله وتسليمه بالكامل."
		}),
		goToProject: t({
			en: "Return to Project Details",
			ar: "العودة إلى تفاصيل المشروع"
		})
	}
} satisfies Dictionary;

export default projectDetailContent;
