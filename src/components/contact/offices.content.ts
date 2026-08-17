import { t, type Dictionary } from "intlayer";

const officesContent = {
	key: "contact-offices",
	content: {
		sectionTitle: t({
			en: "OUR OFFICES",
			ar: "مكاتبنا"
		}),
		cairoTab: t({
			en: "CAIRO",
			ar: "القاهرة"
		}),
		dubaiTab: t({
			en: "DUBAI",
			ar: "دبي"
		}),
		cairo: {
			title: t({
				en: "Headquarters - Cairo",
				ar: "المقر الرئيسي - القاهرة"
			}),
			addressTitle: t({
				en: "5th Settlement",
				ar: "التجمع الخامس"
			}),
			addressDetail: t({
				en: "North 90th St. Downtown, New Cairo",
				ar: "شارع التسعين الشمالي، داون تاون، القاهرة الجديدة"
			}),
			phoneTitle: t({
				en: "Call Us",
				ar: "اتصل بنا"
			}),
			phoneDetail: "+20 2 2530 0000",
			emailTitle: t({
				en: "Email Us",
				ar: "راسلنا"
			}),
			emailDetail: "concierge@estatexarchive.com",
			hoursTitle: t({
				en: "Office Hours",
				ar: "ساعات العمل"
			}),
			schedule: [
				{
					days: t({
						en: "Sunday – Thursday",
						ar: "الأحد – الخميس"
					}),
					time: t({
						en: "09:00 AM - 06:00 PM",
						ar: "٠٩:٠٠ ص - ٠٦:٠٠ م"
					})
				},
				{
					days: t({
						en: "Saturday",
						ar: "السبت"
					}),
					time: t({
						en: "10:00 AM - 04:00 PM",
						ar: "١٠:٠٠ ص - ٠٤:٠٠ م"
					})
				},
				{
					days: t({
						en: "Friday",
						ar: "الجمعة"
					}),
					time: t({
						en: "Closed",
						ar: "مغلق"
					})
				}
			]
		},
		dubai: {
			title: t({
				en: "Regional Office - Dubai",
				ar: "المكتب الإقليمي - دبي"
			}),
			addressTitle: t({
				en: "Downtown Dubai",
				ar: "وسط مدينة دبي"
			}),
			addressDetail: t({
				en: "Boulevard Plaza Tower 1, Downtown Dubai, UAE",
				ar: "برج بوليفارد بلازا 1، وسط مدينة دبي، الإمارات"
			}),
			phoneTitle: t({
				en: "Call Us",
				ar: "اتصل بنا"
			}),
			phoneDetail: "+971 4 456 7890",
			emailTitle: t({
				en: "Email Us",
				ar: "راسلنا"
			}),
			emailDetail: "dubai@dac-construction.com",
			hoursTitle: t({
				en: "Office Hours",
				ar: "ساعات العمل"
			}),
			schedule: [
				{
					days: t({
						en: "Monday – Friday",
						ar: "الاثنين – الجمعة"
					}),
					time: t({
						en: "09:00 AM - 06:00 PM",
						ar: "٠٩:٠٠ ص - ٠٦:٠٠ م"
					})
				},
				{
					days: t({
						en: "Saturday",
						ar: "السبت"
					}),
					time: t({
						en: "10:00 AM - 02:00 PM",
						ar: "١٠:٠٠ ص - ٠٢:٠٠ م"
					})
				},
				{
					days: t({
						en: "Sunday",
						ar: "الأحد"
					}),
					time: t({
						en: "Closed",
						ar: "مغلق"
					})
				}
			]
		}
	}
} satisfies Dictionary;

export default officesContent;
