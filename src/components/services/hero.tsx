import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";

import heroImg from "#/assets/home/hero.png";
import { Link } from "@/components/localized-link";

export const Hero: FC = () => {
	const content = useIntlayer("services-hero");
	const { locale } = useLocale();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const q = gsap.utils.selector(containerRef);

			gsap.set(q(".srv-hero-tag"), { opacity: 0, y: 20 });
			gsap.set(q(".srv-hero-title span"), { y: 60, opacity: 0 });
			gsap.set(q(".srv-hero-desc"), { y: 30, opacity: 0 });
			gsap.set(q(".srv-hero-cta"), { y: 20, opacity: 0 });
			gsap.set(q(".srv-hero-scroll"), { opacity: 0, y: -10 });

			const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

			tl.to(q(".srv-hero-tag"), { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
				.to(
					q(".srv-hero-title span"),
					{
						y: 0,
						opacity: 1,
						duration: 1.1,
						stagger: 0.12
					},
					"-=0.5"
				)
				.to(
					q(".srv-hero-desc"),
					{
						y: 0,
						opacity: 1,
						duration: 0.9
					},
					"-=0.6"
				)
				.to(
					q(".srv-hero-cta"),
					{
						y: 0,
						opacity: 1,
						duration: 0.8
					},
					"-=0.5"
				)
				.to(
					q(".srv-hero-scroll"),
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

	const scrollToServices = () => {
		const target = document.getElementById("services-grid");
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			ref={containerRef}
			className="relative flex min-h-screen items-center justify-start overflow-hidden bg-[#12110e] px-6 pt-36 pb-24 text-white sm:px-12 lg:px-20"
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
			{/* Luxury moody overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#12110e] via-black/50 to-black/60" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					{/* Tag / Number Indicator */}
					<div className="srv-hero-tag mb-4 font-mono text-xs font-semibold tracking-widest text-neutral-400">
						{content.tag.value}
					</div>

					{/* Hero Headline */}
					<h1 className="srv-hero-title font-serif text-5xl leading-[1.04] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
						<span className="block">{content.titleLine1.value}</span>
						<span className="block">{content.titleLine2.value}</span>
						<span className="block">{content.titleLine3.value}</span>
					</h1>

					{/* Description */}
					<p className="srv-hero-desc mt-6 max-w-xl text-sm leading-relaxed font-light text-neutral-300 sm:text-base md:text-lg">
						{content.description.value}
					</p>

					{/* Explore CTA */}
					<div className="srv-hero-cta mt-8">
						<Link
							to={"/projects" as never}
							className="group inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:text-accent"
						>
							<span>{content.ctaText.value}</span>
							<ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5 rtl:rotate-180 rtl:group-hover:-translate-x-1.5" />
						</Link>
					</div>
				</div>
			</div>

			{/* Scroll indicator (bottom left on LTR, bottom right on RTL) */}
			<button
				type="button"
				onClick={scrollToServices}
				aria-label="Scroll to services"
				className="srv-hero-scroll absolute bottom-10 left-6 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/70 backdrop-blur-sm transition-all hover:border-white hover:bg-black/60 hover:text-white sm:left-12 lg:left-20 rtl:right-6 rtl:left-auto sm:rtl:right-12 lg:rtl:right-20"
			>
				<ArrowDown className="size-4 animate-bounce" />
			</button>
		</section>
	);
};
