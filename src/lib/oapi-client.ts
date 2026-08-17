import createFetchClient from "openapi-fetch";

import type { paths } from "./v1";

export const client = createFetchClient<paths>({
	baseUrl: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json"
	},
	fetch: async (input) => {
		try {
			return await fetch(input);
		} catch (err) {
			// normalize "server unreachable"
			return new Response("Server Error", {
				status: 500,
				statusText: err instanceof Error ? err.message : String(err)
			});
		}
	}
});