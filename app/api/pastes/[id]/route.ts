import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const data = await kv.get(`paste:${id}`);

  if (!data) {
    return NextResponse.json(
      { error: "Paste not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ content: data });
}