import { useState, type FC } from "react";

import { useForm } from "@tanstack/react-form";

import { useIntlayer, useLocale } from "react-intlayer";

import { useCmsData, pickSection, type Locale } from "@/lib/cms";

import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

interface ContactInquiryData {
	fullName: string;
	email: string;
	phone: string;
	company: string;
	projectType: string;
	projectLocation: string;
	message: string;
}

export const InquiryForm: FC = () => {
	const content = useIntlayer("contact-inquiry");
	const { locale } = useLocale();
	const { contact } = useCmsData();
	const s = pickSection(contact, "inquiry_section", locale as Locale);
	const contactInfo = pickSection(contact, "contact_section", locale as Locale);
	const str = (key: string, fallback: string) => (s?.[key] as string) || fallback;
	const contactStr = (key: string, fallback: string) =>
		(contactInfo?.[key] as string) || fallback;
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<ContactInquiryData>({
		defaultValues: {
			fullName: "",
			email: "",
			phone: "",
			company: "",
			projectType: "Real Estate Development",
			projectLocation: "",
			message: ""
		},
		onSubmit: async () => {
			// Simulate API submission
			await new Promise((resolve) => setTimeout(resolve, 800));
			setIsSubmitted(true);
			form.reset();
		}
	});

	return (
		<section className="bg-[#fcfbf9] px-6 py-24 text-neutral-900 sm:px-12 lg:px-20">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
					{/* Left Column: Heading & Description */}
					<div className="lg:col-span-5">
						{/* Gold decorative top line */}
						<div className="mb-6 h-[2px] w-12 bg-[#cbb28d]" />

						<h2 className="font-serif text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl">
							{str("title", content.sectionTitle.value)}
						</h2>

						<p className="mt-6 max-w-md text-sm leading-relaxed font-light text-neutral-600 sm:text-base">
							{str("description", content.sectionDesc.value)}
						</p>

						{contactInfo && (contactInfo.email || contactInfo.phone) && (
							<div className="mt-8 flex flex-col gap-2 text-sm text-neutral-600">
								<a
									href={`mailto:${contactStr("email", "")}`}
									className="w-fit font-medium text-neutral-800 underline decoration-[#cbb28d] underline-offset-4 hover:text-neutral-900"
								>
									{contactStr("email", "")}
								</a>
								<a
									href={`tel:${contactStr("phone", "")}`}
									className="w-fit font-medium text-neutral-800 underline decoration-[#cbb28d] underline-offset-4 hover:text-neutral-900"
								>
									{contactStr("phone", "")}
								</a>
							</div>
						)}
					</div>

					{/* Right Column: Inquiry Form */}
					<div className="lg:col-span-7">
						{isSubmitted ? (
							<div className="flex flex-col items-start gap-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-8 text-emerald-900">
								<div className="flex items-center gap-3">
									<CheckCircle2 className="size-6 text-emerald-600" />
									<h4 className="font-sans text-base font-semibold">
										{content.successMessage.value}
									</h4>
								</div>
								<button
									type="button"
									onClick={() => setIsSubmitted(false)}
									className="mt-4 cursor-pointer font-sans text-xs font-semibold tracking-wider text-emerald-700 uppercase underline hover:text-emerald-900"
								>
									{content.submitBtn.value}
								</button>
							</div>
						) : (
							<form
								onSubmit={(e) => {
									e.preventDefault();
									e.stopPropagation();
									form.handleSubmit();
								}}
								className="flex flex-col gap-10"
							>
								{/* Row 1: Full Name & Email */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
									<form.Field
										name="fullName"
										validators={{
											onChange: ({ value }) =>
												!value?.trim()
													? content.validation.nameRequired.value
													: undefined
										}}
									>
										{(field) => (
											<div className="flex flex-col gap-2">
												<label
													htmlFor={field.name}
													className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
												>
													{content.fullName.value}
												</label>
												<input
													id={field.name}
													name={field.name}
													type="text"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(e.target.value)
													}
													placeholder={content.fullNamePlaceholder.value}
													className="w-full border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
												/>
												{field.state.meta.errors.length > 0 && (
													<span className="text-xs text-red-500">
														{field.state.meta.errors[0]}
													</span>
												)}
											</div>
										)}
									</form.Field>

									<form.Field
										name="email"
										validators={{
											onChange: ({ value }) => {
												if (!value?.trim()) {
													return content.validation.emailRequired.value;
												}
												if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
													return content.validation.emailInvalid.value;
												}
												return undefined;
											}
										}}
									>
										{(field) => (
											<div className="flex flex-col gap-2">
												<label
													htmlFor={field.name}
													className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
												>
													{content.email.value}
												</label>
												<input
													id={field.name}
													name={field.name}
													type="email"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(e.target.value)
													}
													placeholder={content.emailPlaceholder.value}
													className="w-full border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
												/>
												{field.state.meta.errors.length > 0 && (
													<span className="text-xs text-red-500">
														{field.state.meta.errors[0]}
													</span>
												)}
											</div>
										)}
									</form.Field>
								</div>

								{/* Row 2: Phone Number & Company */}
								<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
									<form.Field name="phone">
										{(field) => (
											<div className="flex flex-col gap-2">
												<label
													htmlFor={field.name}
													className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
												>
													{content.phone.value}
												</label>
												<input
													id={field.name}
													name={field.name}
													type="tel"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(e.target.value)
													}
													placeholder={content.phonePlaceholder.value}
													className="w-full border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
												/>
											</div>
										)}
									</form.Field>

									<form.Field name="company">
										{(field) => (
											<div className="flex flex-col gap-2">
												<label
													htmlFor={field.name}
													className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
												>
													{content.company.value}
												</label>
												<input
													id={field.name}
													name={field.name}
													type="text"
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(e.target.value)
													}
													placeholder={content.companyPlaceholder.value}
													className="w-full border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
												/>
											</div>
										)}
									</form.Field>
								</div>

								{/* Row 3: Project Type (Select Dropdown) */}
								<form.Field name="projectType">
									{(field) => (
										<div className="flex flex-col gap-2">
											<label
												htmlFor={field.name}
												className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
											>
												{content.projectType.value}
											</label>
											<div className="relative">
												<select
													id={field.name}
													name={field.name}
													value={field.state.value}
													onBlur={field.handleBlur}
													onChange={(e) =>
														field.handleChange(e.target.value)
													}
													className="w-full appearance-none border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
												>
													<option value="Real Estate Development">
														{content.projectTypes.realEstate.value}
													</option>
													<option value="Commercial Complex">
														{content.projectTypes.commercial.value}
													</option>
													<option value="Residential Architecture & Villas">
														{content.projectTypes.residential.value}
													</option>
													<option value="Interior Architecture & Fitout">
														{content.projectTypes.interior.value}
													</option>
													<option value="General Construction & Infrastructure">
														{content.projectTypes.infrastructure.value}
													</option>
												</select>
												<ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-neutral-500 rtl:right-auto rtl:left-0" />
											</div>
										</div>
									)}
								</form.Field>

								{/* Row 4: Project Location */}
								<form.Field name="projectLocation">
									{(field) => (
										<div className="flex flex-col gap-2">
											<label
												htmlFor={field.name}
												className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
											>
												{content.projectLocation.value}
											</label>
											<input
												id={field.name}
												name={field.name}
												type="text"
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder={
													content.projectLocationPlaceholder.value
												}
												className="w-full border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
											/>
										</div>
									)}
								</form.Field>

								{/* Row 5: Tell Us About Your Project... */}
								<form.Field
									name="message"
									validators={{
										onChange: ({ value }) =>
											!value?.trim()
												? content.validation.messageRequired.value
												: undefined
									}}
								>
									{(field) => (
										<div className="flex flex-col gap-2">
											<label
												htmlFor={field.name}
												className="font-sans text-[11px] font-bold tracking-widest text-neutral-800 uppercase"
											>
												{content.message.value}
											</label>
											<textarea
												id={field.name}
												name={field.name}
												rows={3}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
												placeholder={content.messagePlaceholder.value}
												className="w-full resize-none border-b border-neutral-300 bg-transparent pb-3 font-sans text-sm text-neutral-900 placeholder:text-neutral-300 focus:border-neutral-900 focus:outline-none"
											/>
											{field.state.meta.errors.length > 0 && (
												<span className="text-xs text-red-500">
													{field.state.meta.errors[0]}
												</span>
											)}
										</div>
									)}
								</form.Field>

								{/* Submit Button */}
								<div className="mt-4 flex items-center justify-start">
									<form.Subscribe
										selector={(state) => [state.canSubmit, state.isSubmitting]}
									>
										{([canSubmit, isSubmitting]) => (
											<button
												type="submit"
												disabled={!canSubmit || isSubmitting}
												className="group flex cursor-pointer items-center gap-3 bg-black px-8 py-4 font-sans text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
											>
												<span>
													{isSubmitting
														? content.submittingBtn.value
														: content.submitBtn.value}
												</span>
												<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
											</button>
										)}
									</form.Subscribe>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
