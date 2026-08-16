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

			gsap.set(q(".ab-qb-text"), { opacity: 0, y: 30, scale: 0.96 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-qb-text"), {
				opacity: 1,
				y: 0,
				scale: 1,
				duration: 1.1
			});
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
				className="absolute inset-0 bg-cover bg-center"
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
