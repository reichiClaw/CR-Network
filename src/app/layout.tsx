import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crvertex.com"),
  title: {
    default: "CR Vertex | Network & Systems Integration",
    template: "%s | CR Vertex",
  },
  description:
    "Network & Systems Integration for enterprise-grade networking, UniFi integration, WiFi optimization, security, automation, and infrastructure consulting by Christian Reichinger.",
  keywords: [
    "CR Vertex",
    "Network & Systems Integration",
    "Reichi",
    "Christian Reichinger",
    "UniFi specialist",
    "Ubiquiti engineering",
    "network architect",
    "WiFi engineering",
    "systems integrator",
    "infrastructure consulting",
    "enterprise networking",
  ],
  authors: [{ name: "Christian Reichinger", url: "https://crvertex.com" }],
  creator: "Christian Reichinger",
  publisher: "CR Vertex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crvertex.com",
    siteName: "CR Vertex",
    title: "Engineering Networks That Simply Work.",
    description:
      "Network & Systems Integration for hands-on network architecture, UniFi integration, WiFi optimization, security, automation, and modern IT infrastructure by Christian Reichinger.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CR Vertex | Network & Systems Integration",
    description:
      "Premium network architecture, UniFi engineering, systems integration, and automation by Christian Reichinger.",
  },
  alternates: {
    canonical: "https://crvertex.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
