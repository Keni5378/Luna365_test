import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { MainLayout } from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Luna 365 Bar and Kitchen | Where Night Meets Flavor",
  description: "Premium multicuisine destination in Bangalore. Nostalgic palates, bridging Sindh traditions since 1947 with modern luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <MainLayout>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
