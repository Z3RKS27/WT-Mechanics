import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"


const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

/*const urbanist = Urbanist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "WT Mechanics",
  description: "Bienvenido WT Mechanics Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${urbanist.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Navbar/>
        {children}
        <Toaster />
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
