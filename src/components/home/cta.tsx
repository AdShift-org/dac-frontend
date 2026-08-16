import type { FC } from "react";

import { useIntlayer } from "react-intlayer";
import { Link } from "@/components/localized-link";

export const Cta: FC = () => {
	const content = useIntlayer("home-cta");

	return (
		<section className="relative bg-neutral-900 py-32">
			<div className="mx-auto max-w-7xl px-6 text-center">
				<h2 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
					{content.heading1.value}
					<br />
					{content.heading2.value}
					<br />
					{content.heading3.value}
				</h2>
				<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
					<Link
						to={"/contact" as never}
						className="inline-flex h-12 items-center border border-white px-8 text-sm font-medium tracking-widest text-white transition-colors hover:bg-white hover:text-neutral-900"
					>
						{content.consultation.value}
					</Link>
					<Link
						to={"/contact" as never}
						className="inline-flex h-12 items-center bg-accent px-8 text-sm font-medium tracking-widest text-neutral-900 transition-colors hover:bg-accent/90"
					>
						{content.contact.value}
					</Link>
				</div>
			</div>
		</section>
	);
};