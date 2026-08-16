import type { FC } from "react";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Link as LocalizedLink, type To } from "./localized-link";
import { LocaleSwitcher } from "./locale-switcher";

const navLinks = [
	{ to: "/about", label: "ABOUT" },
	{ to: "/services", label: "SERVICES" },
	{ to: "/projects", label: "PROJECTS" },
	{ to: "/clients", label: "CLIENTS" },
	{ to: "/company", label: "COMPANY" },
	{ to: "/contact", label: "CONTACT" }
];

export const Header: FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
				scrolled
					? "bg-black/80 backdrop-blur-sm"
					: "bg-transparent backdrop-blur-md"
			}`}
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
				<LocalizedLink to="/" className="flex items-center gap-2 text-white">
					<span className="text-xl font-bold tracking-wide">DAC</span>
					<span className="hidden text-xs font-light tracking-widest text-white/70 sm:inline">
						CONSTRUCTION
					</span>
				</LocalizedLink>

				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<LocalizedLink
							key={link.to}
							to={link.to as To}
							className="text-xs font-medium tracking-widest text-white/80 transition-colors hover:text-white"
						>
							{link.label}
						</LocalizedLink>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<LocaleSwitcher />

					<button
						type="button"
						className="text-white md:hidden"
						onClick={() => setMobileOpen(!mobileOpen)}
					>
						{mobileOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{mobileOpen && (
				<nav className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
					{navLinks.map((link) => (
						<LocalizedLink
							key={link.to}
							to={link.to as To}
							className="block py-2 text-sm tracking-widest text-white/80 transition-colors hover:text-white"
							onClick={() => setMobileOpen(false)}
						>
							{link.label}
						</LocalizedLink>
					))}
				</nav>
			)}
		</header>
	);
};
