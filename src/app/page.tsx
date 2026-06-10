import Script from "next/script";
import { ReichiExperience } from "@/components/reichi-experience";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Reichi Network Engineering & Integration",
  url: "https://reichi.com",
  founder: {
    "@type": "Person",
    name: "Christian Reichinger",
    alternateName: "Reichi",
    jobTitle: "Network Architect and Systems Integrator",
  },
  areaServed: "Global",
  serviceType: [
    "UniFi and Ubiquiti Engineering",
    "Enterprise Networking",
    "WiFi Engineering",
    "Network Security",
    "Infrastructure Automation",
    "Cloud Integration",
  ],
  description:
    "Enterprise-grade networking, UniFi integration, WiFi optimization, security, automation, and infrastructure consulting by Christian Reichinger.",
};

export default function Home() {
  return (
    <>
      <Script
        id="reichi-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ReichiExperience />
    </>
  );
}
