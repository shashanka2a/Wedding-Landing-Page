import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Aravind & Harika's Wedding Invitation",
  description: "Join us to celebrate the wedding of Aravind and Harika.",
  keywords: [
    "Aravind",
    "Harika",
    "Wedding",
    "Wedding Invitation",
    "Aravind & Harika",
    "Banswada",
    "Grr Convention Hall",
    "Telugu wedding",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Aravind & Harika's Wedding",
    description: "You're invited to Aravind & Harika's wedding celebration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aravind & Harika Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravind & Harika's Wedding",
    description: "You're invited to Aravind & Harika's wedding celebration.",
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
