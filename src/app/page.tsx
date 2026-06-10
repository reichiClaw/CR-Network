import Script from "next/script";
import { CRVertexExperience } from "@/components/reichi-experience";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CR Vertex",
  url: "https://reichi.com",
  slogan: "Network & Systems Integration",
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
    "Network & Systems Integration for enterprise-grade networking, UniFi integration, WiFi optimization, security, automation, and infrastructure consulting by Christian Reichinger.",
};

export default function Home() {
  return (
    <>
      <Script
        id="cr-vertex-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CRVertexExperience />
    </>
  );
}
