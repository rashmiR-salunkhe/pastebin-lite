import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const key = `paste:${id}`;

  const data = await kv.get<{
    content: string;
    views: number;
    maxViews: number | null;
  }>(key);

  if (!data) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const nextViews = data.views + 1;

  if (data.maxViews !== null && nextViews > data.maxViews) {
    await kv.del(key);
    return NextResponse.json({ error: "Expired" }, { status: 404 });
  }

  await kv.set(key, { ...data, views: nextViews });

  return NextResponse.json({ content: data.content });
}