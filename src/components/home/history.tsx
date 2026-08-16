import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

export const History: FC = () => {
	const content = useIntlayer("home-history");

	return (
		<section className="bg-neutral-900 py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex items-end justify-between">
					<h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
						{content.heading.value}
					</h2>
					<p className="hidden text-sm tracking-widest text-white/50 md:block">
						{content.subtitle.value}
					</p>
				</div>

				<div className="relative mt-16">
					<div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />

					<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
						{content.milestones.map((milestone, index) => (
							<div
								key={milestone.year}
								className={`relative ${index % 2 === 0 ? "pb-12" : "pt-12"}`}
							>
								<div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-neutral-900" />

								<div className="text-center">
									<p className="text-4xl font-bold text-accent">
										{milestone.year}
									</p>
									<p className="mt-2 text-sm font-medium tracking-widest text-white">
										{milestone.title.value}
									</p>
									<p className="mt-3 text-sm leading-relaxed text-white/60">
										{milestone.description.value}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};