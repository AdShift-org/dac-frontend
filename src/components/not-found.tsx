import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Link } from "@/components/localized-link";

export const NotFound: FC = () => {
	const content = useIntlayer("not-found");

	return (
		<main className="flex h-screen items-center justify-center bg-neutral-950 px-6 text-white">
			<div className="max-w-md text-center">
				<p className="font-serif text-6xl font-bold text-accent">404</p>
				<h1 className="mt-4 font-serif text-2xl font-semibold tracking-tight uppercase">
					{content.title.value}
				</h1>
				<p className="mt-3 text-sm leading-relaxed font-light text-white/70">
					{content.message.value}
				</p>
				<Link
					to="/"
					className="mt-8 inline-flex items-center border-b border-white/30 pb-2 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:border-accent hover:text-accent"
				>
					{content.back.value}
				</Link>
			</div>
		</main>
	);
};