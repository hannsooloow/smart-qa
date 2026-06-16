import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartqa.pro"),
  title: {
    default: "SmartQA | Release Confidence and Quality Engineering",
    template: "%s | SmartQA",
  },
  description:
    "SmartQA helps software teams improve release confidence through quality engineering, release readiness, risk analysis, and platform-enabled QA delivery.",
  openGraph: {
    title: "SmartQA | Release Confidence and Quality Engineering",
    description:
      "SmartQA brings expert QA execution, release readiness, and clearer quality signal to teams shipping under real delivery pressure.",
    url: "https://smartqa.pro",
    siteName: "SmartQA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
