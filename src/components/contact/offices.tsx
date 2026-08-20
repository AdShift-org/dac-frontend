import { useState, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";
import { cn } from "@/lib/utils";

import { Mail, MapPin, Phone } from "lucide-react";

type OfficeData = {
	id: string;
	tab: string;
	title: string;
	addressTitle: string;
	addressDetail: string;
	phone: string;
	email: string;
	hours: { days: string; time: string }[];
};

export const Offices: FC = () => {
	const content = useIntlayer("contact-offices");
	const { locale } = useLocale();
	const { contact } = useCmsData();
	const s = pickSection(contact, "offices", locale as Locale);

	const apiOffices = s?.offices;
	const hasApi = Array.isArray(apiOffices) && apiOffices.length > 0;

	const offices: OfficeData[] = hasApi
		? (apiOffices as unknown[]).map((entry, index) => {
				const o = (entry as Record<string, unknown>)?.[locale] as
					| Record<string, unknown>
					| undefined;
				const hours = Array.isArray(o?.office_hours)
					? (
							o.office_hours as {
								en?: { days: string; hours: string };
								ar?: { days: string; hours: string };
							}[]
						).map((h) => {
							const hh = h?.[locale];
							return {
								days: hh?.days ?? "",
								time: hh?.hours ?? ""
							};
						})
					: [];
				return {
					id: String(o?.id ?? index),
					tab: (o?.branch as string) ?? "",
					title: (o?.branch as string) ?? "",
					addressTitle: (o?.city as string) ?? "",
					addressDetail: (o?.address as string) ?? "",
					phone: (o?.phone as string) ?? "",
					email: (o?.email as string) ?? "",
					hours
				};
			})
		: [
				{
					id: "cairo",
					tab: content.cairoTab.value,
					title: content.cairo.title.value,
					addressTitle: content.cairo.addressTitle.value,
					addressDetail: content.cairo.addressDetail.value,
					phone: content.cairo.phoneDetail.value,
					email: content.cairo.emailDetail.value,
					hours: content.cairo.schedule.map((item) => ({
						days: item.days.value,
						time: item.time.value
					}))
				},
				{
					id: "dubai",
					tab: content.dubaiTab.value,
					title: content.dubai.title.value,
					addressTitle: content.dubai.addressTitle.value,
					addressDetail: content.dubai.addressDetail.value,
					phone: content.dubai.phoneDetail.value,
					email: content.dubai.emailDetail.value,
					hours: content.dubai.schedule.map((item) => ({
						days: item.days.value,
						time: item.time.value
					}))
				}
			];

	const [activeIndex, setActiveIndex] = useState(0);
	const current = offices[Math.min(activeIndex, offices.length - 1)];

	return (
		<section
			id="our-offices"
			className="bg-[#fcfbf9] px-6 py-20 text-neutral-900 sm:px-12 lg:px-20"
		>
			<div className="mx-auto max-w-7xl">
				{/* Header with Title & City Switcher */}
				<div className="flex flex-col items-start justify-between gap-6 border-b border-neutral-200 pb-6 sm:flex-row sm:items-center">
					<h2 className="font-sans text-xl font-bold tracking-widest text-neutral-900 uppercase sm:text-2xl">
						{(s?.title as string) || content.sectionTitle.value}
					</h2>

					{offices.length > 1 && (
						<div className="flex flex-wrap items-center gap-8">
							{offices.map((office, index) => (
								<button
									key={office.id}
									type="button"
									onClick={() => setActiveIndex(index)}
									className={cn(
										"cursor-pointer pb-2 font-sans text-xs font-semibold tracking-widest uppercase transition-colors",
										activeIndex === index
											? "border-b-2 border-neutral-900 text-neutral-900"
											: "text-neutral-400 hover:text-neutral-700"
									)}
								>
									{office.tab}
								</button>
							))}
						</div>
					)}
				</div>

				{/* Office Info Grid */}
				<div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Column: Office Details */}
					<div className="lg:col-span-7">
						<h3 className="font-serif text-2xl font-medium tracking-tight text-[#1c2e42] sm:text-3xl">
							{current.title}
						</h3>

						<div className="mt-8 flex flex-col gap-6">
							{/* Address */}
							<div className="flex items-start gap-4">
								<div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f5efe6] text-[#b38b4d]">
									<MapPin className="size-5" />
								</div>
								<div className="flex flex-col">
									<span className="font-sans text-base font-bold text-neutral-900">
										{current.addressTitle}
									</span>
									<span className="mt-0.5 text-sm text-neutral-600">
										{current.addressDetail}
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
										{content.cairo.phoneTitle.value}
									</span>
									<a
										href={`tel:${current.phone}`}
										className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
									>
										{current.phone}
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
										{content.cairo.emailTitle.value}
									</span>
									<a
										href={`mailto:${current.email}`}
										className="mt-0.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
									>
										{current.email}
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Office Hours Card */}
					<div className="lg:col-span-5">
						{current.hours.length > 0 ? (
							<div className="rounded-2xl bg-[#0d0d0d] p-8 text-white shadow-xl">
								<h4 className="font-sans text-lg font-semibold text-[#e5c590]">
									{content.cairo.hoursTitle.value}
								</h4>

								<div className="mt-6 flex flex-col gap-4">
									{current.hours.map((item, index) => (
										<div
											key={index}
											className="flex items-center justify-between text-sm text-neutral-300"
										>
											<span className="font-light">{item.days}</span>
											<span className="font-sans text-xs tracking-wider text-white">
												{item.time}
											</span>
										</div>
									))}
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};
