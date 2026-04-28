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
        href: "/tech-support",
        children: [
            { label: "Managed IT Support", href: comingSoon("Managed IT Support") },
            {
                label: "Dental Cloud Backups",
                href: comingSoon("Dental Cloud Backups"),
            },
            { label: "Cloud Solutions", href: comingSoon("Cloud Solutions") },
            {
                label: "Endpoint Detection Response",
                href: comingSoon("Endpoint Detection Response"),
            },
            { label: "HIPAA Consulting", href: comingSoon("HIPAA Consulting") },
            {
                label: "Dental Cybersecurity",
                href: comingSoon("Dental Cybersecurity"),
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