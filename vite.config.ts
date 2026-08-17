import { intlayer } from "vite-intlayer";
import { devtools } from "@tanstack/devtools-vite";

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
		intlayer()
	],
	server: {
		allowedHosts: [
			"ca20-197-46-135-104.ngrok-free.app",
			".ngrok-free.app"
		]
	}
});

export default config;
