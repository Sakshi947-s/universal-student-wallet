import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Copy, Share2 } from "lucide-react";
import Link from "next/link";

export default function ReceivePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
                <div className="flex items-center mb-4">
                    <Link href="/" className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                        <ArrowLeft className="h-6 w-6 text-white" />
                    </Link>
                    <h1 className="font-bold text-xl">Receive Money</h1>
                </div>
                <p className="text-purple-200 text-center text-sm">Share your wallet to receive funds</p>
            </header>

            <div className="px-6 -mt-6 space-y-6">
                {/* Profile Card */}
                <Card className="border-0 shadow-xl bg-card overflow-hidden">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-20 w-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 text-2xl font-bold text-purple-600 dark:text-purple-300">
                            A
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Alex Johnson</h2>
                        <p className="text-sm text-muted-foreground">alex.johnson@university.edu</p>
                    </CardContent>
                </Card>

                {/* QR Code Card */}
                <Card className="border-0 shadow-xl bg-card">
                    <CardContent className="p-8 flex flex-col items-center space-y-6">
                        <p className="text-sm font-medium text-muted-foreground">Scan QR Code to Send Money</p>

                        <div className="bg-white p-4 rounded-xl border-2 border-dashed border-purple-200 dark:border-purple-800">
                            {/* Placeholder for QR Code - Using a div to simulate visual */}
                            <div className="h-48 w-48 bg-white flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ExampleWalletAddress&color=7c3aed')] bg-cover bg-center opacity-90"></div>
                            </div>
                        </div>

                        <div className="w-full space-y-2">
                            <p className="text-xs text-center text-muted-foreground">Wallet Address</p>
                            <div className="flex items-center justify-between bg-secondary p-3 rounded-lg border border-input">
                                <code className="text-xs text-muted-foreground truncate mr-2">0x71C...9A23</code>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                            <Share2 className="mr-2 h-4 w-4" /> Share Profile
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
