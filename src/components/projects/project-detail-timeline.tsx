import { useRef, useState, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { ProjectDetailData } from "./project-detail-data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProjectTimelineProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

export const ProjectTimeline: FC<ProjectTimelineProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");
	const { locale } = useLocale();
	const [active, setActive] = useState(0);

	const containerRef = useRef<HTMLDivElement>(null);
	const pinnedRef = useRef<HTMLDivElement>(null);
	const lineFillRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<ScrollTrigger | null>(null);

	const milestones = project.timelineMilestones;

	useGSAP(
		() => {
			if (!containerRef.current || !pinnedRef.current || milestones.length <= 1) return;

			const totalMilestones = milestones.length;

			const trigger = ScrollTrigger.create({
				trigger: containerRef.current,
				start: "top top",
				end: () => `+=${(totalMilestones - 1) * 80}vh`,
				pin: pinnedRef.current,
				pinSpacing: true,
				scrub: 0.4,
				onUpdate: (self) => {
					// Scrub active index based on scroll progress
					const index = Math.min(
						Math.floor(self.progress * totalMilestones),
						totalMilestones - 1
					);
					setActive(index);

					// Animate vertical progress line fill smoothly
					if (lineFillRef.current) {
						gsap.to(lineFillRef.current, {
							scaleY: self.progress,
							transformOrigin: "top center",
							duration: 0.5,
							ease: "none",
							overwrite: "auto"
						});
					}
				}
			});

			triggerRef.current = trigger;

			return () => {
				trigger.kill();
				triggerRef.current = null;
			};
		},
		{ scope: containerRef, dependencies: [locale, milestones.length] }
	);

	const handleSeek = (index: number) => {
		const trigger = triggerRef.current;
		if (!trigger) {
			setActive(index);
			return;
		}

		const totalMilestones = milestones.length;
		const targetProgress =
			index === 0
				? 0
				: index === totalMilestones - 1
					? 0.99
					: (index + 0.5) / totalMilestones;

		const targetScroll = trigger.start + (trigger.end - trigger.start) * targetProgress;

		window.scrollTo({
			top: targetScroll,
			behavior: "smooth"
		});
	};

	return (
		<div ref={containerRef} className="relative bg-[#09090b] text-white">
			<section
				ref={pinnedRef}
				className="flex min-h-dvh w-full flex-col justify-center px-4 py-8 sm:px-8 sm:py-12 md:px-12 lg:py-16"
			>
				<div className="mx-auto flex w-full max-w-7xl flex-col justify-center">
					{/* Header */}
					<header className="mb-6 flex items-baseline justify-between border-b border-white/10 pb-4 sm:mb-10 sm:pb-6 lg:mb-12">
						<h2 className="font-serif text-xl font-semibold tracking-widest text-white uppercase sm:text-2xl md:text-3xl lg:text-4xl">
							{project.timelineTitle?.[isArabic ? "ar" : "en"] ||
								content.projectTimeline.value}
						</h2>
						<span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase sm:text-xs">
							{String(milestones[active]?.step ?? "").split("/")[0]}
							<span className="text-neutral-600"> / {milestones.length}</span>
						</span>
					</header>

					{/* Scrubbing timeline grid */}
					<div className="grid grid-cols-1 items-center gap-6 md:gap-8 lg:grid-cols-12 lg:gap-16">
						{/* Left: Timeline milestones list */}
						<div className="relative order-2 lg:order-1 lg:col-span-6">
							{/* Track line */}
							<div className="absolute top-2 bottom-2 left-2 w-px bg-white/15 sm:top-3 sm:bottom-3 sm:left-2.5 rtl:right-2 rtl:left-auto sm:rtl:right-2.5">
								{/* Active fill line */}
								<div
									ref={lineFillRef}
									className="size-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]"
									style={{
										transform: "scaleY(0)",
										transformOrigin: "top center"
									}}
								/>
							</div>

							<div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
								{milestones.map((item, i) => {
									const isActive = active === i;
									const isPast = active > i;

									return (
										<button
											type="button"
											key={item.step}
											onClick={() => handleSeek(i)}
											aria-label={`Seek to ${isArabic ? item.title.ar : item.title.en}`}
											className={`group relative flex cursor-pointer items-start gap-4 ps-7 text-start transition-all duration-300 sm:gap-6 sm:ps-8 rtl:ps-0 rtl:pe-7 sm:rtl:ps-0 sm:rtl:pe-8 ${
												isActive
													? "translate-x-1 opacity-100 rtl:-translate-x-1"
													: isPast
														? "opacity-45 hover:opacity-85"
														: "opacity-30 hover:opacity-75"
											}`}
										>
											{/* Node Square Marker */}
											<div
												className={`absolute top-1 left-0.5 flex size-3 items-center justify-center transition-all duration-300 sm:top-1.5 sm:left-1 sm:size-3.5 rtl:right-0.5 rtl:left-auto sm:rtl:right-1 ${
													isActive
														? "scale-110 border border-white bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
														: isPast
															? "border border-white/60 bg-white/40 group-hover:border-white"
															: "border border-white/25 bg-[#09090b] group-hover:border-white/50"
												}`}
											/>

											{/* Content */}
											<div className="flex flex-col">
												<span
													className={`font-sans text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 sm:text-[11px] ${
														isActive
															? "text-neutral-300"
															: "text-neutral-500 group-hover:text-neutral-400"
													}`}
												>
													{item.date ?? item.step}
												</span>
												<h3
													className={`mt-0.5 font-serif text-base font-bold tracking-wider uppercase transition-colors duration-300 sm:mt-1 sm:text-lg md:text-xl lg:text-2xl ${
														isActive
															? "text-white"
															: "text-neutral-400 group-hover:text-neutral-200"
													}`}
												>
													{isArabic ? item.title.ar : item.title.en}
												</h3>
												<p
													className={`mt-1 line-clamp-2 font-sans text-xs leading-relaxed transition-colors duration-300 sm:mt-2 sm:line-clamp-3 sm:text-sm lg:line-clamp-none ${
														isActive
															? "text-neutral-300"
															: "text-neutral-500 group-hover:text-neutral-400"
													}`}
												>
													{isArabic
														? item.description.ar
														: item.description.en}
												</p>
											</div>
										</button>
									);
								})}
							</div>
						</div>

						{/* Right: Associated Image with smooth reveal/crossfade */}
						<div className="order-1 lg:order-2 lg:col-span-6">
							<div className="relative aspect-16/9 w-full overflow-hidden rounded-sm border border-white/10 bg-neutral-950 shadow-2xl sm:aspect-16/10 lg:aspect-4/3">
								{milestones.map((item, i) => {
									const isCurrent = active === i;
									return (
										<img
											key={item.step}
											src={item.image ?? project.timelineImage}
											alt={isArabic ? item.title.ar : item.title.en}
											loading={i === 0 ? "eager" : "lazy"}
											className={`absolute inset-0 size-full object-cover object-center transition-all duration-700 ease-out ${
												isCurrent
													? "scale-100 opacity-100 filter-none"
													: "pointer-events-none scale-105 opacity-0"
											}`}
										/>
									);
								})}

								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

								{/* Bottom caption on image */}
								<div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
									<p className="font-serif text-xs font-medium tracking-wide text-white uppercase sm:text-sm md:text-base">
										{isArabic
											? milestones[active]?.title.ar
											: milestones[active]?.title.en}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
