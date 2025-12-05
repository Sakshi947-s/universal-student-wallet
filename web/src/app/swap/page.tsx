"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowDownUp, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SwapPage() {
    const [fromAmount, setFromAmount] = useState("");
    const [toAmount] = useState("");

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center mb-4">
                    <Link href="/" className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                    <h1 className="font-bold text-xl">Currency Swap</h1>
                </div>
                <p className="text-purple-200 text-center text-sm">Exchange between currencies instantly</p>
            </header>

            <div className="px-6 -mt-6">
                <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-6 space-y-6">

                        {/* From Currency */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">From</label>
                            <div className="p-4 bg-secondary rounded-xl border border-input space-y-3">
                                <div className="flex justify-between items-center">
                                    <select className="bg-transparent font-bold text-foreground focus:outline-none">
                                        <option>USD - US Dollar ($)</option>
                                        <option>EUR - Euro (€)</option>
                                        <option>GBP - British Pound (£)</option>
                                    </select>
                                </div>
                                <Input
                                    type="number"
                                    placeholder="0.00"
                                    value={fromAmount}
                                    onChange={(e) => setFromAmount(e.target.value)}
                                    className="border-0 bg-transparent text-2xl font-bold p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground"
                                />
                                <p className="text-xs text-muted-foreground">Available: $2,450.75</p>
                            </div>
                        </div>

                        {/* Swap Icon */}
                        <div className="flex justify-center -my-3 relative z-10">
                            <div className="h-10 w-10 rounded-full bg-purple-600 border-4 border-card flex items-center justify-center shadow-lg">
                                <ArrowDownUp className="h-5 w-5 text-white" />
                            </div>
                        </div>

                        {/* To Currency */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">To</label>
                            <div className="p-4 bg-secondary rounded-xl border border-input space-y-3">
                                <div className="flex justify-between items-center">
                                    <select className="bg-transparent font-bold text-foreground focus:outline-none">
                                        <option>EUR - Euro (€)</option>
                                        <option>USD - US Dollar ($)</option>
                                        <option>GBP - British Pound (£)</option>
                                    </select>
                                </div>
                                <Input
                                    type="number"
                                    placeholder="€0.00"
                                    value={toAmount}
                                    readOnly
                                    className="border-0 bg-transparent text-2xl font-bold p-0 h-auto focus-visible:ring-0 placeholder:text-muted-foreground"
                                />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 pt-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-1">
                                    Exchange Rate <Info className="h-3 w-3" />
                                </span>
                                <span className="font-medium text-foreground">1 USD = 0.9200 EUR</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Network Fee</span>
                                <span className="font-medium text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Processing Time</span>
                                <span className="font-medium text-foreground">Instant</span>
                            </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white h-12 text-lg shadow-lg shadow-purple-200 dark:shadow-none">
                            Swap Now
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
