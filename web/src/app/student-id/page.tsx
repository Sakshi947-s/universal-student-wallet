"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, GraduationCap, ShieldCheck, Info, QrCode } from "lucide-react";
import Link from "next/link";

export default function StudentIDPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center mb-4">
                    <Link href="/" className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                    <h1 className="font-bold text-xl">Digital Student ID</h1>
                </div>
                <p className="text-purple-200 text-center text-sm">Your official university identification</p>
            </header>

            <div className="px-6 -mt-6 space-y-6">
                {/* ID Card */}
                <div className="relative w-full aspect-[1.586] rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    {/* Holographic Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-50"></div>

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between text-white">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="h-8 w-8 text-purple-300" />
                                <div>
                                    <h3 className="font-bold text-sm tracking-wider uppercase opacity-90">Universal University</h3>
                                    <p className="text-[10px] opacity-70">Student Identification</p>
                                </div>
                            </div>
                            <div className="h-12 w-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                <QrCode className="h-8 w-8 text-white" />
                            </div>
                        </div>

                        <div className="flex gap-4 items-end">
                            <div className="h-24 w-24 rounded-xl bg-gray-200 border-2 border-white/30 overflow-hidden shrink-0">
                                {/* Placeholder for Student Photo */}
                                <div className="h-full w-full bg-purple-200 flex items-center justify-center text-purple-800 font-bold text-3xl">A</div>
                            </div>
                            <div className="space-y-1 mb-1">
                                <div>
                                    <p className="text-[10px] uppercase opacity-60">Student Name</p>
                                    <p className="font-bold text-lg leading-tight">Alex Johnson</p>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <p className="text-[10px] uppercase opacity-60">ID Number</p>
                                        <p className="font-medium text-sm">88291034</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase opacity-60">Valid Thru</p>
                                        <p className="font-medium text-sm">05/2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details Card */}
                <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-3 pb-4 border-b border-border">
                            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                <ShieldCheck className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">Verified Student Status</h3>
                                <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Active
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Department</span>
                                <span className="font-medium text-foreground">Computer Science</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Year</span>
                                <span className="font-medium text-foreground">Junior (3rd Year)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Campus Access</span>
                                <span className="font-medium text-foreground">All Buildings</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-muted-foreground">Library Access</span>
                                <span className="font-medium text-foreground">Full Privileges</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* NFT Info */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                    <CardContent className="p-4 flex gap-3">
                        <Info className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-purple-800 dark:text-purple-200 leading-relaxed">
                            This digital ID is minted as a Soulbound NFT on the Solana blockchain. It cannot be transferred and serves as immutable proof of your student status.
                        </p>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
