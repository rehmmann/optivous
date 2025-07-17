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
  title: "Optivous | Growth Partner for B2B Leaders",
  description:
    "We help B2B leaders accelerate growth with proven systems, strategy, and relentless support. Partner with us to scale your business, automate sales, and win in your market.",
  keywords:
    "B2B growth, growth partner, sales automation, marketing automation, CRM, B2B strategy, business scaling, lead generation, client management",
  openGraph: {
    title: "Optivous | Growth Partner for B2B Leaders",
    description:
      "Partner with Optivous to accelerate B2B growth. We deliver systems, strategy, and support to help you scale, automate, and win.",
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
