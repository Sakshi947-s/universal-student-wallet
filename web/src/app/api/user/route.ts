import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                wallet: body.wallet,
                role: "student",
            },
        });
        return NextResponse.json({ success: true, user });
    } catch (_error) {
        return NextResponse.json({ success: false, error: "User creation failed" }, { status: 500 });
    }
}

export async function GET() {
    // Mock fetching the first user for demo
    const user = await prisma.user.findFirst();
    if (!user) {
        return NextResponse.json({ message: "No users found" });
    }
    return NextResponse.json(user);
}
