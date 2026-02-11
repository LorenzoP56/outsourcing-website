import type { Metadata } from "next";

const isProduction = false;

export const metadata: Metadata = {
  title: "Outsourcing",
  description: "Outsourcing Website",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    shortcut: "/favicon.ico",
  },
  ...(!isProduction && {
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
