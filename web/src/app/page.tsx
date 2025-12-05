// Button is unused
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, Repeat, History, Wallet, User } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white p-6 pb-12 rounded-b-[2rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Student Wallet</h1>
              <p className="text-xs text-purple-200">Welcome back, Alex</p>
            </div>
          </div>
          <Link href="/student-id">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md hover:bg-white/30 transition-colors cursor-pointer">
              <User className="h-6 w-6 text-white" />
            </div>
          </Link>
        </div>

        <div className="text-center space-y-2">
          <p className="text-purple-200 text-sm">Total Balance</p>
          <h2 className="text-4xl font-bold">$2,450.75</h2>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs border border-green-500/30">
            +2.5% this month
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <div className="px-6 -mt-8">
        <Card className="border-0 shadow-xl bg-card">
          <CardContent className="p-4 flex justify-between items-center">
            <Link href="/send" className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                <ArrowUpRight className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Send</span>
            </Link>
            <Link href="/receive" className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                <ArrowDownLeft className="h-6 w-6 text-teal-600 dark:text-teal-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Receive</span>
            </Link>
            <Link href="/swap" className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                <Repeat className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">Swap</span>
            </Link>
            <Link href="/history" className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                <History className="h-6 w-6 text-orange-600 dark:text-orange-300" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">History</span>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="px-6 mt-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-foreground">Recent Activity</h3>
          <Link href="/history" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            See All
          </Link>
        </div>

        <div className="space-y-3">
          {[
            { name: "Emma Wilson", type: "Received", amount: "+$500.00", date: "Dec 2, 2025", icon: ArrowDownLeft, color: "text-green-600", bg: "bg-green-100 dark:bg-green-900/30" },
            { name: "Michael Chen", type: "Sent", amount: "-$125.50", date: "Dec 1, 2025", icon: ArrowUpRight, color: "text-red-600", bg: "bg-red-100 dark:bg-red-900/30" },
            { name: "EUR Swap", type: "Swap", amount: "$200.00", date: "Nov 30, 2025", icon: Repeat, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900/30" },
          ].map((tx, i) => (
            <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-card">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${tx.bg} flex items-center justify-center`}>
                    <tx.icon className={`h-5 w-5 ${tx.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{tx.name}</p>
                    <p className="text-xs text-muted-foreground">{tx.type} • {tx.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-foreground'}`}>
                  {tx.amount}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
