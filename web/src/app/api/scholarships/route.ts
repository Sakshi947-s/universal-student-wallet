import { NextResponse } from "next/server";

const MOCK_SCHOLARSHIPS = [
    { id: 1, name: "Global Future Leaders", amount: "500 USDC", status: "Available" },
    { id: 2, name: "Solana Dev Grant", amount: "1000 USDC", status: "Applied" },
    { id: 3, name: "University Stipend", amount: "200 USDC", status: "Received" },
];

export async function GET() {
    return NextResponse.json(MOCK_SCHOLARSHIPS);
}
