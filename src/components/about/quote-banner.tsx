import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer, useLocale } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const QuoteBanner: FC = () => {
	const content = useIntlayer("about-quote-banner");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Slow Ken Burns drift on the panorama, plays when in view
			gsap.fromTo(
				q(".ab-qb-bg"),
				{ scale: 1.18, xPercent: -2 },
				{
					scale: 1,
					xPercent: 2,
					duration: 2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 70%",
						once: true
					}
				}
			);

			// Quote sweeps in like a carved inscription
			gsap.set(q(".ab-qb-text"), { clipPath: "inset(0 100% 0 0)" });
			gsap.to(
				q(".ab-qb-text"),
				{
					clipPath: "inset(0 0% 0 0)",
					duration: 1.4,
					ease: "power4.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 60%",
						once: true
					}
				}
			);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-neutral-950 px-6 py-28 text-center text-white sm:px-12 md:min-h-[550px]"
		>
			{/* Panoramic Landscape / Masterplan Image */}
			<div
				className="ab-qb-bg absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1577495508048-b635879837f1?w=2000&auto=format&fit=crop&q=80')"
				}}
			/>
			{/* Dark atmospheric overlay */}
			<div className="absolute inset-0 bg-neutral-950/75 backdrop-blur-[2px]" />
			<div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-[#0e0d0b]" />

			<div className="relative z-10 mx-auto max-w-4xl">
				<blockquote className="ab-qb-text font-serif text-2xl leading-snug italic font-normal text-white sm:text-3xl md:text-4xl lg:text-5xl">
					{content.quote.value}
				</blockquote>
			</div>
		</section>
	);
};
