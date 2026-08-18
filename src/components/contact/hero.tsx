import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

import heroImg from "#/assets/contact/hero.png";

export const Hero: FC = () => {
	const content = useIntlayer("contact-hero");
	const { locale } = useLocale();
	const { contact } = useCmsData();
	const s = pickSection(contact, "header_section", locale as Locale);
	const str = (key: string, fallback: string) => (s?.[key] as string) || fallback;
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(containerRef);

			gsap.set(q(".cnt-hero-tag"), { opacity: 0, y: 20 });
			gsap.set(q(".cnt-hero-title span"), { y: 60, opacity: 0 });
			gsap.set(q(".cnt-hero-desc"), { y: 30, opacity: 0 });
			gsap.set(q(".cnt-hero-scroll"), { opacity: 0, x: 20 });

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.to(q(".cnt-hero-tag"), { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
				.to(
					q(".cnt-hero-title span"),
					{
						y: 0,
						opacity: 1,
						duration: 1.1,
						stagger: 0.15
					},
					"-=0.5"
				)
				.to(
					q(".cnt-hero-desc"),
					{
						y: 0,
						opacity: 1,
						duration: 0.9
					},
					"-=0.6"
				)
				.to(
					q(".cnt-hero-scroll"),
					{
						opacity: 1,
						x: 0,
						duration: 0.8
					},
					"-=0.4"
				);
		},
		{ scope: containerRef, dependencies: [locale] }
	);

	const scrollToContent = () => {
		const target = document.getElementById("our-offices");
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			ref={containerRef}
			className="relative flex min-h-[90vh] items-center justify-start overflow-hidden bg-[#0d0c0b] px-6 pt-36 pb-24 text-white sm:px-12 lg:min-h-screen lg:px-20"
		>
			{/* Architectural Construction Background */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: heroImg
						? `url(${heroImg})`
						: "url('https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=2400&auto=format&fit=crop&q=85')"
				}}
			/>

			{/* Moody Dark Overlays for maximum readability */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-black/60 to-black/75" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					{/* Tag / Indicator */}
					<div className="cnt-hero-tag mb-6 font-sans text-xs font-semibold tracking-widest text-neutral-400">
						{str("tag", content.tag.value)}
					</div>

					{/* Hero Headline */}
					<h1 className="cnt-hero-title font-sans text-4xl leading-[1.08] font-extrabold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-7xl">
						<span className="block">{str("title", content.titleLine1.value)}</span>
						<span className="block text-white/95">
							{str("header_title", content.titleLine2.value)}
						</span>
					</h1>

					{/* Description */}
					<p className="cnt-hero-desc mt-8 max-w-xl text-sm leading-relaxed font-light text-neutral-300 sm:text-base md:text-lg">
						{str("description", content.description.value)}
					</p>
				</div>
			</div>

			{/* Vertical Scroll Indicator on Right */}
			{/*<div
				onClick={scrollToContent}
				className="cnt-hero-scroll absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 cursor-pointer flex-col items-center gap-3 select-none transition-opacity hover:opacity-100 sm:flex sm:right-10 lg:right-16 rtl:right-auto rtl:left-6 sm:rtl:left-10 lg:rtl:left-16 opacity-70"
			>
				<span className="font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase [writing-mode:vertical-lr]">
					{content.scrollText.value}
				</span>
				<div className="h-14 w-px bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
			</div>*/}
		</section>
	);
};
