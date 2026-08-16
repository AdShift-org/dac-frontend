import type { FC } from "react";

import { useLocation } from "@tanstack/react-router";

import { getPathWithoutLocale, getPrefix } from "intlayer";
import { useLocale } from "react-intlayer";

import { Link as LocalizedLink, type To } from "./localized-link";

export const LocaleSwitcher: FC = () => {
	const { pathname } = useLocation();

	const { availableLocales, locale, setLocale } = useLocale();

	const pathWithoutLocale = getPathWithoutLocale(pathname);
	return (
		<ol className="flex items-center gap-1 text-xs font-medium tracking-widest">
			{availableLocales.map((localeEl, index) => (
				<li key={localeEl} className="flex items-center gap-1">
					{index > 0 && <span className="text-white/30">/</span>}
					<LocalizedLink
						aria-current={localeEl === locale ? "page" : undefined}
						onClick={() => setLocale(localeEl)}
						params={{ locale: getPrefix(localeEl).localePrefix }}
						to={pathWithoutLocale as To}
						className={
							localeEl === locale
								? "text-accent transition-colors hover:text-accent"
								: "text-white/80 transition-colors hover:text-white"
						}
					>
						{localeEl.toUpperCase()}
					</LocalizedLink>
				</li>
			))}
		</ol>
	);
};