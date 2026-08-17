import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { CheckCircle2, CircleDot, Clock } from "lucide-react";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectMilestonesProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectMilestones: FC<ProjectMilestonesProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");
	const milestones = project.progress!.journeyMilestones;

	return (
		<section className="bg-[#f7f6f2] px-6 py-24 sm:px-12 sm:py-32">
			<div className="mx-auto max-w-7xl">
				<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
					{content.timelessJourney.value}
				</span>
				<h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl">
					{content.projectMilestones.value}
				</h2>

				<div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
					{milestones.map((node, idx) => {
						const isDone = node.status === "completed";
						const isOngoing = node.status === "in-progress";

						return (
							<div key={idx} className="group flex flex-col items-center text-center">
								<div className="relative flex items-center justify-center">
									<div
										className={`flex size-12 items-center justify-center rounded-full border transition-transform group-hover:scale-105 ${
											isDone
												? "border-amber-500/40 bg-amber-100 text-amber-600"
												: isOngoing
													? "border-neutral-900 bg-neutral-900 text-white"
													: "border-neutral-300 bg-white text-neutral-400"
										}`}
									>
										{isDone ? (
											<CheckCircle2 className="size-5" />
										) : isOngoing ? (
											<Clock className="size-5" />
										) : (
											<CircleDot className="size-5" />
										)}
									</div>
								</div>

								<span className="mt-4 font-sans text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
									{node.step}
								</span>
								<h4 className="mt-1 font-serif text-sm font-bold text-neutral-900 sm:text-base">
									{isArabic ? node.title.ar : node.title.en}
								</h4>
								<span className="mt-1 font-sans text-xs text-neutral-500">
									{isArabic ? node.description.ar : node.description.en}
								</span>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};