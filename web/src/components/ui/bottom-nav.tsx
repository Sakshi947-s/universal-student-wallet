"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Send, Repeat, History, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();

    // Hide on login page
    if (pathname === "/login") return null;

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/send", label: "Send", icon: Send },
        { href: "/swap", label: "Swap", icon: Repeat },
        { href: "/history", label: "History", icon: History },
        { href: "/student-id", label: "ID", icon: User },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 pb-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center gap-1 transition-colors",
                                isActive ? "text-purple-600" : "text-gray-400 hover:text-gray-600"
                            )}
                        >
                            <item.icon className={cn("h-6 w-6", isActive && "fill-current")} />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
