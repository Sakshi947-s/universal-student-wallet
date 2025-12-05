"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
    { ssr: false }
);
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white border-b border-gray-800">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Universal Student Wallet
                </Link>
            </div>
            <div className="flex items-center space-x-6">
                <Link href="/dashboard" className="hover:text-blue-400 transition">
                    Dashboard
                </Link>
                <Link href="/transfer" className="hover:text-blue-400 transition">
                    Transfer
                </Link>
                <Link href="/swap" className="hover:text-blue-400 transition">
                    Swap
                </Link>
                <WalletMultiButton className="!bg-blue-600 hover:!bg-blue-700 transition !rounded-lg" />
            </div>
        </nav>
    );
}
