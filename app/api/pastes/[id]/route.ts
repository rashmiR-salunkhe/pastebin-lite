import { NextRequest } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return new Response("Paste ID missing", { status: 400 });
  }

  const paste = await kv.get(id);

  if (!paste) {
    return new Response("Paste not found", { status: 404 });
  }

  return new Response(JSON.stringify(paste), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
