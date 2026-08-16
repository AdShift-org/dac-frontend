import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

import heroImg from "#/assets/home/hero.png";

export const Hero: FC = () => {
	const content = useIntlayer("about-hero");
	const { locale } = useLocale();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(containerRef);

			gsap.set(q(".ab-hero-title span"), { y: 60, opacity: 0 });
			gsap.set(q(".ab-hero-desc"), { y: 30, opacity: 0 });
			gsap.set(q(".ab-hero-scroll"), { opacity: 0, y: -10 });

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.to(q(".ab-hero-title span"), {
				y: 0,
				opacity: 1,
				duration: 1.1,
				stagger: 0.15,
				delay: 0.2
			})
				.to(
					q(".ab-hero-desc"),
					{
						y: 0,
						opacity: 1,
						duration: 0.9
					},
					"-=0.5"
				)
				.to(
					q(".ab-hero-scroll"),
					{
						opacity: 1,
						y: 0,
						duration: 0.8
					},
					"-=0.3"
				);
		},
		{ scope: containerRef, dependencies: [locale] }
	);

	return (
		<section
			ref={containerRef}
			className="relative flex min-h-[90vh] items-center justify-start overflow-hidden bg-neutral-950 px-6 pt-32 pb-24 text-white sm:px-12 lg:min-h-screen lg:px-20"
		>
			{/* Architectural Villa / Landscape Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: heroImg
						? `url(${heroImg})`
						: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&auto=format&fit=crop&q=85')"
				}}
			/>
			{/* Luxury warm vignette overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					<h1 className="ab-hero-title font-serif text-5xl leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
						<span className="block">{content.titleLine1.value}</span>
						<span className="block">{content.titleLine2.value}</span>
						<span className="block">{content.titleLine3.value}</span>
					</h1>

					<p className="ab-hero-desc mt-8 max-w-xl text-sm leading-relaxed font-light text-white/80 sm:text-base md:text-lg">
						{content.description.value}
					</p>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="ab-hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60">
				<ChevronDown className="size-5 animate-bounce text-accent" />
			</div>
		</section>
	);
};
