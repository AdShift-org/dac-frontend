import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

import heroImg from "#/assets/home/hero.png";

const splitLines = (value: string, lines: number): string[] => {
	const words = value.trim().split(/\s+/);
	if (words.length <= lines) return [...words, ...Array(lines - words.length).fill("")];
	const size = Math.ceil(words.length / lines);
	const out: string[] = [];
	for (let i = 0; i < lines; i++) out.push(words.slice(i * size, (i + 1) * size).join(" "));
	return out;
};

export const Hero: FC = () => {
	const content = useIntlayer("about-hero");
	const { locale } = useLocale();
	const { about } = useCmsData();
	const s = pickSection(about, "hero_section", locale as Locale);
	const heroTitle = (s?.title as string) || `${content.titleLine1.value} ${content.titleLine2.value} ${content.titleLine3.value}`;
	const heroDesc = (s?.description as string) || content.description.value;
	const lines = splitLines(heroTitle, 3);
	const bgImage = s?.image || heroImg;

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
					backgroundImage: bgImage
						? `url(${bgImage})`
						: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&auto=format&fit=crop&q=85')"
				}}
			/>
			{/* Luxury warm vignette overlay */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/60" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-3xl">
					<h1 className="ab-hero-title font-serif text-5xl leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
						{lines.map((line) => (
							<span key={line} className="block">
								{line}
							</span>
						))}
					</h1>

					<p className="ab-hero-desc mt-8 max-w-xl text-sm leading-relaxed font-light text-white/80 sm:text-base md:text-lg">
						{heroDesc}
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
