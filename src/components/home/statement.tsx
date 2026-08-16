import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

export const Statement: FC = () => {
	const content = useIntlayer("home-statement");

	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-12 lg:grid-cols-2">
					<div>
						<p className="text-sm font-medium tracking-widest text-accent">
							{content.label.value}
						</p>
						<h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
							{content.heading1.value}
							<br />
							{content.heading2.value}
							<br />
							{content.heading3.value}
						</h2>
					</div>

					<div className="flex flex-col justify-center">
						<p className="text-base leading-relaxed text-muted-foreground">
							{content.p1.value}
						</p>
						<p className="mt-4 text-base leading-relaxed text-muted-foreground">
							{content.p2.value}
						</p>

						<div className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-10">
							<div>
								<p className="text-xs font-medium tracking-widest text-muted-foreground">
									{content.stats.established.value}
								</p>
								<p className="mt-2 text-lg font-semibold text-primary">
									{content.establishedValue.value}
								</p>
							</div>
							<div>
								<p className="text-xs font-medium tracking-widest text-muted-foreground">
									{content.stats.headquarters.value}
								</p>
								<p className="mt-2 text-lg font-semibold text-primary">
									{content.headquartersValue.value}
								</p>
							</div>
							<div>
								<p className="text-xs font-medium tracking-widest text-muted-foreground">
									{content.stats.projects.value}
								</p>
								<p className="mt-2 text-lg font-semibold text-primary">
									{content.projectsValue.value}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};