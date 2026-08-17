export interface components {
	["schemas"]: {
		Service: {
			en: {
				id: number;
				slug: string;
				image: string | null;
				created_at: string | null;
				updated_at: string | null;
				name: string;
				head_title: string | null;
				description: string | null;
			};
			ar: {
				id: number;
				slug: string;
				image: string | null;
				created_at: string | null;
				updated_at: string | null;
				name_ar: string;
				head_title_ar: string | null;
				description_ar: string | null;
			};
		};
		ServiceBrief: {
			en: {
				id: number;
				slug: string;
				image_url: string | null;
				name: string;
				head_title: string | null;
				description: string | null;
			};
			ar: {
				id: number;
				slug: string;
				image_url: string | null;
				name_ar: string;
				head_title_ar: string | null;
				description_ar: string | null;
			};
		};
		Timeline: {
			en: {
				id: number;
				project_id: number;
				month: number;
				year: number;
				order: number;
				title: string | null;
				description: string | null;
			};
			ar: {
				id: number;
				project_id: number;
				month: number;
				year: number;
				order: number;
				title_ar: string | null;
				description_ar: string | null;
			};
		};
		Project: {
			en: {
				id: number;
				slug: string;
				service_id: number | null;
				service: components["schemas"]["ServiceBrief"] | null;
				status: string;
				completed_at: string | null;
				last_updated_status_at: string | null;
				total_units: number | null;
				area: string | null;
				delivery_quarter: number | null;
				delivery_year: number | null;
				starting_price: number | null;
				images: string[];
				videos: string[];
				timeline_image: string | null;
				timelines: components["schemas"]["Timeline"][];
				created_at: string | null;
				updated_at: string | null;
				title: string | null;
				name: string;
				location: string | null;
				description: string | null;
			};
			ar: {
				id: number;
				slug: string;
				service_id: number | null;
				service: components["schemas"]["ServiceBrief"] | null;
				status: string;
				completed_at: string | null;
				last_updated_status_at: string | null;
				total_units: number | null;
				area: string | null;
				delivery_quarter: number | null;
				delivery_year: number | null;
				starting_price: number | null;
				images: string[];
				videos: string[];
				timeline_image: string | null;
				timelines: components["schemas"]["Timeline"][];
				created_at: string | null;
				updated_at: string | null;
				title_ar: string | null;
				name_ar: string;
				location_ar: string | null;
				description_ar: string | null;
			};
		};
	};
}

export interface paths {
	"/api/services": {
		get: {
			responses: {
				200: {
					content: {
						"application/json": {
							data: components["schemas"]["Service"][];
						};
					};
				};
			};
		};
	};
	"/api/services/{slug}": {
		get: {
			parameters: {
				path: {
					slug: string;
				};
			};
			responses: {
				200: {
					content: {
						"application/json": {
							data: components["schemas"]["Service"];
						};
					};
				};
			};
		};
	};
	"/api/projects": {
		get: {
			responses: {
				200: {
					content: {
						"application/json": {
							data: components["schemas"]["Project"][];
						};
					};
				};
			};
		};
	};
	"/api/projects/{slug}": {
		get: {
			parameters: {
				path: {
					slug: string;
				};
			};
			responses: {
				200: {
					content: {
						"application/json": {
							data: components["schemas"]["Project"];
						};
					};
				};
			};
		};
	};
	"/api/pages/{page}": {
		get: {
			parameters: {
				path: {
					page: string;
				};
			};
			responses: {
				200: {
					content: {
						"application/json": {
							page: string;
							sections: Record<
								string,
								{
									en: Record<string, unknown>;
									ar: Record<string, unknown>;
								}
							>;
						};
					};
				};
			};
		};
	};
}