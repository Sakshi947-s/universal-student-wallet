import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppWalletProvider } from "@/providers/WalletProvider";
import { BottomNav } from "@/components/ui/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Universal Student Wallet",
  description: "Borderless DeFi for Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider>
          <div className="max-w-md mx-auto min-h-screen bg-slate-50 relative shadow-2xl overflow-hidden">
            {children}
            <BottomNav />
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}

