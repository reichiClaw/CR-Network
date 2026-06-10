"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ArrowUpRight,
  Building2,
  Cable,
  CheckCircle2,
  CloudCog,
  Cpu,
  ExternalLink,
  Fingerprint,
  Globe2,
  LockKeyhole,
  Mail,
  Network,
  RadioTower,
  Router,
  SatelliteDish,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Wifi,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import * as THREE from "three";

type Service = {
  title: string;
  icon: LucideIcon;
  intro: string;
  items: string[];
};

type Project = {
  title: string;
  eyebrow: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
};

const services: Service[] = [
  {
    title: "UniFi & Ubiquiti Engineering",
    icon: RadioTower,
    intro: "Designed, deployed, and tuned as a coherent infrastructure platform.",
    items: [
      "UniFi Networks",
      "UniFi Protect",
      "UniFi Access",
      "UniFi Talk",
      "Site Design",
      "Deployments",
    ],
  },
  {
    title: "Enterprise Networking",
    icon: Network,
    intro: "Routing, switching, WiFi, and remote access engineered for resilience.",
    items: [
      "Routing",
      "Switching",
      "WiFi Design",
      "VPN Architecture",
      "SD-WAN",
      "High Availability",
    ],
  },
  {
    title: "Security & Monitoring",
    icon: ShieldCheck,
    intro: "Visibility, hardening, surveillance, and alerting for real operational control.",
    items: [
      "Network Security",
      "Surveillance",
      "Remote Monitoring",
      "Alerting",
      "Infrastructure Hardening",
    ],
  },
  {
    title: "Integration & Automation",
    icon: Workflow,
    intro: "APIs, automations, cloud services, and smart building systems connected cleanly.",
    items: [
      "API Integrations",
      "Infrastructure Automation",
      "Home Assistant",
      "Cloud Services",
      "Monitoring Platforms",
    ],
  },
  {
    title: "Consulting & Architecture",
    icon: ServerCog,
    intro: "Independent technical judgement for audits, migrations, and long-term planning.",
    items: [
      "Infrastructure Reviews",
      "Network Audits",
      "Growth Planning",
      "Migration Strategies",
    ],
  },
];

const projects: Project[] = [
  {
    title: "Multi-site UniFi Deployments",
    eyebrow: "Retail, offices, hospitality",
    challenge: "Fragmented sites needed centralized visibility without adding operational friction.",
    solution:
      "Standardized UniFi gateways, switching, access points, Protect cameras, VLANs, and monitoring playbooks across locations.",
    impact: "Predictable rollouts, faster troubleshooting, cleaner handover, and infrastructure that scales site by site.",
    technologies: ["UniFi Network", "UniFi Protect", "VLANs", "Cloudflare", "Remote Monitoring"],
  },
  {
    title: "Enterprise WiFi Design",
    eyebrow: "High-density wireless",
    challenge: "Coverage existed on paper, but roaming, capacity, and interference hurt daily work.",
    solution:
      "Mapped RF conditions, tuned channels and power, segmented SSIDs, and validated client behavior after deployment.",
    impact: "Stable roaming, higher throughput, fewer support tickets, and a network users stop thinking about.",
    technologies: ["WiFi 6/7", "RF Planning", "UniFi APs", "Spectrum Analysis"],
  },
  {
    title: "Secure Remote Work Architectures",
    eyebrow: "Modern access",
    challenge: "Teams required secure access to internal services from multiple locations and devices.",
    solution:
      "Built layered VPN, identity-aware DNS, firewall policy, and monitoring around real business workflows.",
    impact: "Remote access became secure, auditable, and easy enough for people to actually use.",
    technologies: ["WireGuard", "Cloudflare", "OPNsense", "MFA", "Zero Trust"],
  },
  {
    title: "Smart Building Integrations",
    eyebrow: "Connected operations",
    challenge: "Lighting, sensors, security, and facility systems were useful individually but isolated.",
    solution:
      "Integrated building systems with network segmentation, Home Assistant, automations, and dashboards.",
    impact: "Facilities gained real-time control while keeping critical network boundaries intact.",
    technologies: ["Home Assistant", "MQTT", "UniFi Access", "API Automation"],
  },
  {
    title: "Surveillance Infrastructure",
    eyebrow: "Physical security",
    challenge: "Camera coverage, retention, and remote review needed enterprise-grade reliability.",
    solution:
      "Designed camera placement, PoE switching, retention policies, secure remote access, and alert workflows.",
    impact: "Security teams received clearer footage, better uptime, and simplified day-to-day operations.",
    technologies: ["UniFi Protect", "PoE", "NVR", "VLANs", "Alerting"],
  },
  {
    title: "Datacenter Connectivity",
    eyebrow: "Core infrastructure",
    challenge: "Critical services needed resilient connectivity between cloud, datacenter, and office environments.",
    solution:
      "Architected redundant routing, firewalling, tunnels, monitoring, and documented failover procedures.",
    impact: "Teams gained confidence in recovery paths and a clearer operating model for critical infrastructure.",
    technologies: ["BGP", "VPN", "Linux", "VMware", "Proxmox"],
  },
];

