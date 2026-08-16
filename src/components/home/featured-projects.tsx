import type { FC } from "react";

import { useIntlayer } from "react-intlayer";

import { ArrowRight } from "lucide-react";

const images = [
	"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
	"https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800"
];

export const FeaturedProjects: FC = () => {
	const content = useIntlayer("home-featured-projects");

	return (
		<section id="projects" className="bg-neutral-100 py-24">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-sm font-medium tracking-widest text-accent">
							{content.label.value}
						</p>
						<h2 className="mt-4 font-heading text-4xl font-bold text-primary md:text-5xl">
							{content.heading.value}
						</h2>
					</div>
					<a
						href="/projects"
						className="hidden items-center gap-2 text-sm font-medium tracking-widest text-accent transition-colors hover:text-primary md:inline-flex"
					>
						{content.viewAll.value}
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2">
					{content.projects.map((project, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-lg bg-neutral-900"
						>
							<div
								className="aspect-4/3 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
								style={{
									backgroundImage: `url('${images[index]}')`
								}}
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
							<div className="absolute bottom-0 left-0 p-8">
								<p className="text-sm tracking-widest text-white/70">
									{project.name.value}
								</p>
								<p className="mt-1 text-sm text-white/50">
									{project.location.value}
								</p>
							</div>
						</div>
					))}
				</div>

				<a
					href="/projects"
					className="mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-widest text-accent transition-colors hover:text-primary md:hidden"
				>
					{content.viewAll.value}
					<ArrowRight className="h-4 w-4 rtl:rotate-180" />
				</a>
			</div>
		</section>
	);
};
