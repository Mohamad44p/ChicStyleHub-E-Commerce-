import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChicStyleHub - Your Destination for Fashion and Elegance",
  description: "Discover the latest trends in fashion at ChicStyleHub. Explore a curated collection of chic and stylish clothing. Elevate your wardrobe with elegance and sophistication.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />
        <ShoppingCartModal/>
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
