import type { FC } from "react";
import { useEffect, useState } from "react";

import { useLocation } from "@tanstack/react-router";

import { getPathWithoutLocale } from "intlayer";
import { useIntlayer } from "react-intlayer";

import { Menu, X } from "lucide-react";

import logoImg from "#/assets/dac-logo.png";

import { LocaleSwitcher } from "./locale-switcher";
import { Link as LocalizedLink, type To } from "./localized-link";

const navLinks = [
	{ to: "/", key: "home" },
	{ to: "/about", key: "about" },
	{ to: "/projects", key: "projects" },
	{ to: "/services", key: "services" },
	{ to: "/media", key: "media" },
	{ to: "/contact", key: "contact" }
];

export const Header: FC = () => {
	const content = useIntlayer("header");
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
			className={`fixed top-0 right-0 left-0 z-40 py-3 transition-all duration-700 ${
				scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent backdrop-blur-md"
			} ${
				introComplete
					? "pointer-events-auto translate-y-0 opacity-100"
					: "pointer-events-none -translate-y-6 opacity-0"
			}`}
		>
			<div className="mx-auto flex h-auto max-w-7xl items-center justify-between px-6 sm:px-12">
				<LocalizedLink
					to="/"
					className="flex w-20 items-center gap-2 py-1 text-white sm:w-24"
				>
					<img src={logoImg} alt="DAC logo" className="w-full object-contain" />
				</LocalizedLink>

				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map((link) => (
						<LocalizedLink
							key={link.to}
							to={link.to as To}
							activeOptions={{ exact: true }}
							className="group relative text-xs font-medium tracking-widest text-white/80 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:transition-transform after:duration-300 after:content-[''] hover:text-white [&.active]:text-white [&.active]:after:origin-center [&.active]:after:scale-x-100"
						>
							{content[link.key as keyof typeof content].value}
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

			{/* Mobile menu */}
			<div
				className={`overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-in-out md:hidden ${
					mobileOpen
						? "max-h-96 translate-y-0 opacity-100"
						: "max-h-0 -translate-y-2 opacity-0"
				}`}
			>
				<nav className="border-t border-white/10 bg-black/95 px-6 py-4">
					{navLinks.map((link) => (
						<LocalizedLink
							key={link.to}
							to={link.to as To}
							className="group relative block py-2 ps-3 text-sm tracking-widest text-white/80 transition-colors before:absolute before:top-1/2 before:left-0 before:h-4 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity before:content-[''] hover:text-white [&.active]:text-white [&.active]:before:opacity-100"
							onClick={() => setMobileOpen(false)}
						>
							{content[link.key as keyof typeof content].value}
						</LocalizedLink>
					))}
				</nav>
			</div>
		</header>
	);
};
