import type { FC } from "react";

import { ArrowDown } from "lucide-react";
import { useIntlayer } from "react-intlayer";

export const Hero: FC = () => {
	const content = useIntlayer("home-hero");

	return (
		<section className="relative flex h-screen items-center justify-center bg-neutral-900">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')",
				}}
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

			<div className="relative z-10 mx-auto max-w-7xl px-6 text-left">
				<h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
					{content.headline1.value}
					<br />
					{content.headline2.value}
					<br />
					<span className="text-accent">{content.headline3.value}</span>
				</h1>
				<p className="mt-6 max-w-xl text-lg text-white/70">
					{content.subtitle.value}
				</p>
				<a
					href="#projects"
					className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-white transition-colors hover:text-accent"
				>
					{content.cta.value}
					<ArrowDown className="h-4 w-4" />
				</a>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
				<ArrowDown className="h-6 w-6 text-white/50" />
			</div>
		</section>
	);
};