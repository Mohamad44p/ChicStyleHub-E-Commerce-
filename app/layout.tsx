import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Chat from "./components/Chat";
import Layout from "./components/ChatProviders";
import { Suspense } from "react";
import { ProgressDemo } from "./components/ProgressDemo";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "ChicStyleHub - Your Destination for Fashion and Elegance",
  description:
    "Discover the latest trends in fashion at ChicStyleHub. Explore a curated collection of chic and stylish clothing. Elevate your wardrobe with elegance and sophistication.",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Layout>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ClerkProvider>
              <Suspense
                fallback={
                  <div>
                    <ProgressDemo />
                  </div>
                }
              >
                <CartProvider>
                  <Navbar />
                  <ShoppingCartModal />
                  {children}
                  <SpeedInsights/>
                  <Chat />
                </CartProvider>
                <Toaster />
              </Suspense>
            </ClerkProvider>
          </ThemeProvider>
        </body>
      </Layout>
    </html>
  );
}
