import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reichi.com"),
  title: {
    default: "Reichi Network Engineering & Integration",
    template: "%s | Reichi Network Engineering & Integration",
  },
  description:
    "Enterprise-grade networking, UniFi integration, WiFi optimization, security, automation, and infrastructure consulting by Christian Reichinger.",
  keywords: [
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
  authors: [{ name: "Christian Reichinger", url: "https://reichi.com" }],
  creator: "Christian Reichinger",
  publisher: "Reichi Network Engineering & Integration",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reichi.com",
    siteName: "Reichi Network Engineering & Integration",
    title: "Engineering Networks That Simply Work.",
    description:
      "Hands-on network architecture, UniFi integration, WiFi optimization, security, automation, and modern IT infrastructure by Christian Reichinger.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reichi Network Engineering & Integration",
    description:
      "Premium network architecture, UniFi engineering, infrastructure integration, and automation by Christian Reichinger.",
  },
  alternates: {
    canonical: "https://reichi.com",
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
