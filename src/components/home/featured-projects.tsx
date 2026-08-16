import { useEffect, useRef, type FC } from "react";

import { useIntlayer } from "react-intlayer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
	"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
	"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
	"https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200",
	"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
	"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
	"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200",
	"https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200",
	"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200"
];

export const FeaturedProjects: FC = () => {
	const content = useIntlayer("home-featured-projects");

	const sectionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const track = trackRef.current;
		const inner = innerRef.current;
		if (!section || !track || !inner) return;

		const isRtl = document.documentElement.dir === "rtl";

		const getAmount = () => Math.max(track.scrollWidth - track.clientWidth, 0);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "top top",
				end: () => `+=${getAmount()}`,
				pin: true,
				scrub: 1,
				anticipatePin: 1,
				invalidateOnRefresh: true
			}
		});

		// ponytail: native scrollLeft lets the browser resolve RTL direction
		tl.fromTo(
			inner,
			{ autoAlpha: 0, y: 40 },
			{ autoAlpha: 1, y: 0, duration: 0.12, ease: "power2.out" },
			0
		)
			.fromTo(
				track,
				{ scrollLeft: 0 },
				{
					scrollLeft: () => (isRtl ? -getAmount() : getAmount()),
					duration: 1,
					ease: "none"
				},
				0.12
			)
			.to(inner, { autoAlpha: 0, y: -40, duration: 0.12, ease: "power2.in" }, "+=0.02");

		const refresh = () => ScrollTrigger.refresh();
		window.addEventListener("load", refresh);

		return () => {
			window.removeEventListener("load", refresh);
			tl.scrollTrigger?.kill();
			tl.kill();
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			id="projects"
			className="relative h-screen overflow-hidden bg-[#111110] text-white"
		>
			<div ref={innerRef} className="flex h-full flex-col justify-center px-6 sm:px-12">
				<div className="flex items-end justify-between gap-8">
					<div className="max-w-2xl">
						<span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent uppercase">
							{content.label.value}
						</span>
						<h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
							{content.heading.value}
						</h2>
					</div>

					<a
						href="/projects"
						className="group hidden items-center gap-3 font-sans text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:text-accent lg:inline-flex"
					>
						<span>{content.viewAll.value}</span>
						<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
					</a>
				</div>

				<div
					ref={trackRef}
					className="mt-12 flex scroll-fade-x [scrollbar-width:none] gap-8 overflow-x-auto sm:gap-10 [&::-webkit-scrollbar]:hidden"
				>
					{content.projects.map((project, index) => (
						<div
							key={index}
							className="group relative aspect-[16/10] w-[88vw] shrink-0 overflow-hidden rounded-sm bg-neutral-900 shadow-2xl sm:w-[60vw] lg:w-[42rem]"
						>
							{/* Background architectural image */}
							<div
								className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
								style={{
									backgroundImage: `url('${images[index % images.length]}')`
								}}
							/>

							{/* Gradient overlay: right side dark in LTR, left side dark in RTL */}
							<div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/80 to-transparent rtl:bg-gradient-to-r rtl:from-black/95 rtl:via-black/80 rtl:to-transparent" />

							{/* Card content aligned to the dark side: Right in LTR, Left in RTL */}
							<div className="relative z-10 ml-auto flex h-full w-full flex-col justify-between p-8 text-right sm:w-[58%] sm:p-10 lg:w-1/2 rtl:mr-auto rtl:ml-0 rtl:text-left">
								{/* Top: Project Title */}
								<div>
									<h3 className="font-serif text-2xl font-normal tracking-wider text-white uppercase sm:text-3xl lg:text-4xl">
										{project.name.value}
									</h3>
								</div>

								{/* Middle: Details (Location, Category, Year) */}
								<div className="my-auto space-y-1 py-4">
									<p className="font-sans text-sm font-light text-neutral-300 sm:text-base">
										{project.location.value}
									</p>
									<p className="font-sans text-sm font-light text-neutral-400 sm:text-base">
										{project.category?.value ?? project.location.value}
									</p>
									<p className="pt-1 font-sans text-sm font-medium text-neutral-300">
										{project.year ?? "2026"}
									</p>
								</div>

								{/* Bottom: Discover Project Link */}
								<div>
									<span className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase transition-colors group-hover:text-white sm:text-sm">
										{content.discover?.value ?? "DISCOVER PROJECT"}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<a
					href="/projects"
					className="group mt-10 inline-flex items-center gap-3 font-sans text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:text-accent lg:hidden"
				>
					<span>{content.viewAll.value}</span>
					<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
				</a>
			</div>
		</section>
	);
};
