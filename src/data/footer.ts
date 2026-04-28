import { Facebook, Instagram } from "lucide-astro";

export const phoneNumber = "(305) 972-5760";
export const phoneHref = "tel:+13059725760";

export const email = "info@itdental.tech";
export const emailHref = `mailto:${email}`;

export const footerColumns = [
    {
        title: "Tech Support",
        links: [
            { label: "Managed IT Support", href: "/tech-support/managed-it-support" },
            {
                label: "Dental Cloud Backups",
                href: "/tech-support/dental-cloud-backups",
            },
            { label: "Cloud Solutions", href: "/tech-support/cloud-solutions" },
            {
                label: "Endpoint Detection Response",
                href: "/tech-support/endpoint-detection-response",
            },
            { label: "HIPAA Consulting", href: "/tech-support/hipaa-consulting" },
            {
                label: "Dental Cybersecurity",
                href: "/tech-support/dental-cybersecurity",
            },
            {
                label: "Proactive Maintenance",
                href: "/tech-support/proactive-maintenance",
            },
        ],
    },
    {
        title: "Deployments",
        links: [
            { label: "Practice Startups", href: "/deployments/practice-startups" },
            { label: "Practice Growth", href: "/deployments/practice-growth" },
            { label: "Tech Refresh", href: "/deployments/tech-refresh" },
            { label: "Tech Enhancement", href: "/deployments/tech-enhancement" },
            {
                label: "Practice Renovation",
                href: "/deployments/practice-renovation",
            },
            { label: "Tech Assessment", href: "/deployments/tech-assessment" },
            { label: "VoIP Phone Systems", href: "/deployments/voip-phone-systems" },
        ],
    },
    {
        title: "Dental Practice Solutions",
        links: [
            {
                label: "Web Design for Dental Practices",
                href: "/dental-practice-solutions/web-design-for-dental-practices",
            },
            {
                label: "Dental SEO Service",
                href: "/dental-practice-solutions/dental-seo-service",
            },
            {
                label: "Dental Social Media",
                href: "/dental-practice-solutions/dental-social-media",
            },
            {
                label: "Custom Software Development",
                href: "/dental-practice-solutions/custom-software-development",
            },
        ],
    },
];

export const socialLinks = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/itdentaltech",
        icon: Facebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/itdentaltech/",
        icon: Instagram,
    },
];