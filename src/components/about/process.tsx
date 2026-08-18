import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Process: FC = () => {
	const content = useIntlayer("about-process");
	const { locale } = useLocale();
	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-pc-head"), { opacity: 0, y: 30 });
			gsap.set(q(".ab-pc-step"), { y: 45, opacity: 0 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			tl.to(q(".ab-pc-head"), { opacity: 1, y: 0, duration: 0.9 });

			// The connecting line draws across the four steps when in view
			gsap.fromTo(
				q(".ab-pc-line-fill"),
				{ width: "0%" },
				{
					width: "100%",
					duration: 1.6,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 70%",
						once: true
					}
				}
			);

			// Steps flow through the pipeline one after another
			gsap.to(
				q(".ab-pc-step"),
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.15,
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
		<section ref={sectionRef} className="bg-[#f2f2f0] py-24 text-neutral-900 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="ab-pc-head text-center">
					{/*<span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
						— {content.label.value}
					</span>*/}
					<h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-900 uppercase sm:text-4xl lg:text-5xl">
						{content.heading.value}
					</h2>
				</div>

				<div className="relative mt-16">
					<div className="ab-pc-line absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-neutral-300 lg:block">
						<div className="ab-pc-line-fill h-full bg-accent" />
					</div>
					<div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{content.steps.map((item) => (
						<div
							key={item.step}
							className="ab-pc-step group relative flex flex-col justify-between rounded-sm border border-neutral-300/80 bg-white p-8 transition-colors duration-300 hover:border-accent/60 hover:shadow-lg"
						>
							<div>
								<div className="flex items-center justify-between border-b border-neutral-200 pb-4">
									<span className="font-serif text-3xl text-accent">
										{item.step}
									</span>
									<div className="size-2 rounded-full bg-accent/40 group-hover:bg-accent" />
								</div>
								<h3 className="mt-6 font-sans text-sm tracking-wider text-neutral-900 uppercase transition-colors group-hover:text-accent">
									{item.title.value}
								</h3>
								<p className="mt-3 text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
									{item.description.value}
								</p>
							</div>
							<div className="mt-8 h-0.5 w-6 bg-accent/30 transition-all duration-300 group-hover:w-full group-hover:bg-accent" />
						</div>
					))}
					</div>
				</div>
			</div>
		</section>
	);
};
