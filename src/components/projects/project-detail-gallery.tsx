import { useCallback, useRef, useState, type FC, type KeyboardEvent, type PointerEvent } from "react";

import { Dialog } from "@base-ui/react/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useIntlayer } from "react-intlayer";

import type { ProjectDetailData } from "./project-detail-data";

interface ProjectGalleryProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectGallery: FC<ProjectGalleryProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");
	const [active, setActive] = useState(-1);

	const images = project.galleryImages;
	const show = active >= 0 && active < images.length;
	const current = show ? images[active] : null;

	const prev = useCallback(
		() => setActive((i) => (i <= 0 ? images.length - 1 : i - 1)),
		[images.length]
	);
	const next = useCallback(
		() => setActive((i) => (i >= images.length - 1 ? 0 : i + 1)),
		[images.length]
	);

	// ponytail: lightweight drag-to-scrub on the main image. Swap pointer delta for an
	// inertial/fling animation if it ever matters.
	const drag = useRef<{ startX: number } | null>(null);
	const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
		drag.current = { startX: e.clientX };
	};
	const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
		if (!drag.current) return;
		const dx = e.clientX - drag.current.startX;
		drag.current = null;
		if (Math.abs(dx) < 60) return;
		if (dx < 0) next();
		else prev();
	};

	const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "ArrowLeft") prev();
		else if (e.key === "ArrowRight") next();
	};

	return (
		<section className="mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
			<div className="flex items-center justify-between border-b border-neutral-300 pb-6">
				<h2 className="font-serif text-3xl font-normal text-neutral-900 sm:text-4xl">
					{content.projectGallery.value}
				</h2>
			</div>

			<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{images.map((item, idx) => (
					<button
						key={item.image}
						type="button"
						onClick={() => setActive(idx)}
						aria-label={isArabic ? item.alt.ar : item.alt.en}
						className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xs bg-neutral-900 shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50"
					>
						<img
							src={item.image}
							alt={isArabic ? item.alt.ar : item.alt.en}
							className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
						<div className="absolute right-4 bottom-4 rounded-full bg-black/70 px-3 py-1 font-sans text-xs font-semibold tracking-wider text-white backdrop-blur-xs">
							{item.indexTag}
						</div>
					</button>
				))}
			</div>

			<Dialog.Root open={show} onOpenChange={(open) => !open && setActive(-1)}>
				<Dialog.Portal>
					<Dialog.Backdrop className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" />
					<Dialog.Popup
						onKeyDown={onKeyDown}
						className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent outline-none"
					>
						<Dialog.Title className="sr-only">{content.projectGallery.value}</Dialog.Title>

						<Dialog.Close
							aria-label="Close"
							className="absolute top-5 right-5 z-10 size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
						>
							<X className="size-6" />
						</Dialog.Close>

						{current && (
							<button
								type="button"
								aria-label="Previous image"
								onClick={prev}
								className="absolute top-1/2 left-4 z-10 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
							>
								<ChevronLeft className="size-6" />
							</button>
						)}
						{current && (
							<button
								type="button"
								aria-label="Next image"
								onClick={next}
								className="absolute top-1/2 right-4 z-10 hidden size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
							>
								<ChevronRight className="size-6" />
							</button>
						)}

						{current && (
							<div
								className="flex max-h-full w-full touch-none flex-col items-center justify-center px-6 select-none"
								onPointerDown={onPointerDown}
								onPointerUp={onPointerUp}
							>
								<figure className="flex max-h-[80vh] max-w-5xl flex-col items-center">
									<img
										src={current.image}
										alt={isArabic ? current.alt.ar : current.alt.en}
										draggable={false}
										className="max-h-[70vh] w-auto max-w-full rounded-xs object-contain shadow-2xl"
									/>
									<figcaption className="mt-5 font-sans text-sm tracking-wide text-neutral-300">
										{isArabic ? current.alt.ar : current.alt.en}
									</figcaption>
								</figure>
							</div>
						)}

						{/* ponytail: native horizontal scroll = touch scrub for free */}
						<div className="absolute bottom-0 left-0 w-full overflow-x-auto bg-black/40 px-6 py-4">
							<div className="flex justify-center gap-3">
								{images.map((item, idx) => (
									<button
										key={item.image}
										type="button"
										onClick={() => setActive(idx)}
										aria-label={isArabic ? item.alt.ar : item.alt.en}
										className={`size-16 shrink-0 cursor-pointer overflow-hidden rounded-xs transition-opacity ${
											idx === active ? "opacity-100 ring-2 ring-white" : "opacity-50 hover:opacity-80"
										}`}
									>
										<img
											src={item.image}
											alt=""
											draggable={false}
											className="size-full object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{show && (
							<div className="absolute top-5 left-1/2 -translate-x-1/2 font-sans text-sm tracking-widest text-white/80">
								{String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
							</div>
						)}
					</Dialog.Popup>
				</Dialog.Portal>
			</Dialog.Root>
		</section>
	);
};