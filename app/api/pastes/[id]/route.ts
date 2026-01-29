import { kv } from "@vercel/kv";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ✅ FIX HERE

  const paste = await kv.get(`paste:${id}`);

  if (!paste) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(paste, { status: 200 });
}
