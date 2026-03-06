import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import FooterWrapper from "./components/FooterWrapper";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BrightOS - AI Agents for Hotels",
  description: "AI agents that run your hotel. Policy-driven, PMS-connected, built by hoteliers. Guest Agent handles communication. Ops Agent tracks operations. Running at 5 properties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
