import type { Metadata } from "next";
import { Play, Roboto, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ministry of Trade, Industry & Investment | Nasarawa State",
  description:
    "The official website of the Nasarawa State Ministry of Trade, Industry and Investment. Discover opportunities, services, policies, and initiatives supporting trade, industry, and investment in Nasarawa State.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${play.variable} ${roboto.variable} ${poppins.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}