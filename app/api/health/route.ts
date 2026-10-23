import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json({
    status: "healthy",
    uptime: "active",
    timestamp: new Date().toISOString(),
  });
}
