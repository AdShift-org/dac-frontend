import { t, type Dictionary } from "intlayer";

const inquiryFormContent = {
	key: "contact-inquiry",
	content: {
		sectionTitle: t({
			en: "Send an Inquiry",
			ar: "أرسل استفسارك"
		}),
		sectionDesc: t({
			en: "Our bespoke services are tailored to your unique architectural aspirations. Begin a conversation with our specialists to explore how we can bring your vision to life.",
			ar: "خدماتنا المصممة خصيصاً تلبي طموحاتك المعمارية الفريدة. ابدأ محادثة مع خبرائنا لاستكشاف كيف يمكننا تحويل رؤيتك إلى واقع ملموس."
		}),
		fullName: t({
			en: "FULL NAME",
			ar: "الاسم الكامل"
		}),
		fullNamePlaceholder: t({
			en: "e.g. John Doe",
			ar: "مثال: أحمد محمود"
		}),
		email: t({
			en: "EMAIL ADDRESS",
			ar: "البريد الإلكتروني"
		}),
		emailPlaceholder: t({
			en: "e.g. name@company.com",
			ar: "مثال: name@company.com"
		}),
		phone: t({
			en: "PHONE NUMBER",
			ar: "رقم الهاتف"
		}),
		phonePlaceholder: t({
			en: "+20 100 000 0000",
			ar: "+20 100 000 0000"
		}),
		company: t({
			en: "COMPANY",
			ar: "الشركة"
		}),
		companyPlaceholder: t({
			en: "e.g. DAC Holdings",
			ar: "اسم الشركة"
		}),
		projectType: t({
			en: "PROJECT TYPE",
			ar: "نوع المشروع"
		}),
		projectTypes: {
			realEstate: t({
				en: "Real Estate Development",
				ar: "تطوير عقاري"
			}),
			commercial: t({
				en: "Commercial Complex",
				ar: "مجمع تجاري وإداري"
			}),
			residential: t({
				en: "Residential Architecture & Villas",
				ar: "عمارة سكنية وفلل راقية"
			}),
			interior: t({
				en: "Interior Architecture & Fitout",
				ar: "تصميم داخلي وتشطيبات فاخرة"
			}),
			infrastructure: t({
				en: "General Construction & Infrastructure",
				ar: "مقاولات عامة وبنية تحتية"
			})
		},
		projectLocation: t({
			en: "PROJECT LOCATION",
			ar: "موقع المشروع"
		}),
		projectLocationPlaceholder: t({
			en: "e.g. New Cairo / Downtown Dubai",
			ar: "مثال: القاهرة الجديدة / دبي"
		}),
		message: t({
			en: "TELL US ABOUT YOUR PROJECT...",
			ar: "أخبرنا عن تفاصيل مشروعك..."
		}),
		messagePlaceholder: t({
			en: "Project scope, approximate timeline, budget or any specific requirements...",
			ar: "نطاق المشروع، الجدول الزمني التقريبي، أو أي متطلبات محددة..."
		}),
		submitBtn: t({
			en: "SEND INQUIRY",
			ar: "إرسال الاستفسار"
		}),
		submittingBtn: t({
			en: "SENDING...",
			ar: "جاري الإرسال..."
		}),
		successMessage: t({
			en: "Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.",
			ar: "شكراً لتواصلك! تم إرسال استفسارك بنجاح، وسيتواصل معك فريقنا في أقرب وقت."
		}),
		errorMessage: t({
			en: "Something went wrong while sending your inquiry. Please try again.",
			ar: "حدث خطأ أثناء إرسال استفسارك. يرجى المحاولة مرة أخرى."
		}),
		validation: {
			nameRequired: t({
				en: "Full name is required",
				ar: "الاسم الكامل مطلوب"
			}),
			emailRequired: t({
				en: "Email address is required",
				ar: "البريد الإلكتروني مطلوب"
			}),
			emailInvalid: t({
				en: "Please enter a valid email address",
				ar: "يرجى إدخال عنوان بريد إلكتروني صالح"
			}),
			messageRequired: t({
				en: "Please provide details about your project",
				ar: "يرجى كتابة تفاصيل حول مشروعك"
			})
		}
	}
} satisfies Dictionary;

export default inquiryFormContent;
