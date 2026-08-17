import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { Building2, Cpu, Car, Dumbbell, Gamepad2, ShieldCheck, Trees, Waves } from "lucide-react";

import type { AmenityItem, ProjectDetailData } from "./project-detail-data";

interface ProjectAmenitiesProps {
	project: ProjectDetailData;
	isArabic: boolean;
}

const amenityIcons: Record<AmenityItem["iconName"], FC<{ className?: string }>> = {
	clubhouse: Building2,
	gym: Dumbbell,
	security: ShieldCheck,
	pool: Waves,
	smarthome: Cpu,
	kids: Gamepad2,
	park: Trees,
	parking: Car
};

export const ProjectAmenities: FC<ProjectAmenitiesProps> = ({ project, isArabic }) => {
	const content = useIntlayer("project-detail");

	return (
		<section className="bg-[#f7f6f2] px-6 py-24 sm:px-12 sm:py-32">
			<div className="mx-auto max-w-7xl">
				<h2 className="font-serif text-3xl font-normal text-neutral-950 sm:text-4xl md:text-5xl">
					{content.curatedAmenities.value}
				</h2>

				<div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
					{project.amenities.map((amenity) => {
						const Icon = amenityIcons[amenity.iconName] ?? Building2;
						return (
							<div
								key={amenity.id}
								className="group flex flex-col items-center justify-center rounded-xs border border-neutral-900/10 bg-[#121212] p-8 text-center text-white shadow-md transition-all duration-300 hover:border-amber-400/50 hover:bg-[#1a1a1a]"
							>
								<div className="flex size-12 items-center justify-center rounded-full bg-neutral-900 transition-transform group-hover:scale-110">
									<Icon className="size-6 text-amber-400" />
								</div>
								<h4 className="mt-4 font-sans text-xs font-semibold tracking-wider text-neutral-200 uppercase sm:text-sm">
									{isArabic ? amenity.title.ar : amenity.title.en}
								</h4>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};