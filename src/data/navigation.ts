export type NavItem = {
    label: string;
    href: string;
    children?: {
        label: string;
        href: string;
    }[];
};

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
        label: "Dental Practice Solutions",
        href: "/dental-practice-solutions",
        children: [
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