import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Principles: FC = () => {
	const content = useIntlayer("about-principles");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-pr-head"), { opacity: 0, y: 30 });
			gsap.set(q(".ab-pr-item"), { opacity: 0, y: 25 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-pr-head"), { opacity: 1, y: 0, duration: 0.9 }).to(
				q(".ab-pr-item"),
				{ opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
				"-=0.4"
			);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#f9f9f8] py-24 text-neutral-900 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Header */}
					<div className="ab-pr-head lg:col-span-4">
						<span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
							— {content.label.value}
						</span>
						<h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-neutral-900 uppercase sm:text-4xl lg:text-5xl">
							{content.heading.value}
						</h2>
					</div>

					{/* Right 4-Grid */}
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-10">
						{content.items.map((item) => (
							<div
								key={item.number}
								className="ab-pr-item group relative rounded-sm border-l-2 border-accent/40 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-accent hover:shadow-md sm:p-8 rtl:border-r-2 rtl:border-l-0"
							>
								<div className="flex items-center justify-between">
									<h3 className="font-sans text-base font-bold tracking-widest text-neutral-900 uppercase transition-colors group-hover:text-accent sm:text-lg">
										{item.title.value}
									</h3>
									<span className="font-serif text-xs font-bold text-accent/60">
										{item.number}
									</span>
								</div>
								<p className="mt-3 text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
									{item.description.value}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
