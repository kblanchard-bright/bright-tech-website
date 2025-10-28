import type { Metadata } from "next";
import { Roboto, Lato, KoHo } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const koho = KoHo({
  variable: "--font-koho",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bright Technology - The Apple of Hospitality",
  description: "Powering modern hospitality with Bright Booking, BrightOS, and innovative hotel technology solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${lato.variable} ${koho.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
