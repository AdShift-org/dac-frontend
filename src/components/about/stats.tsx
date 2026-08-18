import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Stats: FC = () => {
	const content = useIntlayer("about-stats");
	const { locale } = useLocale();
	const { about } = useCmsData();
	const s = pickSection(about, "dac_by_numbers", locale as Locale);
	const sectionRef = useRef<HTMLElement>(null);

	const statKeys = ["experience_years", "completed_projects", "skilled_professionals", "regional_offices"];
	const items = content.items.map((item, index) => ({
		value: (s?.[statKeys[index]] as string) || item.value,
		label: item.label.value
	}));

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			gsap.set(q(".ab-st-head"), { opacity: 0, y: 20 });
			gsap.set(q(".ab-st-item"), { opacity: 0 });

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
				{ opacity: 1, duration: 0.8, stagger: 0.15 },
				"-=0.4"
			);

			// Count each figure up from zero on reveal
			sectionRef.current!.querySelectorAll<HTMLElement>(".ab-st-num").forEach((el) => {
				const match = el.textContent?.match(/^(\d+)(.*)$/);
				if (!match) return;
				const target = Number(match[1]);
				const suffix = match[2];
				const proxy = { v: 0 };
				tl.to(
					proxy,
					{
						v: target,
						duration: 2,
						ease: "power2.out",
						onUpdate: () => {
							el.textContent = Math.round(proxy.v) + suffix;
						}
					},
					"<"
				);
			});
		},
		{ scope: sectionRef, dependencies: [locale] }
	);

	return (
		<section
			ref={sectionRef}
			className="border-y border-white/5 bg-[#0f0e0c] py-20 text-white sm:py-28"
		>
			<div className="mx-auto max-w-7xl px-6 text-center sm:px-12">
				<h2 className="ab-st-head font-serif text-2xl font-bold tracking-widest text-white uppercase sm:text-4xl">
					{(s?.header_title as string) || content.heading.value}
				</h2>
				{/*<p className="ab-st-head mx-auto mt-3 max-w-xl text-xs font-light text-white/50 sm:text-sm">
					{content.subtitle.value}
				</p>*/}

				<div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
					{items.map((item, index) => (
						<div
							key={`${item.value}-${index}`}
							className="ab-st-item flex flex-col items-center justify-center p-4"
						>
							<span className="ab-st-num font-sans text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
								{item.value}
							</span>
							{/*<div className="my-3 h-0.5 w-8 bg-accent/60" />*/}
							<span className="font-sans text-[0.6rem] font-medium tracking-wider text-white/40 uppercase">
								{item.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
