import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer, useLocale } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Stats: FC = () => {
	const content = useIntlayer("about-stats");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-st-head"), { opacity: 0, y: 20 });
			gsap.set(q(".ab-st-item"), { opacity: 0, y: 30, scale: 0.95 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-st-head"), { opacity: 1, y: 0, duration: 0.8 }).to(
				q(".ab-st-item"),
				{ opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12 },
				"-=0.4"
			);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#0f0e0c] py-20 text-white border-y border-white/5 sm:py-28">
			<div className="mx-auto max-w-7xl px-6 sm:px-12 text-center">
				<h2 className="ab-st-head font-serif text-2xl font-bold tracking-widest text-accent uppercase sm:text-3xl">
					{content.heading.value}
				</h2>
				<p className="ab-st-head mx-auto mt-3 max-w-xl text-xs font-light text-white/50 sm:text-sm">
					{content.subtitle.value}
				</p>

				<div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
					{content.items.map((item, index) => (
						<div
							key={index}
							className="ab-st-item flex flex-col items-center justify-center p-4"
						>
							<span className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
								{item.value}
							</span>
							<div className="my-3 h-0.5 w-8 bg-accent/60" />
							<span className="font-sans text-xs font-medium tracking-wider text-white/70 uppercase sm:text-sm">
								{item.label.value}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
