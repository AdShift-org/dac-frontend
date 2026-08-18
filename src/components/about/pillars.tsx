import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const pillarIcons = [Target, Eye];

export const Pillars: FC = () => {
	const content = useIntlayer("about-pillars");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-pl-card"), { scaleY: 0, transformOrigin: "top center" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					// once: true
				},
				defaults: { ease: "power3.inOut" }
			});

			tl.to(q(".ab-pl-card"), {
				scaleY: 1,
				duration: 0.9,
				stagger: 0.18
			});
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#0e0d0b] py-20 text-white sm:py-24">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{content.cards.map((card, index) => {
						const IconComponent = pillarIcons[index] || Target;
						return (
							<div
								key={card.key}
								className="ab-pl-card group relative rounded-sm border border-white/10 bg-[#161411] p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-[#1a1814] sm:p-12"
							>
								<div className="mb-6 inline-flex size-14 items-center justify-center rounded-sm bg-neutral-900 text-accent transition-colors group-hover:bg-accent group-hover:text-neutral-950">
									<IconComponent className="size-7" />
								</div>
								<h3 className="font-serif text-2xl font-bold tracking-wider text-white uppercase transition-colors group-hover:text-accent sm:text-3xl">
									{card.title.value}
								</h3>
								<p className="mt-4 text-xs leading-relaxed font-light text-white/70 sm:text-sm sm:leading-relaxed">
									{card.description.value}
								</p>
								<div className="mt-8 h-0.5 w-12 bg-accent/40 transition-all duration-300 group-hover:w-20 group-hover:bg-accent" />
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
