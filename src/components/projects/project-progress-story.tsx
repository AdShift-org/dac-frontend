import type { FC } from "react";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectStoryProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectStory: FC<ProjectStoryProps> = ({ project, isArabic }) => {
	return (
		<section className="bg-[#f7f6f2] px-6 py-20 sm:px-12 sm:py-28">
			<div className="mx-auto max-w-4xl">
				<h2 className="font-serif text-3xl font-bold text-neutral-950 sm:text-4xl md:text-5xl">
					{isArabic ? project.overviewTitle.ar : project.overviewTitle.en}
				</h2>

				<div className="mt-8 flex flex-col gap-6 font-sans text-sm leading-relaxed text-neutral-700 sm:text-base">
					{(isArabic
						? project.overviewParagraphs.ar
						: project.overviewParagraphs.en
					).map((para, idx) => (
						<p key={idx}>{para}</p>
					))}
				</div>
			</div>
		</section>
	);
};