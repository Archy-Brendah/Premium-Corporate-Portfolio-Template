import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Validate required fields (optional: add zod or similar)
    const { name, company, email, projectDetails, inquiryType } = body;
    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // In production: send email (Resend, SendGrid, etc.) or save to DB
    // For template: simulate success
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
