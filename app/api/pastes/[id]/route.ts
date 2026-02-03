import { kv } from "@vercel/kv";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const content = await kv.get(`paste:${params.id}`);

  if (!content) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json({ content });
}