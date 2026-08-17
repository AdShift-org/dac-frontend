import type { FC } from "react";

import { useLocale } from "react-intlayer";

import { Cta } from "@/components/home/cta";
import { useCmsData } from "@/lib/cms";
import { getProjectDetail, type ProjectDetailData } from "./project-detail-data";
import { ProjectDetailHero } from "./project-detail-hero";
import { ProjectGallery } from "./project-detail-gallery";
import { ProjectOverview } from "./project-detail-overview";
import { ProjectTimeline } from "./project-detail-timeline";
import { ProjectAmenities } from "./project-detail-amenities";
import { ProjectVideos } from "./project-detail-videos";

interface ProjectDetailViewProps {
	projectId: string;
}

export const ProjectDetailView: FC<ProjectDetailViewProps> = ({ projectId }) => {
	const { locale } = useLocale();
	const isArabic = locale === "ar";

	const { projects } = useCmsData();
	const apiProject = (projects ?? []).find((p) => p.en.slug === projectId || p.ar.slug === projectId);

	const project: ProjectDetailData = getProjectDetail(projectId, apiProject);

	const hasOverview =
		project.overviewParagraphs.en.length > 0 ||
		project.overviewParagraphs.ar.length > 0 ||
		project.metrics.length > 0;

	return (
		<div className="min-h-screen bg-[#f7f6f2] text-neutral-900">
			<ProjectDetailHero project={project} isArabic={isArabic} />
			{project.galleryImages.length > 0 && <ProjectGallery project={project} isArabic={isArabic} />}
			{hasOverview && <ProjectOverview project={project} isArabic={isArabic} />}
			{project.timelineMilestones.length > 0 && <ProjectTimeline project={project} isArabic={isArabic} />}
			{project.amenities.length > 0 && <ProjectAmenities project={project} isArabic={isArabic} />}
			{project.videos.length > 0 && <ProjectVideos project={project} isArabic={isArabic} />}
			<Cta />
		</div>
	);
};