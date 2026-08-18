import { useMemo, useState, type FC } from "react";

import { useIntlayer, useLocale } from "react-intlayer";
// import { Link } from "@/components/localized-link"; // DISABLED with project links

import { useCmsData } from "@/lib/cms";

// import { ArrowRight, ChevronDown, RotateCcw, Sparkles } from "lucide-react";
import { ChevronDown, ChevronLeft, ChevronRight, RotateCcw, Sparkles } from "lucide-react";

import dacLogo from "#/assets/dac-logo.png";

export const ProjectsList: FC = () => {
	const content = useIntlayer("projects-list");
	const { locale } = useLocale();
	const { projects } = useCmsData();

	// Filter state
	const [statusFilter, setStatusFilter] = useState<string>("all");
	const [sectorFilter, setSectorFilter] = useState<string>("all");

	// All items
	const items = useMemo(() => {
		const api = projects ?? [];
		if (!api.length) {
			return content.items.map((c) => ({
				id: { value: c.id },
				statusKey: { value: c.statusKey },
				typologyKey: { value: c.typologyKey },
				sectorKey: { value: c.sectorKey },
				badge: { value: c.badge.value },
				title: { value: c.title.value },
				description: { value: c.description.value },
				year: { value: c.year },
				location: { value: c.location.value },
				sector: { value: c.sector.value },
				status: { value: c.status.value },
				area: { value: c.area },
				units: { value: "" },
				builtUp: { value: "" },
				delivery: { value: c.year },
				owner: { value: "" },
				consultant: { value: "" },
				contractor: { value: "" },
				startingPrice: { value: "" },
				contractValue: { value: "" },
				image: { value: c.image },
				createdAt: ""
			}));
		}

		const statusLabels = content.statuses as unknown as Record<string, { value: string }>;
		const statusLabel = (s: string): string => statusLabels[s]?.value ?? s.replace(/_/g, " ");
		const num = (n: number | null | undefined): string =>
			n == null ? "" : n.toLocaleString(locale === "ar" ? "ar-EG" : "en-US");

		return api
			.map((raw) => {
				const p = (locale === "ar" ? raw.ar : raw.en) as {
					slug: string;
					status: string;
					title?: string | null;
					name?: string;
					description?: string | null;
					location?: string | null;
				area?: string | null;
				total_units?: number | null;
				built_up_area?: number | null;
				delivery_quarter?: number | null;
				delivery_year?: number | null;
				starting_price?: number | null;
				contract_value?: number | null;
				owner?: string | null;
				consultant?: string | null;
				contractor?: string | null;
				images?: string[];
					created_at?: string | null;
					service?: { en: { name: string }; ar: { name: string } } | null;
				};
				const service = p.service ? (locale === "ar" ? p.service.ar : p.service.en) : null;

				return {
					id: { value: p.slug },
					statusKey: { value: p.status },
					typologyKey: { value: "" },
					sectorKey: { value: service ? service.name : "" },
					badge: { value: statusLabel(p.status) },
					title: { value: (p.title || p.name) ?? "" },
					description: { value: p.description ?? "" },
					year: { value: p.delivery_year ? String(p.delivery_year) : "" },
					location: { value: p.location ?? "" },
					sector: { value: service ? service.name : "" },
					status: { value: p.status },
					area: { value: p.area ?? "" },
					units: { value: num(p.total_units) },
					builtUp: { value: num(p.built_up_area) },
					delivery: {
						value: p.delivery_quarter && p.delivery_year
							? `Q${p.delivery_quarter} ${p.delivery_year}`
							: p.delivery_year
								? String(p.delivery_year)
								: ""
					},
					owner: { value: p.owner ?? "" },
					consultant: { value: p.consultant ?? "" },
					contractor: { value: p.contractor ?? "" },
					startingPrice: { value: num(p.starting_price) },
					contractValue: { value: num(p.contract_value) },
					image: { value: p.images?.[0] || dacLogo },
					createdAt: p.created_at ?? ""
				};
			})
			.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
	}, [projects, locale, content]);

	// Spotlight = first project from backend (ponytail: no featured flag in API)
	const spotlight = useMemo(() => {
		if (!items.length) return null;
		return items[0];
	}, [items]);

	const statusOptions = useMemo(
		() => [
			{ value: "all", label: content.filterLabels.allStatuses.value },
			...Array.from(new Set(items.map((i) => i.statusKey.value).filter(Boolean))).map(
				(v) => ({
					value: v,
					label: v
				})
			)
		],
		[items, content]
	);

	const sectorOptions = useMemo(
		() => [
			{ value: "all", label: content.filterLabels.allSectors.value },
			...Array.from(new Set(items.map((i) => i.sectorKey.value).filter(Boolean))).map(
				(v) => ({
					value: v,
					label: v
				})
			)
		],
		[items, content]
	);

	// Filtering logic
	const isSpotlightVisible = useMemo(() => {
		if (!spotlight) return false;
		const matchStatus = statusFilter === "all" || spotlight.statusKey.value === statusFilter;
		const matchSector = sectorFilter === "all" || spotlight.sectorKey.value === sectorFilter;
		return matchStatus && matchSector;
	}, [statusFilter, sectorFilter, spotlight]);

	const filteredItems = useMemo(() => {
		return items.filter((item) => {
			const matchStatus = statusFilter === "all" || item.statusKey?.value === statusFilter;
			const matchSector = sectorFilter === "all" || item.sectorKey?.value === sectorFilter;
			return matchStatus && matchSector;
		});
	}, [items, statusFilter, sectorFilter]);

	// Pagination
	const PAGE_SIZE = 6;
	const [page, setPage] = useState(1);

	const totalPages = Math.max(1, Math.ceil(filteredItems.length / PAGE_SIZE));
	const activePage = Math.min(page, totalPages);
	const pageItems = useMemo(
		() => filteredItems.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE),
		[filteredItems, activePage]
	);

	const isFiltered = statusFilter !== "all" || sectorFilter !== "all";

	const changeStatus = (v: string) => {
		setStatusFilter(v);
		setPage(1);
	};
	const changeSector = (v: string) => {
		setSectorFilter(v);
		setPage(1);
	};
	const clearAllFilters = () => {
		setStatusFilter("all");
		setSectorFilter("all");
		setPage(1);
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
									onChange={(e) => changeStatus(e.target.value)}
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

						{/* Sector Filter */}
						<div className="flex items-center gap-2">
							<span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
								{content.filterLabels.sector.value}:
							</span>
							<div className="relative inline-block">
								<select
									value={sectorFilter}
									onChange={(e) => changeSector(e.target.value)}
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
				{isSpotlightVisible && spotlight && (
					<div className="mt-14 overflow-hidden border border-neutral-300/80 bg-[#f8f6f0] p-6 sm:p-8 lg:p-10">
						<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
							{/* Spotlight Image */}
							<div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-neutral-900 lg:col-span-6">
								<div className="flex size-full items-center justify-center">
									<img
										src={spotlight.image.value}
										alt={spotlight.title.value}
										className={
											spotlight.image.value === dacLogo
												? "size-1/2 object-contain opacity-40"
												: "size-full object-cover transition-transform duration-700 hover:scale-105"
										}
									/>
								</div>
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
										{spotlight.sector.value}
									</span>

									<h3 className="mt-2.5 font-serif text-2xl leading-tight font-normal text-neutral-900 sm:text-3xl lg:text-4xl">
										{spotlight!.title.value}
									</h3>

									<p className="mt-4 font-sans text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
										{spotlight.description.value}
									</p>

									<div className="mt-6 border-t border-neutral-300/70 pt-4">
										<h4 className="font-serif text-lg font-normal text-neutral-800">
											{spotlight.title.value}
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
									{/* DISABLED: project detail page is hidden. */}
									{/*
									<Link
										to={`/projects/${spotlight.id.value}` as never}
										className="group inline-flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold tracking-[0.2em] text-neutral-900 uppercase transition-colors hover:bg-accent/10 hover:text-accent focus-visible:bg-accent/10 focus-visible:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
									>
										<span>{content.viewProject.value}</span>
										<ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
									</Link>
									*/}
								</div>
							</div>
						</div>
					</div>
				)}

				{/* 2-Column Grid */}
				{filteredItems.length > 0 ? (
					<>
					<div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 lg:grid-cols-2">
{pageItems.map((project) => (
						<article key={project.id.value} className="group flex flex-col">
							{/* Card Image */}
							<div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-900">
								<div className="flex size-full items-center justify-center">
									<img
										src={project.image.value}
										alt={project.title.value}
										className={
											project.image.value === dacLogo
												? "mx-auto size-1/2 object-contain opacity-40"
												: "size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										}
									/>
								</div>
								{/* Status badge */}
								<div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] font-semibold tracking-widest text-white uppercase backdrop-blur-xs">
									<span className="size-1.5 rounded-full bg-emerald-400" />
									<span>{project.badge.value}</span>
								</div>
							</div>

							{/* Title & Year */}
							<div className="mt-6 flex items-baseline justify-between gap-4">
								<h3 className="font-serif text-2xl font-normal text-neutral-900 sm:text-3xl">
									{project.title.value}
								</h3>
								<span className="shrink-0 font-serif text-3xl font-light text-neutral-400 sm:text-4xl">
									{project.year.value}
								</span>
							</div>

							{/* Sector / Location microline */}
							<div className="mt-2 flex items-center gap-2 font-sans text-[11px] font-semibold tracking-[0.18em] text-neutral-500 uppercase">
								{project.sector.value && <span>{project.sector.value}</span>}
								{project.sector.value && project.location.value && (
									<span aria-hidden className="text-neutral-300">
										/
									</span>
								)}
								{project.location.value && (
									<span className="truncate">{project.location.value}</span>
								)}
							</div>

							{/* Description */}
							<p className="mt-4 font-sans text-xs leading-relaxed font-light text-neutral-600 sm:text-sm">
								{project.description.value}
							</p>

							{/* Prominent data panel */}
							<div className="mt-6 border border-neutral-300/80 bg-[#efeae0] p-5 sm:p-6">
								<span className="block font-sans text-[10px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
									{content.projectData.value}
								</span>

								{/* Spec */}
								<div className="mt-4 grid grid-cols-4 divide-x divide-neutral-300/70 rtl:divide-x-reverse">
									{[
										{ label: content.metaLabels.units.value, value: project.units.value },
										{ label: content.metaLabels.builtUp.value, value: project.builtUp.value },
										{ label: content.metaLabels.area.value, value: project.area.value },
										{ label: content.metaLabels.delivery.value, value: project.delivery.value }
									].map((cell) => (
										<div
											key={cell.label}
											className="px-2 py-1 first:pl-0 last:pr-0"
										>
											<span className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
												{cell.label}
											</span>
											<span className="mt-1 block truncate font-serif text-xl font-normal text-neutral-900 sm:text-2xl">
												{cell.value || "—"}
											</span>
										</div>
									))}
								</div>

								{/* Stakeholders */}
								<div className="mt-4 grid grid-cols-3 divide-x divide-neutral-300/70 border-t border-neutral-300/80 pt-4 rtl:divide-x-reverse">
									{[
										{ label: content.metaLabels.owner.value, value: project.owner.value },
										{ label: content.metaLabels.consultant.value, value: project.consultant.value },
										{ label: content.metaLabels.contractor.value, value: project.contractor.value }
									].map((cell) => (
										<div
											key={cell.label}
											className="px-2 first:pl-0 last:pr-0"
										>
											<span className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
												{cell.label}
											</span>
											<span className="mt-0.5 block truncate font-sans text-sm font-medium text-neutral-900">
												{cell.value || "—"}
											</span>
										</div>
									))}
								</div>

								{/* Commercial */}
								<div className="mt-4 grid grid-cols-2 divide-x divide-neutral-300/70 border-t border-neutral-300/80 pt-4 rtl:divide-x-reverse">
									{[
										{ label: content.metaLabels.startingPrice.value, value: project.startingPrice.value },
										{ label: content.metaLabels.contractValue.value, value: project.contractValue.value }
									].map((cell) => (
										<div
											key={cell.label}
											className="pr-2 first:pl-0 last:pr-0"
										>
											<span className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-400 uppercase">
												{cell.label}
											</span>
											<span className="mt-1 block truncate font-serif text-xl font-normal text-neutral-900 sm:text-2xl">
												{cell.value || "—"}
											</span>
										</div>
									))}
								</div>
							</div>
						</article>
					))}
					</div>

					{/* Pagination */}
					{totalPages > 1 && (
						<nav
							aria-label={content.filterLabels.paginationLabel.value}
							className="mt-16 flex items-center justify-center gap-3 border-t border-neutral-300/70 pt-8"
						>
							<button
								type="button"
								disabled={activePage === 1}
								onClick={() => setPage((p) => Math.max(1, p - 1))}
								className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:pointer-events-none disabled:opacity-40"
							>
								<ChevronLeft className="size-4 rtl:rotate-180" />
								<span className="hidden sm:inline">{content.filterLabels.prev.value}</span>
							</button>

							<div className="flex items-center gap-1.5">
								{Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
									<button
										key={n}
										type="button"
										onClick={() => setPage(n)}
										aria-current={n === activePage ? "page" : undefined}
										className={
											n === activePage
												? "flex size-8 items-center justify-center bg-neutral-900 font-sans text-xs font-semibold text-white"
												: "flex size-8 items-center justify-center font-sans text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
										}
									>
										{n}
									</button>
								))}
							</div>

							<button
								type="button"
								disabled={activePage === totalPages}
								onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
								className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 disabled:pointer-events-none disabled:opacity-40"
							>
								<span className="hidden sm:inline">{content.filterLabels.next.value}</span>
								<ChevronRight className="size-4 rtl:rotate-180" />
							</button>
						</nav>
					)}
					</>
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
