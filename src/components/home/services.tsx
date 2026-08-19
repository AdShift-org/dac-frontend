import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Plus } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Services: FC = () => {
	const content = useIntlayer("home-services");
	const { locale } = useLocale();
	const { services, home } = useCmsData();
	const s = pickSection(home, "services_section", locale as Locale);
	const str = (key: string, fallback: string) => (s?.[key] as string) || fallback;

	const serviceNames =
		(services ?? []).length > 0
			? services!.map((raw) => {
					// ponytail: API Arabic name is empty — fall back to English.
					// ar is normalized by unfoldAr at the loader, so name_ar surfaces as `name`.
					const arName = (raw?.[locale] as { name?: string }).name || "";
					return arName || raw.en.name || "";
				})
			: content.services.map((s) => s.value);

	const sectionRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(sectionRef);

			// Initial hidden states
			gsap.set(q(".sv-label"), { opacity: 0, x: -24 });
			gsap.set(q(".sv-head span"), { clipPath: "inset(0 0 100% 0)" });
			gsap.set(q(".sv-intro"), { opacity: 0, y: 24 });
			gsap.set(q(".sv-row"), { opacity: 0, x: -40, skewX: -6 });
			gsap.set(q(".sv-plus"), { scale: 0, rotation: 135 });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 90%",
					once: true
				},
				defaults: { ease: "power3.out" }
			});

			// Label typesets in
			tl.to(q(".sv-label"), { opacity: 1, x: 0, duration: 0.9 })
				// Heading lines unmask top-to-bottom
				.to(
					q(".sv-head span"),
					{
						clipPath: "inset(0 0 0% 0)",
						duration: 0.9,
						stagger: 0.14,
						ease: "power4.out"
					},
					"-=0.5"
				)
				// Intro + CTA drift up
				.to(
					q(".sv-intro"),
					{ opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
					"-=0.5"
				)
				// Service rows swing in with a skew
				.to(
					q(".sv-row"),
					{ opacity: 1, x: 0, skewX: 0, duration: 0.8, stagger: 0.12 },
					"-=0.3"
				)
				// Plus circles spin into place
				.to(
					q(".sv-plus"),
					{ scale: 1, rotation: 0, duration: 0.5, stagger: 0.12, ease: "back.out(2)" },
					"-=0.4"
				);

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
				<div className="grid gap-16 lg:grid-cols-12">
					{/* Left Column */}
					<div className="flex flex-col justify-between lg:col-span-5">
						<div>
							<span className="sv-label font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
								— {content.label.value}
							</span>
							<h2 className="sv-head mt-4 font-sans text-4xl leading-[1.08] font-extrabold tracking-tight text-neutral-900 uppercase sm:text-5xl md:text-6xl">
								<span className="block">{content.heading1.value}</span>
								<span className="block">{content.heading2.value}</span>
							</h2>
							<p className="mt-6 max-w-sm text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
								{str("description", content.paragraph.value)}
							</p>
						</div>

						<div className="sv-intro mt-10">
							<a
								href="/services"
								className="group inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest text-accent uppercase transition-colors hover:text-neutral-900"
							>
								<span>{content.seeAll.value}</span>
								<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
							</a>
						</div>
					</div>

					{/* Right Column - Service Items */}
					<div className="sv-list divide-y divide-neutral-200 lg:col-span-7">
						{serviceNames.map((service, index) => (
							<div
								key={index}
								className="sv-row group flex cursor-pointer items-center justify-between py-8 transition-colors hover:bg-neutral-100/50 sm:py-10"
							>
								<div className="flex items-center gap-4">
									<span className="font-sans text-base font-bold text-accent sm:text-xl">
										—
									</span>
									<h3 className="font-sans text-xl font-extrabold tracking-tight text-neutral-900 uppercase transition-colors group-hover:text-accent sm:text-2xl lg:text-3xl">
										{service}
									</h3>
								</div>
								<div className="sv-plus flex size-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-neutral-950 sm:size-10">
									<Plus className="size-4" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
