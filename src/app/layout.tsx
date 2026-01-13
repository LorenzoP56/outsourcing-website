import type { Metadata } from "next";
import { Asap, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ConditionalSections from "@/components/layout/ConditionalSections";
import { GoogleTagManager } from '@next/third-parties/google';

const asap = Asap({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-asap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Outsourcing",
  description: "Outsourcing Website",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <GoogleTagManager gtmId="GTM-MSZNQ336" />
      <body className={`${asap.variable} ${jost.variable} ${asap.className} antialiased`}>
        <Header />
        <main className="pt-28">
          {children}
        </main>
        <ConditionalSections />
        <Footer />
        
      </body>

    </html>
  );
}
