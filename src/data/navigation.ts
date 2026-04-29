export type NavItem = {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
    }[];
};

const comingSoon = (service: string) => `/coming-soon?service=${encodeURIComponent(service)}`;

export const navItems: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Tech Support",
        href: "#",
        children: [
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
                href: comingSoon("Proactive Maintenance"),
            },
        ],
    },
    {
        label: "Deployments",
        href: "/deployments",
        children: [
            { label: "Practice Startups", href: comingSoon("Practice Startups") },
            { label: "Practice Growth", href: comingSoon("Practice Growth") },
            { label: "Tech Refresh", href: comingSoon("Tech Refresh") },
            { label: "Tech Enhancement", href: comingSoon("Tech Enhancement") },
            {
                label: "Practice Renovation",
                href: comingSoon("Practice Renovation"),
            },
            { label: "Tech Assessment", href: comingSoon("Tech Assessment") },
            { label: "VoIP Phone Systems", href: comingSoon("VoIP Phone Systems") },
        ],
    },
    {
        label: "Dental Practice Solutions",
        href: "/dental-practice-solutions",
        children: [
            {
                label: "Web Design for Dental Practices",
                href: comingSoon("Web Design for Dental Practices"),
            },
            {
                label: "Dental SEO Service",
                href: comingSoon("Dental SEO Service"),
            },
            {
                label: "Dental Social Media",
                href: comingSoon("Dental Social Media"),
            },
            {
                label: "Custom Software Development",
                href: comingSoon("Custom Software Development"),
            },
        ],
    },
];