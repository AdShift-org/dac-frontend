import type { FC } from "react";

import dacLogo from "#/assets/dac-logo-no-slogan.png";

export const Preloader: FC = () => (
	<div className="flex h-full flex-col items-center justify-center gap-8">
		<img
			src={dacLogo}
			alt="DAC"
			className="max-h-24 w-auto max-w-[280px] animate-pulse object-contain opacity-90 sm:max-h-32 sm:max-w-[360px]"
		/>
		<div
			role="progressbar"
			aria-label="Loading"
			className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
		>
			<div className="h-full w-1/3 animate-preloader-sweep bg-accent" />
		</div>
	</div>
);

export const PreloaderOverlay: FC<{ className?: string }> = ({ className }) => (
	<div
		className={`fixed inset-0 z-60 bg-neutral-950 ${className ?? ""}`}
		style={{ height: "100dvh" }}
	>
		<Preloader />
	</div>
);
