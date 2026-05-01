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
        label: "Deployments",
        href: "/deployments",
        children: [
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
        label: "Practice Technology",
        href: "/practice-technology",
        children: [
            {
                label: "Web Design for Dental Practices",
                href: "/practice-technology/dental-web-design",
            },
            {
                label: "Dental SEO Service",
                href: "/practice-technology/dental-seo-service",
            },
            {
                label: "Dental Social Media",
                href: "/practice-technology/dental-social-media",
            },
            {
                label: "Custom Software Development",
                href: "/practice-technology/custom-software-development",
            },
        ],
    },
];