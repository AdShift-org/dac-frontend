import { createFileRoute } from "@tanstack/react-router";

import { getIntlayer } from "intlayer";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import ImageResponse from "takumi-js/response";

// const content = getIntlayer("route1");

const tajawal = (weight: number) =>
	readFileSync(
		join(
			process.cwd(),
			"node_modules/@fontsource/tajawal/files",
			`tajawal-arabic-${weight}-normal.woff2`
		)
	);

export const Route = createFileRoute("/og-image")({
	server: {
		handlers: {
			GET({ request }) {
				const url = new URL(request.url);
				const title = url.searchParams.get("title") ?? "DAC Construction";
				const description = url.searchParams.get("description") ?? "";

				return new ImageResponse(
					<div
						style={{
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							padding: 64,
							backgroundImage: "linear-gradient(to bottom right, #eff6ff, #dbeafe)",
							fontFamily: "Tajawal"
						}}
					>
						<p
							style={{
								fontSize: 72,
								fontWeight: 700,
								color: "#111827",
								textWrap: "balance"
							}}
						>
							{title}
						</p>
						<p style={{ fontSize: 42, fontWeight: 400, color: "#4b5563" }}>
							{description}
						</p>
					</div>,
					{
						width: 1200,
						height: 630,
						fonts: [
							{ name: "Tajawal", weight: 700, data: tajawal(700) },
							{ name: "Tajawal", weight: 400, data: tajawal(400) }
						]
					}
				);
			}
		}
	}
});
