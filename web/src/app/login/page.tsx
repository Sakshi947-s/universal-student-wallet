import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Wallet, Globe, Lock, Zap } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-4">
            <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20 text-white shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                            <Wallet className="h-8 w-8 text-white" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">Universal Student Wallet</CardTitle>
                    <CardDescription className="text-gray-300">
                        Seamless payments for students worldwide
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex w-full bg-white/10 p-1 rounded-lg mb-6">
                        <Button variant="ghost" className="w-1/2 bg-purple-600 text-white hover:bg-purple-700 hover:text-white">
                            Login
                        </Button>
                        <Button variant="ghost" className="w-1/2 text-gray-300 hover:text-white hover:bg-white/10">
                            Sign Up
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Email Address</label>
                        <Input
                            type="email"
                            placeholder="student@university.edu"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Password</label>
                        <Input
                            type="password"
                            placeholder="••••••••"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-purple-500"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" className="rounded border-gray-400 bg-transparent text-purple-600 focus:ring-purple-500" />
                            <label htmlFor="remember" className="text-gray-300">Remember me</label>
                        </div>
                        <Link href="#" className="text-purple-300 hover:text-purple-200">
                            Forgot password?
                        </Link>
                    </div>

                    <Link href="/" className="w-full block">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 h-11">
                            Login to Wallet
                        </Button>
                    </Link>
                </CardContent>
                <CardFooter className="grid grid-cols-3 gap-2 pt-2 pb-6">
                    <div className="flex flex-col items-center text-center space-y-1">
                        <Globe className="h-5 w-5 text-teal-400" />
                        <span className="text-[10px] text-gray-300">Global Access</span>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-1">
                        <Lock className="h-5 w-5 text-amber-400" />
                        <span className="text-[10px] text-gray-300">Secure</span>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-1">
                        <Zap className="h-5 w-5 text-purple-400" />
                        <span className="text-[10px] text-gray-300">Instant</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
