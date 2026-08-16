import { useRef, type FC } from "react";

import { useGSAP } from "@gsap/react";
import { useIntlayer, useLocale } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import emiratiPartner from "#/assets/home/leadership/emirati-partner.png";
import ceo from "#/assets/home/leadership/ceo.png";
import generalManager from "#/assets/home/leadership/general-manager.png";
import generalManager2 from "#/assets/home/leadership/general-manager-2.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const images = [emiratiPartner, ceo, generalManager, generalManager2];

export const Leadership: FC = () => {
	const content = useIntlayer("home-leadership");
	const { locale } = useLocale();

	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Initial hidden states
			gsap.set(q(".ld-label"), { opacity: 0, x: -24 });
			gsap.set(q(".ld-head h2"), { clipPath: "inset(0 100% 0 0)" });
			gsap.set(q(".ld-card"), { clipPath: "inset(100% 0 0 0)", y: -40 });
			gsap.set(q(".ld-img"), { scale: 1.35 });
			gsap.set(q(".ld-nameplate"), { opacity: 0, y: 24 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			// Label typesets in from the left
			tl.to(q(".ld-label"), { opacity: 1, x: 0, duration: 0.9 })
				// Heading unmasks left-to-right
				.to(q(".ld-head h2"), { clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power4.out" }, "-=0.5")
				// Cards lift as shutters while portraits settle from a zoom
				.to(
					q(".ld-card"),
					{ clipPath: "inset(0% 0 0 0)", y: 0, duration: 0.9, stagger: 0.12, ease: "power4.out" },
					"<"
				)
				.to(q(".ld-img"), { scale: 1, duration: 1.4, stagger: 0.12 }, "<")
				// Nameplates rise after the shutters clear
				.to(q(".ld-nameplate"), { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.5");

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
				<div className="ld-head flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
						<div>
							<span className="ld-label font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
								— {content.label.value}
							</span>
							<h2 className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-white uppercase sm:text-4xl">
								{content.heading.value}
							</h2>
						</div>
						<p className="font-sans text-xs tracking-[0.2em] text-white/50 uppercase">
							{content.subtitle.value}
						</p>
					</div>

					<div className="ld-grid mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{content.members.map((member, index) => (
							<div
								key={index}
								className="ld-card group relative aspect-[3/4] overflow-hidden rounded-sm bg-neutral-900 shadow-xl"
							>
								<div
									className="ld-img absolute inset-0 bg-cover bg-center contrast-125 grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
									style={{
										backgroundImage: `url('${images[index]}')`
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

								<div className="ld-nameplate absolute inset-x-0 bottom-0 p-6">
								<h3 className="font-sans text-sm font-bold tracking-wider text-white uppercase transition-colors group-hover:text-accent">
									{member.name.value}
								</h3>
								<p className="mt-2 text-xs leading-relaxed font-light text-white/60">
									{member.role.value}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
