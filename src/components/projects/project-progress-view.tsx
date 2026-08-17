import type { FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { ArrowLeft } from "lucide-react";

import { Link } from "@/components/localized-link";
import { Cta } from "@/components/home/cta";
import { getProjectDetailById, type ProjectDetailData } from "./project-detail-data";
import { ProjectProgressHero } from "./project-progress-hero";
import { ProjectStory } from "./project-progress-story";
import { ProjectProgressDashboard } from "./project-progress-dashboard";
import { ProjectMilestones } from "./project-progress-milestones";
import { ProjectSiteGallery } from "./project-progress-site-gallery";

interface ProjectProgressViewProps {
	projectId: string;
}

export const ProjectProgressView: FC<ProjectProgressViewProps> = ({ projectId }) => {
	const content = useIntlayer("project-detail");
	const { locale } = useLocale();
	const isArabic = locale === "ar";

	const project: ProjectDetailData = getProjectDetailById(projectId);

	// 404 GUARD: If project has no progress data or is not under construction
	if (!project || !project.isUnderConstruction || !project.progress) {
		return (
			<div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#0d0c0a] px-6 pt-32 pb-20 text-center text-white sm:px-12">
				<div className="mx-auto max-w-xl">
					<span className="font-serif text-6xl font-bold text-amber-400">404</span>
					<h1 className="mt-4 font-serif text-3xl font-normal text-white sm:text-4xl">
						{content.noProgressTitle.value}
					</h1>
					<p className="mt-4 font-sans text-sm leading-relaxed text-neutral-400">
						{content.noProgressDesc.value}
					</p>
					<div className="mt-8">
						<Link
							to={`/projects/${projectId}` as never}
							className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-8 py-3.5 font-sans text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-neutral-950"
						>
							<ArrowLeft className="size-4 rtl:rotate-180" />
							<span>{content.goToProject.value}</span>
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#f7f6f2] text-neutral-900">
			<ProjectProgressHero project={project} isArabic={isArabic} />
			<ProjectStory project={project} isArabic={isArabic} />
			<ProjectProgressDashboard project={project} isArabic={isArabic} />
			<ProjectMilestones project={project} isArabic={isArabic} />
			<ProjectSiteGallery project={project} isArabic={isArabic} />
			<Cta />
		</div>
	);
};