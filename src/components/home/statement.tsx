import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Calendar, Globe } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Statement: FC = () => {
	const content = useIntlayer("home-statement");

	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Initial hidden states (applied on mount; timeline reveals on viewport entry)
			gsap.set(q(".st-label"), { opacity: 0, letterSpacing: "1.5em" });
			gsap.set(q(".st-head span"), { clipPath: "inset(0 0 100% 0)", y: 40 });
			gsap.set(q(".st-body > p"), { opacity: 0, y: 24 });
			gsap.set(q(".st-stat"), { opacity: 0, y: 32 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".st-label"), {
				opacity: 1,
				letterSpacing: "0.25em",
				duration: 1.1
			})
				// Heading lines unmask as a wipe, one after the other
				.to(
					q(".st-head span"),
					{
						clipPath: "inset(0 0 0% 0)",
						y: 0,
						duration: 1,
						stagger: 0.14,
						ease: "power4.out"
					},
					"-=0.6"
				)
				// Body copy drifts up
				.to(
					q(".st-body > p"),
					{
						opacity: 1,
						y: 0,
						duration: 0.9,
						stagger: 0.12,
						ease: "power2.out"
					},
					"-=0.5"
				)
				// Stats rise on a staccato beat
				.to(
					q(".st-stat"),
					{
						opacity: 1,
						y: 0,
						duration: 0.8,
						stagger: 0.15
					},
					"-=0.4"
				);

			// Re-measure once the hero unlocks scrolling / assets settle
			const onLoad = () => ScrollTrigger.refresh();
			window.addEventListener("load", onLoad);
			return () => window.removeEventListener("load", onLoad);
		},
		{ scope: sectionRef }
	);

	return (
		<section ref={sectionRef} className="bg-[#f9f9f8] py-28 text-neutral-900">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="grid gap-16 lg:grid-cols-12">
					<div className="lg:col-span-6">
						<span className="st-label font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
							{content.label.value}
						</span>
						<h2 className="st-head mt-4 font-sans text-4xl leading-[1.08] font-extrabold tracking-tight text-neutral-900 uppercase sm:text-5xl md:text-6xl">
							<span className="block">{content.heading1.value}</span>
							<span className="block">{content.heading2.value}</span>
							<span className="block">{content.heading3.value}</span>
						</h2>
					</div>

					<div className="st-body flex flex-col justify-between lg:col-span-6">
						<div>
							<p className="text-base leading-relaxed font-light text-neutral-600 sm:text-lg">
								{content.p1.value}
							</p>
							<p className="mt-4 text-base leading-relaxed font-light text-neutral-600 sm:text-lg">
								{content.p2.value}
							</p>
						</div>

						<div className="st-stats mt-12 grid grid-cols-3 gap-6 border-t border-neutral-200/80 pt-10">
							<div className="st-stat">
								<div className="mb-3 text-accent">
									<Calendar className="size-5" />
								</div>
								<p className="font-sans text-[11px] font-medium tracking-widest text-neutral-400">
									{content.stats.established.value}
								</p>
								<p className="mt-1 text-sm font-bold tracking-tight text-neutral-900 sm:text-base">
									{content.establishedValue.value}
								</p>
							</div>

							<div className="st-stat">
								<div className="mb-3 text-accent">
									<Building2 className="size-5" />
								</div>
								<p className="font-sans text-[11px] font-medium tracking-widest text-neutral-400">
									{content.stats.headquarters.value}
								</p>
								<p className="mt-1 text-sm font-bold tracking-tight text-neutral-900 sm:text-base">
									{content.headquartersValue.value}
								</p>
							</div>

							<div className="st-stat">
								<div className="mb-3 text-accent">
									<Globe className="size-5" />
								</div>
								<p className="font-sans text-[11px] font-medium tracking-widest text-neutral-400">
									{content.stats.presence.value}
								</p>
								<p className="mt-1 text-sm font-bold tracking-tight text-neutral-900 sm:text-base">
									{content.presenceValue.value}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
