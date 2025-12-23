import { NextResponse } from "next/server";

// Stub API route for NextAuth session endpoint
// Returns null since authentication is not needed for this portfolio website
// This prevents client-side errors from NextAuth trying to fetch session data
export async function GET() {
  return NextResponse.json(null);
}

