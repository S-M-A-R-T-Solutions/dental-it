import {
    ShieldCheck,
    ServerCog,
    Cloud,
    Activity,
    LockKeyhole,
    Stethoscope,
    Cpu,
    PhoneCall,
    Search,
    MonitorSmartphone,
    DatabaseBackup,
    Sparkles,
    Radar,
    Zap,
    Building2,
    Globe2,
    Users,
    Laptop,
} from "lucide-astro";

export const stats = [
    {
        value: "60+",
        label: "hours of dedicated support available every week",
    },
    {
        value: "24/7",
        label: "software, hardware, network, and system monitoring",
    },
    {
        value: "0.99¢",
        suffix: "/day",
        label: "starting proactive maintenance per workstation",
    },
    {
        value: "100%",
        label: "dental-focused IT solutions for modern practices",
    },
];

export const techSupportServices = [
    {
        title: "Managed IT Support",
        href: "/tech-support/managed-it-support",
        description:
            "Fast, dependable IT support tailored for dental offices, imaging systems, practice management software, and daily clinical workflows.",
        icon: ServerCog,
    },
    {
        title: "Dental Cloud Backups",
        href: "/tech-support/dental-cloud-backups",
        description:
            "Protect patient data, imaging files, and business-critical systems with secure cloud backup and recovery planning.",
        icon: DatabaseBackup,
    },
    {
        title: "Cloud Solutions",
        href: "/tech-support/cloud-solutions",
        description:
            "Move your practice toward reliable cloud infrastructure designed to reduce downtime and improve accessibility.",
        icon: Cloud,
    },
    {
        title: "Endpoint Detection Response",
        href: "/tech-support/endpoint-detection-response",
        description:
            "Strengthen every workstation with advanced endpoint protection, monitoring, and rapid response capabilities.",
        icon: Radar,
    },
    {
        title: "HIPAA Consulting",
        href: "/tech-support/hipaa-consulting",
        description:
            "Get practical guidance to help your dental practice align technology, security, and workflows with HIPAA requirements.",
        icon: ShieldCheck,
    },
    {
        title: "Dental Cybersecurity",
        href: "/tech-support/dental-cybersecurity",
        description:
            "Defend your practice from malware, phishing, ransomware, unauthorized access, and preventable security risks.",
        icon: LockKeyhole,
    },
    {
        title: "Proactive Maintenance",
        href: "/coming-soon?service=Proactive%20Maintenance",
        description:
            "Keep systems updated, monitored, optimized, and ready before small issues become costly downtime.",
        icon: Activity,
    },
];

export const deploymentServices = [
    {
        title: "Practice Startups",
        href: "/coming-soon?service=Practice%20Startups",
        description:
            "Build your new dental practice with a technology foundation designed for growth, security, and efficiency.",
        icon: Building2,
    },
    {
        title: "Practice Growth",
        href: "/coming-soon?service=Practice%20Growth",
        description:
            "Scale your technology as your practice adds providers, chairs, operatories, workstations, and new services.",
        icon: Users,
    },
    {
        title: "Tech Refresh",
        href: "/coming-soon?service=Tech%20Refresh",
        description:
            "Modernize outdated hardware, workstations, network devices, and systems to improve speed and reliability.",
        icon: Cpu,
    },
    {
        title: "Tech Enhancement",
        href: "/coming-soon?service=Tech%20Enhancement",
        description:
            "Upgrade key technology areas to boost performance, patient care, security, and team productivity.",
        icon: Zap,
    },
    {
        title: "Practice Renovation",
        href: "/coming-soon?service=Practice%20Renovation",
        description:
            "Coordinate technology planning during renovations, expansions, room changes, and equipment upgrades.",
        icon: MonitorSmartphone,
    },
    {
        title: "Tech Assessment",
        href: "/coming-soon?service=Tech%20Assessment",
        description:
            "Evaluate your practice technology, identify risk, document assets, and create a clear improvement roadmap.",
        icon: Search,
    },
    {
        title: "VoIP Phone Systems",
        href: "/coming-soon?service=VoIP%20Phone%20Systems",
        description:
            "Improve front desk communication, call handling, patient experience, and office phone workflows.",
        icon: PhoneCall,
    },
];

export const practiceSolutions = [
    {
        title: "Web Design for Dental Practices",
        href: "/coming-soon?service=Web%20Design%20for%20Dental%20Practices",
        description:
            "Modern, conversion-focused dental websites designed to support trust, speed, mobile performance, and local SEO.",
        icon: Globe2,
    },
    {
        title: "Dental SEO Service",
        href: "/coming-soon?service=Dental%20SEO%20Service",
        description:
            "Improve visibility for local dental searches with optimized content, technical SEO, and service-focused landing pages.",
        icon: Search,
    },
    {
        title: "Dental Social Media",
        href: "/coming-soon?service=Dental%20Social%20Media",
        description:
            "Build a stronger online presence with content planning, community engagement, and practice-focused campaigns.",
        icon: Sparkles,
    },
    {
        title: "Custom Software Development",
        href: "/coming-soon?service=Custom%20Software%20Development",
        description:
            "Create custom tools and workflows that help your team operate faster, smarter, and more efficiently.",
        icon: Laptop,
    },
];

export const trustItems = [
    "Dental software, imaging, and workstation expertise",
    "HIPAA-conscious IT planning and documentation",
    "Cloud backup and disaster recovery strategy",
    "Cybersecurity-first support for patient data protection",
    "Technology deployments for startups, expansions, and renovations",
    "Local support for Miami and South Florida dental practices",
];

export const whyChoose = [
    {
        title: "Dental-Focused Expertise",
        description:
            "We understand dental workflows, front desk needs, imaging stations, operatories, servers, backups, and the systems your team depends on daily.",
        icon: Stethoscope,
    },
    {
        title: "Security Without Guesswork",
        description:
            "From endpoint protection to backup planning, we help reduce security risks and strengthen the technology protecting your practice.",
        icon: LockKeyhole,
    },
    {
        title: "Proactive, Not Reactive",
        description:
            "Monitoring, maintenance, updates, and reporting help catch issues before they interrupt patient care.",
        icon: Activity,
    },
    {
        title: "Built for Growth",
        description:
            "Whether you are opening, expanding, renovating, or refreshing your technology, we design systems that can scale with your practice.",
        icon: Building2,
    },
];

export const process = [
    {
        step: "1",
        title: "Assess",
        description:
            "We review your current technology, risks, workstations, network, backups, security, and daily pain points.",
        image: "/images/home/process-dental-it-assessment-miami.webp",
        alt: "Dental IT assessment for a Miami dental practice",
    },
    {
        step: "2",
        title: "Plan",
        description:
            "We create a clear roadmap focused on uptime, security, compliance support, performance, and budget.",
        image: "/images/home/process-dental-it-planning-miami.webp",
        alt: "Dental IT planning for a dental practice in Miami",
    },
    {
        step: "3",
        title: "Deploy",
        description:
            "We implement the right solutions with minimal disruption to your team and patient schedule.",
        image: "/images/home/process-dental-technology-deployment-miami.webp",
        alt: "Dental technology deployment for a Miami dental office",
    },
    {
        step: "4",
        title: "Monitor",
        description:
            "We keep watching, maintaining, updating, and supporting your environment so your practice can keep moving.",
        image: "/images/home/process-dental-it-monitoring-miami.webp",
        alt: "Dental IT monitoring for a Miami dental practice",
    },
];