import {
	Activity,
	BadgeCheck,
	BookOpenCheck,
	CheckCircle2,
	ClipboardCheck,
	ClipboardList,
	Clock,
	FileCheck2,
	FileText,
	GraduationCap,
	HeartPulse,
	KeyRound,
	LockKeyhole,
	Radar,
	RefreshCcw,
	ScanSearch,
	ShieldAlert,
	ShieldCheck,
	Stethoscope,
	Users,
	Zap,
} from "lucide-astro";

export const heroHighlights = [
	"HIPAA risk assessments and gap analysis",
	"Policy, procedure, and documentation support",
	"Staff training and security awareness guidance",
	"Audit preparation, reporting, and remediation planning",
];

export const hipaaStats = [
	{
		value: "HIPAA",
		label: "privacy and security support for dental practices",
	},
	{
		value: "ePHI",
		label: "protection planning for electronic patient data",
	},
	{
		value: "24/7",
		label: "security-conscious monitoring and reporting options",
	},
];

export const complianceServices = [
	{
		title: "Risk Assessments & Gap Analysis",
		description:
			"Evaluate your current IT environment, workflows, devices, access controls, and documentation to identify vulnerabilities and compliance gaps.",
		icon: ScanSearch,
	},
	{
		title: "Policy & Procedure Development",
		description:
			"Create and document HIPAA-aligned policies for access controls, security responsibilities, incident response, backup expectations, and staff workflows.",
		icon: FileText,
	},
	{
		title: "Security Controls Implementation",
		description:
			"Plan and deploy safeguards such as encryption strategy, multi-factor authentication, audit logging, access control, and endpoint protection.",
		icon: LockKeyhole,
	},
	{
		title: "Employee Training & Awareness",
		description:
			"Educate your team on privacy expectations, breach prevention, phishing awareness, reporting steps, and safer handling of patient information.",
		icon: GraduationCap,
	},
	{
		title: "Audit Preparation & Support",
		description:
			"Prepare for HIPAA reviews with mock audits, documentation review, evidence organization, corrective action planning, and practical remediation guidance.",
		icon: ClipboardCheck,
	},
	{
		title: "Ongoing Monitoring & Reporting",
		description:
			"Use compliance dashboards, reports, documentation reviews, and security monitoring to track progress and support audit readiness over time.",
		icon: Activity,
	},
];

export const whyChooseDentalIT = [
	{
		title: "Dental-Focused Compliance Guidance",
		description:
			"We understand the systems dental offices use every day, including practice management software, imaging platforms, workstations, servers, backups, and cloud tools.",
		icon: Stethoscope,
	},
	{
		title: "Documentation That Supports Action",
		description:
			"HIPAA consulting should not stop at paperwork. We help connect your documentation to practical safeguards and technology workflows.",
		icon: FileCheck2,
	},
	{
		title: "Security-First IT Planning",
		description:
			"Compliance support is strongest when paired with cybersecurity, backup planning, access control, monitoring, and endpoint protection.",
		icon: ShieldCheck,
	},
	{
		title: "Ongoing Compliance Support",
		description:
			"HIPAA is not a one-time task. We help practices review, improve, and maintain safeguards as the office, team, and technology change.",
		icon: RefreshCcw,
	},
];

export const hipaaTechnologyAreas = [
	{
		title: "Administrative Safeguards",
		description:
			"Policies, training, access planning, security responsibilities, documentation, risk review, and workforce procedures.",
		icon: ClipboardList,
	},
	{
		title: "Physical Safeguards",
		description:
			"Workstation use, device handling, facility access, equipment placement, and protection for systems that store or access ePHI.",
		icon: KeyRound,
	},
	{
		title: "Technical Safeguards",
		description:
			"Access controls, audit logs, encryption planning, authentication, backups, endpoint security, and secure system configuration.",
		icon: Radar,
	},
	{
		title: "Documentation & Reporting",
		description:
			"Organized records, remediation tracking, compliance reports, audit preparation, and evidence that supports security decisions.",
		icon: BookOpenCheck,
	},
];

export const hipaaNeeds = [
	{
		title: "Avoid Costly Penalties",
		description:
			"Non-compliance can expose practices to investigations, penalties, corrective action plans, and legal risk.",
		icon: ShieldAlert,
	},
	{
		title: "Protect Patient Trust",
		description:
			"Strong privacy and security safeguards help patients feel confident that their information is handled responsibly.",
		icon: HeartPulse,
	},
	{
		title: "Prevent Data Breaches",
		description:
			"Risk assessments, staff awareness, access controls, backups, and monitoring help reduce the chance of patient data exposure.",
		icon: LockKeyhole,
	},
	{
		title: "Streamline Audits & Reviews",
		description:
			"Well-organized documentation and regular reporting make compliance reviews easier to manage.",
		icon: BadgeCheck,
	},
	{
		title: "Maintain Operational Continuity",
		description:
			"A compliance-conscious practice is better prepared to respond to incidents, recover quickly, and keep patient care moving.",
		icon: Clock,
	},
];

export const complianceSeoItems = [
	"Administrative safeguards for policies, workforce training, risk analysis, access planning, and documentation.",
	"Physical safeguards for workstations, devices, office access, and systems that store or access electronic protected health information.",
	"Technical safeguards for access control, audit logging, encryption planning, authentication, backup strategy, and secure system configuration.",
	"Corrective action planning to help close gaps discovered during HIPAA risk assessments and documentation reviews.",
];

export const finalCtaBullets = [
	"HIPAA risk assessment and gap analysis",
	"Policy, procedure, training, and documentation support",
	"Security controls, audit preparation, and ongoing reporting",
];

export { CheckCircle2, FileCheck2, ShieldCheck, Zap };