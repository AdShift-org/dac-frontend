import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import heroImg from "#/assets/media/hero.png";

export const MediaHero: FC = () => {
	const content = useIntlayer("media-hero");

	const handleScrollDown = () => {
		const target = document.getElementById("latest-news-section");
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden bg-neutral-950 px-6 pt-36 pb-16 text-white sm:px-12 md:min-h-screen">
			{/* Architectural Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: heroImg
						? `url(${heroImg})`
						: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&auto=format&fit=crop&q=80')"
				}}
			/>
			{/* Dark moody gradient overlays */}
			<div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/20" />
			<div className="absolute inset-0 bg-black/20 backdrop-brightness-75" />

			{/* Main Hero Content */}
			<div className="relative z-10 mx-auto my-auto w-full max-w-7xl">
				<div className="max-w-2xl text-start">
					{/* Heading */}
					<h1 className="mt-6 font-serif text-5xl font-normal tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
						{content.heading.value}
					</h1>

					{/* Narrative */}
					<p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-neutral-300 sm:text-base">
						{content.narrative.value}
					</p>
				</div>
			</div>

			{/* Bottom Scroll Indicator */}
			<div className="relative z-10 flex w-full justify-center">
				<button
					type="button"
					onClick={handleScrollDown}
					className="group inline-flex flex-col items-center gap-2 font-sans text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase transition-colors hover:text-white"
				>
					<span>{content.scroll.value}</span>
					<div className="h-8 w-px bg-white/30 transition-all duration-300 group-hover:h-12 group-hover:bg-white" />
				</button>
			</div>
		</section>
	);
};
