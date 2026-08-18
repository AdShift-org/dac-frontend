import { useLoaderData } from "@tanstack/react-router";

import type { components } from "./v1";

export type Service = components["schemas"]["Service"];
export type Project = components["schemas"]["Project"];
export type Locale = "en" | "ar";

export type HomeSection = Record<string, unknown>;

export function useCmsData() {
	return useLoaderData({ from: "/{-$locale}" });
}

export function unfoldAr(value: unknown): unknown {
	if (Array.isArray(value)) return value.map(unfoldAr);
	if (typeof value !== "object" || value === null) return value;
	const obj = value as Record<string, unknown>;
	const out: Record<string, unknown> = {};
	for (const [key, val] of Object.entries(obj)) {
		const norm = unfoldAr(val);
		if (key.endsWith("_ar")) out[key.slice(0, -3)] = norm;
		out[key] = norm;
	}
	return out;
}

export function pickSection(
	sections: Record<string, { en: HomeSection; ar: HomeSection }> | undefined,
	name: string,
	locale: Locale
): HomeSection | undefined {
	const section = sections?.[name];
	if (!section) return undefined;
	const raw = locale === "ar" ? section.ar : section.en;
	return locale === "ar" ? (unfoldAr(raw) as HomeSection) : raw;
}