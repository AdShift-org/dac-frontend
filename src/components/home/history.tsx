import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer, useLocale } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const History: FC = () => {
	const content = useIntlayer("home-history");
	const { locale } = useLocale();

	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Initial hidden states
			gsap.set(q(".hs-sub"), { opacity: 0, letterSpacing: "0.5em" });
			gsap.set(q(".hs-head h2"), { clipPath: "inset(0 100% 0 0)" });
			gsap.set(q(".hs-pin"), { opacity: 0, scale: 0, rotation: 45 });
			gsap.set(q(".hs-stem"), { scaleY: 0, transformOrigin: "bottom center" });
			gsap.set(q(".hs-card"), { opacity: 0, y: 48 });
			gsap.set(q(".hs-year"), { opacity: 0, y: 20, scale: 0.9 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			// Subtitle letter-spacing settles
			tl.to(q(".hs-sub"), { opacity: 1, letterSpacing: "0.25em", duration: 1 })
				// Heading draws in with a wipe
				.to(q(".hs-head h2"), { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power4.out" }, "-=0.7")
				// Pins drop in and stems grow upward from the rail
				.to(
					q(".hs-pin"),
					{ opacity: 1, scale: 1, rotation: 45, duration: 0.5, stagger: 0.12, ease: "back.out(2)" },
					"<"
				)
				.to(q(".hs-stem"), { scaleY: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }, "<")
				// Cards rise out of the rail
				.to(q(".hs-card"), { opacity: 1, y: 0, duration: 0.8, stagger: 0.14 }, "-=0.4")
				// Years pop in last
				.to(q(".hs-year"), { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.14, ease: "power2.out" }, "-=0.5");

			// Re-measure once the hero unlocks scrolling / assets settle
			const onLoad = () => ScrollTrigger.refresh();
			window.addEventListener("load", onLoad);
			return () => window.removeEventListener("load", onLoad);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#12110e] py-28 text-white">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="hs-head flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
					<h2 className="font-sans text-3xl font-extrabold tracking-wider text-white uppercase sm:text-4xl">
						{content.heading.value}
					</h2>
					<p className="hs-sub font-sans text-xs tracking-[0.25em] text-accent/80 uppercase">
						{content.subtitle.value}
					</p>
				</div>

				<div className="hs-grid mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{content.milestones.map((milestone) => (
						<div key={milestone.year} className="group relative flex flex-col">
							{/* Pin / Indicator above card */}
							<div className="mb-4 flex flex-col items-center">
								<div className="hs-pin size-2 rotate-45 bg-accent shadow-[0_0_8px_rgba(209,160,84,0.6)]" />
								<div className="hs-stem mt-1 h-6 w-px bg-accent/40" />
							</div>

							{/* Milestone Card */}
							<div className="hs-card flex flex-1 flex-col rounded-sm border border-white/5 bg-[#1a1814] p-8 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-[#201e19]">
								<p className="hs-year font-sans text-3xl font-bold tracking-tight text-white/90 transition-colors group-hover:text-accent sm:text-4xl">
									{milestone.year}
								</p>
								<p className="mt-2 font-sans text-xs font-semibold tracking-widest text-accent uppercase">
									{milestone.title.value}
								</p>
								<p className="mt-4 text-xs leading-relaxed font-light text-white/60 sm:text-sm">
									{milestone.description.value}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
