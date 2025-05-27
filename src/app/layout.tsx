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
  title: "Optivous | Sales, Marketing & CRM Systems for Digital Agencies",
  description:
    "We help digital agencies book more meetings, sell more offers, and minimize bloat with automated sales, marketing, and CRM systems. Streamline your agency's growth with proven, done-for-you solutions.",
  keywords:
    "digital agency, sales systems, marketing automation, CRM automation, agency systems, book more meetings, agency growth, project management automation, lead generation, client management",
  openGraph: {
    title: "Optivous | Sales, Marketing & CRM Systems for Digital Agencies",
    description:
      "Automated sales, marketing, and CRM systems for digital agencies. Book more meetings, sell more offers, and streamline your agency's growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
