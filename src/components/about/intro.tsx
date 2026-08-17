import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Compass, ShieldCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cardIcons = [Compass, ShieldCheck, Award];

export const Intro: FC = () => {
	const content = useIntlayer("about-intro");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-in-label"), { opacity: 0, letterSpacing: "0.5em" });
			gsap.set(q(".ab-in-head"), { opacity: 0, y: 30 });
			gsap.set(q(".ab-in-text"), { opacity: 0, y: 25 });
			gsap.set(q(".ab-in-badges > div"), { opacity: 0, scale: 0.9 });
			gsap.set(q(".ab-in-card"), { y: 80, rotationX: 10, transformOrigin: "50% 100%" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-in-label"), { opacity: 1, letterSpacing: "0.25em", duration: 0.9 })
				.to(q(".ab-in-head"), { opacity: 1, y: 0, duration: 1 }, "-=0.5")
				.to(q(".ab-in-text"), { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
				.to(
					q(".ab-in-badges > div"),
					{ opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
					"-=0.4"
				)
				.to(q(".ab-in-card"), { y: 0, rotationX: 0, duration: 0.9, stagger: 0.15 }, "-=0.3");
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#f9f9f8] py-24 text-neutral-900 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				{/* Top narrative grid */}
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<span className="ab-in-label font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
							— {content.label.value}
						</span>
						<h2 className="ab-in-head mt-4 font-sans text-3xl leading-[1.1] font-extrabold tracking-tight text-neutral-900 uppercase sm:text-4xl lg:text-5xl">
							{content.heading.value}
						</h2>
					</div>

					<div className="flex flex-col justify-between lg:col-span-7">
						<div className="ab-in-text space-y-4 text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
							<p>{content.p1.value}</p>
							<p>{content.p2.value}</p>
						</div>

						{/* Highlights / Badges */}
						<div className="ab-in-badges mt-8 flex flex-wrap items-center gap-6 border-t border-neutral-200/80 pt-6">
							<div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-neutral-800 uppercase">
								<Sparkles className="size-4 text-accent" />
								<span>{content.highlights.heritage.value}</span>
							</div>
							<div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-neutral-800 uppercase">
								<Sparkles className="size-4 text-accent" />
								<span>{content.highlights.precision.value}</span>
							</div>
							<div className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-neutral-800 uppercase">
								<Sparkles className="size-4 text-accent" />
								<span>{content.highlights.clientCentric.value}</span>
							</div>
						</div>
					</div>
				</div>

				{/* 3 Dark Cards: Precision, Quality, Trust */}
				<div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{content.cards.map((card, index) => {
						const IconComponent = cardIcons[index] || Compass;
						return (
							<div
								key={index}
								className="ab-in-card group relative flex flex-col justify-between rounded-sm border border-neutral-800/20 bg-[#161411] p-8 text-white transition-colors duration-300 hover:border-accent/40 hover:bg-[#1f1c17] hover:shadow-xl sm:p-10"
							>
								<div>
									<div className="mb-6 inline-flex size-12 items-center justify-center rounded-sm bg-neutral-900/80 text-accent transition-colors group-hover:bg-accent group-hover:text-neutral-950">
										<IconComponent className="size-6" />
									</div>
									<h3 className="font-sans text-lg font-bold tracking-wider text-white uppercase transition-colors group-hover:text-accent sm:text-xl">
										{card.title.value}
									</h3>
									<p className="mt-4 text-xs leading-relaxed font-light text-white/60 sm:text-sm">
										{card.description.value}
									</p>
								</div>
								<div className="mt-8 h-0.5 w-8 bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
