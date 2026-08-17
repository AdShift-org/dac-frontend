import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { ExternalLink } from "lucide-react";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectSiteGalleryProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectSiteGallery: FC<ProjectSiteGalleryProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");
	const photos = project.progress!.sitePhotos;

	return (
		<section className="border-t border-neutral-300 bg-[#f7f6f2] px-6 py-24 sm:px-12 sm:py-32">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col justify-between gap-4 border-b border-neutral-300 pb-6 sm:flex-row sm:items-end">
					<div>
						<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-400 uppercase">
							{content.siteDocumentation.value}
						</span>
						<h2 className="mt-2 font-serif text-3xl font-normal text-neutral-950 sm:text-4xl">
							{content.siteGallery.value}
						</h2>
					</div>

					<button
						type="button"
						className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-widest text-neutral-900 uppercase transition-colors hover:text-amber-600"
					>
						<span>{content.viewAllPhotos.value}</span>
						<ExternalLink className="size-3.5" />
					</button>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{photos.map((photo, idx) => (
						<div
							key={idx}
							className={`group relative overflow-hidden rounded-xs bg-neutral-900 shadow-sm ${
								idx === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
							}`}
						>
							<img
								src={photo.image}
								alt={isArabic ? photo.caption.ar : photo.caption.en}
								className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />

							<div className="absolute inset-x-0 bottom-0 p-6 text-white">
								{photo.tag && (
									<span className="font-sans text-[10px] font-semibold tracking-widest text-amber-400 uppercase">
										{photo.tag}
									</span>
								)}
								<p className="mt-1 font-sans text-xs leading-relaxed text-neutral-200 sm:text-sm">
									{isArabic ? photo.caption.ar : photo.caption.en}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};