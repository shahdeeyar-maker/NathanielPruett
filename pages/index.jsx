import React, { useState } from "react";
import Head from "next/head";

const profile = {
  name: "Nathaniel Pruett",
  title: "Maintenance Manager | Facilities, Reliability & Manufacturing Operations",
  email: "npn.ctf@gmail.com",
  phone: "341-302-6316",
  location: "Greater San Francisco Bay Area",
  linkedin: "https://linkedin.com/in/nathaniel-pruett",
  bio:
    "Dynamic and situational leader with a proven track record of resolving multifaceted issues across diverse sectors, including advanced manufacturing, automotive production, food manufacturing, and United States federal sites. I combine technical expertise, process insight, and strategic planning to improve reliability, strengthen operational systems, and deliver sustainable results.",
  metaDescription:
    "Nathaniel Pruett - Maintenance Manager specializing in Facilities, Reliability & Manufacturing Operations with 10+ years of experience.",
  metrics: [
    { label: "Facilities Managed", value: "375+", detail: "Multi-location operations" },
    { label: "Federal Coverage", value: "6M+ sq ft", detail: "Mission-critical infrastructure" },
    { label: "Team Leadership", value: "Multi-trade", detail: "Specialists & contractors" },
    { label: "Uptime Focus", value: "99%+", detail: "Reliability optimization" },
  ],
  certifications: [
    "Lean Six Sigma Green Belt",
    "Capital Project Management",
    "Advanced Maintenance Planning",
    "Federal Facilities Management",
    "OSHA Safety Certification",
    "Robotics & Automation Integration",
  ],
  skills: [
    "Kaizen & Six Sigma",
    "Preventive Maintenance Planning",
    "Capital Project Management",
    "KPI Development & Tracking",
    "Strategic Planning",
    "Safety & Quality Assurance",
    "Regulatory & Risk Management",
    "Robotics & Automation Support",
    "Budget & Resource Management",
    "Team Leadership",
    "Root Cause Analysis",
    "CMMS Systems",
  ],
};

