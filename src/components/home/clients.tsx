import type { FC, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef } from "react";

import { useIntlayer } from "react-intlayer";

import client1 from "#/assets/home/clients/1.png";
import client2 from "#/assets/home/clients/2.png";
import client3 from "#/assets/home/clients/3.png";
import client4 from "#/assets/home/clients/4.png";
import client5 from "#/assets/home/clients/5.png";

const clientLogos = [
	{ id: 1, src: client1, alt: "Emaar" },
	{ id: 2, src: client2, alt: "Danube Properties" },
	{ id: 3, src: client3, alt: "Intermass" },
	{ id: 4, src: client4, alt: "Gulf Asia" },
	{ id: 5, src: client5, alt: "ASCC" }
];

interface InteractiveMarqueeProps {
	items: typeof clientLogos;
	speed?: number;
	reverse?: boolean;
}

const InteractiveMarquee: FC<InteractiveMarqueeProps> = ({
	items,
	speed = 40,
	reverse = false
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const singleSetRef = useRef<HTMLDivElement>(null);

	const posRef = useRef(0);
	const velocityRef = useRef(0);
	const isDraggingRef = useRef(false);
	const lastXRef = useRef(0);
	const lastTimeRef = useRef(0);
	const isHoveredRef = useRef(false);

	const targetSpeed = reverse ? speed : -speed;

	useEffect(() => {
		let animationFrameId: number;
		let lastFrameTime = performance.now();

		const loop = (now: number) => {
			const deltaSeconds = Math.min((now - lastFrameTime) / 1000, 0.1);
			lastFrameTime = now;

			const singleWidth = singleSetRef.current?.offsetWidth || 0;

			if (singleWidth > 0 && trackRef.current) {
				if (isDraggingRef.current) {
					// Velocity is updated in pointer move
				} else {
					// Ease velocity back toward target auto speed (or paused when hovered)
					const currentTarget = isHoveredRef.current ? targetSpeed * 0.25 : targetSpeed;
					velocityRef.current +=
						(currentTarget - velocityRef.current) * Math.min(1, deltaSeconds * 6);
					posRef.current += velocityRef.current * deltaSeconds;
				}

				// Wrap infinitely within singleSetWidth bounds
				if (posRef.current <= -singleWidth) {
					posRef.current += singleWidth;
				} else if (posRef.current > 0) {
					posRef.current -= singleWidth;
				}

				trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
			}

			animationFrameId = requestAnimationFrame(loop);
		};

		animationFrameId = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [targetSpeed]);

	const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
		isDraggingRef.current = true;
		lastXRef.current = e.clientX;
		lastTimeRef.current = performance.now();
		velocityRef.current = 0;
		e.currentTarget.setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
		if (!isDraggingRef.current) return;

		const now = performance.now();
		const dt = (now - lastTimeRef.current) / 1000;
		const dx = e.clientX - lastXRef.current;

		if (dt > 0.001) {
			const instantVelocity = dx / dt;
			// Smooth velocity for natural inertia on release
			velocityRef.current = velocityRef.current * 0.6 + instantVelocity * 0.4;
		}

		posRef.current += dx;
		lastXRef.current = e.clientX;
		lastTimeRef.current = now;

		if (trackRef.current && singleSetRef.current) {
			const singleWidth = singleSetRef.current.offsetWidth || 0;
			if (singleWidth > 0) {
				if (posRef.current <= -singleWidth) {
					posRef.current += singleWidth;
				} else if (posRef.current > 0) {
					posRef.current -= singleWidth;
				}
				trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
			}
		}
	};

	const handlePointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
		if (isDraggingRef.current) {
			isDraggingRef.current = false;
			try {
				e.currentTarget.releasePointerCapture(e.pointerId);
			} catch {
				// Ignore if capture was already released
			}
		}
	};

	const renderLogoSet = (isKeyRef = false) => (
		<div
			ref={isKeyRef ? singleSetRef : undefined}
			className="flex shrink-0 items-center gap-6 sm:gap-10 lg:gap-14"
			aria-hidden={!isKeyRef ? true : undefined}
		>
			{items.map((item, index) => (
				<div
					key={`${item.id}-${index}`}
					className="flex items-center gap-6 sm:gap-10 lg:gap-14"
				>
					<div className="flex h-14 w-28 items-center justify-center sm:h-16 sm:w-36 lg:h-20 lg:w-44">
						<img
							src={item.src}
							alt={item.alt}
							draggable={false}
							className="max-h-10 max-w-full object-contain transition-all duration-300 select-none sm:max-h-12"
						/>
					</div>
					<span
						className="font-sans text-sm font-light text-neutral-300 select-none sm:text-base dark:text-neutral-700"
						aria-hidden="true"
					>
						/
					</span>
				</div>
			))}
		</div>
	);

	return (
		<div
			ref={containerRef}
			dir="ltr"
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
			onPointerCancel={handlePointerUp}
			onMouseEnter={() => {
				isHoveredRef.current = true;
			}}
			onMouseLeave={() => {
				isHoveredRef.current = false;
			}}
			className="group relative w-full cursor-grab touch-pan-y overflow-hidden py-3 select-none active:cursor-grabbing"
		>
			{/* Edge fade gradient overlays */}
			<div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-12 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-24 dark:from-background dark:via-background/80" />
			<div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-12 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-24 dark:from-background dark:via-background/80" />

			<div ref={trackRef} className="flex w-max items-center will-change-transform">
				{renderLogoSet(true)}
				{renderLogoSet(false)}
				{renderLogoSet(false)}
				{renderLogoSet(false)}
			</div>
		</div>
	);
};

export const Clients: FC = () => {
	const content = useIntlayer("home-clients");

	return (
		<section className="border-b border-border bg-background py-16 text-foreground sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-8">
				{/* Egypt Clients Row */}
				<div className="mb-14 sm:mb-20">
					<div className="mb-4 flex items-center">
						<p className="font-sans text-xs tracking-wider text-neutral-600 uppercase sm:text-sm dark:text-neutral-400">
							<span className="inline-block w-8 border-t border-neutral-600"></span>{" "}
							{content.egyptTitle.value}
						</p>
					</div>
					<div className="border-t border-border pt-4 sm:pt-6">
						<InteractiveMarquee items={clientLogos} speed={38} />
					</div>
				</div>

				{/* UAE / Dubai Clients Row */}
				<div>
					<div className="mb-4 flex items-center">
						<p className="font-sans text-xs tracking-wider text-neutral-600 uppercase sm:text-sm dark:text-neutral-400">
							<span className="inline-block w-8 border-t border-neutral-600"></span>{" "}
							{content.uaeTitle.value}
						</p>
					</div>
					<div className="border-t border-border pt-4 sm:pt-6">
						<InteractiveMarquee items={clientLogos} speed={32} reverse />
					</div>
				</div>
			</div>
		</section>
	);
};
