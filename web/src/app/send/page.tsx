"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, User, DollarSign, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SendPage() {
    const [amount, setAmount] = useState("");

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center mb-4">
                    <Link href="/" className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                    <h1 className="font-bold text-xl">Send Money</h1>
                </div>
                <p className="text-purple-200 text-center text-sm">Transfer funds to another student</p>
            </header>

            <div className="px-6 -mt-6">
                <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-6 space-y-6">

                        {/* Recipient */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Recipient</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="Username or wallet ID"
                                    className="pl-10 h-12 bg-secondary border-input focus-visible:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Amount */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Amount</label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="0.00"
                                    className="pl-10 h-12 bg-secondary border-input focus-visible:ring-purple-500 text-lg font-semibold"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground text-right">Available Balance: $2,450.75</p>
                        </div>

                        {/* Note */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Note (Optional)</label>
                            <textarea
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                                placeholder="Add a message..."
                            />
                        </div>

                        {/* Quick Amount */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Quick Amount</label>
                            <div className="flex gap-2">
                                {["10", "25", "50", "100"].map((val) => (
                                    <Button
                                        key={val}
                                        variant="outline"
                                        className="flex-1 border-input hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 dark:hover:bg-purple-900/20"
                                        onClick={() => setAmount(val)}
                                    >
                                        ${val}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white h-12 text-lg shadow-lg shadow-purple-200 dark:shadow-none">
                            <Send className="mr-2 h-5 w-5" /> Send Money
                        </Button>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
