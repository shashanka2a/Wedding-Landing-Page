import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Wedding of Sai Harika & Aravind",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Wedding Invitation",
    description: "Join us in celebration",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation",
    description: "Join us in celebration",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
