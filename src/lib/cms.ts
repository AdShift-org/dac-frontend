import { useLoaderData } from "@tanstack/react-router";

import type { components } from "./v1";

export type Service = components["schemas"]["Service"];
export type Project = components["schemas"]["Project"];
export type Locale = "en" | "ar";

export type HomeSection = Record<string, unknown>;

export function useCmsData() {
	return useLoaderData({ from: "/{-$locale}" });
}

export function pickSection(
	sections: Record<string, { en: HomeSection; ar: HomeSection }> | undefined,
	name: string,
	locale: Locale
): HomeSection | undefined {
	const section = sections?.[name];
	if (!section) return undefined;
	return locale === "ar" ? section.ar : section.en;
}