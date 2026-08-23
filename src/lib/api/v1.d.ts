export interface paths {
    "/api/services": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all services
         * @description Returns all services with their bilingual (English/Arabic) content and cover image.
         */
        get: operations["listAllServices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/services/{service_slug}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The slug of the service.
                 * @example residential-development
                 */
                service_slug: string;
            };
            cookie?: never;
        };
        /**
         * Get a single service
         * @description Returns a single service by its slug with its bilingual (English/Arabic) content and cover image.
         */
        get: operations["getASingleService"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all projects
         * @description Returns all projects with their bilingual (English/Arabic) content, related service, media files and construction timeline.
         */
        get: operations["listAllProjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/projects/{project_slug}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The slug of the project.
                 * @example dac-hills
                 */
                project_slug: string;
            };
            cookie?: never;
        };
        /**
         * Get a single project
         * @description Returns a single project by its slug with its bilingual (English/Arabic) content, related service, media files and construction timeline.
         */
        get: operations["getASingleProject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/media-items": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List all media items
         * @description Returns all media items sorted by publish date (newest first), with their bilingual (English/Arabic) content, cover image and body sections.
         */
        get: operations["listAllMediaItems"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/media-items/{mediaItem_id}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The ID of the media item.
                 * @example 1
                 */
                mediaItem_id: number;
            };
            cookie?: never;
        };
        /**
         * Get a single media item
         * @description Returns a single media item by its ID with its bilingual (English/Arabic) content, cover image and body sections.
         */
        get: operations["getASingleMediaItem"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/pages/{page}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The page slug (e.g. home, about, contact).
                 * @example home
                 */
                page: string;
            };
            cookie?: never;
        };
        /**
         * Get page content
         * @description Returns all content sections registered for the given page slug. Available sections may include:
         *     `hero_section`, `services_section`, `team_members_section`, `clients_section`, `story` and `offices`.
         */
        get: operations["getPageContent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/contact-inquiries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit a contact inquiry
         * @description Creates a new contact inquiry and notifies the company by email.
         */
        post: operations["submitAContactInquiry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listAllServices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example [
                         *       {
                         *         "en": {
                         *           "id": 1,
                         *           "slug": "residential-development",
                         *           "image": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *           "created_at": "2026-08-16T10:00:00.000000Z",
                         *           "updated_at": "2026-08-16T10:00:00.000000Z",
                         *           "name": "Residential Development",
                         *           "head_title": "Building Modern Residential Communities",
                         *           "description": "We design and build modern residential communities with world-class amenities."
                         *         },
                         *         "ar": {
                         *           "id": 1,
                         *           "slug": "residential-development",
                         *           "image": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *           "created_at": "2026-08-16T10:00:00.000000Z",
                         *           "updated_at": "2026-08-16T10:00:00.000000Z",
                         *           "name_ar": "التطوير السكني",
                         *           "head_title_ar": "بناء مجتمعات سكنية حديثة",
                         *           "description_ar": "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
                         *         }
                         *       }
                         *     ]
                         */
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example residential-development */
                                slug?: string;
                                /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                image?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                updated_at?: string;
                                /** @example Residential Development */
                                name?: string;
                                /** @example Building Modern Residential Communities */
                                head_title?: string;
                                /** @example We design and build modern residential communities with world-class amenities. */
                                description?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example residential-development */
                                slug?: string;
                                /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                image?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                updated_at?: string;
                                /** @example التطوير السكني */
                                name_ar?: string;
                                /** @example بناء مجتمعات سكنية حديثة */
                                head_title_ar?: string;
                                /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                description_ar?: string;
                            };
                        }[];
                    };
                };
            };
        };
    };
    getASingleService: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The slug of the service.
                 * @example residential-development
                 */
                service_slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example residential-development */
                                slug?: string;
                                /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                image?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                updated_at?: string;
                                /** @example Residential Development */
                                name?: string;
                                /** @example Building Modern Residential Communities */
                                head_title?: string;
                                /** @example We design and build modern residential communities with world-class amenities. */
                                description?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example residential-development */
                                slug?: string;
                                /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                image?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-16T10:00:00.000000Z */
                                updated_at?: string;
                                /** @example التطوير السكني */
                                name_ar?: string;
                                /** @example بناء مجتمعات سكنية حديثة */
                                head_title_ar?: string;
                                /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                description_ar?: string;
                            };
                        };
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example No query results for model [App\Models\Service]. */
                        message?: string;
                    };
                };
            };
        };
    };
    listAllProjects: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example [
                         *       {
                         *         "en": {
                         *           "id": 1,
                         *           "slug": "dac-hills",
                         *           "service_id": 1,
                         *           "service": {
                         *             "en": {
                         *               "id": 1,
                         *               "slug": "residential-development",
                         *               "image_url": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *               "name": "Residential Development",
                         *               "head_title": "Building Modern Residential Communities",
                         *               "description": "We design and build modern residential communities with world-class amenities."
                         *             },
                         *             "ar": {
                         *               "id": 1,
                         *               "slug": "residential-development",
                         *               "image_url": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *               "name_ar": "التطوير السكني",
                         *               "head_title_ar": "بناء مجتمعات سكنية حديثة",
                         *               "description_ar": "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
                         *             }
                         *           },
                         *           "status": "under_construction",
                         *           "completed_at": null,
                         *           "last_updated_status_at": "2026-08-17T12:00:00.000000Z",
                         *           "total_units": 250,
                         *           "area": "150 sqm",
                         *           "built_up_area": 32000,
                         *           "contract_value": 150000000,
                         *           "delivery_quarter": 4,
                         *           "delivery_year": 2027,
                         *           "starting_price": 1200000,
                         *           "images": [
                         *             "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                         *           ],
                         *           "videos": [
                         *             "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                         *           ],
                         *           "timeline_image": "http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg",
                         *           "timelines": [
                         *             {
                         *               "en": {
                         *                 "id": 1,
                         *                 "project_id": 1,
                         *                 "month": 3,
                         *                 "year": 2026,
                         *                 "order": 1,
                         *                 "title": "Land Acquisition",
                         *                 "description": "Acquired the land plot and secured all necessary permits."
                         *               },
                         *               "ar": {
                         *                 "id": 1,
                         *                 "project_id": 1,
                         *                 "month": 3,
                         *                 "year": 2026,
                         *                 "order": 1,
                         *                 "title_ar": "شراء الأرض",
                         *                 "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                         *               }
                         *             }
                         *           ],
                         *           "created_at": "2026-08-17T10:00:00.000000Z",
                         *           "updated_at": "2026-08-17T12:00:00.000000Z",
                         *           "title": "DAC Hills",
                         *           "name": "DAC Hills Compound",
                         *           "location": "New Cairo, Egypt",
                         *           "description": "A luxury residential compound featuring smart homes and extensive green spaces.",
                         *           "owner": "DAC Real Estate Development",
                         *           "consultant": "Al-Ahram Consulting Engineers",
                         *           "contractor": "Orascom Construction"
                         *         },
                         *         "ar": {
                         *           "id": 1,
                         *           "slug": "dac-hills",
                         *           "service_id": 1,
                         *           "service": {
                         *             "en": {
                         *               "id": 1,
                         *               "slug": "residential-development",
                         *               "image_url": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *               "name": "Residential Development",
                         *               "head_title": "Building Modern Residential Communities",
                         *               "description": "We design and build modern residential communities with world-class amenities."
                         *             },
                         *             "ar": {
                         *               "id": 1,
                         *               "slug": "residential-development",
                         *               "image_url": "http://127.0.0.1:8000/media/1/residential-development.jpg",
                         *               "name_ar": "التطوير السكني",
                         *               "head_title_ar": "بناء مجتمعات سكنية حديثة",
                         *               "description_ar": "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
                         *             }
                         *           },
                         *           "status": "under_construction",
                         *           "completed_at": null,
                         *           "last_updated_status_at": "2026-08-17T12:00:00.000000Z",
                         *           "total_units": 250,
                         *           "area": "150 sqm",
                         *           "built_up_area": 32000,
                         *           "contract_value": 150000000,
                         *           "delivery_quarter": 4,
                         *           "delivery_year": 2027,
                         *           "starting_price": 1200000,
                         *           "images": [
                         *             "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                         *           ],
                         *           "videos": [
                         *             "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                         *           ],
                         *           "timeline_image": "http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg",
                         *           "timelines": [
                         *             {
                         *               "en": {
                         *                 "id": 1,
                         *                 "project_id": 1,
                         *                 "month": 3,
                         *                 "year": 2026,
                         *                 "order": 1,
                         *                 "title": "Land Acquisition",
                         *                 "description": "Acquired the land plot and secured all necessary permits."
                         *               },
                         *               "ar": {
                         *                 "id": 1,
                         *                 "project_id": 1,
                         *                 "month": 3,
                         *                 "year": 2026,
                         *                 "order": 1,
                         *                 "title_ar": "شراء الأرض",
                         *                 "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                         *               }
                         *             }
                         *           ],
                         *           "created_at": "2026-08-17T10:00:00.000000Z",
                         *           "updated_at": "2026-08-17T12:00:00.000000Z",
                         *           "title_ar": "داك هيلز",
                         *           "name_ar": "كمباوند داك هيلز",
                         *           "location_ar": "التجمع الخامس، القاهرة الجديدة، مصر",
                         *           "description_ar": "كمباوند سكني فاخر يضم منازل ذكية ومساحات خضراء واسعة.",
                         *           "owner_ar": "داك للاستثمار العقاري",
                         *           "consultant_ar": "الأهرام للاستشارات الهندسية",
                         *           "contractor_ar": "أوراسكوم للإنشاءات"
                         *         }
                         *       }
                         *     ]
                         */
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example dac-hills */
                                slug?: string;
                                /** @example 1 */
                                service_id?: number;
                                service?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example Residential Development */
                                        name?: string;
                                        /** @example Building Modern Residential Communities */
                                        head_title?: string;
                                        /** @example We design and build modern residential communities with world-class amenities. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example التطوير السكني */
                                        name_ar?: string;
                                        /** @example بناء مجتمعات سكنية حديثة */
                                        head_title_ar?: string;
                                        /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                        description_ar?: string;
                                    };
                                };
                                /** @example under_construction */
                                status?: string;
                                /** @example null */
                                completed_at?: string | null;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                last_updated_status_at?: string;
                                /** @example 250 */
                                total_units?: number;
                                /** @example 150 sqm */
                                area?: string;
                                /** @example 32000 */
                                built_up_area?: number;
                                /** @example 150000000 */
                                contract_value?: number;
                                /** @example 4 */
                                delivery_quarter?: number;
                                /** @example 2027 */
                                delivery_year?: number;
                                /** @example 1200000 */
                                starting_price?: number;
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                                 *     ]
                                 */
                                images?: string[];
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                                 *     ]
                                 */
                                videos?: string[];
                                /** @example http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg */
                                timeline_image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title": "Land Acquisition",
                                 *           "description": "Acquired the land plot and secured all necessary permits."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title_ar": "شراء الأرض",
                                 *           "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                timelines?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example Land Acquisition */
                                        title?: string;
                                        /** @example Acquired the land plot and secured all necessary permits. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example شراء الأرض */
                                        title_ar?: string;
                                        /** @example تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة. */
                                        description_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-17T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC Hills */
                                title?: string;
                                /** @example DAC Hills Compound */
                                name?: string;
                                /** @example New Cairo, Egypt */
                                location?: string;
                                /** @example A luxury residential compound featuring smart homes and extensive green spaces. */
                                description?: string;
                                /** @example DAC Real Estate Development */
                                owner?: string;
                                /** @example Al-Ahram Consulting Engineers */
                                consultant?: string;
                                /** @example Orascom Construction */
                                contractor?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example dac-hills */
                                slug?: string;
                                /** @example 1 */
                                service_id?: number;
                                service?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example Residential Development */
                                        name?: string;
                                        /** @example Building Modern Residential Communities */
                                        head_title?: string;
                                        /** @example We design and build modern residential communities with world-class amenities. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example التطوير السكني */
                                        name_ar?: string;
                                        /** @example بناء مجتمعات سكنية حديثة */
                                        head_title_ar?: string;
                                        /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                        description_ar?: string;
                                    };
                                };
                                /** @example under_construction */
                                status?: string;
                                /** @example null */
                                completed_at?: string | null;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                last_updated_status_at?: string;
                                /** @example 250 */
                                total_units?: number;
                                /** @example 150 sqm */
                                area?: string;
                                /** @example 32000 */
                                built_up_area?: number;
                                /** @example 150000000 */
                                contract_value?: number;
                                /** @example 4 */
                                delivery_quarter?: number;
                                /** @example 2027 */
                                delivery_year?: number;
                                /** @example 1200000 */
                                starting_price?: number;
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                                 *     ]
                                 */
                                images?: string[];
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                                 *     ]
                                 */
                                videos?: string[];
                                /** @example http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg */
                                timeline_image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title": "Land Acquisition",
                                 *           "description": "Acquired the land plot and secured all necessary permits."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title_ar": "شراء الأرض",
                                 *           "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                timelines?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example Land Acquisition */
                                        title?: string;
                                        /** @example Acquired the land plot and secured all necessary permits. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example شراء الأرض */
                                        title_ar?: string;
                                        /** @example تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة. */
                                        description_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-17T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                updated_at?: string;
                                /** @example داك هيلز */
                                title_ar?: string;
                                /** @example كمباوند داك هيلز */
                                name_ar?: string;
                                /** @example التجمع الخامس، القاهرة الجديدة، مصر */
                                location_ar?: string;
                                /** @example كمباوند سكني فاخر يضم منازل ذكية ومساحات خضراء واسعة. */
                                description_ar?: string;
                                /** @example داك للاستثمار العقاري */
                                owner_ar?: string;
                                /** @example الأهرام للاستشارات الهندسية */
                                consultant_ar?: string;
                                /** @example أوراسكوم للإنشاءات */
                                contractor_ar?: string;
                            };
                        }[];
                    };
                };
            };
        };
    };
    getASingleProject: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The slug of the project.
                 * @example dac-hills
                 */
                project_slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example dac-hills */
                                slug?: string;
                                /** @example 1 */
                                service_id?: number;
                                service?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example Residential Development */
                                        name?: string;
                                        /** @example Building Modern Residential Communities */
                                        head_title?: string;
                                        /** @example We design and build modern residential communities with world-class amenities. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example التطوير السكني */
                                        name_ar?: string;
                                        /** @example بناء مجتمعات سكنية حديثة */
                                        head_title_ar?: string;
                                        /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                        description_ar?: string;
                                    };
                                };
                                /** @example under_construction */
                                status?: string;
                                /** @example null */
                                completed_at?: string | null;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                last_updated_status_at?: string;
                                /** @example 250 */
                                total_units?: number;
                                /** @example 150 sqm */
                                area?: string;
                                /** @example 4 */
                                delivery_quarter?: number;
                                /** @example 2027 */
                                delivery_year?: number;
                                /** @example 1200000 */
                                starting_price?: number;
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                                 *     ]
                                 */
                                images?: string[];
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                                 *     ]
                                 */
                                videos?: string[];
                                /** @example http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg */
                                timeline_image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title": "Land Acquisition",
                                 *           "description": "Acquired the land plot and secured all necessary permits."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title_ar": "شراء الأرض",
                                 *           "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                timelines?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example Land Acquisition */
                                        title?: string;
                                        /** @example Acquired the land plot and secured all necessary permits. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example شراء الأرض */
                                        title_ar?: string;
                                        /** @example تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة. */
                                        description_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-17T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC Hills */
                                title?: string;
                                /** @example DAC Hills Compound */
                                name?: string;
                                /** @example New Cairo, Egypt */
                                location?: string;
                                /** @example A luxury residential compound featuring smart homes and extensive green spaces. */
                                description?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example dac-hills */
                                slug?: string;
                                /** @example 1 */
                                service_id?: number;
                                service?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example Residential Development */
                                        name?: string;
                                        /** @example Building Modern Residential Communities */
                                        head_title?: string;
                                        /** @example We design and build modern residential communities with world-class amenities. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example residential-development */
                                        slug?: string;
                                        /** @example http://127.0.0.1:8000/media/1/residential-development.jpg */
                                        image_url?: string;
                                        /** @example التطوير السكني */
                                        name_ar?: string;
                                        /** @example بناء مجتمعات سكنية حديثة */
                                        head_title_ar?: string;
                                        /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                        description_ar?: string;
                                    };
                                };
                                /** @example under_construction */
                                status?: string;
                                /** @example null */
                                completed_at?: string | null;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                last_updated_status_at?: string;
                                /** @example 250 */
                                total_units?: number;
                                /** @example 150 sqm */
                                area?: string;
                                /** @example 4 */
                                delivery_quarter?: number;
                                /** @example 2027 */
                                delivery_year?: number;
                                /** @example 1200000 */
                                starting_price?: number;
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-aerial.jpg"
                                 *     ]
                                 */
                                images?: string[];
                                /**
                                 * @example [
                                 *       "http://127.0.0.1:8000/media/1/dac-hills-tour.mp4"
                                 *     ]
                                 */
                                videos?: string[];
                                /** @example http://127.0.0.1:8000/media/1/dac-hills-timeline.jpg */
                                timeline_image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title": "Land Acquisition",
                                 *           "description": "Acquired the land plot and secured all necessary permits."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "project_id": 1,
                                 *           "month": 3,
                                 *           "year": 2026,
                                 *           "order": 1,
                                 *           "title_ar": "شراء الأرض",
                                 *           "description_ar": "تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                timelines?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example Land Acquisition */
                                        title?: string;
                                        /** @example Acquired the land plot and secured all necessary permits. */
                                        description?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example 1 */
                                        project_id?: number;
                                        /** @example 3 */
                                        month?: number;
                                        /** @example 2026 */
                                        year?: number;
                                        /** @example 1 */
                                        order?: number;
                                        /** @example شراء الأرض */
                                        title_ar?: string;
                                        /** @example تم شراء قطعة الأرض والحصول على جميع التصاريح اللازمة. */
                                        description_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-17T10:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-17T12:00:00.000000Z */
                                updated_at?: string;
                                /** @example داك هيلز */
                                title_ar?: string;
                                /** @example كمباوند داك هيلز */
                                name_ar?: string;
                                /** @example التجمع الخامس، القاهرة الجديدة، مصر */
                                location_ar?: string;
                                /** @example كمباوند سكني فاخر يضم منازل ذكية ومساحات خضراء واسعة. */
                                description_ar?: string;
                            };
                        };
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example No query results for model [App\Models\Project]. */
                        message?: string;
                    };
                };
            };
        };
    };
    listAllMediaItems: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /**
                         * @example [
                         *       {
                         *         "en": {
                         *           "id": 1,
                         *           "publish_date": "2026-08-01",
                         *           "reading_time": "5 min read",
                         *           "image": "http://127.0.0.1:8000/media/1/news-cover.jpg",
                         *           "contents": [
                         *             {
                         *               "en": {
                         *                 "id": 1,
                         *                 "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                         *                 "title": "Project Milestone Reached",
                         *                 "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                         *               },
                         *               "ar": {
                         *                 "id": 1,
                         *                 "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                         *                 "title_ar": "تحقيق إنجاز جديد في المشروع",
                         *                 "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                         *               }
                         *             }
                         *           ],
                         *           "created_at": "2026-08-01T09:00:00.000000Z",
                         *           "updated_at": "2026-08-01T09:00:00.000000Z",
                         *           "title": "DAC reaches major milestone in DAC Hills",
                         *           "category": "News"
                         *         },
                         *         "ar": {
                         *           "id": 1,
                         *           "publish_date": "2026-08-01",
                         *           "reading_time": "٥ دقائق قراءة",
                         *           "image": "http://127.0.0.1:8000/media/1/news-cover.jpg",
                         *           "contents": [
                         *             {
                         *               "en": {
                         *                 "id": 1,
                         *                 "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                         *                 "title": "Project Milestone Reached",
                         *                 "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                         *               },
                         *               "ar": {
                         *                 "id": 1,
                         *                 "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                         *                 "title_ar": "تحقيق إنجاز جديد في المشروع",
                         *                 "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                         *               }
                         *             }
                         *           ],
                         *           "created_at": "2026-08-01T09:00:00.000000Z",
                         *           "updated_at": "2026-08-01T09:00:00.000000Z",
                         *           "title_ar": "DAC تحقق إنجازاً كبيراً في مشروع داك هيلز",
                         *           "category_ar": "أخبار"
                         *         }
                         *       }
                         *     ]
                         */
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example 2026-08-01 */
                                publish_date?: string;
                                /** @example 5 min read */
                                reading_time?: string;
                                /** @example http://127.0.0.1:8000/media/1/news-cover.jpg */
                                image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title": "Project Milestone Reached",
                                 *           "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title_ar": "تحقيق إنجاز جديد في المشروع",
                                 *           "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                contents?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example Project Milestone Reached */
                                        title?: string;
                                        /** @example DAC successfully completed the structural works of DAC Hills ahead of schedule. */
                                        text?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example تحقيق إنجاز جديد في المشروع */
                                        title_ar?: string;
                                        /** @example أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد. */
                                        text_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-01T09:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-01T09:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC reaches major milestone in DAC Hills */
                                title?: string;
                                /** @example News */
                                category?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example 2026-08-01 */
                                publish_date?: string;
                                /** @example ٥ دقائق قراءة */
                                reading_time?: string;
                                /** @example http://127.0.0.1:8000/media/1/news-cover.jpg */
                                image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title": "Project Milestone Reached",
                                 *           "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title_ar": "تحقيق إنجاز جديد في المشروع",
                                 *           "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                contents?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example Project Milestone Reached */
                                        title?: string;
                                        /** @example DAC successfully completed the structural works of DAC Hills ahead of schedule. */
                                        text?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example تحقيق إنجاز جديد في المشروع */
                                        title_ar?: string;
                                        /** @example أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد. */
                                        text_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-01T09:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-01T09:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC تحقق إنجازاً كبيراً في مشروع داك هيلز */
                                title_ar?: string;
                                /** @example أخبار */
                                category_ar?: string;
                            };
                        }[];
                    };
                };
            };
        };
    };
    getASingleMediaItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The ID of the media item.
                 * @example 1
                 */
                mediaItem_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            en?: {
                                /** @example 1 */
                                id?: number;
                                /** @example 2026-08-01 */
                                publish_date?: string;
                                /** @example 5 min read */
                                reading_time?: string;
                                /** @example http://127.0.0.1:8000/media/1/news-cover.jpg */
                                image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title": "Project Milestone Reached",
                                 *           "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title_ar": "تحقيق إنجاز جديد في المشروع",
                                 *           "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                contents?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example Project Milestone Reached */
                                        title?: string;
                                        /** @example DAC successfully completed the structural works of DAC Hills ahead of schedule. */
                                        text?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example تحقيق إنجاز جديد في المشروع */
                                        title_ar?: string;
                                        /** @example أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد. */
                                        text_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-01T09:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-01T09:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC reaches major milestone in DAC Hills */
                                title?: string;
                                /** @example News */
                                category?: string;
                            };
                            ar?: {
                                /** @example 1 */
                                id?: number;
                                /** @example 2026-08-01 */
                                publish_date?: string;
                                /** @example ٥ دقائق قراءة */
                                reading_time?: string;
                                /** @example http://127.0.0.1:8000/media/1/news-cover.jpg */
                                image?: string;
                                /**
                                 * @example [
                                 *       {
                                 *         "en": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title": "Project Milestone Reached",
                                 *           "text": "DAC successfully completed the structural works of DAC Hills ahead of schedule."
                                 *         },
                                 *         "ar": {
                                 *           "id": 1,
                                 *           "image": "http://127.0.0.1:8000/media/2/news-body-1.jpg",
                                 *           "title_ar": "تحقيق إنجاز جديد في المشروع",
                                 *           "text_ar": "أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد."
                                 *         }
                                 *       }
                                 *     ]
                                 */
                                contents?: {
                                    en?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example Project Milestone Reached */
                                        title?: string;
                                        /** @example DAC successfully completed the structural works of DAC Hills ahead of schedule. */
                                        text?: string;
                                    };
                                    ar?: {
                                        /** @example 1 */
                                        id?: number;
                                        /** @example http://127.0.0.1:8000/media/2/news-body-1.jpg */
                                        image?: string;
                                        /** @example تحقيق إنجاز جديد في المشروع */
                                        title_ar?: string;
                                        /** @example أكملت DAC الأعمال الإنشائية لكمباوند داك هيلز قبل الموعد المحدد. */
                                        text_ar?: string;
                                    };
                                }[];
                                /** @example 2026-08-01T09:00:00.000000Z */
                                created_at?: string;
                                /** @example 2026-08-01T09:00:00.000000Z */
                                updated_at?: string;
                                /** @example DAC تحقق إنجازاً كبيراً في مشروع داك هيلز */
                                title_ar?: string;
                                /** @example أخبار */
                                category_ar?: string;
                            };
                        };
                    };
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example No query results for model [App\Models\MediaItem]. */
                        message?: string;
                    };
                };
            };
        };
    };
    getPageContent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /**
                 * @description The page slug (e.g. home, about, contact).
                 * @example home
                 */
                page: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example home */
                        page?: string;
                        sections?: {
                            hero_section?: {
                                en?: {
                                    /** @example Building Egypt's Future */
                                    title?: string;
                                    /** @example Premium residential communities */
                                    subtitle?: string;
                                    /** @example http://127.0.0.1:8000/media/1/hero.jpg */
                                    image?: string;
                                };
                                ar?: {
                                    /** @example نبني مستقبل مصر */
                                    title_ar?: string;
                                    /** @example مجتمعات سكنية راقية */
                                    subtitle_ar?: string;
                                    /** @example http://127.0.0.1:8000/media/1/hero.jpg */
                                    image?: string;
                                };
                            };
                            services_section?: {
                                en?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "slug": "residential-development",
                                     *           "image": "http://127.0.0.1:8000/media/2/residential-development.jpg",
                                     *           "name": "Residential Development",
                                     *           "head_title": "Building Modern Residential Communities",
                                     *           "description": "We design and build modern residential communities with world-class amenities."
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "slug": "residential-development",
                                     *           "image": "http://127.0.0.1:8000/media/2/residential-development.jpg",
                                     *           "name_ar": "التطوير السكني",
                                     *           "head_title_ar": "بناء مجتمعات سكنية حديثة",
                                     *           "description_ar": "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    services?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example residential-development */
                                            slug?: string;
                                            /** @example http://127.0.0.1:8000/media/2/residential-development.jpg */
                                            image?: string;
                                            /** @example Residential Development */
                                            name?: string;
                                            /** @example Building Modern Residential Communities */
                                            head_title?: string;
                                            /** @example We design and build modern residential communities with world-class amenities. */
                                            description?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example residential-development */
                                            slug?: string;
                                            /** @example http://127.0.0.1:8000/media/2/residential-development.jpg */
                                            image?: string;
                                            /** @example التطوير السكني */
                                            name_ar?: string;
                                            /** @example بناء مجتمعات سكنية حديثة */
                                            head_title_ar?: string;
                                            /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                            description_ar?: string;
                                        };
                                    }[];
                                    /** @example http://127.0.0.1:8000/media/3/services-section.jpg */
                                    image?: string;
                                };
                                ar?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "slug": "residential-development",
                                     *           "image": "http://127.0.0.1:8000/media/2/residential-development.jpg",
                                     *           "name": "Residential Development",
                                     *           "head_title": "Building Modern Residential Communities",
                                     *           "description": "We design and build modern residential communities with world-class amenities."
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "slug": "residential-development",
                                     *           "image": "http://127.0.0.1:8000/media/2/residential-development.jpg",
                                     *           "name_ar": "التطوير السكني",
                                     *           "head_title_ar": "بناء مجتمعات سكنية حديثة",
                                     *           "description_ar": "نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى."
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    services?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example residential-development */
                                            slug?: string;
                                            /** @example http://127.0.0.1:8000/media/2/residential-development.jpg */
                                            image?: string;
                                            /** @example Residential Development */
                                            name?: string;
                                            /** @example Building Modern Residential Communities */
                                            head_title?: string;
                                            /** @example We design and build modern residential communities with world-class amenities. */
                                            description?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example residential-development */
                                            slug?: string;
                                            /** @example http://127.0.0.1:8000/media/2/residential-development.jpg */
                                            image?: string;
                                            /** @example التطوير السكني */
                                            name_ar?: string;
                                            /** @example بناء مجتمعات سكنية حديثة */
                                            head_title_ar?: string;
                                            /** @example نصمم ونبني مجتمعات سكنية حديثة بوسائل راحة عالمية المستوى. */
                                            description_ar?: string;
                                        };
                                    }[];
                                    /** @example http://127.0.0.1:8000/media/3/services-section.jpg */
                                    image?: string;
                                };
                            };
                            team_members_section?: {
                                en?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/4/ceo.jpg",
                                     *           "name": "Ahmed Hassan",
                                     *           "title": "Chief Executive Officer",
                                     *           "email": "ahmed.hassan@dac.com"
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/4/ceo.jpg",
                                     *           "name_ar": "أحمد حسن",
                                     *           "title_ar": "الرئيس التنفيذي",
                                     *           "email_ar": "ahmed.hassan@dac.com"
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    members?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/4/ceo.jpg */
                                            image?: string;
                                            /** @example Ahmed Hassan */
                                            name?: string;
                                            /** @example Chief Executive Officer */
                                            title?: string;
                                            /** @example ahmed.hassan@dac.com */
                                            email?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/4/ceo.jpg */
                                            image?: string;
                                            /** @example أحمد حسن */
                                            name_ar?: string;
                                            /** @example الرئيس التنفيذي */
                                            title_ar?: string;
                                            /** @example ahmed.hassan@dac.com */
                                            email_ar?: string;
                                        };
                                    }[];
                                };
                                ar?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/4/ceo.jpg",
                                     *           "name": "Ahmed Hassan",
                                     *           "title": "Chief Executive Officer",
                                     *           "email": "ahmed.hassan@dac.com"
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/4/ceo.jpg",
                                     *           "name_ar": "أحمد حسن",
                                     *           "title_ar": "الرئيس التنفيذي",
                                     *           "email_ar": "ahmed.hassan@dac.com"
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    members?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/4/ceo.jpg */
                                            image?: string;
                                            /** @example Ahmed Hassan */
                                            name?: string;
                                            /** @example Chief Executive Officer */
                                            title?: string;
                                            /** @example ahmed.hassan@dac.com */
                                            email?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/4/ceo.jpg */
                                            image?: string;
                                            /** @example أحمد حسن */
                                            name_ar?: string;
                                            /** @example الرئيس التنفيذي */
                                            title_ar?: string;
                                            /** @example ahmed.hassan@dac.com */
                                            email_ar?: string;
                                        };
                                    }[];
                                };
                            };
                            clients_section?: {
                                en?: {
                                    /** @example Our Clients */
                                    title?: string;
                                    /** @example Trusted by leading companies */
                                    header_title?: string;
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "country": "Egypt",
                                     *           "clients": [
                                     *             "http://127.0.0.1:8000/media/6/client-logo.png"
                                     *           ]
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "country_ar": "مصر",
                                     *           "clients": [
                                     *             "http://127.0.0.1:8000/media/6/client-logo.png"
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    client_countries?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example Egypt */
                                            country?: string;
                                            /**
                                             * @example [
                                             *       "http://127.0.0.1:8000/media/6/client-logo.png"
                                             *     ]
                                             */
                                            clients?: string[];
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example مصر */
                                            country_ar?: string;
                                            /**
                                             * @example [
                                             *       "http://127.0.0.1:8000/media/6/client-logo.png"
                                             *     ]
                                             */
                                            clients?: string[];
                                        };
                                    }[];
                                };
                                ar?: {
                                    /** @example عملاؤنا */
                                    title_ar?: string;
                                    /** @example موثوقون من كبرى الشركات */
                                    header_title_ar?: string;
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "country": "Egypt",
                                     *           "clients": [
                                     *             "http://127.0.0.1:8000/media/6/client-logo.png"
                                     *           ]
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "country_ar": "مصر",
                                     *           "clients": [
                                     *             "http://127.0.0.1:8000/media/6/client-logo.png"
                                     *           ]
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    client_countries?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example Egypt */
                                            country?: string;
                                            /**
                                             * @example [
                                             *       "http://127.0.0.1:8000/media/6/client-logo.png"
                                             *     ]
                                             */
                                            clients?: string[];
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example مصر */
                                            country_ar?: string;
                                            /**
                                             * @example [
                                             *       "http://127.0.0.1:8000/media/6/client-logo.png"
                                             *     ]
                                             */
                                            clients?: string[];
                                        };
                                    }[];
                                };
                            };
                            story?: {
                                en?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/5/2010.jpg",
                                     *           "year": "2010",
                                     *           "title": "Company Founded",
                                     *           "description": "DAC was founded with a vision to reshape the Egyptian real estate market."
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/5/2010.jpg",
                                     *           "year_ar": "٢٠١٠",
                                     *           "title_ar": "تأسيس الشركة",
                                     *           "description_ar": "تأسست DAC برؤية لإعادة تشكيل سوق العقارات المصري."
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    story_points?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/5/2010.jpg */
                                            image?: string;
                                            /** @example 2010 */
                                            year?: string;
                                            /** @example Company Founded */
                                            title?: string;
                                            /** @example DAC was founded with a vision to reshape the Egyptian real estate market. */
                                            description?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/5/2010.jpg */
                                            image?: string;
                                            /** @example ٢٠١٠ */
                                            year_ar?: string;
                                            /** @example تأسيس الشركة */
                                            title_ar?: string;
                                            /** @example تأسست DAC برؤية لإعادة تشكيل سوق العقارات المصري. */
                                            description_ar?: string;
                                        };
                                    }[];
                                };
                                ar?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/5/2010.jpg",
                                     *           "year": "2010",
                                     *           "title": "Company Founded",
                                     *           "description": "DAC was founded with a vision to reshape the Egyptian real estate market."
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "image": "http://127.0.0.1:8000/media/5/2010.jpg",
                                     *           "year_ar": "٢٠١٠",
                                     *           "title_ar": "تأسيس الشركة",
                                     *           "description_ar": "تأسست DAC برؤية لإعادة تشكيل سوق العقارات المصري."
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    story_points?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/5/2010.jpg */
                                            image?: string;
                                            /** @example 2010 */
                                            year?: string;
                                            /** @example Company Founded */
                                            title?: string;
                                            /** @example DAC was founded with a vision to reshape the Egyptian real estate market. */
                                            description?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example http://127.0.0.1:8000/media/5/2010.jpg */
                                            image?: string;
                                            /** @example ٢٠١٠ */
                                            year_ar?: string;
                                            /** @example تأسيس الشركة */
                                            title_ar?: string;
                                            /** @example تأسست DAC برؤية لإعادة تشكيل سوق العقارات المصري. */
                                            description_ar?: string;
                                        };
                                    }[];
                                };
                            };
                            offices?: {
                                en?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "phone": "+20 2 12345678",
                                     *           "email": "info@dac.com",
                                     *           "office_hours": [
                                     *             {
                                     *               "en": {
                                     *                 "days": "Sunday - Thursday",
                                     *                 "hours": "9:00 AM - 6:00 PM"
                                     *               },
                                     *               "ar": {
                                     *                 "days_ar": "الأحد - الخميس",
                                     *                 "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                     *               }
                                     *             }
                                     *           ],
                                     *           "city": "Cairo",
                                     *           "address": "5th Settlement, New Cairo",
                                     *           "branch": "Head Office"
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "phone": "+20 2 12345678",
                                     *           "email": "info@dac.com",
                                     *           "office_hours": [
                                     *             {
                                     *               "en": {
                                     *                 "days": "Sunday - Thursday",
                                     *                 "hours": "9:00 AM - 6:00 PM"
                                     *               },
                                     *               "ar": {
                                     *                 "days_ar": "الأحد - الخميس",
                                     *                 "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                     *               }
                                     *             }
                                     *           ],
                                     *           "city_ar": "القاهرة",
                                     *           "address_ar": "التجمع الخامس، القاهرة الجديدة",
                                     *           "branch_ar": "المكتب الرئيسي"
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    offices?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example +20 2 12345678 */
                                            phone?: string;
                                            /** @example info@dac.com */
                                            email?: string;
                                            /**
                                             * @example [
                                             *       {
                                             *         "en": {
                                             *           "days": "Sunday - Thursday",
                                             *           "hours": "9:00 AM - 6:00 PM"
                                             *         },
                                             *         "ar": {
                                             *           "days_ar": "الأحد - الخميس",
                                             *           "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                             *         }
                                             *       }
                                             *     ]
                                             */
                                            office_hours?: {
                                                en?: {
                                                    /** @example Sunday - Thursday */
                                                    days?: string;
                                                    /** @example 9:00 AM - 6:00 PM */
                                                    hours?: string;
                                                };
                                                ar?: {
                                                    /** @example الأحد - الخميس */
                                                    days_ar?: string;
                                                    /** @example ٩:٠٠ ص - ٦:٠٠ م */
                                                    hours_ar?: string;
                                                };
                                            }[];
                                            /** @example Cairo */
                                            city?: string;
                                            /** @example 5th Settlement, New Cairo */
                                            address?: string;
                                            /** @example Head Office */
                                            branch?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example +20 2 12345678 */
                                            phone?: string;
                                            /** @example info@dac.com */
                                            email?: string;
                                            /**
                                             * @example [
                                             *       {
                                             *         "en": {
                                             *           "days": "Sunday - Thursday",
                                             *           "hours": "9:00 AM - 6:00 PM"
                                             *         },
                                             *         "ar": {
                                             *           "days_ar": "الأحد - الخميس",
                                             *           "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                             *         }
                                             *       }
                                             *     ]
                                             */
                                            office_hours?: {
                                                en?: {
                                                    /** @example Sunday - Thursday */
                                                    days?: string;
                                                    /** @example 9:00 AM - 6:00 PM */
                                                    hours?: string;
                                                };
                                                ar?: {
                                                    /** @example الأحد - الخميس */
                                                    days_ar?: string;
                                                    /** @example ٩:٠٠ ص - ٦:٠٠ م */
                                                    hours_ar?: string;
                                                };
                                            }[];
                                            /** @example القاهرة */
                                            city_ar?: string;
                                            /** @example التجمع الخامس، القاهرة الجديدة */
                                            address_ar?: string;
                                            /** @example المكتب الرئيسي */
                                            branch_ar?: string;
                                        };
                                    }[];
                                };
                                ar?: {
                                    /**
                                     * @example [
                                     *       {
                                     *         "en": {
                                     *           "id": 1,
                                     *           "phone": "+20 2 12345678",
                                     *           "email": "info@dac.com",
                                     *           "office_hours": [
                                     *             {
                                     *               "en": {
                                     *                 "days": "Sunday - Thursday",
                                     *                 "hours": "9:00 AM - 6:00 PM"
                                     *               },
                                     *               "ar": {
                                     *                 "days_ar": "الأحد - الخميس",
                                     *                 "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                     *               }
                                     *             }
                                     *           ],
                                     *           "city": "Cairo",
                                     *           "address": "5th Settlement, New Cairo",
                                     *           "branch": "Head Office"
                                     *         },
                                     *         "ar": {
                                     *           "id": 1,
                                     *           "phone": "+20 2 12345678",
                                     *           "email": "info@dac.com",
                                     *           "office_hours": [
                                     *             {
                                     *               "en": {
                                     *                 "days": "Sunday - Thursday",
                                     *                 "hours": "9:00 AM - 6:00 PM"
                                     *               },
                                     *               "ar": {
                                     *                 "days_ar": "الأحد - الخميس",
                                     *                 "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                     *               }
                                     *             }
                                     *           ],
                                     *           "city_ar": "القاهرة",
                                     *           "address_ar": "التجمع الخامس، القاهرة الجديدة",
                                     *           "branch_ar": "المكتب الرئيسي"
                                     *         }
                                     *       }
                                     *     ]
                                     */
                                    offices?: {
                                        en?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example +20 2 12345678 */
                                            phone?: string;
                                            /** @example info@dac.com */
                                            email?: string;
                                            /**
                                             * @example [
                                             *       {
                                             *         "en": {
                                             *           "days": "Sunday - Thursday",
                                             *           "hours": "9:00 AM - 6:00 PM"
                                             *         },
                                             *         "ar": {
                                             *           "days_ar": "الأحد - الخميس",
                                             *           "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                             *         }
                                             *       }
                                             *     ]
                                             */
                                            office_hours?: {
                                                en?: {
                                                    /** @example Sunday - Thursday */
                                                    days?: string;
                                                    /** @example 9:00 AM - 6:00 PM */
                                                    hours?: string;
                                                };
                                                ar?: {
                                                    /** @example الأحد - الخميس */
                                                    days_ar?: string;
                                                    /** @example ٩:٠٠ ص - ٦:٠٠ م */
                                                    hours_ar?: string;
                                                };
                                            }[];
                                            /** @example Cairo */
                                            city?: string;
                                            /** @example 5th Settlement, New Cairo */
                                            address?: string;
                                            /** @example Head Office */
                                            branch?: string;
                                        };
                                        ar?: {
                                            /** @example 1 */
                                            id?: number;
                                            /** @example +20 2 12345678 */
                                            phone?: string;
                                            /** @example info@dac.com */
                                            email?: string;
                                            /**
                                             * @example [
                                             *       {
                                             *         "en": {
                                             *           "days": "Sunday - Thursday",
                                             *           "hours": "9:00 AM - 6:00 PM"
                                             *         },
                                             *         "ar": {
                                             *           "days_ar": "الأحد - الخميس",
                                             *           "hours_ar": "٩:٠٠ ص - ٦:٠٠ م"
                                             *         }
                                             *       }
                                             *     ]
                                             */
                                            office_hours?: {
                                                en?: {
                                                    /** @example Sunday - Thursday */
                                                    days?: string;
                                                    /** @example 9:00 AM - 6:00 PM */
                                                    hours?: string;
                                                };
                                                ar?: {
                                                    /** @example الأحد - الخميس */
                                                    days_ar?: string;
                                                    /** @example ٩:٠٠ ص - ٦:٠٠ م */
                                                    hours_ar?: string;
                                                };
                                            }[];
                                            /** @example القاهرة */
                                            city_ar?: string;
                                            /** @example التجمع الخامس، القاهرة الجديدة */
                                            address_ar?: string;
                                            /** @example المكتب الرئيسي */
                                            branch_ar?: string;
                                        };
                                    }[];
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    submitAContactInquiry: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description The full name of the inquirer.
                     * @example John Doe
                     */
                    full_name: string;
                    /**
                     * @description The email address of the inquirer.
                     * @example john@example.com
                     */
                    email: string;
                    /**
                     * @description nullable The phone number of the inquirer.
                     * @example +201234567890
                     */
                    phone?: string | null;
                    /**
                     * @description nullable The company of the inquirer.
                     * @example Acme Corp
                     */
                    company?: string | null;
                    /**
                     * @description nullable The type of the project.
                     * @example Residential Development
                     */
                    project_type?: string | null;
                    /**
                     * @description nullable The location of the project.
                     * @example Cairo, Egypt
                     */
                    project_location?: string | null;
                    /**
                     * @description The inquiry message.
                     * @example I would like to discuss a new project.
                     */
                    message: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Your inquiry has been submitted successfully. We will get back to you soon. */
                        message?: string;
                        data?: {
                            /** @example 1 */
                            id?: number;
                            /** @example John Doe */
                            full_name?: string;
                            /** @example john@example.com */
                            email?: string;
                            /** @example +201234567890 */
                            phone?: string;
                            /** @example Acme Corp */
                            company?: string;
                            /** @example Residential Development */
                            project_type?: string;
                            /** @example Cairo, Egypt */
                            project_location?: string;
                            /** @example I would like to discuss a new project. */
                            message?: string;
                            /** @example 2026-08-23T10:00:00.000000Z */
                            created_at?: string;
                        };
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example The full name field is required. */
                        message?: string;
                        errors?: {
                            /**
                             * @example [
                             *       "The full name field is required."
                             *     ]
                             */
                            full_name?: string[];
                        };
                    };
                };
            };
        };
    };
}
