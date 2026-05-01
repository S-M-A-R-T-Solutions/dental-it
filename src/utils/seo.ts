import { siteConfig } from "../data/site";

type StructuredDataOptions = {
    currentUrl: string;
    pageTitle: string;
    description: string;
    absoluteImageUrl: string;
};

export const getPageTitle = (title: string) => {
    return title.includes(siteConfig.siteName)
        ? title
        : `${title} | ${siteConfig.siteName}`;
};

export const getAbsoluteUrl = (pathOrUrl: string) => {
    return new URL(pathOrUrl, siteConfig.siteUrl).toString();
};

export const getCanonicalUrl = (pathname: string, canonical?: string) => {
    return canonical ?? new URL(pathname, siteConfig.siteUrl).toString();
};

export const getStructuredData = ({
    currentUrl,
    pageTitle,
    description,
    absoluteImageUrl,
}: StructuredDataOptions) => {
    const { siteName, siteUrl, business, social, location } = siteConfig;

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": `${siteUrl}/#localbusiness`,
                name: business.name,
                alternateName: business.alternateName,
                url: siteUrl,
                logo: getAbsoluteUrl(business.logo),
                image: absoluteImageUrl,
                description:
                    "Dental IT provides managed IT services, cybersecurity, HIPAA compliance support, cloud backups, monitoring, deployments, and technology solutions for dental practices in Miami and South Florida.",
                telephone: business.phone,
                email: business.email,
                priceRange: business.priceRange,
                areaServed: [
                    {
                        "@type": "City",
                        name: location.city,
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: location.city,
                            addressRegion: location.region,
                            addressCountry: location.country,
                        },
                    },
                    {
                        "@type": "AdministrativeArea",
                        name: "South Florida",
                    },
                ],
                address: {
                    "@type": "PostalAddress",
                    addressLocality: location.city,
                    addressRegion: location.region,
                    addressCountry: location.country,
                },
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: business.phone,
                    email: business.email,
                    contactType: "customer support",
                    areaServed: "US-FL",
                    availableLanguage: ["English", "Spanish"],
                },
                sameAs: [social.facebook, social.instagram],
                makesOffer: [
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Managed IT Support for Dental Practices",
                            serviceType: "Dental IT Support",
                            areaServed: location.areaServed,
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "HIPAA Compliance IT Support",
                            serviceType: "HIPAA Compliance",
                            areaServed: location.areaServed,
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Dental Cybersecurity Services",
                            serviceType: "Cybersecurity",
                            areaServed: location.areaServed,
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Cloud Backups and Disaster Recovery",
                            serviceType: "Cloud Backup",
                            areaServed: location.areaServed,
                        },
                    },
                    {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name: "Dental Practice Technology Deployments",
                            serviceType: "IT Deployment",
                            areaServed: location.areaServed,
                        },
                    },
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: siteName,
                description:
                    "Managed IT services, cybersecurity, HIPAA compliance support, cloud backups, and technology solutions for dental practices in Miami and South Florida.",
                publisher: {
                    "@id": `${siteUrl}/#localbusiness`,
                },
                inLanguage: "en-US",
            },
            {
                "@type": "WebPage",
                "@id": `${currentUrl}#webpage`,
                url: currentUrl,
                name: pageTitle,
                description,
                isPartOf: {
                    "@id": `${siteUrl}/#website`,
                },
                about: {
                    "@id": `${siteUrl}/#localbusiness`,
                },
                primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: absoluteImageUrl,
                },
                inLanguage: "en-US",
            },
        ],
    };
};