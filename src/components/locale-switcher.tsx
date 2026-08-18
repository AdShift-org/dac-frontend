import type { FC } from "react";

import { useLocation, useNavigate } from "@tanstack/react-router";

import { getLocaleName, getPathWithoutLocale, getPrefix } from "intlayer";
import { useLocale } from "react-intlayer";

import { LOCALE_ROUTE } from "./localized-link";
import { Button } from "./ui/button";

export const LocaleSwitcher: FC = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const { availableLocales, locale, setLocale } = useLocale();

	const pathWithoutLocale = getPathWithoutLocale(pathname);
	const currentIndex = availableLocales.indexOf(locale);
	const nextLocale = availableLocales[(currentIndex + 1) % availableLocales.length];

	return (
		<Button
			type="button"
			variant="ghost"
			onClick={() => {
				setLocale(nextLocale);
				void navigate({
					to: `/${LOCALE_ROUTE}${pathWithoutLocale}`,
					params: { locale: getPrefix(nextLocale).localePrefix }
				});
			}}
			aria-label={`Switch to ${getLocaleName(locale, nextLocale)}`}
			className="rounded-none text-xs font-medium tracking-widest text-white/80 transition-colors"
		>
			{getLocaleName(nextLocale, nextLocale)}
		</Button>
	);
};
