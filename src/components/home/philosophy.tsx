import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

export const Philosophy: FC = () => {
	const content = useIntlayer("home-philosophy");

	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-12 lg:grid-cols-2">
					<div>
						<h2 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
							{content.heading.value}
						</h2>
						<p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
							{content.paragraph.value}
						</p>

						<div className="mt-10 space-y-8">
							{content.principles.map((principle) => (
								<div key={principle.title.value}>
									<h3 className="text-sm font-medium tracking-widest text-accent">
										{principle.title.value}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
										{principle.description.value}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg">
						<div
							className="aspect-[4/5] bg-cover bg-center"
							style={{
								backgroundImage:
									"url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800')",
							}}
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
					</div>
				</div>
			</div>
		</section>
	);
};