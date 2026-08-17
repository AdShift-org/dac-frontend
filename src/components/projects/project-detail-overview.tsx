import type { FC } from "react";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectOverviewProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectOverview: FC<ProjectOverviewProps> = ({ project, isArabic }) => {
	return (
		<section className="border-t border-neutral-300/80 bg-[#f7f6f2] px-6 py-20 sm:px-12 sm:py-28">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-5">
						<h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 uppercase sm:text-4xl md:text-5xl">
							{isArabic ? project.overviewTitle.ar : project.overviewTitle.en}
						</h2>
					</div>

					<div className="flex flex-col gap-6 lg:col-span-7">
						{(isArabic
							? project.overviewParagraphs.ar
							: project.overviewParagraphs.en
						).map((para, idx) => (
							<p
								key={idx}
								className="font-sans text-sm leading-relaxed text-neutral-700 sm:text-base"
							>
								{para}
							</p>
						))}
					</div>
				</div>

				<div className="mt-16 border-t border-neutral-300/80 pt-10">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
						{project.metrics.map((metric, idx) => (
							<div key={idx} className="flex flex-col">
								<span className="font-sans text-xs font-semibold tracking-wider text-neutral-500 uppercase">
									{isArabic ? metric.label.ar : metric.label.en}
								</span>
								<span className="mt-2 font-serif text-3xl font-medium text-neutral-950 sm:text-4xl md:text-5xl">
									{metric.value}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};