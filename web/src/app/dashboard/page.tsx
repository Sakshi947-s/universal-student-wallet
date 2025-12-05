"use client";
"use client";

import Navbar from "@/components/Navbar";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const MOCK_DATA = [
    { name: 'Mon', spend: 20 },
    { name: 'Tue', spend: 45 },
    { name: 'Wed', spend: 30 },
    { name: 'Thu', spend: 60 },
    { name: 'Fri', spend: 90 },
    { name: 'Sat', spend: 50 },
    { name: 'Sun', spend: 40 },
];

const RECENT_TXS = [
    { id: 1, type: "Sent", to: "Alex", amount: "-0.5 SOL", date: "2 mins ago" },
    { id: 2, type: "Received", from: "Scholarship", amount: "+2.0 SOL", date: "1 day ago" },
    { id: 3, type: "Swap", from: "USDC", amount: "100 USDC", date: "2 days ago" },
];

interface Scholarship {
    id: number;
    name: string;
    amount: string;
    status: string;
}

export default function Dashboard() {
    const { publicKey } = useWallet();
    const { connection } = useConnection();
    const [balance, setBalance] = useState<number>(0);
    const [scholarships, setScholarships] = useState<Scholarship[]>([]);

    useEffect(() => {
        if (!publicKey) return;

        const getBalance = async () => {
            const bal = await connection.getBalance(publicKey);
            setBalance(bal / LAMPORTS_PER_SOL);
        };

        const getScholarships = async () => {
            try {
                const res = await fetch("/api/scholarships");
                const data = await res.json();
                setScholarships(data);
            } catch (e) {
                console.error("Failed to fetch scholarships", e);
            }
        };

        getBalance();
        getScholarships();

        const id = connection.onAccountChange(publicKey, (accountInfo) => {
            setBalance(accountInfo.lamports / LAMPORTS_PER_SOL);
        });

        return () => {
            connection.removeAccountChangeListener(id);
        };
    }, [publicKey, connection]);

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-12">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold mb-8"
                >
                    Student Dashboard
                </motion.h2>

                {!publicKey ? (
                    <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
                        <p className="text-xl text-gray-400">Please connect your wallet to view your dashboard.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Top Row: Balance, NFT, Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Balance Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
                            >
                                <h3 className="text-gray-400 mb-2">Total Balance</h3>
                                <p className="text-4xl font-bold">{balance.toFixed(4)} SOL</p>
                                <div className="mt-4 flex space-x-2">
                                    <button className="flex-1 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Send</button>
                                    <button className="flex-1 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">Receive</button>
                                </div>
                            </motion.div>

                            {/* Student ID Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
                            >
                                <h3 className="text-gray-400 mb-2">Student ID (NFT)</h3>
                                <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                                    <span className="text-gray-500">No NFT Found</span>
                                </div>
                                <button className="w-full py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition">
                                    Mint Student ID
                                </button>
                            </motion.div>

                            {/* Quick Actions */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
                            >
                                <h3 className="text-gray-400 mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex justify-between px-4">
                                        <span>Swap Currencies</span>
                                        <span>→</span>
                                    </button>
                                    <button className="w-full py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition flex justify-between px-4">
                                        <span>Pay Tuition</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Row: Analytics & Transactions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Analytics Chart */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
                            >
                                <h3 className="text-gray-400 mb-4">Weekly Spending</h3>
                                <div className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={MOCK_DATA}>
                                            <XAxis dataKey="name" stroke="#6b7280" />
                                            <YAxis stroke="#6b7280" />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                                                itemStyle={{ color: '#fff' }}
                                            />
                                            <Line type="monotone" dataKey="spend" stroke="#3b82f6" strokeWidth={2} dot={false} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* Recent Transactions & Scholarships */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-6"
                            >
                                {/* Scholarships */}
                                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                                    <h3 className="text-gray-400 mb-4">Scholarships</h3>
                                    <div className="space-y-3">
                                        {scholarships.map((s) => (
                                            <div key={s.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                                                <div>
                                                    <p className="font-semibold">{s.name}</p>
                                                    <p className="text-sm text-gray-400">{s.amount}</p>
                                                </div>
                                                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">{s.status}</span>
                                            </div>
                                        ))}
                                        {scholarships.length === 0 && <p className="text-gray-500">Loading...</p>}
                                    </div>
                                </div>

                                {/* Transactions */}
                                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                                    <h3 className="text-gray-400 mb-4">Recent Transactions</h3>
                                    <div className="space-y-3">
                                        {RECENT_TXS.map((tx) => (
                                            <div key={tx.id} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                                                <div className="flex items-center space-x-3">
                                                    <div className={`w-2 h-2 rounded-full ${tx.type === 'Received' ? 'bg-green-500' : 'bg-red-500'}`} />
                                                    <div>
                                                        <p className="font-semibold">{tx.type} {tx.to ? `to ${tx.to}` : `from ${tx.from}`}</p>
                                                        <p className="text-xs text-gray-400">{tx.date}</p>
                                                    </div>
                                                </div>
                                                <span className={tx.type === 'Received' ? 'text-green-400' : 'text-white'}>
                                                    {tx.amount}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
