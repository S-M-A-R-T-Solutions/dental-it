import {
    Activity,
    BarChart3,
    ClipboardCheck,
    DatabaseZap,
    Eye,
    FileCheck2,
    Gauge,
    HardDrive,
    LayoutDashboard,
    LineChart,
    LockKeyhole,
    Map,
    Network,
    Route,
    Scale,
    SearchCheck,
    ServerCog,
    ShieldCheck,
    Stethoscope,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-astro";

export const heroHighlights = [
    "Infrastructure inventory and technology audit",
    "Performance, security, and compliance review",
    "Workflow impact analysis for dental operations",
    "Actionable recommendations with upgrade priorities",
];

export const includedServices = [
    {
        title: "Infrastructure Inventory & Audit",
        description:
            "Detailed cataloging of hardware, software, network devices, licenses, and technology assets across your dental practice.",
        icon: ServerCog,
    },
    {
        title: "Performance Benchmarking",
        description:
            "Measurement of CPU, memory, storage, network throughput, workstation health, and system performance against operational best practices.",
        icon: Gauge,
    },
    {
        title: "Security & Compliance Review",
        description:
            "Vulnerability review, configuration checks, cybersecurity observations, and HIPAA-conscious gap analysis to identify potential risks.",
        icon: ShieldCheck,
    },
    {
        title: "Workflow Impact Analysis",
        description:
            "Assessment of how technology supports clinical and administrative workflows, highlighting bottlenecks that affect your team.",
        icon: Route,
    },
    {
        title: "Capacity & Scalability Forecasting",
        description:
            "Analysis of current resource utilization and future growth needs to guide upgrades, replacements, cloud planning, and expansion.",
        icon: TrendingUp,
    },
    {
        title: "Actionable Recommendations Report",
        description:
            "A prioritized roadmap with recommended improvements, estimated effort, timelines, and business impact for better planning.",
        icon: ClipboardCheck,
    },
];

export const whyChooseTechAssessment = [
    {
        title: "Dental-Industry Focus",
        description:
            "We understand dental software, imaging systems, operatories, front desk workflows, and technology demands specific to dental practices.",
        icon: Stethoscope,
    },
    {
        title: "Vendor-Neutral Evaluation",
        description:
            "Recommendations are based on your practice’s needs, not vendor pressure, helping you make clearer technology decisions.",
        icon: Scale,
    },
    {
        title: "Flat-Rate Assessment Fees",
        description:
            "Transparent assessment pricing helps you understand the scope before work begins, with no surprise audit costs.",
        icon: FileCheck2,
    },
    {
        title: "Experienced IT Consultants",
        description:
            "Work with professionals familiar with healthcare IT, dental environments, cybersecurity, networks, workstations, and operational continuity.",
        icon: Users,
    },
    {
        title: "Clear, Visual Reporting",
        description:
            "Receive practical dashboards, summaries, and prioritized findings that make it easier to decide what to fix first.",
        icon: BarChart3,
    },
];

export const assessmentNeeds = [
    {
        title: "Identify Hidden Risks",
        description:
            "Uncover security vulnerabilities, aging hardware, backup issues, misconfigurations, and performance bottlenecks before they cause downtime.",
        icon: SearchCheck,
    },
    {
        title: "Optimize Resource Allocation",
        description:
            "Understand where your practice should invest, what can wait, and which upgrades can deliver the most operational value.",
        icon: Target,
    },
    {
        title: "Plan Strategic Upgrades",
        description:
            "Use data-driven insights to guide your technology roadmap, budget planning, replacements, and future infrastructure decisions.",
        icon: Map,
    },
    {
        title: "Demonstrate Compliance",
        description:
            "Documented assessments can support internal governance, HIPAA-conscious planning, and security-focused decision-making.",
        icon: ClipboardCheck,
    },
    {
        title: "Improve Patient Experience",
        description:
            "Faster systems, stable networks, reliable imaging, and fewer technology disruptions help appointments run more smoothly.",
        icon: Zap,
    },
];

export const technologyAreas = [
    {
        title: "Hardware & Workstations",
        description:
            "Review desktops, laptops, operatories, front desk systems, servers, storage, device age, and replacement readiness.",
        icon: HardDrive,
    },
    {
        title: "Network & Connectivity",
        description:
            "Assess switches, routers, Wi-Fi, cabling, throughput, uptime risks, and the connectivity your team depends on.",
        icon: Network,
    },
    {
        title: "Security & Access",
        description:
            "Review endpoint protection, configurations, user access, security gaps, and risk areas that could affect patient data.",
        icon: LockKeyhole,
    },
    {
        title: "Performance & Workflow",
        description:
            "Identify slow systems, workflow blockers, software friction, and technology issues that affect productivity and patient care.",
        icon: Activity,
    },
];

export const complianceItems = [
    "Inventory documentation for hardware, software, network devices, licenses, and technology assets.",
    "Security and configuration review to identify risks that may affect patient data protection.",
    "Performance and workflow findings that help prioritize upgrades and reduce downtime.",
    "Practical recommendations that support HIPAA-conscious planning, budgeting, and governance.",
];

export const clarityItems = [
    {
        title: "Audit",
        description:
            "Document your current technology environment, asset inventory, performance, security posture, and workflow impact.",
        icon: Eye,
    },
    {
        title: "Analyze",
        description:
            "Review findings, identify gaps, benchmark performance, and evaluate infrastructure readiness for growth.",
        icon: LineChart,
    },
    {
        title: "Prioritize",
        description:
            "Create a clear roadmap with the most important fixes, upgrades, and modernization opportunities first.",
        icon: DatabaseZap,
    },
];

export const consultationItems = [
    "Understand the strengths and weaknesses of your current IT environment.",
    "Identify security, compliance, performance, and workflow risks before they become larger problems.",
    "Receive actionable recommendations for optimization, remediation, upgrades, and long-term planning.",
];