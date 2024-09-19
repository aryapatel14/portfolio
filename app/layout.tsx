import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aryapatel.me/"),
  alternates: {
    canonical: "https://www.aryapatel.me/",
  },
  title: "Arya Patel",
  description:
    "Arya Patel Site.",
  keywords:
    "Arya Patel, Site, Website, Portfolio, Arya ",
  openGraph: {
    locale: "en_US",
    siteName: "Arya Patel",
    type: "website",
    title: "Arya Patel",
    description:
      "Arya Patel.",
    url: "https://www.aryapatel.me/",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Patel",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
