import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Plus } from "lucide-react";

export const Services: FC = () => {
	const content = useIntlayer("home-services");

	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid gap-12 lg:grid-cols-2">
					<div>
						<p className="text-sm font-medium tracking-widest text-accent">
							{content.label.value}
						</p>
						<h2 className="mt-4 font-heading text-4xl leading-tight font-bold text-primary md:text-5xl">
							{content.heading1.value}
							<br />
							{content.heading2.value}
						</h2>
						<p className="mt-6 max-w-sm text-base text-muted-foreground">
							{content.paragraph.value}
						</p>
						<a
							href="/services"
							className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-accent transition-colors hover:text-primary"
						>
							{content.seeAll.value}
							<span className="text-lg rtl:rotate-180">→</span>
						</a>
					</div>

					<div className="divide-y divide-border">
						{content.services.map((service, index) => (
							<div
								key={index}
								className="group flex items-center justify-between py-6 transition-colors hover:bg-neutral-50"
							>
								<div className="flex items-center gap-6">
									<span className="text-sm text-muted-foreground">
										{String(index + 1).padStart(2, "0")}
									</span>
									<h3 className="text-xl font-semibold tracking-wide text-primary">
										{service.value}
									</h3>
								</div>
								<Plus className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
