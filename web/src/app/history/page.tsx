"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Repeat, Download } from "lucide-react";
import Link from "next/link";

export default function HistoryPage() {
    const transactions = [
        { id: 1, name: "Emma Wilson", type: "Received", amount: "+$500.00", date: "Dec 2, 2025", status: "completed", icon: ArrowDownLeft, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { id: 2, name: "Michael Chen", type: "Sent", amount: "-$125.50", date: "Dec 1, 2025", status: "completed", icon: ArrowUpRight, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30" },
        { id: 3, name: "EUR Swap", type: "Swap", amount: "$200.00", date: "Nov 30, 2025", status: "completed", icon: Repeat, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
        { id: 4, name: "Scholarship Fund", type: "Received", amount: "+$1,200.00", date: "Nov 28, 2025", status: "completed", icon: ArrowDownLeft, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
        { id: 5, name: "Campus Bookstore", type: "Sent", amount: "-$85.00", date: "Nov 25, 2025", status: "completed", icon: ArrowUpRight, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30" },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center mb-4">
                    <Link href="/" className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                    <h1 className="font-bold text-xl">Transaction History</h1>
                </div>
                <p className="text-purple-200 text-center text-sm">View all your transactions</p>
            </header>

            <div className="px-6 -mt-6 space-y-6">
                {/* Filters */}
                <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-4">
                        <div className="flex justify-between items-center gap-2 overflow-x-auto pb-2">
                            <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6">All</Button>
                            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full">Sent</Button>
                            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full">Received</Button>
                            <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full">Swaps</Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-border text-center">
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Sent</p>
                                <p className="font-bold text-foreground text-sm">$200.50</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Received</p>
                                <p className="font-bold text-foreground text-sm">$800.00</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Total Swaps</p>
                                <p className="font-bold text-foreground text-sm">1</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Button variant="outline" className="w-full border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-card shadow-sm">
                    <Download className="mr-2 h-4 w-4" /> Export Statement
                </Button>

                {/* List */}
                <div className="space-y-3">
                    {transactions.map((tx) => (
                        <Card key={tx.id} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`h-10 w-10 rounded-full ${tx.bg} flex items-center justify-center`}>
                                        <tx.icon className={`h-5 w-5 ${tx.color}`} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">{tx.name}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {tx.type === "Received" ? "Payment from" : tx.type === "Sent" ? "Payment to" : "Currency Swap"} {tx.name}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground mt-0.5">{tx.date} • <span className="text-green-600 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded text-[9px] uppercase font-bold">{tx.status}</span></p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`font-bold block ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                                        {tx.amount}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground">USD</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
