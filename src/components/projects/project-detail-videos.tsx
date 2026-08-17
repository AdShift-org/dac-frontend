import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Play } from "lucide-react";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectVideosProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectVideos: FC<ProjectVideosProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");

	return (
		<section className="border-t border-neutral-300 bg-[#f7f6f2] px-6 py-20 sm:px-12 sm:py-28">
			<div className="mx-auto max-w-7xl">
				<div>
					<h2 className="font-serif text-3xl font-bold tracking-tight text-neutral-950 uppercase sm:text-4xl">
						{content.projectVideos.value}
					</h2>
					<p className="mt-2 font-sans text-xs font-semibold tracking-widest text-neutral-500 uppercase">
						{content.projectVideosSubtitle.value}
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
					{project.videos.map((vid, idx) => (
						<div key={idx} className="group flex flex-col">
							<div className="relative aspect-16/9 overflow-hidden rounded-xs bg-neutral-900">
								<img
									src={vid.thumbnail}
									alt={isArabic ? vid.title.ar : vid.title.en}
									className="size-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
								/>
								<div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="flex size-14 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-xs transition-transform group-hover:scale-110">
										<Play className="size-6 fill-white text-white" />
									</div>
								</div>
							</div>

							<div className="mt-4 flex flex-col">
								<span className="font-sans text-[11px] font-semibold tracking-widest text-neutral-400 uppercase">
									{isArabic ? vid.tag.ar : vid.tag.en}
								</span>
								<h4 className="mt-1 font-serif text-lg font-normal text-neutral-900 sm:text-xl">
									{isArabic ? vid.title.ar : vid.title.en}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};