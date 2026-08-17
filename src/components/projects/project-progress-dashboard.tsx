import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectProgressDashboardProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectProgressDashboard: FC<ProjectProgressDashboardProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");
	const progress = project.progress!;

	return (
		<section className="bg-[#0b0a08] px-6 py-20 text-white sm:px-12 sm:py-28">
			<div className="mx-auto max-w-7xl">
				<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
					{content.projectStatus.value}
				</span>

				<div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
					<div className="flex flex-col justify-between border border-neutral-800 bg-[#141311] p-8 sm:p-10 lg:col-span-6">
						<div>
							<h3 className="font-serif text-xl font-bold tracking-tight text-white uppercase sm:text-2xl">
								{isArabic ? progress.heading.ar : progress.heading.en}
							</h3>
							<span className="mt-2 block font-sans text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
								{isArabic ? progress.lastUpdated.ar : progress.lastUpdated.en}
							</span>
						</div>

						<div className="mt-12">
							<div className="font-serif text-6xl font-normal text-white sm:text-7xl">
								{progress.overallPercentage}%
							</div>
							<div className="mt-4 flex items-center justify-between text-xs font-semibold tracking-widest text-neutral-400 uppercase">
								<div className="h-1.5 w-full overflow-hidden bg-neutral-800">
									<div
										className="h-full bg-white transition-all duration-1000"
										style={{ width: `${progress.overallPercentage}%` }}
									/>
								</div>
							</div>
							<div className="mt-2 text-end font-sans text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">
								{content.overallProgress.value}
							</div>
						</div>
					</div>

					<div className="border border-neutral-800 bg-[#141311] p-8 sm:p-10 lg:col-span-6">
						<h3 className="font-sans text-xs font-semibold tracking-[0.2em] text-neutral-300 uppercase">
							{content.workpackageProgress.value}
						</h3>

						<div className="mt-8 flex flex-col gap-6">
							{progress.workpackages.map((wp, idx) => (
								<div key={idx} className="flex flex-col">
									<div className="flex items-center justify-between font-sans text-xs font-medium text-neutral-300">
										<span>{isArabic ? wp.name.ar : wp.name.en}</span>
										<span className="font-mono text-neutral-400">{wp.progress}%</span>
									</div>
									<div className="mt-2 h-1 w-full overflow-hidden bg-neutral-800">
										<div
											className="h-full bg-neutral-400 transition-all duration-1000"
											style={{ width: `${wp.progress}%` }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};