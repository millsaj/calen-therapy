import { Metadata } from "next";
import { getImageUrl, ICalenImage, images } from "./images";
import { routes } from "./routes";
import { contactDetails } from "./contact";
import { url } from "inspector";

/**
 * Metadata configuration for SEO and Open Graph
 */

export interface ICalenMetadata {
    pageTitle: string;
    siteTitle?: string;
    description?: string;
    additionalKeywords?: string[];
    image?: ICalenImage;
    path?: string;
    ogType?: "website" | "article" | "profile";
    includeLocalBusinessSchema?: boolean;
}

const defaultDescription = "Professional therapy services for individuals, couples, and families in Wigan, St Helens, and online. Expert support for anxiety, depression, trauma, and relationship issues.";
const baseKeywords = [
    "therapy",
    "counselling",
    "psychotherapy",
    "Wigan",
    "St Helens",
    "Billinge",
    "online therapy",
    "mental health",
    "anxiety",
    "depression",
    "relationship counselling",
    "CBT",
    "solution-focused hypnotherapy",
];

/**
 * Builds metadata for a page
 */
export const buildMetadata = ({
    pageTitle,
    siteTitle = "Calen Therapy in Wigan & St Helens",
    description = defaultDescription,
    additionalKeywords = [],
    image = images.general.homeHero,
    path = "/",
    ogType = "website",
    includeLocalBusinessSchema = false,
}: ICalenMetadata): Metadata => {
    const title = `${pageTitle} | ${siteTitle}`;
    const ogImage = {
      url: getImageUrl(image, 1200, 630, 'cover', 'center'),
      alt: image.alt || title,
    };

    const metadataResult: Metadata = {
        metadataBase: new URL(routes.baseUrl()),
        title,
        description,
        keywords: baseKeywords.concat(additionalKeywords),
        openGraph: {
            title,
            description,
            url: path,
            type: ogType,
            images: [ogImage],
            siteName: "Calen Therapy",
            locale: "en_GB",
            countryName: "United Kingdom"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        alternates: {
            canonical: path,
        }
    };

    if (includeLocalBusinessSchema) {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": routes.baseUrl(),
            "name": "Calen Therapy",
            "description": defaultDescription,
            "url": routes.baseUrl(),
            "telephone": contactDetails.phones.helen,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": contactDetails.address.street,
                "addressLocality": contactDetails.address.town,
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": contactDetails.address.coordinates.lat,
                "longitude": contactDetails.address.coordinates.lng
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "09:00",
                    "closes": "21:00"
                }
            ],
            "priceRange": "££"
        };

        const otherData: Record<string, string | number | (string | number)[]> =
            metadataResult.other as Record<string, string | number | (string | number)[]> || {};

        otherData["script:ld+json"] = JSON.stringify(structuredData);
        metadataResult.other = otherData;
    }

    return metadataResult;
};
