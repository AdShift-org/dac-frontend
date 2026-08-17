import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Timeline: FC = () => {
	const content = useIntlayer("about-timeline");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-tm-head"), { opacity: 0, y: 30 });
			gsap.set(q(".ab-tm-item"), { opacity: 0, y: 40 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-tm-head"), { opacity: 1, y: 0, duration: 0.9 });

			// The center line draws itself downward when in view
			gsap.fromTo(
				q(".ab-tm-line-fill"),
				{ scaleY: 0, transformOrigin: "top center" },
				{
					scaleY: 1,
					duration: 1.6,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 70%",
						once: true
					}
				}
			);

			// Milestones settle into place as the line reaches them
			gsap.to(
				q(".ab-tm-item"),
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.25,
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 70%",
						once: true
					}
				}
			);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#12110e] py-24 text-white sm:py-32">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="ab-tm-head text-center">
					{/*<span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
						— {content.label.value}
					</span>*/}
					<h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
						{content.heading.value}
					</h2>
					{/*<p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed font-light text-white/60 sm:text-sm">
						{content.subtitle.value}
					</p>*/}
				</div>

				<div className="relative mt-20">
					{/* Central vertical line for desktop */}
					<div className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/10 lg:block">
						<div className="ab-tm-line-fill absolute inset-0 bg-accent/80 shadow-[0_0_12px_rgba(209,160,84,0.8)]" />
					</div>

					<div className="space-y-16 lg:space-y-24">
						{content.milestones.map((item, index) => {
							const isEven = index % 2 === 0;

							return (
								<div
									key={item.year}
									className={`ab-tm-item grid items-center gap-8 lg:grid-cols-12 lg:gap-16`}
								>
									{/* Column 1 */}
									<div
										className={`lg:col-span-5 ${
											isEven
												? "order-1 text-start lg:text-end rtl:lg:text-start"
												: "order-2 lg:order-1"
										}`}
									>
										{isEven ? (
											<div>
												<span className="font-serif text-5xl font-light text-white/30 sm:text-6xl lg:text-7xl">
													{item.year}
												</span>
												<h3 className="mt-2 font-serif text-base font-normal tracking-widest uppercase sm:text-lg">
													{item.title.value}
												</h3>
												<p className="mt-3 text-xs leading-relaxed font-light text-white/70 sm:text-sm">
													{item.description.value}
												</p>
											</div>
										) : (
											<div className="group relative aspect-16/10 overflow-hidden rounded-sm border border-white/10 bg-neutral-900 shadow-2xl">
												<div
													className="absolute inset-0 bg-cover bg-center contrast-110 grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
													style={{
														backgroundImage: `url('${item.image}')`
													}}
												/>
												<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
											</div>
										)}
									</div>

									{/* Center node indicator */}
									<div className="order-2 hidden justify-center lg:col-span-2 lg:flex">
										<div className="relative flex size-6 items-center justify-center">
											<div className="size-3 rotate-45 border border-white bg-white/30 shadow-[0_0_12px_rgba(209,160,84,0.8)]" />
										</div>
									</div>

									{/* Column 2 */}
									<div
										className={`lg:col-span-5 ${
											isEven
												? "order-2 lg:order-3"
												: "order-1 text-start lg:order-3 rtl:lg:text-end"
										}`}
									>
										{isEven ? (
											<div className="group relative aspect-16/10 overflow-hidden rounded-sm border border-white/10 bg-neutral-900 shadow-2xl">
												<div
													className="absolute inset-0 bg-cover bg-center contrast-110 grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
													style={{
														backgroundImage: `url('${item.image}')`
													}}
												/>
												<div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
											</div>
										) : (
											<div>
												<span className="font-serif text-5xl font-light text-white/30 sm:text-6xl lg:text-7xl">
													{item.year}
												</span>
												<h3 className="mt-2 font-serif text-base font-normal tracking-widest text-white uppercase sm:text-lg">
													{item.title.value}
												</h3>
												<p className="mt-3 text-xs leading-relaxed font-light text-white/70 sm:text-sm">
													{item.description.value}
												</p>
											</div>
										)}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
