import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { ArrowUpRight, Play } from "lucide-react";

import { Link } from "@/components/localized-link";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectDetailHeroProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectDetailHero: FC<ProjectDetailHeroProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");

	return (
		<section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden bg-black text-white sm:min-h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
				style={{ backgroundImage: `url('${project.heroImage}')` }}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />

			<div className="absolute inset-0 z-10 flex items-center justify-center">
				<button
					type="button"
					aria-label="Play project video"
					className="group flex size-20 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-amber-400/80 hover:bg-black/60 sm:size-24"
				>
					<Play className="size-8 fill-white/80 text-white transition-transform group-hover:scale-110 sm:size-10" />
				</button>
			</div>

			<div className="pt-28" />

			<div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-14 sm:px-12 sm:pb-20">
				<div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
					<div className="max-w-3xl">
						<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-300 uppercase">
							{isArabic ? project.categoryBreadcrumb.ar : project.categoryBreadcrumb.en}
						</span>

						<h1 className="mt-4 font-serif text-4xl font-normal tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
							{isArabic ? project.title.ar : project.title.en}
						</h1>

						<p className="mt-4 max-w-2xl font-sans text-xs leading-relaxed font-light text-neutral-300 sm:text-sm md:text-base">
							{isArabic ? project.tagline.ar : project.tagline.en}
						</p>
					</div>

					{project.isUnderConstruction && (
						<div className="shrink-0">
							<Link
								to={`/projects/${project.id}/progress` as never}
								className="group inline-flex items-center gap-3 border border-white/30 bg-black/60 px-6 py-3.5 font-sans text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-black/80 hover:text-amber-300"
							>
								<span className="size-2 rounded-full bg-amber-400 animate-pulse" />
								<span>{content.underConstructionHeroBtn.value}</span>
								<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90 rtl:group-hover:-translate-x-0.5" />
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};