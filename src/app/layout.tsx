import type { Metadata } from "next";
import { DM_Sans, Inter, Syne } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yousef Shehab — UI/UX Designer",
  icons: { icon: "/figma/bd1c8.png" },
  description:
    "UI/UX Designer based in Cairo, crafting thoughtful mobile apps, websites, and design systems. Explore selected work, services, and project plans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
