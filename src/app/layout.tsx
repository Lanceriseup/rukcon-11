import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUKCON 11 — ALL IN | Dallas, TX",
  description:
    "Three days. Keynote speakers. Deep-dive sessions on Faith, Family, Fitness, and Finance. The weekend Christian leaders go all in — and bring their people with them.",
  openGraph: {
    title: "RUKCON 11 — ALL IN",
    description: "Three days. One decision. All In.",
    siteName: "Rise Up Kings",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
