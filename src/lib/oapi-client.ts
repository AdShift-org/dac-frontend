import { queryOptions } from "@tanstack/react-query";

import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

import type { paths } from "./v1";

export const client = createFetchClient<paths>({
	baseUrl: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json"
	},
	fetch: async (input) => {
		try {
			return await fetch(input);
		} catch (_err) {
			// normalize "server unreachable"
			return new Response("Server Error", {
				status: 500,
				statusText: _err?.message
			});
		}
	}
});

export const $api = createClient<paths>(client);

type PathsWithGet = {
	[K in keyof paths]: "get" extends keyof paths[K]
		? keyof paths[K]["get"] extends never
			? never
			: K
		: never;
}[keyof paths];

export function getQueryOptions<Path extends PathsWithGet>(
	url: Path,
	init?: Record<string, unknown>,
	accessToken?: string
) {
	return queryOptions({
		queryKey: [url, init, accessToken],
		queryFn: () => {
			const headers: Record<string, string> = {};
			if (accessToken) {
				headers.Authorization = `Bearer ${accessToken}`;
			}
			return client.GET(url, {
				...init,
				headers: {
					...headers,
					// @ts-expect-error - external types
					...init?.headers
				}
			});
		},
		staleTime: 60 * 60 * 1000
	});
}
