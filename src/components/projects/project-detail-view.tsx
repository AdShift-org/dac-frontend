import type { FC } from "react";

import { useLocale } from "react-intlayer";

import { Cta } from "@/components/home/cta";
import { getProjectDetailById, type ProjectDetailData } from "./project-detail-data";
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

	const project: ProjectDetailData = getProjectDetailById(projectId);

	return (
		<div className="min-h-screen bg-[#f7f6f2] text-neutral-900">
			<ProjectDetailHero project={project} isArabic={isArabic} />
			<ProjectGallery project={project} isArabic={isArabic} />
			<ProjectOverview project={project} isArabic={isArabic} />
			<ProjectTimeline project={project} isArabic={isArabic} />
			<ProjectAmenities project={project} isArabic={isArabic} />
			<ProjectVideos project={project} isArabic={isArabic} />
			<Cta />
		</div>
	);
};