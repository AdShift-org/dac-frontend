import { createFileRoute } from "@tanstack/react-router";

import { readFileSync } from "node:fs";
import { join } from "node:path";
import ImageResponse from "takumi-js/response";

const tajawal = (weight: number) =>
	readFileSync(
		join(
			process.cwd(),
			"node_modules/@fontsource/tajawal/files",
			`tajawal-arabic-${weight}-normal.woff2`
		)
	);

const abhaya = (weight: number) =>
	readFileSync(
		join(
			process.cwd(),
			"node_modules/@fontsource/abhaya-libre/files",
			`abhaya-libre-latin-${weight}-normal.woff2`
		)
	);

const logoDataUri = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/dac-logo-no-slogan.png")).toString("base64")}`;

const BRAND = {
	bg: "#0f0e0c",
	gold: "#d4a853",
	text: "#f5f0e8",
	muted: "#8a8278",
	surface: "#1a1814"
} as const;

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
							backgroundColor: BRAND.bg,
							padding: 72,
							position: "relative"
						}}
					>
						<div
							style={{
								position: "absolute",
								top: 0,
								right: 0,
								width: 500,
								height: 500,
								borderRadius: "50%",
								background:
									"radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)"
							}}
						/>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 20
							}}
						>
							<img
								alt="DAC Construction"
								src={logoDataUri}
								style={{
									height: 56,
									width: "auto",
									objectFit: "contain"
								}}
							/>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 12
								}}
							>
								<div
									style={{
										width: 1,
										height: 28,
										backgroundColor: BRAND.muted
									}}
								/>
								<span
									style={{
										fontFamily: "Abhaya Libre",
										fontSize: 20,
										fontWeight: 600,
										color: BRAND.muted,
										letterSpacing: "0.08em"
									}}
								>
									DAC Construction
								</span>
							</div>
						</div>

						<div
							style={{
								width: 80,
								height: 2,
								backgroundColor: BRAND.gold,
								marginTop: 48,
								marginBottom: 32
							}}
						/>

						<div
							style={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								gap: 20
							}}
						>
							<p
								style={{
									fontFamily: "Abhaya Libre",
									fontSize: 64,
									fontWeight: 700,
									color: BRAND.text,
									lineHeight: 1.15,
									margin: 0,
									textWrap: "balance"
								}}
							>
								{title}
							</p>
							{description && (
								<p
									style={{
										fontFamily: "Tajawal",
										fontSize: 32,
										fontWeight: 400,
										color: BRAND.muted,
										lineHeight: 1.5,
										margin: 0,
										maxWidth: 800
									}}
								>
									{description}
								</p>
							)}
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center"
							}}
						>
							<div
								style={{
									display: "flex",
									gap: 32
								}}
							>
								{["Projects", "Services", "Contact"].map((item) => (
									<span
										key={item}
										style={{
											fontFamily: "Abhaya Libre",
											fontSize: 16,
											color: BRAND.muted,
											letterSpacing: "0.06em"
										}}
									>
										{item}
									</span>
								))}
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8
								}}
							>
								<div
									style={{
										width: 6,
										height: 6,
										borderRadius: "50%",
										backgroundColor: BRAND.gold
									}}
								/>
								<span
									style={{
										fontFamily: "Abhaya Libre",
										fontSize: 14,
										color: BRAND.gold,
										letterSpacing: "0.1em"
									}}
								>
									dacconstructions.ae
								</span>
							</div>
						</div>
					</div>,
					{
						width: 1200,
						height: 630,
						fonts: [
							{ name: "Abhaya Libre", weight: 700, data: abhaya(700) },
							{ name: "Abhaya Libre", weight: 600, data: abhaya(600) },
							{ name: "Tajawal", weight: 400, data: tajawal(400) }
						]
					}
				);
			}
		}
	}
});
