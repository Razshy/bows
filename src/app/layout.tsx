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
  title: "Bubbles & Bows | Pet Grooming & Care in Delano, MN",
  description: "Premium pet grooming, boarding, and daycare services in Delano, Minnesota. Family-owned with 22+ years of experience. Your pup's happy place!",
  keywords: ["pet grooming", "dog boarding", "pet daycare", "Delano MN", "pet care", "dog grooming"],
  authors: [{ name: "Bubbles & Bows" }],
  openGraph: {
    title: "Bubbles & Bows | Pet Grooming & Care in Delano, MN",
    description: "Premium pet grooming, boarding, and daycare services in Delano, Minnesota. Family-owned with 22+ years of experience.",
    url: "https://bubblesandbows.com",
    siteName: "Bubbles & Bows",
    images: [
      {
        url: "/og-image.png", // Put your image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Bubbles & Bows - Pet Grooming & Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubbles & Bows | Pet Grooming & Care in Delano, MN",
    description: "Premium pet grooming, boarding, and daycare services in Delano, Minnesota. Family-owned with 22+ years of experience.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
