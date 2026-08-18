import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

import { getHTMLTextDir } from "intlayer";
import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

import dacLogo from "#/assets/dac-logo-no-slogan.png";
import heroImg from "#/assets/home/hero.png";

gsap.registerPlugin(useGSAP);

export const Hero: FC = () => {
	const content = useIntlayer("home-hero");
	const { locale } = useLocale();
	const { home } = useCmsData();
	const s = pickSection(home, "header", locale as Locale);
	const heroTitle = (s?.title as string) || content.subtitle.value;

	const [isReady, setIsReady] = useState(false);

	const containerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const heroBoxRef = useRef<HTMLDivElement>(null);
	const textElementsRef = useRef<HTMLDivElement>(null);
	const scrollIndicatorRef = useRef<HTMLDivElement>(null);
	const bottomArrowRef = useRef<HTMLDivElement>(null);

	// Lock body scroll to hero view until intro animation completes
	useEffect(() => {
		if (typeof window === "undefined" || typeof document === "undefined") return;

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.scrollTo(0, 0);

		const handleIntroComplete = () => {
			document.body.style.overflow = originalOverflow || "";
		};

		window.addEventListener("hero-intro-complete", handleIntroComplete);

		return () => {
			document.body.style.overflow = originalOverflow || "";
			window.removeEventListener("hero-intro-complete", handleIntroComplete);
		};
	}, []);

	// Preload critical assets before triggering animation
	useEffect(() => {
		let isMounted = true;

		const preloadImage = (src: string) =>
			new Promise<void>((resolve) => {
				const img = new Image();
				img.src = src;
				img.onload = () => resolve();
				img.onerror = () => resolve();
			});

		const prepare = async () => {
			const preloadTasks: Promise<unknown>[] = [preloadImage(dacLogo), preloadImage(heroImg)];

			if (typeof document !== "undefined" && "fonts" in document) {
				preloadTasks.push(document.fonts.ready);
			}

			await Promise.all(preloadTasks);

			// Brief micro-delay for smooth mount transition
			if (isMounted) {
				setTimeout(() => {
					if (isMounted) setIsReady(true);
				}, 150);
			}
		};

		prepare();

		return () => {
			isMounted = false;
		};
	}, []);

	useGSAP(
		() => {
			if (!isReady) return;

			const isRtl = getHTMLTextDir(locale) === "rtl";
			const textSlideOffset = isRtl ? 100 : -100;

			const tl = gsap.timeline({
				defaults: { ease: "power3.inOut" }
			});

			// Initial state setup
			gsap.set(logoRef.current, {
				opacity: 0,
				scale: 0.92,
				y: 24
			});

			gsap.set(heroBoxRef.current, {
				opacity: 0,
				scale: 0.85,
				width: "160px",
				height: "160px",
				borderRadius: "8px"
			});

			if (textElementsRef.current) {
				gsap.set(textElementsRef.current.children, {
					opacity: 0,
					x: textSlideOffset
				});
			}

			gsap.set(scrollIndicatorRef.current, {
				opacity: 0,
				y: 20
			});

			gsap.set(bottomArrowRef.current, {
				opacity: 0,
				y: 20
			});

			// State 1 -> 2: DAC Logo slides / fades into view
			tl.to(logoRef.current, {
				opacity: 1,
				scale: 1,
				y: 0,
				duration: 0.9,
				ease: "power3.out"
			})
				// Hold on logo
				.to(logoRef.current, {
					duration: 0.5
				})
				// State 2 -> 3: DAC Logo slides / fades out
				.to(logoRef.current, {
					opacity: 0,
					scale: 1.04,
					y: -20,
					duration: 0.7,
					ease: "power3.in"
				})
				// State 3 -> 4: Centered small window with hero image appears
				.to(
					heroBoxRef.current,
					{
						opacity: 1,
						scale: 1,
						duration: 0.8,
						ease: "power2.out"
					},
					"-=0.15"
				)
				// Hold on small window
				.to(heroBoxRef.current, {
					duration: 0.35
				})
				// State 4 -> 5: Hero Reveal - Window smoothly expands to full screen
				.to(heroBoxRef.current, {
					width: "100%",
					height: "100%",
					borderRadius: "0px",
					duration: 1.3,
					ease: "power4.inOut"
				});

			// State 5: Text slides in from left (right on RTL layouts)
			if (textElementsRef.current) {
				tl.to(
					textElementsRef.current.children,
					{
						opacity: 1,
						x: 0,
						duration: 1.0,
						stagger: 0.16,
						ease: "power3.out"
					},
					"-=0.75"
				);
			}

			// Scroll indicator & bottom arrow reveal
			tl.to(
				[scrollIndicatorRef.current, bottomArrowRef.current],
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.1,
					ease: "power2.out"
				},
				"-=0.4"
			).call(
				() => {
					if (typeof window !== "undefined") {
						window.dispatchEvent(new CustomEvent("hero-intro-complete"));
					}
				},
				undefined,
				"-=0.3"
			);
		},
		{ scope: containerRef, dependencies: [locale, isReady] }
	);

	return (
		<section
			ref={containerRef}
			className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950"
		>
			{/* Initial Pre-load Black Screen to prevent any animation flash */}
			<div
				className={`pointer-events-none fixed inset-0 z-50 bg-neutral-950 transition-opacity duration-700 ${
					isReady ? "opacity-0" : "opacity-100"
				}`}
			/>

			{/* State 2: Centered DAC Logo */}
			<div
				ref={logoRef}
				className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6"
			>
				<img
					src={dacLogo}
					alt="DAC"
					className="max-h-24 w-auto max-w-[280px] object-contain sm:max-h-32 sm:max-w-[360px]"
				/>
			</div>

			{/* State 4 -> 5: Expanding Hero Image Window */}
			<div
				ref={heroBoxRef}
				className="pointer-events-none absolute inset-0 m-auto flex items-center justify-center overflow-hidden shadow-2xl"
				style={{ width: "160px", height: "160px" }}
			>
				<div
					className="absolute bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: heroImg
							? `url(${heroImg})`
							: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')",
						width: "100vw",
						height: "100vh",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)"
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
			</div>

			{/* State 5: Hero Content Text sliding in */}
			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-start sm:px-12">
				<div ref={textElementsRef} className="max-w-4xl">
					{/* Badge Number 01 */}
					<span className="mb-4 block font-sans text-xs tracking-widest text-white/60">
						{content.index?.value ?? "01"}
					</span>

					{/* Editorial Headline */}
					<h1 className="font-serif text-5xl leading-[1.04] font-bold tracking-tight text-white uppercase sm:text-6xl md:text-7xl lg:text-[5.5rem]">
						<span className="block">{content.headline1.value}</span>
						<span className="block">{content.headline2.value}</span>
						<span className="block">{content.headline3.value}</span>
					</h1>

					{/* Subtitle */}
					<p className="mt-6 max-w-xl text-sm leading-relaxed font-light text-white/75 sm:text-base">
						{heroTitle}
					</p>

					{/* CTA Link */}
					<div className="mt-8">
						<a
							href="#projects"
							className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-xs font-semibold tracking-widest text-white transition-all hover:border-white hover:text-white sm:text-sm"
						>
							<span>{content.cta.value}</span>
							<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
						</a>
					</div>
				</div>
			</div>

			{/* Middle-Bottom Vertical Scroll indicator */}
			<div
				ref={scrollIndicatorRef}
				className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
			>
				<span className="font-sans text-[10px] font-medium tracking-[0.3em] text-accent uppercase">
					{content.scroll?.value ?? "SCROLL"}
				</span>
				<div className="h-10 w-[2px] animate-pulse bg-accent/80" />
			</div>

			{/* Bottom-Left Down Arrow Indicator */}
			<div
				ref={bottomArrowRef}
				className="pointer-events-none absolute bottom-8 left-8 animate-bounce text-white/70 sm:left-12 rtl:right-8 rtl:left-auto rtl:sm:right-12"
			>
				<ArrowDown className="size-6" />
			</div>
		</section>
	);
};
