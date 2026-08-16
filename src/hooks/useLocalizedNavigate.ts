import { useNavigate as useReactRouterNavigate } from "@tanstack/react-router";

import { getPrefix } from "intlayer";
import { useLocale } from "react-intlayer";

import { LOCALE_ROUTE, type StripLocalePrefix } from "@/components/localized-link";

import type { FileRouteTypes } from "@/routeTree.gen";

type NavigateFn = ReturnType<typeof useReactRouterNavigate>;
type BaseNavigateOptions = Parameters<NavigateFn>[0];

type LocalizedTo = StripLocalePrefix<FileRouteTypes["to"]>;

export type LocalizedNavigateOptions = Omit<BaseNavigateOptions, "to" | "params"> & {
	to: LocalizedTo;
	params?: Omit<NonNullable<BaseNavigateOptions["params"]>, "locale">;
};

type LocalizedNavigate = (options: LocalizedNavigateOptions) => ReturnType<NavigateFn>;

export const useLocalizedNavigate = () => {
	const navigate = useReactRouterNavigate();

	const { locale } = useLocale();

	const localizedNavigate: LocalizedNavigate = (args: any) => {
		const { localePrefix } = getPrefix(locale);

		if (typeof args === "string") {
			return navigate({
				to: `/${LOCALE_ROUTE}${args}`,
				params: { locale: localePrefix }
			});
		}

		const { to, params, ...rest } = args;

		const localizedTo = `/${LOCALE_ROUTE}${to}` as any;

		return navigate({
			to: localizedTo,
			params: { locale: localePrefix, ...params } as any,
			...rest
		});
	};

	return localizedNavigate;
};
