import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Link } from "@/components/localized-link";

import ctaImage from "#/assets/cta.jpeg";

export const Cta: FC = () => {
	const content = useIntlayer("home-cta");

	return (
		<section className="relative min-h-[550px] overflow-hidden bg-neutral-950 py-32 text-white">
			{/* Background Image with warm indoor architectural tree & spotlights */}
			<div
				className="absolute inset-0 bg-cover bg-right sm:bg-center"
				style={{
					backgroundImage: ctaImage
						? `url(${ctaImage})`
						: "url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1600')"
				}}
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/80 to-neutral-950/30 rtl:bg-gradient-to-l" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
				<div className="max-w-2xl text-start">
					<h2 className="font-serif text-4xl leading-[1.06] font-bold tracking-tight text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl">
						<span className="block">{content.heading1.value}</span>
						<span className="block">{content.heading2.value}</span>
						<span className="block">{content.heading3.value}</span>
					</h2>

					<div className="mt-10 flex flex-wrap items-center gap-4">
						<Link
							to={"/contact" as never}
							className="inline-flex h-12 items-center justify-center bg-white px-8 font-sans text-xs font-bold tracking-widest text-neutral-950 uppercase transition-colors hover:bg-neutral-200"
						>
							{content.consultation.value}
						</Link>
						<Link
							to={"/contact" as never}
							className="inline-flex h-12 items-center justify-center border border-white/40 bg-black/40 px-8 font-sans text-xs font-semibold tracking-widest text-white uppercase backdrop-blur-sm transition-colors hover:border-white hover:bg-black/70"
						>
							{content.contact.value}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
