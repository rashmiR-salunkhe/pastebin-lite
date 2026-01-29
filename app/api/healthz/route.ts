// app/api/healthz/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Healthz error:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
