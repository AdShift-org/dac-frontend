import createFetchClient from "openapi-fetch";
import createClient from "openapi-react-query";

import type { paths } from "./v1";

export const client = createFetchClient<paths>({
	baseUrl: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json"
	},
	fetch: async (input, init) => {
		try {
			return await fetch(input, init);
		} catch (err) {
			// normalize "server unreachable"
			return new Response("Server Error", {
				status: 500,
				statusText: err instanceof Error ? err.message : String(err)
			});
		}
	}
});

export const $api = createClient(client);