const companies = [
  {
    id: "saint-gobain",
    name: "Saint-Gobain",
    logoText: "SG",
    role: "Maintenance & Facilities Manager",
    dates: "2025 — Present",
    location: "Manufacturing Facility",
    tagline: "Manufacturing maintenance leadership, reliability planning, and capital project execution.",
    overview:
      "Lead maintenance operations, contractors, planners, supervisors, and reliability engineers while handling long-term maintenance programs and capital projects that support safe, efficient, and reliable manufacturing operations. Responsible for optimizing preventive maintenance execution, improving equipment reliability metrics, and delivering strategic capital projects.",
    keyAchievements: [
      "Reduced equipment downtime by 25% through optimized PM scheduling",
      "Established reliability metrics dashboard with real-time performance tracking",
      "Managed $2M+ capital project portfolio with 95% on-time delivery",
      "Improved team efficiency through standardized SOPs and cross-training",
    ],
    responsibilities: [
      "Direct maintenance operations across multi-trade departments",
      "Manage contractors, planners, supervisors, and reliability engineering teams",
      "Develop and implement preventive maintenance strategies",
      "Oversee capital project planning and execution",
      "Drive continuous improvement and reliability initiatives",
      "Support safety, quality, and operational performance metrics",
    ],
    projects: [
      {
        title: "Preventive Maintenance Program Optimization",
        description:
          "Strengthened preventive maintenance execution to improve equipment reliability, reduce recurring downtime drivers, and give leadership better visibility into maintenance priorities. Implemented condition-based monitoring systems.",
        impact: "+35% equipment availability | -40% emergency repairs",
      },
      {
        title: "Capital Project Portfolio Management",
        description:
          "Oversaw and coordinated capital project activity tied to facility reliability, equipment improvement, and long-term manufacturing capability. Managed cross-functional teams and vendor coordination.",
        impact: "$2M+ projects | 95% on-time delivery",
      },
      {
        title: "Reliability & Continuous Improvement Program",
        description:
          "Partnered with maintenance and operations teams to identify recurring issues, implement LEAN principles, improve maintenance response times, and support sustainable process improvements.",
        impact: "25% downtime reduction | 15% cost savings",
      },
    ],
  },
  {
    id: "magna",
    name: "Magna International",
    logoText: "MI",
    role: "Manufacturing & Operations / Facilities Leadership",
    dates: "Prior Experience",
    location: "Automotive Manufacturing Facility",
    tagline: "Automotive manufacturing support focused on reliability, safety, and production continuity.",
    overview:
      "Supported operations in a global automotive manufacturing environment, with work centered on production support, equipment reliability, safety, and cross-functional problem solving. Collaborated with production teams to minimize downtime and maintain quality standards in a high-volume assembly environment.",
    keyAchievements: [
      "Improved equipment OEE (Overall Equipment Effectiveness) by 18%",
      "Reduced production stoppages by 30% through predictive maintenance",
      "Led safety initiatives achieving 1,000+ days without lost-time injuries",
      "Implemented condition monitoring on critical production assets",
    ],
    responsibilities: [
      "Support manufacturing operations and equipment reliability in high-volume production",
      "Collaborate with operations and maintenance teams on technical troubleshooting",
      "Contribute to safety and continuous improvement workstreams",
      "Monitor equipment performance and KPIs",
      "Coordinate with cross-functional teams on production issues",
    ],
    projects: [
      {
        title: "Production Reliability & OEE Optimization",
        description:
          "Worked on maintenance and operational improvements that stabilized manufacturing processes and reduced interruptions to production flow. Implemented real-time monitoring systems.",
        impact: "+18% OEE | -30% production stoppages",
      },
      {
        title: "Automotive Process Improvement",
        description:
          "Supported continuous improvement activities in a high-volume automotive production environment where uptime, quality, and repeatability were critical. Led LEAN Six Sigma initiatives.",
        impact: "12% efficiency gain | $500K+ in savings",
      },
      {
        title: "Cross-Functional Issue Resolution",
        description:
          "Resolved technical and process issues by coordinating with production, maintenance, and leadership teams. Implemented root cause analysis methodology across organization.",
        impact: "98% issue resolution rate",
      },
    ],
  },
  {
    id: "adient",
    name: "Adient (Futuris)",
    logoText: "AD",
    role: "Robot Engineer",
    dates: "2017 — 2018",
    location: "Tier 1 Automotive Supplier",
    tagline: "Robotic welding, tooling operation, and automotive supplier support for Tesla-related programs.",
    overview:
      "Programmed Tier 1 Tesla supplier welding systems, worked on upper application robot cells, designed intelligent tooling operation, and supported welding quality control and process repeatability. Advanced technical role focused on automation excellence and quality assurance.",
    keyAchievements: [
      "Programmed 15+ robotic welding cells with 99.5% uptime",
      "Reduced weld defects by 22% through process optimization",
      "Designed advanced tooling systems supporting 5,000+ parts/week",
      "Maintained 100% compliance with Tesla quality standards",
    ],
    responsibilities: [
      "Program and maintain robotic welding systems and upper application robot cells",
      "Design tooling operation improvements and automation workflows",
      "Support welding quality control and process repeatability",
      "Maintain technical documentation and control practices",
      "Collaborate with production teams on process optimization",
    ],
    projects: [
      {
        title: "Robotic Welding Cell Programming & Optimization",
        description:
          "Programmed welding robots and supported upper application robot cells to improve weld consistency, production execution, and throughput. Implemented advanced motion control techniques.",
        impact: "99.5% uptime | -22% defects | +15% throughput",
      },
      {
        title: "Intelligent Tooling Operation Design",
        description:
          "Designed tooling operation concepts that improved automation reliability, supported better control of the welding process, and enabled scalable production capabilities.",
        impact: "5,000+ parts/week capacity",
      },
      {
        title: "Tesla Supplier Quality Assurance",
        description:
          "Supported welding quality control and technical documentation in a Tier 1 supplier environment connected to Tesla production requirements. Maintained compliance with OEM standards.",
        impact: "100% compliance | Zero quality escapes",
      },
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    logoText: "T",
    role: "Lead Equipment Maintenance Technician",
    dates: "2018 — 2020",
    location: "Manufacturing Plant",
    tagline: "Production equipment maintenance, robotic weld cell support, and downtime reduction.",
    overview:
      "Directed downtime work, managed PMV tooling, and supported production with maintenance leadership across welding robots, safety systems, and automation equipment. Led technical maintenance team in a high-volume, fast-paced manufacturing environment focused on continuous improvement.",
    keyAchievements: [
      "Reduced equipment downtime by 35% through predictive maintenance",
      "Led team of 8+ technicians with zero safety incidents",
      "Designed fixtures improving production capacity by 20%",
      "Implemented preventive maintenance program reducing emergency repairs by 45%",
    ],
    responsibilities: [
      "Direct downtime work and urgent equipment recovery for production systems",
      "Create and improve robotic weld cell fixtures, tooling, and safety practices",
      "Support preventive maintenance, repairs, troubleshooting, and RCA",
      "Lead and mentor maintenance technicians",
      "Optimize maintenance workflows and procedures",
    ],
    projects: [
      {
        title: "Robotic Weld Cell Fixture Redesign & Implementation",
        description:
          "Created and improved fixtures for robotic weld cells to support production stability, repeatability, and safer maintenance access. Engineered custom solutions for high-volume production.",
        impact: "+20% capacity | -15% maintenance time",
      },
      {
        title: "Scrap Reduction & Quality Improvement Program",
        description:
          "Reduced scrap and improved product quality through hands-on troubleshooting, equipment adjustments, and process-focused maintenance improvements. Led team through detailed RCA.",
        impact: "-40% scrap rate | +99.2% quality",
      },
      {
        title: "Preventive Maintenance & Response System",
        description:
          "Led and supported PM activity, repairs, and root-cause troubleshooting in a high-speed production environment. Implemented CMMS optimization.",
        impact: "-35% downtime | -45% emergency repairs",
      },
    ],
  },
  {
    id: "amentum-nasa",
    name: "Amentum / NASA Ames",
    logoText: "NASA",
    role: "Maintenance & Operations Facilities Manager",
    dates: "2024 — 2025",
    location: "Federal Research Center",
    tagline: "Federal facilities maintenance leadership across large-scale, mission-critical infrastructure.",
    overview:
      "Led multi-trade maintenance performance for NASA Ames Research Center, covering 375 facilities and more than 6 million square feet while supporting scheduled maintenance, emergency response, continuous improvement, and operational readiness. Managed complex federal compliance requirements and mission-critical systems.",
    keyAchievements: [
      "Managed 375 facilities across 6M+ sq ft with 98% uptime",
      "Achieved 100% compliance with federal regulations and safety standards",
      "Reduced maintenance backlog by 60% in first 6 months",
      "Implemented 5S initiatives improving facility organization by 75%",
    ],
    responsibilities: [
      "Oversee scheduled and unscheduled maintenance across large federal research campus",
      "Direct emergency response, performance planning, and SOP development",
      "Manage multi-trade maintenance teams and resources",
      "Implement reliability planning and continuous improvement practices",
      "Ensure regulatory compliance and operational readiness",
    ],
    projects: [
      {
        title: "Campus-Wide Maintenance Performance Program",
        description:
          "Supported maintenance execution across 375 facilities and more than 6 million square feet, aligning field teams with reliability and performance expectations. Implemented standardized procedures.",
        impact: "98% uptime | 375 facilities | 6M+ sq ft",
      },
      {
        title: "5S & Reliability Planning System Implementation",
        description:
          "Implemented 5S principles and reliability planning practices to improve organization, workflow discipline, and maintenance readiness. Created visual management systems.",
        impact: "+75% organization | +60% efficiency",
      },
      {
        title: "Emergency Response & Federal Compliance",
        description:
          "Supported emergency response planning, standard operating procedures development, and operational readiness for critical site infrastructure. Achieved 100% regulatory compliance.",
        impact: "100% compliance | 24/7 readiness",
      },
    ],
  },
  {
    id: "sees",
    name: "See's Candies",
    logoText: "SC",
    role: "Maintenance Manager",
    dates: "2023 — 2024",
    location: "Food Manufacturing Facility",
    tagline: "Food manufacturing maintenance leadership, capex planning, PM programs, and production support.",
    overview:
      "Managed maintenance operations and personnel for a production facility while leading preventive maintenance, capital project planning, corrective actions, and production equipment improvements. Maintained FDA and food safety compliance while optimizing production uptime in a regulated environment.",
    keyAchievements: [
      "Developed and approved $1.5M capital project portfolio",
      "Improved equipment reliability by 28% through PM optimization",
      "Achieved 100% FDA and safety compliance audits",
      "Reduced maintenance costs by 22% while improving uptime",
    ],
    responsibilities: [
      "Manage maintenance teams supporting production facility reliability",
      "Develop and present business cases for capital projects",
      "Manage capex/opex reporting and budgeting",
      "Oversee preventive maintenance and corrective maintenance programs",
      "Support training and process improvement initiatives",
    ],
    projects: [
      {
        title: "Capital Project Business Development & Execution",
        description:
          "Developed and presented comprehensive business cases for large-scale capital projects, connecting equipment needs to operational value and production reliability. Managed project governance.",
        impact: "$1.5M portfolio | 90% approval rate",
      },
      {
        title: "Preventive Maintenance Program Modernization",
        description:
          "Improved PM programs and maintenance planning to support equipment uptime and reduce reactive maintenance pressure. Implemented advanced scheduling.",
        impact: "+28% reliability | -35% emergency repairs",
      },
      {
        title: "Maintenance Training & Process Excellence",
        description:
          "Strengthened corrective maintenance practices and training processes to support more consistent troubleshooting and team execution. Developed certification program.",
        impact: "100% compliance | +40% skill level",
      },
    ],
  },
];

function LogoBadge({ text }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-lg font-bold tracking-tight text-white shadow-lg ring-1 ring-slate-700">
      {text}
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl leading-7 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function CompanyTab({ company }) {
  return (
    <section className="space-y-8">
      {/* Header Section */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl">
        <div className="px-8 py-12 text-white lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-6">
              <LogoBadge text={company.logoText} />
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{company.dates}</p>
                <h1 className="mt-2 text-4xl font-black tracking-tight">{company.name}</h1>
                <p className="mt-2 text-2xl font-semibold text-blue-300">{company.role}</p>
                <p className="mt-2 text-slate-300">{company.location}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 backdrop-blur-sm ring-1 ring-blue-400/30">
              <p className="text-lg leading-7 text-slate-100">{company.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview and Key Achievements */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <SectionTitle eyebrow="Role Overview" title="Position Scope" />
          <p className="leading-8 text-slate-700">{company.overview}</p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 shadow-lg ring-1 ring-blue-200">
          <SectionTitle eyebrow="Key Achievements" title="Impact & Results" />
          <ul className="space-y-3">
            {company.keyAchievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">✓</span>
                <span className="text-slate-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Column - Responsibilities */}
        <div>
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
            <SectionTitle eyebrow="Responsibilities" title="Leadership Areas" />
            <div className="space-y-3">
              {company.responsibilities.map((item, idx) => (
                <div key={idx} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">•</span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Projects */}
        <div>
          <SectionTitle eyebrow="Project Work" title="Selected Projects" subtitle="Key contributions with measurable impact and outcomes." />
          <div className="grid gap-4">
            {company.projects.map((project, index) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:shadow-xl">
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-950">{project.title}</h3>
                      <p className="mt-1 leading-6 text-slate-600">{project.description}</p>
                    </div>
                  </div>
                  {project.impact && (
                    <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4 ring-1 ring-blue-100">
                      <p className="text-sm font-semibold text-blue-700">💡 Impact: {project.impact}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioWebsite() {
  const [active, setActive] = useState("home");
  const activeCompany = companies.find((company) => company.id === active);

  return (
    <>
      <Head>
        <title>{profile.name} | Maintenance Manager & Facilities Leadership</title>
        <meta name="description" content={profile.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={profile.metaDescription} />
        <meta property="og:type" content="profile" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900">
        {/* Sticky Header */}
        <header className="sticky top-0 z-20 border-b border-slate-200/50 bg-white/80 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-7xl px-5 py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <button onClick={() => setActive("home")} className="text-left transition hover:opacity-80">
                <p className="text-2xl font-black tracking-tight text-slate-950">{profile.name}</p>
                <p className="text-sm font-medium text-blue-600">Maintenance & Reliability Leadership</p>
              </button>

              <nav className="flex flex-wrap gap-2 overflow-x-auto pb-2 lg:pb-0">
                <button
                  onClick={() => setActive("home")}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active === "home"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Home
                </button>
                {companies.map((company) => (
                  <button
                    key={company.id}
                    onClick={() => setActive(company.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active === company.id
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {company.name.replace(" Ames Research Center", "").split(" ")[0]}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-5 py-12">
          {active === "home" ? (
            <section className="space-y-12">
              {/* Hero Section */}
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 shadow-2xl">
                <div className="grid gap-12 p-8 text-white lg:grid-cols-[1.3fr_.7fr] lg:p-16">
                  <div>
                    <p className="mb-6 inline-block rounded-full bg-blue-500/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 ring-1 ring-blue-400/50">
                      Executive Portfolio
                    </p>
                    <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">{profile.name}</h1>
                    <p className="mt-4 text-2xl font-semibold text-blue-300">{profile.title}</p>
                    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">{profile.bio}</p>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <a
                        href={`mailto:${profile.email}`}
                        className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
                      >
                        Contact Me
                      </a>
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border-2 border-blue-400 px-6 py-3 font-semibold text-blue-300 transition hover:bg-blue-500/10"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="grid gap-4 self-center">
                    {profile.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20">
                        <p className="text-3xl font-black text-blue-300">{metric.value}</p>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-200">{metric.label}</p>
                        <p className="mt-1 text-xs text-slate-300">{metric.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills & Certifications */}
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Skills */}
                <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                  <SectionTitle eyebrow="Technical Expertise" title="Core Competencies" />
                  <div className="grid grid-cols-2 gap-3">
                    {profile.skills.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-blue-100"
                      >
                        ✓ {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                  <SectionTitle eyebrow="Professional Development" title="Certifications" />
                  <div className="space-y-3">
                    {profile.certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-3 rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">
                          ✓
                        </span>
                        <span className="font-semibold text-slate-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Cards */}
              <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                <SectionTitle
                  eyebrow="Professional History"
                  title="Experience Portfolio"
                  subtitle="Click any company to explore detailed role scope, achievements, responsibilities, and project contributions."
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => setActive(company.id)}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 text-left shadow-md transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <LogoBadge text={company.logoText} />
                        <div>
                          <p className="font-bold text-slate-950">{company.name}</p>
                          <p className="text-xs font-medium text-slate-500">{company.dates}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{company.tagline}</p>
                      <p className="mt-4 text-sm font-bold text-blue-600 transition group-hover:underline">Explore role →</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center text-white shadow-xl">
                <h2 className="text-4xl font-black">Ready to Collaborate?</h2>
                <p className="mt-4 text-lg text-blue-100">Let's discuss how I can drive reliability and operational excellence for your organization.</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                    📧 Email Me
                  </a>
                  <a href={`tel:${profile.phone}`} className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
                    📱 Call Me
                  </a>
                </div>
              </div>
            </section>
          ) : (
            <CompanyTab company={activeCompany} />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white/50 py-8 text-center text-slate-600 backdrop-blur-sm">
          <p>&copy; 2024 Nathaniel Pruett. All rights reserved.</p>
          <p className="mt-2 text-sm">Maintenance & Facilities Leadership | Operations Excellence</p>
        </footer>
      </div>
    </>
  );
}
