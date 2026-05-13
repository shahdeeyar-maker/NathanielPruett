import React, { useState } from "react";

const profile = {
  name: "Nathaniel Pruett",
  title: "Maintenance Manager | Facilities, Reliability & Manufacturing Operations",
  email: "npn.ctf@gmail.com",
  phone: "341-302-6316",
  location: "Greater San Francisco Bay Area",
  bio:
    "Dynamic and situational leader with a proven track record of resolving multifaceted issues across diverse sectors, including advanced manufacturing, automotive production, food manufacturing, and United States federal sites. I combine technical expertise, process insight, and strategic planning to improve reliability, strengthen operational systems, and deliver sustainable results.",
  metrics: [
    { label: "Facilities Supported", value: "375+" },
    { label: "Federal Site Coverage", value: "6M+ sq. ft." },
    { label: "Leadership Scope", value: "Multi-trade teams" },
    { label: "Focus", value: "Reliability & uptime" },
  ],
  skills: [
    "Kaizen & Six Sigma",
    "Maintenance Planning",
    "Capital Project Management",
    "KPI Identification",
    "Strategic Planning",
    "Safety & Quality Assurance",
    "Regulatory & Risk Management",
    "Robotics & Automation Support",
  ],
};

const companies = [
  {
    id: "saint-gobain",
    name: "Saint-Gobain",
    logoText: "SG",
    role: "Maintenance & Facilities Manager",
    dates: "2025 — Present",
    tagline: "Manufacturing maintenance leadership, reliability planning, and capital project execution.",
    overview:
      "Lead maintenance operations, contractors, planners, supervisors, and reliability engineers while handling long-term maintenance programs and capital projects that support safe, efficient, and reliable manufacturing operations.",
    responsibilities: [
      "Lead maintenance, reliability, and facilities operations across a manufacturing environment.",
      "Manage contractors, planners, supervisors, and reliability engineering resources.",
      "Support safety, quality, and operational performance through structured maintenance systems.",
    ],
    projects: [
      {
        title: "Preventive Maintenance Program Optimization",
        description:
          "Strengthened preventive maintenance execution to improve equipment reliability, reduce recurring downtime drivers, and give leadership better visibility into maintenance priorities.",
      },
      {
        title: "Capital Project Support",
        description:
          "Oversaw and coordinated capital project activity tied to facility reliability, equipment improvement, and long-term manufacturing capability.",
      },
      {
        title: "Reliability & Continuous Improvement Initiatives",
        description:
          "Partnered with maintenance and operations teams to identify recurring issues, improve maintenance response, and support sustainable process improvements.",
      },
    ],
  },
  {
    id: "magna",
    name: "Magna International",
    logoText: "MI",
    role: "Manufacturing & Operations / Facilities Leadership",
    dates: "Prior Experience",
    tagline: "Automotive manufacturing support focused on reliability, safety, and production continuity.",
    overview:
      "Supported operations in a global automotive manufacturing environment, with work centered on production support, equipment reliability, safety, and cross-functional problem solving.",
    responsibilities: [
      "Supported manufacturing operations and equipment reliability in a high-volume automotive setting.",
      "Collaborated with operations and maintenance teams to troubleshoot production-impacting issues.",
      "Contributed to safety, quality, and continuous improvement workstreams.",
    ],
    projects: [
      {
        title: "Production Reliability Support",
        description:
          "Worked on maintenance and operational improvements that helped stabilize manufacturing processes and reduce interruptions to production flow.",
      },
      {
        title: "Automotive Process Improvement",
        description:
          "Supported continuous improvement activities in an automotive production environment where uptime, quality, and repeatability were critical.",
      },
      {
        title: "Cross-Functional Issue Resolution",
        description:
          "Helped resolve technical and process issues by coordinating with production, maintenance, and leadership teams.",
      },
    ],
  },
  {
    id: "adient",
    name: "Adient",
    logoText: "AD",
    role: "Robot Engineer / Adient–Futuris",
    dates: "2017 — 2018",
    tagline: "Robotic welding, tooling operation, and automotive supplier support for Tesla-related programs.",
    overview:
      "Programmed Tier 1 Tesla supplier welding systems, worked on upper application robot cells, designed intelligent tooling operation, and supported welding quality control and process repeatability.",
    responsibilities: [
      "Programmed and supported robotic welding systems for automotive seating components.",
      "Designed tooling operation improvements and supported welding quality control.",
      "Maintained technical documentation and control practices for automation systems.",
    ],
    projects: [
      {
        title: "Robotic Welding Cell Programming",
        description:
          "Programmed welding robots and supported upper application robot cells to improve weld consistency and production execution.",
      },
      {
        title: "Intelligent Tooling Operation Design",
        description:
          "Designed tooling operation concepts that improved automation reliability and supported better control of the welding process.",
      },
      {
        title: "Tesla Supplier Quality Support",
        description:
          "Supported welding quality control and technical documentation in a Tier 1 supplier environment connected to Tesla production requirements.",
      },
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    logoText: "T",
    role: "Lead Equipment Maintenance Technician",
    dates: "2018 — 2020",
    tagline: "Production equipment maintenance, robotic weld cell support, and downtime reduction.",
    overview:
      "Directed downtime work, managed PMV tooling, and supported production with maintenance leadership across welding robots, safety systems, and automation equipment.",
    responsibilities: [
      "Directed downtime work and supported urgent equipment recovery for production systems.",
      "Created and improved robotic weld cell fixtures, tooling, and safety practices.",
      "Supported preventive maintenance, repairs, troubleshooting, and root-cause analysis.",
    ],
    projects: [
      {
        title: "Robotic Weld Cell Fixture Improvements",
        description:
          "Created and improved fixtures for robotic weld cells to support production stability, repeatability, and safer maintenance access.",
      },
      {
        title: "Scrap Reduction & Quality Improvement",
        description:
          "Reduced scrap and improved product quality through hands-on troubleshooting, equipment adjustments, and process-focused maintenance improvements.",
      },
      {
        title: "Preventive Maintenance & Downtime Response",
        description:
          "Led and supported PM activity, repairs, and root-cause troubleshooting in a high-speed production environment.",
      },
    ],
  },
  {
    id: "amentum-nasa",
    name: "Amentum / NASA Ames Research Center",
    logoText: "NASA",
    role: "Maintenance & Operations Facilities Manager",
    dates: "2024 — 2025",
    tagline: "Federal facilities maintenance leadership across large-scale, mission-critical infrastructure.",
    overview:
      "Led multi-trade maintenance performance for NASA Ames Research Center, covering 375 facilities and more than 6 million square feet while supporting scheduled maintenance, emergency response, continuous improvement, and operational readiness.",
    responsibilities: [
      "Oversaw scheduled and unscheduled maintenance across a large federal research campus.",
      "Directed emergency response, performance planning, SOP development, and resource utilization.",
      "Implemented 5S, reliability planning, and continuous improvement practices.",
    ],
    projects: [
      {
        title: "Campus-Wide Maintenance Performance Program",
        description:
          "Supported maintenance execution across 375 facilities and more than 6 million square feet, aligning field teams with reliability and performance expectations.",
      },
      {
        title: "5S & Reliability Planning Improvements",
        description:
          "Implemented 5S principles and reliability planning practices to improve organization, workflow discipline, and maintenance readiness.",
      },
      {
        title: "Emergency Response & SOP Development",
        description:
          "Supported emergency response planning, standard operating procedures, and operational readiness for critical site infrastructure.",
      },
    ],
  },
  {
    id: "sees",
    name: "See's Candies",
    logoText: "SC",
    role: "Maintenance Manager",
    dates: "2023 — 2024",
    tagline: "Food manufacturing maintenance leadership, capex planning, PM programs, and production support.",
    overview:
      "Managed maintenance operations and personnel for a production facility while leading preventive maintenance, capital project planning, corrective actions, and production equipment improvements.",
    responsibilities: [
      "Managed maintenance teams supporting production center reliability and facility operations.",
      "Developed and presented business cases for large capital projects.",
      "Managed capex/opex reporting, corrective maintenance, PM programs, and training improvements.",
    ],
    projects: [
      {
        title: "Capital Project Business Cases",
        description:
          "Developed and presented business cases for large-scale capital projects, connecting equipment needs to operational value and production reliability.",
      },
      {
        title: "Preventive Maintenance Program Development",
        description:
          "Improved PM programs and maintenance planning to support equipment uptime and reduce reactive maintenance pressure.",
      },
      {
        title: "Training & Corrective Maintenance Improvements",
        description:
          "Strengthened corrective maintenance practices and training processes to support more consistent troubleshooting and team execution.",
      },
    ],
  },
];

function LogoBadge({ text }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold tracking-tight text-white shadow-sm ring-1 ring-slate-800">
      {text}
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl leading-7 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function CompanyTab({ company }) {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
      <div className="bg-slate-950 px-8 py-10 text-white">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <LogoBadge text={company.logoText} />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{company.dates}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight">{company.name}</h1>
              <p className="mt-2 text-lg text-slate-200">{company.role}</p>
            </div>
          </div>
          <div className="max-w-md rounded-2xl bg-white/10 p-5 text-sm leading-6 text-slate-100 ring-1 ring-white/10">
            {company.tagline}
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionTitle eyebrow="Role Overview" title="Scope & Focus" />
          <p className="rounded-3xl bg-slate-50 p-6 leading-8 text-slate-700 ring-1 ring-slate-200">{company.overview}</p>

          <div className="mt-8">
            <SectionTitle eyebrow="Responsibilities" title="Leadership Areas" />
            <div className="space-y-3">
              {company.responsibilities.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SectionTitle eyebrow="Project Work" title="Selected Projects & Contributions" subtitle="These project summaries are drafted from your resume and can be made more specific with dates, metrics, photos, or final outcomes." />
          <div className="grid gap-4">
            {company.projects.map((project, index) => (
              <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
                  <h3 className="text-lg font-bold text-slate-950">{project.title}</h3>
                </div>
                <p className="leading-7 text-slate-700">{project.description}</p>
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
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <button onClick={() => setActive("home")} className="text-left">
            <p className="text-xl font-black tracking-tight text-slate-950">{profile.name}</p>
            <p className="text-sm font-medium text-slate-600">Portfolio | Maintenance & Reliability Leadership</p>
          </button>

          <nav className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive("home")}
              className={active === "home" ? "rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"}
            >
              Home
            </button>
            {companies.map((company) => (
              <button
                key={company.id}
                onClick={() => setActive(company.id)}
                className={active === company.id ? "rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white" : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"}
              >
                {company.name.replace(" Ames Research Center", "")}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10">
        {active === "home" ? (
          <section className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-sm">
              <div className="grid gap-8 p-8 text-white lg:grid-cols-[1.25fr_.75fr] lg:p-12">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Executive Portfolio</p>
                  <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl">{profile.name}</h1>
                  <p className="mt-4 text-xl font-medium text-slate-200">{profile.title}</p>
                  <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">{profile.bio}</p>

                  <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">{profile.email}</div>
                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">{profile.phone}</div>
                    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">{profile.location}</div>
                  </div>
                </div>

                <div className="grid gap-3 self-end">
                  {profile.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-3xl bg-white p-5 text-slate-950 shadow-sm">
                      <p className="text-2xl font-black">{metric.value}</p>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <SectionTitle eyebrow="Capabilities" title="Core Strengths" />
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <SectionTitle eyebrow="Experience" title="Company Portfolio" subtitle="Select a company tab to view role scope, responsibilities, and project contributions." />
                <div className="grid gap-4 sm:grid-cols-2">
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => setActive(company.id)}
                      className="group rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-md"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <LogoBadge text={company.logoText} />
                        <div>
                          <p className="font-bold text-slate-950">{company.name}</p>
                          <p className="text-sm font-medium text-slate-500">{company.dates}</p>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{company.tagline}</p>
                      <p className="mt-4 text-sm font-bold text-slate-950 group-hover:underline">View tab →</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <CompanyTab company={activeCompany} />
        )}
      </main>
    </div>
  );
}
