import type { FC } from "react";

import { useLocation } from "@tanstack/react-router";

import { getHTMLTextDir, getLocaleName, getPathWithoutLocale, getPrefix, Locales } from "intlayer";
import { useLocale } from "react-intlayer";

import { Link as LocalizedLink, type To } from "./localized-link";

export const LocaleSwitcher: FC = () => {
	const { pathname } = useLocation();

	const { availableLocales, locale, setLocale } = useLocale();

	const pathWithoutLocale = getPathWithoutLocale(pathname);
	return (
		<ol className="flex gap-2">
			{availableLocales.map((localeEl) => (
				<li key={localeEl}>
					<LocalizedLink
						aria-current={localeEl === locale ? "page" : undefined}
						onClick={() => setLocale(localeEl)}
						params={{ locale: getPrefix(localeEl).localePrefix }}
						to={pathWithoutLocale as To}
					>
						<span>{localeEl}</span>
						<span>{getLocaleName(localeEl, locale)}</span>
						<span dir={getHTMLTextDir(localeEl)} lang={localeEl}>
							{getLocaleName(localeEl)}
						</span>
						<span dir="ltr" lang={Locales.ENGLISH}>
							{getLocaleName(localeEl, Locales.ENGLISH)}
						</span>
					</LocalizedLink>
				</li>
			))}
		</ol>
	);
};
