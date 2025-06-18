import { Metadata } from "next";

import { ICalenImage, images } from "./images";
import { routes } from "./routes";

interface ICalenMetadata {
    title?: string | undefined;
    description?: string;
    keywords?: string[];
    image?: ICalenImage;
    url?: string;
    ogType?: "website" | "article" | "profile";
}

export const buildMetadata = ({
    title = undefined,
    description = "Professional therapy services for individuals, couples, and families in Wigan, St Helens, and online.",
    keywords = [],
    image = images.general.homeHero,
    url = "/",
    ogType = "website"
}: ICalenMetadata): Metadata => {
    title = title ? `${title} | Calen Therapy` : "Calen Therapy";

    return {
        metadataBase: new URL(routes.baseUrl()),
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            url,
            type: ogType,
            images: [image],
            siteName: "Calen Therapy",
            locale: "en_GB",
            countryName: "United Kingdom"
        }
    };
};
