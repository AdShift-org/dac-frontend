import type { FC } from "react";

import { Link as RegularLink, type LinkComponentProps } from "@tanstack/react-router";

import { getPrefix } from "intlayer";
import { useLocale } from "react-intlayer";

export const LOCALE_ROUTE = "{-$locale}" as const;

export type To = StripLocalePrefix<LinkComponentProps["to"]>;

export type StripLocalePrefix<T extends string | undefined> = T extends
	| `/${typeof LOCALE_ROUTE}/`
	| `/${typeof LOCALE_ROUTE}`
	? "/"
	: T extends `/${typeof LOCALE_ROUTE}/${infer Rest}`
		? `/${Rest}`
		: T;

type LocalizedLinkProps = {
	to?: To;
} & Omit<LinkComponentProps, "to">;

export const Link: FC<LocalizedLinkProps> = (props) => {
	const { locale } = useLocale();
	const { localePrefix } = getPrefix(locale);

	return (
		<RegularLink
			{...props}
			params={{
				locale: localePrefix,
				...(typeof props?.params === "object" ? props?.params : {})
			}}
			to={`/${LOCALE_ROUTE}${props.to}` as LinkComponentProps["to"]}
		/>
	);
};
