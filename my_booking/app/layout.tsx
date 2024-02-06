import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Barber - Agende seu horário na barbearia mais perto de voce",
  description: "Agende seu horário na barbearia mais perto de voce no FSW Barber - Facilitando o seu dia a dia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
