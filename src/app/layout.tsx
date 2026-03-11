import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optivous | Introduction Infrastructure",
  description:
    "Banks route capital. We route relationships. Optivous delivers pre-qualified introductions to recruitment firms, wealth managers, and biotech companies. 100+ routed.",
  keywords:
    "B2B introductions, B2B connections, qualified introductions, B2B infrastructure, ideal client profile, recruitment firm growth, RIA client acquisition, biotech partnerships",
  metadataBase: new URL("https://optivous.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Optivous | Introduction Infrastructure",
    description:
      "Banks route capital. We route relationships. Optivous delivers pre-qualified introductions to recruitment firms, wealth managers, and biotech companies.",
    type: "website",
    url: "https://optivous.com",
    siteName: "Optivous",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Optivous — Introduction Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optivous | Introduction Infrastructure",
    description:
      "Banks route capital. We route relationships. Qualified introductions for recruitment firms, wealth managers, and biotech companies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
