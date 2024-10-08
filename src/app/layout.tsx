import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Kamble | Full Stack Developer",
  description: "Yash Kamble's Developer profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
