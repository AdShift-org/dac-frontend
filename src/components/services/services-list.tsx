import { useRef, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

import { Link } from "@/components/localized-link";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ServicesList: FC = () => {
	const content = useIntlayer("services-list");
	const { locale } = useLocale();
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const rows = gsap.utils.toArray<HTMLElement>(".srv-row");

			rows.forEach((row) => {
				const textCol = row.querySelector(".srv-text-col");
				const imgCol = row.querySelector(".srv-img-col");

				gsap.set(textCol, { opacity: 0, y: 35 });
				gsap.set(imgCol, { opacity: 0, scale: 0.96 });

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: row,
						start: "top 80%",
						once: true
					},
					defaults: { ease: "power3.out" }
				});

				tl.to(imgCol, {
					opacity: 1,
					scale: 1,
					duration: 1
				}).to(
					textCol,
					{
						opacity: 1,
						y: 0,
						duration: 0.9
					},
					"-=0.6"
				);
			});
		},
		{ scope: containerRef, dependencies: [locale] }
	);

	return (
		<div id="services-grid" ref={containerRef} className="w-full">
			{content.items.map((item, index) => {
				const isEven = index % 2 === 0;
				const isDark = item.theme.value === "dark";

				return (
					<section
						key={index}
						className={cn(
							"srv-row relative py-20 sm:py-28 lg:py-36 transition-colors",
							isDark ? "bg-[#12110e] text-white" : "bg-white text-neutral-900"
						)}
					>
						<div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
							<div
								className={cn(
									"grid items-center gap-10 lg:grid-cols-12 lg:gap-16",
									isEven ? "lg:flex-row" : "lg:flex-row-reverse"
								)}
							>
								{/* Text Column */}
								<div
									className={cn(
										"srv-text-col flex flex-col justify-center",
										isEven
											? "order-1 lg:order-1 lg:col-span-5"
											: "order-1 lg:order-2 lg:col-span-5"
									)}
								>
									<span
										className={cn(
											"font-mono text-xs font-semibold tracking-widest uppercase",
											isDark ? "text-neutral-400" : "text-neutral-500"
										)}
									>
										{item.tag.value}
									</span>

									<h2
										className={cn(
											"mt-4 font-sans text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl",
											isDark ? "text-white" : "text-neutral-900"
										)}
									>
										{item.title.value}
									</h2>

									<p
										className={cn(
											"mt-4 text-sm leading-relaxed font-light sm:text-base",
											isDark ? "text-neutral-300" : "text-neutral-600"
										)}
									>
										{item.description.value}
									</p>

									<div className="mt-8">
										<Link
											to={"/projects" as never}
											className={cn(
												"group inline-flex items-center gap-3 border px-6 py-3 font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-200",
												isDark
													? "border-white/30 text-white hover:border-white hover:bg-white/10"
													: "border-neutral-900/30 text-neutral-900 hover:border-neutral-900 hover:bg-neutral-900/5"
											)}
										>
											<span>{item.buttonText.value}</span>
											<ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
										</Link>
									</div>
								</div>

								{/* Image Column */}
								<div
									className={cn(
										"srv-img-col",
										isEven
											? "order-2 lg:order-2 lg:col-span-7"
											: "order-2 lg:order-1 lg:col-span-7"
									)}
								>
									<div className="group relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-neutral-900 shadow-xl">
										<img
											src={item.image.value}
											alt={item.imageAlt.value}
											loading="lazy"
											className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										/>
										<div
											className={cn(
												"pointer-events-none absolute inset-0 transition-opacity duration-300",
												isDark
													? "bg-black/10 group-hover:bg-transparent"
													: "bg-black/5 group-hover:bg-transparent"
											)}
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
};
