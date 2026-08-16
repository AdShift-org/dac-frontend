import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer, useLocale } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Philosophy: FC = () => {
	const content = useIntlayer("home-philosophy");
	const { locale } = useLocale();

	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Initial hidden states
			gsap.set(q(".ph-head"), { clipPath: "inset(0 0 100% 0)", y: 40 });
			gsap.set(q(".ph-intro"), { opacity: 0, y: 24 });
			gsap.set(q(".ph-principle"), { opacity: 0, y: 28, x: 20 });
			gsap.set(q(".ph-media"), { clipPath: "inset(0 0 100% 0)" });
			gsap.set(q(".ph-img"), { scale: 1.3 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			// Heading unmasks as a wipe
			tl.to(q(".ph-head"), { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1, ease: "power4.out" })
				// Intro paragraph drifts up
				.to(q(".ph-intro"), { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.6")
				// Principles rise in from the right
				.to(q(".ph-principle"), { opacity: 1, y: 0, x: 0, duration: 0.8, stagger: 0.15 }, "-=0.5")
				// Image wipes open while the photo settles from a zoom
				.to(q(".ph-media"), { clipPath: "inset(0 0 0% 0)", duration: 1.2, ease: "power4.inOut" }, "<")
				.to(q(".ph-img"), { scale: 1, duration: 1.6, ease: "power3.out" }, "<");

			// Re-measure once the hero unlocks scrolling / assets settle
			const onLoad = () => ScrollTrigger.refresh();
			window.addEventListener("load", onLoad);
			return () => window.removeEventListener("load", onLoad);
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section ref={sectionRef} className="bg-[#f9f9f8] py-28 text-neutral-900">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="grid items-center gap-16 lg:grid-cols-12">
					{/* Left Content Column */}
					<div className="lg:col-span-6">
						<h2 className="ph-head font-sans text-4xl leading-[1.08] font-extrabold tracking-tight text-neutral-900 uppercase sm:text-5xl md:text-6xl">
							{content.heading.value}
						</h2>
						<p className="ph-intro mt-6 max-w-lg text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
							{content.paragraph.value}
						</p>

						<div className="ph-principles mt-12 space-y-8">
							{content.principles.map((principle, index) => (
								<div
									key={index}
									className="ph-principle relative border-l-2 border-accent/40 pl-6 rtl:border-r-2 rtl:border-l-0 rtl:pr-6 rtl:pl-0"
								>
									<h3 className="font-sans text-xs font-semibold tracking-widest text-accent uppercase">
										{principle.number} {principle.title.value}
									</h3>
									<p className="mt-2 text-sm leading-relaxed font-light text-neutral-700">
										{principle.description.value}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* Right Image Column */}
					<div className="lg:col-span-6">
						<div className="ph-media relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-900 shadow-2xl">
							<div
								className="ph-img absolute inset-0 bg-cover bg-center contrast-125 grayscale transition-transform duration-700 hover:scale-105"
								style={{
									backgroundImage:
										"url('https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1000')"
								}}
							/>
							<div className="absolute inset-0 bg-neutral-950/20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
