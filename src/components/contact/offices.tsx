import { useState, type FC } from "react";

import { useIntlayer } from "react-intlayer";

import { cn } from "@/lib/utils";

import { Mail, MapPin, Phone } from "lucide-react";

export const Offices: FC = () => {
	const content = useIntlayer("contact-offices");
	const [activeTab, setActiveTab] = useState<"cairo" | "dubai">("cairo");

	const currentOffice = activeTab === "cairo" ? content.cairo : content.dubai;

	return (
		<section
			id="our-offices"
			className="bg-[#fcfbf9] px-6 py-20 text-neutral-900 sm:px-12 lg:px-20"
		>
			<div className="mx-auto max-w-7xl">
				{/* Header with Title & City Switcher */}
				<div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200 pb-6 sm:flex-row sm:items-center">
					<h2 className="font-sans text-xl font-bold tracking-widest text-neutral-900 uppercase sm:text-2xl">
						{content.sectionTitle.value}
					</h2>

					<div className="flex items-center gap-8">
						<button
							type="button"
							onClick={() => setActiveTab("cairo")}
							className={cn(
								"cursor-pointer pb-2 font-sans text-xs font-semibold tracking-widest uppercase transition-colors",
								activeTab === "cairo"
									? "border-b-2 border-neutral-900 text-neutral-900"
									: "text-neutral-400 hover:text-neutral-700"
							)}
						>
							{content.cairoTab.value}
						</button>
						<button
							type="button"
							onClick={() => setActiveTab("dubai")}
							className={cn(
								"cursor-pointer pb-2 font-sans text-xs font-semibold tracking-widest uppercase transition-colors",
								activeTab === "dubai"
									? "border-b-2 border-neutral-900 text-neutral-900"
									: "text-neutral-400 hover:text-neutral-700"
							)}
						>
							{content.dubaiTab.value}
						</button>
					</div>
				</div>

				{/* Office Info Grid */}
				<div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Column: Office Details */}
					<div className="lg:col-span-7">
						<h3 className="font-serif text-2xl font-medium tracking-tight text-[#1c2e42] sm:text-3xl">
							{currentOffice.title.value}
						</h3>

						<div className="mt-8 flex flex-col gap-6">
							{/* Address */}
							<div className="flex items-start gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5efe6] text-[#b38b4d]">
									<MapPin className="size-5" />
								</div>
								<div className="flex flex-col">
									<span className="font-sans text-base font-bold text-neutral-900">
										{currentOffice.addressTitle.value}
									</span>
									<span className="mt-0.5 text-sm text-neutral-600">
										{currentOffice.addressDetail.value}
									</span>
								</div>
							</div>

							{/* Phone */}
							<div className="flex items-start gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5efe6] text-[#b38b4d]">
									<Phone className="size-5" />
								</div>
								<div className="flex flex-col">
									<span className="font-sans text-base font-bold text-neutral-900">
										{currentOffice.phoneTitle.value}
									</span>
									<a
										href={`tel:${currentOffice.phoneDetail.value}`}
										className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
									>
										{currentOffice.phoneDetail.value}
									</a>
								</div>
							</div>

							{/* Email */}
							<div className="flex items-start gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5efe6] text-[#b38b4d]">
									<Mail className="size-5" />
								</div>
								<div className="flex flex-col">
									<span className="font-sans text-base font-bold text-neutral-900">
										{currentOffice.emailTitle.value}
									</span>
									<a
										href={`mailto:${currentOffice.emailDetail.value}`}
										className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
									>
										{currentOffice.emailDetail.value}
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Office Hours Card */}
					<div className="lg:col-span-5">
						<div className="rounded-2xl bg-[#0d0d0d] p-8 text-white shadow-xl">
							<h4 className="font-sans text-lg font-semibold text-[#e5c590]">
								{currentOffice.hoursTitle.value}
							</h4>

							<div className="mt-6 flex flex-col gap-4">
								{currentOffice.schedule.map((item, index) => (
									<div
										key={index}
										className="flex items-center justify-between text-sm text-neutral-300"
									>
										<span className="font-light">{item.days.value}</span>
										<span className="font-sans text-xs tracking-wider text-white">
											{item.time.value}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
