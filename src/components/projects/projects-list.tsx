import { useMemo, useState, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";

import { ArrowRight, ChevronDown, RotateCcw, Sparkles } from "lucide-react";

import { Link } from "@/components/localized-link";
import { useCmsData } from "@/lib/cms";

export const ProjectsList: FC = () => {
	const content = useIntlayer("projects-list");
	const { locale } = useLocale();
	const { projects } = useCmsData();

	// Filter state
	const [statusFilter, setStatusFilter] = useState<string>("all");
	const [typologyFilter, setTypologyFilter] = useState<string>("all");
	const [sectorFilter, setSectorFilter] = useState<string>("all");

	// Spotlight item (curated fallback; backend has no featured concept)
	const spotlight = content.spotlight;

	// All items
	const items = useMemo(() => {
		const api = projects ?? [];
		if (!api.length) return content.items;

		return api.map((raw) => {
			const p = (locale === "ar" ? raw.ar : raw.en) as {
				slug: string;
				status: string;
				title?: string | null;
				name?: string;
				description?: string | null;
				location?: string | null;
				area?: string | null;
				delivery_year?: number | null;
				images?: string[];
				service?: { en: { name: string }; ar: { name: string } } | null;
			};
			const service = p.service ? (locale === "ar" ? p.service.ar : p.service.en) : null;

			return {
				id: { value: p.slug },
				statusKey: { value: p.status },
				typologyKey: { value: "" },
				sectorKey: { value: "" },
				badge: { value: "PROJECT" },
				title: { value: (p.title || p.name) ?? "" },
				description: { value: p.description ?? "" },
				year: { value: p.delivery_year ? String(p.delivery_year) : "" },
				location: { value: p.location ?? "" },
				sector: { value: service ? service.name : "" },
				status: { value: p.status },
				area: { value: p.area ?? "" },
				image: { value: p.images?.[0] ?? "" }
			};
		});
	}, [projects, locale, content]);

	// Filter options
	const statusOptions = useMemo(
		() => [
			{ value: "all", label: content.filterLabels.allStatuses.value },
			{ value: "completed", label: "Completed" },
			{ value: "ongoing", label: "Ongoing" },
			{ value: "in-progress", label: "In Progress" },
			{ value: "in-planning", label: "In Planning" },
			{ value: "masterplan", label: "Masterplan" }
		],
		[content]
	);

	const typologyOptions = useMemo(
		() => [
			{ value: "all", label: content.filterLabels.allTypologies.value },
			{ value: "residential", label: "Residential" },
			{ value: "commercial", label: "Commercial" }
		],
		[content]
	);

	const sectorOptions = useMemo(
		() => [
			{ value: "all", label: content.filterLabels.allSectors.value },
			{ value: "architecture", label: "Architecture" },
			{ value: "residential", label: "Residential" },
			{ value: "commercial", label: "Commercial" }
		],
		[content]
	);

	// Filtering logic
	const isSpotlightVisible = useMemo(() => {
		const matchStatus =
			statusFilter === "all" || spotlight.statusKey?.value === statusFilter;
		const matchTypology =
			typologyFilter === "all" || spotlight.typologyKey?.value === typologyFilter;
		const matchSector =
			sectorFilter === "all" || spotlight.sectorKey?.value === sectorFilter;
		return matchStatus && matchTypology && matchSector;
	}, [statusFilter, typologyFilter, sectorFilter, spotlight]);

	const filteredItems = useMemo(() => {
		return items.filter((item) => {
			const matchStatus =
				statusFilter === "all" || item.statusKey?.value === statusFilter;
			const matchTypology =
				typologyFilter === "all" || item.typologyKey?.value === typologyFilter;
			const matchSector =
				sectorFilter === "all" || item.sectorKey?.value === sectorFilter;
			return matchStatus && matchTypology && matchSector;
		});
	}, [items, statusFilter, typologyFilter, sectorFilter]);

	const isFiltered =
		statusFilter !== "all" || typologyFilter !== "all" || sectorFilter !== "all";

	const clearAllFilters = () => {
		setStatusFilter("all");
		setTypologyFilter("all");
		setSectorFilter("all");
	};

	return (
		<section
			id="portfolio"
			className="relative bg-[#f5f2eb] px-6 py-20 text-neutral-900 sm:px-12 sm:py-28 lg:px-20"
		>
			<div className="mx-auto max-w-7xl">
				{/* Top Section Header */}
				<div className="flex flex-col justify-between gap-6 border-b border-neutral-300/70 pb-12 md:flex-row md:items-end">
					<div>
						<span className="font-sans text-xs font-semibold tracking-[0.25em] text-neutral-500 uppercase">
							{content.label.value}
						</span>
						<h2 className="mt-3 font-serif text-4xl font-normal tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
							{content.heading.value}
						</h2>
					</div>
					<div className="max-w-md">
						<p className="font-sans text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
							{content.intro.value}
						</p>
					</div>
				</div>

				{/* Filter Toolbar */}
				<div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-300/70 pb-8">
					<div className="flex flex-wrap items-center gap-4 sm:gap-8">
						{/* Status Filter */}
						<div className="flex items-center gap-2">
							<span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
								{content.filterLabels.status.value}:
							</span>
							<div className="relative inline-block">
								<select
									value={statusFilter}
									onChange={(e) => setStatusFilter(e.target.value)}
									className="cursor-pointer appearance-none rounded-none border-b border-neutral-400 bg-transparent pr-6 pl-1 font-sans text-xs font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none"
								>
									{statusOptions.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-3 -translate-y-1/2 text-neutral-600" />
							</div>
						</div>

						{/* Typology Filter */}
						<div className="flex items-center gap-2">
							<span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
								{content.filterLabels.typology.value}:
							</span>
							<div className="relative inline-block">
								<select
									value={typologyFilter}
									onChange={(e) => setTypologyFilter(e.target.value)}
									className="cursor-pointer appearance-none rounded-none border-b border-neutral-400 bg-transparent pr-6 pl-1 font-sans text-xs font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none"
								>
									{typologyOptions.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-3 -translate-y-1/2 text-neutral-600" />
							</div>
						</div>

						{/* Sector Filter */}
						<div className="flex items-center gap-2">
							<span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
								{content.filterLabels.sector.value}:
							</span>
							<div className="relative inline-block">
								<select
									value={sectorFilter}
									onChange={(e) => setSectorFilter(e.target.value)}
									className="cursor-pointer appearance-none rounded-none border-b border-neutral-400 bg-transparent pr-6 pl-1 font-sans text-xs font-medium text-neutral-900 transition-colors focus:border-neutral-900 focus:outline-none"
								>
									{sectorOptions.map((opt) => (
										<option key={opt.value} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
								<ChevronDown className="pointer-events-none absolute top-1/2 right-0 size-3 -translate-y-1/2 text-neutral-600" />
							</div>
						</div>
					</div>

					{/* Reset / Count */}
					<div className="flex items-center gap-4">
						{isFiltered && (
							<button
								type="button"
								onClick={clearAllFilters}
								className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
							>
								<RotateCcw className="size-3.5" />
								<span>{content.filterLabels.clearFilters.value}</span>
							</button>
						)}
					</div>
				</div>

				{/* Spotlight Featured Section */}
				{isSpotlightVisible && (
					<div className="mt-14 overflow-hidden border border-neutral-300/80 bg-[#f8f6f0] p-6 sm:p-8 lg:p-10">
						<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
							{/* Spotlight Image */}
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-neutral-900 lg:col-span-6">
								<img
									src={spotlight.image.value}
									alt={spotlight.title.value}
									className="size-full object-cover transition-transform duration-700 hover:scale-105"
								/>
								{/* Badge */}
								<div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-xs">
									<span className="size-1.5 rounded-full bg-emerald-400" />
									<span>{spotlight.badge.value}</span>
								</div>
							</div>

							{/* Spotlight Details */}
							<div className="flex flex-col justify-between lg:col-span-6">
								<div>
									<span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-neutral-500 uppercase">
										{spotlight.tag.value}
									</span>

									<h3 className="mt-2.5 font-serif text-2xl leading-tight font-normal text-neutral-900 sm:text-3xl lg:text-4xl">
										{spotlight.title.value}
									</h3>

									<p className="mt-4 font-sans text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
										{spotlight.description.value}
									</p>

									<div className="mt-6 border-t border-neutral-300/70 pt-4">
										<h4 className="font-serif text-lg font-normal text-neutral-800">
											{spotlight.subHeading.value}
										</h4>
										<div className="mt-3 flex items-center gap-8">
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
													{content.metaLabels.location.value}
												</span>
												<span className="mt-0.5 block font-sans text-xs font-medium text-neutral-800">
													{spotlight.location.value}
												</span>
											</div>
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
													{content.metaLabels.year.value}
												</span>
												<span className="mt-0.5 block font-sans text-xs font-medium text-neutral-800">
													{spotlight.year.value}
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-8">
									<Link
										to={`/projects/${spotlight.id.value}` as never}
										className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase transition-colors hover:text-accent"
									>
										<span>{content.viewProject.value}</span>
										<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* 2-Column Grid */}
				{filteredItems.length > 0 ? (
					<div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
						{filteredItems.map((project) => (
							<article key={project.id.value} className="group flex flex-col">
								{/* Card Image */}
								<Link
									to={`/projects/${project.id.value}` as never}
									className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-neutral-900"
								>
									<img
										src={project.image.value}
										alt={project.title.value}
										className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									/>
									{/* Badge */}
									<div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-xs">
										{project.badge.value.toLowerCase().includes("featured") && (
											<span className="size-1.5 rounded-full bg-amber-400" />
										)}
										<span>{project.badge.value}</span>
									</div>
								</Link>

								{/* Card Info */}
								<div className="mt-5 flex flex-1 flex-col">
									{/* Title & Year */}
									<div className="flex items-baseline justify-between gap-4">
										<Link
											to={`/projects/${project.id.value}` as never}
											className="transition-colors hover:text-neutral-600"
										>
											<h3 className="font-serif text-2xl font-normal text-neutral-900 sm:text-3xl">
												{project.title.value}
											</h3>
										</Link>
										<span className="font-serif text-3xl font-light text-neutral-400 sm:text-4xl">
											{project.year.value}
										</span>
									</div>

									{/* Description */}
									<p className="mt-2 font-sans text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
										{project.description.value}
									</p>

									{/* Divider & Metadata columns */}
									<div className="mt-6 border-t border-neutral-300/80 pt-4">
										<div className="grid grid-cols-4 gap-2 text-start">
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
													{content.metaLabels.location.value}
												</span>
												<span className="mt-0.5 block truncate font-sans text-xs font-medium text-neutral-800">
													{project.location.value}
												</span>
											</div>
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
													{content.metaLabels.sector.value}
												</span>
												<span className="mt-0.5 block truncate font-sans text-xs font-medium text-neutral-800">
													{project.sector.value}
												</span>
											</div>
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
													{content.metaLabels.status.value}
												</span>
												<span className="mt-0.5 block truncate font-sans text-xs font-medium text-neutral-800">
													{project.status.value}
												</span>
											</div>
											<div>
												<span className="block font-sans text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
													{content.metaLabels.area.value}
												</span>
												<span className="mt-0.5 block truncate font-sans text-xs font-medium text-neutral-800">
													{project.area.value}
												</span>
											</div>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				) : !isSpotlightVisible ? (
					/* Empty State when no item and no spotlight matches */
					<div className="mt-16 flex flex-col items-center justify-center border border-dashed border-neutral-300 py-20 text-center">
						<Sparkles className="size-8 text-neutral-400" />
						<p className="mt-4 font-serif text-xl font-normal text-neutral-800">
							{content.filterLabels.noResults.value}
						</p>
						<button
							type="button"
							onClick={clearAllFilters}
							className="mt-4 inline-flex items-center gap-2 border-b border-neutral-800 pb-0.5 font-sans text-xs font-semibold tracking-widest text-neutral-900 uppercase"
						>
							<span>{content.filterLabels.clearFilters.value}</span>
						</button>
					</div>
				) : null}
			</div>
		</section>
	);
};
