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
            { label: "Practice Startups", href: "/coming-soon?service=Practice%20Startups" },
            { label: "Practice Growth", href: "/coming-soon?service=Practice%20Growth" },
            { label: "Tech Refresh", href: "/coming-soon?service=Tech%20Refresh" },
            { label: "Tech Enhancement", href: "/coming-soon?service=Tech%20Enhancement" },
            {
                label: "Practice Renovation",
                href: "/coming-soon?service=Practice%20Renovation",
            },
            { label: "Tech Assessment", href: "/coming-soon?service=Tech%20Assessment" },
            { label: "VoIP Phone Systems", href: "/coming-soon?service=VoIP%20Phone%20Systems" },
        ],
    },
    {
        title: "Dental Practice Solutions",
        links: [
            {
                label: "Web Design for Dental Practices",
                href: "/coming-soon?service=Web%20Design%20for%20Dental%20Practices",
            },
            {
                label: "Dental SEO Service",
                href: "/coming-soon?service=Dental%20SEO%20Service",
            },
            {
                label: "Dental Social Media",
                href: "/coming-soon?service=Dental%20Social%20Media",
            },
            {
                label: "Custom Software Development",
                href: "/coming-soon?service=Custom%20Software%20Development",
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