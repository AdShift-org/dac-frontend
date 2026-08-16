import type { FC } from "react";

import { useIntlayer } from "react-intlayer";
import { Link } from "@/components/localized-link";

export const Footer: FC = () => {
	const content = useIntlayer("footer");

	return (
		<footer className="border-t border-white/10 bg-black py-8">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
					<div className="flex items-center gap-2">
						<span className="text-xl font-bold tracking-wide text-white">DAC</span>
						<span className="text-xs font-light tracking-widest text-white/50">
							CONSTRUCTION
						</span>
					</div>

					<nav className="flex gap-6">
						<Link
							to="/about"
							className="text-xs tracking-widest text-white/50 transition-colors hover:text-white"
						>
							{content.about.value}
						</Link>
						<Link
							to="/services"
							className="text-xs tracking-widest text-white/50 transition-colors hover:text-white"
						>
							{content.services.value}
						</Link>
						<Link
							to="/projects"
							className="text-xs tracking-widest text-white/50 transition-colors hover:text-white"
						>
							{content.projects.value}
						</Link>
						<Link
							to="/contact"
							className="text-xs tracking-widest text-white/50 transition-colors hover:text-white"
						>
							{content.contact.value}
						</Link>
					</nav>

    				<p className="text-xs text-white/30">{content.rights.replace("{{year}}", new Date().getFullYear().toString())}</p>
				</div>
			</div>
		</footer>
	);
};