const expertise = [
  "UniFi",
  "Ubiquiti",
  "MikroTik",
  "VMware",
  "Proxmox",
  "Docker",
  "Kubernetes",
  "Home Assistant",
  "Cloudflare",
  "WireGuard",
  "OPNsense",
  "Linux",
  "Automation Platforms",
];

const navItems = ["About", "Services", "Projects", "Expertise", "Contact"];

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Networks Managed" },
  { value: 45, suffix: "+", label: "Sites Integrated" },
  { value: 2800, suffix: "+", label: "Devices Deployed" },
];

const locations = [
  { name: "Vienna", x: 53, y: 39 },
  { name: "Frankfurt", x: 48, y: 35 },
  { name: "London", x: 42, y: 33 },
  { name: "New York", x: 23, y: 38 },
  { name: "Singapore", x: 74, y: 60 },
  { name: "San Francisco", x: 12, y: 43 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function CRVertexExperience() {
  useGsapReveals();

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <PremiumLoader />
      <NetworkCanvas />
      <MouseLight />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <ExpertiseSection />
      <TrustSection />
      <ContactSection />
    </main>
  );
}

function useGsapReveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:px-6"
      >
        <a href="#hero" className="group flex items-center gap-3" aria-label="CR Vertex home">
          <span className="grid size-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-lg shadow-cyan-400/20">
            <Router className="size-5 text-cyan-200" aria-hidden="true" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.2em] text-white">CR VERTEX</span>
            <span className="block text-xs text-slate-400">Network & Systems Integration</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5"
        >
          Consult
        </a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center px-4 pb-20 pt-32 sm:px-6 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_78%_10%,rgba(59,130,246,0.16),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.1),#020617_88%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          >
            <Sparkles className="size-4" aria-hidden="true" />
            CR Vertex — Network & Systems Integration
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
          >
            Engineering Networks That Simply Work.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Network & Systems Integration for enterprise-grade networking,
            UniFi integration, WiFi optimization, security, automation, and
            infrastructure consulting by Christian Reichinger.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-2xl shadow-cyan-400/20 transition hover:-translate-y-1 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Schedule a Consultation
              <ArrowUpRight className="size-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-cyan-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore Projects
            </a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-4"
          >
            {["UniFi", "WiFi", "Security", "Automation"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
                <CheckCircle2 className="mb-2 size-4 text-cyan-300" aria-hidden="true" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[0.92] w-full max-w-[620px]">
      <div className="absolute inset-5 rounded-[3rem] bg-cyan-400/20 blur-3xl" />
      <div className="glass-panel absolute inset-0 overflow-hidden rounded-[2.5rem] p-5 shadow-2xl shadow-cyan-950/40">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">Live topology</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Global infrastructure mesh</h2>
          </div>
          <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
            Healthy
          </div>
        </div>
        <TopologyOrb />
        <div className="grid grid-cols-3 gap-3">
          {[
            ["43 ms", "Avg latency"],
            ["99.99%", "Uptime target"],
            ["24/7", "Monitoring"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-xl">
              <p className="text-lg font-semibold text-white">{value}</p>
              <p className="mt-1 text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <FloatingDevice className="-left-4 top-20" icon={Wifi} label="WiFi 7 AP" />
      <FloatingDevice className="-right-5 top-48" icon={ShieldCheck} label="Firewall" />
      <FloatingDevice className="bottom-16 left-4" icon={CloudCog} label="Cloud DNS" />
    </div>
  );
}

function FloatingDevice({
  className,
  icon: Icon,
  label,
}: {
  className: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute hidden rounded-2xl border border-white/12 bg-slate-950/70 p-3 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl sm:flex ${className}`}
    >
      <div className="mr-3 grid size-10 place-items-center rounded-xl bg-cyan-300/10">
        <Icon className="size-5 text-cyan-200" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-medium text-white">{label}</p>
        <p className="text-xs text-slate-400">Encrypted link</p>
      </div>
    </motion.div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="gsap-reveal">
          <SectionEyebrow>About CR Vertex</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            You work directly with the expert, not a sales team.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FounderPortrait />
          <div className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-2xl sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              CR Vertex is the founder-led practice of Christian “Reichi”
              Reichinger, bringing hands-on engineering judgement to networks
              that have to be secure, observable, and boringly reliable. From
              first sketch to rack, firewall rule, access point, camera,
              automation, and documentation, the work is owned end to end by
              the person designing it.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Network Engineer", Cpu],
                ["Infrastructure Architect", Building2],
                ["Ubiquiti / UniFi Specialist", RadioTower],
                ["Systems Integrator", Cable],
                ["Technology Consultant", Fingerprint],
              ].map(([label, Icon]) => {
                const TypedIcon = Icon as LucideIcon;
                return (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <TypedIcon className="size-5 text-cyan-300" aria-hidden="true" />
                    <span className="text-sm font-medium text-slate-100">{label as string}</span>
                  </div>
                );
              })}
            </div>
            <blockquote className="mt-8 border-l border-cyan-300/50 pl-5 text-xl font-medium leading-8 text-white">
              Practical real-world experience, deep technical expertise, and
              long-term relationships over one-off installations.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderPortrait() {
  return (
    <div className="gsap-reveal relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(15,23,42,0.9),rgba(8,47,73,0.62))] p-6 shadow-2xl shadow-cyan-950/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(125,211,252,0.35),transparent_35%)]" />
      <div className="absolute inset-x-10 bottom-0 h-52 rounded-t-full bg-gradient-to-t from-cyan-300/18 to-transparent blur-2xl" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-cyan-100">Christian Reichinger</span>
          <span className="size-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.9)]" />
        </div>
        <div className="mx-auto grid size-56 place-items-center rounded-full border border-cyan-200/20 bg-slate-950/40 shadow-inner shadow-cyan-300/10 backdrop-blur-xl">
          <div className="grid size-44 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),rgba(14,165,233,0.12)_42%,rgba(2,6,23,0.95)_72%)]">
            <span className="text-6xl font-semibold tracking-[-0.08em] text-cyan-100">CR</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Portrait placement</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Designed for a professional founder portrait with premium lighting,
            keeping the personal brand central to the page.
          </p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="gsap-reveal max-w-3xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Premium engineering across the full infrastructure stack.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Architecture, implementation, optimization, and operations support
            for networks that need to be trusted every day.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: index * 0.05, duration: 0.65 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-cyan-300/20 blur-3xl" />
              </div>
              <div className="relative">
                <div className="mb-6 grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                  <service.icon className="size-7 text-cyan-200" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{service.title}</h3>
                <p className="mt-3 min-h-16 leading-7 text-slate-300">{service.intro}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="absolute inset-x-0 top-20 -z-10 h-96 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="gsap-reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionEyebrow>Project Showcase</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Infrastructure work made visible.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Each engagement is shaped around the real environment: people,
            buildings, applications, constraints, risk, and growth.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/45 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl"
            >
              <div className="relative h-56 overflow-hidden border-b border-white/10 bg-slate-950">
                <ProjectGraphic index={index} />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">
                  {project.eyebrow}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                <div className="mt-6 grid gap-5">
                  <CaseStudyRow title="Challenge" text={project.challenge} />
                  <CaseStudyRow title="Solution" text={project.solution} />
                  <CaseStudyRow title="Business Impact" text={project.impact} />
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="grid gap-2 sm:grid-cols-[120px_1fr]">
      <dt className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{title}</dt>
      <dd className="leading-7 text-slate-300">{text}</dd>
    </div>
  );
}

function ProjectGraphic({ index }: { index: number }) {
  const nodes = useMemo(
    () => [
      [18, 66],
      [34, 34],
      [50, 62],
      [66, 30],
      [82, 58],
    ],
    [],
  );
  const graphicIcons = [Router, Wifi, LockKeyhole, CloudCog, Activity];

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,1))]">
      <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={`line-${index}`} x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {nodes.slice(0, -1).map((node, nodeIndex) => (
          <line
            key={`${node[0]}-${node[1]}`}
            x1={node[0]}
            y1={node[1]}
            x2={nodes[nodeIndex + 1][0]}
            y2={nodes[nodeIndex + 1][1]}
            stroke={`url(#line-${index})`}
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {nodes.map(([x, y], nodeIndex) => {
        const GraphicIcon = graphicIcons[(index + nodeIndex) % graphicIcons.length];

        return (
          <div
            key={`${x}-${y}`}
            className="absolute grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl transition duration-500 group-hover:scale-110"
            style={{ left: `${x}%`, top: `${y}%`, transitionDelay: `${nodeIndex * 45}ms` }}
          >
            <GraphicIcon className="size-6 text-cyan-100" aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
}

function ExpertiseSection() {
  return (
    <section id="expertise" className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div className="gsap-reveal">
          <SectionEyebrow>Technical Expertise</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Deep stack fluency, from packet path to cloud edge.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Practical integration experience across networking, virtualization,
            containers, security, smart buildings, automation, and modern cloud
            platforms.
          </p>
          <InteractiveMap />
        </div>
        <div className="gsap-reveal grid grid-cols-2 gap-3 sm:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl"
            >
              <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-cyan-300/16 to-transparent transition duration-500 group-hover:translate-y-0" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
                </div>
                <p className="text-lg font-semibold tracking-tight text-white">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveMap() {
  return (
    <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-200">Interactive topology map</p>
        <Globe2 className="size-5 text-cyan-200" aria-hidden="true" />
      </div>
      <div className="relative aspect-[1.8] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(14,165,233,0.18),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.8),rgba(2,6,23,0.95))]">
        <svg className="absolute inset-0 size-full opacity-70" viewBox="0 0 100 70" aria-hidden="true">
          <path d="M8 44 C22 24, 38 20, 54 34 S78 58, 92 36" fill="none" stroke="#38bdf8" strokeOpacity="0.22" strokeWidth="0.45" />
          <path d="M12 50 C36 58, 58 12, 88 52" fill="none" stroke="#67e8f9" strokeOpacity="0.18" strokeWidth="0.35" />
          <path d="M22 38 L48 35 L53 39 L74 60 L12 43" fill="none" stroke="#e0f2fe" strokeOpacity="0.1" strokeWidth="0.3" />
        </svg>
        {locations.map((location) => (
          <button
            key={location.name}
            type="button"
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            aria-label={`${location.name} infrastructure node`}
          >
            <span className="absolute inset-0 rounded-full bg-cyan-300/30 blur-md transition group-hover:scale-150" />
            <span className="relative block size-4 rounded-full border border-white bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.95)]" />
            <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-950/90 px-3 py-1 text-xs text-cyan-100 opacity-0 backdrop-blur-xl transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {location.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustSection() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl sm:p-10">
        <div className="gsap-reveal grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionEyebrow>Trust</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Built for long-term confidence.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The metrics that matter are operational: stable networks,
              documented decisions, fewer emergencies, and infrastructure that
              grows with the organization.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 1.9,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl">
      <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {display.toLocaleString()}
        <span className="text-cyan-300">{suffix}</span>
      </p>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{label}</p>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-4 pb-10 pt-24 sm:px-6 lg:pb-16 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="gsap-reveal">
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Let’s Build Reliable Infrastructure Together.
          </h2>
          <p className="mt-6 text-xl leading-8 text-slate-300">
            “Every project starts with a conversation. Tell me what you’re
            building.”
          </p>
          <div className="mt-10 grid gap-3">
            <ContactLink icon={Mail} label="Email" value="hello@crvertex.com" href="mailto:hello@crvertex.com" />
            <ContactLink icon={ExternalLink} label="LinkedIn" value="Christian Reichinger" href="https://www.linkedin.com/" />
            <ContactLink icon={Globe2} label="Website" value="crvertex.com" href="https://crvertex.com" />
          </div>
        </div>
        <form className="gsap-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-slate-950/60 backdrop-blur-2xl sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Name" name="name" placeholder="Your name" />
            <FormField label="Email" name="email" placeholder="you@company.com" type="email" />
          </div>
          <div className="mt-5">
            <FormField label="Company" name="company" placeholder="Company or project" />
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
              What are you building?
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about your network, sites, constraints, goals, or current pain points."
              className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-300/10"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-semibold text-slate-950 shadow-2xl shadow-cyan-400/25 transition hover:-translate-y-1 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Schedule a Consultation
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </button>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Prefer email? Send the essentials directly to{" "}
            <a className="text-cyan-200 underline-offset-4 hover:underline" href="mailto:hello@crvertex.com">
              hello@crvertex.com
            </a>
            .
          </p>
        </form>
      </div>
      <footer className="mx-auto mt-20 flex max-w-7xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} CR Vertex.</p>
        <p>Network & Systems Integration by Christian Reichinger.</p>
      </footer>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-200/40 hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-cyan-300/10">
        <Icon className="size-5 text-cyan-200" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">{label}</span>
        <span className="mt-1 block font-medium text-slate-100">{value}</span>
      </span>
    </a>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/60 focus:ring-4 focus:ring-cyan-300/10"
      />
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-100">
      <SatelliteDish className="size-4" aria-hidden="true" />
      {children}
    </p>
  );
}

function PremiumLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: 0.72 }}
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950"
      aria-label="Loading CR Vertex Network & Systems Integration"
    >
      <div className="relative grid size-28 place-items-center">
        <div className="absolute inset-0 rounded-full border border-cyan-300/20" />
        <div className="absolute inset-2 animate-spin rounded-full border border-transparent border-t-cyan-200" />
        <div className="absolute inset-5 rounded-full bg-cyan-300/10 blur-xl" />
        <span className="relative text-2xl font-semibold tracking-[-0.08em] text-cyan-100">CR</span>
      </div>
    </motion.div>
  );
}

function MouseLight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      if (!ref.current) return;
      ref.current.style.setProperty("--x", `${event.clientX}px`);
      ref.current.style.setProperty("--y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-10 mouse-light" aria-hidden="true" />;
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const particles = Array.from({ length: prefersReducedMotion ? 28 : 74 }, (_, index) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: index % 9 === 0 ? 2.2 : 1.25,
    }));

    let animationFrame = 0;
    const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr();
      canvas.height = window.innerHeight * dpr();
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr(), 0, 0, dpr(), 0, 0);
    };

    const handlePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = "rgba(2, 6, 23, 0.18)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle, index) => {
        if (!prefersReducedMotion) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.max(Math.hypot(dx, dy), 1);
          if (distance < 220) {
            particle.vx -= dx / distance / 1800;
            particle.vy -= dy / distance / 1800;
          }

          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vx *= 0.995;
          particle.vy *= 0.995;
        }

        if (particle.x < -20) particle.x = window.innerWidth + 20;
        if (particle.x > window.innerWidth + 20) particle.x = -20;
        if (particle.y < -20) particle.y = window.innerHeight + 20;
        if (particle.y > window.innerHeight + 20) particle.y = -20;

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const next = particles[nextIndex];
          const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
          if (distance < 145) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.16 * (1 - distance / 145)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = index % 9 === 0 ? "rgba(125, 211, 252, 0.95)" : "rgba(148, 163, 184, 0.55)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointer);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true" />;
}

function TopologyOrb() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodes = Array.from({ length: 52 }, () => {
      const vector = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5,
      )
        .normalize()
        .multiplyScalar(1.2 + Math.random() * 1.4);
      return vector;
    });

    const pointGeometry = new THREE.BufferGeometry().setFromPoints(nodes);
    const pointMaterial = new THREE.PointsMaterial({
      color: "#7dd3fc",
      size: 0.045,
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    group.add(points);

    const linePositions: number[] = [];
    nodes.forEach((node, index) => {
      nodes.slice(index + 1).forEach((next) => {
        if (node.distanceTo(next) < 1.25) {
          linePositions.push(node.x, node.y, node.z, next.x, next.y, next.z);
        }
      });
    });

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#38bdf8",
      transparent: true,
      opacity: 0.2,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    let frame = 0;
    const animateScene = () => {
      group.rotation.y += 0.0028;
      group.rotation.x = Math.sin(Date.now() * 0.00035) * 0.18;
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(animateScene);
    };

    resize();
    animateScene();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="relative my-6 h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55">
      <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_24%,rgba(2,6,23,0.5)_72%)]" />
      <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 text-xs text-slate-300">
        {[
          ["Edge", "Protected"],
          ["Core", "Redundant"],
          ["Access", "Optimized"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur-xl">
            <p className="text-cyan-200">{label}</p>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
