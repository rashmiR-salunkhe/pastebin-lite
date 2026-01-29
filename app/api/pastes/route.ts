import { NextRequest, NextResponse } from "next/server";
import { storage, Paste } from "@/lib/storage";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { content, ttl_seconds, max_views } = await req.json();

    const id = randomUUID();
    const now = Date.now();

    const paste: Paste = {
      id,
      content,
      createdAt: new Date().toISOString(),
      views: 0,
      expires_at: ttl_seconds ? now + ttl_seconds * 1000 : undefined,
      max_views,
    };

    await storage.set(`paste:${id}`, paste);

    return NextResponse.json({
      success: true,
      url: `/p/${id}`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
