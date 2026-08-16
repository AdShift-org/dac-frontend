import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

const images = [
	"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
	"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
];

export const Leadership: FC = () => {
	const content = useIntlayer("home-leadership");

	return (
		<section className="bg-neutral-900 py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-sm font-medium tracking-widest text-accent">
							{content.label.value}
						</p>
						<h2 className="mt-4 font-heading text-3xl font-bold text-white md:text-4xl">
							{content.heading.value}
						</h2>
						<p className="mt-2 text-sm text-white/50">{content.subtitle.value}</p>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
					{content.members.map((member, index) => (
						<div key={index} className="group">
							<div className="relative overflow-hidden rounded-lg">
								<div
									className="aspect-[3/4] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
									style={{
										backgroundImage: `url('${images[index]}')`,
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							</div>
							<div className="mt-4">
								<h3 className="text-sm font-semibold tracking-widest text-white">
									{member.name.value}
								</h3>
								<p className="mt-1 text-xs text-white/50">{member.role.value}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};