import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

export const Clients: FC = () => {
	const content = useIntlayer("home-clients");

	return (
		<section className="border-y border-border bg-white py-16">
			<div className="mx-auto max-w-7xl px-6">
				<p className="text-center text-sm font-medium tracking-widest text-muted-foreground">
					{content.label.value}
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-12">
					{content.logos.map((logo, index) => (
						<span
							key={`${logo.value}-${index}`}
							className="text-lg font-bold tracking-wider text-muted-foreground/40 transition-colors hover:text-muted-foreground"
						>
							{logo.value}
						</span>
					))}
				</div>
			</div>
		</section>
	);
};