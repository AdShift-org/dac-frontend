import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Link } from "@/components/localized-link";

import logoImg from "#/assets/dac-logo.png";


export const Footer: FC = () => {
	const content = useIntlayer("footer");

	return (
		<footer className="border-t border-white/10 bg-[#0c0b0a] py-12 text-white">
			<div className="mx-auto max-w-7xl px-6 sm:px-12">
				<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
					{/* Logo */}
					<div className="flex items-center gap-2 w-20">

                        <img src={logoImg} alt="DAC logo" className="w-full object-contain" />

					</div>

					{/* Nav links */}
					<nav className="flex flex-wrap justify-center gap-8">
						<Link
							to="/about"
							className="font-sans text-xs font-medium tracking-widest text-white/60 transition-colors hover:text-accent"
						>
							{content.about.value}
						</Link>
						<Link
							to="/services"
							className="font-sans text-xs font-medium tracking-widest text-white/60 transition-colors hover:text-accent"
						>
							{content.services.value}
						</Link>
						<Link
							to="/projects"
							className="font-sans text-xs font-medium tracking-widest text-white/60 transition-colors hover:text-accent"
						>
							{content.projects.value}
						</Link>
						<Link
							to="/contact"
							className="font-sans text-xs font-medium tracking-widest text-white/60 transition-colors hover:text-accent"
						>
							{content.contact.value}
						</Link>
					</nav>

					{/* Copyright */}
					<p className="font-sans text-xs text-white/40">
						{content.rights.replace("{{year}}", new Date().getFullYear().toString())}
					</p>
				</div>
			</div>
		</footer>
	);
};
