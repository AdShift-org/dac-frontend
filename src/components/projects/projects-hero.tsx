import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const ProjectsHero: FC = () => {
	const content = useIntlayer("projects-hero");
	const { locale } = useLocale();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(containerRef);

			gsap.set(q(".pj-hero-index"), { y: 20, opacity: 0 });
			gsap.set(q(".pj-hero-title span"), { y: 60, opacity: 0 });
			gsap.set(q(".pj-hero-desc"), { y: 30, opacity: 0 });
			gsap.set(q(".pj-hero-action"), { y: 20, opacity: 0 });
			gsap.set(q(".pj-hero-scroll"), { opacity: 0, y: -10 });

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.to(q(".pj-hero-index"), {
				y: 0,
				opacity: 1,
				duration: 0.8,
				delay: 0.2
			})
				.to(
					q(".pj-hero-title span"),
					{
						y: 0,
						opacity: 1,
						duration: 1.1,
						stagger: 0.15
					},
					"-=0.5"
				)
				.to(
					q(".pj-hero-desc"),
					{
						y: 0,
						opacity: 1,
						duration: 0.9
					},
					"-=0.6"
				)
				.to(
					q(".pj-hero-action"),
					{
						y: 0,
						opacity: 1,
						duration: 0.8
					},
					"-=0.5"
				)
				.to(
					q(".pj-hero-scroll"),
					{
						opacity: 1,
						y: 0,
						duration: 0.8
					},
					"-=0.4"
				);
		},
		{ scope: containerRef, dependencies: [locale] }
	);

	const scrollToPortfolio = () => {
		const target = document.getElementById("portfolio");
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			ref={containerRef}
			className="relative flex min-h-screen items-center justify-start overflow-hidden bg-[#0d0c0a] px-6 pt-32 pb-24 text-white sm:px-12 lg:px-20"
		>
			{/* Architectural Construction Site Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&auto=format&fit=crop&q=85')"
				}}
			/>

			{/* Gradients to match the moody atmospheric architectural design */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/55 to-[#0d0c0a]/75" />
			<div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0a]/90 via-[#0d0c0a]/50 to-transparent rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					{/* Index indicator */}
					<div className="pj-hero-index mb-4 font-sans text-xs tracking-widest text-neutral-400">
						{content.index.value}
					</div>

					{/* Main Big Serif Heading */}
					<h1 className="pj-hero-title font-serif text-5xl leading-[0.98] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
						<span className="block">{content.titleLine1.value}</span>
						<span className="block">{content.titleLine2.value}</span>
						<span className="block">{content.titleLine3.value}</span>
					</h1>

					{/* Description */}
					<p className="pj-hero-desc mt-8 max-w-xl text-sm leading-relaxed font-light text-neutral-300 sm:text-base md:text-lg">
						{content.description.value}
					</p>

					{/* Action link */}
					<div className="pj-hero-action mt-8">
						<button
							type="button"
							onClick={scrollToPortfolio}
							className="group inline-flex items-center gap-2 border-b border-white/40 pb-1 font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:text-white"
						>
							<span>{content.caseStudiesLink.value}</span>
							<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg] rtl:group-hover:-translate-x-0.5" />
						</button>
					</div>
				</div>
			</div>

			{/* Bottom-left scroll down arrow */}
			<button
				type="button"
				onClick={scrollToPortfolio}
				className="pj-hero-scroll absolute bottom-10 left-6 flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 backdrop-blur-xs transition-colors hover:border-white hover:text-white sm:left-12 lg:left-20"
				aria-label="Scroll to projects"
			>
				<ArrowDown className="size-4" />
			</button>
		</section>
	);
};
