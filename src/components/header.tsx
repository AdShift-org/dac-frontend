import type { FC } from "react";

import { useLocation } from "@tanstack/react-router";
import { getPathWithoutLocale } from "intlayer";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Link as LocalizedLink, type To } from "./localized-link";
import { LocaleSwitcher } from "./locale-switcher";

import logoImg from "#/assets/dac-logo.png";

const navLinks = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "ABOUT" },
	{ to: "/projects", label: "PROJECTS" },
	{ to: "/services", label: "SERVICES" },
	{ to: "/media", label: "Media" },
	{ to: "/contact", label: "CONTACT" }
];

export const Header: FC = () => {
	const { pathname } = useLocation();
	const pathWithoutLocale = getPathWithoutLocale(pathname);
	const isHomePage = pathWithoutLocale === "/" || pathWithoutLocale === "";

	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [introComplete, setIntroComplete] = useState(!isHomePage);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!isHomePage) {
			setIntroComplete(true);
			return;
		}

		const handleIntroComplete = () => {
			setIntroComplete(true);
		};

		window.addEventListener("hero-intro-complete", handleIntroComplete);
		return () => {
			window.removeEventListener("hero-intro-complete", handleIntroComplete);
		};
	}, [isHomePage]);

	return (
		<header
			id="site-header"
			className={`fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-700 ${
				scrolled
					? "bg-black/80 backdrop-blur-sm"
					: "bg-transparent backdrop-blur-md"
			} ${
				introComplete
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 -translate-y-6 pointer-events-none"
			}`}
		>
			<div className="mx-auto flex h-auto max-w-7xl items-center justify-between px-6 sm:px-12">
				<LocalizedLink to="/" className="flex items-center gap-2 text-white w-20 sm:w-24 py-1">
					<img src={logoImg} alt="DAC logo" className="w-full object-contain" />
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
